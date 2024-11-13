import React, {useState}from "react";

function Form(){
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const handleInputChange = (event) => {
    setName(event.target.value)
  }
  const handleInputSubmit = (event) =>{
    event.preventDefault()
    setDisplayName(name)
  }
  return(
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>ReactJS User Input Project</h1>
      <form onSubmit={handleInputSubmit}>
        <input type="text" placeholder="Enter your Name"
        value={name}
        onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {displayName && <h2>Hello, {displayName}!</h2>}
    </div>
  )
}

export default Form;
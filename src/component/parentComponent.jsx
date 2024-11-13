import React from "react";
import ChildComponent from "./childComponent"

const ParentComponent = () => {
  const message = "Hello from Parent Component"

  return(
    <div>
          <h1>Parent Component</h1>
          <ChildComponent message={message} />
    </div>
  )
}

export default ParentComponent;
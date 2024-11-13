import React, {Component} from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count -  1
    }))
  }
  render(){
    return(
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h2>Counter App</h2>
        <p>Nilai:{this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>    
      </div>
    )
  }
}

export default Counter;
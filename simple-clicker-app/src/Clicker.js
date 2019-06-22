import React from 'react'
import './Clicker.css'

const colorArr = [
  "red", "blue", "green", "orange", "purple", "cyan", "brown", "hotpink", "lightblue"
];


class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      color: "red"
    }
  }
  
  addCount = () => {
    this.setState({count: this.state.count += 1})
  }
  
  minusCount = () => {
    this.setState({count: this.state.count -= 1})
  }
  
  componentDidMount() {
    let colorPos = 0;
    setInterval(() => {
      if (colorArr.length -1 > colorPos) {
        this.setState({ color: colorArr[colorPos]})
        colorPos ++
      }
      else {
        this.setState({ color: colorArr[colorPos]})
        colorPos = 0;
      }
    }, 1000);
  }

  render() {
    const styleObj = {
      color: this.state.color
    };
    
    return (
      <div className="app">
        <div className="header">
          <h1 style={styleObj}>Clicker!</h1>
        </div>
        <div className="clicker">
          <h2>{this.state.count}</h2>
          <button style={{color:"green"}} onClick={this.addCount}>+</button>
          <button style={{color:"red"}}onClick={this.minusCount}>-</button>
        </div>
      </div>
      
    )
  }
}

Clicker.defaultProps = {count: 0}

export default Clicker
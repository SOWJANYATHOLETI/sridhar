import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}
  onIncrease = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }
  onDecrease = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h2 className="semi-heading">
            Speed is <span className="speed">{count}mph</span>
          </h2>
          <p className="description">Min Limit is 0mph,Max Limit is 200mph</p>
          <div>
            <button className="button1" onClick={this.onIncrease}>
              Accelerate
            </button>
            <button className="button2" onClick={this.onDecrease}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  ButtonCount = () => {
    this.setState(CountTimes => {
      console.log(`Button has clicked ${CountTimes.count}`)
      return {count: CountTimes.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been Clicked
          <span className="count"> {count} </span>times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.ButtonCount}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter

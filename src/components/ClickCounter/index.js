import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  onIncrement = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  render() {
    const {counter} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked <span className="count">{counter}</span>
          times
        </h1>
        <p className="para">click the button to increase the count</p>
        <button
          className="btn-primary"
          type="button"
          onClick={this.onIncrement}
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter

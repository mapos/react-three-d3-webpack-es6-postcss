import React, {Component} from 'react'
import Three from './Three'

class App extends Component {
  render () {
    return (
      <div>
        <div className='box'>{this.props.name}</div>
        <Three />
      </div>
    )
  }
  }

export default App

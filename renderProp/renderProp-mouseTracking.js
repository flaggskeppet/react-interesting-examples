import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Instead of using a HOC, we can share code using a
// regular component with a render prop!
/*
   I should clarify at this point that “children as a function” is the exact same concept, 
   just using the children prop instead of render. 
   When I say “render prop” I’m not talking specifically about a prop named render, 
   but rather the concept of having a prop that you use to render something.
*/
class Mouse extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {/* Invoke the render prop */}
        {this.props.render(this.state)} 
      </div>
    )
  }
}

class App extends React.Component{
  render() {
    return (
      <div style={{ height: '600px', border:'solid' }}>
        <Mouse render={({ x, y }) => (
          // The render prop gives us the state we need
          // to render whatever we want here using the current mouseposition.
          // So in the usage of the component all we do is to provide the implementation of the render method
          // that the component will use to render. Hollywood principle style - Don´t call us, we´ll call you!
          <div>The mouse position is ({x}, {y})</div>
        )}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, mountNode)
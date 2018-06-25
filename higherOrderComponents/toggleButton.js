import React from "react";
import { render } from "react-dom";

/*
HOC - could be used as a decorator
This function takes a class and returns it with the 
onToggle function added.

The HOC keeps track of the toggled state
*/
function withToggle(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onToggle = this.onToggle.bind(this); // OR onToggle = () => {...
      this.state = {
        toggled: false
      };
    }
    onToggle = () => {
      this.setState({ toggled: !this.state.toggled });
    }
    render() {
      return (
        <WrappedComponent
          onToggle={this.onToggle}
          toggled={this.state.toggled}
          {...this.props}
        />
      );
    }
  };
}

const Button = ({ toggled, onToggle }) =>
  <button onClick={onToggle}>
    {toggled ? "It's ON! :)" : "It's OFF! :("}
  </button>;

// Wrap the Component in the HOC
const ToggledButton = withToggle(Button);

ReactDOM.render(<ToggledButton />, mountNode);

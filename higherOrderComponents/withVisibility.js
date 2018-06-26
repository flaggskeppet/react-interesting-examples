/*
http://blog.jakoblind.no/real-world-higher-order-components-hocs/
*/

import React from "react";
import { render } from "react-dom";

// HOC so this function takes a Component as arg...
function withHidden(WrappedComponent) { 
	return class extends React.Component {  // ... and returns a class
  	render() {
    	// Use a conditional based in the 'hidden'-prop set on the component
      if(this.props.hidden) return null; 
      return <WrappedComponent {...this.props} /> //  'Props Proxy': Pass through all the props that the HOC receives
    }
  }
}

// Simple function component
const SomeComponent = () => <div>This is some component</div>

// Create a new instance by passing the component to the HOC
const SomeComponentWithHidden = withHidden(SomeComponent)

// Use the 'hidden' prop of the HOC
ReactDOM.render(<SomeComponentWithHidden hidden={true} />, mountNode);

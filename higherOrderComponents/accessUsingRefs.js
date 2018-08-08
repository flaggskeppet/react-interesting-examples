/*
You can access this (the instance of the WrappedComponent) with a ref, but you will need a full initial normal render process of the WrappedComponent for the ref to be calculated. 

That means that you need to return the WrappedComponent element from the HOC render method, let React do it’s reconciliation process and just then you will have a ref to the WrappedComponent instance.

In the following example we explore how to access instance methods and the instance itself of the WrappedComponent via refs.
*/

function refsHOC(WrappedComponent) {
  return class extends React.Component {
    
    // The wrapped component is provided as arg to the method
    thatMethod(wrappedComponentInstance) {
      wrappedComponentInstance.someMethod()
    }
    
    render() {
      // In render, we can grab the wrapped component and provide an instance in a binding to the method.
      /*
      When the WrappedComponent is rendered the ref callback will be executed, and then you will have a 
      reference to the WrappedComponent’s instance. This can be used for reading/adding instance props and
      to call instance methods. */
      const props = { ...this.props, ref: this.thatMethod.bind(this) }
      return <WrappedComponent {...props}/>
    }
  }
}

class SomeComponent extends React.Component {
  
  someMethod(){
  	console.log('Some method called!');
  }
  
  render() {
    return <div>Some component</div>
  }
}

const SomeComponentWithRefsHOC = refsHOC(SomeComponent);

ReactDOM.render(<SomeComponentWithRefsHOC />, mountNode);






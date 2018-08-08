const Foo = ({ children }) => {
  return children('foo'); // Invokes all child functions with the arg 'foo'
};

class App extends React.Component {
	render(){
  	return(<Foo>{(name) => <div>`hello from ${name}`</div>}</Foo>)
  }
}

ReactDOM.render(<App />, mountNode);

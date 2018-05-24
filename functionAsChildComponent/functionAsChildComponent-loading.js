class LoadContent extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        {this.props.children({
          ...this.state,
        })}
      </div>
    );
  }
}

class App extends React.Component {
render() {
    return (
      <div>
        <LoadContent>
          {
            ({ loading }) => <span>{loading ? "loading...": "done"}</span>
          }
        </LoadContent>
      </div>
    )
  }
}


ReactDOM.render(<App />, mountNode);

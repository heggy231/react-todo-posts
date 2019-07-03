import React from 'react';

class App extends React.Component {
  state = { resource: 'posts' };
  render() {
    return (
      <div>
        <div>
          {/* User clicks on posts vs Todos event listener listens to update the state resource object */}
          <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
          <button onClick={() => this.setState({resource: 'todos'})}>Todos</button>
          <button>Todos</button>
        </div>
        {/* posts or todos are render here */}
        {this.state.resource}
      </div>
    );
  }
}

export default App;
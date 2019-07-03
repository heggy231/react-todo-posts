// 1) import hook {useState} function
import React, { useState } from 'react';

// 2) add arrow function
const App = () => {
  // 3) delete state initialization 
  // state = { resource: 'posts' };
  // 4) delete render() method {}

  // 5) add useState
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        {/* 6) replace this.setState to setResource('posts') and do the same for todos */}
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>

      </div>
      {/* 7) delete `this.state.resource` add `resource` */}
      {/* {this.state.resource} */}
      {resource}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>

      </div>
      {/* communicate `prop` `resource` down to `ResourceList` 
            {resource} is string of 'posts' or 'todos' which is component level state
      */}
      <ResourceList resource={resource}/>
    </div>
  );
}

export default App;
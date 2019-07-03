import React, { useState, useEffect }  from 'react';
import axios from 'axios';

// resource => string of `todos` or `posts` that we fetch
const useResources = (resource) => {

};

// destructuring out resource object from props
//  {resource} => string of `todos` or `posts`
const ResourceList = ({ resource }) => {
  // `resources` has initial value of empty array utilizing `useState([])`
  const [resources, setResources] = useState([]);

  // `useEffect()` runs only when `[resource]` array value has changed
  //  once it is a different value `resource` the arrow function will run
  //   `useEffect()` listens for changes
  //   useEffect checks for prevProps and currentProps is different then runs
  useEffect(
    () => {
      // immediately invoke function
      // first pair of parenthesis is function definition
      (async (resource) => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
    
        // axios sets all response inside of `response.data` object
        setResources(response.data);
      })(resource) // second pair of parenthesis is function invocation (calls the function)
    },
    [resource]
  );

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
}

export default ResourceList;
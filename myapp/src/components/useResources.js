import { useState, useEffect } from 'react';
import axios from 'axios';

// resource => string that we fetch
const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(
    () => {
      (async (resource) => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
        setResources(response.data);
      })(resource)
    },
    [resource]
  );

  return resources; // outputs => list of resources
};

export default useResources;
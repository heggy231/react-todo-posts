import React from 'react';
import useResources from './useResources';

// no need to receive prop b/c we want to get a list of users 100% of the time.
const UserList = () => {
  // to use `useResources` we need to pass in users which is the 'endpoint' that I want to fetch
  const users = useResources('users');

  return (
    // remember to set key since it is a list
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
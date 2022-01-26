import React from 'react';
import { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList ';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const getUserInfo = (data) => {
    setAllUsers((prevData) => {
      if (prevData === []) {
        return [data];
      } else {
        return [...prevData, data];
      }
    });
  };

  return (
    <div>
      <AddUser userInfo={getUserInfo} />
      <UserList allUsers={allUsers} />
    </div>
  );
}

export default App;

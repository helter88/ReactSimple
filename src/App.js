import React from 'react';
import { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList ';
import PopUp from './components/PopUp';
import PopUpContent from './components/PopUpContent';

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
      <PopUp>
        <PopUpContent />
      </PopUp>
      <AddUser userInfo={getUserInfo} />
      <UserList allUsers={allUsers} />
    </div>
  );
}

export default App;

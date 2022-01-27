import React from 'react';
import { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList ';
import PopUp from './components/PopUp';
import PopUpContent from './components/PopUpContent';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [inValidForm, setInValidForm] = useState(false);

  const validateForm = (val) => {
    setInValidForm(val);
  };

  const getUserInfo = (data) => {
    setAllUsers((prevData) => {
      if (prevData === []) {
        return [data];
      } else {
        return [...prevData, data];
      }
    });
  };

  const getPopUpInfo = () => {
    setInValidForm(false);
  };

  let displayPopUp;

  if (inValidForm) {
    displayPopUp = (
      <PopUp>
        <PopUpContent popUpInfo={getPopUpInfo} />
      </PopUp>
    );
  }

  return (
    <div>
      {displayPopUp}
      <AddUser userInfo={getUserInfo} formValidation={validateForm} />
      <UserList allUsers={allUsers} />
    </div>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList ';
import PopUp from './components/PopUp';
import PopUpContent from './components/PopUpContent';
import ReactDOM from 'react-dom';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [inValidForm, setInValidForm] = useState(false);
  const [message, setMessage] = useState('');

  const validateForm = (info) => {
    setMessage(info.message);
    setInValidForm(info.status);
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

  const ShowPopUp = (props) => {
    let displayPopUp = <></>;

    if (inValidForm) {
      displayPopUp = (
        <PopUp popUpInfo={getPopUpInfo}>
          <PopUpContent popUpInfo={getPopUpInfo} textToDisplay={message} />
        </PopUp>
      );
    }
    return displayPopUp;
  };

  return (
    <div>
      {ReactDOM.createPortal(
        <ShowPopUp />,
        document.getElementById('pop-up-root')
      )}
      <AddUser userInfo={getUserInfo} formValidation={validateForm} />
      <UserList allUsers={allUsers} />
    </div>
  );
}

export default App;

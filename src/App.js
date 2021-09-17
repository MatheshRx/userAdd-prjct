import React, { useState } from 'react';

import Adduser from './components/AddUsers/Adduser';
import UserList from './components/UserList/UserList';


function App() {
  const [usersData, setUsersData] = useState([]);

  const userDataHandler = (uName, uAge) => {
    setUsersData( prevUserData => [...prevUserData, {name: uName, age: uAge, id: Math.random().toString()}]);
  }
  return (
    <React.Fragment>
      <Adduser onApp={userDataHandler}/>                     
      <UserList users={usersData}/>                     
    </React.Fragment>
  );
}

export default App;

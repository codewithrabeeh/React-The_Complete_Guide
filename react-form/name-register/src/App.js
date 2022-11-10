import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const getUsersData = (data) => {
      setUsersList(prevState => {
        return [data, ...prevState]
      })
  }
  const [usersList, setUsersList] = useState([])

  return (
    <div>
      <AddUser addData={getUsersData} />
      <UsersList users={usersList} />  
    </div>
  );
}

export default App;

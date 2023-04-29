import React,{useState} from 'react';

import './App.css';
import Form from './components/Form/Form';
import NewUser from './components/Users/NewUser';


// const DUMMYUSER = () => [
//   { id: 'e1', username: 'Mary', age: 26 },
//   {id: 'e2', username: 'Dayo', age: 31 },
// ];

function App() {
  const [user, setUser] = useState([]);

  const addNewUserHandler = (newEnteredUser, newEnteredAge) => {
    setUser((prevUser) => {
      return [...prevUser, 
        {name: newEnteredUser, age: newEnteredAge, id: Math.random().toString() },]
    });
  }


  return (
    <div className="App">
      <Form onAddNewUser={addNewUserHandler}/>
      <NewUser users={user}/>
    </div>
  );
}

export default App;

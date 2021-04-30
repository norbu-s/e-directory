import './App.css';
import Table from './components/Table';
import React from "react";
import Search from './components/Search';

function App() {
  const[users, setUsers] = React.useState(
    []
  )
  const[searchText, setSearchText] = React.useState(
    ""
  )
  //API call to get employee details//
  React.useEffect(function () {
    fetch("https://randomuser.me/api?results=10")
    .then(res => {
      return(res.json())
    }).then(users => {
      setUsers(users.results) 
    })
    },[])
    const filteredUsers = users.filter ( (user) => {
        if (user.name.first.toLowerCase().includes(searchText.toLowerCase()))
        return true;
        else return false;
    })
  console.log("return",users)
  return (
    <div className="App">
      <h1>Employees Directory</h1>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <Table users={filteredUsers}/>
    </div>
  );
}


export default App;

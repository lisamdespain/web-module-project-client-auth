import React from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import axios from 'axios';

function App() {
  
  const logout=()=>{
    axios.post("http://localhost:9000/api/logout", {token: localStorage.getItem=("token")})
    .then(res =>{
      localStorage.removeItem("token");
      // another way to redirect
      window.location.href = "/login";
    })
    .catch(err => {console.log(err)})
  }
  
  return (
    <Router>
      
    <div className="App">
    <header className="App-header">
      <h1>Friends Database</h1>
    
    <button><Link to="/login">LOG IN</Link>
    </button>
    <button>
    <Link to="/friendslist">FRIENDS LIST</Link>
    </button>
    <button>
    <Link to="/addfriend">ADD FRIEND</Link></button>
    <button onClick={logout}>
    <Link to="/logout">LOG OUT</Link></button>
    </header>
    

      <Route path="/login" component={Login}/>
      
      <Route path="/friendslist" component={FriendsList}/>
      <Route path="/add" component={AddFriend}/>
      <Route exact path="/" component={Login}/>
    </div>
    </Router>
    
  );
}

export default App;

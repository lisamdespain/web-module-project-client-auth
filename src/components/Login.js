import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {

const initialCredentials = {
        username: '',
        password: ''
      }

const [ credentials, setCredentials ] = useState(initialCredentials);
const {push} = useHistory();

const submitCredentials= (e) =>{
    e.preventDefault();
    
    axios.post('http://localhost:9000/api/login', credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token)
      push("./friendslist")
    })
    .catch(err => console.log(err))
}

const handleChange = (e) =>{
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value})
      };

    return (
    
            <div>
            <div className="login-form">
                <h1>LOGIN</h1>
              <form onSubmit={submitCredentials}>
                  <div>
                <label>USERNAME</label>
                </div>
                <div>
                <input
                  type="text"
                  name="username"
                //   value={credentials.username}
                  onChange={handleChange}
                />
                </div>
                <div>
                <label>PASSWORD</label>
                </div>
                <div>
                <input
                  type="password"
                  name="password"
                //   value={credentials.password}
                  onChange={handleChange}
                /></div>
                <button>SUBMIT</button>
              </form>
              </div>
            </div>
          );
    
}
export default Login;
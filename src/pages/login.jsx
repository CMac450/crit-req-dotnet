import { useState } from 'react'
import '../App.css'
import axios from "axios";
//import axios

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e, username, password) => { ///do i need to pass in the state here or should i just ref it below?
    e.preventDefault();

    const data = {
      //should be identical to property in vscode
      Username: username,
      Password: password
    }

    const url = "https://localhost:44385/api/Test/Login";
    axios.post(url, data).then((result) => {
      console.log(result.data);
      if(result.data == "User exists in database.") {
        window.location.href="/dashboard"
      }
      //window.location.href="/dashboard"
    })
    .catch((error) => {
      alert(error);
    })
  }

  return (
    <>
      <a href='/' className='back-btn'>Back</a>
      <h1>Login</h1>
      <main>
        <form>
          <label htmlFor='username'>Username:</label>
          <input type='text' id="username" onChange={(e) => { setUsername(e.target.value) }}></input>

          <label htmlFor='password'>Password:</label>
          <input type='text' id="password" onChange={(e) => { setPassword(e.target.value) }}></input>
          <button onClick={(e) => { handleLogin(e, username, password); }}>Log in</button>
        </form>
      </main>
    </>
  )
}

export default Login

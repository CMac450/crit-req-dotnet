import { useState } from 'react'
import '../App.css'
import axios from "axios";

function Signup() {
  const [fn, setFN] = useState("");
  const [ln, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e, fn, ln, email, user, pwd) => { ///do i need to pass in the state here or should i just ref it below?
    //dt = new Date();
    e.preventDefault();
    const data = {
      //should be identical to property in vscode
      FirstName: fn,
      LastName: ln,
      Email: email,
      Username: user,
      IsActive: 1,
      Password: pwd,
   
    }

    const url = "https://localhost:44385/api/Test/Signup";
    axios.post(url, data).then((result) => {
      alert(result.data);
    }).catch((error) => {
      alert(error);
    })
  }

  return (
    <>
      <a href='/' className='back-btn'>Back</a>
      <h1>Signup</h1>

      <main>
        <form>
          <label htmlFor='firstname'>First name:</label>
          <input type='text' id="firstname" onChange={(e) => { setFN(e.target.value) }}></input>

          <label htmlFor='lastname'>Last name:</label>
          <input type='text' id="lastname" onChange={(e) => { setLN(e.target.value) }}></input>

          <label htmlFor='email'>Email:</label>
          <input type='text' id="email" onChange={(e) => { setEmail(e.target.value) }}></input>

          <label htmlFor='username'>Username:</label>
          <input type='text' id="username" onChange={(e) => { setUsername(e.target.value) }}></input>

          <label htmlFor='password'>Password:</label>
          <input type='text' id="password" onChange={(e) => { setPassword(e.target.value) }}></input>
          <button onClick={(e) => { handleSignup(e, fn, ln, email, username, password) }}>Sign up</button>
        </form>
      </main>

    </>
  )
}

export default Signup

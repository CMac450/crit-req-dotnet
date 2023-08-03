import { useState } from 'react'
import '../App.css'

function Dashboard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

//   const handleLogin = (e, username, password) => { ///do i need to pass in the state here or should i just ref it below?
//     e.preventDefault();

//     const data = {
//       //should be identical to property in vscode
//       Username: username,
//       Password: password
//     }

//     const url = "https://localhost:44385/api/Test/Login";
//     axios.post(url, data).then((result) => {
//       alert(result.data);
//     }).catch((error) => {
//       alert(error);
//     })
//   }

  return (
    <>
      <a href='/' className='back-btn'>Back</a>
      <h1>This is the dashboard</h1>
      <main>
        
      </main>
    </>
  )
}

export default Dashboard

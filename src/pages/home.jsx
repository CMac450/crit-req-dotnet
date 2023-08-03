import { useState } from 'react'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>This is the home page</h1>
        <a href="/login">Login</a>
        <br />
        <br />
        <a href="/signup">Signup</a>
    </>
  )
}

export default Home

import { useState } from 'react'
import './App.css'

function Navigation() {

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/signup">Signup</a>
                        </li>
                        <li>
                            <a href='/login'>Login</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigation
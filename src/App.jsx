import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/Dashboard'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        </Routes>
      </main>
    </>
  )
}

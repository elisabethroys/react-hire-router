import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'

import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {

  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  const api_url = 'https://randomuser.me/api/?results=50'

  const handleHire = (person) => {
    if (!hiredPeople.find(p => p.login.uuid === person.login.uuid)) {
      setHiredPeople([...hiredPeople, person])
    }
  }
  
  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(api_url)
      const data = await response.json()

      const resultWithWage = data.results.map(person => ({
        ...person,
        wage: Math.floor(Math.random() * 90) + 10, // Random wage between £10 and £100
      }))

      setPeople(resultWithWage)
    }

    fetchPeople();
  }, []);

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
          <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
          <Route path="/view/:id" element={< PersonProfile people={people} onHire={handleHire}/>} />
        </Routes>
      </main>
    </>
  )
}

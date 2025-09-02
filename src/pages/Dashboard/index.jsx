import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props

  const api_url = 'https://randomuser.me/api/?results=50'
  const [people, setPeople] = useState([])

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
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard

Dashboard.propTypes = {
  hiredPeople: PeopleList.propTypes.people
}

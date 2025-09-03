import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import HireForm from './components/HireForm'

function PersonProfile({people, hiredPeople, onHire}) {
  const { id } = useParams()
  const [person, setPerson] = useState(null)

  
  useEffect(() => {
    const originalPerson = people.find(p => p.login.uuid === id)
    const hiredPerson = hiredPeople.find(p => p.login.uuid === id)
    setPerson(hiredPerson || originalPerson)
  }, [id, people, hiredPeople])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} onHire={onHire}/>
    </article>
  )
}

export default PersonProfile

PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  onHire: PropTypes.func.isRequired,
}

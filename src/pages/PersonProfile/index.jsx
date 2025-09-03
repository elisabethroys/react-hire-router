import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import HireForm from './components/HireForm'

function PersonProfile({people}) {
  const { id } = useParams()
  const [person, setPerson] = useState(null)
  
  useEffect(() => {
    const clickedPerson = people.find(person => person.login.uuid === id)
    setPerson(clickedPerson)
  }, [id, people])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile

PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
}

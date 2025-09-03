import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function PeopleListItem( {person, listType}) {

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.login.uuid}`}>
          {listType === "hired" ? "Edit Profile" : "View Profile"}
      </Link>
    </li>
  )
}

export default PeopleListItem

PeopleListItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    wage: PropTypes.number,
    login: PropTypes.shape({
      uuid: PropTypes.string,
    }).isRequired,
  }).isRequired,
  listType: PropTypes.string,
}

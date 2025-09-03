import PropTypes from 'prop-types'
import PeopleListItem from './PeopleListItem'

function PeopleList({ people, listType }) {

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} listType={listType} />
      ))}
    </ul>
  )
}

export default PeopleList

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
  listType: PropTypes.string,
}

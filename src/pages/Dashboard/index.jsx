import PropTypes from 'prop-types'
import PeopleList from './components/PeopleList'

function Dashboard({ people, hiredPeople }) {

  const hired = 'hired'
  const notHired = 'not-hired'

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} listType={notHired} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} listType={hired}/>
      </section>
    </main>
  )
}

export default Dashboard

Dashboard.propTypes = {
  people: PropTypes.array.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  listType: PropTypes.string,
}

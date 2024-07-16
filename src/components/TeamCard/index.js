// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamItem} = props
  const {name, id, teamImageUrl} = teamItem

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={`${name}`} />
        <div>
          <p>{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard

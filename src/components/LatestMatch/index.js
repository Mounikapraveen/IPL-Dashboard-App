// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    date,
    venue,
    result,
    umpires,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = latestDetails
  return (
    <div>
      <h1>Latest Matches</h1>
      <div>
        <div>
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <hr />
        <div>
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>
          <h1>Man Of The Match</h1>
          <p>{manOfTheMatch}</p>
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch

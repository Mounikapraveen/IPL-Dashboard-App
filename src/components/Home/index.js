// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isTrue: true,
    teamList: [],
  }

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    console.log(data)
    const newList = teams.map(eachValue => ({
      name: eachValue.name,
      id: eachValue.id,
      teamImageUrl: eachValue.team_image_url,
    }))
    this.setState({teamList: newList, isTrue: false})
  }

  render() {
    const {teamList, isTrue} = this.state
    return (
      <>
        <div>
          {isTrue && (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          )}
          {!isTrue && (
            <>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
                <h1>IPL Dashboard</h1>
              </div>
              <ul>
                {teamList.map(eachValue => (
                  <TeamCard key={eachValue.id} teamItem={eachValue} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}

export default Home

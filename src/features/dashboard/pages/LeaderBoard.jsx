import { useState, useEffect, useContext, useCallback } from "react"
import axios from "axios"
import { Context } from "../../../app/AppContext"
import styled from "styled-components"
import CircularLoader from "../../../components/CircularLoader"

const BASE_URL = process.env.REACT_APP_BASE_API_URL

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])
  const { token } = useContext(Context)

  const getData = useCallback(async () => {
    try {
      const response = await axios(`${BASE_URL}/leaderboard/`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      setLeaderboardData(response.data)
    } catch (error) {
      console.log(error.response.data);
    }

  }, [token]) 
  
  useEffect(() => {
    getData()
  }, [getData])

  return (
    <Wrapper>
      <div className="capitalize section-header">
        <h1 className="section-title">Leaderboard</h1>
        <p className="section-intro">view the leaderboard history</p>
      </div>
      {
        leaderboardData.length > 0 ?
      <div role={'table'} className="leaderboard">
        <div className="board-item">
          <p>&nbsp;</p>
          <p>name</p>
          <p className="score-value">total answered</p>
          <p>reward</p>
        </div>
        {
          leaderboardData.map((item, index) => {
            return (
              <div role={'row'} className="board-item" key={index}>
                <p>{index + 1}</p>
                <p>{item.name}</p>
                <p className="score-value">{item.score}</p>
                <p className="reward">{item.total_points}pts</p>
              </div>
            )
          })
        }
      </div> :
      <div className="loader">
        <CircularLoader />
      </div>
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 1rem 2rem;
.section-intro {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.49);
  font-size: 18px;
  margin-top: .5rem;
}
.leaderboard {
  margin-top: 1.5rem;
}
.board-item {
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.62);
  padding-block: 1.2rem;
  text-transform: capitalize;
  p {
    font-weight: bold;
  }
}
.board-item:last-child {
  border: none;
}
.reward {
  text-transform: none;
}
.score-value {
  text-align: center;
}

@media (min-width: 576px) {
  .board-item {
    grid-template-columns: 1fr 5fr 3fr 1fr;
}
@media (min-width: 992px) {
  padding-block: 2rem;

}
}
`

export default LeaderBoard

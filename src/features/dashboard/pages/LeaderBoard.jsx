import { useState, useEffect, useContext, useCallback } from "react"
import axios from "axios"
import { Context } from "../../../app/AppContext"
import styled from "styled-components"

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])
  const { token } = useContext(Context)

  const getData = useCallback(async () => {
    try {
      const response = await axios('http://127.0.0.1:8000/leaderboard/', {
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
      <h1>LeaderBoard</h1>
      <div>
        {
          leaderboardData.map((item, index) => {
            return (
              <div className="board-item" key={index}>
                <p>{item.name}</p>
                <p>{item.challenge_points}</p>
                <p>{item.course_access_points}</p>
                <p>{item.total_points}</p>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.board-item {
  display: grid;
  grid-template-columns: 7fr 1fr 1fr 1fr;
  text-transform: capitalize;
}
`

export default LeaderBoard

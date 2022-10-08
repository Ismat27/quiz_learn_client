import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Context } from "../../../app/AppContext"

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])
  const { token } = useContext(Context)
  const getData = async () => {
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
  }

  useEffect(() => {
   getData()
  }, [])

  return (
    <section>
      <h1>LeaderBoard</h1>
      <div>
        {
          leaderboardData.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
                <p>{item.challenge_points}</p>
                <p>{item.course_access_points}</p>
                <p>{item.total_points}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default LeaderBoard

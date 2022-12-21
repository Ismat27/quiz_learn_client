import { useRef, useState } from "react"
import styled from "styled-components"
import { useGlobalContext } from "../../../app/AppContext"
import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_API_URL

const Profile = () => {

  const {logoutFunction, userDetails, updateUserDetails} = useGlobalContext()

  const usernameRef = useRef(null)
  const [username, setUsername] = useState(userDetails.username)
  const [email, setEmail] = useState(userDetails.email)
  const emailRef = useRef(null)

  function submitForm(event) {
    axios.put(`${BASE_URL}/users/${userDetails.id}/`, {username, email})
    .then(response => {
      const { data }= response
      console.log(data);
      updateUserDetails(data)
      setEmail("")
      setUsername("")
    })
    .catch((error) => {
      console.log(error);
    })
    event.preventDefault()
  }


  return (
    <Wrapper>
      <div className="capitalize section-header">
        <h1 className="section-title">
          settings
        </h1>
        <p className="section-info">
          manage all your settings  in here.
        </p>
      </div>
      <img alt={userDetails.username} src="https://via.placeholder.com/150" />
      <form onSubmit={submitForm}>
        <div className="form-field">
          <label htmlFor="username">username</label>
          <div className="input-box">
            <input
              name="username"
              id="username"
              type={'text'}
              ref={usernameRef}
              value={username}
              onChange={event => setUsername(event.target.value)} 
            />
            <span 
              className="capitalize focus" 
              role={'button'}
              onClick={() => usernameRef.current.focus()}
            >
              edit
            </span>
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="email">your email</label>
          <div className="input-box">
            <input 
              name="email"
              id="email"
              type={'email'}
              ref={emailRef}
              value={email}
              onChange={event => setEmail(event.target.value)} 
            />
            <span 
              className="capitalize focus" 
              role={'button'}
              onClick={() => emailRef.current.focus()}
            >
              edit
            </span>
          </div>
        </div>
        <div className="btns-box">
          <button type="submit" className="btn action-btn2">save</button>
          <button onClick={logoutFunction} type="button" className="btn action-btn2">log out</button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 2rem 5rem;
max-width: 600px;
.section-header {
  margin-bottom: 3rem;
}
img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 3rem;
}
.input-box {
  margin-bottom: 2rem;
  margin-top: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
label {
  font-weight: 600;
}
input {
  background: rgba(217, 217, 217, 0.42);
  border-radius: 10px;
  outline: none;
  border: none;
  padding: .8rem .4rem;
}
.focus {
  color: var(--bg-blue);
  cursor: pointer;
  font-weight: 600;
}
.btns-box {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
`

export default Profile

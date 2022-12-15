import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../../app/AppContext'

const Support = () => {
    const { userDetails } = useGlobalContext()
    const [message, setMessage] = useState('')

    function submit(event) {
        event.preventDefault()
    }


  return (
    <Wrapper>
        <div className='capitalize section-header'>
            <h1 className='section-title'>
                get supports
            </h1>
            <p className='section-info'>
                contact us with your message. our team will get back to you soon.
            </p>
        </div>
        <form className='contact-form' onSubmit={submit}>
            <div className='form-field'>
                <label htmlFor='username'>username</label>
                <input
                    readOnly 
                    id='username'
                    name='username'
                    value={userDetails.username}

                />
            </div>
            <div className='form-field'>
                <label htmlFor='email'>your email</label>
                <input
                    readOnly 
                    id='email'
                    name='email'
                    value={userDetails.email}

                />
            </div>
            <div className='form-field'>
                <label htmlFor='message'>type your message here</label>
                <textarea 
                    id='message'
                    name='message'
                    rows={15}
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                />
            </div>
            <button className='btn action-btn2'>submit</button>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 2rem 5rem;
max-width: 500px;
.section-header {
    max-width: 400px;
    margin-bottom: 2rem;
}
.form-field {
    margin-bottom: 2rem;
}
label {
    font-weigth: 700;
}
input, textarea {
    margin-top: .5rem;
    background: rgba(217, 217, 217, 0.42);
    border-radius: 10px;
    outline: none;
    border: none;
    padding: .8rem .4rem;
}
`

export default Support
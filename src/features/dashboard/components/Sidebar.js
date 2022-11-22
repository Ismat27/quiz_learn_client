import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
  return (
    <Wrapper>
        <div className='sidebar-header'></div>
        <nav className='sidebar-nav'>
            <ul className='sidebar-items'>

            </ul>
        </nav>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
`

export default Sidebar
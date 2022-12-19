import React from 'react'
import styled from 'styled-components'
import {  CircularProgress } from '@mui/material';

const CircularLoader = () => {
  return (
    <Wrapper>
        <CircularProgress />
    </Wrapper>
  )
}

const Wrapper = styled.div`
text-align: center;
padding-block: 2rem;
`

export default CircularLoader
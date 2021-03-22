import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    margin: 20vh;
    &::after {
        content: " ";
        display: block;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border: 8px solid #ccdbf7;
        border-color: #0737bf transparent #0737bf transparent;
        animation: ${rotate} 1.2s linear infinite;
    }
`

const Loader = () => {
    return (
        <Loading/>
    )
}
export default Loader
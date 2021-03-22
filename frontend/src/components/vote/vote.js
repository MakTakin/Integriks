import React from 'react'
import styled from 'styled-components'
import Answers from './answers/answers'

const Question = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`
const Voted = styled.h1`
    text-align: center;
`

const Vote = (props) => {

    return (
        <>
            {!props.user.voted ?
            <>
                <Question>Ваша должность в компании?</Question>
                <Answers
                    setLoading={props.setLoading}
                    setUser={props.setUser}
                    user={props.user}
                />
            </> :
            <Voted>Cпасибо за ваш ответ!</Voted>
            }
        </>
    )
}
export default Vote
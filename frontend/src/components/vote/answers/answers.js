import React, { useState } from 'react'
import styled from 'styled-components'
import { fetchAnswer } from '../../../api/answer';
import { SERVER_URL } from '../../../settings/constants';
import { FormButton } from '../../../ui/buttons';
import { Input, Label, OtherTextArea } from '../../../ui/inputs';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const InputWrapper = styled.div``

const answers = [
    {
        id: 1,
        title: 'frontend',
        text: 'Frontend-разработчик',
    },
    {
        id:2,
        title: 'backend',
        text: 'Backend-разработчик',
    },
    {
        id:3,
        title: 'other',
        text: 'Что-то другое',
    }
]

const Answers = ({ user, setUser, setLoading }) => {
      const [selectAnswer, setSelectAnswer] = useState({
        user: user.login,
        answer: '',
        textArea: false,
        text: ''
    })

    const answerList = answers.map( answer => {
        return(
            <InputWrapper>
                <Input
                    type='radio'
                    name='answer'
                    key={answer.id}
                    id={answer.id}
                    value={answer.text}
                    onChange={(e) => chooseAnswer(e)}
                />
                <Label htmlFor={answer.id}> {answer.text}</Label>
            </InputWrapper>
        )
    })

    const chooseAnswer = (e) => {
        const answer = {...selectAnswer}
        switch (e.target.id) {
            case '3':
                answer.textArea = true
                break;
            default:
                answer.textArea = false
                answer.text = ''
        }
        answer[e.target.name] = e.target.value
        setSelectAnswer(answer)
    }

    const submitAnswer = async (e) =>  {
        e.preventDefault()
        try {
            setLoading(true)
            await fetchAnswer(`${SERVER_URL}/vote/answer`, selectAnswer, setLoading)
            setSelectAnswer({...selectAnswer, text: ''})
            setUser({...user, voted: true})
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <Form onSubmit={(e) => submitAnswer(e)}>
            {answerList}
            <OtherTextArea
                name='text'
                id='3'
                value={selectAnswer.text}
                other={selectAnswer.textArea}
                onChange={(e) => chooseAnswer(e)}
            />
            <FormButton type='submit'>Отправить</FormButton>
        </Form>
    )
}
export default Answers
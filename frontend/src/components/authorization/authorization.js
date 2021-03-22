import React from 'react'
import styled from 'styled-components'
import { FormInput } from '../../ui/inputs';
import { LoginButton } from '../../ui/buttons';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
    margin: 0 auto;
    padding: 20px;
    background: #e0e0e0;
    border-radius: 5px;
`

const FormHeader = styled.h1`
    align-self: center;
    margin-bottom: 24px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const Error = styled.div`
    color: red;
    align-self: center;
    margin-bottom: 24px;
`

const Authorization = ({user, onLogin, onAuth}) => {
    return (
        <FormContainer>
            <FormHeader>Вход</FormHeader>
            { user.error ?
                <Error>
                    {user.error}
                </Error> :
                null
            }
            <Form onSubmit={(e) => onAuth(e)}>
                <FormInput
                    value={user.login}
                    name='login'
                    error={user.error}
                    placeholder='Логин'
                    onChange={(e) => onLogin(e)}
                />
                <FormInput
                    type="password"
                    value={user.password}
                    name='password'
                    error={user.error}
                    placeholder='Пароль'
                    onChange={(e) => onLogin(e)}
                />
                <LoginButton type='submit'>Войти</LoginButton>
            </Form>
        </FormContainer>
    )
}
export default Authorization
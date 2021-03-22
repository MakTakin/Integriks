import React, { useState } from 'react';
import styled from 'styled-components'
import Vote from './components/vote/vote';
import Authorization from './components/authorization/authorization';
import Loader from './ui/loader';
import { errorText } from './settings/constants';

const Container = styled.div`
    max-width: 1200px;
    height: 100vh;
    padding: 20px;
    background: #f9f9f9;
    margin: 0 auto;
`

function App() {
    const [user, setUser] = useState({
        login: '',
        password: '',
        error: '',
        voted: false,
        auth: false
    })
    const [loading, setLoading] = useState(false)

    const onValidation = (user) => {
        let isValid = true
        isValid = user.login.trim() !== '' && user.login.length < 20 && isValid
        isValid = user.password.length >= 4 && isValid
        return isValid
    }

    const onLogin = (e) => {
        const changeUser = {...user}
        changeUser[e.target.name] = e.target.value
        setUser(changeUser)
    }

    const onAuth = (e) => {
        e.preventDefault()
        const validation = onValidation(user)
        validation ? setUser({...user, error: '', auth: true}) :
                     setUser({...user, error: errorText})
    }
    return (
    <Container>
        { loading ?
            <Loader/> :
            <>
            { user.auth ?
                <Vote
                    setLoading={setLoading}
                    user={user}
                    setUser={setUser}
                /> :
                <Authorization
                    user={user}
                    onLogin={onLogin}
                    onAuth={onAuth}
                />
            }
            </>
        }
    </Container>
    )
}

export default App;

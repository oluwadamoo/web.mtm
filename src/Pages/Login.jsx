import React, { useRef, useContext } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useHistory } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { loginCall } from '../apiCalls'
import { CircularProgress } from '@material-ui/core'

const Container = styled.div`
width: 100vw;
height: 100vh;
background:
linear-gradient(rgba(255,255,255,0.5),
rgba(255, 255, 255, 0.5))
url("http://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto-compress&cs=tinysrgb&dpr=2&h=650&w=940")
center;

background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;

${mobile({ width: "75%" })}
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`

const Link = styled.a`
font-size: 12px;
margin: 5px 0px;
text-decoration:underline;
cursor:pointer;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`



const Login = () => {
    const username = useRef()
    const password = useRef()
    const history = useHistory()
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        loginCall({
            username: username.current.value,
            password: password.current.value
        }, dispatch)

        history.goBack()
    }
    return (
        <Container>

            <Wrapper>

                <Title>SIGN IN</Title>
                <Form onSubmit={handleLogin}>

                    <Input placeholder="username" ref={username} required />

                    <Input placeholder="password" ref={password} type="password" />

                    <Button type="submit">{isFetching ? <CircularProgress color="inherit" size="20px" /> : "LOGIN"}</Button>

                    <Link>DO YOU NOT REMEMBER YOUR PASSWORD?</Link>
                    <Link onClick={() => history.push('/register')}>{isFetching ? <CircularProgress color="inherit" size="20px" /> : "CREATE A NEW ACCOUNT"}</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login

import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url("https://img.freepik.com/free-photo/abstract-beige-paint-texture-design-space_53876-105861.jpg?w=1380&t=st=1662365455~exp=1662366055~hmac=699ef7f3f400f0efeda296be6f8ce52c42d4fff23699e98d2de1a2f096785357");
  background-size: cover;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({
    width: '75%'
  })}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  justify-content: center;
  margin-bottom: 20px;
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  ${mobile({
    fontSize: "10px"
})}
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="text" placeholder="Username"/>
          <Input type="password" placeholder="Password"/>
          <Button>LOGIN</Button>
          <LinkContainer>
            <Link>FORGOT YOUR PASSWORD ?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
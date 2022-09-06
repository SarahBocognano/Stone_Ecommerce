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
  width: 40%;
  background-color: white;
  ${mobile({
    width: '75%'
})}
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  justify-content: center;
  ${mobile({
    width: '100%'
})}
`


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type="text" placeholder="Name"/>
          <Input type="text" placeholder="Last Name"/>
          <Input type="text" placeholder="Username"/>
          <Input type="text" placeholder="Email"/>
          <Input type="password" placeholder="Password"/>
          <Input type="password" placeholder="Confirm Password"/>
          <Agreement>
            By creating an account, I consent to processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"

const Container = styled.div`
  flex: 1;
  margin: 15px 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "50vh",
  })}
`

const Info = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  color: black;
  margin: 20px;
`

const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
`

function CategoryItem({item}) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
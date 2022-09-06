import React from 'react'
import styled from 'styled-components'
import AnnouncementBanner from '../components/AnnouncementBanner'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  ${mobile({
    padding: "10px",
    flexDirection: "column",
})}
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: "40vh"
})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  align-items: center;
  ${mobile({
    padding: "10px",
})}
`

const Title = styled.h1`
  font-weight: 200;
`

const Description = styled.p`
  margin: 20px 0;
`

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
`

const AddContainer = styled.div`
  display: flex;
  width: 50%
  align-items: center;
  margin-top: 45px;
  ${mobile({
    width: "100%",
    justifyContent: "center"
})}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`
const Button = styled.button`
  margin-left: 48px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
      <AnnouncementBanner />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={require('../assets/amazonite_bague.jpg')}/>
        </ImgContainer>
        <InfoContainer>
          <Title>Bague Amazonite</Title>
          <Description>Lorem ipsum dolor sit amet, cosectuetur adipiscing elit. Donec venenatis, dolor in finibus malesuada,
            lectus impsum porta nun, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            condimemtum ac, volutpat ornare.
            Lorem ipsum dolor sit amet, cosectuetur adipiscing elit. Donec venenatis, dolor in finibus malesuada,
            lectus impsum porta nun, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            condimemtum ac, volutpat ornare.
            Lorem ipsum dolor sit amet, cosectuetur adipiscing elit. Donec venenatis, dolor in finibus malesuada,
            lectus impsum porta nun, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            condimemtum ac, volutpat ornare.
          </Description>
          <Price>$ 20</Price>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
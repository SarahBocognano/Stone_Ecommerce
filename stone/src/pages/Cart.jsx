import React from 'react'
import styled from 'styled-components'
import AnnouncementBanner from '../components/AnnouncementBanner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
})}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
})}
`

const Info = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  ${mobile({
    flexDirection: "column",
})}
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;  
  ${mobile({
    flexDirection: "column",
})}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
    flexDirection: "column",
})}
`
const Image = styled.img`
  display: flex;
  width: 300px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductDesc = styled.span``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: "column",
})}
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px"
})}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({
    marginBottom: "20px"
})}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({
    flexDirection: "column",
})}
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

function Cart() {
  return (
    <Container>
      <Navbar />
      <AnnouncementBanner />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={require('../assets/amazonite_bague.jpg')}/>
                <Details>
                  <ProductName><b>Product: </b>AMAZONITE BAGUE</ProductName>
                  <ProductId><b>ID: </b>98754133141</ProductId>
                  <ProductDesc><b>Description: </b>L'Amazonite est une piere blablabla lorem ipsum Lorem ipsum dolor sit amet, cosectuetur adipiscing elit. Donec venenatis, dolor in finibus malesuada,
                    lectus impsum porta nun, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    condimemtum ac, volutpat ornare.
                    Lorem ipsum dolor sit amet, cosectuetur adipiscing elit. Donec venenatis, dolor in finibus malesuada,
                    lectus im
                  </ProductDesc>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 58</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={require('../assets/amazonite_bague.jpg')}/>
                <Details>
                  <ProductName><b>Product: </b>AMAZONITE BAGUE</ProductName>
                  <ProductId><b>ID: </b>98754133141</ProductId>
                  <ProductDesc><b>Description: </b>L'Amazonite est une piere blablabla lorem ipsum Lorem ipsum dolor sit amet, cosectuetur adipiscing elit. Donec venenatis, dolor in finibus malesuada,
                    lectus impsum porta nun, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    condimemtum ac, volutpat ornare.
                    Lorem ipsum dolor sit amet, cosectuetur adipiscing elit. Donec venenatis, dolor in finibus malesuada,
                    lectus im
                  </ProductDesc>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 58</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 116</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 116</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
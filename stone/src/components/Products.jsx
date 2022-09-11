import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({
    width: "100%",
    padding: "0",
})}
`

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
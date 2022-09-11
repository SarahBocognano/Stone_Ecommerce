import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import AnnouncementBanner from '../components/AnnouncementBanner'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    width: "90%",
    justifyContent: "center",
})}
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "10px",
    display: "flex",
    flexDirection: "column",
})}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 10px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <AnnouncementBanner />
      <Navbar />
      <Title>Pierres et Bijoux</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected style={{fontWeight: '600', textTransform: 'uppercase'}}>
              Pierres
            </Option>
            <Option>Pierres Roulées</Option>
            <Option>Pierres Percées</Option>
            <Option>Pointes</Option>
            <Option>Géodes</Option>
            <Option>Collection</Option>
            <Option disabled selected style={{fontWeight: '600', textTransform: 'uppercase'}}>
              Bijoux
            </Option>
            <Option>Bracelet</Option>
            <Option>Bagues</Option>
            <Option>Colliers</Option>
            <Option>Sautoir</Option>
            <Option disabled selected style={{fontWeight: '600', textTransform: 'uppercase'}}>
              Livres et Tarots
            </Option>
            <Option>Tarots</Option>
            <Option>Oracles</Option>
            <Option>Livres Lithothérapie</Option>
            <Option>Livres Développement Personnel</Option>
            <Option disabled selected style={{fontWeight: '600', textTransform: 'uppercase'}}>
              Fumigation
            </Option>
            <Option>Herbes</Option>
            <Option>Encens</Option>
            <Option>Palo Santo</Option>
            <Option>Kit de Fumigation</Option>
            <Option disabled selected style={{fontWeight: '600', textTransform: 'uppercase'}}>
              Accessoires
            </Option>
            <Option>Couvertures</Option>
            <Option>Cloches</Option>
            <Option>Soin du corps</Option>
            <Option>Coussins</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Nouveauté</Option>
            <Option>Prix</Option>
            <Option>Souvent acheté</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
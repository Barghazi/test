import React from 'react';
import styled from 'styled-components';


const Navbar = styled.nav`
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  box-shadow: 0 4px 2px -2px gray;
`;

const NavTitle = styled.h1`
  font-size: 1.8em;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    color: #007bff;
  }
`;

const Select = styled.select`
  padding: 5px;
  font-size: 1.1em;
  background-color: white;
  color: black;
  border: 1px solid #555;
`;


const MainContainer = styled.div`
  background-color: black;
  color: white;
  padding: 50px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;


const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  // Permet aux cartes de se répartir dans une nouvelle ligne si l'espace est insuffisant
  padding: 50px 10px;
  gap: 20px;
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;  // Modifie l'ordre des éléments pour être vertical
  background-color: white;
  width: 23%;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;


const TopPart = styled.div`
  background-color: rgb(211, 211, 211);  // Gris clair
  height: 50%;  // La moitié supérieure de la carte
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: black;
`;


const BottomPart = styled.div`
  height: 50%;  // La moitié inférieure de la carte
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;


const CardTitle = styled.h3`
  font-size: 1.3em;
  color: black;
`;

const Price = styled.p`
  font-size: 1.1em;
  margin: 10px 0;
  color: green;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

function StyledComponentExample() {
  return (
    <>
      
      <Navbar>
        <NavTitle>ShopInStyle</NavTitle>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Shop</NavLink>
          <Select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </NavLinks>
      </Navbar>

      
      <MainContainer>
        <Title>Shop in Style</Title>
        <p>With this shop homepage template</p>
      </MainContainer>

      
      <CardContainer>
        <Card>
          <TopPart>
            450 x 350
          </TopPart>
          <BottomPart>
            <CardTitle>Product 1</CardTitle>
            <Price>$20</Price>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </BottomPart>
        </Card>

        <Card>
          <TopPart>
            450 x 350
          </TopPart>
          <BottomPart>
            <CardTitle>Product 2</CardTitle>
            <Price>$30</Price>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </BottomPart>
        </Card>

        <Card>
          <TopPart>
            450 x 350
          </TopPart>
          <BottomPart>
            <CardTitle>Product 3</CardTitle>
            <Price>$25</Price>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </BottomPart>
        </Card>

        <Card>
          <TopPart>
            450 x 350
          </TopPart>
          <BottomPart>
            <CardTitle>Product 4</CardTitle>
            <Price>$40</Price>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </BottomPart>
        </Card>
      </CardContainer>

      
      <Footer>
        <p>Copyright You Web Site 2022</p>
      </Footer>
    </>
  );
}

export default StyledComponentExample;

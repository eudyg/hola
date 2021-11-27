import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: black;
  height: 500;
  
  line-height: 7rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  &.fix-nav {
    width: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  position: relative; 

`


const LogoWrapper = styled.div`
  .logo {
    color: var(--white);
    font-size: 2.7rem;
    font-weight: 600;
    padding: 0.5rem;
    border: 3px solid var(--black);
    width: 95%;
  

    @media (max-width: 996px) {
      font-size: 2rem;
      font-weight: 600;
      padding: 0.3rem;
      border: 2px solid var(--black);
    }
  }
`

const Label = styled.label`
width: 5%;
  display: flex;
  color: white;
  display: none;
  font-size: 2rem;
  cursor: pointer;
  


  @media (max-width: 996px) {
    font-size: 2rem;
    cursor: pointer;
  }
`


const Navigation1 = () => {
  const [menu, setMenu] = useState(false)

  const showMenu = () => setMenu(true)

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const count = cartItems.reduce((acc, item) => acc + item.qty, 0)

  return (
    <Nav>
      <Wrapper className='container'>
        <Label onClick={showMenu}>
          <i className='fas fa-bars'></i>
        </Label>
        <LogoWrapper>
          <Link to='/' className='logo'>
            Store Tech
          </Link>
        </LogoWrapper>
      </Wrapper>
    </Nav>
  )
}

export default Navigation1

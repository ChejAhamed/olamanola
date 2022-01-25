import React, { useState } from "react";
import logo from '../../images/olaa.svg'
import styled from "styled-components";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo >
        <img src={logo} alt="Olamanola" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/gallery">Gallery</MenuLink>
        <MenuLink href="/services">Services</MenuLink>
        <MenuLink href="/contactus">Contact Us</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Header;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: brown;
  }
`;

const Nav = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  overflow:auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;;
  align-items: center;
  flex-wrap: wrap;
  
  background: #fceef2;
  
`;

const Logo = styled.a`
  padding: 1rem 0 1rem;
  color: #7b7fda;
  text-decoration: none;
  width: 10rem;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    img {
      width: 7rem;
      higth: 7rem;
    }
    
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
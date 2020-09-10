import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li { 
    padding: 18px 10px;
  }
  @media (max-width: 426px) {
        flex-flow: column nowrap;
        justify-content: center;
        text-align: center;
        text-align: center;
        background-color: #3a54b4;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        .link-contact{
            display: none;
        }
    li {
        color: #fff;
    }
    a {
          font-size: 30px;
    }
}
`;

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <a href="/" ><li>Página Inicial</li></a>
            <a href="/about"><li>Sobre</li></a>
            <a href="/services"><li>Serviços</li></a>
            <Link to="#form" className="link-contact" smooth><li>Contatos</li></Link>
        </Ul>
    )
}

export default RightNav
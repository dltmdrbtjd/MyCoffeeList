import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = (props) => {
    if(window.location.pathname === '/'){
      return <CreateButton><Link to="/ListCreate" style={{textDecoration:"none", color:"#F6EEE0"}}>작성하기</Link></CreateButton>
    } else {
      return null
    }
}

const CreateButton = styled.button`
  display:block;
  margin:0 auto;
  width: 140px;
  height: 60px;
  background-color: #A45C40;
  color: #F6EEE0;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 35px;
  cursor: pointer;
`;

export default Button;
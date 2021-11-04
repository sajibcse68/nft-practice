import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { Logo } from '@components';

export const Navbar = () => {
  return (
    <Styled.Navbar>
      <Styled.NavbarLeft>
        <Logo src="/images/hyype-logo.svg" width="117" height="39" />
      </Styled.NavbarLeft>
      <Styled.NavbarRight>
        <Styled.BtnSignIn variant="success">Sign In</Styled.BtnSignIn>{' '}
      </Styled.NavbarRight>
    </Styled.Navbar>
  );
};

const Styled = {};

Styled.Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // flex-basis: 1440px;
  height: 76px;
`;

Styled.NavbarLeft = styled.div`
  display: flex;
  flex-basis: 120px;
`;
Styled.NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;
Styled.BtnSignIn = styled.button`
  height: 36px;
  border-radius: 18px;
  font-size: 14px;
  letter-spacing: 0.31px;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
  padding: 8px 25px;
  line-height: 1;
  border: 1px solid rgb(255, 129, 98);
  background-color: rgb(255, 129, 98);
  color: white;
`;

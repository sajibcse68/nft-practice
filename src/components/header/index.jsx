import React from 'react';
import styled from 'styled-components';
import { Logo } from '@components';

export const Navbar = () => {
  return (
    <Styled.Navbar>
      <Logo src="/images/hyype-logo.svg" width="117" height="39" />
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

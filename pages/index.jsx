import React from 'react';
import styled from 'styled-components';

import { Navbar, Main, Footer, Cards } from '@components';

const Home = () => {
  return (
    <Styled.BodyContainer className="d-flex flex-column min-vh-100">
      <Navbar />
      <Main />
      {/* <Cards /> */}
      {/* <Footer /> */}
    </Styled.BodyContainer>
  );
};

export default Home;

const Styled = {};

Styled.BodyContainer = styled.div`
  background-color: #fff;
`;

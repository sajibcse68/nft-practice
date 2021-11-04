import React from 'react';
import styled from 'styled-components';

import { Navbar } from '@components';
import Main from '@components/main';

const Home = (props) => {
  return (
    <Styled.BodyContainer className="d-flex flex-column min-vh-100">
      <Navbar />
      <Main {...props} />
    </Styled.BodyContainer>
  );
};

export default Home;

const Styled = {};

Styled.BodyContainer = styled.div`
  background-color: #fff;
`;

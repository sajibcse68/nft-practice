import React, { CSSProperties } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Image from 'next/image';

import { Button } from '@components';

export const Main = () => {
  return (
    <Styled.BodyWrap>
      <Styled.BodyLeft>
        <Styled.NftImg></Styled.NftImg>
      </Styled.BodyLeft>
      <Styled.BodyRight></Styled.BodyRight>
    </Styled.BodyWrap>
  );
};

const Styled = {};

Styled.BodyWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

Styled.BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  flex-basis: 50%;
  background: #000;
`;

Styled.NftImg = styled.div`
  background: url(/images/nft-human.jpeg) no-repeat center center;
  height: calc(100vh - 130px);
  background-size: contain;
`;

Styled.BodyRight = styled.div`
  display: flex;
  flex-direction: column;
`;

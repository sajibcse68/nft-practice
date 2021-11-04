import React from 'react';
import styled from 'styled-components';

import NftDetailsTabs from '@components/nft-details/NftDetailsTabs';

export const Main = () => {
  return (
    <Styled.BodyWrap>
      <Styled.BodyLeft>
        <Styled.NftImg></Styled.NftImg>
      </Styled.BodyLeft>
      <Styled.BodyRight>
        <Styled.NftDetailsWrap>
          <Styled.NftDetailsHeader>
            <Styled.NftDetailsHeaderTop>Meebits</Styled.NftDetailsHeaderTop>
            <Styled.NftDetailsHeaderTitle>
              Meebit #1
            </Styled.NftDetailsHeaderTitle>
            <Styled.NftDetailsHeaderBtn>Add Lore</Styled.NftDetailsHeaderBtn>
          </Styled.NftDetailsHeader>

          <Styled.NftTabs>
            <NftDetailsTabs></NftDetailsTabs>
          </Styled.NftTabs>
        </Styled.NftDetailsWrap>
      </Styled.BodyRight>
    </Styled.BodyWrap>
  );
};

const Styled = {};

Styled.BodyWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 76px);

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

Styled.BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  flex-basis: 55%;
  background: #000;
`;

Styled.NftImg = styled.div`
  background: url(/images/nft-human.jpeg) no-repeat center center;
  height: calc(100vh - 76px);
  background-size: contain;
`;

Styled.BodyRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  overflow: auto;
`;

Styled.NftDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 33px;
`;
Styled.NftDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 57px;
`;
Styled.NftDetailsHeaderTop = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: rgb(153, 153, 153);
`;
Styled.NftDetailsHeaderTitle = styled.h1`
  margin: 19px 0 0 0;
  font-weight: 600;
  font-size: 28px;
  color: rgb(17, 17, 17);
`;
Styled.NftDetailsHeaderBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 19px 0 34px 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.31px;
  color: rgb(255, 129, 98);
  padding: 6px 25px;
  border: 1px solid rgb(255, 129, 98);
  border-radius: 18px;
  background-color: #fff;
  width: fit-content;
  cursor: pointer;
`;

Styled.NftTabs = styled.div`
  // display: flex;
`;

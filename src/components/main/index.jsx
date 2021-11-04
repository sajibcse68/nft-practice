import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NftDetailsHeader from '@components/nft-details/NftDetailsHeader';
import NftDetailsTabs from '@components/nft-details/NftDetailsTabs';

export const NftContext = React.createContext();

const Main = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.nftDetails);
  });

  const nftImgUrl = data?.metadata?.cachedMedia?.imageUrl;

  return (
    <NftContext.Provider value={data}>
      <Styled.BodyWrap>
        <Styled.BodyLeft>
          <Styled.NftImg nftImgUrl={nftImgUrl}></Styled.NftImg>
        </Styled.BodyLeft>
        <Styled.BodyRight>
          <Styled.NftDetailsWrap>
            <NftDetailsHeader></NftDetailsHeader>

            <Styled.NftTabs>
              <NftDetailsTabs></NftDetailsTabs>
            </Styled.NftTabs>
          </Styled.NftDetailsWrap>
        </Styled.BodyRight>
      </Styled.BodyWrap>
    </NftContext.Provider>
  );
};

export default Main;

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
  background: ${(props) => `url(${props?.nftImgUrl}) no-repeat center center`};
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
Styled.NftTabs = styled.div``;

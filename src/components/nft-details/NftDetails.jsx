import styled from 'styled-components';

import NftProperties from './NftProperties';

function NftDetailsTabs() {
  return (
    <>
      <Styled.NftName>Meebit #1</Styled.NftName>

      <Styled.SubHeader>Properties</Styled.SubHeader>

      <NftProperties></NftProperties>

      <Styled.SubHeader>Minted By</Styled.SubHeader>
    </>
  );
}

export default NftDetailsTabs;

const Styled = {};

Styled.NftName = styled.p`
  font-size: 14px;
  color: rgb(17, 17, 17);
  margin-bottom: 30px;
`;

Styled.SubHeader = styled.div`
  font-size: 14px;
  letter-spacing: 0.31px;
  color: rgb(17, 17, 17);
  margin-bottom: 23px;
`;

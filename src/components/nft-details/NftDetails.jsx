import styled from 'styled-components';

import NftProperties from './NftProperties';
import RoundProfilePic from './RoundProfilePic';

function NftDetailsTabs() {
  return (
    <>
      <Styled.NftName>Meebit #1</Styled.NftName>

      <Styled.SubHeader>Properties</Styled.SubHeader>

      <NftProperties></NftProperties>

      <Styled.SubHeader>Minted By</Styled.SubHeader>

      <Styled.ProfilePicWithAddr>
        <RoundProfilePic></RoundProfilePic>
        <span>0xaf...8388</span>
      </Styled.ProfilePicWithAddr>

      <Styled.SubHeader>Currently Owned By</Styled.SubHeader>
      <Styled.ProfilePicWithAddr>
        <RoundProfilePic></RoundProfilePic>
        <span>0xaf...8388</span>
      </Styled.ProfilePicWithAddr>
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

Styled.ProfilePicWithAddr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 49px;

  > span {
    margin-left: 10px;
  }
`;

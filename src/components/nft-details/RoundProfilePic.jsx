import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';

import NftLore from './NftLore';
import NftDetails from './NftDetails';

function RoundProfilePic() {
  return (
    <Styled.ProfilePicWrap>
      <Styled.ProfilePic></Styled.ProfilePic>
    </Styled.ProfilePicWrap>
  );
}

export default RoundProfilePic;

const Styled = {};

Styled.ProfilePicWrap = styled.div`
  width: 50px;
  height: 50px;
`;

Styled.ProfilePic = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  max-width: 100%;
  max-height: 100%;
  background: rgb(216, 216, 216) url(/images/nft-profile-pic.png) no-repeat;
  background-size: cover;
`;

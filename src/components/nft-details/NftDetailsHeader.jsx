import { useContext } from 'react';
import styled from 'styled-components';

import { NftContext } from '@components/main';

function NftDetailsHeader() {
  const { name, metadata } = useContext(NftContext) || {};

  return (
    <Styled.NftDetailsHeader>
      <Styled.NftDetailsHeaderTop>{name}</Styled.NftDetailsHeaderTop>
      <Styled.NftDetailsHeaderTitle>
        {metadata?.name}
      </Styled.NftDetailsHeaderTitle>
      <Styled.NftDetailsHeaderBtn>Add Lore</Styled.NftDetailsHeaderBtn>
    </Styled.NftDetailsHeader>
  );
}

export default NftDetailsHeader;

const Styled = {};

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

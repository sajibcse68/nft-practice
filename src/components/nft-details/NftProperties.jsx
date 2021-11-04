import { useState, useContext } from 'react';

import styled from 'styled-components';
import { NftContext } from '@components/main';
import { formatAddress, getBlockchainFromType } from 'src/utils';

function NftProperties() {
  const {
    address,
    tokenId,
    type,
    metadata: { attributes = [] } = {},
  } = useContext(NftContext);
  const [showMore, setShowMore] = useState(null);
  const attributesNow = showMore ? attributes : attributes.slice(0, 2);

  return (
    <Styled.NftProperties>
      <Styled.NftPropertiesTop>
        <Styled.NftPropertyItem>
          <Styled.NftPropertyItemLabel>Chain Info</Styled.NftPropertyItemLabel>
          <Styled.NftPropertyItemValue>
            {formatAddress(address)}
          </Styled.NftPropertyItemValue>
        </Styled.NftPropertyItem>
        <Styled.NftPropertyItem>
          <Styled.NftPropertyItemLabel>Token Id</Styled.NftPropertyItemLabel>
          <Styled.NftPropertyItemValue>{tokenId}</Styled.NftPropertyItemValue>
        </Styled.NftPropertyItem>

        <Styled.NftPropertyItem>
          <Styled.NftPropertyItemLabel>Blockchain</Styled.NftPropertyItemLabel>
          <Styled.NftPropertyItemValue>
            {getBlockchainFromType(type)}
          </Styled.NftPropertyItemValue>
        </Styled.NftPropertyItem>
      </Styled.NftPropertiesTop>

      <Styled.NftPropertiesBottom>
        {attributesNow.map((attr) => {
          return (
            <Styled.NftPropertyItem key={attr.trait_type}>
              <Styled.NftPropertyItemLabel>
                {attr.trait_type}
              </Styled.NftPropertyItemLabel>
              <Styled.NftPropertyItemValue>
                {attr.value}
              </Styled.NftPropertyItemValue>
            </Styled.NftPropertyItem>
          );
        })}

        {!showMore ? (
          <Styled.ShowMore onClick={() => setShowMore(true)}>
            Show More
          </Styled.ShowMore>
        ) : (
          <Styled.ShowMore onClick={() => setShowMore(false)}>
            Show less
          </Styled.ShowMore>
        )}
      </Styled.NftPropertiesBottom>
    </Styled.NftProperties>
  );
}

export default NftProperties;

const Styled = {};

Styled.NftProperties = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  background-color: rgb(246, 246, 246);
  display: flex;
  margin-bottom: 40px;
`;

Styled.NftPropertiesTop = styled.div``;
Styled.NftPropertiesBottom = styled.div`
  padding-top: 15px;
  border-top: 1px solid rgb(223, 223, 223);
`;

Styled.NftPropertyItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
Styled.NftPropertyItemLabel = styled.div`
  flex-basis: 30%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.31px;
  color: rgb(17, 17, 17);

  @media (max-width: 640px) {
    flex-basis: 40%;
  }
`;
Styled.NftPropertyItemValue = styled.div`
  flex-basis: 65%;
  font-size: 14px;
  letter-spacing: 0.31px;
  color: rgb(102, 102, 102);
  word-break: break-word;
  cursor: pointer;

  @media (max-width: 640px) {
    flex-basis: 55%;
  }
}`;

Styled.ShowMore = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(255, 129, 98);
  cursor: pointer;
`;

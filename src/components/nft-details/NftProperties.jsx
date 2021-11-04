import { useState } from 'react';

import styled from 'styled-components';

function NftProperties() {
  const [showMore, setShowMore] = useState(null);

  return (
    <Styled.NftProperties>
      <Styled.NftPropertiesTop>
        <Styled.NftPropertyItem>
          <Styled.NftPropertyItemLabel>Chain Info</Styled.NftPropertyItemLabel>
          <Styled.NftPropertyItemValue>0x7b...6bc7</Styled.NftPropertyItemValue>
        </Styled.NftPropertyItem>

        <Styled.NftPropertyItem>
          <Styled.NftPropertyItemLabel>Token Id</Styled.NftPropertyItemLabel>
          <Styled.NftPropertyItemValue>1</Styled.NftPropertyItemValue>
        </Styled.NftPropertyItem>

        <Styled.NftPropertyItem>
          <Styled.NftPropertyItemLabel>Blockchain</Styled.NftPropertyItemLabel>
          <Styled.NftPropertyItemValue>Ethereum</Styled.NftPropertyItemValue>
        </Styled.NftPropertyItem>
      </Styled.NftPropertiesTop>

      <Styled.NftPropertiesBottom>
        <Styled.NftPropertyItem>
          <Styled.NftPropertyItemLabel>Type</Styled.NftPropertyItemLabel>
          <Styled.NftPropertyItemValue>Human</Styled.NftPropertyItemValue>
        </Styled.NftPropertyItem>

        <Styled.NftPropertyItem>
          <Styled.NftPropertyItemLabel>Hair Style</Styled.NftPropertyItemLabel>
          <Styled.NftPropertyItemValue>Bald</Styled.NftPropertyItemValue>
        </Styled.NftPropertyItem>

        {!showMore && (
          <Styled.ShowMore onClick={() => setShowMore(true)}>
            Show More
          </Styled.ShowMore>
        )}

        {showMore && (
          <>
            <Styled.NftPropertyItem>
              <Styled.NftPropertyItemLabel>Hat</Styled.NftPropertyItemLabel>
              <Styled.NftPropertyItemValue>
                Backwards Cap
              </Styled.NftPropertyItemValue>
            </Styled.NftPropertyItem>

            <Styled.NftPropertyItem>
              <Styled.NftPropertyItemLabel>
                Hat Color
              </Styled.NftPropertyItemLabel>
              <Styled.NftPropertyItemValue>Gray</Styled.NftPropertyItemValue>
            </Styled.NftPropertyItem>

            <Styled.NftPropertyItem>
              <Styled.NftPropertyItemLabel>Shirt</Styled.NftPropertyItemLabel>
              <Styled.NftPropertyItemValue>
                Skull Tee
              </Styled.NftPropertyItemValue>
            </Styled.NftPropertyItem>
          </>
        )}

        {showMore && (
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

Styled.NftPropertiesTop = styled.div`
  // flex-direction: column;
`;
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

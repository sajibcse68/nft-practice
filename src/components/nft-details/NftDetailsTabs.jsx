import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import styled from 'styled-components';

import NftLore from './NftLore';
import NftDetails from './NftDetails';

function NftDetailsTabs() {
  const [key, setKey] = useState('details');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="lore" title="Lore">
        <NftLore></NftLore>
      </Tab>
      <Tab eventKey="details" title="Details">
        <NftDetails></NftDetails>
      </Tab>
    </Tabs>
  );
}

export default NftDetailsTabs;

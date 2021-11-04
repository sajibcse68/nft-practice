export const formatAddress = (addr) => {
  if (!addr) return;

  return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
};

export const getBlockchainFromType = (type) => {
  switch (type) {
    case 'erc721': {
      return 'Ethereum';
    }
    default: {
      return type;
    }
  }
};

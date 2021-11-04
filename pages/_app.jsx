import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '@styles/globalStyles';
import { getNftDetails } from 'src/services/nft.js';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async () => {
  const nftDetails = await getNftDetails();

  return {
    pageProps: { nftDetails },
  };
};

export default MyApp;

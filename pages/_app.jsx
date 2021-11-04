import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '@styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

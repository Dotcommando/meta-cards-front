import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@mui/material/styles';

import { persistor, store } from '../store';
import theme from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={ persistor }>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';

import { store } from '../store';
import theme from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

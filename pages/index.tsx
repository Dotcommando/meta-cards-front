import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Tab, Tabs } from '@mui/material';

import MCHead from '../components/mc-head';
import MCHeader from '../components/mc-header';
import MCSignInForm from '../components/mc-sign-in-form';
import MCSignUpForm from '../components/mc-sign-up-form';
import { selectAuth } from '../store/auth/selectors';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { userId, accessTokenExpiredAfter, refreshTokenExpiredAfter, accessToken, refreshToken, isAuthenticated, isAdmin } = useSelector(selectAuth);
  const authProps = { userId, accessTokenExpiredAfter, refreshTokenExpiredAfter, accessToken, refreshToken, isAuthenticated, isAdmin };
  const [ tabIndex, setTabIndex ] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <MCHead { ...{ title: 'Metaphorical Cards application', keywords: 'metaphorical, cards' } } />
        <MCHeader { ...{ auth: authProps} } />
        <Box sx={{ maxWidth: '400px' }}>
          <Box>
            <Tabs value={tabIndex} onChange={handleTabChange}>
              <Tab label="Sign Up" />
              <Tab label="Sign In" />
            </Tabs>
          </Box>
          <Box sx={{ padding: 2, minHeight: '512px' }}>
            {tabIndex === 0 && (
              <Box>
                <MCSignUpForm />
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <MCSignInForm />
              </Box>
            )}
          </Box>
        </Box>
        <footer className={styles.footer}>&copy;</footer>
      </main>
    </div>
  );
}

import { useRouter } from 'next/router';

import { SyntheticEvent, useEffect, useState } from 'react';
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
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/profile');
    }
  }, [ router, isAuthenticated ]);

  const [ tabIndex, setTabIndex ] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  return (
    <>
      <MCHead { ...{ title: 'Metaphorical Cards application', keywords: 'metaphorical, cards' } } />
      <div className={styles.container}>
        <main className={styles.main}>
          <MCHeader />
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
    </>
  );
}

import { useSelector } from 'react-redux';

import MCHead from '../components/mc-head';
import MCHeader from '../components/mc-header';
import MCSignUpFrom from '../components/mc-sign-up-form';
import { selectAuth } from '../store/auth/selectors';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { userId, accessTokenExpiredAfter, refreshTokenExpiredAfter, accessToken, refreshToken, isAuthenticated, isAdmin } = useSelector(selectAuth);
  const authProps = { userId, accessTokenExpiredAfter, refreshTokenExpiredAfter, accessToken, refreshToken, isAuthenticated, isAdmin };

  return (
    <div className={styles.container}>
      <MCHead { ...{ title: 'Metaphorical Cards application', keywords: 'metaphorical, cards' } } />
      <MCHeader { ...{ auth: authProps} } />
      <main className={styles.main}>
        <MCSignUpFrom></MCSignUpFrom>
      </main>
    </div>
  );
}

import { useSelector } from 'react-redux';

import MCHead from '../../components/mc-head';
import MCHeader from '../../components/mc-header';
import { selectAuth } from '../../store/auth/selectors';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const { userId, accessTokenExpiredAfter, refreshTokenExpiredAfter, accessToken, refreshToken, isAuthenticated, isAdmin } = useSelector(selectAuth);

  const authProps = { userId, accessTokenExpiredAfter, refreshTokenExpiredAfter, accessToken, refreshToken, isAuthenticated, isAdmin };

  return (
    <>
      <MCHead { ...{ title: 'Metaphorical Cards application', keywords: 'metaphorical, cards' } } />
      <div className={styles.container}>
        <main className={styles.main}>
          <MCHeader { ...{ auth: authProps} } />
          <div>Profile page</div>
          <footer className={styles.footer}>&copy;</footer>
        </main>
      </div>
    </>
  );
}

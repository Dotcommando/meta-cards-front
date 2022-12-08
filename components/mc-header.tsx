import { useDispatch } from 'react-redux';

import { AnyAction } from 'redux';
import styled from 'styled-components';

import { signInReq, signUpReq } from '../store';

export interface IHeaderProps {
  userId: string | null;
  accessTokenExpiredAfter: number;
  refreshTokenExpiredAfter: number;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const Header = styled.header`
  min-width: 100%;
  min-height: 90px;
  background: royalblue;
`;

const MCHeader: React.FC<{ auth: IHeaderProps }> = (props: { auth: IHeaderProps }) => {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(signInReq({ email: 'v.zaytsev@gmail.com', password: '125xdcw0' }) as unknown as AnyAction);
  };
  const handleSignUp = () => {
    dispatch(signUpReq({ email: 'v.zaytsev@gmail.com', password: '125xdcw0', firstName: 'Vasiliy', lastName: 'Zaytsev' }) as unknown as AnyAction);
  };

  return (
    <Header>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignUp}>Sign up</button>
      <div>{props.auth.userId ? props.auth.userId : null}</div>
      <div>{props.auth.isAdmin ? 'Admin' : 'User'}</div>
      <div>{props.auth.isAuthenticated ? 'Authenticated' : 'Not authenticated'}</div>
    </Header>
  );
};

export default MCHeader;

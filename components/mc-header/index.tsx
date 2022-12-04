import { useDispatch } from 'react-redux';

import { AnyAction } from 'redux';
import styled from 'styled-components';

import { signInReq, signUpReq } from '../../store';
import { IAuthDataProps } from '../../types';

const Header: React.FC<{ auth: IAuthDataProps }> = (props: { auth: IAuthDataProps }) => {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(signInReq({ email: 'v.zaytsev@gmail.com', password: '125xdcw0' }) as unknown as AnyAction);
  };
  const handleSignUp = () => {
    dispatch(signUpReq({ email: 'v.zaytsev@gmail.com', password: '125xdcw0', firstName: 'Vasiliy', lastName: 'Zaytsev' }) as unknown as AnyAction);
  };

  return (
    <header>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignUp}>Sign up</button>
      <div>{props.auth.userId ? props.auth.userId : null}</div>
      <div>{props.auth.isAdmin ? 'Admin' : 'User'}</div>
      <div>{props.auth.isAuthenticated ? 'Authenticated' : 'Not authenticated'}</div>
    </header>
  );
};

const MCHeader = styled(Header)`
  width: 100%;
  min-height: 50px;
  background: royalblue;
`;

export default MCHeader;

import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { Box } from '@mui/material';

import MCUserMenu from './mc-user-menu';

import { IUser } from '../common/types';
import { selectUserById } from '../store';
import { selectAuth } from '../store/auth/selectors';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  min-height: 90px;
  background: royalblue;
`;

const UserMenuBox = styled.div`
  max-width: 200px;
  display: flex;
  margin: 0 0 0 auto;
`;

const MCHeader: React.FC = () => {
  const { userId } = useSelector(selectAuth);
  const user: IUser | null = useSelector(selectUserById(userId));

  return (
    <Header>
      <Box sx={{ width: '100%', display: 'flex', margin: '0 24px' }}>
        <UserMenuBox>
          { user ? <MCUserMenu user={{ ...user }} /> : null }
        </UserMenuBox>
      </Box>
    </Header>
  );
};

export default MCHeader;

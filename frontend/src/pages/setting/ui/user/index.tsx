import React from 'react';
import { Typography } from '@mui/material';
import useUserStore from '../../../../shared/stores/useUserStore';

const User = () => {
  const { userName, userGender, userBirth } = useUserStore();
  return (
    <>
      <Typography variant="h6">User</Typography>
      <Typography variant="body1">{userName}</Typography>
      <Typography variant="body1">{userGender}</Typography>
      <Typography variant="body1">{userBirth}</Typography>
    </>
  );
};

export default User;

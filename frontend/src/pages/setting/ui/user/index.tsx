import React from 'react';
import { Avatar, Box, Paper } from '@mui/material';

import Name from './Name';
import Gender from './Gender';
import Birth from './Birth';

const User = () => {
  return (
    <>
      <Paper sx={{ p: 2, height: '100%' }}>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            position: 'relative',
            margin: 'auto',
            mt: 3,
          }}
        />
        <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, m: 3 }}
          noValidate
          autoComplete="off">
          <Name />
          <Gender />
          <Birth />
        </Box>
      </Paper>
    </>
  );
};

export default User;

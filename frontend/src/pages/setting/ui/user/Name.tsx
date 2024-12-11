import React from 'react';
import { TextField, Box } from '@mui/material';
import useUserStore from '../../../../shared/stores/useUserStore';

const Name = () => {
  const { userName } = useUserStore();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}>
        <TextField
          disabled
          id="standard-disabled"
          label="이름"
          defaultValue={userName}
          variant="standard"
          sx={{ width: '80%' }}
        />
      </Box>
    </>
  );
};

export default Name;

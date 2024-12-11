import React from 'react';
import { TextField } from '@mui/material';
import useUserStore from '../../../../shared/stores/useUserStore';

const Name = () => {
  const { userName } = useUserStore();

  return (
    <>
      <TextField
        disabled
        id="standard-disabled"
        label="이름"
        defaultValue={userName}
        variant="standard"
      />
    </>
  );
};

export default Name;

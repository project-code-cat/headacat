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
          m: 0,
        }}>
        <TextField
          // disabled
          id="standard-disabled"
          label="이름"
          defaultValue={userName}
          variant="standard"
          sx={{
            width: '120%',
            m: 0,
            '& .MuiInputBase-input': {
              textAlign: 'center', // 입력 텍스트 가운데 정렬
            },
          }}
        />
      </Box>
    </>
  );
};

export default Name;

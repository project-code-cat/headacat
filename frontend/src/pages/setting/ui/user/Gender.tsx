import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import useUserStore from '../../../../shared/stores/useUserStore';

const Gender = () => {
  const { userGender, setUserGender } = useUserStore();
  return (
    <>
      <Typography
        sx={{
          fontSize: '0.8rem',
          color: 'grey.500',
          ml: 2,
          variant: 'standard',
          mb: 3,
          mt: 2,
        }}>
        성별
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Button
          sx={{
            width: '40%',
            border: '1px solid',
            borderColor: 'primary.main',
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            bgcolor: userGender === 'F' ? 'primary.main' : null,
            color: userGender === 'F' ? 'black' : 'text.primary',
            mr: 1,
          }}
          onClick={() => {
            setUserGender('F');
          }}>
          여자
        </Button>
        <Button
          sx={{
            width: '40%',
            border: '1px solid ',
            borderColor: 'primary.main',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            bgcolor: userGender === 'M' ? 'primary.main' : null,
            color: userGender === 'M' ? 'text.primary' : 'white',
          }}
          onClick={() => {
            setUserGender('M');
          }}>
          남자
        </Button>
      </Box>
    </>
  );
};

export default Gender;

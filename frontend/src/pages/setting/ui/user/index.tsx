import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import useUserStore from '../../../../shared/stores/useUserStore';

const User = () => {
  const { userName, userGender, setUserGender } = useUserStore();

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
          <TextField
            disabled
            id="standard-disabled"
            label="이름"
            defaultValue={userName}
            variant="standard"
          />
          {/* <TextField
            disabled
            id="standard-disabled"
            label="GENDER"
            // defaultValue={userGender}
            variant="standard"
            sx={{ fontSize: '1rem' }}
          /> */}
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: 'grey.500',
              ml: 2,
              variant: 'standard',
              mb: 1,
              mt: 2,
            }}>
            성별
          </Typography>
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

          <Typography
            sx={{
              fontSize: '0.8rem',
              color: 'grey.500',
              ml: 2,
              variant: 'standard',
              mt: 4,
            }}>
            생일
          </Typography>

          {/* <TextField
            disabled
            id="standard-disabled"
            label="BIRTH"
            defaultValue={userBirth}
            variant="standard"
          /> */}
        </Box>
      </Paper>
    </>
  );
};

export default User;

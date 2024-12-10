import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Medications = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: '100vw',
          height: '80vh',
          borderTopLeftRadius: '25px',
          borderTopRightRadius: '25px',
          overflow: 'hidden',
        }}>
        <Box
          sx={{
            width: '40px',
            height: '4px',
            backgroundColor: 'grey.300',
            borderRadius: '50px',
            margin: '25px auto',
          }}
        />
        <Box sx={{ width: '100%', height: '100%', m: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            🌟{'섬광현상 발생시'}
          </Typography>
          오쪼지
        </Box>
      </Paper>
    </>
  );
};
export default Medications;

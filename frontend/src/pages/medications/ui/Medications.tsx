import React from 'react';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { FaCoffee, FaBed, FaRunning } from 'react-icons/fa';
import { PiPillFill } from 'react-icons/pi';

const Medications = () => {
  const iconSize = 50;

  const list = [
    { key: 'migrate', name: '두통', icon: <PiPillFill size={iconSize} /> },
    { key: 'time', name: '기상/취침', icon: <FaBed size={iconSize} /> },
    { key: 'caffeine', name: '카페인', icon: <FaCoffee size={iconSize} /> },
    { key: 'exercise', name: '운동', icon: <FaRunning size={iconSize} /> },
  ];

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: '100vw',
          height: '40vh',
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
        <Typography
          variant="h6"
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            mt: 0,
            mb: 3,
          }}>
          {'빠른 기록'}
        </Typography>
        <Box sx={{ width: '100%', height: '100%', m: 5, mt: 1 }}>
          {list.map(item => (
            <Button
              key={item.key}
              sx={{
                border: '1px solid grey',
                width: '39%',
                mb: 3,
                mr: '12px',
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}>
                {item.icon}
                <Divider sx={{ width: '80%', my: 1 }} />
                <Typography sx={{ fontSize: '12px' }}>{item.name}</Typography>
              </Box>
            </Button>
          ))}
        </Box>
      </Paper>
    </>
  );
};
export default Medications;

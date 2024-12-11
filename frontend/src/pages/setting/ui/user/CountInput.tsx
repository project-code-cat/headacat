import { TextField, IconButton, Box } from '@mui/material';
// import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import React, { useState } from 'react';
import { IoMdRemove } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

interface Props {
  count: number;
  setCount: (count: number) => void;
  type: 'year' | 'month' | 'day';
  changeCount: (type: 'year' | 'month' | 'day', newValue: number) => void;
}

const CountInput = ({ count, setCount, type, changeCount }: Props) => {
  //   const [year, setYear] = useState(2024);

  const handleIncrement = () => {
    if (type === 'year') {
      if (count < 2100) {
        setCount(count + 1);
      }
    } else if (type === 'month') {
      if (count < 12) {
        setCount(count + 1);
      }
    } else if (type === 'day') {
      if (count < 31) {
        setCount(count + 1);
      }
    }
    changeCount(type, count + 1);
  };

  const handleDecrement = () => {
    if (type === 'year') {
      if (count > 1900) {
        setCount(count - 1);
      }
    } else if (type === 'month') {
      if (count > 1) {
        setCount(count - 1);
      }
    } else if (type === 'day') {
      if (count > 1) {
        setCount(count - 1);
      }
    }
    changeCount(type, count - 1);
  };

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseDown = (direction: 'minus' | 'plus') => {
    const id = setInterval(() => {
      if (direction === 'minus') {
        handleDecrement();
      } else if (direction === 'plus') {
        handleIncrement();
      }
    }, 100);

    setIntervalId(id);
  };

  const handleMouseUp = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconButton
          onMouseDown={() => handleMouseDown('minus')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}>
          <IoMdRemove size={20} />
        </IconButton>

        <TextField
          type="number"
          label=""
          variant="standard"
          InputProps={{
            inputProps: {
              min: 1900,
              max: 2100,
              style: { textAlign: 'center' },
            },
            disableUnderline: true,
          }}
          value={count}
          onChange={e => {
            const value = parseInt(e.target.value, 10);
            if (value >= 1900 && value <= 2100) {
              setCount(value);
            }
          }}
          sx={{
            width: 100,
            '& .MuiInputBase-root': {
              border: 'none',
            },
          }}
        />

        <IconButton
          onMouseDown={() => handleMouseDown('plus')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}>
          <FiPlus />
        </IconButton>
      </Box>
    </>
  );
};

export default CountInput;

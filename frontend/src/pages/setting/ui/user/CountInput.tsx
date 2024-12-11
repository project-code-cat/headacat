import { TextField, IconButton, Box } from '@mui/material';
// import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import React, { useState, useCallback } from 'react';
import { IoMdRemove } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

interface Props {
  count: number;
  setCount: (count: number) => void;
  type: 'year' | 'month' | 'day';
  changeCount: (type: 'year' | 'month' | 'day', newValue: number) => void;
}

const CountInput = ({ count, setCount, type, changeCount }: Props) => {
  const [intervalIdMinus, setIntervalIdMinus] = useState<number | null>(null);
  const [intervalIdPlus, setIntervalIdPlus] = useState<number | null>(null);

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
    console.log('handleIncrement', count);
    changeCount(type, count + 1);
  };

  const handleMouseDownPlus = () => {
    handleIncrement();

    const id = window.setInterval(() => {
      handleIncrement();
    }, 100);

    setIntervalIdPlus(id);
  };

  const handleMouseUpPlus = () => {
    if (intervalIdPlus) {
      window.clearInterval(intervalIdPlus);
      setIntervalIdPlus(null);
    }
  };

  const handleDecrement = useCallback(() => {
    if (type === 'year' && count > 1900) {
      setCount(count - 1);
    } else if (type === 'month' && count > 1) {
      setCount(count - 1);
    } else if (type === 'day' && count > 1) {
      setCount(count - 1);
    }
    changeCount(type, count - 1);
  }, [count, type, setCount, changeCount]);

  const handleMouseDownMinus = () => {
    handleDecrement();

    const id = window.setInterval(() => {
      handleDecrement();
    }, 100);

    setIntervalIdMinus(id);
  };

  const handleMouseUpMinus = () => {
    if (intervalIdMinus) {
      window.clearInterval(intervalIdMinus);
      setIntervalIdMinus(null);
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
          onMouseDown={handleMouseDownMinus}
          onMouseUp={handleMouseUpMinus}
          onMouseLeave={handleMouseUpMinus}>
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
          onMouseDown={handleMouseDownPlus}
          onMouseUp={handleMouseUpPlus}
          onMouseLeave={handleMouseUpPlus}>
          <FiPlus />
        </IconButton>
      </Box>
    </>
  );
};

export default CountInput;

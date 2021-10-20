import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { fontFamily } from '../../utils/theme';

const useStyles = makeStyles({
  button: {
    '&:hover': {
      background: '#E6F7FF',
    },
    background: '#E6F7FF',
    borderRadius: '10px',
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'block',
    height: '40px',
    margin: '20px 35px 0 auto',
    width: '207px',
    ...fontFamily,
  },
});

export const ConnectWallet = () => {
  const styles = useStyles();
  return (
    <Button className={styles.button} disableRipple>
      Connect Wallet
    </Button>
  );
};

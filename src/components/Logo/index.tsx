import React from 'react';
import { makeStyles } from '@mui/styles';
import logoImage from '../../assets/logo.png';

const useStyles = makeStyles({
  image: {
    padding: '18px 0 0 10px',
  },
});

export const Logo = () => {
  const styles = useStyles();
  return <img alt="logo" className={styles.image} src={logoImage} />;
};

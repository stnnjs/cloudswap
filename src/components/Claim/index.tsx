import React from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const Claim = () => {
  const styles = useStyles();

  return (
    <Grid className={styles.container} item xs={12}>
      <CircularProgress color="primary" />
    </Grid>
  );
};

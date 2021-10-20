import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { fontFamily } from '../../../../utils/theme';

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
  text: {
    fontSize: '0.85rem',
    fontWeight: 500,
    paddingLeft: '10px',
    paddingRight: '10px',
    ...fontFamily,
  },
});

export const Result = () => {
  const styles = useStyles();

  return (
    <Grid className={styles.container} container>
      <Grid item xs={6}>
        <Typography align="left" className={styles.text} itemType="p" variant="body1">
          Liquidty Provider Fee
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right" className={styles.text} itemType="p" variant="body1">
          0.003 ETH
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography align="left" className={styles.text} itemType="p" variant="body1">
          Route
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right" className={styles.text} itemType="p" variant="body1">
          {'ETH -> USDC'}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography align="left" className={styles.text} itemType="p" variant="body1">
          Price Impact
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right" className={styles.text} itemType="p" variant="body1">
          -0.004%
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography align="left" className={styles.text} itemType="p" variant="body1">
          Minimum Recieved
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography align="left" className={styles.text} itemType="p" variant="body1">
          Slippage Tolerance
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right" className={styles.text} itemType="p" variant="body1">
          0.50%
        </Typography>
      </Grid>
    </Grid>
  );
};

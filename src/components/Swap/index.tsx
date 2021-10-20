import React, { useMemo } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Frame } from '../Frame';
import { SwapForm } from './components/SwapForm';
import {
  selectCalculationAmount,
  selectCalculationFrom,
  selectCalculationTo,
  selectShouldShowResult,
} from '../../selectors/CalculationSelectors';
import { useActionCallback } from '../../hooks/useActionCallback/useActionCallback';
import { setShouldShowResult } from '../../actions/calculationActions';
import { Result } from './components/Result';
import { fontFamily } from '../../utils/theme';

const useStyles = makeStyles({
  button: {
    '&:hover': {
      background: '#0f96f7',
    },
    background: '#69C0FF',
    borderRadius: '3px',
    color: 'white',
  },
  buttonContainer: {
    paddingBottom: '12px',
    paddingLeft: '10px',
    paddingRight: '10px',
    ...fontFamily,
  },
  font: {
    ...fontFamily,
    fontWeight: 400,
    paddingLeft: '20px',
    paddingTop: '10px',
  },
  resultValue: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  titleItem: {
    flexBasis: '100%',
    flexGrow: 0,
    maxWidth: '100%',
  },
});

export const Swap = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const amount = useSelector(selectCalculationAmount);
  const from = useSelector(selectCalculationFrom);
  const to = useSelector(selectCalculationTo);
  const shouldShowResult = useSelector(selectShouldShowResult);

  const setShouldShowResultCallback = useActionCallback(setShouldShowResult, dispatch);
  const toggleShouldShowResult = () => {
    setShouldShowResultCallback(!shouldShowResult);
  };
  const calculatedText = useMemo(() => `${amount} ${from} = ${to}`, [amount, from, to]);
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid className={styles.titleItem} item xs={12}>
          <Typography className={styles.font} component="h6" variant="h6">
            Swap
          </Typography>
        </Grid>
        <Frame>
          <SwapForm />
        </Frame>
        <Frame>
          <SwapForm type="to" />
        </Frame>
        <Grid className={styles.resultValue} item xs={12}>
          <Typography align="right" itemType="p" variant="body1">
            {calculatedText}
          </Typography>
        </Grid>
        {shouldShowResult && (
          <Frame height={110} theme="dark">
            <Result />
          </Frame>
        )}
        <Grid className={styles.buttonContainer} item xs={12}>
          <Button className={styles.button} disableRipple fullWidth onClick={toggleShouldShowResult}>
            {shouldShowResult ? 'Approve' : 'Swap'}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

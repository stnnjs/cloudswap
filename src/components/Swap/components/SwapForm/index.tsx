import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SwapFormProps } from './types/SwapFormProps';
import { useActionCallback } from '../../../../hooks/useActionCallback/useActionCallback';
import { setCalculationAmount, setCalculationFrom, setCalculationTo } from '../../../../actions/calculationActions';
import { selectCalculationAmount, selectCalculationFrom, selectCalculationTo } from '../../../../selectors/CalculationSelectors';
import { fontFamily } from '../../../../utils/theme';

const useStyles = makeStyles({
  dropDownBox: {},
  font: {
    ...fontFamily,
  },
  root: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  select: {
    border: 0,
    borderRadius: '10px',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
    height: '36px',
    marginTop: '16px',
    width: '97px',
    ...fontFamily,
  },
  selectItem: {
    minHeight: '72px',
    ...fontFamily,
  },
  shadow: {
    boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px',
    marginTop: '16px',
  },

  title: {
    marginTop: '8px',
    ...fontFamily,
  },
  to: {},
});

export const SwapForm = ({ type = 'from' }: SwapFormProps) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const isFrom = type === 'from';
  const selectedValue = useSelector(isFrom ? selectCalculationFrom : selectCalculationTo);
  const amount = useSelector(selectCalculationAmount);
  const setSelectedValue = useActionCallback(isFrom ? setCalculationFrom : setCalculationTo, dispatch);
  const setAmount = useActionCallback(setCalculationAmount, dispatch);

  const onAmountChange = (evt: any) => {
    if (evt.target?.value) {
      setAmount(evt.target.value);
    }
  };

  const onSelect = (evt: any) => {
    if (evt.target) {
      setSelectedValue(evt.target.value);
    }
  };

  return (
    <Grid className={styles.root} container xs={12}>
      <Grid className={styles.title} item xs={12}>
        <Typography className={styles.font} variant="body1">
          {type?.toUpperCase()}
        </Typography>
      </Grid>
      <Grid className={styles.selectItem} item xs={6}>
        <Select className={styles.select} disableUnderline onChange={onSelect} value={selectedValue}>
          <MenuItem className={styles.font} value="WETH">
            WETH
          </MenuItem>
          <MenuItem className={styles.font} value="DAI">
            DAI
          </MenuItem>
          <MenuItem className={styles.font} value="BAT">
            BAT
          </MenuItem>
          <MenuItem className={styles.font} value="USDC">
            USDC
          </MenuItem>
          <MenuItem className={styles.font} value="UNI">
            UNI
          </MenuItem>
        </Select>
      </Grid>

      <Grid className={styles.selectItem} item xs={6}>
        {isFrom && <TextField id="outlined-basic" label="amount" onChange={onAmountChange} value={amount} variant="outlined" />}
      </Grid>
      {isFrom && (
        <Grid className={styles.font} item xs={12}>
          {`Balanace: ${isFrom && selectedValue ? 'ETH ' + selectedValue : ''}`}
        </Grid>
      )}
    </Grid>
  );
};

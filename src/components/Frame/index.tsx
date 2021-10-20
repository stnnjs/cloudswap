import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import clsx from 'clsx';
import { FrameProps, FrameStyleCreatorProps } from './types/FrameProps';
import { fontFamily } from '../../utils/theme';
// import { FrameProps } from './types/FrameProps';

const useStyles = makeStyles({
  box: ({ width, height }: FrameStyleCreatorProps) => ({
    borderRadius: '10px',
    height: `${height}px`,
    width: `${width}px`,
    ...fontFamily,
  }),
  dark: {
    border: '2px solid rgb(145, 213, 255)',
    background: 'rgb(186, 231, 255)',
  },
  light: {
    border: '2.5px solid rgb(145, 213, 255)',
  },
  root: {
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
});

export const Frame = ({ children, theme = 'light', height = 130, width = 465 }: FrameProps) => {
  const styles = useStyles({
    height,
    width,
  });
  return (
    <Grid className={styles.root} item xs={12}>
      <Box className={clsx(styles.box, styles[theme])}>{children}</Box>
    </Grid>
  );
};

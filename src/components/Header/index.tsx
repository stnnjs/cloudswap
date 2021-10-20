import React from 'react';
import { Grid } from '@mui/material';
import { MenuTabs } from '../MenuTabs';
import { ConnectWallet } from '../ConnectWallet';
import { Logo } from '../Logo';

export const Header = () => (
  <Grid container>
    <Grid item xs={4}>
      <Logo />
    </Grid>
    <Grid item xs={4}>
      <MenuTabs />
    </Grid>
    <Grid item xs={4}>
      <ConnectWallet />
    </Grid>
  </Grid>
);

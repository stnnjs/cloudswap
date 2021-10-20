import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { Swap } from '../Swap';
import { selectCurrentSection } from '../../selectors/NavigationSelectors';
import { Section } from '../../types/NavigationData';
import { Claim } from '../Claim';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(230, 247, 255)',
    borderRadius: '10px',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px',
    display: 'flex',
    flexGrow: 1,
    margin: '45px auto 8px auto',
    minHeight: '395px',
    width: '496px',
  },
});

export const PageContent = () => {
  const styles = useStyles();

  const currentSection = useSelector(selectCurrentSection);

  const content = useMemo(() => {
    if (currentSection === Section.Claim) {
      return <Claim />;
    }

    return <Swap />;
  }, [currentSection]);

  return (
    <Grid className={styles.root} container>
      {content}
    </Grid>
  );
};

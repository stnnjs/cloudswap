import React, { useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSection } from '../../selectors/NavigationSelectors';
import { useActionCallback } from '../../hooks/useActionCallback/useActionCallback';
import { setCurrentSection } from '../../actions/navigationActions';
import { Section } from '../../types/NavigationData';
import { fontFamily } from '../../utils/theme';

const useStyles = makeStyles({
  button: {
    ...fontFamily,
    color: 'rgba(0, 0, 0, 0.87)',
    padding: '8px 24px 8px 8px',
    textTransform: 'none',
  },
  container: {
    backgroundColor: 'transparent',
    border: '4px solid rgb(230, 247, 255)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    height: '59px',
    margin: '8px auto',
    width: '260px',
  },
  item: {
    padding: '8px 8px 8px 24px',
  },
  selectedButton: {
    '&:hover': {
      background: '#E6F7FF',
    },
    ...fontFamily,
    background: '#E6F7FF',
    borderRadius: '3px',
    color: 'rgba(0, 0, 0, 0.87)',
    height: '40px',
    textTransform: 'none',
    width: '112px',
  },
});

export const MenuTabs = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const currentSection = useSelector(selectCurrentSection);
  const setCurrentSectionCallback = useActionCallback(setCurrentSection, dispatch);

  const buttonClickFactory = useCallback(
    (section: Section) => () => {
      setCurrentSectionCallback(section);
    },
    [setCurrentSectionCallback]
  );

  const buttonClasses = {
    swap: currentSection === Section.Swap ? styles.selectedButton : styles.button,
    claim: currentSection === Section.Claim ? styles.selectedButton : styles.button,
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.item}>
        <Button className={buttonClasses.swap} disableRipple onClick={buttonClickFactory(Section.Swap)}>
          {' '}
          Swap
        </Button>
      </Box>
      <Box className={styles.item}>
        <Button className={buttonClasses.claim} disableRipple onClick={buttonClickFactory(Section.Claim)}>
          Claim
        </Button>
      </Box>
    </Box>
  );
};

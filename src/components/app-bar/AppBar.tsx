import './styles.css';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Autocomplete from '../autocomplete/Autocomplete';
import ProfileMenu from '../profile-menu/profile-menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    }
  })
);

interface IAppBarProps {
  searchInputText: string;
  setSearchInputText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (text: string) => void;
}

export default function IAppBar(props: IAppBarProps) {
  const classes = useStyles();

  function onChangeText(newText: string) {
    props.setSearchInputText(newText);
  }

  return (
    <AppBar>
      <Toolbar className='bar-content'>
        <Typography variant='h6' color='inherit'>
          GiftHub
        </Typography>
        <div className={classes.grow}></div>
        <Autocomplete
          text={props.searchInputText}
          onChangeText={onChangeText}
          onChangeSelection={props.onSubmit}
        />
        <div className={classes.grow}></div>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
}

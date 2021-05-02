import React from 'react';
import useStyles from './styles';
import CancelPresentationOutlinedIcon from '@material-ui/icons/CancelPresentationOutlined';

export const TopBar = ({roomName}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h4 className= {classes.title}>{roomName}</h4>
      <a  className={classes.exitButton}
      href="/">Salir del canal  
    <CancelPresentationOutlinedIcon fontSize="large" />

      </a>
    </div>
  )
}

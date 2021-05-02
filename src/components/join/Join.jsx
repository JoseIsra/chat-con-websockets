import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

export const Join = () => {
  const history = useHistory();
  const classes = useStyles();
  const [info, setInfo] = useState({
    name: '',
    room: '',
  });
  

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };


  const goToChannel = (e) => {
    e.preventDefault();
    history.push(`/chat?name=${info.name}&room=${info.room}`);
  };

  return (
    <div className={classes.root}>
        <h1 className={classes.heading}>Identifiquese e ingrese a un canal</h1>
        <div className={classes.formContainer}>
        <form onSubmit={goToChannel}>
          <div className={classes.formFields}>
            <input autoComplete="off" name="name" type="text" onChange={handleChange} placeholder="Usuario" /> 
            <input autoComplete="off" name="room" type="text" onChange={handleChange} placeholder="Canal" /> 
          </div>
            
            <button 
            className={classes.button} 
            disabled={!info.room || !info.name} 
            type="submit">Ingresar</button>
        </form>
        </div>
    </div>
  )
}

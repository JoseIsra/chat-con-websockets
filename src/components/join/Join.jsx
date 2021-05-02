import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export const Join = () => {
  const classes = useStyles();
  const [info, setInfo] = useState({
    user: '',
    room: '',
  });
  

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(info.user);
    console.log(info.room);
  };


  return (
    <div className={classes.root}>
        <h1>Identifiquese e ingrese a un canal</h1>
        <div className="join_form">
        <form onSubmit={handleForm}>
          <div className="form_fields">
            <input name="user" type="text" onChange={handleChange} placeholder="Usuario" /> 
            <input name="room" type="text" onChange={handleChange} placeholder="Canal" /> 

            <Link to={`/chat?user=${info.user}&room=${info.room}`}>
            <button disabled={!info.room || !info.user} type="submit">GO</button>
            </Link>
          </div>
        </form>
        </div>
    </div>
  )
}

import React from 'react';
import useStyles from './styles';

export const Input = ({ message, setMessage, sendMessage }) => {
  const classes = useStyles();

  return (
      <form className={classes.root}  onSubmit={sendMessage}>
        <input 
        className={classes.input}
        value={message} autoFocus
        placeholder="mensaje nuevo..."
        onChange={e => setMessage(e.target.value)}
        />
        <button 
        className={classes.button}
        type="submit">Enviar</button>
        </form>
  )
}

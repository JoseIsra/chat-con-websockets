import React from 'react'
import { Message } from '../messages/Message';
import useStyles from './styles';
import ScrollToBottom from 'react-scroll-to-bottom';

export const MessagesContainer = ({ messages, userName }) => {
  const classes = useStyles();

  return (
    <ScrollToBottom className={classes.root}>
      {messages.map((message, index) => (
        <Message key={index} name={userName} message={message} />
      ))}
    </ScrollToBottom>
  )
}

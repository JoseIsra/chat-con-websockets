import React, { useState , useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import useStyles from './styles';
import { TopBar } from '../topbar/TopBar';
import { Input, MessagesContainer} from '../../components';

  let socket;

export const Chat = ({ location }) => {
  const classes = useStyles();
  const [info, setInfo] = useState({
    name: '',
    room: '',
  });
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [roomData, setRoomData] = useState([]);

  const END_POINT = 'http://localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(END_POINT, {
      extraHeaders: {
        "Access-Control-Allow-Origin":'*'
      }
    });

    setInfo({
      name,
      room
    });
    
    socket.emit('join',{ name, room },()=>{});
    return () => {
      socket.emit('disconnet');
      socket.off();
    }

  },[END_POINT, location.search]);


  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
    socket.on('roomData',(users) => {
      setRoomData(users);
      console.log(roomData);
    });


  },[roomData,messages]);

const sendMessage = (e) => {
  e.preventDefault();
  if (message) {
    socket.emit('sendMessage', message, ()=> {
      setMessage('');
    });
  }
};

  console.log(messages);
  return (
    <div className={classes.root}>
      <div className={classes.chatContainer}>
      <TopBar roomName={info.room} />
      <MessagesContainer messages={messages} userName={info.name}  />
      <Input message={message} 
      setMessage={setMessage}
      sendMessage={sendMessage}
      />
      </div>
      <h4>Usuarios en línea {roomData.users?.length} </h4>
    </div>
  )
}

import React from 'react';
import './Message.css';

import ReactEmoji from 'react-emoji';

export const Message = ({name, message: {text,user}}) => {
  let isThisEmisor = false;
  const nameWithTrim = name.trim().toLowerCase();

  if (user === nameWithTrim) {
    isThisEmisor = true;
  }

  return (
    isThisEmisor ?(
      <div className="messageContainer toTheRight">
        <p className="sentText pr-10">{nameWithTrim}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText withWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    ):(
      <div className="messageContainer toTheLeft">
        <div className="messageBox backgroundLight">
          <p className="messageText withBlack">{ReactEmoji.emojify(text)}</p>
        </div>
        <p className="sentText pl-10">{user}</p>
      </div>
    )
  )
}

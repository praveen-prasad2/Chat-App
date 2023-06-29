import React from 'react';
import { ChatBubbleLeftRightIcon, PhoneIcon,EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const CustomerHeader = ({ chat }) => {
  console.log("chat.description",chat.description);
  return (
    <div className='chat-header'>
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon   className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (

          <p className="header-text">{chat.description}</p>
          ):(
          <p className="header-text">No chats Selected</p>

        )}
        <EllipsisVerticalIcon className='icon-chat'/>
      </div>
    </div>
  );
};

export default CustomerHeader;
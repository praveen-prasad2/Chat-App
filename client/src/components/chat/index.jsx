import React from 'react';
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';
import Header from "../customHeader"; // Update the import statement for the Header component
import StandardMessageForm from "../customMessageForms/StandardMessageForm"
import Ai from '../customMessageForms/Ai';

const Chat = ({user,secret}) => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    user,
   secret
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />} // Pass chat as a parameter to the function
        renderMessageForm={(props)=>{

          if(chatProps.chat?.title.startsWith("AiChat_")){
            return <Ai props={props} activeChat={chatProps.chat}/>
          }
          return(
            <StandardMessageForm props={props} activeChat={chatProps.chat}/>
          )
        }}
      />
    </div>
  );
};

export default Chat;

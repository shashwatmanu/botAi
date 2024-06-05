import React from 'react'
import Convo from './Convo'
import { useState } from 'react';

const ChatHistory = ({savedChats, val}) => {
  
  
  
  return (
    <>
    <div style={{display:'flex', flexDirection:'column', width:'100%', height:'auto', overflow:'auto'}}>
        {savedChats.map((chat)=> <Convo chat={chat.chats} feedback={chat.feedback} rating={chat.rating}/>)}
    </div>
    </>
  )
}

export default ChatHistory
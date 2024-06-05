import React from 'react'
import TextBox from './TextBox'

const Chat = ({chats, reference}) => {
  return (
  <>
  <div style={{height:'100%', width:'100%', overflow:'auto', paddingBottom:'16px'}} ref={reference}> 
  {chats.map((chat)=> <TextBox chat={chat}/>)}
  </div>
  </>
  )
}

export default Chat
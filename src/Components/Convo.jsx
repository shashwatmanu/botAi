import React from 'react'
import human from "../Assets/human.png"
import ai from "../Assets/ai.png"
import Rating from '@mui/material/Rating';

const Convo = ({chat, feedback, rating}) => {
  return (
    <>
    <div style={{background: 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)', margin:'16px', borderRadius:'10px', boxShadow:'-4px 4px 15px 0px rgba(1,1,1,0.04)'}}>
 {chat.map((chat)=> (<div style={{margin:'16px', display:'flex'}}>
    <div style={{marginLeft:'20px'}}>
    <img alt='' src={chat.name==="human"?human:ai}/>
    </div>
    <div style={{display:'flex', flexDirection:'column', marginLeft:'20px'}}>
    <div style={{fontWeight:'700', fontSize:'16px', lineHeight:'18.38px'}}> {chat.name==="human"?"You":"Soul AI"}</div>
<div style={{fontFamily:'open-sans'}}>{chat.text}</div>
    </div>
    </div> ))}
    <div style={{margin:'20px'}}> Rating: <Rating value={rating} readOnly/> </div>
<div style={{margin:'20px'}}> Feedback: {feedback}</div>
 </div>
    </>
  )
}

export default Convo
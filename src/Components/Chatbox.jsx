import React, { useEffect } from 'react'
import "./Chatbox.css"
import { useState, useRef } from 'react';
import FirstStage from './FirstStage';
import Navbar from './Navbar';
import Ask from './Ask';
import Chat from './Chat';
import data from ".//..//Data/data.json"
import { private_createTypography } from '@mui/material';

const Chatbox = ({setSavedChats}) => {
    const [searchText, setSearchText] = useState("");
    const [showFirstStage, setShowFirstStage] = useState(true);
    const [chats, setChats] = useState([]);
    const chatbox = useRef(null);
    const [scroll, setScroll] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [open1, setOpen1] = React.useState(false);
    const [feedback, setFeedback] = useState("")

    const handleFeedbackChange = (e) =>{
      setFeedback(e.target.value)
    }

    const handleChatSave = () =>{
    let obj = {chats: chats, feedback: feedback, rating: value};
    setSavedChats(prev => [...prev, obj])
    setFeedback("");
    setValue(0);
    setChats([]);
    setShowFirstStage(true);
    handleClose1();
    }
  

    const handleClose = () => setOpen(false);
    const handleClose1 = () => setOpen1(false);

    const handleTextChange = (e) =>{
      setSearchText(e.target.value);
    }

    const handleCardClick = (ques) =>{
      setShowFirstStage(false);
      // setSearchText(ques);
      genererateResponse(ques);
      setSearchText("");
      setScroll(!scroll);
    }

    const genererateResponse = (ques) =>{

      if(ques){
        let ans = data.find((response)=>response.question.toLowerCase()===ques.toLowerCase());
let question, answer;
if(ans!==undefined){
question = {name: 'human', text: ans.question }
answer = {name:'ai', text: ans.response}
}
else{
  question = {name: 'human', text: searchText }
  answer = {name:'ai', text: `I’m sorry, but as an AI language model, I do not have the ability to answer your question currently`}
}
setChats([...chats, question, answer]);
      }

else{
let ans = data.find((response)=>response.question.toLowerCase()===searchText.toLowerCase());
let question, answer;
if(ans!==undefined){
question = {name: 'human', text: ans.question }
answer = {name:'ai', text: ans.response}
}
else{
  question = {name: 'human', text: searchText }
  answer = {name:'ai', text: `I’m sorry, but as an AI language model, I do not have the ability to answer your question currently`}
}
setChats([...chats, question, answer]);
}
    }

    const handleAsk = () =>{
      setShowFirstStage(false);
      genererateResponse();
      setSearchText("");
      setScroll(!scroll);
    }

    const handleSave = () =>{
      setOpen(true);
    }

    useEffect(()=>{
      chatbox.current?.lastElementChild?.scrollIntoView();
    },[scroll])

  
  return (
    <>
    <div className='chatbox'>
      <Navbar/>
{showFirstStage?<FirstStage data={data} handleCardClick={handleCardClick}/>:<Chat chats={chats} reference={chatbox}/>}
  
      <Ask handleAsk={handleAsk} handleTextChange={handleTextChange} searchText={searchText} open={open} handleSave={handleSave} handleClose={handleClose} value={value} setValue={setValue} open1={open1} setOpen1={setOpen1} handleClose1={handleClose1} feedback={feedback} handleFeedbackChange={handleFeedbackChange} handleChatSave={handleChatSave}/>
       
    </div>
    </>
  )
}

export default Chatbox
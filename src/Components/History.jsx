import React, { useEffect } from 'react'
import ChatHistory from './ChatHistory'
import { useState } from 'react'

const History = ({savedChats}) => {
const [val, setVal] = useState(0)
const [filteredChats, setFilteredChats] = useState([]);

  const captureValue = (e) =>{
setVal(e.target.value);
  }

  useEffect(()=>{
    // console.log(savedChats)
    // console.log(val);
    if(val==0){
      setFilteredChats(savedChats);
    }
    else{
    setFilteredChats(savedChats.filter((chat)=>chat.rating==val));
    }
  }, [val])
  return (
    <>
    <div style={{width:'100%', height:'100vh',  backgroundImage: 'linear-gradient(to right, rgba(215,199,244,0.2), rgba(151,133,186,0.2))', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2 style={{fontSize:'28px', fontWeight:'400'}}>Conversation History</h2>
        <select onChange={captureValue}>
        <option value="0" selected>All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Stars</option>

        </select>
        <ChatHistory savedChats={filteredChats} val={val}/>
    </div>
    </>
  )
}

export default History
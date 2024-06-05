import React, {useState} from 'react'
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import "./Chatbox.css"

const Ask = ({handleAsk, handleTextChange, searchText, open, handleSave, handleClose, value, setValue, open1, setOpen1, handleClose1, feedback, handleFeedbackChange, handleChatSave}) => {
  

  
  
  return (
   <>
    <div style={{justifySelf:'flex-end', marginTop:'auto', display:'flex', justifyContent:'space-around', width:'100%', marginBottom:'14px'}}>
            <input type='text' style={{width:'70%', height:'41px'}} onChange={handleTextChange} value={searchText}/>
            <button className='button' onClick={handleAsk}>Ask</button>
            <button className='button' onClick={handleSave}>Save</button>
            <Modal
        open={open}
        onClose={handleClose}
      >
       <div style={{position:'absolute', top:'50%', left:'50%', backgroundColor:'white', borderRadius:'10px',transform: 'translate(-50%, -50%)', height:'200px', width:'300px', display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
<div>Rate the Conversation</div>
<Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <button className='button' onClick={()=> {setOpen1(true); handleClose()}}>Next</button>
       </div>
      </Modal>
      <Modal
      open= {open1}
      onClose={handleClose1}
      >
     <div style={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', width:'60%', height:'335px', backgroundColor:'rgba(250,247,255,1)', borderRadius:'10px', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
      <div>Provide Additional Feedback</div>
      <div style={{alignSelf:'center', width:'80%'}}><textarea value={feedback} onChange={handleFeedbackChange} style={{width:'100%', height:'187px', textAlign:'top'}}/></div>
      <button className="button" onClick={handleChatSave} style={{alignSelf:'flex-end'}}>Submit</button>
     </div>
      </Modal>
        </div>
   </>
  )
}

export default Ask
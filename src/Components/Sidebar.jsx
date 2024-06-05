import React from 'react'
import "./Chatbox.css"
import logo from "../Assets/logo.png"
import edit from "../Assets/edit.png"
import { useNavigate } from 'react-router-dom';

const Sidebar = ({inApp}) => {
  let navigate = useNavigate();
  return (
    <>
    <div className={`sidebar ${inApp?'in-app':''}`}>
        <div style={{display:'flex', flexDirection:'column'}}>
        <div className='sidebar-color' style={{display:'flex', justifyContent:'space-around', width:'208px', height:'47px'}}>
            <div  style={{alignSelf:'center', marginTop:'6px'}}><img src={logo} alt='logo'/></div>
            <div style={{alignSelf:'center', fontSize:'20px'}}>New Chat</div>
            <div style={{alignSelf:'center', cursor:'pointer'}}><img src={edit} alt='edit' onClick={()=>navigate('/')}/></div>
        </div>
        <div>
            <button onClick={()=> navigate('/history')} className='sidebar-color' style={{border:'none', width:'175px', height:'39px', borderRadius:'10px', marginTop:'11px', fontWeight:'700', fontSize:'16px', marginLeft:'15px', cursor:'pointer'}}>Past Conversations</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar
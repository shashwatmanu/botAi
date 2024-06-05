import React, { useState } from 'react'
import human from "../Assets/human.png"
import ai from "../Assets/ai.png"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const TextBox = ({chat}) => {
    const date = new Date()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const [shouldShow, setShouldShow] = useState(false);
    const [showGreenUp, setShowGreenUp] = useState("");
    const [showGreenDown, setShowGreenDown] = useState("");

    const handleHover = () =>{
        setShouldShow(true);
    }
    const handleLeave = () =>{
        if(showGreenUp==="green"||showGreenDown==="red"){
            return
        }
        setShouldShow(false);
    }
    const handleClickUp = () =>{
        if(showGreenUp==="green") setShowGreenUp("black");
        else{
     setShowGreenUp("green");}
     setShowGreenDown("");
    } 
    const handleClickDown = () =>{
        if(showGreenDown==="red") setShowGreenDown("");
        else{
            setShowGreenDown("red");}
        setShowGreenUp("");
        
    } 
    
  return (
   <>
   <div onMouseOver={handleHover} onMouseOut={handleLeave} style={{width:'auto', backgroundColor:'rgba(215,199,244,0.13)', height:'105px', borderRadius:'20px', marginLeft:'28.3px', marginRight:'28.3px', marginTop:'16px', display:'flex', boxShadow:'3px 3px 3px 3px rgba(1,1,1,0.04)', alignItems:'center'}}>
 <div style={{marginLeft:'20px'}}><img alt='' src={chat.name==="human"?human:ai}/></div>
<div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', height:'100%', marginLeft:'18px'}}>
<div style={{fontWeight:'700', fontSize:'16px', lineHeight:'18.38px'}}> {chat.name==="human"?"You":"Soul AI"}</div>
<div style={{fontFamily:'open-sans'}}>{chat.text}</div>
<div style={{display:'flex'}}>
<div style={{fontFamily:'open-sans', fontSize:'12px', color:'rgba(0,0,0,0.62)'}}>{hours>12?hours-12:hours}:{minutes>10?minutes:"0"+minutes} {hours>12?"PM":"AM"}</div>
{(chat.name==="ai"&&shouldShow===true)?<><ThumbUpOffAltIcon fontSize='small' style={{marginLeft:'9px', height:'15px', color:`${showGreenUp}`}} onClick={handleClickUp}/>
<ThumbDownOffAltIcon fontSize='small' style={{ height:'15px', color:`${showGreenDown}`}} onClick={handleClickDown}/></>:""}

</div> 
</div>
   </div>
   </>
  )
}

export default TextBox
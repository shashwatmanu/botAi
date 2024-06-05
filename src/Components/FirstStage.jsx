import React from 'react'
import logo from "../Assets/main.png"
import "./Chatbox.css"

const FirstStage = ({data, handleCardClick}) => {
  let random1 = data[Math.floor(Math.random() * data.length)].question;
  let random2 = data[Math.floor(Math.random() * data.length)].question;
  let random3 = data[Math.floor(Math.random() * data.length)].question;
  let random4 = data[Math.floor(Math.random() * data.length)].question;
  return (
    <>
     <div style={{justifySelf:'flex-end', marginTop:'auto', fontWeight:'500', fontSize:'28px', lineHeight:'32.17px', textAlign:'center', marginBottom:'6px'}}>
            How Can I Help You Today?
        </div>
        <div style={{justifySelf:'center'}}>
            <img src={logo} alt='logo' style={{width:'65.3px', height:'69px'}}/>
        </div>
<div style={{display:'flex', flexWrap:'wrap', width:'100%', padding:'14px', marginLeft:'48px', marginTop:'auto'}}>

  <div onClick={()=>handleCardClick(random1)} className='shadow' style={{width: '45%', backgroundColor:'white', height:'111px', borderRadius:'5px', margin:'14px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
    <div style={{fontWeight:'700'}}>{random1} </div>
    <div style={{fontWeight:'400', color:'rgba(0,0,0,0.5)'}}>Get immedieate AI genererated Response</div>
    </div>

    <div  onClick={()=>handleCardClick(random2)} className='shadow' style={{width: '45%', backgroundColor:'white', height:'111px', borderRadius:'5px', margin:'14px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
    <div style={{fontWeight:'700'}}>{random2} </div>
    <div style={{fontWeight:'400', color:'rgba(0,0,0,0.5)'}}>Get immedieate AI genererated Response</div>
    </div>

    <div onClick={()=>handleCardClick(random3)} className='shadow' style={{width: '45%', backgroundColor:'white', height:'111px', borderRadius:'5px', margin:'14px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
    <div style={{fontWeight:'700'}}>{random3} </div>
    <div style={{fontWeight:'400', color:'rgba(0,0,0,0.5)'}}>Get immedieate AI genererated Response</div>
    </div>
    
    <div onClick={()=>handleCardClick(random4)} className='shadow' style={{width: '45%', backgroundColor:'white', height:'111px', borderRadius:'5px', margin:'14px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
    <div style={{fontWeight:'700'}}>{random4} </div>
    <div style={{fontWeight:'400', color:'rgba(0,0,0,0.5)'}}>Get immedieate AI genererated Response</div>
    </div>
  
</div>
        

    </>
  )
}

export default FirstStage
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chatbox from './Components/Chatbox';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from './Components/History';


function App() {
  const [savedChats, setSavedChats] = useState(JSON.parse(localStorage.getItem("savedChats"))?JSON.parse(localStorage.getItem("savedChats")):[]);

  useEffect(()=>{
    // console.log(savedChats)
localStorage.setItem("savedChats", JSON.stringify(savedChats));
  },[savedChats])
  


  return (
   <>
    <BrowserRouter>
   <div style={{display:'flex'}}>
    <Sidebar inApp/>

   
      <Routes>
        <Route exact path="/" element={<Chatbox setSavedChats={setSavedChats}/>}/>
          <Route path="/history" element={<History savedChats={savedChats}/>} />
       
      </Routes>
     

   
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;

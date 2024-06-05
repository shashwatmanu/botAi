import React from 'react'
import Drawer from '@mui/material/Drawer';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };


  return (
   <>
    <div style={{display:'flex', alignSelf:'flex-start'}}>
        <div className='menu-button'>
        <button onClick={toggleDrawer(true)} style={{background:'none', border:'none'}}><MenuIcon style={{color:'rgb(151,133,186)', cursor:'pointer'}}/></button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
        <Sidebar/>
      </Drawer>
       </div>
        <div style={{fontWeight:'700',fontSize:'28px', lineHeight:'32.17px', color:'rgb(151,133,186)', marginTop:'11px', marginLeft:'15px'}}>Bot AI</div>
        </div>

   </>
  )
}

export default Navbar
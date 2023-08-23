import React, { useState } from 'react'
import { BsMoon,BsMoonFill } from 'react-icons/bs';

const DarkMode = ({Toggle}) => {
  const [icon,setIcon] = useState(null);
  const iconToggle = () =>{
     setIcon(<BsMoon/>)
  }
  return (
    <div>
        <button  className='rounded-md border-2 px-5 py-1  ml-[620px] mt-3 shadow-md fixed top-0 ' onClick={() =>{
          Toggle();
          iconToggle();
        }}><BsMoonFill/></button>
    </div>
  )
}

export default DarkMode;
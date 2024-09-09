import  { useEffect, useRef, useState } from 'react'
import './autoslide.css'
interface autoprop{
  handleclick:()=>void
}
const Autoslide = ({handleclick}:autoprop) => {
const [isclicked,setIsclicked]=useState(false)
const slideinterval=useRef<number|null>(null)

// func
  const swap=()=>{
    setIsclicked(!isclicked)
   
  }
  
  const handleautoclick=()=>{
    swap()
  }
  useEffect(()=>{
    if(isclicked){
      slideinterval.current=setInterval(()=>{
        handleclick(1)
      },3000)
    }else{
      if(slideinterval.current){
        clearInterval(slideinterval.current)
      }
    }
    return()=>{
      if(slideinterval.current){
        clearInterval(slideinterval.current)
      }
    };
  },[isclicked])
  return (
    <div 
    
    onClick={handleautoclick}
    className={`auto-con border flex items-center rounded-md cursor-pointer  w-[80px] h-[30px] relative ${isclicked?'clicked border-green-500':'border-red-500'}`}>
        <div 
        id='circle'
        className="circle rounded-lg  w-[40px] h-[30px] border  absolute top-0 left-0 ">auto</div>
        <span className='absolute top-[15%] right-0 '>OFF</span>
        <span className='on absolute top-[15%] right-[10px] '>ON</span>
    </div>
  )
}

export default Autoslide
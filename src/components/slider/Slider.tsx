import { useEffect, useRef, useState } from 'react'
import Slide from './slide/Slide'
import './slider.css'
import {data} from './../../Data'
import {Islideobj} from './../../Data'
import Autoslide from './Autoslide/Autoslide'

const Slider:React.FC = () => {
    const[index,setIndex]=useState<number>(0)
    const slides=useRef<HTMLDivElement>(null)

  
    // func

    const handleclick=(direction:number)=>{
     if(direction===1){
        setIndex((prev:number)=>{
            const nextindex=prev+1;
            console.log(nextindex)
            return nextindex>=3?0:nextindex
        })
     }else{
        setIndex((prev:number)=>{
            const nextindex=prev-1;
            return nextindex<0?2:nextindex
        })
     }
  }

  return (
    <div className="slider  ">
        <div id='slides' style={{left:`-${index*100}%`}} className={`slides  w-[300%]`}>
            {

            data.map((item:Islideobj)=>{
                return(
                    <Slide item={item} key={item.id}/>
                )
            })
            }
            
             
        </div>
        <div
        onClick={()=>{handleclick(-1)}}
        className="btn btn-left">{'<<<'}</div>
        <div 
        onClick={()=>{handleclick(1)}}
        className="btn btn-right">{'>>>'}</div>
        <div className="auto absolute top-0 left-[45%] flex w-[100%]  ">
            <Autoslide
            handleclick={handleclick}
            />
        </div>
    </div>
  )
}

export default Slider
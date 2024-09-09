import { ShoppingCartOutlined } from '@mui/icons-material'
import Announcement from '../announcement/Announcement'
import { useState } from 'react'
const Header = () => {
    const [drop,setDrop]=useState(false)
    const dropdownclicked=()=>{
        setDrop(!drop)
    }
  return (
    <header>
        <Announcement/>
        <div className="header-content flex justify-between max-w-[1200px] mx-auto">
            <div className=''>
                <span className='desktop'>EN</span>
                <input className='outline-none border' type="text" />
            </div>
            <div className="logo">
                <span>SuperKing</span>
            </div>
            <div className='flex'>
                <div className="dropdown border mobile">
                    <span onClick={dropdownclicked} className="dheader cursor-pointer">v</span>
                    <div className={`dbody flex flex-col bg-blue-400 h-0 overflow-hidden transition-all duration-[2s] ${drop?'overflow-visible h-[scrollHeight] ':'h-0 overflow-hidden'}`}>
                    <span>REGISTER</span>
                    <span>LOGIN</span>
                    </div>
                </div>
                <div className='flex gap-2 desktop' >
                <span>REGISTER</span>
                <span>LOGIN</span>
                </div>
                <ShoppingCartOutlined/>
            </div>
        </div>
    </header>
  )
}

export default Header
"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Mountain from '../assets/mountain.png'
import { FaHome } from "react-icons/fa";
import { FcCandleSticks } from "react-icons/fc";
import { MdWork } from "react-icons/md";
import { FcBusiness } from "react-icons/fc";
import { FaUser,FaCaretDown } from "react-icons/fa";
import { round } from './../../node_modules/@popperjs/core/dist/esm/utils/math';
import { usePathname } from "next/navigation";
import { FcHome } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { MenuList } from "../dataLesson/DataMenuList"
import Link from 'next/link';
export default function Navbar() {

const [menuMobileOpen ,setmenuMobileOpenState ] = useState(0);

const handleClickOpenMobileMenu = () => {
  setmenuMobileOpenState(1);
  
};

const handleClickCloseMobileMenu = () => {
  setmenuMobileOpenState(0);
  
};

  const pathname = usePathname();

  
   
    


    
    
  return (
    <>
    <nav className='flex h-[60px] items-center bg-[#2F3645] justify-center relative z-[9999]'>

        <div className=' flex  w-full lg:mx-[80px] md:mx-[30px] xs:mx-[20px] justify-between items-center  max-w-[1920px]  '>

            <div className='flex text-white  items-center'>
            <div style={{width: '45px', height: '45px',}}>
            <Image
            src={Mountain}
            style={{objectFit:"cover",width:"100%",height:"auto"}}
            alt="Picture of the author"
      
    />
            </div>
            <p className='lg:text-[30px] md:text-[20px] xs:text-[16px] lg:px-[20px] xs:px-[10px]'>สื่อประสมอิเล็กทรอนิกส์</p>
            </div>



            <div className='lg:flex justify-between  text-white lg:text-[20px] md:text-[15px] xs:hidden'>

            {MenuList.map((item, index) => (
  <div key={index} className={`flex items-center cursor-pointer mx-[30px] ${
    (pathname === '/' && index === 0) || (pathname === '/lesson' && index === 1) || (pathname === '/test' && index === 2) || (pathname === '/contact' && index === 3)
      ? 'underline hover:underline-offset-1'
      : 'hover:underline underline-offset-1'
  }`}>
    {/* {index === 1 ? (
      <div className='dropdown flex flex-col items-center' ref={dropdownRef}>
      <button 
        className='dropbtn flex items-center justify-center hover:underline underline-offset-1'  
        onClick={() => { window.location.href = `/lesson`; }}
      >
        <FcCandleSticks style={{ color: '#FFFFFF', marginRight: '10px' }} />
        {item.MenuName}
        <FaCaretDown 
          style={{ 
            marginLeft: '5px', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease' 
          }} 
        />
      </button>
      
      {isOpen && (
        
        <div className='bg-white dropdown-content w-[150%] border mt-[45px] text-black rounded h-[1000%] overflow-hidden overflow-y-scroll'>
          <div class="divide-y divide-solid ">
          {LessonList.map((item,index) => (
          <div key={index} className='flex items-start hover:bg-[#E7F3FF] text-[14px] mt-[10px]'><LuDot style={{width:"30px",height:"30px"}}/>{item.title} {item.name}</div>
        ))}
         </div>
        </div>
      )}
    </div>
    ) : (
      <>
        {React.createElement(item.IconName, { style: { color: '#FFFFFF', marginRight: '10px' } })}
        <div>{item.MenuName}</div>
      </>
    )} */}
<Link key={index} href={item.link}>
<div  class="flex items-center">
{React.createElement(item.IconName, { style: { color: '#FFFFFF', marginRight: '10px' } })}
<div>{item.MenuName}</div>
</div>
</Link>

  </div>
))}
            </div>

            

            <div className='xs:flex justify-end  text-white lg:text-[20px] md:text-[15px] lg:hidden'>
            <div className="cursor-pointer" onClick={handleClickOpenMobileMenu}>
            <IoMenu style={{height:"30px",width:"30px",}}/>
            </div>
            <div
                className={`fixed w-[100vw] z-[450] left-0 top-0 h-full border bg-[grey] opacity-25 ${menuMobileOpen ? '' : 'hidden'}`}
            > </div>
            <div 
  className={`fixed top-0 bottom-0 right-0 z-[500] md:w-[40vw] xs:w-[45vw] bg-[#FFFFFF] ${
    menuMobileOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-500 ease-in-out overflow-y-auto`}
>
              <div className='p-[20px]' onClick={handleClickCloseMobileMenu}>
          <MdArrowForwardIos style={{height:"20px",width:"20px",color:"#FFFFFF",color:"black"}} />
          </div>

          <div class="divide-y divide-solid border ">
  {MenuList.map((item, index) => (
    index === 1 ? (
      <div key={index} class="flex flex-col">
      <div   class="text-[black] flex text-[14px]  p-[10px] items-center pl-5">{item.MenuName} </div>
      {/* {LessonList.map((text, index) => ( 
        <div key={index} class="flex" >
          <div class="md:p-[10px] xs:p-[5px] ml-[5px]">
          <RxDotFilled style={{height:"20px",width:"20px",color:"black"}}/>
          </div>
      <div class="text-[black] flex sm:text-[12px]  xs:text-[10px] md:p-[10px] xs:p-[5px] hover:bg-grey-600 cursor-pointer " >{text.title} {text.name}</div>
      </div>
    ))} */}
      </div>
    ) : (
      <div key={index} class="text-[black] flex  text-[14px] p-[10px] pl-5">{item.MenuName}</div>
    )
  ))}
</div>
              </div>
              
            </div>
            
            
            </div>
            
    </nav>
    </>
  )
}

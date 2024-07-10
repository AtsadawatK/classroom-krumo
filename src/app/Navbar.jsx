"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import Mountain from '../assets/mountain.png'
import { FaHome } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { FaUser,FaCaretDown } from "react-icons/fa";
import { round } from './../../node_modules/@popperjs/core/dist/esm/utils/math';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


    const MenuList = [
        {
            MenuName : "หน้าแรก",
            IconName : FaHome,
        },

        {
            MenuName : "บทเรียน",
            IconName : FaNetworkWired,
        },
        {
            MenuName : "แบบทดสอบ",
            IconName : FaNoteSticky,
        },

        {
            MenuName : "ครูผู้สอน",
            IconName : FaUser,
        },
    ]
  return (
    <>
    <nav className='flex h-[60px] items-center bg-[#56AEFF]'>

        <div className='flex  w-full mx-[100px] justify-between items-center'>

            <div className='flex text-white w-[40%]'>
            <div style={{width: '45px', height: '45px',}}>
            <Image
            src={Mountain}
            style={{objectFit:"cover",width:"100%",height:"auto"}}
            alt="Picture of the author"
      
    />
            </div>
            <p className='text-[30px] px-[20px]'>ห้องเรียนวิชาสังคมศึกษา </p>
            </div>

            <div className='flex justify-between w-[60%] text-white text-[20px]'>

            {MenuList.map((item, index) => (
  <div key={index} className='flex items-center cursor-pointer mx-[10px] hover:underline underline-offset-1'>
    {index === 1 ? (
      <div className='dropdown flex flex-col items-center' ref={dropdownRef}>
      <button 
        className='dropbtn flex items-center justify-center hover:underline underline-offset-1'  
        onClick={toggleDropdown}
      >
        <FaNetworkWired style={{ color: '#FFFFFF', marginRight: '10px' }} />
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
        <div className='bg-white dropdown-content w-[150%] border mt-[45px] text-black rounded'>
          <div className='hover:bg-[#E7F3FF]'>asasdas</div>
          <div className='hover:bg-[#E7F3FF]'>asasdas</div>
        </div>
      )}
    </div>
    ) : (
      <>
        {React.createElement(item.IconName, { style: { color: '#FFFFFF', marginRight: '10px' } })}
        <div>{item.MenuName}</div>
      </>
    )}
  </div>
))}
            </div>

            
            </div>
    </nav>
    </>
  )
}

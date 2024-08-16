"use client"

import {useState} from 'react'
import { IoMdDownload } from "react-icons/io";
import { FcFile } from "react-icons/fc";
import { FcPuzzle } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import { FcLink } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { IoQrCodeSharp } from "react-icons/io5";
import Swal from 'sweetalert2'
import { LessonAllList , PDFlist,Worklist,Gamelist,VdoList,Worklink,PowerpointDowload } from '../../../../dataLesson/DataLesson'
export default function LessonDetail({ params }) {
  
const lessonid = params.slug[0];

const FilterLesson = LessonAllList.find(data => data.urlLesson === lessonid);
console.log('FilterLesson:', FilterLesson);
console.log('lessonid', lessonid);

const FilterPDFLesson = PDFlist.filter(pdf => pdf.head === FilterLesson?.head);
const FilterWorkList = Worklist.filter(work => work.head === FilterLesson?.head);
const FilterGameList = Gamelist.filter(game => game.head === FilterLesson?.head);
const FilterVdoList = VdoList.filter(vdo => vdo.head === FilterLesson?.head);
const FilterWorklink = Worklink.filter(link => link.head === FilterLesson?.head);
const FilterPowerpointDowload = PowerpointDowload.filter(point => point.head === FilterLesson?.head);
  console.log('FilterPDFLesson:', FilterPDFLesson);

if (!FilterLesson) {
    return <div>ไม่พบบทเรียนที่คุณต้องการ</div>
  }

  const handleOpenQrcode = (name,qrcode) => {
    Swal.fire({
      title: name,
      text: " QR CODE ",
      imageUrl: qrcode,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Custom image",
    });
    console.log(qrcode)
  };

  
  return (
  <>
  
  
      
  <div className='2xl:px-[0px] lg:px-[80px] md:px-[30px] xs:px-[20px] w-full  pb-5'>
    <div className='lg:text-[40px] md:text-[25px] xs:text-[18px] pt-8'>
    {FilterLesson.title}
    </div>
    <div className='lg:text-[35px] md:text-[20px] xs:text-[16px] lg:pt-8 xs:pt-4'>
    สื่อการเรียนการสอน
    
    </div>
    <div className='text-[40px] border border-[#2F3645] w-[100%] mt-2 '>
    <div className='grid lg:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2'>
       {FilterPDFLesson.map((item,index) => (
      <div key={index} className="flex justify-center items-center flex-col my-6" onClick={() => { window.location.href = `/lesson/${FilterLesson.urlLesson}/${item.head}`, "_blank";}}>
        <div className='border sm:w-[150px] sm:h-[150px] xs:w-[100px] xs:h-[100px] flex justify-center items-center flex-col cursor-pointer hover:border-2 hover:border-[#2F3645]'>
        <div>
      
        <div class="md:w-[60px] md:h-[60px] xs:w-[30px] xs:h-[30px]">
          <FcFile style={{width:"100%",height:"100%"}}/>
          </div>
    </div>
          <div className='text-[12px] mt-[10px] text-center' >
          {item.name}
          </div>
          </div>
          <button type="button" class="inline-flex items-center border text-[14px] px-5 py-1 rounded-full mt-2">
          <IoMdDownload />ดาวน์โหลด</button>
          </div>
))} 

{FilterGameList.map((item, index) => (
  <div key={index} className="flex justify-center items-center flex-col my-6">
    <div className='border sm:w-[150px] sm:h-[150px] xs:w-[100px] xs:h-[100px] flex justify-center items-center flex-col cursor-pointer hover:border-2 hover:border-[#2F3645]' onClick={() => { window.open(item.url) }}>
    <div class="md:w-[60px] md:h-[60px] xs:w-[30px] xs:h-[30px]">
        <FcPuzzle style={{ width: "100%", height: "100%" }} />
      </div>
      <div className='text-[12px] mt-[10px] text-center'>
        {item.name}
      </div>
    </div>
    <button
      onClick={() => handleOpenQrcode(item.name,item.qrcode)} 
      type="button"
      className="inline-flex items-center border text-[14px] px-5 py-1 rounded-full mt-2"
    >
      <IoQrCodeSharp />   QR CODE
    </button>
  </div>
))}

{FilterVdoList.map((item,index) => (
      <div key={index} className="flex justify-center items-center flex-col my-6" >
        <div className='border sm:w-[150px] sm:h-[150px] xs:w-[100px] xs:h-[100px] flex justify-center items-center flex-col cursor-pointer hover:border-2 hover:border-[#2F3645]' onClick={() => { window.open(item.url) }}>
        <div>
      
        <div class="md:w-[60px] md:h-[60px] xs:w-[30px] xs:h-[30px]">
          <FaYoutube style={{width:"100%",height:"100%",color:"red"}}/>
          </div>
    </div>
          <div className='text-[12px] mt-[10px] text-center' >
          {item.name}
          </div>
          </div>
          <div style={{zIndex:999}}>
          <button
      onClick={() => handleOpenQrcode(item.name,item.qrcode)} 
      type="button"
      className="inline-flex items-center border text-[14px] px-5 py-1 rounded-full mt-2"
    >
      <IoQrCodeSharp />  QR CODE
    </button>
    </div>
          </div>
))} 

{FilterPowerpointDowload.map((item,index) => (
   <div
   key={index}
   className="flex justify-center items-center flex-col my-6"
   onClick={() => {
     const link = document.createElement('a');
     link.href = item.url;
     link.download = item.name; 
     link.click();
   }}
 >
        <div className='border sm:w-[150px] sm:h-[150px] xs:w-[100px] xs:h-[100px] flex justify-center items-center flex-col cursor-pointer hover:border-2 hover:border-[#2F3645]'>
        <div>
      
        <div class="md:w-[60px] md:h-[60px] xs:w-[30px] xs:h-[30px]">
          <FcVoicePresentation style={{width:"100%",height:"100%",color:"red"}}/>
          </div>
    </div>
          <div className='text-[12px] mt-[10px] text-center' >
          {item.name}
          </div>
          </div>
          <a href={item.url} download>
          <button type="button" class="inline-flex items-center border text-[14px] px-5 py-1 rounded-full mt-2">
          <IoMdDownload />ดาวน์โหลด</button>
          </a>
          </div>
))} 



    </div>
    </div>

    <div className='lg:text-[35px] md:text-[20px] xs:text-[16px] pt-8'>
    ใบงานและแบบทดสอบ
    </div>
    <div className='text-[40px] border border-[#2F3645] w-[100%] mt-2'>
    <div className='grid lg:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 '>
    {FilterWorkList .map((item,index) => (
      <div key={index} className="flex justify-center items-center flex-col my-6" onClick={() => { window.location.href = `/lesson/${FilterLesson.urlLesson}/work/${item.head}`,"_blank"; }}>
        <div className='border sm:w-[150px] sm:h-[150px] xs:w-[100px] xs:h-[100px] flex justify-center items-center flex-col cursor-pointer hover:border-2 hover:border-[#2F3645]'>
        <div>
      
          <div class="md:w-[60px] md:h-[60px] xs:w-[30px] xs:h-[30px]">
          <FcFile style={{width:"100%",height:"100%"}}/>
          </div>
    </div>
          <div className='text-[12px] mt-[10px] text-center' >
          {item.name}
          </div>
          </div>
          <button type="button" class="inline-flex items-center border text-[14px] px-5 py-1 rounded-full mt-2">
          <IoMdDownload />ดาวน์โหลด</button>
          </div>
))} 


{FilterWorklink.map((item,index) => (
      <div key={index} className="flex justify-center items-center flex-col my-6" onClick={() => { window.location.href = item.url; }}>
        <div className='border sm:w-[150px] sm:h-[150px] xs:w-[100px] xs:h-[100px] flex justify-center items-center flex-col cursor-pointer hover:border-2 hover:border-[#2F3645]'>
        <div>
      
          <div class="md:w-[60px] md:h-[60px] xs:w-[30px] xs:h-[30px]">
          <FcLink style={{width:"100%",height:"100%"}}/>
          </div>
    </div>
          <div className='text-[12px] mt-[10px] text-center' >
          {item.name}
          </div>
          </div>
          <button type="button" class="inline-flex items-center border text-[14px] px-5 py-1 rounded-full mt-2">
          <IoMdDownload />คลิก</button>
          </div>
))} 


    </div>
    </div>
  </div>
  </>
  )
}

"use client"

import {useState} from 'react'
import { IoMdDownload } from "react-icons/io";
import { FcFile } from "react-icons/fc";
import { LessonAllList , PDFlist } from '../../../../dataLesson/DataLesson'
export default function LessonDetail({ params }) {
  
const lessonid = params.slug[0];

const FilterLesson = LessonAllList.find(data => data.urlLesson === lessonid);
console.log('FilterLesson:', FilterLesson);
console.log('lessonid', lessonid);

const FilterPDFLesson = PDFlist.filter(pdf => pdf.head === FilterLesson?.head);
  console.log('FilterPDFLesson:', FilterPDFLesson);

if (!FilterLesson) {
    return <div>ไม่พบบทเรียนที่คุณต้องการ</div>
  }
  return (
  <>
  
  
      
  <div className='2xl:px-[0px] lg:px-[80px] md:px-[30px] xs:px-[20px] w-full '>
    <div className='text-[40px] pt-8'>
    {FilterLesson.head} {FilterLesson.title}
    </div>
    <div className='text-[30px] pt-8'>
    สื่อการเรียนการสอน
    </div>
    <div className='text-[40px] border border-indigo-600 w-[100%] mt-2 '>
    <div className='grid grid-cols-5 '>
       {FilterPDFLesson.map((item,index) => (
      <div key={index} className="flex justify-center items-center flex-col my-6" onClick={() => { window.location.href = `/lesson/${FilterLesson.urlLesson}/${item.name}`; }}>
        <div className='border w-[150px] h-[150px] flex justify-center items-center flex-col cursor-pointer'>
        <div>
      
          <div>
          <FcFile style={{width:"60px",height:"60px"}}/>
          </div>
    </div>
          <div className='text-[12px] mt-[10px] ' >
          {item.name}
          </div>
          </div>
          <button type="button" class="inline-flex items-center border text-[14px] px-5 py-1 rounded-full mt-2">
          <IoMdDownload />ดาวน์โหลด</button>
          </div>
))} 
    </div>
    </div>

    <div className='text-[30px] pt-8'>
    ใบงานและแบบทดสอบ
    </div>
    <div className='text-[40px] border border-indigo-600 w-[100%] mt-2'>
    <div className='grid grid-cols-5'>
    <div className="border flex justify-center items-center"><div className='border w-[150px] h-[150px] my-10'></div></div>
    <div className="border flex justify-center items-center"><div className='border w-[150px] h-[150px] my-10'></div></div>
    <div className="border flex justify-center items-center"><div className='border w-[150px] h-[150px] my-10'></div></div>
    <div className="border flex justify-center items-center"><div className='border w-[150px] h-[150px] my-10'></div></div>
    <div className="border flex justify-center items-center"><div className='border w-[150px] h-[150px] my-10'></div></div>
    </div>
    </div>
  </div>
  </>
  )
}

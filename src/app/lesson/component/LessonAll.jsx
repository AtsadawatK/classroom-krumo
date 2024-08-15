"use client"

import React from 'react'
import { FcSurvey } from "react-icons/fc";
import Image from 'next/image'
import { LessonAllList } from '../../../dataLesson/DataLesson'

export default function LessonAll() {

    
  return (
    <>

    <div class="flex w-full max-w-[1920px] justify-center mx-auto h-[20vh] bg-gray-600">
    </div>
    
    <div class="flex  justify-start  items-center max-w-[1920px] mx-auto">
        <div class="flex 2xl:px-[0px] lg:px-[80px] md:px-[30px] xs:px-[20px] pt-5 items-center">
        <div class="md:w-[50px] md:h-[50px] xs:w-[30px] xs:h-[30px]">
        <FcSurvey style={{width:"100%",height:"100%"}}/>
        </div>
        <div class="lg:text-[35px] md:text-[20px] xs:text-[16px] ">
        บทเรียนทั้งหมด
        </div>
        </div>
    </div>

  {/*   <div class=" border-t border-[1px] border-gray-600  2xl:px-[0px] xl:mx-[0px] lg:mx-[80px] md:mx-[30px] xs:mx-[20px] max-w-[1920px] mx-auto"></div> */}
    <div class="2xl:px-[0px] lg:px-[80px] md:px-[30px]  xs:px-[20px] max-w-[1920px] mx-auto pb-10">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 mt-5 ">
    {LessonAllList.map((item, index) => (
        <div key={index} >
  <div  className=" relative overflow-hidden group cursor-pointer hover:drop-shadow-xl hover:contrast-125" onClick={() => {window.location.href = `/lesson/${item.urlLesson}`;}}>
    <Image
      src={item.image}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover'
      }}
    />
    <div class="absolute top-0  right-0 bg-[#939185] z-555 p-[5px] text-[#FFFFFF] lg:text-[18px] md:text-[16px] xs:text-[14px]">บทที่ {index+1}</div>
    <div className="flex flex-col justify-between absolute bottom-0 translate-y-full group-hover:translate-y-0 bg-[#45474B] p-[5px] text-[#FFFFFF] w-full h-[50%] transition-all duration-300">
        <div class="flex justify-center pt-3 text-[#EEEDEB] lg:text-[18px] md:text-[14px] xs:text-[12px] text-center">
        {item.title}
        </div>
        <div class="flex justify-between">
        <div class="bg-[#8D493A] p-0.5 px-2 rounded-3xl lg:text-[16px] md:text-[12px] xs:text-[10px]">
        By Siriwan Suksawat
        </div>
        <div class="text-[#EEEDEB] lg:text-[18px] md:text-[14px] xs:text-[12px]">
        คลิกเพื่อเข้าสู่เนื้อหา
        </div>
        </div>
      </div>
    
  </div>
  
  </div>
))}
  
</div>
</div>
    </>
  )
}

"use client"

import React from 'react'
import lesson1 from '../../../assets/cover_lesson1.png'
import lesson2 from '../../../assets/cover_lesson2.png'
import lesson3 from '../../../assets/cover_lesson3.png'
import lesson4 from '../../../assets/cover_lesson4.png'
import { Recommendlesson } from "../../../dataLesson/DataLesson"
import Image from 'next/image'
export default function SectionWelcome() {

  
  
  return (
    <>
    <div className='flex justify-center pb-[50px] '>
    <div className='max-w-[1920px] '>
    <div className=' flex 2xl:mx-[0px] lg:mx-[80px] md:mx-[30px] xs:mx-[20px] mt-[20px] lg:text-[30px] md:text-[20px] xs:text-[14px] items-end '>ยินดีต้อนรับเข้าสู่เว็บไซต์ <div className='mx-[10px] lg:text-[30px] md:text-[20px] xs:text-[14px] items-center text-[blue]'>ห้องเรียนสังคมศึกษา</div></div>
    

    <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-6  2xl:mx-[0px] lg:mx-[80px] md:mx-[30px] xs:mx-[20px] mt-[20px]">
  <div className=''>
    <div className=' font-semibold '>
      คำอธิบายรายวิชา  รหัสวิชา 123456789
    </div>
    <div className=' mt-[10px]'>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ศึกษาและวิเคราะห์ การเผยแผ่ และการนับถือพระพุทธศาสนาไปสู่ประเทศต่างๆ ทั่วโลกและการนับถือพระพุทธศาสนาของประเทศเหล่านั้นในปัจจุบัน ความสำคัญของพระพุทธศาสนา พุทธประวัติจากพระพุทธรูปปางต่างๆ หรือประวัติศาสดาที่ตนนับถือ ประพฤติตนตามแบบอย่างการดำเนินชีวิตและข้อคิดจากประวัติสาวก  สังฆคุณและธรรมสำคัญในกรอบอริยสัจ ๔ พุทธศาสนสุภาษิต การปฏิบัติตนตามหลักธรรม การดำเนินชีวิตด้วยวิธีคิดแบบโยนิ โสมนสิ การ สวดมนต์ แผ่เมตตา บริหารจิตและเจริญปัญญา หน้าที่และบทบาทของสาวกและปฏิบัติตนต่อสาวกในศาสนพิธีที่บ้าน การสนทนา การแต่งกาย มรรยาทการพูดได้ถูกต้องปฏิบัติตนอย่างเหมาะสมต่อบุคคลต่างๆ 
    </div>
  </div>
  <div className='  lg:px-[20px] xs:px-[0px]'>
    <div className='underline text-[25px] text-center underline-offset-8'>บทเรียนที่น่าสนใจ</div>
    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 gap-6 mt-[10px]  xl:h-auto lg:h-[70%] xs:overflow-auto xs:overflow-hidden xs:overflow-y-scroll xs:overflow-y-hidden xs:py-[10px]">


    {Recommendlesson.map((text,index) => (
    <div key={index} className='flex  rounded border cursor-pointer hover:border-[#56AEFF]' onClick={() => {window.location.href = `/lesson/${text.link}`;}}>
      <div className="flex items-center  w-[200px] pr-[10px]">
        <Image
      src={text.image}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '100%',
        objectFit:"cover"
      }}
    /></div>
      <div className='w-[100%] p-[5px]'>
        <div className="text-[20px] font-semibold">{text.label}</div>
        <div className="w-[100%] lg:text-[16px] md:text-[14px] xs:text-[12px] ">{text.title}</div>
      </div>
    </div>
))}
    
   


    </div>
  </div>
 

</div>
</div>
</div>
    </>
  )
}

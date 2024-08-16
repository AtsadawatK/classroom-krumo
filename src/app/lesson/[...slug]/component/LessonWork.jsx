"use client"

import { useState } from 'react';
import { Worklist, } from '../../../../dataLesson/DataLesson'


import './sample.css';




export default function LessonWork({params}) {
  const PDFName = decodeURIComponent(params.slug[2]);
    console.log("URLName :" ,PDFName)
    console.log("PDF List : ",Worklist)

  const FilterPDFLesson = Worklist.find(data => data.head === PDFName);
  console.log("Filter PDF List : ",FilterPDFLesson)

  return (
    <>
    <div class="h-[calc(100vh-60px)] pb-5">


<div class="flex justify-center flex-col items-center pt-7 ">
  <div class="lg:text-[35px] md:text-[20px] xs:text-[16px] font-semibold">{FilterPDFLesson.title} 
</div>
<div class="ml-4 lg:text-[25px] md:text-[20px] xs:text-[14px]">เรื่อง {FilterPDFLesson.name} 
</div>
</div>


<div class=" lg:px-[80px] md:px-[30px] xs:px-[20px]  h-[85%]">
<a href={FilterPDFLesson.urlPDFfile}>ดููเอกสาร</a>
</div>


</div>
    </>
  )
}

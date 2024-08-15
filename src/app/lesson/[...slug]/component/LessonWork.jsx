"use client"

import { useState } from 'react';
import { Worklist, } from '../../../../dataLesson/DataLesson'


import './sample.css';




export default function LessonWork({params}) {
  const PDFName = decodeURIComponent(params.slug[2]);
    console.log("URLName :" ,PDFName)
    console.log("PDF List : ",Worklist)

  const FilterPDFLesson = Worklist.find(data => data.name === PDFName);
  console.log("Filter PDF List : ",FilterPDFLesson)

  return (
    <>
    <div class="h-[calc(100vh-60px)] ">


<div class="flex justify-center flex-col items-center pt-7 ">
  <div class="text-[35px]">{FilterPDFLesson.title} 
</div>
<div class="ml-4 text-[25px]">เรื่อง {FilterPDFLesson.name} 
</div>
</div>


<div class=" lg:px-[80px] md:px-[30px] xs:px-[20px]  h-[85%]">
 <embed src={FilterPDFLesson.urlPDFfile} type="application/pdf" width="100%" height="100%" style={{backgroundColor:"red"}}/> 
</div>


</div>
    </>
  )
}

"use client"

import {  useState } from 'react';
import { PDFlist, } from '../../../../dataLesson/DataLesson'


import './sample.css';



export default function LessonPDF({params}) {
  const PDFName = decodeURIComponent(params.slug[1]);

    console.log("URLName :" ,PDFName)
    console.log("PDF List : ",PDFlist)

  const FilterPDFLesson = PDFlist.find(data => data.name === PDFName);
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


    <div class="lg:flex xs:hidden lg:px-[80px] md:px-[30px] xs:px-[20px] h-[85%]">
     <embed src={FilterPDFLesson.urlPDFfile} type="application/pdf" width="100%" height="100%" /> 
    </div>

    <div class="xs:flex lg:hidden lg:px-[80px] md:px-[30px] xs:px-[20px] h-[85%]">
     <embed src={`${FilterPDFLesson.urlPDFfile}#zoom=50`} type="application/pdf" width="100%" height="100%" /> 
    </div>


    </div>
    </>
  )
}

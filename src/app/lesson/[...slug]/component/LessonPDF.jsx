"use client"

import {  useState,useEffect } from 'react';
import { PDFlist } from '../../../../dataLesson/DataLesson'


import './sample.css';



export default function LessonPDF({params}) {
  
  const PDFName = decodeURIComponent(params.slug[1]);

 

  const FilterPDFLesson = PDFlist.find(data => data.head === PDFName);


  return (
    <>
    <div class="h-[calc(100vh-60px)] pb-5">


    <div class="flex justify-center flex-col items-center pt-7 ">
      <div class="lg:text-[35px] md:text-[20px] xs:text-[16px] font-semibold">{FilterPDFLesson.title} 
    </div>
    <div class="ml-4 lg:text-[25px] md:text-[20px] xs:text-[14px]">เรื่อง {FilterPDFLesson.name} 
    </div>
    </div>


   



    <div class="lg:px-[80px] md:px-[30px] xs:px-[20px] h-[85%]">
    <iframe src={`${FilterPDFLesson.urlPDFfile}#zoom=50`} type="application/pdf" width="100%" height="100%"></iframe>

</div>



    </div>
    </>
  )
}

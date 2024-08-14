"use client"

import { useCallback, useState } from 'react';
import { PDFlist,LessonAllList } from '../../../../dataLesson/DataLesson'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import './sample.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/'
};

const maxWidth = 800;

export default function LessonPDF({params}) {
  const PDFName = decodeURIComponent(params.slug[1]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  /* function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  } */

    
    console.log("URLName :" ,PDFName)
    console.log("PDF List : ",PDFlist)

  const FilterPDFLesson = PDFlist.find(data => data.name === PDFName);
  console.log("Filter PDF List : ",FilterPDFLesson)

  return (
    <>
    <div class="flex justify-center flex-col items-center pt-7">
      <div class="text-[35px]">{FilterPDFLesson.title} 
    </div>
    <div class="ml-4 text-[25px]">เรื่อง {FilterPDFLesson.name} 
    </div>
    </div>
    <div className="Example">
      <div className="Example__container">
       
        <div className="Example__container__document" >
          <Document file={FilterPDFLesson.urlPDFfile} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages || 0), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
    </>
  )
}


"use client"

import LessonDetail from "./component/LessonDetail";
import LessonPDF from "./component/LessonPDF";


export default function Detail({params}) {

    const url = (params.slug);
    if(url.length == 2) {
      return <> <LessonPDF params={params} /> </>
    }
  return (
   <>
   <LessonDetail params={params} />
   </>
  );
}


"use client"

import LessonDetail from "./component/LessonDetail";
import LessonPDF from "./component/LessonPDF";
import LessonWork from "./component/LessonWork";


export default function Detail({params}) {

    const url = (params.slug);
    if(url.length == 2) {
      return <> <LessonPDF params={params} /> </>
    }
    if(url.length == 3) {
      return <> <LessonWork params={params} /> </>
    }
  return (
   <>
   <LessonDetail params={params} />
   </>
  );
}

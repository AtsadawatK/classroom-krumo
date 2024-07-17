import Image from "next/image";
import SectionCover from "./component/SectionCover/SectionCover";
import SectionWelcome from "./component/SectionWelcome/SectionWelcome";

export const metadata = {
  title: 'สื่อประสมอิเล็กทรอนิกส์',
  description: 'ห้องเรียนวิชาสังคมศึกษา By ครูศิริวรรณ',
}


export default function Home() {
  return (
   <>
   <SectionCover />
  <SectionWelcome />
   </>
  );
}

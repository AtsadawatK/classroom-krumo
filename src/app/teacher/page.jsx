import Image from "next/image";
import Teacher from './component/teacher'

export const metadata = {
  title: 'สื่อประสมอิเล็กทรอนิกส์',
  description: 'ห้องเรียนวิชาสังคมศึกษา By ครูศิริวรรณ',
}


export default function Home() {
  return (
   <>
    <Teacher />
   </>
  );
}

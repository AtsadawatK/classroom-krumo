import Image from "next/image";
import SectionCover from "./component/SectionCover/SectionCover";
import SectionWelcome from "./component/SectionWelcome/SectionWelcome";

export default function Home() {
  return (
   <>
   <SectionCover />
  <SectionWelcome />
   </>
  );
}

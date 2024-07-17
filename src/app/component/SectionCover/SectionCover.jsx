import React from 'react'
import Image from 'next/image'
import cover from '../../../assets/cover_main.png'
export default function SectionCover() {


   
  return (
    <>
    <div className='flex justify-center'>


    <div className='w-full border h-[50vh] bg-[#E3E3E3] max-w-[1920px] '>
    <Image
      src={cover}
      alt="Picture of the author"
      style={{
        width: '100%',
        height: '100%',
        objectFit:"cover"
      }}
    />
        </div>


    </div>
    </>
  )
}

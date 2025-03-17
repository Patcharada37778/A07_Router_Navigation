"use client"

import { useState } from 'react';
import Image from 'next/image';
import styles from './banner.module.css'
import { useRouter } from 'next/navigation';

export default function Banner () {
  const covers = ['/images/cover.jpg', '/images/cover2.webp', '/images/cover3.jpg', '/images/cover4.jpg']
  const [index, setIndex] = useState(0)
  const router = useRouter();

  return(
    <div className={styles.banner} onClick={() => {setIndex(index+1)}}>
      <Image 
        src={covers[index % 4]} 
        alt="cover" 
        fill={true} 
        priority 
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1 className='text-4xl font-medium'>where every event finds its venue</h1>
        <h3 className='text-xl font-serif'>your special event, our priority</h3>
      </div>
      <button 
        className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-6 m-4 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent' 
        onClick={(e) => {e.stopPropagation(); router.push('/venue')}}
      >
        Select Venue
      </button>
    </div>
  );
}

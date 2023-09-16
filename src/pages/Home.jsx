import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Banner from '../components/ui/Banner'
import Mainbanner from '../components/ui/Mainbanner'
import { ArrowUp } from 'lucide-react';
import News from '../components/News';

function Home() {

  const [showTop, setShowTop]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 400 )
      {
        setShowTop(true);
      }
      else
      {
        setShowTop(false);
      }
    })
  },[]);

  const handleClick = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }

  return (
    <div className='p-6 lg:w-full sm:min-w-fit'>
      {
        showTop && (<button className='sm:fixed sm:bottom-0 sm:right-0 sm:m-6 sm:bg-red-500 sm:p-3 sm:rounded sm:text-white' onClick={handleClick}><ArrowUp/></button>)
      }
      <Banner/>
      <Mainbanner/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Home
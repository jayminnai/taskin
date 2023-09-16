import axios from 'axios';
import { ArrowRightIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Newscard from './ui/Newscard';

function News() {

  const [newsData, setNewsData]=useState([]);

  useEffect(()=>{
    fetchNewsData();
  },[])

  const fetchNewsData = async() => {
    const responseData=await axios.get(`https://dummyjson.com/products/`);
    setNewsData(responseData.data.products);
  }

  return (
    <div className='p-6 my-5'>
      <div className='flex justify-between px-7'>
        <h1 className='font-bold text-3xl'>Latest News</h1>
        <a href="">
          <h1 className='flex gap-x- font-semibold text-red-500'>See all <ArrowRightIcon color='red'/></h1>
        </a>
      </div>
      <div className='flex justify-center my-6 items-start flex-wrap gap-x-3 gap-y-12'>
        {
          newsData?.map((news)=>{
            return(
              <Newscard props={news}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default News
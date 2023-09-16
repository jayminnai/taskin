import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Mainbanner() {

  const [bannerData, setBannerData]=useState({});
  const [postId, setPostID]=useState(localStorage.getItem('proid'));
  const [isLoading, setIsLoading]=useState(false);


  useEffect(()=>{
    setPostID(localStorage.getItem('proid'));
    getSingleProduct(postId);
  },[postId,localStorage.getItem('proid')]);


  const getSingleProduct = async(proid) => {
    if(!proid)
    {
      const resData=await axios.get(`https://dummyjson.com/products/1`);
      setBannerData({...resData.data});
    }
    else
    {
      setIsLoading(true);
      const resData=await axios.get(`https://dummyjson.com/products/${proid}`);
      setBannerData({...resData.data});
      setIsLoading(false);
    }
  }


  return (
    <div className='py-6 my-5 flex justify-stretch text-center items-center rounded-md'>
      {
        isLoading ?
        <h1 className='text-3xl font-extrabold text-center'>...Loading</h1>
        :
        <>
        <div className='w-1/2 p-6'>
          <img src={bannerData?.thumbnail} className='rounded-md w-full object-fill h-80' alt="" />
        </div>
        <div className='p-6 text-left flex flex-col gap-y-10 w-1/2'>
                        <div className='flex items-center gap-x-2'>
                            <div className='h-10 w-10 rounded-full bg-black'>
                                <img src={bannerData?.thumbnail} alt="" className='w-full h-full object-cover rounded-full' />
                            </div>
                            <span>Stock</span> : <span>{bannerData?.stock}</span>
                        </div>
                        <h1 className='text-3xl font-bold'>{bannerData?.title}</h1>
                        <p className='text-xl font-semibold'>{bannerData?.description}</p>
                        <div className='flex items-center gap-x-2'>
                            <span className='text-red-600 font-semibold text-xl'>{bannerData?.brand}</span> <span>.</span> <span> Price : {bannerData?.price}</span>
                        </div>
                    </div>
        </>
      }
    </div>
  )
}

export default Mainbanner
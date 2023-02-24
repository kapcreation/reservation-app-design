import React from 'react'
import { apartmentImg, resortImg, villaImg, inspiration } from '../assets'

const Gallery = () => {
  return (
    <div className='py-12'>
      <div className="container mx-auto px-4">
        <div className='pl-1 mb-4'>
          <h1 className='font-bold text-slate-900 text-2xl'>Get inspiration</h1>
          <p className='text-slate-500'>Quick and easy plan for your next trip</p>
        </div>
        <div className="grid auto-rows-[150px] gap-2 md:grid-cols-4">
          <div className="w-full md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3 hover:ring cursor-pointer hover:opacity-75">
            <img src={inspiration} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:col-start-3 md:col-end-5 hover:ring cursor-pointer hover:opacity-75">
            <img src={apartmentImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full hover:ring cursor-pointer hover:opacity-75">
            <img src={resortImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-full hover:ring cursor-pointer hover:opacity-75">
            <img src={villaImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
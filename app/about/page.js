"use client"
import React from 'react'
import Link from 'next/link'
import { FaPlay } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css'

const cards = [
  { id: 1, img: 'https://preview.colorlib.com/theme/unwind/images/person_1.jpg.webp', title: 'Roger Scott', description: 'TFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { id: 2, img: 'https://preview.colorlib.com/theme/unwind/images/person_2.jpg.webp', title: 'Rohan Singh', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { id: 3, img: 'https://preview.colorlib.com/theme/unwind/images/person_3.jpg.webp', title: 'Arjun Singhania', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { id: 4, img: 'https://preview.colorlib.com/theme/unwind/images/person_4.jpg.webp', title: 'Robert Jone', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
];

const about = () => {
  return (
    <div className='about-page'>
      <div className="bg-img">
        <div className="bg-text">
          <h1 className='text-6xl text-white font-[700]'>About us</h1>
        </div>
      </div>

      <div className="text-gray-600 body-font max-w-screen-xl mx-auto px-4 py-16">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col sm:flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded-sm opacity-75" alt="hero" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={870}
              height={580} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <span className="text-amber-600 capitalize">About us</span>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">HotelStay A Hotel Booking Agency
            </h1>
            <p className="mb-8 leading-relaxed">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex cursor-pointer text-white capitalize bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Booking your room now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='video-section text-center'>
        <div className='flex flex-col justify-center items-center'>
          <p className='uppercase text-white text-2xl font-[500]'>watch our luxurious hotel</p>
          <h1 className='capitalize text-6xl text-white my-3 font-[600]'>take a tour</h1>
          <div className='text-3xl bg-[#c5a880] border p-4 rounded-full text-white animate-ping transition delay-200 duration-500'>
            <Link href="https://youtu.be/qyuDMZBWaDw?si=RZZKao7rfgapq63A" >
              <div className='text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto animate-ping'>

                <FaPlay />
              </div>

            </Link>
          </div>
        </div>

      </div>

      <div className='flex flex-col justify-center items-center  max-w-screen-xl mx-14 px-4 py-20 text-center'>
        <span className='uppercase text-2xl text-[#c5a880]'>testimonial</span>
        <h1 className='text-5xl font-[600] capitalize'>happy guests</h1>
        <div className='flex w-[97vw] my-16'>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              545: { slidesPerView: 1 },
              855: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="p-4 bg-white shadow-md rounded-md text-center h-[300px] max-w-screen-xl flex justify-center items-center flex-col flex-wrap">
                  <Image src={card.img} alt="" className='rounded-full' width={70}
                    height={580} />
                  <h2 className="text-xl font-semibold my-2">{card.title}</h2>
                  <p className="text-gray-600 mt-2">{card.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>


    </div>
  )
}

export default about

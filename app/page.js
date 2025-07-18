"use client"
import { FaWifi, FaConciergeBell, FaUtensils, FaSwimmingPool, FaSpa, FaHeadset, FaPlay } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css'

const clickEvent = ()=>{
  alert("Thanks for Booking.")
}

const blogs = [
  {
    id: 1,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_1.jpg.webp',
    title: 'Best Hotel Near Beach in Hawaii',
    date: 'ADMIN JULY.10, 2025',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    views: '1.2K',
    comments: '6'
  },
  {
    id: 2,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_2.jpg.webp',
    title: 'Luxury Stay in Nature’s Lap',
    date: 'ADMIN JULY.10, 2025',
    desc: 'Explore scenic views and luxurious rooms nestled in the arms of nature.',
    views: '1.2K',
    comments: '6'
  },
  {
    id: 3,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_3.jpg.webp',
    title: 'Top 10 Budget Hotels to Explore',
    date: 'ADMIN JULY.10, 2025',
    desc: 'Perfect blend of comfort and affordability for your vacation stay.',
    views: '1.2K',
    comments: '6'
  },
];

const services = [
  { id: 'wifi', icon: <FaWifi size={30} />, title: 'Free Wifi' },
  { id: 'booking', icon: <FaConciergeBell size={30} />, title: 'Easy Booking' },
  { id: 'restaurant', icon: <FaUtensils size={30} />, title: 'Restaurant' },
  { id: 'pool', icon: <FaSwimmingPool size={30} />, title: 'Swimming Pool' },
  { id: 'health', icon: <FaSpa size={30} />, title: 'Beauty & Health' },
  { id: 'support', icon: <FaHeadset size={30} />, title: 'Help & Support' },
];

const cards = [
  { id: 1, img: 'https://preview.colorlib.com/theme/unwind/images/person_1.jpg.webp', title: 'Roger Scott', description: 'TFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { id: 2, img: 'https://preview.colorlib.com/theme/unwind/images/person_2.jpg.webp', title: 'Rohan Singh', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { id: 3, img: 'https://preview.colorlib.com/theme/unwind/images/person_3.jpg.webp', title: 'Arjun Singhania', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
  { id: 4, img: 'https://preview.colorlib.com/theme/unwind/images/person_4.jpg.webp', title: 'Robert Jone', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
];

export default function Home() {
  const [active, setActive] = useState('')
  return (
    <section className="home-page overflow-x-hidden">

      <div className="hero-section">
        <div className="hero-text text-center px-4 py-4">
          <p className='md:text-2xl text-xl text-white font-[600]'>Enjoy Your Wonderful Holidays With A Great Luxury Experience!</p>
          <h1 className='md:text-4xl text-2xl text-red-500 font-[700] '>Most Relaxing Place</h1>
        </div>
      </div>

      <div className="text-gray-600 body-font max-w-screen-xl mx-auto px-4 py-16">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col sm:flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Example image"
              width={870}
              height={580}
              className="rounded-lg"
            />

          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <span className="text-amber-600 capitalize">About us</span>
            <h1 className="title-font md:text-4xl text-2xl mb-4 font-medium text-gray-800">HotelStay A Hotel Booking Agency
            </h1>
            <p className="mb-8 leading-relaxed">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex cursor-pointer text-white capitalize bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={clickEvent} >Booking your room now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="service-sectionn text-center py-10 px-4 sm:px-6 lg:px-10">
        <span className="text-[#c5a880] md:text-2xl">StayHotel Service</span>
        <h1 className="text-2xl md:text-4xl my-2 font-semibold">Explore Our Hotel Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.id}
              onClick={() => setActive(service, id)}
              className="cursor-pointer"
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 hover:bg-[#c5a880] hover:text-white rounded-[50px] shadow-md transition-all duration-300">
                <div className="mb-4 text-3xl">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col my-8 justify-center items-center max-w-screen-xl mx-auto px-4 py-20 text-center">
        <span className="uppercase text-[#c5a880]">our rooms</span>
        <h1 className="capitalize md:text-5xl text-2xl font-semibold my-2">featured rooms</h1>

        <div className="grid gap-10 mt-10 md:grid-cols-3">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              alt="Suite Room"
              width={870}
              height={580}
              className="object-cover object-center w-full h-64"
              src="https://preview.colorlib.com/theme/unwind/images/room-1.jpg.webp"
            />
            <div className="p-6 text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Suite Room</h2>
              <p className="text-base text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="flex justify-between items-center gap-4 mt-4">
                <p className="text-[#c5a880] font-medium">$450/NIGHT</p>
                <button className="border px-5 py-2 rounded hover:bg-[#c5a880] hover:text-white transition">
                  Book now
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md flex flex-col-reverse md:flex-col">
            <div className="p-6 text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Family Room</h2>
              <p className="text-base text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="flex justify-between items-center gap-4 mt-4">
                <p className="text-[#c5a880] font-medium">$500/NIGHT</p>
                <button className="border px-5 py-2 rounded hover:bg-[#c5a880] hover:text-white transition">
                  Book now
                </button>
              </div>
            </div>
            <Image
              width={870}
              height={580}
              alt="Family Room"
              className="object-cover object-center w-full h-64"
              src="https://preview.colorlib.com/theme/unwind/images/room-2.jpg.webp"
            />
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              width={870}
              height={580}
              alt="Deluxe Room"
              className="object-cover object-center w-full h-64"
              src="https://preview.colorlib.com/theme/unwind/images/room-3.jpg.webp"
            />
            <div className="p-6 text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Deluxe Room</h2>
              <p className="text-base text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="flex justify-between items-center gap-4 mt-4">
                <p className="text-[#c5a880] font-medium">$650/NIGHT</p>
                <button className="border px-5 py-2 rounded hover:bg-[#c5a880] hover:text-white transition">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='video-section text-center'>
        <div className='flex flex-col justify-center items-center'>
          <p className='uppercase text-white md:text-2xl text-xl font-[500]'>watch our luxurious hotel</p>
          <h1 className='capitalize md:text-6xl text-2xl text-white my-3 font-[600]'>take a tour</h1>
          <div className='text-3xl bg-[#c5a880] border p-4 rounded-full text-white animate-ping transition delay-200 duration-500'>
            <Link href="https://youtu.be/qyuDMZBWaDw?si=RZZKao7rfgapq63A" >
              <div className='md:text-3xl text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto animate-ping'>

                <FaPlay />
              </div>

            </Link>
          </div>
        </div>

      </div>

      <div className='flex justify-center items-center flex-col my-20 max-w-screen-xl mx-auto px-4 py-20 text-center'>
        <span className='uppercase text-[#c5a880] md:text-2xl'>resto & bar</span>
        <h1 className='capitalize font-semibold md:text-5xl text-2xl'>restaurant & bar</h1>

        <div className='relative w-full h-52 my-10 opacity-70'>
          <Image
            src="https://preview.colorlib.com/theme/unwind/images/resto-bar.jpg.webp"
            alt="Restaurant Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="text-gray-600 body-font">
          <div className="container px-20 py-10 mx-auto">
            <div className="flex flex-wrap -m-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="p-2 lg:w-[400px] md:w-1/2 w-full">
                  <div className="menu-card h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={`https://preview.colorlib.com/theme/unwind/images/menu-${item}.jpg.webp`}
                        alt={`Menu ${item}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex gap-15 items-center">
                      <h1 className="title-font font-medium">Grilled Beef with potatoes</h1>
                      <p className="text-[#c5a880]">$25</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center  max-w-screen-xl mx-auto px-4 py-20 text-center'>
        <span className='uppercase md:text-2xl text-[#c5a880]'>testimonial</span>
        <h1 className='md:text-5xl font-[600] text-2xl capitalize'>happy guests</h1>
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

      <div className='flex flex-col items-center  max-w-screen-xl py-20 text-center mx-auto px-5 my-10'>
        <span className='md:text-2xl text-[#c5a880] uppercase'>our blog</span>
        <h1 className='md:text-5xl text-2xl capitalize font-semibold mb-10'>recent blog</h1>

        <div className="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={blog.img}
                  alt={blog.title}
                  width={870}
                  height={580}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {blog.date}
                  </h2>
                  <Link href="#" className="title-font text-lg font-medium text-gray-900 hover:text-[#c5a880] block mb-3">
                    {blog.title}
                  </Link>
                  <p className="leading-relaxed mb-3">{blog.desc}</p>
                  <div className="flex items-center flex-wrap text-sm text-gray-400">
                    <a className="text-indigo-500 inline-flex items-center mr-4 cursor-pointer">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="inline-flex items-center mr-3 pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      {blog.views}
                    </span>
                    <span className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
                      </svg>
                      {blog.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

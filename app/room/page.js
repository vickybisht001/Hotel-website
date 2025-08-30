"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaWifi,
  FaConciergeBell,
  FaUtensils,
  FaSwimmingPool,
  FaSpa,
  FaHeadset,
  FaPlay,
} from 'react-icons/fa';

const services = [
  { id: 'wifi', icon: <FaWifi size={30} />, title: 'Free Wifi' },
  { id: 'booking', icon: <FaConciergeBell size={30} />, title: 'Easy Booking' },
  { id: 'restaurant', icon: <FaUtensils size={30} />, title: 'Restaurant' },
  { id: 'pool', icon: <FaSwimmingPool size={30} />, title: 'Swimming Pool' },
  { id: 'health', icon: <FaSpa size={30} />, title: 'Beauty & Health' },
  { id: 'support', icon: <FaHeadset size={30} />, title: 'Help & Support' },
];
const cards = [
  {
    id: 1,
    img: 'https://preview.colorlib.com/theme/unwind/images/room-1.jpg.webp',
    title: 'Suite Room',
    desc:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    price: '$400/NIGHT',
    btn: 'Book now',
  },
  {
    id: 2,
    img: 'https://preview.colorlib.com/theme/unwind/images/room-2.jpg.webp',
    title: 'Family Room',
    desc:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    price: '$500/NIGHT',
    btn: 'Book now',
  },
  {
    id: 3,
    img: 'https://preview.colorlib.com/theme/unwind/images/room-3.jpg.webp',
    title: 'Deluxe Room',
    desc:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    price: '$800/NIGHT',
    btn: 'Book now',
  },
  {
    id: 4,
    img: 'https://preview.colorlib.com/theme/unwind/images/room-4.jpg.webp',
    title: 'Classic Room',
    desc:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    price: '$300/NIGHT',
    btn: 'Book now',
  },
  {
    id: 5,
    img: 'https://preview.colorlib.com/theme/unwind/images/room-5.jpg.webp',
    title: 'Superior Room',
    desc:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    price: '$450/NIGHT',
    btn: 'Book now',
  },
  {
    id: 6,
    img: 'https://preview.colorlib.com/theme/unwind/images/room-6.jpg.webp',
    title: 'Luxury Room',
    desc:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    price: '$900/NIGHT',
    btn: 'Book now',
  },
];

const Bookhandle = ()=>{
  confirm("You want to book this room.")
}

const Room = () => {
  return (
    <section className="room-page">
      <div className="bg-img w-full h-64 md:h-80 bg-cover bg-center relative">
        <div className="bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Cozzy Rooms</h1>
        </div>
      </div>

      <div className="text-gray-600 body-font">
        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className="border rounded-lg overflow-hidden shadow-md flex flex-col bg-white"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    alt={card.title}
                    src={card.img}
                    width={870}
                    height={580}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                      {card.title}
                    </h2>
                    <p className="text-base leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="flex justify-between items-center gap-4 mt-6">
                    <p className="text-[#c5a880] text-lg font-medium">
                      {card.price}
                    </p>
                    <button className="border px-5 py-2 rounded hover:bg-black hover:text-white transition"  onClick={Bookhandle}>
                      {card.btn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
    </section>
  );
};

export default Room;

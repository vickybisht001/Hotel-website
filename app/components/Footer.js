import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaAddressCard, FaPhone, FaFacebookMessenger,FaEnvelope} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003580] text-gray-400 py-10 mt-20">
      <div className="max-w-[1165px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">HotelStay</h2>
          <p className="text-sm">
            Discover luxury and comfort in the heart of the city. Experience unforgettable stays with us.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/room">Rooms</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>24/7 Reception</li>
            <li>Room Service</li>
            <li>Spa & Wellness</li>
            <li>Free Wi-Fi</li>
            <li>Airport Pickup</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex gap-2">
          <FaAddressCard />
          <p className="text-sm">New Delhi, India</p>
          </div>
          <div className="flex gap-2 my-2">
            <FaEnvelope/>
          <p className="text-sm">Email: info@hotelstay.com</p>
          </div>
          <div className="flex gap-2 my-2">
            <FaPhone/>
          <p className="text-sm">Phone: +91 82879 17781</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} HotelStay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

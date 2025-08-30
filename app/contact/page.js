"use client";
import React, { useState, useRef } from "react";

const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(`✅ Message sent successfully!`);
        ref.current.reset();
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong.");
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-page w-full max-w-screen-xl mx-auto">
      <div className="bg-img w-full h-64 md:h-80 bg-cover bg-center relative">
        <div className="bg-opacity-50 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="text-gray-600 body-font relative">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3 w-full relative overflow-hidden rounded-lg">
            <div className="relative w-full h-72 sm:h-96">
              <iframe
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=New Delhi&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
            </div>
            <div className="bg-white mt-4 p-6 flex flex-col sm:flex-row rounded shadow-md gap-4">
              <div className="sm:w-1/2">
                <h2 className="text-xs font-semibold text-gray-900 tracking-widest">ADDRESS</h2>
                <p className="mt-1">New Delhi, India</p>
              </div>
              <div className="sm:w-1/2">
                <h2 className="text-xs font-semibold text-gray-900 tracking-widest">EMAIL</h2>
                <a className="text-indigo-500">info@hotelstay.com</a>
                <h2 className="text-xs font-semibold text-gray-900 tracking-widest mt-4">PHONE</h2>
                <p>+91 82879 17781</p>
              </div>
            </div>
          </div>

          <form
            ref={ref}
            onSubmit={handleSubmit}
            className="lg:w-1/3 w-full bg-white flex flex-col p-6 shadow-md rounded"
          >
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">We did love to hear your thoughts!</p>

            <div className="mb-4">
              <label htmlFor="name" className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-3 outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-3 outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 py-2 px-3 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`flex mx-auto px-6 py-2 rounded text-white transition ${isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            <p className="text-xs text-gray-500 mt-3">We will get back to you as soon as possible!</p>
          </form>
        </div>
      </div >
    </section >
  );
};  

export default Contact;

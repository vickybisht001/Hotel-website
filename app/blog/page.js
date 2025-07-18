import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    views: '980',
    comments: '12'
  },
  {
    id: 3,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_3.jpg.webp',
    title: 'Top 10 Budget Hotels to Explore',
    date: 'ADMIN JULY.10, 2025',
    desc: 'Perfect blend of comfort and affordability for your vacation stay.',
    views: '840',
    comments: '5'
  },
  {
    id: 4,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_4.jpg.webp',
    title: 'Romantic Getaways for Couples',
    date: 'ADMIN JULY.11, 2025',
    desc: 'Unwind at dreamy resorts curated for lovebirds and special moments.',
    views: '1.4K',
    comments: '9'
  },
  {
    id: 5,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_5.jpg.webp',
    title: 'Adventure Hotels for Thrill Seekers',
    date: 'ADMIN JULY.11, 2025',
    desc: 'Live your thrill in mountain lodges, forest cabins, and more.',
    views: '710',
    comments: '7'
  },
  {
    id: 6,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_6.jpg.webp',
    title: 'Spa Resorts with Ocean View',
    date: 'ADMIN JULY.12, 2025',
    desc: 'Relax and rejuvenate with ocean-side spa treatments and sunsets.',
    views: '1.1K',
    comments: '11'
  },
  {
    id: 7,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_7.jpg.webp',
    title: 'Top Family-Friendly Hotels',
    date: 'ADMIN JULY.12, 2025',
    desc: 'Spacious rooms, pools, kids’ activities — perfect for the whole family.',
    views: '960',
    comments: '3'
  },
  {
    id: 8,
    img: 'https://preview.colorlib.com/theme/unwind/images/image_8.jpg.webp',
    title: 'Business Hotels with Conference Halls',
    date: 'ADMIN JULY.13, 2025',
    desc: 'For all your business travel needs with full comfort and tech-ready rooms.',
    views: '820',
    comments: '4'
  }
];

const BlogSection = () => {
  return (
    <section className='blog-page'>

      <div className="bg-img">
       <div className="bg-text">
          <h1 className='md:text-6xl text-4xl text-white font-[700]'>Our Blogs</h1>
        </div>
      </div>
      <div className='flex flex-col items-center w-full max-w-screen-xl mx-auto px-5 my-10'>
 <span className='md:text-2xl text-xl text-[#c5a880] uppercase'>our blog</span>
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
};

export default BlogSection;

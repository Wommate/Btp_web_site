import React from 'react';
import CartBlog from './CartBlog';
import { datasBlog } from '../../data/data';

const Blog = () => {
    

    return (
        <div>
       
            <div className='w-full' data-aos="fade-down" data-aos-duration="1500">
                <div className='bg-black/70 w-full h-[500px]'></div>
                <img src="img/etep/img_blog.jpg" className='h-[500px] absolute top-0 -z-10 w-full object-cover' alt="Blog" />
                <h3 className='relative -top-44 text-center text-white w-full text-4xl font-bold px-6' data-aos="zoom-in" data-aos-duration="1800">Blog</h3>
            </div>
            {datasBlog.map((data, index) => (
            <div className='mt-20' key={index}>
                <CartBlog
                    {...data}
                />
            </div>
            ))}
        </div>
    );
}

export default Blog;

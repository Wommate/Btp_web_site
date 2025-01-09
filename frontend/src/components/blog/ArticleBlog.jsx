import React from 'react';
// import { IoMdTime } from 'react-icons/io';

const ArticleBlog = () => {
    
    

    return (
        <div>
            <div className='w-full' data-aos="fade-down" data-aos-duration="1500">
                <div className='bg-black/70 w-full h-[500px]'></div>
                <img src="img/etep/img_blog.jpg" className='h-[500px] absolute top-0 -z-10 w-full object-cover' alt="Blog" />
                <h1 className='relative md:-top-44 -top-[350px] text-center text-white w-full md:text-4xl text-3xl font-bold md:px-44 px-8' data-aos="zoom-in" data-aos-duration="1800">Comment anticiper la saison des pluies dans un projet de construction</h1>
            </div>
            <div className='flex flex-col gap-5 mb-20'>
                <img 
                    src="img/genie-civil.jpg"
                    className='object-cover rounded-xl md:mx-auto h-[600px] md:w-1/2 mx-6'
                    alt="Genie Civil" 
                />
                <p className='text-lg md:px-40 px-8 font-semibold text-black/70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, debitis veritatis iure ut error corrupti
                    fugit hic inventore eius est nihil libero qui quae esse ullam consequatur repudiandae dolorum pariatur officia?
                    Tenetur facere voluptatem dicta aspernatur dolor nesciunt quae adipisci, quod laborum voluptates nobis porro 
                    blanditiis cupiditate, a neque repellendus sunt aliquid inventore atque eveniet dolorem perferendis fugiat
                    consectetur hic. Autem, ipsum officia! Odit atque doloribus sunt velit dolor aspernatur hic omnis consequuntur 
                    repellat! Hic tempore quidem harum, repudiandae dolores aliquam inventore eum atque! Perspiciatis voluptatibus 
                    eius molestiae illo soluta nostrum aperiam dolorum sint illum doloribus, eligendi ad ipsam voluptatem assumenda 
                    suscipit alias cumque at est. Rem perferendis est totam commodi at excepturi nesciunt sapiente laborum delectus 
                    asperiores. Voluptates dolores architecto enim unde sequi soluta necessitatibus, nesciunt, error dolor 
                    perspiciatis delectus voluptatem similique eligendi incidunt velit ducimus quisquam aut aliquam ad omnis placeat 
                    commodi asperiores culpa? Quam ut impedit ab.
                </p>
            </div>
            {/* <div className='px-40 my-10 flex justify-end gap-5'>
                <div className='flex items-center'>
                    <IoMdTime className='bg-[#35c6f4] text-4xl p-2 rounded-l-xl my-1' />
                    <p className='font-semibold bg-[#35c6f4]/20 p-2 rounded-r-xl text-center text-sm'>{day+" / "+month+ " / "+year}</p>
                </div>
               
            </div> */}
        </div>
    );
}

export default ArticleBlog;

import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Vision() {
  return (
    <div className="mb-20 md:flex">
      <div className="md:w-1/2 px-10" data-aos="fade-right">
        <img src="img/engin.jpg" alt="Engin" className="w-full h-96 rounded-xl" />
      </div>
      <div className="md:w-1/2 p-10" data-aos="fade-left">
        <h2 className="text-4xl font-bold mb-5">
            Vision
        </h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            debitis libero ut neque eaque pariatur, non saepe aliquam, quisquam hic
            est nemo unde, odio quos. Possimus perferendis, officia magni iste illum
            ipsum quo quod, explicabo eum id accusamus magnam doloremque repellendus
            nostrum corporis dolores quaerat aliquam debitis reiciendis
            necessitatibus numquam!
        </p>
      </div>
    </div>
  );
}

export default Vision;

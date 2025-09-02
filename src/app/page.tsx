
"use client"

const slides =[ {
  image: '/images/cascading-waterfall.jpg',
  title:'cascading waterfall'
},{
  image: '/images/forest-path.jpg',
  title:'forest path'
},{
  image: '/images/mountain-landscape.jpg',
  title:'mountain landscape'
},{
  image: '/images/ocean-sunset-golden-hour.jpg',
  title:'ocean sunset golden hourl'
},{
  image: '/images/rolling-sand-dunes.jpg',
  title:'rolling sand dunes'
},{
  image: '/images/serene-water-mirroring.jpg',
  title:'serene water mirroring'
},{
  image: '/images/starry-night.jpg',
  title:'/starry night'
},
]
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
   const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const currentSlide = slides[index];

  return (
    <div>
      {/*start hero section */}

      <section className="hero lg:flex  justify-between  h-full bg-gray-900">

        {/* left hero */}
        <div className="left_hero  m-auto  text-center lg:ml-[100px] pt-[100px]">
          <h1 className="text-[50px] text-[#5e3b81] pb-[30px]">Mountain Landscape</h1>
          <p className="text-[23px]  text-gray-200 pb-[30px]">
            Majestic peaks covered in snow during golden hour
          </p>
          <button className="bg-[#9a7bb9] px-[30px] py-[5px] rounded-2xl hover:text-[#9a7bb9] hover:bg-gray-600 text-white"><Link href={'/users'} >Go on</Link></button>
        </div>

        {/* right hero */}
        <div className="right_hero m-auto lg:mr-[100px] pt-[100px]">
          <div className="item_hero flex flex-col justify-center mt-[50px] ">
         <img className=" rounded-3xl ml-[50%] translate-x-[-50%] w-[500px] h-[400px] mb-[30px]" src={currentSlide.image} alt={currentSlide.title}/>
          <h5 className="text-center text-[23px] text-gray-200">{currentSlide.title}</h5>
          </div>
          <div className="flex justify-center gap-6 mt-4 pb-[30px]">
          <button
            onClick={prevSlide}className="bg-[#9a7bb9] px-[30px] py-[5px] rounded-2xl text-white" >previous⬅ </button>
          <button
            onClick={nextSlide}className="bg-[#9a7bb9] px-[30px] py-[5px] rounded-2xl text-white"  >next ➡</button>
        </div>
        </div>
      </section>
      {/* end hero section  */}
      {/* ************************************************************************* */}

      {/*start  about section */}
      <section className="about h-full bg-gray-900 ">

        {/* about header */}
        <div className="about_header text-center">
              <h2 className="text-[#7b4aac] text-[50px] mb-[10px]" >Discover 3D Coverflow</h2>
              <p className="text-gray-300 text-[20px] lg:w-[40%] m-auto pb-[50px]">A revolutionary way to showcase your visual content with stunning 3D effects and seamless interactions</p>
        </div>
        <div className="info lg:flex  text-white justify-between ">
          
          {/* about left */}
        <div className="about_left mb-[50px] m-auto w-[90%] lg:w-[25%] p-[50px] border-2  border-gray-500 text-center rounded-[30px] bg-gray-800 relative before:absolute before:content-[''] before:border-t-[1px] before:border-l-[1px] before:rounded-tl-[30px] before:top-[-20px] before:left-[-20px] before:h-[100px] before:w-[100px] before:border-[#8596e4] after:absolute after:content-[''] after:border-b-[1px] after:border-r-[1px] after:rounded-br-[30px] after:bottom-[-20px] after:right-[-20px] after:h-[100px] after:w-[100px] after:border-[#8596e4]  ">
            <h3 className=" text-[40px] text-white font-bold mb-[20px] ">3D Coverflow</h3>
            <p className="text-[16px] text-gray-300 lg:w-[95%]  m-auto mb-[40px]">Transform your image galleries into immersive 3D experiences</p>
            
            {/* links */}
            <div className="showcase-badges grid grid-cols-2 justify-center align-middle items-center ">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="badge border-2  border-[#ffffff33] text-center text-[#ffffffcc] rounded-[30px] bg-[ffffff1a] px-[10px] py-[5px] mb-[15px] text-[14px]  w-[70%] items-center backdrop-blur-[20px] hover:bg-linear-to-r from-[#667eea] to-[#764ba2] hover:border-transparent hover:shadow-[0_10px_15px_#667eea4d]  hover:translate-y-[-5px] transition-all
               duration-200 ease-in">HTML5</Link>

              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="badge border-2  border-[#ffffff33] text-center text-[#ffffffcc] rounded-[30px] bg-[ffffff1a] px-[10px] py-[5px] mb-[15px] text-[14px]  w-[70%] items-center backdrop-blur-[20px] hover:bg-linear-to-r from-[#667eea] to-[#764ba2] hover:border-transparent hover:shadow-[0_10px_15px_#667eea4d]  hover:translate-y-[-5px] transition-all
               duration-200 ease-in">CSS3</Link>

              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"className="badge border-2  border-[#ffffff33] text-center text-[#ffffffcc] rounded-[30px] bg-[ffffff1a] px-[10px] py-[5px] mb-[15px] text-[14px]  w-[70%] items-center backdrop-blur-[20px] hover:bg-linear-to-r from-[#667eea] to-[#764ba2] hover:border-transparent hover:shadow-[0_10px_15px_#667eea4d]  hover:translate-y-[-5px] transition-all
               duration-200 ease-in">JavaScript</Link>

              <Link href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" rel="noopener noreferrer" className="badge border-2  border-[#ffffff33] text-center text-[#ffffffcc] rounded-[30px] bg-[ffffff1a] px-[10px] py-[5px] mb-[15px] text-[14px]  w-[70%] items-center backdrop-blur-[20px] hover:bg-linear-to-r from-[#667eea] to-[#764ba2] hover:border-transparent hover:shadow-[0_10px_15px_#667eea4d]  hover:translate-y-[-5px] transition-all
               duration-200 ease-in">Responsive</Link>
            </div>
          </div>

          {/* about right */}
        <div className="about_right pr-[100px] lg:w-[50%] pl-[40px]">
                    <h3 className="text-[36px] mb-[30px] font-bold ">Elevate Your Gallery Experience</h3>
                    <p className="text-[18px] text-[#ffffffcc] mb-[30px] leading-[1.5]">3D Coverflow is brought to you by TemplateMo. Transform the way you present images with our cutting-edge 3D coverflow technology. Create immersive, interactive galleries that captivate your audience and leave a lasting impression.</p>
                    <p className="text-[18px] text-[#ffffffcc] mb-[30px] leading-[1.5]">Whether you're showcasing portfolio pieces, product images, or creating an interactive story, our 3D coverflow brings your content to life with fluid animations and intuitive controls.</p>
                    
                    <ul className="feature-list mb-[30px]">
                        <li className="mb-[20px] pl-[50px] relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:w-[30px] before:h-[30px] before:rounded-full before:bg-gradient-to-r before:from-[#667eea] before:to-[#764ba2] before:flex before:items-center before:justify-center before:text-white before:text-sm">Smooth 3D transitions with hardware acceleration</li>
                        <li className="mb-[20px] pl-[50px] relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:w-[30px] before:h-[30px] before:rounded-full before:bg-gradient-to-r before:from-[#667eea] before:to-[#764ba2] before:flex before:items-center before:justify-center before:text-white before:text-sm">Touch-enabled navigation for mobile devices</li>
                        <li className="mb-[20px] pl-[50px] relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:w-[30px] before:h-[30px] before:rounded-full before:bg-gradient-to-r before:from-[#667eea] before:to-[#764ba2] before:flex before:items-center before:justify-center before:text-white before:text-sm">Customizable autoplay and timing controls</li>
                        <li className="mb-[20px] pl-[50px] relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:w-[30px] before:h-[30px] before:rounded-full before:bg-gradient-to-r before:from-[#667eea] before:to-[#764ba2] before:flex before:items-center before:justify-center before:text-white before:text-sm">Keyboard navigation support</li>
                        <li className="mb-[20px] pl-[50px] relative before:content-['✓'] before:absolute before:left-0 before:top-0 before:w-[30px] before:h-[30px] before:rounded-full before:bg-gradient-to-r before:from-[#667eea] before:to-[#764ba2] before:flex before:items-center before:justify-center before:text-white before:text-sm pb-[50px]">Reflection effects for added depth</li>
                    </ul>    
          </div>
          </div>
      </section>
      {/* end about section */}
      {/* *********************************************************************************** */}
    </div>
  );
}

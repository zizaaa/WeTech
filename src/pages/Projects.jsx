import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();






const projectData = [
  { 
    src: 'projects/PalengkE.png', 
    alt: 'palengke', 
    description: 'Experience the lively essence of the traditional palengke right at your fingertips with Palengk-e. Discover our user-friendly online platform, where you can effortlessly order fresh produce, pantry essentials, and beloved local favorites.' 
  },

  { 
    src: 'projects/SpecialDog.png', 
    alt: 'specialDog', 
    description: 'The SpecialDog Project is your go-to resource for all things dog-related. Discover breed insights, care tips, and heartwarming adoption stories. Find your furry friend and give a loving home to a special dog today.' 
  },

  { 
    src: 'projects/coffeeShop.png', 
    alt: 'coffeeshop', 
    description: 'Indulge in the rich world of coffee from the comfort of your home with our Online Coffee Shop. Explore a curated selection of gourmet blends and single-origin beans, expertly roasted and packed to preserve their exquisite flavors.' 
  },

  { 
    src: 'projects/harmonyOrganic.png', 
    alt: 'ornagic', 
    description: 'Discover the wholesome goodness of Harmony Organic. Our commitment to nature`s finest ingredients brings you a range of organic products that nourish both body and soul. From farm-fresh produce to thoughtfully crafted essentials.' 
  },

  { 
    src: 'projects/McTravel.png', 
    alt: 'travel', 
    description: 'Embark on unforgettable adventures with McTravel. We`re here to turn your travel dreams into reality, offering personalized itineraries, seamless arrangements, and exceptional experiences that create memories to last a lifetime.' 
  },

  { 
    src: 'projects/MRstudio.png', 
    alt: 'studio', 
    description: 'Step into the world of MR Studio, where imagination comes to life. Our passionate team of creative professionals is dedicated to capturing the essence of every moment, whether through stunning innovative design.' 
  },

  { 
    src: 'projects/jrCoffee.png', 
    alt: 'coffee', 
    description: 'Indulge in the rich world of coffee from the comfort of your home with our Online Coffee Shop. Explore a curated selection of gourmet blends and single-origin beans, expertly roasted and packed to preserve their exquisite flavors.' 
  },

  { 
    src: 'projects/FrontEndBootcamp.png', 
    alt: 'bootcamp', 
    description: 'Step into the world of web development with our Front-End Bootcamp. Led by industry experts, our comprehensive program equips you with the skills and knowledge needed to craft stunning and responsive user interfaces.' 
  },

  { 
    src: 'projects/rosalesPrint.png', 
    alt: 'print', 
    description: 'Experience the art of printing redefined at Rosales Print. We bring your ideas to life on paper, transforming them into vibrant, high-quality prints that leave a lasting impact. Whether it`s business materials.' 
  },

];

const Projects = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  return (
    <div className='overflow-hidden'>
      <div className='container mx-auto flex items-center w-full h-[70vh] md:px-0 px-10'>
        <div
          data-aos="zoom-in"
          className="img-container flex-1 lg:flex items-center hidden h-50 px-10"
        >
          <img className='h-full w-[40rem]' src="projects/back.svg" alt="Background" />
        </div>
        <div data-aos="fade-left" className="content-container flex-1">
          <h1 className="text-5xl font-semibold text-darkerBlue">
            Elevate your online presence with Our Projects.Your Web Development Partner!
          </h1>
          <h2 className='text-lighterBlack mt-5'>
            In today's digital landscape, a strong and compelling online presence is crucial for businesses and individuals alike. At Our Projects, we understand the power of a well-crafted website and the impact it can have on your brand, your message, and your bottom line. As your dedicated web development partner, we are committed to transforming your ideas into captivating online experiences.
          </h2>
          <button onClick={scrollToProjects} className='mt-5 border-2 border-darkBlue px-7 py-3 rounded-full uppercase font-semibold hover:bg-darkBlue hover:text-white hover:drop-shadow-lg transition ease-in-out duration-500'>
            Projects!
          </button>
        </div>
      </div>

      <div className='container mx-auto flex items-center w-full h-[80vh] md:px-0 px-10'>
        
        <div data-aos="fade-left" className="content-container flex-1 px-5">
          <h1 className="text-5xl font-semibold text-darkerBlue">
        We specialize in the art of crafting engaging and visually stunning websites with unparalleled functionality.
          </h1>
          <h2 className='text-lighterBlack mt-5'>
          Our team of dedicated professionals is driven by a passion for innovation, working tirelessly to transform your ideas into digital masterpieces that captivate audiences and leave a lasting impression. Whether it's through captivating designs, intuitive user interfaces, or cutting-edge technologies, we are committed to building online experiences that not only reflect your unique vision but also elevate your brand's digital presence to new heights.
          </h2>
         
        </div>

        <div
          data-aos="zoom-in"
          className="img-container flex-1 lg:flex items-center hidden h-50 px-10"
        >
          <img className='h-full w-[40rem]' src="projects/back1.svg" alt="Background" />
        </div>

      </div>

      <div id='projects' className='container mx-auto flex flex-wrap justify-center md:px-0 px-10 my-10'>
        {projectData.map((image, index) => (
          <div
            key={index}
            data-aos='zoom-in'
            className='img-container w-full md:w-1/3 lg:w-1/3 p-5 md:p-10 overflow-hidden hvr-fade'
          >
            <Link className='absolute top-8 right-7 text-gray text-xl hover:text-black transition-all ease-in-out duration-300'>
              <FaExternalLinkAlt />
            </Link>
            <img className='h-full w-full object-cover' src={image.src} alt={image.alt} />
            <div className='overlay h-full w-full flex items-center justify-center hvr-fade'>
              <p className='description text-white'>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

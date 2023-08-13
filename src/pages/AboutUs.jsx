import { useEffect, useState } from "react"
import 'aos/dist/aos.css'; 
import Aos from 'aos'

import { BiChevronDown } from 'react-icons/bi'
import { FaFacebook,FaInstagram } from 'react-icons/fa'

import { Link } from "react-router-dom";

const AboutUs = () => {
  //for accordion
  const [accordionOne, setAccordionOne] = useState(false);
  const [accordionTwo, setAccordionTwo] = useState(false);
  const [accordionThree, setAccordionThree] = useState(false);
  
  const accOne =()=>{
    setAccordionOne(!accordionOne);
    setAccordionTwo(false);
    setAccordionThree(false);
  }
  const accTwo =()=>{
    setAccordionOne(false);
    setAccordionTwo(!accordionTwo);
    setAccordionThree(false);
  }
  const accThree =()=>{
    setAccordionOne(false);
    setAccordionTwo(false);
    setAccordionThree(!accordionThree);
  }

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <section>
        {/* why us */}
        <div className="py-5 md:my-24 my-10">
            <div className="container mx-auto md:px-0 px-10 flex items-center md:max-[852px]:gap-24 gap-5 max-[852px]:flex-col flex-row">
              <div className="flex flex-col items-start flex-1">
                <p className="bg-[rgba(255,145,77,0.4)] text-orange uppercase font-semibold px-3 py-1 rounded-full mb-3">Why WeTech?</p>
                <div className="flex flex-col ">
                  <h1 className="text-3xl text-orange uppercase font-semibold mb-5">
                    Nurturing top talents into expertise is at the core of our mission.
                  </h1>
                  <p className="text-xl text-darkGray">
                    Our spirited approach not only fosters their growth but also drives innovation across every project. With a keen focus on detail, we channel our passion into crafting exceptional outcomes that stand as a testament to our commitment to excellence.
                  </p>
                </div>
              </div>
              <div className="flex items-center md:flex-row flex-col max-[852px]:w-full w-2/3 gap-10">
                  <div data-aos="zoom-in" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className="flex flex-col gap-10"> 
                    <div className="flex items-start justify-center flex-col bg-white p-5 drop-shadow-md rounded-lg md:translate-y-16 h-72">
                        <span className="border-2 border-darkBlue rounded-full p-3 w-[4rem] shadow-[2px_2px_3px_1px_rgba(34,60,151,0.3)]">
                          <img src="/About/icon/team.png" className="w-full"/>
                        </span>
                        <h1 className="my-3 text-xl text-darkerBlue font-semibold">Elite Team</h1>
                        <p className="text-darkGray text-lg font-medium">We shape the finest talents into experts within their domains.</p>
                    </div>
                    <div className="flex items-start justify-center flex-col bg-white p-5 drop-shadow-md rounded-lg md:translate-y-20 h-72">
                        <span className="border-2 border-darkBlue rounded-full p-3 w-[4rem] shadow-[2px_2px_3px_1px_rgba(34,60,151,0.3)]">
                          <img src="/About/icon/flow.png" className="w-full"/>
                        </span>
                        <h1 className="my-3 text-xl text-darkerBlue font-semibold">The Flow of Excellence</h1>
                        <p className="text-darkGray text-lg font-medium">Like a constant current, we provide the essential nourishment for success.</p>
                    </div>
                  </div>

                  <div data-aos="zoom-in" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className="flex flex-col gap-10">
                    <div className="flex items-start justify-center flex-col bg-white p-5 drop-shadow-md md:-translate-y-20 h-72 rounded-lg">
                        <span className="border-2 border-darkBlue rounded-full p-3 w-[4rem] shadow-[2px_2px_3px_1px_rgba(34,60,151,0.3)]">
                          <img src="/About/icon/creativity.png" className="w-full"/>
                        </span>
                        <h1 className="my-3 text-xl text-darkerBlue font-semibold">Trailblazing Creativity</h1>
                        <p className="text-darkGray text-lg font-medium">Similar to Barney's adventurous spirit, we forge innovative paths and unique solutions.</p>
                    </div>
                    <div className="flex items-start justify-center flex-col bg-white p-5 drop-shadow-md md:-translate-y-16 h-72 rounded-lg">
                        <span className="border-2 border-darkBlue rounded-full p-3 w-[4rem] shadow-[2px_2px_3px_1px_rgba(34,60,151,0.3)]">
                          <img src="/About/icon/accuracy.png" className="w-full"/>
                        </span>
                        <h1 className="my-3 text-xl text-darkerBlue font-semibold">Impeccable Precision</h1>
                        <p className="text-darkGray text-lg font-medium">Our work reflects meticulous attention, guaranteeing exceptional outcomes.</p>
                    </div> 
                  </div>
              </div>
            </div>
        </div>

        {/* about */}
        <div className="bg-lightBlue mb-5">
          <div className="container mx-auto md:px-0 px-10 flex md:flex-row flex-col-reverse items-center md:h-[80vh] h-auto py-10">
                <div data-aos="fade-right" className="flex-1 flex flex-col md:items-start items-center md:text-start text-center">
                  <p className="bg-[rgba(255,145,77,0.4)] text-orange uppercase font-semibold px-3 py-1 rounded-full mb-3 md:block hidden">About WeTech</p>
                  <p className="lg:text-3xl text-2xl text-white font-semibold">
                    At WeTech, we specialize in crafting immersive digital experiences. With innovation and meticulous attention, we create elegant online solutions tailored to your unique needs. Join us on a transformative journey as we turn your ideas into captivating digital realities.
                  </p>
                </div>
                <div data-aos="fade-up" className="flex-1 md:my-0 my-5">
                  <img src="/About/AC-team.png"/>
                </div>
                <p className="bg-[rgba(255,145,77,0.4)] text-orange uppercase font-semibold px-3 py-1 rounded-full mb-3 md:hidden block">About WeTech</p>
          </div>
        </div>

        {/* accordion */}
        <div className="bg-white">
            <div className="container mx-auto md:px-0 px-10 flex md:flex-row flex-col items-center sm:h-[80vh] h-auto">
                <div className="flex-1 flex items-center justify-center">
                  <img src="/About/accordion-img.svg" className="w-2/3"/>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <h1 className="text-5xl mb-6 font-semibold text-darkerBlue sm:text-start text-center sm:mt-0 mt-5">Our Commitment</h1>
                    <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionOne ? 'sm:max-h-[10rem] max-h-[12rem]':'max-h-[3.5rem]'}`} id="accordion-1">
                      <button onClick={accOne} className="flex items-center justify-between w-full py-3 text-xl text-darkerBlue font-semibold">
                        Empowering Your Vision
                        <span className={`${accordionOne ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                          <BiChevronDown />
                        </span>
                      </button>
                      <p className="text-darkerBlue font-medium text-lg">
                        At WeTech, we empower your digital aspirations with our innovative solutions. Our commitment to excellence guarantees a 5-star experience.
                      </p>
                    </div>
                    <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionTwo ? 'sm:max-h-[10rem] max-h-[12rem]':'max-h-[3.5rem]'}`} id="accordion-1">
                      <button onClick={accTwo} className="flex items-center justify-between w-full py-3 text-xl text-darkerBlue font-semibold">
                        Crafted with Care
                        <span className={`${accordionTwo ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                          <BiChevronDown />
                        </span>
                      </button>
                      <p className="text-darkerBlue font-medium text-lg">
                        Every element of WeTech is meticulously crafted, providing a seamless and user-friendly experience. A 5-star rating is well-deserved.
                      </p>
                    </div>
                    <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionThree ? 'sm:max-h-[10rem] max-h-[12rem]':'max-h-[3.5rem]'}`} id="accordion-1">
                      <button onClick={accThree} className="flex items-center justify-between w-full py-3 text-xl text-darkerBlue font-semibold">
                        Innovative Excellence
                        <span className={`${accordionThree ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                          <BiChevronDown />
                        </span>
                      </button>
                      <p className="text-darkerBlue font-medium text-lg">
                        Experience innovation at its finest with WeTech. Our cutting-edge solutions ensure a 5-star worthy journey to success.
                      </p>
                    </div>
                </div>
            </div>
        </div>

      {/* our team */}
        <div className="container mx-auto md:px-0 px-10 py-10">
            <div className="flex md:flex-row md:text-start text-center flex-col gap-5 items-center w-full">
              <div className="flex flex-col sm:items-start items-center">
                <p className='bg-[rgba(34,60,151,0.4)] text-darkBlue uppercase font-semibold px-3 py-1 rounded-full mb-3'>Team</p>
                <h1 className="flex-1 text-6xl font-bold text-darkerBlue">WeTech</h1>
                <h1 className="flex-1 text-6xl font-bold text-darkerBlue">Team</h1>
              </div>
              <p className="flex-1 text-xl font-medium text-darkerBlue">Meet the dedicated minds behind WeTech – a passionate team driven by innovation, collaboration, and a shared commitment to turning visions into reality.</p>
              <div className="flex-1 flex justify-end">
              <Link to='/Form' className="py-2 px-7 border-2 border-orange rounded-full uppercase  hover:bg-orange hover:text-white hover:drop-shadow-lg transition ease-in-out duration-500">Consult Us</Link>
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-evenly mt-10 gap-5 overflow-hidden">
              {/* MC */}
                <div data-aos="zoom-in" className="flex flex-col">
                  <div className="w-[15rem] h-[20rem] rounded-lg">
                    <img src="/About/team/mc.jpg" className="rounded-lg w-full h-full"/>
                  </div>
                  <div className="w-full text-center mt-3">
                    <h1 className="text-xl font-semibold text-darkerBlue">MC</h1>
                    <p className="text-darkerBlue font-medium">Full-Stack Web Dev</p>
                  </div>
                  <div className="flex items-center mt-2 text-xl text-darkerBlue gap-5 justify-center">
                    <a href="https://www.facebook.com/mcdharnel.pagaragan">
                      <FaFacebook/>
                    </a>
                    <a href="#">
                      <FaInstagram/>
                    </a>
                  </div>
                </div>
              {/* Efren */}
                <div data-aos="zoom-in" className="flex flex-col">
                  <div className="w-[15rem] h-[20rem] rounded-lg">
                    <img src="/About/team/efren.jpg" className="rounded-lg w-full h-full"/>
                  </div>
                  <div className="w-full text-center mt-3">
                    <h1 className="text-xl font-semibold text-darkerBlue">Efren</h1>
                    <p className="text-darkerBlue font-medium">Full-Stack Web Dev & Designer</p>
                  </div>
                  <div className="flex items-center mt-2 text-xl text-darkerBlue gap-5 justify-center">
                    <a href="https://www.facebook.com/eaplong24">
                      <FaFacebook/>
                    </a>
                    <a href="#">
                      <FaInstagram/>
                    </a>
                  </div>
                </div>
              {/* ziza */}
                <div data-aos="zoom-in" className="flex flex-col">
                  <div className="w-[15rem] h-[20rem] rounded-lg">
                    <img src="/About/team/ziza.jpg" className="rounded-lg w-full h-full"/>
                  </div>
                  <div className="w-full text-center mt-3">
                    <h1 className="text-xl font-semibold text-darkerBlue">ziza</h1>
                    <p className="text-darkerBlue font-medium">Full-Stack Web Dev</p>
                  </div>
                  <div className="flex items-center mt-2 text-xl text-darkerBlue gap-5 justify-center">
                    <a href="https://www.facebook.com/jyrnv">
                      <FaFacebook/>
                    </a>
                    <a href="https://www.instagram.com/zizatheprogrammer/">
                      <FaInstagram/>
                    </a>
                  </div>
                </div>
              {/* red */}
                <div data-aos="zoom-in" className="flex flex-col">
                  <div className="w-[15rem] h-[20rem] rounded-lg">
                    <img src="/About/team/red.jpg" className="rounded-lg w-full h-full"/>
                  </div>
                  <div className="w-full text-center mt-3">
                    <h1 className="text-xl font-semibold text-darkerBlue">Red</h1>
                    <p className="text-darkerBlue font-medium">Full-Stack Web Dev & Designer</p>
                  </div>
                  <div className="flex items-center mt-2 text-xl text-darkerBlue gap-5 justify-center">
                    <a href="https://www.facebook.com/yourdeew">
                      <FaFacebook/>
                    </a>
                    <a href="#">
                      <FaInstagram/>
                    </a>
                  </div>
                </div>
            </div>
        </div>

        {/* mission & vission */}
        {/* <div className="container mx-auto md:px-0 px-10 flex items-center h-[80vh]">
          <div className="flex-1 flex items-center">
            <div className="bg-white drop-shadow-lg rounded-lg p-3 -translate-y-20">
              <div className="text-center">
                <h1 className="text-darkerBlue text-2xl mb-3 font-semibold">Mission</h1>
                <p>At WeTech, our mission is to ignite digital transformations for businesses of all sizes. We are dedicated to crafting unique and impactful web solutions that empower startups to thrive in the digital age. Our relentless pursuit of innovation, combined with personalized strategies, propels startups towards success in a dynamic and competitive landscape.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-darkerBlue text-center mx-20">
              <p className="text-5xl font-semibold">Mission</p>
              <p className="text-2xl">&</p>
              <p className="text-5xl font-semibold">Vission</p>
            </div>
            <div className="bg-white drop-shadow-lg rounded-lg p-3 translate-y-20">
              <div className="text-center">
                <h1 className="text-darkerBlue text-2xl mb-3 font-semibold">Vission</h1>
                <p>Our vision is to be a catalyst for startup growth, driving meaningful connections and experiences through visionary web solutions. As a startup ourselves, we understand the journey, and we aspire to become the trusted partner that propels fellow startups towards achieving their dreams. We envision a future where startups leverage technology to disrupt industries and leave a lasting mark on the world.</p>
              </div>
            </div>
          </div>
        </div> */}
    </section>
  )
}

export default AboutUs
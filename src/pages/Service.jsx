import { useEffect, useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

import { Link } from "react-router-dom"
import 'aos/dist/aos.css'; 
import Aos from 'aos'
import { BiChevronDown } from 'react-icons/bi';

const Service = () => {

    //for accordion
    const [accordionOne, setAccordionOne] = useState(false);
    const [accordionTwo, setAccordionTwo] = useState(false);
    const [accordionThree, setAccordionThree] = useState(false);
    const [accordionFour, setAccordionFour] = useState(false);
    const [accordionFive, setAccordionFive] = useState(false);
    const [accordionSix, setAccordionSix] = useState(false);
    
    const accOne =()=>{
      setAccordionOne(!accordionOne);
      setAccordionTwo(false);
      setAccordionThree(false);
      setAccordionFour(false);
      setAccordionFive(false);
      setAccordionSix(false);
    }
    const accTwo =()=>{
      setAccordionOne(false);
      setAccordionTwo(!accordionTwo);
      setAccordionThree(false);
      setAccordionFour(false);
      setAccordionFive(false);
      setAccordionSix(false);
    }
    const accThree =()=>{
      setAccordionOne(false);
      setAccordionTwo(false);
      setAccordionThree(!accordionThree);
      setAccordionFour(false);
      setAccordionFive(false);
      setAccordionSix(false);
    }
    const accFour =()=>{
      setAccordionOne(false);
      setAccordionTwo(false);
      setAccordionThree(false);
      setAccordionFour(!accordionFour);
      setAccordionFive(false);
      setAccordionSix(false);
    }
    const accFive =()=>{
      setAccordionOne(false);
      setAccordionTwo(false);
      setAccordionThree(false);
      setAccordionFour(false);
      setAccordionFive(!accordionFive);
      setAccordionSix(false);
    }
    const accSix =()=>{
      setAccordionOne(false);
      setAccordionTwo(false);
      setAccordionThree(false);
      setAccordionFour(false);
      setAccordionFive(false);
      setAccordionSix(!accordionSix);
    }

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <section>
      <div className="container mx-auto md:px-0 px-10">
        <div className="flex items-center md:flex-row-reverse flex-col gap-16 md:h-[85vh] h-auto sm:py-0 py-5">
          <div data-aos="fade-right" className="flex-1">
            <h1 className="text-5xl font-semibold text-darkerBlue">Unleash business potential with our creative tech solutions</h1>

            <div className='flex flex-col gap-2 my-5'>
              <div className="flex items-center gap-2 text-lg font-medium">
                <span>
                  <AiOutlineCheckCircle/>
                </span>
                <p>Dynamic Web Solutions</p>
              </div>

              <div className="flex items-center gap-2 text-lg font-medium">
                <span>
                  <AiOutlineCheckCircle/>
                </span>
                <p>Streamlined Static Websites</p>
              </div> 
            </div>

            <Link to='/Form' className="py-2 px-7 border-2 border-darkerBlue rounded-full uppercase  hover:bg-darkerBlue hover:text-white hover:drop-shadow-lg transition ease-in-out duration-500">Consult Us</Link>
          </div>
          <div data-aos="zoom-in" className="flex-1">
            <img src="/service/static_website_.svg" />
          </div>
        </div>
      </div>
      
      {/* service section */}
      <div className='bg-darkerBlue mb-5 relative overflow-hidden'>
        <svg className='absolute -bottom-1 z-0 h-[20rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,160L34.3,170.7C68.6,181,137,203,206,176C274.3,149,343,75,411,48C480,21,549,43,617,74.7C685.7,107,754,149,823,160C891.4,171,960,149,1029,133.3C1097.1,117,1166,107,1234,117.3C1302.9,128,1371,160,1406,176L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        <div className="container mx-auto md:px-0 px-10 py-10 overflow-hidden">
            <div data-aos="fade-down" className='text-center text-white flex flex-col items-center mb-5'>
              <p className="bg-[rgba(255,145,77,0.4)] text-orange uppercase font-semibold px-3 py-1 rounded-full mb-3">Services</p>
              <h1 className='text-5xl font-semibold md:w-1/2 w-full'>Elevating Your Digital Presence with Tailored Web Solutions</h1>
            </div>
            <div className="flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-evenly py-5">
              <div data-aos="fade-right" className='bg-grayish h-[20rem] flex flex-col items-center py-5 w-[20rem] rounded-lg drop-shadow-lg bg-dynamic bg-[right_top_7rem] bg-[length:7rem_7rem] bg-no-repeat'>
                  <p className='uppercase font-semibold text-darkerBlue'>Static</p>
                  <h1 className='mb-2 text-3xl font-semibold text-darkerBlue'>
                    &#8369;4,999
                  </h1>
                  <span className='h-[1px] w-[3rem] border-darkerBlue mb-5 border-b-[2px]'></span>
                  <div className='flex flex-col gap-3 text-lg w-full px-5'>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>1 page</p>
                    </div>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>Free Design</p>
                    </div>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>Functional</p>
                    </div>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>Vercel</p>
                    </div>
                  </div>
              </div>
              <div data-aos="fade-left" className='bg-grayish h-[20rem] flex flex-col items-center py-5 w-[20rem] rounded-lg drop-shadow-lg bg-dynamic bg-[right_top_7rem] bg-[length:7rem_7rem] bg-no-repeat'>
                  <p className='uppercase font-semibold text-darkerBlue '>Dynamic</p>
                  <h1 className='mb-2 text-3xl font-semibold text-darkerBlue'>
                    &#8369;6,999
                  </h1>
                  <span className='h-[1px] w-[3rem] border-darkerBlue mb-5 border-b-[2px]'></span>
                  <div className='flex flex-col gap-3 text-lg w-full px-5'>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>7 pages</p>
                    </div>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>Free Design</p>
                    </div>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>Functional</p>
                    </div>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>Vercel</p>
                    </div>
                    <div className='flex items-center flex-row gap-2'>
                      <span>
                        <AiOutlineCheckCircle/>
                      </span>
                      <p>free redesign 1 week</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>

      {/* frequently ask question */}
      <div className="bg-white ms:py-0 py-10">
            <div className='flex flex-col w-full items-center justify-center sm:px-0 px-5'>
                <h1 className='text-5xl mb-3 font-semibold text-darkerBlue text-center sm:mt-0 mt-5'>Frequently asked questions</h1>
                <p className='text-center'>We have put together some commonly asked questions</p>
            </div>
            <div className="xl:container xl:mx-auto xl:px-0 px-5 flex md:flex-row flex-col items-center md:gap-10 gap-5 mt-10">
                <div className='flex-1 flex flex-col gap-5'>
                    <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionOne ? 'sm:max-h-[10rem] max-h-[12rem]':'xm:max-h-[3.5rem] max-h-[4rem]'}`} id="accordion-1">
                      <button onClick={accOne} className="flex items-center justify-between text-start w-full xm:py-3 py-5 text-md text-darkerBlue font-semibold">
                        What types of websites do you create?
                        <span className={`${accordionOne ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                          <BiChevronDown />
                        </span>
                      </button>
                      <p className="text-darkerBlue font-medium text-lg">
                        We specialize in a variety of websites, from business portfolios to blog, tailored to your needs.
                      </p>
                    </div>

                    <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionTwo ? 'sm:max-h-[10rem] max-h-[12rem]':'xm:max-h-[3.5rem] max-h-[5rem]'}`} id="accordion-1">
                      <button onClick={accTwo} className="flex items-center justify-between text-start w-full xm:py-3 py-4 text-md text-darkerBlue font-semibold">
                        Do you offer both static and dynamic websites?
                        <span className={`${accordionTwo ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                          <BiChevronDown />
                        </span>
                      </button>
                      <p className="text-darkerBlue font-medium text-lg">
                        Yes, we provide both static sites for a clear presence and dynamic sites with updates.
                      </p>
                    </div>

                    <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionThree ? 'sm:max-h-[10rem] max-h-[12rem]':'xm:max-h-[3.5rem] max-h-[5rem]'}`} id="accordion-1">
                      <button onClick={accThree} className="flex items-center justify-between text-start w-full xm:py-3 py-5 text-md text-darkerBlue font-semibold">
                        How do you ensure website security and speed?
                        <span className={`${accordionThree ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                          <BiChevronDown />
                        </span>
                      </button>
                      <p className="text-darkerBlue font-medium text-lg">
                        We prioritize security and speed through advanced technologies and optimizations.
                      </p>
                    </div>
                </div>

                <div className='flex-1 flex flex-col gap-5'>
                  <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionFour ? 'sm:max-h-[10rem] max-h-[12rem]':'xm:max-h-[3.5rem] max-h-[4rem]'}`} id="accordion-1">
                    <button onClick={accFour} className="flex items-center justify-between text-start w-full xm:py-3 py-5 text-md text-darkerBlue font-semibold">
                      How much customization do you offer?
                      <span className={`${accordionFour ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                        <BiChevronDown />
                      </span>
                    </button>
                    <p className="text-darkerBlue font-medium text-lg">
                      We customize designs and features to match your unique brand and preferences.
                    </p>
                  </div>

                  <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionFive ? 'sm:max-h-[10rem] max-h-[12rem]':'xm:max-h-[3.5rem] max-h-[5rem]'}`} id="accordion-1">
                    <button onClick={accFive} className="flex items-center justify-between text-start w-full xm:py-3 py-5 text-md text-darkerBlue font-semibold">
                      Can you help with domain and hosting setup?
                      <span className={`${accordionFive ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                        <BiChevronDown />
                      </span>
                    </button>
                    <p className="text-darkerBlue font-medium text-lg">
                      Absolutely, we guide you through domain and hosting for a smooth launch.
                    </p>
                  </div>

                  <div className={`px-3 pb-3 rounded-lg border-[1px] border-slate-200 overflow-hidden transition-max-height duration-500 ease-in-out ${accordionSix ? 'sm:max-h-[10rem] max-h-[12rem]':'xm:max-h-[3.5rem] max-h-[5rem]'}`} id="accordion-1">
                    <button onClick={accSix} className="flex items-center justify-between w-full xm:py-3 py-5 text-start text-md text-darkerBlue font-semibold">
                      How do you ensure a good user experience on all devices?
                      <span className={`${accordionSix ? '-rotate-180':''} transition-transform duration-500 ease-in-out`}>
                        <BiChevronDown />
                      </span>
                    </button>
                    <p className="text-darkerBlue font-medium text-lg">
                      We create responsive designs, guaranteeing a seamless experience on desktops and mobiles.
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service
import { PiSealCheckFill } from 'react-icons/pi'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { HiOutlineArrowLeftCircle, HiOutlineArrowRightCircle } from 'react-icons/hi2'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'; 
import Aos from 'aos'

const Home = () => {
    const [currPage, setCurrPage] = useState(0);

    useEffect(()=>{
        Aos.init()
    },[])

    const testimonials = [
        {
            'message':'Exceptional service! They turned our vision into a stunning reality. Highly recommend.',
            'name':'John Smith',
            'img':'https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            'message':'Impressed by their dedication and creativity. Our project was handled with utmost professionalism.',
            'name':'David Johnson',
            'img':'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        },
        {
            'message':'Top-notch quality and timely delivery. Our experience with their service was truly remarkable.',
            'name':'Michael Miller',
            'img':'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            'message':'Outstanding team that goes the extra mile. They exceeded our expectations in every way.',
            'name':'Robert Thompson',
            'img':'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            'message':'Reliable and innovative – they transformed our ideas into a seamless and impactful solution.',
            'name':'Christopher Davis',
            'img':'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        }
    ];

    const prevReview =()=>{
        if(currPage <= 0){
            setCurrPage(0)
        }else{
            setCurrPage(currPage - 1)
        }
    }

    const nextReview =()=>{
        if(currPage < testimonials.length-1){
            setCurrPage(currPage + 1)
        }
    }
  return (
    <section className="">
        {/* hero */}
        <div className='container mx-auto flex items-center w-full h-[80vh] md:px-0 px-10'>
            <div data-aos="fade-right" className="content-container flex-1">
                <h1 className="text-5xl font-semibold text-darkerBlue">Crafting Your Vision: WeTech's Static & Dynamic Websites!</h1>
                <div className='mt-5 mb-10'>
                    <p className='flex items-center mb-3'>
                        <span className='me-2 text-orange'>
                            <PiSealCheckFill/>
                        </span>
                        Dynamic Website: Engage Your Audience with Immersive Experiences
                    </p>
                    <p className='flex items-center'>
                        <span className='me-2 text-orange'>
                            <PiSealCheckFill/>
                        </span>
                        Static Website: Make a Lasting Impression with Elegant Design
                    </p>
                </div>

                <Link 
                    to='/Form' 
                        className='border-2 border-darkBlue px-7 py-3 rounded-full uppercase font-semibold hover:bg-darkBlue hover:text-white hover:drop-shadow-lg transition ease-in-out duration-500'
                >
                    Consult NOW!
                </Link>
            </div>
            <div data-aos="zoom-in" className="img-container flex-1 h-full lg:flex items-center  hidden" >
                <img src="/hero-img.svg"/>
            </div>
        </div>

        
        {/* projects */}
        <div className='container mx-auto flex flex-col items-center mt-7 md:px-0 px-10'>
            <div data-aos="fade-down" className='text-center flex flex-col items-center justify-center'>
                <p className='bg-[rgba(34,60,151,0.4)] text-darkBlue uppercase font-semibold px-3 py-1 rounded-full mb-3'>Projects</p>
                <h1 className='text-4xl font-semibold uppercase text-darkerBlue md:w-2/3 w-full'>Journey Unveiled: Our Latest Project Expedition</h1>
            </div>
            {/* projects container */}
            <div className='mt-10 flex flex-col lg:flex-row items-center gap-20 mb-10'>

                <div data-aos="zoom-in"
                    className='project-1 flex items-center justify-between gap-10 lg:flex-row flex-col-reverse rounded-xl border-b-4 border-grayish hover:border-orange p-3 relative'>
                    <Link className='absolute top-0 right-0 text-gray text-xl hover:text-black transition-all ease-in-out duration-300'>
                        <FaExternalLinkAlt/>
                    </Link>
                    <div className='flex-1'>
                        <img src='/projects/SpecialDog.png' loading="lazy"/>
                    </div>
                </div>

                <div data-aos="zoom-in" className='project-1 flex items-center justify-between gap-10 lg:flex-row flex-col rounded-xl border-b-4 border-grayish hover:border-orange p-3 relative'>
                    <Link className='absolute top-0 right-0 text-gray text-xl hover:text-black transition-all ease-in-out duration-300'>
                        <FaExternalLinkAlt/>
                    </Link>
                    <div className='flex-1'>
                        <img src='/projects/harmonyOrganic.png' loading="lazy"/>
                    </div>
                </div> 
            </div>
        </div>

               {/* project process container */}
               <div className='bg-darkBlue w-full my-10'>
            <div data-aos="fade-down" className='text-center w-full'>
                <h1 className='text-4xl font-semibold uppercase text-white pt-10'>Simple Process</h1>
            </div>
            <div className='container mx-auto flex flex-col lg:flex-row items-center gap-10 py-10'>
                <div data-aos="zoom-in" className='flex-1 flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <p className='bg-salmon px-4 py-2 rounded-full text-white'>1</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-2xl my-3'>Decide Website Type</h2>
                        <p className='text-gray'>Choose whether your website will have fixed content (static) or interactive features (dynamic) based on your business/project goals.</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className='flex-1 flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <p className='bg-cyan px-4 py-2 rounded-full text-white'>2</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-2xl my-3'>Consult Us</h2>
                        <p className='text-gray'>Contact our team to discuss your website requirements, design preferences, and functionalities. We're here to guide you through the process.</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className='flex-1 flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <p className='bg-violet px-4 py-2 rounded-full text-white'>3</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-2xl my-3'>Project Building</h2>
                        <p className='text-gray'>Our experts create your customized website, bringing your vision to life with design, content integration, and necessary features.</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className='flex-1 flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <p className='bg-orange px-4 py-2 rounded-full text-white'>4</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-2xl my-3'>Payment</h2>
                        <p className='text-gray'>Finalize the project, ensure your satisfaction, and complete the payment to launch your new website for the world to see.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* tech stack */}
        <div>
            <div className='container mx-auto md:px-0 px-10'>
                <div data-aos="fade-down" className='text-center flex flex-col items-center justify-center'>
                    <p className='bg-[rgba(255,145,77,0.4)] text-orange uppercase font-semibold px-3 py-1 rounded-full mb-3'>Tech Stack</p>
                    <h1 className='text-4xl font-semibold uppercase text-darkerBlue md:w-1/2 w-full'>Digital Mastery: The Heartbeat of Our Tech Infrastructure</h1>
                </div>
                <div className='flex items-center flex-col md:flex-row justify-evenly flex-wrap mt-10 gap-10 overflow-hidden'>
                    <div data-aos="fade-left" className='flex flex-col gap-5 md:w-auto w-full'>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>HTML5</p>
                        </div>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>CSS3</p>
                        </div>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>Tailwind CSS</p>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='flex flex-col gap-5 md:w-auto w-full'>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>Bootstrap</p>
                        </div>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>React Js</p>
                        </div>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>Node Js</p>
                        </div>
                    </div>
                    
                    <div data-aos="fade-right" className='flex flex-col gap-5 md:w-auto w-full'>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>Express Js</p>
                        </div>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>PHP</p>
                        </div>
                        <div className='flex items-center gap-3 text-darkerBlue font-semibold text-xl'>
                            <span>
                                <AiOutlineCheckCircle/>
                            </span>
                            <p>Laravel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* reviews */}
        <div className='my-20'>
            <div className='container mx-auto md:px-0 px-10'>
                <div data-aos="fade-down" className='text-center flex flex-col items-center justify-center'>
                    <p className='bg-[rgba(34,60,151,0.4)] text-darkBlue uppercase font-semibold px-3 py-1 rounded-full mb-3'>Reviews</p>
                    <h1 className='text-4xl font-semibold uppercase text-darkerBlue md:w-1/2 w-full'>Client Raves: Experiencing Excellence Through Their Words</h1>
                </div>
                <div className='mt-10'>
                    <div className='bg-darkerBlue sm:py-0 py-5  w-full flex md:flex-row flex-col items-center rounded-lg drop-shadow-lg'>
                        <div data-aos="zoom-in" className='flex rounded-lg'>
                            <img src={testimonials ? testimonials[currPage].img:''} className='rounded-lg h-[23rem] w-[20rem] drop-shadow-lg' loading="lazy"/>
                        </div>
                        <div className='sm:w-2/3 w-full p-5 flex flex-col items-start justify-center'>
                            <div data-aos="fade-right" className='text-orange mb-5'>
                                <p className='text-3xl mb-3 font-semibold'>{testimonials ? testimonials[currPage].message:''}</p>
                                <p className='font-semibold'>{testimonials ? testimonials[currPage].name:''}</p>
                            </div>
                            <div data-aos="zoom-in" className='flex items-center gap-5'>
                                <button onClick={prevReview} className='text-orange text-4xl'>
                                    <HiOutlineArrowLeftCircle/>
                                </button>
                                <button onClick={nextReview} className='text-orange text-4xl'>
                                    <HiOutlineArrowRightCircle/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
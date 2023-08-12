import { BsFacebook,BsTwitter,BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-darkerBlue">
        <div className="container mx-auto py-10 md:px-0 px-10">
          <div className='flex sm:flex-row flex-col sm:text-start text-center sm:items-start sm:gap-0 gap-5 items-center justify-between'>
              <div className='text-white flex-1'>
                  <h1 className='text-2xl font-semibold mb-2'>
                    We
                    <span className='text-orange'>
                      Tech
                    </span>
                  </h1>
                  <p>
                    Elevating the World with Elegant Digital Frameworks: Crafting Solutions for a Brighter Tomorrow.
                  </p>
              </div>
              <div className='flex-1 text-center'>
                <h1 className='text-xl font-semibold text-orange mb-2'>Quick Links</h1>
                <div className='flex flex-col gap-3 text-white'>
                  <Link to='/'>Home</Link>
                  <Link to='/About'>About</Link>
                  <Link to='/Service'>Service</Link>
                  <Link to='/Projects'>Projects</Link>
                  <Link to='/Form'>Consult</Link>
                </div>
              </div>
              <div className='flex-1 text-center'>
                  <h1 className='text-xl font-semibold text-orange mb-2'>Social Links</h1>
                  <div className='flex items-center justify-center text-white gap-5'>
                    <a href='#'>
                      <BsFacebook/>
                    </a>
                    <a href='#'>
                      <BsTwitter/>
                    </a>
                    <a href='#'>
                      <BsDiscord/>
                    </a>
                  </div>
              </div>
          </div>
        </div>
        <div className='container mx-auto md:px-0 px-10 pt-5 border-t-[1px] border-white'>
            <p className='text-white'>
              &copy; 2023 WeTech. All rights resereved.
            </p>
          </div>
    </footer>
  )
}

export default Footer
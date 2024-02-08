import '../App.css';
import Container from '../components/Container';
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import '../Header.css';
import logo from '../images/main-logo.webp'
import Brud from '../images/brud.png' 


const infoNavItems = {
    leftSide: [
      { text: "info@allstarsmb.com", icon: <MdEmail size={18} /> },
      { text: "(501)-424-0123", icon: <BsFillTelephoneFill size={18} /> },
      { text: "(844) 726-9464", icon: <BiSolidBuildingHouse size={20} /> }
    ],
    rightSide: [
  
      { icon: < FaFacebookF /> },
      { icon: <FaLinkedinIn /> },
      { icon: <FaYoutube /> }
    ]
  }
  
  // header 
  const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setIsSticky(offset > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])
  };

  function Contact() {
    return (
      <div>
        <div className={'bg-blue w-full mx-auto'}>
        <Container className={'flex justify-between items-center py-2'}>
          <div className='flex flex-row text-center'>
            {infoNavItems.leftSide.map((item, i, array) => (
              <div key={i} className='flex items-center cursor-pointer'>
                {item.icon && <span className='text-white ml-3'>{item.icon}</span>}
                <p className={`text-white ${i === array.length - 1 ? '' : 'border-r-[#DDDDDD2E] border-r-[0.05rem]'} px-2`}>{item.text}</p>
              </div>
            ))}
          </div><div className='flex flex-row text-center justify-between text-white'>
            {infoNavItems.rightSide.map((item, i) => (
              <div key={i} className='flex items-center'>
                {item.icon && <span className='text-white mx-3 cursor-pointer'>{item.icon}</span>}
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className='z-10 sticky top-0 flex flex-row justify-between items-center bg-white py-2 pr-12 pl-12 shadow-sm z-'>
        <div><img className='h-16 cursor-pointer' src={logo} alt='mainLogo'></img></div>
        <div className='flex flex-row justify-between'>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3 hover:text-blue focus:text-blue">
            Home
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3 hover:text-blue focus:text-blue">
            About Us
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3 hover:text-blue focus:text-blue">
            Services
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3 hover:text-blue focus:text-blue">
            Plans & Pricing
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3 hover:text-blue focus:text-blue">
            Contact Us
          </a>
        </div>
        <div>
          <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-8">Request a Call Back</button>
        </div>
      </div>

         <div className='relative'>
         <div className='bg-gradient-to-r from-darkblue to-darkblue' style={{ 
         background: 'linear-gradient(180deg, #204066 0%, #008ac6 100%)',
        opacity: '0.9',
        transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
            }}>
        <img src={Brud} alt='Brud' className='opacity-20 w-full h-44' />
        </div>
            <h1 className="text-white text-5xl font-bold absolute top-16 left-16">Contact Us</h1>
            </div>
        <div className=' mt-20'>
        <div className="md:flex mx-20 py-5">
          <div className="mx-3 flex-1">
            <div className="flex flex-col rounded-lg min-h[200px] h-full" style={{ boxShadow: '0px 0px 18px 0px rgba(0,0,0,.16)' }}>
              <div className="p-6">
              <a href=''>
                  <div className=' flex flex-col items-center text-center'>
                  <div>
              <LuPhoneCall style={{ color: '#008ac6', marginRight: '10px', fontSize: '35px' }} />
            </div>
                    <p className='font-semibold'>(051) 4240123</p>
                    <p>Call Today</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-3 flex-1">
            <div className="flex flex-col rounded-lg min-h[200px] h-full" style={{ boxShadow: '0px 0px 18px 0px rgba(0,0,0,.16)' }}>
              <div className="p-6">
                <a href=''>
                  <div className=' flex flex-col items-center text-center'>
                  <div>
              <IoMailOutline style={{ color: '008ac6', marginRight: '10px', fontSize: '40px' }} />
            </div>
                    <p className='font-semibold'>info@allstarsmb.com</p>
                    <p>Feel Free To Mail Us</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-3 flex-1">
            <div className="flex flex-col rounded-lg min-h[200px] h-full" style={{ boxShadow: '0px 0px 18px 0px rgba(0,0,0,.16)' }}>
              <div className="p-6">
              <a href=''>
                  <div className=' flex flex-col items-center text-center'>
                  <div>
              <IoLocationOutline style={{ color: '008ac6', marginRight: '10px', fontSize: '40px' }} />
            </div>
                    <p className='font-semibold'>2121 N California Blvd Suite 243, Walnut Creek, CA 94596, USA</p>
                    <p>California Office</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Locations & Contact section */}
      <div className='bg-darkgray mt-24'>
        <div className='md:flex gap-20 mx-20 py-20'>
          <div className='w-1/2'>
            {/* Left */}
            <h1 className='text-2xl'>Our Locations</h1>
            <div className='h-1 w-[9rem] bg-blue'></div>
            <div className='felx-1 py-8'>
            <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6295.864071381195!2d-122.06452505191072!3d37.908651254732625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561bd3ff82649%3A0x823c07820af525e0!2sAllStars%20Medical%20Billing!5e0!3m2!1sen!2s!4v1707299200723!5m2!1sen!2s" 
    width="600" 
    height="400" 
    style={{ border: "0" }} 
    allowFullScreen={true}
    referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

            </div>
          </div>
          <div className='w-1/2'>
            {/* right  */}
            <h1 className='text-2xl'>Contact Us</h1>
            <div className='h-1 w-[7rem] bg-blue'></div>
            <div className='flex-1'>
            <div className="items-center py-8 md:flex flex-col gap-4">
              <div className="flex gap-4 w-full">
                <input type="text" className=" flex-1 border bg-darkgray p-2 focus:outline-none border-borderstyledark" placeholder="Name" />
                <input type="email" className=" flex-1 border bg-darkgray border-borderstyledark p-2  focus:outline-none" placeholder="Email Address" />
              </div>
              <div className="flex gap-4 w-full">
                <input type="text" className="border bg-darkgray border-borderstyledark p-2 focus:outline-none flex-1" placeholder="Phone No." />
                <select className="border bg-darkgray border-borderstyledark p-2 focus:outline-none flex-1">
                  <option value="" disabled selected>-Service-</option>
                  <option value="category1">Medical Billing</option>
                  <option value="category2">Medical Coding</option>
                  <option value="category3">Credentialing</option>
                  <option value="category3">Other</option>
                </select>
              </div>

              <div className="flex gap-4 w-full">
                <select className="border bg-darkgray border-borderstyledark p-2 focus:outline-none flex-1">
                  <option value="" disabled selected>-State-</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </select>
                <input type="text" className="border bg-darkgray border-borderstyledark p-2 focus:outline-none flex-1" placeholder="Pick a Date" />
              </div>

              {/* Textarea */}
              <div className="flex flex-col w-full">
                <textarea
                  className="border bg-darkgray border-borderstyledark p-2 focus:outline-none h-36"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue text-white border rounded-md border-white mt-4 px-4 py-2 transition mr-auto"
              >
                Submit Now
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* Contact card section */}
      <div className='bg-blue w-full'>
        <div className='mx-4 md:mx-8 lg:mx-16 py-4 flex flex-col md:flex-row justify-between'>
          <div className='mb-4 md:mb-0 md:mr-4 flex items-center'>
            <div>
              <LuPhoneCall style={{ color: 'white', marginRight: '10px', fontSize: '45px' }} />
            </div>
            <div>
              <p className='text-xl pt-2 text-white font-semibold'>Have Project on Mind?</p>
              <p className='text-white'>(501) 424-0123</p>
            </div>
          </div>
          <div className='mb-4 md:mb-0 md:mr-4 flex items-center'>
            <div>
              <IoMailOutline style={{ color: 'white', marginRight: '10px', fontSize: '50px' }} />
            </div>
            <div>
              <p className='text-xl pt-2 text-white font-semibold'>Email</p>
              <p className='text-white'>info@allstarsmb.com</p>
            </div>
          </div>
          <div className='mb-4 md:mb-0 md:mr-4 flex items-center'>
            <div>
              <LiaFaxSolid style={{ color: 'white', marginRight: '10px', fontSize: '55px' }} />
            </div>
            <div>
              <p className='text-xl pt-2 text-white font-semibold'>Fax</p>
              <p className='text-white'>(844) 726-9464</p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-white text-black border border-black mt-4 px-4 md:px-6 py-2 rounded transition hover:border-white hover:bg-blue hover:text-white mr-auto">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
        {/* Footer */}
        <div className='bg-black'>
        <div className='py-10 px-4 lg:px-10 flex flex-col lg:flex-row justify-between'>
          <div className='flex flex-col justify-start border-2 rounded-lg border-blue lg:w-[28%]'>
            {/* left one */}
            <div className='bg-white pt-5 pl-5 rounded-tl-lg rounded-tr-lg'>
              <img className='h-20 cursor-pointer py-2' src={logo} alt='mainLogo' />
            </div>
            <p className='text-white bg-black px-5 pt-5'>
              AllStars has been helping Healthcare providers in increasing collections,
              reduce extra expenses and streamline the business workflow with highly experienced team.
            </p>

            <div className="flex social-links space-x-4 mx-5 my-5">
    <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-80">
        <FaFacebookF className="text-white text-lg" />
    </a>
    <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-80">
        <FaLinkedinIn className="text-white text-lg" />
    </a>
    <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-80">
        <FaYoutube className="text-white text-lg" />
    </a>
</div>

          </div>
          <div className='text-white lg:mt-0 mt-6'>
            {/* left two */}
            <nav className='flex flex-col gap-4'>
              <h6 className="text-2xl font-bold">Company</h6>
              <a href="#" className="hover:text-blue">About Us</a>
              <a href="#" className="hover:text-blue">Services</a>
              <a href="#" className="hover:text-blue">Specialties</a>
              <a href="#" className="hover:text-blue">Pricing</a>
              <a href="#" className="hover:text-blue">Referal Program</a>
              <a href="#" className="hover:text-blue">Contact Us</a>
            </nav>
          </div>
          <div className='text-white mt-6 lg:mt-0'>
            {/* right one */}
            <nav className='flex flex-col gap-4'>
              <h6 className="text-2xl font-bold">Services</h6>
              <a href="#" className="hover:text-blue">Medical Billing</a>
              <a href="#" className="hover:text-blue">Medical Coding</a>
              <a href="#" className="hover:text-blue">Medical Credentialing</a>
              <a href="#" className="hover:text-blue">Verification of Benefits</a>
              <a href="#" className="hover:text-blue">Prior Authorization Services</a>
              <a href="#" className="hover:text-blue">Patient Billing</a>
            </nav>
          </div>
          <div className='mt-6 lg:mt-0 w-1/4'>
            {/* right two */}
            <div className="flex flex-col gap-4 w-full">
              <h1 className='text-white font-bold text-2xl'>Quick Contact</h1>
              <input type="text" className="lg:flex-1 border p-2 rounded border-none focus:outline-none" placeholder="Your Email" />
              <div className="flex flex-col w-full">
                <textarea
                  className="border p-2 rounded focus:outline-none"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue text-white w-full mt-4 p-3 rounded transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className='bg-blue'>
        <div className='py-4 px-10 flex justify-between text-white font-semibold'>
          <div>
            <p>© 2023 AllStars Medical Billing. All rights reserved</p>
          </div>
          <div>
            <a href="#" >Privacy Policy | Terms & Conditions</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Contact;
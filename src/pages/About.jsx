import '../App.css';
import Container from '../components/Container';
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import '../Header.css';
import logo from '../images/main-logo.webp'
import banner from '../images/Banner-img.png'
import aboutimage from '../images/ABout.png'
import Brud from '../images/brud.png' 
import MissionImage from '../images/goals.png' 
import VisionImamge from '../images/vision.png' 
import serviceAimnImage from '../images/amin3.png'


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

  function About() {
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
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3">
            Contact Us
          </a>
        </div>
        <div>
          <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-8 hover:bg-sky-700">Request a Call Back</button>
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
            <h1 className="text-white text-4xl font-bold absolute top-16 left-16">About Us</h1>
            </div>
      {/* About */}
      <div className='mt-20 mx-14'>
        <div className='pb-[5rem] flex mr-20 ml-20'>
          <div className='md:flex justify-between gap-8'>
            <div className='md:w-2/5'>
              <img className='rounded-md' src={aboutimage} alt="Aboutimage" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className=' md:w-2/3 mt-8'>
              <h1 className='text-2xl font-bold text-left ml-3'>About AllStars Medical Billing</h1>
             <div className='h-1 w-[21rem] bg-blue mt-2 ml-3'></div>
              <p className='mt-6 ml-3 line-clamp-7'>
              Effective billing management is a crucial component of any successful medical practice. By entrusting this responsibility to the experts at AllStars Medical Billing Solutions, you can free up your staff and medical professionals to concentrate on what matters most: providing top-notch patient care.
             </p>
             <p className='mt-6 ml-3 line-clamp-7'>
             With a wealth of experience in the field, our billing professionals are dedicated to helping healthcare providers optimize their revenue streams, cut unnecessary expenses, and streamline their business operations. AllStars Medical Billing Solutions offers a 
             comprehensive end-to-end revenue cycle management solution tailored to over 50 medical specialties across the United States.
             </p>
          <button className="bg-blue mt-16 text-white px-5 py-2 rounded-md font-semibold float-right shadow-lg hover:bg-sky-700">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className='md:mt-16'>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-20">
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-2xl'>98%</h1>
          <h2 className='text-center font-bold text-blue pt-5'>Clean Claims Acceptance</h2>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-2xl'>08%</h1>
          <h2 className='text-center font-bold text-blue pt-5'>Monthly Denials</h2>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-2xl'>96%</h1>
          <h2 className='text-center font-bold text-blue pt-5'>Electronic Claims Submission</h2>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-2xl'>99%</h1>
          <h2 className='text-center font-bold text-blue pt-5'>Credentialing Success</h2>
        </div>
      </div>
    </div>
    {/* Add three more sets of similar card divs */}
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-2xl'>96%</h1>
          <h2 className='text-center font-bold text-blue pt-5'>Bank Direct Deposit</h2>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-2xl'>10% - 15%</h1>
          <h2 className='text-center font-bold text-blue pt-5'>Practise Growth</h2>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-2xl'>10Y</h1>
          <h2 className='text-center font-bold text-blue pt-5'>Team Avg. Experties</h2>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-2xl'>95%</h1>
          <h2 className='text-center font-bold text-blue pt-5'>Electronic Payments</h2>
        </div>
      </div>
    </div>
  </div>
        </div>
        {/* Mission section */}
        <div className='bg-darkgray mt-14'>
            <div className='md:flex justify-between mx-20 items-center py-10'>
                <div>
                    <h1 className='font-bold text-2xl'>Our <span className='text-blue'>Mission</span></h1>
                    <div className='h-1 w-[8.5rem] bg-blue'></div>
                    <p className='pt-5 pr-32'>At AllStars Medical Billing, our purpose is to empower healthcare providers by alleviating the complexities of medical billing. We are dedicated to optimizing revenue streams, minimizing costs, and enhancing operational efficiency for over 50 medical specialties across the United States. Our unwavering commitment is to enable healthcare professionals to dedicate their full attention to patient care, while we expertly manage claims, payments, and patient statements with precision and speed.  We are steadfast in our mission to ensure accuracy from the outset,
                         eliminating the underlying causes of billing errors and providing peace of mind to our clients.</p>
                </div>
                <div>
                    <img className='h-auto max-w[100%]:' src={MissionImage} alt='MissionImage'style={{width:'1300px'}}></img>
                </div>
            </div>
        </div>
        {/* Vision section */}
        <div className='mt-14'>
            <div className='md:flex justify-between mx-20 items-center py-10'>
                <div>
                    <img className='h-auto max-w[100%]:' src={VisionImamge} alt='VisionImamge'style={{width:'1300px'}}></img>
                </div>
                <div className='pl-32'>
                    <h1 className='font-bold text-2xl'>Our <span className='text-blue'>Mission</span></h1>
                    <div className='h-1 w-[8.5rem] bg-blue'></div>
                    <p className='pt-5'>
                    We aspire to become the foremost ally for healthcare practices in their pursuit of financial excellence. Our goal is to establish the benchmark for excellence in medical billing, credentialing, medical accounts receivable management, and practice billing audit services within the industry. Drawing upon our extensive experience in healthcare billing, we envision a future where healthcare providers can place their complete trust in us to elevate their financial performance. This trust will enable them to
                     offer exceptional services to their patients with unwavering confidence and peace of mind.
                    </p>
                </div>
            </div>
        </div>
        {/* Address section */}
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
                  className="border p-2 rounded focus:outline-none h-32"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue text-white w-full mt-4 p-3 rounded transition hover:bg-sky-700"
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
  
  export default About;
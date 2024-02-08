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
import MainCodingImage from '../images/Main3.png' 
import MedialIMage from '../images/medial.png' 
import DynamicImage from '../images/positive_dynamic.svg' 


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

  function MedicalCoding() {
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
            <h1 className="text-white text-4xl font-bold absolute top-16 left-16">Medical Coding</h1>
            </div>
            <div className='bg-darkgray'>
                <div className='flex gap-44 mx-20'>
                    <div className='w-1/2 my-32'>
                        {/* Left section */}
                        <h1 className='text-2xl'>Medical Coding Services</h1>
             <div className='h-1 w-[16rem] bg-blue mt-1'></div>
             <p className='pt-4'>AllStars Medical Coding Services: Precision in Healthcare Documentation</p>
                <p className='pt-4'>Welcome to AllStars Medical Coding Services, your trusted partner for precision and accuracy
                 in healthcare documentation. Our expert team ensures that every code is meticulously and accurately assigned, allowing
                  you to optimize your revenue while maintaining compliance with industry regulations. Trust us to elevate your coding standards and streamline your healthcare operations with AllStars.</p>
          <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">Contact Us</button>
                    </div>
                <div>
                    {/* Right section */}
                    <img className='pt-28' src={MainCodingImage} alt='MainImage' style={{backgroundPosition: 'bottom' }}></img>
                </div>
                </div>
            </div>

            {/* Card Section */}
      <div className='md:mt-16'>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-20">
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center text-elementcolor font-semibold text-2xl'>Certified Medical Coders</h1>
          <p className='text-center pt-4 text-gray-500'>With the help of our certified medical coding specialists working on your project, your claim denial
             rate is significantly reduced. Our coders use the best in class coding tools and resources available in the industry</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>Coding Audits</h1>
          <p className='text-center pt-4 text-gray-500'>Daily, monthly, quarterly and yearly audits is what distinguishes us from rest working in the same
             space. For our clients we offer scheduled and on-demand coding audits without any cost</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>Coding Effective</h1>
          <p className='text-center pt-4 text-gray-500'>Using medical coding services is cost effective.</p>
        </div>
      </div>
    </div>
  </div>
        </div>
        <div className='bg-darkgray mt-20'>
            <div className='flex justify-between py-20 mx-20'>
                <img src={DynamicImage}  className="h-auto max-h-[35rem] max-w-full"></img>

            <div className=''>
            <h1 className='text-2xl'>Maximizing Your Reimbursement Potential</h1>
             <div className='h-1 w-[28rem] bg-blue mt-1'></div>
                <p className='pt-4'>At AllStars Medical Coding Services, we understand that coding accuracy directly impacts
                     your revenue, and we are committed to ensuring you receive the highest possible reimbursement.
                      Efficiency is at the core of our coding process. Our coding team comprises highly efficient and seasoned professionals, each with a minimum of five years of experience.</p>
                <p className='pt-3'>When it comes to coding, we are vigilant about preventing two common errors:</p>
                <p className='pt-3'>Up-coding (or over-coding), which often leads to claim denials.</p>
                <p>Down-coding, resulting in reimbursements that fall short of what you rightfully deserve.</p>
                <p className='pt-1'>Our certified coders (CPC) are well-versed in ICD-10-CM, LMRP, CPT Assistant, and HCPCS
                     Level II. We meticulously cross-verify diagnoses with procedural codes, applying the appropriate modifiers when needed.</p>
                <p className='pt-3'>To ensure the utmost accuracy, our senior coding staff conducts audits to verify the codes assigned.
                     Our dedicated quality assurance team goes the extra mile to guarantee that your coding is error-free,
                      resulting in maximum reimbursement and minimizing, if not entirely eliminating, claim denials. With AllStars, you can trust in our expertise to optimize your revenue while maintaining coding precision.”</p>
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
            export default MedicalCoding;
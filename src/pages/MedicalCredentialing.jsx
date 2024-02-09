import '../App.css';
import Container from '../components/Container';
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {IoMailOutline} from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import '../Header.css';
import logo from '../images/main-logo.webp'
import Brud from '../images/brud.png' 
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

  function MedicalCredentialing() {
    return (
      <div>
        <div className={'bg-blue w-full mx-auto md:block hidden'}>
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
          <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-8 hover:bg-sky-700 md:block hidden">Request a Call Back</button>
        </div>
      </div>

         <div className='relative'>
         <div className='bg-gradient-to-r from-darkblue to-darkblue' style={{ 
         background: 'linear-gradient(180deg, #204066 0%, #008ac6 100%)',
        opacity: '0.9',
        transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
            }}>
        <img src={Brud} alt='Brud' className='opacity-5 w-full h-44' />
        </div>
            <h1 className="text-white text-4xl font-bold absolute md:top-16 md:left-16 top-12 left-[70px]">Credentialing & Enrollment</h1>
            </div>
            <div className='bg-darkgray'>
                <div className='md:flex gap-44 md:mx-20 mx-5 mt-16'>
                    <div className='md:w-1/2 md:my-32'>
                        {/* Left section */}
                        <h1 className='text-2xl'>Reduce the Complexity of Credentialing</h1>
             <div className='h-1 md:w-[26rem] bg-blue mt-1'></div>
             <p className='pt-4'>AllStars can handle any specialty including laboratories and DMEs. Our
              experts send error free applications to insurances and do proper follow-up till the case is 
              closed. Our first time application acceptance ratio is 98%. We can assist you in setting up your setups with insurance companies for electronic claims submissions, rejections, eligibility, payment information, denials and fund transfer.</p>
          <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">Contact Us</button>
                    </div>
                <div>
                    {/* Right section */}
                    <img className='md:pt-28 pt-10' src={serviceAimnImage} alt='MainImage' style={{backgroundPosition: 'bottom' }}></img>
                </div>
                </div>
            </div>
            <div className='mt-20'>
            <h1 className='text-3xl text-center'>Our Credentialing Services</h1>
             <div className='h-1 w-[21rem] bg-blue mt-1 mx-auto'></div>
            </div>

            {/* Cards Section */}
            <div className='md:my-20'>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 md:mx-20 my-12">
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center text-elementcolor font-semibold text-2xl'>Primary Source Verification</h1>
          <p className='text-center pt-4 text-gray-500'>We conduct Primary Source Verification for credentialing,
           including board certification, license, and hospital privileges checks, ensuring accuracy and reliability directly from the source.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>Management of Documents</h1>
          <p className='text-center pt-4 text-gray-500'>Efficiently manage and securely store healthcare
           provider documents, including certifications and licenses, for streamlined access and regulatory 
           compliance by using Allstars secure credentialing management system.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>NPI Regestration</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars streamlines NPI Registration for both Type 1
           (individuals) and Type 2 (organizations), ensuring efficient and accurate identification in healthcare
            billing.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>CAQH Profile Management/Reattestation</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars excels in CAQH Profile Management
           and Reattestation, ensuring hassle-free maintenance of accurate healthcare provider information.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>Credentialing & Network Enrollment Analysis</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars offers expert Credentialing and Network
           Enrollment Analysis, ensuring accuracy and compliance for streamlined provider enrollment.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>Revalidation and Re-credentialing</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars manages the crucial processes of Revalidation and Re-credentialing,
           ensuring that healthcare providers maintain current and compliant credentials for continued participation in healthcare networks.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>Weekly Follow Up</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars conducts proactive weekly follow-ups with insurance companies, ensuring timely
           approvals and efficient processing to meet your needs.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>Credentialing Audit</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars offers on-demand Credentialing Audits, ensuring a thorough and timely examination
           of credentials to maintain compliance and accuracy for healthcare providers.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>IPA Enrollment</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars streamlines IPA (Independent Practice Association) Enrollment, providing efficient and effective
           services for healthcare providers to join and participate in independent practice associations.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>Telehealth Credentialing</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars specializes in Telehealth Medicine Credentialing, ensuring healthcare providers are credentialed
           and compliant for telehealth services, facilitating seamless and secure virtual healthcare delivery.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>EDI Setups</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars specializes in EDI (Electronic Data Interchange) Setups, ensuring efficient
           and accurate electronic communication for seamless data exchange between healthcare entities.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>ERA Setups</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars excels in ERA (Electronic Remittance Advice) Setups, offering seamless solutions for 
          healthcare entities to streamline and optimize the electronic processing of payment information.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-semibold text-elementcolor text-2xl'>EFT Enrollment</h1>
          <p className='text-center pt-4 text-gray-500'>AllStars specializes in EFT (Electronic Funds Transfer) Enrollment, streamlining the process for healthcare
           providers to efficiently receive electronic payments, enhancing financial transactions in the healthcare industry.</p>
        </div>
      </div>
    </div>
        </div>
        </div>
        {/* Contact card section */}
        <div className='bg-blue w-full'>
        <div className='mx-4 lg:mx-16 py-4 flex flex-col md:flex-row justify-between'>
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
          <div className='mt-6 lg:mt-0 lg:w-1/4 w-full'>
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
      <div className='py-4 px-5 md:w-full w-full flex flex-col md:flex-row justify-between items-center font-semibold text-white'>
  
    <p>© 2023 AllStars Medical Billing. All rights reserved</p>
    <a href="#" >Privacy Policy | Terms & Conditions</a>
  </div>
</div>
            </div>
            );
            }
            export default MedicalCredentialing;
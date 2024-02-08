import '../App.css';
import Container from '../components/Container';
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { LiaFaxSolid } from "react-icons/lia";
import { FaYoutube, FaDotCircle} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsHeartPulse, BsDashLg } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { GrCheckmark } from "react-icons/gr";
import { LuDot } from "react-icons/lu";
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

  function PricePlan() {
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
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3">
            Home
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3">
            About Us
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3">
            Services
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-gray-900 mx-3">
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
        <img src={Brud} alt='Brud' className='opacity-20 w-full' />
        </div>
            <h1 className="text-white text-5xl font-bold absolute top-16 left-16">Plans and Pricing</h1>
            <p className="text-white absolute top-24 left-16 w-1/2 pt-8">We offer a range of comprehensive plans to cater to various medical billing needs. Our transparent pricing ensures that you get the best value for
             your investment. Choose the plan that aligns with your practice’s requirements and budget.</p>
            </div>
            {/* Card Section */}
            <div className='md:mt-16 pt-10 pb-24'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-20">
                {/* First Card */}
            <div className="flex-1">
            <div className="flex flex-col border rounded-md border-blue">
            <div className="p-8 text-gray-600">
            <BsHeartPulse style={{fontSize: '35px', color: '#008ac6'}}/>
            <h1 className='text-2xl text-blue font-semibold pt-4'>Essentail Plan</h1>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Claim Scrubing</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Charge Entry</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Clearing House Rejection</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Denial Management</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Submissions within 24 Hours</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Primary Payer Submission</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Paper Claims Submissions</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Payment Posting</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Timely Feeling Appeals</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Daily Follow-Up on Unpaid Claims</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>24/7 Billing Support</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Monthly Reports</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Dedicated Account Manager</h1>
            <LuDot/>
            </div>
            <div className='pt-5'>
          <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-8">Request a Call Back</button>
        </div>
            </div>
            </div>
            </div>
                {/* second Card */}
            <div className="flex-1">
            <div className="flex flex-col border rounded-md bg-blue">
                <div className="p-8 text-white">
            <BsHeartPulse style={{fontSize: '35px', color: 'white'}}/>
            <h1 className='text-2xl text-white font-semibold pt-4'>Premium Plan</h1>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Claim Scrubing</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Charge Entry</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Clearing House Rejection</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Denial Management</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Submissions within 24 Hours</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Primary Payer Submission</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Paper Claims Submissions</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Payment Posting</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Timely Feeling Appeals</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Daily Follow-Up on Unpaid Claims</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>24/7 Billing Support</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Monthly Reports</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <GrCheckmark className='mr-2' />
            <h1>Dedicated Account Manager</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Eligibility Verification</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Deductible Verification</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Referral/Authorization</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>EDI Setups</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>ERA Setups</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>EFT Setups</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Patient Statements</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Patient Help Desk</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Monthly Billing Audit</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Monthly Coding Audit</h1>
            <LuDot/>
            </div>
            <div className='pt-5'>
          <button className="btn bg-blue h-12 border border-white rounded-md text-white font-semibold px-8 hover:bg-white hover:text-blue">Request a Call Back</button>
        </div>
             </div>
            </div>
            </div>
                {/* Third Card */}
            <div className="flex-1">
            <div className="flex flex-col border rounded-md border-blue">
             <div className="p-8 text-gray-600">
            <BsHeartPulse style={{fontSize: '35px', color: '#008ac6'}}/>
            <h1 className='text-2xl text-blue font-semibold pt-4'>All-Inclusive Plan</h1>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Claim Scrubing</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Charge Entry</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Clearing House Rejection</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Denial Management</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Submissions within 24 Hours</h1>
            <LuDot />
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Primary Payer Submission</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Paper Claims Submissions</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Payment Posting</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Timely Feeling Appeals</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Daily Follow-Up on Unpaid Claims</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>24/7 Billing Support</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Monthly Reports</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FcCheckmark className='mr-2' />
            <h1>Dedicated Account Manager</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Eligibility Verification</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Deductible Verification</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Referral/Authorization</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>EDI Setups</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>ERA Setups</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>EFT Setups</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Patient Statements</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Patient Help Desk</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Monthly Billing Audit</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <FaDotCircle className='mr-2' style={{fontSize: '12px'}} />
            <h1>Monthly Coding Audit</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <BsDashLg className='mr-2' style={{fontSize: '12px'}} />
            <h1>Propsal Acceptence</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <BsDashLg className='mr-2' style={{fontSize: '12px'}} />
            <h1>Credentialing & Enrollments</h1>
            <LuDot/>
            </div>
            <div className='flex items-center py-2'>
            <BsDashLg className='mr-2' style={{fontSize: '12px'}} />
            <h1>CAQH Attestation</h1>
            <LuDot/>
            </div>
            <div className='pt-5'>
          <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-8">Request a Call Back</button>
        </div>
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
  
  export default PricePlan;
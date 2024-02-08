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
import MainImage from '../images/Main.png' 
import MedialIMage from '../images/medial.png' 


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

  function MedicalBilling() {
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
          <button className="btn bg-blue h-12 rounded-md text-white font-semibold px-4 hover:bg-sky-700">Request a Call Back</button>
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
            <h1 className="text-white text-4xl font-bold absolute top-16 left-16">Medical Billing</h1>
            </div>
            <div className='bg-darkgray'>
                <div className='flex gap-44 mx-20'>
                    <div className='w-1/2 my-32'>
                        {/* Left section */}
                        <h1 className='text-2xl'>Medical Billing Services</h1>
             <div className='h-1 w-[15rem] bg-blue mt-1'></div>
             <p className='pt-4'>Medical billing is the process of sending bills to health insurance 
                companies to get paid for healthcare services. A medical billing specialist’s job is 
                to make sure the healthcare provider gets paid for the work they do. A good biller can help the healthcare facility earn more money.</p>
                <p className='pt-4'>If your medical practice is facing challenges with billing and revenue management, there’s a solution. AllStars Medical Billing offers
                     tailored medical billing services that cater to practices of all sizes and specialties. Our goal is to transform the billing process for small practices, making it more efficient, compliant, and less stressful. Through our reliable
                      system, we guarantee precise coding, reducing errors, and optimizing revenue.</p>
          <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">Contact Us</button>
                    </div>
                <div>
                    {/* Right section */}
                    <img className='pt-44' src={MainImage} alt='MainImage' style={{backgroundPosition: 'bottom' }}></img>
                </div>
                </div>
            </div>
            {/* Cards Section */}
            <div className='md:mt-16'>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-20">
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-xl text-elementcolor'>98% Clean Clain acceptance</h1>
          <p className='text-center pt-3'>Welcome to AllStars, where excellence meets efficiency in healthcare claims processing. We take
             immense pride in our remarkable 98% clean claim acceptance rate, setting new standards in the industry.
              Choose AllStars for a smoother, more efficient claims experience. Your success is our priority, and our 98% clean claim acceptance rate reflects our unwavering commitment to your satisfaction.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-xl text-elementcolor'>08% Monthly Denials</h1>
          <p className='text-center pt-3'>Enhancing Your Healthcare Revenue Cycle with AllStars - Only 8% Monthly Denials
            AllStars - Your trusted partner for efficient revenue cycle management and a remarkably
             low 8% monthly denials rate. Let us help you unlock your practice's full financial potential.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-xl text-elementcolor'>96% electronic claim submission</h1>
          <p className='text-center pt-3'>AllStars - Your 96% Electronic Claim Submission Solution"
                Choose AllStars for a hassle-free, efficient electronic claim submission experience.
             Your success is our priority, and our 96% electronic claim submission rate reflects our unwavering commitment to providing you with the best possible service.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-xl text-elementcolor'>99% Credentialing Success</h1>
          <p className='text-center pt-3'>"AllStars: Unlocking Success with a 99% Credentialing Achievement"
                With AllStars as your credentialing partner, you gain access to a team of experts who meticulously
                 navigate the complex world of credentialing. We work diligently to ensure your applications are processed without errors and that your providers can seamlessly participate in insurance networks, allowing you to focus on providing exceptional patient care.</p>
        </div>
      </div>
    </div>
    {/* Add three more sets of similar card divs */}
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-xl text-elementcolor'>96% Bank Direct Depsoit</h1>
          <p className='text-center pt-3'>"AllStars: Your 96% Success Rate in Bank Direct Deposits"
                Select AllStars for a dependable, efficient bank direct deposit experience. Your
                 financial well-being is our priority, and our 96% success rate underscores our dedication to providing you with the best possible service. With AllStars, you can trust that your bank direct deposits will be processed smoothly and securely, allowing you to maintain your focus on your business.</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-xl text-elementcolor'>10% - 15% Practise Growth</h1>
          <p className='text-center pt-3'>"AllStars: Fueling Your Practice Growth
                Experience significant practice growth with AllStars. Our proven strategies have 
                consistently delivered impressive results, ranging from 10% to 15%. Partner with us to unlock your practice's full potential and embark on a journey to lasting success."</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-xl text-elementcolor'>10Y Avg. Team Expertise</h1>
          <p className='text-center pt-3'>"AllStars: 10-Year Average Team Experience
                At AllStars, our team boasts an impressive 10-year average experience. With a decade of
                 expertise, we provide you with seasoned professionals who understand the industry inside out. Trust us to bring unparalleled knowledge and skill to your healthcare needs."</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex flex-col  min-h-[200px] h-full border border-borderstyledark">
        <div className="p-6">
          <h1 className='text-center font-bold text-xl text-elementcolor'>95% Electronic Payments</h1>
          <p className='text-center pt-3'>"AllStars: Your 95% Electronic Payments Partner
                Experience the efficiency and reliability of AllStars with our outstanding 95%
                 electronic payments success rate. We ensure your financial transactions are processed seamlessly and securely, helping you streamline your operations and stay on top of your finances."</p>
        </div>
      </div>
    </div>
  </div>
            </div>
            <div className='bg-darkgray mt-20'>
                <div className='flex gap-16 mx-20 py-20'>
                    <div>
                        {/* left section */}
                        <img src={MedialIMage} alt=''></img>
                    </div>
                    <div className='w-1/2 my-16'>
                        {/* right section */}
                        <h1 className='text-2xl'>Fast Filling</h1>
             <div className='h-1 w-[7rem] bg-blue mt-1'></div>
             <p className='pt-4'>
             When you provide a service, it’s crucial to submit the claims promptly. Managing fluctuating claim
              volumes and ensuring timely submissions can be a challenge for in-house staff. At AllStars Medical Billing, our experienced team excels at filing claims within 48 hours in most cases. We leverage cutting-edge technology to gather precise information and expedite the claim process.
             </p>
          <button className="bg-blue mt-12 text-white px-5 py-2 rounded-md font-semibold float-left shadow-lg hover:bg-sky-700">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <h1 className='text-3xl text-center font-bold'>Boosting Revenue for Better <span className='text-blue'>Patient Care</span></h1>
            </div>
            <div className='mx-20 my-20 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center'>
            <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
            <div className="p-8">
            <h1 className="text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Increased Revenue
            </h1>
            <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Get maximum reimbursements & increase your revenue up to 30%
              </p>
          </div>
            </div>
            <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
            <div className="p-8">
            <h1 className="text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            High Volume Claims Submissions
            </h1>
            <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Utilizing our innovative technology, we are able to process thousands of error-free claims daily.
              </p>
          </div>
            </div>
            <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
            <div className="p-8">
            <h1 className="text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Compliance with Privacy Requirements
            </h1>
            <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Data transmission and encryption designed by top-level security specialists.
              </p>
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
            export default MedicalBilling;
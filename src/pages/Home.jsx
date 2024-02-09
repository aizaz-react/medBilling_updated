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
import bannerTwo from '../images/banner-2.png'
import aboutimage from '../images/ABout.png'
import serviceAimnImage from '../images/amin3.png'
import Brud from '../images/brud.png'
import testimonialImage from '../images/testimonial.png'
import buisnextImage from '../images/businext-img33.png'
import Faqf from '../images/faqs-f.png'
import Gynocologyicon from '../icons/gynecology.png'
import HormonalExamination from '../icons/hormonal-examination.png'
import InternalMedicine from '../icons/Internal-medicine.png'
import Ionm from '../icons/ionm.png'
import Anesthesiology from '../icons/anesthesiology.png'
import Psychiatry from '../icons/psychiatry.png'
import Radiology from '../icons/radiology.png'
import Urology from '../icons/urology.png'
import Neurology from '../icons/neurology.png'
import Painmanagement from '../icons/pain-management.png'
import allstarspartner1 from '../images/allstarmbpartners-1.webp'
import allstarspartner2 from '../images/allstarmbpartners-2.webp'
import allstarspartner3 from '../images/allstarmbpartners-3.webp'
import allstarspartner4 from '../images/allstarmbpartners-4.webp'
import allstarspartner5 from '../images/allstarmbpartners-5.webp'
import allstarspartner6 from '../images/allstarmbpartners-6.webp'
import allstarspartner7 from '../images/allstarmbpartners-7.webp'
import allstarspartner8 from '../images/allstarmbpartners-8.webp'
import allstarspartner9 from '../images/allstarmbpartners-9.webp'
import allstarspartner10 from '../images/allstarmbpartners-10.webp'


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


function Home() {
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
      
      <div className='relative h-72 md:h-auto'>
  <img className='h-full md:w-full object-cover' src={bannerTwo} alt='banner-image' />
  <div className="absolute text-left md:ml-24 top-10 md:mt-24 mx-7 md:mx-0 left-0">
    <h1 className="md:text-4xl font-bold text-white md:my-6">AllStars Medical Billing</h1>
    <p className="md:text-lg mb-4 mt-2 text-white">We excel in medical billing and coding, with expertise in Professional,<br></br>Institutional, Emergency Room, and Out-of-Network coding services.</p>
    <button className="bg-blue mt-4 md:mt-8 text-white px-4 py-2 rounded-md font-bold hover:bg-sky-700">Read More</button>
  </div>
</div>

  <div className='relative md:h-96 mt-[-30px] md:mt-[-70px] md:static'>
    <div className="md:flex md:absolute md:mx-10 mx-5">
      {/* Services Section */}
      <div className="mx-3 flex-1 my-4 md:my-0">
        {/* Service 1 Content */}
        <div className="flex flex-col rounded-lg min-h[300px] h-full bg-white shadow-md dark:bg-neutral-700">
              <div className="p-6">
                <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Medical Credentialing
                </h1>
                <div className='h-1 w-[12rem] bg-blue mt-1 mb-1 mx-auto'></div>
                <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Credentialing specialists assist healthcare providers in enrollment, ensuring insurance reimbursement eligibility. We offer comprehensive credentialing solutions for all practices.
                </p>
              </div>
            </div>
      </div>
      <div className="mx-3 flex-1">
        {/* Service 2 Content */}
        <div className="flex flex-col rounded-lg min-h[300px] h-full bg-white shadow-md dark:bg-neutral-700">
              <div className="p-6">
                <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Medical Coding
                </h1>
                <div className='h-1 w-[9rem] bg-blue mt-1 mb-1 mx-auto'></div>
                <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  We specialize in accurate medical coding, ensuring compliance with regulations. AllStars enables healthcare providers to focus on delivering exceptional patient care by handling proper documentation and billing.
                </p>
              </div>
            </div>
      </div>
      <div className="mx-3 flex-1 my-4 md:my-0">
        {/* Service 3 Content */}
        <div className="flex flex-col rounded-lg min-h[300px] h-full bg-white shadow-md dark:bg-neutral-700">
              <div className="p-6">
                <h1 className="mb-2 text-xl font-medium text-center leading-tight text-neutral-800 dark:text-neutral-50">
                  Medical Billing
                </h1>
                <div className='h-1 w-[8rem] bg-blue mt-1 mb-1 mx-auto'></div>
                <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Our efficient management of medical billing significantly boosts your practice’s revenue, giving you more freedom to focus on providing exceptional patient care.
                </p>
              </div>
            </div>
      </div>
      <div className="mx-3 flex-1">
        {/* Service 4 Content */}
        <div className="flex flex-col rounded-lg min-h[300px] h-full bg-white shadow-md dark:bg-neutral-700">
              <div className="p-6">
                <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Practice Management
                </h1>
                <div className='h-1 w-[12rem] bg-blue mt-1 mb-1 mx-auto'></div>
                <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  With our service, ‘Practice Management,’ we deliver comprehensive support across all stages of the revenue cycle, ensuring seamless efficiency.
                </p>
              </div>
            </div>
      </div>
    </div>
  </div>

  {/* About Section */}
  <div className='bg-darkgray'>
    <div className='py-10 md:pb-[5rem] flex md:mx-20 mx-5'>
      <div className='md:flex justify-between gap-8'>
        <div className='md:w-2/5 w-full'>
          {/* About Image */}
          <img className='rounded-md' src={aboutimage} alt="Aboutimage" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className='mx-5 md:mx-0 pt-10 md:w-2/3 md:pt-0 '>
          {/* About Content */}
          <h1 className='font-bold md:text-3xl text-[28px] flex flex-col md:flex-row'>Welcome To <span className='text-blue'> AllStars Medical Billing</span></h1>
          <p className=' mt-4 md:mt-6 line-clamp-7 text-gray-500'>Billing plays a crucial role in the operations of any medical practice. When entrusted to capable hands, it allows your staff and medical professionals
           to concentrate on their primary focus: delivering excellent patient care. AllStars has a proven track record of assisting healthcare providers in 
           optimizing their revenue collection, minimizing unnecessary expenses, and simplifying business processes through a team of highly skilled billing experts. AllStars Medical Billing Solutions offers comprehensive 
           revenue cycle management solutions tailored to over 50 specialties across the United States.</p>
        </div>
      </div>
    </div>
  </div>

      <div className='mt-5 md:mx-28 mx-8'>
        <h2 className='text-center md:text-4xl text-2xl font-semibold'>Why AllStars Medical Billing?</h2>
        <div className='h-1 md:w-[27rem] w-[19rem] bg-blue mt-2 mx-auto'></div>
        <p className='text-center text-gray-500 mt-5'>At AllStars, we firmly believe that healthcare providers should dedicate their time and energy to patient care and delivering outstanding services, without the burden of claims, payments, and patient statements. Our approach revolves around an intelligent workflow that prioritizes precision from the outset, consistently identifying and eradicating the underlying causes of billing errors and other issues.</p>
      </div>

      <div className='mt-10 mx-10 md:mx-28'>
        <div className=' grid md:grid-cols-2 grid-cols-1 gap-14'>
          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>EXCEPTIONAL EXPERTISE</h2>
            <p className='text-gray-500'>Each member of our team boasts a minimum of 10 years of experience in medical billing and client management, with the majority of that time spent in high-level executive roles. It's a claim that sets us apart, as only
              a select few medical billing companies can match our level of expertise.</p>
          </div>
          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>RAPID REIMBURSEMENTS</h2>
            <p className='text-gray-500'>Thanks to our extensive expertise, we can expedite your reimbursements efficiently. Our team consists solely of seasoned professionals, eliminating the need for on-the-job training at your expense. This results in reduced overhead
              for us and increased reimbursements for you, all at a lower cost.</p>
          </div>

          <div className="flex-1">
            <h2 className='md:text-xl font-bold'>CLAIMS ACCEPTANCE RATIO – 98%</h2>
            <p className='text-gray-500'>Our monthly first-pass claim acceptance rate across all of our customers has consistently averaged 98%, which is 3% higher than the industry average!</p>
          </div>
          <div className="flex-1">
            <h2 className='md:text-xl font-bold'>CONTROLLED MONTHLY DENIALS</h2>
            <p className='text-gray-500'>Our monthly denial rate is less than 8% across all of our customers which is better than the industry average!</p>
          </div>

          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>96% Electronic Claims Submission</h2>
            <p className='text-gray-500'>Sending 95% of claims electronically is an impressive efficiency achievement for AllStars. Electronic claims submission is faster, more accurate, and cost-effective compared to paper-based methods. This high percentage suggests that AllStars prioritizes streamlined processes, reducing paperwork, and expediting claim processing, which benefits both healthcare providers and their clients by
              accelerating reimbursement and reducing administrative burdens.</p>
          </div>
          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>99% Credentialing success on first application</h2>
            <p className='text-gray-500'>AllStars achieved 99% credentialing success rate on the first application which is a significant accomplishment in the healthcare industry. Credentialing is a crucial process where healthcare providers are thoroughly
              reviewed and verified by the insurance companies.</p>
          </div>

          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>95% Electronic Payments</h2>
            <p className='text-gray-500'>Achieving a 95% rate for Electronic Remittance Advice (ERA) and Electronic Funds Transfer (EFT) payments with AllStars demonstrates their commitment to efficient and modern financial transactions in healthcare. Utilizing ERA and EFT significantly streamlines payment processes, reduces paperwork, and enhances accuracy. This high percentage indicates that AllStars excels in facilitating electronic payment methods, providing healthcare providers with
              quicker and more secure access to their payments, thus improving overall financial management.</p>
          </div>
          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>Free Coding audit</h2>
            <p className='text-gray-500'>Offering a free coding audit with AllStars is a valuable service for healthcare providers. A coding audit can help identify errors or inaccuracies in medical coding, which can have a significant impact on reimbursement and compliance. By providing this service for free, AllStars demonstrates a commitment to helping healthcare practices improve their
              coding accuracy and optimize their revenue cycle management without incurring additional costs.</p>
          </div>

          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>10% - 15% Growth in monthly Collections</h2>
            <p className='text-gray-500'>Achieving a proven monthly revenue growth of 15% to 20% with AllStars is a remarkable accomplishment. This substantial increase in revenue demonstrates the effectiveness of AllStars' services and strategies in optimizing revenue cycle management for healthcare providers. Such growth indicates that AllStars not only maintains the
              financial health of their clients but actively contributes to their financial success by enhancing billing, collections, and reimbursement processes.</p>
          </div>
          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>Open Service Agreement/ No limitation</h2>
            <p className='text-gray-500'>An open agreement with AllStars without limitations suggests a flexible and unrestricted partnership. Such an arrangement typically means that there are no predefined constraints, boundaries, or specific terms that restrict the scope of services or engagement. It provides both parties with the freedom to collaborate and adapt the agreement as needed to meet evolving needs
              and objectives. Leave us any time if not happy with our committed services. No hidden charges.</p>
          </div>

          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>3RD PARTY EHR/BILLING PLATFORMS</h2>
            <p className='text-gray-500'>We have hands-on expertise with almost all the industry top medical
              billing software platforms. This means we can get you started without any delay.</p>
          </div>
          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>ALL SPECIALTIES</h2>
            <p className='text-gray-500'>Our team has proven skills in Institutional
              Billing, Professional Billing, DME, Emergency Room, Out-of-Network and Laboratory Billing.</p>
          </div>

          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>HIPAA-compliant</h2>
            <p className='text-gray-500'>As a HIPAA-compliant and ISO-certified organization, we wholeheartedly prioritize the highest standards of compliance in our industry. Our team comprises highly trained experts who meticulously
              adhere to regulations set forth by Medicaid, Medicare, and commercial insurance entities.</p>
          </div>
          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>Data Protection</h2>
            <p className='text-gray-500'>Our commitment to data security is unwavering, with
              stringent protocols in effect to guarantee the privacy and integrity of your data</p>
          </div>

          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>Single Point of contact</h2>
            <p className='text-gray-500'>At Allstars, we pride ourselves on offering a personalized experience to each client. That's why we assign a dedicated project manager to you, ensuring you have a single, reliable point of contact throughout your billing journey. This approach simplifies communication, minimizes any potential confusion, and guarantees transparency when it comes to
              updating you on your claims, settlements, and promptly addressing any questions you may have.</p>
          </div>
          <div className='flex-1'>
            <h2 className='md:text-xl font-bold'>Assurance of Quality</h2>
            <p className='text-gray-500'>With our rigorous audits and steadfast dedication to quality standards, we assure uncompromising
              billing services. We continually improve our systems for service excellence.</p>
          </div>
        </div>
      </div>


<div className='mt-20 text-white pt-10 md:pt-24 pb-[10rem]' style={{ 
  backgroundImage: `url(${serviceAimnImage})`, 
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'right bottom',
  background: 'linear-gradient(180deg, #204066 0%, #008ac6 100%)',
  transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
  '@media (max-width: 768px)': {
    backgroundPosition: 'center',
    paddingTop: '16rem',
    paddingBottom: '8rem',
  }
}}>
  <div>
    <h1 className="text-2xl font-semibold text-center">What We Do</h1>
    <h2 className="md:text-3xl pt-2 text-2xl font-bold mb-2 text-center">Our Services</h2>
    <div className='h-1 md:w-[11rem] w-[8.5rem] bg-white mt-1 mb-1 mx-auto'></div>
    <p className="md:text-lg pt-3 text-center mx-5 md:mx-72">AllStars Medical Billing has a strong grasp of medical billing, credentialing, medical A/R, and practice billing audit services. With extensive experience in the healthcare billing industry, we are confident in our ability to enhance the financial performance of your healthcare practice.</p>
  </div>
</div>

           {/* crash code */}
{/* <div className='relative'>
  <div className='bg-gradient-to-r from-darkblue to-darkblue' style={{ 
    background: 'linear-gradient(180deg, #204066 0%, #008ac6 100%)',
    transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
  }}>
    <img
      src={serviceAimnImage}
      alt='serviceAimnImage'
      className='w-full h-40 md:h-60 lg:h-80'
      style={{ width: '100%', height: 'auto', maxHeight: '40vh',backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom'}}
    />
  <div className='absolute top-0 left-0 right-0 h-full flex flex-col justify-center items-center'>
    <h1 className="text-2xl font-semibold text-center">What We Do</h1>
    <h2 className="text-4xl font-bold mb-2 text-center">Our Services</h2>
    <div className='h-1 w-[12rem] bg-white mt-1 mb-1'></div>
    <p className="text-lg text-center mx-8">
      AllStars Medical Billing has a strong grasp of medical billing, credentialing, medical A/R, and practice billing audit services. With extensive experience in the healthcare billing industry, we are confident in our ability to enhance the financial performance of your healthcare practice.
    </p>
  </div>
  </div>
</div> */}


      <div className='md:mt-[-46px] mt-[-80px] relative mx-5 md:mx-40 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center'>
        {/* Box 1 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Billing
            </h1>
            <div className='h-1 w-[8rem] bg-blue mt-1 mb-1 mx-auto'></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Credentialing specialists assist healthcare providers in enrollment, ensuring insurance reimbursement eligibility. We offer comprehensive credentialing solutions for all practices.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Coding
            </h1>
            <div className='h-1 w-[9rem] bg-blue mt-1 mb-1 mx-auto'></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              With the help of our certified medical coding specialists working on your project, your claim denial rate is significantly reduced. Our coders use the best-in-class coding tools and resources available in the industry
            </p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="mb-2 text-xl font-medium text-center leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Credentialing
            </h1>
            <div className='h-1 w-[12rem] bg-blue mt-1 mb-1 mx-auto'></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              AllStars can handle any specialty including laboratories and DMEs. Our experts send error-free applications to insurances and do proper follow-up till the case is closed.
            </p>
          </div>
        </div>
        {/* Box 1 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Verification of Benefits
            </h1>
            <div className='h-1 w-[12rem] bg-blue mt-1 mb-1 mx-auto'></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our Insurance Benefits Verification Services provide healthcare providers
              with a hassle-free way to confirm patient insurance coverage and eligibility.</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Prior Authorization Services
            </h1>
            <div className='h-1 w-[15rem] bg-blue mt-1 mb-1 mx-auto'></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our Prior Authorization Services take the complexity out oingf obtaining insurance approvals for medical procedures and treatments. We simplify
              the process for healthcare providers, ensuring you get the necessary authorizations efficiently.</p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="flex flex-col rounded-lg h-full bg-white custom-shadow">
          <div className="p-6">
            <h1 className="mb-2 text-xl font-medium text-center leading-tight text-neutral-800 dark:text-neutral-50">
              Patient Billing
            </h1>
            <div className='h-1 w-[7rem] bg-blue mt-1 mb-1 mx-auto'></div>
            <p className="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our Patient Billing Services are designed to make healthcare billing
              transparent, efficient, and stress-free for both patients and healthcare providers</p>
          </div>
        </div>
      </div>

              {/* Medical Specialties */}

      <div className='mt-20 py-10 bg-darkgray'>
        <h2 className='text-blue text-xl font-semibold text-center pt-5'>We Cover</h2>
        <h1 className='md:text-4xl md:font-semibold text-2xl font-semibold text-center'>These Medical Specialties</h1>
        <div className='h-1 md:w-[25rem] w-[17rem] bg-blue mt-1 mb-1 mx-auto'></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-10 mx-5 md:mx-40">
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img className='w-[150px] h-[120px]' src={Gynocologyicon} alt="Gynocology" />
              <h3 className="font-bold text-elementcolor mt-3">Gynocology</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={HormonalExamination} style={{ width: '150px', height: '120px' }} alt="HormonalExamination" />
              <h3 className="font-bold text-elementcolor mt-3">Hormonal Examination</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={InternalMedicine} style={{ width: '150px', height: '120px' }} alt="InternalMedicine" />
              <h3 className="font-bold text-elementcolor mt-3">Internal Medicine</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={Ionm} style={{ width: '150px', height: '120px' }} alt="Ionm" />
              <h3 className="font-bold text-elementcolor mt-3">Ionm</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={Anesthesiology} style={{ width: '150px', height: '120px' }} alt="Anesthesiology" />
              <h3 className="font-bold text-elementcolor mt-3">Anesthesiology</h3>
            </div>
          </div>

          {/* Second Row */}
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={Psychiatry} style={{ width: '150px', height: '120px' }} alt="Psychiatry" />
              <h3 className="font-bold text-elementcolor mt-3">Psychiatry</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={Radiology} style={{ width: '150px', height: '120px' }} alt="Radiology" />
              <h3 className="font-bold text-elementcolor mt-3">Radiology</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={Urology} style={{ width: '150px', height: '120px' }} alt="Urology" />
              <h3 className="font-bold text-elementcolor mt-3">Urology</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={Neurology} style={{ width: '150px', height: '120px' }} alt="Neurology" />
              <h3 className="font-bold text-elementcolor mt-3">Neurology</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1  p-6 text-center bg-white  rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center">
              <img src={Painmanagement} style={{ width: '150px', height: '120px' }} alt="Painmanagement" />
              <h3 className="font-bold text-elementcolor mt-3">Pain Management</h3>
            </div>
          </div>
        </div>

      </div>


      <div className='bg-darkgray'>
        <h2 className='text-blue text-xl font-semibold text-center pt-10'>Our Pride</h2>
        <h1 className='md:text-4xl md:font-bold text-2xl font-semibold text-center'>Proud Partners</h1>
        <div className='h-1 md:w-[16rem] w-[10rem] bg-blue mt-1 mb-1 mx-auto'></div>
        <p className='md:pt-5 text-center md:px-[260px] px-5 pt-5'>
          The innovative approach of AllStars Medical Billing has made it one of the rapidly expanding physician practice communities in the United States. Our commitment to driving transformation within the medical field is
          evident through our cutting-edge solutions, all achieved via our Channel Partnerships.
        </p>
        <div className="grid md:grid-cols-5 grid-rows-2 gap-2 py-10 md:pt-10 px-28 justify-center">
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner1} alt="Partner 1" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner2} alt="Partner 2" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner3} alt="Partner 3" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner4} alt="Partner 4" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner5} alt="Partner 5" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner6} alt="Partner 6" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner7} alt="Partner 7" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner8} alt="Partner 8" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner9} alt="Partner 9" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div className="bg-white rounded-md flex items-center justify-center" style={{ width: '200px' }}>
              <img src={allstarspartner10} alt="Partner 10" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className='text-white py-5 md:py-16' style={{ backgroundImage: `url(${testimonialImage})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <div><h1 className="text-xl font-semibold text-center text-blue">Testimonials</h1>
          <h2 className="md:text-4xl text-2xl md:font-bold font-semibold mb-2 text-center text-black">Our Happy Clients Say!</h2>
          <div className='h-1 md:w-[23rem] w-[15rem] bg-blue mt-1 mb-1 mx-auto'></div></div>
        <div className='md:mt-[-100px] z-[1] pt-8 md:pt-32 relative mx-4 md:mx-20 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center'>
          {/* Box 1 */}
          <div className="flex flex-col rounded-lg h-full bg-white custom-shadow border-b-4 border-blue p-4">
            <div className="p-4">
              <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Allstars Medical Billing has one of the best service if not the best service.  They are prompt in reply , and they are always polite, understanding of provider's
                struggles and find ways to reduce work for providers and optimize the billing.  Imran is one of the  kindest and most sincere person to work with. I strongly recommend their service.
              </p>
              <p className='text-left text-elementcolor font-bold'>Milind Joshi</p>
              <p className='text-left text-blue'>MS-General Surgery</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col rounded-lg h-full bg-white custom-shadow border-b-4 border-blue p-4">
            <div className="p-4">
              <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Imran and his team at AllStars are fast, reliable, and efficient both in their credentialing process and claims/billing submission. They also communicate well. I would highly recommend them to anyone looking for billing solutions and insurance credentialing services!
              </p>
              <p className='text-left text-elementcolor font-bold'>Mindshift Admin</p>
              <p className='text-left text-blue'>Admin Mindshift</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col rounded-lg h-full bg-white custom-shadow border-b-4 border-blue p-4">
            <div className="p-4">
              <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Congratulations team for hitting the highest ever posting for this month. We can see lot of recovery missed by our old company.
              </p>
              <p className='text-left text-elementcolor font-bold'>Chris Adam</p>
              <p className='text-left text-blue'>Physical Therapist</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQS */}


      <div className="md:flex justify-center gap-10 h-full mx-10 mt-20 md:mt-8">
        <div className='md:pt-32 font-semibold'>
          <p className='text-blue'>FAQs</p>
          <h1 className='md:text-[24px]'>
            AllStars Medical Billing stands out as the top choice <br></br>for medical billing services for your healthcare<br></br> practice.
          </h1>
          <div className="md:max-w-screen-xl bg-white">
            <div className="grid divide-y divide-neutral-200 md:max-w-xl mt-8">
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> What does AllStars Medical Billing Do?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    AllStars Medical Billing is a company specializing in medical billing services for healthcare providers.
                    They offer a complete range of solutions to support healthcare providers in managing their billing process. This includes tasks such as verifying insurance, capturing charges, submitting claims, posting payments, managing denials, and handling collections.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> Is my data secure with AllStars Medical Billing?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    AllStars Medical Billing places a strong emphasis on data security. They employ advanced security measures to safeguard your data, which includes secure servers, data encryption, and secure data transfer protocols.
                    The company is fully compliant with HIPAA regulations and adheres to other industry standards for data security.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How long does physician credentialing take?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    The duration of the physician credentialing process may differ based on factors like the healthcare provider, the insurance company, and other variables. Typically, this process can take several months to finalize. AllStars Medical Billing is committed to expediting the credentialing process by proactively managing
                    deadlines and maintaining close communication with insurance providers and relevant organizations.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className='relative md:mt-10'>
        <img src={buisnextImage} className='w-full md:w-auto mx-auto text-white md:bg-right-top mt-4' />
          <img src={Faqf} alt="faq" className='w-full md:w-auto absolute top-[-20px]'/>
        </div>
      </div>

      {/* Request call section */}
      <div className='bg-darkgray'>
        <div className='lg:py-16 lg:px-32 md:px-0 md:flex'>
          {/* Right section */}
          <div className='bg-darkblue flex-1 md:w-full'>
            <div className="px-5 md:px-8 lg:px-12 pt-10 md:items-center py-8 flex flex-col gap-4">
              <h1 className='text-white font-bold text-2xl pb-3'>Request For A Call Back</h1>
              <div className="flex gap-4 flex-col lg:w-full md:w-0 sm:flex sm:flex-row w-full">
                <input type="text" className=" flex-1 border p-4 md:p-2 md:rounded border-none focus:outline-none" placeholder="Name" />
                <input type="email" className=" flex-1 border p-4 md:p-2 md:rounded  focus:outline-none" placeholder="Email" />
              </div>
              <div className="flex flex-col gap-4 lg:w-full md:w-0 sm:flex sm:flex-row w-full">
                <input type="text" className="border p-4 md:p-2 md:rounded focus:outline-none flex-1" placeholder="Phone" />
                <select className="border p-4 md:p-2 md:rounded focus:outline-none flex-1">
                  <option value="" disabled selected>-Service-</option>
                  <option value="category1">Medical Billing</option>
                  <option value="category2">Medical Coding</option>
                  <option value="category3">Credentialing</option>
                  <option value="category3">Other </option>
                </select>
              </div>

              <div className="flex flex-col gap-4 lg:w-full md:w-0 sm:flex sm:flex-row w-full">
                <select className="border p-4 md:p-2 md:rounded focus:outline-none flex-1">
                  <option value="" disabled selected>-State-</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </select>
                <input type="date" className="border p-4 md:p-2 md:rounded focus:outline-none flex-1" placeholder="Pick a Date" />
              </div>

              {/* Textarea */}
              <div className="flex flex-col w-full">
                <textarea
                  className="border p-4 md:p-2 md:rounded focus:outline-none h-32"
                  placeholder="Comments"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white border border-white mt-4 px-4 py-2 rounded transition hover:bg-white hover:text-black mr-auto"
              >
                Submit Now
              </button>
            </div>

          </div>

          <div className='border flex-1 p-4 border-blue'>
            {/*Left section */}
            <div className='lg:py-[165px]'>
              <h1 className='text-2xl font-bold'>Reach Us</h1>
              <div className='h-1 w-[6rem] bg-blue mt-1 mb-1'></div>
              <div className='pt-4' style={{ display: 'flex', flexDirection: 'column' }}>
                <p className='text-xl' style={{ display: 'flex', alignItems: 'center' }}>
                  <IoCallOutline style={{marginRight: '8px', fontSize: '30px' }} /> (501)-424-0123
                </p>
                <p className='text-xl pt-2' style={{ display: 'flex', alignItems: 'center' }}>
                  <IoMailOutline className='my-2' style={{marginRight: '7px', fontSize: '25px' }} /> info@allstarsmb.com
                </p>
                <p className='text-xl pt-2' style={{ display: 'flex', alignItems: 'center' }}>
                  <IoLocationOutline style={{marginRight: '8px', fontSize: '35px' }} /> 2121 N California Blvd Suite 243, Walnut Creek, CA 94596, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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


      {/* <div className='border border-gray-300 w-2/3 mx-auto mt-20'>
        <div className='mx-10 mt-5'>
          <h1 className='font-bold text-2xl text-gray-700'>Our Services</h1>
          <hr className='my-4'></hr>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        Box 1
          <a href='#'>
            <h1 className="text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Billing
            </h1>
            <div className='h-1 w-[8rem] bg-blue mt-1 mb-1'></div>
            <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
            We provide a full suite of revenue-related services to support the seamless operation of
             medical practices. Your dedication to patient care is our primary focus
            </p></a>
            Box 2
            <a href='#'>
            <h1 className="text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Coding
            </h1>
            <div className='h-1 w-[8.5rem] bg-blue mt-1 mb-1'></div>
            <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Our certified medical coding specialists are your key to minimizing claim denials. Equipped
             with industry-leading coding tools, we optimize your success
            </p></a>
            Box 3
            <a href='#'>
            <h1 className="text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Medical Credentialing
            </h1>
            <div className='h-1 w-[12rem] bg-blue mt-1 mb-1'></div>
            <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
            We handle all specialties, guaranteeing error-free insurance applications and persistent
             follow-up until closure
            </p></a>
        </div>
        </div>
      </div> */}
    </div>
  );
}
export default Home;

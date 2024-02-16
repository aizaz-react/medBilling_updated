import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import Anesthesiology from "../icons/anesthesiology.png";
import Cardiology from "../icons/cardiology.png";
import Chiropractor from "../icons/chiropractor.png";
import Dental from "../icons/dental.png";
import Diabetes from "../icons/diabetes.png";
import GeneralSurgery from "../icons/general-surgery.png";
import Gestroenterology from "../icons/gestroenterology.png";
import Ionm from "../icons/ionm.png";
import Neurosurgery from "../icons/neurosurgery.png";
import Orthopedics from "../icons/orthopedics.png";
import Pathology from "../icons/pathology.png";
import Pediatrics from "../icons/pediatrics.png";
import Psychiatry from "../icons/psychiatry.png";
import Pulmonology from "../icons/pulmonology.png";
import Radiology from "../icons/radiology.png";
import Urology from "../icons/urology.png";
import FamilyMedicine from "../icons/family-medicine.png";
import InternalMedicine from "../icons/Internal-medicine.png";
import HormonalExamination from "../icons/hormonal-examination.png";
import PainManagement from "../icons/pain-management.png";
import PhysicalTherapy from "../icons/physical-therapy.png";
import PlasticSurgery from "../icons/plastic-surgery.png";
import EmergencyMedicine from "../icons/emergency-medicine.png";
import Padiatry from "../icons/Podiatry.png";
import Deramatology from "../icons/neurology.png";
import Neurology from "../icons/neurology.png";
import Ophthalmology from "../icons/ophthalmology.png";

export const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Plans & Pricing",
    link: "/price-plan",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

export const services = [
  {
    title: "Medical Billing",
    link: "/medical-billing",
    description:
      "We offer comprehensive revenue-related services to support medical practices, focusing on your dedication to patient care.",
  },
  {
    title: "Medical Coding",
    link: "/medical-coding",
    description:
      "Our certified coding specialists minimize claim denials and optimize your success with leading coding tools.",
  },
  {
    title: "Medical Credentialing",
    link: "/medical-credentialing",
    description:
      "We manage all specialties, ensuring error-free insurance applications and thorough follow-up until closure.",
  },
];

export const infoNavItems = {
  leftSide: [
    {
      text: "Skrisentech Inc.com",
      icon: <MdEmail size={18} />,
      link: "Skrisentech Inc.com",
    },
    {
      text: "(501)-424-0123",
      icon: <BsFillTelephoneFill size={18} />,
      link: "tel:+15014240123",
    },
    {
      text: "(844) 726-9464",
      icon: <BiSolidBuildingHouse size={20} />,
      link: "tel:(844) 726-9464",
    },
  ],
  rightSide: [
    { icon: <FaFacebookF />, link: "https://www.facebook.com" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com" },
    { icon: <FaYoutube />, link: "https://www.youtube.com" },
  ],
};

export const cardList = [
  {
    title: "Medical Credentialing",
    description:
      "Our credentialing specialists assist healthcare providers with enrollment, ensuring eligibility for insurance reimbursement. We offer comprehensive credentialing solutions for all practices.",
  },
  {
    title: "Medical Coding",
    description:
      "Specializing in precise medical coding, we ensure compliance with regulations. Skrisentech Inc enables healthcare providers to concentrate on delivering exceptional patient care by managing proper documentation and billing.",
  },
  {
    title: "Medical Billing",
    description:
      "Our efficient management of medical billing significantly enhances your practice’s revenue, allowing you more freedom to concentrate on providing exceptional patient care.",
  },
  {
    title: "Practice Management",
    description:
      "With our 'Practice Management' service, we provide comprehensive support across all stages of the revenue cycle, ensuring seamless efficiency.",
  },
];

export const serviceCardList = [
  {
    title: "Medical Coding",
    description:
      "We specialize in accurate medical coding, ensuring compliance with regulations. Skrisentech Inc enables healthcare providers to focus on delivering exceptional patient care by handling proper documentation and billing.",
  },
  {
    title: "Medical Billing",
    description:
      "Our efficient management of medical billing significantly boosts your practice’s revenue, providing you with more freedom to focus on providing exceptional patient care.",
  },
  {
    title: "Medical Credentialing",
    description:
      "Skrisentech Inc can handle any specialty, including laboratories and DMEs. Our experts submit error-free applications to insurance companies and diligently follow up until the case is closed.",
  },
  {
    title: "Verification of Benefits",
    description:
      "Our Insurance Benefits Verification Services provide healthcare providers with a hassle-free way to confirm patient insurance coverage and eligibility.",
  },
  {
    title: "Prior Authorization Services",
    description:
      "Our Prior Authorization Services simplify the process of obtaining insurance approvals for medical procedures and treatments. We ensure healthcare providers get the necessary authorizations efficiently, taking the complexity out of the process.",
  },
  {
    title: "Patient Billiing",
    description:
      "Our Patient Billing Services are designed to make healthcare billing transparent, efficient, and stress-free for both patients and healthcare providers.",
  },
];

export const specialitescard = [
  { image: Anesthesiology, title: "Anesthesiology" },
  { image: Cardiology, title: "Gynocologyicon" },
  { image: Chiropractor, title: "Chiropractor" },
  { image: Dental, title: "Dental" },
  { image: Diabetes, title: "Diabetes" },
  { image: GeneralSurgery, title: "GeneralSurgery" },
  { image: Gestroenterology, title: "Gestroenterology" },
  { image: Ionm, title: "Ionm" },
  { image: Neurosurgery, title: "Neurosurgery" },
  { image: Anesthesiology, title: "Anesthesiology" },
  { image: Orthopedics, title: "Orthopedics" },
  { image: Pathology, title: "Pathology" },
  { image: Pediatrics, title: "Pediatrics" },
  { image: Psychiatry, title: "Psychiatry" },
  { image: Pulmonology, title: "Pulmonology" },
  { image: Radiology, title: "Radiology" },
  { image: Urology, title: "Urology" },
  { image: FamilyMedicine, title: "FamilyMedicine" },
  { image: HormonalExamination, title: "HormonalExamination" },
  { image: InternalMedicine, title: "InternalMedicine" },
  { image: PainManagement, title: "PainManagement" },
  { image: PhysicalTherapy, title: "PhysicalTherapy" },
  { image: PlasticSurgery, title: "PlasticSurgery" },
  { image: EmergencyMedicine, title: "EmergencyMedicine" },
  { image: Deramatology, title: "Deramatology" },
  { image: Padiatry, title: "Padiatry" },
  { image: Neurology, title: "Neurology" },
  { image: Ophthalmology, title: "Ophthalmology" },
];

export const pricingData = [
  {
    title: "Avg. Monthly Collection",
    subtitle: "Collection",
    items: ["Less Than 200K", "Less Than 400K", "More Than 400k*"],
  },
  {
    title: "Referral Pro",
    subtitle: "Referral Ultimate",
    items: [
      "Get 6% of Monthly Invoice",
      "Get 7% of Monthly Invoice",
      "Get 8% of Monthly Invoice",
    ],
  },
  {
    title: "Referral Ultimate",
    subtitle: "Monthly Bonus Forever",
    items: [
      "Get 4% of Monthly Invoice",
      "Get 5% of Monthly Invoice",
      "Get 6% of Monthly Invoice",
    ],
  },
];

export const servicesData = [
  {
    image: "",
    title: "EXCEPTIONAL EXPERTISE",
    description:
      "Each member of our team boasts a minimum of 10 years of experience in medical billing and client management, with the majority of that time spent in high-level executive roles. It's a claim that sets us apart, as only a select few medical billing companies can match our level of expertise.",
  },
  {
    image: "",
    title: "RAPID REIMBURSEMENTS",
    description:
      "With our extensive expertise, we can efficiently expedite your reimbursements. Our team consists solely of seasoned professionals, eliminating the need for on-the-job training at your expense. This results in reduced overhead for us and increased reimbursements for you, all at a lower cost.",
  },
  {
    image: "",
    title: "CLAIMS ACCEPTANCE RATIO – 98%",
    description:
      "Our monthly first-pass claim acceptance rate across all customers has consistently averaged 98%, surpassing the industry average by 3%!",
  },
  {
    image: "",
    title: "CONTROLLED MONTHLY DENIALS",
    description:
      "Our monthly denial rate is less than 8% across all customers, surpassing the industry average!",
  },
  {
    image: "",
    title: "96% Electronic Claims Submission",
    description:
      "Achieving a 96% electronic claims submission rate is a remarkable efficiency milestone for Skrisentech Inc Electronic submission is faster, more accurate, and cost-effective compared to paper-based methods. This high percentage suggests that Skrisentech Inc prioritizes streamlined processes, reducing paperwork, and expediting claim processing, which benefits both healthcare providers and their clients by accelerating reimbursement and reducing administrative burdens.",
  },
  {
    image: "",
    title: "99% Credentialing success on first application",
    description:
      "Skrisentech Inc achieved a 99% credentialing success rate on the first application, a significant accomplishment in the healthcare industry. Credentialing is a crucial process where healthcare providers are thoroughly reviewed and verified by insurance companies.",
  },
  {
    image: "",
    title: "95% Electronic Payments",
    description:
      "Achieving a 95% rate for Electronic Remittance Advice (ERA) and Electronic Funds Transfer (EFT) payments with Skrisentech Inc demonstrates their commitment to efficient and modern financial transactions in healthcare. Utilizing ERA and EFT significantly streamlines payment processes, reduces paperwork, and enhances accuracy. This high percentage indicates that Skrisentech Inc excels in facilitating electronic payment methods, providing healthcare providers with quicker and more secure access to their payments, thus improving overall financial management.",
  },
  {
    image: "",
    title: "Free Coding Audit",
    description:
      "Offering a complimentary coding audit with Skrisentech Inc. is a valuable service for healthcare providers. A coding audit can help identify errors or inaccuracies in medical coding, which can have a significant impact on reimbursement and compliance. By providing this service at no cost, Skrisentech Inc demonstrates a commitment to helping healthcare practices improve their coding accuracy and optimize their revenue cycle management without incurring additional costs.",
  },
  {
    image: "",
    title: "10% - 15% Growth in monthly Collections",
    description:
      "Achieving a proven monthly revenue growth of 10% to 15% with Skrisentech Inc is a remarkable accomplishment. This substantial increase in revenue demonstrates the effectiveness of Skrisentech Inc.'s services and strategies in optimizing revenue cycle management for healthcare providers. Such growth indicates that Skrisentech Inc not only maintains the financial health of their clients but actively contributes to their financial success by enhancing billing, collections, and reimbursement processes.",
  },
  {
    image: "",
    title: "Open Service Agreement/ No limitation",
    description:
      "Thanks to our extensive expertise, we can expedite your reimbursements efficiently. Our team consists solely of seasoned professionals, eliminating the need for on-the-job training at your expense. This results in reduced overhead for us and increased reimbursements for you, all at a lower cost.",
  },
  {
    image: "",
    title: "Open Service Agreement/ No limitation",
    description:
      "An open agreement with Skrisentech Inc without limitations suggests a flexible and unrestricted partnership. Such an arrangement typically means that there are no predefined constraints, boundaries, or specific terms that restrict the scope of services or engagement. It provides both parties with the freedom to collaborate and adapt the agreement as needed to meet evolving needs and objectives. You are free to leave us at any time if you are not satisfied with our committed services. There are no hidden charges.",
  },
  {
    image: "",
    title: "3RD PARTY EHR/BILLING PLATFORMS",
    description:
      "Skrisentech Inc has hands-on expertise with almost all the industry's top medical billing software platforms. This means we can get you started without any delay.",
  },
  {
    image: "",
    title: "ALL SPECIALTIES",
    description:
      "Our team has proven skills in Institutional Billing, Professional Billing, Durable Medical Equipment (DME), Emergency Room Billing, Out-of-Network Billing, and Laboratory Billing.",
  },
  {
    image: "",
    title: "HIPAA-compliant",
    description:
      "As a HIPAA-compliant and ISO-certified organization, Skrisentech Inc wholeheartedly prioritizes the highest standards of compliance in our industry. Our team comprises highly trained experts who meticulously adhere to regulations set forth by Medicaid, Medicare, and commercial insurance entities.",
  },
  {
    image: "",
    title: "Data Protection",
    description:
      "Skrisentech Inc.'s commitment to data security is unwavering, with stringent protocols in effect to guarantee the privacy and integrity of your data",
  },
  {
    image: "",
    title: "Assurance of Quality",
    description:
      "With our rigorous audits and steadfast dedication to quality standards, Skrisentech Inc. assures uncompromising billing services. We continually improve our systems for service excellence.",
  },
];

export const aboutCardData = [
  { percentage: "98%", title: "Clean Claims Acceptance" },
  { percentage: "08%", title: "Monthly Denials" },
  { percentage: "96%", title: "Electronic Claims Submission" },
  { percentage: "99%", title: "Credentialing Success" },
  { percentage: "96%", title: "Bank Direct Deposit" },
  { percentage: "10% - 15%", title: "Practise Growth" },
  { percentage: "10Y", title: "Team Avg. Expertise" },
  { percentage: "95%", title: "Electronic Payments" },
];

export const billingCard = [
  {
    title: "98% Clean Claim acceptance",
    description:
      "Welcome to Skrisentech Inc, where excellence meets efficiency in healthcare claims processing. We take immense pride in our remarkable 98% clean claim acceptance rate, setting new standards in the industry. Choose Skrisentech Inc for a smoother, more efficient claims experience. Your success is our priority, and our 98% clean claim acceptance rate reflects our unwavering commitment to your satisfaction.",
  },
  {
    title: "08% Monthly Denials",
    description:
      "Enhancing Your Healthcare Revenue Cycle with Skrisentech Inc - Only 8% Monthly DenialsAllStars - Your trusted partner for efficient revenue cycle management and a remarkably low 8% monthly denials rate. Let us help you unlock your practice's full financial potential.",
  },
  {
    title: "96% electronic claim submission",
    description:
      "Skrisentech Inc - Your 96% Electronic Claim Submission SolutionChoose Skrisentech Inc for a hassle-free, efficient electronic claim submission experience. Your success is our priority, and our 96% electronic claim submission rate reflects our unwavering commitment to providing you with the best possible service.",
  },
  {
    title: "99% Credentialing Success",
    description:
      "Skrisentech Inc Unlocking Success with a 99% Credentialing Achievement With Skrisentech Inc as your credentialing partner, you gain access to a team of experts who meticulously navigate the complex world of credentialing. We work diligently to ensure your applications are processed without errors and that your providers can seamlessly participate in insurance networks, allowing you to focus on providing exceptional patient care.",
  },
  {
    title: "96% Bank Direct Deposit",
    description:
      "Skrisentech Inc Your 96% Success Rate in Bank Direct Deposits Select Skrisentech Inc for a dependable, efficient bank direct deposit experience. Your financial well-being is our priority, and our 96% success rate underscores our dedication to providing you with the best possible service. With Skrisentech Inc, you can trust that your bank direct deposits will be processed smoothly and securely, allowing you to maintain your focus on your business.",
  },
  {
    title: "10% - 15% Practice Growth",
    description:
      "Skrisentech Inc Fueling Your Practice Growth Experience significant practice growth with Skrisentech Inc. Our proven strategies have consistently delivered impressive results, ranging from 10% to 15%. Partner with us to unlock your practice's full potential and embark on a journey to lasting success.",
  },
  {
    title: "10Y Avg. Team Expertise",
    description:
      "Skrisentech Inc 10-Year Average Team Experience At Skrisentech Inc, our team boasts an impressive 10-year average experience. With a decade of expertise, we provide you with seasoned professionals who understand the industry inside out. Trust us to bring unparalleled knowledge and skill to your healthcare needs.",
  },
  {
    title: "95% Electronic Payments",
    description:
      "Skrisentech Inc Your 95% Electronic Payments Partner Experience the efficiency and reliability of Skrisentech Inc with our outstanding 95% electronic payments success rate. We ensure your financial transactions are processed seamlessly and securely, helping you streamline your operations and stay on top of your finances.",
  },
];

export const credentialingCard = [
  {
    title: "Primary Source Verification",
    description:
      "We conduct thorough Primary Source Verification for credentialing, which includes checks for board certification, licenses, and hospital privileges. This process ensures accuracy and reliability by verifying information directly from the source.",
  },
  {
    title: "Management of Documents",
    description:
      "Manage and securely store healthcare provider documents, including certifications and licenses, with efficiency and regulatory compliance using Skrisentech Inc.'s secure credentialing management system.",
  },
  {
    title: "NPI Registration",
    description:
      "Skrisentech Inc simplifies NPI Registration for both Type 1 (individuals) and Type 2 (organizations), ensuring efficient and accurate identification in healthcare billing..",
  },
  {
    title: "CAQH Profile Management/Reattestation",
    description:
      "Skrisentech Inc excels in CAQH Profile Management and Reattestation, ensuring hassle-free maintenance of accurate healthcare provider information.",
  },
  {
    title: "Credentialing & Network Enrollment Analysis",
    description:
      "Skrisentech Inc offers expert Credentialing and Network Enrollment Analysis, ensuring accuracy and compliance for streamlined provider enrollment.",
  },
  {
    title: "Revalidation and Re-credentialing",
    description:
      "Skrisentech Inc manages the crucial processes of Revalidation and Re-credentialing, ensuring that healthcare providers maintain current and compliant credentials for continued participation in healthcare networks.",
  },
  {
    title: "Weekly Follow Up",
    description:
      "Skrisentech Inc specializes in CAQH Profile Management and Reattestation, ensuring effortless maintenance of accurate healthcare provider information.",
  },
  {
    title: "Credentialing Audit",
    description:
      "Skrisentech Inc provides on-demand Credentialing Audits, ensuring a comprehensive and timely examination of credentials to maintain compliance and accuracy for healthcare providers.",
  },
  {
    title: "IPA Enrollment",
    description:
      "Skrisentech Inc streamlines IPA (Independent Practice Association) Enrollment, offering efficient and effective services for healthcare providers to join and participate in independent practice associations.",
  },
  {
    title: "Telehealth Credentialing",
    description:
      "Skrisentech Inc specializes in Telehealth Medicine Credentialing, ensuring healthcare providers are credentialed and compliant for telehealth services, facilitating seamless and secure virtual healthcare delivery.",
  },
  {
    title: "EDI Setups",
    description:
      "Skrisentech Inc specializes in EDI (Electronic Data Interchange) Setups, ensuring efficient and accurate electronic communication for seamless data exchange between healthcare entities.",
  },
  {
    title: "ERA Setup",
    description:
      "Skrisentech Inc stands out in ERA (Electronic Remittance Advice) Setup, offering streamlined solutions for healthcare entities to enhance and optimize the electronic processing of payment information.",
  },
  {
    title: "EFT Enrollment",
    description:
      "Skrisentech Inc specializes in EFT (Electronic Funds Transfer) Enrollment, simplifying the process for healthcare providers to efficiently receive electronic payments, improving financial transactions in the healthcare industry.",
  },
];

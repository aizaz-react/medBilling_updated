import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";

export const navLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About Us",
    link: "#",
  },
  {
    title: "Services",
    link: "#",
  },
  {
    title: "Plans & Pricing",
    link: "#",
  },
  {
    title: "Contact Us",
    link: "#",
  },
];

export const services = [
  {
    title: "Medical Billing",
    link: "#",
    description:
      "We provide a full suite of revenue-related services to support the seamless operation of medical practices. Your dedication to patient care is our primary focus",
  },
  {
    title: "Medical Coding",
    link: "#",
    description:
      "Our certified medical coding specialists are your key to minimizing claim denials. Equipped with industry-leading coding tools, we optimize your success",
  },
  {
    title: "Medical Credentialing",
    link: "#",
    description:
      "We handle all specialties, guaranteeing error-free insurance applications and persistent follow-up until closure",
  },
];

export const infoNavItems = {
  leftSide: [
    { text: "info@allstarsmb.com", icon: <MdEmail size={18} /> },
    { text: "(501)-424-0123", icon: <BsFillTelephoneFill size={18} /> },
    { text: "(844) 726-9464", icon: <BiSolidBuildingHouse size={20} /> },
  ],
  rightSide: [
    { icon: <FaFacebookF /> },
    { icon: <FaLinkedinIn /> },
    { icon: <FaYoutube /> },
  ],
};

export const cardList = [
  {
    title: "Medical Credentialing",
    description:
      "Credentialing specialists assist healthcare providers in enrollment, ensuring insurance reimbursement eligibility. We offer comprehensive credentialing solutions for all practices.",
  },
  {
    title: "Medical Coding",
    description:
      "We specialize in accurate medical coding, ensuring compliance with regulations. AllStars enables healthcare providers to focus on delivering exceptional patient care by handling proper documentation and billing.",
  },
  {
    title: "Medical Billing",
    description:
      "Our efficient management of medical billing significantly boosts your practice’s revenue, giving you more freedom to focus on providing exceptional patient care.",
  },
  {
    title: "Practice Management",
    description:
      "With our service, ‘Practice Management,’ we deliver comprehensive support across all stages of the revenue cycle, ensuring seamless efficiency.",
  },
];

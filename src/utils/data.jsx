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
      "We provide a full suite of revenue-related services to support the seamless operation of medical practices. Your dedication to patient care is our primary focus",
  },
  {
    title: "Medical Coding",
    link: "/medical-coding",
    description:
      "Our certified medical coding specialists are your key to minimizing claim denials. Equipped with industry-leading coding tools, we optimize your success",
  },
  {
    title: "Medical Credentialing",
    link: "/medical-credentialing",
    description:
      "We handle all specialties, guaranteeing error-free insurance applications and persistent follow-up until closure",
  },
];

export const infoNavItems = {
  leftSide: [
    {
      text: "info@allstarsmb.com",
      icon: <MdEmail size={18} />,
      link: "mailto:info@allstarsmb.com",
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

export const serviceCardList = [
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
  {
    title: "Verification of Benefits",
    description:
      "Our Insurance Benefits Verification Services provide healthcare providers with a hassle-free way to confirm patient insurance coverage and eligibility.",
  },
  {
    title: "Prior Authorization Services",
    description:
      "Our Prior Authorization Services take the complexity out oingf obtaining insurance approvals for medical procedures and treatments. We simplify the process for healthcare providers, ensuring you get the necessary authorizations efficiently.",
  },
  {
    title: "Patient Billiing",
    description:
      "Our Patient Billing Services are designed to make healthcare billing transparent, efficient, and stress-free for both patients and healthcare providers",
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

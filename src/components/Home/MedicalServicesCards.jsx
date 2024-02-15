import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Gynocologyicon from "../../icons/gynecology.png";
import HormonalExamination from "../../icons/hormonal-examination.png";
import InternalMedicine from "../../icons/Internal-medicine.png";
import Ionm from "../../icons/ionm.png";
import Anesthesiology from "../../icons/anesthesiology.png";
import FamilyMedicine from "../../icons/family-medicine.png";
import PainManagement from "../../icons/pain-management.png";
import PhysicalTherapy from "../../icons/physical-therapy.png";
import PlasticSurgery from "../../icons/plastic-surgery.png";
import EmergencyMedicine from "../../icons/emergency-medicine.png";
import Padiatry from "../../icons/Podiatry.png";
import Deramatology from "../../icons/neurology.png";
import Ophthalmology from "../../icons/ophthalmology.png";
import Neurosurgery from "../../icons/neurosurgery.png";
import Orthopedics from "../../icons/orthopedics.png";
import Pathology from "../../icons/pathology.png";
import Pediatrics from "../../icons/pediatrics.png";

const serviceSpecialties = [
  {
    title: "Gynocology",
    image: Gynocologyicon,
  },
  {
    title: "Hormonal Examination",
    image: HormonalExamination,
  },
  {
    title: "Internal Medicine",
    image: InternalMedicine,
  },
  {
    title: "Ionm",
    image: Ionm,
  },
  {
    title: "Anesthesiology",
    image: Anesthesiology,
  },
  {
    title: "Family Medicine",
    image: FamilyMedicine,
  },
  {
    title: "Pain Management",
    image: PainManagement,
  },
  {
    title: "Physical Therapy",
    image: PhysicalTherapy,
  },
  {
    title: "Plastic Surgery",
    image: PlasticSurgery,
  },
  {
    title: "Emergency Medicine",
    image: EmergencyMedicine,
  },
  {
    title: "Padiatry",
    image: Padiatry,
  },
  {
    title: "Deramatology",
    image: Deramatology,
  },
  {
    title: "Ophthalmology",
    image: Ophthalmology,
  },
  {
    title: "Neurosurgery",
    image: Neurosurgery,
  },
  {
    title: "Orthopedics",
    image: Orthopedics,
  },
  {
    title: "Pathology",
    image: Pathology,
  },
  {
    title: "Pediatrics",
    image: Pediatrics,
  },
];

const MedicalServicesCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 mx-5 md:mx-40">
    {serviceSpecialties.map((specialty, index) => (
      <div
        key={index}
        className="col-span-1 md:col-span-1 p-6 text-center bg-white  rounded-lg shadow-md"
      >
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-[150px] h-[120px]"
            src={specialty.image}
            alt={specialty.title}
          />
          <h3 className="font-bold text-elementcolor mt-3">
            {specialty.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
);
// const MedicalServicesCards = () => (
//   <div className="mt-10 mx-10 md:mx-40">
//     <Carousel
//       showThumbs={false}
//       dynamicHeight={false}
//       autoPlay={true} // Set autoPlay to true for automatic slideshow
//       interval={2000} // Specify the interval between slides (in milliseconds)
//       showStatus={false} // Hide the status indicators (dots)
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
//     >
//       {serviceSpecialties.map((specialty, index) => (
//         <div
//           key={index}
//           className="col-span-1 p-6 text-center bg-white rounded-lg shadow-md"
//         >
//           <div className="flex flex-col items-center justify-center">
//             <img
//               className="w-[150px] h-[120px]"
//               src={specialty.image}
//               alt={specialty.title}
//             />
//             <h3 className="font-bold text-elementcolor mt-3">
//               {specialty.title}
//             </h3>
//           </div>
//         </div>
//       ))}
//     </Carousel>
//   </div>
// );

export default MedicalServicesCards;

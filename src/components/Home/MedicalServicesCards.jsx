import React from "react";
import Gynocologyicon from "../../icons/gynecology.png";
import HormonalExamination from "../../icons/hormonal-examination.png";
import InternalMedicine from "../../icons/Internal-medicine.png";
import Ionm from "../../icons/ionm.png";
import Anesthesiology from "../../icons/anesthesiology.png";
import Psychiatry from "../../icons/psychiatry.png";
import Radiology from "../../icons/radiology.png";
import Urology from "../../icons/urology.png";
import Neurology from "../../icons/neurology.png";
import Painmanagement from "../../icons/pain-management.png";

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
  // {
  //   title: "Psychiatry",
  //   image: Psychiatry,
  // },
  // {
  //   title: "Radiology",
  //   image: Radiology,
  // },
  // {
  //   title: "Urology",
  //   image: Urology,
  // },
  // {
  //   title: "Neurology",
  //   image: Neurology,
  // },
  // {
  //   title: "Pain Management",
  //   image: Painmanagement,
  // },
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

export default MedicalServicesCards;

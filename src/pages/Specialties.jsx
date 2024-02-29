import "../App.css";
import "../Header.css";
import PrimaryImage from "../images/primary-bg.jpg";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";
import SpecialtiesCard from "../components/Specialties/SpecialtiesCard";

function Contact() {
  return (
    <div>
      <InfoNav />
      <Nav />

      <div className="relative">
        <img src={PrimaryImage} alt="PrimaryImage" className="w-full h-44" />
        <h1 className="font-Oswald text-white text-4xl font-bold absolute top-16 md:left-16 left-20 hover:bg-sky-700">
          Our Specialties
        </h1>
      </div>
      <div className="my-16">
        <h2 className="font-Oswald text-blue text-xl font-semibold text-center pt-5">
          We Include
        </h2>
        <h1 className="font-Oswald flex flex-col gap-2 md:text-3xl md:font-semibold text-2xl font-semibold text-center mx-auto w-max">
          Our Expertise
          <span className="w-full h-1 bg-divideroclor" />
        </h1>
        <SpecialtiesCard />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

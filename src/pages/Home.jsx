import "../App.css";
import Footer from "../components/Footer";
import "../Header.css";
import aboutimage from "../images/ABout.png";
import serviceAimnImage from "../images/amin3.png";
import buisnextImage from "../images/businext-img33.png";
import Faqf from "../images/faqs-f.png";
import allstarspartner1 from "../images/allstarmbpartners-1.webp";
import allstarspartner2 from "../images/allstarmbpartners-2.webp";
import allstarspartner3 from "../images/allstarmbpartners-3.webp";
import allstarspartner4 from "../images/allstarmbpartners-4.webp";
import allstarspartner5 from "../images/allstarmbpartners-5.webp";
import allstarspartner6 from "../images/allstarmbpartners-6.webp";
import allstarspartner7 from "../images/allstarmbpartners-7.webp";
import allstarspartner8 from "../images/allstarmbpartners-8.webp";
import allstarspartner9 from "../images/allstarmbpartners-9.webp";
import allstarspartner10 from "../images/allstarmbpartners-10.webp";
import Nav from "../components/Nav";
import InfoNav from "../components/InfoNav";
import CardSection from "../components/Home/CardSection";
import ServiceCardSection from "../components/Home/ServiceCardSection";
import ServiceFeatures from "../components/Home/ServiceFeatures";
import MedicalServicesCards from "../components/Home/MedicalServicesCards";
import ImageSlider from "../components/ImageSlider";
import { slider } from "../utils/data";

function Home() {
  return (
    <div>
      <InfoNav />
      <Nav />
      <ImageSlider slides={slider} className="relative" />;
      <div className="absolute text-left md:ml-24 top-[12rem] md:top-10 mx-7 md:my-72 left-0">
        <h1 className="font-Oswald md:text-4xl font-bold text-white md:my-6">
          Skrisentech Inc Medical Billing
        </h1>
        <p className="font-Lato md:text-lg mb-4 mt-2 text-white">
          We specialize in medical billing and coding, with expertise in
          Professional
          <br /> Institutional, Emergency Room, and Out-of-Network coding
          services.
        </p>
        <button className="font-Oswald bg-blue mt-4 md:mt-8 text-white px-4 py-2 rounded-md font-bold hover:bg-sky-700">
          Read More
        </button>
      </div>
      <CardSection />
      {/* About Section */}
      <div className="bg-darkgray">
        <div className="py-10 md:pb-[5rem] flex md:mx-20 mx-5 md:flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-2/5 w-full">
            {/* About Image */}
            <img
              className="rounded-md"
              src={aboutimage}
              alt="Aboutimage"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="mx-5 md:mx-0 pt-10 md:w-2/3 md:pt-10 ">
            {/* About Content */}
            <h1 className="font-Oswald font-bold md:text-3xl text-[28px] flex flex-col md:flex-row gap-2">
              Welcome To Skrisentech
              <span className="text-blue font-Oswald">Inc Medical Billing</span>
            </h1>
            <p className="font-Lato mt-4 md:mt-6 line-clamp-7">
              Billing is a critical aspect of every medical practice's
              operations. When managed effectively, it enables your staff and
              medical professionals to focus on their primary goal of delivering
              exceptional patient care. Skrisentech Inc has a demonstrated
              history of helping healthcare providers enhance revenue
              collection, reduce unnecessary costs, and streamline business
              operations through a team of experienced billing specialists.
              Skrisentech Inc provides tailored revenue cycle management
              solutions for over 50 specialties nationwide, ensuring
              comprehensive support for your practice's financial health and
              success. Our commitment to excellence and industry expertise sets
              us apart as a trusted partner in your practice's success. Our
              commitment to excellence and industry expertise sets us apart as a
              trusted partner in your practice's success.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mx-28 mx-8">
        <h2 className="font-Oswald flex flex-col w-max mx-auto gap-2 text-center md:text-3xl text-lg font-semibold">
          Why Skrisentech Inc for Medical Billing?
          <span className="h-1 bg-blue"></span>
        </h2>
        <p className="font-Lato text-gray-500 mt-5 text-center">
          At Skrisentech Inc, we are dedicated to ensuring that healthcare
          providers can focus on patient care and delivering outstanding
          services, without the burden of claims, payments, and patient
          statements. Our approach prioritizes precision from the outset,
          consistently identifying and eradicating the underlying causes of
          billing errors and other issues.
        </p>
      </div>
      <ServiceFeatures />
      <div
        className="mt-20 text-white pt-10 md:pt-24 pb-[10rem]"
        style={{
          backgroundImage: `url(${serviceAimnImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          background: "linear-gradient(180deg, #204066 0%, #008ac6 100%)",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
          "@media (max-width: 768px)": {
            backgroundPosition: "center",
            paddingTop: "16rem",
            paddingBottom: "8rem",
          },
        }}
      >
        <h1 className="font-Oswald text-2xl font-semibold text-center">
          What We Do
        </h1>
        <h2 className="font-Oswald flex flex-col gap-2 md:text-3xl pt-2 text-2xl font-bold mb-2 text-center w-max mx-auto">
          Our Services
          <span className="w-full h-1 bg-white" />
        </h2>
        <p className="font-Lato md:text-lg pt-3 text-center mx-5 md:mx-72">
          Skrisentech Inc Medical Billing has a strong grasp of medical billing,
          credentialing, medical Accounts Receivable (A/R), and practice billing
          audit services. With extensive experience in the healthcare billing
          industry, we are confident in our ability to enhance the financial
          performance of your healthcare practice.
        </p>
      </div>
      <ServiceCardSection />
      {/* Medical Specialties */}
      <div className="mt-20 py-10 bg-darkgray">
        <h2 className="font-Oswald text-blue text-xl font-semibold text-center pt-5">
          We Include
        </h2>
        <h1 className="font-Oswald flex flex-col w-max mx-auto gap-2 md:text-4xl md:font-semibold text-2xl font-semibold text-center">
          These Medical Specialties
          <span className="w-full h-1 bg-blue" />
        </h1>
        <MedicalServicesCards />
      </div>
      <div className="bg-darkgray">
        <h2 className="font-Oswald text-blue text-xl font-semibold text-center pt-10">
          Our Honor
        </h2>
        <h1 className="font-Oswald flex flex-col w-max mx-auto md:text-4xl md:font-bold text-2xl font-semibold text-center">
          Esteemed Partners
          <span className="w-full h-1 bg-blue" />
        </h1>
        <p className="font-Lato md:pt-5 text-center md:px-[260px] px-5 pt-5">
          The innovative approach of Skrisentech Inc. Medical Billing has
          propelled it to become one of the rapidly expanding physician practice
          communities in the United States. Our commitment to driving
          transformation within the medical field is evident through our
          cutting-edge solutions, all achieved via our Channel Partnerships.
        </p>
        <div className="grid md:grid-cols-5 grid-rows-2 gap-2 py-10 md:pt-10 px-28 justify-center">
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner1} alt="Partner 1" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner2} alt="Partner 2" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner3} alt="Partner 3" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner4} alt="Partner 4" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner5} alt="Partner 5" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner6} alt="Partner 6" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner7} alt="Partner 7" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner8} alt="Partner 8" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner9} alt="Partner 9" />
            </div>
          </div>
          <div className="col-span-1 p-2 ">
            <div
              className="bg-white rounded-md flex items-center justify-center"
              style={{ width: "200px" }}
            >
              <img src={allstarspartner10} alt="Partner 10" />
            </div>
          </div>
        </div>
      </div>
      {/* FAQS */}
      <div className="md:flex justify-between gap-10 h-full mx-10 mt-20 md:mt-8">
        <div className="md:pt-32 font-semibold">
          <p className="text-blue">FAQs</p>
          <h1 className="font-Oswald md:text-[24px]">
            Skrisentech Inc Medical Billing stands out as the top
            <br /> choice for medical billing services for your
            <br /> healthcare practice.
          </h1>
          <div className="md:max-w-screen-lg bg-white">
            <div className="grid divide-y divide-neutral-200 md:max-w-xl mt-8">
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="font-Lato">
                      {" "}
                      What does Skrisentech Inc Medical Billing Do?
                    </span>
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
                  <p className="font-Lato text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Skrisentech Inc Medical Billing specializes in providing
                    medical billing services for healthcare providers. They
                    offer a complete range of solutions to support healthcare
                    providers in managing their billing process. This includes
                    tasks such as verifying insurance, capturing charges,
                    submitting claims, posting payments, managing denials, and
                    handling collections.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="font-Lato">
                      {" "}
                      Is my data secure with Skrisentech Inc Medical Billing?
                    </span>
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
                  <p className=" font-Lato text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Skrisentech Inc Medical Billing prioritizes data security,
                    employing advanced measures to safeguard your information.
                    This includes secure servers, data encryption, and secure
                    data transfer protocols. The company is fully compliant with
                    HIPAA regulations and adheres to other industry standards
                    for data security.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="font-Lato">
                      {" "}
                      How long does physician credentialing take?
                    </span>
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
                  <p className="font-Lato text-neutral-600 mt-3 group-open:animate-fadeIn">
                    The duration of the physician credentialing process may vary
                    based on factors such as the healthcare provider, the
                    insurance company, and other variables. Typically, this
                    process can take several months to finalize. Skrisentech Inc
                    Medical Billing is committed to expediting the credentialing
                    process by proactively managing deadlines and maintaining
                    close communication with insurance providers and relevant
                    organizations.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:mt-10">
          <img
            src={buisnextImage}
            className="w-full md:w-auto mx-auto text-white md:bg-right-top mt-4"
          />
          <img
            src={Faqf}
            alt="faq"
            className="w-full md:w-auto absolute top-[-20px]"
          />
        </div>
      </div>
      {/* Request call section */}
      <div className="bg-darkgray lg:py-16 lg:px-32 md:px-16 md:py-16 py-5">
        <div className="bg-blue md:w-full">
          <div className="px-5 md:px-8 lg:px-12 pt-10 md:items-center py-8 flex flex-col gap-6">
            <h1 className="font-Oswald text-white font-bold text-2xl pb-3">
              Request For A Call Back
            </h1>
            <div className="flex flex-col gap-4 sm:flex sm:flex-row w-full">
              <input
                type="text"
                className="font-Lato flex-1 border p-2 rounded border-none focus:outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className=" font-Lato flex-1 border p-2 rounded  focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-full sm:flex sm:flex-row w-full">
              <input
                type="text"
                className="border p-2 rounded focus:outline-none font-Lato flex-1"
                placeholder="Phone"
              />
              <select className="border p-2 rounded focus:outline-none font-Lato flex-1">
                <option value="" disabled selected>
                  -Service-
                </option>
                <option value="category1">Medical Billing</option>
                <option value="category2">Medical Coding</option>
                <option value="category3">Credentialing</option>
                <option value="category3">Other </option>
              </select>
            </div>

            <div className="flex flex-col gap-4 lg:w-full sm:flex sm:flex-row w-full">
              <select className="font-Lato border p-2 rounded focus:outline-none flex-1">
                <option value="" disabled selected>
                  -State-
                </option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
              <input
                type="date"
                className="border p-2 rounded focus:outline-none font-Lato flex-1"
                placeholder="Pick a Date"
              />
            </div>

            {/* Textarea */}
            <div className="flex flex-col w-full">
              <textarea
                className="font-Lato border p-2 rounded focus:outline-none h-28 md:h-32"
                placeholder="Comments"
              ></textarea>
            </div>

            <button
              type="submit"
              className="font-Lato bg-blue-500 text-white border border-white mt-4 px-4 py-2 rounded transition hover:bg-white hover:text-black mr-auto"
            >
              Submit Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;

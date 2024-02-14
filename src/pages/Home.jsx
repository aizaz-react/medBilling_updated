import "../App.css";
import Container from "../components/Container";
import Footer from "../components/Footer";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import "../Header.css";
import bannerTwo from "../images/banner-2.png";
import aboutimage from "../images/ABout.png";
import serviceAimnImage from "../images/amin3.png";
import testimonialImage from "../images/testimonial.png";
import buisnextImage from "../images/businext-img33.png";
import Faqf from "../images/faqs-f.png";
import Painmanagement from "../icons/pain-management.png";
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

function Home() {
  return (
    <div>
      <InfoNav />
      <Nav />
      <div
        style={{ "--image-url": `url(${bannerTwo})` }}
        className={`bg-[image:var(--image-url)] py-36 bg-cover bg-no-repeat`}
      >
        <div className="text-left md:ml-24 top-10 mx-7 md:mx-0 left-0">
          <h1 className="font-poppins md:text-4xl font-bold text-white md:my-6">
            AllStars Medical Billing
          </h1>
          <p className="font-Roboto md:text-lg mb-4 mt-2 text-white">
            We excel in medical billing and coding, with expertise in
            Professional,<br></br>Institutional, Emergency Room, and
            Out-of-Network coding services.
          </p>
          <button className="bg-blue mt-4 md:mt-8 text-white px-4 py-2 rounded-md font-bold hover:bg-sky-700">
            Read More
          </button>
        </div>
      </div>
      <CardSection />

      {/* About Section */}
      <div className="bg-darkgray">
        <div className="py-10 md:pb-[5rem] flex md:mx-20 mx-5">
          <div className="md:flex justify-between gap-8">
            <div className="md:w-2/5 w-full">
              {/* About Image */}
              <img
                className="rounded-md"
                src={aboutimage}
                alt="Aboutimage"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="mx-5 md:mx-0 pt-10 md:w-2/3 md:pt-0 ">
              {/* About Content */}
              <h1 className="font-Roboto font-bold md:text-3xl text-[28px] flex flex-col md:flex-row">
                Welcome To{" "}
                <span className="text-blue"> AllStars Medical Billing</span>
              </h1>
              <p className=" mt-4 md:mt-6 line-clamp-7 text-gray-500">
                Billing plays a crucial role in the operations of any medical
                practice. When entrusted to capable hands, it allows your staff
                and medical professionals to concentrate on their primary focus:
                delivering excellent patient care. AllStars has a proven track
                record of assisting healthcare providers in optimizing their
                revenue collection, minimizing unnecessary expenses, and
                simplifying business processes through a team of highly skilled
                billing experts. AllStars Medical Billing Solutions offers
                comprehensive revenue cycle management solutions tailored to
                over 50 specialties across the United States.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 md:mx-28 mx-8">
        <h2 className="text-center md:text-3xl text-2xl font-semibold">
          Why AllStars Medical Billing?
        </h2>
        <div className="h-1 md:w-[23rem] w-[19rem] bg-blue mt-2 mx-auto"></div>
        <p className="text-center text-gray-500 mt-5">
          At AllStars, we firmly believe that healthcare providers should
          dedicate their time and energy to patient care and delivering
          outstanding services, without the burden of claims, payments, and
          patient statements. Our approach revolves around an intelligent
          workflow that prioritizes precision from the outset, consistently
          identifying and eradicating the underlying causes of billing errors
          and other issues.
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
        <div>
          <h1 className="text-2xl font-semibold text-center">What We Do</h1>
          <h2 className="flex flex-col gap-2 md:text-3xl pt-2 text-2xl font-bold mb-2 text-center w-max mx-auto">
            Our Services
            <span className="w-full h-1 bg-white" />
          </h2>
          {/* <div className="h-1 md:w-[11rem] w-[8.5rem] bg-white mt-1 mb-1 mx-auto"></div> */}
          <p className="md:text-lg pt-3 text-center mx-5 md:mx-72">
            AllStars Medical Billing has a strong grasp of medical billing,
            credentialing, medical A/R, and practice billing audit services.
            With extensive experience in the healthcare billing industry, we are
            confident in our ability to enhance the financial performance of
            your healthcare practice.
          </p>
        </div>
      </div>
      <ServiceCardSection />

      {/* Medical Specialties */}

      <div className="mt-20 py-10 bg-darkgray">
        <h2 className="text-blue text-xl font-semibold text-center pt-5">
          We Cover
        </h2>
        <h1 className="flex flex-col w-max mx-auto gap-2 md:text-4xl md:font-semibold text-2xl font-semibold text-center">
          These Medical Specialties
          <span className="w-full h-1 bg-blue" />
        </h1>

        <MedicalServicesCards />
      </div>

      <div className="bg-darkgray">
        <h2 className="text-blue text-xl font-semibold text-center pt-10">
          Our Pride
        </h2>
        <h1 className="flex flex-col w-max mx-auto md:text-4xl md:font-bold text-2xl font-semibold text-center">
          Proud Partners
          <span className="w-full h-1 bg-blue" />
        </h1>
        <p className="md:pt-5 text-center md:px-[260px] px-5 pt-5">
          The innovative approach of AllStars Medical Billing has made it one of
          the rapidly expanding physician practice communities in the United
          States. Our commitment to driving transformation within the medical
          field is evident through our cutting-edge solutions, all achieved via
          our Channel Partnerships.
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

      <div className="md:flex justify-center gap-10 h-full mx-10 mt-20 md:mt-8">
        <div className="md:pt-32 font-semibold">
          <p className="text-blue">FAQs</p>
          <h1 className="md:text-[24px]">
            AllStars Medical Billing stands out as the top choice <br></br>for
            medical billing services for your healthcare<br></br> practice.
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
                    AllStars Medical Billing is a company specializing in
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
                    <span>
                      {" "}
                      Is my data secure with AllStars Medical Billing?
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
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    AllStars Medical Billing places a strong emphasis on data
                    security. They employ advanced security measures to
                    safeguard your data, which includes secure servers, data
                    encryption, and secure data transfer protocols. The company
                    is fully compliant with HIPAA regulations and adheres to
                    other industry standards for data security.
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
                    The duration of the physician credentialing process may
                    differ based on factors like the healthcare provider, the
                    insurance company, and other variables. Typically, this
                    process can take several months to finalize. AllStars
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
      <div className="bg-darkgray lg:py-16 lg:px-32 md:px-0 md:flex">
        {/* Right section */}
        <div className="bg-blue flex-1 md:w-full">
          <div className="px-5 md:px-8 lg:px-12 pt-10 md:items-center py-8 flex flex-col gap-4">
            <h1 className="text-white font-bold text-2xl pb-3">
              Request For A Call Back
            </h1>
            <div className="flex gap-4 flex-col lg:w-full md:w-0 sm:flex sm:flex-row w-full">
              <input
                type="text"
                className=" flex-1 border p-4 md:p-2 md:rounded border-none focus:outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className=" flex-1 border p-4 md:p-2 md:rounded  focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-full md:w-0 sm:flex sm:flex-row w-full">
              <input
                type="text"
                className="border p-4 md:p-2 md:rounded focus:outline-none flex-1"
                placeholder="Phone"
              />
              <select className="border p-4 md:p-2 md:rounded focus:outline-none flex-1">
                <option value="" disabled selected>
                  -Service-
                </option>
                <option value="category1">Medical Billing</option>
                <option value="category2">Medical Coding</option>
                <option value="category3">Credentialing</option>
                <option value="category3">Other </option>
              </select>
            </div>

            <div className="flex flex-col gap-4 lg:w-full md:w-0 sm:flex sm:flex-row w-full">
              <select className="border p-4 md:p-2 md:rounded focus:outline-none flex-1">
                <option value="" disabled selected>
                  -State-
                </option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
              <input
                type="date"
                className="border p-4 md:p-2 md:rounded focus:outline-none flex-1"
                placeholder="Pick a Date"
              />
            </div>

            {/* Textarea */}
            <div className="flex flex-col w-full">
              <textarea
                className="border p-4 md:p-2 md:rounded focus:outline-none h-28 md:h-32"
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

        <div className="border flex-1 p-4 border-blue">
          {/*Left section */}
          <div className="lg:py-[165px]">
            <h1 className="text-2xl font-bold">Reach Us</h1>
            <div className="h-1 w-[6rem] bg-blue mt-1 mb-1"></div>
            <div
              className="pt-4"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <a href="tel:+15014240123">
                {" "}
                <p
                  className="text-xl"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IoCallOutline
                    style={{ marginRight: "8px", fontSize: "30px" }}
                  />{" "}
                  (501)-424-0123
                </p>
              </a>
              <a href="mailto:info@allstarsmb.com">
                <p
                  className="text-xl pt-2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IoMailOutline
                    className="my-2"
                    style={{ marginRight: "7px", fontSize: "25px" }}
                  />{" "}
                  info@allstarsmb.com
                </p>
              </a>
              <a href="#">
                <p
                  className="text-xl pt-2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IoLocationOutline
                    style={{ marginRight: "8px", fontSize: "35px" }}
                  />{" "}
                  2121 N California Blvd Suite 243, Walnut Creek, CA 94596, USA
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;

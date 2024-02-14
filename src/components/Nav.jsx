import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../images/Logo-1.png";
import { useNavigate } from "react-router-dom";
import { navLinks, services } from "../utils/data";

const products = [
  {
    name: "Medical Coding",
    href: "/medical-coding",
  },
  {
    name: "Medical Billing",
    href: "/medical-billing",
  },
  {
    name: "Medical Credentialing",
    href: "/medical-credentialing",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleServices = (open) => {
    if (open) {
      navigate("/services");
    }
  };

  return (
    <header className="bg-white z-10 sticky top-0">
      <nav
        className="flex flex-row justify-between items-center py-2 px-12 shadow-sm"
        aria-label="Global"
      >
        <a href="/" alt="logo">
          <img className="h-16" src={logo} alt="" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:block flex-row justify-between">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`${
                item.title === "Services" && "group"
              } text-md font-semibold leading-6 text-gray-900 mx-3 hover:text-blue focus:text-blue`}
            >
              {item.title}
              {item.title === "Services" && <ServiceModal />}
            </a>
          ))}
        </div>
        <button className="btn bg-blue h-12 sm:hidden rounded-md text-white font-semibold px-8 hover:bg-sky-700 lg:block hidden">
          Request a Call Back
        </button>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-8 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-8 md:h-16  w-auto" src={logo} alt="logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        onClick={() => handleServices(open)}
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="/price-plan"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Plans & Pricing
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

const ServiceModal = () => {
  return (
    <div className="invisible group-hover:visible hover:visible md:block hidden max-w-[900px] absolute top-14 duration-100 ease-in-out inset-0 md:mx-auto my-auto mx-6">
      <div className="bg-white border border-gray-300 px-6 flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-gray-700 py-4 border-b-[1px] border-gray-300">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <a href={item.link} key={index}>
              <h1 className=" flex flex-col gap-2 text-left mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 w-max">
                {item.title}
                <span className="w-full h-1 bg-blue" />
              </h1>
              <p className="text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

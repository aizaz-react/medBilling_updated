import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs, { sendForm } from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0nthdxc", "template_n53a0wf", form.current, {
        publicKey: "xmbsNI7RbDP0U9VPY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmail("");
          setMessage("");
          // console.log(JSON.stringify());
          form.current.reset();
          toast.info("🦄 Email sent Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col gap-4 mt-6 lg:mt-0 lg:w-1/4 w-full">
      <h1 className="text-white font-bold text-2xl font-Oswald">
        Quick Contact
      </h1>
      <form onSubmit={sendEmail} ref={form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="font-Lato border p-3 rounded border-none focus:outline-none w-full"
          placeholder="Email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="font-Lato border p-3 rounded focus:outline-none w-full my-4"
          placeholder="message"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue font-Oswald text-white w-full mt-2 p-3 rounded transition hover:bg-sky-700"
        >
          Send Message
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
export default ContactUs;

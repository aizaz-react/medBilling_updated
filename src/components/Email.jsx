import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_htk2zqf", "template_k24jij7", form.current, {
        publicKey: "qi6zPhgtxeOrtADYx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
    </div>
  );
};
export default ContactUs;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", 
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        () => {
          toast.success("Message sent! 🎉");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong ❌");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 font-medium">Name:</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message:</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full h-32 p-3 border border-gray-300 rounded-md outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

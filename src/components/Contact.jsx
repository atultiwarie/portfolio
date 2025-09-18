import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.from_name.value;
    const userEmail = form.current.from_email.value;

    // 1. Send email to YOU (your inbox)
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅");

          // 2. Send Auto Reply to USER (personalized)
          emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
            {
              to_email: userEmail,
              from_name: "Atul",
              user_name: userName,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send message ❌");
        }
      );

    e.target.reset();
  };

  return (
    <div className="min-h-screen  dark:bg-gray-800 p-10 transition-colors duration-300">
      <Toaster position="top-right" />
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
        Contact Me
      </h2>
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="name"
              className="block font-medium mb-1 text-gray-700 dark:text-gray-200"
            >
              Name:
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 
                         rounded-md outline-none bg-white dark:bg-gray-700 
                         text-black dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-medium mb-1 text-gray-700 dark:text-gray-200"
            >
              Email:
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 
                         rounded-md outline-none bg-white dark:bg-gray-700 
                         text-black dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-medium mb-1 text-gray-700 dark:text-gray-200"
            >
              Message:
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 
                         rounded-md outline-none bg-white dark:bg-gray-700 
                         text-black dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-md 
                       hover:bg-blue-700 dark:hover:bg-blue-500 
                       transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

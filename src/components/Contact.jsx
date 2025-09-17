const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8 text-indigo-600">Contact Me</h2>
      <p className="mb-6">
        Feel free to reach out via email or connect on LinkedIn!
      </p>
      <div className="space-y-4">
        <p>
          Email:{" "}
          <a
            href="mailto:atultiwari4767@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            atultiwari4767@gmail.com
          </a>
        </p>
        <p>
          Phone: <span className="text-gray-800">+91-8799747751</span>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/atul-kumar-tiwari-dev"
            className="text-indigo-600 hover:underline"
          >
            linkedin.com/in/atul-kumar-tiwari-dev
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/atultiwarie"
            className="text-indigo-600 hover:underline"
          >
            github.com/atultiwarie
          </a>
        </p>
      </div>
    </section>
  );
};
export default Contact;

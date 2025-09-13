import React, { useState } from "react";
import img from "../assets/pexels-olly-941555.jpg";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log(contactData);
      setContactData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden">
        
        <div className="w-1/2 hidden md:block p-10 ">
          <img
            src={img}
            alt="Contact"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        
        <div className="md:w-1/2 w-full p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Get in Touch With Us
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={contactData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
            
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-200"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

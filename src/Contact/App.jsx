import React from 'react';
import logoImg from "../assets/logo-ghoomakkads (2).png";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="text-center mb-0 px-2">
        <img
            className="mb-4 mx-auto"
            src={logoImg}
            alt="Logo"
            width="80"
            height="44"
          />
        <h2 className="text-4xl lg:text-6xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl lg:text-2xl font-['Abril_Fatface'] max-w-2xl mx-auto mb-8 text-gray-300">
        Need to get in touch with us?
        <br></br>Either fill out the form with your
            inquiry or email us at{" "}
            <a href="mailto:theghoomakkads@ghoomakkads.org" className="text-[#5F2EEA] underline">
              theghoomakkads@ghoomakkads.org
            </a>.
        <br></br>
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-white text-black rounded-full p-4 mr-4">
              <i className="fas fa-home text-xl"></i>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-cyan-400">Address</h4>
              <p className='text-sm lg:text-xl'>4671 Sugar Camp Road,<br />Owatonna, Minnesota, 55060</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-white text-black rounded-full p-4 mr-4">
              <i className="fas fa-phone text-xl"></i>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-cyan-400">Phone</h4>
              <p className='text-sm lg:text-xl'>1800-123-123</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-white text-black rounded-full p-4 mr-4">
              <i className="fas fa-envelope text-xl"></i>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-cyan-400">Email</h4>
              <p className='text-sm lg:text-xl'>theghoomakkads@ghoomakkads.org</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 w-full items-center justify-center text-center text-black rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send Message</h3>
          <form className=" text-4xl space-y-6">
            <div className="flex space-x-4 text-sm lg:text-xl">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full  border-b-2 border-gray-300 outline-none focus:border-cyan-400 py-2"
              />
            </div>
            <div className="flex space-x-4 text-sm lg:text-xl">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 outline-none focus:border-cyan-400 py-2"
              />
            </div>
            <div className="flex space-x-4 text-sm lg:text-xl">
              <textarea
                placeholder="Type your Message..."
                className="w-full border-b-2 border-gray-300 outline-none focus:border-cyan-400 py-2 h-28 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white text-xl lg:text-2xl lg:hover:text-2xl px-6 py-2 bg-gray-700 w-full hover:bg-gray-900 hover:w-full hover:text-white transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-4 text-sm z-50">
        <p>© The Ghoomakkads</p>
      </footer>
    </section>
  );
};

export default Contact;

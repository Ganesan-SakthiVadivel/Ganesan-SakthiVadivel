import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone_number: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send('service_eqfidze', 'template_l38gw4i', formData, 'pt_lvFjiYfebFnS0_')
      .then(
        () => {
          alert('Your message has been sent successfully!');
          setFormData({
            user_name: '',
            user_email: '',
            phone_number: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section 
      className="flex flex-col items-center justify-center text-left sm:px-6 sm:py-24 w-full gap-3" 
      name="Contact"
    >
      <div 
        className="w-full max-w-lg sm:mb-12"
        style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase text-left text-[#45a29e] leading-tight">
          Let's work
          <span className="text-[#c5c6c7] block sm:inline"> together</span>
        </h1>
      </div>

      <div className="w-full max-w-lg">
        <form onSubmit={sendEmail} className="bg-[#1f2833] p-4 sm:p-8 rounded-xl shadow-lg">
          <label className="block mb-4">
            <span className="text-[#c5c6c7] text-sm sm:text-base">Name</span>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              className="mt-1 sm:mt-2 p-2 sm:p-3 w-full bg-gray-700 text-[#c5c6c7] rounded-lg text-sm sm:text-base"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-[#c5c6c7] text-sm sm:text-base">Email</span>
            <input
              type="email"
              name="user_email"
              placeholder="Your@email.com"
              value={formData.user_email}
              onChange={handleChange}
              className="mt-1 sm:mt-2 p-2 sm:p-3 w-full bg-gray-700 text-[#c5c6c7] rounded-lg text-sm sm:text-base"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-[#c5c6c7] text-sm sm:text-base">Phone Number</span>
            <input
              type="tel"
              name="phone_number"
              placeholder="Your Phone Number"
              value={formData.phone_number}
              onChange={handleChange}
              className="mt-1 sm:mt-2 p-2 sm:p-3 w-full bg-gray-700 text-[#c5c6c7] rounded-lg text-sm sm:text-base"
              required
            />
          </label>

          <label className="block mb-6">
            <span className="text-[#c5c6c7] text-sm sm:text-base">Message</span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 sm:mt-2 p-2 sm:p-3 w-full bg-gray-700 text-[#c5c6c7] rounded-lg text-sm sm:text-base"
              rows="4"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full p-2 sm:p-3 bg-[#45a29e] hover:bg-[#66fcf1] hover:text-[#1f2833] text-[#c5c6c7] font-semibold rounded-lg text-sm sm:text-base transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
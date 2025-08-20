// src/components/Contact.jsx
import {
  Mail,
  Phone,
  MapPin,
  Dribbble,
  Twitter,
  Instagram,
} from "lucide-react";
import Wrapper from "./Wrapper";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Wrapper className=" text-white py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-10">
          <h3 className="text-xl font-semibold">CONTACT INFO</h3>

          {/* Mail */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 uppercase text-xs">Mail Us</p>
              <p>vishwakarma.sujit99@gmail.com</p>
              <p>isujitv257@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 uppercase text-xs">Contact Us</p>
              <p>+1 504-899-8221</p>
              <p>+1 504-749-5456</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 uppercase text-xs">Location</p>
              <p>22 Madhupatna, Cuttack-10</p>
              <p>Odisha, India</p>
            </div>
          </div>

          {/* Social Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SOCIAL INFO</h3>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 cursor-pointer">
                <Dribbble className="w-6 h-6 text-white" />
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 cursor-pointer">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 cursor-pointer">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative rounded-2xl overflow-hidden lg:p-10 p-4 w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/bg3.png)` }}
          ></div>
          <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

          <h2 className="text-3xl font-bold mb-8 relative z-10">
            Let’s work <span className="text-blue-500">together.</span>
          </h2>

          <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Your Subject *"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-white/20 hover:bg-blue-500 transition text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

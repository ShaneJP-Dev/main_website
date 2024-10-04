import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    findUs: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
    >
      <h2 className="text-2xl font-semibold mb-6">Let's get in touch</h2>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full border-b-2 border-gray-300 focus:border-gray-500 py-2 outline-none"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full border-b-2 border-gray-300 focus:border-gray-500 py-2 outline-none"
          placeholder="Enter your email address"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full border-b-2 border-gray-300 focus:border-gray-500 py-2 outline-none"
          placeholder="+27 | 071 123 4567"
        />
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700">What is your budget?</label>
        <select
          name="budget"
          id="budget"
          value={formData.budget}
          onChange={handleInputChange}
          className="w-full border-b-2 border-gray-300 focus:border-gray-500 py-2 outline-none"
        >
          <option value="">Select your budget</option>
          <option value="less_than_1000">$0 - $1000</option>
          <option value="1000_to_5000">$1000 - $5000</option>
          <option value="more_than_5000">More than $5000</option>
        </select>
      </div>

      {/* How did you find us */}
      <div>
        <label htmlFor="findUs" className="block text-sm font-medium text-gray-700">How did you find us?</label>
        <select
          name="findUs"
          id="findUs"
          value={formData.findUs}
          onChange={handleInputChange}
          className="w-full border-b-2 border-gray-300 focus:border-gray-500 py-2 outline-none"
        >
          <option value="">Select an option</option>
          <option value="google">Google</option>
          <option value="social_media">Social Media</option>
          <option value="referral">Referral</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help you?</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full border-b-2 border-gray-300 focus:border-gray-500 py-2 outline-none"
          placeholder="Enter your message"
          
        />
      </div>

      {/* reCAPTCHA placeholder */}
      <div className="flex items-center">
        <input type="checkbox" required className="mr-2" />
        <span>I’m not a robot</span>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full py-2 bg-black text-white font-semibold hover:bg-gray-800 transition rounded-md"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

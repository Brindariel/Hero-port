// components/ContactForm.js
"use client"
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 border rounded-lg bg-gray-100">
      <label className="block mb-2 font-bold">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block mb-2 font-bold">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block mb-2 font-bold">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        ></textarea>
      </label>
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
        Send
      </button>
    </form>
  );
};

export default ContactForm;

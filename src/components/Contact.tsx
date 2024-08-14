"use client"
import { useState } from "react";

// components/Contact.tsx
export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const response = await fetch('../api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send the message.');
      }
    };
    return (
      <section className="pt-24 pb-12 h-screen text-gray rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-2 text-center">Get in Touch</h2>
        <div className="text-xl font-normal mb-8 text-center">Please contact me directly at example@gmail.com or through this form.</div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <input type="text" name="name" placeholder="Your Name"  value={formData.name}
              onChange={handleChange} className="w-full p-4 mb-4 bg-gray-700 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-4 mb-4 bg-gray-700 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" value={formData.email}
              onChange={handleChange} required/>
          <textarea placeholder="Your Message" name="message" className="w-full p-4 mb-4 bg-gray-700 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500" value={formData.message}
              onChange={handleChange} required></textarea>
          <button type="submit" className="w-full bg-blue-500 py-3 rounded-md hover:bg-blue-600 transition">Send Message</button>
        </form>
      </section>
    );
  }
  
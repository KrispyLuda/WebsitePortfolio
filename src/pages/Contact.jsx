import React from 'react';
import Squares from '../components/retro';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mkgbvnke");
  if (state.succeeded) {
      return <section className="w-full flex justify-center items-center py-12 bg-blue-50"> <h2 className='text-black text-2xl'>Email Recieved! </h2> <p className='text-black'>Thank you for leaving a messeage! reponses are sent within 2-3 business days</p> </section>
  }
  return (
<section className="relative w-full flex justify-center items-center py-12 overflow-hidden">

  {/* 🌀 Animated background component (like <Squares />) */}
  <div className="absolute inset-0 z-0">
    <Squares />
  </div>
      
      <form
        action="https://formspree.io/f/mkgbvnke"
        method="POST"
        className=" relative z-10 w-full max-w-3xl bg-white shadow-md rounded-lg p-8 md:w-3/5 sm:w-11/12"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
        <p className="text-center text-gray-600">Currently open to new opportunities, collaborations, and commissions</p>
        <p className="text-center text-gray-600">Email Me Directly Here <a href="mailto:Christdoss2003@gmail.com" className="text-blue-500 hover:underline">Christdoss2003@gmail.com</a></p>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name='Name'
            required
            placeholder="Jane Doe"
            className="mt-1 block w-full  text-gray-600 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name='Email'
            required
            placeholder="JaneDoe@example.com"
            className="mt-1 text-gray-600 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            name='Message'
            placeholder="Your Message here..."
            className="mt-1 block text-gray-600 w-full h-[300px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-300 opacity-50"></div>
    </section>
  );
}

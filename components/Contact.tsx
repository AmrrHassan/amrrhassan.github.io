"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_hxguw6v",
        "template_w5wjgfr",
        {
          from_name: form.name,
          to_name: "Amr",
          from_email: form.email,
          to_email: "amrhassanhafez@hotmail.com",
          message: form.message,
        },
        "EQPVSF0qap2MTHvhQ"
      );

      setLoading(false);
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12" id="contact">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/terminalTwo.png"
          alt="terminal-background"
          className="w-full h-full object-contain md:object-contain"
          width="500" height="500"
        />
        <div className="absolute inset-0"></div> {/* Overlay for better readability */}
      </div>

      {/* Contact Form */}
      <div className="relative z-10 max-w-3xl w-full bg-opacity-90 backdrop-blur-lg rounded-lg shadow-xl px-6 sm:px-10 py-10">
        <h3 className="text-3xl font-bold text-center text-white">
          Let&apos;s get <span className="text-[var(--accent-purple)]"> in touch</span>
        </h3>
        <p className="text-lg text-gray-300 mt-3 text-center">
          Whether you&apos;re looking to build a new project from scratch, or need help with an
          existing one, I&apos;m here to help. Let&apos;s chat about your needs and see how I can assist you.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
          <label className="block">
            <span className="text-white">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="My name is..."
            />
          </label>

          <label className="block">
            <span className="text-white">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="your@email.com"
            />
          </label>

          <label className="block">
            <span className="text-white">Your message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Hello, I'm interested in..."
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg transition-all border border-white cursor-pointer hover:cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>);
};

export default Contact;

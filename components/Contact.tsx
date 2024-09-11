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
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        {
          from_name: form.name,
          to_name: "Amr",
          from_email: form.email,
          to_email: "amrhassanhafez@hotmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_USER_ID ?? "",
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
    <section className="my-10" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col py-10">
        <img
          src="/images/terminalTwo.png"
          alt="terminal-background"
          className="absolute sm:inset-9 h-full w-full object-fit-cover min-h-screen sm:hidden"
        />
        <div className="pt-28 md:py-8 z-10 max-w-3xl mx-auto px-4">
          <h3 className="heading font-bold justify-center text-center">
            Let&apos;s get <span className="text-purple"> in touch</span>
          </h3>
          <p className="text-lg text-white-200 mt-3 justify-center text-center">
            Whether you&apos;re looking to build a new project from scratch, or
            need help with an existing one, I&apos;m here to help. Let&apos;s
            chat about your needs and see how I can assist you.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3 text-lg text-white-200">
              <span className="field-label block">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="My name is.."
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="amrhassanhafez@hotmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hello, I'm interested in..."
              />
            </label>

            <button
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 field-btn"
              type="submit"
              disabled={loading}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-white backdrop-blur-3xl text-sm font-bold px-3 py-1">
                {loading ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

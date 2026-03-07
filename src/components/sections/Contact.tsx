"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  MessageCircle,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { personalInfo } from "@/data";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    budget: "Below $1k",
    service: "Web Development",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          budget: "Below $1k",
          service: "Web Development",
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="absolute inset-x-0 bottom-0 top-0 bg-linear-to-t from-primary/5 via-background to-background z-0 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono tracking-[0.4em] block mb-4 uppercase text-sm">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] uppercase tracking-tighter">
              Ready to <br />{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent neon-glow">
                start
              </span>{" "}
              <br /> your journey?
            </h2>

            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg font-medium">
              I'm looking for high-impact projects and career-defining
              opportunities. Let's build something that actually shifts the
              market.
            </p>

            <div className="space-y-6 mb-16">
              {[
                {
                  icon: <Mail size={22} />,
                  label: "Email",
                  value: personalInfo.email,
                  color: "text-primary",
                },
                {
                  icon: <Phone size={22} />,
                  label: "Mobile + Whatsapp",
                  value: personalInfo.phone,
                  color: "text-secondary",
                },
                {
                  icon: <MapPin size={22} />,
                  label: "Location",
                  value: personalInfo.location,
                  color: "text-accent",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 group cursor-default"
                >
                  <div
                    className={`w-12 h-12 glass rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
                      {item.label}
                    </h4>
                    <p className="text-lg font-black font-mono tracking-tight">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                {
                  icon: <Github size={22} />,
                  href: "https://github.com",
                  color: "hover:bg-primary",
                },
                {
                  icon: <Linkedin size={22} />,
                  href: personalInfo.linkedin,
                  color: "hover:bg-secondary",
                },
                {
                  icon: <MessageCircle size={22} />,
                  href: `https://wa.me/${personalInfo.whatsapp}`,
                  color: "hover:bg-green-500",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-12 h-12 glass rounded-2xl flex items-center justify-center hover:text-background hover:scale-110 transition-all duration-300 shadow-xl ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative bg-white/1"
          >
            {isSuccess ? (
              <div className="text-center py-20 flex flex-col items-center">
                <CheckCircle2
                  size={80}
                  className="text-primary mb-6 animate-pulse"
                />
                <h3 className="text-3xl font-black mb-4">MESSAGE SENT!</h3>
                <p className="text-gray-400 font-medium max-w-xs mx-auto">
                  Thank you for reaching out {formData.name.split(" ")[0]}. I'll
                  get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-10 text-primary font-black uppercase tracking-[0.3em] text-xs hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all duration-300 font-bold placeholder:text-gray-700"
                      placeholder="Muhammad Sohail"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all duration-300 font-bold placeholder:text-gray-700"
                      placeholder="sohail@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all duration-300 font-bold placeholder:text-gray-700"
                      placeholder="0312-XXXXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
                      Company / Organization
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all duration-300 font-bold placeholder:text-gray-700"
                      placeholder="CodeBotX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-secondary transition-all duration-300 font-bold appearance-none cursor-pointer"
                    >
                      <option className="bg-background" value="Web Development">
                        Full-Stack Web
                      </option>
                      <option className="bg-background" value="Mobile App">
                        Mobile Application
                      </option>
                      <option className="bg-background" value="UI/UX Design">
                        UI/UX Masterpiece
                      </option>
                      <option className="bg-background" value="Consultation">
                        Tech Consultation
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all duration-300 font-bold appearance-none cursor-pointer"
                    >
                      <option className="bg-background" value="Below $1k">
                        Below $1k
                      </option>
                      <option className="bg-background" value="$1k - $5k">
                        $1k - $5k
                      </option>
                      <option className="bg-background" value="$5k - $10k">
                        $5k - $10k
                      </option>
                      <option className="bg-background" value="$10k+">
                        $10k+
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
                    Write Your Vision
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-all duration-300 resize-none font-bold placeholder:text-gray-700"
                    placeholder="Describe your revolutionary project..."
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-primary text-background font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer shadow-xl uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      Processing <Loader2 className="animate-spin" size={20} />
                    </>
                  ) : (
                    <>
                      Launch Message{" "}
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

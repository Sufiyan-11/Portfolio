"use client";

import { useState } from "react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MessageSquare,
  Send,
  MapPin,
  Star,
  Sparkles
} from "lucide-react";

export default function ContactSection() {
 
  const [focusedField, setFocusedField] = useState<string | null>(null);


  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sufiyanshaikh11121998@gmail.com",
      href: "mailto:sufiyanshaikh11121998@gmail.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9769068424",
      href: "tel:+919769068424",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Phone",
      value: "+91 8291455467",
      href: "https://api.whatsapp.com/send?phone=8291455467",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sufiyan-11", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sufiyan-shaikh-a53840190/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://twitter.com/Sufiyan_4", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://www.instagram.com/sufiyan_sk_98/", label: "Instagram", color: "hover:text-pink-400" }
  ];

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">Let&apos;s Connect</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s start a conversation and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/30 p-8 md:p-12 relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl shadow-lg">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                    <p className="text-gray-300">I&apos;ll get back to you within 24 hours</p>
                  </div>
                </div>

                <form action="https://formsubmit.co/a8dfc9ad9cd398273c974ec4cfdc8627" 
                  method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-4 bg-gray-900/80 border-2 border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:bg-gray-900 outline-none transition-all duration-300 shadow-sm"
                        placeholder="Enter Your Name"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                      )}
                    </div>

                    <div className="relative group">
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-4 bg-gray-900/80 border-2 border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:bg-gray-900 outline-none transition-all duration-300 shadow-sm"
                        placeholder="Enter Your Email Address"
                      />
                      {focusedField === 'email' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-gray-900/80 border-2 border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:bg-gray-900 outline-none transition-all duration-300 resize-none shadow-sm"
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {focusedField === 'message' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                    <Star className="w-4 h-4 animate-pulse" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-cyan-400" />
                Contact Info
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-gray-600/50 hover:to-gray-700/50 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className={`p-3 bg-gradient-to-r ${method.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400">{method.title}</p>
                      <p className="text-white text-sm font-semibold">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-500" />
                Follow Me
              </h3>
              
              <div className="grid grid-cols-5 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-300 ${social.color} flex items-center justify-center`}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Status Card */}
            {/* <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/30 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-bold">Available for Projects</span>
              </div>
              <p className="text-green-400 text-sm">
                Currently accepting new freelance projects and collaborations.
              </p>
            </div> */}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-lg">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
            </div>
            <span className="text-sm text-gray-300 font-medium ml-2">Let&apos;s create something amazing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
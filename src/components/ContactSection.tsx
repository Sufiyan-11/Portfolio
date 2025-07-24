import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">Contact</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contact Form */}
          <div className="flex-1 w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
            <form action="https://formsubmit.co/a8dfc9ad9cd398273c974ec4cfdc8627" method="POST" className="space-y-6">
              <div>
                <label className="block text-gray-200 font-semibold mb-1">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 outline-none" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 outline-none" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold mb-1">Message</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-500 outline-none" placeholder="Type message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-full transition">Send Message</button>
            </form>
          </div>
          {/* Contact Info & Socials */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-gray-200">
              <FaEnvelope size={22} color="#22d3ee" />
              <span className="font-semibold">sufiyanshaikh11121998@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <FaPhone size={22} color="#22d3ee" />
              <span className="font-semibold">+91 9769068424</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <FaWhatsapp size={22} color="#22d3ee" />
              <a href="https://api.whatsapp.com/send?phone=8291455467" target="_blank" className="font-semibold hover:text-cyan-400 transition">+91 8291455467</a>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/Sufiyan-11" target="_blank" className="hover:text-cyan-400 transition"><FaGithub size={28} /></a>
              <a href="https://www.linkedin.com/in/sufiyan-shaikh-a53840190/" target="_blank" className="hover:text-cyan-400 transition"><FaLinkedin size={28} /></a>
              <a href="https://twitter.com/Sufiyan_4" target="_blank" className="hover:text-cyan-400 transition"><FaTwitter size={28} /></a>
              <a href="https://www.facebook.com/" target="_blank" className="hover:text-cyan-400 transition"><FaFacebook size={28} /></a>
              <a href="https://www.instagram.com/sufiyan_sk_98/" target="_blank" className="hover:text-cyan-400 transition"><FaInstagram size={28} /></a>
            </div>
          </div>
          {/* Contact GIF */}
          <div className="flex-1 flex justify-center items-center">
            <Image src="/contact.gif" alt="contact" width={320} height={320} className="rounded-2xl shadow-2xl w-64 h-64 md:w-80 md:h-80 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
} 
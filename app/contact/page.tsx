"use client";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import('@/ui/MapComponent'), {
  ssr: false,
  loading: () => <p className="text-center text-white">Loading map...</p>,
});
import emailjs from '@emailjs/browser';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Headphones,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();


  // template_s049n3i
  // service_9i5yssl
  // vryewsJJafpDWlMcQ
  emailjs.send(
    'service_kr3tn84', // ✅ Your service ID
    'template_c7qzzom', // ✅ Your template ID
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    'vryewsJJafpDWlMcQ' 
  ).then(
    (result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    (error) => {
      console.error(error.text);
      alert('Failed to send message. Please try again later.');
    }
  );
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-light mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <a href="/" className="text-primary-blue hover:underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl mx-auto">
              Have questions about our textures or need support? We're here to
              help. Reach out to our team and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <h2 className="text-2xl font-semibold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-dark-lighter rounded-lg border border-dark hover:border-primary-blue transition-colors">
                  <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Email</h3>
                    <p className="text-sm text-gray-light">
                      support@bttufftiles.com
                    </p>
                    <p className="text-sm text-gray-light">
                      info@bttufftiles@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-dark-lighter rounded-lg border border-dark hover:border-primary-blue transition-colors">
                  <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Phone</h3>
                    <p className="text-sm text-gray-light">+92 317 6697001</p>
                    <p className="text-sm text-gray-light">+92 303 2748260</p>
                    <p className="text-sm text-gray-light">
                      Mon-Fri, 9AM-6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-dark-lighter rounded-lg border border-dark hover:border-primary-blue transition-colors">
                  <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">Address</h3>
                    <p className="text-sm text-gray-light">
                      B-20 Sector 19-B
                      <br />
                      Opposite Gulistan Society | Jamali Pul
                      <br />
                      Karchi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-dark-lighter rounded-lg border border-dark hover:border-primary-blue transition-colors">
                  <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">
                      Business Hours
                    </h3>
                    <p className="text-sm text-gray-light">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday: 10:00 AM - 4:00 PM EST
                      <br />
                      {/* Sunday: Closed */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
              <div className="bg-dark-lighter rounded-lg p-8 border border-dark">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-dark rounded-lg text-white focus:outline-none focus:border-primary-blue transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-dark rounded-lg text-white focus:outline-none focus:border-primary-blue transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-dark rounded-lg text-white focus:outline-none focus:border-primary-blue transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark border border-dark rounded-lg text-white focus:outline-none focus:border-primary-blue transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Our Location
            </h2>
            <MapComponent />

          </div>

          {/* Support Options */}
          <section className="mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
            <h2 className="text-2xl font-semibold text-white mb-10 text-center">
              Other Ways to Get Help
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* WhatsApp Support */}
              <div className="text-center p-6 bg-dark-lighter rounded-lg border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  WhatsApp Support
                </h3>
                <p className="text-sm text-gray-light mb-4">
                  Chat with our team directly and get real-time assistance.
                </p>
                <a
                  href="https://wa.me/923176697001" // Replace with your actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue hover:underline text-sm font-medium"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Visit Showroom */}
              <div className="text-center p-6 bg-dark-lighter rounded-lg border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Visit Showroom
                </h3>
                <p className="text-sm text-gray-light mb-4">
                  See our tile and marble collections in person. Visit us today!
                </p>
                <a
                  href="/contact" // Or a specific showroom page/map if available
                  className="text-primary-blue hover:underline text-sm font-medium"
                >
                  Get Directions
                </a>
              </div>

              {/* Phone Support (unchanged) */}
              <div className="text-center p-6 bg-dark-lighter rounded-lg border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Phone Support
                </h3>
                <p className="text-sm text-gray-light mb-4">
                  Speak directly with our support specialists
                </p>
                <a href="tel:+923176697001" className="text-primary-blue hover:underline text-sm font-medium">
                  Call Now
                </a>
              </div>
            </div>
          </section>


          {/* FAQ Preview */}
          <section className="mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-1000">
            <div className="bg-gradient-to-r from-dark-lighter via-primary-blue/10 to-dark-lighter rounded-2xl p-8 border border-dark text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-light mb-6 max-w-2xl mx-auto">
                Before reaching out, check our FAQ section for quick answers to
                common questions about downloads, licensing, and usage.
              </p>
              <a
                href="/help"
                className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors"
              >
                View FAQ
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

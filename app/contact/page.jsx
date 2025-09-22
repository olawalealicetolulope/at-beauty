"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import Image from "next/image";

const ContactPage = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message cannot be empty"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    try {
      await addDoc(collection(db, "contact"), {
        ...values,
        date: formattedDate,
        time: formattedTime,
      });
      alert("✅ Thanks for contacting us! We’ll reach out to you soon.");
      resetForm();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("⚠️ An error occurred. Please try again later.");
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-500 py-20 text-center px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          Contact Our Beauty Experts
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg">
          Questions, feedback or partnership ideas?
          We’d love to hear from you. Connect with our friendly team today!
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-orange-50 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-orange-600">📍 Address</h3>
          <p className="text-gray-700">
             Lesbora Hostel Adenike Street, Ogbomsoho Town,<br /> Oyo, Nigeria
          </p>
        </div>
        <div className="p-6 bg-orange-50 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-orange-600">📞 Phone</h3>
          <p className="text-gray-700">+234 800 123 4567</p>
          <p className="text-gray-700">Mon – Sat, 9am – 6pm</p>
        </div>
        <div className="p-6 bg-orange-50 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-orange-600">✉️ Email</h3>
          <p className="text-gray-700">hello@atbeauty.com</p>
          <p className="text-gray-700">support@atbeauty.com</p>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="bg-orange-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Opening Hours</h2>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 10:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
          Send Us a Message
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6 bg-white p-8 rounded-xl shadow-xl border border-orange-100">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <Field
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <Field
                as="textarea"
                name="message"
                rows={6}
                placeholder="Type your message here..."
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </Form>
        </Formik>
      </section>

      

      {/* Team Intro */}
      <section className="bg-orange-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-8">Meet Our Team</h2>
          <p className="text-gray-700 mb-10">
            Our passionate beauty specialists are here to ensure you leave glowing every time.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Tola", role: "Lead Esthetician", img: "/ola.jpg" },
              { name: "Grace", role: "Makeup Artist", img: "/sola.png" },
              { name: "Daniel", role: "Hair Specialist", img: "/dan.jpeg" },
              { name: "Lola", role: "Customer Care", img: "/tola.webp" },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-xl transition-transform hover:scale-105"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-800">Do I need an appointment?</h4>
            <p className="text-gray-700">
              We recommend booking ahead to secure your spot, but walk-ins are welcome when available.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">What products do you use?</h4>
            <p className="text-gray-700">
              All our products are organic and cruelty-free, carefully selected for healthy glowing skin.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Can I cancel or reschedule?</h4>
            <p className="text-gray-700">
              Yes, simply contact us at least 24 hours in advance to make changes to your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6 text-orange-600">Find Us on the Map</h2>
        <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg border border-orange-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4967446676424!2d3.93426897554677!3d7.842963206424416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037595354526613%3A0x282896e9a39f3f15!2sLesbora!5e0!3m2!1sen!2sng!4v1757943099835!5m2!1sen!2sng" allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-orange-500 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Glow Together</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Whether it’s a quick question or a big event, our team is ready to make you shine.
        </p>
        <a
          href="tel:+2348132349262"
          className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Call Us Now
        </a>
      </section>
    </main>
  );
};

export default ContactPage;

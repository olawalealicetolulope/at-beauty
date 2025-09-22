"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
     {/* HEADER */}
<section className="relative bg-orange-100 py-20 px-4 text-center overflow-hidden">
  {/* Background Accent */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-50/40 to-orange-100/80 pointer-events-none"></div>

  <div className="relative max-w-4xl mx-auto space-y-6">
    <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-black drop-shadow-sm">
      About AT Beauty
    </h1>

    <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
      At AT Beauty, we believe that true beauty is more than skin deep.
      Our mission is to help you embrace your natural glow with safe,
      sustainable, and stylish care—because confidence begins with self-love.
    </p>

    <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
      From premium organic products to expert treatments, we are redefining
      what it means to look and feel radiant.  
      Discover a world where skincare meets artistry and every client becomes
      part of our beauty family.
    </p>

    <div className="flex justify-center gap-4 mt-8">
      <Link
        href="/contact"
        className="px-8 py-3 bg-orange-500 text-white rounded-md font-medium shadow hover:bg-orange-600 transition-transform hover:scale-105"
      >
        Get in Touch
      </Link>
      <Link
        href="/service"
        className="px-8 py-3 bg-white text-orange-600 border border-orange-500 rounded-md font-medium shadow hover:bg-orange-100 transition-transform hover:scale-105"
      >
        Explore Our Services
      </Link>
    </div>
  </div>
</section>


      {/* IMAGE + STORY */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-10 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <Image
            src="/face-brand.png" 
            alt="About AT Beauty"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded with a passion to redefine natural beauty, AT Beauty is more than a brand—it’s a movement.
            We use skin-safe, cruelty-free ingredients in every product and ensure that every service is delivered with care and love.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re visiting our physical studios or ordering online,
            our team is dedicated to providing a premium, personalized experience
            that celebrates your unique glow.
          </p>
        </div>
      </section>

      {/*  OUR JOURNEY */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-bold text-orange-600">Our Journey</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From a small studio with a handful of loyal customers to a growing beauty hub,
            our story is about passion, resilience, and the belief that everyone deserves
            safe and effective beauty care. Over the years, we’ve expanded our services,
            introduced innovative products, and partnered with communities to share the joy of self-care.
          </p>
        </div>
      </section>

      {/* CORE VALUES*/}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-2xl font-bold">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Beauty",
                desc: "We never compromise on ingredient safety or quality.",
              },
              {
                title: "Confidence",
                desc: "We help our clients feel confident and beautiful in their own skin.",
              },
              {
                title: "Care & Community",
                desc: "We support our clients and local communities through ethical practices.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-orange-50 shadow-md p-6 rounded-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*SUSTAINABILITY */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Our Sustainability Promise</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beauty shouldn’t come at the expense of the planet.
              From eco-friendly packaging to responsibly sourced ingredients,
              we take conscious steps to reduce our environmental footprint.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our pledge is to continue innovating for a greener future—because glowing skin and a healthy planet go hand in hand.
            </p>
          </div>
          <Image
            src="/natu.webp"
            alt="Sustainability Promise"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/*TEAM INTRO*/}
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
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-xl hover:scale-105 transition-transform"
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

      {/*TESTIMONIALS */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-orange-600">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "AT Beauty completely transformed my skincare routine. I feel radiant!",
                name: "Amanda P.",
              },
              {
                quote: "Friendly staff and top-notch products. Highly recommend!",
                name: "Chioma K.",
              },
              {
                quote: "My hair has never looked better. Thank you AT Beauty!",
                name: "Grace T.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white shadow-md rounded-md p-6 text-sm md:text-base">
                <p className="italic text-gray-700">“{t.quote}”</p>
                <h4 className="mt-4 font-semibold text-orange-500">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ  */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Are your products cruelty-free?",
                a: "Yes! All our products are cruelty-free and made with ethically sourced ingredients.",
              },
              {
                q: "Do you offer personalized consultations?",
                a: "Absolutely. Our experts are happy to guide you in selecting the right services or products.",
              },
              {
                q: "Where can I purchase AT Beauty products?",
                a: "You can visit our physical stores or shop conveniently through our online store.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="font-semibold text-orange-600">{faq.q}</h3>
                <p className="text-gray-700 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-xl md:text-2xl font-semibold">Want to learn more?</h2>
        <p className="mt-2 text-sm text-gray-600">
          We’re always here to help or talk beauty.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
};

export default Page;

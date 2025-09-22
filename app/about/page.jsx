import React from 'react'
import Image from "next/image";

const page = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header section */}
      <section className="bg-orange-100 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold uppercase">About AT Beauty</h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-700 text-sm md:text-base">
          We believe that beauty is natural, personal, and empowering.
          AT Beauty is here to help you shine through safe, sustainable, and stylish care.
        </p>
      </section>

      {/* Image + Text section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-10 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <Image
            src="/face-brand.png" // Replace with your actual image
            alt="About AT Beauty"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-gray-600">
            Founded with the passion to redefine natural beauty, AT Beauty is more than a brand — it's a movement.
            We use skin-safe, cruelty-free ingredients in every product and ensure that every service is delivered with care.
          </p>
          <p className="text-gray-600">
            Whether you're visiting our physical stores or ordering online, our team is dedicated to providing a premium,
            personalized experience that brings out your inner glow.
          </p>
        </div>
      </section>

      {/* Our Values section */}
      <section className="bg-gray-50 py-12 px-4">
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
              <div key={i} className="bg-white shadow-md p-6 rounded-md">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact link or CTA */}
      <section className="py-16 text-center">
        <h2 className="text-xl md:text-2xl font-semibold">Want to learn more?</h2>
        <p className="mt-2 text-sm text-gray-600">We’re always here to help or talk beauty.</p>
        <a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  )
}

export default page
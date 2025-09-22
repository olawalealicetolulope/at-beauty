"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/bg.webp')] bg-no-repeat bg-center bg-cover animate-fadeIn">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black/70 flex flex-col items-center justify-center gap-10 px-4 text-center transition-all duration-1000 ease-in-out">
        {/* Small Tagline */}
        <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm tracking-wider uppercase animate-fadeInDown">
          Beauty. Confidence. Glow.
        </span>

        {/* Main Heading */}
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl uppercase leading-tight animate-fadeInDown">
          Unlock Your Natural Beauty
        </h1>

        {/* Sub-headline */}
        <p className="text-gray-200 max-w-2xl text-base md:text-lg lg:text-xl animate-fadeInUp">
          Experience skin care and styling like never before—where science meets
          artistry to reveal the most confident version of YOU.
        </p>

        {/* Highlight List */}
        <ul className="text-gray-200 max-w-md text-left mx-auto space-y-2 text-sm md:text-base animate-fadeInUp">
          {[
            "✨ 100% organic & cruelty-free products",
            "💆‍♀️ Certified beauty experts",
            "🚚 Fast home delivery & on-site service",
            "💖 Personalized care for every skin type",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-orange-400">•</span> {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp">
          <Link href="/booking-appointment">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition transform hover:scale-105">
              Book Your Glow
            </button>
          </Link>
          <Link href="/service">
            <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition transform hover:scale-105">
              Explore Services
            </button>
          </Link>
        </div>

        {/* Social Proof / Quick Testimonial */}
        <div className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg mt-4 animate-fadeInUp max-w-xs">
          <p className="text-sm italic">
            “My skin has never felt this healthy and radiant!” – <span className="font-semibold">Ada M.</span>
          </p>
        </div>
      </section>


      {/* About Us */}
      <section className="bg-orange-50 py-16 px-4 animate-fadeInSlow">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              About AT Beauty
            </h2>
            <p className="text-gray-700 mb-4">
              At AT Beauty, we believe beauty is more than skin deep. Our team of
              certified professionals blends science and artistry to bring out
              your natural glow while prioritizing skin health.
            </p>
            <p className="text-gray-700">
              From nourishing facials to flawless makeup and elegant nails,
              we deliver results that make you feel radiant inside and out.
            </p>
          </div>
          <Image
            src="/face-brand.png"
            alt="AT Beauty team at work"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4 animate-fadeInSlow">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Why Choose AT Beauty?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We don’t just enhance your look — we elevate your confidence with
            every touch, every product, every appointment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Organic Products",
              desc: "We use only skin-safe, cruelty-free ingredients that nourish and protect.",
            },
            {
              title: "Expert Consultation",
              desc: "Our professionals offer personalized advice tailored to your unique beauty needs.",
            },
            {
              title: "Home Delivery",
              desc: "Pamper yourself at home with our fast and secure delivery service.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="shadow-md p-6 rounded-lg hover:shadow-xl transition transform hover:scale-105 bg-white"
            >
              <h3 className="font-semibold text-xl mb-2 text-orange-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-orange-50 py-16 px-4 animate-fadeInSlow">
        <h2 className="text-3xl text-center font-semibold mb-10 text-gray-800">
          Our Signature Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { title: "Facials", desc: "Hydrating, anti-aging, and brightening treatments." },
            { title: "Makeup", desc: "From casual glow to glamorous bridal looks." },
            { title: "Nail Care", desc: "Manicure, pedicure, and nail art perfection." },
            { title: "Hair Styling", desc: "Elegant cuts and event-ready styling." },
          ].map((service, idx) => (
            <div key={idx} className="p-6 shadow-md hover:shadow-xl rounded-lg transition transform hover:scale-105 bg-white">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-orange-100 py-16 px-4 animate-fadeIn">
        <h2 className="text-3xl text-center font-semibold mb-10 text-gray-800">
          Meet Our Experts
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { name: "Tola Ade", role: "Lead Esthetician", img: "/ola.jpg" },
            { name: "Grace B.", role: "Senior Makeup Artist", img: "/sola.png" },
            { name: "Daniel K.", role: "Hair Specialist", img: "/dan.jpeg" },
          ].map((member, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-xl">
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-orange-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 px-2 animate-fadeInSlow">
        <h2 className="text-3xl text-center font-semibold mb-10 text-gray-800">
          Packages & Pricing
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
             { category: "Facial Treatments", price: "Least Price(#10000)", features: ["Classic Facial", "Hydrating Facial", "Anti-Aging Facial", "Acne Treatment Facial", "Brightening Facial"] },
              { category: "Body Massage", price: "Least Price(#12000)", features: ["Swedish Massage", "Deep Tissue Massage", "Hot Stone Massage", ] },
            { category: "Makeup Sessions", price: "Least Price(#25000)", features: ["Editorial Makeup", "Party Makeup", "Full Bridal Makeup", "Quick Makeup"] },
            { category: "Hair Styling", price: "Least Price(#8000)", features: ["Silk Press", "Braids", "Natural Styling", "Coloring & Highlights"] },
            { category: "Nail Care", price: "Least Price(#5000)", features: ["Classic Manicure", "Gel Polish", "Nail Design", "Pedicure with Scrub", "Acrylic Nails"] },
          ].map((pkg, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-xl text-center transition bg-white">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">{pkg.plan}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">{pkg.price}</p>
              <ul className="text-gray-600 mb-4 space-y-1">
                {pkg.features.map((feat, i) => (
                  <li key={i}>• {feat}</li>
                ))}
              </ul>
              <Link href="/booking-appointment">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-orange-50 py-16 px-4 animate-fadeInSlow">
        <h2 className="text-3xl text-center font-semibold mb-6 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {[
            {
              quote:
                "AT Beauty changed my skincare game. I feel confident and radiant.",
              name: "Sarah T.",
            },
            {
              quote:
                "I love their quick service and the fact that they use organic products.",
              name: "Ada M.",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow-md animate-fadeInUp"
            >
              <p className="text-sm italic text-gray-700">“{testimonial.quote}”</p>
              <p className="text-right text-xs mt-4 font-medium text-orange-600">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16 px-4 animate-fadeIn">
        <h2 className="text-3xl text-center font-semibold mb-6 text-gray-800">
          Our Beauty Gallery
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/facial.jpg",
            "/blog3.jpg",
            "/bg.webp",
            "/nails.webp",
            "/makeup.jpg",
            "/hairstyle.jpg",
          ].map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow hover:shadow-xl transition-all hover:scale-105"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={500}
                height={500}
                className="w-full h-64 object-cover transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-orange-50 py-16 px-4 animate-fadeIn">
        <h2 className="text-3xl text-center font-semibold mb-10 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Do you use organic products?", a: "Yes! All our products are cruelty-free and skin-safe." },
            { q: "Can I book online?", a: "Absolutely, use our 'Book Now' button to schedule instantly." },
            { q: "Do you offer group discounts?", a: "Yes, we provide special rates for bridal parties and events." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-md">
              <h3 className="font-semibold text-orange-600 mb-2">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-orange-100 text-center animate-fadeInUp">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Ready to Glow?
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Book your session today and experience beauty redefined — where every
          glow is a story and every look is a statement.
        </p>
        <Link href="/booking-appointment">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition transform hover:scale-105">
            Book Now
          </button>
        </Link>
      </section>
    </main>
  );
}

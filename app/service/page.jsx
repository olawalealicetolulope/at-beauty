import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-orange-100 py-16 text-center px-4">
        <h1 className="text-4xl font-bold uppercase">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          At AT Beauty, we offer a wide range of beauty services designed to
          help you feel and look your best.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Facial Treatments",
            desc: "Rejuvenate your skin with our deep cleansing and hydrating facial services.",
            img: "/facial.jpg",
          },
          {
            title: "Makeup Artistry",
            desc: "Get ready for any occasion with stunning makeup tailored to your look.",
            img: "/makeup.jpg",
          },
          {
            title: "Body Massage",
            desc: "Relax and unwind with our therapeutic and stress-relieving massages.",
            img: "/massage.avif",
          },
          {
            title: "Hair Styling",
            desc: "Transform your look with our expert hair care and styling services.",
            img: "/hairstyle.jpg",
          },
          {
            title: "Nail Care",
            desc: "Pamper your hands and feet with our luxurious manicure & pedicure services.",
            img: "/nails.webp",
          },
          {
            title: "Skincare Consult",
            desc: "Meet with our experts for personalized skincare guidance and product advice.",
            img: "/skincare.webp",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </section>

      
      <section className="py-12 bg-orange-50 text-center px-4">
        <h2 className="text-2xl font-semibold">Ready to book your experience?</h2>
        <p className="text-gray-600 mt-2">Let us help you look and feel radiant.</p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
        >
          Book a Session
        </a>
      </section>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/bg.webp')] bg-no-repeat bg-center bg-cover">
      {/* Hero Section */}
      <section className="min-h-screen bg-black/70 flex flex-col items-center justify-center gap-8 px-4 text-center">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl uppercase">
          Unlock Your Natural Beauty
        </h1>
        <p className="text-gray-200 max-w-xl text-sm md:text-base">
          Discover personalized beauty solutions tailored for your skin, your style, your confidence.
        </p>
        <button className="border border-white hover:border-orange-400 hover:rounded-md px-10 py-2 text-white text-base lg:text-lg max-md:w-full hover:bg-orange-400 hover:text-black transition-all">
          Contact Us
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Organic Products",
              desc: "We use only skin-safe, cruelty-free ingredients.",
            },
            {
              title: "Expert Consultation",
              desc: "Talk to beauty professionals that care.",
            },
            {
              title: "Home Delivery",
              desc: "Get pampered without stepping out.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="shadow p-6 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-orange-50 py-12 px-4">
        <h2 className="text-2xl text-center font-semibold mb-6">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm italic">
              “AT Beauty changed my skincare game. I feel confident and radiant.”
            </p>
            <p className="text-right text-xs mt-2 font-medium">– Sarah T.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-sm italic">
              “I love their quick service and the fact that they use organic products.”
            </p>
            <p className="text-right text-xs mt-2 font-medium">– Ada M.</p>
          </div>
        </div>
      </section>

   
    </main>
  );
}

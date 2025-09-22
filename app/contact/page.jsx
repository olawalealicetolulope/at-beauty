export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-orange-100 py-16 text-center px-4">
        <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-700">
          Have questions or want to book a session? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows={5}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

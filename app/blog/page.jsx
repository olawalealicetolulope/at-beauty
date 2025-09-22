// For Next.js App Router: app/blog/page.tsx
import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      title: "5 Skincare Tips for Glowing Skin",
      desc: "Discover easy and natural ways to achieve glowing skin every day.",
      date: "June 20, 2025",
      img: "/blog1.webp",
    },
    {
      title: "Top 10 Makeup Hacks Every Woman Should Know",
      desc: "From bold lips to long-lasting foundation — these tips will change your routine.",
      date: "June 15, 2025",
      img: "/blog2.png",
    },
    {
      title: "How to Choose the Right Massage for Your Body",
      desc: "Swedish, deep tissue, or hot stone? Learn what works best for your needs.",
      date: "June 10, 2025",
      img: "/blog3.jpg",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Blog Header */}
      <section className="bg-orange-100 py-16 text-center px-4">
        <h1 className="text-4xl font-bold uppercase">Our Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          Stay updated with beauty tips, wellness advice, and the latest from AT Beauty.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <div
            key={post.title}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={post.img}
              alt={`Cover image for ${post.title}`}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <p className="text-xs text-gray-400">{post.date}</p>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.desc}</p>
              <a
                href="#"
                className="text-orange-500 text-sm font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

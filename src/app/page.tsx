import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-white shadow-md py-2 px-6 sticky top-0">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Image
            src="/logo/lb-apparel-logo.jpg"
            alt="LB Apparel Logo"
            width={80}
            height={50}
            className="object-contain"
          />
          <div className="flex gap-5 items-center">
            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </a>
              <a
                href="/collections"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Collections
              </a>
              <a
                href="/community"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Community
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About Us
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-12 pt-4 px-6 h-[calc(100vh-64px)] overflow-y-auto snap-y snap-proximity scroll-smooth">
        <section
          aria-label="hero-section"
          className="snap-center h-full flex items-center border-2 border-red-500"
        >
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between gap-4">
                    <div className="overflow-hidden rounded-lg flex-1">
                      <Image
                        src="/hero/hero1.jpg"
                        alt="Hero 1"
                        width={800}
                        height={540}
                        className="w-full h-80 md:h-97 object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg flex-1">
                      <Image
                        src="/hero/hero2.jpg"
                        alt="Hero 2"
                        width={800}
                        height={540}
                        className="w-full h-80 md:h-97 object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div className="overflow-hidden rounded-lg flex-1">
                      <Image
                        src="/hero/hero3.jpg"
                        alt="Hero 3"
                        width={800}
                        height={540}
                        className="w-full h-80 md:h-97 object-cover"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg flex-1">
                      <Image
                        src="/hero/hero4.jpg"
                        alt="Hero 4"
                        width={800}
                        height={540}
                        className="w-full h-80 md:h-97 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/hero/hero4.jpg"
                    alt="Hero 4"
                    width={800}
                    height={540}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Collection carousel"
          className="snap-center h-full flex items-center py-10 border-2 border-red-500"
        >
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <div className="mt-10 mb-10 text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Collections
                </h2>
                <p className="mt-1 text-gray-600">
                  Discover curated collections from our latest offerings.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col pb-5">
                <div className="flex snap-x snap-mandatory overflow-x-auto p-4 gap-3 no-scrollbar">
                  {["hero1.jpg", "hero2.jpg", "hero3.jpg", "hero4.jpg"].map(
                    (src) => (
                      <article
                        key={src}
                        className="shrink-0 w-72 snap-center rounded-lg border border-gray-100 bg-white"
                      >
                        <div className="h-100 overflow-hidden rounded-t-lg">
                          <Image
                            src={`/hero/${src}`}
                            alt={`Collection ${src}`}
                            width={288}
                            height={176}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-3 text-left">
                          <h3 className="text-base font-semibold">
                            Collection{" "}
                            {src.replace("hero", "").replace(".jpg", "")}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Select premium styles and best sellers.
                          </p>
                        </div>
                      </article>
                    ),
                  )}
                </div>
                <div className="flex w-full justify-center">
                  <a
                    href="/explore"
                    className="mt-4 inline-block rounded-lg bg-black px-5 py-2.5 text-white font-semibold hover:bg-gray-800"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Customer reviews"
          className="snap-center h-full flex bg-gray-50 px-5 py-10 items-center border-2 border-red-500"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-20 w-full ">
              <div className="w-full">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Customer Reviews
                  </h2>
                  <p className="mt-1 text-gray-600">
                    Real feedback from customers who love our products.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Alex",
                      text: "Amazing quality and fast delivery. Highly recommended!",
                    },
                    {
                      name: "Jordan",
                      text: "Great fit and very comfortable. I will buy again.",
                    },
                    {
                      name: "Taylor",
                      text: "Excellent customer service and fantastic products.",
                    },
                    {
                      name: "John",
                      text: "Amazing quality and fast delivery. Highly recommended!",
                    },
                    {
                      name: "Jane",
                      text: "Great fit and very comfortable. I will buy again.",
                    },
                    {
                      name: "Marta",
                      text: "Excellent customer service and fantastic products.",
                    },
                  ].map((review) => (
                    <article
                      key={review.name}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <p className="text-gray-700">"{review.text}"</p>
                      <p className="mt-3 font-semibold text-gray-900">
                        - {review.name}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-center px-28">
                <p className="italic text-center">
                  Our customers trust us for quality, comfort, and style—here’s
                  what they have to say about their experience with our brand.
                  Built for everyday wear and designed to stand out, our pieces
                  are made to move with you. Real people, real style, real
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="About us"
          className="snap-center h-full flex items-center py-10 border-2 border-red-500"
        >
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900">About Us</h2>
                <p className="mt-1 text-gray-600">
                  We are a customer-focused apparel brand with a passion for
                  stylish, high-quality products.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Story
                  </h3>
                  <p className="mt-3 text-gray-700">
                    Founded with the mission to make premium apparel accessible,
                    our team combines innovation, design, and conscious sourcing
                    to deliver products you'll love.
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-600">
                    <li>Quality materials and careful craftsmanship</li>
                    <li>Fast shipping and easy returns</li>
                    <li>Dedicated support and customer care</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
                  <iframe
                    title="Store location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090547!2d144.961!3d-37.816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b1a56f2db7%3A0x30995b83b0e9f2c!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1674870011398!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    className="h-full w-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p>Email: info@bikeshop.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Store Location</h3>
            <p>123 Bike Street</p>
            <p>City, State 12345</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p>Your trusted bike shop for quality gear and accessories.</p>
            <p className="mt-4">&copy; 2026 Bikeshop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

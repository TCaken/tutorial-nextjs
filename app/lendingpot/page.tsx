import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="mt-4 text-4xl font-bold text-blue-600">Welcome to LendingPot</h1>
        <p className="mt-2 text-lg text-gray-700">
          Your one-stop solution for all your lending needs. Explore our services and find the best loan options tailored for you.
        </p>
        <div className="mt-6">
          <Link href="/personal-loan">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="mt-12 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Why Choose Us?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Fast Approval</h3>
            <p className="mt-2 text-gray-600">Get your loan approved in minutes, not days.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Flexible Terms</h3>
            <p className="mt-2 text-gray-600">Choose repayment terms that fit your budget.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Expert Support</h3>
            <p className="mt-2 text-gray-600">Our team is here to help you every step of the way.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-blue-600">What Our Customers Say</h2>
        <div className="mt-6 space-y-4">
          <blockquote className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg italic">"LendingPot made the loan process so easy and fast!"</p>
            <footer className="mt-2 text-gray-600">- Jane D.</footer>
          </blockquote>
          <blockquote className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg italic">"I found the perfect loan for my needs. Highly recommend!"</p>
            <footer className="mt-2 text-gray-600">- John S.</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Ready to Get Started?</h2>
        <p className="mt-2 text-lg text-gray-700">Join thousands of satisfied customers today!</p>
        <div className="mt-6">
          <Link href="/personal-loan">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
              Apply Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
// src/pages/HomePage.jsx
// import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-6 px-6">
        <h1 className="text-2xl font-bold text-purple-600">TaskManager</h1>
        <ul className="hidden md:flex gap-8 text-gray-700">
          <li className="hover:text-purple-600 cursor-pointer">Services</li>
          <li className="hover:text-purple-600 cursor-pointer">How it Works</li>
          <li className="hover:text-purple-600 cursor-pointer">About Us</li>
          <li className="hover:text-purple-600 cursor-pointer">Projects</li>
          <li className="hover:text-purple-600 cursor-pointer">Affiliates</li>
        </ul>
        <button>Hello</button>
        {/* <Button className="bg-purple-600 text-white rounded-full px-6 hover:bg-purple-700">
          Get Started
        </Button> */}
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto px-6 py-16">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Maximize Your <span className="text-purple-600">Productivity</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Conquer your tasks and take control with our Task Manager App.
          </p>
          <div className="mt-6 flex gap-4">
            <Button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700">
              Learn More
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full">
              Start Free
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://tailus.io/sources/blocks/tech/preview/images/phone-mockup.png"
            alt="App Mockup"
            className="w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-600">Custom Workflow</h3>
            <p className="mt-2 text-gray-600">
              Define unique tasks for each team. Customize workflows easily.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-600">Multi-Team Projects</h3>
            <p className="mt-2 text-gray-600">
              Collaborate across teams with ease and delegate tasks properly.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-600">Data Sync</h3>
            <p className="mt-2 text-gray-600">
              Your tasks are synced across devices, always up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 max-w-4xl mx-auto text-center px-6">
        <p className="text-xl text-gray-700 italic">
          "We had an excellent experience working with XYZ Agency. Their team
          delivered a stunning and user-friendly website that exceeded our
          expectations."
        </p>
        <div className="mt-6">
          <h4 className="font-bold text-gray-900">Alen Walker</h4>
          <p className="text-gray-500">Senior Executive, The Ford</p>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-purple-600 py-10 text-white text-center">
        <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
        <p className="mt-2 text-purple-100">
          Join thousands of teams already boosting productivity.
        </p>
        <Button className="mt-6 bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100">
          Start Now
        </Button>
      </footer>
    </div>
  );
}

export default HomePage;

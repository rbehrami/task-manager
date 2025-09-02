// src/pages/ServicesPage.jsx
import { FaTasks, FaCloud, FaLock, FaChartLine, FaMobileAlt, FaUsers } from "react-icons/fa";

const services = [
  {
    title: "Task Management",
    description: "Organize, prioritize, and track your team’s work with ease using our task management tools.",
    icon: <FaTasks className="text-4xl text-blue-500" />,
  },
  {
    title: "Cloud Storage",
    description: "Securely store and access your project files anytime, anywhere in the cloud.",
    icon: <FaCloud className="text-4xl text-blue-500" />,
  },
  {
    title: "Data Security",
    description: "Protect sensitive information with enterprise-grade security and compliance.",
    icon: <FaLock className="text-4xl text-blue-500" />,
  },
  {
    title: "Analytics & Insights",
    description: "Gain actionable insights with real-time dashboards and analytics reports.",
    icon: <FaChartLine className="text-4xl text-blue-500" />,
  },
  {
    title: "Mobile Access",
    description: "Stay connected on the go with our mobile-friendly platform for iOS & Android.",
    icon: <FaMobileAlt className="text-4xl text-blue-500" />,
  },
  {
    title: "Collaboration Tools",
    description: "Boost productivity with real-time chat, file sharing, and team collaboration tools.",
    icon: <FaUsers className="text-4xl text-blue-500" />,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#376FC8] to-[#00807B] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-blue-100">
            Explore the wide range of services we provide to help your team succeed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 text-cyan-950">Ready to Get Started?</h2>
        <p className="mb-6 text-blue-100 text-cyan-900">
          Join thousands of teams already boosting their productivity with us.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;

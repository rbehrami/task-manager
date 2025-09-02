import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { CgInstagram } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { useState } from "react";

const Footer = ({ 
  text = "© TaskManager. All rights reserved."
}) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-gradient-to-r from-[#7c39f9] to-[#00807B]">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-0 md:h-[269px] flex flex-col justify-center">
        
        {/* Mobile Accordion Footer */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {/* Company Section */}
            <div className="border-b border-blue-300 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-semibold text-white text-lg"
                onClick={() => toggleSection('company')}
              >
                Company
                <svg 
                  className={`transform transition-transform ${openSection === 'company' ? 'rotate-180' : ''}`} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'company' ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="pt-3 space-y-2">
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">About Us</a></li>
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">Careers</a></li>
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">Blog</a></li>
                </ul>
              </div>
            </div>

            {/* Product Section */}
            <div className="border-b border-blue-300 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-semibold text-white text-lg"
                onClick={() => toggleSection('product')}
              >
                Product
                <svg 
                  className={`transform transition-transform ${openSection === 'product' ? 'rotate-180' : ''}`} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'product' ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="pt-3 space-y-2">
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">Features</a></li>
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">Integrations</a></li>
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">Pricing</a></li>
                </ul>
              </div>
            </div>

            {/* Resources Section */}
            <div className="border-b border-blue-300 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left font-semibold text-white text-lg"
                onClick={() => toggleSection('resources')}
              >
                Resources
                <svg 
                  className={`transform transition-transform ${openSection === 'resources' ? 'rotate-180' : ''}`} 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'resources' ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="pt-3 space-y-2">
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">Documentation</a></li>
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">Support</a></li>
                  <li><a href="#" className="text-blue-100 hover:text-white transition-colors block py-1">FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright for Mobile */}
          <div className="pt-6 flex flex-col items-center">
            <div className="flex space-x-6 mb-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <RiTwitterXLine />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <ImFacebook2 />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <ImLinkedin />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors text-xl">
                <CgInstagram />
              </a>
            </div>
            <div className="text-blue-100 text-sm text-center">
              {text}
            </div>
          </div>
        </div>

        {/* Desktop Footer (unchanged) */}
        <div className="hidden md:block">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3">
                <li><a href="about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="pricing" className="text-blue-100 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-blue-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              {text}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <RiTwitterXLine />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <ImFacebook2 />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <ImLinkedin />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <CgInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
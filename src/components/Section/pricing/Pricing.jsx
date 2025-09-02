import PricingCard from "./PricingCard";

const Pricing = ({planName,price,description,features}) => {
    return (
        <>
        <article>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{planName}</h2>
        <div className="text-3xl font-bold text-indigo-600 mb-2">{price}</div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="p-6 flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
        </article>
        </>
    )
}
export default Pricing;
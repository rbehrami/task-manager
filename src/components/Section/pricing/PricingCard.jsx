import Pricing from "./Pricing";

const pricingPosts =  [
{
    planName: 'Free',
    price: 0,
    description: 'forever',
    features: [
        'Up to 5 projects',
        'Basic task management',
        'Email support',
        'Mobile app access',
        'Standard Support',
        'Limited Storage'
      ],
},
{
    planName: 'Pro',
    price: 10,
    description: 'per user/month',
    features: [
        'Unlimited projects',
        'Advanced task management',
        'Time tracking',
        'Advanced reporting',
        'Custom fields',
        'API access'
      ],
},
{
    planName: 'Business',
    price: 30,
    description: 'per user/month',
    features: [
        'Everything in Pro',
        'Unlimited users',
        'Advanced analytics',
        'Single sign-on (SSO)',
        'Unlimited Storage',
        'Custom Workflows',
        'User role management',

      ],
},
{
    planName: 'Enterprise',
    price: 60,
    description: 'per user/month',
    features: [
        'All Business features',
        'On-permise deployment',
        'SLA & dedicated support',
        'Advanced security features',
        'Custom features development',
        '24/7 technical assistance',

      ],

},
]

const PricingCard = () => {
    // Sample data for pricing cards
  const pricingPosts = [
    {
      planName: "Free",
      price: "$0",
      description: "Perfect for individuals",
      features: [
        "Basic task management",
        "Up to 5 projects",
        "Standard support",
        "Limited storage"
      ]
    },
    {
      planName: "Pro",
      price: "$15",
      description: "For growing teams",
      features: [
        "Advanced task management",
        "Unlimited projects",
        "Priority support",
        "20.6% storage",
        "Customizable dashboards"
      ]
    },
    {
      planName: "Business",
      price: "$49",
      description: "For established teams",
      features: [
        "Everything in Pro",
        "Advanced analytics",
        "User role management",
        "Dedicated account manager",
        "Unlimited storage"
      ]
    },
    {
      planName: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "All Business features",
        "On-premise deployment",
        "SLA & dedicated support",
        "Advanced security features",
        "Custom feature development"
      ]
    }
  ];
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mt-8 md:mt-12 lg:mt-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Find the perfect plan that scales with your team.
                </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pricingPosts.map((post, index) => (
                    <div key={index}>
                    <Pricing 
                        planName={post.planName}
                        price={post.price}
                        description={post.description}
                        features={post.features}
                    />
                    </div>
                ))}
                </div>
            </div>
            </div>
        </>
    )
}
export default PricingCard;
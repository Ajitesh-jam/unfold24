import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Basic",
        price: 49,
        interval: "month",
        features: [
            "Virtual consultations",
            "24/7 nurse hotline",
            "Digital prescriptions",
            "Basic health monitoring",
            "Email support"
        ],
        highlighted: false
    },
    {
        name: "Premium",
        price: 99,
        interval: "month",
        features: [
            "All Basic features",
            "Priority appointments",
            "Specialist referrals",
            "Mental health support",
            "24/7 phone support"
        ],
        highlighted: true
    },
    {
        name: "Family",
        price: 149,
        interval: "month",
        features: [
            "All Premium features",
            "Coverage for 4 members",
            "Family health tracking",
            "Quarterly checkups",
            "Dedicated care manager"
        ],
        highlighted: false
    }
];

const Pricing = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-600">Choose the perfect plan for your healthcare needs</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 ${plan.highlighted
                                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white transform scale-105'
                                    : 'bg-white border border-gray-200'
                                }`}
                        >
                            <div className="text-center mb-8">
                                <h3 className={`text-2xl font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {plan.name}
                                </h3>
                                <div className="flex justify-center items-baseline mb-4">
                                    <span className="text-4xl font-bold">${plan.price}</span>
                                    <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                                        /{plan.interval}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <Check className={`w-5 h-5 mr-3 ${plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                                            }`} />
                                        <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-lg transition-colors ${plan.highlighted
                                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
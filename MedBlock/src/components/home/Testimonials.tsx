import React, { useState, useEffect } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Star,
    Quote,
    Calendar
} from 'lucide-react';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Emma Thompson",
            role: "Patient",
            image: "/api/placeholder/100/100",
            rating: 5,
            date: "2 weeks ago",
            content: "The care I received was exceptional. From the moment I walked in, I felt welcomed and cared for. The medical staff was professional and thorough in their examination.",
            treatment: "Cardiology",
            doctor: "Dr. Michael Chen"
        },
        {
            id: 2,
            name: "David Wilson",
            role: "Patient",
            image: "/api/placeholder/100/100",
            rating: 5,
            date: "1 month ago",
            content: "Outstanding medical facility with state-of-the-art equipment. The virtual consultation service was convenient and efficient. Highly recommend their services.",
            treatment: "Telemedicine",
            doctor: "Dr. Sarah Johnson"
        },
        {
            id: 3,
            name: "Sophie Chen",
            role: "Patient",
            image: "/api/placeholder/100/100",
            rating: 5,
            date: "3 weeks ago",
            content: "The pediatric department is amazing. They made my child feel comfortable and explained everything in a way that was easy to understand. Truly grateful for their care.",
            treatment: "Pediatrics",
            doctor: "Dr. James Wilson"
        }
    ];

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-transparent to-teal-50 opacity-70"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4 inline-block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        What Our Patients
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                            Say About Us
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Real stories from our valued patients about their experience with our healthcare services
                    </p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20">
                            <button
                                onClick={handlePrev}
                                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-700 hover:text-blue-600"
                                disabled={isAnimating}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20">
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-700 hover:text-blue-600"
                                disabled={isAnimating}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
                                            <div className="absolute -top-6 right-8">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full blur opacity-50"></div>
                                                    <div className="relative bg-white p-4 rounded-full">
                                                        <Quote className="w-6 h-6 text-blue-600" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4 mb-6">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full blur opacity-50"></div>
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="relative w-16 h-16 rounded-full object-cover"
                                                    />
                                                </div>

                                                <div>
                                                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                                                    <p className="text-gray-600">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${i < testimonial.rating
                                                            ? 'text-yellow-400 fill-current'
                                                            : 'text-gray-300'
                                                            }`}
                                                    />
                                                ))}
                                                <span className="ml-2 text-gray-600 text-sm">
                                                    <Calendar className="w-4 h-4 inline-block mr-1" />
                                                    {testimonial.date}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 text-lg mb-6">
                                                "{testimonial.content}"
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-600">
                                                <span>Treatment: {testimonial.treatment}</span>
                                                <span>Doctor: {testimonial.doctor}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => !isAnimating && setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-blue-600 w-6'
                                        : 'bg-gray-300 hover:bg-blue-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
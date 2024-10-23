import React from 'react';

export const About = () => (
    <div id="about" className="relative bg-white py-16">
        <div className="absolute inset-0 bg-gray-50 skew-y-3 h-full transform -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">About Us</h2>
                <div className="space-y-6 text-gray-600">
                    <p>
                        <span className="font-semibold text-gray-900">A1 Custom Caravan Repairs</span>{' '}
                        in Oak Flats is your one stop shop for Caravan, motorhome and RV repairs.
                        As a family owned business with 15 years experience in the industry, we are fully qualified and
                        authorised to provide high-quality and professional services to ensure we get you on the road for your
                        next getaway.
                    </p>

                    <p>
                        Our team is qualified to provide a range of services on your caravan, motor home or recreational
                        vehicle. These services include repairs, pink slips, insurance repairs, electrical, plumbing, carpentry
                        work, solar systems, chassis alignment, waterproofing, sheet metal fabrication and internal alterations.
                        We also repair the equipment in and on your caravan generator boxes, axles, wheels, brakes, fridges
                        and air conditioners.
                    </p>

                    <p>
                        With over 25 years combined experience, we are also fully qualified in{' '}
                        <span className="font-semibold text-gray-900">metal fabrication industry</span> which
                        enables us to make modifications and adjustments to any parts of your caravan as needed or
                        requested.
                    </p>

                    <p>
                        We also have a fully certified{' '}
                        <span className="font-semibold text-gray-900">auto electrician</span>{' '}
                        on site with 15 years experience who can help you with
                        any of your electrical needs to your caravan or motorhome.
                    </p>

                    <p>
                        Whether you're going away for the weekend or planning a trip around Australia, we will ensure that
                        your recreational vehicle is roadworthy and prepared for whatever you encounter on your adventure.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default About;


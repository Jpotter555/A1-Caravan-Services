import React, { useState } from 'react';
import { Menu, Phone, Mail, MapPin, ChevronRight, Smartphone } from 'lucide-react';

const Contact = () => (
    <div id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center">
                        <Smartphone className="text-sky-600 mr-4" />
                        <div>
                            <h3 className="font-semibold">Mobile</h3>
                            <p className="text-gray-600">04 0982 0058</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Phone className="text-sky-600 mr-4" />
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-gray-600">42 566 888</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Mail className="text-sky-600 mr-4" />
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-gray-600">a1customcaravanrepairs@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="text-sky-600 mr-4" />
                        <div>
                            <h3 className="font-semibold">Location</h3>
                            <p className="text-gray-600">141a Industrial Road, Oak Flats, New South Wales, 2529</p>
                        </div>
                    </div>
                </div>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    />
                    <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                    />
                    <button className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default Contact;
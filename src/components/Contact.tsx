import React from 'react';
import { Phone, Mail, MapPin, Clock, Smartphone } from 'lucide-react';

export const Contact = () => {

    const address = encodeURIComponent("141A Industrial Road, Oak Flats, New South Wales, 2529");
  const mapsUrl = `https://maps.google.com/maps?q=${address}`;

  return (
    <div id="contact" className="relative bg-gray-50 py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 h-full transform -z-10"></div>
        <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-12 border-b pb-4">Contact Us</h2>

                {/* Contact Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Phone */}
                    <div className="p-6 bg-sky-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <Smartphone className="text-sky-600 mr-3" size={24} />
                            <h3 className="font-semibold text-lg">Mobile</h3>
                        </div>
                        <a
                            href="tel:04 0982 0058"
                            className="text-gray-600 hover:text-sky-600 transition-colors flex items-center"

                        >
                            <span className="border-b border-dashed border-gray-400 hover:border-sky-600">
                                04 0982 0058
                            </span>
                        </a>

                    </div>

                    {/* Mobile Phone */}
                    <div className="p-6 bg-sky-50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <Phone className="text-sky-600 mr-3" size={24} />
                            <h3 className="font-semibold text-lg">Phone</h3>
                        </div>
                        <a
                            href="tel:42 566 888"
                            className="text-gray-600 hover:text-sky-600 transition-colors flex items-center"

                        >
                            <span className="border-b border-dashed border-gray-400 hover:border-sky-600">
                                42 566 888
                            </span>
                        </a>
                    </div>

                    {/* Email */}
                    <div className="p-6 bg-sky-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Mail className="text-sky-600 mr-3" size={24} />
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
              <a 
                href="mailto:a1customcaravanrepairs@gmail.com" 
                className="text-gray-600 hover:text-sky-600 transition-colors group"
                aria-label="Send us an email"
              >
                <span className="border-b border-dashed border-gray-400 group-hover:border-sky-600">
                a1customcaravanrepairs@gmail.com
                </span>
              </a>
            </div>

            {/* Location with clickable address */}
            <div className="p-6 bg-sky-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="text-sky-600 mr-3" size={24} />
                <h3 className="font-semibold text-lg">Location</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-600 transition-colors block group"
                  aria-label="Open our location in Maps"
                >
                  <span className="border-b border-dashed border-gray-400 group-hover:border-sky-600">
                    141A Industrial Road
                  </span>
                </a>
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-600 transition-colors block group"
                  aria-label="Open our location in Maps"
                >
                  <span className="border-b border-dashed border-gray-400 group-hover:border-sky-600">
                    Oak Flats, New South Wales, 2529
                  </span>
                </a>
                <div className="text-sm text-sky-600 mt-2">
                  Tap address to open in Maps
                </div>
              </div>
            </div>

                    {/* Business Hours */}
                    <div className="p-6 bg-sky-50 rounded-lg hover:shadow-md transition-shadow md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Clock className="text-sky-600 mr-3" size={24} />
                            <h3 className="font-semibold text-lg">Business Hours</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-gray-600">
                            <div>Monday - Thursday</div>
                            <div>7:30 AM - 4:00 PM</div>
                            <div>Friday</div>
                            <div>7:30 AM - 2:00 PM</div>
                            <div>Saturday-Sunday</div>
                            <div>Closed</div>
                        </div>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6194.560480992976!2d150.8058006!3d-34.5658905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1312fbb2956d13%3A0x9cd81bfac3ff7d6a!2s141A%20Industrial%20Rd%2C%20Oak%20Flats%20NSW%202529%2C%20Australia!5e1!3m2!1sen!2sus!4v1729697888463!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="A1 Custom Caravan Repairs Location"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>

                {/* Directions Note */}
                <div className="mt-6 text-center text-gray-600">
                    <p className="mt-2 text-sm">Note: If you're bringing in a caravan, please call ahead for access instructions.</p>
                </div>
            </div>
        </div>
    </div>
  
);
}
export default Contact;


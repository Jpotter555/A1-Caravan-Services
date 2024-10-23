import React from 'react';
import { ChevronRight } from 'lucide-react';
import serviceImage from '../images/services/services.webp';
import panelReplacement from '../images/services/Panel-Replacements.webp';
import awning from '../images/services/Awnings.webp';
import solar from '../images/services/Solar.webp';
import insuranceWork from '../images/services/Insurance-Work.webp';
import refrigeration from '../images/services/Refrigeration.webp';
import resealing from '../images/services/Resealing.webp';
import plumbing from '../images/services/Plumbing.webp';
import chassis from '../images/services/Chassis.webp';

const Services = () => {
    const services = [
      {
        title: 'Services',
        description: 'We service single and dual axel caravans. Through to your gas appliances and all electrical appliances (fridges, air-conditioning, gas stoves and cook-tops).',
        image: serviceImage
      },
      {
        title: 'Panel Replacements',
        description: 'Unlike other work shops we can replace all aluminium panels along with repairs to your fibreglass and composite panels.',
        image: panelReplacement
      },
      {
        title: 'Awnings',
        description: 'We can repair, replace and alter your caravans awnings. We provide awnings from distributors Dometic, Carefree, Fiamma and Aussie Traveller.',
        image: awning
      },
      {
        title: 'Solar',
        description: 'We install solar systems to a wide range of caravans & RV motor-homes. These solar systems will keep you powered at all times no matter where you are.',
        image: solar
      },
      {
        title: 'Insurance Work',
        description: 'We do insurance work with all the major insurance companies such as: CIL, NRMA, GIO, AAI Limited, ect',
        image: insuranceWork
      },
      {
        title: 'Refrigeration/AC',
        description: 'We can service, repair & upgrade your fridge & air-conditioning. We provide these services on Dometic & Thetford fridges. We also carry a wide range of air-conditioners from Dometic, Air Command & Houghton.',
        image: refrigeration
      },
      {
        title: 'Resealing',
        description: 'People tend to neglect that your caravan needs resealing every 5-8 years! We can provide resealing to all caravans/motorhomes to prevent leaking issues.',
        image: resealing
      },
      {
        title: 'Plumbing/Gas',
        description: 'As part of our services, we can also provide maintenance & repairs on your hot water systems, stove/cook-tops & pretty much any other appliance in your caravans.',
        image: plumbing
      },
      {
        title: 'Chassis Repairs & Alterations',
        description: 'As we are qualified tradesmen we can provide a range of chassis repairs & alterations, through to GVM upgrades & custom toolboxes.',
        image: chassis
      }
    ];
  
    return (
      <div id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-sky-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Services;
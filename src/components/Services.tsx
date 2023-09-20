import React from 'react';
import { Button } from './Button';
import { LinkButton } from './LinkButton';

const services = [
  {
    imgUrl: '/assets/home/man-cleaning-wall.png',
    title: 'Janitorial/General Cleaning service',
    text: 'At Trevone Nigeria, we provide comprehensive Janitorial and General Cleaning services to keep your facility clean, organized, and hygienic.'
  },
  {
    imgUrl: '/assets/home/lady-cleaning-mat.png',
    title: 'Carpet & Upholstery Cleaning',
    text: 'We also offer professional Carpet & Upholstery Cleaning. Our experienced technicians use state-of-the-art equipment and cleaning solutions to remove dirt, stains, and allergens from your carpets and upholstery, leaving them looking and feeling refreshed.'
  },
  {
    imgUrl: '/assets/home/lady-cleaning-floor.png',
    title: 'Industrial Cleaning',
    text: 'Our team of experienced professionals uses the latest tools and techniques to provide comprehensive Industrial Cleaning services that meet the highest standards of safety and quality.'
  },
  {
    imgUrl: '/assets/home/lady-cleaning-floor-2.png',
    title: 'Floor restoration & Cleaning',
    text: 'Our team of experienced professionals uses the latest tools and techniques to provide comprehensive Industrial Cleaning services that meet the highest standards of safety and quality.'
  }
];

export const Services = () => {
  return (
    <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <div
          key={service.title}
          style={{ backgroundImage: `url(${service.imgUrl})` }}
          className="relative h-[448px] flex-1 rounded-3xl bg-cover text-white"
        >
          <div className="group absolute inset-0 rounded-3xl bg-[#544b4b] bg-opacity-40 transition duration-1000 ease-in-out hover:backdrop-blur-sm">
            <div className="relative z-10 flex h-full flex-col justify-end rounded-full px-6 pb-7 font-open-sans">
              <p className="text-base font-light group-hover:hidden">Cleaning | On Demand</p>
              <h2 className="text-2xl font-bold group-hover:hidden">{service.title}</h2>
              <div className="max-h-0 opacity-0 transition duration-1000 ease-in group-hover:max-h-full group-hover:opacity-100">
                <h2 className="hidden pb-2 font-bold group-hover:block group-hover:text-lg">
                  {service.title}
                </h2>
                <p className="hidden font-light tracking-wide group-hover:block">{service.text}</p>
                <LinkButton
                  href=""
                  variant="outline"
                  className="mb-3 mt-4 hidden w-fit text-white group-hover:block"
                >
                  Read more
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

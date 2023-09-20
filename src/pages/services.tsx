import React from 'react';

import { FAQ, Service } from '~/components';

const SERVICES = [
  {
    imgUrl: '/assets/services/janitorial-cleaning.png',
    title: 'Janitorial/General Cleaning service',
    description: (
      <>
        <p>
          At Trevone Nigeria, we provide comprehensive Janitorial and General Cleaning services to
          keep your facility clean, organized, and hygienic. Our general cleaning services cover a
          wide range of cleaning tasks, including dusting, vacuuming, mopping, and sanitizing
          surfaces. Our team is trained to clean your space thoroughly and efficiently, leaving it
          looking and smelling fresh.
        </p>
        <p className="mt-2">
          Our team of experienced professionals uses the latest tools and techniques to deliver
          top-quality results, ensuring a healthy and safe environment for your employees and
          customers. Whether you need regular cleaning services or a one-time deep clean, we are
          here to help you maintain a spotless and well-maintained facility.
        </p>
      </>
    ),
    id: 'janitorial'
  },
  {
    imgUrl: '/assets/services/carpet-cleaning.png',
    title: 'Carpet & Upholstery Cleaning',
    description: (
      <>
        In addition to our Janitorial and General Cleaning services, Trevone also offers
        professional Carpet & Upholstery Cleaning. Our experienced technicians use state-of-the-art
        equipment and cleaning solutions to remove dirt, stains, and allergens from your carpets and
        upholstery, leaving them looking and feeling refreshed. Whether you need to clean a single
        room or your entire facility, we are here to help you keep your carpets and upholstery
        looking their best.
      </>
    ),
    id: 'carpet'
  },
  {
    imgUrl: '/assets/services/industrial-cleaning.png',
    title: 'Industrial Cleaning',
    description: (
      <>
        At Trevone Nigeria, we provide comprehensive Janitorial and General Cleaning services to At
        Trevone, we understand the unique challenges of industrial cleaning and are equipped to
        handle even the toughest cleaning jobs. Our team of experienced professionals uses the
        latest tools and techniques to provide comprehensive Industrial Cleaning services that meet
        the highest standards of safety and quality. From warehouse floors to heavy machinery, we
        are here to help you maintain a clean, organized, and safe industrial environment.
      </>
    ),
    id: 'industrial'
  },
  {
    imgUrl: '/assets/services/floor-cleaning.png',
    title: 'Floor restoration & Cleaning',
    description: (
      <>
        At Trevone, we offer comprehensive floor restoration and cleaning services. Our services
        include repairing and restoring worn or damaged floors, and keeping them looking and feeling
        clean. Our team uses the latest equipment and techniques to ensure your floors are
        well-maintained and protected. Contact us today to learn more about our floor services.
      </>
    ),
    id: 'floor'
  },
  {
    imgUrl: '/assets/services/pest-control.png',
    title: 'Fumigation & Pest Control',
    description: (
      <>
        At Trevone, we also provide effective and efficient fumigation and pest control services.
        Our services include removing pests and preventing future infestations in residential and
        commercial spaces. Our team uses environmentally friendly and safe methods to ensure your
        space is free of pests. Contact us today to learn more about our fumigation and pest control
        services.
      </>
    ),
    id: 'fumigation'
  }
];

const Index = () => {
  return (
    <>
      <section className="bg-hero-services bg-cover bg-no-repeat py-8 text-white sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1
              style={{ backdropFilter: 'blur(4px)' }}
              className="rounded-full border border-white bg-primary-300/40 px-6 py-3 text-3xl font-bold sm:text-4xl"
            >
              Our Services
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-6">
        <div className="space-y-8sm:my-8 container mx-auto md:my-16 md:space-y-6">
          {SERVICES.map((service, index) => (
            <Service
              number={'0' + (index + 1)}
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.imgUrl}
              isTextRight={index % 2 === 0}
              id={service.id}
            />
          ))}
        </div>
      </section>

      <FAQ bgColor="#E4F2F6" />
    </>
  );
};

export default Index;

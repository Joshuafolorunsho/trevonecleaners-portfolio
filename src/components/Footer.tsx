import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LinkButton } from './LinkButton';

export const Footer = () => {
  const aboutLinks = [
    {
      title: 'About Us',
      href: '/about'
    },
    {
      title: 'Our Team',
      href: '/about/#team'
    },
    {
      title: 'Our Services',
      href: '/services'
    },
    {
      title: 'Testimonials',
      href: '/#testimonials'
    },
    {
      title: 'Contact Us',
      href: '/contact'
    }
  ];
  const servicesLinks = [
    {
      title: 'Janitorial / General Cleaning',
      href: '/services/#janitorial'
    },
    {
      title: 'Carpet & Upholstery Cleaning',
      href: '/services/#carpet'
    },
    {
      title: 'Industrial Cleaning',
      href: '/services/#industrial'
    },
    {
      title: 'Floor Restoration & Cleaning',
      href: '/services/#floor'
    },
    {
      title: 'Fumigation & Pest Control',
      href: '/services/#fumigation'
    }
  ];

  const socialLinks = [
    {
      icon: '/assets/icons/facebook.svg',
      title: 'Facebook',
      href: '#'
    },
    {
      icon: '/assets/icons/twitter.svg',
      title: 'Twitter',
      href: '#'
    },
    {
      icon: '/assets/icons/instagram.svg',
      title: 'Instagram',
      href: '#'
    }
  ];
  return (
    <footer className="border-t border-t-gray-750 bg-white pb-6 pt-12">
      <div className="container mx-auto">
        <div className="justify-between text-center sm:grid sm:grid-cols-3 sm:text-left lg:grid-cols-5">
          <div className="mb-4 grid justify-center sm:justify-start">
            <Image src="/assets/logo.png" width={164} height={64} alt="trevone logo" />
          </div>
          <div className="col-span-2 grid gap-y-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-6">
            <div className="order-2 sm:order-1">
              <h3 className="text-xl font-bold">About</h3>
              <ul className="mt-4 space-y-3">
                {aboutLinks.map(({ href, title }, index) => (
                  <li className="py-1 text-lg" key={index}>
                    <Link href={href} className="text-gray-850 hover:text-gray-900">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-3 sm:order-2 lg:col-span-2">
              <h3 className="text-xl font-bold">Services</h3>
              <ul className="mt-4 space-y-3">
                {servicesLinks.map(({ href, title }, index) => (
                  <li className="py-1 text-lg" key={index}>
                    <Link href={href} className="text-gray-850 hover:text-gray-900">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-4 sm:order-3 lg:ml-2">
              <h3 className="text-xl font-bold">Help</h3>
              <ul className="mt-4 space-y-3">
                <li className="py-1 text-lg">
                  <Link href="/#faq" className="text-gray-850 hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li className="py-1 text-lg">
                  <Link href="/contact" className="text-gray-850 hover:text-gray-900">
                    Get in Touch
                  </Link>
                </li>
              </ul>
              <ul className="mt-3 flex items-center justify-center space-x-3 sm:justify-start">
                {socialLinks.map(({ href, title, icon }, index) => (
                  <li className="py-1 text-lg" key={index}>
                    <Link href={href} title={title}>
                      <Image src={icon} width={28} height={28} alt={title} />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="pb-1 pt-2 font-open-sans font-semibold text-gray-850 hover:text-gray-900">
                @trevonenigeria
              </p>
            </div>
            <div className="order-1 sm:order-4 lg:col-span-2 lg:pl-8">
              <h3 className="text-xl font-bold">Make your booking</h3>
              <p className="mt-4 text-lg text-gray-850">
                We have a dedicated team of specialists for you.
              </p>
              <LinkButton
                href="/book"
                className="mt-6 w-full max-w-md px-6 text-center text-lg hover:bg-primary-300"
              >
                Book Cleaning
              </LinkButton>
              <p className="mt-5 flex items-center justify-center space-x-2 font-open-sans text-lg sm:justify-start lg:mt-12">
                <span>Call Us:</span>
                <Image src="/assets/icons/phone.svg" width={24} height={24} alt="phone" />
                <a
                  href="tel:+2348161165391"
                  className="font-bold text-gray-850 hover:text-gray-900"
                >
                  +234 816 116 5391
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 lg:my-8" />
        <p className=" text-center font-open-sans text-lg text-gray-850">
          <span> &copy; 2023 Trevone Nigeria. All rights reserved</span>
        </p>
      </div>
    </footer>
  );
};

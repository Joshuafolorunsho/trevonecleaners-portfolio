import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { Title } from '.';

const faqs = [
  {
    title: 'What is your refund policy?',
    description:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
  },
  {
    title: 'Do you have experience cleaning commercial spaces?',
    description: 'Yes, we have experience cleaning commercial spaces.'
  },
  {
    title: 'What is your availability?',
    description: 'We are available 7 days a week.'
  },
  {
    title: 'Do you use environmentally friendly cleaning products?',
    description: 'Yes, we use environmentally friendly cleaning products.'
  },
  {
    title: 'Do you provide your own cleaning supplies?',
    description: 'Yes, we provide our own cleaning supplies.'
  },
  {
    title: 'Are your cleaning services affordable?',
    description: 'Yes, our cleaning services are affordable.'
  }
];

interface FAQProps {
  bgColor?: string;
}

export const FAQ: React.FC<FAQProps> = ({ bgColor = '' }) => {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="sm:pb-15 bg-gray-50 pb-10 pt-16"
      id="faq"
    >
      <div className="container mx-auto">
        <Title subTitle="we believe in providing top-quality cleaning services that meet the needs of our clients.">
          Our goal is to assist you in finding a trustworthy cleaner. Check out these frequently
          asked questions.
        </Title>
      </div>
      <div className="container mx-auto my-6">
        <div className="mx-auto w-full max-w-4xl space-y-4 rounded-2xl">
          {faqs.map((faq) => (
            <Disclosure key={faq.title}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-gray-950 hover:bg-primary-300 hover:bg-opacity-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <h3 className="text-lg">{faq.title}</h3>
                    <div className={clsx('transform', open ? 'rotate-180' : '')}>
                      {open ? (
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.5257 30.515C35.2095 30.8383 34.8351 31 34.4025 31C33.9708 31 33.5968 30.8383 33.2806 30.515L24.0158 21.0416L14.7194 30.5473C14.4242 30.8491 14.0553 31 13.6126 31C13.17 31 12.7905 30.8383 12.4743 30.515C12.1581 30.1917 12 29.8089 12 29.3666C12 28.9251 12.1581 28.5427 12.4743 28.2194L23.1304 17.3557C23.2569 17.2263 23.3939 17.1345 23.5415 17.0802C23.6891 17.0267 23.8472 17 24.0158 17C24.1845 17 24.3426 17.0267 24.4901 17.0802C24.6377 17.1345 24.7747 17.2263 24.9012 17.3557L35.5573 28.2517C35.8524 28.5535 36 28.9251 36 29.3666C36 29.8089 35.8419 30.1917 35.5257 30.515Z"
                            fill="#21535F"
                          />
                          <rect
                            x="1"
                            y="47"
                            width="46"
                            height="46"
                            rx="23"
                            transform="rotate(-90 1 47)"
                            stroke="#21535F"
                            strokeWidth="2"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.5257 30.515C35.2095 30.8383 34.8351 31 34.4025 31C33.9708 31 33.5968 30.8383 33.2806 30.515L24.0158 21.0416L14.7194 30.5473C14.4242 30.8491 14.0553 31 13.6126 31C13.17 31 12.7905 30.8383 12.4743 30.515C12.1581 30.1917 12 29.8089 12 29.3666C12 28.9251 12.1581 28.5427 12.4743 28.2194L23.1304 17.3557C23.2569 17.2263 23.3939 17.1345 23.5415 17.0802C23.6891 17.0267 23.8472 17 24.0158 17C24.1845 17 24.3426 17.0267 24.4901 17.0802C24.6377 17.1345 24.7747 17.2263 24.9012 17.3557L35.5573 28.2517C35.8524 28.5535 36 28.9251 36 29.3666C36 29.8089 35.8419 30.1917 35.5257 30.515Z"
                            fill="#21535F"
                          />
                          <rect
                            x="1"
                            y="47"
                            width="46"
                            height="46"
                            rx="23"
                            transform="rotate(-90 1 47)"
                            stroke="#21535F"
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-t bg-white px-4 pb-2 pt-4 text-sm text-gray-500">
                    {faq.description}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap items-center justify-center text-xl sml:space-x-3 sml:text-2xl">
        <span className="py-1 text-gray-950">Have a question?</span>
        <Link className="py-1 pl-3 text-blue-750 underline" href="/contact">
          Reach out to us &nbsp; {'>'}
        </Link>
      </div>
    </section>
  );
};

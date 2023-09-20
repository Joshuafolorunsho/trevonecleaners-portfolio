import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';
import clsx from 'clsx';

import { Button, LinkButton } from '.';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-primary-300 transition ease transform duration-300`;

  const router = useRouter();

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <header className="container mx-auto">
      <div className=" flex h-24 items-center justify-between py-3">
        <a href="/">
          <img
            className="-ml-3 h-[64px] w-[164px] lg:ml-0"
            src="/assets/logo.png"
            alt="trevone logo"
          />
        </a>

        <button
          className="group flex h-12 w-12 flex-col items-center justify-center lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          />
        </button>

        <ul className="hidden items-center space-x-6 font-semibold text-gray-850 lg:flex">
          {navItems.map((item) => {
            const isActive = item.href === router.pathname;
            return (
              <li key={item.name}>
                <Link className={clsx('', isActive && 'text-primary-100')} href={item.href}>
                  {item.name}
                </Link>
              </li>
            );
          })}
          <LinkButton href="/book">Book Us Now</LinkButton>
          <Button variant="outline" className="block lg:inline-block">
            <a href='tel:+2348161165391' className="flex items-center space-x-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8628 4.43011L17.1767 2.85843C17.0915 2.66525 16.9675 2.4944 16.8136 2.35798C16.6597 2.22155 16.4795 2.1229 16.2858 2.06899C14.106 1.43551 11.6056 1.04799 9.02756 1C6.48673 1.04207 3.96049 1.41844 1.50609 2.12058C1.3205 2.17816 0.996563 2.46851 0.825595 2.85123L0.136099 4.43131C0.0475929 4.62576 0.00145084 4.83904 0.00112479 5.05519V6.09898L0 6.14817C0 6.61848 0.357683 7 0.7986 7L0.835718 6.9988H3.66794C3.89113 6.99316 4.10339 6.89461 4.25935 6.72422C4.41531 6.55383 4.50259 6.32512 4.50253 6.08698L4.50028 6.0234V5.0036C4.50036 4.87323 4.53109 4.74496 4.58964 4.63052C4.6482 4.51608 4.73272 4.41913 4.83547 4.34853C6.12091 3.62026 7.57219 3.29145 9.02418 3.39952C10.473 3.29527 11.9205 3.62258 13.205 4.34493C13.3659 4.46371 13.4997 4.70486 13.4997 4.9796V6.02579C13.4921 6.14839 13.5078 6.27137 13.5459 6.38733C13.5839 6.5033 13.6435 6.60987 13.7212 6.70063C13.7988 6.7914 13.8929 6.86449 13.9976 6.91553C14.1024 6.96656 14.2158 6.99447 14.3309 6.9976H17.1665L17.2014 6.9988C17.4132 6.9988 17.6163 6.90905 17.7661 6.74931C17.9159 6.58956 18 6.37289 18 6.14697L17.9989 6.09538V5.05399C17.9982 4.83478 17.9509 4.6186 17.8605 4.42172L17.8628 4.43011Z"
                  fill="#4EABC2"
                />
                <path
                  d="M13.5714 9.63C12.8276 8.71259 12.4248 7.58167 12.4274 6.418L12.4286 6.3256V6H11.2857V7.1H6.71429V6H5.57143V6.363L5.57257 6.451C5.57422 7.61934 5.16812 8.75436 4.41943 9.674L1 13.7V17H17V13.7L13.5714 9.63ZM9 14.8C8.09069 14.8 7.21862 14.4523 6.57563 13.8335C5.93265 13.2146 5.57143 12.3752 5.57143 11.5C5.57143 10.6248 5.93265 9.78542 6.57563 9.16655C7.21862 8.54768 8.09069 8.2 9 8.2C9.90931 8.2 10.7814 8.54768 11.4244 9.16655C12.0673 9.78542 12.4286 10.6248 12.4286 11.5C12.4286 12.3752 12.0673 13.2146 11.4244 13.8335C10.7814 14.4523 9.90931 14.8 9 14.8Z"
                  fill="#4EABC2"
                />
                <path
                  d="M11.9994 11.4435C12.0069 11.7764 11.9478 12.1075 11.8256 12.4173C11.7035 12.727 11.5206 13.0093 11.2879 13.2474C11.0551 13.4856 10.7771 13.6748 10.4702 13.8041C10.1633 13.9333 9.83363 13.9999 9.50062 14C9.16762 14.0001 8.83795 13.9336 8.53097 13.8046C8.224 13.6755 7.9459 13.4864 7.71302 13.2483C7.48013 13.0103 7.29715 12.7281 7.17481 12.4184C7.05248 12.1087 6.99325 11.7777 7.00061 11.4447C7.01506 10.7915 7.28464 10.1699 7.75166 9.71302C8.21868 9.2561 8.84601 9.00016 9.49938 9C10.1527 8.99984 10.7802 9.25546 11.2474 9.71214C11.7147 10.1688 11.9846 10.7903 11.9994 11.4435Z"
                  fill="#4EABC2"
                />
              </svg>

              <span>+234 816 116 5391</span>
            </a>
          </Button>
        </ul>
      </div>
      <ul
        className={clsx(
          'text-gray-85 my-4 items-center space-y-5 font-semibold',
          isOpen ? 'block' : 'hidden'
        )}
      >
        {navItems.map((item, idx) => {
          const isActive = item.href === router.pathname;
          return (
            <li key={idx} onClick={() => setIsOpen((prev) => (prev = false))}>
              <Link className={clsx('', isActive && 'text-primary-100')} href={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
        <LinkButton href="/book" onClick={() => setIsOpen((prev) => (prev = false))}>
          Book Us Now
        </LinkButton>
        <Button
          variant="outline"
          className="block lg:inline-block"
          onClick={() => setIsOpen((prev) => (prev = false))}
        >
          <div className="flex items-center space-x-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8628 4.43011L17.1767 2.85843C17.0915 2.66525 16.9675 2.4944 16.8136 2.35798C16.6597 2.22155 16.4795 2.1229 16.2858 2.06899C14.106 1.43551 11.6056 1.04799 9.02756 1C6.48673 1.04207 3.96049 1.41844 1.50609 2.12058C1.3205 2.17816 0.996563 2.46851 0.825595 2.85123L0.136099 4.43131C0.0475929 4.62576 0.00145084 4.83904 0.00112479 5.05519V6.09898L0 6.14817C0 6.61848 0.357683 7 0.7986 7L0.835718 6.9988H3.66794C3.89113 6.99316 4.10339 6.89461 4.25935 6.72422C4.41531 6.55383 4.50259 6.32512 4.50253 6.08698L4.50028 6.0234V5.0036C4.50036 4.87323 4.53109 4.74496 4.58964 4.63052C4.6482 4.51608 4.73272 4.41913 4.83547 4.34853C6.12091 3.62026 7.57219 3.29145 9.02418 3.39952C10.473 3.29527 11.9205 3.62258 13.205 4.34493C13.3659 4.46371 13.4997 4.70486 13.4997 4.9796V6.02579C13.4921 6.14839 13.5078 6.27137 13.5459 6.38733C13.5839 6.5033 13.6435 6.60987 13.7212 6.70063C13.7988 6.7914 13.8929 6.86449 13.9976 6.91553C14.1024 6.96656 14.2158 6.99447 14.3309 6.9976H17.1665L17.2014 6.9988C17.4132 6.9988 17.6163 6.90905 17.7661 6.74931C17.9159 6.58956 18 6.37289 18 6.14697L17.9989 6.09538V5.05399C17.9982 4.83478 17.9509 4.6186 17.8605 4.42172L17.8628 4.43011Z"
                fill="#4EABC2"
              />
              <path
                d="M13.5714 9.63C12.8276 8.71259 12.4248 7.58167 12.4274 6.418L12.4286 6.3256V6H11.2857V7.1H6.71429V6H5.57143V6.363L5.57257 6.451C5.57422 7.61934 5.16812 8.75436 4.41943 9.674L1 13.7V17H17V13.7L13.5714 9.63ZM9 14.8C8.09069 14.8 7.21862 14.4523 6.57563 13.8335C5.93265 13.2146 5.57143 12.3752 5.57143 11.5C5.57143 10.6248 5.93265 9.78542 6.57563 9.16655C7.21862 8.54768 8.09069 8.2 9 8.2C9.90931 8.2 10.7814 8.54768 11.4244 9.16655C12.0673 9.78542 12.4286 10.6248 12.4286 11.5C12.4286 12.3752 12.0673 13.2146 11.4244 13.8335C10.7814 14.4523 9.90931 14.8 9 14.8Z"
                fill="#4EABC2"
              />
              <path
                d="M11.9994 11.4435C12.0069 11.7764 11.9478 12.1075 11.8256 12.4173C11.7035 12.727 11.5206 13.0093 11.2879 13.2474C11.0551 13.4856 10.7771 13.6748 10.4702 13.8041C10.1633 13.9333 9.83363 13.9999 9.50062 14C9.16762 14.0001 8.83795 13.9336 8.53097 13.8046C8.224 13.6755 7.9459 13.4864 7.71302 13.2483C7.48013 13.0103 7.29715 12.7281 7.17481 12.4184C7.05248 12.1087 6.99325 11.7777 7.00061 11.4447C7.01506 10.7915 7.28464 10.1699 7.75166 9.71302C8.21868 9.2561 8.84601 9.00016 9.49938 9C10.1527 8.99984 10.7802 9.25546 11.2474 9.71214C11.7147 10.1688 11.9846 10.7903 11.9994 11.4435Z"
                fill="#4EABC2"
              />
            </svg>

            <span>+234 816 116 5391</span>
          </div>
        </Button>
      </ul>
    </header>
  );
};

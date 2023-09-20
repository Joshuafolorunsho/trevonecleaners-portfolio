import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Grid } from 'swiper';
import clsx from 'clsx';

export const Team = () => {
  const [activeIndex, setActiveIndex] = useState<Number>();

  const teams = [
    {
      name: 'Samson Obadina',
      position: 'CEO',
      image: '/assets/about/samson-obadina.jpg',
      twitterUrl:
        'https://twitter.com/Sam_Olaolu/status/1490989984362668032?t=eNlv2eqG8uUW-40X_6xZhA&s=19',
      facebookUrl: 'https://www.facebook.com/samson.obadina?mibextid=ZbWKwL',
      instagramUrl: 'http://Instagram.com/poetsam1'
    },
    {
      name: 'Abiola Olaoluwa',
      position: 'HSE Manager',
      image: '/assets/about/abiola-olaoluwa.jpg',
      twitterUrl: '#',
      facebookUrl: 'https://www.facebook.com/joseph.abiola.7?mibextid=ZbWKwL',
      instagramUrl: 'https://instagram.com/josephabiola2014?igshid=NTc4MTIwNjQ2YQ=='
    }
  ];

  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Grid]}
        slidesPerView={1}
        grid={{
          rows: 1
        }}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          480: {
            slidesPerView: 2
          },

          768: {
            slidesPerView: 3
          },

          1200: {
            slidesPerView: 4
          }
        }}
        className={clsx('mt-6 w-auto', activeIndex === teams.length - 1 ? 'pr-0' : 'pr-16 lg:pr-0')}
      >
        {teams.map(({ name, position, image, twitterUrl, facebookUrl, instagramUrl }) => (
          <SwiperSlide key={name}>
            <div className="relative h-[360px] w-[360px]">
              <Image src={image} alt={name} className="object-cover" fill />
            </div>
            <h3 className="mt-4 font-bold text-primary-300">{name}</h3>
            <p className="my-2 text-gray-750">{position}</p>
            <ul className="flex items-center space-x-2">
              {twitterUrl !== '#' && (
                <li>
                  <a href={twitterUrl}>
                    <Image src="/assets/icons/twitter.svg" width={28} height={28} alt="twitter" />
                  </a>
                </li>
              )}
              <li>
                <a href={facebookUrl}>
                  <Image src="/assets/icons/facebook.svg" width={28} height={28} alt="facebook" />
                </a>
              </li>
              <li>
                <a href={instagramUrl}>
                  <Image src="/assets/icons/instagram.svg" width={28} height={28} alt="instagram" />
                </a>
              </li>
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

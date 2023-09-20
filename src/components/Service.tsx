import React from 'react';

import { LinkButton } from '.';
import clsx from 'clsx';

interface ServiceProps {
  number: string;
  title: string;
  description: React.ReactNode;
  image: string;
  isTextRight?: boolean;
  id: string;
}

export const Service: React.FC<ServiceProps> = ({
  number,
  title,
  description,
  image,
  isTextRight,
  id
}) => {
  return (
    <section className="flex flex-col gap-8 md:flex-row md:gap-12 md:pb-12 xl:items-center" id={id}>
      <div className={clsx('order-1 flex-1', !isTextRight ? 'md:order-2' : 'md:order-none')}>
        <h2 className="font-outline-2 font-lato text-[80px] font-bold text-white">{number}</h2>
        <h3 className="font-lato text-4xl font-bold text-gray-950">{title}</h3>
        <div className="my-6">{description}</div>
        <LinkButton href="/book" variant="outline">
          Book now
        </LinkButton>
      </div>
      <div className={clsx('order-2 flex-1', !isTextRight ? 'md:order-1' : 'md:order-none')}>
        <img
          className="mx-auto h-full w-full rounded-3xl object-cover object-center xl:h-auto"
          src={image}
          alt=""
        />
      </div>
    </section>
  );
};

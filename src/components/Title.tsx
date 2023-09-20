import React from 'react';
import clsx from 'clsx';

interface TitleProps {
  classes?: string;
  subTitle?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ classes, subTitle, children }) => {
  return (
    <div className={clsx('mx-auto max-w-4xl text-center text-gray-950', classes)}>
      <h3 className="font-lato text-3xl font-semibold leading-[40px] sm:text-4xl sm:leading-[50px]">
        {children}
      </h3>
      {subTitle && <p className="mt-3 font-open-sans">{subTitle}</p>}
    </div>
  );
};

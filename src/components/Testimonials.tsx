import React from 'react';
// import { LinkButton } from './LinkButton';
import clsx from 'clsx';

const testimonials = [
  {
    name: 'Joseph Emmanuel',
    imgUrl: '/assets/joseph-emmanuel.png',
    message:
      "I recently hired Trevone for a deep clean of my home and I was blown away by the results. The team was friendly, efficient, and did an amazing job. I will definitely be using Trevone's services again in the future.",
    company: 'CEO, Jemmy & Co.'
  },
  {
    name: 'Sarah Afolayan',
    imgUrl: '/assets/obadina-samuel.png',
    message:
      "Trevone's team has been cleaning our office for the past few months and I must say, the difference is night and day. The office is always spotless and the team is always on time and professional. I would highly recommend Trevone.",
    company: 'CEO Of Childcare.'
  },
  {
    name: 'Jenny Jackson',
    imgUrl: '/assets/sarah-afolayan.png',
    message:
      "I have been using Trevone's cleaning services for several years now and I couldn't be happier. The team is always professional, friendly, and does a fantastic job. I highly recommend Trevone to anyone looking for cleaning services.",
    company: 'Manager at Fan Milk PLC'
  }
];

export const Testimonials = () => {
  return (
    <>
      <section className="mb-10 mt-12 grid justify-center gap-5 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <div
            key={testimonial.name}
            className={clsx(
              'ease rounded-2xl border border-transparent bg-white px-8 py-5 text-center font-open-sans leading-7 shadow-slate-400 transition duration-[1s] last:col-span-2 hover:border-gray-400 hover:shadow-md sm:block md:last:col-span-1',
              idx ? 'hidden' : 'block'
            )}
          >
            <svg
              className="mx-auto my-6"
              width="69"
              height="67"
              viewBox="0 0 69 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.4955 66.526C5.9675 60.9727 3.58283 55.2233 2.3415 49.278C1.10017 43.2673 1.00217 37.3873 2.0475 31.638C3.15817 25.8233 5.34683 20.27 8.6135 14.978C11.9455 9.68599 16.4208 4.88399 22.0395 0.571992L31.6435 6.25599C32.4928 6.77866 33.0808 7.36666 33.4075 8.01999C33.7342 8.67332 33.8648 9.35932 33.7995 10.078C33.7995 10.7313 33.6362 11.3847 33.3095 12.038C33.0482 12.626 32.6888 13.1487 32.2315 13.606C31.1208 14.782 29.9122 16.6113 28.6055 19.094C27.3642 21.5113 26.4495 24.3533 25.8615 27.62C25.2735 30.8867 25.2408 34.48 25.7635 38.4C26.3515 42.2547 27.9522 46.24 30.5655 50.356C32.0028 52.6427 32.3622 54.6027 31.6435 56.236C30.9902 57.8693 29.6835 59.0453 27.7235 59.764L9.4955 66.526ZM44.5795 66.526C41.0515 60.9727 38.6668 55.2233 37.4255 49.278C36.1842 43.2673 36.0862 37.3873 37.1315 31.638C38.2422 25.8233 40.4308 20.27 43.6975 14.978C47.0295 9.68599 51.5048 4.88399 57.1235 0.571992L66.7275 6.25599C67.5768 6.77866 68.1648 7.36666 68.4915 8.01999C68.8182 8.67332 68.9488 9.35932 68.8835 10.078C68.8835 10.7313 68.7202 11.3847 68.3935 12.038C68.1322 12.626 67.7728 13.1487 67.3155 13.606C66.2048 14.782 64.9962 16.6113 63.6895 19.094C62.4482 21.5113 61.5335 24.3533 60.9455 27.62C60.3575 30.8867 60.3248 34.48 60.8475 38.4C61.4355 42.2547 63.0362 46.24 65.6495 50.356C67.0868 52.6427 67.4462 54.6027 66.7275 56.236C66.0742 57.8693 64.7675 59.0453 62.8075 59.764L44.5795 66.526Z"
                fill="#4EABC2"
              />
            </svg>

            <p className="font-semibold text-gray-950">{testimonial.message}</p>
            <div className="mx-auto my-2 h-24 w-24">
              <img src={testimonial.imgUrl} alt="" className="rounded-3xl" />
            </div>
            <h2 className="text-lg font-semibold">{testimonial.name}</h2>
            <p className="text-gray-750">{testimonial.company}</p>
          </div>
        ))}
      </section>
      {/* <div className="flex justify-center">
        <LinkButton href="/about" className="text-primary-300" variant="outline">
          View all Testimonials
        </LinkButton>
      </div> */}
    </>
  );
};

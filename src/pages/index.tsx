import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Button, FAQ, LinkButton, MeetTeamCard, Services, Testimonials, Title } from '~/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trevone Nigeria | Best Cleaning agency</title>
        <meta name="description" content="Best cleaning agency" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <>
        <section
          style={{ backgroundImage: "url('/assets/home-hero.png')" }}
          className="h-[calc(100vh-180px)] bg-cover bg-no-repeat text-white"
        >
          <div className="container mx-auto flex h-full flex-col items-center justify-center p-16 px-5 text-center sm:max-w-3xl sm:px-10 md:px-0">
            <h1 className="font-lato text-2xl sml:text-4xl sml:leading-[3rem] sm:font-black md:text-5xl md:leading-[4rem]">
              Making Your <span className="text-primary-100">Space</span> Spotless with Expert
              Cleaning Solutions.
            </h1>
            <p className="my-5 font-open-sans font-light">
              At Trevone, we believe that a clean space is a happy space. That's why we offer a wide
              range of cleaning services to help keep your home or office looking its best.
            </p>
            <div className="sml:flex sml:space-x-5">
              <LinkButton href="/book" className="mb-4 xm:w-full sml:mb-0">
                Book us online now
              </LinkButton>
              <LinkButton href="/about" className="text-white xm:w-full sm:w-max" variant="outline">
                Learn more about us
              </LinkButton>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-10 sm:py-16">
          <div className="container mx-auto pt-5">
            <Title subTitle="Benefit from our top-notch cleaning services that leaves you satisfied.">
              Experience complete satisfaction with our exceptional cleaning services.
            </Title>
            <Services />
          </div>
        </section>

        <section className="bg-primary-200 py-10 sm:py-16" id="testimonials">
          <div className="container mx-auto">
            <Title subTitle="Testimonials">
              Endorsed by <span className="text-primary-300">clients</span> who are proud of the{' '}
              <span className="text-primary-300">quality</span> of Trevone services.
            </Title>
            <Testimonials />
          </div>
        </section>

        <FAQ />
        <MeetTeamCard />
      </>
    </>
  );
};

export default Home;

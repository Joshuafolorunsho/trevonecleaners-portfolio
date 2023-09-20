import React from 'react';

import { LinkButton } from '.';

export const MeetTeamCard = () => {
  return (
    <section className="bg-gray-50 pb-16">
      <div className="container mx-auto">
        <div className="rounded-3xl bg-primary-300 py-8 text-center text-primary-400">
          <h3 className="mx-auto max-w-[920px] p-3 font-lato text-3xl font-medium leading-[3rem] md:text-[40px]">
            Discover the Talented Individuals Bringing Excellence to Trevone Nigeria.
          </h3>
          <LinkButton className="mt-4 inline-block" href="/about/#team">
            Our Team
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

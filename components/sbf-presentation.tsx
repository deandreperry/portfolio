'use client';

import Image from 'next/image';
import { useState } from 'react';
import { VisualLightbox } from './case-study-tools';

const slides = [
  [
    'Helping SBF supporters buy with confidence',
    'Research findings and proposed decisions for the custom apparel store.',
  ],
  [
    'Meet P09',
    'An SBF event supporter used their phone to choose apparel, personalize it and review the order before payment.',
  ],
  [
    'Where P09 hesitated',
    'P09 found apparel and delivery information independently, but was unsure whether personalization had saved and hesitated when the total changed.',
  ],
  [
    'What is at stake',
    'Shoppers need to know what will arrive, when it will arrive and what they will pay.',
  ],
  [
    'Study protocol and participants',
    'Ten prior donors, five on mobile and five on desktop, attempted four shopping tasks in moderated think-aloud sessions that stopped before payment.',
  ],
  [
    'Independent task completion',
    'Of ten donors, eight found apparel, six personalized an item, five found delivery information and seven reviewed the order independently.',
  ],
  [
    'Delivery information',
    'Five donors did not find delivery information independently. The recommendation was to show production and shipping estimates on the product page.',
  ],
  [
    'Personalization confirmation',
    'Four donors did not personalize an item independently. The proposed change was immediate confirmation and a visible summary of the chosen name or number.',
  ],
  [
    'Final order review',
    'Three donors did not complete review independently. The recommendation was to show selections, costs and fulfillment details together.',
  ],
  [
    'Apparel categories',
    'Two donors did not find an item independently. A first-click task could test clearer labels and category placement.',
  ],
  [
    'Successful paths',
    'P03, P08 and P10 completed all four tasks independently using collections, filters and order details.',
  ],
  [
    'Recommended priorities',
    'Prioritize delivery details, saved personalization and order review. Category labels are a medium priority.',
  ],
  [
    'Proposed retest',
    'The target is nine independent completions out of ten for each task in a future round.',
  ],
  [
    'Decisions for SBF',
    'Agree on which changes to test, identify owners, check feasibility and schedule a review of the results.',
  ],
  [
    'Participant task outcomes',
    'The appendix lists the four task outcomes for each participant. The accessible task results section and downloadable study summary give the counts and criteria.',
  ],
] as const;

export function SbfPresentation() {
  const [index, setIndex] = useState(0);
  const [title, description] = slides[index];
  return (
    <section className="sbf-deck" aria-labelledby="briefing-deck-heading">
      <h3 id="briefing-deck-heading">Stakeholder presentation</h3>
      <figure className="sbf-evidence">
        <VisualLightbox title={title}>
          <Image
            src={
              '/projects/sbf/research/briefing-slides/' +
              String(index + 1).padStart(2, '0') +
              '.webp'
            }
            width={1600}
            height={900}
            alt={title}
            loading="lazy"
          />
        </VisualLightbox>
        <figcaption aria-live="polite" aria-atomic="true">
          <strong>
            Slide {index + 1} of {slides.length} · {title}
          </strong>
          <br />
          {description}
        </figcaption>
      </figure>
      <div className="sbf-deck-controls">
        <button
          type="button"
          className="button button-secondary"
          disabled={!index}
          onClick={() => setIndex((i) => i - 1)}
        >
          Previous slide
        </button>
        <button
          type="button"
          className="button button-primary"
          disabled={index === slides.length - 1}
          onClick={() => setIndex((i) => i + 1)}
        >
          Next slide
        </button>
      </div>
    </section>
  );
}

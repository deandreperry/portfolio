export const sbfResearch = {
  sample: 10,
  tasks: [
    {
      id: 'T1',
      name: 'Find apparel',
      completed: 8,
      criterion: 'Reach an eligible customizable product page.',
    },
    {
      id: 'T2',
      name: 'Personalize an item',
      completed: 6,
      criterion:
        'Set the required options and verify that the intended personalization saved.',
    },
    {
      id: 'T3',
      name: 'Find delivery information',
      completed: 5,
      criterion:
        'Find the applicable production and shipping information and explain the timing or uncertainty.',
    },
    {
      id: 'T4',
      name: 'Review the order',
      completed: 7,
      criterion:
        'Reach the pre-payment review, check the item, options and known costs, and identify any costs still unavailable.',
    },
  ],
  spotlight: {
    story:
      'P09 found apparel and delivery information independently. They did not complete personalization independently and were unsure whether the choice had saved. At review, they hesitated when the total changed and did not complete the task independently.',
  },
  findings: [
    {
      id: 'F01',
      insight:
        'Shoppers looked in different places for the same answer. Put the arrival estimate beside the item, where it can inform the decision to order.',
      userBenefit: 'Understand arrival expectations before deciding to buy.',
      organizationBenefit:
        'Reduce avoidable delivery questions and purchase hesitation.',
      task: 'T3',
      priority: 'High',
      title: 'Delivery information was hard to find',
      behavior:
        'P01 searched the footer for a delivery estimate. P05 looked for the fulfillment policy, and P07 could not see delivery reassurance.',
      decision: 'Can I receive this in time?',
      response:
        'Show a concise production and shipping estimate on the product page with a clear details link.',
      check:
        'Repeat T3 and ask shoppers to explain when the item could arrive.',
      handoff:
        'Content and fulfillment would need to agree on a reliable estimate, exceptions, and who keeps it current.',
    },
    {
      id: 'F02',
      insight:
        'Entering a detail and knowing it will be printed are separate steps. Keep the saved name or number visible so shoppers can check it without entering it again.',
      userBenefit: 'Verify that the intended name or number was saved.',
      organizationBenefit:
        'Reduce customization questions and potential order corrections.',
      task: 'T2',
      priority: 'High',
      title: 'Shoppers were unsure whether customization saved',
      behavior:
        'P02 rechecked the name field. P06 could not tell whether a number had applied, and P09 was unsure whether customization was confirmed.',
      decision: 'Will the item have the name or number I chose?',
      response:
        'Confirm updates immediately and keep the chosen name or number visible in the summary.',
      check:
        'Repeat T2 and observe rechecking and whether shoppers can verify their selection.',
      handoff:
        'Design and development would need to confirm the store platform supports saved-state feedback, persistence, and accessible announcements.',
    },
    {
      id: 'F04',
      insight:
        'Reaching order review and understanding the total are separate problems. Test both the route to review and whether shoppers can explain the price once there.',
      userBenefit: 'Confirm selections and understand costs before payment.',
      organizationBenefit: 'Reduce uncertainty during the ordering process.',
      task: 'T4',
      priority: 'High',
      title: 'Some shoppers struggled to reach or trust order review',
      behavior:
        'P04 exited before order review. P07 stopped at checkout. P09 hesitated when the total changed.',
      decision: 'What will I receive, and what will I pay?',
      response:
        'Show selections, known costs, and fulfillment details together. Explain which costs depend on information available later.',
      check:
        'Repeat T4 and ask shoppers to explain what they will receive and what they will pay.',
      handoff:
        'Development and fulfillment would need to establish when shipping and other costs become available and what the checkout platform permits.',
    },
    {
      id: 'F03',
      insight:
        'Collections worked for some donors. Test the labels that sent others elsewhere before changing the routes shoppers already used successfully.',
      userBenefit: 'Find relevant products with less searching.',
      organizationBenefit: 'Help interested supporters reach merchandise.',
      task: 'T1',
      priority: 'Medium',
      title: 'Category labels did not match some shoppers’ expectations',
      behavior:
        'P04 missed the apparel category. P07 expected shirts under a different category.',
      decision: 'Where should I start looking?',
      response: 'Test clearer apparel labels and navigation placement.',
      check: 'Run a first-click check and repeat T1.',
      handoff:
        'Content and design would need to balance familiar shopper language with the existing collection taxonomy.',
    },
  ],
  journey: [
    {
      stage: 'Discover',
      task: 'T1',
      text: 'Find apparel that supports SBF. Category expectations can make the first step harder.',
    },
    {
      stage: 'Choose',
      task: null,
      text: 'Compare style, size, and connection to the mission. No separate task measure or P09 observation was recorded for this stage.',
    },
    {
      stage: 'Personalize',
      task: 'T2',
      text: 'Add a name or number and verify that it saved. Confirmation needs to stay visible.',
    },
    {
      stage: 'Check delivery',
      task: 'T3',
      text: 'Check delivery timing and policies before deciding. Information needs to be available at the decision point.',
    },
    {
      stage: 'Review',
      task: 'T4',
      text: 'Confirm selections and full costs before payment. A changing total can interrupt confidence.',
    },
  ],
};

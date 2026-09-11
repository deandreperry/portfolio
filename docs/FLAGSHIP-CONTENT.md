# Flagship case study — content worksheet

Status: awaiting real project materials. Do not publish these prompts as completed research.

Choose the real project with the clearest evidence, personal ownership, difficult decisions, and finished execution. Project slot 01 is visually featured for now; move the strongest actual story there when it is available.

## Essential context

- Actual project name and product type:
- Users, their context, and the specific problem:
- Your role, responsibilities, collaborators, dates, and constraints:
- Verified result or implementation outcome, with source and limitations:

## Two or three pivotal decisions

For each decision, document:

1. What evidence changed your understanding? Include a source and context.
2. What alternatives were considered?
3. What was the tradeoff?
4. What did you personally decide or contribute?
5. What changed as a consequence? Separate tested findings from expectations.

## Supporting evidence

Only include artifacts that explain a decision. Supply actual methods, recruitment, participant context, observations, analysis, limitations, and anonymized excerpts. Missing metrics are not a reason to invent numbers.

## Visual execution

Supply actual screenshots with descriptive alt text and explanatory captions. Include the main workflow, relevant error/empty/loading/recovery states, responsive behavior, and actual before/after iterations. Identify prototypes versus shipped screens.

## Personal positioning

- Career history and domain knowledge that influenced your approach:
- A concrete collaboration example:
- The problem types you want to work on next:
- Email, résumé PDF, and preferred domain:

## Implementation

`data/projects.ts` supports an optional typed `story`: problem, users, contribution, outcome, decisions, research, assets, flow, system, accessibility, reflection, and next. Add asset paths only when the files exist. Set `status: 'ready'` after the evidence is complete. Optional sections and their table-of-contents entries render only when data exists. The first actual asset automatically replaces the preview illustration.

## Collaboration example
Populate `story.collaboration` with `context`, `tension`, `contribution`, `resolution`, and `learning`. The case study and navigation display it only when supplied. Explain a real disagreement or constraint, represent collaborators fairly, and separate your contribution from team outcomes. Until then, About explicitly marks this example as pending.

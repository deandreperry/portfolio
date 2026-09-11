# Five-task refinement

- Certificates: preserved all four supplied Coursera URLs, each returned HTTP 200. Full names, expanded dates, visible IDs, readable destinations and uniquely labeled Show credential links. edX added with supplied ID; no URL exists in source, so it is marked Credential link pending.
- Case studies: added explicit process/evidence material and replaceable placeholders for responsibilities, timeline, research, historical explorations, testing and impact. Existing product analysis is preserved; unavailable evidence is not represented as completed research.
- Covers: new ProjectCover component uses actual product screenshots with project-specific composition, typography and detail crops. Reviewed at 1440, 768 and 390 pixels without horizontal page overflow. Corrected mobile caption overlap.
- Tools: Claude Code added to Workflow & AI assistance.
- Identity: removed only the header's trailing period; desktop/mobile share this component.
- Widget: global client loader appends async vendor script and guards initialization. Controlled browser test with a stub vendor API verified one init and one script across Home → About → Work. Real vendor request failed with ERR_CONNECTION_REFUSED in this environment, so live widget appearance is not verified. Native accessibility remains intact.
- Existing SEO and structured metadata preserved. Production build, lint and TypeScript checks passed before final caption correction; final build repeated afterward.

Outstanding: edX credential URL, genuine project history and research artifacts, and verification that the vendor widget can load on the intended production origin.

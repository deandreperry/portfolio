# Validation — September 24, 2026

Environment: Xcode 27.0, Swift 6.4, iOS 27.0 simulators. Deployment target iOS 18.0.

## Reliability and personalization revision

**56 distinct tests passed across final verification runs: 31 unit tests and 25 UI tests.** The final iPhone feature suite passed seven tests with one tablet-only skip; that tablet test passed separately on iPad alongside the Share integration test.

- All 31 unit tests passed, including complete round-trip/replace backups across all 21 model types, same-ID replacement, invalid-file rejection without mutation, retained relationships after soft deletion, App Group capture queue behavior, preset preview isolation and complete deletion.
- The broad iPhone regression passed the 17 existing UI tests. Its new library/recovery tests initially hit name-trimming and foreground-navigation assumptions; corrected targeted runs are recorded below. This was not a single all-green full-suite run.
- End-to-end sharing exposed a real SwiftUI issue: two automatic buttons in one List row both executed. Explicit independent button styling now prevents Import from also deleting the note. The test verifies the imported note remains readable.
- Unsigned simulator builds lack the App Group entitlement. Simulator integration tests and CI now use local ad-hoc signing; the app and extension successfully exchange a queued capture. Physical distribution still needs a provisioned team/App Group.
- The Share extension's display-name metadata was added after the first installation attempt identified it as required.
- iPad landscape saved-items and backup controls passed, with full-screen screenshots visually reviewed. Tablet orientation tests run on iPad; phone tests explicitly restore portrait orientation. Retained screenshots: `Screenshots/backup-ipad-landscape.png` and `Screenshots/library-ipad-landscape.png`.
- Normal launch after updating the existing iPhone 17e installation opened the persistent store and rendered Today. This is a local upgrade smoke check, not a distributed-version migration matrix. Evidence: `Screenshots/persistent-upgrade-launch.png`.
- Optimized Release app, widget and Share extension build passed after the inbox fix: `/tmp/neuro-release-verified.log`.
- Generated project/backup files reproduce exactly, shell scripts pass syntax checks and `git diff --check` passes. CI is configured but has not been run on GitHub for this revision.

Final iPhone feature result: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.24_23-44-36--0500.xcresult`.

Evidence: unit/broad UI regression `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.24_23-35-12--0500.xcresult`; final iPad landscape and Share tests `/tmp/NeuroModeReliabilityBuild/Logs/Test/Test-NeuroMode-2026.09.24_23-44-40--0500.xcresult`. Failed-run diagnostic collectors were stopped only after tests ended when they stalled. Result bundles in `/tmp` are temporary; test sources and screenshots are retained in the repository.

Native backup picker provider variations, real VoiceOver/Voice Control/Switch Control sessions, physical-device integrations, the minimum iOS 18 runtime, and actual TestFlight participant sessions remain unverified. See RELEASE_CHECKLIST.md and TESTFLIGHT_PILOT.md. No whole-app accessibility certification or participant outcomes are claimed.

## Full verification and fixes

Requested end-to-end testing completed on iPhone 18 Pro and iPhone 17e simulators (iOS 27).

### Issues fixed

- Preparation notes could not be saved again after editing a saved draft. The action now updates the same Brain Dump entry, clears its saved state when text changes, and rejects whitespace-only titles. A UI test checks the update and confirms no duplicate note.
- Adding sample activities could exceed the one-Now/three-Next limits. Example insertion now checks existing occupied lanes and puts overflow in Later, preserving the user's current activity. A unit test checks two successive example insertions into a populated plan.
- Filled buttons used white text on a pale sage background in dark mode. The shared palette now supplies dark foreground text for dark-mode filled buttons across Today, primary actions, recipes and card sharing. The rendered Today accessibility audit passes in dark appearance.

### Results

- **42 distinct tests passed across verification runs: 25 unit tests and 17 UI tests.**
- The full pre-fix suite passed all 37 tests in one run. Targeted runs verified the fixes and added coverage: preparation updates, recipe reorder/remove/save, ambient-audio background stop and read-aloud background stop.
- All 25 unit tests passed after the planning-capacity fix, including on-disk persistence/reopen, complete deletion, focus timing and planning rules.
- Dark iPhone 17e checks passed for maximum-text Today/Focus and Quiet Room, recipe editing, preparation updates and ambient playback interruption. Screenshots of maximum-text Focus and Quiet Room were visually reviewed.
- Normal launch using the persistent app store was checked separately from in-memory UI-test launches. The final dark-mode filled-button foreground was visually confirmed; screenshot: `Screenshots/today-dark-verified.png`.
- Final optimized Release app/widget build succeeded with all three fixes. Build log: `/tmp/neuromode-release-final.log`.
- The Today audit passed in light appearance during the full regression and in dark appearance after the contrast fix. It still uses the system-chrome/offscreen exclusions described below; it is not a whole-app certification.
- The first read-aloud test assumed a particular script would be on screen. Its test selector was corrected to use an available script; the final speech start/background-stop test passed. No app defect was hidden by skipping the speech test.

### Result bundles

- Full 37-test regression: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_15-26-58--0500.xcresult`.
- Smaller-screen checks: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_15-28-53--0500.xcresult` (includes the subsequently corrected script-selection test failure).
- Final 25-unit-test run: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_15-31-36--0500.xcresult` (unit tests passed; the UI selector in this run was corrected afterward).
- Passing speech test: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_15-32-38--0500.xcresult`.
- Passing dark accessibility audit: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_15-34-20--0500.xcresult`.
- Failed-run simulator diagnostic collectors stalled and were stopped after test execution so reports could finalize; successful runs completed normally.

## Additional support revision

- Simulator build succeeds with Quiet Room, feedback/manual strategies, recipes, support cards, reading comfort and warm semantic surfaces.
- **37 distinct tests passed across the final validation runs: 24 unit tests and 13 UI tests.**
- The broad regression run passed all 24 unit tests and all 8 pre-existing UI tests. Its initial card test tapped the label rather than the native switch, leaving selection off; the test was corrected to tap the switch and verify its state before proceeding.
- The final targeted run passed all 24 unit tests and all 5 new UI tests with zero failures. New coverage verifies recipe creation, skip/resume, persistent support models, complete deletion, explicit card text, preview/save/reading, silent defaults, saving helpful strategies, and the Quiet Room exit at maximum text size.
- A final focused UI check also passed with breathing enabled while audio remained off; silent/default and optional-breathing screenshots were retained. Result: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_14-55-22--0500.xcresult`.
- Generated ambient PCM decodes as four-second mono audio without starting playback in the test. Auditory comfort and hardware interruption behavior still require physical-device checks.
- Screenshots reviewed: support-card preview, reading comfort, recipe progression and maximum-text Quiet Room. Retained under `Documentation/Screenshots/` as `support-card-preview.png`, `reading-comfort.png`, `support-recipe.png`, and `quiet-room-largest.png`.
- Final unit/new-feature result: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_14-52-59--0500.xcresult`.
- Broad regression evidence (includes the subsequently corrected test-harness failure): `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_14-46-43--0500.xcresult`.
- Two diagnostic collectors stalled after failed test runs; only those collectors were stopped so Xcode could finish their reports. The passing final run completed normally.

## Focus and sensory revision

- App, widgets, App Intents and Live Activity compile successfully.
- Full regression on iPhone 18 Pro: **20 unit tests and 7 UI tests passed**, zero failures.
- After a final accessibility-size layout and field-label refinement, the additional largest-text UI test passed on iPhone 17e. **28 distinct tests passed across these final runs.**
- Unit coverage includes progressive step shrinking, completed-step history, custom steps, old stopping-point preservation, pause/resume timing, overtime extension, sensory suggestion provenance, preset reversal and disk-reopen recovery, in addition to the earlier planning/persistence/deletion coverage.
- UI coverage includes onboarding, capture, immediate support, focus pause/save, preset preview/apply/undo, step recovery after navigation and Today accessibility.
- The automated Today audit checks contrast, hit regions, element detection, descriptions and traits at two scroll positions. It excludes non-hittable elements and content partly obscured by native navigation/tab bars; screenshots confirmed the translucent bars produced misleading contrast readings for content underneath. This is not a whole-app accessibility certification.
- The largest-text test verifies that all three Today support actions are hittable, then opens Focus and verifies its activity field. Screenshots were visually inspected in dark appearance at maximum accessibility size; the first-step placeholder was shortened to avoid truncation.

## Evidence

- Standard Today: `Screenshots/today-light.png`.
- Smaller iPhone / maximum text: `Screenshots/support-dark-largest-17e.png` and `Screenshots/focus-dark-largest-17e.png`.
- Full regression result: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_01-16-11--0500.xcresult`.
- Final largest-text result: `/tmp/NeuroModeBuild/Logs/Test/Test-NeuroMode-2026.09.23_02-18-48--0500.xcresult`.
- Build/test bundles under `/tmp` are local, temporary evidence; the screenshots and test sources are retained in the project.

## Not yet validated

No participant sessions have been conducted. USABILITY_STUDY.md and USABILITY_NOTES_TEMPLATE.md are prepared for that work. Manual VoiceOver/Switch Control/Voice Control sessions, signed physical-device permission/widget/Siri/Live Activity checks, physical sound/haptic comfort, iOS 18 runtime verification, and migration from distributed versions remain required before release. No passing result is implied for those checks.

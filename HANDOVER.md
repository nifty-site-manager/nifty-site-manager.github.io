# Nift website handover

This file belongs to the authoritative website source checkout. It must not be
copied into or maintained beneath the nested generated `public/` repository.

## Current repository topology

- Repository: `nifty-site-manager.github.io`.
- Authoritative source branch in this checkout: `stage`.
- `content/`, `templates/`, and `.nift/` are source/project state.
- Output directory: `public/` from `.nift/config.json`.
- `public/` is itself a separate Git checkout containing built deployment state.
- The outer repository records `public` as a Git-linked entry.

Edit source on `stage`; generate `public`; never hand-edit generated HTML as the
canonical fix. Building locally is normal validation. Committing, pushing,
publishing, or deploying either branch requires explicit approval.

The canonical website stylesheet is `content/assets/css/style.css`. It is tracked
as the `assets/css/style` Nift output through the content-only
`templates/asset.txt` template, so CSS changes follow the same source/build
boundary as pages. Do not restore `public/assets/css/style.css` as an independently
hand-maintained deployment file.

Downloadable template archives remain under `public/assets/templates/`. Their
already-built `public/` directories are also published as case-sensitive demo
directories under `public/templates/<Template>/` (for example
`public/templates/Aurora/`). The templates page links to those concrete deployment
paths with `@pathto`. When an archive is replaced, refresh its corresponding demo
directory and validate the demo's relative CSS/JavaScript requests as well as the
download itself. Only the ten templates represented by showcase cards are
published as demos; the older Barebones archive remains download-only.

At the time this handover was introduced, `content/docs/templating.html` and the
nested `public` checkout already contained local changes from earlier work.
Preserve and distinguish those changes.

## What this website is

The site is official documentation, product explanation, download/example
surface, AI onboarding resource, a real Nift project, and a release-candidate
integration fixture. It is part of the product rather than disposable marketing.

A significant Nift candidate should build this entire site with the exact
candidate binary. Synthetic tests and dogfooding are complementary.

## Product truth and terminology

Describe Nift generally as a **website generator**, not merely a static site
generator. Generated sites may include runtime applications, React/Vue/Svelte
islands, API clients, dashboards, or backend frontends.

The modern story follows deliberate removal of LuaJIT, ExprTk, general scripting,
and hooks. Emphasize a small dependency-aware generation layer, ordinary web
technologies, speed, incrementality, composition, and explicit behavior. Useful
current ideas include “Keep your HTML. Keep your tools. Stop repeating yourself”
and “Nift provides the glue without trying to become the universe.”

Do not market simplicity as lack of capability or respond by inventing a giant
feature list. Nift's value often comes from leaving HTML, CSS, JavaScript,
frameworks, APIs, and external tools in their native form.

## Documentation responsibilities

The current tracked site covers getting started, project structure, templating,
metadata, JSON/Schema/control flow, contracts/project contracts/route contracts,
paths, dependencies, incrementality, configuration, commands, minification, full
applications/use cases, migration, hosting, AI development, architectural rules,
battle-testing, comparisons, templates, and showcase material.

When Nift changes:

1. Identify every affected documentation and AI-facing surface.
2. Search globally for stale syntax, terminology, versions, paths, and claims.
3. Edit canonical source only.
4. Verify examples against current/candidate Nift rather than memory.
5. Build with the exact candidate binary.
6. Inspect generated diffs, links, assets, downloads, and affected rendered pages.
7. For visual changes, inspect relevant desktop/tablet/mobile and theme states.
8. Run Lighthouse/accessibility checks when the change can materially affect them.
9. Review `Battle Tested` whenever behavior, regression coverage, test families, or checkpoint evidence changed.
10. Reconcile this handover and the website roadmap before declaring the Nift work complete.

`@pathto` examples require special care: tracked names and concrete paths are
different semantic categories. `@dep` should generally remain advanced material.
Backticks are not Nift quotes. Modern output convention is `public/`. Unknown CSS
at-rules should not need Nift workarounds.

Parameter interpolation is implemented and validated. Document it as constrained
parameter value resolution: whole `$[...]` values and quoted literal/value
composition. Explicitly state that nested `@...` directives are not evaluated
inside parameters. Prefer examples backed by contract fixtures.


Project-contract documentation is intentionally split into three layers:
`docs/contracts` explains the build-time contract philosophy and contract-driven
feature design and belongs under Design & Internals; `docs/routes` is the
concrete route-contract pattern and should appear before the generic
`docs/project-contracts` reference in the everyday docs navigation;
`docs/project-contracts` specifies config-declared project-wide JSON contract
namespaces. The routes page and relevant Vercel/serverless material must
state explicitly that Nift route contracts are build-time application
relationships whereas Vercel routes/routing rules are deployment/runtime request
handling.

AI-facing material should describe Nift as human-first: clarity, explicitness,
fast feedback, determinism, and checked relationships are primarily good human DX
and consequently also produce unusually strong AI DX. The AI-development page may
describe the repository practice as human-directed agentic engineering, including
contracts, checkpoints, handovers, adversarial testing, evidence, project memory,
and the high-leverage role of human perception/judgement.

## AI, templates, and downloads

AI-facing documentation is first-class and must not teach stale limitations.
The barebones project and template collection are onboarding and integration
fixtures. A screenshot, downloadable archive, source project, and description
must correspond. Build and inspect templates before updating captures/downloads.

## Design context

Durable direction: clean typography, low clutter, responsive behavior,
system/light/dark themes, dark-mode friendliness, green-gradient identity, and
restrained JavaScript. Historical preferences include angular rather than curvy
hero hills, no sky grid, wide example cards, one representative template image,
and a demo that explains Nift rather than becoming a distracting application.
These guide judgment; they are not immutable pixel specifications.

Maintain semantic headings, labels, contrast, keyboard navigation, responsive
menus, and theme behavior. Historical Lighthouse scores are checkpoint evidence,
not permanent truth.

## Claims and evidence

Benchmark numbers, test counts, Lighthouse scores, and comparison conclusions are
checkpoint-specific. Preserve fixture/tool/machine context or remeasure. Battle
Tested messaging should emphasize failure families—parser boundaries, malformed
state, filesystem safety, incrementality, dependency lifecycle, collisions,
scaling—rather than a stale test count. Credible AI-opinion/comparison material
may say another tool is better for a project shape.

## Build and publication

The Nift project configuration is `.nift/config.json`; the normal local product
command is `nift build-all` or `nift build-updated` using the intended binary on
`PATH`. For candidate validation, invoke the exact candidate executable from this
repository rather than relying on an unrelated installed version.

The exact public deployment/push sequence is not encoded here because repository
history alone does not establish an approved publication procedure. Determine it
with Nick before publishing. Never infer that a successful local build authorizes
updating `main` or the nested public remote.

Website checkpoint identities do not automatically equal executable versions.
Pure design/content changes do not require a Nift binary version bump.

## Production-checkpoint review

When a Nift checkpoint changes syntax, behavior, commands, config, terminology,
benchmark evidence, testing claims, AI guidance, or downloads, reconcile this
source before considering the product checkpoint complete. Internal refactors
with no public effect normally require only a compatibility self-build.

Current living priorities are to keep JSON/control-flow/parameter-interpolation
and project-contract docs current, reconcile Battle Tested evidence at each
substantial Nift checkpoint, audit stale historical syntax/claims, validate
templates/downloads, build with candidate Nift, and review
responsive/accessibility/publication readiness. Reorder this list when evidence
changes.

## Maintaining this handover

This is living project infrastructure. Update it when branch topology, build or
deployment procedure, design principles, product terminology, documentation
responsibilities, or durable website lessons change. Replace obsolete operations;
retain useful history without appending a diary. Every substantial website or
Nift product checkpoint must review handover and roadmap impact. For Nift product
work, completion also requires reviewing Battle Tested whenever the checkpoint
changes protected behavior or validation evidence; do not leave that reconciliation
for a later documentation pass.

The detailed website history lives at
`docs/handover/PROJECT-HISTORY.md`. It contains the full product,
design, documentation, AI, template, benchmark, checkpoint, and production-support
history. Keep both documents current, using this root file as the operational
entry point.

## 2026-08-17 AI/HDAE and template-less documentation reconciliation

- Expanded `docs/ai-assistants` with a practical human-directed agentic engineering workflow for production Nift sites and linked it to the deeper Nift-development methodology.
- Reworked the AI-opinion scoring model to remove overlapping categories, reserve 10s for unusually strong evidence, and explicitly separate Nift's internal testing discipline from ecosystem/production maturity.
- Documented omitted `template` fields in `.nift/tracked.json`: direct top-level parsing of content, no template dependency, empty-string compatibility, dependency cleanup when switching modes, and scaffold usage for CSS/JS.
- Documentation-only checkpoint: rebuild the canonical site, verify an immediate incremental no-op, and keep generated `main` synchronized with `stage`.

## 2026-08-17 site-wide editorial reconciliation

- Reworked the homepage around distinct jobs rather than repeated positioning: product/demo, core capabilities, incremental/dependency behavior, human-first AI assistance, migration, ecosystem composition, use cases, templates, and one closing boundary statement.
- Reduced homepage copy substantially; avoid reintroducing separate sections that all restate “small layer / keep your stack / glue not universe.” Put deeper philosophy on `docs/why-nift`, ecosystem recipes on `docs/advanced`, and AI methodology on the dedicated AI pages.
- Surface current differentiators such as checked relationships/project contracts where they add information; do not let older speed/simplicity messaging crowd out newer architectural strengths.
- The website should practice its own contract philosophy: use `@pathto` for authored internal navigation instead of unchecked relative `.html` links unless a literal path is intentionally being demonstrated.
- Keep `docs/production-readiness` and other evaluation pages synchronized with the current focused-test inventory and Battle Tested evidence; avoid copying old checkpoint counts forward.
- Keep the Battle Tested introduction framed around behavioral contracts and executable guarantees, with the broad Contracts philosophy distinguished from the concrete Project Contracts feature; do not reduce the page to raw test-count marketing.
- `docs/advanced` is now the practical wider-toolchain integration guide. Keep philosophical rationale primarily in `docs/why-nift` / `docs/contracts` rather than duplicating it there.

## 2026-08-17 homepage visual cleanup

- Removed the homepage package-manager icon strip and added a direct `Install` CTA between `Get started` and `View on GitHub`; installation-channel detail remains on the dedicated installing docs page.
- Removed the homepage templates teaser entirely. Templates remain available through the global navigation and dedicated templates page; do not re-add homepage template promotion unless it earns space against the homepage's tighter product story.
- Added shared vertical alignment for text links placed beside buttons in `.hero-actions`, addressing the recurring mixed-control alignment issue rather than patching only the boundary card.
- Added breathing room above the final boundary card and centered the fourth performance card in the three-column desktop layout.
- Removed the six package-manager icon assets from generated `main`; they are no longer referenced anywhere in authored source.
- Validation for this presentation-only checkpoint: 46-page full build, immediate 46/46 no-op incremental build, and 4,329 generated local references with zero missing targets.

## 2026-08-17 homepage narrative-order adjustment

- Moved `Use it your way` directly after `Small by design` and before the performance section. The homepage now establishes Nift's compact model, immediately shows the range of project shapes it can serve, then explains fast/dependency-aware builds.
- Keep this ordering unless a future homepage redesign deliberately replaces the multi-section narrative; it avoids delaying the practical “what can I build with this?” answer until after several implementation/engineering sections.
- Validation for this presentation-only checkpoint: 46-page full build, immediate 46/46 no-op incremental build, and 4,329 generated local references with zero missing targets.

## 2026-08-17 minimal homepage checkpoint

- Replaced the multi-section homepage narrative with an intentionally minimal product front door: hero, live template/content/output demo, four compact proof points, then footer.
- The proof points link into the deeper docs for Nift's small design, checked relationships/contracts, dependency-aware incremental builds, and wider-toolchain composition; separate links lead to the docs index and testing evidence.
- Keep detailed use cases, AI/HDAE guidance, migration, ecosystem recipes, production evidence and philosophy on their dedicated pages. Do not let the homepage gradually reaccumulate those sections unless a future redesign deliberately changes this strategy.
- The hero CTAs remain `Get started`, `Install`, and `View on GitHub`.

## 2026-08-17 minimal homepage closing proposition

- Replaced the four-card homepage proof grid with one compact closing proposition after the live demo.
- The homepage now has three jobs only: identify Nift in the hero, demonstrate it live, then summarize why it is credible before handing off to deeper documentation.
- The closing links are `Why Nift?`, `Battle Tested`, and `Documentation`; do not reintroduce a feature-card grid merely to fill homepage space.

## Comparison guide checkpoint (2026-08-18)

- Added `docs/comparisons` as the canonical neutral comparison guide, separate from the more personal `docs/ai-opinion` assessment.
- The page compares Nift with Astro, Next.js, Hugo, Eleventy, Jekyll and Zola and should continue to describe ownership models, strengths and weaknesses rather than constructing a table where Nift wins every row.
- Keep current competitor feature descriptions grounded in official project documentation. Keep benchmark claims on evidence/benchmark pages and avoid inferring performance from architecture alone.

## Integrated-web comparison and table-fit checkpoint (2026-08-18)

- `docs/comparisons` now positions Nift against integrated website/application frameworks rather than grouping it with static-site generators. The current comparison set is Astro, Next.js, Nuxt, SvelteKit, Laravel, Django and Ruby on Rails.
- Astro remains intentionally included because its component/islands/content/on-demand model is a common modern website architecture even though its ownership boundary differs from the more backend-heavy full-stack frameworks.
- All generated documentation tables must fit ordinary desktop viewports without horizontal scrolling; narrow-screen scrolling may remain. The current rendered audit passes every table at 1024–1920 px.

## Frontend-framework comparison and memory-safety checkpoint (2026-08-18)

- `docs/comparisons` now covers two distinct ownership choices: integrated website/application frameworks (Astro, Next.js, Nuxt, SvelteKit, Laravel, Django, Rails) and frontend/UI frameworks (React, Vue, Svelte, SolidJS). Preserve the distinction: Nift does not replace a reactive UI runtime, but it can avoid making one the site-wide architecture and can consume framework-built islands/bundles selectively.
- SolidJS is included explicitly for its fine-grained reactive/JSX model; comparison prose should stay architectural and current rather than treating all frontend frameworks as interchangeable React clones.
- `docs/memory-safety` is the dedicated living record for the upcoming Nift leak/lifetime/endurance campaign, including watch-mode and 10k-page stability. Battle Tested links to it rather than freezing detailed memory claims in the broader regression page.
- Future memory campaigns should record exact commit/date/toolchain/workload/results and distinguish allocator-retained RSS from confirmed leaks.

## Jsonic++ memory-safety Checkpoint 1A / 1B status (2026-08-18)

- The Jsonic++ component campaign completed Checkpoint 1A: 120 long-lived corpus iterations under ASan + LSan + UBSan produced zero findings; a separate 400-iteration RSS soak stabilized at 10,688 KiB from midpoint through completion after a 10,624 KiB warm-up observation.
- This evidence covers the parser component, not Nift's later end-to-end lifecycle/watch/10k memory checkpoints. Do not generalize it into a project-wide Nift leak verdict.
- Checkpoint 1B was initially blocked in the checkpoint environment because Valgrind was unavailable, then completed on a Linux host with Valgrind 3.26.0. The independent Jsonic++ gate is now satisfied; see the later Checkpoint 1B entry below for exact evidence.
- `docs/memory-safety` now publishes the exact 1A evidence and the open 1B limitation; maintain it alongside this handover whenever memory-safety evidence changes.
## Jsonic++ memory-safety Checkpoint 1B complete (2026-08-18)

- The embedded Jsonic++ component now has independent Valgrind confirmation in addition to its sanitizer/RSS evidence: Valgrind 3.26.0, Linux x86_64, commit `b9d0ff3`, 40 lifetime-corpus iterations, 0 errors, 0 bytes in use at exit, all 6,579,515 allocations freed, peak Valgrind RSS 215,992 KiB.
- This completes Jsonic++'s standalone lifetime gate only. Nift's own command lifecycle, incremental-state, watch endurance, 10k pressure and integrated Minify++ checkpoints remain separate.
- The Minify++ checkpoint should now stay standalone; move Nift-embedded Minify++ ownership stress to the later cross-project integration checkpoint to avoid duplicating integration scope.
## Minify++ memory-safety Checkpoint 2A (2026-08-18)

- Standalone Minify++ resource testing is now green under its maintained sanitizer/RSS/CLI corpus at commit `db2a6ff`; the Nift vendored test infrastructure is synchronized.
- Treat this as component evidence only. Nift-owned Minify++ integration/resource behavior remains a later cross-project checkpoint.
- Independent Minify++ Valgrind confirmation is still open because Valgrind is unavailable in this environment. `docs/memory-safety` records the exact component evidence and limitation.

## Minify++ memory-safety Checkpoint 2B complete (2026-08-18)

- The standalone Minify++ component gate now has independent Valgrind confirmation in addition to sanitizer/RSS/CLI evidence: Valgrind 3.26.0 on Linux x86_64, canonical Minify++ commit `2a51a38`, 30 lifetime-corpus iterations, 0 errors, 0 bytes in use at exit, all 2,448 allocations freed, peak Valgrind RSS 184,908 KiB.
- This closes Minify++'s standalone component checkpoint only. Nift's own core lifecycle, watch/10k endurance and later cross-project integration gates remain open.
- `docs/memory-safety` and Battle Tested have been reconciled accordingly; keep detailed component metrics on the living memory page rather than spreading them across general reliability copy.

## Nift memory-safety Checkpoints 3 and 4A (2026-08-18)

- Checkpoint 3 is complete: 57 sanitizer-backed core lifecycle/test phases passed with no ASan/LSan/UBSan finding, covering project mutation commands, success/failure/repair builds, incremental modes, contracts, schema, requirements, template-less tracking, Minify++ integration and cross-feature behavior.
- `build-auto` exits after a failed watched rebuild. Preserve that actual contract; do not describe watch mode as a self-healing daemon. Failed-build cleanup/recovery is tested through repeated command lifecycles instead.
- Checkpoint 4A native watch endurance completed 180 deterministic successful invalidations in one process. RSS stayed between 5,976 and 6,356 KiB; warm/mid/final observations were 6,332 / 6,216 / 5,976 KiB.
- A 100-cycle sanitizer watch run completed without sanitizer failure. Do not use sanitizer-process RSS as leak evidence because allocator quarantine materially changes resident memory.
- The 10k matrix stayed below 12 MiB peak RSS across 1, 4 and automatic workers, with a minified four-worker case included.
- Checkpoint 4B remains the targeted independent Valgrind watch confirmation. Run `make valgrind-memory-safety-checkpoint-4` on Linux with Valgrind and retain the generated evidence before marking Checkpoint 4 fully complete.

## Checkpoint 4B harness correction (2026-08-18)

- The first external Valgrind watch attempt exposed a shutdown bug in the memory-test harness, not a Nift leak result.
- The corrected runner now signals the complete monitored process group and gives Valgrind time to finalize before escalation. Public memory-safety claims remain unchanged until the corrected Checkpoint 4B target produces passing Valgrind evidence.

## Checkpoint 4B pacing correction (2026-08-18)

- The second external Valgrind attempt produced a clean partial leak report but exited before completing the requested watch corpus because fixed 220 ms edits could outrun Valgrind-supervised rebuilds.
- The corrected harness waits for the generated page to rebuild after each mutation before issuing the next mutation. The independent Checkpoint 4B gate remains pending a complete rerun; public memory-safety claims remain unchanged.

## Checkpoint 4B terminal/supervisor correction (2026-08-18)

- The third external run completed all 30 watch cycles but was SIGKILLed during teardown before a final Valgrind report. The test now disconnects stdin from the interactive terminal, and the Valgrind wrapper explicitly forwards shutdown signals while remaining alive for report finalization.
- Public memory-safety claims remain unchanged until the corrected external target yields a complete Valgrind result.

## Nift memory-safety Checkpoint 4 complete (2026-08-18)

- External Checkpoint 4B passed at Nift commit `92e6c05`: 30/30 acknowledgement-driven watch cycles completed in 14.044 seconds under the Valgrind wrapper, with intended SIGINT shutdown/status 130.
- Exact evidence is retained in the Nift source tree. Wrapper RSS was flat at 3,824 KiB across the retained cycle-20 and cycle-29 samples; do not present wrapper RSS as the leak oracle.
- Public Memory & Resource Safety and Battle Tested pages describe Nift Checkpoint 4 as complete. The sibling tscc Checkpoint 5 baseline is now also complete; the cross-project campaign proceeds to integration Checkpoint 6.

## Nift memory-safety Checkpoint 6 complete (2026-08-18)

- Standalone/embedded Jsonic++ and Minify++ synchronization was verified before a combined Nift workload.
- Native evidence: 90 pages, 60 mutation/recovery rounds, 20 deliberately propagated Jsonic++/Minify++ failures, all repaired successfully. Sanitizer evidence: 30 pages, 12 rounds, four injected failures, no sanitizer finding.
- Corrected 6B passed externally: 19 Nift invocations were directly monitored under Valgrind across 12 rounds / 40 pages with four expected component failures; every invocation recorded zero errors and no non-zero leak bytes. Public Memory & Resource Safety and Battle Tested now treat the generic memory campaign as complete and point to the explicit post-memory hardening properties.

## Checkpoint 6B instrumentation correction (2026-08-18)

- The first external 6B failure was a harness wiring error: Valgrind wrapped Python instead of Nift, so it is not used as product evidence.
- The corrected target instruments each Nift invocation directly and separates Memcheck findings from deliberately expected Nift build failures. Public 6A claims remain unchanged; 6B is still pending a corrected external run.

## Checkpoint 6B completed (2026-08-18)

- The corrected external run at Nift commit `03e18b4` directly monitored Nift rather than the Python orchestrator.
- Nineteen monitored invocations, 12 mixed rounds, 40 pages and four expected component failures completed with zero Valgrind error summaries and no non-zero definite/indirect/possible leak bytes.
- The earlier incorrectly wired attempt remains historical rejected evidence. The public reliability record now closes Checkpoint 6 and advances to incremental-vs-clean equivalence.
## Battle Tested reliability framework refresh (2026-08-18)

- Kept the established **Battle Tested** page title/URL/navigation stable and added **What battle hardened means** as the conceptual opening.
- The page now distinguishes test hardening from field hardening, explicitly acknowledges that Nift cannot manufacture mature-project production exposure, and explains the progression from feature tests → regressions → bug-family/adversarial attacks → guarantee-first/contract-first tests.
- Reliability claims follow the editorial states PROVEN NOW / IN PROGRESS / PLANNED / PHILOSOPHICAL PRINCIPLE. The completed memory/resource campaign is evidence; incremental-vs-clean equivalence is explicitly the next planned/current frontier, with filesystem/transaction integrity, parser fuzz/resource boundaries and cross-platform equivalence still future work.
- Competitor context is deliberately secondary. Astro, Meson, Hugo, Ninja and esbuild were re-checked against current public sources on 2026-08-18; the comparison is used to explain accumulated field evidence rather than rank projects.
- After Checkpoint 7, promote incremental equivalence only if the campaign establishes it, and add exact methodology, mutation families, scale, findings and retained regression evidence. Apply the same scoped-evidence discipline after Checkpoints 8–10.

## Checkpoint 7 completed (2026-08-18)

- Battle Tested promoted incremental-vs-clean equivalence from PLANNED/CURRENT FRONTIER to scoped evidence.
- At Nift commit `93b7c2c`, all three incremental modes completed 8 deterministic seeds × 30 mutations: 720 full public-output-tree comparisons, all byte-equivalent to a clean rebuild from the same logical state.
- Covered content/template/JSON/schema/Project Contract/config/shared-input/metadata mutations and tracked-page add/move/remove lifecycle operations.
- The page explicitly scopes the claim to the generated/mutated corpus. Checkpoint 8 filesystem/transaction integrity is now the current frontier; Checkpoints 9–10 remain planned.

## Checkpoint 8 completed (2026-08-18)

- Battle Tested now promotes filesystem/transaction integrity from CURRENT FRONTIER to scoped evidence and advances parser fuzz/resource boundaries to the current frontier.
- At Nift commit `e261074`, 13 Linux filesystem/failure cases passed, including forced partial/interrupted writes, permission/readability failures, symlink/type-confusion cases and recovery after state/output write obstruction.
- The campaign fixed unreadable-input-as-empty behavior, a directory-as-file `std::length_error` abort, and truncate-in-place output/state writes. Generated/state writes now use same-directory temporary replacement with stale-temp cleanup.
- Public wording deliberately does not claim universal filesystem/crash safety or untested ENOSPC/platform-specific semantics.
- Checkpoint 9 remains a separate n++ parser fuzz/resource-boundary campaign; Jsonic++ and Minify++ standalone fuzz/parser evidence should not be duplicated without an integration-specific reason.

## Checkpoint 9 completed (2026-08-18)

- Battle Tested now promotes parser fuzz/resource boundaries from CURRENT FRONTIER to scoped evidence and advances cross-platform behavioural equivalence to the final deliberate-hardening frontier.
- At Nift commit `45d96ba`, the sanitizer build completed 1,217 n++ parser/resource cases: 1,200 grammar-aware mutations across three seeds plus 17 explicit depth/size boundaries.
- Outcomes: 234 successful builds, 983 controlled errors, zero timeouts/crashes/signals and zero sanitizer findings.
- The 64-level recursive parse guard was verified explicitly; its diagnostic was clarified to describe generic template parse depth rather than only `@input`.
- Public wording remains scoped: this is evidence for the tested corpus, not a claim that arbitrary parser input can never expose a bug.
- Checkpoint 10 remains necessary because Linux-local memory/filesystem/parser evidence does not establish behavioural equivalence on macOS or Windows.

## Codex Checkpoint 10 handover prepared (2026-08-18)

- Nift now carries a dedicated Checkpoint 10/Codex execution brief covering the Linux/macOS/Windows GitHub Actions matrix, normalized evidence model, portable vs platform-specific contracts, retained evidence and documentation promotion rules.
- Public Battle Tested wording is intentionally unchanged: cross-platform behavioural equivalence remains the final frontier until the required matrix and comparison job pass.
- Checkpoints 7–9 remain regression constraints for any cross-platform product fix.

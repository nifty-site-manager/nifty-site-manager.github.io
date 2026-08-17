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

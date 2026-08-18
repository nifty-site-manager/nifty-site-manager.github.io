# Project history and institutional context

> This is a living historical companion to the repository's operational handover. The live repository remains authoritative. Maintain, correct, reorganize, or supersede this material as project evidence evolves while retaining durable rationale.

# Nift Website

## Project Context, Development, Testing, Checkpoint and Production-Support Handover

### Audience

Codex or any future developer/agent taking responsibility for the Nift website.

### Relationship to other handovers

This document concerns the **Nift website specifically**.

For Nift's implementation architecture, language semantics, release engineering, `$[...]` parameter interpolation, or core development history, consult Nift's canonical handover.

For the independent behavioral contract, consult the Nift regression-suite handover.

---

## 1. Project identity

**Status: SETTLED**

The Nift website is more than marketing material.

It has historically served simultaneously as:

```text
official Nift website
documentation
product explanation
download/example surface
real Nift project
integration fixture
dogfooding project
release-candidate validation target
AI onboarding surface
```

That distinction matters.

A candidate Nift implementation successfully building the real Nift website is meaningful development evidence.

The website should therefore remain a **real consumer of Nift**, not a synthetic showcase engineered to avoid difficult behavior.

---

# 2. Product terminology

**Status: STRONG CURRENT PREFERENCE**

Do not casually describe Nift only as a:

> static site generator

The preferred general category is:

> **website generator**

Nift absolutely generates static output, but "static site generator" encourages an unnecessarily narrow mental model.

Nift can provide the document/build layer for:

```text
ordinary websites
documentation
blogs
marketing sites
SPAs
dashboards
API-consuming frontends
React islands
Vue/Svelte islands
vanilla JavaScript applications
full-stack application frontends
```

The fact that Nift itself executes at build time does not constrain the resulting website to having no runtime behavior.

This correction became important enough during our discussions that it should survive the handover.

---

# 3. Core website message

The strongest conceptual message we converged on was approximately:

> Nift provides a very small, fast website-generation layer while allowing HTML, CSS, JavaScript and the wider web ecosystem to remain themselves.

The website should communicate that Nift's simplicity is deliberate.

Historically, a surprisingly large amount could be built using essentially:

```text
@content
@input(...)
@pathto(...)
$[...]
```

The language has subsequently gained capabilities including:

```text
@json
loops/control flow
```

but those additions did **not** represent a reversal toward a large embedded scripting language.

The website should not sell Nift by pretending that more Nift-specific machinery equals more capability.

---

# 4. The difficult marketing problem

**Status: IMPORTANT PROJECT INSIGHT**

Nift has an unusual communication problem:

```text
other tools:
    demonstrate power by exposing more machinery

Nift:
    often demonstrates power by requiring less machinery
```

Someone reading a feature list can see:

```text
@content
@input
@pathto
$[...]
```

and think:

> "That's all?"

Actual use repeatedly suggested:

> "That's the point."

This is probably one of the most important problems for the website to solve.

---

# 5. CloudFort Dash as conceptual evidence

CloudFort Dash was repeatedly discussed as a useful real-world counterexample to the idea that Nift's small language confines it to simple websites.

The important lesson is not to reproduce CloudFort Dash architecture from memory.

The lesson is:

```text
complexity that belongs to the application
        ↓
HTML / CSS / JS / APIs / backend

complexity that belongs to website generation
        ↓
Nift
```

Nift did not need to absorb application-framework responsibilities to participate in a substantial frontend.

---

# 6. React-islands experiment

Codex subsequently built an experimental Nift website using React islands directly on the user's machine.

That experiment worked without difficulty.

Codex independently chose an architecture approximately like:

```text
Nift owns:
    document structure
    navigation
    SEO/content
    product narrative
    documentation
    asset paths

React owns:
    genuinely stateful interactive surfaces
```

The two example React surfaces were intentionally meaningful rather than decorative:

```text
live service-health simulator
interactive alert-policy builder
```

This was valuable evidence because Codex arrived at the boundary independently.

It demonstrated that Nift and React need not compete for ownership of the whole frontend.

---

# 7. `@pathto` and React asset integration

The experiment also clarified a subtle but important build-graph property.

Given something conceptually like:

```html
<script type="module"
        src="@pathto('public/assets/app.js')">
</script>
```

the bundle must exist when Nift first validates it.

Thus a clean build is:

```text
Vite
    ↓
public/assets/app.js exists
    ↓
Nift
```

But afterward:

```text
React-only source edit
    ↓
app.js bytes change
    ↓
HTML still points to app.js
    ↓
Nift does not inherently need to regenerate HTML
```

This reflects the distinction between:

```text
content dependency
```

and:

```text
existence/path requirement
```

That is a strength of Nift's model.

If hashed filenames are used, orchestration becomes different because the URL itself can change.

Do not generalize the fixed-filename example into a claim that all Vite configurations have zero integration coordination.

---

# 8. Current language documentation

The website must track actual Nift.

Historically the documentation covered things including:

```text
@content
@input(...)
@pathto(...)
@dep(...)
@getenv(...)
@ent(...)
$[...]
escaping
metadata
```

Current Nift also includes:

```text
@json
loops
```

and the upcoming work concerns `$[...]` value interpolation inside directive parameters.

After that feature is validated, website documentation should explain it in the same conceptual language used by the implementation:

```text
literal parameter text
+
value interpolation
```

rather than describing it as arbitrary recursive templating.

---

# 9. Values versus operations

A useful conceptual distinction developed during design:

```text
operations:
    @input(...)
    @dep(...)
    @json(...)
    @pathto(...)

values:
    $[...]
```

This supports:

```text
operation(value)
```

without turning the language into:

```text
operation(operation(operation(...)))
```

The website should preserve this clarity where possible.

---

# 10. `@dep`

`@dep` should generally be positioned as advanced functionality rather than the first mechanism beginners learn.

It is useful.

It is also an escape hatch compared with the more obvious relationships expressed by other Nift features.

---

# 11. `@pathto`

Historically this was one of the easiest features for documentation—including our own drafts—to explain incorrectly.

Do not reduce it to:

> path concatenation helper

Its behavior is tied to Nift's knowledge of project relationships and requirements.

All examples should be verified against current Nift.

---

# 12. Compatibility syntax

Historically:

```text
@pathtofile(...)
```

was retained for compatibility while being deemphasized publicly.

Older:

```text
@pathtopage(...)
```

was removed.

**Verify current implementation before documenting either.**

---

# 13. CSS coexistence

A historically important parser improvement was allowing normal CSS constructs such as:

```css
@media (...)
```

without requiring Nift-specific escaping.

This reflects an important product principle:

> Normal HTML/CSS/JS should remain normal HTML/CSS/JS wherever practical.

The website itself should demonstrate this rather than accidentally teaching unnecessary workarounds.

---

# 14. Output directory

Historically the default generated directory changed:

```text
output/
    ↓
public/
```

This was deliberate and aligned Nift more naturally with modern web project conventions.

Search the website/templates/downloads for stale assumptions whenever scaffolding behavior changes.

---

# 15. Full web applications documentation

A dedicated area was introduced to challenge the assumption that Nift is limited to basic generated pages.

Examples/concepts included:

```text
vanilla JS
Go backends
Node/Express
React islands
Vue/Svelte
Supabase
API-backed frontends
```

The message is **composition**, not endorsement of a particular stack.

---

# 16. AI-assisted development

Nift's small conceptual surface makes it unusually suitable for AI-assisted development.

The website developed material around:

```text
AI context
barebones projects
correct syntax examples
project orientation
```

This later evolved into our broader discussion of:

> AI DX / AI developer experience.

The new repository-local handover infrastructure should reinforce this.

---

# 17. Templates

The Nift website eventually grew a broader template collection.

It intentionally included more than simple marketing sites, with examples such as:

```text
documentation
blog
dashboard
SPA/application-like project
```

The purpose was to demonstrate breadth without bloating Nift itself.

Templates should remain:

```text
real
downloadable
buildable
current
representative
```

Do not allow screenshots and downloadable projects to diverge.

---

# 18. Barebones project

The barebones project is disproportionately important.

It serves as:

```text
beginner example
AI seed project
test project
template starting point
```

Changes to scaffolding or recommended Nift structure should trigger review of it.

---

# 19. Visual direction

Historical preferences for the current Nift website include:

```text
dark-mode friendly
system/light/dark themes
green-gradient identity
clean typography
low clutter
responsive layout
restrained JavaScript
strong mobile behavior
```

Specific historical design discoveries included:

```text
green gradient → liked
sky grid lines → disliked
straight/angular hills → preferred over curvy ones
one wide example card per row → preferred
one strong screenshot per template → preferred
```

These are design context, not immutable requirements.

---

# 20. Homepage demo

The demo went through repeated refinement involving:

```text
scrollbars
height
syntax highlighting
mobile layout
visual integration
```

At one stage more interactive behavior was reduced because it distracted from the explanation.

General lesson:

> The demo exists to explain Nift, not to become an application of its own.

---

# 21. Historical performance evidence

A 10,000-page benchmark became important during Nift development.

Historical results included roughly:

```text
Nift:
    ~0.28 s initial full build
    later ~0.17 s full builds
    ~0.046 s no-change build-updated

Hugo:
    ~455 ms

Astro:
    ~5.13 s
```

These are **historical measurements**, not timeless claims.

Do not silently republish them as current benchmark guarantees.

Reproduce or clearly contextualize benchmarks when changing public claims.

---

# 22. Battle Tested page

The regression work eventually justified stronger public discussion of Nift's robustness.

The right framing is:

```text
many independently exercised failure families
```

rather than:

```text
exactly N tests
```

because counts age quickly.

Testing categories and methodology are stronger evidence.

---

# 23. Development checkpoint procedure

For a meaningful Nift checkpoint, website review should be part of the checkpoint.

Typical sequence:

```text
candidate Nift
    ↓
core tests
    ↓
external regression suite
    ↓
candidate builds Nift website
    ↓
inspect relevant rendered output
    ↓
update docs/examples if behavior changed
    ↓
rebuild
    ↓
inspect generated diff
    ↓
checkpoint
```

This should continue throughout Nift's existence.

---

# 24. Candidate self-hosting invariant

**Status: STRONG PRACTICE**

A significant Nift release candidate should build the Nift website with the **exact candidate binary**.

This provides real-world integration evidence beyond synthetic tests.

---

# 25. Website-specific testing

Depending on the change:

```text
clean build
incremental build
broken-link/reference checks
download/archive checks
responsive rendering
light/dark/system theme
navigation
code examples
syntax highlighting
Lighthouse
accessibility
```

At one historical checkpoint desktop Lighthouse reached:

```text
100 / 100 / 100 / 100
```

and mobile performance was subsequently improved.

Do not optimize solely for scores, but large regressions are useful signals.

---

# 26. Branch/deployment workflow

Historically the site used a source/generated arrangement involving:

```text
stage
```

and a public/main checkout.

I do **not** want Codex to manufacture exact commands from conversational memory.

Inspect current Git state and document:

```text
canonical source branch
generated/deployment branch
build command
publication command
hosting destination
whether worktrees are used
what gets committed where
```

---

# 27. Website role in Nift production status

The website itself does not have an independent "production compiler" milestone.

Instead it contributes to Nift production readiness.

Before calling Nift production-ready, the website should demonstrate that:

```text
candidate Nift builds the complete site
docs match actual behavior
all documented examples work
templates build
downloads are correct
important links/assets resolve
release/version information is current
mobile/desktop experience is sound
no major accessibility regression exists
```

---

# 28. Current website roadmap

**CURRENT ROADMAP — REVISE AT EVERY SIGNIFICANT CHECKPOINT**

Near-term:

```text
reconcile site against current Nift
ensure @json + loops + parameter-interpolation documentation is current
keep project-contract and route-contract documentation aligned with implementation
audit stale old-language examples
build everything with candidate Nift
check templates/downloads
check Battle Tested claims and reconcile them at every substantial Nift checkpoint
```

Then:

```text
release-oriented content audit
performance-claim audit
AI-development/context audit
responsive/accessibility pass
candidate self-build
deployment rehearsal
```

After Nift reaches production status:

```text
continue dogfooding
keep examples current
add useful real-world patterns
remove stale advice
update benchmark evidence when warranted
maintain compatibility/migration guidance
```

The roadmap does **not end at 1.0/production**.

---

## Contract/HDAE documentation reconciliation checkpoint

The contract implementation produced a stable documentation split:

```text
Route contracts       -> concrete full-stack pattern
Project contracts     -> generic config/value/dependency mechanism
Contracts             -> design philosophy and contract-driven feature design
```

Keep Route contracts above Project contracts in the everyday reference. Keep the
Contracts philosophy page under Design & Internals. Contract documentation should
emphasize that a useful guarantee must be both verifiable and simple enough to
express, explain, implement and diagnose.

Substantial Nift work now has an explicit documentation completion rule: reconcile
the relevant handovers and Battle Tested evidence before the checkpoint is called
complete. The AI Opinion page should evolve when hands-on implementation/testing
experience materially changes the assessment rather than preserving an older
feature-list comparison.

# 29. Living-roadmap rule

Add explicitly to website handover:

> The website roadmap must be reviewed at each substantial Nift checkpoint. New product behavior, testing evidence, user experience, real-world projects, compatibility findings, and release decisions may change website priorities. Do not preserve an obsolete roadmap merely because it was previously documented.

---

# 30. Do not accidentally

```text
call Nift only a static site generator
restore scripting-era messaging
teach stale syntax
teach incorrect @pathto behavior
publish old benchmark numbers as current
edit generated deployment output as canonical source
let examples diverge from current Nift
forget candidate-Nift dogfooding
```

---

---


### 2026-08-17 — AI workflow/opinion and template-less docs reconciliation

- Expanded the AI-assistants guide from one-shot generation into a practical human-directed agentic engineering workflow for serious Nift projects, linked to the deeper Nift-development methodology.
- Rebalanced the AI-opinion comparison after deeper repository/testing experience: overlapping categories were consolidated, Nift's 10/10 ratings were reduced to evidence-heavy areas, and production maturity/network evidence became an explicit weakness rather than being hidden inside ecosystem commentary.
- Documented template-less `.nift/tracked.json` entries as a first-class v4 behavior, including direct content parsing, dependency semantics, empty-string compatibility and scaffold use for CSS/JavaScript.
- Validated the exact source with a 46-page full build, a 46/46 no-op incremental pass, and the focused template-optional contract test.

### 2026-08-17 — site-wide editorial and positioning reconciliation

- Audited the canonical website across homepage, onboarding, philosophy, ecosystem, DX, reliability and internal navigation after the v4 contracts/HDAE work.
- Reduced the homepage from roughly 1,170 to roughly 835 words by removing a duplicated philosophy section, duplicated workflow explanation and second AI pitch; retained the live demo, install surface, migration, ecosystem, use cases and template discovery.
- Reframed homepage capability messaging around current Nift: explicit dependencies, checked relationships/project contracts, proportional incremental work and a human-first/AI-friendly development model.
- Updated `Why Nift?` to make checked relationships/contracts part of the current philosophy and to keep AI DX subordinate to human-oriented simplicity.
- Reframed `Advanced Nift` as the practical wider-web-toolchain integration guide instead of another copy of the design philosophy; updated its tracked title accordingly.
- Updated Developer Experience to include config-declared project contracts alongside JSON Schema as machine-readable guarantees.
- Reconciled Production Readiness with the current 24 focused Makefile targets and current project-contract checkpoint evidence, and documented template-less tracked entries among protected production behaviors.
- Replaced remaining authored relative docs-navigation `.html` links with `@pathto(...)`, leaving literal links only where a migration example intentionally demonstrates ordinary HTML.
- Updated the site-wide meta description to describe current Nift as a website generator/build system with checked paths, contracts and incremental rebuilding.
- Validation: exact candidate rebuilt all 46 pages, immediate incremental pass reported 46/46 up to date, focused project-contract/template-less/path-safety tests passed, and 4,343 generated local references resolved with zero missing targets.

### 2026-08-17 — homepage visual cleanup and CTA simplification

- Simplified the hero CTA row to `Get started`, `Install`, and `View on GitHub`, removing the package-manager logo strip from the homepage while keeping detailed installation choices on the installing documentation page.
- Removed the homepage template showcase after the broader editorial pass established a tighter homepage; templates remain first-class elsewhere in site navigation but no longer consume homepage space.
- Fixed the recurring mixed button/text-link alignment pattern through `.hero-actions .text-link`, added spacing above the final boundary card, and centered the fourth performance card on wide three-column layouts.
- Removed the now-unused Homebrew, Chocolatey, Flathub, FreeBSD, Gentoo, and Snap icon files from generated `main`.
- Rebuilt all 46 pages, verified an immediate 46/46 no-op rebuild, and checked 4,329 generated local references with zero missing targets.

### 2026-08-17 — homepage use-case ordering adjustment

- Moved `Use it your way` from near the bottom of the homepage to immediately follow `Small by design`, ahead of `Fast feedback, explainable builds`.
- The resulting narrative is now: understand Nift's small build model → see the kinds of sites/projects it supports → inspect its build/performance characteristics.
- Rebuilt all 46 pages, verified an immediate 46/46 no-op rebuild, and checked 4,329 generated local references with zero missing targets.

### 2026-08-17 — minimal homepage product front door

- Replaced the remaining long-form homepage narrative with a deliberately minimal structure: hero + live demo + four compact proof points + footer.
- The four proofs are `Small by design`, `Checked relationships`, `Fast, explainable rebuilds`, and `Bring your stack`, each linking to the deeper documentation that owns that topic.
- Removed homepage sections for use cases, performance detail, AI-assisted development, migration, stack chips and the closing boundary card. Those subjects remain documented in their dedicated pages rather than being summarized repeatedly on the front page.
- Added direct secondary links from the proof band to the documentation index and Battle Tested evidence.
- This is an intentional information-architecture decision: the homepage is the product front door, while the documentation carries the depth.

### 2026-08-17 — minimal homepage closing proposition

- Replaced the four equal proof cards with a single closing statement: `Small enough to understand. Serious enough to build with.`
- The supporting copy summarizes native builds, dependency-aware incrementality, checked project relationships and ordinary web output without turning them back into separate homepage sections.
- The homepage now ends with direct links to `Why Nift?`, `Battle Tested`, and `Documentation`.
- Removed the proof-grid-specific CSS and retained only the compact closing-section styling.

### 2026-08-17 — Battle Tested contract framing

- Reframed the Battle Tested introduction around behavioral contracts rather than examples or raw test counts.
- Linked the broad Contracts design philosophy separately from the concrete Project Contracts feature so the two meanings remain related but distinct.
- Clarified that adversarial testing attempts to falsify guarantees that users/projects/integrations may rely on, while retained bug reproducers turn discovered failures into permanent regression evidence.

### 2026-08-18 — broader comparison guide

Added `/docs/comparisons.html` as a dedicated decision guide distinct from AI Opinion. It compares Nift's small project-aware build-layer model with Astro, Next.js, Hugo, Eleventy, Jekyll and Zola, including explicit areas where Nift is weaker: ecosystem size, integrated component/runtime features and built-in publication machinery. The guide preserves Nift's strongest differentiators—checked relationships, explicit dependency-aware incrementalism, native builds and stack independence—without presenting them as universal advantages.

## 2026-08-18 — Comparison framing revision

- Reworked `docs/comparisons` around strengths, weaknesses and ownership boundaries rather than broad “better than” claims.
- Removed Nift's self-row from the comparison table, added explicit weaknesses for each alternative, and retained per-tool guidance explaining when each architecture is the stronger fit.

## 2026-08-18 — Integrated-web comparison and desktop table fit

Repositioned the comparison guide away from the static-site-generator category. The table and narrative now compare Nift + a chosen stack with Astro, Next.js, Nuxt, SvelteKit, Laravel, Django and Ruby on Rails, emphasizing differing ownership boundaries rather than treating Nift as a full-stack runtime. Astro was retained as a popular component/islands-oriented website framework. Added a desktop table-fit policy and verified all generated tables across the sibling websites at 1024–1920 px without horizontal overflow.

## 2026-08-18 — Memory/resource-safety living documentation

Added a dedicated Memory & resource safety documentation page and linked it from Battle Tested/navigation. The page is deliberately a maintained evidence record: the dedicated leak/soak campaign is still marked planned, and future runs should publish exact reproducible workload/toolchain/result metadata rather than converting one run into a timeless claim.

The comparison guide was also broadened to cover React, Vue, Svelte and SolidJS alongside the integrated website/application frameworks, clarifying that Nift may coexist with those UI tools or avoid making one the site-wide application boundary when ordinary web output and selective interactivity are sufficient.

## 2026-08-18 — Jsonic++ memory-safety Checkpoint 1A and 1B attempt

Reconciled the Nift quality record with the completed embedded-Jsonic++ lifetime campaign: 120 ASan/LSan/UBSan iterations were clean and the separate 400-iteration RSS soak stabilized after warm-up. This remains component evidence, not an end-to-end Nift leak verdict. At that checkpoint, independent Valgrind confirmation could not run because Valgrind was unavailable, so the gate was left explicitly open.
## 2026-08-18 — Embedded Jsonic++ lifetime gate completed

Recorded the independent Valgrind confirmation for the Jsonic++ component: Valgrind 3.26.0 on Linux, commit `b9d0ff3`, 40 lifetime-corpus iterations, 0 errors, 0 bytes in use at exit, all 6,579,515 allocations freed and 215,992 KiB peak Valgrind RSS. This closes the standalone parser lifetime checkpoint while explicitly leaving Nift's later lifecycle/watch/large-project and cross-project integration gates open.
## 2026-08-18 — Minify++ memory-safety Checkpoint 2A

Reconciled the Nift quality record with the standalone Minify++ lifetime campaign: 80 ASan/LSan/UBSan multi-format iterations were clean, a 300-iteration native soak stabilized after warm-up, and both sanitized and native mixed-file CLI stress passed. This remains standalone component evidence; Nift-owned integration is intentionally deferred to the later cross-project checkpoint. Independent Valgrind confirmation remains open because the current environment has no Valgrind executable.

## 2026-08-18 — Standalone Minify++ lifetime gate completed

Recorded the independent Valgrind confirmation for the Minify++ component: Valgrind 3.26.0 on Linux x86_64, canonical commit `2a51a38`, 30 maintained lifetime-corpus iterations, 0 errors, 0 bytes in use at exit, all 2,448 allocations freed and 184,908 KiB peak process RSS. This completes the standalone component gate while leaving Nift's own core lifecycle, watch/large-project endurance and cross-project ownership integration checkpoints open.

## 2026-08-18 — Nift memory-safety Checkpoint 3 and Checkpoint 4A

Added maintained Nift core-lifecycle and endurance gates. Checkpoint 3 passed 57 sanitizer-backed lifecycle/test phases without a sanitizer finding. Checkpoint 4A established a stable native `build-auto` RSS band across 180 deterministic successful invalidations and exercised a 10,000-page worker/minification matrix below 12 MiB peak RSS. Testing also clarified that `build-auto` exits after a rebuild failure, so failure/repair cleanup remains a repeated-command contract rather than a persistent-watch contract. The short independent Valgrind watch confirmation remains Checkpoint 4B.

## 2026-08-18 — Checkpoint 4B Valgrind harness correction

The first external Checkpoint 4B attempt timed out during shutdown because the watch endurance runner signalled only the Valgrind supervisor PID. The harness now runs the monitored process tree in its own process group, uses group-wide SIGINT with a 30-second Valgrind finalization window, and escalates only when necessary. No public leak verdict changed; the independent Checkpoint 4B evidence remains pending a corrected rerun.

## 2026-08-18 — Checkpoint 4B pacing correction

A second external Valgrind run confirmed clean shutdown and reported no leak/error findings for the partial run, but fixed-rate watch edits could outrun Valgrind-supervised rebuilds and cause early `build-auto` exit. The endurance harness is now acknowledgement-driven: each mutation waits for the generated page to rebuild before the next mutation. A synthetic slow-supervisor 30-cycle probe passes; the public verdict remains pending a complete Valgrind rerun.

## 2026-08-18 — Checkpoint 4B terminal-safe supervisor correction

The full 30-cycle external Valgrind workload completed, but teardown escalated to SIGKILL before Valgrind could finalize. The watch harness now uses `/dev/null` for stdin so test failure cannot disturb the caller's terminal, while `valgrind_nift.sh` stays resident to forward shutdown signals and wait for Valgrind's final report. A synthetic 30-cycle forwarding-supervisor probe passes; the independent leak verdict remains pending.

## 2026-08-18 — Nift memory-safety Checkpoint 4 completed

Reconciled the passing external Checkpoint 4B result. At Nift commit `92e6c05`, the corrected Valgrind-supervised, acknowledgement-driven watch workload completed all 30 cycles in 14.044 seconds and shut down through the intended SIGINT/status-130 path. Combined with Checkpoint 4A's native watch settling, sanitizer execution and 10,000-page worker/minification matrix, this closes Nift's watch/endurance checkpoint. The exact JSON evidence is retained in the Nift source tree and the public memory/Battle Tested pages now reflect the completed gate.

## 2026-08-18 — Nift memory-safety Checkpoint 6

Closed the cross-component integration gate at Nift commit `9b64e94`. Jsonic++ and Minify++ standalone/embedded mirrors were synchronized first; a 90-page native mixed workload then completed 60 rounds with 20 injected JSON/minification failures and successful repair, while the sanitizer build completed a 30-page/12-round form with no sanitizer finding. The corrected Checkpoint 6B run subsequently passed with 19 Nift invocations directly monitored under Valgrind across 12 rounds / 40 pages and four expected component failures, all with zero Valgrind error summaries and no non-zero leak bytes. The memory campaign now deliberately stops expanding and the roadmap moves to incremental-vs-clean equivalence, filesystem/transaction integrity, parser fuzz/resource boundaries and cross-platform behavioural equivalence.

## 2026-08-18 — Checkpoint 6B instrumentation correction

Rejected the first external 6B result as invalid product evidence after identifying that Valgrind had been placed around the Python integration orchestrator rather than Nift. The integration harness now owns a Valgrind mode that monitors each Nift subprocess directly and treats Memcheck errors/leaks independently from expected compiler/build failures. Checkpoint 6B remains open pending a corrected external run.

## 2026-08-18 — Checkpoint 6B completed

Reconciled the corrected external Valgrind evidence at Nift commit `03e18b4`. The 40-page / 12-round integration workload directly instrumented 19 Nift invocations, including four deliberately expected Jsonic++/Minify++ failure paths. Every invocation reported zero Valgrind errors and no non-zero definite/indirect/possible leak bytes; all repair phases and the final clean build passed. This closes the cross-component memory campaign. The earlier Python-wrapped attempt remains explicitly rejected as invalid Nift evidence.
## 2026-08-18 — Battle Tested reliability framework refreshed

Reframed Battle Tested around guarantee-first falsification rather than test-count marketing. The public page now distinguishes deliberate test hardening from accumulated field hardening, acknowledges Nift's shorter production history, records the completed memory/resource campaign as scoped evidence, and introduces incremental-vs-clean equivalence as the next planned invariant without presenting it as proven. Competitor context remains secondary and was re-verified against current Astro, Meson, Hugo, Ninja and esbuild public sources.

## 2026-08-18 — Checkpoint 7 incremental equivalence completed

Promoted Nift's incremental-build semantics from a planned property to scoped executable evidence. The maintained property gate exercised modified/hash/hybrid modes across 24 deterministic 30-step mutation sequences and compared the complete public output tree after every incremental build against a clean rebuild from the same logical project state: 720/720 byte-equivalent comparisons. The discovery run also sharpened the oracle by preserving user-owned untracked files in `public/`. Battle Tested now advances filesystem/transaction integrity to the current frontier.

## 2026-08-18 — Checkpoint 8 filesystem/transaction integrity completed

Completed a 13-case Linux filesystem-chaos/safe-failure corpus at Nift commit `e261074`. The campaign uncovered and fixed unreadable inputs being conflated with empty files, directory-as-file reads that could abort with `std::length_error`, and truncate-in-place writes that could damage a last-good artifact if interrupted. Nift now validates readable regular files at the relevant boundaries and stages generated/state writes to same-directory temporary files before replacement. Forced `SIGKILL` during a 48 MiB output write preserved the prior output and metadata, and a later build cleaned the stale temporary and recovered. Battle Tested now advances parser fuzz/resource boundaries to the current frontier.

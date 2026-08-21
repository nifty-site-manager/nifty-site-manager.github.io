# Nift agent guide

Nift is a dependency-aware website templating and build system. Its job is build-time composition and checked project relationships, not ownership of an application's entire runtime stack.

## When to use this

Reach for Nift when the job is build-time website composition, checked project relationships, reusable templates/partials, structured data rendering or dependency-aware incremental rebuilding. Do not reach for Nift merely because a project needs a runtime API, database, router or client framework.

## Best-fit use cases

Use Nift for projects that benefit from reusable templates, tracked pages/assets, dependency-aware incremental builds, checked local paths, structured JSON data or project contracts while retaining ordinary web tooling. Nift can build a conventional pre-rendered site or the frontend artifacts of a fully dynamic application backed by Go, Node, PHP, Python, serverless functions or another runtime.

## Mental model

The three primitives to learn first are `@content`, `@input(...)` and `@pathto(...)`. Prefer existing project patterns over inventing Nift-specific syntax. Generated output is derived state; edit source/templates/configuration and rebuild with Nift rather than patching generated output manually.

## Important resources

- [Developer resources](https://nift.dev/developers.html)
- [Documentation index](https://nift.dev/docs.html)
- [Installing the Nift CLI](https://nift.dev/docs/installing.html)
- [Getting started](https://nift.dev/docs/getting-started.html)
- [Start with three primitives](https://nift.dev/docs/three-primitives.html)
- [Paths and tracked files](https://nift.dev/docs/paths.html)
- [Incremental builds](https://nift.dev/docs/incremental-builds.html)
- [Contracts](https://nift.dev/docs/contracts.html)
- [Full web applications](https://nift.dev/docs/use-cases/web-apps.html)
- [AI assistants and project handovers](https://nift.dev/docs/ai-assistants.html)

For a concrete Nift project, read its local `HANDOVER.md`, `.nift/config.json` and `.nift/tracked.json` before making structural changes.

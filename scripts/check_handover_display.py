#!/usr/bin/env python3
"""Verify the HANDOVER.md rendered on the AI Agents page matches the canonical
HANDOVER.md byte for byte.

The docs page displays the canonical handover as an HTML-escaped duplicate
(because the markdown deliberately contains Nift syntax that @input would
interpret). This check prevents that displayed copy drifting from the real
file: it extracts the rendered block from public/docs/ai-agents.html,
HTML-unescapes it, and compares it against public/HANDOVER.md.

Run after a website build:
    python3 scripts/check_handover_display.py
"""
import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGE = ROOT / "public" / "docs" / "ai-agents.html"
CANON = ROOT / "public" / "HANDOVER.md"


def main() -> int:
    if not PAGE.exists():
        print(f"check-handover-display FAIL: {PAGE.relative_to(ROOT)} not found (run nift build-all first)")
        return 1
    source = PAGE.read_text(encoding="utf-8")
    marker = re.compile(
        r'<h3>The canonical HANDOVER\.md</h3>\s*<pre><code class="language-plaintext">(.*?)</code></pre>',
        flags=re.S,
    )
    match = marker.search(source)
    if not match:
        print("check-handover-display FAIL: canonical HANDOVER block not found on the AI Agents page")
        return 1
    rendered = html.unescape(match.group(1))
    canonical = CANON.read_bytes()
    if rendered.encode("utf-8") != canonical:
        print("check-handover-display FAIL: displayed HANDOVER.md differs from public/HANDOVER.md")
        print(f"  rendered {len(rendered.encode('utf-8'))} bytes, canonical {len(canonical)} bytes")
        for i, (a, b) in enumerate(zip(rendered.encode("utf-8"), canonical)):
            if a != b:
                print(f"  first diff at byte {i}: {a!r} vs {b!r}")
                break
        return 1
    print("check-handover-display passed: displayed HANDOVER.md is byte-identical to public/HANDOVER.md")
    return 0


if __name__ == "__main__":
    sys.exit(main())

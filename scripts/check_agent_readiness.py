#!/usr/bin/env python3
from pathlib import Path
import json, re, sys
from xml.etree import ElementTree as ET
import html as htmlmod

ROOT=Path(__file__).resolve().parents[1]
PUBLIC=ROOT/'public'

def fail(msg):
    print('FAIL:',msg,file=sys.stderr); raise SystemExit(1)

def text(path): return path.read_text(encoding='utf-8')

def visible_chars(html):
    html=re.sub(r'<script\b.*?</script>',' ',html,flags=re.I|re.S)
    html=re.sub(r'<style\b.*?</style>',' ',html,flags=re.I|re.S)
    html=re.sub(r'<[^>]+>',' ',html)
    return len(re.sub(r'\s+',' ',html).strip())

home_src=text(ROOT/'content/index.html')
if '<h1 class="hero-tagline">Keep your HTML. Keep your tools. Stop repeating yourself.</h1>' not in home_src: fail('homepage visible H1 missing')
home_tpl=text(ROOT/'templates/home.html')
for needle in ['rel="canonical" href="https://nift.dev/"','property="og:image"','property="og:type"','type="application/ld+json"','"@type": "SoftwareApplication"']:
    if needle not in home_tpl: fail('homepage metadata missing '+needle)
llms=text(ROOT/'content/llms.txt')
for needle in ['## When to use this','## Official CLI','https://nift.dev/developers.html','https://nift.dev/sitemap.xml']:
    if needle not in llms: fail('llms.txt missing '+needle)
for name in ['developers','about','contact','privacy']:
    p=ROOT/'content'/f'{name}.html'
    if not p.is_file(): fail(f'{name} page missing')
    if visible_chars(text(p)) < 500: fail(f'{name} page is too thin')

tracked=json.loads(text(ROOT/'.nift/tracked.json'))['tracked']
expected=set()
for item in tracked:
    name=item['name']; ext=item.get('output-ext','.html')
    if ext!='.html' or name=='404' or str(item.get('template','')).startswith('templates/legacy-'): continue
    expected.add('https://nift.dev/' if name=='/' else f'https://nift.dev/{name}.html')
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
locs={x.text for x in ET.parse(ROOT/'content/sitemap.xml').findall('s:url/s:loc',ns)}
if locs != expected:
    fail(f'sitemap/tracked mismatch missing={sorted(expected-locs)} extra={sorted(locs-expected)}')

if PUBLIC.exists():
    hp=text(PUBLIC/'index.html')
    if hp.lower().count('<h1') < 1: fail('generated homepage has no H1')
    if visible_chars(hp) < 500: fail('generated homepage raw HTML is too thin')
    for rel in ['llms.txt','agents.md','sitemap.xml','developers.html','about.html','contact.html','privacy.html','404.html']:
        if not (PUBLIC/rel).is_file(): fail('generated endpoint missing '+rel)
    m=re.search(r'<script type="application/ld\+json">\s*(.*?)\s*</script>', hp, flags=re.S)
    if not m: fail('generated homepage JSON-LD missing')
    try: json.loads(htmlmod.unescape(m.group(1)))
    except Exception as exc: fail('generated homepage JSON-LD invalid: '+str(exc))
    if 'Nift is itself an official command-line tool' not in text(PUBLIC/'llms.txt'):
        fail('generated llms.txt does not expose the CLI')
    robots=text(PUBLIC/'robots.txt')
    if 'Sitemap: https://nift.dev/sitemap.xml' not in robots:
        fail('robots.txt does not advertise sitemap')
    p404=text(PUBLIC/'404.html')
    for needle in ['/docs.html','/sitemap.xml','/llms.txt']:
        if needle not in p404: fail('404 recovery missing '+needle)
print(f'PASS: agent-readiness surfaces coherent ({len(expected)} sitemap URLs)')

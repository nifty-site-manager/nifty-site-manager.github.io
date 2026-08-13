(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const mobile = document.querySelector('[data-mobile-nav]');
  const docsToggle = document.querySelector('[data-docs-menu-toggle]');
  const docsMobile = document.querySelector('[data-docs-mobile-nav]');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const closeMobileMenu = () => {
    mobile?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  toggle?.addEventListener('click', () => {
    const open = mobile?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(Boolean(open)));
  });

  mobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));

  const closeDocsMenu = () => {
    docsMobile?.classList.remove('open');
    docsToggle?.setAttribute('aria-expanded', 'false');
  };

  docsToggle?.addEventListener('click', () => {
    const open = docsMobile?.classList.toggle('open');
    docsToggle.setAttribute('aria-expanded', String(Boolean(open)));
  });

  docsMobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDocsMenu));

  // If a narrow viewport has its menu open and becomes desktop-sized again,
  // clean up the mobile state rather than leaving it waiting to reappear later.
  const desktopBreakpoint = window.matchMedia('(min-width: 761px)');
  const syncMenuToViewport = event => {
    if (event.matches) {
      closeMobileMenu();
      closeDocsMenu();
    }
  };
  desktopBreakpoint.addEventListener?.('change', syncMenuToViewport);
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 761) closeMobileMenu();
    if (window.innerWidth >= 761) closeDocsMenu();
  }, { passive: true });

  // Three-state theme: system is the default, with the explicit choice persisted.
  const resolveTheme = mode => mode === 'system' ? (systemTheme.matches ? 'dark' : 'light') : mode;
  const applyTheme = mode => {
    document.documentElement.dataset.themeMode = mode;
    document.documentElement.dataset.theme = resolveTheme(mode);
    localStorage.setItem('nift-theme', mode);
    document.querySelectorAll('[data-theme-choice]').forEach(button => {
      const active = button.dataset.themeChoice === mode;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  const initialTheme = localStorage.getItem('nift-theme') || 'system';
  applyTheme(['system', 'light', 'dark'].includes(initialTheme) ? initialTheme : 'system');
  document.querySelectorAll('[data-theme-choice]').forEach(button => {
    button.addEventListener('click', () => applyTheme(button.dataset.themeChoice));
  });
  systemTheme.addEventListener?.('change', () => {
    if ((localStorage.getItem('nift-theme') || 'system') === 'system') applyTheme('system');
  });


  // Syntax highlighting is loaded only on pages that contain block examples.
  const codeBlocks = [...document.querySelectorAll('pre code')];
  const loadHighlighting = () => {
    if (!codeBlocks.length) return;

    const ensureTheme = () => {
      if (document.querySelector('link[data-nift-hljs-theme]')) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css';
      link.dataset.niftHljsTheme = 'true';
      document.head.appendChild(link);
    };

    const registerNift = hljs => {
      if (hljs.getLanguage('nift')) return;
      hljs.registerLanguage('nift', () => ({
        name: 'Nift',
        contains: [
          { className: 'meta', begin: /\\?@(?:content\b|input(?=\()|pathto(?=\()|getenv(?=\()|ent(?=\()|dep(?=\())/ },
          { className: 'meta', begin: /\\?\$\[(?:title|name|content-path|output-path|template-path|build-timezone|build-time|build-UTC-time|build-date|build-UTC-date|build-YYYY|build-YY|build-OS)\]/ },
          { className: 'string', begin: /'/, end: /'/ },
          { className: 'string', begin: /"/, end: /"/ },
          { className: 'comment', begin: /#/, end: /$/ }
        ]
      }));
    };

    const apply = hljs => {
      registerNift(hljs);
      codeBlocks.forEach(code => {
        if (!code.classList.contains('hljs')) hljs.highlightElement(code);
      });
    };

    ensureTheme();
    if (window.hljs) {
      apply(window.hljs);
      return;
    }

    const existing = document.querySelector('script[data-nift-hljs-script]');
    if (existing) {
      existing.addEventListener('load', () => window.hljs && apply(window.hljs), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js';
    script.dataset.niftHljsScript = 'true';
    script.onload = () => window.hljs && apply(window.hljs);
    script.onerror = () => console.warn('highlight.js failed to load; code examples remain readable without it.');
    document.body.appendChild(script);
  };
  const scheduleHighlighting = () => {
    if (!codeBlocks.length) return;
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadHighlighting, { timeout: 1800 });
    } else {
      window.addEventListener('load', () => setTimeout(loadHighlighting, 0), { once: true });
    }
  };
  scheduleHighlighting();

  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  items.forEach(el => observer.observe(el));
})();

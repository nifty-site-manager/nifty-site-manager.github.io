(() => {
  const demo = document.querySelector('[data-live-demo]');
  if (!demo) return;

  const tabs = [...demo.querySelectorAll('[data-demo-tab]')];
  const sources = [...demo.querySelectorAll('.demo-source')];

  const showTab = name => {
    tabs.forEach(tab => {
      const active = tab.dataset.demoTab === name;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    sources.forEach(source => {
      source.classList.toggle('active', source.dataset.demoSource === name);
    });

    // script.js creates a single copy control for the initially visible demo
    // source. Move that same control when the selected tab changes.
    const activeSource = sources.find(source => source.dataset.demoSource === name);
    const demoWrap = demo.querySelector('.code-block-wrap');
    if (activeSource && demoWrap) {
      const currentPre = demoWrap.querySelector('pre.demo-source');
      if (currentPre !== activeSource) {
        demoWrap.parentNode.insertBefore(activeSource, demoWrap);
        demoWrap.insertBefore(activeSource, demoWrap.firstChild);
        if (currentPre) demoWrap.parentNode.insertBefore(currentPre, demoWrap.nextSibling);
      }
    }
  };

  tabs.forEach(tab => tab.addEventListener('click', () => showTab(tab.dataset.demoTab)));
  showTab('template');
})();

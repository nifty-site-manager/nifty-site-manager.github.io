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
  };

  tabs.forEach(tab => tab.addEventListener('click', () => showTab(tab.dataset.demoTab)));
  showTab('template');
})();

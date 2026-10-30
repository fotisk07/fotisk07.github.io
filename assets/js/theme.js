(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;
  try { preference = localStorage.getItem('theme'); } catch (_) {}
  if (!['light', 'dark'].includes(preference)) preference = null;

  function apply(theme) {
    root.dataset.theme = theme;
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    }
    document.querySelectorAll('[data-dark-src]').forEach(image => {
      image.src = theme === 'dark' ? image.dataset.darkSrc : image.dataset.lightSrc;
    });
  }

  // Apply before CSS loads to avoid flashing the wrong background.
  apply(preference || (system.matches ? 'dark' : 'light'));
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme);
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', preference); } catch (_) {}
      apply(preference);
    });
  });
  system.addEventListener('change', event => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
})();

// Re-render after config edits; index.html also includes a static fallback.
document.getElementById('homepage').innerHTML = homepage(USER_CONFIG);
document.title = `${USER_CONFIG.name} (雷浩瑀) | Research`;
for (const selector of ['meta[name="description"]','meta[property="og:description"]']) {
  document.querySelector(selector).content = USER_CONFIG.description;
}
document.querySelector('meta[property="og:title"]').content = document.title;
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
function setTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  toggle.setAttribute('aria-pressed', String(theme === 'dark'));
}
let saved;
try { saved = localStorage.getItem('haoyu-homepage-theme'); } catch (_) {}
setTheme(saved === 'dark' ? 'dark' : 'light');
toggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('haoyu-homepage-theme', theme); } catch (_) {}
});
// Preserve previous homepage section links.
const aliases = {'about-me':'about','-news':'news','-educations':'experience','-publications':'publications','-experiences':'experience','experiences':'experience','-honors-and-awards':'awards','honors-and-awards':'awards','-languages-and-skills':'skills','-teaching':'teaching'};
function resolveHash() {
  const id = aliases[location.hash.slice(1)] || location.hash.slice(1);
  if (id) document.getElementById(id)?.scrollIntoView();
}
window.addEventListener('hashchange', resolveHash);
requestAnimationFrame(resolveHash);

/* Shared browser/build renderer. All personal text lives in config.js. */
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
// Bold only: escape HTML first so content cannot inject markup or scripts.
function formatText(value) {
  return escapeHTML(value).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function homepage(cfg) {
  const e = escapeHTML;
  const link = (label,url,cls='') => `<a class="${cls}" href="${e(url)}">${e(label)}</a>`;
  const links = (items,cls='contact-item') => Object.entries(items).filter(([,url])=>url && url !== '#').map(([label,url])=>link(label,url,cls)).join('');
  const section = (id,title,body,alt=false) => `<section id="${id}" class="section${alt?' section-alt':''}"><div class="section-container"><h2 class="section-title"><span class="title-icon" aria-hidden="true">//</span> ${title}</h2>${body}</div></section>`;
  const timeline = items => items.map(item=>`<div class="exp-item"><div class="exp-period">${e(item.period)}</div><p class="exp-org">${formatText(item.text)}</p></div>`).join('');
  const educationSymbol = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5-10-5Z"/><path d="M6 11v6c4 3 8 3 12 0v-6M22 9v7"/></svg>';
  const workSymbol = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c6 4 12 4 18 0M10 13h4v3h-4z"/></svg>';
  const logoTimeline = (items,kind) => items.map(item => `<div class="exp-item exp-with-logo"><div class="institution-logo">${item.icon ? `<img src="${e(item.icon)}" alt="${e(item.iconAlt || 'Institution logo')}" loading="lazy">` : (kind === 'education' ? educationSymbol : workSymbol)}</div><div class="exp-copy"><div class="exp-period">${e(item.period)}</div><p class="exp-org">${formatText(item.text)}</p></div></div>`).join('');
  const nav = [['about','About'],['news','News'],['publications','Selected Publications'],['experience','Experience'],['awards','Awards'],['teaching','Teaching'],['academic-service','Service'],['contact','Contact']];
  const newsItem = n => `<div class="news-item"><span class="news-date">${e(n.date)}</span><p class="news-text">${formatText(n.text)}</p></div>`;
  const authors = s => formatText(s).split(e(cfg.name)).join(`<strong>${e(cfg.name)}</strong>`);
  return `<a href="#about" class="skip-link">Skip to main content</a>
  <nav class="navbar" aria-label="Main navigation"><div class="nav-container"><a href="#about" class="nav-logo">[${e(cfg.initials)}]</a><div class="nav-links">${nav.map(([id,name])=>link(name,'#'+id)).join('')}</div><button class="nav-btn" id="themeToggle" type="button" aria-label="Switch to dark theme">Dark mode</button></div></nav>
  <main>
  <section id="about" class="hero"><div class="hero-bg" aria-hidden="true"><div class="gradient-orb orb-1"></div><div class="gradient-orb orb-2"></div></div><div class="hero-content"><aside class="hero-image"><div class="image-frame"><img class="portrait" src="${e(cfg.photo)}" alt="Portrait of ${e(cfg.name)}" width="200" height="200"></div><p class="profile-location">${e(cfg.location)}</p><div class="profile-links">${links(cfg.links)}</div></aside>
  <div class="hero-text"><p class="eyebrow">PHYSICAL AI · WORLD MODELS</p><h1 class="hero-name">${e(cfg.name)} <span lang="zh">${e(cfg.chineseName)}</span></h1><p class="hero-title">${formatText(cfg.organization)}<br>${formatText(cfg.role)}</p>${cfg.bio.map(p=>`<p class="hero-description">${formatText(p)}</p>`).join('')}<div class="research-tags">${cfg.interests.map(t=>`<span class="tag">${formatText(t)}</span>`).join('')}</div><p class="invitation">${formatText(cfg.invitation)}</p><div class="hero-cta">${link('Email me','mailto:'+cfg.email,'btn btn-primary')}</div></div></div></section>
  ${section('news','News',`<div class="news-list">${cfg.news.slice(0,5).map(newsItem).join('')}</div>${cfg.news.length>5?`<details class="older-news"><summary>Earlier news (${cfg.news.length-5})</summary>${cfg.news.slice(5).map(newsItem).join('')}</details>`:''}`,true)}
  ${section('publications','Selected Publications',`<p class="section-note">* Equal contribution</p><div class="publications-list">${cfg.selectedPublications.map(p=>`<article class="pub-card" data-year="${p.year}"><div class="pub-visual"><img src="${e(p.image)}" alt="Overview of ${e(p.title)}" loading="lazy"><span class="pub-year">${p.year}</span></div><div class="pub-content"><p class="pub-venue">${formatText(p.venue)}</p><h3 class="pub-title">${formatText(p.title)}</h3><p class="pub-authors">${authors(p.authors)}</p><p class="pub-abstract">${formatText(p.abstract)}</p><div class="pub-links">${links(p.links,'pub-link')}</div></div></article>`).join('')}</div>`)}
  ${section('experience','Education & Experience',`<div class="experience-grid"><div><h3 class="exp-category">Education</h3>${logoTimeline(cfg.education,'education')}</div><div><h3 class="exp-category">Experience</h3>${logoTimeline(cfg.experience,'experience')}</div></div>`,true)}
  ${section('awards','Honors & Awards',timeline(cfg.awards))}
  ${section('teaching','Teaching',timeline(cfg.teaching),true)}
  ${section('academic-service','Academic Service',(cfg.academicService || []).map((item,index) => item.text?.trim() ? timeline([item]) : `<div class="exp-item service-placeholder"><span class="exp-period">Conference review · ${String(index + 1).padStart(2,'0')}</span><p class="exp-org">To be added</p></div>`).join(''))}
  ${section('skills','Languages & Skills',cfg.skills.map(s=>`<p class="skills-line">${formatText(s)}</p>`).join(''))}
  ${section('contact','Contact',`<div class="contact-content"><p class="contact-intro">${formatText(cfg.invitation)}</p><p class="email-link">${link(cfg.email,'mailto:'+cfg.email)}</p><div class="contact-links">${links(cfg.links)}</div></div>`,true)}
  </main><footer class="footer"><p>© ${new Date().getFullYear()} ${e(cfg.name)} · Glass theme · Academic Homepage Templates.</p></footer>`;
}

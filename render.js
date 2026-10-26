/* Shared browser/build renderer. All personal text lives in config.js. */
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function homepage(cfg) {
  const e = escapeHTML;
  const link = (label,url,cls='') => `<a class="${cls}" href="${e(url)}">${e(label)}</a>`;
  const links = (items,cls='contact-item') => Object.entries(items).filter(([,url])=>url && url !== '#').map(([label,url])=>link(label,url,cls)).join('');
  const section = (id,title,body,alt=false) => `<section id="${id}" class="section${alt?' section-alt':''}"><div class="section-container"><h2 class="section-title"><span class="title-icon" aria-hidden="true">//</span> ${title}</h2>${body}</div></section>`;
  const timeline = items => items.map(item=>`<div class="exp-item"><div class="exp-period">${e(item.period)}</div><p class="exp-org">${e(item.text)}</p></div>`).join('');
  const nav = [['about','About'],['news','News'],['publications','Publications'],['experience','Experience'],['awards','Awards'],['teaching','Teaching'],['contact','Contact']];
  const newsItem = n => `<div class="news-item"><span class="news-date">${e(n.date)}</span><p class="news-text">${e(n.text)}</p></div>`;
  const authors = s => e(s).split(e(cfg.name)).join(`<strong>${e(cfg.name)}</strong>`);
  return `<a href="#about" class="skip-link">Skip to main content</a>
  <nav class="navbar" aria-label="Main navigation"><div class="nav-container"><a href="#about" class="nav-logo">[${e(cfg.initials)}]</a><div class="nav-links">${nav.map(([id,name])=>link(name,'#'+id)).join('')}</div><button class="nav-btn" id="themeToggle" type="button" aria-label="Switch to dark theme">Dark mode</button></div></nav>
  <main>
  <section id="about" class="hero"><div class="hero-content"><aside class="hero-image"><div class="image-frame"><img class="portrait" src="${e(cfg.photo)}" alt="Portrait of ${e(cfg.name)}" width="200" height="200"></div><p class="profile-location">${e(cfg.location)}</p><div class="profile-links">${links(cfg.links)}</div></aside>
  <div class="hero-text"><p class="eyebrow">GENERATIVE MODELS · TRUSTWORTHY AI</p><h1 class="hero-name">${e(cfg.name)} <span lang="zh">${e(cfg.chineseName)}</span></h1><p class="hero-title">${e(cfg.organization)}<br>${e(cfg.role)}</p>${cfg.bio.map(p=>`<p class="hero-description">${e(p)}</p>`).join('')}<div class="research-tags">${cfg.interests.map(t=>`<span class="tag">${e(t)}</span>`).join('')}</div><p class="invitation">${e(cfg.invitation)}</p><div class="hero-cta">${link('View publications','#publications','btn btn-primary')}${link('Email me','mailto:'+cfg.email,'btn btn-secondary')}</div><details class="academic-links"><summary>Academic connections</summary><div class="profile-links">${links(cfg.academicLinks)}</div></details></div></div></section>
  ${section('news','News',`<div class="news-list">${cfg.news.slice(0,5).map(newsItem).join('')}</div>${cfg.news.length>5?`<details class="older-news"><summary>Earlier news (${cfg.news.length-5})</summary>${cfg.news.slice(5).map(newsItem).join('')}</details>`:''}`,true)}
  ${section('publications','Publications',`<p class="section-note">${cfg.publications.length} papers · * Equal contribution</p><div class="publications-list">${cfg.publications.map(p=>`<article class="pub-card" data-year="${p.year}"><div class="pub-visual"><img src="${e(p.image)}" alt="Overview of ${e(p.title)}" loading="lazy"><span class="pub-year">${p.year}</span></div><div class="pub-content"><p class="pub-venue">${e(p.venue)}</p><h3 class="pub-title">${e(p.title)}</h3><p class="pub-authors">${authors(p.authors)}</p><p class="pub-abstract">${e(p.abstract)}</p><div class="pub-links">${links(p.links,'pub-link')}</div></div></article>`).join('')}</div>`)}
  ${section('experience','Education & Experience',`<div class="experience-grid"><div><h3 class="exp-category">Education</h3>${timeline(cfg.education)}</div><div><h3 class="exp-category">Experience</h3>${timeline(cfg.experience)}</div></div>`,true)}
  ${section('awards','Honors & Awards',timeline(cfg.awards))}
  ${section('teaching','Teaching',timeline(cfg.teaching),true)}
  ${section('skills','Languages & Skills',cfg.skills.map(s=>`<p class="skills-line">${e(s)}</p>`).join(''))}
  ${section('contact','Contact',`<div class="contact-content"><p class="contact-intro">${e(cfg.invitation)}</p><p class="email-link">${link(cfg.email,'mailto:'+cfg.email)}</p><div class="contact-links">${links(cfg.links)}</div></div>`,true)}
  </main><footer class="footer"><p>© ${new Date().getFullYear()} ${e(cfg.name)} · Based on the Academic Homepage Templates design.</p></footer>`;
}

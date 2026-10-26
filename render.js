const INK_MOTIF = `<div class="hero-motif" aria-hidden="true">
                    <svg aria-hidden="true" viewBox="0 0 240 65" width="360" height="98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <path id="petal-main" d="M0 0 C-1.5 -2, -2 -4, 0 -7 C2 -9, 3.5 -7, 3 -4 C2.8 -2, 1.5 0, 0 0Z"/>
                            <path id="petal-side" d="M0 0 C-1 -1.8, -1.5 -3.5, 0 -6 C1.5 -7.5, 2.5 -5.5, 2 -3 C1.8 -1.2, 1 0, 0 0Z"/>
                            <radialGradient id="petalGrad" cx="40%" cy="70%">
                                <stop offset="0%" style="stop-color:var(--accent);stop-opacity:0.85"/>
                                <stop offset="60%" style="stop-color:var(--accent);stop-opacity:0.75"/>
                                <stop offset="100%" style="stop-color:var(--accent);stop-opacity:0.55"/>
                            </radialGradient>
                            <linearGradient id="branchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color:#6b5a14;stop-opacity:0.4"/>
                                <stop offset="50%" style="stop-color:#8b7324;stop-opacity:0.5"/>
                                <stop offset="100%" style="stop-color:#5b4a10;stop-opacity:0.3"/>
                            </linearGradient>
                        </defs>
                        <path d="M55 50 C70 45, 85 40, 100 35 C120 28, 145 24, 170 22 Q185 21, 195 22" stroke="url(#branchGrad)" stroke-width="2.3" fill="none" stroke-linecap="round"/>
                        <path d="M115 31 Q114 27, 112 24" stroke="url(#branchGrad)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
                        <path d="M148 24 Q149 27, 148 29" stroke="url(#branchGrad)" stroke-width="1.1" fill="none" stroke-linecap="round"/>
                        <circle cx="100" cy="35" r="1.1" fill="#4a3a0a" opacity="0.25"/>
                        <g transform="translate(70, 44)">
                            <use href="#petal-side" fill="url(#petalGrad)" opacity="0.75" transform="rotate(-72)"/>
                            <use href="#petal-side" fill="url(#petalGrad)" opacity="0.75" transform="rotate(216)"/>
                            <use href="#petal-main" fill="url(#petalGrad)" opacity="0.9" transform="rotate(0)"/>
                            <use href="#petal-main" fill="url(#petalGrad)" opacity="0.85" transform="rotate(72)"/>
                            <use href="#petal-main" fill="url(#petalGrad)" opacity="0.85" transform="rotate(144)"/>
                            <circle cx="0" cy="0" r="2.8" fill="#f0e6d2" opacity="0.92"/>
                            <circle cx="0" cy="0" r="1.8" fill="#e8dcc8" opacity="0.7"/>
                            <g stroke="#c9a84a" stroke-width="0.35" fill="none">
                                <path d="M0 0 Q0.5 -2, 0.8 -4.5" opacity="0.8"/>
                                <path d="M0 0 Q-0.3 -1.8, -0.5 -4" opacity="0.75"/>
                                <path d="M0 0 Q1.2 -1.5, 1.8 -3.8" opacity="0.7"/>
                                <path d="M0 0 Q-1 -1.2, -1.5 -3.2" opacity="0.7"/>
                                <path d="M0 0 Q0 -1.5, 0 -3.5" opacity="0.65"/>
                            </g>
                            <g fill="#f0c860">
                                <circle cx="0.8" cy="-4.5" r="0.65" opacity="0.85"/>
                                <circle cx="-0.5" cy="-4" r="0.6" opacity="0.8"/>
                                <circle cx="1.8" cy="-3.8" r="0.55" opacity="0.75"/>
                                <circle cx="-1.5" cy="-3.2" r="0.5" opacity="0.75"/>
                                <circle cx="0" cy="-3.5" r="0.5" opacity="0.7"/>
                            </g>
                        </g>
                        <g transform="translate(112, 23) scale(0.9)">
                            <use href="#petal-side" fill="url(#petalGrad)" opacity="0.65" transform="rotate(-60)"/>
                            <use href="#petal-side" fill="url(#petalGrad)" opacity="0.65" transform="rotate(60)"/>
                            <use href="#petal-main" fill="url(#petalGrad)" opacity="0.75" transform="rotate(0) scale(0.85)"/>
                            <use href="#petal-side" fill="url(#petalGrad)" opacity="0.7" transform="rotate(120) scale(0.8)"/>
                            <use href="#petal-side" fill="url(#petalGrad)" opacity="0.7" transform="rotate(-120) scale(0.8)"/>
                            <circle cx="0" cy="0" r="2" fill="#f0e6d2" opacity="0.9"/>
                            <circle cx="0" cy="-3" r="0.45" fill="#f0c860" opacity="0.75"/>
                            <path d="M-2 3 Q0 4 2 3 L1.8 4.5 Q0 5 -1.8 4.5Z" fill="#3a5c13" opacity="0.5"/>
                        </g>
                        <g transform="translate(155, 26) scale(0.75)">
                            <use href="#petal-side" fill="url(#petalGrad)" opacity="0.75" transform="rotate(-72)"/>
                            <use href="#petal-main" fill="url(#petalGrad)" opacity="0.85" transform="rotate(0)"/>
                            <use href="#petal-main" fill="url(#petalGrad)" opacity="0.8" transform="rotate(72)"/>
                            <use href="#petal-main" fill="url(#petalGrad)" opacity="0.75" transform="rotate(144)"/>
                            <use href="#petal-side" fill="url(#petalGrad)" opacity="0.7" transform="rotate(216)"/>
                            <circle cx="0" cy="0" r="2.2" fill="#f0e6d2" opacity="0.9"/>
                            <g fill="#f0c860">
                                <circle cx="0.5" cy="-3.8" r="0.5" opacity="0.75"/>
                                <circle cx="-0.4" cy="-3" r="0.45" opacity="0.7"/>
                            </g>
                        </g>
                        <g transform="translate(148, 29) scale(0.45)">
                            <ellipse cx="0" cy="-1" rx="3" ry="4" fill="var(--accent)" opacity="0.55"/>
                            <path d="M-1.5 3 Q0 3.5 1.5 3 L1.2 4 Q0 4.2 -1.2 4Z" fill="#3a5c13" opacity="0.4"/>
                        </g>
                    </svg>
                </div>`;
/* Ink theme renderer; personal content is maintained in config.js. */
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function homepage(cfg) {
  const e = escapeHTML;
  const link = (label,url) => `<a href="${e(url)}">${e(label)}</a>`;
  const links = items => Object.entries(items).filter(([,url])=>url && url !== '#').map(([label,url])=>link(label,url)).join('<span class="link-dot" aria-hidden="true"></span>');
  const divider = '<div class="ink-divider" aria-hidden="true"></div>';
  const section = (id,title,cn,body) => `${divider}<section id="${id}"><div class="section-grid"><div class="section-side"><h2 class="section-heading">${title}</h2><span class="section-label-cn" lang="zh">${cn}</span></div><div class="section-main">${body}</div></div></section>`;
  const timeline = items => `<div class="timeline">${items.map(item=>`<div class="timeline-item"><div class="timeline-dot" aria-hidden="true"></div><div class="timeline-content"><span class="timeline-period">${e(item.period)}</span><p>${e(item.text)}</p></div></div>`).join('')}</div>`;
  const nav = [['about','About'],['news','News'],['publications','Pub.'],['experience','Exp.'],['contact','Contact']];
  const newsItem = n => `<div class="news-item"><time class="timeline-period">${e(n.date)}</time><p>${e(n.text)}</p></div>`;
  const authors = s => e(s).split(e(cfg.name)).join(`<strong>${e(cfg.name)}</strong>`);
  return `<a href="#about" class="skip-link">Skip to main content</a>
  <nav class="vertical-toc" aria-label="Table of contents">${nav.map(([id,name])=>`<a href="#${id}" class="toc-link${id==='about'?' active':''}" data-section="${id}">${name}</a>`).join('')}</nav>
  <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch to dark theme" title="Switch to dark theme"><span class="toggle-dot" aria-hidden="true"></span></button>
  <main class="scroll-content">
  <header id="about" class="hero"><div class="ink-wash" aria-hidden="true"></div><div class="hero-inner"><div class="hero-photo"><img src="${e(cfg.photo)}" alt="Portrait of ${e(cfg.name)}" width="150" height="150"></div>
  <h1 class="hero-name">${e(cfg.name)}<span class="hero-name-cn" lang="zh">${e(cfg.chineseName)}</span></h1><p class="hero-role">${e(cfg.organization)}<br><span class="hero-department">${e(cfg.role)}</span></p>
  <div class="hero-bio">${cfg.bio.map(p=>`<p>${e(p)}</p>`).join('')}</div>
  <p class="invitation">${e(cfg.invitation)}</p><div class="hero-links">${links({'Email':'mailto:'+cfg.email,...cfg.links})}</div>
  <details class="academic-links"><summary>Research interests & academic connections</summary><p>${cfg.interests.map(e).join(' · ')}</p><div class="hero-links">${links(cfg.academicLinks)}</div></details>
  ${INK_MOTIF}</div></header>
  ${section('news','News','最新动态',`<div class="news-list">${cfg.news.slice(0,5).map(newsItem).join('')}</div><details class="older-news"><summary>Earlier news (${cfg.news.length-5})</summary>${cfg.news.slice(5).map(newsItem).join('')}</details>`)}
  ${section('publications','Publications','论文发表',`<p class="section-note">${cfg.publications.length} papers · * Equal contribution</p><ol class="bib-list">${cfg.publications.map(p=>`<li class="bib-entry"><span class="bib-authors">${authors(p.authors)}</span><h3 class="bib-title">${e(p.title)}</h3><span class="bib-venue"><em>${e(p.venue)}</em>${p.venue==='Preprint'?', '+p.year:''}</span><div class="bib-links">${Object.entries(p.links).map(([k,v])=>`[${link(k.toUpperCase(),v)}]`).join(' ')}</div><details class="paper-details"><summary>Summary & figure</summary><p>${e(p.abstract)}</p><img src="${e(p.image)}" alt="Overview of ${e(p.title)}" loading="lazy"></details></li>`).join('')}</ol>`)}
  ${section('experience','Experience','教育与经历',`<h3 class="subheading">Education</h3>${timeline(cfg.education)}<h3 class="subheading">Research & Professional Experience</h3>${timeline(cfg.experience)}`)}
  ${section('awards','Honors & Awards','荣誉奖励',timeline(cfg.awards))}
  ${section('teaching','Teaching','教学经历',timeline(cfg.teaching))}
  ${section('skills','Languages & Skills','语言与技能',cfg.skills.map(s=>`<p class="skills-line">${e(s)}</p>`).join(''))}
  ${section('contact','Contact','联系方式',`<p class="contact-line">${link(cfg.email,'mailto:'+cfg.email)}</p><p class="contact-line">${e(cfg.location)}</p><p>${e(cfg.invitation)}</p><div class="hero-links contact-links">${links(cfg.links)}</div>`)}
  <footer class="scroll-footer"><p>© ${new Date().getFullYear()} ${e(cfg.name)} · Ink theme · Academic Homepage Templates</p></footer></main>`;
}

(() => {
  'use strict';
  const COPY={
    en:{label:'SITE SEARCH',placeholder:'Search VAYRENZA',close:'CLOSE',hint:'Search all text on this page',empty:'No results found',results:n=>`${n} RESULT${n===1?'':'S'}`},
    es:{label:'BUSCAR EN EL SITIO',placeholder:'Buscar en VAYRENZA',close:'CERRAR',hint:'Buscar en todo el texto de esta página',empty:'No se encontraron resultados',results:n=>`${n} RESULTADO${n===1?'':'S'}`},
    fr:{label:'RECHERCHE DU SITE',placeholder:'Rechercher sur VAYRENZA',close:'FERMER',hint:'Rechercher dans tout le texte de cette page',empty:'Aucun résultat trouvé',results:n=>`${n} RÉSULTAT${n===1?'':'S'}`},
    de:{label:'WEBSITE-SUCHE',placeholder:'VAYRENZA durchsuchen',close:'SCHLIESSEN',hint:'Gesamten Text dieser Seite durchsuchen',empty:'Keine Ergebnisse gefunden',results:n=>`${n} ${n===1?'ERGEBNIS':'ERGEBNISSE'}`},
    'zh-CN':{label:'站内搜索',placeholder:'搜索 VAYRENZA',close:'关闭',hint:'搜索本页面全部文字',empty:'未找到相关结果',results:n=>`${n} 个结果`},
    ja:{label:'サイト内検索',placeholder:'VAYRENZAを検索',close:'閉じる',hint:'このページ内のテキストを検索',empty:'結果が見つかりません',results:n=>`${n} 件`},
    ko:{label:'사이트 검색',placeholder:'VAYRENZA 검색',close:'닫기',hint:'이 페이지의 전체 텍스트 검색',empty:'검색 결과가 없습니다',results:n=>`${n}개 결과`}
  };
  const overlay=document.createElement('div');
  overlay.className='search-overlay';
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML='<div class="search-panel" role="dialog" aria-modal="true" aria-label="Site search"><div class="search-inner"><div class="search-row"><span class="search-label"></span><input class="search-input" type="search" autocomplete="off" spellcheck="false"><button class="search-close" type="button"></button></div><div class="search-meta"><span class="search-hint"></span><span class="search-count"></span></div><div class="search-results" aria-live="polite"></div></div></div>';
  document.body.appendChild(overlay);
  const input=overlay.querySelector('.search-input'),closeBtn=overlay.querySelector('.search-close'),resultsEl=overlay.querySelector('.search-results'),countEl=overlay.querySelector('.search-count'),labelEl=overlay.querySelector('.search-label'),hintEl=overlay.querySelector('.search-hint');
  let searchIndex=[];
  const lang=()=>window.VAYRENZA_LANGUAGE?.get?.()||document.documentElement.lang||'en';
  function copy(){return COPY[lang()]||COPY.en}
  function updateChrome(){const c=copy();labelEl.textContent=c.label;input.placeholder=c.placeholder;input.setAttribute('aria-label',c.placeholder);closeBtn.textContent=c.close;hintEl.textContent=c.hint;if(input.value)performSearch(input.value)}
  function buildIndex(){const selector='main h1,main h2,main h3,main p,main span,main a.btn,footer p,header nav a,header .quote';searchIndex=Array.from(document.querySelectorAll(selector)).map(el=>{const section=el.closest('section');const sectionLabel=section?.querySelector('.eyebrow')?.innerText.trim()||(section?.classList.contains('hero')?'VAYRENZA':'NAVIGATION');return{el,text:el.innerText.replace(/\s+/g,' ').trim(),section:sectionLabel}}).filter(x=>x.text.length>1)}
  function escapeHtml(s){return s.replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]))}
  function mark(text,q){const l=text.toLocaleLowerCase(),n=q.toLocaleLowerCase(),i=l.indexOf(n);if(i<0)return escapeHtml(text);return `${escapeHtml(text.slice(0,i))}<mark>${escapeHtml(text.slice(i,i+q.length))}</mark>${escapeHtml(text.slice(i+q.length))}`}
  function performSearch(raw){const q=raw.trim(),c=copy();resultsEl.innerHTML='';if(!q){countEl.textContent='';return}buildIndex();const matches=searchIndex.filter(x=>x.text.toLocaleLowerCase().includes(q.toLocaleLowerCase()));countEl.textContent=c.results(matches.length);if(!matches.length){resultsEl.innerHTML=`<div class="search-empty">${c.empty}</div>`;return}matches.slice(0,40).forEach(item=>{const b=document.createElement('button');b.type='button';b.className='search-result';b.innerHTML=`<span class="search-result-section">${escapeHtml(item.section)}</span><span class="search-result-text">${mark(item.text,q)}</span>`;b.addEventListener('click',()=>{close();requestAnimationFrame(()=>{item.el.scrollIntoView({behavior:'smooth',block:'center'});item.el.classList.remove('search-target');void item.el.offsetWidth;item.el.classList.add('search-target');setTimeout(()=>item.el.classList.remove('search-target'),1800)})});resultsEl.appendChild(b)})}
  function open(e){e?.preventDefault();overlay.classList.add('is-open');overlay.setAttribute('aria-hidden','false');document.body.classList.add('search-open');updateChrome();buildIndex();setTimeout(()=>input.focus(),80)}
  function close(){overlay.classList.remove('is-open');overlay.setAttribute('aria-hidden','true');document.body.classList.remove('search-open')}
  document.querySelector('.search-link')?.addEventListener('click',open);
  closeBtn.addEventListener('click',close);overlay.addEventListener('click',e=>{if(e.target===overlay)close()});input.addEventListener('input',()=>performSearch(input.value));input.addEventListener('keydown',e=>{if(e.key==='Enter'){const first=resultsEl.querySelector('.search-result');if(first){e.preventDefault();first.click()}}});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('is-open'))close();if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();open()}});
  window.addEventListener('vayrenza:languagechange',()=>{updateChrome();buildIndex()});
  updateChrome();buildIndex();
})();
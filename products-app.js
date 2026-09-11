(() => {
  'use strict';
  const DATA=window.VAYRENZA_PRODUCTS;
  const I18N=window.VAYRENZA_PRODUCT_I18N;
  if(!DATA||!I18N)throw new Error('VAYRENZA product sources unavailable');

  const supported=new Set(I18N.supported);
  const params=new URLSearchParams(location.search);
  const requested=params.get('lang');
  let lang=supported.has(requested)?requested:localStorage.getItem('vayrenza-language');
  if(!supported.has(lang))lang='en';
  localStorage.setItem('vayrenza-language',lang);
  document.documentElement.lang=lang;

  const shell=document.querySelector('.shell');
  const select=document.getElementById('lang');
  const collections=document.getElementById('collections');
  const summary=document.querySelector('.summary');
  const modal=document.getElementById('image-modal');
  const modalImage=document.getElementById('modal-image');
  const modalCaption=document.getElementById('modal-caption');
  const modalClose=document.getElementById('modal-close');
  let activeKey=(location.hash.match(/^#vz-([stpk])$/i)?.[1]||'S').toUpperCase();
  let searchTimer=null;

  const text=()=>I18N.copy[lang]||I18N.copy.en;
  const productNames=key=>I18N.names[lang]?.[key]||I18N.names.en[key];
  const homeHref=hash=>`index.html?lang=${encodeURIComponent(lang)}${hash||''}`;

  function renderHeader(){
    const c=text();
    document.querySelector('.status').textContent=c.status;
    document.querySelectorAll('[data-nav]').forEach((a,i)=>{a.textContent=c.nav[i];a.href=i===0?`products-preview.html?lang=${encodeURIComponent(lang)}`:homeHref(['','#solutions','#custom','#sustainability','#about','#insights','#contact'][i]);});
    const brand=document.querySelector('a.brand');
    brand.href=homeHref('');
    document.documentElement.lang=lang;
    select.value=lang;
  }

  function renderHero(){
    const c=text();
    document.querySelector('[data-t="eyebrow"]').textContent=c.eyebrow;
    document.querySelector('[data-t="headline"]').innerHTML=c.headline;
    document.querySelector('[data-t="intro"]').textContent=c.intro;
    document.querySelector('[data-t="rule"]').textContent=c.rule;
    document.querySelector('[data-t="ruleTitle"]').textContent=c.ruleTitle;
    document.querySelector('[data-t="ruleBody"]').textContent=c.ruleBody;
    const arch=document.querySelector('.architecture-line');
    arch.innerHTML=DATA.order.map(k=>`<span>${DATA.series[k].code} · ${DATA.series[k].count}</span>`).join('');
  }

  function renderSummary(){
    const c=text();
    summary.innerHTML=`<div><strong>${DATA.total}</strong><span>${c.total}</span></div>`+DATA.order.map((k,i)=>`<div><strong>${DATA.series[k].count}</strong><span>${c.summary[i]}</span></div>`).join('');
  }

  function cardHtml(key,index){
    const c=text(),s=DATA.series[key],sku=DATA.sku(key,index),name=productNames(key)[index],src=DATA.image(key,index),benefit=s.benefits?.[index];
    if(src){
      return `<article class="product-card has-image" data-sku="${sku}"><div class="product-visual" data-full="${src}" data-sku="${sku}" data-name="${escapeAttr(name)}" tabindex="0" role="button" aria-label="${escapeAttr(c.view+': '+sku+' '+name)}"><img src="${src}" alt="${escapeAttr(sku+' '+name)}" loading="lazy"><span class="view-full">${c.view}</span></div><div class="product-info"><div class="sku">${sku}</div><h3>${escapeHtml(name)}</h3>${benefit?`<p class="product-benefit">${escapeHtml(benefit)}</p>`:''}<div class="state">${c.state}</div></div></article>`;
    }
    return `<article class="product-card" data-sku="${sku}"><div class="sku">${sku}</div><h3>${escapeHtml(name)}</h3><div class="state">${c.state}</div></article>`;
  }

  function renderCollections(){
    const c=text();
    collections.innerHTML=`<div class="series-tabs" role="tablist">${DATA.order.map((k,i)=>`<button class="series-tab" id="tab-${k}" role="tab" aria-controls="panel-${k}" aria-selected="${activeKey===k}" data-series="${k}"><div class="series-index">0${i+1}</div><div class="series-code">${DATA.series[k].code} SERIES</div><h2 class="series-title">${c.series[i]}</h2><span class="series-count">${DATA.series[k].count} SKUs</span></button>`).join('')}</div><div class="series-stage" id="series-stage"></div>`;
    collections.querySelectorAll('.series-tab').forEach(btn=>btn.addEventListener('click',()=>openSeries(btn.dataset.series,true)));
    openSeries(activeKey,false);
  }

  function openSeries(key,updateHash){
    if(!DATA.series[key])key='S';
    activeKey=key;
    const c=text(),i=DATA.order.indexOf(key),s=DATA.series[key];
    collections.querySelectorAll('.series-tab').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.series===key)));
    const stage=document.getElementById('series-stage');
    stage.innerHTML=`<div class="series-stage-head"><div class="series-label">${s.code} SERIES · ${s.count} SKUs</div><p class="series-description">${c.desc[i]}</p></div><div class="product-rail" id="panel-${key}" role="tabpanel" aria-labelledby="tab-${key}">${Array.from({length:s.count},(_,n)=>cardHtml(key,n)).join('')}</div>`;
    bindProductImages();
    if(updateHash)history.replaceState(null,'',`${location.pathname}${location.search}#vz-${key.toLowerCase()}`);
  }

  function bindProductImages(){
    document.querySelectorAll('.product-card.has-image').forEach(card=>{
      const visual=card.querySelector('.product-visual');
      const open=()=>openModal(visual.dataset.full,`${visual.dataset.sku} · ${visual.dataset.name}`);
      visual.addEventListener('click',open);
      visual.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
      card.querySelector('.product-info')?.addEventListener('click',open);
    });
  }

  function openModal(src,caption){modalImage.src=src;modalImage.alt=caption;modalCaption.textContent=caption;modal.classList.add('open');document.body.style.overflow='hidden';}
  function closeModal(){modal.classList.remove('open');modalImage.src='';document.body.style.overflow='';}

  function renderTools(){
    const c=text();
    const tools=document.querySelector('.tools');
    let searchBtn=tools.querySelector('.product-search-link');
    let quote=tools.querySelector('.product-quote-link');
    if(!searchBtn){searchBtn=document.createElement('button');searchBtn.type='button';searchBtn.className='product-search-link';tools.insertBefore(searchBtn,select);searchBtn.addEventListener('click',openSearch);}
    if(!quote){quote=document.createElement('a');quote.className='product-quote-link';tools.appendChild(quote);}
    searchBtn.textContent=c.search;quote.textContent=c.quote;quote.href=homeHref('#quote');
    ensureSearchOverlay();
  }

  function ensureSearchOverlay(){
    let overlay=document.querySelector('.product-search-overlay');
    if(!overlay){
      overlay=document.createElement('div');overlay.className='product-search-overlay';overlay.innerHTML='<div class="product-search-panel"><div class="product-search-head"><span class="product-search-title"></span><input class="product-search-input" type="search" autocomplete="off"><button class="product-search-close" type="button"></button></div><div class="product-search-meta"></div><div class="product-search-results"></div></div>';document.body.appendChild(overlay);
      overlay.querySelector('.product-search-close').addEventListener('click',closeSearch);
      overlay.addEventListener('click',e=>{if(e.target===overlay)closeSearch();const r=e.target.closest('.product-search-result');if(r){e.preventDefault();closeSearch();focusProduct(r.dataset.series,r.dataset.sku);}});
      const input=overlay.querySelector('.product-search-input');input.addEventListener('input',()=>runSearch(input.value));input.addEventListener('keydown',e=>{if(e.key==='Enter'){const first=overlay.querySelector('.product-search-result');if(first){e.preventDefault();first.click();}}});
    }
    const c=text();overlay.querySelector('.product-search-title').textContent=c.searchTitle;overlay.querySelector('.product-search-input').placeholder=c.placeholder;overlay.querySelector('.product-search-close').textContent=c.close;
  }

  function allProducts(){
    return DATA.order.flatMap(k=>productNames(k).map((name,i)=>({k,sku:DATA.sku(k,i),name})));
  }
  function runSearch(raw){
    const overlay=document.querySelector('.product-search-overlay'),q=raw.trim().toLowerCase(),c=text(),results=overlay.querySelector('.product-search-results'),meta=overlay.querySelector('.product-search-meta');
    if(!q){meta.textContent='';results.innerHTML='';return;}
    const found=allProducts().filter(x=>(`${x.sku} ${x.name}`).toLowerCase().includes(q));
    meta.textContent=c.results(found.length);
    results.innerHTML=found.length?found.map(x=>`<a class="product-search-result" href="#vz-${x.k.toLowerCase()}" data-series="${x.k}" data-sku="${x.sku}"><span class="r-sku">${x.sku}</span><span class="r-name">${escapeHtml(x.name)}</span><span class="r-series">VZ-${x.k}</span></a>`).join(''):`<div class="product-search-empty">${c.empty}</div>`;
  }
  function resetSearch(){
    const overlay=document.querySelector('.product-search-overlay');
    if(!overlay)return;
    const input=overlay.querySelector('.product-search-input');
    const meta=overlay.querySelector('.product-search-meta');
    const results=overlay.querySelector('.product-search-results');
    if(input)input.value='';
    if(meta)meta.textContent='';
    if(results)results.innerHTML='';
  }
  function openSearch(){ensureSearchOverlay();const overlay=document.querySelector('.product-search-overlay');resetSearch();overlay.classList.add('open');document.body.style.overflow='hidden';setTimeout(()=>overlay.querySelector('.product-search-input').focus(),30);}
  function closeSearch(){const overlay=document.querySelector('.product-search-overlay');if(!overlay)return;overlay.classList.remove('open');document.body.style.overflow='';}
  function focusProduct(key,sku){
    openSeries(key,true);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      const rail=document.querySelector('.product-rail'),target=rail?.querySelector(`[data-sku="${CSS.escape(sku)}"]`);if(!rail||!target)return;
      document.getElementById('series-stage')?.scrollIntoView({behavior:'smooth',block:'start'});
      const rr=rail.getBoundingClientRect(),tr=target.getBoundingClientRect(),max=Math.max(0,rail.scrollWidth-rail.clientWidth);
      rail.scrollTo({left:Math.max(0,Math.min(max,rail.scrollLeft+(tr.left+tr.width/2)-(rr.left+rr.width/2))),behavior:'smooth'});
      target.classList.add('search-target');clearTimeout(searchTimer);searchTimer=setTimeout(()=>target.classList.remove('search-target'),2800);
      setTimeout(()=>{const rr2=rail.getBoundingClientRect(),tr2=target.getBoundingClientRect();rail.scrollTo({left:Math.max(0,Math.min(max,rail.scrollLeft+(tr2.left+tr2.width/2)-(rr2.left+rr2.width/2))),behavior:'smooth'});},520);
    }));
  }

  function applyLanguage(next){
    if(!supported.has(next))next='en';
    lang=next;localStorage.setItem('vayrenza-language',lang);document.documentElement.lang=lang;renderAll();
  }
  function renderAll(){renderHeader();renderHero();renderSummary();renderCollections();renderTools();document.title='VAYRENZA GLOBAL — 2026 Product Collection';}

  function escapeHtml(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function escapeAttr(s){return escapeHtml(s);}

  select.addEventListener('change',()=>applyLanguage(select.value));
  window.addEventListener('hashchange',()=>{const k=location.hash.match(/^#vz-([stpk])$/i)?.[1]?.toUpperCase();if(k&&DATA.series[k])openSeries(k,false);});
  modalClose.addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeSearch();}});

  renderAll();
  const expected={S:18,T:14,P:16,K:10};
  window.__VZ_PRODUCT_AUDIT__={version:'3.0',language:lang,total:DATA.total,totalOk:DATA.order.reduce((n,k)=>n+DATA.series[k].count,0)===58,skuCounts:Object.fromEntries(DATA.order.map(k=>[k,DATA.series[k].count===expected[k]])),languageNames:I18N.supported.every(l=>DATA.order.every(k=>I18N.names[l]?.[k]?.length===expected[k])),p009:DATA.series.P.names[8]==='Luxury Boutique Display Hanger'};
  document.documentElement.classList.remove('vz-i18n-pending');
})();
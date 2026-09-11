(() => {
  const motionCss=document.createElement('link');
  motionCss.rel='stylesheet';
  motionCss.href='product-motion-refine.css';
  document.head.appendChild(motionCss);

  const labels = {
    en:{search:'SEARCH',quote:'REQUEST A QUOTE',title:'SITE SEARCH',placeholder:'Search products by SKU or name',close:'CLOSE',empty:'No matching products',results:n=>`${n} RESULT${n===1?'':'S'}`},
    es:{search:'BUSCAR',quote:'SOLICITAR COTIZACIÓN',title:'BUSCAR EN PRODUCTOS',placeholder:'Buscar por SKU o nombre',close:'CERRAR',empty:'No hay productos coincidentes',results:n=>`${n} RESULTADO${n===1?'':'S'}`},
    fr:{search:'RECHERCHER',quote:'DEMANDER UN DEVIS',title:'RECHERCHE PRODUITS',placeholder:'Rechercher par SKU ou nom',close:'FERMER',empty:'Aucun produit correspondant',results:n=>`${n} RÉSULTAT${n===1?'':'S'}`},
    de:{search:'SUCHE',quote:'ANGEBOT ANFRAGEN',title:'PRODUKTSUCHE',placeholder:'Nach SKU oder Produktname suchen',close:'SCHLIESSEN',empty:'Keine passenden Produkte',results:n=>`${n} TREFFER`},
    'zh-CN':{search:'搜索',quote:'索取报价',title:'产品搜索',placeholder:'按 SKU 或产品名称搜索',close:'关闭',empty:'没有匹配的产品',results:n=>`${n} 个结果`}
  };

  const style = document.createElement('style');
  style.textContent = `
    body>.shell .tools{display:flex!important;align-items:center!important;gap:10px!important;white-space:nowrap!important}
    .product-search-link,.product-quote-link{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;color:#34322e;border:0;background:transparent;cursor:pointer;white-space:nowrap;font:500 8px/1 Inter,Arial,sans-serif;letter-spacing:.11em;text-transform:uppercase;padding:8px 2px}
    .product-search-link{min-width:48px}.product-quote-link{min-height:28px;padding:0 11px;border:1px solid #b8b2a8;background:rgba(255,255,255,.22)}
    .product-search-link:hover,.product-quote-link:hover{color:#1F5A36}.product-quote-link:hover{border-color:#1F5A36}
    .product-search-overlay{position:fixed;inset:0;z-index:1000;display:none;background:rgba(20,19,17,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);padding:92px 28px 28px}
    .product-search-overlay.open{display:block}.product-search-panel{max-width:980px;margin:0 auto;background:#f4f0e8;border:1px solid rgba(21,20,17,.15);box-shadow:0 28px 80px rgba(0,0,0,.22);max-height:calc(100vh - 120px);overflow:auto}
    .product-search-head{display:grid;grid-template-columns:auto 1fr auto;gap:18px;align-items:center;padding:22px 24px;border-bottom:1px solid rgba(21,20,17,.12)}
    .product-search-title{font:650 9px/1 Inter,Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase}.product-search-input{width:100%;border:0;border-bottom:1px solid rgba(21,20,17,.25);background:transparent;padding:8px 0;font:400 20px/1.25 "Playfair Display",Georgia,serif;color:#151411;outline:none}
    .product-search-close{border:0;background:transparent;cursor:pointer;font:600 8px/1 Inter,Arial,sans-serif;letter-spacing:.13em;color:#44413b}
    .product-search-meta{padding:12px 24px;color:#77736c;font:500 8px/1.2 Inter,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;border-bottom:1px solid rgba(21,20,17,.08)}
    .product-search-results{padding:4px 24px 22px}.product-search-result{display:grid;grid-template-columns:110px 1fr auto;gap:18px;align-items:center;padding:15px 0;border-bottom:1px solid rgba(21,20,17,.08);color:#151411;text-decoration:none}
    .product-search-result .r-sku{font:650 9px/1 Inter,Arial,sans-serif;letter-spacing:.14em}.product-search-result .r-name{font:400 18px/1.2 "Playfair Display",Georgia,serif}.product-search-result .r-series{font:600 8px/1 Inter,Arial,sans-serif;letter-spacing:.12em;color:#77736c}.product-search-empty{padding:28px 0;color:#77736c;font-size:13px}
    .product-card.search-target{outline:1px solid rgba(31,90,54,.55)!important;outline-offset:3px;box-shadow:0 18px 42px rgba(31,90,54,.14)!important}
    @media(max-width:1380px){body>.shell .product-quote-link{padding:0 8px;font-size:7px;letter-spacing:.08em}body>.shell .product-search-link{font-size:7px;letter-spacing:.08em}.product-search-result{grid-template-columns:92px 1fr}}
    @media(max-width:1120px){body>.shell .top{grid-template-columns:auto auto!important}body>.shell .preview-nav{grid-column:1/-1!important;grid-row:2!important;overflow-x:auto!important}body>.shell .tools{grid-column:2!important;grid-row:1!important}.product-quote-link{display:inline-flex!important}}
    @media(max-width:720px){.product-quote-link{font-size:0!important;width:32px!important;padding:0!important}.product-quote-link::after{content:'QUOTE';font-size:6px;letter-spacing:.06em}.product-search-head{grid-template-columns:1fr auto}.product-search-title{grid-column:1/-1}.product-search-result{grid-template-columns:80px 1fr}.product-search-result .r-series{display:none}}
  `;
  document.head.appendChild(style);

  function currentLang(){return document.documentElement.lang || localStorage.getItem('vayrenza-language') || 'en'}
  function copyFor(){return labels[currentLang()] || labels.en}

  const tools = document.querySelector('.tools');
  const select = document.getElementById('lang');
  if(!tools || !select) return;

  const searchBtn = document.createElement('button');
  searchBtn.type = 'button';
  searchBtn.className = 'product-search-link';
  const quote = document.createElement('a');
  quote.className = 'product-quote-link';
  quote.href = 'index.html#quote';
  searchBtn.dataset.productTool = 'search';
  quote.dataset.productTool = 'quote';
  tools.insertBefore(searchBtn, select);
  tools.appendChild(quote);

  const overlay = document.createElement('div');
  overlay.className = 'product-search-overlay';
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML = `<div class="product-search-panel" role="dialog" aria-modal="true"><div class="product-search-head"><span class="product-search-title"></span><input class="product-search-input" type="search" autocomplete="off"><button class="product-search-close" type="button"></button></div><div class="product-search-meta"></div><div class="product-search-results"></div></div>`;
  document.body.appendChild(overlay);
  const title = overlay.querySelector('.product-search-title');
  const input = overlay.querySelector('.product-search-input');
  const close = overlay.querySelector('.product-search-close');
  const meta = overlay.querySelector('.product-search-meta');
  const results = overlay.querySelector('.product-search-results');

  function updateLabels(){
    const c=copyFor();
    searchBtn.textContent=c.search; quote.textContent=c.quote; title.textContent=c.title; input.placeholder=c.placeholder; close.textContent=c.close;
    if(input.value) runSearch(input.value); else meta.textContent='';
  }

  function allProducts(){
    const lang=currentLang(), pk=lang==='zh-CN'?'zh':lang;
    const rows=[];
    if(typeof products==='undefined') return rows;
    ['S','T','P'].forEach(k=>{
      const p=products[k], names=p[pk]||p.en;
      names.forEach((name,i)=>rows.push({k,sku:`VZ-${k}${String(i+1).padStart(3,'0')}`,name}));
    });
    return rows;
  }
  function getMatches(q){
    const term=q.trim().toLowerCase();
    if(!term) return [];
    return allProducts().filter(x=>(x.sku+' '+x.name).toLowerCase().includes(term));
  }
  function runSearch(q){
    const c=copyFor(), found=getMatches(q);
    if(!q.trim()){results.innerHTML='';meta.textContent='';return}
    meta.textContent=c.results(found.length);
    results.innerHTML=found.length?found.map(x=>`<a class="product-search-result" href="#vz-${x.k.toLowerCase()}" data-series="${x.k}" data-sku="${x.sku}"><span class="r-sku">${x.sku}</span><span class="r-name">${x.name}</span><span class="r-series">VZ-${x.k}</span></a>`).join(''):`<div class="product-search-empty">${c.empty}</div>`;
  }
  function openSearch(){updateLabels();overlay.classList.add('open');overlay.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>input.focus(),20)}
  function closeSearch(){overlay.classList.remove('open');overlay.setAttribute('aria-hidden','true');document.body.style.overflow=''}

  function focusProduct(series,sku){
    if(typeof openSeries==='function') openSeries(series,currentLang(),true);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      const rail=document.querySelector('.product-rail');
      if(!rail) return;
      const target=[...rail.querySelectorAll('.product-card')].find(card=>card.querySelector('.sku')?.textContent.trim()===sku);
      if(!target) return;

      document.getElementById('series-stage')?.scrollIntoView({behavior:'smooth',block:'start'});

      const oldSnap=rail.style.scrollSnapType;
      rail.style.scrollSnapType='none';
      const exactCenter=()=>{
        const railRect=rail.getBoundingClientRect();
        const targetRect=target.getBoundingClientRect();
        const delta=(targetRect.left+targetRect.width/2)-(railRect.left+railRect.width/2);
        const max=Math.max(0,rail.scrollWidth-rail.clientWidth);
        return Math.max(0,Math.min(max,rail.scrollLeft+delta));
      };

      rail.scrollTo({left:exactCenter(),behavior:'smooth'});
      setTimeout(()=>{
        rail.scrollTo({left:exactCenter(),behavior:'auto'});
        rail.style.scrollSnapType=oldSnap;
      },520);

      document.querySelectorAll('.product-card.search-target').forEach(card=>card.classList.remove('search-target'));
      target.classList.add('search-target');
      target.setAttribute('tabindex','-1');
      setTimeout(()=>target.focus({preventScroll:true}),560);
      setTimeout(()=>target.classList.remove('search-target'),2800);
    }));
  }

  function activateResult(row){
    if(!row) return;
    closeSearch();
    focusProduct(row.k,row.sku);
  }

  searchBtn.addEventListener('click',openSearch);
  close.addEventListener('click',closeSearch);
  input.addEventListener('input',()=>runSearch(input.value));
  input.addEventListener('keydown',e=>{
    if(e.key!=='Enter') return;
    const found=getMatches(input.value);
    if(!found.length) return;
    e.preventDefault();
    const normalized=input.value.trim().toUpperCase().replace(/\s+/g,'');
    const exact=found.find(x=>x.sku.replace(/\s+/g,'')===normalized);
    activateResult(exact||found[0]);
  });

  overlay.addEventListener('click',e=>{
    if(e.target===overlay) closeSearch();
    const r=e.target.closest('.product-search-result');
    if(r){
      e.preventDefault();
      activateResult({k:r.dataset.series,sku:r.dataset.sku});
    }
  });

  document.addEventListener('click',e=>{
    const info=e.target.closest('.product-card.has-image .product-info');
    if(!info) return;
    const card=info.closest('.product-card.has-image');
    const visual=card?.querySelector('.product-visual');
    if(!visual || typeof openModal!=='function') return;
    openModal(visual.dataset.full,`${visual.dataset.sku} · ${visual.dataset.name}`);
  });

  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))closeSearch()});
  select.addEventListener('change',()=>setTimeout(updateLabels,0));
  new MutationObserver(updateLabels).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  updateLabels();
})();

(() => {
  if (typeof products === 'undefined' || typeof copy === 'undefined') return;

  const kNames={
    en:['Baby Garment Hanger','Kids Classic Hanger','Kids Shirt & Top Hanger','Kids Trouser & Skirt Hanger','Kids Two-Clip Hanger','Junior Jacket Hanger','Kids Shirt & Top Hanger — Premium Wood','Kids Dress Hanger','Kids Sweater & Knit Hanger','Kids Multi-Function Hanger'],
    es:['Percha para prendas de bebé','Percha clásica infantil','Percha infantil para camisa y top','Percha infantil para pantalón y falda','Percha infantil de dos pinzas','Percha para chaqueta juvenil','Percha infantil para camisa y top — madera premium','Percha infantil para vestido','Percha infantil para suéter y punto','Percha infantil multifunción'],
    fr:['Cintre pour vêtements de bébé','Cintre enfant classique','Cintre enfant chemise et haut','Cintre enfant pantalon et jupe','Cintre enfant à deux pinces','Cintre veste junior','Cintre enfant chemise et haut — bois premium','Cintre enfant pour robe','Cintre enfant pull et maille','Cintre enfant multifonction'],
    de:['Baby-Kleiderbügel','Klassischer Kinderbügel','Kinderbügel für Hemd & Oberteil','Kinderbügel für Hose & Rock','Kinderbügel mit zwei Clips','Junior-Jackenbügel','Kinderbügel für Hemd & Oberteil — Premiumholz','Kinder-Kleiderbügel','Kinderbügel für Pullover & Strick','Multifunktionaler Kinderbügel'],
    zh:['婴幼儿衣架','儿童经典衣架','儿童衬衫与上衣衣架','儿童裤装与半裙衣架','儿童艺术木质双夹衣架','青少年夹克衣架','儿童高端木质上装衣架','儿童连衣裙衣架','儿童毛衣与针织衣架','儿童多功能衣架']
  };
  const kBenefits=[
    'Small-scale rounded wood form designed for babywear presentation.','Classic children’s proportions for versatile everyday garment presentation.','Slimmer wood profile suited to shirts, T-shirts and lightweight tops.','Wooden crossbar with adjustable clips for trousers, skirts and coordinated bottoms.','Sculpted wooden body with two adjustable protected clips for refined garment care.','Broader shoulder support for junior jackets, suits and outerwear.','Premium natural-wood form with ergonomic shoulders and strap notches.','Dress-focused wooden form with strap notches for occasionwear presentation.','Wider rounded shoulders designed to support sweaters, knitwear and delicate tops.','Multi-purpose wood construction with shoulder notches and anti-slip shoulder control.'
  ];

  products.K={count:10,...kNames};
  const p9={en:'Luxury Boutique Display Hanger',es:'Percha de exposición para boutique de lujo',fr:'Cintre de présentation boutique de luxe',de:'Luxus-Boutique-Präsentationsbügel',zh:'奢华精品店陈列衣架'};
  Object.keys(p9).forEach(lang=>{if(products.P[lang])products.P[lang][8]=p9[lang]});

  const additions={
    en:{headline:'58 SKUs.<br>One coherent system.',intro:'A refined product architecture built around four distinct families — designed to serve fashion, retail, hospitality and professional garment presentation.',sumK:'VZ-K · Kids & Junior',seriesK:'Kids & Junior',descK:'Purpose-designed hanger solutions for baby, kids and junior garments, balancing garment care, presentation and versatile retail use.',arch:['VZ-S · 18','VZ-T · 14','VZ-P · 16','VZ-K · 10']},
    es:{headline:'58 SKUs.<br>Un sistema coherente.',intro:'Una arquitectura de producto refinada, estructurada en cuatro familias — diseñada para moda, retail, hostelería y presentación profesional de prendas.',sumK:'VZ-K · Infantil y juvenil',seriesK:'Infantil y juvenil',descK:'Soluciones diseñadas para prendas de bebé, infantiles y juveniles, equilibrando cuidado, presentación y versatilidad retail.',arch:['VZ-S · 18','VZ-T · 14','VZ-P · 16','VZ-K · 10']},
    fr:{headline:'58 SKUs.<br>Un système cohérent.',intro:'Une architecture produit raffinée articulée autour de quatre familles — conçue pour la mode, le retail, l’hôtellerie et la présentation professionnelle des vêtements.',sumK:'VZ-K · Enfant & junior',seriesK:'Enfant & junior',descK:'Des solutions conçues pour les vêtements bébé, enfant et junior, alliant soin du vêtement, présentation et polyvalence retail.',arch:['VZ-S · 18','VZ-T · 14','VZ-P · 16','VZ-K · 10']},
    de:{headline:'58 SKUs.<br>Ein kohärentes System.',intro:'Eine verfeinerte Produktarchitektur aus vier klaren Familien — entwickelt für Fashion, Retail, Hospitality und professionelle Warenpräsentation.',sumK:'VZ-K · Kinder & Junior',seriesK:'Kinder & Junior',descK:'Gezielt entwickelte Bügellösungen für Baby-, Kinder- und Juniorbekleidung mit Fokus auf Kleiderschonung, Präsentation und vielseitigen Retail-Einsatz.',arch:['VZ-S · 18','VZ-T · 14','VZ-P · 16','VZ-K · 10']},
    'zh-CN':{headline:'58 个 SKU。<br>一个完整体系。',intro:'围绕四大产品家族构建的精炼产品体系——服务于时装、零售、酒店服务业及专业服装陈列场景。',sumK:'VZ-K · 儿童与青少年',seriesK:'儿童与青少年',descK:'专为婴幼儿、儿童及青少年服装设计，在服装保护、陈列效果与多场景零售应用之间取得平衡。',arch:['VZ-S · 18','VZ-T · 14','VZ-P · 16','VZ-K · 10']}
  };
  Object.keys(additions).forEach(lang=>{const c=copy[lang];if(!c)return;Object.assign(c,additions[lang]);c.series=[...c.series.slice(0,3),additions[lang].seriesK];c.desc=[...c.desc.slice(0,3),additions[lang].descK]});

  const css=document.createElement('style');
  css.textContent=`
    .summary{grid-template-columns:1.05fr repeat(4,1fr)!important;margin-bottom:38px!important}
    .series-tabs{grid-template-columns:repeat(4,minmax(0,1fr))!important}
    .hero{padding:68px 0 54px!important;align-items:center!important}
    .hero .eyebrow{padding-top:5px!important}
    .hero h1{margin-bottom:20px!important}
    .hero p.intro{line-height:1.72!important;max-width:720px!important}
    .architecture-line{display:flex;align-items:center;gap:0;margin-top:25px;max-width:720px}
    .architecture-line span{display:flex;align-items:center;flex:1;white-space:nowrap;font:600 8px/1 Inter,Arial,sans-serif;letter-spacing:.16em;color:#1F5A36}
    .architecture-line span:not(:last-child)::after{content:"";height:1px;flex:1;margin:0 13px;background:rgba(31,90,54,.22)}
    @media(max-width:1000px){.series-tabs{grid-template-columns:repeat(4,minmax(210px,1fr))!important}.hero{padding:58px 0 48px!important}.summary{margin-bottom:34px!important}}
    @media(max-width:720px){.series-tabs{grid-template-columns:repeat(4,240px)!important}.summary{grid-template-columns:1fr 1fr!important;margin-bottom:30px!important}.summary div:nth-child(2){border-right:1px solid var(--line-soft)!important}.summary div:nth-child(even){border-right:0!important}.summary div{border-bottom:1px solid var(--line-soft)}.summary div:last-child{border-bottom:0}.hero{padding:46px 0 42px!important}.architecture-line{overflow-x:auto;gap:18px;padding-bottom:3px}.architecture-line span{flex:0 0 auto}.architecture-line span::after{display:none!important}}
  `;
  document.head.appendChild(css);

  const summary=document.querySelector('.summary');
  if(summary){const cells=summary.querySelectorAll('div');if(cells[0])cells[0].querySelector('strong').textContent='58';if(!summary.querySelector('[data-t="sumK"]'))summary.insertAdjacentHTML('beforeend','<div><strong>10</strong><span data-t="sumK"></span></div>')}

  const heroCopy=document.querySelector('.hero-copy');
  if(heroCopy&&!heroCopy.querySelector('.architecture-line'))heroCopy.insertAdjacentHTML('beforeend','<div class="architecture-line" aria-label="Product series architecture"></div>');
  function renderArchitecture(lang){const el=document.querySelector('.architecture-line'),a=(additions[lang]||additions.en).arch;if(el)el.innerHTML=a.map(x=>`<span>${x}</span>`).join('')}

  keyFromHash=function(){const m=location.hash.match(/^#vz-([stpk])$/i);return m?m[1].toUpperCase():null};
  openSeries=function(k,lang,updateHash){
    activeKey=k;const c=copy[lang]||copy.en,pk=lang==='zh-CN'?'zh':lang,keys=['S','T','P','K'],si=keys.indexOf(k),p=products[k];
    document.querySelectorAll('.series-tab').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.series===k)));
    const stage=document.getElementById('series-stage');
    const cards=p[pk].map((name,i)=>{const sku=`VZ-${k}${String(i+1).padStart(3,'0')}`;if(k==='S'||k==='K'){const src=`assets/products/${k==='S'?'s-series':'k-series'}/${sku}.png`,benefit=k==='S'?sBenefits[i]:kBenefits[i];return `<article class="product-card has-image"><div class="product-visual" data-full="${src}" data-sku="${sku}" data-name="${name}" tabindex="0" role="button" aria-label="${c.view}: ${sku} ${name}"><img src="${src}" alt="${sku} ${name}" loading="lazy"><span class="view-full">${c.view}</span></div><div class="product-info"><div class="sku">${sku}</div><h3>${name}</h3><p class="product-benefit">${benefit}</p><div class="state">${c.state}</div></div></article>`}return `<article class="product-card"><div class="sku">${sku}</div><h3>${name}</h3><div class="state">${c.state}</div></article>`}).join('');
    stage.innerHTML=`<div class="series-stage-head"><div class="series-label">VZ-${k} SERIES · ${p.count} SKUs</div><p class="series-description">${c.desc[si]}</p></div><div class="product-rail" id="panel-${k}" role="tabpanel" aria-labelledby="tab-${k}">${cards}</div>`;bindImagePreview();if(updateHash)history.replaceState(null,'',`#vz-${k.toLowerCase()}`)
  };

  render=function(lang){
    const c=copy[lang]||copy.en;document.documentElement.lang=lang;document.querySelectorAll('[data-t]').forEach(el=>el.innerHTML=c[el.dataset.t]||'');document.querySelectorAll('[data-nav]').forEach(el=>el.textContent=c.nav[Number(el.dataset.nav)]);renderArchitecture(lang);activeKey=keyFromHash()||activeKey;const keys=['S','T','P','K'],wrap=document.getElementById('collections');wrap.innerHTML=`<div class="series-tabs" role="tablist">${keys.map((k,si)=>`<button class="series-tab" id="tab-${k}" role="tab" aria-controls="panel-${k}" aria-selected="${activeKey===k}" data-series="${k}"><div class="series-index">0${si+1}</div><div class="series-code">VZ-${k} SERIES</div><h2 class="series-title">${c.series[si]}</h2><span class="series-count">${products[k].count} SKUs</span></button>`).join('')}</div><div class="series-stage" id="series-stage"></div>`;wrap.querySelectorAll('.series-tab').forEach(btn=>btn.addEventListener('click',()=>openSeries(btn.dataset.series,lang,true)));openSeries(activeKey,lang,false);localStorage.setItem('vayrenza-language',lang)
  };

  const lang=document.getElementById('lang')?.value||localStorage.getItem('vayrenza-language')||'en';render(copy[lang]?lang:'en');
})();
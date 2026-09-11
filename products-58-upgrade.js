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
    'Small-scale rounded wood form designed for babywear presentation.',
    'Classic children’s proportions for versatile everyday garment presentation.',
    'Slimmer wood profile suited to shirts, T-shirts and lightweight tops.',
    'Wooden crossbar with adjustable clips for trousers, skirts and coordinated bottoms.',
    'Sculpted wooden body with two adjustable protected clips for refined garment care.',
    'Broader shoulder support for junior jackets, suits and outerwear.',
    'Premium natural-wood form with ergonomic shoulders and strap notches.',
    'Dress-focused wooden form with strap notches for occasionwear presentation.',
    'Wider rounded shoulders designed to support sweaters, knitwear and delicate tops.',
    'Multi-purpose wood construction with shoulder notches and anti-slip shoulder control.'
  ];

  products.K={count:10,...kNames};
  const p9={en:'Luxury Boutique Display Hanger',es:'Percha de exposición para boutique de lujo',fr:'Cintre de présentation boutique de luxe',de:'Luxus-Boutique-Präsentationsbügel',zh:'奢华精品店陈列衣架'};
  Object.keys(p9).forEach(lang=>{ if(products.P[lang]) products.P[lang][8]=p9[lang]; });

  const additions={
    en:{headline:'58 SKUs.<br>One coherent system.',intro:'A reserved product architecture for VAYRENZA GLOBAL. The collection is organized into four distinct families, allowing verified products to be assigned later without rebuilding the catalogue structure.',sumK:'VZ-K · Kids & Junior',seriesK:'Kids & Junior',descK:'Purpose-designed hanger solutions for baby, kids and junior garments, balancing garment care, presentation and versatile retail use.'},
    es:{headline:'58 SKUs.<br>Un sistema coherente.',intro:'Una arquitectura de producto reservada para VAYRENZA GLOBAL. La colección se organiza en cuatro familias distintas para incorporar productos verificados sin reconstruir el catálogo.',sumK:'VZ-K · Infantil y juvenil',seriesK:'Infantil y juvenil',descK:'Soluciones diseñadas para prendas de bebé, infantiles y juveniles, equilibrando cuidado, presentación y versatilidad retail.'},
    fr:{headline:'58 SKUs.<br>Un système cohérent.',intro:'Une architecture produit réservée à VAYRENZA GLOBAL. La collection est organisée en quatre familles distinctes afin d’intégrer ensuite les produits vérifiés sans reconstruire le catalogue.',sumK:'VZ-K · Enfant & junior',seriesK:'Enfant & junior',descK:'Des solutions conçues pour les vêtements bébé, enfant et junior, alliant soin du vêtement, présentation et polyvalence retail.'},
    de:{headline:'58 SKUs.<br>Ein kohärentes System.',intro:'Eine reservierte Produktarchitektur für VAYRENZA GLOBAL. Die Kollektion ist in vier klar definierte Familien gegliedert, sodass verifizierte Produkte später ohne Neuaufbau des Katalogs zugeordnet werden können.',sumK:'VZ-K · Kinder & Junior',seriesK:'Kinder & Junior',descK:'Gezielt entwickelte Bügellösungen für Baby-, Kinder- und Juniorbekleidung mit Fokus auf Kleiderschonung, Präsentation und vielseitigen Retail-Einsatz.'},
    'zh-CN':{headline:'58 个 SKU。<br>一个完整体系。',intro:'这是为 VAYRENZA GLOBAL 预先建立的产品架构。整个系列划分为四个清晰的产品家族，未来可直接将经过确认的真实产品对应到相应位置，无需重新构建产品目录。',sumK:'VZ-K · 儿童与青少年',seriesK:'儿童与青少年',descK:'专为婴幼儿、儿童及青少年服装设计，在服装保护、陈列效果与多场景零售应用之间取得平衡。'}
  };
  Object.keys(additions).forEach(lang=>{
    const c=copy[lang]; if(!c) return;
    Object.assign(c,additions[lang]);
    c.series=[...c.series.slice(0,3),additions[lang].seriesK];
    c.desc=[...c.desc.slice(0,3),additions[lang].descK];
  });

  const css=document.createElement('style');
  css.textContent=`
    .summary{grid-template-columns:1.05fr repeat(4,1fr)!important}
    .series-tabs{grid-template-columns:repeat(4,minmax(0,1fr))!important}
    @media(max-width:1000px){.series-tabs{grid-template-columns:repeat(4,minmax(210px,1fr))!important}}
    @media(max-width:720px){.series-tabs{grid-template-columns:repeat(4,240px)!important}.summary{grid-template-columns:1fr 1fr!important}.summary div:nth-child(2){border-right:1px solid var(--line-soft)!important}.summary div:nth-child(even){border-right:0!important}.summary div{border-bottom:1px solid var(--line-soft)}.summary div:last-child{border-bottom:0}}
  `;
  document.head.appendChild(css);

  const summary=document.querySelector('.summary');
  if(summary){
    const cells=summary.querySelectorAll('div');
    if(cells[0]) cells[0].querySelector('strong').textContent='58';
    if(!summary.querySelector('[data-t="sumK"]')) summary.insertAdjacentHTML('beforeend','<div><strong>10</strong><span data-t="sumK"></span></div>');
  }

  keyFromHash=function(){const m=location.hash.match(/^#vz-([stpk])$/i);return m?m[1].toUpperCase():null};

  openSeries=function(k,lang,updateHash){
    activeKey=k;
    const c=copy[lang]||copy.en,pk=lang==='zh-CN'?'zh':lang,keys=['S','T','P','K'],si=keys.indexOf(k),p=products[k];
    document.querySelectorAll('.series-tab').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.series===k)));
    const stage=document.getElementById('series-stage');
    const cards=p[pk].map((name,i)=>{
      const sku=`VZ-${k}${String(i+1).padStart(3,'0')}`;
      if(k==='S'||k==='K'){
        const src=`assets/products/${k==='S'?'s-series':'k-series'}/${sku}.png`;
        const benefit=k==='S'?sBenefits[i]:kBenefits[i];
        return `<article class="product-card has-image"><div class="product-visual" data-full="${src}" data-sku="${sku}" data-name="${name}" tabindex="0" role="button" aria-label="${c.view}: ${sku} ${name}"><img src="${src}" alt="${sku} ${name}" loading="lazy"><span class="view-full">${c.view}</span></div><div class="product-info"><div class="sku">${sku}</div><h3>${name}</h3><p class="product-benefit">${benefit}</p><div class="state">${c.state}</div></div></article>`;
      }
      return `<article class="product-card"><div class="sku">${sku}</div><h3>${name}</h3><div class="state">${c.state}</div></article>`;
    }).join('');
    stage.innerHTML=`<div class="series-stage-head"><div class="series-label">VZ-${k} SERIES · ${p.count} SKUs</div><p class="series-description">${c.desc[si]}</p></div><div class="product-rail" id="panel-${k}" role="tabpanel" aria-labelledby="tab-${k}">${cards}</div>`;
    bindImagePreview();
    if(updateHash)history.replaceState(null,'',`#vz-${k.toLowerCase()}`);
  };

  render=function(lang){
    const c=copy[lang]||copy.en;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-t]').forEach(el=>el.innerHTML=c[el.dataset.t]||'');
    document.querySelectorAll('[data-nav]').forEach(el=>el.textContent=c.nav[Number(el.dataset.nav)]);
    activeKey=keyFromHash()||activeKey;
    const keys=['S','T','P','K'];
    const wrap=document.getElementById('collections');
    wrap.innerHTML=`<div class="series-tabs" role="tablist">${keys.map((k,si)=>`<button class="series-tab" id="tab-${k}" role="tab" aria-controls="panel-${k}" aria-selected="${activeKey===k}" data-series="${k}"><div class="series-index">0${si+1}</div><div class="series-code">VZ-${k} SERIES</div><h2 class="series-title">${c.series[si]}</h2><span class="series-count">${products[k].count} SKUs</span></button>`).join('')}</div><div class="series-stage" id="series-stage"></div>`;
    wrap.querySelectorAll('.series-tab').forEach(btn=>btn.addEventListener('click',()=>openSeries(btn.dataset.series,lang,true)));
    openSeries(activeKey,lang,false);
    localStorage.setItem('vayrenza-language',lang);
  };

  const lang=document.getElementById('lang')?.value||localStorage.getItem('vayrenza-language')||'en';
  render(copy[lang]?lang:'en');
})();
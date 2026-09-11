(() => {
  if(typeof copy==='undefined')return;
  const x={
    en:{status:'2026 CORE COLLECTION',eyebrow:'2026 CORE COLLECTION',rule:'BUYER GUIDE'},
    es:{status:'COLECCIÓN PRINCIPAL 2026',eyebrow:'COLECCIÓN PRINCIPAL 2026',rule:'GUÍA DEL COMPRADOR'},
    fr:{status:'COLLECTION PRINCIPALE 2026',eyebrow:'COLLECTION PRINCIPALE 2026',rule:'GUIDE ACHETEUR'},
    de:{status:'KERNKOLLEKTION 2026',eyebrow:'KERNKOLLEKTION 2026',rule:'EINKÄUFER-GUIDE'},
    'zh-CN':{status:'2026 核心系列',eyebrow:'2026 核心系列',rule:'采购指南'},
    ja:{status:'2026 コアコレクション',eyebrow:'2026 コアコレクション',rule:'バイヤーガイド'},
    ko:{status:'2026 코어 컬렉션',eyebrow:'2026 코어 컬렉션',rule:'바이어 가이드'}
  };
  Object.entries(x).forEach(([l,v])=>{if(copy[l])Object.assign(copy[l],v)});

  /* Keep the approved Japanese SKU naming exact. */
  if(typeof products!=='undefined'&&products.T?.ja)products.T.ja[4]='ダブルバートラウザーハンガー';

  document.title='VAYRENZA GLOBAL — 2026 Product Collection';
  const supported=new Set(['en','es','fr','de','zh-CN','ja','ko']);
  const qLang=new URLSearchParams(location.search).get('lang');
  let l=supported.has(qLang)?qLang:(localStorage.getItem('vayrenza-language')||document.documentElement.lang||'en');
  if(!supported.has(l))l='en';
  const sel=document.getElementById('lang');
  if(sel)sel.value=l;
  if(typeof render==='function'&&copy[l])render(l);
  localStorage.setItem('vayrenza-language',l);
  document.documentElement.lang=l;

  const brand=document.querySelector('a.brand');
  if(brand){
    brand.setAttribute('href',`index.html?lang=${encodeURIComponent(l)}`);
    brand.addEventListener('click',()=>localStorage.setItem('vayrenza-language',l),{capture:true});
  }

  const expected={S:18,T:14,P:16,K:10};
  const langs=['en','es','fr','de','zh-CN','ja','ko'];
  window.__VZ_I18N_AUDIT__={
    language:l,
    copyReady:langs.every(code=>!!copy[code]),
    skuCounts:Object.fromEntries(Object.entries(expected).map(([k,n])=>[k,products?.[k]?.count===n])),
    jaProductNames:['S','T','P','K'].every(k=>products?.[k]?.ja?.length===expected[k]),
    koProductNames:['S','T','P','K'].every(k=>products?.[k]?.ko?.length===expected[k])
  };
  document.documentElement.classList.remove('vz-i18n-pending');
})();
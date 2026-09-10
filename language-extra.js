(() => {
  const requestedAtLoad = localStorage.getItem('vayrenza-language');

  const translations = {
    de: {
      'PRODUCTS':'PRODUKTE','SOLUTIONS':'LÖSUNGEN','CUSTOM / OEM':'INDIVIDUELL / OEM','SUSTAINABILITY':'NACHHALTIGKEIT','ABOUT':'ÜBER UNS','INSIGHTS':'EINBLICKE','CONTACT':'KONTAKT','SEARCH':'SUCHE','REQUEST A QUOTE':'ANGEBOT ANFORDERN',
      'PREMIUM GARMENT HANGER SOLUTIONS':'PREMIUM-KLEIDERBÜGELLÖSUNGEN','DESIGNED TO HANG.\nBUILT TO LAST.':'ZUM HÄNGEN ENTWORFEN.\nFÜR DAUER GEMACHT.','Premium hanger solutions for fashion, retail, hospitality, garment manufacturing and modern living.':'Premium-Kleiderbügellösungen für Mode, Einzelhandel, Hotellerie, Bekleidungsfertigung und modernes Wohnen.','EXPLORE COLLECTIONS':'KOLLEKTIONEN ENTDECKEN','START A PROJECT':'PROJEKT STARTEN',
      '2026 CORE COLLECTION':'KERNKOLLEKTION 2026','48 SKUs. One coherent system.':'48 SKUs. Ein stimmiges System.','A curated architecture of premium hanger forms, materials, finishes and applications for global B2B customers.':'Eine kuratierte Architektur aus Premium-Bügelformen, Materialien, Oberflächen und Anwendungen für globale B2B-Kunden.','SUIT & SHIRT':'ANZUG & HEMD','Refined silhouettes engineered for professional wardrobes and premium retail.':'Verfeinerte Silhouetten für professionelle Garderoben und den Premium-Einzelhandel.','TROUSER & SKIRT':'HOSE & ROCK','Purpose-built forms balancing grip, presentation and space efficiency.':'Gezielt entwickelte Formen für sicheren Halt, hochwertige Präsentation und effiziente Raumnutzung.','PREMIUM & SPECIALTY':'PREMIUM & SPEZIAL','Signature solutions for hospitality, luxury retail and bespoke programs.':'Charakteristische Lösungen für Hotellerie, Luxus-Einzelhandel und maßgeschneiderte Programme.',
      'GLOBAL B2B SOLUTIONS':'GLOBALE B2B-LÖSUNGEN','Built around your business.':'Auf Ihr Geschäft zugeschnitten.','FASHION & RETAIL':'MODE & EINZELHANDEL','Consistent presentation across stores, collections and markets.':'Einheitliche Präsentation über Stores, Kollektionen und Märkte hinweg.','HOSPITALITY':'HOTELLERIE','Durable hanger programs for hotels, resorts and professional wardrobes.':'Langlebige Bügelprogramme für Hotels, Resorts und professionelle Garderoben.','GARMENT MANUFACTURING':'BEKLEIDUNGSFERTIGUNG','Reliable systems for factories, showrooms and export programs.':'Zuverlässige Systeme für Fabriken, Showrooms und Exportprogramme.','OEM / ODM':'OEM / ODM','Custom dimensions, materials, finishes, branding and packaging.':'Individuelle Abmessungen, Materialien, Oberflächen, Branding und Verpackungen.',
      'CUSTOM DEVELOPMENT':'INDIVIDUELLE ENTWICKLUNG','From specification to signature.':'Von der Spezifikation zur unverwechselbaren Lösung.','VAYRENZA works with brands, retailers, manufacturers and hospitality groups to develop hanger systems tailored to product, positioning and operational requirements.':'VAYRENZA arbeitet mit Marken, Händlern, Herstellern und Hospitality-Gruppen zusammen, um Bügelsysteme zu entwickeln, die auf Produkt, Positionierung und operative Anforderungen abgestimmt sind.',
      'SUSTAINABILITY':'NACHHALTIGKEIT','Better materials. Longer life.':'Bessere Materialien. Längere Lebensdauer.','We focus on material selection, durability, responsible production and product longevity—because a hanger designed to last is designed to waste less.':'Wir konzentrieren uns auf Materialauswahl, Langlebigkeit, verantwortungsvolle Produktion und Produktlebensdauer – denn ein Bügel, der lange hält, verursacht weniger Abfall.',
      'Materials, merchandising & hanger intelligence.':'Materialien, Merchandising & Bügelkompetenz.','A practical point of view on the details that shape garment presentation, product protection and long-term hanger performance across premium B2B environments.':'Ein praxisnaher Blick auf die Details, die Warenpräsentation, Produktschutz und die langfristige Leistung von Kleiderbügeln in hochwertigen B2B-Umgebungen bestimmen.','MATERIAL INTELLIGENCE':'MATERIALKOMPETENZ','Performance begins with material choice.':'Leistung beginnt bei der Materialwahl.','Material density, surface finish, hook construction and contact points all influence durability, garment care and perceived quality. We examine how those decisions affect performance over time.':'Materialdichte, Oberflächenfinish, Hakenkonstruktion und Kontaktpunkte beeinflussen Haltbarkeit, Textilpflege und wahrgenommene Qualität. Wir betrachten, wie sich diese Entscheidungen langfristig auf die Leistung auswirken.','MERCHANDISING & PRESENTATION':'MERCHANDISING & PRÄSENTATION','Consistency creates a stronger visual system.':'Konsistenz schafft ein stärkeres visuelles System.','Proportion, spacing, profile and finish can change the way a collection is experienced. The right hanger system supports presentation without competing with the garment itself.':'Proportion, Abstand, Profil und Finish prägen die Wahrnehmung einer Kollektion. Das richtige Bügelsystem unterstützt die Präsentation, ohne mit dem Kleidungsstück selbst zu konkurrieren.','DESIGN & DEVELOPMENT':'DESIGN & ENTWICKLUNG','From specification to scalable execution.':'Von der Spezifikation zur skalierbaren Umsetzung.','We explore the practical decisions behind dimensions, customization, branding and production—helping turn a design intention into a dependable program for global rollout.':'Wir beleuchten die praktischen Entscheidungen zu Abmessungen, Individualisierung, Branding und Produktion und helfen dabei, eine Designidee in ein zuverlässiges Programm für den globalen Rollout zu überführen.',
      'ABOUT VAYRENZA':'ÜBER VAYRENZA','Designed with purpose.\nMade for the long term.':'Mit Sinn gestaltet.\nFür die Zukunft gemacht.','VAYRENZA is a premium global garment hanger brand creating refined, reliable hanger systems for fashion, retail, hospitality, garment manufacturing and modern living. We combine considered design, material discipline and dependable production to make the hanger part of the product experience—not an afterthought.':'VAYRENZA ist eine globale Premium-Marke für Kleiderbügel und entwickelt raffinierte, zuverlässige Bügelsysteme für Mode, Einzelhandel, Hotellerie, Bekleidungsfertigung und modernes Wohnen. Durch durchdachtes Design, konsequente Materialauswahl und verlässliche Produktion wird der Bügel Teil des Produkterlebnisses – nicht bloß ein Nebengedanke.','MISSION':'MISSION','Elevate the everyday hanger.':'Den alltäglichen Kleiderbügel neu definieren.','To elevate the humble garment hanger through thoughtful design, dependable materials and consistent manufacturing—helping brands present, protect and organize garments with greater clarity and confidence.':'Den alltäglichen Kleiderbügel durch durchdachtes Design, verlässliche Materialien und gleichbleibende Fertigung aufzuwerten – damit Marken ihre Kleidung klarer, sicherer und überzeugender präsentieren, schützen und organisieren können.','VISION':'VISION','A global reference for hanger systems.':'Eine globale Referenz für Bügelsysteme.','To become a globally recognized reference for premium garment hanger systems, connecting design, craftsmanship and scalable B2B solutions across fashion, retail, hospitality and professional wardrobes.':'Eine weltweit anerkannte Referenz für Premium-Bügelsysteme zu werden, die Design, Handwerksqualität und skalierbare B2B-Lösungen für Mode, Einzelhandel, Hotellerie und professionelle Garderoben verbindet.','Tell us what you need.':'Sagen Sie uns, was Sie benötigen.','For collections, OEM/ODM, hospitality programs or wholesale inquiries, contact VAYRENZA GLOBAL.':'Für Kollektionen, OEM/ODM, Hospitality-Programme oder Großhandelsanfragen kontaktieren Sie VAYRENZA GLOBAL.','Premium hanger solutions for global B2B markets.':'Premium-Kleiderbügellösungen für globale B2B-Märkte.'
    },
    'zh-CN': {
      'PRODUCTS':'产品','SOLUTIONS':'解决方案','CUSTOM / OEM':'定制 / OEM','SUSTAINABILITY':'可持续发展','ABOUT':'关于我们','INSIGHTS':'行业洞察','CONTACT':'联系我们','SEARCH':'搜索','REQUEST A QUOTE':'获取报价',
      'PREMIUM GARMENT HANGER SOLUTIONS':'高端衣架解决方案','DESIGNED TO HANG.\nBUILT TO LAST.':'为悬挂而设计。\n为长久而打造。','Premium hanger solutions for fashion, retail, hospitality, garment manufacturing and modern living.':'面向时尚、零售、酒店、服装制造及现代生活场景的高端衣架解决方案。','EXPLORE COLLECTIONS':'探索产品系列','START A PROJECT':'启动项目',
      '2026 CORE COLLECTION':'2026 核心系列','48 SKUs. One coherent system.':'48 个 SKU，一个完整统一的系统。','A curated architecture of premium hanger forms, materials, finishes and applications for global B2B customers.':'为全球 B2B 客户打造经过精心规划的高端衣架体系，涵盖造型、材料、表面处理与应用场景。','SUIT & SHIRT':'西装与衬衫','Refined silhouettes engineered for professional wardrobes and premium retail.':'以精致轮廓满足专业衣橱与高端零售陈列需求。','TROUSER & SKIRT':'长裤与半裙','Purpose-built forms balancing grip, presentation and space efficiency.':'以专门设计兼顾稳固夹持、陈列效果与空间效率。','PREMIUM & SPECIALTY':'高端与专业系列','Signature solutions for hospitality, luxury retail and bespoke programs.':'面向酒店、奢华零售及专属定制项目的标志性解决方案。',
      'GLOBAL B2B SOLUTIONS':'全球 B2B 解决方案','Built around your business.':'围绕您的业务而打造。','FASHION & RETAIL':'时尚与零售','Consistent presentation across stores, collections and markets.':'在不同门店、系列与市场中保持统一的品牌陈列。','HOSPITALITY':'酒店与款待业','Durable hanger programs for hotels, resorts and professional wardrobes.':'为酒店、度假村及专业衣橱提供耐用可靠的衣架项目。','GARMENT MANUFACTURING':'服装制造','Reliable systems for factories, showrooms and export programs.':'为工厂、展厅及出口项目提供稳定可靠的衣架系统。','OEM / ODM':'OEM / ODM','Custom dimensions, materials, finishes, branding and packaging.':'支持尺寸、材料、表面处理、品牌标识及包装定制。',
      'CUSTOM DEVELOPMENT':'定制开发','From specification to signature.':'从规格要求到品牌专属。','VAYRENZA works with brands, retailers, manufacturers and hospitality groups to develop hanger systems tailored to product, positioning and operational requirements.':'VAYRENZA 与品牌、零售商、制造商及酒店集团合作，根据产品特性、品牌定位与运营需求开发专属衣架系统。',
      'SUSTAINABILITY':'可持续发展','Better materials. Longer life.':'更优材料，更长寿命。','We focus on material selection, durability, responsible production and product longevity—because a hanger designed to last is designed to waste less.':'我们重视材料选择、耐用性、负责任生产与产品寿命，因为真正经久耐用的衣架，也意味着更少的浪费。',
      'Materials, merchandising & hanger intelligence.':'材料、陈列与衣架专业洞察。','A practical point of view on the details that shape garment presentation, product protection and long-term hanger performance across premium B2B environments.':'从实际应用出发，探讨影响服装陈列、产品保护以及高端 B2B 场景中衣架长期性能的关键细节。','MATERIAL INTELLIGENCE':'材料洞察','Performance begins with material choice.':'性能始于材料选择。','Material density, surface finish, hook construction and contact points all influence durability, garment care and perceived quality. We examine how those decisions affect performance over time.':'材料密度、表面处理、挂钩结构以及接触点都会影响耐用性、服装保护和品质感知。我们关注这些设计决策如何影响长期使用表现。','MERCHANDISING & PRESENTATION':'陈列与展示','Consistency creates a stronger visual system.':'一致性成就更强的视觉体系。','Proportion, spacing, profile and finish can change the way a collection is experienced. The right hanger system supports presentation without competing with the garment itself.':'比例、间距、轮廓和表面处理都会改变系列产品的整体观感。合适的衣架系统应当衬托服装，而不是与服装争夺视觉焦点。','DESIGN & DEVELOPMENT':'设计与开发','From specification to scalable execution.':'从规格定义到规模化落地。','We explore the practical decisions behind dimensions, customization, branding and production—helping turn a design intention into a dependable program for global rollout.':'我们关注尺寸、定制、品牌呈现与生产环节中的实际决策，帮助将设计意图转化为可稳定复制、适合全球落地的项目方案。',
      'ABOUT VAYRENZA':'关于 VAYRENZA','Designed with purpose.\nMade for the long term.':'有目的地设计。\n为长期价值而打造。','VAYRENZA is a premium global garment hanger brand creating refined, reliable hanger systems for fashion, retail, hospitality, garment manufacturing and modern living. We combine considered design, material discipline and dependable production to make the hanger part of the product experience—not an afterthought.':'VAYRENZA 是一个面向全球市场的高端衣架品牌，为时尚、零售、酒店、服装制造及现代生活场景打造精致可靠的衣架系统。我们将审慎设计、严谨选材与稳定生产相结合，让衣架成为产品体验的一部分，而不是被忽略的配角。','MISSION':'使命','Elevate the everyday hanger.':'重新定义日常衣架。','To elevate the humble garment hanger through thoughtful design, dependable materials and consistent manufacturing—helping brands present, protect and organize garments with greater clarity and confidence.':'通过周到设计、可靠材料与稳定制造提升衣架价值，帮助品牌以更清晰、更专业、更自信的方式展示、保护与整理服装。','VISION':'愿景','A global reference for hanger systems.':'成为全球衣架系统的专业标杆。','To become a globally recognized reference for premium garment hanger systems, connecting design, craftsmanship and scalable B2B solutions across fashion, retail, hospitality and professional wardrobes.':'成为全球认可的高端衣架系统标杆，将设计、工艺与可规模化的 B2B 解决方案连接到时尚、零售、酒店及专业衣橱领域。','Tell us what you need.':'告诉我们您的需求。','For collections, OEM/ODM, hospitality programs or wholesale inquiries, contact VAYRENZA GLOBAL.':'如需产品系列、OEM/ODM、酒店项目或批发合作，请联系 VAYRENZA GLOBAL。','Premium hanger solutions for global B2B markets.':'面向全球 B2B 市场的高端衣架解决方案。'
    }
  };

  const meta = {
    de:{code:'DE',flag:'🇩🇪',label:'Deutsch'},
    'zh-CN':{code:'中文',flag:'🇨🇳',label:'简体中文'}
  };

  const searchCopy = {
    de:{label:'WEBSITE-SUCHE',placeholder:'VAYRENZA durchsuchen',close:'SCHLIESSEN',hint:'Gesamten Text dieser Seite durchsuchen',empty:'Keine Ergebnisse gefunden',result:'ERGEBNIS',results:'ERGEBNISSE'},
    'zh-CN':{label:'站内搜索',placeholder:'搜索 VAYRENZA',close:'关闭',hint:'搜索本页面全部文字',empty:'未找到相关结果',result:'个结果',results:'个结果'}
  };

  function originals(){
    return Array.from(document.querySelectorAll('nav a,.search-link,.quote,.hero .eyebrow,.hero h1,.hero .lead,.hero .btn,.section .eyebrow,.section h2,.section h3,.section p,.cards span,.contact .btn,footer p'));
  }

  function updateSearchChrome(lang){
    const c = searchCopy[lang];
    if(!c) return;
    const label=document.querySelector('.search-label');
    const input=document.querySelector('.search-input');
    const close=document.querySelector('.search-close');
    const hint=document.querySelector('.search-hint');
    if(label) label.textContent=c.label;
    if(input){input.placeholder=c.placeholder;input.setAttribute('aria-label',c.placeholder);}
    if(close) close.textContent=c.close;
    if(hint) hint.textContent=c.hint;
  }

  function localizeSearchResults(lang){
    const c=searchCopy[lang];
    if(!c) return;
    const empty=document.querySelector('.search-empty');
    if(empty) empty.textContent=c.empty;
    const count=document.querySelector('.search-count');
    if(count && count.textContent){
      const match=count.textContent.match(/\d+/);
      if(match){
        const n=Number(match[0]);
        count.textContent=lang==='zh-CN' ? `${n} ${c.results}` : `${n} ${n===1?c.result:c.results}`;
      }
    }
  }

  function applyExtraLanguage(lang){
    const dict=translations[lang];
    if(!dict) return;
    document.documentElement.lang=lang;
    originals().forEach(el=>{
      const original=el.dataset.originalText || el.innerText.trim();
      const translated=dict[original];
      if(!translated) return;
      if(original==='DESIGNED TO HANG.\nBUILT TO LAST.' || original==='Designed with purpose.\nMade for the long term.') el.innerHTML=translated.replace('\n','<br>');
      else el.textContent=translated;
    });
    const summary=document.querySelector('.language-dropdown summary');
    const m=meta[lang];
    if(summary && m){
      summary.innerHTML=`<span class="flag">${m.flag}</span><span>${m.code}</span><span class="language-chevron">⌄</span>`;
      summary.setAttribute('aria-label',`Language: ${m.label}`);
    }
    document.querySelectorAll('.language-menu a[lang]').forEach(a=>a.setAttribute('aria-current',a.lang===lang?'true':'false'));
    document.querySelector('.language-dropdown')?.removeAttribute('open');
    localStorage.setItem('vayrenza-language',lang);
    updateSearchChrome(lang);
  }

  document.addEventListener('click',e=>{
    const link=e.target.closest('.language-menu a[lang]');
    if(!link || !translations[link.lang]) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    applyExtraLanguage(link.lang);
  },true);

  const searchObserver=new MutationObserver(()=>{
    const lang=document.documentElement.lang;
    if(searchCopy[lang]) localizeSearchResults(lang);
  });

  window.addEventListener('DOMContentLoaded',()=>{
    const results=document.querySelector('.search-results');
    const count=document.querySelector('.search-count');
    if(results) searchObserver.observe(results,{childList:true,subtree:true,characterData:true});
    if(count) searchObserver.observe(count,{childList:true,subtree:true,characterData:true});
    if(translations[requestedAtLoad]) setTimeout(()=>applyExtraLanguage(requestedAtLoad),0);
  });
})();

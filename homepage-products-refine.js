(() => {
  const copy={
    en:{headline:'58 SKUs. One coherent system.',intro:'A refined product architecture built around four distinct families — designed to serve fashion, retail, hospitality and professional garment presentation.',kTitle:'KIDS & JUNIOR',kBody:'Purpose-designed hanger solutions for baby, kids and junior garments, balancing garment care, presentation and versatile retail use.'},
    es:{headline:'58 SKUs. Un sistema coherente.',intro:'Una arquitectura de producto refinada organizada en cuatro familias distintas, diseñada para moda, retail, hostelería y presentación profesional de prendas.',kTitle:'INFANTIL Y JUVENIL',kBody:'Soluciones diseñadas para prendas de bebé, infantiles y juveniles, equilibrando cuidado, presentación y versatilidad para retail.'},
    fr:{headline:'58 SKUs. Un système cohérent.',intro:'Une architecture produit raffinée structurée autour de quatre familles distinctes, pensée pour la mode, le retail, l’hôtellerie et la présentation professionnelle des vêtements.',kTitle:'ENFANT & JUNIOR',kBody:'Des solutions conçues pour les vêtements bébé, enfant et junior, alliant soin du vêtement, présentation et polyvalence retail.'},
    de:{headline:'58 SKUs. Ein kohärentes System.',intro:'Eine verfeinerte Produktarchitektur mit vier klar definierten Familien – entwickelt für Mode, Einzelhandel, Hotellerie und professionelle Bekleidungspräsentation.',kTitle:'KINDER & JUNIOR',kBody:'Gezielt entwickelte Bügellösungen für Baby-, Kinder- und Juniorbekleidung mit Fokus auf Kleiderschonung, Präsentation und vielseitigen Retail-Einsatz.'},
    'zh-CN':{headline:'58 个 SKU，一个完整统一的系统。',intro:'围绕四个清晰产品家族构建的精炼产品体系，服务于时尚、零售、酒店及专业服装陈列场景。',kTitle:'儿童与青少年',kBody:'专为婴幼儿、儿童及青少年服装设计，在服装保护、陈列效果与多场景零售应用之间取得平衡。'},
    ja:{headline:'58 SKUs. ひとつの統一されたシステム。',intro:'用途に合わせて設計した58のハンガーソリューションを4つの明確なシリーズに体系化。',kTitle:'キッズ＆ジュニア',kBody:'子ども服に適した設計で小さな衣類を守り、コレクションを整然と美しく見せます。'},
    ko:{headline:'58 SKUs. 하나의 일관된 시스템.',intro:'용도에 맞게 설계된 58가지 행거 솔루션을 4개의 명확한 시리즈로 구성했습니다.',kTitle:'키즈 & 주니어',kBody:'아동 의류에 맞는 구조로 작은 의류를 보호하고 컬렉션을 정돈된 상태로 전시합니다.'}
  };
  const supported=new Set(['en','es','fr','de','zh-CN','ja','ko']);
  function currentLang(){
    const doc=document.documentElement.lang;
    const stored=localStorage.getItem('vayrenza-language');
    return supported.has(doc)?doc:(supported.has(stored)?stored:'en');
  }
  function syncProductLinks(lang){
    if(!supported.has(lang))lang='en';
    document.querySelectorAll('a[href*="products-preview.html"]').forEach(a=>{
      const raw=a.getAttribute('href')||'products-preview.html';
      const hash=raw.includes('#')?'#'+raw.split('#').slice(1).join('#'):'';
      a.setAttribute('href',`products-preview.html?lang=${encodeURIComponent(lang)}${hash}`);
    });
  }
  function syncHomeLogo(lang){
    if(!supported.has(lang))lang='en';
    const logo=document.querySelector('a.brand.brand-logo');
    if(logo){
      logo.setAttribute('href',`index.html?lang=${encodeURIComponent(lang)}`);
      logo.dataset.vzLanguageHome='true';
    }
  }
  function apply(){
    const lang=currentLang(),c=copy[lang]||copy.en;
    document.querySelectorAll('[data-home58]').forEach(el=>{const key=el.dataset.home58;if(c[key])el.textContent=c[key]});
    syncProductLinks(lang);
    syncHomeLogo(lang);
  }
  document.addEventListener('click',e=>{
    const logo=e.target.closest('a.brand.brand-logo');
    if(!logo)return;
    const lang=currentLang();
    localStorage.setItem('vayrenza-language',lang);
    logo.setAttribute('href',`index.html?lang=${encodeURIComponent(lang)}`);
  },true);
  apply();
  new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  const s=document.createElement('script');s.src='customer-value-copy-v1.js';s.onload=()=>{const j=document.createElement('script');j.src='homepage-ja-ko.js';j.onload=apply;document.head.appendChild(j)};document.head.appendChild(s);
})();
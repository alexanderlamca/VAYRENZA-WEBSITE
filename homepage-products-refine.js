(() => {
  const copy={
    en:{headline:'58 SKUs. One coherent system.',intro:'A refined product architecture built around four distinct families — designed to serve fashion, retail, hospitality and professional garment presentation.',kTitle:'KIDS & JUNIOR',kBody:'Purpose-designed hanger solutions for baby, kids and junior garments, balancing garment care, presentation and versatile retail use.'},
    es:{headline:'58 SKUs. Un sistema coherente.',intro:'Una arquitectura de producto refinada organizada en cuatro familias distintas, diseñada para moda, retail, hostelería y presentación profesional de prendas.',kTitle:'INFANTIL Y JUVENIL',kBody:'Soluciones diseñadas para prendas de bebé, infantiles y juveniles, equilibrando cuidado, presentación y versatilidad para retail.'},
    fr:{headline:'58 SKUs. Un système cohérent.',intro:'Une architecture produit raffinée structurée autour de quatre familles distinctes, pensée pour la mode, le retail, l’hôtellerie et la présentation professionnelle des vêtements.',kTitle:'ENFANT & JUNIOR',kBody:'Des solutions conçues pour les vêtements bébé, enfant et junior, alliant soin du vêtement, présentation et polyvalence retail.'},
    de:{headline:'58 SKUs. Ein kohärentes System.',intro:'Eine verfeinerte Produktarchitektur mit vier klar definierten Familien – entwickelt für Mode, Einzelhandel, Hotellerie und professionelle Bekleidungspräsentation.',kTitle:'KINDER & JUNIOR',kBody:'Gezielt entwickelte Bügellösungen für Baby-, Kinder- und Juniorbekleidung mit Fokus auf Kleiderschonung, Präsentation und vielseitigen Retail-Einsatz.'},
    'zh-CN':{headline:'58 个 SKU，一个完整统一的系统。',intro:'围绕四个清晰产品家族构建的精炼产品体系，服务于时尚、零售、酒店及专业服装陈列场景。',kTitle:'儿童与青少年',kBody:'专为婴幼儿、儿童及青少年服装设计，在服装保护、陈列效果与多场景零售应用之间取得平衡。'}
  };
  function apply(){
    const lang=document.documentElement.lang||'en';
    const c=copy[lang]||copy.en;
    document.querySelectorAll('[data-home58]').forEach(el=>{
      const key=el.dataset.home58;
      if(c[key]) el.textContent=c[key];
    });
  }
  apply();
  new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();

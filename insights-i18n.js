(() => {
  const copy = {
    es: {
      'A practical point of view on the details that shape garment presentation, product protection and long-term hanger performance across premium B2B environments.':'Una perspectiva práctica sobre los detalles que definen la presentación de las prendas, su protección y el rendimiento a largo plazo de las perchas en entornos B2B premium.',
      'MATERIAL INTELLIGENCE':'INTELIGENCIA DE MATERIALES',
      'Performance begins with material choice.':'El rendimiento comienza con la elección del material.',
      'Material density, surface finish, hook construction and contact points all influence durability, garment care and perceived quality. We examine how those decisions affect performance over time.':'La densidad del material, el acabado superficial, la construcción del gancho y los puntos de contacto influyen en la durabilidad, el cuidado de la prenda y la calidad percibida. Analizamos cómo estas decisiones afectan al rendimiento con el tiempo.',
      'MERCHANDISING & PRESENTATION':'MERCHANDISING Y PRESENTACIÓN',
      'Consistency creates a stronger visual system.':'La coherencia crea un sistema visual más sólido.',
      'Proportion, spacing, profile and finish can change the way a collection is experienced. The right hanger system supports presentation without competing with the garment itself.':'La proporción, el espaciado, el perfil y el acabado pueden transformar la manera en que se percibe una colección. El sistema de perchas adecuado realza la presentación sin competir con la propia prenda.',
      'DESIGN & DEVELOPMENT':'DISEÑO Y DESARROLLO',
      'From specification to scalable execution.':'De la especificación a una ejecución escalable.',
      'We explore the practical decisions behind dimensions, customization, branding and production—helping turn a design intention into a dependable program for global rollout.':'Exploramos las decisiones prácticas detrás de las dimensiones, la personalización, el branding y la producción, ayudando a convertir una intención de diseño en un programa fiable para su implementación global.'
    },
    fr: {
      'A practical point of view on the details that shape garment presentation, product protection and long-term hanger performance across premium B2B environments.':'Un regard pratique sur les détails qui façonnent la présentation des vêtements, leur protection et la performance à long terme des cintres dans les environnements B2B premium.',
      'MATERIAL INTELLIGENCE':'INTELLIGENCE DES MATÉRIAUX',
      'Performance begins with material choice.':'La performance commence par le choix du matériau.',
      'Material density, surface finish, hook construction and contact points all influence durability, garment care and perceived quality. We examine how those decisions affect performance over time.':'La densité du matériau, la finition de surface, la conception du crochet et les points de contact influencent la durabilité, le soin du vêtement et la qualité perçue. Nous examinons l’impact de ces choix sur la performance dans le temps.',
      'MERCHANDISING & PRESENTATION':'MERCHANDISING & PRÉSENTATION',
      'Consistency creates a stronger visual system.':'La cohérence crée un système visuel plus fort.',
      'Proportion, spacing, profile and finish can change the way a collection is experienced. The right hanger system supports presentation without competing with the garment itself.':'Les proportions, l’espacement, le profil et la finition peuvent transformer la perception d’une collection. Le bon système de cintres soutient la présentation sans concurrencer le vêtement lui-même.',
      'DESIGN & DEVELOPMENT':'DESIGN & DÉVELOPPEMENT',
      'From specification to scalable execution.':'Du cahier des charges à une exécution évolutive.',
      'We explore the practical decisions behind dimensions, customization, branding and production—helping turn a design intention into a dependable program for global rollout.':'Nous explorons les décisions concrètes liées aux dimensions, à la personnalisation, au branding et à la production afin de transformer une intention de design en un programme fiable pour un déploiement international.'
    }
  };

  const nodes = Array.from(document.querySelectorAll('#insights .intro,#insights .eyebrow,#insights h3,#insights .insights-grid p'));
  nodes.forEach(el => {
    if (!el.dataset.insightsOriginal) el.dataset.insightsOriginal = el.textContent.trim();
  });

  function apply(lang){
    const dict = copy[lang] || {};
    nodes.forEach(el => {
      const original = el.dataset.insightsOriginal;
      el.textContent = lang === 'en' ? original : (dict[original] || original);
    });
  }

  apply(document.documentElement.lang || 'en');

  document.addEventListener('click', e => {
    const link = e.target.closest('.language-menu a[lang]');
    if (!link) return;
    apply(link.lang);
  }, true);
})();

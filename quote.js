(() => {
  const endpoint = 'https://formsubmit.co/ajax/info@vayrenza.com';

  const copy = {
    en:{kicker:'B2B INQUIRY',title:'Tell us what you need.',subtitle:'Share your project requirements and our team can review the details before following up with you.',close:'CLOSE',name:'NAME',company:'COMPANY',country:'COUNTRY / REGION',email:'EMAIL',phone:'PHONE / WHATSAPP',product:'PRODUCT REQUIREMENT',quantity:'ESTIMATED QUANTITY',custom:'CUSTOMIZATION REQUIREMENT',message:'MESSAGE',select:'Select an option',productOptions:['Suit & Shirt Hangers','Trouser & Skirt Hangers','Premium & Specialty Hangers','OEM / ODM Development','Hospitality Program','Wholesale / Distribution','Other'],customOptions:['No customization required','Logo / branding','Custom dimensions','Custom material / finish','Custom packaging','Full OEM / ODM development','Not sure yet'],note:'Required fields help us prepare a more relevant response. Your inquiry will be sent securely for review.',submit:'SUBMIT REQUEST',sending:'SENDING…',successTitle:'Thank you.',success:'Your request has been submitted successfully. Our team will review the details and follow up with you.',errorTitle:'Unable to submit.',error:'Please try again, or contact info@vayrenza.com directly.'},
    es:{kicker:'CONSULTA B2B',title:'Cuéntenos qué necesita.',subtitle:'Comparta los requisitos de su proyecto para que nuestro equipo pueda revisarlos antes de ponerse en contacto con usted.',close:'CERRAR',name:'NOMBRE',company:'EMPRESA',country:'PAÍS / REGIÓN',email:'CORREO ELECTRÓNICO',phone:'TELÉFONO / WHATSAPP',product:'NECESIDAD DE PRODUCTO',quantity:'CANTIDAD ESTIMADA',custom:'REQUISITOS DE PERSONALIZACIÓN',message:'MENSAJE',select:'Seleccione una opción',productOptions:['Perchas para traje y camisa','Perchas para pantalón y falda','Perchas premium y especiales','Desarrollo OEM / ODM','Programa de hostelería','Mayorista / distribución','Otro'],customOptions:['Sin personalización','Logotipo / branding','Dimensiones personalizadas','Material / acabado personalizado','Embalaje personalizado','Desarrollo OEM / ODM completo','Aún no estoy seguro'],note:'Los campos obligatorios nos ayudan a preparar una respuesta más relevante. Su consulta se enviará de forma segura para su revisión.',submit:'ENVIAR SOLICITUD',sending:'ENVIANDO…',successTitle:'Gracias.',success:'Su solicitud se ha enviado correctamente. Nuestro equipo revisará los detalles y se pondrá en contacto con usted.',errorTitle:'No se pudo enviar.',error:'Inténtelo de nuevo o contacte directamente con info@vayrenza.com.'},
    fr:{kicker:'DEMANDE B2B',title:'Dites-nous ce dont vous avez besoin.',subtitle:'Partagez les exigences de votre projet afin que notre équipe puisse les examiner avant de vous recontacter.',close:'FERMER',name:'NOM',company:'ENTREPRISE',country:'PAYS / RÉGION',email:'E-MAIL',phone:'TÉLÉPHONE / WHATSAPP',product:'BESOIN PRODUIT',quantity:'QUANTITÉ ESTIMÉE',custom:'BESOIN DE PERSONNALISATION',message:'MESSAGE',select:'Sélectionnez une option',productOptions:['Cintres costume & chemise','Cintres pantalon & jupe','Cintres premium & spéciaux','Développement OEM / ODM','Programme hôtellerie','Grossiste / distribution','Autre'],customOptions:['Aucune personnalisation','Logo / branding','Dimensions personnalisées','Matériau / finition personnalisé','Emballage personnalisé','Développement OEM / ODM complet','Pas encore certain'],note:'Les champs obligatoires nous aident à préparer une réponse plus pertinente. Votre demande sera envoyée de manière sécurisée pour examen.',submit:'ENVOYER LA DEMANDE',sending:'ENVOI…',successTitle:'Merci.',success:'Votre demande a bien été envoyée. Notre équipe examinera les détails et vous recontactera.',errorTitle:'Envoi impossible.',error:'Veuillez réessayer ou contacter directement info@vayrenza.com.'}
  };

  const overlay = document.createElement('div');
  overlay.className = 'quote-overlay';
  overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML = `
    <div class="quote-dialog" role="dialog" aria-modal="true" aria-labelledby="quote-title">
      <div class="quote-head">
        <div><p class="quote-kicker"></p><h2 class="quote-title" id="quote-title"></h2><p class="quote-subtitle"></p></div>
        <button class="quote-close" type="button"></button>
      </div>
      <form class="quote-form" novalidate>
        <input type="text" name="_honey" class="quote-honeypot" tabindex="-1" autocomplete="off">
        <input type="hidden" name="_subject" value="New VAYRENZA B2B Inquiry">
        <input type="hidden" name="_template" value="table">
        <div class="quote-grid">
          <div class="quote-field"><label for="q-name"></label><input id="q-name" name="Name" type="text" required autocomplete="name"></div>
          <div class="quote-field"><label for="q-company"></label><input id="q-company" name="Company" type="text" required autocomplete="organization"></div>
          <div class="quote-field"><label for="q-country"></label><input id="q-country" name="Country / Region" type="text" required autocomplete="country-name"></div>
          <div class="quote-field"><label for="q-email"></label><input id="q-email" name="Email" type="email" required autocomplete="email"></div>
          <div class="quote-field"><label for="q-phone"></label><input id="q-phone" name="Phone / WhatsApp" type="tel" autocomplete="tel"></div>
          <div class="quote-field"><label for="q-product"></label><select id="q-product" name="Product Requirement" required></select></div>
          <div class="quote-field"><label for="q-quantity"></label><input id="q-quantity" name="Estimated Quantity" type="text" placeholder="e.g. 5,000 pcs"></div>
          <div class="quote-field"><label for="q-custom"></label><select id="q-custom" name="Customization Requirement"></select></div>
          <div class="quote-field full"><label for="q-message"></label><textarea id="q-message" name="Message" required></textarea></div>
        </div>
        <div class="quote-actions"><p class="quote-note"></p><button class="quote-submit" type="submit"></button></div>
      </form>
      <div class="quote-status" role="status"><h3></h3><p></p></div>
    </div>`;
  document.body.appendChild(overlay);

  const dialog = overlay.querySelector('.quote-dialog');
  const form = overlay.querySelector('.quote-form');
  const closeBtn = overlay.querySelector('.quote-close');
  const submitBtn = overlay.querySelector('.quote-submit');
  const status = overlay.querySelector('.quote-status');
  const productSelect = overlay.querySelector('#q-product');
  const customSelect = overlay.querySelector('#q-custom');
  let lastFocus = null;

  function currentLang(){
    const lang = document.documentElement.lang;
    return copy[lang] ? lang : 'en';
  }

  function optionMarkup(items, placeholder){
    return `<option value="" selected disabled>${placeholder}</option>` + items.map(item => `<option value="${item.replace(/"/g,'&quot;')}">${item}</option>`).join('');
  }

  function applyCopy(){
    const c = copy[currentLang()];
    overlay.querySelector('.quote-kicker').textContent = c.kicker;
    overlay.querySelector('.quote-title').textContent = c.title;
    overlay.querySelector('.quote-subtitle').textContent = c.subtitle;
    closeBtn.textContent = c.close;
    const labels = overlay.querySelectorAll('.quote-field label');
    [c.name,c.company,c.country,c.email,c.phone,c.product,c.quantity,c.custom,c.message].forEach((text,i)=>labels[i].textContent=text);
    productSelect.innerHTML = optionMarkup(c.productOptions,c.select);
    customSelect.innerHTML = optionMarkup(c.customOptions,c.select);
    overlay.querySelector('.quote-note').textContent = c.note;
    submitBtn.textContent = c.submit;
  }

  function openQuote(e){
    if(e) e.preventDefault();
    applyCopy();
    lastFocus = document.activeElement;
    status.className = 'quote-status';
    form.style.display = '';
    form.reset();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('quote-open');
    setTimeout(()=>overlay.querySelector('#q-name').focus(),60);
  }

  function closeQuote(){
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('quote-open');
    if(lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  document.querySelectorAll('.quote,.contact .btn.primary,[data-quote-trigger]').forEach(el=>el.addEventListener('click',openQuote));
  closeBtn.addEventListener('click',closeQuote);
  overlay.addEventListener('click',e=>{if(e.target===overlay) closeQuote();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && overlay.classList.contains('is-open')) closeQuote();});

  const observer = new MutationObserver(()=>{ if(overlay.classList.contains('is-open')) applyCopy(); });
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const c = copy[currentLang()];
    if(!form.reportValidity()) return;
    submitBtn.disabled = true;
    submitBtn.textContent = c.sending;
    try{
      const response = await fetch(endpoint,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});
      if(!response.ok) throw new Error('Submission failed');
      form.style.display='none';
      status.className='quote-status is-visible';
      status.querySelector('h3').textContent=c.successTitle;
      status.querySelector('p').textContent=c.success;
      form.reset();
    }catch(err){
      status.className='quote-status is-visible error';
      status.querySelector('h3').textContent=c.errorTitle;
      status.querySelector('p').textContent=c.error;
    }finally{
      submitBtn.disabled=false;
      submitBtn.textContent=c.submit;
    }
  });
})();

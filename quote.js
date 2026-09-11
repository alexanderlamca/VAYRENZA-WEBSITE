(() => {
  'use strict';

  const endpoint = 'https://formsubmit.co/ajax/info@vayrenza.com';

  const copy = {
    en:{kicker:'B2B INQUIRY',title:'Tell us what you need.',subtitle:'Share your project requirements and our team can review the details before following up with you.',close:'CLOSE',name:'NAME',company:'COMPANY',country:'COUNTRY / REGION',email:'EMAIL',phone:'PHONE / WHATSAPP',product:'PRODUCT REQUIREMENT',quantity:'ESTIMATED QUANTITY',quantityPlaceholder:'e.g. 5,000 pcs',custom:'CUSTOMIZATION REQUIREMENT',message:'MESSAGE',select:'Select an option',productOptions:['Suit & Shirt Hangers','Trouser & Skirt Hangers','Premium & Specialty Hangers','OEM / ODM Development','Hospitality Program','Wholesale / Distribution','Other'],customOptions:['No customization required','Logo / branding','Custom dimensions','Custom material / finish','Custom packaging','Full OEM / ODM development','Not sure yet'],note:'Required fields help us prepare a more relevant response. Your inquiry will be sent securely for review.',submit:'SUBMIT REQUEST',sending:'SENDING…',successTitle:'Thank you.',success:'Your request has been submitted successfully. Our team will review the details and follow up with you.',errorTitle:'Unable to submit.',error:'Please try again, or contact info@vayrenza.com directly.',required:'Please complete this required field.',emailInvalid:'Please enter a valid email address.'},
    es:{kicker:'CONSULTA B2B',title:'Cuéntenos qué necesita.',subtitle:'Comparta los requisitos de su proyecto para que nuestro equipo pueda revisarlos antes de ponerse en contacto con usted.',close:'CERRAR',name:'NOMBRE',company:'EMPRESA',country:'PAÍS / REGIÓN',email:'CORREO ELECTRÓNICO',phone:'TELÉFONO / WHATSAPP',product:'NECESIDAD DE PRODUCTO',quantity:'CANTIDAD ESTIMADA',quantityPlaceholder:'p. ej. 5.000 uds.',custom:'REQUISITOS DE PERSONALIZACIÓN',message:'MENSAJE',select:'Seleccione una opción',productOptions:['Perchas para traje y camisa','Perchas para pantalón y falda','Perchas premium y especiales','Desarrollo OEM / ODM','Programa de hostelería','Mayorista / distribución','Otro'],customOptions:['Sin personalización','Logotipo / branding','Dimensiones personalizadas','Material / acabado personalizado','Embalaje personalizado','Desarrollo OEM / ODM completo','Aún no estoy seguro'],note:'Los campos obligatorios nos ayudan a preparar una respuesta más relevante. Su consulta se enviará de forma segura para su revisión.',submit:'ENVIAR SOLICITUD',sending:'ENVIANDO…',successTitle:'Gracias.',success:'Su solicitud se ha enviado correctamente. Nuestro equipo revisará los detalles y se pondrá en contacto con usted.',errorTitle:'No se pudo enviar.',error:'Inténtelo de nuevo o contacte directamente con info@vayrenza.com.',required:'Complete este campo obligatorio.',emailInvalid:'Introduzca una dirección de correo electrónico válida.'},
    fr:{kicker:'DEMANDE B2B',title:'Dites-nous ce dont vous avez besoin.',subtitle:'Partagez les exigences de votre projet afin que notre équipe puisse les examiner avant de vous recontacter.',close:'FERMER',name:'NOM',company:'ENTREPRISE',country:'PAYS / RÉGION',email:'E-MAIL',phone:'TÉLÉPHONE / WHATSAPP',product:'BESOIN PRODUIT',quantity:'QUANTITÉ ESTIMÉE',quantityPlaceholder:'ex. 5 000 pièces',custom:'BESOIN DE PERSONNALISATION',message:'MESSAGE',select:'Sélectionnez une option',productOptions:['Cintres costume & chemise','Cintres pantalon & jupe','Cintres premium & spéciaux','Développement OEM / ODM','Programme hôtellerie','Grossiste / distribution','Autre'],customOptions:['Aucune personnalisation','Logo / branding','Dimensions personnalisées','Matériau / finition personnalisé','Emballage personnalisé','Développement OEM / ODM complet','Pas encore certain'],note:'Les champs obligatoires nous aident à préparer une réponse plus pertinente. Votre demande sera envoyée de manière sécurisée pour examen.',submit:'ENVOYER LA DEMANDE',sending:'ENVOI…',successTitle:'Merci.',success:'Votre demande a bien été envoyée. Notre équipe examinera les détails et vous recontactera.',errorTitle:'Envoi impossible.',error:'Veuillez réessayer ou contacter directement info@vayrenza.com.',required:'Veuillez renseigner ce champ obligatoire.',emailInvalid:'Veuillez saisir une adresse e-mail valide.'},
    de:{kicker:'B2B-ANFRAGE',title:'Sagen Sie uns, was Sie benötigen.',subtitle:'Teilen Sie uns Ihre Projektanforderungen mit. Unser Team prüft die Details und meldet sich anschließend bei Ihnen.',close:'SCHLIESSEN',name:'NAME',company:'UNTERNEHMEN',country:'LAND / REGION',email:'E-MAIL',phone:'TELEFON / WHATSAPP',product:'PRODUKTANFORDERUNG',quantity:'GESCHÄTZTE MENGE',quantityPlaceholder:'z. B. 5.000 Stück',custom:'INDIVIDUALISIERUNGSWUNSCH',message:'NACHRICHT',select:'Option auswählen',productOptions:['Anzug- & Hemdenbügel','Hosen- & Rockbügel','Premium- & Spezialbügel','OEM- / ODM-Entwicklung','Hospitality-Programm','Großhandel / Distribution','Sonstiges'],customOptions:['Keine Individualisierung erforderlich','Logo / Branding','Individuelle Abmessungen','Individuelles Material / Finish','Individuelle Verpackung','Vollständige OEM- / ODM-Entwicklung','Noch nicht sicher'],note:'Pflichtfelder helfen uns, Ihre Anfrage gezielter zu bearbeiten. Ihre Angaben werden sicher zur Prüfung übermittelt.',submit:'ANFRAGE SENDEN',sending:'WIRD GESENDET…',successTitle:'Vielen Dank.',success:'Ihre Anfrage wurde erfolgreich übermittelt. Unser Team prüft die Angaben und wird sich bei Ihnen melden.',errorTitle:'Senden nicht möglich.',error:'Bitte versuchen Sie es erneut oder kontaktieren Sie info@vayrenza.com direkt.',required:'Bitte füllen Sie dieses Pflichtfeld aus.',emailInvalid:'Bitte geben Sie eine gültige E-Mail-Adresse ein.'},
    'zh-CN':{kicker:'B2B 询价',title:'告诉我们您的需求。',subtitle:'请提供您的项目需求，我们的团队会先审核相关信息，并随后与您联系。',close:'关闭',name:'姓名',company:'公司',country:'国家 / 地区',email:'邮箱',phone:'电话 / WHATSAPP',product:'产品需求',quantity:'预计数量',quantityPlaceholder:'例如：5,000 件',custom:'定制需求',message:'留言',select:'请选择',productOptions:['西装与衬衫衣架','长裤与半裙衣架','高端与专业衣架','OEM / ODM 开发','酒店项目','批发 / 分销','其他'],customOptions:['无需定制','Logo / 品牌标识','定制尺寸','定制材料 / 表面处理','定制包装','完整 OEM / ODM 开发','暂不确定'],note:'必填信息有助于我们更准确地评估您的需求。您的询价将安全提交给团队审核。',submit:'提交询价',sending:'正在提交…',successTitle:'感谢您的询价。',success:'您的询价已成功提交。我们的团队将审核相关信息，并随后与您联系。',errorTitle:'提交失败。',error:'请重试，或直接联系 info@vayrenza.com。',required:'请填写此必填项。',emailInvalid:'请输入有效的邮箱地址。'},
    ja:{kicker:'B2B お問い合わせ',title:'ご要望をお聞かせください。',subtitle:'プロジェクトの要件をご共有ください。内容を確認のうえ、担当チームよりご連絡いたします。',close:'閉じる',name:'お名前',company:'会社名',country:'国 / 地域',email:'メールアドレス',phone:'電話 / WHATSAPP',product:'製品要件',quantity:'予定数量',quantityPlaceholder:'例：5,000 pcs',custom:'カスタマイズ要件',message:'メッセージ',select:'選択してください',productOptions:['スーツ＆シャツハンガー','パンツ＆スカートハンガー','プレミアム＆スペシャリティハンガー','OEM / ODM 開発','ホスピタリティプログラム','卸売 / ディストリビューション','その他'],customOptions:['カスタマイズ不要','ロゴ / ブランディング','カスタム寸法','カスタム素材 / 仕上げ','カスタムパッケージ','フル OEM / ODM 開発','まだ未定'],note:'必須項目をご入力いただくことで、より適切にご要望を確認できます。お問い合わせ内容は安全に送信されます。',submit:'お問い合わせを送信',sending:'送信中…',successTitle:'ありがとうございます。',success:'お問い合わせを送信しました。内容を確認のうえ、担当チームよりご連絡いたします。',errorTitle:'送信できませんでした。',error:'もう一度お試しいただくか、info@vayrenza.com まで直接ご連絡ください。',required:'この必須項目を入力してください。',emailInvalid:'有効なメールアドレスを入力してください。'},
    ko:{kicker:'B2B 문의',title:'필요하신 내용을 알려주세요.',subtitle:'프로젝트 요구사항을 보내주시면 담당 팀이 내용을 검토한 후 연락드리겠습니다.',close:'닫기',name:'이름',company:'회사명',country:'국가 / 지역',email:'이메일',phone:'전화 / WHATSAPP',product:'제품 요구사항',quantity:'예상 수량',quantityPlaceholder:'예: 5,000 pcs',custom:'맞춤 제작 요구사항',message:'메시지',select:'옵션을 선택하세요',productOptions:['수트 & 셔츠 행거','바지 & 스커트 행거','프리미엄 & 스페셜티 행거','OEM / ODM 개발','호텔 / 호스피탈리티 프로그램','도매 / 유통','기타'],customOptions:['맞춤 제작 불필요','로고 / 브랜딩','맞춤 치수','맞춤 소재 / 마감','맞춤 포장','전체 OEM / ODM 개발','아직 미정'],note:'필수 정보를 입력해 주시면 문의 내용을 더 정확하게 검토할 수 있습니다. 문의 내용은 안전하게 전송됩니다.',submit:'문의 보내기',sending:'전송 중…',successTitle:'감사합니다.',success:'문의가 성공적으로 전송되었습니다. 담당 팀이 내용을 검토한 후 연락드리겠습니다.',errorTitle:'전송할 수 없습니다.',error:'다시 시도하시거나 info@vayrenza.com 으로 직접 문의해 주세요.',required:'필수 항목을 입력해 주세요.',emailInvalid:'유효한 이메일 주소를 입력해 주세요.'}
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
        <input type="hidden" name="Source" value="VAYRENZA Website">
        <div class="quote-grid">
          <div class="quote-field"><label for="q-name"></label><input id="q-name" name="Name" type="text" required autocomplete="name"></div>
          <div class="quote-field"><label for="q-company"></label><input id="q-company" name="Company" type="text" required autocomplete="organization"></div>
          <div class="quote-field"><label for="q-country"></label><input id="q-country" name="Country / Region" type="text" required autocomplete="country-name"></div>
          <div class="quote-field"><label for="q-email"></label><input id="q-email" name="Email" type="email" required autocomplete="email"></div>
          <div class="quote-field"><label for="q-phone"></label><input id="q-phone" name="Phone / WhatsApp" type="tel" autocomplete="tel"></div>
          <div class="quote-field"><label for="q-product"></label><select id="q-product" name="Product Requirement" required></select></div>
          <div class="quote-field"><label for="q-quantity"></label><input id="q-quantity" name="Estimated Quantity" type="text"></div>
          <div class="quote-field"><label for="q-custom"></label><select id="q-custom" name="Customization Requirement"></select></div>
          <div class="quote-field full"><label for="q-message"></label><textarea id="q-message" name="Message" required></textarea></div>
        </div>
        <div class="quote-actions"><p class="quote-note"></p><button class="quote-submit" type="submit"></button></div>
      </form>
      <div class="quote-status" role="status"><h3></h3><p></p></div>
    </div>`;
  document.body.appendChild(overlay);

  const form = overlay.querySelector('.quote-form');
  const closeBtn = overlay.querySelector('.quote-close');
  const submitBtn = overlay.querySelector('.quote-submit');
  const status = overlay.querySelector('.quote-status');
  const productSelect = overlay.querySelector('#q-product');
  const customSelect = overlay.querySelector('#q-custom');
  const quantityInput = overlay.querySelector('#q-quantity');
  const sourceInput = form.querySelector('input[name="Source"]');
  const fields = Array.from(form.querySelectorAll('input:not([type="hidden"]):not(.quote-honeypot), select, textarea'));
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
    quantityInput.placeholder = c.quantityPlaceholder;
    overlay.querySelector('.quote-note').textContent = c.note;
    submitBtn.textContent = c.submit;
    fields.forEach(field => field.setCustomValidity(''));
  }

  function setLocalizedValidity(field){
    const c = copy[currentLang()];
    field.setCustomValidity('');
    if(field.validity.valueMissing){
      field.setCustomValidity(c.required);
    }else if(field.type === 'email' && field.validity.typeMismatch){
      field.setCustomValidity(c.emailInvalid);
    }
  }

  fields.forEach(field => {
    field.addEventListener('invalid', () => setLocalizedValidity(field));
    field.addEventListener('input', () => {
      field.setCustomValidity('');
      if(field.type === 'email' && field.value && field.validity.typeMismatch){
        field.setCustomValidity(copy[currentLang()].emailInvalid);
      }
    });
    field.addEventListener('change', () => field.setCustomValidity(''));
  });

  function sourceLabel(){
    return location.hash.toLowerCase() === '#quote' ? 'Product Collection → Request a Quote' : 'Homepage → Request a Quote';
  }

  function openQuote(e){
    if(e) e.preventDefault();
    applyCopy();
    lastFocus = document.activeElement;
    status.className = 'quote-status';
    form.style.display = '';
    form.reset();
    sourceInput.value = sourceLabel();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('quote-open');
    setTimeout(()=>overlay.querySelector('#q-name').focus(),60);
  }

  function closeQuote(){
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('quote-open');
    if(location.hash.toLowerCase() === '#quote'){
      history.replaceState(null,'',location.pathname + location.search);
    }
    if(lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  function openQuoteFromHash(){
    if(location.hash.toLowerCase() === '#quote' && !overlay.classList.contains('is-open')){
      openQuote();
    }
  }

  document.querySelectorAll('.quote,.contact .btn.primary,[data-quote-trigger]').forEach(el=>el.addEventListener('click',openQuote));
  closeBtn.addEventListener('click',closeQuote);
  overlay.addEventListener('click',e=>{if(e.target===overlay) closeQuote();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && overlay.classList.contains('is-open')) closeQuote();});
  window.addEventListener('hashchange',openQuoteFromHash);

  const observer = new MutationObserver(()=>{ if(overlay.classList.contains('is-open')) applyCopy(); });
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const c = copy[currentLang()];
    fields.forEach(setLocalizedValidity);
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

  requestAnimationFrame(()=>requestAnimationFrame(openQuoteFromHash));
})();
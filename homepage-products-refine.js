(() => {
  'use strict';
  /*
   * Product copy refinement is intentionally presentation-only.
   * Language state, persistence, menu actions, logo behavior and
   * cross-page navigation are owned exclusively by homepage-language-core.js.
   */
  if(!document.getElementById('vz-customer-value-copy')){
    const s=document.createElement('script');
    s.id='vz-customer-value-copy';
    s.src='customer-value-copy-v1.js';
    document.head.appendChild(s);
  }
})();
(() => {
  const style=document.createElement('style');
  style.textContent=`
    body>.shell .product-card.card-selected{transform:translateZ(24px) translateY(-2px) scale(1.025)!important;z-index:7!important;opacity:1!important;filter:none!important;box-shadow:0 12px 26px rgba(24,22,18,.09)!important}
    body>.shell .product-info{cursor:pointer!important}
  `;
  document.head.appendChild(style);

  function centerCard(card){
    const rail=card.closest('.product-rail');
    if(!rail) return;
    rail.querySelectorAll('.product-card.card-selected').forEach(c=>c.classList.remove('card-selected'));
    card.classList.add('card-selected');
    const railRect=rail.getBoundingClientRect();
    const cardRect=card.getBoundingClientRect();
    const delta=(cardRect.left+cardRect.width/2)-(railRect.left+railRect.width/2);
    const max=Math.max(0,rail.scrollWidth-rail.clientWidth);
    rail.scrollTo({left:Math.max(0,Math.min(max,rail.scrollLeft+delta)),behavior:'smooth'});
  }

  document.addEventListener('click',e=>{
    const info=e.target.closest('.product-info');
    if(!info) return;
    const card=info.closest('.product-card');
    if(!card) return;
    e.preventDefault();
    e.stopPropagation();
    centerCard(card);
  });
})();

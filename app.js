(function () {
  const leadForm = document.getElementById('lead-form');
  const postLead = document.getElementById('post-lead');
  const leadError = document.getElementById('lead-error');
  const applyForm = document.getElementById('apply-form');
  const applyMsg = document.getElementById('apply-msg');
  const earlyBuy = document.getElementById('early-buy');

  function save(key, payload) {
    const prev = JSON.parse(localStorage.getItem(key) || '[]');
    prev.push({ ...payload, at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(prev));
    console.log('[Launch Studio]', key, payload);
  }

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    leadError.hidden = true;
    const fd = new FormData(leadForm);
    if (!fd.get('problem')) {
      leadError.textContent = 'Pick your main problem first.';
      leadError.hidden = false;
      return;
    }
    const payload = Object.fromEntries(fd.entries());
    payload.smsConsent = !!fd.get('smsConsent');
    save('ls_leads', payload);
    leadForm.hidden = true;
    postLead.hidden = false;
    postLead.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  earlyBuy.addEventListener('click', () => {
    // Demo stub — wire Stripe Checkout with STRIPE_PRICE_ID later
    save('ls_early_buy', { sku: 'launch-sprint-starter', price: 97, mode: 'demo' });
    earlyBuy.textContent = 'Demo logged — wire Stripe in README';
    earlyBuy.disabled = true;
  });

  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(applyForm);
    const payload = Object.fromEntries(fd.entries());
    payload.smsConsent = !!fd.get('smsConsent');
    save('ls_apply', payload);
    applyMsg.hidden = false;
    applyMsg.textContent = 'Application received. Next step: DM/call handoff (reply LAUNCH + your product). Not a checkout close.';
    applyForm.reset();
  });
})();

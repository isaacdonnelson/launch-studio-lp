(function () {
  const leadForm = document.getElementById('lead-form');
  const stepProblem = document.getElementById('step-problem');
  const stepContact = document.getElementById('step-contact');
  const problemStart = document.getElementById('problem-start');
  const problemError = document.getElementById('problem-error');
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

  problemStart.addEventListener('click', () => {
    problemError.hidden = true;
    const chosen = leadForm.querySelector('input[name="problem"]:checked');
    if (!chosen) {
      problemError.textContent = 'Pick your main problem first.';
      problemError.hidden = false;
      return;
    }
    stepProblem.hidden = true;
    stepContact.hidden = false;
    stepContact.querySelector('input[name="firstName"]').focus();
  });

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    leadError.hidden = true;
    const fd = new FormData(leadForm);
    if (!fd.get('problem')) {
      leadError.textContent = 'Pick your main problem first.';
      leadError.hidden = false;
      stepProblem.hidden = false;
      stepContact.hidden = true;
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

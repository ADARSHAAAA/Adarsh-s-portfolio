// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// optional: smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const targ = document.querySelector(a.getAttribute('href'));
    if(targ){ e.preventDefault(); targ.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

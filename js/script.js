// Simple JS for mobile nav toggle and small accessibility helpers
(function(){
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if(!btn || !nav) return;
btn.addEventListener('click', ()=>{
if(nav.style.display === 'flex') nav.style.display = '';
else nav.style.display = 'flex';
nav.style.flexDirection = 'column';
})
})();
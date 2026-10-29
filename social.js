/* Iconos de contacto. SVG propios, sin servicios de terceros. Facebook se activa al rellenar FB. */
(function(){
  var EN=document.documentElement.lang==='en',FB='https://www.facebook.com/javiersanagustinmoreu/';
  var I={
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
    ig:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>',
    fb:'<path d="M14 21v-8h2.7l.5-3.2H14V7.9c0-.9.4-1.6 1.7-1.6h1.6V3.5c-.4-.1-1.4-.2-2.4-.2-2.5 0-4 1.5-4 4.2v2.3H8.2V13H11v8"/>',
    wa:'<path d="M4 20l1.2-4.2A8.2 8.2 0 1 1 8.300 18.800z"/><path d="M9.200 8.600c.3 2.600 2.600 5 5.300 5.800l1.100-1.200-2-1-.9.700c-.9-.4-1.700-1.200-2.100-2.100l.7-.9-1-2z"/>',
    tel:'<path d="M6.600 3.500l2.400 4.100-1.600 1.500c1.100 2.300 3 4.200 5.400 5.400l1.500-1.600 4.100 2.400-.6 3c-.2.800-.9 1.200-1.700 1.200C9.900 19.400 4.600 14.100 4.400 6.700c0-.8.500-1.500 1.200-1.700z"/>'
  };
  var L=[['mail','mailto:javiersanagustinmoreu@gmail.com',EN?'Email':'Correo'],
    ['ig','https://www.instagram.com/javiersanagustinm.art/','Instagram'],
    FB?['fb',FB,'Facebook']:null,
    ['wa','https://wa.me/34696379281','WhatsApp'],
    ['tel','tel:+34696379281',EN?'Phone':'Teléfono']].filter(Boolean);
  function row(){return L.map(function(x){var ext=/^https/.test(x[1]);return '<a href="'+x[1]+'"'+(ext?' target="_blank" rel="noopener"':'')+' aria-label="'+x[2]+'" title="'+x[2]+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+I[x[0]]+'</svg></a>';}).join('');}
  var a=document.createElement('aside');a.className='soc';a.setAttribute('aria-label',EN?'Contact':'Contacto');a.innerHTML=row();document.body.appendChild(a);
  var ml=document.getElementById('menuList');
  if(ml){var li=document.createElement('li');li.className='soc-li';li.innerHTML=row();ml.appendChild(li);}
})();

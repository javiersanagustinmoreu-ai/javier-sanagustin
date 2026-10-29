(function(){
  var root=document.documentElement, O=window.OBRAS||[];
  var EN=root.lang==='en';
  var S=EN?{sold:'Sold',lent:'Sold, lent to the exhibition',tText:'Text',tFicha:'Details',tBuy:'Acquire',close:'Close',tec:'Medium',size:'Size',year:'Year',state:'Status',coll:'Collection',ref:'Reference: ',more:'Full process and reference ↗',
      ask:'Works are sold through the Sanagustín School of Drawing and Painting. Press “I’m interested” and I will reply with the price (VAT included), availability and shipping.',write:'I\u2019m interested',onreq:'Price on request',legal:'By writing, you send your email to the seller. See the <a href="aviso.html">legal notice and privacy (in Spanish)</a>.',body:'Hello, I am interested in «%». Could you tell me the price, availability and shipping? Thank you.',subj:'Enquiry about «%»',enl:'Enlarge ',read:'Read the text of ',
      refl:'Reflection',shad:'Shadow',rel:'Each work at its relative size.',web:'Exhibition website ↗',cat:'Catalogue, ',enq:'I\u2019m interested',view:'View ',
      catP:'<b>Exhibition catalogue</b> The fourteen works of <i>Reflejos y sombras</i> with their texts. ',buy:'Catalogue, ',
      intro:'<p class="when">First solo exhibition<br>Palacio de Villahermosa, Fundación Ibercaja, Huesca<br>8 October – 11 November 2026</p><p>These landscapes are from here. These people are close to me. These moments are mine. And yet something in them shifts. Sometimes I recognise myself. Other times, I don’t.</p><p>What came out recognisable is a reflection. What came out transformed, displaced, is a shadow.</p>',
      h2:'Reflejos y sombras',h2sub:'',th:['No.','Work','Year','Medium','Size','Note']}
    :{sold:'Vendida',lent:'Vendida, cedida a la exposición',tText:'Texto',tFicha:'Ficha',tBuy:'Adquirir',close:'Cerrar',tec:'Técnica',size:'Medidas',year:'Año',state:'Estado',coll:'Colección',ref:'Referencia: ',more:'Proceso y referencia completos ↗',
      ask:'Las obras se venden a través de la Escuela de Dibujo y Pintura Sanagustín. Pulsa «Me interesa» y te respondo con el precio (IVA incluido), la disponibilidad y el envío.',write:'Me interesa',onreq:'Precio bajo consulta',legal:'Al escribir envías tu correo al titular. Más en el <a href="aviso.html">aviso legal y privacidad</a>.',body:'Hola, me interesa «%». ¿Podrías decirme el precio, la disponibilidad y el envío? Gracias.',subj:'Consulta sobre «%»',enl:'Ampliar ',read:'Leer el texto de ',
      refl:'Reflejo',shad:'Sombra',rel:'Cada obra, a su tamaño relativo.',web:'Web de la exposición ↗',cat:'Catálogo, ',enq:'Me interesa',view:'Ver ',
      catP:'<b>Catálogo de la exposición</b> Las catorce obras de <i>Reflejos y sombras</i> con sus textos. ',buy:'Catálogo, ',
      intro:'<p class="when">Primera exposición individual<br>Palacio de Villahermosa, Fundación Ibercaja, Huesca<br>8 de octubre – 11 de noviembre de 2026</p><p>Estos paisajes son de aquí. Estas personas son cercanas. Estos momentos son míos. Y, sin embargo, algo en ellos se desplaza. Unas veces me reconozco. Otras, no.</p><p>Lo que salió reconocible es un reflejo. Lo que salió transformado, desplazado, es una sombra.</p>',
      h2:'Reflejos y sombras',h2sub:'',th:['N.º','Obra','Año','Técnica','Medidas','Nota']};
  var TEC={'Técnica mixta sobre lienzo':'Mixed media on canvas','Óleo sobre lienzo':'Oil on canvas','Óleo sobre tabla':'Oil on panel','Óleo sobre lienzo, políptico':'Oil on canvas, polyptych',
    'Técnica mixta, acrílico y acuarela sobre lienzo':'Mixed media, acrylic and watercolour on canvas','Técnica mixta, acrílico y spray sobre lienzo':'Mixed media, acrylic and spray on canvas',
    'Técnica mixta, acrílico, acuarela, spray y rotulador':'Mixed media, acrylic, watercolour, spray and marker','Dibujo a grafito':'Graphite drawing','Dibujo digital':'Digital drawing'};
  var COL={'Colección privada':'Private collection','Colección del artista':'Artist’s collection'};
  var SEC={'Antes':['Before','Painting, 2015–2026'],'Dibujos a grafito':['Graphite drawings','2016–2018'],'Meditaciones':['Meditations','Digital drawings, without pretension']};
  function tec(s){return EN?(TEC[s]||s):s;}
  function coll(s){return EN?(COL[s]||s):s;}
  function mm(m){return EN&&m?m.replace(/(\d),(\d)/g,'$1.$2'):m;}
  function eur(n){return EN?'€'+String(n).replace(/\B(?=(\d{3})+(?!\d))/g,','):String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' €';}
  var EX=window.EXTRA||[];
  function by(id){return O.filter(function(o){return o.id===id;})[0]||EX.filter(function(o){return o.id===id;})[0];}
  function th(s){return s.replace(/^img\/(.*)\.(jpe?g|png|webp)$/i,'img/th/$1.webp');}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function parts(o){return [tec(o.tec),mm(o.m),o.y].filter(Boolean).map(esc).join(', ');}
  function alt(o){return o.t+'. '+[tec(o.tec),mm(o.m),o.y].filter(Boolean).join(', ');}
  function stl(o){return o.st==='c'?S.lent:(o.st==='v'?S.sold:'');}
  function cap(o){var l=stl(o),s=l?' <span class="sold">'+l+'.</span>':'';return '<b>'+esc(o.t)+'</b>'+parts(o)+'.'+(o.e?' '+esc(coll(o.e))+'.':'')+s;}
  function TX(id){var b=(window.TEXTOS||{})[id];if(!EN||!b)return b;var e=(window.TEXTOS_EN||{})[id];return e?{tx:e.tx,ref:e.ref,b:e.b,d:b.d,ar:b.ar}:b;}

  var btn=document.getElementById('menuBtn');
  if(btn){btn.addEventListener('click',function(){var o=!root.classList.contains('menu-open');root.classList.toggle('menu-open',o);btn.setAttribute('aria-expanded',o?'true':'false');});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&root.classList.contains('menu-open')){root.classList.remove('menu-open');btn.setAttribute('aria-expanded','false');}});}
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-lang]');if(a){try{localStorage.setItem('lang',a.getAttribute('data-lang'));}catch(_){}}});

  var dlg=document.getElementById('dlg');
  function open(id,tab){
    var o=by(id);if(!o||!dlg)return;
    var tx=TX(id), avail=o.st==='d';
    var tabs=[];if(tx)tabs.push(['t',S.tText]);tabs.push(['f',S.tFicha]);if(avail)tabs.push(['p',S.tBuy]);
    var pt=tx?'<div data-pane="t">'+tx.tx.map(function(p){return '<p>'+esc(p)+'</p>';}).join('')+'<p class="ref">'+S.ref+esc(tx.ref)+'</p><p><a class="more" href="https://reflejosysombras.com/#'+o.id+'" target="_blank" rel="noopener">'+S.more+'</a></p></div>':'';
    var st=stl(o);
    var h='<button class="close" type="button" aria-label="'+S.close+'" id="dx">×</button><div class="sheet"><div class="pic"><img src="'+o.src+'" alt="'+esc(alt(o))+'"></div><div class="info"><h2>'+esc(o.t)+'</h2>'
     +'<div class="tabs" role="tablist">'+tabs.map(function(t,k){return '<button role="tab" aria-selected="'+(k===0)+'" data-tab="'+t[0]+'">'+t[1]+'</button>';}).join('')+'</div>'+pt
     +'<div data-pane="f"'+(tx?' hidden':'')+'><dl>'+(o.tec?'<dt>'+S.tec+'</dt><dd>'+esc(tec(o.tec))+'</dd>':'')+(o.m?'<dt>'+S.size+'</dt><dd>'+esc(mm(o.m))+'</dd>':'')+(o.y?'<dt>'+S.year+'</dt><dd>'+o.y+'</dd>':'')+(st?'<dt>'+S.state+'</dt><dd>'+st+'</dd>':(o.e?'<dt>'+S.coll+'</dt><dd>'+esc(EN?({'Colección privada':'Private','Colección del artista':'Artist’s'}[o.e]||o.e):o.e.replace('Colección ',''))+'</dd>':''))+'</dl></div>'
     +(avail?'<div data-pane="p" hidden><p class="price">'+S.onreq+'</p><p>'+S.ask+'</p><p class="fine">'+S.legal+'</p><a class="btn" href="mailto:'+window.CONTACTO+'?subject='+encodeURIComponent(S.subj.replace('%',o.t))+'&body='+encodeURIComponent(S.body.replace('%',o.t))+'">'+S.write+'</a></div>':'')
     +'</div></div>';
    dlg.innerHTML=h;
    dlg.querySelector('#dx').addEventListener('click',function(){dlg.close();});
    [].forEach.call(dlg.querySelectorAll('[data-tab]'),function(b){b.addEventListener('click',function(){
      [].forEach.call(dlg.querySelectorAll('[data-tab]'),function(x){x.setAttribute('aria-selected',x===b?'true':'false');});
      [].forEach.call(dlg.querySelectorAll('[data-pane]'),function(p){p.hidden=p.dataset.pane!==b.dataset.tab;});});});
    if(tab){var tb=dlg.querySelector('[data-tab="'+tab+'"]');if(tb)tb.click();}
    dlg.showModal();
  }
  document.addEventListener('click',function(e){var z=e.target.closest('[data-open]');if(z)open(z.dataset.open,z.dataset.tab);});

  var strip=document.getElementById('strip');
  if(strip){
    // Obra: una sola tira con todo, de la más reciente a la más antigua; tarjeta inicial con filtros Pintura · Dibujo · Digital
    var CAT=EN?{a:['Work','works'],p:['Painting','paintings'],d:['Drawing','graphite drawings'],g:['Digital','digital drawings, Meditations']}:{a:['Obra','obras'],p:['Pintura','pinturas'],d:['Dibujo','dibujos a grafito'],g:['Digital','dibujos digitales, Meditaciones']};
    var FLT=EN?{all:'All',lab:'Filter by type'}:{all:'Todo',lab:'Filtrar por tipo'};
    function catOf(o){return o.sec==='Dibujos a grafito'?'d':o.sec==='Meditaciones'?'g':'p';}
    function yrOf(o){var m=String(o.y||'').match(/\d{4}/g);return m?Math.max.apply(null,m.map(Number)):-1;}
    var ALL=O.concat(EX).map(function(o,n){return {o:o,n:n,c:catOf(o),y:yrOf(o)};});
    function fig(o,k){return '<figure data-id="'+o.id+'"><button class="zoom" type="button" data-open="'+o.id+'" aria-label="'+S.enl+esc(o.t)+'"><img src="'+th(o.src)+'" alt="'+esc(alt(o))+'"'+(k>1?' loading="lazy"':'')+' decoding="async"></button><figcaption>'+cap(o)+'</figcaption></figure>';}
    var cur='a',l=document.getElementById('goL'), r=document.getElementById('goR');
    function render(c){
      cur=c;var k=0,html='';
      var L=ALL.filter(function(x){return c==='a'||x.c===c;}).sort(function(a,b){return (b.y-a.y)||((b.o.top?1:0)-(a.o.top?1:0))||(a.n-b.n);});
      var yrs=L.reduce(function(a,x){return a.concat(String(x.o.y||'').match(/\d{4}/g)||[]);},[]).map(Number);
      var lo=Math.min.apply(null,yrs),hi=Math.max.apply(null,yrs);
      var sub=L.length+' '+CAT[c][1]+(yrs.length?', '+(lo===hi?hi:lo+'–'+hi):'');
      var fl=['p','d','g'].map(function(f){return '<button type="button" class="flt'+(c===f?' on':'')+'" data-flt="'+f+'" aria-pressed="'+(c===f)+'">'+esc(CAT[f][0])+'</button>';}).join('');
      html+='<figure class="chap"><div><h2>'+esc(CAT[c][0])+'</h2><p>'+esc(sub)+'</p><div class="flts" role="group" aria-label="'+FLT.lab+'">'+(c!=='a'?'<button type="button" class="flt all" data-flt="a">← '+FLT.all+'</button>':'')+fl+'</div></div></figure>';
      var last=null,ys=L.filter(function(x){return x.y>0;});
      L.forEach(function(x){
        if(x.y>0&&x.y!==last){last=x.y;html+='<figure class="yr" aria-hidden="true"><span>'+x.y+'</span></figure>';}
        html+=fig(x.o,k++);
      });
      strip.innerHTML=html;strip.scrollLeft=0;upd();
    }
    strip.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-flt]');if(!b)return;var f=b.dataset.flt;render(f===cur?'a':f);var nb=strip.querySelector('[data-flt="'+(f===cur||f==='a'?(f==='a'?'a':f):f)+'"]');if(nb&&nb.focus)nb.focus({preventScroll:true});});
    function upd(){var max=strip.scrollWidth-strip.clientWidth-4;l.hidden=strip.scrollLeft<4;r.hidden=strip.scrollLeft>=max;}
    // enlace desde la portada: obra.html#id lleva a esa obra
    function focusHash(){
      var id=decodeURIComponent((location.hash||'').slice(1));if(!id)return;
      var f=strip.querySelector('figure[data-id="'+id+'"]');if(!f)return;
      var fs=[].slice.call(strip.querySelectorAll('figure[data-id]')),n=fs.indexOf(f);
      fs.slice(0,n+1).forEach(function(g){var im=g.querySelector('img');if(im)im.loading='eager';});
      var t0=Date.now(),moved=false;
      function stop(){moved=true;}
      ['wheel','touchstart','pointerdown','keydown'].forEach(function(ev){addEventListener(ev,stop,{passive:true,once:true});});
      function center(){if(moved||Date.now()-t0>3500)return;strip.scrollTo({left:Math.max(0,f.offsetLeft-parseFloat(getComputedStyle(strip).paddingLeft)-strip.clientWidth*.12),behavior:'auto'});}
      center();strip.addEventListener('load',center,true);setTimeout(function(){f.classList.add('hit');setTimeout(function(){f.classList.remove('hit');},3200);},250);
    }
    render('a');focusHash();addEventListener('hashchange',focusHash);
    function go(d){strip.scrollBy({left:d*Math.round(strip.clientWidth*.8),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});}
    l.addEventListener('click',function(){go(-1);});r.addEventListener('click',function(){go(1);});
    strip.addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);
    strip.addEventListener('load',upd,true);upd();
    document.addEventListener('keydown',function(e){if(dlg&&dlg.open)return;if(e.key==='ArrowRight')go(1);else if(e.key==='ArrowLeft')go(-1);});
    // rueda vertical = avance horizontal en escritorio
    strip.addEventListener('wheel',function(e){if(Math.abs(e.deltaY)>Math.abs(e.deltaX)&&!e.ctrlKey){strip.scrollLeft+=e.deltaY;e.preventDefault();}},{passive:false});
  }
  var sala=document.getElementById('sala');
  if(sala){
    var T={};Object.keys(window.TEXTOS||{}).forEach(function(k){T[k]=TX(k);});
    function cm(m){var n=(m.match(/\d+(?:,\d+)?/g)||[]).map(function(x){return parseFloat(x.replace(',','.'));});return Math.max.apply(null,n);}
    function fit(){var s=Math.min(3.1,Math.max(1.5,(innerHeight-300)/200));sala.style.setProperty('--s',s.toFixed(3));
      sala.style.setProperty('--box',Math.round(200*s)+'px');
      [].forEach.call(sala.querySelectorAll('figure[data-id]'),function(f){var t=T[f.dataset.id],o=by(f.dataset.id),L=cm(o.m)*s,ar=t.ar,w=ar>=1?L:L*ar,h=ar>=1?L/ar:L;f.style.setProperty('--w',Math.round(w)+'px');f.style.setProperty('--hh',Math.round(h)+'px');});}
    var prev='';
    var intro='<section class="intro"><h2>'+S.h2+'</h2>'+S.intro+'<p class="leg"><span>● '+S.refl+'</span> <span>○ '+S.shad+'</span></p><p class="leg2">'+S.rel+'</p><p class="links"><a href="'+window.WEBEXPO+'" target="_blank" rel="noopener">'+S.web+'</a><a href="'+window.CATALOGO.url+'" target="_blank" rel="noopener">'+S.cat+(EN?'€20':window.CATALOGO.precio)+' ↗</a></p></section>';
    var cov='<figure class="cover"><div class="box"><img src="img/portada.jpg" alt="'+(EN?'Cover piece of the exhibition Reflejos y sombras':'Pieza de portada de la exposición Reflejos y sombras')+'" decoding="async"></div><figcaption><b>Reflejos y sombras</b>'+(EN?'Cover piece of the exhibition.':'Pieza de portada de la exposición.')+'</figcaption></figure>';
    sala.innerHTML=intro+cov+O.map(function(o,k){var t=T[o.id],blk=t.b!==prev?'<span class="blk">'+esc(t.b)+'</span>':'<span class="blk"></span>';prev=t.b;var l=stl(o);
      return '<figure data-id="'+o.id+'">'+blk+'<div class="box"><button class="zoom" type="button" data-open="'+o.id+'" aria-label="'+S.read+esc(o.t)+'"><img src="'+th(o.src)+'" alt="'+esc(alt(o))+'"'+(k>1?' loading="lazy"':'')+' decoding="async"></button></div><figcaption><b>'+('0'+(k+1)).slice(-2)+' '+(t.d==='r'?'●':'○')+' '+esc(o.t)+'</b>'+esc(tec(o.tec))+', '+esc(mm(o.m))+', '+o.y+'.'+(l?' <span class="sold">'+l+'.</span>':'')+'</figcaption></figure>';}).join('')+[['entrada-caballete','Ojo flor, a la entrada de la sala.','Ojo flor, at the entrance to the room.'],['sala-pupila-azul','Un visitante ante Pupila azul.','A visitor in front of Pupila azul.'],['inauguracion','Inauguración de la exposición.','Opening of the exhibition.'],['performance','Performance participativa en la inauguración.','Participatory performance at the opening.']].map(function(f){return '<figure class="foto"><div class="box"><img src="img/'+f[0]+'.jpg" alt="'+esc(EN?f[2]:f[1])+'" loading="lazy" decoding="async"></div><figcaption><b>'+(EN?'The room':'La sala')+'</b>'+esc(EN?f[2]:f[1])+'</figcaption></figure>';}).join('');
    fit();addEventListener('resize',fit);
    var l2=document.getElementById('goL'), r2=document.getElementById('goR');
    function upd2(){var max=sala.scrollWidth-sala.clientWidth-4;l2.hidden=sala.scrollLeft<4;r2.hidden=sala.scrollLeft>=max;}
    function go2(d){sala.scrollBy({left:d*Math.round(sala.clientWidth*.8),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});}
    l2.addEventListener('click',function(){go2(-1);});r2.addEventListener('click',function(){go2(1);});
    sala.addEventListener('scroll',upd2,{passive:true});addEventListener('resize',upd2);sala.addEventListener('load',upd2,true);upd2();
    document.addEventListener('keydown',function(e){if(dlg&&dlg.open)return;if(e.key==='ArrowRight')go2(1);else if(e.key==='ArrowLeft')go2(-1);});
    sala.addEventListener('wheel',function(e){if(sala.dataset.embed)return;if(Math.abs(e.deltaY)>Math.abs(e.deltaX)&&!e.ctrlKey){sala.scrollLeft+=e.deltaY;e.preventDefault();}},{passive:false});
  }
  var wall=document.getElementById('wall');
  if(wall){
    wall.innerHTML=O.concat(EX).filter(function(o){return o.st==='d';}).map(function(o){return '<article class="card"><button class="tile" type="button" data-open="'+o.id+'" aria-label="'+S.view+esc(o.t)+'"><img src="'+th(o.src)+'" alt="'+esc(alt(o))+'" decoding="async"></button><div class="meta"><h2>'+esc(o.t)+'</h2><p class="spec">'+esc(tec(o.tec))+'<br>'+esc(mm(o.m))+', '+o.y+'</p><p class="row"><span class="pr">'+S.onreq+'</span><button class="ask" type="button" data-open="'+o.id+'" data-tab="p">'+S.enq+'</button></p></div></article>';}).join('');
    wall.insertAdjacentHTML('afterend','<p class="catalogo">'+S.catP+'<a href="'+window.CATALOGO.url+'" target="_blank" rel="noopener">'+S.buy+(EN?'€20':window.CATALOGO.precio)+' ↗</a></p>');
  }
  // Itinerancia: tabla de las catorce obras
  var tabla=document.getElementById('tabla');
  if(tabla){
    var n=0;
    tabla.innerHTML='<table class="lista"><thead><tr>'+S.th.map(function(x){return '<th scope="col">'+x+'</th>';}).join('')+'</tr></thead><tbody>'+O.map(function(o){n++;return '<tr><td>'+('0'+n).slice(-2)+'</td><th scope="row">'+esc(o.t)+'</th><td>'+o.y+'</td><td>'+esc(tec(o.tec))+'</td><td>'+esc(mm(o.m))+'</td><td>'+(stl(o)||'')+'</td></tr>';}).join('')+'</tbody></table>';
  }
})();

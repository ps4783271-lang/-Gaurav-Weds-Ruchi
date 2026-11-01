
var st=document.getElementById('st'),sl=[].slice.call(st.querySelectorAll('.slide')),bs=[].slice.call(document.querySelectorAll('#br b')),ht=document.getElementById('ht'),i=0;
function go(n){i=Math.max(0,Math.min(sl.length-1,n));sl.forEach(function(s,k){s.classList.toggle('on',k==i)});bs.forEach(function(b,k){b.classList.toggle('done',k<=i)});
ht.textContent=i==sl.length-1?'‹ tap the left side to go back':'tap to open the next page ›'}
st.addEventListener('click',function(e){if(e.target.closest('a'))return;var r=st.getBoundingClientRect();go(e.clientX-r.left<r.width*.25?i-1:i+1)});
st.addEventListener('keydown',function(e){if(e.key=='ArrowRight'||e.key==' '||e.key=='Enter'){e.preventDefault();go(i+1)}else if(e.key=='ArrowLeft'){go(i-1)}});
var f=function(c,s,st){return '<svg viewBox="-50 -50 100 100" style="color:'+c+';width:'+s+'px;height:'+s+'px;'+st+'"><use href="#pf"/></svg>'};
[].slice.call(document.querySelectorAll('#cd div')).forEach(function(d,k){d.insertAdjacentHTML('beforeend',f('#e64980',20,'top:-9px;'+(k%2?'right':'left')+':-7px')+f('#f783ac',14,'bottom:-6px;'+(k%2?'left':'right')+':-4px'))});
var C=['#f06595','#f783ac','#e64980','#fa9cc0','#d6336c'],R=document.getElementById('rn'),h='';
for(var k=0;k<22;k++){var z=16+Math.random()*20;h+='<div class="fw" style="left:'+(Math.random()*96)+'%;width:'+z+'px;height:'+z+'px;animation-duration:'+(11+Math.random()*12)+'s;animation-delay:-'+(Math.random()*20)+'s"><svg viewBox="-50 -50 100 100" style="color:'+C[k%5]+';animation-duration:'+(3+Math.random()*3)+'s"><use href="#pf"/></svg></div>'}
R.innerHTML=h;
var cv=document.getElementById('cv');document.getElementById('cl').src=document.querySelector('.logo').src;
function openCard(){if(cv.classList.contains('open'))return;cv.classList.add('open');setTimeout(function(){document.body.classList.add('go')},1800);setTimeout(function(){cv.classList.add('gone')},6900)}
cv.addEventListener('click',openCard);cv.addEventListener('keydown',function(e){if(e.key=='Enter'||e.key==' '){e.preventDefault();openCard()}});
var T=new Date('2026-11-11T00:00:00+05:30').getTime();
function t(){var x=Math.max(0,T-Date.now()),g=function(a,v){document.getElementById(a).textContent=v};
g('d',Math.floor(x/864e5));g('h',Math.floor(x%864e5/36e5));g('m',Math.floor(x%36e5/6e4));g('s',Math.floor(x%6e4/1e3))}
t();setInterval(t,1000);

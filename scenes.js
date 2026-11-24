// Small vector teaching scenes: no downloaded image library.
function wordScene(w){
  const svg=body=>'<svg class="scene" viewBox="0 0 300 230" role="img" aria-label="词义示意图"><ellipse cx="150" cy="126" rx="140" ry="100" fill="#edf7fc"/><g stroke="#284753" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">'+body+'</g></svg>';
  const box=(x=100,y=85,s=1)=>'<g transform="translate('+x+' '+y+') scale('+s+')"><path d="M0 24 48 0 96 24 48 48Z" fill="#c8a76c"/><path d="M0 24 48 48V116L0 92Z" fill="#ffe1a3"/><path d="M48 48 96 24V92L48 116Z" fill="#f4cb7d"/><path d="M24 12 72 36" stroke="#f8e5be" stroke-width="9"/></g>';
  const apple=(x,y,s=1)=>'<g transform="translate('+x+' '+y+') scale('+s+')"><path d="M0 -12C-31 -27 -34 10 -18 25Q0 36 18 25C34 10 31 -27 0 -12Z" fill="#ef5350"/><path d="M0 -13Q-2 -27 -12 -32" fill="none"/><path d="M-1 -21Q12 -42 22 -27Q12 -17 -1 -21" fill="#5f9c67"/><path d="M-18 -4 -21 4" stroke="#ffb4a8" stroke-width="5"/></g>';
  if(w.topic==='position'){
    const a=w.es;
    if(a==='entre')return svg(box(32,90,.75)+apple(150,133,.75)+box(196,61,.75));
    if(a==='en medio de')return svg(box(52,53,.65)+box(179,53,.65)+apple(150,127,.7)+box(52,137,.65)+box(179,137,.65));
    if(a==='detrás de')return svg(apple(150,82,.75)+box());
    if(a==='dentro de')return svg(box()+'<g opacity=".65">'+apple(150,147,.7)+'</g>');
    const coords=({'sobre':[148,86],'al lado de':[220,163],'encima de':[148,39],'debajo de':[148,208],'delante de':[143,184],'fuera de':[229,182],'a la izquierda de':[48,139],'a la derecha de':[244,139]})[a]||[150,86];
    return svg(box()+apple(coords[0],coords[1],.7));
  }
  if(w.topic==='colors'){
    const color=palette.find(p=>p[0]===w.es)[2];
    return svg('<path d="M104 55 127 42Q150 63 173 42L196 55 234 97 204 123 187 105V197H113V105L96 123 66 97Z" fill="'+color+'"/><path d="M127 42Q150 92 173 42" fill="none"/>');
  }
  if(w.topic==='months'){const n=months.indexOf(w.es)+1;return svg('<rect x="68" y="45" width="164" height="156" rx="12" fill="white"/><path d="M68 89H232V57Q232 45 220 45H80Q68 45 68 57Z" fill="#73c7e7"/><path d="M105 34V61M195 34V61" stroke-width="8"/><text x="150" y="164" text-anchor="middle" stroke="none" fill="#254f6b" font-size="65" font-family="sans-serif" font-weight="700">'+n+'</text>')}
  if(w.topic==='seasons'){
    const i=seasons.indexOf(w.es),c=['#a4ce88','#518c65','#e7a855','#f5fbff'][i];
    return svg('<path d="M26 202Q150 179 274 202" fill="none" stroke="#91bbce"/><path d="M143 194V88" stroke="#9e7457" stroke-width="11"/><path d="M85 102Q54 74 90 50Q95 18 130 34Q158 7 180 36Q222 30 220 64Q252 90 216 112Q202 145 171 124Q142 150 120 126Q82 137 85 102Z" fill="'+c+'"/><path d="M143 194V111" stroke="#9e7457" stroke-width="9"/>'+(i===0?'<g fill="#ee99ae" stroke="none"><circle cx="103" cy="65" r="9"/><circle cx="174" cy="60" r="9"/><circle cx="202" cy="102" r="8"/></g>':i===1?'<circle cx="248" cy="36" r="19" fill="#f5cc5b" stroke="none"/>':i===2?'<path d="M69 163Q94 147 91 171Q75 181 69 163M208 180Q224 158 234 177Q226 194 208 180" fill="#e7a855"/>':'<path d="M56 40V60M46 50H66M246 135V155M236 145H256" stroke="#a9d6eb"/>'));
  }
  if(['la casa','el piso','el chalé'].includes(w.es))return svg('<path d="M65 105 150 33 235 105" fill="#71b6d2"/><path d="M80 98V196H220V98" fill="#fff4d9"/><path d="M132 196V136H170V196" fill="#bd9673"/><path d="M94 118H119V146H94ZM183 118H208V146H183Z" fill="#8fd2e4"/>');
  if(w.es==='la mesa'||w.es==='la mesita')return svg('<path d="M62 99H237V121H62Z" fill="#e7bd86"/><path d="M80 121V192M216 121V192" stroke="#a77c4b" stroke-width="12"/>');
  if(w.es==='la silla')return svg('<rect x="100" y="36" width="100" height="82" rx="12" fill="#8fc9df"/><path d="M100 114V202M200 114V202" stroke-width="10"/><path d="M88 130H212V149H88Z" fill="#6da9c3"/>');
  if(w.es==='la cama')return svg('<path d="M48 69V200M250 147V200" stroke-width="10"/><path d="M48 104H250V179H48Z" fill="#9cdbed"/><rect x="57" y="86" width="66" height="40" rx="12" fill="white"/><path d="M135 107V177" fill="none"/>');
  if(w.es==='el sofá'||w.es==='el sillón')return svg('<rect x="65" y="66" width="170" height="100" rx="22" fill="#8bbeda"/><rect x="51" y="111" width="198" height="77" rx="17" fill="#69a6c7"/><path d="M78 185V200M222 185V200M75 143H225M150 80V143" fill="none"/>');
  if(['la taza','el café','la leche','el vaso'].includes(w.es))return svg('<path d="M192 83H214Q255 111 209 140H193" fill="none" stroke-width="10"/><path d="M78 72H193V148Q183 185 135 185Q88 183 78 148Z" fill="#fffdf5"/><ellipse cx="135" cy="72" rx="57" ry="14" fill="'+(w.es==='el café'?'#916347':'#c6e8f0')+'"/><path d="M67 194H205" stroke="#9ac8d7" stroke-width="8"/>');
  return '';
}

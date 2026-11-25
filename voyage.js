// Separate from the free-practice session: passing a choice never certifies spelling.
(() => {
  titles.route = '学习航线';
  const root = document.querySelector('#voyage'), key = 'spanishCoastPath.v1';
  const people = ['yo（我）','tú（你）','él / ella / usted（他、她、您）','nosotros/as（我们）','vosotros/as（你们）','ellos / ellas / ustedes（他们、你们）'];
  const badges = ['认识','选西语','看词写','提示写','独立写'];
  const byId = Object.fromEntries(words.map(w=>[w.id,w]));
  const subjects = [{id:'position',name:'物品在哪里'},{id:'seasons',name:'四季'},{id:'colors',name:'颜色'},{id:'months',name:'月份'},{id:'verb',name:'动词变位'},...TOPICS.slice(0,8)];
  const chapters=[{name:'看图认识世界',topics:['position','seasons','colors','months']},{name:'聊聊自己',topics:['greetings','countries']},{name:'我的家',topics:['rooms','furniture','kitchen','bathroom','rental']},{name:'说说每一天',topics:['routine','verb']}];
  const regular = ['estudiar','comer','vivir'];
  const orderedVerbs = [...regular.map(x=>verbs.find(v=>v.inf===x)),...verbs.filter(v=>!regular.includes(v.inf))];
  const units = Object.fromEntries(subjects.map(s=>{
    if(s.id==='verb')return [s.id,orderedVerbs.map(v=>({name:v.inf,verb:v,items:[0,1,2,3,4,5]}))];
    const list=words.filter(w=>w.topic===s.id),groups=[],size=Math.ceil(list.length/Math.ceil(list.length/6));
    for(let i=0;i<list.length;i+=size){const group=list.slice(i,i+size);groups.push({name:group[0].es+' … '+group.at(-1).es,items:group.map(w=>w.id)})}
    return [s.id,groups];
  }));
  let data=readStoredJSON(key,null);
  const original=JSON.stringify(data);
  if(!data || typeof data!=='object' || Array.isArray(data))data={};
  if(!data.book || typeof data.book!=='object' || Array.isArray(data.book))data.book={};
  if(!units[data.topic])data.topic='position';
  for(const [topic,list] of Object.entries(units))list.forEach((u,i)=>{
    const k=topic+':'+i,r=data.book[k];if(!r)return;
    if(typeof r!=='object'||Array.isArray(r)){delete data.book[k];return}
    if(data.version!==2){r.stage=r.passed?5:0;r.queue=r.passed?[]:[...u.items];r.hits={};r.hinted=false}
    if(!Number.isInteger(r.stage)||r.stage<0||r.stage>5)r.stage=0;
    if(r.stage===5){r.passed=true;r.queue=[]}
    else {
      r.queue=Array.isArray(r.queue)?r.queue.filter(id=>u.items.includes(id)):[];
      if(!r.queue.length)r.queue=[...u.items];
    }
    if(!r.hits||typeof r.hits!=='object'||Array.isArray(r.hits))r.hits={};
  });
  data.version=2;
  if(!Number.isInteger(data.active)||!units[data.topic][data.active]||!data.book[data.topic+':'+data.active])data.active=null;
  if(JSON.stringify(data)!==original){if(original!=='null')writeStoredJSON(key+'.before-recovery',JSON.parse(original));writeStoredJSON(key,data)}
  const trail=chapters.flatMap(c=>c.topics.flatMap(topic=>units[topic].map((u,i)=>({topic,i,u}))));
  const available=(topic,i)=>{const n=trail.findIndex(x=>x.topic===topic&&x.i===i);return n===0||data.book[topic+':'+i]||data.book[trail[n-1].topic+':'+trail[n-1].i]?.passed};
  const persist=()=>writeStoredJSON(key,data);
  const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const unitKey=i=>data.topic+':'+i;
  const current=()=>units[data.topic][data.active];
  const entry=()=>data.book[unitKey(data.active)];
  const btn=(label,act,cls='ghost-btn',extra='')=>'<button type="button" class="'+cls+'" data-go="'+act+'" '+extra+'>'+label+'</button>';
  function start(i){
    if(!units[data.topic][i] || !available(data.topic,i))return;
    data.active=i;const existing=entry();
    if(!existing||existing.stage===5)data.book[unitKey(i)]={stage:0,queue:[...current().items],passed:!!existing?.passed,hits:{},hinted:false};
    persist();render();
  }
  const answer=(u,id)=>u.verb?u.verb.forms[id]:byId[id].es;
  const meaning=(u,id)=>u.verb?people[id]:byId[id].zh;
  function guide(v){
    if(v.type.startsWith('规则'))return '去掉词尾 -'+v.inf.slice(-2)+'，按六个人称依次接：'+({ar:'-o · -as · -a · -amos · -áis · -an',er:'-o · -es · -e · -emos · -éis · -en',ir:'-o · -es · -e · -imos · -ís · -en'}[v.inf.slice(-2)])+'。';
    if(v.inf.endsWith('se'))return '先选与主语对应的代词 me / te / se / nos / os / se，再写动词变位。';
    return ({comenzar:'除 nosotros 和 vosotros 外，词干 e 变 ie。',tener:'yo 用 tengo；tú、él 和 ellos 的词干 e 变 ie。',hacer:'特别记住 yo → hago，其他人称按 -er 词尾变化。',coger:'在 o 前把 g 写成 j：yo → cojo，保持原来的发音。',salir:'特别记住 yo → salgo，其他人称按 -ir 词尾变化。',estar:'yo → estoy；留意 estás、está、estáis、están 的重音。',ser:'这组不规则：先分开记 soy / eres / es，再记复数 somos / sois / son。',ir:'这组用 v 开头：voy / vas / va，再记 vamos / vais / van。'})[v.inf]||v.type;
  }
  function oldPicture(w){
    if(!w)return '';
    if(w.topic==='colors')return '<span class="swatch" style="--pigment:'+palette.find(p=>p[0]===w.es)[2]+'"></span>';
    if(w.topic==='months')return '<span class="leafcal"><small>MES</small>'+String(months.indexOf(w.es)+1).padStart(2,'0')+'</span>';
    const cue=({'la primavera':'🌷','el verano':'☀️','el otoño':'🍁','el invierno':'❄️','la casa':'🏠','la cama':'🛏️','la silla':'🪑','el sofá':'🛋️','la leche':'🥛','el café':'☕','la puerta':'🚪','el espejo':'🪞','la ducha':'🚿','la bañera':'🛁','el jardín':'🌿','el reloj':'⏰','la lámpara':'💡','la piscina':'🏊','la ventana':'🪟'})[w.es];
    return cue?'<span class="cue">'+cue+'</span>':'';
  }
  const picture=w=>w?wordScene(w):'';
  function options(u,id){
    const correct=answer(u,id);
    const pool=u.verb?u.verb.forms:words.filter(w=>w.topic===data.topic&&w.es!==byId[id].es).map(w=>w.es);
    return shuffle([correct,...shuffle([...new Set(pool)].filter(o=>o!==correct)).slice(0,3)]);
  }
  let choices=[];
  function render(){
    const group=units[data.topic],subject=subjects.find(s=>s.id===data.topic);
    if(data.active===null){
      root.innerHTML='<div class="path">'+chapters.map((chapter,ci)=>'<section class="chapter"><header class="chapter-title"><div><small>第 '+(ci+1)+' 单元</small><h1>'+chapter.name+'</h1></div><span aria-hidden="true">≈</span></header><div class="stepping-stones">'+chapter.topics.flatMap(topic=>units[topic].map((u,i)=>{
        const rec=data.book[topic+':'+i],can=available(topic,i),ready=can&&!rec?.passed;
        return '<div class="step"><button type="button" class="node '+(rec?.passed?'done':can?'ready':'locked')+'" data-go="launch" data-topic="'+topic+'" data-i="'+i+'" aria-label="'+esc(subjects.find(s=>s.id===topic).name)+' 第 '+(i+1)+' 关'+(rec?.passed?'，已通过':can?'，开始':'，未解锁')+'" '+(!can?'disabled':'')+'><span>'+(rec?.passed?'✓':can?(rec?.stage===2?'✎':'★'):'●')+'</span></button><p>'+esc(u.verb?u.verb.inf:subjects.find(s=>s.id===topic).name)+(units[topic].length>1?' · '+(i+1):'')+'</p>'+(ready?'<small>点我继续</small>':'')+'</div>'
      })).join('')+'</div></section>').join('')+'</div>';return;
    }
    const u=current(),r=entry(),i=data.active;
    const head=btn('×','map','exit','aria-label="退出练习"')+'<progress max="5" value="'+r.stage+'" aria-label="关卡进度"></progress><span>'+subject.name+'</span>';
    if(r.stage===5){root.innerHTML='<article class="port"><header>'+head+'</header><div class="medal">★</div><h2>这一关完成啦！</h2><p>'+(r.masteredV2?'每个词都已独立写对两次。':'已有通关记录，回练可体验新版。')+'</p>'+btn('继续','nextUnit','primary-btn')+'</article>';return}
    const id=r.queue[0],a=answer(u,id),m=meaning(u,id),st=r.stage;
    let part='';
    if(st===0)part=(u.verb?'<p class="rule">'+esc(guide(u.verb))+'</p>':picture(byId[id]))+'<h2 lang="es">'+esc(a)+'</h2><p>'+esc(m)+'</p>'+(u.verb?'<p class="muted">'+esc(u.verb.examples[0].join(' · '))+'</p>':'')+'<div class="lesson-actions">'+btn('♫','speak','sound','aria-label="听发音"')+btn('继续','read','primary-btn')+'</div>';
    if(st===1){const illustrated=!u.verb&&!!picture(byId[id]);choices=options(u,id);part='<h2 class="instruction">'+(u.verb?'选出变位':'选出西班牙语')+'</h2>'+(illustrated?picture(byId[id]):'<h2>'+esc(u.verb?people[id]:m)+'</h2>')+'<div class="route-options">'+choices.map((v,j)=>btn(esc(v),'choice','ghost-btn','data-i="'+j+'" lang="es"')).join('')+'</div>'}
    if(st>=2){
      const model=spokenText(a),mask=model.split(' ').map(word=>word[0]+word.slice(1).replace(/[\p{L}]/gu,'＿')).join(' ');
      part='<h2 class="instruction">'+(st===2?'看着词，写一遍':st===3?'借一点提示，写出来':'现在凭记忆写')+'</h2>'+(u.verb?'':picture(byId[id]))+'<p>'+esc(m)+'</p>'+(st===2?'<div class="word-model" lang="es">'+esc(model)+'</div>':st===3?'<div class="word-mask" lang="es">'+esc(mask)+'</div>':'')+'<form id="coastForm"><input aria-label="西语答案" id="coastInput" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="输入西班牙语"><button class="primary-btn">检查</button></form>'+(st>=3?btn('想不起来，提示一下','hint','hint-btn')+'<div id="wordHint">'+(r.hinted?esc(a):'')+'</div>':'')+'<small>重音可以省略 · 名词带冠词</small>';
    }
    root.innerHTML='<article class="port"><header>'+head+'</header><div class="route-stages">'+badges.map((s,k)=>'<span class="'+(k===st?'now':'')+'">'+(k<st?'✓':k+1)+' '+s+'</span>').join('')+'</div><small>本轮还剩 '+r.queue.length+' 项'+(u.verb?' · '+u.verb.inf+'（'+u.verb.zh+'）':'')+'</small>'+part+'<div id="coastFeedback" role="status"></div></article>';
    if(st>=2)root.querySelector('input').focus();
  }
  function advance(ok){
    const r=entry(),u=current(),id=r.queue.shift();r.hits??={};
    if(r.stage===4){r.hits[id]=ok?(r.hits[id]||0)+1:0;if(r.hits[id]<2)r.queue.push(id)}
    else if(!ok)r.queue.push(id);
    r.hinted=false;
    if(!r.queue.length){r.stage++;if(r.stage===5){r.passed=true;r.masteredV2=true}else r.queue=shuffle(u.items)}
    persist();return id;
  }
  function judge(ok){
    const r=entry(),u=current(),id=r.queue[0],stage=r.stage,assisted=!!r.hinted;
    const earned=ok&&!assisted;
    root.querySelectorAll('[data-go="choice"],[data-go="hint"],form input,form button').forEach(el=>el.disabled=true);
    if(!u.verb){if(stage===1)setRecord(id,{seen:true,recognition:ok?2:1});else if(stage===4)setRecord(id,{seen:true,spelling:earned&&(r.hits?.[id]||0)>=1});if(!earned)state.mistakes.add(id);else if(getRecord(id).recognition===2&&getRecord(id).spelling)state.mistakes.delete(id);writeStoredJSON('spanishSprintProgress',state.progress);writeStoredJSON('spanishSprintMistakes',[...state.mistakes])}
    advance(earned);
    root.querySelector('#coastFeedback').innerHTML='<p><b>'+(ok?assisted?'写对了，稍后不看提示再试':'✓ 写得很好': '看清词形，稍后再试')+'</b></p><div class="word-model" lang="es">'+esc(answer(u,id))+'</div><p>'+esc(meaning(u,id))+'</p>'+btn('继续','continue','primary-btn');
    root.querySelector('[data-go="continue"]').focus();
  }
  root.onchange=e=>{if(e.target.id==='routeSubject'){data.topic=e.target.value;data.active=null;persist();render()}};
  root.onclick=e=>{const b=e.target.closest('button[data-go]');if(!b||b.disabled)return;switch(b.dataset.go){
    case 'start':start(+b.dataset.i);break;
    case 'launch':data.topic=b.dataset.topic;start(+b.dataset.i);break;
    case 'map':data.active=null;persist();render();break;
    case 'nextUnit':{const n=trail.findIndex(x=>x.topic===data.topic&&x.i===data.active),next=trail[n+1];if(next){data.topic=next.topic;start(next.i)}else{data.active=null;persist();render()}break}
    case 'speak':speak(current().verb?.inf||answer(current(),entry().queue[0]));break;
    case 'read':advance(true);render();break;
    case 'choice':judge(choices[+b.dataset.i]===answer(current(),entry().queue[0]));break;
    case 'hint':entry().hinted=true;persist();root.querySelector('#wordHint').textContent=answer(current(),entry().queue[0]);root.querySelector('input').focus();break;
    case 'continue':render();break;
  }};
  root.onsubmit=e=>{e.preventDefault();const input=root.querySelector('#coastInput');if(!input||input.disabled||!input.value.trim())return;judge(answerVariants(answer(current(),entry().queue[0])).includes(normalizeAnswer(input.value)))};
  document.querySelector('.mast a')?.addEventListener('click',e=>{e.preventDefault();data.active=null;persist();render();window.scrollTo({top:0})});
  state.view='route';
  render();
})();

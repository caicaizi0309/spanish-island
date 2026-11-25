const TOPICS=[
  {id:'greetings',name:'问候与介绍',icon:'👋',color:'#8fd8ee'},
  {id:'countries',name:'国家与国籍',icon:'🌍',color:'#b8e7f4'},
  {id:'rooms',name:'房屋与房间',icon:'🏠',color:'#73c2de'},
  {id:'furniture',name:'家具与物品',icon:'🛋️',color:'#c9edf6'},
  {id:'kitchen',name:'厨房用品',icon:'🍳',color:'#99d7ea'},
  {id:'bathroom',name:'浴室用品',icon:'🛁',color:'#d9f3fa'},
  {id:'rental',name:'租房与设施',icon:'🔑',color:'#67b8d8'},
  {id:'routine',name:'日常作息',icon:'☀️',color:'#a9e1f0'}
];

const rawWords=[
// 问候与自我介绍
['greetings','¡Hola!','你好！','问候语',1],['greetings','¿Qué tal?','怎么样？好吗？','常用问候',1],['greetings','¿Cómo estás?','你好吗？','非正式；对 tú',1],['greetings','Buenos días.','早上好。','通常用于上午',1],['greetings','Buenas tardes.','下午好。','午后使用',1],['greetings','Buenas noches.','晚上好；晚安。','晚上使用',1],['greetings','Adiós.','再见。','',1],['greetings','Hasta luego.','待会儿见；再见。','',1],['greetings','Hasta pronto.','回头见。','',0],['greetings','Hasta mañana.','明天见。','',1],['greetings','Gracias.','谢谢。','',1],['greetings','De nada.','不客气。','',1],['greetings','Por favor.','请。','',1],['greetings','Este es Javier.','这位是哈维尔。','este 与所指名词性数一致',1],['greetings','Encantado / Encantada.','很高兴认识你。','说话者为男性/女性',1],['greetings','Mucho gusto.','很高兴认识你。','阴阳性不变',1],['greetings','Me llamo…','我叫……','llamarse 自复动词',1],['greetings','Soy de…','我来自……','ser + de + 国家',1],['greetings','Vivo en…','我住在……','vivir + en + 地点',1],['greetings','el amigo / la amiga','男性朋友 / 女性朋友','名词随性别变化',0],['greetings','el director / la directora','男经理 / 女经理','教材词',0],['greetings','Recursos Humanos','人力资源','',0],['greetings','¿Diga? / ¿Dígame?','喂？（接电话）','',0],['greetings','No está en este momento.','他/她现在不在。','电话用语',0],['greetings','¿Quiere dejar un recado?','您想留言吗？','电话用语',0],['greetings','¿Cuál es tu número de teléfono?','你的电话号码是多少？','',1],['greetings','Un momento.','请稍等。','',0],
// 20个西语国家 + 国籍男女
['countries','España','西班牙','español / española',1],['countries','México','墨西哥','mexicano / mexicana',1],['countries','Guatemala','危地马拉','guatemalteco / guatemalteca',1],['countries','Honduras','洪都拉斯','hondureño / hondureña',1],['countries','El Salvador','萨尔瓦多','salvadoreño / salvadoreña',1],['countries','Nicaragua','尼加拉瓜','nicaragüense（男女同形）',1],['countries','Costa Rica','哥斯达黎加','costarricense（男女同形）',1],['countries','Panamá','巴拿马','panameño / panameña',1],['countries','Cuba','古巴','cubano / cubana',1],['countries','la República Dominicana','多米尼加共和国','dominicano / dominicana',1],['countries','Colombia','哥伦比亚','colombiano / colombiana',1],['countries','Venezuela','委内瑞拉','venezolano / venezolana',1],['countries','Ecuador','厄瓜多尔','ecuatoriano / ecuatoriana',1],['countries','Perú','秘鲁','peruano / peruana',1],['countries','Bolivia','玻利维亚','boliviano / boliviana',1],['countries','Paraguay','巴拉圭','paraguayo / paraguaya',1],['countries','Chile','智利','chileno / chilena',1],['countries','Argentina','阿根廷','argentino / argentina',1],['countries','Uruguay','乌拉圭','uruguayo / uruguaya',1],['countries','Guinea Ecuatorial','赤道几内亚','ecuatoguineano / ecuatoguineana',1],
// 常见国家
['countries','China','中国','chino / china',1],['countries','el Reino Unido','英国','británico / británica',0],['countries','Corea del Sur','韩国','surcoreano / surcoreana',0],['countries','Japón','日本','japonés / japonesa',1],['countries','Italia','意大利','italiano / italiana',1],['countries','Grecia','希腊','griego / griega',0],['countries','la República Checa','捷克','checo / checa',0],['countries','Rusia','俄罗斯','ruso / rusa',1],['countries','los Estados Unidos','美国','estadounidense（男女同形）',1],['countries','Brasil','巴西','brasileño / brasileña',1],['countries','Francia','法国','francés / francesa',1],['countries','Portugal','葡萄牙','portugués / portuguesa',1],['countries','Suecia','瑞典','sueco / sueca',0],['countries','Finlandia','芬兰','finlandés / finlandesa',0],['countries','Noruega','挪威','noruego / noruega',0],['countries','Letonia','拉脱维亚','letón / letona',0],['countries','Eslovenia','斯洛文尼亚','esloveno / eslovena',0],['countries','Alemania','德国','alemán / alemana',1],['countries','Canadá','加拿大','canadiense（男女同形）',1],['countries','Australia','澳大利亚','australiano / australiana',0],['countries','India','印度','indio / india',0],
// 房屋与房间
['rooms','la casa','家；房子','阴性名词',1],['rooms','el piso','公寓；楼层','阳性名词',1],['rooms','el chalé','别墅','',0],['rooms','la habitación','房间；卧室','',1],['rooms','el dormitorio','卧室','',1],['rooms','el salón','客厅','',1],['rooms','la cocina','厨房；灶具','',1],['rooms','el cuarto de baño','浴室','',1],['rooms','el baño','浴室；卫生间','',1],['rooms','el aseo','卫生间','',0],['rooms','el jardín','花园','',1],['rooms','la terraza','露台','',1],['rooms','el garaje','车库','',1],['rooms','el trastero','杂物间','',0],['rooms','la buhardilla','阁楼','',0],['rooms','la piscina','游泳池','',0],['rooms','el suelo de parqué','镶木地板','',0],['rooms','el interior','内部','也可作形容词：内部的',0],['rooms','el exterior','外部','也可作形容词：外部的',0],
// 家具物品
['furniture','la cama','床','',1],['furniture','la mesilla','床头柜','',0],['furniture','la lámpara','灯','',1],['furniture','el armario','柜子；衣柜；书橱','',1],['furniture','el guardarropa','衣柜','',0],['furniture','la estantería','书架；搁架','',1],['furniture','el sofá','沙发','',1],['furniture','el sillón','扶手椅','',1],['furniture','la silla','椅子','',1],['furniture','la mesa','桌子；饭桌','',1],['furniture','la mesita','小桌子','',0],['furniture','la alfombra','地毯','',0],['furniture','la televisión','电视','',1],['furniture','el cuadro','画；画框','复数：los cuadros',0],['furniture','la cortina','窗帘','常用复数：las cortinas',0],['furniture','la puerta','门','',1],['furniture','la ventana','窗户','',1],['furniture','el reloj','钟；手表','',0],['furniture','el espejo','镜子','',1],
// 厨房
['kitchen','el fregadero','洗碗池','',1],['kitchen','el plato','盘子','',1],['kitchen','el vaso','玻璃杯','',1],['kitchen','la taza','杯子；茶杯','',1],['kitchen','la cafetera','咖啡壶','',1],['kitchen','la jarra','罐；水壶','',0],['kitchen','la cuchara','勺子','',1],['kitchen','el tenedor','叉子','',1],['kitchen','la servilleta','餐巾纸；餐巾','',1],['kitchen','la sartén','平底锅；煎锅','阴性：la sartén',1],['kitchen','la cazuela','炖锅','',0],['kitchen','la botella','瓶子','',1],['kitchen','el horno','烤箱；炉','',1],['kitchen','la nevera','冰箱','西班牙常用',1],['kitchen','el refrigerador','冰箱','拉美常用',0],['kitchen','la lavadora','洗衣机','',1],['kitchen','la despensa','食品储藏室','',0],
// 浴室
['bathroom','el lavabo','洗手池','',1],['bathroom','la ducha','淋浴；淋浴间','',1],['bathroom','el bidé','坐浴盆','',0],['bathroom','la bañera','浴缸','',1],['bathroom','la toalla','毛巾','',1],['bathroom','el váter','马桶','口语',1],['bathroom','el cepillo','刷子；牙刷','',0],['bathroom','el espejo','镜子','亦见于家具',1],
// 租房设施和描述
['rental','el alquiler','租金；出租','',1],['rental','la calefacción','暖气','',1],['rental','la calefacción central','中央暖气','',1],['rental','el ascensor','电梯','',1],['rental','el aire acondicionado','空调','',1],['rental','el centro','中心','',1],['rental','la ciudad','城市','',1],['rental','la universidad','大学','',0],['rental','céntrico / céntrica','市中心的','形容词',1],['rental','antiguo / antigua','老的；古老的','',1],['rental','moderno / moderna','现代的','',1],['rental','bonito / bonita','漂亮的','',1],['rental','precioso / preciosa','非常漂亮的','',0],['rental','pequeño / pequeña','小的','',1],['rental','grande','大的','男女同形',1],['rental','económico / económica','经济的；便宜的','',1],['rental','caro / cara','贵的','',1],['rental','cerca','附近；近','副词',1],['rental','lejos','远；遥远','副词',1],['rental','media hora','半小时','',0],['rental','mucha luz','光线充足','直译：很多光',1],['rental','¿Dónde vives?','你住在哪里？','',1],['rental','¿Cómo es?','它怎么样？','问特征，用 ser',1],['rental','¿Cuántas habitaciones tiene?','它有几个房间？','问拥有，用 tener',1],['rental','¿Tiene terraza?','它有露台吗？','',1],['rental','Está en el centro.','它位于市中心。','位置用 estar',1],['rental','No, no demasiado.','不，不太贵/不太……','',0],
// 日常作息
['routine','levantarse','起床','自复动词',1],['routine','ducharse','淋浴','自复动词',1],['routine','desayunar','吃早餐','',1],['routine','salir','出去；离开','',1],['routine','coger','乘坐；拿','在部分拉美地区避免使用此义',1],['routine','estudiar','学习','',1],['routine','comenzar','开始','e→ie：comienzo',1],['routine','comer','吃饭；吃','',1],['routine','regresar','返回','',1],['routine','cenar','吃晚餐','',1],['routine','la mañana','上午；早晨','',1],['routine','por la mañana','在上午','',1],['routine','la tarde','下午','',1],['routine','por la tarde','在下午','',1],['routine','el café','咖啡','',1],['routine','la leche','牛奶','',1],['routine','la tostada','烤面包片','',1],['routine','la cafetería','咖啡馆','',0],['routine','la práctica','实习；实践','',0],['routine','la arquitectura','建筑学','',0]
];

TOPICS.push({id:'seasons',name:'四季',icon:'🍂',color:'#a7d9cf'},{id:'colors',name:'颜色',icon:'🎨',color:'#99d4eb'},{id:'months',name:'月份',icon:'🗓️',color:'#b2d7ea'});
const seasons=['la primavera','el verano','el otoño','el invierno'];
const months='enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre'.split(' ');
const palette=[['rojo / roja','红色','#da4253'],['azul','蓝色','#3683c7'],['amarillo / amarilla','黄色','#f3c247'],['verde','绿色','#51875c'],['blanco / blanca','白色','#fff'],['negro / negra','黑色','#222b35'],['gris','灰色','#919ba5'],['marrón','棕色','#805638'],['naranja','橙色','#ec853a'],['rosa','粉色','#eb9fb6'],['violeta','紫罗兰色','#8d67aa']];
rawWords.push(...seasons.map((es,i)=>['seasons',es,['春季','夏季','秋季','冬季'][i],'季节名词连冠词一起记',1]),...months.map((es,i)=>['months',es,(i+1)+'月','月份名通常小写。例：en '+es,1]),...palette.map(([es,zh])=>['colors',es,zh,'颜色形容词；列出两种形式时任选其一。',1]));
TOPICS.push({id:'position',name:'物品在哪里',icon:'',color:'#a7d9ec'});
const positions=[['sobre','在……上面'],['al lado de','在……旁边'],['encima de','在……上方'],['debajo de','在……下方'],['delante de','在……前面'],['detrás de','在……后面'],['en medio de','在……中间'],['entre','在……之间'],['dentro de','在……里面'],['fuera de','在……外面'],['a la izquierda de','在……左边'],['a la derecha de','在……右边']];
rawWords.push(...positions.map(([es,zh])=>['position',es,zh,'',1]));
const words=rawWords.map((w,i)=>({id:i+1,topic:w[0],es:w[1],zh:w[2],note:w[3]||'',priority:!!w[4]}));
const spanishTips=[
  ['¿ 和 ¡ 要从句首出现','西班牙语的疑问句和感叹句，开头和结尾都有符号。','¿Cómo estás? · ¡Buenos días!','页面里的西语字符小键盘可以直接输入 ¿ 和 ¡。'],
  ['字母 h 通常不发音','看到 h 不要像英语那样读出来。','hola · hotel · ahora','ch 是另一个字母组合，发音不同。'],
  ['j 的声音比较有力','西班牙语 j 常像从喉咙发出的 h 音。','Javier · jardín · trabajar','不同地区强弱略有差别。'],
  ['ñ 是独立字母','ñ 的声音接近汉语“尼”和“亚”快速连读。','España · mañana · pequeño','ñ 不能简单当作 n。'],
  ['五个元音很稳定','a、e、i、o、u 的基本读音变化较少，看到新词也能大致读出。','casa · mesa · vino · poco · uno','先把元音读稳，整词会清楚很多。'],
  ['国家名大写，国籍小写','国家是专有名词；国籍形容词通常不用大写。','España → español / española','国籍还要与人的阴阳性、单复数一致。'],
  ['tú 和 usted 都是“你”','tú 更亲近；usted 更正式、礼貌。','¿Cómo estás? / ¿Cómo está usted?','具体使用习惯会因国家和场合而不同。'],
  ['vosotros 主要用于西班牙','在多数拉丁美洲地区，人们通常用 ustedes 表示“你们”。','vosotros vivís / ustedes viven','考试仍建议把 vosotros 这一组完整掌握。']
];

const verbs=[
  {inf:'ser',zh:'是；表示身份或特征',type:'不规则动词',forms:['soy','eres','es','somos','sois','son'],examples:[['Soy estudiante.','我是学生。'],['Ellos son españoles.','他们是西班牙人。']]},
  {inf:'estar',zh:'在；处于某状态',type:'不规则动词',forms:['estoy','estás','está','estamos','estáis','están'],examples:[['Estoy en casa.','我在家。'],['La universidad está en el centro.','大学位于市中心。']]},
  {inf:'tener',zh:'有；拥有',type:'不规则动词',forms:['tengo','tienes','tiene','tenemos','tenéis','tienen'],examples:[['Tengo una habitación grande.','我有一个大房间。'],['¿Tiene terraza el piso?','这套公寓有露台吗？']]},
  {inf:'vivir',zh:'生活；居住',type:'规则 -ir 动词',forms:['vivo','vives','vive','vivimos','vivís','viven'],examples:[['Vivo en Madrid.','我住在马德里。'],['Mis amigos viven en China.','我的朋友们住在中国。']]},
  {inf:'llamarse',zh:'叫作；名叫',type:'自复动词',forms:['me llamo','te llamas','se llama','nos llamamos','os llamáis','se llaman'],examples:[['Me llamo Ana.','我叫安娜。'],['¿Cómo se llama usted?','您叫什么名字？']]},
  {inf:'levantarse',zh:'起床',type:'自复动词',forms:['me levanto','te levantas','se levanta','nos levantamos','os levantáis','se levantan'],examples:[['Me levanto a las siete.','我七点起床。'],['Ellos se levantan temprano.','他们起得很早。']]},
  {inf:'ducharse',zh:'淋浴',type:'自复动词',forms:['me ducho','te duchas','se ducha','nos duchamos','os ducháis','se duchan'],examples:[['Me ducho por la mañana.','我早上洗澡。'],['¿Te duchas por la noche?','你晚上洗澡吗？']]},
  {inf:'desayunar',zh:'吃早餐',type:'规则 -ar 动词',forms:['desayuno','desayunas','desayuna','desayunamos','desayunáis','desayunan'],examples:[['Desayuno café y tostadas.','我早餐喝咖啡、吃烤面包。'],['Desayunamos en casa.','我们在家吃早餐。']]},
  {inf:'estudiar',zh:'学习',type:'规则 -ar 动词',forms:['estudio','estudias','estudia','estudiamos','estudiáis','estudian'],examples:[['Estudio español.','我学习西班牙语。'],['Ellas estudian arquitectura.','她们学习建筑学。']]},
  {inf:'comer',zh:'吃；吃饭',type:'规则 -er 动词',forms:['como','comes','come','comemos','coméis','comen'],examples:[['Como en la cafetería.','我在咖啡馆吃饭。'],['¿Qué coméis hoy?','你们今天吃什么？']]},
  {inf:'cenar',zh:'吃晚餐',type:'规则 -ar 动词',forms:['ceno','cenas','cena','cenamos','cenáis','cenan'],examples:[['Ceno a las ocho.','我八点吃晚餐。'],['Cenamos juntos.','我们一起吃晚餐。']]},
  {inf:'salir',zh:'出去；离开',type:'不规则动词',forms:['salgo','sales','sale','salimos','salís','salen'],examples:[['Salgo de casa a las ocho.','我八点离开家。'],['Mis amigos salen por la tarde.','我的朋友们下午出去。']]},
  {inf:'coger',zh:'拿；乘坐（西班牙常用）',type:'第一人称不规则',forms:['cojo','coges','coge','cogemos','cogéis','cogen'],examples:[['Cojo el metro.','我乘地铁。'],['¿Coges el autobús?','你乘公共汽车吗？']]},
  {inf:'regresar',zh:'返回',type:'规则 -ar 动词',forms:['regreso','regresas','regresa','regresamos','regresáis','regresan'],examples:[['Regreso a casa por la tarde.','我下午回家。'],['Regresamos a las seis.','我们六点返回。']]},
  {inf:'comenzar',zh:'开始',type:'词干变化 e → ie',forms:['comienzo','comienzas','comienza','comenzamos','comenzáis','comienzan'],examples:[['La clase comienza a las nueve.','课程九点开始。'],['Comenzamos a estudiar.','我们开始学习。']]},
  {inf:'ir',zh:'去',type:'不规则动词',forms:['voy','vas','va','vamos','vais','van'],examples:[['Voy a la universidad.','我去大学。'],['Vamos en metro.','我们乘地铁去。']]},
  {inf:'hacer',zh:'做；制作',type:'第一人称不规则',forms:['hago','haces','hace','hacemos','hacéis','hacen'],examples:[['Hago los deberes.','我做作业。'],['¿Qué hacéis por la tarde?','你们下午做什么？']]}
];

function readStoredJSON(key,fallback){try{const value=JSON.parse(localStorage.getItem(key));return value??fallback}catch{return fallback}}
function writeStoredJSON(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
function storedObject(key){const value=readStoredJSON(key,{});return value&&typeof value==='object'&&!Array.isArray(value)?value:{}}
const savedSession=storedObject('spanishSprintSession');
const state={
  view:'home',topic:savedSession.topic||'all',direction:savedSession.direction||'es-zh',priority:!!savedSession.priority,cardIndex:0,deck:[],flipped:false,ratingLocked:false,ratingTimer:null,
  progress:storedObject('spanishSprintProgress'),
  mistakes:new Set(Array.isArray(readStoredJSON('spanishSprintMistakes',[]))?readStoredJSON('spanishSprintMistakes',[]):[]),
  quiz:[],quizIndex:0,quizScore:0,quizAnswered:false,libraryPriority:false,
  spellDeck:[],spellIndex:0,spellAnswered:false,
  verbIndex:0,verbChecked:false,verbProgress:storedObject('spanishVerbProgress'),lastSpanishInput:null,
  timeMode:'basic',timeQuestion:null,timeAnswered:false,timeScore:0,timeDone:0
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const topicName=id=>TOPICS.find(t=>t.id===id)?.name||id;
function getRecord(id){
  const p=state.progress[id];if(p&&typeof p==='object')return {seen:!!p.seen,recognition:Math.max(0,Math.min(2,Number(p.recognition)||0)),spelling:!!p.spelling};
  if(p==='known')return {seen:true,recognition:2,spelling:false};if(p==='hard')return {seen:true,recognition:1,spelling:false};if(p==='again')return {seen:true,recognition:0,spelling:false};return {seen:false,recognition:0,spelling:false};
}
function setRecord(id,patch){state.progress[id]={...getRecord(id),...patch}}
function wordLevel(id){const r=getRecord(id);if(r.spelling)return {key:'spelled',label:'拼',title:'会拼写'};if(r.recognition===2)return {key:'recognize',label:'认',title:'认识，知道词义'};if(r.recognition===1)return {key:'fuzzy',label:'糊',title:'模糊或眼熟'};if(r.seen)return {key:'forgot',label:'忘',title:'不认识'};return {key:'new',label:'新',title:'未学习'}}
function saveSession(overrides={}){const next={topic:state.topic,direction:state.direction,priority:state.priority,cardKey:state.deck.length?`${state.topic}|${state.priority}`:savedSession.cardKey,cardOrder:state.deck.length?state.deck.map(w=>w.id):(savedSession.cardOrder||[]),cardIndex:state.deck.length?state.cardIndex:(savedSession.cardIndex||0),spellKey:state.spellDeck.length?`${state.topic}|${state.priority}`:savedSession.spellKey,spellOrder:state.spellDeck.length?state.spellDeck.map(w=>w.id):(savedSession.spellOrder||[]),spellIndex:state.spellDeck.length?state.spellIndex:(savedSession.spellIndex||0),...overrides};Object.assign(savedSession,next);localStorage.setItem('spanishSprintSession',JSON.stringify(next))}
const save=()=>{localStorage.setItem('spanishSprintProgress',JSON.stringify(state.progress));localStorage.setItem('spanishSprintMistakes',JSON.stringify([...state.mistakes]));updateStats()};
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
const sample=(a,n)=>shuffle(a).slice(0,n);
const adaptiveOrder=pool=>shuffle(pool).sort((a,b)=>{const rank=w=>{const r=getRecord(w.id);return r.seen&&r.recognition===0?0:r.recognition===1?1:!r.seen?2:r.recognition===2&&!r.spelling?3:4};return rank(a)-rank(b)});
const toast=msg=>{const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),1500)};
const spokenText=text=>text.split('/')[0].trim();
let audioPlayer=null;
function setAudioStatus(message){const el=$('#audioStatus');if(el)el.textContent=message}
function speak(text){
  const value=spokenText(text),source=window.SPANISH_AUDIO?.[value]||window.SPANISH_AUDIO?.[text.trim()];
  if(source){
    if(!audioPlayer){audioPlayer=new Audio();audioPlayer.preload='auto';audioPlayer.onplay=()=>setAudioStatus('正在播放西班牙语发音');audioPlayer.onerror=()=>setAudioStatus('发音文件加载失败')}audioPlayer.pause();audioPlayer.currentTime=0;audioPlayer.src=source;setAudioStatus('正在加载西班牙语发音');audioPlayer.play().catch(()=>{setAudioStatus('浏览器阻止了自动播放，请点击“听发音”');toast('请点击一次“听发音”来启用声音')});return;
  }
  if('speechSynthesis' in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(value);u.lang='es-ES';u.rate=.82;const voices=speechSynthesis.getVoices();u.voice=voices.find(v=>v.lang.toLowerCase()==='es-es')||voices.find(v=>v.lang.toLowerCase().startsWith('es'))||null;speechSynthesis.speak(u);return}
  setAudioStatus('这条发音暂时不可用');toast('这条发音暂时不可用');
}
const normalizeAnswer=text=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const answerVariants=text=>text.split('/').map(normalizeAnswer).filter(Boolean);

function renderTopicGrid(){
  $('#topicGrid').innerHTML=TOPICS.map((t,i)=>{const count=words.filter(w=>w.topic===t.id).length;return `<button class="topic-card" data-topic="${t.id}" style="--accent:${t.color}"><span class="topic-no">0${i+1}</span><span class="topic-icon">${t.icon}</span><b>${t.name}</b><small>${count} 个词与短语</small><i></i></button>`}).join('');
  $$('.topic-card').forEach(b=>b.onclick=()=>{state.topic=b.dataset.topic;state.deck=[];state.spellDeck=[];buildDeck(null,true);openView('cards')});
}
function renderFilters(container,handler){
  const el=$(container);el.innerHTML=[{id:'all',name:'全部'},...TOPICS].map(t=>`<button class="filter-chip ${state.topic===t.id?'active':''}" data-topic="${t.id}">${t.icon||'✦'} ${t.name}</button>`).join('');
  el.querySelectorAll('button').forEach(b=>b.onclick=()=>{state.topic=b.dataset.topic;state.deck=[];state.spellDeck=[];$$('.filters .filter-chip').forEach(x=>x.classList.toggle('active',x.dataset.topic===state.topic));handler()});
}
function getPool(){let pool=state.topic==='all'?words:words.filter(w=>w.topic===state.topic);if(state.priority)pool=pool.filter(w=>w.priority);return pool.length?pool:words.filter(w=>w.priority)}
function restoreOrder(ids,pool){const allowed=new Set(pool.map(w=>w.id)),map=new Map(words.map(w=>[w.id,w]));const restored=(ids||[]).filter(id=>allowed.has(id)&&map.has(id)).map(id=>map.get(id));const missing=pool.filter(w=>!restored.some(x=>x.id===w.id));return [...restored,...adaptiveOrder(missing)]}
function buildDeck(custom,reset=false){
  const pool=getPool(),key=`${state.topic}|${state.priority}`;
  if(custom){state.deck=[...custom];state.cardIndex=0}else if(state.deck.length&&!reset){}else if(!reset&&savedSession.cardKey===key&&savedSession.cardOrder?.length){state.deck=restoreOrder(savedSession.cardOrder,pool);state.cardIndex=Math.min(Number(savedSession.cardIndex)||0,state.deck.length-1)}else{state.deck=adaptiveOrder(pool);state.cardIndex=0}
  state.flipped=false;renderCard();
}
function renderCard(){
  if(!state.deck.length)buildDeck();const w=state.deck[state.cardIndex%state.deck.length];if(!w)return;
  clearTimeout(state.ratingTimer);state.ratingLocked=false;$$('.rating-row button').forEach(b=>b.disabled=false);$('#quickMeaning').className='quick-meaning';$('#quickMeaning').innerHTML='';
  let dir=state.direction==='mix'?(Math.random()<.5?'es-zh':'zh-es'):state.direction;
  $('#cardTopic').textContent=topicName(w.topic);$('#cardPriority').style.visibility=w.priority?'visible':'hidden';
  $('#cardPrompt').textContent=dir==='es-zh'?w.es:w.zh;$('#cardAnswer').textContent=dir==='es-zh'?w.zh:w.es;
  $('#cardHint').textContent=dir==='es-zh'?(w.note||'想一想，再翻面'):'请写出完整西语（含冠词）';
  $('#cardNote').textContent=w.note||`主题：${topicName(w.topic)}`;$('#cardPosition').textContent=`${state.cardIndex+1} / ${state.deck.length}`;
  $('#sessionBar').style.width=`${((state.cardIndex+1)/state.deck.length)*100}%`;$('#flashcard').classList.remove('flipped');state.flipped=false;
  saveSession();
  if(state.view==='cards')speak(w.es);
}
function moveCard(delta=1,force=false){if(state.ratingLocked&&!force)return;state.cardIndex=(state.cardIndex+delta+state.deck.length)%state.deck.length;renderCard()}
function rate(rating){
  if(state.ratingLocked)return;const w=state.deck[state.cardIndex];state.ratingLocked=true;const recognition={again:0,hard:1,known:2}[rating];setRecord(w.id,{seen:true,recognition});
  if(rating==='again'||rating==='hard')state.mistakes.add(w.id);else if(getRecord(w.id).spelling)state.mistakes.delete(w.id);
  const labels={again:'不认识 · 今天再出现',hard:'模糊 / 眼熟 · 优先复习',known:'认识 · 已记住词义'};const box=$('#quickMeaning');box.innerHTML=`<i>${labels[rating]}</i><b>${w.es}</b><span>${w.zh}</span>`;box.className=`quick-meaning show ${rating}`;
  $$('.rating-row button').forEach(b=>b.disabled=true);save();saveSession({cardIndex:(state.cardIndex+1)%state.deck.length});state.ratingTimer=setTimeout(()=>moveCard(1,true),900);
}

function buildSpellDeck(custom,reset=false){
  const pool=getPool(),key=`${state.topic}|${state.priority}`;
  if(custom){state.spellDeck=[...custom];state.spellIndex=0}else if(state.spellDeck.length&&!reset){}else if(!reset&&savedSession.spellKey===key&&savedSession.spellOrder?.length){state.spellDeck=restoreOrder(savedSession.spellOrder,pool);state.spellIndex=Math.min(Number(savedSession.spellIndex)||0,state.spellDeck.length-1)}else{state.spellDeck=adaptiveOrder(pool);state.spellIndex=0}
  state.spellAnswered=false;renderSpell();
}
function renderSpell(){
  if(!state.spellDeck.length)state.spellDeck=shuffle(getPool());const w=state.spellDeck[state.spellIndex%state.spellDeck.length];if(!w)return;
  $('#spellTopic').textContent=topicName(w.topic);$('#spellPriority').style.visibility=w.priority?'visible':'hidden';$('#spellPrompt').textContent=w.zh;$('#spellHint').textContent=w.note||'填写完整西语，名词别忘了冠词';
  $('#spellPosition').textContent=`${state.spellIndex+1} / ${state.spellDeck.length}`;$('#spellBar').style.width=`${((state.spellIndex+1)/state.spellDeck.length)*100}%`;
  $('#spellInput').value='';$('#spellInput').disabled=false;$('#spellFeedback').textContent='';$('#spellFeedback').className='spell-feedback';$('#spellCheck').innerHTML='检查 <span>↵</span>';state.spellAnswered=false;state.lastSpanishInput=$('#spellInput');setTimeout(()=>$('#spellInput').focus(),80);
  saveSession();
}
function moveSpell(delta=1){state.spellIndex=(state.spellIndex+delta+state.spellDeck.length)%state.spellDeck.length;renderSpell()}
function revealSpelling(){const w=state.spellDeck[state.spellIndex];$('#spellInput').value=spokenText(w.es);$('#spellFeedback').innerHTML=`答案：<b>${w.es}</b>`;speak(w.es);$('#spellInput').focus()}
function checkSpelling(){
  if(state.spellAnswered){moveSpell(1);return}
  const w=state.spellDeck[state.spellIndex],input=$('#spellInput').value.trim();if(!input){toast('先写下你的答案');return}
  const correct=answerVariants(w.es).includes(normalizeAnswer(input));state.spellAnswered=true;$('#spellInput').disabled=true;
  if(correct){setRecord(w.id,{seen:true,recognition:2,spelling:true});state.mistakes.delete(w.id);$('#spellFeedback').innerHTML=`<b>✓ 拼对了，已升级为“会拼写”！</b> ${w.es}`;$('#spellFeedback').classList.add('good')}
  else{setRecord(w.id,{seen:true,spelling:false});state.mistakes.add(w.id);$('#spellFeedback').innerHTML=`正确答案：<b>${w.es}</b><small>你的答案：${input} · 词义认识度保持不变</small>`;$('#spellFeedback').classList.add('bad')}
  $('#spellCheck').innerHTML='下一题 <span>→</span>';save();
}

function renderVerbExamples(v){$('#verbExamples').innerHTML=`<span class="eyebrow">EJEMPLOS · 相关例句</span>${v.examples.map(e=>`<div><b>${e[0]}</b><span>${e[1]}</span><button type="button" class="example-speak" data-text="${e[0]}">♬</button></div>`).join('')}`;$$('.example-speak').forEach(b=>b.onclick=()=>speak(b.dataset.text))}
function renderVerb(){
  state.verbIndex=(state.verbIndex+verbs.length)%verbs.length;const v=verbs[state.verbIndex];state.verbChecked=false;localStorage.setItem('spanishVerbIndex',state.verbIndex);
  $('#verbType').textContent=v.type;$('#verbInfinitive').textContent=v.inf;$('#verbMeaning').textContent=v.zh;$('#verbPosition').textContent=`${state.verbIndex+1} / ${verbs.length}`;$('#verbBar').style.width=`${((state.verbIndex+1)/verbs.length)*100}%`;
  $$('#conjugationGrid input').forEach(input=>{input.value='';input.className='';input.disabled=false});$('#verbFeedback').textContent='';$('#verbFeedback').className='verb-feedback';$('#checkVerb').innerHTML='检查变位 <span>↵</span>';$('#verbExamples').innerHTML='<span class="eyebrow">EJEMPLOS · 相关例句</span><p>完成变位后，这里会显示例句和中文。</p>';
  state.lastSpanishInput=$$('#conjugationGrid input')[0];if(state.view==='conjugation'){setTimeout(()=>state.lastSpanishInput?.focus(),80);speak(v.inf)}
}
function moveVerb(delta=1){state.verbIndex=(state.verbIndex+delta+verbs.length)%verbs.length;renderVerb()}
function checkVerb(){
  if(state.verbChecked){moveVerb(1);return}const v=verbs[state.verbIndex],inputs=$$('#conjugationGrid input');let correct=0;
  inputs.forEach((input,i)=>{const ok=normalizeAnswer(input.value)===normalizeAnswer(v.forms[i]);input.className=ok?'correct':'wrong';input.disabled=true;if(ok)correct++});state.verbChecked=true;
  const old=state.verbProgress[v.inf]||{attempts:0,best:0};state.verbProgress[v.inf]={attempts:old.attempts+1,best:Math.max(old.best,correct)};localStorage.setItem('spanishVerbProgress',JSON.stringify(state.verbProgress));
  $('#verbFeedback').innerHTML=`<b>${correct===6?'✓ 全部正确！':`答对 ${correct} / 6`}</b><span>正确答案：${v.forms.join(' · ')}</span>`;$('#verbFeedback').classList.add(correct===6?'good':'bad');$('#checkVerb').innerHTML='下一个动词 <span>→</span>';renderVerbExamples(v);
}
function revealVerb(){const v=verbs[state.verbIndex];$$('#conjugationGrid input').forEach((input,i)=>{input.value=v.forms[i];input.className='revealed'});$('#verbFeedback').innerHTML=`<b>完整变位</b><span>${v.forms.join(' · ')}</span>`;renderVerbExamples(v);speak(v.inf)}
function insertSpanishChar(char,fallbackId){
  let input=document.activeElement;if(!(input instanceof HTMLInputElement)||input.disabled)input=state.lastSpanishInput;if((!input||input.disabled)&&fallbackId)input=document.getElementById(fallbackId);if(!input||input.disabled)return;
  const start=input.selectionStart??input.value.length,end=input.selectionEnd??start;input.value=input.value.slice(0,start)+char+input.value.slice(end);input.focus();input.setSelectionRange(start+char.length,start+char.length);state.lastSpanishInput=input;
}

const timeNumbers={1:'una',2:'dos',3:'tres',4:'cuatro',5:'cinco',6:'seis',7:'siete',8:'ocho',9:'nueve',10:'diez',11:'once',12:'doce'};
const timeMinuteWords={5:'cinco',10:'diez',15:'cuarto',20:'veinte',25:'veinticinco',30:'media',35:'treinta y cinco',40:'cuarenta',45:'cuarenta y cinco',50:'cincuenta',55:'cincuenta y cinco'};
const timePeriods={morning:{zh:'上午',es:'de la mañana',icon:'🌅',hours:[7,8,9,10,11]},afternoon:{zh:'下午',es:'de la tarde',icon:'🌤️',hours:[1,2,3,4,5,6,7]},night:{zh:'晚上',es:'de la noche',icon:'🌙',hours:[8,9,10,11]}};
function timePrefix(hour){return hour===1?'Es la una':`Son las ${timeNumbers[hour]}`}
function buildTimeAnswer(q){
  const period=timePeriods[q.period].es;if(q.minute===0)return `${timePrefix(q.hour)} ${period}.`;if(q.minute<=30){const join=q.minute===15?'y cuarto':q.minute===30?'y media':`y ${timeMinuteWords[q.minute]}`;return `${timePrefix(q.hour)} ${join} ${period}.`}
  const next=q.hour===12?1:q.hour+1,remain=60-q.minute,minus=remain===15?'menos cuarto':`menos ${timeMinuteWords[remain]}`;return `${timePrefix(next)} ${minus} ${period}.`;
}
function timeAnswerVariants(q){
  const canonical=buildTimeAnswer(q),period=timePeriods[q.period].es,variants=[canonical];if(q.minute===0)variants.push(`${timePrefix(q.hour)} en punto ${period}`);
  const direct=q.minute===0?timePrefix(q.hour):`${timePrefix(q.hour)} y ${timeMinuteWords[q.minute]}`;variants.push(`${direct} ${period}`);variants.push(`${q.hour===1?'Es la 1':`Son las ${q.hour}`} ${q.minute===0?'':`y ${q.minute}`} ${period}`);return variants.map(normalizeAnswer);
}
function generateTimeQuestion(){
  const periodKeys=Object.keys(timePeriods),period=periodKeys[Math.floor(Math.random()*periodKeys.length)],hours=timePeriods[period].hours,hour=hours[Math.floor(Math.random()*hours.length)],minutes=state.timeMode==='basic'?[0,15,30,45]:[0,5,10,15,20,25,30,35,40,45,50,55],minute=minutes[Math.floor(Math.random()*minutes.length)];state.timeQuestion={period,hour,minute};state.timeAnswered=false;localStorage.setItem('spanishTimeQuestion',JSON.stringify(state.timeQuestion));renderTime()}
function renderTime(){
  if(!state.timeQuestion){generateTimeQuestion();return}const q=state.timeQuestion,p=timePeriods[q.period];$('#periodIcon').textContent=p.icon;$('#periodZh').textContent=p.zh;$('#hourHand').style.transform=`rotate(${(q.hour%12)*30+q.minute*.5}deg)`;$('#minuteHand').style.transform=`rotate(${q.minute*6}deg)`;$('#analogClock').setAttribute('aria-label',`${p.zh}${q.hour}点${String(q.minute).padStart(2,'0')}分`);$('#timeInput').value='';$('#timeInput').disabled=false;$('#timeFeedback').textContent='';$('#timeFeedback').className='time-feedback';$('#checkTime').innerHTML='检查回答 <span>↵</span>';$('#timeScore').textContent=`${state.timeScore} / ${state.timeDone}`;state.timeAnswered=false;$$('[data-time-mode]').forEach(b=>b.classList.toggle('active',b.dataset.timeMode===state.timeMode));state.lastSpanishInput=$('#timeInput');if(state.view==='time')setTimeout(()=>$('#timeInput').focus(),80);
}
function checkTime(){
  if(state.timeAnswered){generateTimeQuestion();return}const input=$('#timeInput').value.trim();if(!input){toast('先写下你的回答');return}const canonical=buildTimeAnswer(state.timeQuestion),correct=timeAnswerVariants(state.timeQuestion).includes(normalizeAnswer(input));state.timeAnswered=true;state.timeDone++;if(correct)state.timeScore++;localStorage.setItem('spanishTimeScore',state.timeScore);localStorage.setItem('spanishTimeDone',state.timeDone);$('#timeInput').disabled=true;$('#timeFeedback').innerHTML=correct?`<b>✓ 回答正确！</b><span>${canonical}</span>`:`<b>再记一次</b><span>正确答案：${canonical}</span>`;$('#timeFeedback').classList.add(correct?'good':'bad');$('#timeScore').textContent=`${state.timeScore} / ${state.timeDone}`;$('#checkTime').innerHTML='下一题 <span>→</span>';speak(canonical);
}
function revealTime(){const answer=buildTimeAnswer(state.timeQuestion);$('#timeInput').value=answer;$('#timeFeedback').innerHTML=`<b>参考答案</b><span>${answer}</span>`;state.timeAnswered=true;$('#checkTime').innerHTML='下一题 <span>→</span>';speak(answer)}

function newQuiz(customPool){let pool=customPool||getPool();if(pool.length<4)pool=words;state.quiz=sample(pool,Math.min(10,pool.length));state.quizIndex=0;state.quizScore=0;state.quizAnswered=false;renderQuiz()}
function renderQuiz(){
  const w=state.quiz[state.quizIndex];if(!w){newQuiz();return}const reverse=Math.random()<.35;state.quizReverse=reverse;
  $('#quizCounter').textContent=`问题 ${state.quizIndex+1} / ${state.quiz.length}`;$('#quizDirection').textContent=reverse?'选择正确西语':'选择正确中文';$('#quizQuestion').textContent=reverse?w.zh:w.es;
  $('#quizSpeak').hidden=reverse;
  const distractors=sample(words.filter(x=>x.id!==w.id&&x.topic===w.topic),3);while(distractors.length<3){const x=sample(words.filter(x=>x.id!==w.id&&!distractors.some(d=>d.id===x.id)),1)[0];distractors.push(x)}
  const opts=shuffle([w,...distractors]);$('#quizOptions').innerHTML=opts.map((o,i)=>`<button class="option" data-id="${o.id}"><span>${String.fromCharCode(65+i)}</span>${reverse?o.es:o.zh}</button>`).join('');
  $('#quizFeedback').textContent='';$('#quizFeedback').className='quiz-feedback';$('#quizNext').disabled=true;$('#quizScore').textContent=state.quizScore;$('#quizDone').textContent=state.quizIndex;
  $('#quizDots').innerHTML=state.quiz.map((_,i)=>`<i class="${i<state.quizIndex?'done':i===state.quizIndex?'current':''}"></i>`).join('');
  $$('#quizOptions .option').forEach(b=>b.onclick=()=>answerQuiz(Number(b.dataset.id)));
}
function answerQuiz(id){if(state.quizAnswered)return;state.quizAnswered=true;const w=state.quiz[state.quizIndex],correct=id===w.id;
  $$('#quizOptions .option').forEach(b=>{b.disabled=true;if(Number(b.dataset.id)===w.id)b.classList.add('correct');else if(Number(b.dataset.id)===id)b.classList.add('wrong')});
  if(correct){state.quizScore++;setRecord(w.id,{seen:true,recognition:2});if(getRecord(w.id).spelling)state.mistakes.delete(w.id);$('#quizFeedback').textContent='✓ 答对了，词义已标记为“认识”！';$('#quizFeedback').classList.add('good')}else{const r=getRecord(w.id);setRecord(w.id,{seen:true,recognition:Math.min(r.recognition,1)});state.mistakes.add(w.id);$('#quizFeedback').innerHTML=`答案：<b>${state.quizReverse?w.es:w.zh}</b>${w.note?` · ${w.note}`:''}`;$('#quizFeedback').classList.add('bad')}
  save();$('#quizScore').textContent=state.quizScore;$('#quizDone').textContent=state.quizIndex+1;$('#quizNext').disabled=false;$('#quizNext').textContent=state.quizIndex===state.quiz.length-1?'查看结果 →':'下一题 →';
}
function nextQuiz(){if(!state.quizAnswered)return;if(state.quizIndex===state.quiz.length-1){toast(`本轮 ${state.quizScore}/${state.quiz.length}，${state.quizScore>=8?'状态很好！':'再复习一轮吧'}`);newQuiz();return}state.quizIndex++;state.quizAnswered=false;renderQuiz()}

function renderWordList(target,list,empty){
  const el=$(target);if(!list.length){el.innerHTML=`<div class="empty-state"><b>${empty||'没有找到匹配词汇'}</b><span>换个主题或搜索词试试。</span></div>`;return}
  el.innerHTML=list.map(w=>{const level=wordLevel(w.id);return `<div class="word-row"><div class="word-es">${w.es}${w.priority?'<small>★ 必背</small>':''}</div><div class="word-zh">${w.zh}${w.note?` · ${w.note}`:''}</div><div class="word-topic">${topicName(w.topic)}</div><button class="word-audio" data-id="${w.id}" title="听发音" aria-label="播放 ${w.es} 的发音">♬</button><button class="word-status ${level.key}" data-id="${w.id}" title="${level.title}；点击调整等级">${level.label}</button></div>`}).join('');
  el.querySelectorAll('.word-audio').forEach(b=>b.onclick=()=>speak(words.find(w=>w.id===Number(b.dataset.id)).es));
  el.querySelectorAll('.word-status').forEach(b=>b.onclick=()=>{const id=Number(b.dataset.id),r=getRecord(id);if(r.spelling)setRecord(id,{seen:false,recognition:0,spelling:false});else if(r.recognition===2)setRecord(id,{seen:true,recognition:2,spelling:true});else if(r.recognition===1)setRecord(id,{seen:true,recognition:2});else setRecord(id,{seen:true,recognition:1});const level=wordLevel(id);b.className=`word-status ${level.key}`;b.textContent=level.label;b.title=`${level.title}；点击调整等级`;save()});
}
function renderLibrary(){const q=$('#searchInput').value.trim().toLowerCase();let list=state.topic==='all'?words:words.filter(w=>w.topic===state.topic);if(state.libraryPriority)list=list.filter(w=>w.priority);if(q)list=list.filter(w=>(w.es+' '+w.zh+' '+w.note).toLowerCase().includes(q));$('#resultCount').textContent=`显示 ${list.length} 个`;renderWordList('#libraryList',list)}
function renderMistakes(){const list=words.filter(w=>state.mistakes.has(w.id));renderWordList('#mistakesList',list,'现在没有错题，太棒了！');$('#retryMistakes').disabled=!list.length}
function renderGrammar(){$('#grammarGrid').innerHTML=spanishTips.map((g,i)=>`<article class="grammar-card" data-no="0${i+1}"><h3>${g[0]}</h3><p>${g[1]}</p><code>${g[2].replace(/\n/g,'<br>')}</code><p class="warning">✎ ${g[3]}</p></article>`).join('')}
function updateStats(){const records=words.map(w=>getRecord(w.id)),spelled=records.filter(r=>r.spelling).length,known=records.filter(r=>r.recognition===2&&!r.spelling).length,learning=records.filter(r=>r.recognition===1).length,pct=Math.round(spelled/words.length*100);$('#knownCount').textContent=spelled;$('#totalCount').textContent=words.length;$('#sidePercent').textContent=pct+'%';$('#sideProgress').style.width=pct+'%';$('#heroKnown').textContent=spelled;$('#statKnown').textContent=known;$('#statLearning').textContent=learning;$('#statSpelled').textContent=spelled;$('#statMistakes').textContent=state.mistakes.size;$('#mistakeBadge').textContent=state.mistakes.size;$('#priorityCount').textContent=words.filter(w=>w.priority).length;$('#libraryCount').textContent=words.length;const bars=10,filled=Math.round(pct/10);$('#miniBars').innerHTML=Array.from({length:bars},(_,i)=>`<i class="${i<filled?'done':''}" style="height:${10+((i*7)%20)}px"></i>`).join('')}
const titles={home:'今日冲刺',cards:'双向闪卡',spell:'单词拼写',conjugation:'动词变位',time:'时间练习',quiz:'快速测验',mistakes:'错题重练',library:'全部词汇',grammar:'西语小知识'};
function openView(view){state.view=view;$$('.view').forEach(v=>v.classList.toggle('active',v.id===view+'View'));$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));$('#pageTitle').textContent=titles[view];$('.sidebar').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});if(view==='cards')buildDeck();if(view==='spell')buildSpellDeck();if(view==='conjugation')renderVerb();if(view==='time')renderTime();if(view==='quiz')newQuiz();if(view==='mistakes')renderMistakes();if(view==='library')renderLibrary()}

function init(){
  renderTopicGrid();renderFilters('#cardFilters',()=>buildDeck(null,true));renderFilters('#spellFilters',()=>buildSpellDeck(null,true));renderFilters('#quizFilters',newQuiz);renderFilters('#libraryFilters',renderLibrary);renderGrammar();renderVerb();renderTime();$('#priorityToggle').checked=state.priority;$$('[data-direction]').forEach(b=>b.classList.toggle('active',b.dataset.direction===state.direction));updateStats();buildDeck();buildSpellDeck();newQuiz();renderLibrary();renderMistakes();
  $$('[data-view]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openView(b.dataset.view)}));$$('[data-start]').forEach(b=>b.onclick=()=>openView(b.dataset.start));
  $('#menuBtn').onclick=()=>$('.sidebar').classList.toggle('open');$('#flashcard').onclick=()=>{state.flipped=!state.flipped;$('#flashcard').classList.toggle('flipped',state.flipped)};$('#prevCard').onclick=()=>moveCard(-1);$('#nextCard').onclick=()=>moveCard(1);$('#shuffleBtn').onclick=()=>{state.deck=shuffle(state.deck);state.cardIndex=0;renderCard();toast('已打乱顺序')};
  $$('.rating-row button').forEach(b=>b.onclick=()=>rate(b.dataset.rating));$$('[data-direction]').forEach(b=>b.onclick=()=>{$$('[data-direction]').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.direction=b.dataset.direction;renderCard()});
  $('#cardSpeak').onclick=e=>{e.stopPropagation();speak(state.deck[state.cardIndex].es)};$('#cardSpeakBack').onclick=e=>{e.stopPropagation();speak(state.deck[state.cardIndex].es)};
  $('#spellListen').onclick=()=>speak(state.spellDeck[state.spellIndex].es);$('#spellCheck').onclick=checkSpelling;$('#spellReveal').onclick=revealSpelling;$('#spellInput').onfocus=e=>state.lastSpanishInput=e.currentTarget;$('#spellInput').onkeydown=e=>{if(e.ctrlKey&&e.key==='Enter'){e.preventDefault();revealSpelling()}else if((e.altKey&&e.key.toLowerCase()==='p')||(e.ctrlKey&&e.code==='Space')){e.preventDefault();speak(state.spellDeck[state.spellIndex].es)}else if((e.ctrlKey&&e.key==='ArrowRight')||e.key==='PageDown'){e.preventDefault();moveSpell(1)}else if((e.ctrlKey&&e.key==='ArrowLeft')||e.key==='PageUp'){e.preventDefault();moveSpell(-1)}else if(e.key==='Escape'){e.preventDefault();e.currentTarget.value=''}else if(e.key==='Enter'){e.preventDefault();checkSpelling()}};
  $('#verbListen').onclick=()=>speak(verbs[state.verbIndex].inf);$('#prevVerb').onclick=()=>moveVerb(-1);$('#nextVerb').onclick=()=>moveVerb(1);$('#checkVerb').onclick=checkVerb;$('#revealVerb').onclick=revealVerb;
  const verbInputs=$$('#conjugationGrid input');verbInputs.forEach((input,i)=>{input.onfocus=e=>state.lastSpanishInput=e.currentTarget;input.onkeydown=e=>{if(e.altKey&&e.key.toLowerCase()==='p'){e.preventDefault();speak(verbs[state.verbIndex].inf)}else if(e.ctrlKey&&e.key==='ArrowRight'){e.preventDefault();moveVerb(1)}else if(e.ctrlKey&&e.key==='ArrowLeft'){e.preventDefault();moveVerb(-1)}else if(e.key==='Enter'){e.preventDefault();if(i<verbInputs.length-1)verbInputs[i+1].focus();else checkVerb()}}});
  $$('.spanish-keyboard button').forEach(b=>{b.onmousedown=e=>e.preventDefault();b.onclick=()=>insertSpanishChar(b.dataset.char,b.closest('.spanish-keyboard').dataset.keyboardTarget)});
  $('#timeQuestionSpeak').onclick=()=>speak('¿Qué hora es?');$('#checkTime').onclick=checkTime;$('#revealTime').onclick=revealTime;$('#nextTime').onclick=generateTimeQuestion;$('#timeInput').onfocus=e=>state.lastSpanishInput=e.currentTarget;$('#timeInput').onkeydown=e=>{if(e.ctrlKey&&e.key==='Enter'){e.preventDefault();revealTime()}else if(e.altKey&&e.key.toLowerCase()==='p'){e.preventDefault();speak('¿Qué hora es?')}else if(e.key==='Enter'){e.preventDefault();checkTime()}};$$('[data-time-mode]').forEach(b=>b.onclick=()=>{state.timeMode=b.dataset.timeMode;localStorage.setItem('spanishTimeMode',state.timeMode);generateTimeQuestion()});
  $('#quizSpeak').onclick=()=>speak(state.quiz[state.quizIndex].es);$('#quizNext').onclick=nextQuiz;$('#searchInput').oninput=renderLibrary;$('#showPriority').onclick=()=>{state.libraryPriority=!state.libraryPriority;$('#showPriority').textContent=state.libraryPriority?'显示全部':'只看 ★ 必背';renderLibrary()};
  $('#retryMistakes').onclick=()=>{const list=words.filter(w=>state.mistakes.has(w.id));if(list.length){state.deck=shuffle(list);state.cardIndex=0;openView('cards');state.deck=shuffle(list);renderCard()}};
  $('#priorityToggle').onchange=e=>{state.priority=e.target.checked;state.deck=[];state.spellDeck=[];buildDeck(null,true);buildSpellDeck(null,true);if(state.view==='quiz')newQuiz();toast(state.priority?'重点优先已开启':'已恢复全部词汇')};
  $('#resetBtn').onclick=()=>{if(confirm('确定清空全部学习进度、熟练度、动词和时间练习成绩吗？')){state.progress={};state.mistakes.clear();state.deck=[];state.spellDeck=[];state.verbProgress={};state.verbIndex=0;state.timeScore=0;state.timeDone=0;state.timeQuestion=null;['spanishSprintSession','spanishVerbProgress','spanishVerbIndex','spanishTimeScore','spanishTimeDone','spanishTimeQuestion'].forEach(k=>localStorage.removeItem(k));save();buildDeck(null,true);buildSpellDeck(null,true);renderVerb();generateTimeQuestion();renderMistakes();renderLibrary();toast('进度已重置')}};
  document.addEventListener('keydown',e=>{if(state.view!=='cards'||['INPUT','TEXTAREA'].includes(document.activeElement.tagName))return;const key=e.key.toLowerCase();if(e.code==='Space'){e.preventDefault();$('#flashcard').click()}if(key==='1')rate('again');if(key==='2')rate('hard');if(key==='3')rate('known');if(['arrowright','d','k'].includes(key))moveCard(1);if(['arrowleft','a','j'].includes(key))moveCard(-1);if(key==='s')speak(state.deck[state.cardIndex].es)});
}
// The path is the sole entry point.

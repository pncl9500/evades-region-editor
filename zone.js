const useractive=navigator.userActivation;
const gamepadFn=navigator.getGamepads.bind(navigator);
const animate=(function(){return global.requestAnimationFrame||global.webkitRequestAnimationFrame||global.mozRequestAnimationFrame||global.oRequestAnimationFrame||global.msRequestAnimationFrame})();
const stopAnimating=(function(){return global.cancelAnimationFrame || global.webkitCancelRequestAnimationFrame || global.webkitCancelAnimationFrame ||global.mozCancelRequestAnimationFrame || global.mozCancelAnimationFrame ||global.oCancelRequestAnimationFrame || global.oCancelAnimationFrame ||global.msCancelRequestAnimationFrame || global.msCancelAnimationFrame})();
//Cam.guiScale
const settings={
  local: localStorage,
	get language(){
		return Number(this.local.language??"0");
	},set language(e){
		return this.local.language=e;
	},get heroType(){
		return parseInt(this.local.herotype??0);
	},set heroType(e){
		return this.local.herotype=e;
	},get interfaceScale(){
		return parseFloat(this.local.interfaceScale??1);
	},set interfaceScale(e){
		this.local.interfaceScale=clamp(parseFloat(e),0.4,1);
	},get snapX(){
		return parseInt(this.local.snapX??16);
	},set snapX(e){
		this.local.snapX=clamp(parseInt(e),1,32);
	},get snapY(){
		return parseInt(this.local.snapY??16);
	},set snapY(e){
		this.local.snapY=clamp(parseInt(e),1,32);
	},get realTime(){
		return this.local.realTime=="true";
	},set realTime(e){
		this.local.realTime=e;
	},get modifierFPE(){
		return this.local.fpe=="true";
	},set modifierFPE(e){
		this.local.fpe=e;
	},get enemyOutlines(){
		return (this.local.enemyOutlines??"true")=="true";
	},set enemyOutlines(e){
		this.local.enemyOutlines=e;
	},get enemyProjectileOutlines(){
		return (this.local.enemyProjectileOutlines??"false")=="true";
	},set enemyProjectileOutlines(e){
		this.local.enemyProjectileOutlines=e;
	},get abilityParticles(){
		return (this.local.abilityParticles??"true")=="true";
	},set abilityParticles(e){
		this.local.abilityParticles=e;
	},get displayGameplayHints(){
		return (this.local.displayGameplayHints??"true")=="true";
	},set displayGameplayHints(e){
		this.local.displayGameplayHints=e;
	},get confetti(){
		return this.local.confetti=="true";
	},set confetti(e){
		this.local.confetti=e;
	},get backgroundObjects(){
		return (this.local.backgroundObjects??"true")=="true";
	},set backgroundObjects(e){
		this.local.backgroundObjects=e;
	},get tileMode(){
		return parseInt(this.local.tileMode??0)
	},set tileMode(e){
		this.local.tileMode=e;
	},get displayEnergyBars(){
		return parseInt(this.local.displayEnergyBars??0)
	},set displayEnergyBars(e){
		this.local.displayEnergyBars=e;
	},get frameRate(){
		return parseInt(this.local.frameRate??60);
	},set frameRate(e){
		this.local.frameRate=e;
	},get toggleMouseMovement(){
		return (this.local.toggleMouseMovement??"true")=="true";
	},set toggleMouseMovement(e){
		this.local.toggleMouseMovement=e;
	},get hat(){
		return Number(this.local.hat??0);
	},set hat(e){
		this.local.hat=e;
	},get gem(){
		return Number(this.local.gem??0);
	},set gem(e){
		this.local.gem=e;
	},get body(){
		return Number(this.local.body??0);
	},set body(e){
		this.local.body=e;
	},get enableMouseMovement(){
		return this.local.enableMouseMovement=="true";
	},set enableMouseMovement(e){
		this.local.enableMouseMovement=e;
	},get legacySpeedUnits(){
		return (this.local.legacySpeedUnits??"true")=="true";
	},set legacySpeedUnits(e){
		this.local.legacySpeedUnits=e;
	},get fadingEffects(){
		return (this.local.fadingEffects??"true")=="true";
	},set fadingEffects(e){
		this.local.fadingEffects=e;
	},get pelletTransparency(){
		return parseFloat(this.local.pelletTransparency??0);
	},set pelletTransparency(e){
		this.local.pelletTransparency=clamp(parseFloat(e),0,1);
	},get joystickDeadzone(){
		return parseFloat(this.local.joystickDeadzone??0.05);
	},set joystickDeadzone(e){
		this.local.joystickDeadzone=clamp(parseFloat(e),0,1);
	},get displayTimer(){
		return this.local.displayTimer=="true";
	},set displayTimer(e){
		this.local.displayTimer=e;
	},get displayLeaderboard(){
		return (this.local.displayLeaderboard??"true")=="true";
	},set displayLeaderboard(e){
		this.local.displayLeaderboard=e;
	},get displayChat(){
		return (this.local.displayChat??"true")=="true";
	},set displayChat(e){
		this.local.displayChat=e;
	}
};

(()=>{for(var i in global){
  if(i.toLowerCase() === "open" || i.toLowerCase().includes("inner")||i.toLowerCase().includes("set")||i.toLowerCase().startsWith("on")||i=="fetch"||i=="performance")continue;
  delete global[i];
}})();

const assetsLoaded={count:0};
function getAbilityIndex(name){return EvadesConfig.abilities.findIndex(e=>e.name==name)}
function getEffectIndex(name){return EvadesConfig.effects.findIndex(e=>e.name==name)}
const loadImage = function(src){
  if(typeof src!="string")return;
  if(src.endsWith(".mp4")){
    let vid=document.createElement("video");
    vid.src=src;
    vid.onerror = () => {
      console.log("Unable to load video",src);
    }
    vid.oncanplaythrough = () => {
      assetsLoaded.count++;
	  vid.oncanplaythrough=null;
    }
    return vid;
  }
  if(src.endsWith(".mp3")||src.endsWith(".ogg")){
    let aud=new Audio();
    aud.src=src;
    aud.onerror = () => {
      console.log("Unable to load audio",src);
    }
    aud.oncanplaythrough = () => {
      assetsLoaded.count++;
	  aud.oncanplaythrough=null;
    }
    return aud;
  }
  let image = new Image();
  image.src = src;
  image.onerror = () => {
    console.log("ERROR AT", image.src);
  }
  image.onload = () => {
    assetsLoaded.count++;
	image.onload=null;
  }
  return image;
}
isActive=true;
settings.local.activatedExtensions??="";
const activated_extensions=settings.local.activatedExtensions.split(",");
if(activated_extensions.indexOf("")!=-1)activated_extensions.splice(activated_extensions.indexOf(""),1)
activated_extensions.map(e=>{
	document.getElementById(e).checked=true;
})
var usingPifary=activated_extensions.indexOf("pifary-dev")!=-1;
var usingPncl9500=activated_extensions.indexOf("pncl9500")!=-1;
var usingFPents=activated_extensions.indexOf("rotatedWallAssets")!=-1;
var usingAutomationTools=activated_extensions.indexOf("automationTools")!=-1;
//usingVanillaEnemySet should be set to false when a custom enemy type (from a sandbox, not in evades.io) is added.
//causes the addon enemy properties folder to show up (even if there are no properties in the folder, but its probably fine)
var usingVanillaEnemySet = !(usingPifary || usingPncl9500 || usingFPents);
global.addEventListener("blur",function () {
  isActive = false;
})
global.addEventListener("focus",function () {
  isActive = true;
})
function Base64_To_Ascii(str) {
  return str.replace(/=/g, "").split("").map(e => {
    var char = 0;
    if (e.charCodeAt(0) > 64 && e.charCodeAt(0) < 96) char = e.charCodeAt(0) - 65;
    if (e.charCodeAt(0) > 96) char = e.charCodeAt(0) - 71;
    if (e.charCodeAt(0) < 64) char = e.charCodeAt(0) + 4;
    if ("+" == e) char = 62;
    if ("/" == e) char = 63;
    char = char.toString(2);
    return `${"0".repeat(6 - char.length)}${char}`
  }).join("").match(/(........)/g).map(e => { return String.fromCharCode(parseInt(e, 2)) }).join("")
}
function AsciiToBase64(str){
    var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");
    var t = str.split("").map(e=>e.charCodeAt());
    var res=[];
    if(t.filter(e=>(e>255)).length)throw"Unicode character is outside of Latin range (0 - FF)";
    for(var i=0;i<t.length;i+=3){
        res.push(t[i]>>2&0b111111);
        res.push((t[i]<<4&0b110000)+(t[i+1]>>4&0b1111));
        (t[i+1]!=void 0)&&res.push((t[i+1]<<2&0b111100)+(t[i+2]>>6&0b11));
        (t[i+2]!=void 0)&&res.push(t[i+2]&0b111111);
    }
	res=res.map(e=>map[e]);
	while(res.length%4!=0)res.push("=");
    return res.join("");
}
function CreateSpawnerProp(propName,value="",step=1,type="number",inputEvent){
  function E(value){
    if("" === value)return void 0;
    return value;
  }
  const input=document.createElement("input");
  const LegacyCheck={
    speed:true,
    turn_speed:true,
    turn_acceleration:true,
    shot_acceleration:true,
    projectile_speed:true,
    speed_loss:true,
    increment:true,
    gravity:true,
    repulsion:true,
    quicksand_strength:true,
  };
  input.type=type;
  if(type=="number")input.step=LegacyCheck[propName] ? step/(30**settings.legacySpeedUnits):step;
  if(type=="checkbox")input.checked=Boolean(value),type="switch";
  else input.value=LegacyCheck[propName] ? ((value/30**settings.legacySpeedUnits)||""):value;
  input.oninput=function(){
    let V = E(this.type=="checkbox"?this.checked:this.value);
    if(void 0 === V)point1[propName]=V;else inputEvent.call(this,LegacyCheck[propName],V*30**settings.legacySpeedUnits,V);
    spawnEntities();
  }
  return createProperty(formatString(`editor.property.${propName}`),input,type);
}
function createExistingProps(propName,point1,propCreator,propsList,li){
  let newEl, xStep = {
    speed: 0.01,
    projectile_speed: 0.01,
    quicksand_strength: 0.01,
    speed_loss: 0.01,
    regen_loss: 0.01,
    increment: 0.01,
    slow: 0.01,
    drain: 0.01,
    growth_multiplier: 0.01,
    gravity: 0.01,
    repulsion: 0.01,
    turn_speed: 0.01,
    turn_acceleration: 0.01,
    shot_acceleration: 0.01,
  };
  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.onclick=function(event){
  	newEl.remove();
    this.selectEl.children[1+propsList.indexOf(newEl.getAttribute("data-type"))].removeAttribute("hidden");
    delete point1[newEl.getAttribute("data-type")];
  	spawnEntities();
  	event.stopPropagation();
  };
  if(!propName)return;
  switch(propName){
    //Text
    case"x":
    case"y":{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],"text",function(Legacy,U,V){
        if(V.split(",").length==1&&!isNaN(V))
          this.value=point1[propName]=Number(V);
        else if(V.split(",").map(e=>parseInt(e)).map(e=>parseInt(e)).filter(e=>!isNaN(e)).length==2)
          point1[propName]=V;
  	  }]);
    };break;
    case"angle":{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName] instanceof Array ? point1[propName].join(", ") : point1[propName],xStep[propName],"text",function(Legacy,U,V){
        if(V.split(",").length==1&&!isNaN(V))
          this.value=point1[propName]=Number(V);
        else if(V.split(",").map(e=>parseInt(e)).map(e=>parseInt(e)).filter(e=>!isNaN(e)).length>1){
          point1[propName]=V.split(",").map(vv=>{
            let newVal = Math.max(0,parseInt(vv));
            if(isNaN(newVal))return 1;
            return newVal;
          });
          this.value=point1[propName].join(", ");
        }
      }]);
    };break;
    case"pattern":{
      newEl = createProperty(formatString(`editor.property.${propName}`),null,"select",{value:point1[propName],event:e=>{point1[propName]=e;spawnEntities()},selectOptions:[[formatString("editor.pattern.none"),void 0],...['spiral','twinspiral','quadspiral','cone','twincone','cone_edges','twin','singlebig'].map(e=>[formatString("editor.pattern."+e),e])],selectType:"text"});
    };break;
    //Switches
    case"immune":
    case"randomize_state":{
      newEl = createProperty(formatString(`editor.property.${propName}`),null,"select",{value:point1[propName],event:e=>{point1[propName]=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.none"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"});
    };break;
    case"powered":
    case"small_bullets":
    case"spawn_top":
    case"hard_mode":
    case"reverse":
    case"horizontal":
    case"move_clockwise":
    case"ignore_invulnerability":{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],"checkbox",function(Legacy,U,V){
        this.checked=point1[propName]=Boolean(V);
  	  }]);
    };break;
    //Numbers
    case"growth_multiplier":
    case"projectile_radius":
    case"projectile_duration":
    case"player_detection_radius":
    case"slash_radius":
    case"effect_radius":
    case"home_range":
    case"circle_size":
    case"shot_interval":
    case"pause_interval":
    case"pause_duration":
    case"release_interval":
    case"release_time":
    case"switch_interval":
    case"switch_time":
    case"recharge":{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
        this.value=point1[propName]=Math.max(V,0);
  	  }]);
    };break;
    case"direction":{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
        this.value=point1[propName]=clamp(V,-1,1);
  	  }]);
    };break;/*{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
        this.value=point1[propName]=clamp(V,0,1);
  	  }]);
    };break;*/
    case"cone_angle":{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
        this.value=point1[propName]=V%360;
  	  }]);
    };break;
    case"health":{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
        this.value=point1[propName]=Math.max(V,1);
  	  }]);
    };break;
    case"spawner":{
      if(point1.spawner && !(point1.spawner[0].types[0] instanceof Object))point1.spawner=point1.spawner.map(p=>createPoint(p));
	    const spawnerEl = createFolder(formatString("editor.property.spawner"), point1.spawner.map(e=>(createSummonerSpawnerGUI(e,point1),e.element)));
	    if (point1.spawner.length < 1) spawnerEl.classList.add("min");
	    const addBtn2 = document.createElement("button");
	    spawnerEl.classList.add("array");
	    addBtn2.classList.add("add");
	    addBtn2.addEventListener("click",()=>{
	    	let point2 = createPoint({types:["normal"],radius:18,speed:150,count:5});
	    	point1.spawner.push(point2);
	    	createSummonerSpawnerGUI(point2,point1);
	    	if(point1.spawner[0].element.parentElement){
	    		point1.spawner[0].element.parentElement.parentElement.children[1].appendChild(point2.element);
	    		point1.spawner[0].element.parentElement.parentElement.classList.remove("min");
	    	}else{
	    		spawnerEl.children[1].appendChild(point2.element);
	    		spawnerEl.classList.remove("min");
	    	}
	    	spawnEntities()
	    });
	    spawnerEl.appendChild(addBtn2);
      newEl = spawnerEl;
    };break;
    case"speed":
    case"turn_speed":
    case"turn_acceleration":
    case"shot_acceleration":
    case"projectile_speed":
    case"speed_loss":
    case"increment":
    case"gravity":
    case"repulsion":
    case"quicksand_strength":{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
        point1[propName]=Number(Legacy?U:V);
        this.value=Number(Legacy?V:U);
  	  }]);
    };break;
    default:{
      newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
        this.value=point1[propName]=Number(V);
  	  }]);
    };break;
  };
  newEl.setAttribute("data-type",propName);
  let selectEl = propCreator.querySelector("select");
  selectEl.children[1+propsList.indexOf(propName)].setAttribute("hidden","");
  remove.selectEl=selectEl;
  newEl.children[0].appendChild(remove);
  li.children[1].insertBefore(newEl, propCreator);
}
function createSummonerSpawnerGUI(point1,Zone,doesCreateElement=true){
	delete point1.element;
	list=['barrier_radius',"small_bullets","spawner","slash_radius",'blocking_radius','circle_size','cone_angle','count','direction','disabling_radius','draining_radius','enlarging_radius','experience_drain_radius','freezing_radius','gravity','gravity_radius','growth_multiplier','hard_mode','horizontal','ignore_invulnerability','immune','lava_radius','magnetic_nullification_radius','magnetic_reduction_radius','move_clockwise','pattern','pause_duration','pause_interval','player_detection_radius','powered','projectile_duration','projectile_radius','projectile_speed','push_direction','quicksand_radius','quicksand_strength','radar_radius','radius','reducing_radius','regen_loss','release_interval','release_time','repelling_radius','repulsion','reverse','shot_acceleration','shot_interval','slippery_radius','slowing_radius','effect_radius','spawn_top','speed','speed_loss','toxic_radius','turn_acceleration','turn_speed','types','switch_interval','switch_time','randomize_state','slow','drain','home_range','increment','recharge'];
	function createExistingProps(propName,point1,propCreator,propsList,li){
    let newEl, xStep = {
      speed: 0.01,
      projectile_speed: 0.01,
      quicksand_strength: 0.01,
      speed_loss: 0.01,
      regen_loss: 0.01,
      increment: 0.01,
      slow: 0.01,
      drain: 0.01,
      growth_multiplier: 0.01,
      gravity: 0.01,
      repulsion: 0.01,
      turn_speed: 0.01,
      turn_acceleration: 0.01,
      shot_acceleration: 0.01,
    };
    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.onclick=function(event){
    	newEl.remove();
      this.selectEl.children[1+propsList.indexOf(newEl.getAttribute("data-type"))].removeAttribute("hidden");
      delete point1[newEl.getAttribute("data-type")];
    	spawnEntities();
    	event.stopPropagation();
    };
    if(!propName)return;
    switch(propName){
      //Text
      case"count":{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName] instanceof Array ? point1[propName].join(", ") : point1[propName],xStep[propName],"text",function(Legacy,U,V){
          if(V.split(",").length==1&&!isNaN(V))
            this.value=point1[propName]=Number(V);
          else if(V.split(",").map(e=>parseInt(e)).map(e=>parseInt(e)).filter(e=>!isNaN(e)).length>1){
            point1[propName]=V.split(",").map(vv=>{
              let newVal = Math.max(0,parseInt(vv));
              if(isNaN(newVal))return 1;
              return newVal;
            });
            this.value=point1[propName].join(", ");
          }
    	  }]);
      };break;
      case"pattern":{
        newEl = createProperty(formatString(`editor.property.${propName}`),null,"select",{value:point1[propName],event:e=>{point1[propName]=e;spawnEntities()},selectOptions:[[formatString("editor.pattern.none"),void 0],...['spiral','twinspiral','quadspiral','cone','twincone','cone_edges','twin','singlebig'].map(e=>[formatString("editor.pattern."+e),e])],selectType:"text"});
      };break;
      //Switches
      case"immune":
      case"randomize_state":{
        newEl = createProperty(formatString(`editor.property.${propName}`),null,"select",{value:point1[propName],event:e=>{point1[propName]=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.none"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"});
      };break;
      case"powered":
      case"small_bullets":
      case"spawn_top":
      case"hard_mode":
      case"reverse":
      case"horizontal":
      case"move_clockwise":
      case"ignore_invulnerability":{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],"checkbox",function(Legacy,U,V){
          this.checked=point1[propName]=Boolean(V);
    	  }]);
      };break;
      //Numbers
      case"growth_multiplier":
      case"projectile_radius":
      case"projectile_duration":
      case"player_detection_radius":
      case"slash_radius":
      case"effect_radius":
      case"home_range":
      case"circle_size":
      case"shot_interval":
      case"pause_interval":
      case"pause_duration":
      case"release_interval":
      case"release_time":
      case"switch_interval":
      case"switch_time":
      case"recharge":{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
          this.value=point1[propName]=Math.max(V,0);
    	  }]);
      };break;
      case"direction":{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
          this.value=point1[propName]=clamp(V,-1,1);
    	  }]);
      };break;/*{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
          this.value=point1[propName]=clamp(V,0,1);
    	  }]);
      };break;*/
      case"cone_angle":{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
          this.value=point1[propName]=V%360;
    	  }]);
      };break;
      case"health":{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
          this.value=point1[propName]=Math.max(V,1);
    	  }]);
      };break;
      case"spawner":{
        if(point1.spawner && !(point1.spawner[0].types[0] instanceof Object))point1.spawner=point1.spawner.map(p=>createPoint(p));
  	    const spawnerEl = createFolder(formatString("editor.property.spawner"), point1.spawner.map(e=>(createSummonerSpawnerGUI(e,point1),e.element)));
  	    if (point1.spawner.length < 1) spawnerEl.classList.add("min");
  	    const addBtn2 = document.createElement("button");
  	    spawnerEl.classList.add("array");
  	    addBtn2.classList.add("add");
  	    addBtn2.addEventListener("click",()=>{
  	    	let point2 = createPoint({types:["normal"],radius:18,speed:150,count:5});
  	    	point1.spawner.push(point2);
  	    	createSummonerSpawnerGUI(point2,point1);
  	    	if(point1.spawner[0].element.parentElement){
  	    		point1.spawner[0].element.parentElement.parentElement.children[1].appendChild(point2.element);
  	    		point1.spawner[0].element.parentElement.parentElement.classList.remove("min");
  	    	}else{
  	    		spawnerEl.children[1].appendChild(point2.element);
  	    		spawnerEl.classList.remove("min");
  	    	}
  	    	spawnEntities()
  	    });
  	    spawnerEl.appendChild(addBtn2);
        newEl = spawnerEl;
      };break;
      case"speed":
      case"turn_speed":
      case"turn_acceleration":
      case"shot_acceleration":
      case"projectile_speed":
      case"speed_loss":
      case"increment":
      case"gravity":
      case"repulsion":
      case"quicksand_strength":{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
          point1[propName]=Number(Legacy?U:V);
          this.value=Number(Legacy?V:U);
    	  }]);
      };break;
      default:{
        newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
          this.value=point1[propName]=Number(V);
    	  }]);
      };break;
    };
    newEl.setAttribute("data-type",propName);
    let selectEl = propCreator.querySelector("select");
    selectEl.children[1+propsList.indexOf(propName)].setAttribute("hidden","");
    remove.selectEl=selectEl;
    newEl.children[0].appendChild(remove);
    li.children[1].insertBefore(newEl, propCreator);
  }
  function prop(self,x){
		return self[x]??defaultValues.spawner[x];
	}
	for(var i in point1){
		if(list.indexOf(i)==-1)customAlert("Unknown spawner property: "+i,10,"#FFF");
	}
  if(!doesCreateElement)return;
  // Treat empty strings as undefined
	function CreateInput(value,step,type="number",inputEvent,input){
		return(input=document.createElement("input"),type=="checkbox")?(input.checked=value??false):
    (input.value=value??"",input.step=step??1),input.addEventListener("input",inputEvent),input;
	}
	const	Radius = CreateInput(prop(point1,"radius"),null,null,_=>{
		point1.radius=_.target.value=Math.max(_.target.value,0); // To prevent crashing the renderer, the minimum radius is assigned to 0.
		spawnEntities();/* From Pifary-dev: Server will crash if radius will not be specified (got confirmation from evades devs) */
	}),	point2El = createFolder(formatString("editor.property.types"), point1.types.map(e=>(customTypeGUI(e,point1),e.element))),
		addBtn = document.createElement("button");
	point2El.classList.add("array");
	addBtn.classList.add("add");
	addBtn.addEventListener("click",_=>{
		const point3 = createpoint2(void 0,point1);
		point1.types.push(point3);
		customTypeGUI(point3,point1);
		point2El.children[1].appendChild(point3.element);
		point2El.classList.remove("min");
		spawnEntities();
	});
  let propCreator, li;
	point2El.appendChild(addBtn);
  let propsList = ['circle_size', 'spawner', 'cone_angle', 'count', 'direction', 'drain', 'effect_radius', 'gravity', 'growth_multiplier', 'hard_mode', 'home_range', 'horizontal', 'ignore_invulnerability', 'immune', 'increment', 'move_clockwise', 'pattern', 'pause_duration', 'pause_interval', 'player_detection_radius', 'powered', 'projectile_duration', 'projectile_radius', 'projectile_speed', 'push_direction', 'quicksand_strength', 'recharge', 'regen_loss', 'release_interval', 'release_time', 'repulsion', 'reverse', 'shot_acceleration', 'shot_interval', 'slash_radius', 'slow', 'spawn_top', 'speed', 'speed_loss', 'switch_interval', 'switch_time', 'randomize_state', 'turn_acceleration', 'turn_speed', 'small_bullets'].sort();
	if(point1.types.length<2)point2El.classList.add("min");
	li=createFolder(formatString("editor.spawner"),[
		point2El,
		createProperty(formatString("editor.property.radius"),Radius,"number"),
    propCreator=createProperty("Spawner Prop",null,"createProperty",{event(){},add(v,el){
      let newEl, xStep = {
        speed: 0.01,
        projectile_speed: 0.01,
        quicksand_strength: 0.01,
        speed_loss: 0.01,
        regen_loss: 0.01,
        increment: 0.01,
        slow: 0.01,
        drain: 0.01,
        growth_multiplier: 0.01,
        gravity: 0.01,
        repulsion: 0.01,
        turn_speed: 0.01,
        turn_acceleration: 0.01,
        shot_acceleration: 0.01,
      };
      let propName = v[1];
	    const remove = document.createElement("button");
	    remove.classList.add("remove");
	    remove.classList.add("temp");
	    remove.onclick=function(event){
	    	newEl.remove();
        this.selectEl.children[1+propsList.indexOf(newEl.getAttribute("data-type"))].removeAttribute("hidden");
        delete point1[newEl.getAttribute("data-type")];
	    	spawnEntities();
	    	event.stopPropagation();
	    };
      if(!propName)return;
      point1[propName]=defaultValues.spawner[propName];
      switch(propName){
        //Text
        case"x":
        case"y":
        case"angle":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],"text",function(Legacy,U,V){
            if(V.split(",").length==1&&!isNaN(V))
              this.value=point1[propName]=Number(V);
            else if(V.split(",").map(e=>parseInt(e)).map(e=>parseInt(e)).filter(e=>!isNaN(e)).length==2)
              point1[propName]=V;
      	  }]);
        };break;
        case"pattern":{
          newEl = createProperty(formatString(`editor.property.${propName}`),null,"select",{value:point1[propName],event:e=>{point1[propName]=e;spawnEntities()},selectOptions:[[formatString("editor.pattern.none"),void 0],...['spiral','twinspiral','quadspiral','cone','twincone','cone_edges','twin','singlebig'].map(e=>[formatString("editor.pattern."+e),e])],selectType:"text"});
        };break;
        //Switches
        case"immune":
        case"randomize_state":{
          newEl = createProperty(formatString(`editor.property.${propName}`),null,"select",{value:point1[propName],event:e=>{point1[propName]=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.none"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"});
        };break;
        case"powered":
        case"small_bullets":
        case"spawn_top":
        case"hard_mode":
        case"reverse":
        case"horizontal":
        case"move_clockwise":
        case"ignore_invulnerability":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],"checkbox",function(Legacy,U,V){
            this.value=point1[propName]=Boolean(V);
      	  }]);
        };break;
        //Numbers
        case"projectile_radius":
        case"projectile_duration":
        case"player_detection_radius":
        case"slash_radius":
        case"effect_radius":
        case"home_range":
        case"circle_size":
        case"shot_interval":
        case"pause_interval":
        case"pause_duration":
        case"release_interval":
        case"release_time":
        case"switch_interval":
        case"switch_time":
        case"growth_multiplier":
        case"recharge":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=Math.max(V,0);
      	  }]);
        };break;
        case"direction":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=clamp(V,-1,1);
      	  }]);
        };break;/*{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=clamp(V,0,1);
      	  }]);
        };break;*/
        case"cone_angle":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=V%360;
      	  }]);
        };break;
        case"health":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=Math.max(V,1);
      	  }]);
        };break;
        case"spawner":{
	        const spawnerEl = createFolder(formatString("editor.property.spawner"), point1.spawner.map(e=>(createSummonerSpawnerGUI(e,point1),e.element)));
	        if (point1.spawner.length < 1) spawnerEl.classList.add("min");
	        const addBtn2 = document.createElement("button");
	        spawnerEl.classList.add("array");
	        addBtn2.classList.add("add");
	        addBtn2.addEventListener("click",()=>{
	        	let point2 = createPoint({types:["normal"],radius:18,speed:150});
	        	point1.spawner.push(point2);
	        	createSummonerSpawnerGUI(point2,point1);
	        	if(point1.spawner[0].element.parentElement){
	        		point1.spawner[0].element.parentElement.parentElement.children[1].appendChild(point2.element);
	        		point1.spawner[0].element.parentElement.parentElement.classList.remove("min");
	        	}else{
	        		spawnerEl.children[1].appendChild(point2.element);
	        		spawnerEl.classList.remove("min");
	        	}
	        	spawnEntities()
	        });
	        spawnerEl.appendChild(addBtn2);
          newEl = spawnerEl;
        };break;
        case"speed":
        case"turn_speed":
        case"turn_acceleration":
        case"shot_acceleration":
        case"projectile_speed":
        case"speed_loss":
        case"increment":
        case"gravity":
        case"repulsion":
        case"quicksand_strength":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            point1[propName]=Number(Legacy?U:V);
            this.value=Number(Legacy?V:U);
      	  }]);
        };break;
        default:{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=Number(V);
      	  }]);
        };break;
      };
      newEl.setAttribute("data-type",propName);
      let selectEl = el.previousSibling;
      selectEl.children[selectEl.selectedIndex].setAttribute("hidden","");
      selectEl.selectedIndex=0;
      remove.selectEl=selectEl;
	    newEl.children[0].appendChild(remove);
      li.children[1].insertBefore(newEl, propCreator);
    },list:[["",null],...propsList.sort().map(e=>[formatString("editor.property."+e),e])],selectType:"creator"}),
	],!0);li.classList.add("spawners");
  for(var k in point1){
    if(-1 !== "types,radius".split(",").indexOf(k))continue;
    createExistingProps(k,point1,propCreator,propsList,li);
  }
	var foldersInjectedByAddon = [];
	//if pifary were to have an enemy with a custom (non aura radius) property, similar code to the code below would be put here.
	for (var i = 0; i < foldersInjectedByAddon.length; i++){
		li.lastElementChild.appendChild(foldersInjectedByAddon[i]);
	}
	li.children[0].classList.add("counter");
	const remove = document.createElement("button"),
		clone = document.createElement("button");
	li.children[0].appendChild(remove);
	li.children[0].appendChild(clone);
	remove.classList.add("remove");
	remove.addEventListener("click", e => {
		Zone.spawner[Zone.spawner.indexOf(point1)].element.remove();
		Zone.spawner.splice(Zone.spawner.indexOf(point1), 1);
		spawnEntities();
		e.stopPropagation();
	});
	clone.classList.add("clone");
	clone.addEventListener("click",e=>{
		const spawner=createPoint(cloneSpawner(Zone.spawner[Zone.spawner.indexOf(point1)]));
		Zone.spawner.push(spawner);
		createSummonerSpawnerGUI(spawner,Zone);
		Zone.spawner[0].element.parentElement.parentElement.children[1].appendChild(spawner.element);
		spawnEntities()
		e.stopPropagation();
	});
	point1.element=li;
}
function createSPAWNERgui(point1,Zone,doesCreateElement=true){
	delete point1.element;
		list=['angle','barrier_radius',"spawner","small_bullets","slash_radius",'blocking_radius','circle_size','cone_angle','count','direction','disabling_radius','draining_radius','enlarging_radius','experience_drain_radius','freezing_radius','gravity','gravity_radius','growth_multiplier','hard_mode','horizontal','ignore_invulnerability','immune','lava_radius','magnetic_nullification_radius','magnetic_reduction_radius','move_clockwise','pattern','pause_duration','pause_interval','player_detection_radius','powered','projectile_duration','projectile_radius','projectile_speed','push_direction','quicksand_radius','quicksand_strength','radar_radius','radius','reducing_radius','regen_loss','release_interval','release_time','repelling_radius','repulsion','reverse','shot_acceleration','shot_interval','slippery_radius','slowing_radius','effect_radius','spawn_top','speed','speed_loss','toxic_radius','turn_acceleration','turn_speed','types','x','y','switch_interval','switch_time','randomize_state','slow','drain','home_range','increment','recharge'];
	function prop(self,x){
		return self[x]??defaultValues.spawner[x];
	}
	for(var i in point1){
		if(list.indexOf(i)==-1)customAlert("Unknown spawner property: "+i,10,"#FFF");
	}
  if(!doesCreateElement)return;
  // Treat empty strings as undefined
	function CreateInput(value,step,type="number",inputEvent,input){
		return(input=document.createElement("input"),type=="checkbox")?(input.checked=value??false):
    (input.value=value??"",input.step=step??1),input.addEventListener("input",inputEvent),input;
	}
	const	Radius = CreateInput(prop(point1,"radius"),null,null,_=>{
		point1.radius=_.target.value=Math.max(_.target.value,0); // To prevent crashing the renderer, the minimum radius is assigned to 0.
		spawnEntities();/* From Pifary-dev: Server will crash if radius will not be specified (got confirmation from evades devs) */
	}),	point2El = createFolder(formatString("editor.property.types"), point1.types.map(e=>(customTypeGUI(e,point1),e.element))),
		addBtn = document.createElement("button"),
		centerXbtn = document.createElement("button"),
		centerYbtn = document.createElement("button");
	centerXbtn.classList.add("centerX");
	centerYbtn.classList.add("centerY");
	point2El.classList.add("array");
	addBtn.classList.add("add");
	addBtn.addEventListener("click",_=>{
		const point3 = createpoint2(void 0,point1);
		point1.types.push(point3);
		customTypeGUI(point3,point1);
		point2El.children[1].appendChild(point3.element);
		point2El.classList.remove("min");
		spawnEntities();
	}),	centerXbtn.addEventListener("click",_=>{
    if(!li.querySelector("*[data-type=x] input"))createExistingProps("x",point1,propCreator,propsList,li);
    li.querySelector("*[data-type=x] input").value=point1.x=Zone.x+Zone.width/2;
		spawnEntities();
	}),	centerYbtn.addEventListener("click",_=>{
    if(!li.querySelector("*[data-type=y] input"))createExistingProps("y",point1,propCreator,propsList,li);
    li.querySelector("*[data-type=y] input").value=point1.y=Zone.y+Zone.height/2;
		spawnEntities();
	});
  let propCreator, li;
	point2El.appendChild(addBtn);
  let propsList = ['angle', 'circle_size', 'spawner', 'cone_angle', 'count', 'direction', 'drain', 'effect_radius', 'gravity', 'growth_multiplier', 'hard_mode', 'home_range', 'horizontal', 'ignore_invulnerability', 'immune', 'increment', 'move_clockwise', 'pattern', 'pause_duration', 'pause_interval', 'player_detection_radius', 'powered', 'projectile_duration', 'projectile_radius', 'projectile_speed', 'push_direction', 'quicksand_strength', 'recharge', 'regen_loss', 'release_interval', 'release_time', 'repulsion', 'reverse', 'shot_acceleration', 'shot_interval', 'slash_radius', 'slow', 'spawn_top', 'speed', 'speed_loss', 'switch_interval', 'switch_time', 'randomize_state', 'turn_acceleration', 'turn_speed', 'x', 'y', 'small_bullets'].sort();
	if(usingAutomationTools)point2El.appendChild(centerXbtn),point2El.appendChild(centerYbtn);
	if(point1.types.length<2)point2El.classList.add("min");
	li=createFolder(formatString("editor.spawner"),[
		point2El,
		createProperty(formatString("editor.property.radius"),Radius,"number"),
    propCreator=createProperty("Spawner Prop",null,"createProperty",{event(){},add(v,el){
      let newEl, xStep = {
        speed: 0.01,
        projectile_speed: 0.01,
        quicksand_strength: 0.01,
        speed_loss: 0.01,
        regen_loss: 0.01,
        increment: 0.01,
        slow: 0.01,
        drain: 0.01,
        growth_multiplier: 0.01,
        gravity: 0.01,
        repulsion: 0.01,
        turn_speed: 0.01,
        turn_acceleration: 0.01,
        shot_acceleration: 0.01,
      };
      let propName = v[1];
	    const remove = document.createElement("button");
	    remove.classList.add("remove");
	    remove.classList.add("temp");
	    remove.onclick=function(event){
	    	newEl.remove();
        this.selectEl.children[1+propsList.indexOf(newEl.getAttribute("data-type"))].removeAttribute("hidden");
        delete point1[newEl.getAttribute("data-type")];
	    	spawnEntities();
	    	event.stopPropagation();
	    };
      if(!propName)return;
      point1[propName]=defaultValues.spawner[propName];
      switch(propName){
        //Text
        case"x":
        case"y":
        case"angle":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],"text",function(Legacy,U,V){
            if(V.split(",").length==1&&!isNaN(V))
              this.value=point1[propName]=Number(V);
            else if(V.split(",").map(e=>parseInt(e)).map(e=>parseInt(e)).filter(e=>!isNaN(e)).length==2)
              point1[propName]=V;
      	  }]);
        };break;
        case"pattern":{
          newEl = createProperty(formatString(`editor.property.${propName}`),null,"select",{value:point1[propName],event:e=>{point1[propName]=e;spawnEntities()},selectOptions:[[formatString("editor.pattern.none"),void 0],...['spiral','twinspiral','quadspiral','cone','twincone','cone_edges','twin','singlebig'].map(e=>[formatString("editor.pattern."+e),e])],selectType:"text"});
        };break;
        //Switches
        case"immune":
        case"randomize_state":{
          newEl = createProperty(formatString(`editor.property.${propName}`),null,"select",{value:point1[propName],event:e=>{point1[propName]=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.none"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"});
        };break;
        case"powered":
        case"small_bullets":
        case"spawn_top":
        case"hard_mode":
        case"reverse":
        case"horizontal":
        case"move_clockwise":
        case"ignore_invulnerability":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],"checkbox",function(Legacy,U,V){
            this.value=point1[propName]=Boolean(V);
      	  }]);
        };break;
        //Numbers
        case"projectile_radius":
        case"projectile_duration":
        case"player_detection_radius":
        case"slash_radius":
        case"effect_radius":
        case"home_range":
        case"circle_size":
        case"shot_interval":
        case"pause_interval":
        case"pause_duration":
        case"release_interval":
        case"release_time":
        case"switch_interval":
        case"switch_time":
        case"growth_multiplier":
        case"recharge":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=Math.max(V,0);
      	  }]);
        };break;
        case"direction":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=clamp(V,-1,1);
      	  }]);
        };break;/*{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=clamp(V,0,1);
      	  }]);
        };break;*/
        case"cone_angle":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=V%360;
      	  }]);
        };break;
        case"health":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=Math.max(V,1);
      	  }]);
        };break;
        case"speed":
        case"turn_speed":
        case"turn_acceleration":
        case"shot_acceleration":
        case"projectile_speed":
        case"speed_loss":
        case"increment":
        case"gravity":
        case"repulsion":
        case"quicksand_strength":{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            point1[propName]=Number(Legacy?U:V);
            this.value=Number(Legacy?V:U);
      	  }]);
        };break;
        case"spawner":{
	        const spawnerEl = createFolder(formatString("editor.property.spawner"), point1.spawner.map(e=>(createSummonerSpawnerGUI(e,point1),e.element)));
	        if (point1.spawner.length < 1) spawnerEl.classList.add("min");
	        const addBtn2 = document.createElement("button");
	        spawnerEl.classList.add("array");
	        addBtn2.classList.add("add");
	        addBtn2.addEventListener("click",()=>{
	        	let point2 = createPoint({types:["normal"],radius:18,speed:150});
	        	point1.spawner.push(point2);
	        	createSummonerSpawnerGUI(point2,point1);
	        	if(point1.spawner[0].element.parentElement){
	        		point1.spawner[0].element.parentElement.parentElement.children[1].appendChild(point2.element);
	        		point1.spawner[0].element.parentElement.parentElement.classList.remove("min");
	        	}else{
	        		spawnerEl.children[1].appendChild(point2.element);
	        		spawnerEl.classList.remove("min");
	        	}
	        	spawnEntities()
	        });
	        spawnerEl.appendChild(addBtn2);
          newEl = spawnerEl;
        };break;
        default:{
          newEl = CreateSpawnerProp.apply(null,[propName,point1[propName],xStep[propName],,function(Legacy,U,V){
            this.value=point1[propName]=Number(V);
      	  }]);
        };break;
      };
      newEl.setAttribute("data-type",propName);
      let selectEl = el.previousSibling;
      selectEl.children[selectEl.selectedIndex].setAttribute("hidden","");
      selectEl.selectedIndex=0;
      remove.selectEl=selectEl;
	    newEl.children[0].appendChild(remove);
      li.children[1].insertBefore(newEl, propCreator);
    },list:[["",null],...propsList.sort().map(e=>[formatString("editor.property."+e),e])],selectType:"creator"}),
	],!0);li.classList.add("spawners");
  for(var k in point1){
    if(-1 !== "types,radius".split(",").indexOf(k))continue;
    createExistingProps(k,point1,propCreator,propsList,li);
  }
	var foldersInjectedByAddon = [];
	//if pifary were to have an enemy with a custom (non aura radius) property, similar code to the code below would be put here.
	for (var i = 0; i < foldersInjectedByAddon.length; i++){
		li.lastElementChild.appendChild(foldersInjectedByAddon[i]);
	}
	li.children[0].classList.add("counter");
	const remove = document.createElement("button"),
		clone = document.createElement("button");
	li.children[0].appendChild(remove);
	li.children[0].appendChild(clone);
	remove.classList.add("remove");
	remove.addEventListener("click", e => {
		Zone.spawner[Zone.spawner.indexOf(point1)].element.remove();
		Zone.spawner.splice(Zone.spawner.indexOf(point1), 1);
		spawnEntities();
		e.stopPropagation();
	});
	clone.classList.add("clone");
	clone.addEventListener("click",e=>{
		const spawner=createPoint(cloneSpawner(Zone.spawner[Zone.spawner.indexOf(point1)]));
		Zone.spawner.push(spawner);
		createSPAWNERgui(spawner,Zone);
		Zone.spawner[0].element.parentElement.parentElement.children[1].appendChild(spawner.element);
		spawnEntities()
		e.stopPropagation();
	});
	point1.element=li;
}
function customZONEgui(Zone){
	const spawnerEl = createFolder(formatString("editor.property.spawner"), Zone.spawner.map(e=>(createSPAWNERgui(e,Zone),e.element)));
	if (Zone.spawner.length < 1) spawnerEl.classList.add("min");
	const addBtn2 = document.createElement("button");
	spawnerEl.classList.add("array");
	addBtn2.classList.add("add");
	addBtn2.addEventListener("click",()=>{
		let point2 = createPoint({types:["normal"],radius:18,speed:150});
		Zone.spawner.push(point2);
		createSPAWNERgui(point2,Zone);
		if(Zone.spawner[0].element.parentElement){
			Zone.spawner[0].element.parentElement.parentElement.children[1].appendChild(point2.element);
			Zone.spawner[0].element.parentElement.parentElement.classList.remove("min");
		}else{
			spawnerEl.children[1].appendChild(point2.element);
			spawnerEl.classList.remove("min");
		}
		spawnEntities()
	});
	spawnerEl.appendChild(addBtn2);
	var requie=[];
	const reqEl = createFolder(formatString("editor.property.requirements"), Zone.requirements.map(p => {
		const e = createReq(p.requirement??p,Zone);
		return requie.push(e),e.element;
	}));
	Zone.requirements=requie;
	const addBtn = document.createElement("button");
	reqEl.classList.add("array");
	addBtn.classList.add("add");
	addBtn.addEventListener("click", () => {
		let point2 = createReq(void 0,Zone);
		Zone.requirements.push(point2);
		reqEl.children[1].appendChild(point2.element);
		reqEl.classList.remove("min");
	});
	reqEl.appendChild(addBtn);
	if (Zone.requirements.length < 1) reqEl.classList.add("min");

	const xInput = document.createElement("input");
	xInput.value = Zone.rx;
	xInput.addEventListener("input", () => {
		Zone.rx = xInput.value;
		if(!isNaN(Number(xInput.value))){
			Zone.rx=Zone.x=Number(xInput.value);
		}
		updateMap();
	});
	//消費した。
	const yInput = document.createElement("input");
	yInput.value = Zone.ry;
	yInput.addEventListener("input", () => {
		Zone.ry = yInput.value;
		if(!isNaN(Number(yInput.value))){
			Zone.ry=Zone.y=Number(yInput.value);
		}
		updateMap();
	});
	const wInput = document.createElement("input");
	wInput.value = Zone.rw;
	wInput.addEventListener("input", () => {
		Zone.rw = wInput.value;
		if(!isNaN(Number(wInput.value))){
			Zone.width=Zone.rw=wInput.value = Number(wInput.value);
		}
		updateMap();
	});
	const hInput = document.createElement("input");
	hInput.value = Zone.rh;
	hInput.addEventListener("input", () => {
		Zone.rh = hInput.value;
		if(!isNaN(Number(hInput.value))){
			Zone.height=Zone.rh=hInput.value = Number(hInput.value);
		}
		updateMap();
	});
	const txInput = document.createElement("input");
	txInput.value = Zone.translate.x;
	txInput.addEventListener("input", () => {
		Zone.translate.x = Number(txInput.value);
	});

	const tyInput = document.createElement("input");
	tyInput.value = Zone.translate.y;
	tyInput.addEventListener("input", () => {
		Zone.translate.y = Number(tyInput.value);
	});
	const translation=createFolder("Translate", [
		createProperty(formatString("editor.property.x"), txInput, "number"),
		createProperty(formatString("editor.property.y"), tyInput, "number")
	]);
	(Zone.type=="active"?show:hide)(spawnerEl);
	(Zone.type=="teleport"?show:hide)(reqEl);
	(Zone.type=="teleport"||Zone.type=="exit"?show:hide)(translation);
	var props=createPropertyObj(Zone.properties,"zone");
	Zone.properties=props;
	Zone.element = createFolder(formatString("editor.zone"),[
		createProperty(formatString("editor.property.type"),null,"select",{
			value: Zone.type,
			event: e=>{
				(e=="teleport"?show:hide)(reqEl);
				(e=="active"?show:hide)(spawnerEl);
				(e=="exit"||e=="teleport"?show:hide)(translation);
				Zone.type = e;
				spawnEntities();
			},
			selectOptions: ['active', 'safe', 'exit', 'teleport', 'victory', 'removal', 'dummy'].map(e=>[formatString("editor.zone."+e),e]),
			selectType: "text"
			}),
		createProperty(formatString("editor.property.x"), xInput, "text"),
		createProperty(formatString("editor.property.y"), yInput, "text"),
		createProperty(formatString("editor.property.width"), wInput, "text"),
		createProperty(formatString("editor.property.height"), hInput, "text"),
		reqEl,
		spawnerEl,
		translation,
		Zone.properties.element,
	]);
    Zone.inputs={
        x:xInput,
        y:yInput,
        tx:txInput,
        ty:tyInput,
        width:wInput,
        height:hInput
    };
}
function cloneSpawner(e){
	const extras=Object.freeze(["pattern_id","vary_modifier","opacity_modifier"]),obj={};
	void 0 !== e.x && (obj.x = e.x);
	void 0 !== e.y && (obj.y = e.y);
	void 0 !== e.radius && (obj.radius = e.radius);
	void 0 !== e.angle && (obj.angle = e.angle instanceof Array ? e.angle.map(t=>t) : e.angle);
	void 0 !== e.speed && (obj.speed = e.speed);
	void 0 !== e.count && (obj.count = e.count instanceof Array ? e.count.map(t=>t) : e.count);
	void 0 !== e.immune && (obj.immune = e.immune);
  void 0 !== e.effect_radius && (obj.effect_radius = e.effect_radius);
	extras.map(t=>[void 0!=e[t]&&(obj[t]=e[t])]);
	obj.types = e.types.map(t => t.i || t);
	obj.types.includes("slowing") && (
		obj.slowing_radius = e.slowing_radius,
		obj.slow = e.slow
	);
	obj.types.includes("draining") && (
		obj.draining_radius = e.draining_radius,
		obj.drain = e.drain
	);
	obj.types.includes("experience_drain") && (obj.experience_drain_radius = e.experience_drain_radius);
	obj.types.includes("liquid") && (obj.player_detection_radius = e.player_detection_radius);
	obj.types.includes("turning") && (obj.circle_size = e.circle_size);
	obj.types.includes("slasher") && (obj.slash_radius = e.slash_radius);
	obj.types.includes("slippery") && (obj.slippery_radius = e.slippery_radius);
	obj.types.includes("gravity") && (
		obj.gravity_radius = e.gravity_radius,
		obj.gravity = e.gravity
	);
	obj.types.includes("summoner") && (
		obj.spawner = (e.spawner??[]).map(t=>cloneSpawner(t))
	);
	obj.types.includes("repelling") && (
		obj.repelling_radius = e.repelling_radius,
		obj.repulsion = e.repulsion
	);
	obj.types.includes("magnetic_reduction") && (obj.magnetic_reduction_radius = e.magnetic_reduction_radius);
	obj.types.includes("magnetic_nullification") && (obj.magnetic_nullification_radius = e.magnetic_nullification_radius);
	obj.types.includes("toxic") && (obj.toxic_radius = e.toxic_radius);
	obj.types.includes("enlarging") && (obj.enlarging_radius = e.enlarging_radius);
	obj.types.includes("radar") && (obj.radar_radius = e.radar_radius);
	obj.types.includes("quicksand") && (
		obj.quicksand_radius = e.quicksand_radius,
		obj.push_direction = e.push_direction
	);
	obj.types.includes("sniper") && (obj.recharge = e.recharge);
	obj.types.includes("ring_sniper") && (
		obj.ring_sniper_radius = e.ring_sniper_radius,
		obj.health = e.health
	);
	obj.types.includes("aibot") && (obj.aibot_radius = e.aibot_radius);
	obj.types.includes("wabot") && (obj.wabot_radius = e.wabot_radius);
	obj.types.includes("eabot") && (obj.eabot_radius = e.eabot_radius);
	obj.types.includes("fibot") && (obj.fibot_radius = e.fibot_radius);
	obj.types.includes("icbot") && (obj.icbot_radius = e.icbot_radius);
	obj.types.includes("elbot") && (obj.elbot_radius = e.elbot_radius);
	obj.types.includes("plbot") && (obj.plbot_radius = e.plbot_radius);
	obj.types.includes("mebot") && (obj.mebot_radius = e.mebot_radius);
	obj.types.includes("dabot") && (obj.dabot_radius = e.dabot_radius);
	obj.types.includes("libot") && (obj.libot_radius = e.libot_radius);
	obj.types.includes("blocking") && (obj.blocking_radius = e.blocking_radius);
	obj.types.includes("freezing") && (obj.freezing_radius = e.freezing_radius);
	obj.types.includes("reducing") && (obj.reducing_radius = e.reducing_radius);
	obj.types.includes("disabling") && (obj.disabling_radius = e.disabling_radius);
	obj.types.includes("lava") && (obj.lava_radius = e.lava_radius);
	obj.types.includes("barrier") && (obj.barrier_radius = e.barrier_radius);
	obj.types.includes("icicle") && (obj.horizontal = e.horizontal);
	obj.types.includes("wall") && (
		obj.move_clockwise = e.move_clockwise,
		obj.spawn_top = e.spawn_top
	);
	obj.types.includes("grass") && (obj.powered = e.powered);
	obj.types.includes("flower") && (obj.growth_multiplier = e.growth_multiplier);
	obj.types.includes("wind_ghost") && (obj.ignore_invulnerability = e.ignore_invulnerability);
	obj.types.includes("switch") && (
		obj.switch_interval = e.switch_interval,
		obj.switch_time = e.switch_time
	);
	obj.types.includes("homing") && (
		obj.reverse = e.reverse,
		obj.home_range = e.home_range,
		obj.increment = e.increment
	);
	obj.types.includes("cybot") && (
		obj.hard_mode = e.hard_mode,
		obj.cybot_radius = e.cybot_radius
	);
	obj.types.includes("frost_giant") && (
		obj.shot_acceleration = e.shot_acceleration,
		obj.shot_interval = e.shot_interval,
		obj.turn_acceleration = e.turn_acceleration,
		obj.turn_speed = e.turn_speed,
		obj.pattern = e.pattern,
		
		obj.direction = e.direction,
		obj.cone_angle = e.cone_angle,
		obj.pause_duration = e.pause_duration,
		obj.pause_interval = e.pause_interval,
		obj.projectile_duration = e.projectile_duration,
		obj.projectile_radius = e.projectile_radius,
		obj.projectile_speed = e.projectile_speed
	);
	obj.types.includes("radiating_bullets") && (
		obj.release_time = e.release_time,
		obj.release_interval = e.release_interval
	);
	return obj;
}
function newZone(e) {
    const Zone = e;
	Zone.rx=Zone.x;
	Zone.rw=Zone.width;
	Zone.ry=Zone.y;
	Zone.rh=Zone.height;
	var spawner=Zone.spawner;
	var requirements=Zone.requirements;
	var translate=Zone.translate;
	Zone.properties??={};
	if(!translate){
		Zone.translate={x:0,y:0};
	}
	if(spawner){
		Zone.spawner=spawner.map(p=>createPoint(p));
	}
	Zone.spawner??=[];
	if(requirements){
		Zone.requirements=requirements.map(p=>createReq(p,Zone));
	}
	Zone.requirements??=[];
    return e;
}

  //REQUIREMENTS
  function createReq(requirement="",Zone){
    const point1={requirement,regionName:"First Map",areaIndex:0};
	var e=requirement.split(":");
	if(e[0]=="exact_index"){
		console.log(requirement,"exact_index:".length,(e[e.length-1].length+1),requirement.slice("exact_index:".length,(e[e.length-1].length+1)).replaceAll("\\:",":"));
		point1.regionName=requirement.slice("exact_index:".length,-(e[e.length-1].length+1)).replaceAll("\\:",":");
		point1.areaIndex=parseInt(e[e.length-1]);
	}
	const txInput = document.createElement("input");
	txInput.value = point1.regionName;
	txInput.addEventListener("input", () => {
		point1.regionName = txInput.value;
		point1.requirement = `exact_index:${point1.regionName.replaceAll(":","\\:")}:${point1.areaIndex}`;
	});
	txInput.disabled=e[0]!=="exact_index";
	const tyInput = document.createElement("input");
	tyInput.value = point1.areaIndex;
	tyInput.addEventListener("input", () => {
		point1.areaIndex = Number(tyInput.value);
		point1.requirement = `exact_index:${point1.regionName.replaceAll(":","\\:")}:${point1.areaIndex}`;
	});
	tyInput.disabled=e[0]!=="exact_index";
	li = createFolder("",[
		createProperty(formatString("editor.requirement"), null, "select", {
			value: e[0],
			event: e=>{
				txInput.disabled=e!="exact_index";
				tyInput.disabled=e!="exact_index";
				if(e=="exact_index")point1.requirement = `${e}:${point1.regionName.replaceAll(":","\\:")}:${point1.areaIndex}`;
				else point1.requirement=e;
			},
			selectOptions: [[formatString("editor.requirement.none"),""],...['complete_research_lab', 'defeat_everything', 'switch_station_found', 'inaccessible', 'cybot_castle_defeated', 'ten_hard_variants', 'mystery_keycard', 'icbot_not_defeated', 'cybot_hard_mode_not_defeated', 'cybot_hard_mode_defeated', 'elbot_not_defeated', 'plbot_not_defeated', 'mebot_not_defeated', 'libot_not_defeated', 'dabot_not_defeated', 'icbot_defeated', 'elbot_defeated', 'plbot_defeated', 'mebot_defeated', 'libot_defeated', 'dabot_defeated', 'research_lab_discovered', 'all_heroes_unlocked', 'aibot_not_defeated', 'cybot_not_defeated', 'cybot_defeated', 'wabot_not_defeated', 'eabot_not_defeated', 'fibot_not_defeated', 'aibot_defeated', 'wabot_defeated', 'eabot_defeated', 'fibot_defeated', 'coupled_corridors_found', 'dusty_depths_found', 'mansion_discovered', 'exact_index'].sort().map(e=>[formatString("editor.requirement."+e),e])],
			selectType: "text"
		}),
		createProperty(formatString("editor.requirement.exact_index.region"), txInput, "text"),
		createProperty(formatString("editor.requirement.exact_index.area"), tyInput, "number"),
		
	]);
    li.children[0].classList.add("counter");
    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.addEventListener("click", e => {
      if (Zone.requirements.length > 0) {
        Zone.requirements[Zone.requirements.indexOf(point1)].element.remove();
        Zone.requirements.splice(Zone.requirements.indexOf(point1), 1);
      } else if (Zone.requirements.length) {
        Zone.requirements[Zone.requirements.indexOf(point1)].element.remove();
        Zone.requirements.splice(Zone.requirements.indexOf(point1), 1);
        reqEl.classList.add("min");
      }
      e.stopPropagation();
    });
    li.children[0].appendChild(remove);
    point1.element = li;
    return point1;
  };
//SPAWNER

    function createPoint(obj) {
        const point1 = {
            types:[],
        }
		for(var i in obj){
			if(i == "types" || obj[i] == undefined || defaultValues.spawner[i] == obj[i])continue;
			point1[i]=obj[i];
		}
		if(typeof obj.types == "string")obj.types=[obj.types];
		obj.types.map(p => {
			const pointe = createpoint2(p,point1);
			point1.types.push(pointe);
			return pointe.element;
		});
    return point1;
  }
//ENEMY TYPES
function createpoint2(types="normal",point1){
  var point2={i:types}
          return point2
}
function checkUnimplementedEnemies(){
  const u=[];
  $ccc1645057c0c20e$export$18da14ab4d863bec.map(e=>{
    if(e.endsWith("Enemy") && !e.startsWith("RoboScanner"))try{eval(e)}catch(y){u.push(e.slice(0,-5))}
  });
  return u;
}
function customTypeGUI(point2,point1){
let evadesUsedEnts = 'mutating,normal,wavy,dasher,spiral,sizing,sniper,wall,slowing,homing,draining,tree,fake_pumpkin,pumpkin,radiating_bullets,teleporting,disabling,speed_sniper,regen_sniper,zigzag,switch,zoning,oscillating,wavy_switch,zigzag_switch,spiral_switch,zoning_switch,oscillating_switch,homing_switch,confectioner,confectioner_switch,penny,penny_switch,dasher_switch,liquid,slippery,icicle,ice_sniper,ice_ghost,turning,freezing,gravity,repelling,star,gravity_ghost,repelling_ghost,disabling_ghost,speed_ghost,regen_ghost,wind_ghost,lunging,immune,frost_giant,snowman,fire_trail,enlarging,poison_sniper,glowy,toxic,mist,phantom,firefly,corrosive_sniper,charging,reducing,lead_sniper,corrosive,poison_ghost,magnetic_reduction,negative_magnetic_sniper,positive_magnetic_sniper,magnetic_nullification,negative_magnetic_ghost,positive_magnetic_ghost,lava,grass,flower,seedling,radar,barrier,wind_sniper,sand,sandrock,quicksand,crumbling,aibot,wabot,eabot,fibot,cybot,thunderbolt,electrical,sparking,static,cactus,prediction_sniper,icbot,elbot,plbot,mebot,libot,dabot,experience_drain,blocking,stalactite,force_sniper_a,force_sniper_b,ninja_star_sniper,summoner,infectious,cycling,blind,slasher,lotus_flower'.split(",").sort().reverse();
let yu = checkUnimplementedEnemies();
var enemyList="randomizing,key,snow_sniper,snow_liquid,wall,normal,homing,dasher,slowing,draining,repelling,gravity,turning,sizing,sniper,freezing,teleporting,wavy,zigzag,zoning,spiral,oscillating,switch,liquid,icicle,slippery,ice_sniper,disabling,experience_drain,enlarging,speed_sniper,regen_sniper,radiating_bullets,immune,pumpkin,tree,frost_giant,snowman,corrosive,toxic,corrosive_sniper,poison_sniper,magnetic_reduction,magnetic_nullification,positive_magnetic_sniper,negative_magnetic_sniper,residue,fire_trail,ice_ghost,poison_ghost,positive_magnetic_ghost,negative_magnetic_ghost,wind_ghost,lunging,lava,gravity_ghost,repelling_ghost,star,grass,seedling,flower,disabling_ghost,glowy,firefly,mist,phantom,cybot,eabot,wabot,fibot,aibot,wind_sniper,sand,sandrock,quicksand,crumbling,radar,barrier,speed_ghost,regen_ghost,cactus,cycling,icbot,elbot,plbot,mebot,libot,dabot,sparking,thunderbolt,static,electrical,prediction_sniper,ring_sniper,lead_sniper,charging,reducing,stalactite,blocking,force_sniper_a,force_sniper_b,wavy_switch,zigzag_switch,dorito,zoning_switch,spiral_switch,oscillating_switch,homing_switch,wacky_wall,confectioner,confectioner_switch,dorito_switch,penny,penny_switch,infinity,infinity_switch,dasher_switch,infectious,mutating,fake_pumpkin,blind,ninja_star_sniper,summoner,slasher,lotus_flower".split(",").sort()
            .map(e=>{
              let f = 0;
              -1 === evadesUsedEnts.indexOf(e) && (f=1);
              let v = formatString("editor.enemy."+e);
              if(f&1)v+=" (UNUSED)";
              return [v,e,f]
            });
  if(usingPifary)
    enemyList.push(...["burning","sticky_sniper","web","cobweb","defender"].map(e=>[formatString("pifary-dev.enemy."+e),e]));
  if(usingFPents)
    enemyList.push(...["math","science","language","alice","test"].map(e=>[formatString("fpe.entity."+e),e,1]));
  if(usingPncl9500)
    enemyList.push(...["slooming","particulate","water_trail","nightshade","riptide","cloud","rain","storm","airburst","param_test","rotor","radioactive_sniper","sap_sniper","vine","disc","swamp","drowning","pull_sniper","puffing","bubble"].map(e=>[formatString("pncl9500.enemy."+e),e]));
  var li = createProperty("",null, "select", {
    value:point2.i,
    event: e => {point2.i = e;spawnEntities();console.log(e)},
    selectOptions: enemyList.sort((e,t)=>evadesUsedEnts.indexOf(t[1])-evadesUsedEnts.indexOf(e[1])),selectType: "text"
  });
        li.children[0].classList.add("counter");
        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.addEventListener("click", e => {
            if (point1.types.length > 2) {
                point1.types.splice(point1.types.indexOf(point2), 1);
li.remove()
            } else if (point1.types.length) {
                point1.types.splice(point1.types.indexOf(point2), 1);
li.remove()
                point1.types[0].element.parentElement.parentElement.classList.add("min");
            }
          spawnEntities();
            e.stopPropagation();
        });
        li.children[0].appendChild(remove);
          point2.element=li;
}
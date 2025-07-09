const isForked=location.origin+location.pathname!=="https://evades-regedit-2025.glitch.me/",
      reloadPage=location.reload.bind(location),
      canvas=document.getElementById("canvas"),
      ctx=canvas.getContext("2d"),
      map={name: "No Name",share_to_drive:true,players:[],properties:{},areas:[]},
      camSpeed=10,
      version=[1,2,"1."+(settings.local.suba||0),"β"],
      selectBuffer=5,
      manageExtensions=function(str){(activated_extensions.indexOf(str)==-1)?activated_extensions.push(str):activated_extensions.splice(activated_extensions.indexOf(str),1),settings.local.activatedExtensions=activated_extensions},
getObjects=function(){
	const res=[],rect={x:Cam.left,y:Cam.top,width:Cam.right-Cam.left,height:Cam.bottom-Cam.top};
	for(const zone of map.areas[current_Area].zones)
		if(rectRectCollision(zone,rect)||selectionArea)
			res.push(zone);
	for(const asset of map.areas[current_Area].assets)
		if(rectRectCollision(asset,rect)||rectCircleCollision(asset.x,asset.y,asset.radius,rect.x,rect.y,rect.width,rect.height)||selectionArea)
			res.push(asset);
	for(const player of map.players)
		if(player.area === current_Area && rectCircleCollision(player.x,player.y,player.radius,rect.x,rect.y,rect.width,rect.height))
			res.push(player);
	return res
},
      prec=loadImage("https://cdn.glitch.global/4777c7d0-2cac-439c-bde4-07470718a4d7/jumpscare.mp3"),
      luma=function(arr){return arr.map(e=>{var v=e/255;return v<.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)}).map((e,t)=>{return[.2126,.7152,0.0722,0][t]*e}).reduce((e,t)=>{return e+t},0)*255},
      customAlert=function(text,duration=2,color="#fff"){if(duration<=0)return;let msg = {text,color,duration,removeAfter:performance.now()+duration*1e3};alertMessages.push(msg)},hexToArr=function(hex){return[parseInt(hex.slice(1,3),16),parseInt(hex.slice(3,5),16),parseInt(hex.slice(5,7),16)]},arrtoRGBA=function(arr){return`rgba(${arr.join()})`},fillZeros=function(str="0",digits=2,filler="0"){return filler.repeat(digits-str.length)+str},RGBtoHex=function(arr){return`#${fillZeros(Number(arr[0]).toString(16))}${fillZeros(Number(arr[1]).toString(16))}${fillZeros(Number(arr[2]).toString(16))}`},RGBAtoHex=function(arr){return`${RGBtoHex(arr)}${fillZeros(Number(arr[3]).toString(16))}`},ExtractDiff=function(e){e=e.replace(/ /g,"");const t=e.split("+"),i=e.split("-");return t.length>1?parseInt(t[1]||0):i.length>1?-parseInt(i[1]||0):0},loadData=async function(){await fetch("world.yaml").then(e=>{if(e?.status>=400&&!e?.ok)return customAlert(`[Error ${e.target.status}]: Unable to fetch data "${url}"`,20,"#FF0000");if(e?.status>=200&&e?.ok)return e?.text().then(t=>{return WORLD=YAML.parse(t)});console.log("bruh",e)}).catch(e=>{WORLD={"spawn":"Central Core","regions":[{"file":"regions/assorted-alcove.yaml","x":1952,"y":117152},{"file":"regions/assorted-alcove-hard.yaml","x":96652,"y":117152},{"file":"regions/ballistic-battlefield.yaml","x":0,"y":0},{"file":"regions/burning-bunker.yaml","x":0,"y":119592},{"file":"regions/burning-bunker-hard.yaml","x":96652,"y":119592},{"file":"regions/catastrophic-core.yaml","x":272608,"y":0},{"file":"regions/central-core.yaml","x":1952,"y":0},{"file":"regions/central-core-hard.yaml","x":135052,"y":0},{"file":"regions/coupled-corridors.yaml","x":307872,"y":44640},{"file":"regions/cyber-castle.yaml","x":1952,"y":147952},{"file":"regions/cyber-castle-hard.yaml","x":24352,"y":163952},{"file":"regions/dangerous-district.yaml","x":1952,"y":24640},{"file":"regions/dangerous-district-hard.yaml","x":270104,"y":24640},{"file":"regions/dusty-depths.yaml","x":70208,"y":5472},{"file":"regions/elite-expanse.yaml","x":1952,"y":21760},{"file":"regions/elite-expanse-hard.yaml","x":270104,"y":21760},{"file":"regions/endless-echo.yaml","x":1952,"y":23200},{"file":"regions/endless-echo-hard.yaml","x":-1248,"y":23200},{"file":"regions/frozen-fjord.yaml","x":1952,"y":31840},{"file":"regions/frozen-fjord-hard.yaml","x":135052,"y":31840},{"file":"regions/glacial-gorge.yaml","x":1952,"y":17440},{"file":"regions/glacial-gorge-hard.yaml","x":135052,"y":17440},{"file":"regions/grand-garden.yaml","x":1952,"y":137192},{"file":"regions/grand-garden-hard.yaml","x":96652,"y":137192},{"file":"regions/haunted-halls.yaml","x":1952,"y":1440},{"file":"regions/humongous-hollow.yaml","x":1952,"y":20320},{"file":"regions/humongous-hollow-hard.yaml","x":270104,"y":20320},{"file":"regions/infinite-inferno.yaml","x":1952,"y":149392},{"file":"regions/infinite-inferno-old.yaml","x":1952,"y":149392},{"file":"regions/magnetic-monopole.yaml","x":1952,"y":108480},{"file":"regions/magnetic-monopole-hard.yaml","x":96652,"y":108480},{"file":"regions/monumental-migration.yaml","x":1952,"y":27520},{"file":"regions/monumental-migration-hard.yaml","x":1541120,"y":27520},{"file":"regions/mysterious-mansion.yaml","x":270104,"y":43040},{"file":"regions/ominous-occult.yaml","x":1952,"y":28960},{"file":"regions/ominous-occult-hard.yaml","x":135052,"y":28928},{"file":"regions/peculiar-pyramid.yaml","x":1952,"y":4320},{"file":"regions/peculiar-pyramid-hard.yaml","x":142432,"y":4320},{"file":"regions/quiet-quarry.yaml","x":1952,"y":26080},{"file":"regions/quiet-quarry-hard.yaml","x":135052,"y":26080},{"file":"regions/research-lab.yaml","x":5632,"y":147952},{"file":"regions/restless-ridge.yaml","x":0,"y":43040},{"file":"regions/restless-ridge-hard.yaml","x":135052,"y":43040},{"file":"regions/shifting-sands.yaml","x":5088,"y":4320},{"file":"regions/stellar-square.yaml","x":0,"y":-384},{"file":"regions/stellar-square-hard.yaml","x":0,"y":-6400},{"file":"regions/switch-station.yaml","x":540208,"y":16000},{"file":"regions/terrifying-temple.yaml","x":1984,"y":175152},{"file":"regions/toxic-territory.yaml","x":1952,"y":107040},{"file":"regions/toxic-territory-hard.yaml","x":96652,"y":107040},{"file":"regions/transforming-turbidity.yaml","x":0,"y":0},{"file":"regions/vicious-valley.yaml","x":1952,"y":18880},{"file":"regions/vicious-valley-hard.yaml","x":135052,"y":18880},{"file":"regions/wacky-wonderland.yaml","x":1952,"y":16000},{"file":"regions/wacky-wonderland-hard.yaml","x":270104,"y":16000},{"file":"regions/withering-wasteland.yaml","x":1952,"y":173712}]}})},
YAML={parse:function(e){return jsyaml.load(e,null)},stringify:function(e){return jsyaml.dump(e,{noCompatMode:true})}};
let now=new Date;
now.getMonth()===3 && now.getDate()===1 && (playtester.title="You shouldn't want to edit this map for now.");
/*(from Discord) amasterclasher — Thu, Aug 1, 2024 01:16:33 EDT
	added a maximum speed property so if any mapmakers would like to put that in to their maps, it does work now
	also @Sοηiς.εχэ will ping you since you seem to care about this stuff
*/
let alertMessages=[],simulateIt=1,selectMode=null,lockCursor=false,resizing=false;
const types = ["wall", "light_region", "flashlight_spawner", "image_background", "torch", "gate", "active", "safe", "exit", "teleport", "victory", "removal"];
const keysDown = new Set();
document.addEventListener("keydown",e=>{if(confirmationPopup)return;!(e.repeat||e.ctrlKey||e.target instanceof HTMLInputElement)&&keysDown.add(e.which)});
document.addEventListener("keyup",e=>keysDown.delete(e.which))
importer.addEventListener("input",e=>{
	if(!importer.selectedIndex)return;
	document.activeElement.blur();
	const url=WORLD.regions[importer.selectedIndex-1].file;
	if(importer.selectedIndex=0)return;
	fetch(url).then(e=>{
		if(e.status>=600)customAlert(`${e.status} — How did you get here?`,20,"#AFAFFFFF");
		else if(e.status>=500)customAlert(`Sorry, something went wrong with the server. Please try again later. (Error ${e.status})`,20,"#FFAFAFFF");
		else if(e.status>=400)customAlert(`[Error ${e.status}!!1]: Unable to fetch file "${url}"`,20,"#FFFFAFFF");
		else if(e.status>=200)e.text().then(t=>loadFile(t,!1,!1,!1));
	}).catch(e=>{
		customAlert("Sorry, something went wrong. Please try again later.",30,"#FFAFAFFF")
		console.error("Fetch API failed.",e.stack)
	})
})
function updateMap(){
  let lastZone,boundaries,FileDef,pushX,pushY;map.areas.map((area,i,r)=>(boundaries=[getAreaBoundary(area)],FileDef=WORLD&&WORLD.regions.filter(e=>e.file==`regions/${map.name.split(" ").join("-").toLowerCase()}.yaml`)[0]||{x:0,y:0},pushX=0,pushY=0,area.rx.toString().startsWith("var x")&&(area.x=FileDef.x+ExtractDiff(area.rx)),area.ry.toString().startsWith("var y")&&(area.y=FileDef.y+ExtractDiff(area.ry)),boundaries[0].left&&((pushX=-boundaries[0].left,current_Area==i&&(Cam.centerX+=pushX),area.rx.toString().startsWith("var x"))?(area.rx=("var x +"+(ExtractDiff(area.rx)+boundaries[0].left)).replace("+-","- ").replace("+","+ ").replace(" + 0",""),area.inputs)&&(area.inputs.x.value=area.rx):(area.rx.toString().startsWith("last_x"))?(area.rx=("last_x +"+(ExtractDiff(area.rx)+boundaries[0].left)).replace("+-","- ").replace("+","+ ").replace(" + 0",""),area.inputs)&&(area.inputs.x.value=area.rx):(area.rx.toString().startsWith("last_right"))?(area.rx=("last_right +"+(ExtractDiff(area.rx)+boundaries[0].left)).replace("+-","- ").replace("+","+ ").replace(" + 0",""),area.inputs)&&(area.inputs.x.value=area.rx):(area.rx=area.x+boundaries[0].left,area.x=area.rx,area.inputs)&&(area.inputs.x.value=area.rx)),boundaries[0].top&&((pushY=-boundaries[0].top,current_Area==i&&(Cam.centerY+=pushY),area.ry.toString().startsWith("var y"))?(area.ry=("var y +"+(ExtractDiff(area.ry)+boundaries[0].top)).replace("+-","- ").replace("+","+ ").replace(" + 0",""),area.inputs)&&(area.inputs.y.value=area.ry):(area.ry.toString().startsWith("last_y"))?(area.ry=("last_y +"+(ExtractDiff(area.ry)+boundaries[0].top)).replace("+-","- ").replace("+","+ ").replace(" + 0",""),area.inputs)&&(area.inputs.y.value=area.ry):(area.ry.toString().startsWith("last_bottom"))?(area.ry=("last_bottom +"+(ExtractDiff(area.ry)+boundaries[0].top)).replace("+-","- ").replace("+","+ ").replace(" + 0",""),area.inputs)&&(area.inputs.y.value=area.ry):(area.ry=area.y+boundaries[0].top,area.y=area.ry,area.inputs)&&(area.inputs.y.value=area.ry)),r[i-1]&&(boundaries.push(getAreaBoundary(r[i-1])),area.rx.toString().startsWith("last_x")&&(area.x=r[i-1].x+ExtractDiff(area.rx)),area.ry.toString().startsWith("last_y")&&(area.y=r[i-1].y+ExtractDiff(area.ry)),area.rx.toString().startsWith("last_right")&&(area.x=boundaries[1].right+r[i-1].x+ExtractDiff(area.rx)),area.ry.toString().startsWith("last_bottom")&&(area.y=boundaries[1].bottom+r[i-1].y+ExtractDiff(area.ry))),area.zones.map((zone,j,u)=>(lastZone=u[j-1],!isNaN(zone.rx)&&(zone.rx+=pushX),!isNaN(zone.ry)&&(zone.ry+=pushY),zone.x+=pushX,zone.y+=pushY,zone.inputs&&(zone.inputs.x.value=zone.rx,zone.inputs.y.value=zone.ry),(lastZone&&(zone.ry=="last_y"||zone.ry=="last_top"||zone.rx=="last_x"||zone.rx=="last_left"||zone.rw=="last_width"||zone.rh=="last_height"||zone.rx=="last_right"||zone.ry=="last_bottom"))&&((zone.rx=="last_x"||zone.rx=="last_left")&&(zone.x=lastZone.x),(zone.ry=="last_y"||zone.ry=="last_top")&&(zone.y=lastZone.y),zone.rw=="last_width"&&(zone.width=lastZone.width),zone.rh=="last_height"&&(zone.height=lastZone.height),zone.rx=="last_right"&&(zone.x=lastZone.x+lastZone.width),zone.ry=="last_bottom"&&(zone.y=lastZone.y+lastZone.height)))),area.assets.map((zone,j,u)=>(zone.x+=pushX,zone.y+=pushY,zone.inputs&&(zone.inputs.x.value=zone.x,zone.inputs.y.value=zone.y))),area.boundary=getAreaBoundary(area))),spawnEntities()
}

var copiedObjects=[];
function roundTo(x, y) {if(x < 0)return -roundTo(-x,y);return Math.round(x / y) * y }
// Zooming
var current_Area = 0;
var speedMultiplier=1;
var zoomLimit=8388608;
canvas.addEventListener("wheel", e => {
  if (e.ctrlKey) return;
  let m = 0.85 ** (e.deltaY / 125)*speedMultiplier;
  if(playtesting)return;
  Cam.setScale(Cam.editorScale*m);
  let newPos = {x:Cam.centerX+mouseEntity.ex*(m-1)/Cam.getScale(),y:Cam.centerY+mouseEntity.ey*(m-1)/Cam.getScale()};
  Cam.centerOn(newPos);
  if(Cam.editorScale>32||Cam.editorScale<1/zoomLimit){
    let fixedScale=Math.min(Math.max(1/zoomLimit,Cam.editorScale),32);
    m=fixedScale/Cam.editorScale;
    Cam.setScale(fixedScale);
    newPos = {x:Cam.centerX+mouseEntity.ex*(m-1)/Cam.getScale(),y:Cam.centerY+mouseEntity.ey*(m-1)/Cam.getScale()};
    Cam.centerOn(newPos);
  }
},{capture:true,passive:true});
const mousePos={ex:0,ey:0,get radius(){return 8/Cam.getScale()}}
Object.defineProperties.bind(mousePos)(mousePos,{
	health:{get(){},set(e){}},
	maxHealth:{get(){},set(e){}},
	remove:{get(){},set(e){}},
	area:{get:function(){return current_Area}},
	x:{get(){return this.ex/Cam.getScale()+Cam.centerX},set(e){Cam.centerX+=e-this.x}},
	y:{get(){return this.ey/Cam.getScale()+Cam.centerY},set(e){Cam.centerY+=e-this.y}}
})
let mouseEntity=mousePos;
let selectionArea=null;
function rectRectCollision(e,t){
	return(e.x < t.width + t.x && e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y);
}
canvas.addEventListener("mouseup", e => {
	if(!selectionArea)return;
	for(let obj of getObjects()){
		if(selectionArea.width==0||selectionArea.height==0)break;
		if((obj.type=="torch"||obj.type=="flashlight_spawner"||obj.type=="image_background")&&!(obj instanceof EvadesEntity)){
			if(rectCircleCollision(obj.x,obj.y,obj.radius??16,selectionArea.x,selectionArea.y,selectionArea.width,selectionArea.height).c){
				selectedObjects.push(obj);
				continue;
			}
		}else{
			if(rectRectCollision(selectionArea,obj)){
				selectedObjects.push(obj);
				continue;
			}
		}
	}
	selectionArea=null;
});
var isMouse=false;
function handleMMovement(e){
  // if (null === document.pointerLockElement && playtesting)canvas.requestPointerLock()
  if (e.button === 1) e.preventDefault();
  if (e.button !== 0) return;
  const t = canvas.getBoundingClientRect();
  const mouse_position = {x:e.offsetX,y:e.offsetY};
  if(selectionArea==null && (!selectedObjects.length&&!targetedObject(e)) && !playtesting){
	selectionArea={
		renderX:mousePos.x,
		renderY:mousePos.y,
		get ClampedMousePos(){
			return{
				x:clamp(mousePos.x,Cam.left,Cam.right),
				y:clamp(mousePos.y,Cam.top,Cam.bottom)
			};
		},
		get x(){return Math.min(this.renderX,this.ClampedMousePos.x)},
		get y(){return Math.min(this.renderY,this.ClampedMousePos.y)},
		get width(){return Math.abs(this.renderX-this.ClampedMousePos.x)},
		get height(){return Math.abs(this.renderY-this.ClampedMousePos.y)},
	};
  }
  let target = targetedObject(e);
  if(lockCursor)return;
  
  let beforeresize=e=>{}
  let resize = e => { };
  if (target && !(selectionArea?.width||selectionArea?.height)) {
	var temp={width:target.width,height:target.height,x:target.x,y:target.y};
	for(let obj in selectedObjects){
		if (selectedObjects[obj] && "element" in selectedObjects[obj]) selectedObjects[obj].element.remove();
	}
	selectedObjects.includes(target) || keysDown.has(controls.FOCUS) || (selectedObjects = [])
	selectedObjects.includes(target) || selectedObjects.push(target);
	selectedObjects.sort((e,t)=>{
		var a=map.areas[current_Area].zones.indexOf.bind(map.areas[current_Area].zones);
		var b=map.areas[current_Area].assets.indexOf.bind(map.areas[current_Area].assets);
		return (e.isAsset?b(e)+map.areas[current_Area].zones.length:a(e))-(t.isAsset?b(t)+map.areas[current_Area].zones.length:a(t));
	});
		if(target instanceof EvadesEntity){
			playtesting=true;
			playIcons.time = 0;
			playIcons.done = false;
			playIcons.prev = playtester.innerHTML;
			exportFile.disabled=
			ExportFormatType.disabled=
			importFile.disabled=
			reset.disabled=playtesting;
			ejector.disabled=!playtesting;
			menu.hidden=true;
			realTime.disabled=true;
			window.tempCamPos={x:Cam.centerX,y:Cam.centerY,area:current_Area},
			Cam.centerOn(target),
			evadesRenderer={snowRenderer:new SnowRenderer,sakuraRenderer:new SakuraRenderer,dynamicLighting:new DynamicLighting(1),directionalIndicatorHud:new DirectionalIndicatorHud,titleText:new TitleText,experienceBar:new ExperienceBar,overlayText:new OverlayText,heroInfoCard:new HeroInfoCard,minimap:new Minimap,areaInfo:new AreaInfo,mobileControls:new MobileControls},
      /*(settings.modifierFPE || map.name=="Research Lab") && */!evadesRenderer.fpe_teach_icons && (evadesRenderer.fpe_teach_icons=new FPE_TeachIcons),
			evadesRenderer.minimap.updateZones(),
			!(target instanceof Player)&&(
				evadesRenderer.titleText.ready=true,
				evadesRenderer.titleText.heroType=0
			),
			global.selfId=target.id,
			settings.toggleMouseMovement&&($e7009c797811e935$export$2e2bcd8739ae039.mouseMovementToggled=true),
			selectedObjects.length=0,
			selectMode=null;
			return;
		}else if(target.isAsset)target.createGUI();else customZONEgui(target);
		objectmenu.appendChild(target.element);
		const { x: posX, y: posY, width: sizeX, height: sizeY } = target ?? target;
		const mouseX = mousePos.x;
		const mouseY = mousePos.y;

		var snap={x:settings.snapX,y:settings.snapY}
		resize = (e={}) => {
		if(selectMode === "x")return;
			let y = mousePos.y;
			if(selectMode.includes("u")){
				target.y = roundTo(y, snap.y);
				if(!isNaN(target.ry))target.ry=target.y;
				if(!isNaN(target.rh))target.rh=target.height = roundTo(posY - y + sizeY, snap.y);
				if(!isNaN(target.ry))target.inputs.y.value = target.y;
				if(!isNaN(target.rh))target.inputs.height.value = target.height;
			}
			if(selectMode.includes("d")){
				if(!isNaN(target.rh))target.rh=target.height = roundTo(y - posY, snap.y);
				if(!isNaN(target.ry))target.inputs.y.value = target.y;
				if(!isNaN(target.rh))target.inputs.height.value = target.height;
			}
			let x = mousePos.x;
			if(selectMode.includes("r")){
				if(!isNaN(target.rw))target.rw = target.width = roundTo(x - posX, snap.x);
				if(!isNaN(target.rx))target.inputs.x.value = target.x;
				if(!isNaN(target.rw))target.inputs.width.value = target.width;
			}
			if(selectMode.includes("l")){
				target.x = roundTo(x, snap.x);
				if(!isNaN(target.rx))target.rx = target.x;
				if(!isNaN(target.rw))target.rw = target.width = roundTo(posX - x + sizeX, snap.x);
				if(!isNaN(target.rx))target.inputs.x.value = target.x;
				if(!isNaN(target.rw))target.inputs.width.value = target.width;
			}
			if (e.shiftKey && target.translate) {
			  let tx = Math.round((e.pageX - canvas.width / 2) / Cam.getScale() + Cam.centerX) - target.x;
			  let ty = Math.round((e.pageY - canvas.height / 2) / Cam.getScale() + Cam.centerY) - target.y;
			  target.translate.x = roundTo(tx - mouseX + posX, snap.x);
			  target.translate.y = roundTo(ty - mouseY + posY, snap.y);
			  target.inputs.tx.value = target.translate.x;
			  target.inputs.ty.value = target.translate.y;
			} else if(selectMode.includes("m")) {
			  if(!isNaN(target.rx))
			    target.rx = target.x = roundTo(x - mouseX + posX, snap.x),
			    target.inputs.x.value = target.x;
			  if(!isNaN(target.ry))
			    target.ry = target.y = roundTo(y - mouseY + posY, snap.y),
			    target.inputs.y.value = target.y;
			}
		};
    lockCursor = true;
    const u =(e)=>{
      let lastx=target.x;
      let lasty=target.y;
      let lastwidth=target.width;
      let lastheight=target.height;
      map.areas[current_Area].entities=[];
      resize(e);
	  var diffx=target.x-lastx;
	  var diffy=target.y-lasty;
      target.x=lastx;
      target.y=lasty;
	  selectedObjects.map(e=>{
		  e.x+=diffx;
		  e.y+=diffy;
		  (!isNaN(parseInt(e.rx)))&&(e.rx=e.x);
		  (!isNaN(parseInt(e.ry)))&&(e.ry=e.y);
	  })
      lastx=target.x;
      lasty=target.y;
    };
	window.onmousemove=u;
	window.onmouseup=()=>{lockCursor=false;updateMap();window.onmousemove=null;window.onmouseup=null};
  } else {
    selectedObjects.map(v=>{
      if(v.properties){
        "element" in v.properties && v.properties.element.remove();
        delete v.properties.inputs;
        delete v.properties.element;
      };
      "element" in v && v.element.remove();
      delete v.element;
      delete v.inputs;
      v.spawner&&v.spawner.map(e=>{
		  e.types.map(t=>{
			  "element" in t && t.element.remove();
			  delete t.element;
		  });
		  "element" in e && e.element.remove();
		  delete e.element;
		  delete e.inputs
	  });
    });
    selectedObjects = [];
  }
};
canvas.addEventListener("mousedown", handleMMovement);
let Cam = {
    init() {
        this.viewportSize = {width: 1280, height: 720},
        this.x = null,
        this.y = null,
        this.editorScale = 5/32,
        this.scale = 1,
        this.originalGameScale = 1,
        this.guiScale = 1,
        this.left = null,
        this.right = null,
        this.top = null,
        this.bottom = null,
        this.centerX = null,
        this.centerY = null,
        window.addEventListener("setscale", (e => {
            this.setScale(e.detail),
            null !== this.centerX && this.updateBounds()
        }
        )),
	delete this.init
    },
    updateBounds() {
        const e = this.viewportSize.width / 2 / this.getScale()
          , t = this.viewportSize.height / 2 / this.getScale();
        this.left = this.centerX - e,
        this.right = this.centerX + e,
        this.top = this.centerY - t,
        this.bottom = this.centerY + t
    },
    centerOn(e) {
        this.centerX = e.x,
        this.centerY = e.y,
        this.updateBounds(),
        this.x = this.viewportSize.width / 2 - e.x * this.getScale(),
        this.y = this.viewportSize.height / 2 - e.y * this.getScale()
    },
    getX(e) {
        return e * this.getScale() + this.x
    },
    getY(e) {
        return e * this.getScale() + this.y
    },
    toScale(e) {
        return e * this.getScale()
    },
    toGuiScale(e) {
        return e * this.getGuiScale()
    },
    getScale() {
	if(playtesting)return this.scale * this.originalGameScale;
	else return this.editorScale * this.originalGameScale
    },
    getGuiScale() {
        return this.guiScale * this.originalGameScale
    },
    setScale(e) {
	if(playtesting)this.scale = e;
	else this.editorScale = e
    }
};
Cam.init();
Cam.centerOn({x:0, y:0});
/** 
 * @param {MouseEvent} e 
 * @returns {Zone | Asset}
 */
function targetedObject(e) {
  const t = canvas.getBoundingClientRect(), mouse_position = {x:e.offsetX,y:e.offsetY};
  if(clamp(mousePos.x,Cam.left,Cam.right)!==mousePos.x)return null;
  if(clamp(mousePos.y,Cam.top,Cam.bottom)!==mousePos.y)return null;
  if(playtesting)return;
  let objects = getObjects().reverse();
  const Buf = Cam.toGuiScale(selectBuffer);
  for (const obj of objects) {
    const [{ x: x0, y: y0, width: x1, height: y1 }] = points(obj);
    const mouse = mouse_position;
    if (obj.type === "flashlight_spawner" || obj.type === "image_background" || obj.type === "torch" || (obj instanceof EvadesEntity)) {
      if (pointInCircle(mouse, { x: x0, y: y0 }, Cam.toScale(obj.radius ?? 16)+Buf)) {
        return obj;
      }
      continue;
    }
    if (pointInRect(mouse, { x: Math.min(x1,x0) - Buf, y: Math.min(y1,y0) - Buf }, { x: Math.max(x1,x0) + Buf, y: Math.max(y1,y0) + Buf })) return obj;
  }
  return null;
}
canvas.addEventListener("mousemove", e => {
  if(e){
    const t = canvas.getBoundingClientRect();
    if(document.pointerLockElement){
    mousePos.ex+=e.movementX;
    mousePos.ey+=e.movementY;
    }else{
    mousePos.ex=e.offsetX - canvas.width / 2;
    mousePos.ey=e.offsetY - canvas.height / 2;
    };
  };
  updateSelectMode(e.shiftKey);
});
function updateSelectMode(shift=false){
	if(lockCursor || playtesting)return;
	let arr = getObjects();
	for (let i = arr.length - 1; i >= 0; i--) {
		if(clamp(mousePos.x,Cam.left,Cam.right)!==mousePos.x||clamp(mousePos.y,Cam.top,Cam.bottom)!==mousePos.y||playtesting){selectMode=null;break};
		const obj = arr[i];
		const mouse = mousePos, type = obj.type;
		let L = obj.x;
		let R = obj.x + obj.width;
		let T = obj.y;
		let B = obj.y + obj.height;
		let Buf = selectBuffer / Cam.getScale();
		if (type === "flashlight_spawner" || type === "image_background" || type === "torch" || (obj instanceof EvadesEntity)) {
			if (pointInCircle(mouse, obj, (obj.radius??16) + Buf)){
				selectMode = "m";
				if(obj instanceof EvadesEntity)selectMode = "p";
				return;
			}
			continue;
		}
		var fixedPosX0=Math.min(L,R);
		var fixedPosY0=Math.min(T,B);
		var fixedPosX1=Math.max(L,R);
		var fixedPosY1=Math.max(T,B);
		let POINTS = [
			{x:fixedPosX0-Buf,y:fixedPosY0-Buf},
			{x:fixedPosX1+Buf,y:fixedPosY1+Buf},
			{x:fixedPosX1+Buf,y:fixedPosY0+Buf},
			{x:fixedPosX0+Buf,y:fixedPosY1+Buf},
			{x:fixedPosX0-Buf,y:fixedPosY1-Buf},
			{x:fixedPosX1-Buf,y:fixedPosY0-Buf},
			{x:fixedPosX0,y:fixedPosY0},
			{x:fixedPosX1,y:fixedPosY1},
		]
		const outer = pointInRect(mouse,POINTS[0],POINTS[1]);
		const up = pointInRect(mouse,POINTS[0],POINTS[2]);
		const left = pointInRect(mouse,POINTS[0],POINTS[3]);
		const down = pointInRect(mouse,POINTS[4],POINTS[1]);
		const right = pointInRect(mouse,POINTS[5],POINTS[1]);
		const middle = pointInRect(mouse,POINTS[6],POINTS[7]);
		const I={
			MoveFlags:(!isNaN(obj.rx))|((!isNaN(obj.ry))<<1),ResizeFlags:(!isNaN(obj.rw))|((!isNaN(obj.rh))<<1)
		};
		I.M =["x" ,"mh","mv","m" ][I.MoveFlags  ];
		I.U =[I.M ,I.M ,"u" ,"u" ][I.ResizeFlags];
		I.UR=[I.M ,"r" ,"u" ,"ur"][I.ResizeFlags];
		I.R =[I.M ,"r" ,I.M ,"r" ][I.ResizeFlags];
		I.DR=[I.M ,"r" ,"d" ,"dr"][I.ResizeFlags];
		I.D =[I.M ,I.M ,"d" ,"d" ][I.ResizeFlags];
		I.DL=[I.M ,"l" ,"d" ,"dl"][I.ResizeFlags];
		I.L =[I.M ,"l" ,I.M ,"l" ][I.ResizeFlags];
		I.UL=[I.M ,"l" ,"u" ,"ul"][I.ResizeFlags];
		if (middle)selectMode = I.M;
		else if(down)selectMode = left ? I.DL : right ? I.DR : I.D;
		else if(right)selectMode = up ? I.UR : down ? I.DR : I.R;
		else if(up)selectMode = left ? I.UL : right ? I.UR : I.U;
		else if(left)selectMode = up ? I.UL : down ? I.DL : I.L;
		else selectMode = null;
		if(null !== selectMode && shift && -1 !== "exit,teleport".split(",").indexOf(obj.type))selectMode="m";
		if (outer) return;
	}
}
let updateMouseEntity=true,selectedObjects=[],hitbox=true;
async function loadLanguage(file){
	const res=await fetch(file);
	await res.json().then(e=>{
		function formatString(str){
			var s=e[str]??str;
			var args=Array.from(arguments).slice(1);
			args.map(t=>s=s.replace("%s",t));
			return s;
		}
		togglemenu.innerText=formatString(`editor.toggleMenu.${menu.classList=="hidden"?"show":"hide"}`)
		contextmenu.rows[0].cells[0].innerText=formatString("editor.contextMenu.object")
		contextmenu.rows[1].cells[0].children[0].innerText=formatString("editor.contextMenu.object.copy")
		contextmenu.rows[1].cells[1].children[0].innerText=formatString("editor.contextMenu.object.cut")
		contextmenu.rows[1].cells[2].children[0].innerText=formatString("editor.contextMenu.object.paste")
		contextmenu.rows[2].cells[0].children[0].innerText=formatString("editor.contextMenu.object.delete")
		contextmenu.rows[2].cells[1].children[0].innerText=formatString("editor.contextMenu.object.duplicate")
		contextmenu.rows[2].cells[2].children[0].innerText=formatString("editor.contextMenu.object.rotate")
		contextmenu.rows[3].cells[0].innerText=formatString("editor.contextMenu.new")
		contextmenu.rows[4].cells[0].children[0].innerText=formatString("editor.contextMenu.new.zone")
		contextmenu.rows[4].cells[1].children[0].innerText=formatString("editor.contextMenu.new.asset")
		contextmenu.rows[5].cells[0].innerText=formatString("editor.contextMenu.area")
		contextmenu.rows[6].cells[0].children[0].innerText=formatString("editor.contextMenu.area.add")
		contextmenu.rows[6].cells[1].children[0].innerText=formatString("editor.contextMenu.area.duplicate")
		contextmenu.rows[6].cells[2].children[0].innerText=formatString("editor.contextMenu.area.delete")
		contextmenu.rows[7].cells[0].children[0].innerText=formatString("editor.contextMenu.area.duplicateAdjacent")
		global.formatString=formatString;
		"element" in map && (map.element.remove(),delete map.element);
		map.element=createFolder(formatString("editor.region"), [
			createProperty(formatString("editor.property.name"),nameInput=createInput(map.name,_=>{map.name=nameInput.value}),"text"),
			createProperty(formatString("editor.property.share_to_drive"),boolInput=createInput(map.share_to_drive,_=>{map.share_to_drive=boolInput.checked}),"switch"),
			(map.properties=createPropertyObj({...map.properties},"region")).element,
		]);
		map.element.classList.add("closed");
		menu.insertBefore(map.element,areamenu);
		areamenu.firstChild && areamenu.removeChild(areamenu.firstChild);
		if(selectedObjects){
			for(const obj of selectedObjects){
				obj.element.remove();
				obj.properties.element.remove();
				delete obj.element;
				delete obj.properties.element;
				delete obj.inputs;
			}
		}
		selectedObjects=[];
		customAREAgui(map.areas[0]);
		areamenu.appendChild(map.areas[0].element);
	});
};
const languages=["en_us","ru_ru"];
loadLanguage(`${languages[settings.language]}.json`);
canvas.addEventListener("contextmenu",e=>{if(e.preventDefault(),e.target===contextmenu||playtesting)return;contextmenu.style.left=e.x+1+"px";contextmenu.style.top=e.y+1+"px";duplicateObject.disabled=deleteObject.disabled=copyObject.disabled=cutObject.disabled=!selectedObjects.length;pasteObject.disabled=!copyObjects.length;rotateObject.disabled=!selectedObjects.length;deleteArea.disabled=map.areas.length<2;show(contextmenu,updateMouseEntity=false)});
[displayEnergyBars,tileMode,body_collection,hat_collection,gem_collection].map(e=>e.addEventListener("input",t=>{settings[t.target.id.split("_")[0]]=t.target.selectedIndex}));
[fadingEffects,abilityParticles,legacySpeedUnits,realTime,enemyOutlines,enemyProjectileOutlines,toggleMouseMovement,enableMouseMovement,displayGameplayHints,displayLeaderboard,displayChat,confetti,displayTimer,backgroundObjects].map(e=>e.addEventListener("input",t=>{settings[t.target.id]=t.target.checked}));
[interfaceScale,snapX,pelletTransparency,frameRate,snapY,joystickDeadzone].map(e=>e.addEventListener("input",t=>{settings[t.target.id]=t.target.value}));
lang.addEventListener("input",e=>{settings.language=e.target.selectedIndex;loadLanguage(`${languages[settings.language]}.json`)});
herotype.addEventListener("input",e=>{settings.heroType=e.target.selectedIndex-1});
document.addEventListener("click",e=>{if(e.target==contextmenu||e.target.parentNode==contextmenu&&e.button==2)return;if(e.target==canvas&&e.button==2)return;hide(contextmenu,updateMouseEntity=true)});
reset.addEventListener("click",e=>{
	customConfirm(formatString("editor.confirm.start_from_scratch"),formatString("editor.confirm.yes"),formatString("editor.confirm.no"),r=>{r&&loadFile(`name: No Name
areas:
  - x: var x
    y: var y
    zones:
      - type: safe
        x: 0
        y: 0
        width: 160
        height: 160
`,false,false)})
})
/*Object.defineProperty(global,"consumed_by_ink_demon",{
	get(){
		if(!prec.ended && prec.paused && useractive.hasBeenActive && new Date().getMonth()==3 && new Date().getDate() == 1){
      canvasBox.hidden=true; // deleting hud
      playtesting&&stopPlaytesting(); // Force them to stop playtesting when the date reaches this day.
			global.a=1;
			prec.play();
			setTimeout(()=>{
			  cons.play()
			  setTimeout(()=>{
          VFX.play();
        },5e3);
			  document.body.requestFullscreen().then(e=>{
          document.title="april fools bitch (there's a pipe bomb inside ur walls fibvuirbifg)";
        });
			},2e3);
			return true;
		}else if(new Date().getMonth() == 3 && new Date().getDate() <= 2 && map.areas[current_Area] && !map.areas[current_Area].entities.filter(e=>e instanceof MissCicles).length){
      let Ang = Math.random()*Math.PI*2, Ent;
      localStorage.fpe = true;
      console.log("Hey, yes you, let's play some FPE. https://igloogolo.itch.io/fundamental-paper-education :)");
      let h=map.players.filter(e=>e.id == selfId)[0] || {x:Cam.centerX,y:Cam.centerY};
      map.areas[current_Area].entities.push(Ent=new MissCicles(h.x+3200*Math.cos(Ang),h.y+3200*Math.sin(Ang)));
      Ent.target_angle = Ent.angle = Ang;
      Ent.facing_angle = -180+Ang/Math.PI*180;
      Ent.facing_angle > 180 && (Ent.facing_angle -= 360);
      return 1;
    }
		return false;
	},
	set(e){
		if(!prec.ended && prec.paused && useractive.hasBeenActive && Boolean(e)){
      canvasBox.hidden=true; // deleting hud
      playtesting&&stopPlaytesting(); // Force them to stop playtesting.
			global.a=1;
			prec.play();
			setTimeout(()=>{
			cons.play()
			setTimeout(()=>{VFX.play()},5e3);
			document.body.requestFullscreen();
			},2e3);
			return true;
		}
		return false;
	}
});*/
document.addEventListener("keydown", e => {
	if(confirmationPopup || e.target instanceof HTMLInputElement)
		return;
  if(!simulateIt||regionIsLoading)return;
	if(e.ctrlKey&&e.which===KeyMap.A){
    for(const zone of map.areas[current_Area].zones)
      if(-1 === selectedObjects.indexOf(zone))selectedObjects.push(zone);
    for(const asset of map.areas[current_Area].assets)
      if(-1 === selectedObjects.indexOf(asset))selectedObjects.push(asset);
		return e.preventDefault();
  }
	if(e.ctrlKey&&e.which===KeyMap.C&&selectedObjects.length)
		return e.preventDefault(copyObjs());
	if(e.ctrlKey&&e.which===KeyMap.X&&selectedObjects.length)
		return e.preventDefault(cutObjs());
	if(e.ctrlKey&&e.which===KeyMap.V&&copyObjects.length)
		return e.preventDefault(pasteObjs());
	if(e.which===controls.PLAYTEST)
		Playtest(e);
	if(playtesting){
		const plr=map.players[map.players.map(t=>t.id).indexOf(selfId)];
		let u,safezone,bound,canUpdateElements;
		//Commands /teleport, /tp: teleport to a zone with fuzzy search. Usage: /teleport <region>
		if(u=(e.which===KeyMap.T)-(e.which===KeyMap.E),u&&plr.area!==clamp(plr.area+u,0,map.areas.length-1)){
      let canUnload=true;
      for(let player of map.players){
        if(plr === player)continue;
        if(player.area === plr.area && !plr.remove && !player.remove){canUnload=false;break;}
      }
			canUnload && (map.areas[plr.area].entities.length=0,map.areas[plr.area].isLoaded=false),
			plr.area=clamp(plr.area+u,0,map.areas.length-1),
			safezone=map.areas[plr.area].zones.filter(e=>e.type=="safe")[0]??map.areas[plr.area].zones[0],
  		plr.x=safezone.x+1+plr.radius+Math.max(0,safezone.width-2-plr.radius*2)*Math.random(),
	  	plr.y=safezone.y+1+plr.radius+Math.max(0,safezone.height-2-plr.radius*2)*Math.random(),
			plr.onTele=true;
      let area=map.areas[plr.area];
		  for(const zone of area.zones){
		  	if(zone.type=="teleport"&&rectCircleCollision(plr.x,plr.y,plr.radius,zone?.x,zone?.y,zone?.width,zone?.height).c){
		  		const left=safezone.x,right=left+safezone.width,top=safezone.y,bottom=top+safezone.height;
		  		plr.x=Math.min(Math.max(plr.x,left+plr.radius*2),right-plr.radius*2);
		  		plr.y=Math.min(Math.max(plr.y,top+plr.radius*2),bottom-plr.radius*2);
		  		break;
		  	}
		  }
			spawnEntities(plr.area);
    }
		if(e.which===KeyMap.Y)//Toggle Cooldown (Command: /cd, /cooldown)
			plr.noCooldown=!plr.noCooldown;
		if(e.which===controls.PLAYTEST-3&&location.search=="?isDev")//Admin (Command: /a, /admin)
			e.preventDefault(),
			plr.admin=true,
			plr.deathTimer=-1,
			plr.speed=510,
			plr.maxEnergy=plr.energy=500,
			plr.energyRegen=500,
			plr.level=100,
			plr.noCooldown=true,
			plr.experience=plr.nextLevelExperience,
			(plr.abilityOne)&&(plr.abilityOne.locked=false,plr.abilityOne.level=plr.abilityOne.maxLevel),
			(plr.abilityTwo)&&(plr.abilityTwo.locked=false,plr.abilityTwo.level=plr.abilityTwo.maxLevel),
			(plr.abilityThree)&&(plr.abilityThree.locked=false,plr.abilityThree.level=plr.abilityThree.maxLevel);
		if(e.which===KeyMap.N)//Godmode (Command: /g)
			e.preventDefault(),
			plr.godmode++,
      plr.godmode%=3,
      plr.godmode==2&&plr.delete_all_active_debuffs(),
			plr.deathTimer=-1;
		return;
	};
	if(e.which===controls.TOGGLE_HITBOX)
		hitbox=!hitbox;
	if(u=(e.which===controls.NEXT_AREA)-(e.which===controls.PREVIOUS_AREA),canUpdateElements=current_Area!=clamp(current_Area+u,0,map.areas.length-1),canUpdateElements&&!lockCursor){
		map.areas[current_Area].element.remove(),
		map.areas[current_Area].properties.element.remove(),
		delete map.areas[current_Area].inputs,
		delete map.areas[current_Area].element,
		delete map.areas[current_Area].properties.inputs,
		delete map.areas[current_Area].properties.element;
    let canUnload=true;
    for(let player of map.players){
      if(player.area === current_Area && !player.remove){canUnload=false;break;}
    }
		canUnload && (map.areas[current_Area].entities.length=0);
		current_Area=clamp(current_Area+u,0,map.areas.length-1),
		customAREAgui(map.areas[current_Area]),
		areamenu.appendChild(map.areas[current_Area].element),
		bound=map.areas[current_Area].boundary,
		Cam.centerOn({x:bound.width/2+bound.left,y:bound.height/2+bound.top}),
		spawnEntities(),
		selectedObjects.length&&(
			selectedObjects.map(selectedObject=>{
				if(selectedObject.properties)
					"element"in selectedObject.properties&&selectedObject.properties.element.remove(),
					delete selectedObject.properties.inputs,
					delete selectedObject.properties.element;
				"element"in selectedObject&&selectedObject.element.remove();
				delete selectedObject.inputs;
				delete selectedObject.element;
				selectedObject.spawner&&selectedObject.spawner.map(e=>{
					e.types.map(t=>{
						"element"in t&&t.element.remove();
						delete t.element;
					});
					"element"in e&&e.element.remove();
					delete e.inputs;
					delete e.element;
				});
			}),
			selectedObjects=[],
			duplicateObject.disabled=!selectedObjects.length,
			deleteObject.disabled=!selectedObjects.length,
			copyObject.disabled=!selectedObjects.length,
			cutObject.disabled=!selectedObjects.length,
			pasteObject.disabled=!copyObjects.length,
			rotateObject.disabled=!selectedObjects.length
		);
  }
	if (e.which === controls.DELETE_ZONE)
		deleteObjs(),
		spawnEntities();
});
function stopPlaytesting(local=true){
	let selfPlayer;
	if(local){
		playtesting=false,
    exportFile.disabled=
    ExportFormatType.disabled=
    importFile.disabled=
    reset.disabled=false,
    ejector.disabled=true,
		menu.hidden=false,
		realTime.disabled=false,Cam.centerOn(window.tempCamPos);
    let canUnload=true;
    for(let player of map.players){if(player.area===current_Area&&!player.remove){canUnload=false;break}}
		canUnload&&(map.areas[current_Area].entities.length=0,map.areas[current_Area].isLoaded=false),
		current_Area=window.tempCamPos.area,
		selfPlayer=map.players.filter(e=>e.id==selfId)[0],
		selfPlayer&&(selfPlayer.remove=true,map.players.splice(map.players.indexOf(selfPlayer),1),selfId=null,current_Area=tempCamPos.area,spawnEntities()),
		evadesRenderer={snowRenderer:new SnowRenderer,sakuraRenderer:new SakuraRenderer,dynamicLighting:new DynamicLighting(1)};
  }
  playIcons.time = 0;
  playIcons.done = false;
  playIcons.prev = playtester.innerHTML;
}
let playIcons={
  time:     0,
  done:     true,
  duration: 200,
  prev:     `<svg fill="currentcolor" viewBox="0 0 36 36" height="36" width="36"><path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg>`,
  pause:    `<svg fill="currentcolor" viewBox="0 0 36 36" height="36" width="36"><path d="M 12,26 16.0,26 16.0,10 12,10 z M 21.0,26 25,26 25,10 21.0,10 z"></path></svg>`,
  play:     `<svg fill="currentcolor" viewBox="0 0 36 36" height="36" width="36"><path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg>`,
}
function Playtest(e){
	if(e.preventDefault(),false)return customAlert("Fatal Error",5,t=>`rgb(255,${Math.cos(t)*127.5+127.5},${Math.cos(t)*127.5+127.5})`);
	if(false)return customAlert("Error 404: Simulation Not Found",5);
	let safezone=map.areas[0].zones.filter(e=>e.type=="safe")[0]??map.areas[0].zones[0],selfPlayer=new Player(safezone.x+16+(safezone.width-32)*Math.random(),safezone.y+16+(safezone.height-32)*Math.random(),settings.heroType);
  playtesting=!playtesting;
  playIcons.time = 0;
  playIcons.done = false;
  playIcons.prev = playtester.innerHTML;
	if(!playtesting)
		return $e7009c797811e935$export$2e2bcd8739ae039.deregisterListeners(),
			$e7009c797811e935$export$2e2bcd8739ae039.buttons.length=0,
			isFinish=false,
			stopPlaytesting();
  exportFile.disabled=
  ExportFormatType.disabled=
  importFile.disabled=
  reset.disabled=playtesting;
  ejector.disabled=!playtesting;
  menu.hidden=true;
  realTime.disabled=true;
	if(playtesting)
		window.tempCamPos={x:Cam.centerX,y:Cam.centerY,area:current_Area},
		Cam.centerOn(selfPlayer),
		evadesRenderer={snowRenderer:new SnowRenderer,sakuraRenderer:new SakuraRenderer,dynamicLighting:new DynamicLighting(1),directionalIndicatorHud:new DirectionalIndicatorHud,titleText:new TitleText,experienceBar:new ExperienceBar,overlayText:new OverlayText,heroInfoCard:new HeroInfoCard,minimap:new Minimap,areaInfo:new AreaInfo,mobileControls:new MobileControls},
		/*(settings.modifierFPE || map.name=="Research Lab") && */!evadesRenderer.fpe_teach_icons && (evadesRenderer.fpe_teach_icons=new FPE_TeachIcons),
		evadesRenderer.minimap.updateZones(),
		global.selfId=selfPlayer.id,
		selectMode=null,
		map.players.push(selfPlayer),
		spawnEntities(selfPlayer.area);
}
resizemenu.addEventListener("mousedown",_=>(resizing=true));
document.addEventListener("mouseup",_=>(resizing=false));
document.addEventListener("mousemove",e=>resizing&&(menu.style.width=Math.max((window.innerWidth-e.pageX)/Cam.originalGameScale-15,200)+"px"));
document.addEventListener("DOMContentLoaded",e=>{
  loadData();
  canvasBox.hidden=false;
  fetch("https://api.socialcounts.org/youtube-live-subscriber-count/UCzYfz8uibvnB7Yc1LjePi4g").then(e=>{if(e.ok)e.json().then(t=>version[2]="1."+(settings.local.suba=t.est_sub))})
  global.socket=new WebSocket('wss://evades-regedit-server.glitch.me/');
  socket.binaryType="arraybuffer";
  function socketclosed(e){
      var chatmsg=document.createElement("div");
      mouseEntities=[];
  	leaderboard.innerHTML=`<span class="leaderboard-title">Leaderboard</span><div class="leaderboard-line server-info"><span class="leaderboard-name"><b>Disconnected</b></span></div>`;
  	if(global.chat){
      chatmsg.setAttribute("class","chat-message")
      chatmsg.setAttribute("style","color:red")
      chatmsg.innerHTML="<b>Disconnected</b>";
      document.getElementById("chat-window").appendChild(chatmsg);
      document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight - document.getElementById("chat-window").clientHeight;
      if(document.getElementById("chat-window").childNodes.length>1e4){
        document.getElementById("chat-window").childNodes[0].remove()
      }}
    setTimeout(()=>{
      global.socket=new WebSocket('wss://evades-regedit-server.glitch.me/');
      socket.binaryType="arraybuffer";
      global.chat&&(document.getElementById("chat-window").innerHTML="");
  	leaderboard.innerHTML=`<span class="leaderboard-title">Leaderboard</span><div class="leaderboard-line server-info"><span class="leaderboard-name"><b>Connecting</b></span></div>`;
      socket.addEventListener("close",socketclosed);
      socket.addEventListener("message",socketreceive);
    },3e3);
  }
  socket.addEventListener("close",socketclosed);
  socket.addEventListener("message",socketreceive);
});
function socketreceive(e){
  let c=document.getElementById("chat-window"),message=msgpack.decode(new Uint8Array(e.data)),M,users={};
  while(message.chatmsg&&(M=document.createElement("div"),M.setAttribute("class","chat-message"),M.setAttribute("style","color:#"+(message.color??(2**24-1)).toString(16).padStart(6,"0")),M.innerHTML=(message.id||"?")+": "+message.chatmsg,c.appendChild(M),c.scrollTop=c.scrollHeight-c.clientHeight,message.chatmsg=void 0),c.childNodes.length>1e4){c.childNodes[0].remove()};
  message.leaderboard&&(
    users.Europe=message.leaderboard.filter(e=>e.includes("<span class=\"head-mod\">")),
    users.Eurasia=message.leaderboard.filter(e=>e.includes("<span class=\"europe-asia\">")),
    users.AfroAsia=message.leaderboard.filter(e=>e.includes("<span class=\"africa-asia\">")),
    users.AfroEurope=message.leaderboard.filter(e=>e.includes("<span class=\"africa-europe\">")),
    users.AfroEurasia=message.leaderboard.filter(e=>e.includes("<span class=\"africa-europe-asia\">")),
    users.Asia=message.leaderboard.filter(e=>e.includes("<span class=\"streamer\">")),
    users.Antarctica=message.leaderboard.filter(e=>e.includes("<span class=\"mod\">")),
    users.SouthAmerica=message.leaderboard.filter(e=>e.includes("<span class=\"youtuber\">")),
    users.Africa=message.leaderboard.filter(e=>e.includes("<span class=\"sr-mod\">")),
    users.Oceania=message.leaderboard.filter(e=>e.includes("<span class=\"jr-mod\">")),
    users.NorthAmerica=message.leaderboard.filter(e=>e.includes("<span class=\"dev\">")),
    leaderboard.innerHTML=`
      <span class="leaderboard-title">Leaderboard</span>
      <div class="leaderboard-line server-info">
        <span class="leaderboard-name"><b>Online: ${message.leaderboard.length}/1000</b></span>
      </div>
      ${users.Africa.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title sr-mod">Africa</span></div>':""}${users.Africa.map(e=>`<div class="leaderboard-line sr-mod"><span class="leaderboard-name">${e.split("[AF]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.AfroAsia.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title africa-asia">Afro-Asia</span></div>':""}${users.AfroAsia.map(e=>`<div class="leaderboard-line africa-asia"><span class="leaderboard-name">${e.split("[AA]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.AfroEurasia.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title africa-europe-asia">Afro-Eurasia</span></div>':""}${users.AfroEurasia.map(e=>`<div class="leaderboard-line africa-europe-asia"><span class="leaderboard-name">${e.split("[AE]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.AfroEurope.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title africa-europe">Afro-Europe</span></div>':""}${users.AfroEurope.map(e=>`<div class="leaderboard-line africa-europe"><span class="leaderboard-name">${e.split("[AU]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.Antarctica.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title mod">Antarctica</span></div>':""}${users.Antarctica.map(e=>`<div class="leaderboard-line mod"><span class="leaderboard-name">${e.split("[AN]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.Asia.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title streamer">Asia</span></div>':""}${users.Asia.map(e=>`<div class="leaderboard-line streamer"><span class="leaderboard-name">${e.split("[AS]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.Eurasia.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title europe-asia">Eurasia</span></div>':""}${users.Eurasia.map(e=>`<div class="leaderboard-line europe-asia"><span class="leaderboard-name">${e.split("[EA]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.Europe.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title head-mod">Europe</span></div>':""}${users.Europe.map(e=>`<div class="leaderboard-line head-mod"><span class="leaderboard-name">${e.split("[EU]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.NorthAmerica.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title dev">North America</span></div>':""}${users.NorthAmerica.map(e=>`<div class="leaderboard-line dev"><span class="leaderboard-name">${e.split("[NA]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.Oceania.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title jr-mod">Oceania</span></div>':""}${users.Oceania.map(e=>`<div class="leaderboard-line jr-mod"><span class="leaderboard-name">${e.split("[OC]</span> ")[1]||"?"}</span></div>`).join("")}
      ${users.SouthAmerica.length?'<div class="leaderboard-title-break"><br><span class="leaderboard-world-title youtuber">South America</span></div>':""}${users.SouthAmerica.map(e=>`<div class="leaderboard-line youtuber"><span class="leaderboard-name">${e.split("[SA]</span> ")[1]||"?"}</span></div>`).join("")}`);
  (message.chathistory??[]).slice(-250).map(t=>{var M=document.createElement("div");while(M.setAttribute("class","chat-message"),M.setAttribute("style","color:#"+(t.color??(2**24-1)).toString(16).padStart(6,"0")),M.innerHTML=(t.id||"?")+": "+t.chatmsg,c.appendChild(M),c.scrollTop=c.scrollHeight-c.clientHeight,c.childNodes.length>1e4){c.childNodes[0].remove()}});
  var Mv=document.createElement("div");
  (message.nick!==null&&message.nick!==undefined)&&(Mv.innerHTML = message.nick,nickname.value=Mv.innerText);
  message.ping&&socket.send(msgpack.encode({pong:true}));
}
togglemenu.addEventListener("click",_=>(menu.classList.toggle("hidden"),_.target.innerText=formatString(`editor.toggleMenu.${menu.classList=="hidden"?"show":"hide"}`)));
exportFile.addEventListener("click",_=>download(map.name));
importFile.addEventListener("input",_=>{
  if(importFile.files.length)
    importFile.files[0].text().then(value=>{
      let filename = importFile.files[0].name
      loadFile(
        value,
        true,
        true,
        filename.split(".")[filename.split(".").length-2].startsWith("legacy"),
        filename.split(".")[filename.split(".").length-1]
      )
    }).catch(e=>(
      customAlert(e,1/0,t=>`rgb(255,${(Math.round(t/500)%2)*255},${(Math.round(t/500)%2)*255})`),
      console.error("OH SHIT!!\n",e)
    ));
});
window.addEventListener("beforeunload",e=>(e.preventDefault(),e.returnValue="Have you saved your map?"));
function createInput(value, event, type = "string") {
  var e = document.createElement("input");
  (type == "number" || type == "string") && (e.value = value);
  e.addEventListener("input", event)
  return e;
}

nickname.addEventListener("input",e=>{
	socket.send(msgpack.encode({nick:nickname.value}));
})
/** 
 * @param {Properties} obj
*/
var copyObjects=[];
function createPropertyObj(properties={},t){
	delete properties.element;
	var arrayCheck=Object.keys(properties);
	var arr="title_stroke_color,background_color,friction,lightning_reduced,spawns_lost_souls,texture,lighting,snow,sakura_leaves,minimum_speed,maximum_speed,max_level,death_timer,warping_disabled,crumble_reduced,radioactive_gloop_reduced,wind_ghosts_do_not_push_while_downed,magnetism,partial_magnetism,pellet_count,pellet_multiplier,applies_lantern,spawns_pellets,sticky_coat_distort_reduced,allow_solo_with_group,all_enemies_immune,charge_reduced".split(",");
	if(t=="zone"){
		arr="background_color,friction,texture,spawns_pellets,minimum_speed,maximum_speed".split(",");
	}
	for(var i in properties){
		if(arr.indexOf(i)===-1&&t!="region"&&!defaultValues.properties.hasOwnProperty(i))
			customAlert(`[Warning]: ${i} is not allowed in ${t} properties.`,10,t=>`rgb(255,${0x99+Math.random()*0x10},${0x33+Math.random()*0x10})`);
		else if(arr.indexOf(i)==-1&&t=="region"){
			customAlert(`[Unknown property] ${i} is not assigned to default property and therefore removed. The modified value was ${JSON.stringify(properties[i])}.`,1/0,t=>`rgb(255,${0x33+Math.random()*0x10},${0x33+Math.random()*0x10})`);
			delete properties[i];
		};
	};
	/*
	Region Properties Default Values
		background_color = 0
		friction = 1
		texture = payloads.server.NORMAL_TEXTURE #normal
		lighting = 1.0
		snow = 0
		minimum_speed = None
		maximum_speed = None
		max_level = 100
		death_timer = None
		warping_disabled = False
		crumble_reduced = False
		wind_ghosts_do_not_push_while_downed = False
		magnetism = False
		partial_magnetism = False
		pellet_count = 25
		pellet_multiplier = 1
		applies_lantern = False
		all_enemies_immune = False
		spawns_lost_souls = False
		charge_reduced = False
		spawns_pellets = None
		
	Removed/Unused Region Properties
		radioactive_gloop_reduced = False
		lightning_reduced = False
		sticky_coat_distort_reduced = False
		allow_solo_with_group = False
	*/
	function CreateInput(value,step,type="number",inputEvent,input){
		return(input=document.createElement("input"),type=="checkbox")?(input.checked=value??false):(input.value=value??"",input.step=step??1),input.addEventListener("input",inputEvent),input;
	}
  if(!(properties.title_stroke_color instanceof Array) && "number" === typeof properties.title_stroke_color)properties.title_stroke_color = ((x)=>[(x>>24)&255,(x>>16)&255,(x>>8)&255,(x>>0)&255])(properties.title_stroke_color);
  if(!(properties.background_color instanceof Array) && "number" === typeof properties.background_color)properties.background_color = ((x)=>[(x>>24)&255,(x>>16)&255,(x>>8)&255,(x>>0)&255])(properties.background_color);
	const isLegacy=settings.legacySpeedUnits;
	const	PartialMagnetism=CreateInput(properties.partial_magnetism,null,"checkbox",_=>{
		properties.partial_magnetism = _.target.checked;
	}),	Magnetism=CreateInput(properties.magnetism,null,"checkbox",_=>{
		properties.magnetism = _.target.checked;
	}),	LightningReduced=CreateInput(properties.lightning_reduced,null,"checkbox",_=>{
		properties.lightning_reduced=_.target.checked;
	}),	SpawnsLostSouls=CreateInput(properties.spawns_lost_souls,null,"checkbox",_=>{
		properties.spawns_lost_souls=_.target.checked;
	}),	WindGhostsDoNotPushWhileDowned=CreateInput(properties.wind_ghosts_do_not_push_while_downed,null,"checkbox",_=>{
		properties.wind_ghosts_do_not_push_while_downed=_.target.checked;
	}),	StickyCoatDistortReduced=CreateInput(properties.sticky_coat_distort_reduced,null,"checkbox",_=>{
		properties.sticky_coat_distort_reduced=_.target.checked;
	}),	WarpingDisabled=CreateInput(properties.warping_disabled,null,"checkbox",_=>{
		properties.warping_disabled=_.target.checked;
	}),	CrumbleReduced=CreateInput(properties.crumble_reduced,null,"checkbox",_=>{
		properties.crumble_reduced=_.target.checked;
	}),	AppliesLantern=CreateInput(properties.applies_lantern,null,"checkbox",_=>{
		properties.applies_lantern=_.target.checked;
	}),	AllEnemiesImmune=CreateInput(properties.all_enemies_immune,null,"checkbox",_=>{
		properties.all_enemies_immune=_.target.checked;
	}),	AllowSoloWithGroup=CreateInput(properties.allow_solo_with_group,null,"checkbox",_=>{
		properties.allow_solo_with_group=_.target.checked;
	}),	ChargeReduced=CreateInput(properties.charge_reduced,null,"checkbox",_=>{
		properties.charge_reduced=_.target.checked;
	}),	RadioactiveGloopReduced=CreateInput(properties.radioactive_gloop_reduced,null,"checkbox",_=>{
		properties.radioactive_gloop_reduced=_.target.checked;
	}),	MinimumSpeed=CreateInput(void 0==properties.minimum_speed?"":(properties.minimum_speed/30**isLegacy),1/30**isLegacy,null,_=>{
		if(_.target.value=="")delete properties.minimum_speed;else properties.minimum_speed=Number(_.target.value)*30**isLegacy;
	}),	MaximumSpeed=CreateInput(void 0==properties.maximum_speed?"":(properties.maximum_speed/30**isLegacy),1/30**isLegacy,null,_=>{
		if(_.target.value=="")delete properties.maximum_speed;else properties.maximum_speed=Number(_.target.value)*30**isLegacy;
	}),	DeathTimer=CreateInput(properties.death_timer,null,null,_=>{
		if(_.target.value=="")delete properties.death_timer;else properties.death_timer=Number(_.target.value);
	}),	MaxLevel=CreateInput((DeathTimer.title="in milliseconds",properties.max_level),null,null,_=>{
		if(_.target.value==""&&t=="region")_.target.value=defaultValues.properties.max_level;if(_.target.value=="")delete properties.max_level;else properties.max_level=Number(_.target.value);
	}),	PelletCount=CreateInput(properties.pellet_count,null,null,_=>{
		if(_.target.value==""&&t=="region")_.target.value=defaultValues.properties.pellet_count;if(_.target.value=="")delete properties.pellet_count;else properties.pellet_count=Number(_.target.value);spawnEntities();
	}),	PelletMultiplier=CreateInput(properties.pellet_multiplier,null,null,_=>{
		if(_.target.value==""&&t=="region")_.target.value=defaultValues.properties.pellet_multiplier;if(_.target.value=="")delete properties.pellet_multiplier;else properties.pellet_multiplier=Number(_.target.value);spawnEntities();
	}),	Friction=CreateInput(properties.friction,null,null,_=>{
		if(_.target.value==""&&t=="region")_.target.value=defaultValues.properties.friction;if(_.target.value=="")delete properties.friction;else properties.friction=Number(_.target.value);
	}),	Lighting=CreateInput(properties.lighting,null,null,_=>{
		if(_.target.value==""&&t=="region")_.target.value=defaultValues.properties.lighting;if(_.target.value=="")delete properties.lighting;else properties.lighting=Number(_.target.value=clamp(_.target.value,0,1).toFixed(2));
	}),	Snow=CreateInput(properties.snow,null,null,_=>{
		if(_.target.value==""&&t=="region")_.target.value=defaultValues.properties.snow;if(_.target.value=="")delete properties.snow;else properties.snow=Number(_.target.value=Math.max(_.target.value,0).toFixed(2));
	}),	SakuraLeaves=CreateInput(properties.sakura_leaves,null,null,_=>{
		if(_.target.value==""&&t=="region")_.target.value=defaultValues.properties.sakura_leaves;if(_.target.value=="")delete properties.sakura_leaves;else properties.sakura_leaves=Number(_.target.value=Math.max(_.target.value,0).toFixed(2));
	}),	BackgroundColor=CreateInput((properties.background_color??[]).join(", "),null,"text",_=>{
		if(_.target.value==""&&t=="region")_.target.value=((x)=>[(x>>24)&255,(x>>16)&255,(x>>8)&255,(x>>0)&255])(defaultValues.properties.background_color).join(", ");
		if(_.target.value=="")properties.background_color=void 0;
		else if(_.target.value.split(", ").length==1)_.target.value=(properties.background_color=((x)=>[(x>>24)&255,(x>>16)&255,(x>>8)&255,(x>>0)&255])(Number(_.target.value))).join(", ");
		else if(_.target.value.split(", ").length==4)_.target.value=(properties.background_color=_.target.value.split(", ").map((e,t,a)=>isNaN(Number(a[t]))?(a[t]=0):(a[t]=clamp(Number(a[t])>>0,0,255)))).join(", ");
	}),	TitleStrokeColor=CreateInput((properties.title_stroke_color??[]).join(", "),null,"text",_=>{
		if(_.target.value==""&&t=="region")_.target.value=((x)=>[(x>>24)&255,(x>>16)&255,(x>>8)&255,(x>>0)&255])(defaultValues.properties.title_stroke_color).join(", ");
		if(_.target.value=="")properties.title_stroke_color=void 0;
		else if(_.target.value.split(", ").length==1)_.target.value=(properties.title_stroke_color=((x)=>[(x>>24)&255,(x>>16)&255,(x>>8)&255,(x>>0)&255])(Number(_.target.value))).join(", ");
		else if(_.target.value.split(", ").length==4)_.target.value=(properties.title_stroke_color=_.target.value.split(", ").map((e,t,a)=>isNaN(Number(a[t]))?(a[t]=0):(a[t]=clamp(Number(a[t])>>0,0,255)))).join(", ");
	});
	[MinimumSpeed,MaximumSpeed,DeathTimer,MaxLevel,PelletCount,PelletMultiplier,Friction,Lighting,Snow,SakuraLeaves,BackgroundColor,TitleStrokeColor].map(e=>t!="region"&&(e.placeholder="Inherit"));
	if(t=="region")
		properties.element=createFolder(formatString("editor.property.properties"),[
			createProperty(formatString("editor.property.all_enemies_immune"),AllEnemiesImmune,"switch"),
			//createProperty(formatString("editor.property.allow_solo_with_group"),AllowSoloWithGroup,"switch"),
			createProperty(formatString("editor.property.applies_lantern"),AppliesLantern,"switch"),
			createProperty(formatString("editor.property.background_color"),BackgroundColor,"text"),
			createProperty(formatString("editor.property.charge_reduced"),ChargeReduced,"switch"),
			createProperty(formatString("editor.property.crumble_reduced"),CrumbleReduced,"switch"),
			createProperty(formatString("editor.property.death_timer"),DeathTimer,"number"),
			createProperty(formatString("editor.property.friction"),Friction,"number"),
			createProperty(formatString("editor.property.lighting"),Lighting,"number"),
			//createProperty(formatString("editor.property.lightning_reduced"),LightningReduced,"switch"),
			createProperty(formatString("editor.property.magnetism"),Magnetism,"switch"),
			createProperty(formatString("editor.property.max_level"),MaxLevel,"number"),
			createProperty(formatString("editor.property.maximum_speed"),MaximumSpeed,"number"),
			createProperty(formatString("editor.property.minimum_speed"),MinimumSpeed,"number"),
			createProperty(formatString("editor.property.partial_magnetism"),PartialMagnetism,"switch"),
			createProperty(formatString("editor.property.pellet_count"),PelletCount,"number"),
			createProperty(formatString("editor.property.pellet_multiplier"),PelletMultiplier,"number"),
			//createProperty(formatString("editor.property.radioactive_gloop_reduced"),RadioactiveGloopReduced,"switch"),
			createProperty(formatString("editor.property.sakura_leaves"),SakuraLeaves,"number"),
			createProperty(formatString("editor.property.snow"),Snow,"number"),
			createProperty(formatString("editor.property.spawns_lost_souls"),SpawnsLostSouls,"switch"),
			createProperty(formatString("editor.property.spawns_pellets"),null,"select",{value:properties.spawns_pellets,event:e=>[properties.spawns_pellets=e,spawnEntities()],selectOptions:[[formatString("editor.boolean.none"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			//createProperty(formatString("editor.property.sticky_coat_distort_reduced"),StickyCoatDistortReduced,"switch"),
			createProperty(formatString("editor.property.texture"),null,"select",{value:properties.texture,event:e=>[properties.texture=e],selectOptions:["normal","leaves","wooden","baguette"].map(e=>[formatString("editor.texture."+e),e]),selectType:"text"}),
			createProperty(formatString("editor.property.title_stroke_color"),TitleStrokeColor,"text"),
			createProperty(formatString("editor.property.warping_disabled"),WarpingDisabled,"switch"),
			createProperty(formatString("editor.property.wind_ghosts_do_not_push_while_downed"),WindGhostsDoNotPushWhileDowned,"switch"),
		]);
	else if(t=="area")
		properties.element=createFolder(formatString("editor.property.properties"),[
			createProperty(formatString("editor.property.all_enemies_immune"),null,"select",{value:properties.all_enemies_immune,event:e=>{properties.all_enemies_immune=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			
			createProperty(formatString("editor.property.applies_lantern"),null,"select",{value:properties.applies_lantern,event:e=>{properties.applies_lantern=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			createProperty(formatString("editor.property.background_color"),BackgroundColor,"text"),
			createProperty(formatString("editor.property.charge_reduced"),null,"select",{value:properties.charge_reduced,event:e=>{properties.charge_reduced=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			createProperty(formatString("editor.property.crumble_reduced"),null,"select",{value:properties.crumble_reduced,event:e=>{properties.crumble_reduced=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			createProperty(formatString("editor.property.death_timer"),DeathTimer,"number"),
			createProperty(formatString("editor.property.friction"),Friction,"number"),
			createProperty(formatString("editor.property.lighting"),Lighting,"number"),
			
			createProperty(formatString("editor.property.magnetism"),null,"select",{value:properties.magnetism,event:e=>{properties.magnetism=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			createProperty(formatString("editor.property.max_level"),MaxLevel,"number"),
			createProperty(formatString("editor.property.maximum_speed"),MaximumSpeed,"number"),
			createProperty(formatString("editor.property.minimum_speed"),MinimumSpeed,"number"),
			createProperty(formatString("editor.property.partial_magnetism"),null,"select",{value:properties.partial_magnetism,event:e=>{properties.partial_magnetism=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			createProperty(formatString("editor.property.pellet_count"),PelletCount,"number"),
			createProperty(formatString("editor.property.pellet_multiplier"),PelletMultiplier,"number"),
			
			createProperty(formatString("editor.property.sakura_leaves"),SakuraLeaves,"number"),
			createProperty(formatString("editor.property.snow"),Snow,"number"),
			createProperty(formatString("editor.property.spawns_lost_souls"),null,"select",{value:properties.spawns_lost_souls,event:e=>{properties.spawns_lost_souls=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			createProperty(formatString("editor.property.spawns_pellets"),null,"select",{value:properties.spawns_pellets,event:e=>{properties.spawns_pellets=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			
			createProperty(formatString("editor.property.texture"),null,"select",{value:properties.texture,event:e=>[properties.texture=e],selectOptions:[[formatString("editor.texture.inherit"),void 0],...["normal","leaves","wooden","baguette"].map(e=>[formatString("editor.texture."+e),e])],selectType:"text"}),
			createProperty(formatString("editor.property.title_stroke_color"),TitleStrokeColor,"text"),
			createProperty(formatString("editor.property.warping_disabled"),null,"select",{value:properties.warping_disabled,event:e=>{properties.warping_disabled=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
			createProperty(formatString("editor.property.wind_ghosts_do_not_push_while_downed"),null,"select",{value:properties.wind_ghosts_do_not_push_while_downed,event:e=>{properties.wind_ghosts_do_not_push_while_downed=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
		]);
	else if(t=="zone")
		properties.element=createFolder(formatString("editor.property.properties"),[
			createProperty(formatString("editor.property.background_color"),BackgroundColor,"text"),
			createProperty(formatString("editor.property.friction"),Friction,"number"),
			createProperty(formatString("editor.property.texture"),null,"select",{value:properties.texture,event:e=>[properties.texture=e],selectOptions:[[formatString("editor.texture.inherit"),void 0],...["normal","leaves","wooden","baguette"].map(e=>[formatString("editor.texture."+e),e])],selectType:"text"}),
			createProperty(formatString("editor.property.minimum_speed"),MinimumSpeed,"number"),
			createProperty(formatString("editor.property.maximum_speed"),MaximumSpeed,"number"),
			createProperty(formatString("editor.property.spawns_pellets"),null,"select",{value:properties.spawns_pellets,event:e=>{properties.spawns_pellets=e;spawnEntities()},selectOptions:[[formatString("editor.boolean.inherit"),void 0],...[true,false].map(e=>[formatString("editor.boolean."+e),e])],selectType:"switch"}),
		]);
	else throw new SyntaxError(`Unexpected argument`);
	properties.element.classList.add("closed");
	return properties;
}
createZone.addEventListener("click",e=>{map.areas[current_Area].zones.push(newZone({x:roundTo(Math.round(mouseEntity.x),settings.snapX),y:roundTo(Math.round(mouseEntity.y),settings.snapY),width:160,height:160,type:"active"})),updateMap(updateMouseEntity=true)});
createAsset.addEventListener("click", e=>{map.areas[current_Area].assets.push(new Asset({x:Math.round(mouseEntity.x),y:Math.round(mouseEntity.y),width:160,height:160,type:"wall"})),updateMap(updateMouseEntity=true)});
duplicateArea.addEventListener("click",_=>{map.areas.push(new Area(JSON.parse(areaToJSON(map.areas[current_Area],false))));updateMap()});
duplicateArea_next.addEventListener("click",_=>{map.areas.splice(current_Area+1,0,new Area(JSON.parse(areaToJSON(map.areas[current_Area],false))));updateMap()});
pasteObject.addEventListener("click",global.pasteObjs=_=>{
	updateMouseEntity=true;
	let posX=roundTo(Math.round(mouseEntity.x),settings.snapX);
	let posY=roundTo(Math.round(mouseEntity.y),settings.snapY);
	copyObjects.map(_=>{
		var sel;
		if (!_.isAsset){
			var zone={
			x:isNaN(parseInt(_.rx))?_.rx:(posX+Number(_.rx)),
			y:isNaN(parseInt(_.ry))?_.ry:(posY+Number(_.ry)),
			width:_.rw,
			height:_.rh,
			translate:{...(_.translate??{x:0,y:0})},
			properties:{...(_.properties??{})}, 
			type:_.type,
			requirements:[..._.requirements],
			spawner:_.spawner.map(e => cloneSpawner(e))
			};
			sel = newZone(zone);
			map.areas[current_Area].zones.push(sel);
		}else{
			var asset={
			x:posX+_.x,
			y:posY+_.y,
			width:_.width,
			height:_.height,
			type:_.type,
			upside_down:_.upside_down,
			texture:_.texture,
			image_name:_.image_name,
      angle:_.angle||0,
			};
			sel=new Asset(asset);
			map.areas[current_Area].assets.push(sel);
		}
	});
	updateMap();
})
copyObject.addEventListener("click",global.copyObjs=_=>{
	copyObjects=[];
	selectedObjects.map(_=>{
		var sel;
		if(_.properties){
			"element" in _.properties && _.properties.element.remove();
			delete _.properties.inputs;
			delete _.properties.element;
		};
		"element" in _ && _.element.remove();
		delete _.element;
		delete _.inputs;
		if(!_.isAsset){
			var zone={
			x:_.rx,
			y:_.ry,
			width:_.rw,
			height:_.rh,
			translate:{...(_.translate??{x:0,y:0})},
			properties:{...(_.properties??{})}, 
			type:_.type,
			requirements:[..._.requirements],
			spawner:_.spawner.map(e => cloneSpawner(e))
			};
			sel = newZone(zone);
			copyObjects.push(sel);
		} else {
			var asset={
			x:_.x,
			y:_.y,
			width:_.width,
			height:_.height,
			type:_.type,
			upside_down:_.upside_down,
			texture:_.texture,
			image_name:_.image_name,
      angle:_.angle||0,
			};
			sel=new Asset(asset);
			copyObjects.push(sel);
		}
	});
})
cutObject.addEventListener("click",global.cutObjs=_=>{
	copyObjects=[];
	selectedObjects.map(_=>{
		var sel;
		if(_.properties){
			"element" in _.properties && _.properties.element.remove();
			delete _.properties.inputs;
			delete _.properties.element;
		};
		"element" in _ && _.element.remove();
		delete _.element;
		delete _.inputs;
		if (!_.isAsset) {
			var zone={
			x:_.rx,
			y:_.ry,
			width:_.rw,
			height:_.rh,
			translate:{...(_.translate??{x:0,y:0})},
			properties:{...(_.properties??{})}, 
			type:_.type,
			requirements:[..._.requirements],
			spawner:_.spawner.map(e => cloneSpawner(e))
			};
			sel = newZone(zone);
			copyObjects.push(sel);
		} else {
			var asset={
			x:_.x,
			y:_.y,
			width:_.width,
			height:_.height,
			type:_.type,
			upside_down:_.upside_down,
			texture:_.texture,
			image_name:_.image_name,
      angle:_.angle||0,
			};
			sel=new Asset(asset);
			copyObjects.push(sel);
		}
	});
	deleteObjs();
})
duplicateObject.addEventListener("click",$=>{
	selectedObjects.map(_=>{
		var sel;
		if(_.properties){
			"element" in _.properties && _.properties.element.remove();
			delete _.properties.inputs;
			delete _.properties.element;
		};
		"element" in _ && _.element.remove();
		delete _.element;
		delete _.inputs;
		if (!_.isAsset){
			var zone={
			x:_.rx,
			y:_.ry,
			width:_.rw,
			height:_.rh,
			translate:{...(_.translate??{x:0,y:0})},
			properties:{...(_.properties??{})}, 
			type:_.type,
			requirements:[..._.requirements],
			spawner:_.spawner.map(e => cloneSpawner(e))
			};
			sel = newZone(zone);
			map.areas[current_Area].zones.push(sel);
		} else {
			var asset={
			x:_.x,
			y:_.y,
			width:_.width,
			height:_.height,
			type:_.type,
			upside_down:_.upside_down,
			texture:_.texture,
			image_name:_.image_name
			};
			sel=new Asset(asset);
			map.areas[current_Area].assets.push(sel);
		}
	});
	selectedObjects=[];
	updateMap();
});
rotateObject.addEventListener("click",_=>{
	var sel;
	var e=null,t=0,n;
	if(selectedObjects.length>1){
	  for (var o in selectedObjects) {
	  	if (selectedObjects[o]) {
	  		null == e && (e = o),n = selectedObjects[o]
	  		var s = (!n.isAsset ? n.rw : n.width)
	  		  , p = (!n.isAsset ? n.rh : n.height);
        if(isNaN(p))n.rw = n.width = p.replace("last_height","last_width");
        else n.rw = n.width = p;
        if(isNaN(s))n.rh = n.height = s.replace("last_width","last_height");
        else n.rh = n.height = s;
	  		var a = selectedObjects[o];
	  		s = a.x - selectedObjects[e].x;
	  		p = a.y - selectedObjects[e].y;
	  		a.x = selectedObjects[e].x + p;
	  		a.y = selectedObjects[e].y + s;
        let us = n.rx,
            up = n.ry;
	  		if(isNaN(up))
          n.rx = up.replace("_y","_x").replace("_bottom","_right");
        else
  	  		n.rx = selectedObjects[e].x + p;
	  		if(isNaN(us))
          n.ry = us.replace("_x","_y").replace("_right","_bottom");
        else
  	  		n.ry = selectedObjects[e].y + s;
	  		a.x + n.w > t && (t = a.x + n.w)
	  	}
	  	if(selectedObjects[o].translate){
	  		var nx=selectedObjects[o].translate.x,ny=selectedObjects[o].translate.y;
	  		selectedObjects[o].translate.x=ny;
	  		selectedObjects[o].translate.y=nx;
	  		if(selectedObjects[o].inputs)
	  			selectedObjects[o].inputs.tx.value=selectedObjects[o].translate.x,
	  			selectedObjects[o].inputs.ty.value=selectedObjects[o].translate.y;
	  	}
	  }
  }else{
		var selectedObject=selectedObjects[0];
  if(selectedObject.isAsset){
	  var width=selectedObject.width;
	  var height=selectedObject.height;
	  selectedObject.height=width;
	  selectedObject.width=height;
	  selectedObject.inputs.width.value=selectedObject.width;
	  selectedObject.inputs.height.value=selectedObject.height;
  }else{
	  var width=selectedObject.rw;
	  var height=selectedObject.rh;
    if(isNaN(width))width=width.replace("last_width","last_height");
    else width=selectedObject.width;
    if(isNaN(height))height=height.replace("last_height","last_width");
    else height=selectedObject.height;
    let w=selectedObject.width,h=selectedObject.height;
	  selectedObject.rh=width;
	  selectedObject.height=w;
	  selectedObject.rw=height;
	  selectedObject.width=h;
	  selectedObject.inputs.width.value=selectedObject.rw;
	  selectedObject.inputs.height.value=selectedObject.rh;
  }
	}
	updateMap();
});
let confirmationPopup=false;
createArea.addEventListener("click",_=>{if(!map.areas[current_Area])return map.areas.push(new Area({x:"var x",y:"var y"})),updateMap();map.areas.push(new Area({
    x: "last_right",
    y: "last_y",
    zones: [{
        type: "exit",
        x: 0,
        y: 0,
        width: 64,
        height: 480,
        translate: {
            x: -160,
            y: 0
        }
    }, {
        type: "safe",
        x: 64,
        y: 0,
        width: 256,
        height: 480
    }, {
        type: "active",
        x: 320,
        y: 0,
        width: 2560,
        height: 480,
        spawner: [{
            types: ["wall"],
            count: 15,
            radius: 30,
            speed: 150
        }, {
            types: ["normal"],
            count: 15,
            radius: 12,
            speed: 150
        }]
    }, {
        type: "safe",
        x: 2880,
        y: 0,
        width: 256,
        height: 480
    }, {
        type: "exit",
        x: 3136,
        y: 0,
        width: 64,
        height: 480,
        translate: {
            x: 160,
            y: 0
        }
    }]
})),updateMap()});
deleteObject.addEventListener("click",global.deleteObjs=_=>{
  selectedObjects.map(e=>{
    let arr = map.areas[current_Area].zones;
    if (arr.includes(e)) {
      arr[arr.indexOf(e)]=null;
      "element" in e && e.element.remove();
    }
    let arr2 = map.areas[current_Area].assets;
    if (arr2.includes(e)) {
      arr2[arr2.indexOf(e)]=null;
      "element"in e&&e.element.remove();
    }
	map.areas[current_Area].zones=arr.filter(t=>t);
	map.areas[current_Area].assets=arr2.filter(t=>t);
  });
  selectedObjects=[];
  updateMap();
});
async function customConfirm(text,yesBtn,noBtn,fn){
	confirmationPopup=true;
	const confirmDivOverlay=document.createElement("div"),
		confirmDiv=document.createElement("div"),
		btns=[document.createElement("button"),document.createElement("button")];
	confirmDivOverlay.setAttribute("class","canvas-overlay")
	confirmDiv.setAttribute("class","div-confirm")
	btns[0].innerHTML=yesBtn;
	btns[1].innerHTML=noBtn;
	confirmDiv.innerText=text+"\n";
	confirmDiv.appendChild(btns[0]);
	confirmDiv.appendChild(btns[1]);
	var u=new Promise((e,t)=>{
		function keypressed(k){
			k.which==KeyMap.Escape&&(confirmationPopup=false,t("Cancelled action."),document.removeEventListener("keydown",keypressed),confirmDiv.remove(),confirmDivOverlay.remove())
		}
		document.addEventListener("keydown",keypressed)
		btns[0].addEventListener("click",_=>{
			confirmationPopup=false;
			e(true);
			confirmDiv.remove();
			confirmDivOverlay.remove();
		});
		btns[1].addEventListener("click",_=>{
			confirmationPopup=false;
			e(false);
			confirmDiv.remove();
			confirmDivOverlay.remove();
		});
	});
	u.then(fn);
	confirmDivOverlay.appendChild(confirmDiv);
	document.body.appendChild(confirmDivOverlay);
}
deleteArea.addEventListener("click",_=>{
	customConfirm(formatString("editor.confirm.delete_area"),formatString("editor.confirm.yes"),formatString("editor.confirm.no"),e=>{
		if (map.areas.includes(map.areas[current_Area]) && e) {
			map.areas[current_Area].element.remove();
			map.areas[current_Area].properties.element.remove();
			delete map.areas[current_Area].element;
			delete map.areas[current_Area].inputs;
			delete map.areas[current_Area].properties.element;
			map.areas.splice(map.areas.indexOf(map.areas[current_Area]),1);
			current_Area=Math.max(current_Area-1,0);
			customAREAgui(map.areas[current_Area]);
			areamenu.appendChild(map.areas[current_Area].element);
			selectedObjects.map(selectedObject=>{
				if(selectedObject.properties){
					"element"in selectedObject.properties&&selectedObject.properties.element.remove();
					delete selectedObject.properties.element;
				};
				"element"in selectedObject&&selectedObject.element.remove();
				delete selectedObject.element;
				delete selectedObject.inputs;
				selectedObject.spawner&&selectedObject.spawner.map(e=>{delete e.element;delete e.inputs});
			});
			updateMap();
		}
	})
});
let regionIsLoading=false;
loadFile("\n  name: First Map\n  properties:\n    friction: 0.75\n    background_color:\n    - 81\n    - 102\n    - 124\n    - 75\n  areas:\n  # 1\n  - x: 0\n    y: 0\n    zones:\n    - type: safe\n      x: 0\n      y: 0\n      width: 320\n      height: 480\n      properties:\n        minimum_speed: 10\n    - type: active\n      x: last_right\n      y: 0\n      width: 2560\n      height: 480\n      spawner:\n      - types:\n        - normal\n        count: 15\n        radius: 12\n        speed: 5\n    - type: safe\n      x: last_right\n      y: 0\n      width: 256\n      height: last_height\n    - type: exit\n      x: last_right\n      y: 0\n      width: 64\n      height: last_height\n      translate:\n        x: 160\n        y: 0\n    assets: []\n  # 2\n  - x: last_right\n    y: 0\n    zones:\n    - type: exit\n      x: 0\n      y: 0\n      width: 64\n      height: 480\n      translate:\n        x: -160\n        y: 0\n    - type: safe\n      x: 64\n      y: 0\n      width: 256\n      height: 480\n    - type: active\n      x: last_right\n      y: 0\n      width: 2080\n      height: 480\n      spawner:\n      - types:\n        - slowing\n        - draining\n        count: 25\n        radius: 12\n        speed: 5\n    - type: safe\n      x: last_right\n      y: 0\n      width: 256\n      height: last_height\n    - type: exit\n      x: last_right\n      y: 0\n      width: 64\n      height: last_height\n      translate:\n        x: 160\n        y: 0\n    assets: []\n",false,false,true);
/*
settings.realTime && (
	customAlert("WARNING: The simulator will crash when dabot, elbot, and libot enemies shoot its enemies or projectiles.",10,"#FF0"),
	customAlert("You can disable update area in real time in settings to prevent crashes like that. :D",10,"#FF0"),
	customAlert("Also, please don't playtest (F4) at the area with entity crashers.",10,"#FF0")
);
*/
(()=>{
	let e=JSON.parse(`{"fpe.entity.math":"圆圈小姐","fpe.entity.science":"布卢米小姐","fpe.entity.language":"塔维尔小姐","fpe.entity.alice":"爱丽丝公主","fpe.entity.test":"的试卷","language.code":"en_us","language.name":"English","language.region":"United States","editor.area":"Area Properties","editor.asset":"Asset Properties","editor.asset.flashlight_spawner":"Flashlight Spawner","editor.asset.light_region":"Light Region","editor.asset.torch":"Torch","editor.asset.wall":"Wall","editor.asset.image_background":"Image Background","editor.boolean.false":"False","editor.boolean.inherit":"Inherit","editor.boolean.none":"Default","editor.boolean.true":"True","editor.contextMenu.object":"Object Actions","editor.contextMenu.object.cut":"Cut","editor.contextMenu.object.copy":"Copy","editor.contextMenu.object.paste":"Paste","editor.contextMenu.object.delete":"Delete","editor.contextMenu.object.duplicate":"Duplicate","editor.contextMenu.object.rotate":"Rotate","editor.contextMenu.new":"Create...","editor.contextMenu.new.zone":"Create Zone","editor.contextMenu.new.asset":"Create Asset","editor.contextMenu.area":"Area Actions","editor.contextMenu.area.add":"Add Area","editor.contextMenu.area.duplicate":"Duplicate Area","editor.contextMenu.area.duplicateAdjacent":"Duplicate and Insert Area here","editor.contextMenu.area.delete":"Remove Area","editor.confirm.delete_area":"Are you sure you want to delete the current area?","editor.confirm.start_from_scratch":"Are you sure you want to start from scratch?\\nBecause it will erase the current region.","editor.confirm.yes":"Yes","editor.confirm.no":"No","editor.category.global":"Global Spawner Properties","editor.category.aura":"Enemy's Aura","editor.category.slasher":"Slasher Enemy","editor.category.cybot":"Cybot Enemy","editor.category.draining":"Draining Enemy","editor.category.flower":"Flower Enemy","editor.category.frost_giant":"Frost Giant Enemy","editor.category.grass":"Grass Enemy","editor.category.gravity":"Gravity Enemy","editor.category.homing":"Homing Enemy","editor.category.icicle":"Icicle Enemy","editor.category.liquid":"Liquid Enemy","editor.category.quicksand":"Quicksand Enemy","editor.category.radiating_bullets":"Radiating Bullets Enemy","editor.category.regen_sniper":"Regen Sniper Enemy","editor.category.repelling":"Repelling Enemy","editor.category.ring_sniper":"Ring Sniper Enemy","editor.category.slowing":"Slowing Enemy","editor.category.speed_sniper":"Speed Sniper Enemy","editor.category.sniper":"Sniper Enemy","editor.category.switch":"Switch Enemy","editor.category.turning":"Turning Enemy","editor.category.wall":"Wall Enemy","editor.category.wind_ghost":"Wind Ghost Enemy","editor.enemy.aibot":"Aibot","editor.enemy.key":"Key","editor.enemy.snow_sniper":"Snow Sniper","editor.enemy.snow_liquid":"Snow Liquid","editor.enemy.randomizing":"Randomizing","editor.enemy.barrier":"Barrier","editor.enemy.blocking":"Blocking","editor.enemy.cactus":"Cactus","editor.enemy.charging":"Charging","editor.enemy.confectioner":"Confectioner","editor.enemy.confectioner_switch":"Confectioner Switch","editor.enemy.corrosive":"Corrosive","editor.enemy.corrosive_sniper":"Corrosive Sniper","editor.enemy.crumbling":"Crumbling","editor.enemy.cybot":"Cybot","editor.enemy.cycling":"Cycling","editor.enemy.dabot":"Dabot","editor.enemy.dasher":"Dasher","editor.enemy.dasher_switch":"Dasher Switch","editor.enemy.disabling":"Disabling","editor.enemy.disabling_ghost":"Disabling Ghost","editor.enemy.disarming":"Disarming","editor.enemy.dorito":"Dorito","editor.enemy.dorito_switch":"Dorito Switch","editor.enemy.draining":"Draining","editor.enemy.eabot":"Eabot","editor.enemy.elbot":"Elbot","editor.enemy.electrical":"Electrical","editor.enemy.enlarging":"Enlarging","editor.enemy.experience_drain":"Experience Drain","editor.enemy.fake_pumpkin":"Fake Pumpkin","editor.enemy.fibot":"Fibot","editor.enemy.fire_trail":"Fire Trail","editor.enemy.firefly":"Firefly","editor.enemy.flaming":"Flaming","editor.enemy.flower":"Flower","editor.enemy.force_sniper_a":"Force Sniper A","editor.enemy.force_sniper_b":"Force Sniper B","editor.enemy.freezing":"Freezing","editor.enemy.frost_giant":"Frost Giant","editor.enemy.glowy":"Glowy","editor.enemy.grass":"Grass","editor.enemy.gravity":"Gravity","editor.enemy.gravity_ghost":"Gravity Ghost","editor.enemy.homing":"Homing","editor.enemy.homing_switch":"Homing Switch","editor.enemy.icbot":"Icbot","editor.enemy.ice_ghost":"Ice Ghost","editor.enemy.ice_sniper":"Ice Sniper","editor.enemy.icicle":"Icicle","editor.enemy.immune":"Immune","editor.enemy.infectious":"Infectious","editor.enemy.infinity":"Infinity","editor.enemy.infinity_switch":"Infinity Switch","editor.enemy.lava":"Lava","editor.enemy.lead_sniper":"Lead Sniper","editor.enemy.libot":"Libot","editor.enemy.liquid":"Liquid","editor.enemy.lost_soul":"Lost Soul","editor.enemy.lunging":"Lunging","editor.enemy.lurching":"Lurching","editor.enemy.magnetic_nullification":"Magnetic Nullification","editor.enemy.magnetic_reduction":"Magnetic Reduction","editor.enemy.mebot":"Mebot","editor.enemy.mist":"Mist","editor.enemy.mutating":"Mutating","editor.enemy.negative_magnetic_ghost":"Negative Magnetic Ghost","editor.enemy.negative_magnetic_sniper":"Negative Magnetic Sniper","editor.enemy.normal":"Normal","editor.enemy.oscillating":"Oscillating","editor.enemy.oscillating_switch":"Oscillating Switch","editor.enemy.penny":"Penny","editor.enemy.penny_switch":"Penny Switch","editor.enemy.phantom":"Phantom","editor.enemy.plbot":"Plbot","editor.enemy.poison_ghost":"Poison Ghost","editor.enemy.poison_sniper":"Poison Sniper","editor.enemy.positive_magnetic_ghost":"Positive Magnetic Ghost","editor.enemy.positive_magnetic_sniper":"Positive Magnetic Sniper","editor.enemy.prediction_sniper":"Prediction Sniper","editor.enemy.pumpkin":"Pumpkin","editor.enemy.quicksand":"Quicksand","editor.enemy.radar":"Radar","editor.enemy.radiating_bullets":"Radiating Bullets","editor.enemy.reducing":"Reducing","editor.enemy.regen_ghost":"Regen Ghost","editor.enemy.regen_sniper":"Regen Sniper","editor.enemy.repelling":"Repelling","editor.enemy.repelling_ghost":"Repelling Ghost","editor.enemy.residue":"Residue","editor.enemy.ring_sniper":"Ring Sniper","editor.enemy.sand":"Sand","editor.enemy.sandrock":"Sandrock","editor.enemy.seedling":"Seedling","editor.enemy.sizing":"Sizing","editor.enemy.slippery":"Slippery","editor.enemy.slowing":"Slowing","editor.enemy.sniper":"Sniper","editor.enemy.snowman":"Snowman","editor.enemy.sparking":"Sparking","editor.enemy.speed_ghost":"Speed Ghost","editor.enemy.speed_sniper":"Speed Sniper","editor.enemy.spiral":"Spiral","editor.enemy.spiral_switch":"Spiral Switch","editor.enemy.stalactite":"Stalactite","editor.enemy.star":"Star","editor.enemy.static":"Static","editor.enemy.stumbling":"Stumbling","editor.enemy.switch":"Switch","editor.enemy.teleporting":"Teleporting","editor.enemy.thunderbolt":"Thunderbolt","editor.enemy.toxic":"Toxic","editor.enemy.tree":"Tree","editor.enemy.turning":"Turning","editor.enemy.vengeful_soul":"Vengeful Soul","editor.enemy.wabot":"Wabot","editor.enemy.wacky_wall":"Wacky Wall","editor.enemy.wall":"Wall","editor.enemy.wavy":"Wavy","editor.enemy.wavy_switch":"Wavy Switch","editor.enemy.wind_ghost":"Wind Ghost","editor.enemy.wind_sniper":"Wind Sniper","editor.enemy.zigzag":"Zigzag","editor.enemy.zigzag_switch":"Zigzag Switch","editor.enemy.zoning":"Zoning","editor.enemy.zoning_switch":"Zoning Switch","editor.enemy.blind":"Blind","editor.enemy.ninja_star_sniper":"Ninja Star Sniper","editor.enemy.summoner":"Summoner","editor.enemy.slasher":"Slasher","editor.enemy.lotus_flower":"Lotus Flower","editor.image.null":"None","editor.image.door_1":"Door 1","editor.image.door_2":"Door 2","editor.image.sakura_1":"Sakura 1","editor.image.sakura_2":"Sakura 2","editor.image.torii_gate":"Torii Gate","editor.pattern.cone":"Cone","editor.pattern.cone_edges":"Cone Edges","editor.pattern.none":"None","editor.pattern.quadspiral":"Quad Spiral","editor.pattern.singlebig":"Single Big","editor.pattern.spiral":"Spiral","editor.pattern.twin":"Twin","editor.pattern.twincone":"Twin Cone","editor.pattern.twinspiral":"Twin Spiral","editor.property.aibot_radius":"Aibot Radius","editor.property.effect_radius":"Effect Radius","editor.property.sakura_leaves":"Sakura Leaves","editor.property.all_enemies_immune":"All Enemies Immune","editor.property.allow_solo_with_group":"Allow Solo With Group","editor.property.angle":"Angle","editor.property.applies_lantern":"Applies Lantern","editor.property.background_color":"Background Color","editor.property.title_stroke_color":"Title Stroke Color","editor.property.barrier_radius":"Barrier Radius","editor.property.blocking_radius":"Blocking Radius","editor.property.boss":"Boss","editor.property.charge_reduced":"Charge Reduced","editor.property.circle_size":"Circle Size","editor.property.cone_angle":"Cone Angle","editor.property.count":"Count","editor.property.crumble_reduced":"Crumble Reduced","editor.property.cybot_radius":"Cybot Radius","editor.property.dabot_radius":"Dabot Radius","editor.property.death_timer":"Death Timer","editor.property.direction":"Direction","editor.property.disabling_radius":"Disabling Radius","editor.property.drain":"Drain","editor.property.draining_radius":"Draining Radius","editor.property.eabot_radius":"Eabot Radius","editor.property.elbot_radius":"Elbot Radius","editor.property.enlarging_radius":"Enlarging Radius","editor.property.experience_drain_radius":"Experience Drain Radius","editor.property.fibot_radius":"Fibot Radius","editor.property.freezing_radius":"Freezing Radius","editor.property.friction":"Friction","editor.property.gravity":"Gravity","editor.property.gravity_radius":"Gravity Radius","editor.property.growth_multiplier":"Growth Multiplier","editor.property.hard_mode":"Hard Mode","editor.property.health":"Health","editor.property.height":"Height","editor.property.home_range":"Home Range","editor.property.horizontal":"Horizontal","editor.property.icbot_radius":"Icbot Radius","editor.property.ignore_invulnerability":"Ignore Invulnerability","editor.property.image_name":"Image Name","editor.property.immune":"Immune","editor.property.increment":"Increment","editor.property.lava_radius":"Lava Radius","editor.property.libot_radius":"Libot Radius","editor.property.lighting":"Lighting","editor.property.lightning_reduced":"Lightning Reduced","editor.property.magnetic_nullification_radius":"Magnetic Nullification Radius","editor.property.magnetic_reduction_radius":"Magnetic Reduction Radius","editor.property.magnetism":"Magnetism","editor.property.max_level":"Max Level","editor.property.maximum_speed":"Maximum Speed","editor.property.mebot_radius":"Mebot Radius","editor.property.minimum_speed":"Minimum Speed","editor.property.move_clockwise":"Move Clockwise","editor.property.name":"Name","editor.property.partial_magnetism":"Partial Magnetism","editor.property.pattern":"Pattern","editor.property.pause_duration":"Pause Duration","editor.property.pause_interval":"Pause Interval","editor.property.pellet_count":"Pellet Count","editor.property.pellet_multiplier":"Pellet Multiplier","editor.property.player_detection_radius":"Player Detection Radius","editor.property.plbot_radius":"Plbot Radius","editor.property.powered":"Powered","editor.property.projectile_duration":"Projectile Duration","editor.property.projectile_radius":"Projectile Radius","editor.property.projectile_speed":"Projectile Speed","editor.property.properties":"Properties","editor.property.push_direction":"Push Direction","editor.property.quicksand_radius":"Quicksand Radius","editor.property.quicksand_strength":"Quicksand Strength","editor.property.radar_radius":"Radar Radius","editor.property.radioactive_gloop_reduced":"Radioactive Gloop Reduced","editor.property.radius":"Radius","editor.property.randomize_state":"Randomize State","editor.property.recharge":"Recharge","editor.property.reducing_radius":"Reducing Radius","editor.property.regen_loss":"Regen Loss","editor.property.release_interval":"Release Interval","editor.property.release_time":"Release Time","editor.property.repelling_radius":"Repelling Radius","editor.property.repulsion":"Repulsion","editor.property.requirements":"Requirements","editor.property.reverse":"Reverse","editor.property.ring_sniper_radius":"Ring Sniper Radius","editor.property.share_to_drive":"Share To Drive","editor.property.shot_acceleration":"Shot Acceleration","editor.property.shot_interval":"Shot Interval","editor.property.small_bullets":"Small Bullets","editor.property.slash_radius":"Slash Radius","editor.property.slippery_radius":"Slippery Radius","editor.property.slow":"Slow","editor.property.slowing_radius":"Slowing Radius","editor.property.snow":"Snow","editor.property.spawn_top":"Spawn Top","editor.property.spawner":"Spawner","editor.property.spawns_lost_souls":"Spawns Lost Souls","editor.property.spawns_pellets":"Spawns Pellets","editor.property.speed":"Speed","editor.property.speed_loss":"Speed Loss","editor.property.sticky_coat_distort_reduced":"Sticky Coat Distort Reduced","editor.property.switch_interval":"Switch Interval","editor.property.switch_time":"Switch Time","editor.property.texture":"Texture","editor.property.toxic_radius":"Toxic Radius","editor.property.turn_acceleration":"Turn Acceleration","editor.property.turn_speed":"Turn Speed","editor.property.type":"Type","editor.property.types":"Types","editor.property.upside_down":"Upside Down","editor.property.wabot_radius":"Wabot Radius","editor.property.warping_disabled":"Warping Disabled","editor.property.width":"Width","editor.property.wind_ghosts_do_not_push_while_downed":"Wind Ghosts Do Not Push While Downed","editor.property.x":"X","editor.property.y":"Y","editor.region":"Region Properties","editor.requirement":"Requirement","editor.requirement.aibot_defeated":"Aibot Defeated","editor.requirement.aibot_not_defeated":"Aibot Not Defeated","editor.requirement.all_elements_gained":"All Elements Gained","editor.requirement.all_heroes_unlocked":"All Heroes Unlocked","editor.requirement.complete_research_lab":"Complete Research Lab","editor.requirement.coupled_corridors_found":"Coupled Corridors Found","editor.requirement.cybot_castle_defeated":"Cybot Castle Defeated","editor.requirement.cybot_defeated":"Cybot Defeated","editor.requirement.cybot_hard_mode_defeated":"Cybot Hard Mode Defeated","editor.requirement.cybot_hard_mode_not_defeated":"Cybot Hard Mode Not Defeated","editor.requirement.cybot_not_defeated":"Cybot Not Defeated","editor.requirement.dabot_defeated":"Dabot Defeated","editor.requirement.dabot_not_defeated":"Dabot Not Defeated","editor.requirement.defeat_everything":"Defeat Everything","editor.requirement.dusty_depths_found":"Dusty Depths Found","editor.requirement.eabot_defeated":"Eabot Defeated","editor.requirement.eabot_not_defeated":"Eabot Not Defeated","editor.requirement.elbot_defeated":"Elbot Defeated","editor.requirement.elbot_not_defeated":"Elbot Not Defeated","editor.requirement.exact_index":"Exact Index","editor.requirement.exact_index.area":"Exact Area Index","editor.requirement.exact_index.region":"Exact Region Name","editor.requirement.fibot_defeated":"Fibot Defeated","editor.requirement.fibot_not_defeated":"Fibot Not Defeated","editor.requirement.icbot_defeated":"Icbot Defeated","editor.requirement.icbot_not_defeated":"Icbot Not Defeated","editor.requirement.inaccessible":"Inaccessible","editor.requirement.libot_defeated":"Libot Defeated","editor.requirement.libot_not_defeated":"Libot Not Defeated","editor.requirement.mansion_discovered":"Mansion Discovered","editor.requirement.mebot_defeated":"Mebot Defeated","editor.requirement.mebot_not_defeated":"Mebot Not Defeated","editor.requirement.mystery_keycard":"Mystery Keycard","editor.requirement.none":"None","editor.requirement.plbot_defeated":"Plbot Defeated","editor.requirement.plbot_not_defeated":"Plbot Not Defeated","editor.requirement.research_lab_discovered":"Research Lab Discovered","editor.requirement.switch_station_found":"Switch Station Found","editor.requirement.ten_hard_variants":"Ten Hard Variants","editor.requirement.wabot_defeated":"Wabot Defeated","editor.requirement.wabot_not_defeated":"Wabot Not Defeated","editor.spawner":"Enemy Spawner #","editor.texture.baguette":"Baguette","editor.texture.ice":"Ice","editor.texture.inherit":"Inherit","editor.texture.leaves":"Leaves","editor.texture.normal":"Normal","editor.texture.null":"None","editor.texture.wooden":"Wooden","editor.toggleMenu.hide":"Close Menu","editor.toggleMenu.show":"Open Menu","editor.zone":"Zone Properties","editor.zone.active":"Active","editor.zone.dummy":"Dummy","editor.zone.exit":"Exit","editor.zone.removal":"Removal","editor.zone.safe":"Safe","editor.zone.teleport":"Teleport","editor.zone.victory":"Victory"}`);
	function formatString(str){
	  var s=e[str]??str;
	  var args=Array.from(arguments).slice(1);
	  args.map(t=>s=s.replace("%s",t));
	  return s;
	}
	togglemenu.innerText=formatString(`editor.toggleMenu.${menu.classList=="hidden"?"show":"hide"}`)
	contextmenu.rows[0].cells[0].innerText=formatString("editor.contextMenu.object")
	contextmenu.rows[1].cells[0].children[0].innerText=formatString("editor.contextMenu.object.copy")
	contextmenu.rows[1].cells[1].children[0].innerText=formatString("editor.contextMenu.object.cut")
	contextmenu.rows[1].cells[2].children[0].innerText=formatString("editor.contextMenu.object.paste")
	contextmenu.rows[2].cells[0].children[0].innerText=formatString("editor.contextMenu.object.delete")
	contextmenu.rows[2].cells[1].children[0].innerText=formatString("editor.contextMenu.object.duplicate")
	contextmenu.rows[2].cells[2].children[0].innerText=formatString("editor.contextMenu.object.rotate")
	contextmenu.rows[3].cells[0].innerText=formatString("editor.contextMenu.new")
	contextmenu.rows[4].cells[0].children[0].innerText=formatString("editor.contextMenu.new.zone")
	contextmenu.rows[4].cells[1].children[0].innerText=formatString("editor.contextMenu.new.asset")
	contextmenu.rows[5].cells[0].innerText=formatString("editor.contextMenu.area")
	contextmenu.rows[6].cells[0].children[0].innerText=formatString("editor.contextMenu.area.add")
	contextmenu.rows[6].cells[1].children[0].innerText=formatString("editor.contextMenu.area.duplicate")
	contextmenu.rows[6].cells[2].children[0].innerText=formatString("editor.contextMenu.area.delete")
	contextmenu.rows[7].cells[0].children[0].innerText=formatString("editor.contextMenu.area.duplicateAdjacent")
	global.formatString=formatString;
	"element" in map && (map.element.remove(),delete map.element);
	map.element=createFolder(formatString("editor.region"), [
		createProperty(formatString("editor.property.name"),nameInput=createInput(map.name,_=>{map.name=nameInput.value}),"text"),
		createProperty(formatString("editor.property.share_to_drive"),boolInput=createInput(map.share_to_drive,_=>{map.share_to_drive=boolInput.checked}),"switch"),
		(map.properties=createPropertyObj({...map.properties},"region")).element,
	]);
	map.element.classList.add("closed");
	menu.insertBefore(map.element,areamenu);
	areamenu.firstChild && areamenu.removeChild(areamenu.firstChild);
	if(selectedObjects){
		for(const obj of selectedObjects){
			obj.element.remove();
			obj.properties.element.remove();
			delete obj.element;
			delete obj.properties.element;
			delete obj.inputs;
		}
	}
	selectedObjects=[];
	customAREAgui(map.areas[0]);
	areamenu.appendChild(map.areas[0].element);
})();
function points(obj) {
  if(obj.type=="torch"||obj.type=="flashlight_spawner"){return obj ? [
    {
      x: Math.round(Cam.getX(obj.x)),
      y: Math.round(Cam.getY(obj.y)),
      width: Math.round(Cam.getX(obj.x + void 0)),
      height: Math.round(Cam.getY(obj.y + void 0))
    }
  ] : [{ x: 0, y: 0, width: 0, height: 0 }]}
  return obj ? [
    {
      x: Math.round(Cam.getX(obj.x)),
      y: Math.round(Cam.getY(obj.y)),
      width: Math.round(Cam.getX(obj.x + obj.width)),
      height: Math.round(Cam.getY(obj.y + obj.height))
    }
  ] : [{ x: 0, y: 0, width: 0, height: 0 }];
}
function pointInRect(point, point0, point1) {
  return point.x > point0.x && point.x < point1.x && point.y > point0.y && point.y < point1.y;
}
function pointInCircle(point, pos, r) {
  return (point.x - pos.x) * (point.x - pos.x) + (point.y - pos.y) * (point.y - pos.y) <= r * r;
}
function hide(element) {
  element.classList.add("hidden");
}
function show(element) {
  element.classList.remove("hidden");
}
var mouseOn=loadImage("./buttons/mouse-on.png");
var mouseOff=loadImage("./buttons/mouse-off.png");
inputIndicator.appendChild(mouseOff);
var lastTime=0,ti=[0,0];
global.notSimulatingEntities=[];
ejector.addEventListener("click",function(){
  selfId=null;
  stopPlaytesting();
});
function simulate(time){
  let delta=time-lastTime;
	const actually=isActive&&!confirmationPopup;
  let simulated=0;
	lastTime=time;
  if(!actually||1e3/delta<1)delta=1e3;
	ti[0]+=delta*actually;
	inputIndicator.hidden=!(settings.enableMouseMovement && settings.toggleMouseMovement && playtesting);
	while(ti[0]>0&&actually){
		if(!regionIsLoading&&simulateIt&&(settings.realTime||playtesting)){
			const state=$e7009c797811e935$export$2e2bcd8739ae039.gameState,input={keys:keysDown};
			if(state){
				state.mouseDown==void 0&&(state.mouseDown=null);
				input.isMouse=null!==state.mouseDown;
				input.mouse={x:(state.mouseDown?.x||0)+canvas.width/2,y:(state.mouseDown?.y||0)+canvas.height/2};
				if($e7009c797811e935$export$2e2bcd8739ae039.mouseMovementToggled && inputIndicator.children[0]==mouseOff){
					mouseOff.remove();
					inputIndicator.appendChild(mouseOn);
				}else if(!$e7009c797811e935$export$2e2bcd8739ae039.mouseMovementToggled && inputIndicator.children[0]==mouseOn){
					mouseOn.remove();
					inputIndicator.appendChild(mouseOff);
				}
			}
			selfId&&controlPlayer(selfId,input,1e3/EvadesConfig.server_tick_rate);
      //EvadesSimulator.update(delta)
      global.notSimulating=false;
      global.notSimulatingEntities.length=0;
      let loadedAreas = [];
      if(!playtesting)loadedAreas.push([map.areas[current_Area],current_Area]);
      for(let player of map.players){
        if(void 0===loadedAreas.find(e=>e[1]==player.area))loadedAreas.push([map.areas[player.area],parseInt(player.area)]);
      }
      for(let areaU of loadedAreas){
        let area = areaU[0]
        area.entities=area.entities.filter(e=>!e.remove);
        let players = [];
        let areaP = [];
        for(let player of map.players){
          if(player.area==areaU[1])areaP.push(player);
          if(player instanceof Player&&player.area==areaU[1])players.push(player);
        }
			  areaP.map(e=>{e.update(1e3/EvadesConfig.server_tick_rate,area,players)});
			  area.entities.map(e=>{
          try{
            e.update(1e3/EvadesConfig.server_tick_rate,area,players)
          }catch(uv){
            if(-1===global.notSimulatingEntities.indexOf(e))global.notSimulating=true,global.notSimulatingEntities.push(e);
          }
        });
      }
		}

		ti[0]-=1e3/EvadesConfig.server_tick_rate;
		simulated+=1e3/EvadesConfig.server_tick_rate;
	}
  return simulated;
}
let distortionsActive=false, resizeWebGl = function(){};
let glCanvas=null, storedDrawImg, renderGl = function(){};
/*function initNonlinearTransform(vs, fs, uniformNames, uniformLambdas){
    if(distortionsActive === true) unInitNonlinearTransform();
    //if(isTainted(window.ctx) === true) unTaintCanvas();
    //storedDrawImg = ctx.drawImage;
    //ctx.drawImage = () => {};
    distortionsActive = true;

    // set up canvas and resizing
    glCanvas = document.createElement('canvas');
    glCanvas.id="canvasUI";
    canvas.style.opacity="0";
    const gl = glCanvas.getContext('webgl2');
    document.body.insertBefore(glCanvas,contextmenu)
    
    resizeWebGl = () => {
        glCanvas.width = global.innerWidth;
        glCanvas.height = global.innerHeight;
        gl.viewport(0, 0, glCanvas.width, glCanvas.height);
    }
    resizeWebGl();
    let vertexData = [];
    let indicies = [];
    
    const jmp = 1;//10
    const resX = Math.ceil(glCanvas.width / jmp);
    const resY = Math.ceil(glCanvas.height / jmp);
    
    // forming verticies
    for(let y = 0; y < resY; y++){
        for(let x = 0; x < resX; x++){
            // vertex positions in space. Scaled from -1 to 1
            vertexData.push(
                (x / (resX-1)) * 2 - 1,
                (y / (resY-1)) * 2 - 1,
            );
        }
    }
    
    // forming triangles
    // we form triangles from y layer n to y layer n+1
    for(let y = 0; y < resY-1; y++){
        for(let x = 0; x < resX-1; x++){
            const i = y * (resX) + x;
            indicies.push(
                i,
                i+1,
                i+resX,
            );
            indicies.push(
                i+1,
                i+resX,
                i+resX+1,
            );
        }
    }
    
    vertexData = new Float32Array(vertexData);
    indicies = new Uint32Array(indicies);
    
    // Create vertex buffer
    const vertexBuffer = gl.createBuffer();
    {
        // Bind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    
        // Feed vertex buffer with data
        gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
    }
    
    // Create index buffer
    const indexBuffer = gl.createBuffer();
    {
        // Bind buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    
        // Feed index buffer with data
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicies, gl.STATIC_DRAW);
    }
    
    // Use shader program
    function createShaderProgram() {
        function compileShader(str, type) {
            // create shader
            const shader = gl.createShader(type)
        
            // give it source code and compile
            gl.shaderSource(shader, str);
            gl.compileShader(shader)
        
            const errors = gl.getShaderInfoLog(shader)
            if (errors.length != 0) {
                console.log('Error Compiling Shader!');
                console.log(errors);
                return null;
            }
            else return shader;
        }

        // Create shader program
        const program = gl.createProgram();
    
        // Attach vertex shader
        const vertexShader = compileShader(vs, gl.VERTEX_SHADER)
        gl.attachShader(program, vertexShader)
    
        // Attach fragment shader
        const fragmentShader = compileShader(fs, gl.FRAGMENT_SHADER)
        gl.attachShader(program, fragmentShader)
    
        // Link and validate program
        gl.linkProgram(program);
        gl.validateProgram(program);
    
        // Check for errors
        const errors = gl.getProgramInfoLog(program)
        if (errors.length !== 0) {
            console.log('Error Compiling Program!');
            console.log(errors);
        }
    
        // Free GPU memory
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
    
        return program;
    }
    const program = createShaderProgram();
    
    gl.useProgram(program);
    
    {// Specify locations of pos in the typed arrays
        let posLocation = gl.getAttribLocation(program, "pos");
        gl.enableVertexAttribArray(posLocation);
        gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);// for second to last 0
    }
    
    function updateTexture(){
        // use texture unit 0
        gl.activeTexture(gl.TEXTURE0 + 0);
    
        // bind to the TEXTURE_2D bind point of texture unit 0
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    
        // canvas is not a power of 2. If it was, it would be higher quality to do
        // gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }

    // Texture
    const texture = gl.createTexture();
    updateTexture();

    const uniforms = [];
    for(let i = 0; i < uniformNames.length; i++){
        uniforms.push(gl.getUniformLocation(program, uniformNames[i]));
    }
    
    renderGl = () => {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

        // get new canvas data
        updateTexture();
    
        // setup uniforms
        for(let i = 0; i < uniformLambdas.length; i++){
            gl.uniform1f(uniforms[i], uniformLambdas[i]());
        }
        // let t = Date.now() / 1000;
        // t -= Math.floor(t/100)*100;
        // gl.uniform1f(uTime, t);
        
        gl.clearColor(0, 0, 0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    
        gl.drawElements(gl.TRIANGLES,
            indicies.length, // how many vertecies we want to draw
            gl.UNSIGNED_INT, // Uint32 for created indicies array 
            0 // offset in index array (0 = start from beginning)
        )
    }
}

function unInitNonlinearTransform(){
    if(distortionsActive === false) return;
    resizeWebGl=renderGl=function(){}
    //window.ctx.drawImage = storedDrawImg;
    //shared.resizeFns = shared.resizeFns.filter(f => f !== shared.resizeWebGl);
    distortionsActive = false;
    canvas.style.opacity="1";
    glCanvas.remove();
    glCanvas=null;
}

function isTainted(ctx) {
  try{ctx.getImageData(0,0,1,1);return false}catch(err){return err.code===18}
}*/
[...document.querySelectorAll("script")].map(e=>e.remove());global.selfId=null;
animate(function run(e){
  let simulatedTime=simulate(e);
	try{render(simulatedTime)}catch(e){
	  ctx.resetTransform();
    //errorFX.play();
    //console.debug("An error has occurred whilst rendering game state",e);
    //return e;
  }
  animate(run);
});

/*initNonlinearTransform(`precision highp float;attribute vec3 pos;attribute vec2 vTextureCoord;varying vec2 uv0;void main(){gl_Position=vec4(pos,1.);uv0=(pos.xy+1.)/2.;}`,`precision highp float;varying vec2 uv0;
uniform sampler2D uSampler;
uniform float time;
vec2 frpart(vec2 pos){
  return vec2(pos.x-floor(pos.x),pos.y-floor(pos.y));
}
void main() {
  vec2 newUV = vec2(uv0.x+cos(uv0.y*5.+time)/30.,uv0.y+sin(uv0.x*5.+time)/30.);
  lowp vec4 resultColor = texture2D(uSampler,newUV);
  float b = resultColor.b, r = resultColor.r;
  resultColor.b = b * (cos(time)+1.)/2. + r * (sin(time)+1.)/2.;
  resultColor.r = r * (cos(time)+1.)/2. - b * (sin(time)+1.)/2.;
  gl_FragColor=resultColor;
}`,['time'],[_=>{if(void 0===window.tOffset)window.tOffset=performance.now();return(performance.now()-wind*/
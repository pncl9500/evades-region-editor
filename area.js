function closestPointToRectangle(pos, rectpos, rectsize) {
  var xpos = pos.x;
  var ypos = pos.y;
  if (xpos < rectpos.x) {
    xpos = rectpos.x
  }
  if (xpos > rectpos.x + rectsize.x) {
    xpos = rectpos.x + rectsize.x;
  }
  if (ypos < rectpos.y) {
    ypos = rectpos.y
  }
  if (ypos > rectpos.y + rectsize.y) {
    ypos = rectpos.y + rectsize.y;
  }
  return {x:xpos, y:ypos};
}
var WORLD;
var error="";
var areaCount=0;
function generate_guest_username(){
    function choose(e){
        return e[Math.floor(Math.random()*e.length)]
    }
    var consonants=['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
        vowels=['a', 'e', 'i', 'o', 'u'],
        code="",
        randInt=choose([2,3,4,5])
        username="Guest";
    for(var i=0;i<randInt;i++){
        code+=choose(consonants);
        code+=choose(vowels);
    };
    code=code[0].toUpperCase()+code.slice(1);
    return username+code;
}
function customAREAgui(area){
	area.name??="";
    const nameInput = document.createElement("input");
    nameInput.value = area.name;
    nameInput.addEventListener("input", () => {
        area.name = nameInput.value;
    });
    const bossInput = document.createElement("input");
    bossInput.checked = area.boss;
    bossInput.addEventListener("input", () => {
        area.boss = bossInput.checked;
    });

    const xInput = document.createElement("input");
    xInput.value = area.rx;
    xInput.addEventListener("input", () => {
        area.rx = xInput.value;
        if(!isNaN(Number(xInput.value))){
          area.rx = area.x = Number(xInput.value);
        }
      updateMap();
    });

    const yInput = document.createElement("input");
    yInput.value = area.ry;
    yInput.addEventListener("input", () => {
        area.ry = yInput.value;
        if(!isNaN(Number(yInput.value))){
          area.ry = area.y = Number(yInput.value);
        }
      updateMap();
    });
  
  var props=createPropertyObj(area.properties,"area");
  area.properties=props;
    area.element = createFolder(formatString("editor.area"), [
        createProperty(formatString("editor.property.boss"), bossInput, "switch", {value: area.boss ?? defaultValues.boss}),
        createProperty(formatString("editor.property.name"), nameInput, "text"),
        createProperty(formatString("editor.property.x"), xInput, "text"),
        createProperty(formatString("editor.property.y"), yInput, "text"),
        area.properties.element,
    ],true);
    area.inputs = {
        name: nameInput,
        x: xInput,
        y: yInput,
    }}
function getAreaBoundary(area){
      var minX=1/0;
      var maxX=-1/0;
      var minY=1/0;
      var maxY=-1/0;
      for(var i in area.zones){
        if(minX>area.zones[i].x)minX=area.zones[i].x;
        if(maxX<area.zones[i].x+area.zones[i].width)maxX=area.zones[i].x+area.zones[i].width;
        if(minY>area.zones[i].y)minY=area.zones[i].y;
        if(maxY<area.zones[i].y+area.zones[i].height)maxY=area.zones[i].y+area.zones[i].height;
      }
      if(!area.zones.length)return {left:0,right:0,top:0,bottom:0,width:0,height:0};
      return {left:minX,right:maxX,top:minY,bottom:maxY,width:Math.abs(maxX-minX),height:Math.abs(maxY-minY)}
}
function getAreaSize(area){
  var maxRight=0;
  var maxBottom=0;
  for(var zone of area.zones){
    var right = zone.x+zone.width;
    if(right > maxRight)maxRight = right;
    var bottom = zone.y+zone.height;
    if(bottom > maxBottom)maxBottom = bottom;
  }
  return {x:maxRight,y:maxBottom}
}

class Area{
	constructor(e){
		let t = this;
		t.entities=[];
		t.isLoaded=false;
		t.rx=t.x=e.x;
		t.ry=t.y=e.y;
		t.name=e.name;
		t.boss=e.boss;
		t.zones=(e.zones||[]).map(a=>{
				if(a.background_color){
					a.properties??={};
					a.properties.background_color=a.background_color;
					a.properties.background_color.map((i,v,o)=>{
						if(o[v-1]!=undefined)o[v-1]+=i>>8;
						o[v]&=255;
					})
				}
			return newZone(a);
		});
		t.assets=(e.assets||[]).map(a=>new Asset(a))
		t.properties=e.properties||{};
	}
	checkAreaProperties(e){
		return this.properties[e]??(map.properties[e]??defaultValues.properties[e]);
	}
	load(){
		if(-1 !== map.areas.indexOf(this))
			this.index = map.areas.indexOf(this);
    if(this.isLoaded&&playtesting)return;
    this.isLoaded=void 0 !== map.players.find(e=>e.area===this.index);
		function prop(spawner,e){
			return spawner[e]??defaultValues.spawner[e];
		}
		const boundary=this.boundary,
			isVictory=this.zones.some(e=>e.type=="victory"),
			totalPellets=this.checkAreaProperties("pellet_count"),
			pelletZones=[];
		if(this.checkAreaProperties("spawns_pellets")!==void 0&&!this.checkAreaProperties("spawns_pellets")){
			for(const zone of this.zones){
				if(zone.properties.spawns_pellets)
					pelletZones.push(zone);
			}
		}else{
			for(const zone of this.zones){
				if(["active","victory"].indexOf(zone.type)!==-1||(zone.properties.spawns_pellets!==void 0&&zone.properties.spawns_pellets))
					pelletZones.push(zone);
			}
		}
		if(!pelletZones.length)pelletZones.push(this.zones[0]);
		const areaOfZone=pelletZones.map(e=>e.width*e.height),
			sum=areaOfZone.reduce((e,t)=>(e+t)),
			playersInArea=map.players.filter(e=>(e.area==this.index));
		for(const i in areaOfZone)
			if(void 0!==areaOfZone[i-1])areaOfZone[i]+=areaOfZone[i-1];
		!playtesting&&playersInArea.map(plr=>{
      let safezone=this.zones.filter(e=>e.type=="safe")[0]??this.zones[0];
			plr.x=safezone.x+1+plr.radius+Math.max(0,safezone.width-2-plr.radius*2)*Math.random(),
			plr.y=safezone.y+1+plr.radius+Math.max(0,safezone.height-2-plr.radius*2)*Math.random(),
			plr.onTele=true;
		  for(const zone of this.zones){
		  	if(zone.type=="teleport"&&rectCircleCollision(plr.x,plr.y,plr.radius,zone?.x,zone?.y,zone?.width,zone?.height).c){
		  		const left=safezone.x,right=left+safezone.width,top=safezone.y,bottom=top+safezone.height;
		  		plr.x=Math.min(Math.max(plr.x,left+plr.radius*2),right-plr.radius*2);
		  		plr.y=Math.min(Math.max(plr.y,top+plr.radius*2),bottom-plr.radius*2);
		  		break;
		  	}
		  }
		});
		this.entities.length=0;
		this.entities.push(
			new Wall(-2000,-2000,4000+boundary.width,2000),
			new Wall(-2000,-2000,2000,4000+boundary.height),
			new Wall(-2000,boundary.height,4000+boundary.width,2000),
			new Wall(boundary.width,-2000,2000,4000+boundary.height)
		);
		for(const asset of this.assets){
			let entity = null;
			switch(asset.type){
				case"flashlight_spawner":entity=new FlashlightItem(asset.x,asset.y);break;
				case"torch":entity=new Torch(asset.x,asset.y,asset.upside_down);break;
				case"light_region":entity=new LightRegion(asset.x,asset.y,asset.width,asset.height);break;
				case"wall":entity=new Wall(asset.x,asset.y,asset.width,asset.height,asset.texture);break;
				case"image_background":entity=new ImageBackground(asset.x,asset.y,asset.image_name);break;
				//Don't spawn gate entities since it is removed from the game.
				//case"gate":entity=new Gate(e.x,e.y,e.width,e.height);break;
				default:{};
			}
			if(!entity)continue;
			entity.area=this.index;
			this.entities.push(entity);
		}
    let spawnedEnts = {};
		for(var i=0;i<(totalPellets==25?25*10**isVictory:totalPellets);i++){
			const randSum=Math.random()*sum,
				randZone=pelletZones[areaOfZone.map(e=>randSum<e).indexOf(true)],
				left=randZone.x,
				right=left+randZone.width,
				top=randZone.y,
				bottom=top+randZone.height;
			let pellet=new Pellet(randomRange(left+8,right-8),randomRange(top+8,bottom-8),8,pelletZones);
      /*if(map.name=="Research Lab"&&this.index<41){
        pellet=new MissCicles(randomRange(left+38,right-38),randomRange(top+38,bottom-38),null,"test");
        if(!spawnedEnts[pellet.subject]){
          spawnedEnts[pellet.subject]=true;
          let morEnt = new MissCicles(right + 128,28+240-160,180,"math");
			    morEnt.area=this.index;
			    this.entities.push(morEnt);
          morEnt = new MissCicles(right + 128,28+240,180,"science");
			    morEnt.area=this.index;
			    this.entities.push(morEnt);
          morEnt = new MissCicles(right + 128,28+240+160,180,"language");
			    morEnt.area=this.index;
			    this.entities.push(morEnt);
        }
      }*/
			pellet.area=this.index;
			pellet.collision(0,[],true);
			this.entities.push(pellet);
		};
		for(const[index,activeZone]of Object.entries(this.zones.filter(e=>e.type=="active"))){
			this.entities.push(
				new Wall(activeZone.x-2000,activeZone.y-2000,4000+activeZone.width,2000,null,index),
				new Wall(activeZone.x-2000,activeZone.y-2000,2000,4000+activeZone.height,null,index),
				new Wall(activeZone.x-2000,activeZone.y+activeZone.height,4000+activeZone.width,2000,null,index),
				new Wall(activeZone.x+activeZone.width,activeZone.y-2000,2000,4000+activeZone.height,null,index)
			);
			SpawnerSpawn(activeZone.spawner, activeZone, index, this.index);
		}
		if(map.name === "Infinite Inferno" && map.areas.length !== 39 && this.index === 14){
			let ent=new AphmauEntity(2880+160,240,60,0,void 0,Math.random()*8|0);
			ent.area=this.index;
			this.entities.push(ent);
		}
	}
}
class Asset{
	constructor(e){
		let t = this;
		t.isAsset=true;
		t.upside_down=e.upside_down||false;
		t.rx=e.x;
		t.ry=e.y;
		t.rw=e.width;
		t.rh=e.height;
		t.type=e.type;
		t.x=e.x;
		t.y=e.y;
		t.width=e.width;
		t.height=e.height;
		t.texture=e.texture||null;
		t.image_name=e.image_name||null;
	}
  createGUI(){
    let self=this;
    if(self.element)return;
    const X=Asset.createInput(self,"x",self.x,1,"number",function(Legacy,U,V){self.x=Number(V)}),Y=Asset.createInput(self,"y",self.y,1,"number",function(Legacy,U,V){self.y=Number(V)}),Width=Asset.createInput(self,"width",self.width,1,"number",function(Legacy,U,V){self.width=Number(V)}),Height=Asset.createInput(self,"height",self.height,1,"number",function(Legacy,U,V){self.height=Number(V)}),UpsideDown=Asset.createInput(self,"upside_down",self.upside_down,null,"checkbox",function(Legacy,U,V){this.checked=self.upside_down=Boolean(V)}),Texture=createProperty(formatString("editor.property.texture"),null,"select",{value:self.texture,event:e=>{self.texture=e;spawnEntities()},selectOptions:["normal","leaves","wooden","baguette","ice",null].map(e=>[formatString("editor.texture."+e),e]),selectType:"text"}),ImageName=createProperty(formatString("editor.property.image_name"), null, "select",{value:self.image_name,event:e=>{self.image_name=e;spawnEntities()},selectOptions:[null,"door_1","door_2","sakura_1","sakura_2","torii_gate"].map(e=>[formatString("editor.image."+e),e]),selectType:"text"});
    if(self.type!=="wall")hide(Texture);
    if(self.type!=="torch")hide(UpsideDown);
    if(self.type!=="image_background")hide(ImageName);
    if(self.type==="flashlight_spawner"||self.type==="torch"||self.type==="image_background")hide(Width),hide(Height);
    self.element = createFolder(formatString("editor.asset"),[createProperty(formatString("editor.property.type"),null,"select",{value:self.type,event:e=>{if(self.type=e,e==="wall")show(Texture);else hide(Texture);if(e==="image_background")show(ImageName);else hide(ImageName);if(e==="torch")show(UpsideDown);else hide(UpsideDown);if(e==="flashlight_spawner"||e==="torch"||e==="image_background")hide(Width),hide(Height);else show(Width),show(Height);spawnEntities()},selectOptions:["wall","light_region","gate","torch","flashlight_spawner","image_background"].map(e=>[formatString("editor.asset."+e),e]),selectType:"text"}),Texture,ImageName,UpsideDown,Width,Height,X,Y]);
    self.inputs={x:X.querySelector("input"),y:Y.querySelector("input"),width:Width.querySelector("input"),height:Height.querySelector("input")};
  }
  static createInput(self,name,value,step,type,inputEvent){
    function E(value){
      if("" === value)return void 0;
      return value;
    }
    const input=document.createElement("input");
    const LegacyCheck={
      speed:true,
      turn_speed:true,
      minimum_speed:true,
      maximum_speed:true,
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
    if(type=="number")input.step=LegacyCheck[name] ? step/(30**settings.legacySpeedUnits):step;
    if(type=="checkbox")input.checked=Boolean(value),type="switch";
    else input.value=LegacyCheck[name] ? ((value/30**settings.legacySpeedUnits)||""):value;
    input.oninput=function(){
      let V = E(this.type=="checkbox"?this.checked:this.value);
      if(void 0 === V)self[name]=V;else inputEvent.call(this,LegacyCheck[name],V*30**settings.legacySpeedUnits,V);
      spawnEntities();
    }
    return createProperty(formatString(`editor.property.${name}`),input,type);
  }
}
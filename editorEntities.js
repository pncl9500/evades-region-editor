function setDefaultsFor(target, fields, type) {
	setDefaultsFrom(target, fields, EvadesConfig.defaults[type])
}
function setDefaultsFrom(target, fields, source) {
	for (let r = 0; r < fields.length; r++) {
		const field = fields[r];
		if (void 0 === target[field]) {
			const defaultValue = source[toUnderscores(field)];
			void 0 !== defaultValue && (target[field] = defaultValue)
		}
	}
}

function $01bb7fd9b3660a1e$export$a1dfcc7b3a7a0b52(e) {
return EvadesConfig.abilities[e];
}
function toUnderscores(e){
	let a = "";
	for (let t = 0; t < e.length; t++) {
		const r = e[t];
		a += r >= "A" && r <= "Z" ? "_" + r.toLowerCase() : r
	}
	return a
}
function capitaliseName(s){
  var t=s.split("_")
  t=t.map(e=>{
    return e[0].toUpperCase()+e.slice(1).toLowerCase();
  })
  return t.join(" ");
}
function getEntityColor(type){
	return EvadesConfig.defaults[type].color;
}
function randomRange(min,max){
	return min+Math.random()*(max-min);
}
function spawnEntities(area=current_Area){
	const areaC=map.areas[area];
	if(!areaC)return;
  areaC.load();
}
function SpawnerSpawn(spawners, activeZone, index, area){
	const areaC=map.areas[area];
	if(!areaC)return;
  function prop(spawner,e){return spawner[e]??defaultValues.spawner[e]}
	function randomArrayValue(arr){
		return arr[Math.floor(Math.random()*arr.length)];
	}
	function checkAreaProperties(e){
		return areaC.properties[e]??(map.properties[e]??defaultValues.properties[e]);
	}
	for(const spawner of spawners){
		let count=prop(spawner,"count");
    if(count instanceof Array)count = count[Math.floor(Math.random()*count.length)] ?? 1;
    if(void 0 === spawner.types[0]?.i)spawner.types=spawner.types.map(e=>({i:e}));
		if(count>1024){
			console.warn("Can't spawn 1024 or more entities in a single spawner.")
			continue;
		}
		for(var j=0;j<count;j++){
			const left=activeZone.x,
				right=left+activeZone.width,
				top=activeZone.y,
				bottom=top+activeZone.height,
				type=randomArrayValue(prop(spawner,"types")).i,
				radius="math,science,language,alice,test".split(",").indexOf(type)==-1?prop(spawner,"radius"):"test"===type?38:14,
				speed=prop(spawner,"speed"),
				activeBoundary={left,right,bottom,top,width:activeZone.width,height:activeZone.height};
			let entity = null,
				enemyX=prop(spawner,"x"),
				enemyY=prop(spawner,"y"),
				angle=prop(spawner,"angle"),
				effect_radius=prop(spawner,"effect_radius"),
				min,
				max,
				instance=`${capitalize(String(type)).replace("Fake","")}Enemy`;
			if(activeZone.type=="active"){
			  if(void 0!==angle){
			  	if(angle.length>1)
			  		angle=randomArrayValue(angle);
			  };
			  if(void 0!==enemyX){
			  	if(String(enemyX).split(",").length>1)
			  		min=parseInt(enemyX.split(",")[0]),
			  		max=parseInt(enemyX.split(",")[1]),
			  		enemyX=randomRange(min,max);
			  }else enemyX=randomRange(left+radius,right-radius);
			  if(void 0!==enemyY){
			  	if(String(enemyY).split(",").length>1)
			  		min=parseInt(enemyY.split(",")[0]),
			  		max=parseInt(enemyY.split(",")[1]),
			  		enemyY=randomRange(min,max);
			  }else enemyY=randomRange(top+radius,bottom-radius);
			}else{
				enemyX = activeZone.x + Math.cos(activeZone.angle + Math.PI * 2 / count * j)*activeZone.radius;
				enemyY = activeZone.y + Math.sin(activeZone.angle + Math.PI * 2 / count * j)*activeZone.radius;
				angle = (activeZone.angle + Math.PI * 2 / count * j) / (Math.PI/180) + Math.random() * 45 - 45 / 2;
			}
			try{instance=eval(instance)}catch(ignore){};
			switch(type){
				/*
				  121/121 implemented
				*/
				case "aibot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "barrier":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "blind":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "blocking":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "cactus":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "charging":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "confectioner":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "confectioner_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "corrosive":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "corrosive_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "crumbling":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "cybot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius,prop(spawner,"hard_mode"));break;
				case "cycling":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "dabot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "dasher":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "dasher_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "disabling":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "disabling_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "dorito":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "dorito_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "draining":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius,prop(spawner,"drain"));break;
				case "eabot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "elbot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "electrical":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "enlarging":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "experience_drain":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "fake_pumpkin":entity=new instance(enemyX,enemyY,radius,speed,angle,true);break;
				case "fibot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "fire_trail":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "firefly":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "flower":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"growth_multiplier"));break;
				case "force_sniper_a":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "force_sniper_b":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "freezing":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "frost_giant":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"projectile_duration"),prop(spawner,"projectile_radius"),prop(spawner,"projectile_speed"),prop(spawner,"pause_interval"),prop(spawner,"pause_duration"),prop(spawner,"turn_speed"),prop(spawner,"turn_acceleration"),prop(spawner,"shot_interval"),prop(spawner,"shot_acceleration"),prop(spawner,"direction"),prop(spawner,"pattern"),prop(spawner,"cone_angle"));break;
				case "glowy":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "grass":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"powered"));break;
				case "gravity":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius,prop(spawner,"gravity"));break;
				case "gravity_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "homing":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"reverse"),prop(spawner,"home_range"),prop(spawner,"increment"));break;
				case "homing_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "icbot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "ice_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "ice_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "icicle":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"horizontal"));break;
				case "immune":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "infectious":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "lava":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "lead_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "libot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "liquid":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"player_detection_radius"));break;
				case "lotus_flower":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "lunging":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "magnetic_nullification":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "magnetic_reduction":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "mebot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "mist":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "mutating":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "negative_magnetic_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "negative_magnetic_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "ninja_star_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"small_bullets"));break;
				case "normal":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "oscillating":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "oscillating_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "penny":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "penny_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "phantom":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "plbot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "poison_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "poison_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "positive_magnetic_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "positive_magnetic_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "prediction_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "pumpkin":entity=new instance(enemyX,enemyY,radius,speed,angle,false);break;
				case "quicksand":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius,prop(spawner,"quicksand_strength"));break;
				case "radar":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "radiating_bullets":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"release_interval"),prop(spawner,"release_time"));break;
				case "reducing":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "regen_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "regen_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"regen_loss"));break;
				case "repelling":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius,prop(spawner,"repulsion"));break;
				case "repelling_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "residue":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "ring_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle,null,prop(spawner,"health"),prop(spawner,"effect_radius"));break;
				case "sand":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "sandrock":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "seedling":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "sizing":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "slasher":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"slash_radius"));break;
				case "slippery":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "slowing":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius,prop(spawner,"slow"));break;
				case "sniper":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"recharge"));break;
				case "snowman":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "sparking":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "speed_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "speed_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"speed_loss"));break;
				case "spiral":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "spiral_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "stalactite":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "star":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "static":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "summoner":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"spawner"));break;
				case "switch":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"switch_interval"),prop(spawner,"switch_time"),prop(spawner,"randomize_state"));break;
				case "teleporting":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "thunderbolt":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "toxic":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "tree":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "infinity":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"circle_size"));break;
				case "infinity_switch":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"circle_size"));break;
				case "turning":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"circle_size"));break;
				case "wabot":entity=new instance(enemyX,enemyY,radius,speed,angle,effect_radius);break;
				case "wacky_wall":entity=new instance(radius,speed,activeBoundary,j,count,prop(spawner,"move_clockwise"),prop(spawner,"spawn_top"));break;
				case "wall":entity=new instance(radius,speed,activeBoundary,j,count,prop(spawner,"move_clockwise"),prop(spawner,"spawn_top"));break;
				case "wavy":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "wavy_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "wind_ghost":entity=new instance(enemyX,enemyY,radius,speed,angle,prop(spawner,"ignore_invulnerability"),checkAreaProperties("wind_ghosts_do_not_push_while_downed"));break;
				case "wind_sniper":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "zigzag":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "zigzag_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "zoning":entity=new instance(enemyX,enemyY,radius,speed,angle);break;
				case "zoning_switch":entity=new instance(enemyX,enemyY,radius,speed,angle);break;

				// Stellar Saga Update - Not used in the official game of Evades but they're implemented.
				case "key":
				case "randomizing":
				case "snow_liquid":
				case "snow_sniper":
					entity=new instance(enemyX,enemyY,radius,speed,angle);break;

				// EvadesClassic never implemented enemies
				case "disarming":
				case "flaming":
				case "lost_soul":
				case "lurching":
				case "stumbling":
				case "vengeful_soul":
					customAlert("Deprecated, not for use in spawners.",10,t=>`hsl(${Math.sin(t/1e3)*30+60}deg,100%,50%)`);break;

				// 𝑻𝒉𝒆𝒚 𝒂𝒓𝒆 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒕𝒆𝒂𝒄𝒉𝒆𝒓𝒔 𝒆𝒗𝒆𝒓! 𝐓𝐡𝐞𝐲 𝐚𝐫𝐞 𝐤𝐢𝐧𝐝 𝐭𝐨 𝐚𝐥𝐥 𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬! 𝐈𝐭 𝐰𝐨𝐮𝐥𝐝 𝐛𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐟 𝐲𝐨𝐮 𝐥𝐢𝐬𝐭𝐞𝐧𝐞𝐝 𝐭𝐨 𝐭𝐡𝐞𝐦! - Fundamental Paper Education
        case "math":
        case "science":
        case "language":
        case "alice":
				case "test":
					entity=new MissCicles(enemyX,enemyY,angle,type);break;
				/*default:{
					const EvadesClassicEnemyList="wall,normal,homing,dasher,slowing,draining,repelling,gravity,turning,sizing,sniper,freezing,teleporting,wavy,zigzag,zoning,spiral,oscillating,switch,liquid,icicle,slippery,ice_sniper,disabling,experience_drain,enlarging,speed_sniper,regen_sniper,radiating_bullets,immune,pumpkin,tree,frost_giant,snowman,corrosive,toxic,corrosive_sniper,poison_sniper,magnetic_reduction,magnetic_nullification,positive_magnetic_sniper,negative_magnetic_sniper,residue,fire_trail,ice_ghost,poison_ghost,positive_magnetic_ghost,negative_magnetic_ghost,wind_ghost,lunging,lava,gravity_ghost,repelling_ghost,star,grass,seedling,flower,disabling_ghost,glowy,firefly,mist,phantom,cybot,eabot,wabot,fibot,aibot,wind_sniper,sand,sandrock,quicksand,crumbling,radar,barrier,speed_ghost,regen_ghost,cactus,cycling,icbot,elbot,plbot,mebot,libot,dabot,sparking,thunderbolt,static,electrical,prediction_sniper,ring_sniper,lead_sniper,charging,reducing,stalactite,blocking,force_sniper_a,force_sniper_b,wavy_switch,zigzag_switch,dorito,zoning_switch,spiral_switch,oscillating_switch,homing_switch,wacky_wall,confectioner,confectioner_switch,dorito_switch,penny,penny_switch,infinity,infinity_switch,dasher_switch,flaming,stumbling,disarming,lurching,infectious,mutating,vengeful_soul,lost_soul,fake_pumpkin".split(",");
					map.unknownEntities??=[];
					if(map.unknownEntities.indexOf(type)==-1&&EvadesClassicEnemyList.indexOf(type)!=-1)
						map.unknownEntities.push(type),
						customAlert(`Unknown EvadesClassic entity in ${map.name}: ${capitalize(type).replace("Fake","")}Enemy`,10,"#FF0"),
						customAlert(`Error - ${capitalize(type).replace("Fake","")}Enemy class not found. Default enemy behavior (NormalEnemy) is applied.`,10,"#F00");
					if(EvadesClassicEnemyList.indexOf(type)!=-1&&!playtesting)throw`[server/src/game/entities/enemies/${type}_enemy.py] User sonic3XE has no access to Spacebrook/EvadesClassic github source code.`;
				}*/
			};
			entity??=new NormalEnemy(enemyX,enemyY,radius,speed,angle);
			if(entity){
				void 0 !== prop(spawner,"immune") && (type === "repelling" || type === "frost_giant") && (entity.immune=prop(spawner,"immune"));
				entity.immune ||= checkAreaProperties("all_enemies_immune");
				entity.z=entity instanceof MissCicles?-1:index;
			}
			entity.area=area;
			if(activeZone instanceof SimulatorEntity){
				entity.fadeInTime = entity.fadeInTimeTotal = 450;
				entity.fading = true;
				if(!entity.isHarmless){
					entity.isHarmless = true;
					entity.harmlessTime = 450;
				}
			}
			areaC.entities.push(entity);
			entity.update(Number.EPSILON,areaC,[],true);
		}
	}
}
var verifiedEntities=[
//Enemies
  "wall_enemy","normal_enemy","homing_enemy","dasher_enemy",
  "lunging_enemy",
  "frost_giant_enemy",
  "radar_enemy",

  "immune_enemy",
  "corrosive_enemy",
//Boss entities
  "ring_sniper_enemy","cybot_enemy","eabot_enemy","fibot_enemy",
  "aibot_enemy","wabot_enemy","libot_enemy","dabot_enemy",
  "plbot_enemy","mebot_enemy","elbot_enemy","icbot_enemy",
//Projectiles
  "radar_projectile",
];

//	EvadesClassic(vanilla) Enemy File Template: https://github.com/Spacebrook/EvadesClassic/blob/master/server/src/game/entities/enemies/{{type}}_enemy.py
//	EvadesClassic(vanilla) Projectile File Template: https://github.com/Spacebrook/EvadesClassic/blob/master/server/src/game/entities/{{projectile_type}}.py

/*
					WACKY_WALL_ENEMY,
					DORITO_ENEMY,
					DORITO_SWITCH_ENEMY,
					PENNY_ENEMY,
					PENNY_SWITCH_ENEMY,
*/
const $9bc26d320fe964d6$var$bodyAccessoriesDrawnAboveHats = ["stick", "stick-reversed"];
class Player extends EvadesEntity{
	constructor(x,y,hero,username=nickname.value||"Local Player"){
		super();
		this.godmode=0;
		this.x=x;
		this.accessories={"collection":{"gold-crown":false,"silver-crown":false,"bronze-crown":false,"santa-hat":false,"gold-wreath":false,"spring-wreath":false,"autumn-wreath":false,"winter-wreath":false,"summer-wreath":false,"summer-olympics-wreath":false,"summer-olympics-wreath-2":false,"winter-olympics-wreath":false,"halo":false,"blue-santa-hat":false,"flames":false,"blue-flames":false,"stars":false,"witch-hat":false,"sunglasses":false,"flower-headband":false,"pirate-hat":false,"rose-wreath":false,"gold-jewels":false,"silver-jewels":false,"bronze-jewels":false,"sticky-coat":false,"toxic-coat":false,"orbit-ring":false,"clouds":false,"storm-clouds":false,"tuxedo":false,"doughnut":false,"stardust":false,"broomstick":false,"snowglobe":false},"hat_selection":null,"body_selection":null,"gem_selection":null,"version_number":0};
		this.showOnMap=true;
		this.dashTrails=[];
		this.lightRectangle=null;
		this.y=y;
		this.heroType=hero;
		const e = $01bb7fd9b3660a1e$export$71c647defb4fbd5a(this.heroType);
		this.onTele=true;
		this.effects=[];
		this.oldPos={x:this.x,y:this.y};
		this.previousPos={x:this.x,y:this.y};
		this.velX=0;
		this.isPlayer=true;
		this.velY=0;
		this.level=1;
		this.nextLevelExperience=4;
		this.tempNextExperience=4;
		this.tempPrevExperience=0;
		this.experience=0;
		this.reducingTime=0;
		this.upgradePoints=0;
		this.touchingActiveZone=false;
		this.previousLevelExperience=0;
		this.deathTimer=-1;
		this.id=Math.random();
		this.ID=this.id;
		this.nightActivated=false;
		this.regionHighestAreaAchieved=0;
		this.regionAreasDiscovered=[true];
		this.winCount=0;
		this.rescuedCount=0;
		this.survivalTime=0;
		this.accessory_reversed=false;
		//init accessory getter by player settings
		Object.defineProperties(this,{"hatName":{get:function(){
			Math.abs(this.inputAngle)!=Math.PI/2&&(this.accessory_reversed=Math.abs(this.inputAngle)>Math.PI/2);
		  let reversable = ["witch-hat"]
			var curHat=[null, "gold-crown", "silver-crown", "bronze-crown", "santa-hat", "gold-wreath", "spring-wreath", "autumn-wreath", "winter-wreath", "summer-wreath", "summer-olympics-wreath", "summer-olympics-wreath-2", "winter-olympics-wreath", "halo", "blue-santa-hat", "flames", "blue-flames", "stars", "witch-hat", "sunglasses", "flower-headband", "fedora", "pirate-hat", "fruit-bowl", "rose-wreath", "gold-jewels", "silver-jewels", "bronze-jewels"][settings.hat];
			(-1 !== reversable.indexOf(curHat)&&this.accessory_reversed)&&(curHat+="-reversed");
			return curHat;
		}},"fullMapOpacity":{get:function(){
			return this.area==map.players.find(e=>e.id==selfId)?.area;
		}},"bodyName":{get:function(){
			Math.abs(this.inputAngle)!=Math.PI/2&&(this.accessory_reversed=Math.abs(this.inputAngle)>Math.PI/2);
		  let reversable = ["broomstick","stick"]
			var curBody=[null, "sticky-coat", "toxic-coat", "orbit-ring", "clouds", "storm-clouds", "tuxedo", "doughnut", "stardust", "broomstick", "snowglobe", "stick"][settings.body];
			(-1 !== reversable.indexOf(curBody)&&this.accessory_reversed)&&(curBody+="-reversed");
			return curBody;
		}},"gemName":{get:function(){
			return [null, 50, 100, 250, 500, 750, 1000, 1500, 2000, 2500, 3500, 5000, 7500, 10000][settings.gem];
		}}})
		this.inputAngle=0;
		this.input_angle=0;
		this.isIced=false;
		this.icedTime=1000;
		this.icedTimeLeft=1000;
		this.isElectrocuted=false;
		this.electrocutedTime=1000;
		this.electrocutedTimeLeft=1000;
		this.isSnowballed=false;
		this.snowballedTime=this.snowballedTimeLeft=2500;
		this.isDeparted=false;
		this.magnetDirection="DOWN";
		if(EvadesConfig.heroes[this.heroType].abilities){
		  this.abilityOne = new Ability;
		  this.abilityTwo = new Ability;
		  this.abilityOne.abilityType=getAbilityIndex(EvadesConfig.heroes[this.heroType].abilities[0]);
		  this.abilityTwo.abilityType=getAbilityIndex(EvadesConfig.heroes[this.heroType].abilities[1]);
		}
		// this.abilityThree = new Ability;
		// this.abilityThree.abilityType=getAbilityIndex("Prediction Sniper");
		this.abilityIndex=0;
		this.harden = false;
		this.flow = false;
		this.isBandaged=false;
		this.isUnbandaging=false;
		this.fusionActivated=false;
		this.mortarTime=0;
		this.sugarRushActivated=false;
		this.sweetToothConsumed=false;
		this.sourCandyConsumed=false;
		this.sourCandyTime=0;
		this.isObscured=false;
		this.isPoisoned=false;
		this.poisonedTime=1000;
		this.nightDuration=0;
		this.poisonedTimeLeft=1000;
		this.crumbledInvulnerability=false;
		this.crumbledTime=1000;
		this.crumbledTimeLeft=1000;
		this.isStickyCoatActivated=false;
		this.canCling=false;
		this.isEmber=false;
		this.shadowedInvulnerability=false;
		this.shadowedTime=0;
		this.lastAngle=0;
		this.shadowedTimeLeft=0;
		this.isWormhole=false;
		this.stickyCoatDisabled=true;
		this.electrifyInterval=0;
		this.isStone=false;
		this.roboScannerId=0;
		this.electrocuted=false;
		this.electrocutedTime=1000;
		this.electrocutedTimeLeft=0;
		this.debuff_type="none";
		this.electrify_interval=0
		this.electrify_time=0;
		this.electrify_ready=false;
		this.magnetized=false;
		this.hasWindDebuff=false;
		this.hasWaterDebuff=false;
		this.hasFireDebuff=false;
		this.hasEarthDebuff=false;
		this.cybotDefeated=false;
		this.energized=false;
		this.rescueable=true;
		this.playerInteractions=0;
		this.interactions=[];
		this.achievementCount=0;
		this.underLibotEffect=false;
		this.libotEffectTime=5000;
		this.libotEffectTimeLeft=0;
		this.underDabotEffect=false;
		this.dabotEffectTime=5000;
		this.dabotEffectTimeLeft=0;
		this.isLead=false;
		this.leadTime=0;
		this.ictosInvulnerability=false;
		this.continuousRevive=false;
		this.continuousReviveTime=0;
		this.continuousReviveTimeLeft=0;
		this.storedPellets=0
		this.mutatiorbBuffSpeedBoost=false;
		this.mutatiorbBuffCooldownReduction=false;
		this.mutatiorbBuffEffectsReduction=false;
		this.mutatiorbBuffSlowerDeathTimer=false;
		this.mutatiorbBuffExperienceGain=false;
		this.hasRadioactiveGloop=false;
		this.mutatiorbBuffBackShield=false;
		this.isFactorb=false;
		this.shieldAngle=0;
		this.mutatiorbBuffed=false;
		this.isClinging=false;
		this.abilityRemoved=false;
		this.hasUndeadInfection=false;
		this.isDashing=false;
		this.ictosChance=false;
		this.networkControlTime=this.flamingTimeLeft=1e3;
		this.canGainEnergy=true;
		this.deathTimerTotal=0;
		this.deathTimerTotalMultiplier=0;
		this.quicksand=[false];
		this.color=e.foregroundColor;
		this.strokeColor = e.strokeColor;
		this.name=username;
		this.isCent=false;
		this.flashlight=false;
		this.chronoPos=[];
		this.distance_moved_previously = [0,0];
		this.speed=150;
		this.energy=30;
		this.defaultRadius=15;
		this.radius=15;
		this.maxEnergy=30;
		this.highestAreaAchieved=defaultHighestAreaAchieved;
		this.energyRegen=1;
		this.speedMultiplier = 1;
		this.speedAdditioner = 0;
		this.radiusMultiplier = 1;
		this.radiusAdditioner = 0;
		this.regenAdditioner = 0;
		this.vertSpeed=-1;
		this.hasNoInput=false;
		this.effectImmune = 1;
		this.effectReplayer = 1;
		this.aura = false;
		this.auraType = -1;
		this.nightSpeed=0;
		this.collides = false;
		this.lightRadius = 50,
		this.energyRate=1;
		this.createdConfetti = !1,
		this.confetti = [],
		this.createdSupernovaStars = !1,
		this.supernovaStars = [],
		this.isPlayer = !0;
		this.abs_d_x = 0;
		this.abs_d_y = 0;
		this.areaNumber=1;
		this.area=0;
		this.d_x = 0;
		this.d_y = 0;
		this.isGuest=true;
		this.missCircleAiLevel = 0;
		this.missBloomieAiLevel = 0;
		this.missThavelAiLevel = 0;
		this.cent_max_distance = 10;
		this.cent_distance = 0;
		this.cent_input_ready = true;
		this.cent_deceleration = 0.666;
		this.cent_acceleration = 0.333;
		this.cent_accelerating = false;
		this.cent_is_moving = false;
		this.safeZone=true;
		this.inputs={
		  action: false,
		  use_ab1: false,
		  use_ab2: false,
		  use_ab3: false,
		  upg_ab1: false,
		  upg_ab2: false,
		  upg_ab3: false,
		  upg_speed: false,
		  upg_energy: false,
		  upg_regen: false,
		}
  }
	  collision(delta){
    let collided=false;
    if(this.assetCollision())collided=true;
	return collided;
  }
  hasAbility(name){
    let v = false;
    if(this.abilityOne)
      v ||= this.abilityOne.abilityType === getAbilityIndex(name) && !this.abilityOne.locked && !this.abilityOne.disabled;
    if(this.abilityTwo)
      v ||= this.abilityTwo.abilityType === getAbilityIndex(name) && !this.abilityTwo.locked && !this.abilityTwo.disabled;
    if(this.abilityThree)
      v ||= this.abilityThree.abilityType === getAbilityIndex(name) && !this.abilityThree.locked && !this.abilityThree.disabled;
    return v;
  }
  onCollide(){
    
  }
	updateEffects(abilities){
		this.effects=this.effects.filter(e=>!e.removed);
		function prop(x){
			return Ability.levels[ability.level-1][x] ?? [x]
		}
		for(var ability of abilities){
			if(!ability)continue;
			var Ability=abilityConfig[ability.abilityType];
			if(ability.abilityType==getAbilityIndex("Paralysis"))
				this.effects.filter(e=>e.effectType==getEffectIndex("Paralysis")).map(e=>{
					e.radius=prop("radius");
				});
			if(ability.abilityType==getAbilityIndex("Distort"))
				this.effects.filter(e=>e.effectType==getEffectIndex("Distort")).map(e=>{
					e.radius=prop("radius");
				});
			if(ability.abilityType==getAbilityIndex("Flashlight"))
				this.effects.filter(e=>e.effectType==getEffectIndex("Flashlight")).map(e=>{
					!this.isDowned()&&(e.inputAngle=this.lastAngle/180*Math.PI);
				});
		}
	}
  assetCollision(){
    let collided=false;
    let area = map.areas[this.area];
    const walls=area.entities.filter(e=>(e instanceof Wall && e.collisionIndex==-1));
    // Teleportation safety check
		let safezone=area.zones.filter(e=>e.type=="safe")[0]??area.zones[0];
    if(!rectCircleCollision(this.x,this.y,0,-2000,-2000,4000+area.boundary.width,4000+area.boundary.height).c) {
  		console.warn(`Entity instance`,this,`is out of bounds, teleporting`);
  		this.x=safezone.x+this.radius+1+Math.max(0,safezone.width-(this.radius+1)*2)*Math.random();
	  	this.y=safezone.y+this.radius+1+Math.max(0,safezone.height-(this.radius+1)*2)*Math.random();
		  this.onTele=true;
    }
    let centerX,centerY,halfWidth,halfHeight;
    for(var i of walls){
	  //Experimental Feature: Rotated Wall Assets
      let x=this.x,y=this.y,newX,newY;
	  halfWidth=i.width/2;
      halfHeight=i.height/2;
      centerX=i.x+halfWidth;
      centerY=i.y+halfHeight;
	  var rx=x-centerX;
	  var ry=y-centerY;
	  var d=Math.sqrt(rx**2+ry**2);
	  var a=Math.atan2(ry,rx)-i.rotation*Math.PI/180;
	  x=parseFloat((centerX+Math.cos(a)*d).toFixed(10));
	  y=parseFloat((centerY+Math.sin(a)*d).toFixed(10));

      var distX = Math.abs(x - centerX);
      var distY = Math.abs(y - centerY);
      var radius=this.radius;
      var c=rectCircleCollision(x,y,radius,i.x,i.y,i.width,i.height);
      var a=Math.atan2(c.y,c.x);
      if(c.c){
		    collided=true;
        var relX = (x - centerX) / halfWidth;
        var relY = (y - centerY) / halfHeight;
        if (Math.abs(relX) > Math.abs(relY)) {
          // Horizontal collision.
          if (relX > 0) {
            //corner collision at right side
            if(relY*halfHeight > halfHeight){
              x = centerX + halfWidth + this.radius*Math.cos(a);
              y = centerY + halfHeight + this.radius*Math.sin(a);
            }else if(relY*halfHeight < -halfHeight){
              x = centerX + halfWidth + this.radius*Math.cos(a);
              y = centerY - halfHeight + this.radius*Math.sin(a);
            }else{
              // middle right collision
              x = centerX + halfWidth + this.radius;
            }
          } else {
            //corner collision for left side
            if(relY*halfHeight > halfHeight){
              x = centerX - halfWidth + this.radius*Math.cos(a);
              y = centerY + halfHeight + this.radius*Math.sin(a);
            }else if(relY*halfHeight < -halfHeight){
              x = centerX - halfWidth + this.radius*Math.cos(a);
              y = centerY - halfHeight + this.radius*Math.sin(a);
            }else{
              // middle left collision
              x = centerX - halfWidth - this.radius;
            }
          }
        } else {
          // Vertical collision
          if (relY > 0) {
            //corner collision for bottom side
            if(relX*halfWidth > halfWidth){
              x = centerX + halfWidth + this.radius*Math.cos(a);
              y = centerY + halfHeight + this.radius*Math.sin(a);
            }else if(relX*halfWidth < -halfWidth){
              x = centerX - halfWidth + this.radius*Math.cos(a);
              y = centerY + halfHeight + this.radius*Math.sin(a);
            }else{
              // middle bottom collision
              y = centerY + halfHeight + this.radius;
            }
          } else {
            //corner collision for top side
            if(relX*halfWidth > halfWidth){
              x = centerX + halfWidth + this.radius*Math.cos(a);
              y = centerY - halfHeight + this.radius*Math.sin(a);
            }else if(relX*halfWidth < -halfWidth){
              x = centerX - halfWidth + this.radius*Math.cos(a);
              y = centerY - halfHeight + this.radius*Math.sin(a);
            }else{
              // middle top collision
              y = centerY - halfHeight - this.radius;
            }
          }
        }
		//Finished colliding, undoing rotation.
	    rx=x-centerX;
	    ry=y-centerY;
	    d=Math.sqrt(rx**2+ry**2);
	    a=Math.atan2(ry,rx)+i.rotation*Math.PI/180;
        this.x=parseFloat((centerX+Math.cos(a)*d).toFixed(10));
	    this.y=parseFloat((centerY+Math.sin(a)*d).toFixed(10));
	  }
    }
    return collided;
  }
  updateExp(x){
  	  this.experience+=x;
	  while(this.experience>=this.nextLevelExperience){
		if(this.level >= (map.areas[this.area].properties.max_level??map.properties.max_level)){
			this.experience=this.nextLevelExperience;
			break;
		}
		this.experience-=this.tempPrevExperience-this.previousLevelExperience;
        this.tempPrevExperience+=Pellet.prototype.calculateExperience(this.level)-Pellet.prototype.calculateExperience(this.level-1);
        this.level+=1;
        this.tempNextExperience+=Pellet.prototype.calculateExperience(this.level)-Pellet.prototype.calculateExperience(this.level-1)
        this.nextLevelExperience=this.tempNextExperience;
		this.previousLevelExperience=this.tempPrevExperience;
        this.upgradePoints+=1;
      }
  }

	handleAbility(ability,kind=1,delta,others,players,force=false){
	if(!ability)return;
	var abilityActive;
	var mask=7&(2**kind);
	switch(kind){
		case 1:abilityActive=this.firstAbilityActivated;break;
		case 2:abilityActive=this.secondAbilityActivated;break;
		case 3:abilityActive=this.thirdAbilityActivated;break;
	}
	var finalTrigger=force;
  const usableWhileDowned=[getAbilityIndex("Resurrection"),getAbilityIndex("Backtrack"),getAbilityIndex("Barrier")];
  let minEnergy = this.inStreamPath ? -this.maxEnergy : 0;
  let curEnergy = this.energy-minEnergy;
	ability.pellet_powered=abilityConfig[ability.abilityType].pellet_powered??false;
	ability.maxLevel=abilityConfig[ability.abilityType].levels.length??ability.maxLevel;
  if(ability.level > 0)ability.locked=false;
	var abilityLevels=abilityConfig[ability.abilityType]?.levels;
  let canUseAbility = true;
  if(ability.abilityType === getAbilityIndex("Resurrection"))canUseAbility=this.isDowned();
  if(ability.abilityType === getAbilityIndex("Barrier"))canUseAbility=!this.isDowned() || (this.isDowned() && players.find(e=>!e.isDowned()));
  let success = true;
  let previous = this.abilityHelperType;
	ability.continuous&&abilityActive&&ability.cooldown==0&&(this.energyRate-=ability.energyCost);
  if(success && ability.disabled && abilityActive){
    success = false;
    this.abilityHelperType=3;
  }
  if(success && ability.passive && abilityActive){
    success = false;
    this.abilityHelperType=7;
  }
  if(success && ability.locked && abilityActive){
    success = false;
    this.abilityHelperType=6;
  }
  if(success && usableWhileDowned.indexOf(ability.abilityType) === -1 && this.isDowned() && abilityActive){
    success = false;
    this.abilityHelperType=5;
  }
  if(success && ability.cooldown > 0 && abilityActive){
    success = false;
    this.abilityHelperType=2;
  }
  if(success && ability.cooldown <= 0 && curEnergy + (ability.continuous ? this.energyRate * delta/1e3 : -ability.energyCost) < 0 && abilityActive){
    success = false;
    this.abilityHelperType=1;
	  switch(kind){
	  	case 1:{
	  		this.firstAbility=true;
	  		this.firstAbilityActivated=false;
	  		finalTrigger=this.firstAbility;
	  	};break;
	  	case 2:{
	  		this.secondAbility=true;
	  		this.secondAbilityActivated=false;
	  		finalTrigger=this.secondAbility;
	  	};break;
	  	case 3:{
	  		this.thirdAbility=true;
	  		this.thirdAbilityActivated=false;
	  		finalTrigger=this.thirdAbility;
	  	};break;
	  }
	  abilityActive=false;
  }
  if(success && ability.cooldown <= 0 && !canUseAbility && abilityActive){
    success = false;
    this.abilityHelperType=4;
  }
	if(!success){
      (previous != this.abilityHelperType || this.abilityHelperTime <= 0) && (this.abilityHelperTime=1200);
  		this.energyRate=this.energyRegen+this.regenAdditioner;
			if(kind==1)this.firstAbilityActivated=this.firstAbility=false;
			else if(kind==2)this.secondAbilityActivated=this.secondAbility=false;
			else if(kind==3)this.thirdAbilityActivated=this.thirdAbility=false;
			if(abilityActive)return;
	};
	if(ability.cooldown<=0&&!ability.pellet_powered){
		ability.totalCooldown=(abilityLevels[ability.level-1]?.total_cooldown??abilityConfig[ability.abilityType].total_cooldown??ability.totalCooldown)*(this.cooldown_reduction??1);
	}else if(ability.cooldown<=0&&ability.pellet_powered){
		ability.totalCooldown=(abilityLevels[ability.level-1]?.total_cooldown??abilityConfig[ability.abilityType].total_cooldown??ability.totalCooldown);
	}
	switch(ability.abilityType){
		case getAbilityIndex("Flow"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
				this.speedMultiplier*=abilityLevels[ability.level-1].slow??1;
				this.speedAdditioner+=abilityLevels[ability.level-1].boost??0;
				!this.effects.filter(e=>e.effectType==getEffectIndex("Flow")).length&&this.effects.push({effectType:getEffectIndex("Flow"),boost:abilityLevels[ability.level-1].boost??0});
				if(this.effects.filter(e=>e.effectType==getEffectIndex("Harden")).length){
					this.harden=false;
					this.effects.filter(e=>e.effectType==getEffectIndex("Harden")).map(e=>e.removed=true);
					others.map(e=>{
						if(!e)return;
						if(e.abilityType==getAbilityIndex("Harden"))
							e.cooldown=e.totalCooldown;
					})
					if(kind!=1&&this.abilityOne.abilityType==getAbilityIndex("Harden"))this.firstAbilityActivated=false;
					if(kind!=2&&this.abilityTwo.abilityType==getAbilityIndex("Harden"))this.secondAbilityActivated=false;
					if(kind!=3&&this.abilityThree&&this.abilityThree.abilityType==getAbilityIndex("Harden"))this.thirdAbilityActivated=false;
				}
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
			if(!abilityActive&&finalTrigger&&ability.cooldown==0){
				this.effects.filter(e=>e.effectType==getEffectIndex("Flow")).map(e=>e.removed=true);
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Harden"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
				this.speedMultiplier=0;
				this.harden=true;
				this.d_x=this.d_y=0;
				!this.effects.filter(e=>e.effectType==getEffectIndex("Harden")).length&&this.effects.push({effectType:getEffectIndex("Harden")});
				if(this.effects.filter(e=>e.effectType==getEffectIndex("Flow")).length){
					this.effects.filter(e=>e.effectType==getEffectIndex("Flow")).map(e=>e.removed=true);
					others.map(e=>{
						if(!e)return;
						if(e.abilityType==getAbilityIndex("Flow"))
							e.cooldown=e.totalCooldown;
					});
					if(kind!=1&&this.abilityOne.abilityType==getAbilityIndex("Flow"))this.firstAbilityActivated=false;
					if(kind!=2&&this.abilityTwo.abilityType==getAbilityIndex("Flow"))this.secondAbilityActivated=false;
					if(kind!=3&&this.abilityThree&&this.abilityThree.abilityType==getAbilityIndex("Flow"))this.thirdAbilityActivated=false;
				}
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
			if(!abilityActive&&finalTrigger&&ability.cooldown==0){
				this.harden=false;
				this.effects.filter(e=>e.effectType==getEffectIndex("Harden")).map(e=>e.removed=true);
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Warp"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				this.x+=Math.cos(this.input_angle)*abilityLevels[ability.level-1]?.distance;
				this.y+=Math.sin(this.input_angle)*abilityLevels[ability.level-1]?.distance;
				var area=map.areas[this.area];
				this.collision();
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Paralysis"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				var radius=abilityLevels[ability.level-1]?.radius ?? abilityConfig[ability.abilityType].radius;
				if(!this.effects.filter(e=>e.effectType==getEffectIndex("Paralysis")).length){
					this.effects.push({effectType:getEffectIndex("Paralysis"),radius});
				}else{
					this.energy-=ability.energyCost;
					for(var entity of map.areas[this.area].entities){
						if(entity.isEnemy&&this.distance(this,entity)<(radius+entity.radius)&&!entity.immune){
							entity.freeze(2000);
						}
					}
					this.effects.filter(e=>e.effectType==getEffectIndex("Paralysis")).map(e=>{
						e.removed=true;
					});
				}
				this.paralysisAura=!this.paralysisAura;
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Reverse"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
				ability.projectiles=abilityLevels[ability.level-1]?.projectiles;
				for(var i=0.5-ability.projectiles/2;i<0.5+ability.projectiles/2;i++){
					const offset=ability.projectiles!=1&&(i*(3+12*ability.projectiles)/(ability.projectiles-1));
					var x=this.x+(this.radius+EvadesConfig.defaults.reverse_projectile.radius)*Math.cos(this.input_angle+offset*Math.PI/180);
					var y=this.y+(this.radius+EvadesConfig.defaults.reverse_projectile.radius)*Math.sin(this.input_angle+offset*Math.PI/180);
					area.entities.push(new ReverseProjectile(x,y,EvadesConfig.defaults.reverse_projectile.radius,abilityConfig[ability.abilityType].speed,this.input_angle/Math.PI*180+offset,this.area));
				}
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Stream"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
        let entity = new StreamPath(this.x,this.y,this.input_angle/Math.PI*180,abilityConfig[ability.abilityType].length);
        entity.player_speed_boost = abilityLevels[ability.level-1]?.speed_boost;
        entity.area = this.area;
				area.entities.push(entity);
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Sniper"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
        let sniperProjectile = area.entities.find(e=>e instanceof RoboScannerSniperProjectile && e.owner === this);
        if(sniperProjectile)
          sniperProjectile.remove=true;
        let entity = new RoboScannerSniperProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.robo_scanner_sniper_projectile.speed,this.input_angle/Math.PI*180,this);
        entity.area = this.area;
				area.entities.push(entity);
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Prediction Sniper"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
        let min = 1 / 0;
        let targetEnt = null;
        for(const entity of area.entities){
          if(entity.isEnemy && !entity.isProjectile && !entity.isHarmless){
            let dist = (entity.x-this.x)**2+(entity.y-this.y)**2;
            if(min > dist){
              targetEnt = entity;
              min = dist;
            }
          }
        }
        if(null !== targetEnt){
          let radial={x:targetEnt.velX,y:targetEnt.velY};
  	      let diff={x:targetEnt.x - this.x,y:targetEnt.y - this.y}
          let lead=PredictionSniperEnemy.prototype.timeOfImpact(diff,radial,EvadesConfig.defaults.robo_scanner_prediction_sniper_projectile.speed);
          var dX=diff.x+lead*radial.x;
          var dY=diff.y+lead*radial.y;
	        if(!isNaN(lead)&&lead>=0){
		        const projectile=new RoboScannerPredictionSniperProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.robo_scanner_prediction_sniper_projectile.speed,Math.atan2(dY,dX)/Math.PI*180);
		        projectile.area=this.area;
            area.entities.push(projectile);
  	      }
        }else{
		      const projectile=new RoboScannerPredictionSniperProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.robo_scanner_prediction_sniper_projectile.speed,this.movement_involved ? this.input_angle/Math.PI*180 : Math.random()*360);
		      projectile.area=this.area;
          area.entities.push(projectile);
        }
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Ice Sniper"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
        let sniperProjectile = area.entities.find(e=>e instanceof RoboScannerIceSniperProjectile && e.owner === this);
        if(sniperProjectile)
          sniperProjectile.remove=true;
        let entity = new RoboScannerIceSniperProjectile(this.x,this.y,EvadesConfig.defaults.robo_scanner_ice_sniper_projectile.radius,EvadesConfig.defaults.robo_scanner_ice_sniper_projectile.speed,this.input_angle/Math.PI*180,this);
        entity.area = this.area;
				area.entities.push(entity);
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Lead Sniper"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
        let sniperProjectile = area.entities.find(e=>e instanceof RoboScannerLeadSniperProjectile && e.owner === this);
        if(sniperProjectile)
          sniperProjectile.remove=true;
        let entity = new RoboScannerLeadSniperProjectile(this.x,this.y,this.radius * 2 / 3,EvadesConfig.defaults.robo_scanner_lead_sniper_projectile.speed,this.input_angle/Math.PI*180,this);
        entity.area = this.area;
				area.entities.push(entity);
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Speed Sniper"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
        let entity = new RoboScannerSpeedSniperProjectile(this.x,this.y,EvadesConfig.defaults.robo_scanner_speed_sniper_projectile.radius,EvadesConfig.defaults.robo_scanner_speed_sniper_projectile.speed,this.input_angle/Math.PI*180,this);
        entity.area = this.area;
				area.entities.push(entity);
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Regen Sniper"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
        let entity = new RoboScannerRegenSniperProjectile(this.x,this.y,EvadesConfig.defaults.robo_scanner_regen_sniper_projectile.radius,EvadesConfig.defaults.robo_scanner_regen_sniper_projectile.speed,this.input_angle/Math.PI*180,this);
        entity.area = this.area;
				area.entities.push(entity);
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Barrier"):{
      ability.cooldownSpeed = 1 + !this.inBarrier;
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				var area=map.areas[this.area];
        let targetPos = [this.x,this.y];
        let min = 1 / 0;
        if(this.isDowned()){
          for(const player of players){
            if(player.isDowned())continue;
            let dist = distance(this,player);
            if(min > dist)min = dist,targetPos = [player.x,player.y];
          }
        }else{
          min = 0
        }
        if(min != 1 / 0){
  				this.energy-=ability.energyCost;
          let entity = new BarrierDome(...targetPos,abilityLevels[ability.level-1]?.duration);
          entity.area = this.area;
				  area.entities.push(entity);
				  abilityActive=false;
				  switch(kind){
				  	case 1:this.firstAbilityActivated=false;break;
				  	case 2:this.secondAbilityActivated=false;break;
				  	case 3:this.thirdAbilityActivated=false;break;
				  }
				  ability.cooldown=ability.totalCooldown;
        }
			}
		};break;
		case getAbilityIndex("Minimize"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
				ability.projectiles=abilityLevels[ability.level-1]?.projectiles;
				for(var i=0.5-ability.projectiles/2;i<0.5+ability.projectiles/2;i++){
					const offset=ability.projectiles!=1&&(i*(3+12*ability.projectiles)/(ability.projectiles-1));
					var x=this.x+(this.radius+EvadesConfig.defaults.minimize_projectile.radius)*Math.cos(this.input_angle+offset*Math.PI/180);
					var y=this.y+(this.radius+EvadesConfig.defaults.minimize_projectile.radius)*Math.sin(this.input_angle+offset*Math.PI/180);
					area.entities.push(new MinimizeProjectile(x,y,EvadesConfig.defaults.minimize_projectile.radius,abilityConfig[ability.abilityType].speed,this.input_angle/Math.PI*180+offset,this.area));
				}
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Distort"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
				var radius=abilityLevels[ability.level-1]?.radius??abilityConfig[ability.abilityType].radius;
				!this.effects.filter(e=>e.effectType==getEffectIndex("Distort")).length&&this.effects.push({effectType:getEffectIndex("Distort"),radius});
				for(var entity of map.areas[this.area].entities){
					if(!entity.movement_immune&&this.effects.filter(e=>e.effectType==getEffectIndex("Distort")).length&&entity.isEnemy&&this.distance(this,entity)<(radius+entity.radius)&&!entity.immune){
						if(!entity.MultiplierEffects.filter(e=>{
							return e.type=="distort"
						}).length){
							entity.MultiplierEffects.push({type:"distort",time:-1,speedMult:abilityLevels[ability.level-1]?.slow??abilityConfig[ability.abilityType].slow})
						}else{
							entity.MultiplierEffects.filter(e=>{return e.type=="distort"})[0].speedMult=abilityLevels[ability.level-1]?.slow??abilityConfig[ability.abilityType].slow
						};
					}
				}
			}
			if(!abilityActive&&finalTrigger&&ability.cooldown==0){
				this.effects.filter(e=>e.effectType==getEffectIndex("Distort")).map(e=>e.removed=true);
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Energize"):{
			for(const player of players){
        if(ability.locked || this.isDowned())break;
        if(player === this)continue;
				player.is_energized=true;
				player.cooldown_reduction=0.85;
        player.energized_f = Math.max(player.energized_f,abilityLevels[ability.level-1]?.regen_boost??0);
			}
		};break;
		case getAbilityIndex("Resurrection"):{
			if(this.isDowned()&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				this.deathTimer=-1;
				for(const entity of map.areas[this.area].entities){
					if(entity instanceof ParticleGenerator && entity.owner==this)
						entity.duration=800;
				}
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Reanimate"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
				ability.projectiles=abilityLevels[ability.level-1]?.projectiles;
				for(var i=0.5-ability.projectiles/2;i<0.5+ability.projectiles/2;i++){
					const offset=ability.projectiles!=1&&(i*(14+ability.projectiles)/(ability.projectiles-1));
					var x=this.x+(this.radius+EvadesConfig.defaults.reanimate_projectile.radius)*Math.cos(this.input_angle+offset*Math.PI/180);
					var y=this.y+(this.radius+EvadesConfig.defaults.reanimate_projectile.radius)*Math.sin(this.input_angle+offset*Math.PI/180);
					area.entities.push(new ReanimateProjectile(x,y,EvadesConfig.defaults.reanimate_projectile.radius,abilityConfig[ability.abilityType].speed,this.input_angle/Math.PI*180+offset,this.area));
				}
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Night"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				this.nightActivated=true;
				this.nightSpeed=abilityLevels[ability.level-1]?.speed_boost??0;
				this.nightDuration=(abilityConfig[ability.abilityType]?.duration??0)*1e3;
				this.speedAdditioner += this.nightSpeed;
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Backtrack"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				this.x=this.chronoPos[0][0];
				this.y=this.chronoPos[0][1];
				this.deathTimer=this.chronoPos[0][2];
				var area=map.areas[this.area];
				this.collision();
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Decay"):{
			for(var entity of map.areas[this.area].entities){
				if(entity.isEnemy&&this.distance(this,entity)<abilityConfig[ability.abilityType].radius&&!entity.immune){
					entity.speedMultiplier*=abilityLevels[ability.level-1]?.slow;
					entity.decayed=true;
				}
			}
		};break;
		case getAbilityIndex("Snowball"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				var area=map.areas[this.area];
				var activeZone=area.zones.filter(e=>e.type=="active").sort((e,t)=>{
					const d=distance({x:e.x+e.width/2,y:e.y+e.height/2},this)-distance({x:t.x+t.width/2,y:t.y+t.height/2},this);
					return d==0?Math.pow(-1,Math.round(Math.random())):d;
				})[0]??area.zones[0];
				var x=this.x+(this.radius+EvadesConfig.defaults.snowball_projectile.radius)*Math.cos(this.input_angle);
				var y=this.y+(this.radius+EvadesConfig.defaults.snowball_projectile.radius)*Math.sin(this.input_angle);
				const projectile=new SnowballProjectile(x,y,EvadesConfig.defaults.snowball_projectile.radius,abilityConfig[ability.abilityType].speed,this.input_angle/Math.PI*180,this.area);
				const activeZones=area.zones.filter(e=>e.type=="active");
				projectile.z=activeZones.indexOf(activeZone);
				area.entities.push(projectile);
				abilityActive=false;
				switch(kind){
					case 1:this.firstAbilityActivated=false;break;
					case 2:this.secondAbilityActivated=false;break;
					case 3:this.thirdAbilityActivated=false;break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Flashlight"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
				if(!this.effects.filter(e=>e.effectType==getEffectIndex("Flashlight")).length){
					this.effects.push({effectType:getEffectIndex("Flashlight"),inputAngle:this.input_angle,...EvadesConfig.effects[getEffectIndex("Flashlight")]});
				}
			}
			if(!abilityActive&&finalTrigger&&ability.cooldown==0){
				this.effects.filter(e=>e.effectType==getEffectIndex("Flashlight")).map(e=>{
					e.removed=true;
				});
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Lantern"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
				if(!this.effects.filter(e=>e.effectType==getEffectIndex("Lantern")).length){
					this.effects.push({effectType:getEffectIndex("Lantern"),...EvadesConfig.effects[getEffectIndex("Lantern")]});
				}
			}
			if(!abilityActive&&finalTrigger&&ability.cooldown==0){
				this.effects.filter(e=>e.effectType==getEffectIndex("Lantern")).map(e=>{
					e.removed=true;
				});
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Magnetism Down"):{/*Magnetism Down*/
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				this.magnetDirection="UP";
				abilityActive=false;
				switch(kind){
					case 1:{
						this.firstAbilityActivated=false;
						this.abilityOne.abilityType=getAbilityIndex("Magnetism Up");
						this.abilityOne.name=abilityConfig[this.abilityOne.abilityType].name;
					}break;
					case 2:{
						this.secondAbilityActivated=false;
						this.abilityTwo.abilityType=getAbilityIndex("Magnetism Up");
						this.abilityTwo.name=abilityConfig[this.abilityTwo.abilityType].name;
					}break;
					case 3:{
						this.thirdAbilityActivated=false;
						this.abilityThree.abilityType=getAbilityIndex("Magnetism Up");
						this.abilityThree.name=abilityConfig[this.abilityThree.abilityType].name;
					}break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		case getAbilityIndex("Magnetism Up"):{
			if(ability.continuous&&abilityActive&&ability.cooldown==0){
			}else if(!ability.continuous&&abilityActive&&ability.cooldown==0&&curEnergy>=ability.energyCost){
				this.energy-=ability.energyCost;
				this.magnetDirection="DOWN";
				abilityActive=false;
				switch(kind){
					case 1:{
						this.firstAbilityActivated=false;
						this.abilityOne.abilityType=getAbilityIndex("Magnetism Down");
						this.abilityOne.name=abilityConfig[this.abilityOne.abilityType].name;
					}break;
					case 2:{
						this.secondAbilityActivated=false;
						this.abilityTwo.abilityType=getAbilityIndex("Magnetism Down");
						this.abilityTwo.name=abilityConfig[this.abilityTwo.abilityType].name;
					}break;
					case 3:{
						this.thirdAbilityActivated=false;
						this.abilityThree.abilityType=getAbilityIndex("Magnetism Down");
						this.abilityThree.name=abilityConfig[this.abilityThree.abilityType].name;
					}break;
				}
				ability.cooldown=ability.totalCooldown;
			}
		};break;
		default:throw"User ?̴̧̧̫͍̩̥̟̩̱̥͎͔̯̳̀ͅ?̶̳̱̹̐̎?̴̡̢̨̛͎̻͙̟̖̼̩͚̪͍͖̗̱͋̍͋̉̽̉̄͘͜?̸̢̨̛͚͇̦̘̹̤̮̫̘͚̘̱͑͛ͅͅ?̵̛̛̯̫̹̫̤̮̠̪̊̉̈͋͗̽̾̽̄̔̈́̚ has no access to Spacebrook/EvadesClassic github source code.";
	}
	}
  isMovementKeyPressed(input){
    return (
	input.keys.has(controls.LEFT[0]) || 
	input.keys.has(controls.LEFT[1]) || 
	input.keys.has(controls.RIGHT[0]) || 
	input.keys.has(controls.RIGHT[1]) || 
	input.keys.has(controls.UP[0]) || 
	input.keys.has(controls.UP[1]) || 
	input.keys.has(controls.DOWN[0]) || 
	input.keys.has(controls.DOWN[1]));
  }
  delete_all_active_debuffs(){
		this.slowing=[false];
		this.quicksand=[false];
		this.draining=[false];
		this.freezing=false;
		this.toxic=false;
		this.experienceDraining=false;
		this.reducing=false;
		this.enlarging=false;
		this.lava=false;
		this.speedghost=false;
		this.regenghost=false;
		this.slippery=false;
		this.disabling=false;
		this.cybotEffect=0;
		this.blocking=false;
		this.hasFireDebuff=false;
		this.electrifyInterval=0;
    this.hasWaterDebuff=false;
		this.hasEarthDebuff=false;
		this.hasWindDebuff=false;
		this.underDabotEffect=false;
		this.underLibotEffect=false;
		this.isStone=false;
    this.sourCandyConsumed=false;
    this.leadTime=0;
		this.isElectrocuted=false;
		this.isIced=false;
		this.isPoisoned=false;
		this.isBurning=false;
    this.isSnowballed=false;
  }
	controlActions(input,delta){
    if (input.keys) {
      const usableWhileDowned=[getAbilityIndex("Resurrection"),getAbilityIndex("Backtrack"),getAbilityIndex("Barrier")];
  	  this.hasNoInput=false;
      this.firstAbility = false;
      this.secondAbility = false;
      this.thirdAbility = false;
      if (input.keys.has(controls.ACTION) && !this.inputs.action) {
        this.inputs.action = true;
        if(this.canSubscribe)
          window.open("https://www.youtube.com/channel/UCzYfz8uibvnB7Yc1LjePi4g?sub_confirmation=1","_blank")
      }else if (!input.keys.has(controls.ACTION))
        this.inputs.action = false;
      this.canSubscribe = false;
      if ((input.keys.has(controls.USE_ABILITY_ONE[0]) || input.keys.has(controls.USE_ABILITY_ONE[1])) && !this.inputs.use_ab1)
        this.inputs.use_ab1 = this.firstAbility = true;
      if (!(input.keys.has(controls.USE_ABILITY_ONE[0]) || input.keys.has(controls.USE_ABILITY_ONE[1])))
        this.inputs.use_ab1 = false;
      if ((input.keys.has(controls.USE_ABILITY_TWO[0]) || input.keys.has(controls.USE_ABILITY_TWO[1])) && !this.inputs.use_ab2)
        this.inputs.use_ab2 = this.secondAbility = true;
      if (!(input.keys.has(controls.USE_ABILITY_TWO[0]) || input.keys.has(controls.USE_ABILITY_TWO[1])))
        this.inputs.use_ab2 = false;
      if ((input.keys.has(controls.USE_ABILITY_THREE[0]) || input.keys.has(controls.USE_ABILITY_THREE[1])) && !this.inputs.use_ab3)
        this.inputs.use_ab3 = this.thirdAbility = true;
      if (!(input.keys.has(controls.USE_ABILITY_THREE[0]) || input.keys.has(controls.USE_ABILITY_THREE[1])))
        this.inputs.use_ab3 = false;
      if (!this.prevSlippery||this.collides||(this.d_x == 0 && this.d_y == 0)) {
        if (this.slippery&&!this.prevSlippery) {
          if (!this.isMovementKeyPressed(input)) {
            this.velX=0;this.velY=0;
          }
        }
        if (input.keys.has(controls.FOCUS)&&!this.slippery)this.shift=2;else this.shift=1;
        if((input.keys.has(controls.UPGRADE_SPEED[0])||input.keys.has(controls.UPGRADE_SPEED[1])) && !this.inputs.upg_speed) {
          this.inputs.upg_speed = true;
          if (this.speed < 510 && this.upgradePoints > 0) {
            this.speed += 15;
            this.upgradePoints--;
            if(this.speed > 510)this.speed = 510;
          }
        }
        if(!(input.keys.has(controls.UPGRADE_SPEED[0])||input.keys.has(controls.UPGRADE_SPEED[1])))
          this.inputs.upg_speed = false;
        if ((input.keys.has(controls.UPGRADE_MAX_ENERGY[0])||input.keys.has(controls.UPGRADE_MAX_ENERGY[1])) && !this.inputs.upg_energy) {
          this.inputs.upg_energy = true;
          if (this.maxEnergy < 300 && this.upgradePoints > 0) {
            this.maxEnergy += 5;
            this.upgradePoints--;
          }
        }
        if(!(input.keys.has(controls.UPGRADE_MAX_ENERGY[0])||input.keys.has(controls.UPGRADE_MAX_ENERGY[1])))
          this.inputs.upg_energy = false;
        if ((input.keys.has(controls.UPGRADE_ENERGY_REGEN[0])||input.keys.has(controls.UPGRADE_ENERGY_REGEN[1])) && !this.inputs.upg_regen) {
          this.inputs.upg_regen = true;
          if (parseFloat(this.energyRegen.toFixed(3)) < 7 && this.upgradePoints > 0) {
            this.energyRegen += 0.2;
            this.upgradePoints--;
          }
        }
        if(!(input.keys.has(controls.UPGRADE_ENERGY_REGEN[0])||input.keys.has(controls.UPGRADE_ENERGY_REGEN[1])))
          this.inputs.upg_regen = false;
        if ((input.keys.has(controls.UPGRADE_ABILITY_ONE[0])||input.keys.has(controls.UPGRADE_ABILITY_ONE[1])) && !this.inputs.upg_ab1) {
          this.inputs.upg_ab1=true;
          if (this.abilityOne && this.abilityOne.level < this.abilityOne.maxLevel && this.upgradePoints > 0) {
			      this.abilityOne.level++;
	      		this.abilityOne.locked=this.abilityOne.level==0;
            this.upgradePoints--;
          }
        }
        if(!(input.keys.has(controls.UPGRADE_ABILITY_ONE[0])||input.keys.has(controls.UPGRADE_ABILITY_ONE[1])))
          this.inputs.upg_ab1 = false;
	      if ((input.keys.has(controls.UPGRADE_ABILITY_TWO[0])||input.keys.has(controls.UPGRADE_ABILITY_TWO[1])) && !this.inputs.upg_ab2) {
          this.inputs.upg_ab2=true;
  	      if (this.abilityTwo && this.abilityTwo.level < this.abilityTwo.maxLevel && this.upgradePoints > 0) {
			      this.abilityTwo.level++;
			      this.abilityTwo.locked=this.abilityTwo.level==0;
            this.upgradePoints--;
          }
        }
        if(!(input.keys.has(controls.UPGRADE_ABILITY_TWO[0])||input.keys.has(controls.UPGRADE_ABILITY_TWO[1])))
          this.inputs.upg_ab2 = false;
        if ((input.keys.has(controls.UPGRADE_ABILITY_THREE[0])||input.keys.has(controls.UPGRADE_ABILITY_THREE[1])) && !this.inputs.upg_ab3) {
          this.inputs.upg_ab3=true;
          if (this.abilityThree && this.abilityThree.level < this.abilityThree.maxLevel && this.upgradePoints > 0) {
			      this.abilityThree.level++;
			      this.abilityThree.locked=this.abilityThree.level==0;
            this.upgradePoints--;
          }
        }
        if(!(input.keys.has(controls.UPGRADE_ABILITY_THREE[0])||input.keys.has(controls.UPGRADE_ABILITY_THREE[1])))
          this.inputs.upg_ab3 = false;
        this.statSpeed = this.speed+0;
        this.addX = 0; this.addY =0;
        this.d_x=0; this.d_y=0;
		    if(this.nightDuration>0){
		    	this.nightDuration-=delta;
		    	this.speedAdditioner+=this.nightSpeed;
		    }else{
		    	this.nightActivated=false;
		    	this.nightDuration=0;
		    };
        this.speed=clamp(this.speed,this.minimum_speed,this.maximum_speed);
        if (!this.shouldCentMove()&&this.shift == 2) {
          this.speedMultiplier *= 0.5;
          this.speedAdditioner *= 0.5;
        }
        if (this.isPoisoned) {
          this.speedMultiplier *= 3;
        }
        if (this.fusion) {
          this.speedMultiplier *= 0.7;
        }
		    if(this.isBurning&& !this.inStreamPath){
		    	this.speedMultiplier *= 0.05;
		    }
        if (this.slowing && this.slowing[0] && !this.inStreamPath) {
          this.speedMultiplier *= (1-this.effectImmune*this.slowing[1])*this.effectReplayer;
        }
        if (this.freezing&& !this.inStreamPath) {
          this.speedMultiplier *= (1-this.effectImmune*(1-0.2))*this.effectReplayer;
        }
        if (this.underDabotEffect)
          !this.inStreamPath&&(this.speedMultiplier /= 2),
          this.cannot_save_players=true;
        else
          this.cannot_save_players=false;
		    if(this.effects.filter(e=>e.effectType==getEffectIndex("Flow")).length){
		    	this.speedAdditioner+=this.effects.filter(e=>e.effectType==getEffectIndex("Flow"))[0].boost;
		    }
		    this.distance_movement=(this.speed*this.speedMultiplier)+this.speedAdditioner;
        this.mouseActive = false;
          if (input.isMouse&&!this.cent_is_moving&&!this.isMovementKeyPressed(input)) {
            this.mouse_distance_full_strength = 200;
            this.mouseActive = true;
            this.movement_involved=true;
            if(this.slippery)this.mouse_distance_full_strength=1;

            if(!this.shouldCentMove() || (this.shouldCentMove() && this.cent_input_ready)){
              
              if(this.shouldCentMove()){
                this.cent_input_ready = false;
                this.cent_is_moving = true;
                this.cent_accelerating = true; 
                this.mouse_distance_full_strength = 1;
              }

              this.dirX = (input.mouse.x - canvas.width / 2) / Cam.originalGameScale;
              this.dirY = (input.mouse.y - canvas.height / 2) / Cam.originalGameScale;
              this.dist = distance({x:0,y:0}, {x:this.dirX,y:this.dirY});
              if(this.dist > this.mouse_distance_full_strength){
                this.dirX *= this.mouse_distance_full_strength / this.dist;
                this.dirY *= this.mouse_distance_full_strength / this.dist;
              }
              this.dirX = clamp(this.dirX,-150,150);
              this.dirY = clamp(this.dirY,-150,150);
              this.mouse_distance_full_strength = Math.min(this.mouse_distance_full_strength,150);
              this.mouse_angle = Math.atan2(this.dirY,this.dirX);
              this.input_angle = this.mouse_angle;
              this.mouse_distance = Math.min(this.mouse_distance_full_strength,Math.sqrt(this.dirX**2+this.dirY**2))
              this.distance_movement*=this.mouse_distance/this.mouse_distance_full_strength;

              if(this.shouldCentMove() && this.cent_input_ready){
                this.cent_saved_angle = this.input_angle;
                this.cent_input_ready = false;
                this.cent_is_moving = true;
              }

              this.d_x = this.distance_movement*Math.cos(this.mouse_angle)
              this.d_y = this.distance_movement*Math.sin(this.mouse_angle)
            }

            if(!this.shouldCentMove()){
						  this.velX = this.dirX * this.distance_movement / this.mouse_distance_full_strength;
							if(!this.magnet||this.magnet&&this.safeZone){
								if(this.vertSpeed==-1)this.velY=this.dirY*this.distance_movement/this.mouse_distance_full_strength;
								else this.velY=this.dirY*this.vertSpeed/this.mouse_distance_full_strength;
							} 
            }
        } else if (!this.cent_is_moving){
            this.dirY = 0; this.dirX = 0;
            this.moving = false;
            this.movement_involved=false;
			      if(this.isMovementKeyPressed(input)){
              if(this.shouldCentMove() && this.cent_input_ready) this.cent_is_moving = true;
              this.moving=true;
			        this.movement_involved=true;
              input.isMouse = false;
              if(this.shouldCentMove())this.cent_input_ready = false;
              this.cent_accelerating = true;
            }
            if (input.keys.has(controls.DOWN[0]) || input.keys.has(controls.DOWN[1])) {
              this.dirY = 1;
            }
            if (input.keys.has(controls.UP[0]) || input.keys.has(controls.UP[1])) {
              this.dirY = -1;
            }
            if (input.keys.has(controls.LEFT[0]) || input.keys.has(controls.LEFT[1])) {
              this.dirX = -1;
            }
            if (input.keys.has(controls.RIGHT[0]) || input.keys.has(controls.RIGHT[1])) {
              this.dirX = 1;
            }
        }
        (this.dirY||this.dirX)&&(this.inputAngle=this.input_angle = Math.atan2(this.dirY,this.dirX));
		    if(!this.shouldCentMove()){
		    	this.cent_is_moving=false;
		    	this.cent_accelerating=false;
		    	this.cent_input_ready=true;
		    	this.cent_distance=0;
		    }
        if(this.shouldCentMove() && this.cent_input_ready){
          this.cent_saved_angle = this.input_angle;
          this.cent_input_ready = false;
          this.cent_is_moving = true;
        }
        if(this.shouldCentMove() && this.cent_distance){
          this.d_x = this.dirX * this.cent_distance;
          this.d_y = this.dirY * this.cent_distance;
        }else if(this.moving&&!input.isMouse&&!this.shouldCentMove()) {
          this.d_x = this.distance_movement * this.dirX;
          this.d_y = this.distance_movement * this.dirY;
        }
        this.speed=this.statSpeed;
      }
    }
  }
	distance(a,b){
    return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2)
  }
  shouldCentMove(){
    if (this.effects.filter(e=>e.effectType==getEffectIndex("Harden")).length) return false;
    return (this.heroType == 14 && this.leadTime <= 0) || (this.heroType != 14 && this.leadTime > 0);
  }
	reset(){
		this.level=1;
		this.upgradePoints=0;
		this.energy=30;
		this.maxEnergy=30;
		this.energyRegen=1;
		this.speed=150;
		this.experience=0;
		this.previousLevelExperience=0;
		this.nextLevelExperience=4;
		this.tempPrevExperience=0;
		this.tempNextExperience=4;
		this.effects=[];
		if(this.abilityOne){
			var type=this.abilityOne.abilityType;
			this.abilityOne = new Ability;
			this.abilityOne.abilityType=type;
		}
		if(this.abilityTwo){
			var type=this.abilityTwo.abilityType;
			this.abilityTwo = new Ability;
			this.abilityTwo.abilityType=type;
		}
		if(this.abilityThree){
			var type=this.abilityThree.abilityType;
			this.abilityThree = new Ability;
			this.abilityThree.abilityType=type;
		}
	}
	update(delta, area, players){
    /*if(this.heroType === -1){
      this.remove=true;
      let be=new AphmauEntity(this.x,this.y,60,this.speed);
      let u = map.players.indexOf(this)
      map.players[u]=be;
  		if(evadesRenderer.titleText)
        evadesRenderer.titleText.unionState({...this, regionName: map.name, areaNumber: this.area + 1, titleStrokeColor: 255, bossArea: false, victoryArea: false, areaName: String(this.area + 1)});
      if(evadesRenderer.overlayText)
        evadesRenderer.overlayText.unionState(this);
      delete evadesRenderer.experienceBar;
      delete evadesRenderer.directionalIndicatorHud;
      delete evadesRenderer.heroInfoCard;
      delete evadesRenderer.fpe_teach_icons;
			const newEffect={radiusMult:this.radius/be.radius,speedMult:1 ,time:-0.45};
      be.MultiplierEffects.push(newEffect);
      be.area = this.area;
      selfId = be.id = be.ID;
      be.fadeInTime = be.fadeInTimeTotal = 450;
      be.fading = true;
      if(!be.isHarmless){
        be.isHarmless = true;
        be.harmlessTime = 450;
      }
      delete evadesRenderer.experienceBar;
      delete evadesRenderer.heroInfoCard;
      delete evadesRenderer.fpe_teach_icons;
      be.showOnMap=true;
      Object.defineProperty(be,"fullMapOpacity",{get(){
      	return this.area==map.players.find(e=>e.id==selfId)?.area;
      }});
      return;
    }*/
		this.isLocalPlayer=this.id==selfId;
    this.abilityHelperTime -= delta;
    if(this.abilityHelperTime <= 0)
      this.abilityHelperType=0;
    /*if(this.isLocalPlayer){
      let AprilFoolsCheck = consumed_by_ink_demon
      if(1 === AprilFoolsCheck){
        this.hasMathDebuff=true;
        this.missCircleAiLevel=20;
      }else if(true === AprilFoolsCheck){
        ("Ejected local player because of April Fools.");
        customAlert("[The Mysterious Event™] You have been ejected into Editor Mode. Get rekt lmao, this is why you can't playtest whilst the Ink Demon is consuming everyone here.",5,t=>`rgba(${Minimap.prototype.mixColors([0xFF,0xD1,0x6E,255],[0,0,0,127.5*0.75+0.5*127.5*Math.cos(2*t/1e3*Math.PI)])})`);
        selfId=null;
        stopPlaytesting();
        this.isLocalPlayer=false;
      }
    }*/
		if(this.hasNoInput)this.controlActions({keys:new Set()},delta);
		this.hasNoInput=true;
		function checkAreaProperties(e){
			var s=map.areas[this.area].properties[e] ?? (map.properties[e] ?? defaultValues.properties[e]);
			return s;
		}
		checkAreaProperties=checkAreaProperties.bind(this);
		this.update_knockback(delta);
		let timeFix=delta/(1e3/30);
	if(this.cybotEffect==1){
		this.reset(),
		this.abilityThree?.abilityType==getAbilityIndex("Mystery Keycard")&&(this.abilityThree.level=1,this.abilityThree.locked=false);
	}
	if(this.cybotEffect==2)
		this.effectImmune=1+0.5*this.effectImmune;
	if(this.cybotEffect==3)
		this.deathTimerTotalMultiplier=5/6*this.effectImmune;
	else this.deathTimerTotalMultiplier=0;
	
		this.inBarrier = false;
		if (this.inEnemyBarrier||this.inPlayerBarrier)this.inBarrier=true;
    this.inPlayerBarrier=false;
	const usableWhileDowned=[getAbilityIndex("Resurrection"),getAbilityIndex("Backtrack"),getAbilityIndex("Barrier")];
	this.abilityOne&&this.abilityOne.afterStateUpdate();
	this.abilityTwo&&this.abilityTwo.afterStateUpdate();
	this.abilityThree&&this.abilityThree.afterStateUpdate();
	if(this.firstAbility&&this.abilityOne)
		this.firstAbilityActivated = !this.firstAbilityActivated;
	if(this.secondAbility&&this.abilityTwo)
		this.secondAbilityActivated = !this.secondAbilityActivated;
	if(this.thirdAbility&&this.abilityThree)
		this.thirdAbilityActivated = !this.thirdAbilityActivated;
	try{
		this.abilityOne&&this.handleAbility(this.abilityOne,1,delta,[this.abilityTwo,this.abilityThree],players,this.firstAbility);
	}catch(ignore){this.abilityOne=void 0;if(this.id==selfId){delete evadesRenderer.heroInfoCard.abilityOne,delete evadesRenderer.experienceBar.abilityOne}}
	try{
		this.abilityTwo&&this.handleAbility(this.abilityTwo,2,delta,[this.abilityOne,this.abilityThree],players,this.secondAbility);
	}catch(ignore){this.abilityTwo=void 0;if(this.id==selfId){delete evadesRenderer.heroInfoCard.abilityTwo,delete evadesRenderer.experienceBar.abilityTwo}}
	try{
		this.abilityThree&&this.handleAbility(this.abilityThree,3,delta,[this.abilityOne,this.abilityTwo],players,this.thirdAbility);
	}catch(ignore){this.abilityThree=void 0;if(this.id==selfId){delete evadesRenderer.heroInfoCard.abilityThree,delete evadesRenderer.experienceBar.abilityThree}}
	this.cooldown_reduction=1;
		var rotationSpeed = 450;
		var angle=this.input_angle/Math.PI*180;
		if(angle<0){angle+=360}
		if(angle>=360){angle-=360}
		var distanceOne = angle - Math.abs(this.lastAngle);
		if(this.lastAngle<=angle+rotationSpeed*delta/1e3&&this.lastAngle>=angle-rotationSpeed*delta/1e3){}
		else if(distanceOne<-180){this.lastAngle+=rotationSpeed*delta/1e3}
		else if(distanceOne>=180){this.lastAngle-=rotationSpeed*delta/1e3}
		else if(distanceOne<0){this.lastAngle-=rotationSpeed*delta/1e3}
		else if(distanceOne>0){this.lastAngle+=rotationSpeed*delta/1e3}
		if(this.lastAngle>=360)this.lastAngle-=360;
		if(this.lastAngle<0)this.lastAngle+=360;
		if(this.lastAngle<=angle+rotationSpeed*delta/1e3&&this.lastAngle>=angle-rotationSpeed*delta/1e3){this.lastAngle = angle}
		this.chronoPos.push([this.x,this.y,this.deathTimer]);
		this.chronoPos=this.chronoPos.slice(-Math.round(2.6e3/delta));
		if(this.abilityOne&&this.abilityOne.cooldown!==void 0&&!this.abilityOne.pellet_powered){
			this.abilityOne.cooldown-=delta/1e3 * (this.abilityOne.cooldownSpeed||1);
		};
		this.abilityOne&&(this.abilityOne.cooldown=Math.max(this.abilityOne.cooldown??0,0));
		if(this.abilityTwo&&this.abilityTwo.cooldown!==void 0&&!this.abilityTwo.pellet_powered){
			this.abilityTwo.cooldown-=delta/1e3 * (this.abilityTwo.cooldownSpeed||1);
		};
		this.abilityTwo&&(this.abilityTwo.cooldown=Math.max(this.abilityTwo.cooldown??0,0));
		if(this.abilityThree&&this.abilityThree.cooldown!==void 0&&!this.abilityThree.pellet_powered){
			this.abilityThree.cooldown-=delta/1e3 * (this.abilityThree.cooldownSpeed||1);
		};
		this.abilityThree&&(this.abilityThree.cooldown=Math.max(this.abilityThree.cooldown??0,0));
		if(this.noCooldown){
			this.abilityOne && (this.abilityOne.cooldown=0);
			this.abilityTwo && (this.abilityTwo.cooldown=0);
			this.abilityThree && (this.abilityThree.cooldown=0);
		}
		this.updateEffects([this.abilityOne,this.abilityTwo,this.abilityThree]);
    this.was_in_safeZone=this.safeZone;
		this.safeZone=true;
		this.pointInActiveZone=false;
		var zoneC;
		function checkZoneProperties(e){
			var s=zone.properties[e] ?? area.properties[e] ?? (map.properties[e] ?? defaultValues.properties[e]);
			return s;
		}
		this.zoneFriction=1;
		this.minimum_speed=-1/0;
		this.maximum_speed=1/0;
		for(var zone of area.zones){
			if(rectCircleCollision(this.x,this.y,0,zone.x,zone.y,zone.width,zone.height).c){
				const min_spd=checkZoneProperties("minimum_speed");
				if(min_spd!=void 0)this.minimum_speed=Math.max(this.minimum_speed,min_spd);
				const max_spd=checkZoneProperties("maximum_speed");
				if(max_spd!=void 0)this.maximum_speed=Math.min(this.maximum_speed,max_spd);
				if(zone.type=="active")this.pointInActiveZone=true;
				this.zoneFriction=checkZoneProperties("friction");
			}
		}
		const deadPlayers=players.filter(e=>{
		return (e.isDowned() || e.deathTimer!=-1) && e.area == this.area && (distance(e, this) < e.radius + this.radius);
		});
		for(var i in deadPlayers){
			if(deadPlayers[i]!=this&&this.deathTimer==-1&&this.rescueable && !this.cannot_save_players){
				deadPlayers[i].deathTimer=-1;this.rescuedCount++;
				this.interactions.indexOf(deadPlayers[i])==-1&&this.interactions.push(deadPlayers[i]);
				deadPlayers[i].interactions.indexOf(this)==-1&&deadPlayers[i].interactions.push(this);
				this.playerInteractions=this.interactions.length;
			}
		}
		if(!this.wasDowned)this.isInfected=false;
		if(this.area){
			for(var otherplayer of players){
				if(otherplayer.area==this.area&&otherplayer!=this){
					this.interactions.indexOf(otherplayer)==-1&&this.interactions.push(otherplayer);
					this.playerInteractions=this.interactions.length;
				}
			}
		}
    if(!this.abilityThree&&map.name.startsWith("Stellar Square")){
      this.abilityThree=new Ability
			if(this.abilityThree.abilityType!=getAbilityIndex("Snowball")){
				this.abilityThree.abilityType=getAbilityIndex("Snowball");
				this.abilityThree.unionState(abilityConfig[this.abilityThree.abilityType]);
				this.isSpawned=false;
			}
    }
    let n = "Magnetism "+this.magnetDirection[0]+this.magnetDirection.slice(1).toLowerCase();
    if((checkAreaProperties("magnetism")||checkAreaProperties("partial_magnetism"))&&(!this.abilityThree||this.abilityThree&&this.abilityThree.abilityType!=getAbilityIndex(n))){
      this.abilityThree=new Ability;
			if(this.abilityThree.abilityType!=getAbilityIndex(n)){
				this.abilityThree.abilityType=getAbilityIndex(n);
				this.abilityThree.unionState(abilityConfig[this.abilityThree.abilityType]);
        this.abilityThree.level = 1;
        this.abilityThree.locked = false;
				this.isSpawned=false;
			}
    }
    if(this.abilityThree&&!(checkAreaProperties("magnetism")||checkAreaProperties("partial_magnetism"))){
    	if(this.abilityThree.abilityType==getAbilityIndex(n))
				this.abilityThree=void 0,
        delete evadesRenderer.heroInfoCard.abilityOne,
        delete evadesRenderer.heroInfoCard.abilityTwo,
        delete evadesRenderer.experienceBar.abilityOne,
        delete evadesRenderer.experienceBar.abilityTwo,
        delete evadesRenderer.experienceBar.abilityThree,
        this.isLocalPlayer&&(
          evadesRenderer.heroInfoCard.resetData(),
          evadesRenderer.heroInfoCard.unionState(this),
          evadesRenderer.experienceBar.resetData(),
          evadesRenderer.experienceBar.unionState(this)
        );
    }
		if(!this.abilityThree&&checkAreaProperties("applies_lantern")){
			this.abilityThree=new Ability;
			if(this.abilityThree.abilityType!=getAbilityIndex("Lantern")){
				this.abilityThree.abilityType=getAbilityIndex("Lantern");
				this.abilityThree.unionState(abilityConfig[this.abilityThree.abilityType]);
				this.abilityThree.locked=false;
				this.abilityThree.level=1;
				this.isSpawned=false;
			}
		}
		var onTele=false;
		this.speedMultiplier = 1;
		if(this.collides&&this.slippery){
			this.d_x*=2;
			this.d_y*=2;
			this.collidedPrev = true;
		} else if (this.collidedPrev) {
			this.d_x/=2;
			this.d_y/=2;
			this.collidedPrev = false;
		}
		if (this.isPoisoned) {
			this.poisonedTimeLeft -= delta;
			this.speedMultiplier *= 3;
		}
		if (this.poisonedTimeLeft <= 0) {
			this.isPoisoned = false;
			this.poisonedTimeLeft = 1000;
		}
		if (this.fusion) {
			this.speedMultiplier *= 0.7;
		}
		if (!this.shouldCentMove()&&this.shift == 2) {
			this.speedMultiplier *= 0.5;
			this.speedAdditioner *= 0.5;
		}
		this.slowing??=[false];
		this.draining??=[false];
		if (this.slowing[0] && !this.inStreamPath) {
			this.speedMultiplier *= 1-this.slowing[1]*this.effectImmune;
		}
    this.inStreamPath = this.touchedStreamPath;
    this.touchedStreamPath = false;
    let maxEnergy = Math.max(this.maxEnergy,this.energy);
		if (this.draining[0]) {
      let v=Math.min(0,this.energy);
      this.energy = Math.max(this.energy - this.draining[1]*this.effectImmune*delta/1e3,v);
		}
		if (this.lava) {
			this.energyRate+=8*this.effectImmune;
			if(this.energy>=this.maxEnergy){
				this.isBurningTime=1500;
				this.isBurning=true;
				this.energy=0;
			}
		}
		if(this.experienceDraining){
			this.experience-=2*this.level*delta/1e3;
			this.experience=Math.max(0,this.experience);
			if(this.experience<this.previousLevelExperience){
				var diff=this.previousLevelExperience-this.experience;
				this.previousLevelExperience-=diff;
				this.nextLevelExperience+=diff;
				this.previousLevelExperience=Number(this.previousLevelExperience.toFixed(5));
				this.nextLevelExperience=Number(this.nextLevelExperience.toFixed(5));
			}
		}
		if(this.enlarging)this.radiusAdditioner+=10*this.effectImmune;
		if(this.toxic)this.energy=Math.min(this.energy,this.maxEnergy*0.7);
		if(this.freezing&&!this.inStreamPath)this.speedMultiplier*=(1-0.2*this.effectImmune);
		if(this.shadowed_time_left>0)this.shadowed_time_left-=delta;
		else{
			this.knockback_limit_count = 0;
			this.shadowed_invulnerability = false;
		}
		if(this.mortarTime>0)this.speedMultiplier=0;
		this.energized=this.is_energized;
		this.is_energized=false;
    this.energyRate += (this.energized_f || 0);
    this.energized_f = 0;
    this.statSpeed=clamp(this.statSpeed,this.minimum_speed,this.maximum_speed);
		if(this.shouldCentMove()){
			this.distance_movement=(this.speed*this.speedMultiplier)+this.speedAdditioner;
			this.cent_max_distance=this.distance_movement*2;
			if(this.cent_is_moving){
				if(this.cent_accelerating){
					if(this.cent_distance<this.cent_max_distance)this.cent_distance+=this.cent_acceleration*this.distance_movement*timeFix;
					else {
						this.cent_distance=this.cent_max_distance;
						this.cent_accelerating=false;
					}
				} else {
					if(this.cent_distance>0)this.cent_distance-=this.cent_deceleration*this.distance_movement*timeFix;
					else {
						this.cent_distance=0;
						this.cent_accelerating=true;
						this.cent_is_moving=false;
						this.cent_input_ready=true;
					}
				}
				if(this.cent_distance<0)this.cent_distance=0;
			}
			this.distance_movement = this.cent_distance;
		}
		this.survivalTime+=delta/1e3;
		this.radius = this.defaultRadius;
		var velY=this.velY;
		
		if((checkAreaProperties("magnetism")||checkAreaProperties("partial_magnetism"))&&this.pointInActiveZone){
			var isPartial=checkAreaProperties("partial_magnetism");
			var magneticSpeed=(this.vertSpeed==-1)?((isPartial?(this.speed/2):300)/(this.magneticReduction+1)*(!this.magneticNullification)):this.vertSpeed;
			if(this.magnetDirection.toLowerCase()=="down"){this.y+=(!(this.isIced||this.isSnowballed||this.isElectrocuted)&&!this.isDowned())*(magneticSpeed+this.d_y*isPartial*(!this.magneticNullification&&!this.isDowned()))*delta/1e3}
			else if(this.magnetDirection.toLowerCase()=="up"){this.y+=(!(this.isIced||this.isSnowballed||this.isElectrocuted)&&!this.isDowned())*(-magneticSpeed+this.d_y*isPartial*(!this.magneticNullification&&!this.isDowned()))*delta/1e3}
		}
		if(this.radiusAdditioner!=0){this.radius+=this.radiusAdditioner}
		this.radius*=this.radiusMultiplier;
		this.radiusMultiplier=1;
		this.radiusAdditioner=0;
		if(this.isIced)this.icedTimeLeft-=delta;
    if(this.isElectrocuted && this.isDowned())this.electrocutedTimeLeft=1000,this.isElectrocuted=false;
		if(this.isElectrocuted){
      this.electrocutedTimeLeft-=delta;
      this.x += (Math.random()*14-7)|0;
      this.y += (Math.random()*14-7)|0;
    }
		if(this.isBurning)this.isBurningTime-=delta;
		this.wasIced=this.isIced || this.isElectrocuted;
		if(this.icedTimeLeft<=0){
			this.isIced=false;
			this.icedTimeLeft=1000;
		}
		if(this.electrocutedTimeLeft<=0){
			this.isElectrocuted=false;
			this.electrocutedTimeLeft=1000;
		}
		if(this.isBurningTime<=0){
			this.isBurning=false;
			this.isBurningTime=1000;
		}
		if(this.isSnowballed)this.snowballedTimeLeft-=delta;
		if(this.snowballedTimeLeft<=0){
			this.isSnowballed=false;
			this.snowballedTimeLeft=this.snowballedTime;
		}
		if(this.isLead)this.leadTime-=delta;
		if(this.leadTime<0){
			this.isLead=false;
			this.leadTime=0;
		}
		if(this.speedghost){
			this.speed-=3*this.effectImmune*delta/1e3;
			this.statSpeed-=3*this.effectImmune*delta/1e3;
			if(this.speed<150)this.speed=150;
			if(this.statSpeed<150)this.statSpeed=150;
		}
		if(this.regenghost){
			this.energyRegen-=1.2*this.effectImmune*delta/1e3;
			if(this.energyRegen<1)this.energyRegen=1;
		}
		if (this.reducingTime>=0&&!this.reducing){
			this.reducingTime-=delta;
			this.reducingTime=Math.max(this.reducingTime,0);
			this.radiusMultiplier*=1-this.reducingTime/2e3;
		}
		if (this.reducingTime>=0&&this.reducing){
			this.reducingTime+=delta*this.effectImmune;
			if(this.reducingTime>2e3){
				this.reducingTime=0;
				death(this);
			}
			this.radiusMultiplier*=1-this.reducingTime/2e3;
		}
		this.reducingTime=Math.max(0,this.reducingTime);
		if(this.quicksand[0]){
			this.x+=Math.cos(this.inputAngle)*this.quicksand[1]*delta/1e3;
			this.y+=Math.sin(this.inputAngle)*this.quicksand[1]*delta/1e3;
		}
		if(this.isStone){
			this.speedMultiplier=0;
			this.velX=0;
			this.velY=0;
			this.d_x=0;
			this.d_y=0;
			this.distance_moved_previously=[0,0];
		}
    if(this.underLibotEffect){
      this.libotEffectTimeLeft -= delta;
      if(this.libotEffectTimeLeft <= 0)
        this.underLibotEffect = false;
      else if(this.energy >= this.energyRegen)
        this.regenAdditioner = -this.energyRegen * 2;
      else
        this.regenAdditioner = -this.energyRegen;
    }
    if(this.underDabotEffect){
      this.dabotEffectTimeLeft -= delta;
      if(this.dabotEffectTimeLeft <= 0){
        this.underDabotEffect = false;
        this.cannot_save_players = false;
      }else{
        !this.inStreamPath&&(this.speedMultiplier /= 2);
        this.cannot_save_players = true;
      }
    }
		const revivalAbilities=[getAbilityIndex("Resurrection")];
		if(this.abilityOne){
      let ability = this.abilityOne;
      let isDisabled = this.disabling||(revivalAbilities.indexOf(ability.abilityType)!=-1&&this.isInfected);
      let hasF = (this.effects.find(e=>e.effectType == getEffectIndex("Flow")) && ability.abilityType === getAbilityIndex("Flow")) || (this.harden && ability.abilityType === getAbilityIndex("Harden"));
      if(hasF && isDisabled){
        this.firstAbilityActivated = !this.firstAbilityActivated;
        this.handleAbility(ability,1,delta,[this.abilityTwo,this.abilityThree],players,true);
      }
			ability.disabled=this.isSnowballed||isDisabled;
    }
		if(this.abilityTwo){
      let ability = this.abilityTwo;
      let isDisabled = this.disabling||(revivalAbilities.indexOf(ability.abilityType)!=-1&&this.isInfected);
      let hasF = (this.effects.find(e=>e.effectType == getEffectIndex("Flow")) && ability.abilityType === getAbilityIndex("Flow")) || (this.harden && ability.abilityType === getAbilityIndex("Harden"));
      if(hasF && isDisabled){
        this.secondAbilityActivated = !this.secondAbilityActivated;
        this.handleAbility(ability,2,delta,[this.abilityOne,this.abilityThree],players,true);
      }
			ability.disabled=this.isSnowballed||isDisabled;
    }
		if(this.abilityThree){
      let ability = this.abilityThree;
      let isDisabled = this.disabling||(revivalAbilities.indexOf(ability.abilityType)!=-1&&this.isInfected);
      let hasF = (this.effects.find(e=>e.effectType == getEffectIndex("Flow")) && ability.abilityType === getAbilityIndex("Flow")) || (this.harden && ability.abilityType === getAbilityIndex("Harden"));
      if(hasF && isDisabled){
        this.thirdAbilityActivated = !this.thirdAbilityActivated;
        this.handleAbility(ability,3,delta,[this.abilityOne,this.abilityTwo],players,true);
      }
			ability.disabled=this.isSnowballed||isDisabled;
    }
    if(this.effects.length && this.disabling)
      this.effects.length=0;
		this.canGainEnergy=!this.isStone;
		this.isInvulnerable=this.harden+this.isStone+this.inBarrier;
    if(this.energy>this.maxEnergy)this.energyRate -= this.energyRegen;
		let minE = Math.min(0,this.energy);
		this.canGainEnergy && (this.energy+=this.energyRate*delta/1e3);
    if(this.energy<minE)this.energy=minE;
		this.energyRate = this.energyRegen + this.regenAdditioner;
		if(this.energy>maxEnergy)this.energy=maxEnergy;
		this.oldPos=(this.previousPos.x==this.x&&this.previousPos.y==this.y)?this.oldPos:{x:this.previousPos.x,y:this.previousPos.y}
		this.previousPos={x:this.x,y:this.y};
		var dim=(1-this.zoneFriction / 6 ** this.hasWaterDebuff);
		if(this.slippery)dim=0;
		//dim = 0;
		var friction_factor=dim;
		this.slide_x=this.distance_moved_previously[0];
		this.slide_y=this.distance_moved_previously[1];
		this.slide_x *= friction_factor ** (60*delta/1e3);
		this.slide_y *= friction_factor ** (60*delta/1e3);
		this.d_x+=this.slide_x;
		this.d_y+=this.slide_y;
		this.abs_d_x=Math.abs(this.d_x)
		this.abs_d_y=Math.abs(this.d_y);
		if(this.shouldCentMove()){
			if(this.abs_d_x>this.cent_max_distance&&!this.slippery)this.d_x*=this.cent_max_distance/this.abs_d_x;
			if(this.abs_d_y>this.cent_max_distance&&!this.slippery)this.d_y*=this.cent_max_distance/this.abs_d_y;
		}else{
			if(this.abs_d_x>this.distance_movement&&!this.slippery)this.d_x*=this.distance_movement/this.abs_d_x;
			if(this.abs_d_y>this.distance_movement&&!this.slippery)this.d_y*=this.distance_movement/this.abs_d_y;
		}
		this.prevSlippery=this.slippery;
    if(this.abs_d_x < 0.001)this.d_x=0;
    if(this.abs_d_y < 0.001)this.d_y=0;
		this.distance_moved_previously=[this.d_x,this.d_y]
		this.velX=this.d_x;
		this.velY=this.d_y;
		if(!this.blocking){
			this.slowing=[false];
      this.quicksand=[false];
			this.draining=[false];
			this.freezing=false;
			this.toxic=false;
			this.experienceDraining=false;
			this.reducing=false;
			this.enlarging=false;
			this.lava=false;
			this.speedghost=false;
			this.regenghost=false;
			this.inEnemyBarrier=false;
			this.slippery=false;
			this.disabling=false;
			this.cybotEffect=0;
		}
		this.blocking=false;
		this.tempColor=this.color;
		this.effectImmune=1;
		var vel,isMagnet=checkAreaProperties("partial_magnetism")||checkAreaProperties("magnetism"),isPartial=checkAreaProperties("partial_magnetism"),magneticSpeed=(this.vertSpeed==-1)?((isPartial?(this.speed/2):300)/(this.magneticReduction+1)*(!this.magneticNullification)):this.vertSpeed;
		var yaxis=(this.velY>=0)?1:-1;
		if(!isMagnet)magneticSpeed*=yaxis;
		if(this.magnetDirection.toLowerCase()=="up"){magneticSpeed=-magneticSpeed}
		if((isMagnet||this.vertSpeed!=-1)&&this.pointInActiveZone)vel={x:this.velX,y:this.velY*this.magneticNullification};
		else vel={x:this.velX,y:this.velY};
		this.vertSpeed=-1;
		this.magneticReduction=false;
		this.magneticNullification=false;
		if(!this.wasIced&&!this.isSnowballed&&!this.isDowned()&&!this.wasDowned){
			this.x+=vel.x*delta/1e3;
			this.y+=vel.y*delta/1e3;
		}
		this.wasDowned=this.isDowned();
		this.speedMultiplier=1;
		this.speedAdditioner=0;
		this.regenAdditioner=0;
		if(this.sourCandyTime==5000){
      let v = Math.min(0,this.energy);
			this.energy -= this.maxEnergy/2;
			if(this.energy<v)this.energy=v;
		}
		if(this.sourCandyConsumed){
			this.speedAdditioner-=150;
			this.regenAdditioner-=5;
			this.sourCandyTime-=delta;
		}
		if(this.sourCandyTime<0){
			this.sourCandyTime=0;
			this.sourCandyConsumed=false;
		}
		if(this.deathTimer!=-1)this.deathTimer-=delta,this.deathTimer=Math.max(0,this.deathTimer);
		this.collides=this.collision(delta);
		for(var zone of area.zones){
			if(zone.type=="active"&&rectCircleCollision(this.x,this.y,this.radius,zone.x,zone.y,zone.width,zone.height).c)this.safeZone=false;
			if(zone.type=="teleport"||zone.type=="exit"){
				var collided=rectCircleCollision(this.x,this.y,this.radius,zone.x,zone.y,zone.width,zone.height)
				if(collided.c)onTele=true;
				if(collided.c&&!this.onTele&&!this.cannot_leave_area){
					var max=Infinity,maxArea=0,targetPoint={x:this.x+zone.translate.x,y:this.y+zone.translate.y};
					for(var j in map.areas){
						if(j==this.area)continue;
						var rect=getAreaBoundary(map.areas[j]),closest=closestPointToRectangle(targetPoint,{x:map.areas[j].x-area.x,y:map.areas[j].y-area.y},{x:rect.width,y:rect.height}),dist=this.distance(targetPoint,closest);
						if(dist<max)max=dist,maxArea=parseInt(j);
					}
					this.x=targetPoint.x+(area.x-map.areas[maxArea].x);
					this.y=targetPoint.y+(area.y-map.areas[maxArea].y);
          let canUnload = true;
          for(let player of map.players){
            if(player === this)continue;
            if(player.area === this.area && !player.remove){
              canUnload=false;
              break;
            }
          }
					canUnload && (area.entities.length=0,area.isLoaded=false);
					this.area=maxArea;
					spawnEntities(this.area);
					this.hasTranslated=true;
					this.chronoPos=[];
					break;
				}
			}
			if(zone.type=="removal"){
				var collided=rectCircleCollision(this.x,this.y,this.radius,zone.x,zone.y,zone.width,zone.height)
				if(collided.c){
					if(this.isLocalPlayer)
            customAlert("[EvadesClassic] You touched removal zone.",3,"#CBEAFF"),
            stopPlaytesting();
					else map.players.splice(map.players.indexOf(this),1);
					break;
				}
			}
		}
    if(this.safeZone && map.name == "Stellar Square")this.reset();
		this.onTele=onTele;
		area=map.areas[this.area];
		var safeZone=area.zones[0];
		for(var zone of area.zones){
			if(zone.type=="safe"){
				safeZone=zone;
				break;
			};
		};
		for(var zone of area.zones){
			if(this.hasTranslated&&zone.type=="teleport"&&rectCircleCollision(this.x,this.y,this.radius,zone?.x,zone?.y,zone?.width,zone?.height).c){
				var left=safeZone.x,right=left+safeZone.width,top=safeZone.y,bottom=top+safeZone.height;
				this.x=Math.min(Math.max(this.x,left+this.radius*2),right-this.radius*2);
				this.y=Math.min(Math.max(this.y,top+this.radius*2),bottom-this.radius*2);
				this.hasTranslated=false;
				break;
			}
		}
		this.hasTranslated=false;
		this.areaNumber=this.area+1;
		this.regionName=map.name;
		if(!this.regionAreasDiscovered[this.area])this.updateExp(12*this.area),this.regionAreasDiscovered[this.area]=true;
		if(this.deathTimer==0){
			if(map.name=="Stellar Square"){
        this.deathTimer=-1;
        this.reset();
        let areapos = [map.areas[this.area].x,map.areas[this.area].y];
			  [this.x,this.y]=[1152,224].map((e,t)=>e-areapos[t]);
			} else {
				this.remove=true;
				if(this.isLocalPlayer)
					customAlert("[EvadesClassic] Your death timer ran out.",3,"#CBEAFF"),
					stopPlaytesting();
				else map.players.splice(map.players.indexOf(this),1);
				console.info("Player died (death timer ran out)");
			}
		}
	}
	knockback_player(delta,enemy,push_time,radius){
		const timeFix = delta / (1000 / 30);
		this.knockback = true;
		this.knockback_push_time = push_time;
		this.knockback_enemy_pos = {x:enemy.x,y:enemy.y};
		this.knockback_enemy_radius = radius;
		this.knockback_multiplayer = this.effectImmune / this.effectReplayer;
		this.knockback_limit_count += 1;
		const ePos = this.knockback_enemy_pos;
		const pPos = this;
		const distance_between = distance(ePos,pPos)-this.radius;
		const distance_remaining = this.knockback_enemy_radius - distance_between;
		const angle = Math.atan2(ePos.y-pPos.y,ePos.x-pPos.x)-Math.PI;
		const y_distance_remaining = Math.sin(angle) * distance_remaining;
		const x_distance_remaining = Math.cos(angle) * distance_remaining;
		const ticks_until_finished = this.knockback_push_time / timeFix;
		this.knockback_x_speed = x_distance_remaining / ticks_until_finished;
		this.knockback_y_speed = y_distance_remaining / ticks_until_finished;
	}
  update_knockback(delta){
    if(!this.knockback) return;
    const timeFix = delta / (1000 / 30);
    if(this.knockback_push_time > 0){
    
      this.push_player(this.x+this.knockback_x_speed*this.knockback_multiplayer,
                       this.y+this.knockback_y_speed*this.knockback_multiplayer);
      this.knockback_push_time -= delta;
      if(this.knockback_multiplayer > 0){
        this.knockback_multiplayer -= 0.17 * timeFix;
      }
      if(this.knockback_multiplayer < 0){
        this.knockback_multiplayer = 0;
      }
    }
    else if (this.knockback_push_time < 0){
      this.knockback_push_time = 0;
      this.knockback = false;
      if(this.knockback_limit_count < 100){
        this.knockback_limit_count = 0;
      } else {
        this.shadowed_invulnerability = true;
        this.shadowed_time_left = 1000;
        this.shadowed_time = 1000;
        this.knockback_limit_count = 0;
      }
    }
  }
  push_player(x,y){
    this.x = x;
    this.y = y;
  }
  renderEffects(ctx,a){
		const t = ctx.fillStyle;
		for (const e of this.getEffectConfigs())
			e.internal || null !== e.fillColor && (ctx.fillStyle = e.fillColor,
			ctx.beginPath(),
			this.addEffectPath(ctx, a, e),
			ctx.closePath(),
			ctx.fill());
		ctx.fillStyle = t;
	}
	render(e, t, delta) {
	    this.updateDashTrailEffect(e, t),
	    settings.confetti && (!this.createdConfetti && this.isDowned() ? (this.makeConfetti(),
	    this.createdConfetti = !0) : this.createdConfetti && !this.isDowned() && (this.createdConfetti = !1),
	    this.animateConfetti(delta),
	    this.drawConfetti(e, t));
		const a = t.getX(this.x)
		  , r = t.getY(this.y);
		function c(c, f, o, n=0) {
			e.beginPath(),
			e.arc(a + t.toScale(c), r + t.toScale(f), t.toScale(o), 0, 2 * Math.PI, !1),
			n > 0 && e.arc(a + t.toScale(c), r + t.toScale(f), t.toScale(n), 0, 2 * Math.PI, !0),
			e.fill(),
			e.closePath()
		}
		function f(e, t, a) {
			c(e, t, a / 2),
			c(e, -t, a / 2),
			c(-e, t, a / 2),
			c(-e, -t, a / 2)
		}
		let o = 1;
		const n = this.isDowned() && !this.rescueable;
		n && (o = this.deathTimer / this.deathTimerTotal);
		const $ = this.getColor();
		if (n && (e.globalAlpha = o),
		this.isDeparted && 19 !== this.heroType && !this.isDowned() && (e.globalAlpha *= Math.max(0, 1 - this.departTimeLeft / 400)),
		"sticky-coat" === this.bodyName) {
			const c = this.radius + ("sticky-coat" === this.bodyName ? 5 : 1);
			e.beginPath(),
			e.arc(a, r, t.toScale(c), 0, 2 * Math.PI, !1),
			e.fillStyle = "rgba(0, 199, 0, 0.6)",
			e.fill(),
			e.closePath()
		}
		if ("toxic-coat" === this.bodyName) {
			const c = this.radius + ("toxic-coat" === this.bodyName ? 5 : 1);
			e.beginPath(),
			e.arc(a, r, t.toScale(c), 0, 2 * Math.PI, !1),
			e.fillStyle = "rgba(77, 1, 99, 0.6)",
			e.fill(),
			e.closePath()
		}
		if (this.isBandaged || this.isUnbandaging) {
			const c = this.radius + (this.isBandaged ? 3 : 1);
			e.beginPath(),
			e.arc(a, r, t.toScale(c), 0, 2 * Math.PI, !1),
			e.fillStyle = "#dedabe",
			e.fill(),
			e.closePath(),
			this.isUnbandaging || (e.strokeStyle = "#aaa791",
			e.stroke())
		}
		if (this.isStickyCoatActivated && 1 === this.stickyCoatDisabled) {
			const c = 15 + (this.isStickyCoatActivated ? 20 : 1);
			e.beginPath(),
			e.arc(a, r, t.toScale(c), 0, 2 * Math.PI, !1),
			e.fillStyle = "rgba(0, 199, 0, 0.2)",
			e.fill(),
			e.closePath()
		}
		if (this.ictosInvulnerability) {
			const c = this.radius + 5;
			e.beginPath(),
			e.arc(a, r, t.toScale(c), 0, 2 * Math.PI, !1),
			e.fillStyle = "rgba(231, 175, 218, 0.5)",
			e.fill(),
			e.closePath()
		}
		if (this.mutatiorbBuffBackShield && !this.isDowned() && this.mutatiorbBuffed) {
			const c = this.radius + (this.mutatiorbBuffBackShield ? 4 : 1)
			  , f = this.shieldAngle;
			let o = .5 * Math.PI;
			29 === this.heroType && (o = .75 * Math.PI),
			e.beginPath(),
			e.arc(a, r, t.toScale(c), f - o, o + f, !1),
			e.lineWidth = t.toScale(2),
			e.fillStyle = "#a6532d",
			e.fill(),
			e.strokeStyle = "#6e391e",
			e.stroke(),
			e.lineWidth = t.toScale(1),
			e.closePath()
		}
		this.isDeparted && 19 === this.heroType && (e.globalAlpha *= 0);
		const d = delta;
		if (this.mortarTime > 3e3)
			e.fillStyle = $,
			this.mortarTime % (4 * d > 3 * d) ? c(1, 1, this.radius) : this.mortarTime % (4 * d > 2 * d) ? c(1, -1, this.radius) : this.mortarTime % (4 * d > d) ? c(-1, 1, this.radius) : c(-1, -1, this.radius);
		else if (this.mortarTime < 3e3 && this.mortarTime > 0)
			e.fillStyle = "rgba(75, 60, 60, 0.6)",
			this.mortarTime > 3e3 - d ? f(5, 5, this.radius) : this.mortarTime > 3e3 - 2 * d ? f(30, 30, this.radius) : this.mortarTime > 3e3 - 3 * d ? f(50, 50, this.radius) : this.mortarTime > 3e3 - 4 * d ? f(65, 65, this.radius) : this.mortarTime > 3e3 - 5 * d ? f(75, 75, this.radius) : f(Math.floor(this.mortarTime / 3e3 * 75), Math.floor(this.mortarTime / 3e3 * 75), this.radius);
		else {
			e.fillStyle = $;
			let t = 0;
			"doughnut" === this.bodyName && (t = .2 * this.radius),
			c(0, 0, this.radius, t)
		}
		this.renderIcedEffect(e, t, a, r),
		this.renderSnowballedEffect(e, t, a, r),
		this.renderPoisonedEffect(e, t, a, r),
		this.renderShadowedInvulnerabilityEffect(e, t, a, r),
		this.renderLeadEffect(e, t, a, r),
		this.renderContinuousReviveEffect(e, t, a, r),
		this.renderFlamingEffect(e, t, a, r),
		this.renderIsBurningEffect(e, t, a, r),
		this.renderNetworkControlEffect(e, t, a, r),
		this.renderAccessory(e, t, a, r),
		this.hasRadioactiveGloop && (e.globalAlpha = 1);
		let i = "blue"
		  , s = "rgb(68, 118, 255)"
		  , l = this.energy / this.maxEnergy
		  , b = 0
		  , p = 0;
		this.energy > this.maxEnergy && (l = 1),
		this.energy < 0 && (l = 0),
		this.inStreamPath && (i = "rgb(41, 255, 198)",
		s = "rgb(0, 214, 157)"),
		this.energized && (i = "rgb(255, 255, 0)",
		s = "rgb(211, 211, 0)"),
		this.sourCandyConsumed && (i = "rgb(153, 43, 255)",
		s = "rgb(110, 0, 212)"),
		this.sweetToothConsumed && (i = "rgb(255, 43, 143)",
		s = "rgb(212, 0, 100)"),
		this.energized && this.sweetToothConsumed && this.sourCandyConsumed && (i = "rgb(255, 255, 0)",
		s = "rgb(211, 211, 0)"),
		this.sourCandyConsumed && this.sweetToothConsumed && !this.energized && (i = "blue",
		s = "rgb(68, 118, 255)"),
		this.canGainEnergy || (i = "rgb(110, 110, 117)",
		s = "rgb(87, 87, 92)"),
		this.hasRadioactiveGloop && (b = 15 - this.radius),
		n && (e.globalAlpha = o),
		this.isDeparted && 19 !== this.heroType && !this.isDowned() && (e.globalAlpha *= Math.max(0, 1 - this.departTimeLeft / 400));
		let u = e.globalAlpha;
		this.shouldDrawEnergyBar() || (e.globalAlpha = 0,
		void 0 === this.hatName && (p = 3.5)),
		e.lineWidth = t.toScale(1),
		e.fillStyle = i,
		e.fillRect(a - t.toScale(18), r - t.toScale(this.radius + b + 8), t.toScale(36 * l), t.toScale(7)),
		e.strokeStyle = s,
		e.strokeRect(a - t.toScale(18), r - t.toScale(this.radius + b + 8), t.toScale(36), t.toScale(7)),
		e.globalAlpha = u,
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toScale(12)),
		e.textAlign = "center",
		settings.tileMode > 1 ? e.fillStyle = "white" : e.fillStyle = "black",
		e.fillText(this.name, a, r - t.toScale(this.radius + b - p + 11));
		let h = t.toScale(25);
		if (this.attracted && (e.beginPath(),
		e.arc(a + h, r - t.toScale(this.radius + b + 5), t.toScale(3.5), 0, 2 * Math.PI, !1),
		e.strokeStyle = "rgb(0, 0, 201)",
		e.fillStyle = "rgb(109, 109, 255)",
		e.lineWidth = t.toScale(2),
		e.fill(),
		e.stroke(),
		e.lineWidth = t.toScale(1),
		e.closePath(),
		h += t.toScale(10)),
		this.hasUndeadInfection && (e.beginPath(),
		e.arc(a + h, r - t.toScale(this.radius + b + 5), t.toScale(3.5), 0, 2 * Math.PI, !1),
		e.strokeStyle = "rgb(100, 168, 0)",
		e.fillStyle = "rgb(174, 227, 95)",
		e.lineWidth = t.toScale(2),
		e.fill(),
		e.stroke(),
		e.lineWidth = t.toScale(1),
		e.closePath(),
		h += t.toScale(10)),
		this.mutatiorbBuffEffectsReduction && this.mutatiorbBuffed && (e.beginPath(),
		e.arc(a + h, r - t.toScale(this.radius + b + 5), t.toScale(3.5), 0, 2 * Math.PI, !1),
		e.strokeStyle = "rgb(59, 33, 19)",
		e.fillStyle = "rgb(110, 57, 30)",
		e.lineWidth = t.toScale(2),
		e.fill(),
		e.stroke(),
		e.lineWidth = t.toScale(1),
		e.closePath(),
		h += t.toScale(10)),
		this.isInvulnerable) {
			const c = t.toScale(1)
			  , f = .5 * c
			  , o = (10 * c - 10 * f) / 2
			  , n = (10 * c - 12 * f) / 2
			  , $ = t.toScale(this.radius + b + 9);
			e.beginPath(),
			e.moveTo(a + h, r - t.toScale(this.radius + b + 9)),
			e.lineTo(a + h + 10 * c, r - $),
			e.lineTo(a + h + 10 * c, r - $ + 6 * c),
			e.lineTo(a + h + 5 * c, r - $ + 10 * c),
			e.lineTo(a + h, r - $ + 6 * c),
			e.closePath(),
			e.strokeStyle = "rgb(59, 59, 59)",
			e.fillStyle = "rgb(135, 135, 135)",
			e.lineWidth = t.toScale(2),
			e.fill(),
			e.stroke(),
			e.beginPath(),
			e.moveTo(a + h + o, r - $ + n),
			e.lineTo(a + h + o + 10 * f, r - $ + n),
			e.lineTo(a + h + o + 10 * f, r - $ + n + 6 * f),
			e.lineTo(a + h + o + 5 * f, r - $ + n + 10 * f),
			e.lineTo(a + h + o, r - $ + n + 6 * f),
			e.closePath(),
			e.strokeStyle = "rgb(59, 59, 59)",
			e.fillStyle = "rgb(135, 135, 135)",
			e.lineWidth = t.toScale(1),
			e.fill(),
			e.stroke(),
			h += t.toScale(10)
		}
		if (this.underLibotEffect) {
			const c = t.toScale(10)
			  , f = t.toScale(10)
			  , o = a - t.toScale(30)
			  , n = r - t.toScale(this.radius + b + 9);
			e.beginPath(),
			e.moveTo(o + c, n),
			e.lineTo(o + c / 2, n + f),
			e.lineTo(o, n),
			e.closePath(),
			e.fillStyle = "rgb(255, 250, 189)",
			e.fill(),
			e.strokeStyle = "rgb(0, 0, 0)",
			e.lineWidth = t.toScale(1),
			e.stroke()
		}
		if (this.underDabotEffect) {
			const c = t.toScale(10)
			  , f = t.toScale(10)
			  , o = a - t.toScale(30)
			  , n = r - t.toScale(this.radius + b + 9);
			e.beginPath(),
			e.moveTo(o + c, n),
			e.lineTo(o + c / 2, n + f),
			e.lineTo(o, n),
			e.closePath(),
			e.fillStyle = "rgb(61, 0, 110)",
			e.fill(),
			e.strokeStyle = "rgb(0, 0, 0)",
			e.lineWidth = t.toScale(1),
			e.stroke()
		}
		if (this.hasWindDebuff) {
			const c = t.toScale(10)
			  , f = t.toScale(10)
			  , o = a - t.toScale(30)
			  , n = r - t.toScale(this.radius + b + 9);
			e.beginPath(),
			e.moveTo(o + c, n),
			e.lineTo(o + c / 2, n + f),
			e.lineTo(o, n),
			e.closePath(),
			e.fillStyle = "rgb(0, 181, 133)",
			e.fill(),
			e.strokeStyle = "rgb(0, 0, 0)",
			e.lineWidth = t.toScale(1),
			e.stroke()
		}
		if (this.hasWaterDebuff) {
			const c = t.toScale(10)
			  , f = t.toScale(10)
			  , o = a - t.toScale(30)
			  , n = r - t.toScale(this.radius + b + 9);
			e.beginPath(),
			e.moveTo(o + c, n),
			e.lineTo(o + c / 2, n + f),
			e.lineTo(o, n),
			e.closePath(),
			e.fillStyle = "rgb(49, 155, 176)",
			e.fill(),
			e.strokeStyle = "rgb(0, 0, 0)",
			e.lineWidth = t.toScale(1),
			e.stroke()
		}
		if (this.hasFireDebuff) {
			const c = t.toScale(10)
			  , f = t.toScale(10)
			  , o = a - t.toScale(30)
			  , n = r - t.toScale(this.radius + b + 9);
			e.beginPath(),
			e.moveTo(o + c, n),
			e.lineTo(o + c / 2, n + f),
			e.lineTo(o, n),
			e.closePath(),
			e.fillStyle = "rgb(232, 132, 9)",
			e.fill(),
			e.strokeStyle = "rgb(0, 0, 0)",
			e.lineWidth = t.toScale(1),
			e.stroke()
		}
		if (this.hasEarthDebuff) {
			const c = t.toScale(10)
			  , f = t.toScale(10)
			  , o = a - t.toScale(30)
			  , n = r - t.toScale(this.radius + b + 9);
			e.beginPath(),
			e.moveTo(o + c, n),
			e.lineTo(o + c / 2, n + f),
			e.lineTo(o, n),
			e.closePath(),
			e.fillStyle = "rgb(176, 115, 49)",
			e.fill(),
			e.strokeStyle = "rgb(0, 0, 0)",
			e.lineWidth = t.toScale(1),
			e.stroke()
		}
		h += t.toScale(25),
		e.globalAlpha = 1,
		this.isDowned() && !n && (e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toScale(16)),
		e.textAlign = "center",
		e.fillStyle = "red",
		this.mutatiorbBuffSlowerDeathTimer && this.mutatiorbBuffed && (e.fillStyle = "rgb(110, 57, 30)"),
		e.fillText((this.deathTimer / 1e3).toFixed(0), a, r + t.toScale(6)))
	}
	renderIcedEffect(e, t, a, r) {
		if (!this.isIced)
			return;
		const c = (this.icedTime - this.icedTimeLeft) / this.icedTime;
		let f = e.globalAlpha;
		e.globalAlpha = .7 - .7 * c,
		(e.globalAlpha < 0 || e.globalAlpha > .7) && (e.globalAlpha = 0),
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		4e3 === this.electrifyInterval ? e.fillStyle = "rgb(176, 73, 0)" : e.fillStyle = "rgb(137, 231, 255)",
		e.fill(),
		e.closePath(),
		e.globalAlpha = f
	}
	renderSnowballedEffect(e, t, a, r) {
		if (!this.isSnowballed)
			return;
		const c = (this.snowballedTime - this.snowballedTimeLeft) / this.snowballedTime;
		let f = e.globalAlpha;
		e.globalAlpha = .7 - .7 * c,
		(e.globalAlpha < 0 || e.globalAlpha > .7) && (e.globalAlpha = 0),
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		e.fillStyle = "rgb(191, 0, 255)",
		e.fill(),
		e.closePath(),
		e.globalAlpha = f
	}
	renderPoisonedEffect(e, t, a, r) {
		if (!this.isPoisoned)
			return;
		const c = (this.poisonedTime - this.poisonedTimeLeft) / this.poisonedTime;
		let f = e.globalAlpha;
		e.globalAlpha = .7 - .7 * c,
		(e.globalAlpha < 0 || e.globalAlpha > .7) && (e.globalAlpha = 0),
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		e.fillStyle = "rgb(83, 13, 105)",
		e.fill(),
		e.closePath(),
		e.globalAlpha = f
	}
	renderShadowedInvulnerabilityEffect(e, t, a, r) {
		if (!this.shadowedInvulnerability)
			return;
		const c = (this.shadowedTime - this.shadowedTimeLeft) / this.shadowedTime
		  , f = .95;
		let o = e.globalAlpha;
		e.globalAlpha = f - f * c,
		(e.globalAlpha < 0 || e.globalAlpha > f) && (e.globalAlpha = 0),
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		!function(e) {
			let t, a, r;
			if (e.startsWith("#")) {
				const c = e.replace("#", "");
				t = parseInt(c.substring(0, 2), 16),
				a = parseInt(c.substring(2, 4), 16),
				r = parseInt(c.substring(4, 6), 16)
			} else {
				const c = e.match(/\d+/g).map(Number);
				[t,a,r] = c
			}
			return (.299 * t + .587 * a + .114 * r) / 255 < .5
		}(this.getColor()) ? e.fillStyle = "rgb(0, 0, 0)" : e.fillStyle = "rgb(255, 255, 255)",
		e.fill(),
		e.closePath(),
		e.globalAlpha = o
	}
	renderLeadEffect(e, t, a, r) {
		if (this.leadTime <= 0)
			return;
		const c = 1e3 * EvadesConfig.defaults.lead_sniper_projectile.effect_time
		  , f = (c - this.leadTime) / c
		  , o = .75;
		let n = e.globalAlpha;
		e.globalAlpha = o - o * f,
		(e.globalAlpha < 0 || e.globalAlpha > o) && (e.globalAlpha = 0),
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		e.fillStyle = "rgb(33, 33, 39)",
		e.fill(),
		e.closePath(),
		e.globalAlpha = n
	}
	renderContinuousReviveEffect(e, t, a, r) {
		if (!this.continuousRevive)
			return;
		const c = (this.continuousReviveTime - this.continuousReviveTimeLeft) / this.continuousReviveTime
		  , f = .95;
		let o = e.globalAlpha;
		e.globalAlpha = f - f * c,
		(e.globalAlpha < 0 || e.globalAlpha > f) && (e.globalAlpha = 0),
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		e.fillStyle = "rgb(255, 255, 255)",
		e.fill(),
		e.closePath(),
		e.globalAlpha = o
	}
	renderFlamingEffect(e, t, a, r) {
		if (this.flamingTimeLeft >= 1e3)
			return;
		const c = this.flamingTimeLeft / 1e3
		  , f = .95;
		let o = e.globalAlpha;
		e.globalAlpha = f - f * c,
		(e.globalAlpha < 0 || e.globalAlpha > f) && (e.globalAlpha = 0),
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		e.fillStyle = "#aa2f2f",
		e.fill(),
		e.closePath(),
		e.globalAlpha = o
	}
	renderIsBurningEffect(e, t, a, r) {
		if (!this.isBurning)
			return;
		const c = (1500 - this.isBurningTime) / this.isBurningTime;
		let f = e.globalAlpha;
		e.globalAlpha = .7 - .7 * c,
		(e.globalAlpha < 0 || e.globalAlpha > .7) && (e.globalAlpha = 0),
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		e.fillStyle = "rgb(247, 131, 6)",
		e.fill(),
		e.closePath(),
		e.globalAlpha = f
	}
	renderNetworkControlEffect(e, t, a, r) {
		if (this.networkControlTime >= 1e3)
			return;
		const c = .3 - .3 * Math.cos((1e3 - this.networkControlTime) / 260 * Math.PI);
		e.beginPath(),
		e.arc(a, r, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		!function(e) {
			const t = e.match(/\d+/g).map(Number)
			  , [a,r,c] = t;
			return (.299 * a + .587 * r + .114 * c) / 255 < .5
		}(this.getColor()) ? e.fillStyle = `rgba(33, 12, 68, ${c})` : e.fillStyle = `rgba(222, 243, 187, ${c})`,
		e.fill(),
		e.closePath()
	}
	renderAccessory(e, t, a, r, delta) {
		if (void 0 === this.hatName && void 0 === this.bodyName)
			return;
		this.bodyName && this.bodyName !== this.storedBodyName && (this.bodyImage = $31e8cfefa331e399$export$93e5c64e4cc246c8("cosmetics/" + this.bodyName),
		this.storedBodyName = this.bodyName),
		this.hatName && this.hatName !== this.storedHatName && (this.hatImage = $31e8cfefa331e399$export$93e5c64e4cc246c8("cosmetics/" + this.hatName),
		this.storedHatName = this.hatName);
		this.gemName && this.gemName !== this.storedGemName && (this.gemImage = $31e8cfefa331e399$export$93e5c64e4cc246c8("cosmetics/" + this.gemName.toString() + "-gem"),
		this.storedGemName = this.gemName);
		const c = () => this.bodyImage.draw(e, delta, a - t.toScale(5 * this.radius / 3), r - t.toScale(5 * this.radius / 3), t.toScale(10 * this.radius / 3), t.toScale(10 * this.radius / 3))
		  , f = () => this.hatImage.draw(e, delta, a - t.toScale(5 * this.radius / 3), r - t.toScale(5 * this.radius / 3), t.toScale(10 * this.radius / 3), t.toScale(10 * this.radius / 3))
		  , o = () => {
			if (!this.hatName || !this.hatName.endsWith("-crown"))
				return;
			const c = [1e4, 7500, 5e3, 3500, 2500, 2e3, 1500, 1e3, 750, 500, 250, 100, 50];
			(c => {
				null !== c && (null === this.gemImage && (this.gemImage = $31e8cfefa331e399$export$93e5c64e4cc246c8("accessories/" + c.toString() + "-gem")),
				this.gemImage.draw(e, delta, a - t.toScale(5 * this.radius / 3), r - t.toScale(5 * this.radius / 3), t.toScale(10 * this.radius / 3), t.toScale(10 * this.radius / 3)))
			}
			)((e => {
				if (this.gemName)
					return c.includes(parseInt(this.gemName)) ? this.gemName : null;
				if (e < c[c.length - 1])
					return null;
				for (const t of c)
					if (e >= t)
						return t
			}
			)(this.winCount))
		}
		;
		if (this.isDowned() && this.rescueable) {
			let t = e.globalAlpha;
			e.globalAlpha = .4,
			!this.bodyName || this.bodyName.endsWith("-coat") || $9bc26d320fe964d6$var$bodyAccessoriesDrawnAboveHats.includes(this.bodyName) || c(),
			this.hatName && f(),
			o(),
			this.bodyName && $9bc26d320fe964d6$var$bodyAccessoriesDrawnAboveHats.includes(this.bodyName) && c(),
			e.globalAlpha = t
		} else
			this.bodyName && !this.bodyName.endsWith("-coat") && c(),
			this.hatName && f(),
			o(),
			this.bodyName && $9bc26d320fe964d6$var$bodyAccessoriesDrawnAboveHats.includes(this.bodyName) && c()
	}
	isDowned() {
		return -1 !== this.deathTimer
	}
	getColor() {
		let e = this.color;
		const t = this.isDowned() && !this.rescueable;
		if (this.isDowned() && !t) {
			const t = this.hexToRgb(e);
			e = `rgba(${t.r}, ${t.g}, ${t.b}, 0.4)`
		} else if (this.nightActivated) {
			const t = this.hexToRgb(e);
			e = `rgba(${t.r}, ${t.g}, ${t.b}, 0.6)`
		} else if (this.grassFadeTime < 1e3) {
			e = `rgba(117, 235, 38, ${.4 + .6 * (1 - this.grassFadeTime / 1e3)})`
		} else if (this.fadeOutTime < 500) {
			e = `rgba(145, 187, 255, ${.4 - .4 * (1 - this.fadeOutTime / 500)})`
		} else if (this.parryActivated)
			e = "rgba(228, 0, 0, 1)";
		else if (this.slashBreak > 0) {
			const t = this.hexToRgb(e)
			  , a = Math.min(300, this.slashBreak) / 300;
			e = `rgba(${Math.round(t.r + (228 - t.r) * a)}, ${Math.round(t.g + (0 - t.g) * a)}, ${Math.round(t.b + (0 - t.b) * a)}, 1)`
		} else
			this.isStone ? e = "rgba(145, 142, 133, 1)" : this.fusionActivated ? e = "rgba(60, 60, 75, 1)" : this.sugarRushActivated ? e = "rgba(230, 103, 164, 1)" : this.isObscured ? e = "rgba(0, 8, 96, 1)" : this.isEmber ? e = "rgba(255, 134, 87, 1)" : this.isEmberInvulnerable && !this.isEmber ? e = "rgba(87, 36, 16, 1)" : this.isWormhole ? e = "rgba(204, 194, 0, 1)" : this.crumbledInvulnerability && this.crumbledTimeLeft > 300 ? e = "rgba(125, 100, 46, 1)" : this.crumbledInvulnerability ? e = "rgba(135, 109, 54, 1)" : this.hasRadioactiveGloop ? e = "rgba(122, 255, 122, 1)" : 1 === this.roboScannerId ? e = "rgba(255, 0, 0, 1)" : 2 === this.roboScannerId ? e = "rgba(0, 0, 255, 1)" : 3 === this.roboScannerId ? e = "rgba(120, 20, 140, 1)" : 4 === this.roboScannerId ? e = "rgba(123, 157, 178, 1)" : 5 === this.roboScannerId ? e = "rgba(100, 193, 185, 1)" : 6 === this.roboScannerId ? e = "rgba(33, 161, 165, 1)" : 7 === this.roboScannerId ? e = "rgba(168, 124, 134, 1)" : 8 === this.roboScannerId ? e = "rgba(77, 1, 99, 1)" : 9 === this.roboScannerId ? e = "rgba(0, 199, 0, 1)" : 10 === this.roboScannerId ? e = "rgba(189, 103, 210, 1)" : 11 === this.roboScannerId ? e = "rgba(100, 35, 116, 1)" : 12 === this.roboScannerId ? e = "rgba(247, 131, 6, 1)" : 13 === this.roboScannerId ? e = "rgba(108, 84, 30, 1)" : 14 === this.roboScannerId ? e = "rgba(201, 0, 0, 1)" : 15 === this.roboScannerId ? e = "rgba(41, 255, 198, 1)" : 16 === this.roboScannerId ? e = "rgba(160, 83, 83, 1)" : 17 === this.roboScannerId ? e = "rgba(131, 0, 255, 1)" : 18 === this.roboScannerId ? e = "rgba(255, 144, 0, 1)" : 19 === this.roboScannerId ? e = "rgba(0, 204, 142, 1)" : 20 === this.roboScannerId ? e = "rgba(211, 19, 79, 1)" : 21 === this.roboScannerId ? e = "rgba(78, 39, 0, 1)" : 22 === this.roboScannerId ? e = "rgba(97, 255, 97, 1)" : 23 === this.roboScannerId ? e = "rgba(140, 1, 183, 1)" : 24 === this.roboScannerId ? e = "rgba(255, 56, 82, 1)" : 25 === this.roboScannerId ? e = "rgba(164, 150, 255, 1)" : 26 === this.roboScannerId ? e = "rgba(157, 227, 198, 1)" : 27 === this.roboScannerId ? e = "rgba(160, 83, 114, 1)" : 28 === this.roboScannerId ? e = "rgba(120, 136, 152, 1)" : 29 === this.roboScannerId ? e = "rgba(45, 50, 55, 1)" : 30 === this.roboScannerId ? e = "rgba(177, 156, 217, 1)" : 31 === this.roboScannerId ? e = "rgba(191, 82, 19, 1)" : 32 === this.roboScannerId ? e = "rgba(10, 85, 87, 1)" : 33 === this.roboScannerId ? e = "rgba(145, 77, 131, 1)" : 34 === this.roboScannerId ? e = "rgba(232, 229, 132, 1)" : 35 === this.roboScannerId ? e = "rgba(126, 124, 214, 1)" : 38 === this.roboScannerId ? e = "rgba(222, 222, 222, 1)" : 39 === this.roboScannerId ? e = "rgba(207, 85, 4, 1)" : 40 === this.roboScannerId ? e = "rgba(117, 235, 38, 0.4)" : 41 === this.roboScannerId ? e = "rgba(189, 148, 118, 1)" : 42 === this.roboScannerId ? e = "rgba(48, 37, 25, 1)" : 43 === this.roboScannerId ? e = "rgba(135, 113, 242, 1)" : 44 === this.roboScannerId && (e = "rgba(145, 187, 255, 0.4)");
		for (const t of this.getEffectConfigs())
			if (null !== t.fillColor && t.internal) {
				e = t.fillColor;
				break
			}
		return e
	}
	makeConfetti() {
		for (let e = 0; e < this.randomIntRange(50, 150); e++)
			this.addConfetti()
	}
	addConfetti() {
		const e = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#cc7d60", "#b45c5c", "#397991"]
		  , t = e[this.randomIntRange(0, e.length - 1)]
		  , a = this.randomRange(this.x - 10, this.x + 10)
		  , r = this.randomRange(this.y - 50, this.y);
		this.confetti.push({
			x: a,
			y: r,
			size: this.randomIntRange(2, 8),
			color: t,
			initialY: r,
			vx: this.randomRange(-2.5, 2.5),
			vy: this.randomRange(-5, -.8)
		})
	}
	animateConfetti(delta) {
		for (let e = 0; e < this.confetti.length; e++) {
			const t = this.confetti[e];
			t.x += t.vx,
			t.y += t.vy,
			t.vx += this.randomRange(-.1, .1),
			t.vy += 10.5 * delta,
			t.y >= t.initialY + 100 && this.confetti.splice(e, 1)
		}
	}
	drawConfetti(e, t) {
		for (let a = 0; a < this.confetti.length; a++)
			this.drawConfettiPiece(e, t, this.confetti[a])
	}
	drawConfettiPiece(e, t, a) {
		const r = t.getX(a.x)
		  , c = t.getY(a.y);
		e.fillStyle = a.color,
		e.fillRect(r, c, t.toScale(a.size), t.toScale(a.size))
	}
	makeSparks() {
		for (let e = 0; e < 6; e++)
			this.addSparks()
	}
	addSparks() {
		const e = ["#ffc000", "#ffc000", "#ffc000", "#ff6f00", "#ff6f00", "#ff1500"]
		  , t = e[this.randomIntRange(0, e.length - 1)]
		  , a = this.x
		  , r = this.y;
		let c, f;
		Math.random() > .5 ? Math.random() > .5 ? (c = 4,
		f = this.randomRange(-4, 4)) : (c = this.randomRange(-4, 4),
		f = 4) : Math.random() <= .5 ? (c = -4,
		f = this.randomRange(-4, 4)) : (c = this.randomRange(-4, 4),
		f = -4),
		this.sparks.push({
			x: a,
			y: r,
			size: 12,
			color: t,
			initialX: a,
			initialY: r,
			vx: c,
			vy: f
		})
	}
	animateSparks() {
		for (let e = 0; e < this.sparks.length; e++) {
			const t = this.sparks[e];
			t.x += t.vx,
			t.y += t.vy,
			(t.y >= t.initialY + this.randomRange(20, 80) || t.y <= t.initialY - this.randomRange(20, 80) || t.x >= t.initialX + this.randomRange(20, 80) || t.x <= t.initialX - this.randomRange(20, 80)) && this.sparks.splice(e, 1)
		}
	}
	drawSparks(e, t) {
		for (let a = 0; a < this.sparks.length; a++)
			this.drawSparksPiece(e, t, this.sparks[a])
	}
	drawSparksPiece(e, t, a) {
		const r = t.getX(a.x)
		  , c = t.getY(a.y);
		e.fillStyle = a.color,
		e.beginPath(),
		e.arc(r + t.toScale(a.size / 2), c + t.toScale(a.size / 2), t.toScale(a.size / 2), 0, 2 * Math.PI),
		e.fill()
	}
	randomIntRange(e, t) {
		return Math.floor(Math.random() * (t - e + 1)) + e
	}
	randomRange(e, t) {
		return Math.random() * (t - e + Number.EPSILON) + e
	}
	updateDashTrailEffect(e, t) {
		this.dashes;
		let a = 0;
		for (; a < this.dashTrails.length; ) {
			const r = this.dashTrails[a];
			if (r.lifetime -= $01bb7fd9b3660a1e$export$1160fe6eff25cf5,
			r.lifetime <= 0) {
				this.dashTrails.splice(a, 1);
				continue
			}
			const c = t.getX(r.x)
			  , f = t.getY(r.y);
			let o = e.globalAlpha;
			e.globalAlpha = .15 + .15 * r.lifetime / 30,
			e.beginPath(),
			e.arc(c, f, t.toScale(r.radius), 0, 2 * Math.PI, !1),
			e.fillStyle = r.color,
			e.fill(),
			e.closePath(),
			e.globalAlpha = o,
			a += 1
		}
		this.dashes > 0 && this.dashTrails.push({
			x: this.x,
			y: this.y,
			radius: this.radius,
			color: this.color,
			lifetime: 150
		})
	}
	shouldDrawEnergyBar() {
		const e = settings.displayEnergyBars;
		return e < 1 || 1 == e && this.isLocalPlayer || 2 == e && !this.isLocalPlayer
	}
}
let $9bc26d320fe964d6$var$totalConfettiRendered = 0;
const $9bc26d320fe964d6$var$MaxConfettiRendered = 500;
//Entity
function clamp(a,r,t){return Math.min(t,Math.max(r,a))}
function rectCircleCollision(cx, cy, cr, x, y, width, height) {
  var tx = clamp(cx,x,x+width);
  var ty = clamp(cy,y,y+height);
  var dx=(cx-tx);
  var dy=(cy-ty);
  const dist=Math.sqrt(dx**2+dy**2);
  var e={};
  var isZeroRadius=cr==0;
  e.c=isZeroRadius?(dist <= cr):(dist<cr);
  e.ax=Math.abs(dx);
  e.ay=Math.abs(dy);
  e.x=dx;
  e.y=dy;
  return e;
};
class SimulatorEntity extends EvadesEntity{
  NotImplemented(){
    this.name = capitaliseName(this.type);
    throw "Not Implemented.";
  }
  constructor(x,y,color,radius,type,speed=0,angle) {
	  super();
    this.color = color;
    this.ID = Math.random();
	  this.effects=[];
	  this.collided=false;
	  this.rectCircleCollide=false;
    this.type=type;
	  this.lightRectangle=null;
	  this.outline=false;
    this.speed=speed;
    this.angle=angle!=undefined?(angle*Math.PI/180):(Math.random()*Math.PI*2);
    this.target_angle=this.angle;
    this.velX=Math.cos(this.angle)*this.speed;
    this.velY=Math.sin(this.angle)*this.speed;
    this.x=x;
	  //this.id=Math.random();
    this.y=y;
    this.health=0;
    this.maxHealth=0;
    this.shatterTime=0;
	  this.harmlessTime=0;
    this.reduced=false;
    this.gainedImmunity=false;
    this.mortarTime=0;
    this.isHarmless=false;
    this.corrosive=false;
    this.burning=false;
    this.healingTime=0;
    this.inFear=false;
    this.decayed=false;
    this.isBarrier=false;
    this.isRepelling=false;
    this.isDestroyed=false;
    this.lightRadius=null;
	  this.frozen=false;
    this.radius=radius;
	  this.energy=30;
    Object.defineProperties(this,{frozenTime:{get(){
      let u = this.MultiplierEffects.filter(e=>e.type=="freeze")[0];
      if(!u)return 0;
      if(u.time<0)return u.duration;
      return 0;
    }},frozenTimeLeft:{get(){
      let u = this.MultiplierEffects.filter(e=>e.type=="freeze")[0];
      if(!u)return 0;
      if(u.time<0)return -u.time*1e3;
      return 0;
    }}});
	  this.maxEnergy=this.energy;
    this.energyRegen=0;
    this.ogradius=this.radius;
    this.radiusMultiplier=1;
    this.MultiplierEffects=[];
    this.speedMultiplier=1;
  }
  damage(damage){}
  freeze(duration){
	  if(!this.movement_immune){
	    this.speedMultiplier*=0;
	    if(this.MultiplierEffects.some(e=>e.type=="freeze")){
	      const frozenFX=this.MultiplierEffects.filter(e=>e.type=="freeze")[0];
	      frozenFX.speedMult=0;
	      frozenFX.time=-duration/1e3;
	    }else{
	      this.MultiplierEffects.push({type:"freeze",duration,speedMult:0,time:-duration/1e3})
	    }
	  }
  }
  calculateTime(){
    this.MultiplierEffects.map(e=>{
      let α = Math.pow(40,0.3) * Math.pow(5,2/3) * Math.pow(680,1/60);
      let identityScale = Math.log(1-(10-α)/α*200/3) / Math.log(0.425);
      e.originalStat = identityScale
      e.speedTimeLeft = e.originalStat-Math.log(1-(10-α)/α*200/3*e.speedMult)/Math.log(0.425);
      e.radiusTimeLeft = e.originalStat-Math.log(1-(10-α)/α*200/3*e.radiusMult)/Math.log(0.425);
    })
  }
  anglevel(){
    this.velX=Math.cos(this.angle)*this.speed;
    this.velY=Math.sin(this.angle)*this.speed;
  }
  playerInteraction(player,delta){
  }
  auraEffect(player,delta){
	  for(let effect of this.effects){
      if(player.godmode == 2 && effect.effectType != getEffectIndex("Enemy Boss"))continue;
	  	if(Math.sqrt((this.x-player.x)**2+(this.y-player.y)**2)<effect.radius+player.radius){
	  		if(effect.effectType==getEffectIndex("Enemy Boss"))
	  			if(!player.isStone)this.losing_health=true;
	  		if(effect.effectType==getEffectIndex("Enemy Slowing"))
	  			player.slowing=[true,this.slow];
	  		if(effect.effectType==getEffectIndex("Enemy Draining"))
	  			player.draining=[true,this.drain];
	  		if(effect.effectType==getEffectIndex("Enemy Gravity"))
	  			if (!player.isInvulnerable) {
	  				var dx = player.x - this.x;
	  				var dy = player.y - this.y;
	  				var dist = Math.hypot(dy,dx);
	  				var attractionAmplitude = Math.pow(2,-dist/100);
	  				var moveDist = this.gravity*attractionAmplitude;
	  				var angleToPlayer = Math.atan2(dy, dx);
	  				player.x-=moveDist*Math.cos(angleToPlayer)*delta/1000;
	  				player.y-=moveDist*Math.sin(angleToPlayer)*delta/1000;
	  				player.collision(0);
	  			};
	  		if(effect.effectType==getEffectIndex("Enemy Repelling"))
	  			if (!player.isInvulnerable) {
	  				var dx = player.x - this.x;
	  				var dy = player.y - this.y;
	  				var dist = Math.hypot(dy,dx);
	  				var attractionAmplitude = Math.pow(2,-dist/100);
	  				var moveDist = this.repulsion*attractionAmplitude;
	  				var angleToPlayer = Math.atan2(dy, dx);
	  				player.x+=moveDist*Math.cos(angleToPlayer)*delta/1000;
	  				player.y+=moveDist*Math.sin(angleToPlayer)*delta/1000;
	  				player.collision(0);
	  			};
	  		if(effect.effectType==getEffectIndex("Enemy Freezing"))
	  			player.freezing=true;
	  		if(effect.effectType==getEffectIndex("Enemy Slippery"))
	  			player.slippery=true;
	  		if(effect.effectType==getEffectIndex("Enemy Disabling"))
	  			player.disabling=true;
	  		if(effect.effectType==getEffectIndex("Enemy Experience Drain"))
	  			player.experienceDraining=true;
	  		if(effect.effectType==getEffectIndex("Enemy Enlarging"))
	  			player.enlarging=true;
	  		if(effect.effectType==getEffectIndex("Enemy Toxic"))
	  			player.toxic=true;
	  		if(effect.effectType==getEffectIndex("Enemy Magnetic Reduction"))
	  			player.magneticReduction=true;
	  		if(effect.effectType==getEffectIndex("Enemy Magnetic Nullification"))
	  			player.magneticNullification=true;
	  		if(effect.effectType==getEffectIndex("Enemy Lava"))
	  			player.lava=true;
	  		if(effect.effectType==getEffectIndex("Enemy Cybot")&&!(player.effectImmune==0||player.admin)){
	  			if(this.health>=this.maxHealth*0.98)player.cybotEffect=1;
	  			else if(this.health>=this.maxHealth*0.3)player.cybotEffect=2;
	  			else player.cybotEffect=3;
	  		}
	  		if(effect.effectType==getEffectIndex("Enemy Cybot Shield"))
	  			void null;
	  		if(effect.effectType==getEffectIndex("Enemy Quicksand"))
	  			if(!player.isInvulnerable)
	  				player.quicksand=[true,this.quicksand_strength];
	  		if(effect.effectType==getEffectIndex("Enemy Radar"))
	  			void null;
	  		if(effect.effectType==getEffectIndex("Enemy Barrier"))
	  			player.inEnemyBarrier=true;
	  		if(effect.effectType==getEffectIndex("Enemy Reducing"))
	  			player.reducing=true;
	  		if(effect.effectType==getEffectIndex("Enemy Blocking"))
	  			player.blocking=true;
	  		if(effect.effectType==getEffectIndex("Enemy Flaming"))
	  			void null;
	  		if(effect.effectType==getEffectIndex("Enemy Disarming"))
	  			void null;
	  		
	  	}
	  }
  }
  velangle(){
	if(this.velY==0&&this.velX==0)return this.angle;
    this.angle=Math.atan2(this.velY,this.velX);
  }
  update(delta,area,players,collide=true){
	  if(this.healingTime>0)this.healingTime-=delta;
    let maxE = Math.max(this.energy,this.maxEnergy);
    this.energy+=this.energyRegen*delta/1e3;
    if(this.energy < 0)this.energy=0;
    if(this.energy > maxE)this.energy=maxE;
    if(this.mortarTime > 0 && !this.movement_immune)this.speedMultiplier=0;
    if(this.mortarTime > 0)this.mortarTime-=delta;
    this.calculateTime();
		this.effects.map(t=>{
			var type=t.effectType;
		  if(type>=getEffectIndex("Enemy Slowing")&&type<=getEffectIndex("Enemy Disarming")){
		  	t.ogradius??=t.radius;
		  	t.radius=t.ogradius*(this.energy/this.maxEnergy);
		  }
		});
	  this.MultiplierEffects.map(e=>{
		  if(e.time>=0){
		  	if(e.speedMult!=void 0)e.speedMult=(e.speedMult+0.015)*Math.pow(0.425,delta/1e3);
		  	if(e.radiusMult!=void 0)e.radiusMult=(e.radiusMult+0.015)*Math.pow(0.425,delta/1e3);
		  };
		  this.effects.map(t=>{
		  	var type=t.effectType;
		  	if(type>=getEffectIndex("Enemy Slowing")&&type<=getEffectIndex("Enemy Disarming")){
		  		t.ogradius??=t.radius;
		  		t.radius=t.ogradius*(e.auraMult??1);
		  		if(e.radiusMult>1)t.radius=t.ogradius;
		  	}
		  })
		  e.time+=delta/1e3;
		  if(e.speedMult>1)e.speedMult=1;
		  if(e.radiusMult>1)e.radiusMult=1;
		  (e.speedMult!=void 0)&&(this.speedMultiplier*=e.speedMult);
		  (e.radiusMult!=void 0)&&(this.radiusMultiplier*=e.radiusMult);
	  });
	  this.MultiplierEffects=this.MultiplierEffects.filter(e=>{
	  	return e.speedMult < 1 || e.radiusMult < 1;
	  });
	  this.radius=this.ogradius*this.radiusMultiplier;if(void 0 !== this.visualRadius)this.visualRadius*=this.radiusMultiplier;
	  this.radiusMultiplier=1;
    this.x+=this.velX*this.speedMultiplier*delta/1e3;
    this.y+=this.velY*this.speedMultiplier*delta/1e3;
    this.speedMultiplier=1;
    this.collision(delta,players,collide);
  }
  collision(delta,players,collide=true){
	  if(this.harmlessTime>0)this.harmlessTime-=delta;
	  if(this.fading)this.fadeInTime-=delta;
	  if(this.harmlessTime<=0&&!this.disabled)this.isHarmless=this.switchedHarmless||(this.healingTime>0);
	  if(collide){
	    this.collided=false;
	  	this.assetCollision();
	  	if(this.collided)this.onCollide();
	  }
    for(let player of players){
      if(!player.safeZone&&player.deathTimer==-1)
        this.auraEffect(player,delta);
      if(this.rectCircleCollide){
        if((!this.isEnemy || !player.godmode) && rectCircleCollision(player.x,player.y,player.radius,this.x,this.y,this.width,this.height).c)
    		  this.playerInteraction(player,delta);
	    }else{
	      if((!this.isEnemy || !player.godmode) && Math.sqrt((this.x-player.x)**2+(this.y-player.y)**2)<(this.radius+player.radius))
		      this.playerInteraction(player,delta);
  	  }
    }
  }
  onCollide(){
    
  }
  onBeforeCollide(){
  }
  assetCollision(){
    let collided=false;
    const walls=map.areas[this.area].entities.filter(e=>(e instanceof Wall && (e.collisionIndex==this.z||e.collisionIndex==-1)));
    let centerX,centerY,halfWidth,halfHeight;
    for(var i of walls){
      let x=this.x,y=this.y;
	    halfWidth=i.width/2;
      halfHeight=i.height/2;
      centerX=i.x+halfWidth;
      centerY=i.y+halfHeight;
		  var rx=x-centerX;
		  var ry=y-centerY;
		  var d=Math.sqrt(rx**2+ry**2);
		  var a=Math.atan2(ry,rx)-i.rotation*Math.PI/180;
		  this.angle-=i.rotation*Math.PI/180;
		  x=parseFloat((centerX+Math.cos(a)*d).toFixed(10));
		  y=parseFloat((centerY+Math.sin(a)*d).toFixed(10));
      var distX = Math.abs(x - centerX);
      var distY = Math.abs(y - centerY);
      var radius=this.radius;
      var c=rectCircleCollision(x,y,radius,i.x,i.y,i.width,i.height);
      var a=Math.atan2(c.y,c.x);
      if(c.c){
		    this.onBeforeCollide();
        collided=true;
		    this.collided=true;
        var relX = (x - centerX) / halfWidth;
        var relY = (y - centerY) / halfHeight;
        if (Math.abs(relX) > Math.abs(relY)) {
          // Horizontal collision.
          if (relX > 0) {
            //corner collision at right side
            if(relY*halfHeight > halfHeight){
              x = centerX + halfWidth + this.radius*Math.cos(a);
              y = centerY + halfHeight + this.radius*Math.sin(a);
              this.angle=a;
            }else if(relY*halfHeight < -halfHeight){
              x = centerX + halfWidth + this.radius*Math.cos(a);
              y = centerY - halfHeight + this.radius*Math.sin(a);
              this.angle=a;
            }else{
              // middle right collision
              x = centerX + halfWidth + this.radius;
			        this.velX=Math.abs(this.velX);
			        this.angle=Math.atan2(this.velY,this.velX);
            }
          } else {
            //corner collision for left side
            if(relY*halfHeight > halfHeight){
              x = centerX - halfWidth + this.radius*Math.cos(a);
              y = centerY + halfHeight + this.radius*Math.sin(a);
              this.angle=a;
            }else if(relY*halfHeight < -halfHeight){
              x = centerX - halfWidth + this.radius*Math.cos(a);
              y = centerY - halfHeight + this.radius*Math.sin(a);
              this.angle=a;
            }else{
              // middle left collision
              x = centerX - halfWidth - this.radius;
			        this.velX=-Math.abs(this.velX);
			        this.angle=Math.atan2(this.velY,this.velX);
            }
          }
        } else {
          // Vertical collision
          if (relY > 0) {
            //corner collision for bottom side
            if(relX*halfWidth > halfWidth){
              x = centerX + halfWidth + this.radius*Math.cos(a);
              y = centerY + halfHeight + this.radius*Math.sin(a);
              this.angle=a;
            }else if(relX*halfWidth < -halfWidth){
              x = centerX - halfWidth + this.radius*Math.cos(a);
              y = centerY + halfHeight + this.radius*Math.sin(a);
              this.angle=a;
            }else{
              // middle bottom collision
              y = centerY + halfHeight + this.radius;
			        this.velY=Math.abs(this.velY);
			        this.angle=Math.atan2(this.velY,this.velX);
            }
          } else {
            //corner collision for top side
            if(relX*halfWidth > halfWidth){
              x = centerX + halfWidth + this.radius*Math.cos(a);
              y = centerY - halfHeight + this.radius*Math.sin(a);
              this.angle=a;
            }else if(relX*halfWidth < -halfWidth){
              x = centerX - halfWidth + this.radius*Math.cos(a);
              y = centerY - halfHeight + this.radius*Math.sin(a);
              this.angle=a;
            }else{
              // middle top collision
              y = centerY - halfHeight - this.radius;
			        this.velY=-Math.abs(this.velY);
			        this.angle=Math.atan2(this.velY,this.velX);
            }
          }
        }
		  this.angle+=i.rotation*Math.PI/180;
		  this.anglevel();
		  rx=x-centerX;
		  ry=y-centerY;
		  d=Math.sqrt(rx**2+ry**2);
		  a=Math.atan2(ry,rx)+i.rotation*Math.PI/180;
	    this.x=parseFloat((centerX+Math.cos(a)*d).toFixed(10));
	    this.y=parseFloat((centerY+Math.sin(a)*d).toFixed(10));
	  }
    }
    return collided;
    }
	getColorChange() {
		return this.color
	}
    drawShattered(e, a) {
        const t = this.x + a.x
          , r = this.y + a.y;
        function c(a, c, f) {
            e.moveTo(t + a, r + c),
            e.arc(t + a, r + c, f, 0, 2 * Math.PI, !1)
        }
        function f(a, t, r, f) {
            e.beginPath();
            for (let e = 0; e < 8; e++) {
                c(Math.cos(f) * a, Math.sin(f) * a, t),
                f += 2 * Math.PI / r
            }
            e.fill(),
            e.closePath()
        }
        function o(a, t, r) {
            e.beginPath(),
            c(a, t, r),
            e.fill(),
            e.closePath()
        }
        const n = this.radius / 4
          , $ = this.radius
          , d = 1e3
          , i = 4e3 - Math.min(this.shatterTime, 4e3)
          , s = (i - 500) / 500
          , l = (i - d) / 3e3;
        if (e.fillStyle = this.color,
        i < 250)
            o(0, 0, Math.max(n, Math.max(n, this.radius * (1 - i / 250))));
        else if (i < 500)
            o(0, 0, n);
        else if (i < d) {
            f(s * $, this.radius / 3, 3, 5 * s)
        } else {
            f($ - l * $, Math.min(this.radius, Math.max(n, this.radius * l)), 3, 5 - 3 * l)
        }
    }
    drawExploded(e, a) {
        const t = this.x + a.x
          , r = this.y + a.y
          , c = this.getColorChange();
        function f(a, c, f) {
            e.beginPath(),
            e.arc(t + a, r + c, f, 0, 2 * Math.PI, !1),
            e.fill(),
            e.closePath()
        }
        function o(e, a, t) {
            f(e, a, t / 2),
            f(e, -a, t / 2),
            f(-e, a, t / 2),
            f(-e, -a, t / 2)
        }
        e.fillStyle = c;
        let v = Math.round(this.mortarTime*60)/60;
        let x = 94e3/30 - this.mortarTime;
        let w = -(9*x**2-3300*x-20000)/4000;
        this.mortarTime > 94e3 / 30 ? 
          v % !0 ? 
            f(1, 1, this.radius) : 
          v % !0 ? 
            f(1, -1, this.radius) : 
          v % !0 ? 
            f(-1, 1, this.radius) : 
          f(-1, -1, this.radius) : 
        this.mortarTime < 94e3 / 30 && this.mortarTime > 0 && (
          this.mortarTime > 3e3 ? 
            o(w, w, this.radius) : 
            o(this.mortarTime / 3e3 * 75, this.mortarTime / 3e3 * 75, this.radius)
        )
    }
	renderEffects(ctx,a){
		const t = ctx.fillStyle;
		for (const e of this.getEffectConfigs())
			e.internal || null !== e.fillColor && (ctx.fillStyle = e.fillColor,
			ctx.beginPath(),
			this.addEffectPath(ctx, a, e),
			ctx.closePath(),
			ctx.fill());
		ctx.fillStyle = t;
	}
	render(e, t, delta) {
		(this.isHarmless || this.grassHarmless || this.hidden) && (e.globalAlpha = .4);
		let a = this.harmlessTime;
		if (this.grassHarmless && this.grassTime > 0 && (a = Math.max(this.grassTime, a)),
		settings.fadingEffects && a < 1e3 && a > 0 && (!this.grassHarmless || 0 < this.grassTime && this.grassTime < 1e3) && (e.globalAlpha = .4 + .6 * (1 - a / 1e3)),
		this.duration < 500 && (e.globalAlpha *= Math.min(1, this.duration / 500 + .2)),
		this.fading && (e.globalAlpha = 1 - this.fadeInTime / this.fadeInTimeTotal),
		this.isDestroyed && (e.globalAlpha = 0),
		this.brightness > 0 && (e.globalAlpha = Math.min(this.brightness, e.globalAlpha)),
		1e3 === this.lotusBrightness || this.hidden || (e.globalAlpha = Math.min(.4 + this.lotusBrightness / 1e3 * .6, e.globalAlpha)),
		this.starVisibility > 0 && (e.globalAlpha = Math.min((this.starVisibility + 17) / 500, e.globalAlpha)),
		this.maxHealth > 0) {
			const a = "rgb(140, 59, 59)"
			  , r = "red"
			  , c = "rgb(255, 68, 68)"
			  , f = this.health / this.maxHealth;
			e.fillStyle = a,
			e.fillRect(t.getX(this.x - 18), t.getY(this.y - this.radius - 8), t.toScale(36), t.toScale(7)),
			e.fillStyle = r,
			e.fillRect(t.getX(this.x - 18), t.getY(this.y - this.radius - 8), t.toScale(36 * f), t.toScale(7)),
			e.strokeStyle = c,
			e.strokeRect(t.getX(this.x - 18), t.getY(this.y - this.radius - 8), t.toScale(36), t.toScale(7))
		}
		if (this.name && (e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toScale(12)),
		e.textAlign = "center",
		settings.tileMode > 1 ? e.fillStyle = "white" : e.fillStyle = "black",
		e.fillText(this.name, t.getX(this.x), t.getY(this.y - this.radius - 11))),
		this.inFear ? (e.font = `bolder ${t.toScale(20)}px Arial`,
		e.fillStyle = "#d32323",
		e.strokeStyle = "#871111",
		e.lineWidth = t.toScale(1),
		e.fillText("!", t.getX(this.x), t.getY(this.y - this.radius - 5)),
		e.strokeText("!", t.getX(this.x), t.getY(this.y - this.radius - 5))) : this.provoked && (e.font = `bolder ${t.toScale(20)}px Arial`,
		e.fillStyle = "#A0A7AD",
		e.strokeStyle = "#5a5d5f",
		e.lineWidth = t.toScale(1),
		e.fillText("!", t.getX(this.x), t.getY(this.y - this.radius - 5)),
		e.strokeText("!", t.getX(this.x), t.getY(this.y - this.radius - 5))),
		this.stompedStunTime > 0 && this.drawStunned(e, t),
		this.reduced && (e.font = `bolder ${t.toScale(20)}px Arial`,
		e.fillStyle = "#1212cf",
		e.strokeStyle = "#030386",
		e.lineWidth = t.toScale(1),
		e.fillText("↓", t.getX(this.x + this.radius + 5), t.getY(this.y + 8)),
		e.strokeText("↓", t.getX(this.x + this.radius + 5), t.getY(this.y + 8))),
		this.shatterTime > 0)
			this.drawShattered(e, t);
		else if (this.mortarTime > 0)
			this.drawExploded(e, t);
		else {
			let a = this.radius;
			if (void 0 !== this.visualRadius && (a = this.visualRadius),
			e.beginPath(),
			e.arc(t.getX(this.x), t.getY(this.y), t.toScale(a), 0, 2 * Math.PI, !1),
			void 0 === this.image ? (e.fillStyle = this.getColorChange(),
			e.fill()) : this.image.draw(e, delta, t.getX(this.x - this.radius), t.getY(this.y - this.radius), t.toScale(2 * a), t.toScale(2 * a)),
			this.isRepelling && (e.fillStyle = "rgba(255, 0, 93, 0.9)",
			e.fill()),
			this.decayed && (e.fillStyle = "rgba(0, 0, 128, 0.2)",
			e.fill()),
			this.healingTime > 0 && (e.fillStyle = "rgb(0, 221, 0)",
			e.fill()),
			this.burning && (e.fillStyle = "rgba(205, 75, 27, 0.8)",
			e.fill()),
			this.petrified && (e.fillStyle = "rgba(70, 55, 92, 0.75)",
			e.fill()),
			this.frozenTimeLeft > 0) {
				const t = .7;
				let a = t - t * ((this.frozenTime - this.frozenTimeLeft) / this.frozenTime);
				(a < 0 || a > t) && (a = 0),
				e.fillStyle = `rgba(137, 231, 255, ${a})`,
				e.fill()
			}
			if (this.vengeanceFrozen) {
				const t = .7;
				let a = t - t * ((this.vengeanceTime - this.vengeanceTimeLeft) / this.vengeanceTime);
				(a < 0 || a > t) && (a = 0),
				e.fillStyle = `rgba(87, 18, 23, ${a})`,
				e.fill()
			}
			if (this.sparkTimeLeft > 0) {
				const t = .7;
				let a = t - t * ((this.sparkTime - this.sparkTimeLeft) / this.sparkTime);
				(a < 0 || a > t) && (a = 0),
				e.fillStyle = `rgba(255, 255, 0, ${a})`,
				e.fill()
			}
			if (this.lightningTimeLeft > 0) {
				const t = .7;
				let a = t - t * ((this.lightningTime - this.lightningTimeLeft) / this.lightningTime);
				(a < 0 || a > t) && (a = 0),
				e.fillStyle = `rgba(28, 255, 255, ${a})`,
				e.fill()
			}
			if (this.poisonTimeLeft > 0) {
				const t = .7;
				let a = t - t * ((this.poisonTime - this.poisonTimeLeft) / this.poisonTime);
				(a < 0 || a > t) && (a = 0),
				e.fillStyle = `rgba(83, 13, 105, ${a})`,
				e.fill()
			}
			if (this.lavaTimeLeft > 0) {
				const t = .7;
				let a = t - t * ((this.lavaTime - this.lavaTimeLeft) / this.lavaTime);
				(a < 0 || a > t) && (a = 0),
				e.fillStyle = `rgba(247, 131, 6, ${a})`,
				e.fill()
			}
			if (this.sugarRushTimeLeft > 0) {
				const t = .7;
				let a = t - t * ((this.sugarRushTime - this.sugarRushTimeLeft) / this.sugarRushTime);
				(a < 0 || a > t) && (a = 0),
				e.fillStyle = `rgba(255, 128, 189, ${a})`,
				e.fill()
			}
			if (this.gainedImmunity && (e.fillStyle = "rgb(0, 0, 0)",
			e.fill()),
			this.releaseTime <= 500) {
				const t = (500 - Math.max(this.releaseTime, 0)) / 500 * .2 + .05;
				e.fillStyle = `rgba(1, 1, 1, ${t})`,
				e.fill()
			}
			if (settings.fadingEffects && this.slashTime >= 200 && this.slashTime <= 600) {
				const t = (this.slashTime - 200) / 400
				  , a = .5 - .5 * Math.cos(t * Math.PI)
				  , r = Math.floor(54 + 66 * t)
				  , c = Math.floor(54 + 66 * t)
				  , f = Math.floor(54 + 66 * t);
				e.fillStyle = `rgba(${r}, ${c}, ${f}, ${a})`,
				e.fill()
			}
			if (this.slashing && (e.fillStyle = "rgb(190, 190, 190)",
			e.fill()),
			settings.fadingEffects && this.switchTime <= 1500) {
				const t = .3 - .3 * Math.cos((1500 - this.switchTime) / 220 * Math.PI);
				this.switchedHarmless ? e.fillStyle = `rgba(25, 25, 25, ${t})` : e.fillStyle = `rgba(127, 127, 127, ${.85 * t})`,
				e.fill()
			}
			if (settings.enemyOutlines && !this.hidden) {
				e.lineWidth = t.toScale(2);
				const a = (this.lotusBrightness ?? 1e3) / 1e3;
				settings.tileMode > 1 ? e.strokeStyle = `rgba(255, 255, 255, ${a})` : e.strokeStyle = `rgba(0, 0, 0, ${a})`,
				e.stroke(),
				e.lineWidth = t.toScale(1)
			}
			e.closePath()
		}
		e.globalAlpha = 1
	}
}
//UTILS
function modulus(x,y){
  return (x%y+y)%y
}
function speedparts(direction,speed){
  direction--;
  var x=Math.cos(direction*Math.PI/2)*speed;
  var y=Math.sin(direction*Math.PI/2)*speed;
  if(Math.abs(x)<1e-10)x=0;
  if(Math.abs(y)<1e-10)y=0;
  return {x,y}
}
//BASE ENEMY
class Enemy extends SimulatorEntity{constructor(x,y,radius,speed,angle,type){super(x,y,getEntityColor(type),radius,type,speed,angle);this.isEnemy=true;this.outline=true;this.timer_reduction=1}playerInteraction(player,delta){EnemyPlayerInteraction(player,this,this.corrosive,this.isHarmless,this.immune)}update(delta,area,players,collide){super.update(delta,area,players,collide)}};

function distance(a,b){
  return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2)
}
function EnemyPlayerInteraction(player,enemy,corrosive,harmless,immune,ignores_safe_zone=true){
	var dead=true;
	if(harmless===undefined){
		harmless=enemy.isHarmless;
	}
	var heal;
	if(enemy.healingTime>0){
		heal=true;
	}
  let isInBarrier = player.inBarrier||player.inEnemyBarrier||player.inPlayerBarrier;
	if(ignores_safe_zone||!player.safeZone){
		if(player.nightActivated&&!immune&&!enemy.isHarmless){
			player.nightActivated=false;
			player.nightDuration=0;
			player.speedAdditioner=0;
			enemy.isHarmless=true;
			enemy.harmlessTime=2000;
			harmless=true;
		}
		if(enemy.texture=="entities/pumpkin_off"||(isInBarrier&&!corrosive)||enemy.radius==0||harmless||enemy.shatterTime>0||player.godmode||player.admin){
			dead=false;
		}
		if(dead&&!corrosive){
			if(player.isBandaged){
				player.isBandaged=false;
				player.isUnbandaging=true;
				player.isInvulnerable=true;
				setTimeout(()=>{player.isUnbandaging=player.isInvulnerable=false},900)
			}
		}
		if((player.isInvulnerable&&!corrosive)||harmless||enemy.radius<1){
			dead=false;
		}
		if(player.isDowned()&&heal&&!dead)
			player.deathTimer=-1,
      player.wasDowned=false;
		if(player.deathTimer==-1&&dead&&!heal){
			player.wasDowned=true;
      if(enemy.infectious)
        player.isInfected = true;
			death(player);
		}
	}
}
function death(player){
    if(player.godmode)return;
    function checkAreaProperties(e){
        var s=map.areas[player.area].properties[e] ?? (map.properties[e] ?? defaultValues.properties[e]);
        return s;
    }
    const death_timer_multiplier=1-player.deathTimerTotalMultiplier;
    let death_timer=60000;
    if(player.area<1)
        death_timer=10000;
    else if(player.area<3)
        death_timer=15000;
    else if(player.area<6)
        death_timer=20000;
    else if(player.area<8)
        death_timer=25000;
    else if(player.area<10)
        death_timer=30000;
    if(checkAreaProperties("death_timer")!=void 0)
        death_timer=checkAreaProperties("death_timer");
    player.deathTimer=player.deathTimerTotal=death_timer*death_timer_multiplier*((player.health/player.maxHealth)||1);
    player.effects.length=0;
    player.firstAbility=false;
    player.secondAbility=false;
    player.thirdAbility=false;
    player.firstAbilityActivated=false;
    player.secondAbilityActivated=false;
    player.thirdAbilityActivated=false;
    player.harden=false;
	let resurrectionAbility=player.abilityOne?.abilityType==getAbilityIndex("Resurrection")?player.abilityOne:player.abilityTwo?.abilityType==getAbilityIndex("Resurrection")?player.abilityTwo:player.abilityThree?.abilityType==getAbilityIndex("Resurrection")&&player.abilityThree;
	if(!player.isInfected&&player.heroType==4&&resurrectionAbility&&resurrectionAbility.cooldown==0&&!(resurrectionAbility.locked||resurrectionAbility.disabled))map.areas[player.area].entities.push(new ParticleGenerator(player.x,player.y,"Resurrection Downed",-1,player));
}
//PELLETS

class Oscillator {
	constructor(value, min, max, increment, increasing) {
		this.value = value,
		this.min = min,
		this.max = max,
		this.increment = increment,
		this.increasing = increasing
	}
	update(delta) { // possibly infinite FPS
    this.value -= this.increment * delta / 1e3 * Math.pow(-1, this.increasing);
    while(this.value > this.max || this.value < this.min){
      if(this.value >= this.max)
        this.value = this.max * 2 - this.value,
        this.increasing = false;
  	  if(this.value <= this.min)
        this.value = this.min * 2 - this.value,
        this.increasing = true;
    }
	}
}
class ParticleGenerator extends SimulatorEntity {
	constructor(x,y,particleType,duration,owner) {
		super(x,y,null,null,"particle_generator"),
		this.particles = [];
		this.owner = owner;
		this.particleStyle=particleType;
		this.duration=duration;
		this.createdParticles = !1
		this.afterStateUpdate();
	}
	stateFields() {
		return ["x", "y", "particleStyle", "duration"]
	}
	playerInteraction(){} // Harmless entity that produces particles
	update(delta,area,players){
		this.x=this.owner.x;
		this.y=this.owner.y;
		if(this.owner.remove)this.remove=true;
		if(this.duration != -1){
			this.duration-=delta;
			if(this.duration<0)this.remove=true;
		}
	}
	afterStateUpdate() {
		super.afterStateUpdate(),
		setDefaultsFor(this, this.stateFields(), "particle_generator"),
		settings.abilityParticles && !this.createdParticles && this.createParticles()
	}
	render(e, t, delta) {
		switch (this.particleStyle) {
		case "Supernova":
			this.animateSupernovaStars(delta),
			this.drawSupernovaStars(e, t);
			break;
		case "Shift":
			this.animateShiftParticles(delta),
			this.drawCircleParticles(e, t);
			break;
		case "Wildfire":
			this.animateWildfireParticles(delta),
			this.drawCircleParticles(e, t);
			break;
		case "Resurrection Pellet":
			this.animateResurrectionParticles(delta),
			this.drawSparkleParticles(e, t);
			break;
		case "Resurrection Downed":
			this.animateResurrectionDownedParticles(delta),
			this.drawSparkleParticles(e, t);
		case "None":
		}
	}
	createParticles() {
		switch (this.createdParticles = !0,
		this.particleStyle) {
		case "Supernova":
			this.createSupernovaStars();
			break;
		case "Shift":
			this.createShiftParticles();
			break;
		case "Wildfire":
			this.createWildfireParticles();
			break;
		case "Resurrection Pellet":
			this.createResurrectionParticles(9, 112);
			break;
		case "Resurrection Downed":
			this.createResurrectionParticles(9, ( () => this.randomIntRange(80, 175)));
		case "None":
		}
	}
	createSupernovaStars() {
		for (let e = 0; e < 45; e++) {
			const e = ["#a07fffaa", "#9670ffaa", "#8b5dffaa", "#8053ffaa", "#7049ffaa", "#5f40ffaa"]
			  , t = ["#ffc000aa", "#ffecb0aa", "#ffffffaa"]
			  , a = Math.random() < .35
			  , r = a ? t[this.randomIntRange(0, t.length - 1)] : e[this.randomIntRange(0, e.length - 1)];
			let c, o;
			a ? (c = this.randomRange(-2, 2),
			o = this.randomRange(-2, 2)) : (c = this.randomRange(-8, 8),
			o = this.randomRange(-8, 8)),
			this.particles.push({
				x: this.x,
				y: this.y,
				size: 12,
				color: r,
				vx: c,
				vy: o,
				isSlow: a
			})
		}
	}
	animateSupernovaStars(delta) {
		let e = 0;
		for (; e < this.particles.length; ) {
			const t = this.particles[e];
			t.x += t.vx,
			t.y += t.vy,
			t.vx *= .96,
			t.vy *= .96;
			const a = t.isSlow ? this.randomRange(20, 300) : this.randomRange(20, 600);
			t.y >= this.y + a || t.y <= this.y - a || t.x >= this.x + a || t.x <= this.x - a || Math.abs(t.vx) < .1 && Math.abs(t.vy) < .1 ? this.particles.splice(e, 1) : e += 1
		}
	}
	drawSupernovaStars(e, t) {
		for (let a = 0; a < this.particles.length; a++) {
			const r = this.particles[a]
			  , c = t.getX(r.x)
			  , f = t.getY(r.y)
			  , o = t.toScale(r.size / 2)
			  , n = 5
			  , $ = o
			  , d = o / 2.5;
			e.fillStyle = r.color,
			e.beginPath();
			for (let t = 0; t < 2 * n; t++) {
				const a = t * Math.PI / n
				  , r = t % 2 == 0 ? $ : d
				  , o = c + r * Math.cos(a)
				  , i = f + r * Math.sin(a);
				e.lineTo(o, i)
			}
			e.closePath(),
			e.globalAlpha = Math.min(1, .5 + Math.min(Math.abs(r.vx / 10), Math.abs(r.vy / 10))),
			e.fill(),
			e.globalAlpha = 1
		}
	}
	animateShiftParticles(delta) {
		let e = 0;
		for (; e < this.particles.length; ) {
			const t = this.particles[e];
			t.lifespan += delta;
			const a = 3;
			t.x += t.vx + (Math.random() * a - a / 2),
			t.y += t.vy + (Math.random() * a - a / 2);
			if (Math.sqrt((t.x - this.x) ** 2 + (t.y - this.y) ** 2) < 1) {
				this.particles.splice(e, 1);
				continue
			}
			const r = .75 * Math.max(0, Math.min(1, (1e3 - t.lifespan) / 1e3));
			t.color = `rgba(${t.colorRGB.r}, ${t.colorRGB.g}, ${t.colorRGB.b}, ${r})`,
			t.lifespan >= 1e3 ? this.particles.splice(e, 1) : e += 1
		}
	}
	createShiftParticles() {
		for (let e = 0; e < 50; e++) {
			const e = 2 * Math.random() * Math.PI
			  , t = 10 + 20 * Math.random()
			  , a = -t * Math.cos(e) / 200
			  , r = -t * Math.sin(e) / 200
			  , c = [{
				r: 0,
				g: 128,
				b: 128
			}, {
				r: 0,
				g: 0,
				b: 255
			}, {
				r: 0,
				g: 0,
				b: 139
			}]
			  , o = c[Math.floor(Math.random() * c.length)];
			this.particles.push({
				x: this.x + t * Math.cos(e),
				y: this.y + t * Math.sin(e),
				size: 5,
				color: `rgba(${o.r}, ${o.g}, ${o.b}, 0.75)`,
				colorRGB: o,
				vx: a,
				vy: r,
				maxRadius: 10,
				lifespan: 0
			})
		}
	}
	drawCircleParticles(e, t) {
		for (let a = 0; a < this.particles.length; a++) {
			const r = this.particles[a]
			  , c = t.getX(r.x)
			  , f = t.getY(r.y);
			e.fillStyle = r.color,
			e.beginPath(),
			e.arc(c, f, t.toScale(r.size), 0, 2 * Math.PI),
			e.fill()
		}
	}
	animateWildfireParticles(delta) {
		let e = 0;
		for (; e < this.particles.length; ) {
			const t = this.particles[e];
			t.lifespan += delta;
			const a = 1
			  , r = a + (8 - a) * (1 - t.lifespan / 1500);
			t.x -= t.vx * r,
			t.y -= t.vy * r;
			if (Math.sqrt((t.x - this.x) ** 2 + (t.y - this.y) ** 2) < 1) {
				this.particles.splice(e, 1);
				continue
			}
			const c = .8 * Math.max(.5, Math.min(1, (1500 - t.lifespan) / 1500));
			t.color = `rgba(${t.colorRGB.r}, ${t.colorRGB.g}, ${t.colorRGB.b}, ${c})`,
			t.lifespan >= 1500 ? this.particles.splice(e, 1) : e += 1
		}
	}
	createWildfireParticles() {
		const e = [{
			r: 255,
			g: 165,
			b: 0
		}, {
			r: 255,
			g: 0,
			b: 0
		}, {
			r: 255,
			g: 255,
			b: 0
		}];
		this.emitWildfireParticlesRound(25, 22, e),
		setTimeout(( () => {
			this.emitWildfireParticlesRound(25, 22, e)
		}
		), 500)
	}
	emitWildfireParticlesRound(e, t, a) {
		for (let r = 0; r < e; r++) {
			const c = r / e * 2 * Math.PI
			  , o = t * Math.cos(c) / 100
			  , n = t * Math.sin(c) / 100
			  , $ = a[Math.floor(Math.random() * a.length)];
			this.particles.push({
				x: this.x,
				y: this.y,
				size: 5,
				color: `rgba(${$.r}, ${$.g}, ${$.b}, 0.75)`,
				colorRGB: $,
				vx: o,
				vy: n,
				lifespan: 0
			})
		}
	}
	createResurrectionParticles(e, t) {
		for (let a = 0; a < e; a += 1) {
			const e = this.randomIntRange(-15, 15)
			  , a = this.randomIntRange(-15, 15);
			this.particles.push({
				x: e,
				y: a,
				size: 4,
				color: 4026593280 + (t instanceof Function ? t() : t),
				horizontalMagnitude: this.randomRange(-1, 1),
				verticalMagnitude: this.randomRange(-1, 2)
			})
		}
	}
	animateResurrectionParticles(delta) {
		for (let e = 0; e < this.particles.length; e += 1) {
			const t = this.particles[e];
			t.x += 7 * t.horizontalMagnitude * delta / 1e3,
			t.y += 14 * t.verticalMagnitude * delta / 1e3,
			(255 & t.color) >= 128 * delta / 1e3 && (t.color -= 128 * delta / 1e3)
		}
	}
	animateResurrectionDownedParticles(delta) {
		if (this.duration >= 0)
			return void this.animateResurrectionParticles(delta);
		let e = 0;
		for (; e < this.particles.length; ) {
			(255 & this.particles[e].color) <= 128 * delta / 1e3 && (this.particles.splice(e, 1),
			this.createResurrectionParticles(1, ( () => this.randomIntRange(80, 175)))),
			e += 1
		}
		this.animateResurrectionParticles(delta);
	}
	drawSparkleParticles(e, t) {
		for (let a = 0; a < this.particles.length; a += 1) {
			const r = this.particles[a]
			  , c = r.color >> 24 & 255
			  , f = r.color >> 16 & 255
			  , o = r.color >> 8 & 255
			  , n = (255 & r.color) / 255;
			e.fillStyle = `rgba(${c}, ${f}, ${o}, ${n})`;
			const $ = [{
				x: 0,
				y: -r.size
			}, {
				x: .4 * r.size,
				y: .4 * -r.size
			}, {
				x: r.size,
				y: 0
			}, {
				x: .4 * r.size,
				y: .4 * r.size
			}, {
				x: 0,
				y: r.size
			}, {
				x: .4 * -r.size,
				y: .4 * r.size
			}, {
				x: -r.size,
				y: 0
			}, {
				x: .4 * -r.size,
				y: .4 * -r.size
			}, {
				x: 0,
				y: -r.size
			}];
			e.beginPath(),
			e.moveTo(t.getX(this.x + r.x + $[0].x), t.getY(this.y + r.y + $[0].y));
			for (let a = 1; a < $.length; a++)
				e.lineTo(t.getX(this.x + r.x + $[a].x), t.getY(this.y + r.y + $[a].y));
			e.closePath(),
			e.fill()
		}
	}
	randomIntRange(e, t) {
		return Math.floor(Math.random() * (t - e + 1)) + e
	}
	randomRange(e, t) {
		return Math.random() * (t - e + Number.EPSILON) + e
	}
}
class Torch extends SimulatorEntity{
  constructor(x,y,upside_down){
    super(x,y,null,null,"torch");
	this.image = null,
	this.baseLightRadius = 100,
	this.randomFlickerRadius = 10,
	this.flickerChance = 4.5,
	this.lightRadius = this.baseLightRadius;
	this.rectCircleCollide=true;
	this.flipped=upside_down;
	this.imageName="torch";
	this.loadedImageName="torch";
	this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8("entities/" + this.imageName);
	this.width=13;
	this.height=36;
  }
  update(){}
	render(e,t,delta) {
		Math.random() <= this.flickerChance * delta / 1e3 && (this.lightRadius = this.baseLightRadius + Math.random() * this.randomFlickerRadius);
		const a = t.getX(this.x)
		  , r = t.getY(this.y);
		this.flipped ? (e.save(),
		e.translate(a + t.toScale(this.width / 2), r + t.toScale(this.height / 2)),
		e.scale(1, -1),
		this.image.draw(e, delta, t.toScale(-this.width / 2), t.toScale(-this.height / 2), t.toScale(this.width), t.toScale(this.height)),
		e.scale(1, -1),
		e.restore()) : this.image.draw(e, delta, a, r, t.toScale(this.width), t.toScale(this.height))
	}
}
class LightRegion extends SimulatorEntity{
  constructor(x,y,width,height){
    super(x,y,null,null,"light_region");
	this.lightRectangle={x,y,width,height,intensity:1};
  }
  update(){}
  render(ctx,ctxL,delta) {}
}
class Gate extends SimulatorEntity{
  constructor(x,y,width,height){
    super(x,y,null,null,"gate");
	this.width=width;
	this.height=height;
  }
  update(){}
  render(ctx,ctxL,delta) {
	ctx.imageSmoothingEnabled = false;
	  ctx.drawImage(
          tileMap,646,2,134,598,
          this.x,
          this.y,
          this.width,
          this.height
        );
  }
}
class Wall extends SimulatorEntity{
  constructor(x,y,width,height,texture=null,collisionIndex=-1){
    super(x,y,null,null,"wall");
	this.texture=texture;
	this.rotation=0;
	this.collisionIndex=collisionIndex;
	this.wall=true;
	this.width=width;
	this.height=height;
  }
  render(ctx,camera) {
	if(null!=this.texture){
		ctx.imageSmoothingEnabled=false;
		$d2f179ecccc561fa$export$b9dfb366e63af805(ctx, $d2f179ecccc561fa$export$b9b1204f7239550e(this.texture, null, settings.tileMode), this.x, this.y, this.width, this.height, camera);
		this.showOnMap=true;
	}
  }
  collision(){}
}
class ImageBackground extends SimulatorEntity{
  constructor(x,y,image_name=null){
    super(x,y,null,null,"image_background");
    this.image = null,
    this.imageName = image_name,
    this.loadedImageName = null,
    this.shouldRenderBackgroundObjects = settings.backgroundObjects;
    this.alpha = image_name.startsWith("door") ? 3 / 4 : 1;
    this.afterStateUpdate();
  }
	stateFields() {
		return ["x", "y", "width", "height", "imageName", "alpha"]
	}
	afterStateUpdate() {
		super.afterStateUpdate(),
		this.shouldRenderBackgroundObjects && (void 0 !== this.imageName && null === this.image || this.imageName !== this.loadedImageName) && (this.image = $31e8cfefa331e399$export$93e5c64e4cc246c8("entities/background-objects/" + this.imageName),
		this.loadedImageName = this.imageName)
	}
	update(){}
	render(e, t) {
		this.shouldRenderBackgroundObjects && this.image && (e.globalAlpha = this.alpha,
		e.drawImage(this.image.getImage(0), t.getX(this.x), t.getY(this.y), t.toScale(this.width), t.toScale(this.height)),
		e.globalAlpha = 1)
	}
}
class FlashlightItem extends SimulatorEntity{
  constructor(x,y){
    super(x,y,null,null,"flashlight_item");
	this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8('entities/flashlight_item');
	this.spawnInterval=1e3;
	this.rectCircleCollide=true;
	this.width=32;
	this.height=16;
	this.spawnTime=this.spawnInterval-1e3;
	this.isSpawned=false;
  }
  update(delta,area,players){
    if(this.spawnTime>=this.spawnInterval && !this.isSpawned){
  		this.isSpawned=true;
	  	this.spawnTime=0;
	  }else if(!this.isSpawned)this.spawnTime+=delta;
    super.update(delta,area,players,false);
  }
	playerInteraction(player){
		if(!player.abilityThree&&this.isSpawned){
			player.abilityThree=new Ability;
			if(player.abilityThree.abilityType!=getAbilityIndex("Flashlight")){
				player.abilityThree.abilityType=getAbilityIndex("Flashlight");
				player.abilityThree.unionState(abilityConfig[player.abilityThree.abilityType]);
				player.abilityThree.locked=false;
				player.abilityThree.level=1;
				player.abilityThree.abilityType=player.abilityThree.abilityType;
				this.isSpawned=false;
			}
		}
	}
  render(e,t){
	  if(!this.isSpawned)return;
	  e.imageSmoothingEnabled=false;
	  this.image.draw(e,0,t.getX(this.x), t.getY(this.y), t.toScale(this.width), t.toScale(this.height))
  }
}
class ZigzagSwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"zigzag_switch_enemy");
	  this.zigSpeed=0;
	  this.zigTime=0;
	  this.zigSwitched=false;
	  this.speeding=true;
	  this.dir=1;
	  this.constantSpeedIncrement=45/7;
	  this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);
	  this.anglevel();
    this.switchAdd=false;
    this.turnAngle=Math.PI/2;
    this.switch_inverval = 3e3;
	  this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  update(delta,area,players){
	  this.zigTime+=delta;
    if (this.zigSpeed < 1.5 && this.speeding) {
      this.zigSpeed += this.constantSpeedIncrement*delta/1e3;
	    if(this.zigSpeed > 1.5)this.zigSpeed=1.5,this.speeding=false;
    } else if(this.zigSpeed >= 0 && !this.speeding){
      this.zigSpeed -= this.constantSpeedIncrement*delta/1e3;
	    if(this.zigSpeed < 0)this.zigSpeed=0,this.zigTime>500&&(this.speeding=true,this.zigTime%=500,this.zigSwitched=true);
	  }
	  this.speedMultiplier*=this.zigSpeed;
	  if(this.zigSwitched){
      if (!this.switchAdd) {
        this.angle = Math.atan2(this.velY, this.velX);
        this.angle -= this.turnAngle * this.dir;
        this.velX = Math.cos(this.angle) * this.speed;
        this.velY = Math.sin(this.angle) * this.speed;
	      this.switchAdd=true;
      } else {
        this.angle = Math.atan2(this.velY, this.velX);
        this.angle += this.turnAngle * this.dir;
        this.velX = Math.cos(this.angle) * this.speed;
        this.velY = Math.sin(this.angle) * this.speed;
        this.switchAdd=false;
      }
	    this.zigSwitched=false;
    }
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
  	  this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
}
class ZoningSwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"zoning_switch_enemy");
    this.zoneInterval = 1000;
    this.zoneTime = Math.random() * this.zoneInterval;
	  this.zoneSpeed=0;
	  this.speedIncrement=2.9;
	  this.speeding=this.zoneTime < 500;
	  this.zoneSwitched=false;
	  this.dir=1;
    this.turnAngle = Math.PI / 2
    this.turnAngle *= Math.pow(-1,Math.random()*2|0);
	  this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);
	  this.anglevel();
    this.switch_inverval = 3e3;
	  this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  update(delta,area,players){
	this.zoneTime+=delta;
    if (this.zoneSpeed <= 1.45 && this.speeding) {
      this.zoneSpeed = this.zoneTime/1e3*this.speedIncrement;
	  if(this.zoneSpeed >= 1.45)this.zoneSpeed=1.45,this.zoneTime>(29e3/60)&&(this.speeding=false);
    } else if(this.zoneSpeed >= 0 && !this.speeding){
      this.zoneSpeed = 1.45-(this.zoneTime-(29e3/60))/1e3*this.speedIncrement;
	  if(this.zoneSpeed <= 0)this.zoneSpeed=0,this.zoneTime>1000&&(this.speeding=true,this.zoneTime=0,this.zoneSwitched=true);
	}
	this.speedMultiplier*=Math.min(this.zoneSpeed,1.4);
    if (this.zoneSwitched) {
      this.angle = Math.atan2(this.velY, this.velX);
      this.angle += this.turnAngle * this.dir;
      this.velX = Math.cos(this.angle) * this.speed;
      this.velY = Math.sin(this.angle) * this.speed;
	  this.zoneSwitched=false;
    }
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	  this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
  onCollide(){
	  this.dir*=-1;
  }
}
class SpiralSwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"spiral_switch_enemy");
    this.angleIncrement = 0.15;
    this.angleIncrementChange = 0.12;
    this.angleAdd = false;
    this.dir = 1
    this.switch_inverval = 3e3;
	this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  update(delta,area,players) {
    if (this.angleIncrement < 0.001) {
      this.angleAdd = true;
    } else if (this.angleIncrement > 0.35) {
      this.angleAdd = false;
    }
    if (this.angleIncrement < 0.05) {
      this.angleIncrementChange = 0.066;
    } else {
      this.angleIncrementChange = 0.12;
    }
    if (this.angleAdd) {
      this.angleIncrement += this.angleIncrementChange * (delta / 1000);
    } else {
      this.angleIncrement -= this.angleIncrementChange * (delta / 1000);
    }
    this.velangle();
    this.angle += this.angleIncrement * this.dir * (delta / (1000 / 30));
    this.anglevel();
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	  this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
  onCollide(){
    this.dir *= -1; 
  }
}
class OscillatingSwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"oscillating_switch_enemy");
    this.zoneInterval = 1000;
    this.zoneTime = Math.random() * this.zoneInterval;
	  this.zoneSpeed=0;
	  this.speedIncrement=2.9;
	  this.speeding=this.zoneTime < 500;
	  this.zoneSwitched=false;
    this.switch_inverval = 3e3;
	  this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  update(delta,area,players){
	  this.zoneTime+=delta;
    if (this.zoneSpeed <= 1.45 && this.speeding) {
      this.zoneSpeed = this.zoneTime/1e3*this.speedIncrement;
	    if(this.zoneSpeed >= 1.45)this.zoneSpeed=1.45,this.zoneTime>(29e3/60)&&(this.speeding=false);
    } else if(this.zoneSpeed >= 0 && !this.speeding){
      this.zoneSpeed = 1.45-(this.zoneTime-(29e3/60))/1e3*this.speedIncrement;
	    if(this.zoneSpeed <= 0)this.zoneSpeed=0,this.zoneTime>1000&&(this.speeding=true,this.zoneTime=0,this.zoneSwitched=true);
	  }
    this.speedMultiplier*=Math.min(this.zoneSpeed,1.4);
    if (this.zoneSwitched) {
      this.velX *= -1;
      this.velY *= -1;
	    this.zoneSwitched=false;
    }
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	    this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
}
class WavySwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle=0){
    super(x,y,radius,speed,angle,"wavy_switch_enemy");
    this.dir = 1;
    this.waveInterval = (180+15)/this.speed*1e3;
    this.waveTime = 0;
    this.angleIncrement = this.speed;
    this.switch_inverval = 3e3;
	this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  rad_to_deg(x){
	  return x/Math.PI*180;
  }
  deg_to_rad(x){
	  return x*Math.PI/180;
  }
  update(delta,area,players) {
    this.waveTime += delta
    if (this.waveTime > this.waveInterval) {
      this.waveTime %= this.waveInterval;
      this.dir *= -1;
    }
    this.velangle();
    this.angle+=this.deg_to_rad(this.angleIncrement*delta/1e3) * this.dir;
    this.anglevel();
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	  this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
  onCollide(){
    this.dir *= -1; 
  }
}
class HomingSwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"homing_switch_enemy");
    this.target_angle=this.angle;
    this.reverse=false;
	this.home_range=200;
	this.increment=1.5;
    this.switch_inverval = 3e3;
	this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  update(delta, area, players){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    var target_angle;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > this.home_range**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      target_angle = modulus(Math.atan2(distance_y,distance_x)+Math.PI+(Math.PI*this.reverse),Math.PI*2);
    }else {
      target_angle = this.target_angle;
    }
    var angle_difference = modulus(this.angle - target_angle,Math.PI*2)
    var angle_increment = this.increment*delta/1000;
    if(angle_difference<angle_increment){
    }else if(angle_difference < Math.PI){
      this.angle-=angle_increment;
      this.anglevel();
    }else{
      this.angle+=angle_increment;
      this.anglevel();
    }
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	  this.switchTime += this.switch_inverval;
    }
    super.update(delta, area, players);
  }
  onCollide(){
    this.target_angle=this.angle=Math.atan2(this.velY,this.velX);
  }
}
class DasherSwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"dasher_switch_enemy");
    this.reset_parameters();
    this.switch_inverval = 3e3;
    this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  reset_parameters(){
    this.prepare_speed = this.speed / 5;
    this.dash_speed = this.speed;
    this.normal_speed = 0;

    this.time_to_prepare = 750;
    this.time_to_dash = 3000;
    this.time_between_dashes = 750;
    
    this.time_preparing = 0;
    this.time_dashing = 0;
    this.time_since_last_dash = this.time_between_dashes;
    this.compute_speed();
  }
  compute_speed(){
    this.anglevel();
  }
  update_parameters(delta,area,players){
    if(this.time_preparing == 0){
      if(this.time_dashing == 0){
        if(this.time_since_last_dash < this.time_between_dashes)
          this.time_since_last_dash += delta;
	      else {
          this.time_since_last_dash = 0;
          this.time_preparing += delta;
          this.speed = this.prepare_speed;
          this.compute_speed();
        }
      } else {
        this.time_dashing += delta;
        if (this.time_dashing > this.time_to_dash){
          this.time_dashing = 0;
          this.speed = this.normal_speed;
        } else {
          this.speed = this.dash_speed * ( 1 - (this.time_dashing / this.time_to_dash ) );
        }
        this.compute_speed();
      }
    } else {
      this.time_preparing += delta;
      if (this.time_preparing > this.time_to_prepare){
        this.time_preparing = 0;
        this.time_dashing += delta;
        this.speed = this.dash_speed;
      } else {
        this.speed = this.prepare_speed * ( 1 - (this.time_preparing / this.time_to_prepare) );
      }
      this.compute_speed();
    }
  }
  update(delta,area,players){
    this.update_parameters(delta,area,players);
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	  this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
  onCollide(){
    this.velangle();
  }
}
class ConfectionerSwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"confectioner_switch_enemy");
    this.reset_parameters();
    this.switch_inverval=3000;
    this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  reset_parameters(){
    this.has_projectile=true;
    this.release_interval = 3000,
    this.releaseTime = Math.random()*this.release_interval;
    this.release_ready=false;
  }
  generate_entities(delta,area){
    if(!this.release_ready){
      if(this.energy>0)this.releaseTime -= delta;
      if(this.releaseTime<=0)this.release_ready=true;
    }else{
      let entity;
      area.entities.push(entity=new SourCandyItem(this.x,this.y,13,0,0))
      entity.area=this.area;
      this.releaseTime = this.release_interval;
      this.release_ready=false;
    }
  }
  update(delta,area,players){
    this.generate_entities(delta,area,players);
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
      this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
}
class ConfectionerEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"confectioner_enemy");
    this.reset_parameters();
  }
  reset_parameters(){
    this.has_projectile=true;
    this.release_interval = 3000,
    this.releaseTime = Math.random()*this.release_interval;
    this.release_ready=false;
  }
  generate_entities(delta,area,players){
    if(!this.release_ready){
      if(this.energy>0)this.releaseTime -= delta;
      if(this.releaseTime<=0)this.release_ready=true;
    }else{
      let entity;
      area.entities.push(entity=new SourCandyItem(this.x,this.y,13,0,0))
      entity.area=this.area;
      this.releaseTime = this.release_interval;
      this.release_ready=false;
    }
  }
  update(delta,area,players){
    this.generate_entities(delta,area,players);
    super.update(delta,area,players);
  }
}
class StreamPath extends SimulatorEntity{
  constructor(x,y,direction,length=EvadesConfig.defaults.stream_path.length,width=EvadesConfig.defaults.stream_path.width,duration=EvadesConfig.defaults.stream_path.duration){
    super(x,y,"rgb(41,255,198)",null,"stream_path",null,null);
    this.immune=true;
    direction = Math.round(direction / 90) * 90;
	  this.outline=false;
    this.duration = duration;
    this.isEnemy=false;
	  this.rectCircleCollide=true;
	  this.width = Math.abs(length * Math.cos(direction/180*Math.PI) + width * Math.sin(direction/180*Math.PI));
    this.height = Math.abs(width * Math.cos(direction/180*Math.PI) + length * Math.sin(direction/180*Math.PI));
    if(Math.abs(direction) === 180)
      this.x -= this.width;
    if(direction === -90)
      this.y -= this.height;
    this.x -= Math.abs(this.width / 2 * Math.sin(direction/180*Math.PI));
    this.y -= Math.abs(this.height / 2 * Math.cos(direction/180*Math.PI));
  }
  playerInteraction(player){
    if(!player.touchedStreamPath){
	    player.touchedStreamPath = true;
      player.speedAdditioner+=this.player_speed_boost;
    }
  }
	render(e, t) {
		const a = Math.min(this.duration, 2) / 2 * .6
		  , r = t.getX(this.x)
		  , c = t.getY(this.y);
		let f, o;
		this.width > this.height ? (f = e.createLinearGradient(r, c + t.toScale(this.height / 2), r + t.toScale(this.width), c + t.toScale(this.height / 2)),
		o = .02 * this.width) : (f = e.createLinearGradient(r + t.toScale(this.width / 2), c, r + t.toScale(this.width / 2), c + t.toScale(this.height)),
		o = .02 * this.height);
		let n = !0;
		for (let e = 0; e <= 1; e += 1 / o) {
			let t;
			t = n ? `rgba(41, 255, 198, ${a})` : `rgba(41, 255, 198, ${a / 5})`,
			f.addColorStop(e, t),
			n = !n
		}
		e.beginPath(),
		e.rect(r, c, t.toScale(this.width), t.toScale(this.height)),
		e.fillStyle = f,
		e.fill(),
		e.closePath()
	}
  update(delta,area,players){
    this.duration -= delta / 1e3;
	  if(this.duration < delta / 2e3)this.duration=0,this.remove=true;
    super.update(delta,area,players,false);
  }
}
class BarrierDome extends SimulatorEntity{
  constructor(x,y,duration){
    super(x,y,"rgb(41,255,198)",EvadesConfig.defaults.barrier_dome.radius,"stream_path",null,null);
    this.immune=true;
	  this.outline=false;
    this.duration = duration;
    this.isEnemy=false;
  }
  playerInteraction(player){
	  player.inPlayerBarrier = true;
  }
	render(e, t) {
		const a = Math.min(this.duration, 2) / 2 * .8
		  , r = t.getX(this.x)
		  , c = t.getY(this.y)
		  , f = e.createRadialGradient(r, c, 0, r, c, t.toScale(this.radius));
		f.addColorStop(0, "rgba(41, 255, 198, 0)"),
		f.addColorStop(1, `rgba(41, 255, 198, ${a})`),
		e.beginPath(),
		e.arc(r, c, t.toScale(this.radius), 0, 2 * Math.PI, !1),
		e.fillStyle = f,
		e.fill(),
		e.closePath()
	}
  update(delta,area,players){
    this.duration -= delta / 1e3;
	  if(this.duration < delta / 2e3)this.duration=0,this.remove=true;
    super.update(delta,area,players,false);
  }
}
class SourCandyItem extends SimulatorEntity{
  constructor(x,y,radius,speed,angle){
    super(x,y,"rgb(69,85,255)",radius,"sour_candy_item",speed,angle);
    this.immune=true;
	  this.outline=false;
    this.clock=0;
    this.isEnemy=true;
	  this.rectCircleCollide=true;
	  this.width=this.height=this.radius*2;
    this.image = $31e8cfefa331e399$export$93e5c64e4cc246c8("entities/sour_candy_item"),
    this.randomrotation=Math.floor(360*Math.random())
  }
  playerInteraction(player){
	  player.sourCandyConsumed=true;
	  player.sourCandyTime=5000;
    this.remove=true;
  }
  render(e, t, delta) {
		e.globalAlpha = .4;
		const a = t.getX(this.x + this.width / 2)
		  , r = t.getY(this.y + this.height / 2);
		e.translate(a, r),
		e.rotate(this.randomrotation),
		e.translate(-a, -r),
		this.image.draw(e, delta, a - t.toScale(this.width / 2), r - t.toScale(this.height / 2), t.toScale(this.width), t.toScale(this.height)),
		e.translate(a, r),
		e.rotate(-this.randomrotation),
		e.translate(-a, -r),
		e.globalAlpha = 1
  }
  update(delta,area,players){
    this.clock += delta;
	  if(this.clock >= 3000)
	  	this.remove=true;
    super.update(delta,area,players,false);
  }
}
class WackyWallEnemy extends Enemy{
  constructor(radius,speed,area_bounding_box,wall_index,wall_count,move_clockwise=true,spawn_top=true){
    super(0,0,radius,speed,0,"wacky_wall_enemy");
	this.boundary=area_bounding_box;
    var initial_side=2*(!spawn_top);
    var distance=wall_index*(
      (this.boundary.width-this.radius*2)*2+
      (this.boundary.height-this.radius*2)*2)/wall_count;
    if(initial_side==0){
      this.x = (this.boundary.width / 2) + this.boundary.left
      this.y = this.boundary.top+this.radius;
    }else if(initial_side==1){
      this.x = this.boundary.right - this.radius
      this.y = (this.boundary.height / 2) + this.boundary.top
    }else if(initial_side==2){
      this.x = (this.boundary.width / 2) + this.boundary.left
      this.y = this.boundary.bottom - this.radius
    }else if(initial_side==3){
      this.x = this.boundary.left + this.radius
      this.y = (this.boundary.height / 2) + this.boundary.top
    }else throw this.initial_side;
    this.move_clockwise=move_clockwise;
    this.direction = modulus(initial_side+Math.pow(-1,this.move_clockwise+1),4);
    while(distance>0){
      if(this.direction==0){
        this.y-=distance;
        if(this.y < this.boundary.top + this.radius){
          distance = (this.boundary.top + this.radius) - this.y;
          this.y = this.boundary.top + this.radius;
          this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
        }else break;
      }else if(this.direction==1){
        this.x+=distance;
        if(this.x > this.boundary.right - this.radius){
          distance = this.x - (this.boundary.right - this.radius);
          this.x = this.boundary.right - this.radius;
          this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
        }else break;
      }else if(this.direction==2){
        this.y+=distance;
        if(this.y > this.boundary.bottom - this.radius){
          distance = this.y - (this.boundary.bottom - this.radius);
          this.y = this.boundary.bottom - this.radius;
          this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
        }else break;
      }else if(this.direction==3){
        this.x-=distance;
        if(this.x < this.boundary.left + this.radius){
          distance = (this.boundary.left + this.radius)-this.x;
          this.x = this.boundary.left + this.radius;
          this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
        }else break;
      }
    }
    this.velX=speedparts(this.direction,this.speed).x;
    this.velY=speedparts(this.direction,this.speed).y;
    this.immune=true;
    this.randomize_immune=true;
    this.max_move_dist = 5/3;
    this.min_move_dist = 1/3;
    this.accelerating = false;
    this.speed_mult = 1;
  }
  update(delta,area,players){
		if(this.accelerating){
			if(this.speed_mult < this.max_move_dist)
        this.speed_mult += 2 * delta / 1e3;
			else
				this.accelerating=false;
		} else {
			if(this.speed_mult > this.min_move_dist)
        this.speed_mult += -2 * delta / 1e3;
			else
				this.accelerating=true;
		}
    this.speed_mult=clamp(this.speed_mult,this.min_move_dist,this.max_move_dist);
    this.speedMultiplier *= this.speed_mult;
    super.update(delta,area,players);
  }
  onCollide(){
    this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
    this.velX = speedparts(this.direction, this.speed).x;
    this.velY = speedparts(this.direction, this.speed).y;
  }
}
class WallEnemy extends Enemy{
  constructor(radius,speed,area_bounding_box,wall_index,wall_count,move_clockwise=true,spawn_top=true){
    super(0,0,radius,speed,0,"wall_enemy");
  	this.boundary=area_bounding_box;
    var initial_side=2*(!spawn_top);
    var distance=wall_index*(
      (this.boundary.width-this.radius*2)*2+
      (this.boundary.height-this.radius*2)*2)/wall_count;
    if(initial_side==0){
      this.x = (this.boundary.width / 2) + this.boundary.left
      this.y = this.boundary.top+this.radius;
    }else if(initial_side==1){
      this.x = this.boundary.right - this.radius
      this.y = (this.boundary.height / 2) + this.boundary.top
    }else if(initial_side==2){
      this.x = (this.boundary.width / 2) + this.boundary.left
      this.y = this.boundary.bottom - this.radius
    }else if(initial_side==3){
      this.x = this.boundary.left + this.radius
      this.y = (this.boundary.height / 2) + this.boundary.top
    }else throw this.initial_side;
    this.move_clockwise=move_clockwise;
    this.direction = modulus(initial_side+Math.pow(-1,this.move_clockwise+1),4);
    while(distance>0){
      if(this.direction==0){
        this.y-=distance;
        if(this.y < this.boundary.top + this.radius){
          distance = (this.boundary.top + this.radius) - this.y;
          this.y = this.boundary.top + this.radius;
          this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
        }else break;
      }else if(this.direction==1){
        this.x+=distance;
        if(this.x > this.boundary.right - this.radius){
          distance = this.x - (this.boundary.right - this.radius);
          this.x = this.boundary.right - this.radius;
          this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
        }else break;
      }else if(this.direction==2){
        this.y+=distance;
        if(this.y > this.boundary.bottom - this.radius){
          distance = this.y - (this.boundary.bottom - this.radius);
          this.y = this.boundary.bottom - this.radius;
          this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
        }else break;
      }else if(this.direction==3){
        this.x-=distance;
        if(this.x < this.boundary.left + this.radius){
          distance = (this.boundary.left + this.radius)-this.x;
          this.x = this.boundary.left + this.radius;
          this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
        }else break;
      }
    }
    this.velX=speedparts(this.direction,this.speed).x;
    this.velY=speedparts(this.direction,this.speed).y;
    this.immune=true;
    this.randomize_immune=true;
  }
  onCollide(){
    this.direction = modulus(this.direction+Math.pow(-1,this.move_clockwise+1),4);
    this.velX=speedparts(this.direction,this.speed).x;
    this.velY=speedparts(this.direction,this.speed).y;
  }
}
class InfectiousEnemy extends Enemy{
	constructor(x,y,radius,speed,angle){
		super(x,y,radius,speed,angle,"infectious_enemy");
    this.infectious = true;
	}
}
class NormalEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"normal_enemy");
  }
}

class SnowSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"snow_sniper_enemy");
    this.release_interval = 6000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	    const projectile=new SnowballProjectile(this.x,this.y,EvadesConfig.defaults.snowball_projectile.radius,780,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180+Math.random()*20-10,this.area);
  	  projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class SnowLiquidEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"snow_liquid_enemy");
    this.player_detection_radius = 280;
  }
  update(delta,area,players) {
    var closest_entity,closest_entity_distance,information;
    information = area.entities.filter(e=>e instanceof SnowballProjectile);
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > this.player_detection_radius**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      this.speedMultiplier *= 5;
    }
    super.update(delta,area,players);
  }
}

class KeyEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"key_enemy");
    this.lightRadius = this.radius * 3;
    this.movement_immune = true;
    this.isEnemy=false;
  }
  update(delta,area,players){
    this.lightRadius = this.radius * 3;
    super.update(delta,area,players);
  }
  playerInteraction(player){
    if(player.isDowned()||this.isHarmless)return;
    try{
      let areapos = [map.areas[player.area].x,map.areas[player.area].y,player.area];
      ++player.area;
      let newareapos = [map.areas[player.area].x,map.areas[player.area].y,player.area];
      if(areapos[2] !== newareapos[2]){
		    player.x -= newareapos[0] - areapos[0];
		    player.y -= newareapos[1] - areapos[1];
        if(map.name=="Stellar Square Hard" && player.area === 20){
          // go to (44462,-4451)
          player.x =  44462 - newareapos[0];
          player.y = - 4451 - newareapos[1];
        }
        spawnEntities(player.area);
      }
    }catch(e){
      if(map.name=="Stellar Square"){
        player.area = 0;
        regionIsLoading = true;
        fetch("regions/stellar-square-hard.yaml").then(e => {
          e.text().then(t => {
            loadFile(t, false, false);
            regionIsLoading = false;
            const newArea = map.areas[player.area],
		              safezone = newArea.zones.filter(e=>e.type == "safe")[0] ?? newArea.zones[0];
            evadesRenderer.minimap.updateZones();
		        player.x=safezone.x + 16 + (safezone.width - 32) * Math.random();
		        player.y=safezone.y + 16 + (safezone.height - 32) * Math.random();
		        player.onTele = true;
          })
        }).catch(e => {
          // Check if offline or in local file page
          let StellarSquareHard = '{"name":"Stellar Square Hard","areas":[{"x":"var x","y":"var y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":960},{"type":"safe","x":1088,"y":128,"width":128,"height":960},{"type":"safe","x":0,"y":0,"width":1216,"height":128},{"type":"safe","x":0,"y":1088,"width":1216,"height":128},{"type":"active","x":128,"y":128,"width":960,"height":960,"spawner":[{"radius":18,"speed":150,"count":3,"types":["normal"]},{"radius":18,"speed":150,"count":3,"types":["wavy","dasher","spiral","sizing"]},{"radius":18,"speed":90,"count":3,"types":["sniper"]},{"radius":18,"speed":90,"count":10,"types":["wall"]},{"radius":18,"speed":-90,"count":10,"types":["wall"]},{"radius":10,"speed":150,"count":10,"types":["wavy","dasher","spiral","sizing"]},{"radius":32,"speed":150,"count":3,"types":["normal"]},{"radius":6,"speed":600,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":300}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1024},{"type":"safe","x":1152,"y":128,"width":128,"height":1024},{"type":"safe","x":0,"y":0,"width":1280,"height":128},{"type":"safe","x":0,"y":1152,"width":1280,"height":128},{"type":"active","x":128,"y":128,"width":1024,"height":1024,"spawner":[{"radius":30,"speed":150,"count":5,"types":["normal"]},{"radius":18,"speed":150,"count":3,"types":["wavy","dasher","spiral","sizing"]},{"radius":18,"speed":90,"count":3,"types":["sniper"]},{"radius":18,"speed":90,"count":11,"types":["wall"]},{"radius":18,"speed":-90,"count":11,"types":["wall"]},{"radius":10,"speed":150,"count":20,"types":["wavy","dasher","spiral","sizing"]},{"radius":32,"speed":150,"count":3,"types":["normal"]},{"radius":7,"speed":615,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":315}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1088},{"type":"safe","x":1216,"y":128,"width":128,"height":1088},{"type":"safe","x":0,"y":0,"width":1344,"height":128},{"type":"safe","x":0,"y":1216,"width":1344,"height":128},{"type":"active","x":128,"y":128,"width":1088,"height":1088,"spawner":[{"radius":18,"speed":150,"count":1,"types":["normal"]},{"radius":18,"speed":150,"count":20,"types":["wavy","dasher","spiral","sizing"]},{"radius":18,"speed":90,"count":8,"types":["sniper"]},{"radius":18,"speed":90,"count":12,"types":["wall"]},{"radius":18,"speed":-90,"count":12,"types":["wall"]},{"radius":10,"speed":150,"count":1,"types":["wavy","dasher","spiral","sizing"]},{"radius":32,"speed":150,"count":1,"types":["normal"]},{"radius":8,"speed":630,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":330}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1152},{"type":"safe","x":1280,"y":128,"width":128,"height":1152},{"type":"safe","x":0,"y":0,"width":1408,"height":128},{"type":"safe","x":0,"y":1280,"width":1408,"height":128},{"type":"active","x":128,"y":128,"width":1152,"height":1152,"spawner":[{"radius":18,"speed":150,"count":3,"types":["wavy","dasher","spiral","sizing"]},{"radius":18,"speed":120,"count":16,"types":["sniper"]},{"radius":18,"speed":90,"count":13,"types":["wall"]},{"radius":18,"speed":-90,"count":13,"types":["wall"]},{"radius":10,"speed":150,"count":10,"types":["wavy","dasher","spiral","sizing"]},{"radius":9,"speed":645,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":345}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1344},{"type":"safe","x":1472,"y":128,"width":128,"height":1344},{"type":"safe","x":0,"y":0,"width":1600,"height":128},{"type":"safe","x":0,"y":1472,"width":1600,"height":128},{"type":"active","x":128,"y":128,"width":1344,"height":1344,"spawner":[{"radius":18,"speed":250,"count":15,"types":["normal"]},{"radius":80,"speed":90,"count":3,"types":["sniper"]},{"radius":18,"speed":90,"count":14,"types":["wall"]},{"radius":18,"speed":-90,"count":14,"types":["wall"]},{"radius":10,"speed":150,"count":15,"types":["wavy","dasher","spiral","sizing"]},{"radius":32,"speed":150,"count":5,"types":["normal"]},{"radius":10,"speed":660,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":360}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1408},{"type":"safe","x":1536,"y":128,"width":128,"height":1408},{"type":"safe","x":0,"y":0,"width":1664,"height":128},{"type":"safe","x":0,"y":1536,"width":1664,"height":128},{"type":"active","x":128,"y":128,"width":1408,"height":1408,"spawner":[{"radius":26,"speed":150,"count":3,"types":["snow_liquid"]},{"radius":5,"speed":210,"count":54,"types":["wind_ghost","snow_liquid","cactus","mutating"]},{"radius":12,"speed":90,"count":15,"types":["wind_sniper"]},{"radius":18,"speed":90,"count":15,"types":["wall"]},{"radius":18,"speed":-90,"count":15,"types":["wall"]},{"radius":11,"speed":675,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":375}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1472},{"type":"safe","x":1600,"y":128,"width":128,"height":1472},{"type":"safe","x":0,"y":0,"width":1728,"height":128},{"type":"safe","x":0,"y":1600,"width":1728,"height":128},{"type":"active","x":128,"y":128,"width":1472,"height":1472,"spawner":[{"radius":18,"speed":240,"count":30,"types":["wind_ghost","snow_liquid","cactus","mutating"]},{"radius":32,"speed":150,"count":15,"types":["wind_sniper"]},{"radius":18,"speed":90,"count":16,"types":["wall"]},{"radius":18,"speed":-90,"count":16,"types":["wall"]},{"radius":12,"speed":690,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":390}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1536},{"type":"safe","x":1664,"y":128,"width":128,"height":1536},{"type":"safe","x":0,"y":0,"width":1792,"height":128},{"type":"safe","x":0,"y":1664,"width":1792,"height":128},{"type":"active","x":128,"y":128,"width":1536,"height":1536,"spawner":[{"radius":10,"speed":360,"count":52,"types":["wind_ghost","snow_liquid","cactus","mutating"]},{"radius":50,"speed":90,"count":5,"types":["wind_sniper"]},{"radius":18,"speed":90,"count":17,"types":["wall"]},{"radius":18,"speed":-90,"count":17,"types":["wall"]},{"radius":13,"speed":705,"types":["key"],"count":1},{"radius":22,"speed":150,"count":5,"types":["wind_ghost","snow_liquid","cactus","mutating"]}]}],"properties":{"pellet_count":15,"minimum_speed":405}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1600},{"type":"safe","x":1728,"y":128,"width":128,"height":1600},{"type":"safe","x":0,"y":0,"width":1856,"height":128},{"type":"safe","x":0,"y":1728,"width":1856,"height":128},{"type":"active","x":128,"y":128,"width":1600,"height":1600,"spawner":[{"radius":64,"speed":180,"count":20,"types":["wind_ghost"]},{"radius":18,"speed":450,"count":38,"types":["wind_ghost","snow_liquid","cactus","mutating"]},{"radius":70,"speed":90,"count":3,"types":["wind_sniper"]},{"radius":18,"speed":90,"count":18,"types":["wall"]},{"radius":18,"speed":-90,"count":18,"types":["wall"]},{"radius":10,"speed":150,"count":10,"types":["wavy","dasher","spiral","sizing"]},{"radius":14,"speed":720,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":420}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1792},{"type":"safe","x":1920,"y":128,"width":128,"height":1792},{"type":"safe","x":0,"y":0,"width":2048,"height":128},{"type":"safe","x":0,"y":1920,"width":2048,"height":128},{"type":"active","x":128,"y":128,"width":1792,"height":1792,"spawner":[{"radius":32,"speed":150,"count":15,"types":["snow_liquid"]},{"radius":18,"speed":250,"count":45,"types":["wind_ghost","snow_liquid","cactus","mutating"]},{"radius":110,"speed":90,"count":6,"types":["wind_sniper"]},{"radius":18,"speed":90,"count":19,"types":["wall"]},{"radius":18,"speed":-90,"count":19,"types":["wall"]},{"radius":15,"speed":735,"types":["key"],"count":1},{"radius":10,"speed":400,"count":15,"types":["wind_ghost","snow_liquid","cactus","mutating"]},{"radius":26,"speed":90,"count":15,"types":["wind_ghost","snow_liquid","cactus","mutating"]}]}],"properties":{"pellet_count":15,"minimum_speed":435}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1856},{"type":"safe","x":1984,"y":128,"width":128,"height":1856},{"type":"safe","x":0,"y":0,"width":2112,"height":128},{"type":"safe","x":0,"y":1984,"width":2112,"height":128},{"type":"active","x":128,"y":128,"width":1856,"height":1856,"spawner":[{"radius":18,"speed":150,"count":3,"types":["fire_trail"]},{"radius":40,"speed":180,"count":64,"types":["glowy","firefly","phantom","mist"]},{"radius":18,"speed":240,"count":5,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":20,"types":["wall"]},{"radius":18,"speed":-90,"count":20,"types":["wall"]},{"radius":16,"speed":750,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":450,"lighting":0.67}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1920},{"type":"safe","x":2048,"y":128,"width":128,"height":1920},{"type":"safe","x":0,"y":0,"width":2176,"height":128},{"type":"safe","x":0,"y":2048,"width":2176,"height":128},{"type":"active","x":128,"y":128,"width":1920,"height":1920,"spawner":[{"radius":18,"speed":300,"count":6,"types":["fire_trail"]},{"radius":40,"speed":90,"count":60,"types":["glowy","firefly","phantom","mist"]},{"radius":12,"speed":180,"count":5,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":21,"types":["wall"]},{"radius":18,"speed":-90,"count":21,"types":["wall"]},{"radius":10,"speed":150,"count":10,"types":["wavy","dasher","spiral","sizing"]},{"radius":17,"speed":765,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"lighting":0.56,"minimum_speed":475}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":1984},{"type":"safe","x":2112,"y":128,"width":128,"height":1984},{"type":"safe","x":0,"y":0,"width":2240,"height":128},{"type":"safe","x":0,"y":2112,"width":2240,"height":128},{"type":"active","x":128,"y":128,"width":1984,"height":1984,"spawner":[{"radius":32,"speed":240,"count":5,"types":["fire_trail"]},{"radius":32,"speed":300,"count":45,"types":["glowy","firefly","phantom","mist"]},{"radius":16,"speed":300,"count":6,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":22,"types":["wall"]},{"radius":18,"speed":-90,"count":22,"types":["wall"]},{"radius":12,"speed":120,"count":5,"types":["fire_trail"]},{"radius":18,"speed":780,"types":["key"],"count":1},{"radius":20,"speed":90,"count":20,"types":["glowy","firefly","phantom","mist"]}]}],"properties":{"pellet_count":15,"lighting":0.46,"minimum_speed":490}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":2048},{"type":"safe","x":2176,"y":128,"width":128,"height":2048},{"type":"safe","x":0,"y":0,"width":2304,"height":128},{"type":"safe","x":0,"y":2176,"width":2304,"height":128},{"type":"active","x":128,"y":128,"width":2048,"height":2048,"spawner":[{"radius":18,"speed":150,"count":8,"types":["fire_trail"]},{"radius":40,"speed":180,"count":50,"types":["glowy","firefly","phantom","mist"]},{"radius":18,"speed":210,"count":24,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":23,"types":["wall"]},{"radius":18,"speed":-90,"count":23,"types":["wall"]},{"radius":19,"speed":795,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"lighting":0.36,"minimum_speed":510}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":2240},{"type":"safe","x":2368,"y":128,"width":128,"height":2368},{"type":"safe","x":0,"y":0,"width":2496,"height":128},{"type":"safe","x":0,"y":2368,"width":2368,"height":128},{"type":"active","x":128,"y":128,"width":2240,"height":2240,"spawner":[{"radius":18,"speed":150,"count":3,"types":["normal"]},{"radius":70,"speed":150,"count":82,"types":["glowy","firefly","phantom","mist"]},{"radius":120,"speed":240,"count":6,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":24,"types":["wall"]},{"radius":18,"speed":-90,"count":24,"types":["wall"]},{"radius":20,"speed":810,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"lighting":0.06,"minimum_speed":525}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":2304},{"type":"safe","x":2432,"y":128,"width":128,"height":2432},{"type":"safe","x":0,"y":0,"width":2560,"height":128},{"type":"safe","x":0,"y":2432,"width":2432,"height":128},{"type":"active","x":128,"y":128,"width":2304,"height":2304,"spawner":[{"radius":22,"speed":360,"count":20,"types":["snow_liquid"]},{"radius":18,"speed":180,"count":12,"types":["snow_sniper"]},{"radius":18,"speed":660,"count":40,"types":["mutating"]},{"radius":18,"speed":90,"count":25,"types":["wall"]},{"radius":18,"speed":-90,"count":25,"types":["wall"]},{"radius":21,"speed":825,"types":["key"],"count":1},{"radius":64,"speed":180,"count":15,"types":["snow_liquid"]}]}],"properties":{"pellet_count":15,"minimum_speed":540}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":2368},{"type":"safe","x":2496,"y":128,"width":128,"height":2496},{"type":"safe","x":0,"y":0,"width":2624,"height":128},{"type":"safe","x":0,"y":2496,"width":2496,"height":128},{"type":"active","x":128,"y":128,"width":2368,"height":2368,"spawner":[{"radius":32,"speed":270,"count":28,"types":["snow_liquid"]},{"radius":18,"speed":660,"count":40,"types":["mutating"]},{"radius":18,"speed":180,"count":20,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":26,"types":["wall"]},{"radius":18,"speed":-90,"count":26,"types":["wall"]},{"radius":22,"speed":840,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":555}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":2432},{"type":"safe","x":2560,"y":128,"width":128,"height":2560},{"type":"safe","x":0,"y":0,"width":2688,"height":128},{"type":"safe","x":0,"y":2560,"width":2560,"height":128},{"type":"active","x":128,"y":128,"width":2432,"height":2432,"spawner":[{"radius":280,"speed":480,"count":6,"types":["wind_ghost"]},{"radius":32,"speed":660,"count":40,"types":["mutating"]},{"radius":18,"speed":150,"count":50,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":28,"types":["wall"]},{"radius":18,"speed":-90,"count":28,"types":["wall"]},{"radius":23,"speed":855,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":570}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":2496},{"type":"safe","x":2624,"y":128,"width":128,"height":2624},{"type":"safe","x":0,"y":0,"width":2752,"height":128},{"type":"safe","x":0,"y":2624,"width":2624,"height":128},{"type":"active","x":128,"y":128,"width":2496,"height":2496,"spawner":[{"radius":64,"speed":240,"count":36,"types":["wind_sniper"]},{"radius":400,"speed":30,"count":3,"types":["mutating"]},{"radius":6,"speed":150,"count":30,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":29,"types":["wall"]},{"radius":18,"speed":-90,"count":29,"types":["wall"]},{"radius":32,"speed":300,"count":33,"types":["snow_liquid"]},{"radius":25,"speed":870,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":600}},{"x":"last_right+64","y":"last_y","zones":[{"type":"safe","x":0,"y":128,"width":128,"height":3328},{"type":"safe","x":3456,"y":0,"width":128,"height":3584},{"type":"safe","x":0,"y":0,"width":3456,"height":128},{"type":"safe","x":0,"y":3456,"width":3456,"height":128},{"type":"active","x":128,"y":128,"width":3328,"height":3328,"spawner":[{"radius":400,"speed":600,"count":1,"types":["wind_ghost"]},{"radius":28,"speed":200,"count":40,"types":["snow_liquid"]},{"radius":3,"speed":510,"count":100,"types":["mutating"]},{"radius":5,"speed":90,"count":70,"types":["snow_sniper"]},{"radius":18,"speed":90,"count":50,"types":["wall"]},{"radius":18,"speed":-90,"count":50,"types":["wall"]},{"radius":300,"speed":300,"count":3,"types":["snow_liquid"]},{"radius":50,"speed":1000,"types":["key"],"count":1}]}],"properties":{"pellet_count":15,"minimum_speed":800}},{"x":"last_right+64","y":"last_y","zones":[{"type":"removal","x":3456,"y":0,"width":128,"height":3584},{"type":"victory","x":0,"y":0,"width":3456,"height":3584}],"properties":{"pellet_count":164}}],"properties":{"title_stroke_color":[90,87,58,255],"friction":0.75,"max_level":727,"death_timer":480000,"pellet_count":15,"warping_disabled":true,"charge_reduced":true}}'
          loadFile(StellarSquareHard, false, false);
          regionIsLoading = false;
          const newArea = map.areas[player.area],
		            safezone = newArea.zones.filter(e=>e.type == "safe")[0] ?? newArea.zones[0];
          evadesRenderer.minimap.updateZones();
		      player.x=safezone.x + 16 + (safezone.width - 32) * Math.random();
		      player.y=safezone.y + 16 + (safezone.height - 32) * Math.random();
		      player.onTele = true;
        })
      }else
        --player.area,
        super.playerInteraction(player);
    };
  }
}
class Pellet extends SimulatorEntity{
	static colors = ["#b84dd4", "#a32dd8", "#3b96fd", "#43c59b", "#f98f6b", "#61c736"];
	static darkColors = ["#621c74", "#52146e", "#02499a", "#1f654e", "#ab3107", "#30631b"];
	constructor(x,y,radius,pellet_zones){
		super(x,y,null,radius,"pellet",0,0);
		this.color=null;
		this.darkColor=null;
		this.scaleOscillator = new Oscillator(1.1,1.1,1.2,.15,!0);
		this.pellet_zones=pellet_zones;
		this.afterStateUpdate();
	}
	stateFields() {
		return ["x", "y", "radius"]
	}
	afterStateUpdate() {
		if (null === this.color || null === this.darkColor)
			if (Math.random() < 1e-5)
				this.color = "#333333",
				this.darkColor = "#cccccc";
			else {
				const e = Math.floor((Math.abs(this.x) + Math.abs(this.y)) % Pellet.colors.length);
				this.color = Pellet.colors[e],
				this.darkColor = Pellet.darkColors[e]
			}
		setDefaultsFor(this, this.stateFields(), "pellet")
	}
	playerInteraction(player){
		const areaOfZone=this.pellet_zones.map(e=>e.width*e.height),
			sum=areaOfZone.reduce((e,t)=>(e+t)),
			rand=Math.random();
		for(const i in areaOfZone)
			if(void 0!==areaOfZone[i-1])areaOfZone[i]+=areaOfZone[i-1];
		const randZone=this.pellet_zones[areaOfZone.map(e=>(rand<e/sum)).indexOf(true)];
		this.x=randZone.x+randomRange(this.radius,randZone.width-this.radius);
		this.y=randZone.y+randomRange(this.radius,randZone.height-this.radius);
		let resurrectionAbility=player.abilityOne?.abilityType==getAbilityIndex("Resurrection")?player.abilityOne:player.abilityTwo?.abilityType==getAbilityIndex("Resurrection")?player.abilityTwo:player.abilityThree?.abilityType==getAbilityIndex("Resurrection")&&player.abilityThree;
		let resurrectionAbilityCooldown=resurrectionAbility&&resurrectionAbility.cooldown;
		if(player.abilityOne?.pellet_powered)
			player.abilityOne.cooldown-=map.areas[player.area].properties.pellet_multiplier??map.properties.pellet_multiplier;
		if(player.abilityTwo?.pellet_powered)
			player.abilityTwo.cooldown-=map.areas[player.area].properties.pellet_multiplier??map.properties.pellet_multiplier;
		if(player.abilityThree?.pellet_powered)
			player.abilityThree.cooldown-=map.areas[player.area].properties.pellet_multiplier??map.properties.pellet_multiplier;
		if(resurrectionAbility&&resurrectionAbility.cooldown==0&&resurrectionAbilityCooldown!=0)map.areas[player.area].entities.push(new ParticleGenerator(player.x,player.y,"Resurrection Pellet",800,player));
		player.updateExp(Math.floor(1+player.area/3)*(map.areas[player.area].properties.pellet_multiplier??map.properties.pellet_multiplier));
	}
	calculateExperience(HeroLevel){
		return Math.floor(Math.min(HeroLevel,100)*Math.min(HeroLevel+1,101)*2+Math.max(0,HeroLevel*(HeroLevel+1)*(2*HeroLevel-179)/60-3535))
	}
	update(delta,area,players){
		super.update(delta,area,players);
		this.scaleOscillator.update(delta);
	}
	render(e,t) {
		e.beginPath(),
		e.arc(t.getX(this.x), t.getY(this.y), t.toScale(this.radius * this.scaleOscillator.value), 0, 2 * Math.PI, !1),
		settings.tileMode > 1 ? e.fillStyle = this.darkColor : e.fillStyle = this.color,
		e.globalAlpha = 1 - settings.pelletTransparency,
		e.fill(),
		e.closePath(),
		e.globalAlpha = 1
	}
}

class MutatingEnemy extends Enemy{
	static colors = ["#b84dd4", "#a32dd8", "#3b96fd", "#43c59b", "#f98f6b", "#61c736"];
	static darkColors = ["#621c74", "#52146e", "#02499a", "#1f654e", "#ab3107", "#30631b"];
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"mutating_enemy");
    this.scaleOscillator = new Oscillator(1.1,1.1,1.3,.3,!0)
    let v = Math.floor((Math.abs(this.x) + Math.abs(this.y)) % MutatingEnemy.colors.length);
    this.pelletColor = MutatingEnemy.colors[v],
    this.pelletDarkColor = MutatingEnemy.darkColors[v],
    this.endColor = this.color;
    this.inactive = true;
    this.enemy_radius = this.radius;
    this.ogradius = this.radius = 8;
    this.pellet_radius = this.radius;
    this.growingTimeLeft = this.growingTimeTotal = 650;
  }
  lerpColor(e, t, a) {
    const r = parseInt(e.slice(1, 3), 16)
      , c = parseInt(e.slice(3, 5), 16)
      , o = parseInt(e.slice(5, 7), 16)
      , n = parseInt(t.slice(1, 3), 16)
      , $ = parseInt(t.slice(3, 5), 16)
      , i = parseInt(t.slice(5, 7), 16)
      , d = Math.round(r + a * (n - r))
      , s = Math.round(c + a * ($ - c))
      , f = Math.round(o + a * (i - o));
    return `#${d.toString(16).padStart(2, "0")}${s.toString(16).padStart(2, "0")}${f.toString(16).padStart(2, "0")}`
  }
  update(delta, area, players) {
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      let activeZones = map.areas[this.area].zones.filter(e=>e.type==="active");
      information = [];
      for(const activeZone of activeZones){
        if(rectCircleCollision(mouseEntity.x,mouseEntity.y,1,activeZone.x,activeZone.y,activeZone.width,activeZone.height).c){
          information = [mouseEntity];
          break;
        }
      }
    }
    var distance_x;
    var distance_y;
    var distance;
    var target_angle=this.angle;
    if(this.inactive) {
      for(var entity of information){
        distance_x = this.x - entity.x;
        distance_y = this.y - entity.y;
        distance = distance_x**2 + distance_y**2
        if(distance > 200**2)continue;
        this.inactive = false;
        break;
      }
    } else {
      let will_deactivate = true;
      for(var entity of information){
        distance_x = this.x - entity.x;
        distance_y = this.y - entity.y;
        distance = distance_x**2 + distance_y**2
        if(distance > 1000**2)continue;
        will_deactivate = false;
        break;
      }
      if(will_deactivate)this.inactive = true;
    }
    this.growingTimeLeft -= Math.pow(-1,this.inactive)*delta;
    this.growingTimeLeft = clamp(this.growingTimeLeft,0,this.growingTimeTotal);
    this.ogradius = this.radius = this.pellet_radius + (this.enemy_radius - this.pellet_radius) * (1 - this.growingTimeLeft / this.growingTimeTotal);
    this.speedMultiplier *= 1 - (this.growingTimeLeft / this.growingTimeTotal) ** 2;
    super.update(delta, area, players);
  }
	render(e, t, delta) {
		if (this.inactive) {
			if (this.growingTimeLeft < this.growingTimeTotal) {
				const a = 1 - this.growingTimeLeft / this.growingTimeTotal;
				return this.color = this.lerpColor(this.pelletColor, this.endColor, a),
				super.render(e, t, delta)
			}
			return this.color !== this.pelletColor && (this.color = this.pelletColor),
			e.beginPath(),
			e.arc(t.getX(this.x), t.getY(this.y), t.toScale(this.radius * this.scaleOscillator.value), 0, 2 * Math.PI, !1),
			e.fillStyle = this.color,
			e.globalAlpha = 1 - settings.pelletTransparency,
			e.fill(),
			e.globalAlpha = 1,
			e.closePath(),
			void this.scaleOscillator.update(delta)
		}
		if (this.growingTimeLeft > 0) {
			const e = 1 - this.growingTimeLeft / this.growingTimeTotal;
			this.color = this.lerpColor(this.pelletColor, this.endColor, e)
		} else
			this.color !== this.endColor && (this.color = this.endColor);
		e.fillStyle = this.color,
		super.render(e, t, delta)
	}
}
class TreeEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"tree_enemy");
    this.release_interval = 4400;
    this.v_releaseInterval = 4400;
    this.release_time = Math.random() * this.release_interval;
    this.clock = 0;
  }
  update(delta,area,players){
    if(!this.MultiplierEffects.filter(e=>e.speedMult==0).length)
	  this.release_time -= delta;
	  this.clock += delta;
    if (this.release_time < 0) {
      if(this.energy > 0){
        var count = Math.floor(Math.random()*7)+2
        for (var i = 0; i < count; i++) {
		      var projectile=new LeafProjectile(this.x,this.y,EvadesConfig.defaults.leaf_projectile.radius,EvadesConfig.defaults.leaf_projectile.speed,i*180/(count/2));
		      projectile.area=this.area;projectile.z=this.z;
          area.entities.push(projectile);
        }
      }
      this.v_releaseInterval = this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy;
      this.release_time=this.v_releaseInterval;
    }
    if(this.release_time < this.release_interval / 10){
      this.speedMultiplier *= Math.sin(this.clock / 20)
    } else {
      this.speedMultiplier *= Math.max(Math.sin(this.clock / 200),0)
    }
	super.update(delta,area,players);
  }
}
class LeafProjectile extends Enemy{
	constructor(x,y,radius,speed,angle){
		super(x,y,radius,speed,angle,"leaf_projectile");
		this.immune=true;
		this.isProjectile=true;
		this.clock=0;
		this.dir=this.speed/150;
	}
	onCollide(){
		this.remove=true;
	}
	playerInteraction(player,delta){
		this.remove=true;
		super.playerInteraction(player,delta);
	}
	update(delta,area,players){
		this.clock+=delta;
		this.velangle();
		this.angle += this.dir/30 * (delta/30);
		this.anglevel();
		if(this.clock>1700){
			this.remove = true;
		}
		super.update(delta,area,players);
	}
}
class SnowballProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,area){
    super(x,y,radius,speed,angle,"snowball_projectile");
	  this.showOnMap=true;
	  this.area=area;
	  this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8("entities/snowball_projectile");
	  this.immune=true;
	  this.outline=false;
	  this.clock=0;
    this.pixelsTraveled = 0;
  }
  playerInteraction(player){
	  if(!player.isDowned()){
	  	player.isSnowballed=true;
	  	player.snowballedTimeLeft=player.snowballedTime;
	  	this.remove=true;
	  }
  }
  update(delta,area,players){
    this.pixelsTraveled+=this.speed*delta/1e3;
    if(this.pixelsTraveled>=3200)
      this.remove=true;
	  super.update(delta,area,players);
  }
}
class ReanimateProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,area){
    super(x,y,radius,speed,angle,"reanimate_projectile");
	  this.showOnMap = true;
	  this.area = area;
    this.immune = true;
	  this.outline = false;
	  this.pixelsTraveled = 0;
  }
  onCollide(){
	  this.remove = true;
  }
  playerInteraction(player){
  	if(player.isDowned())player.deathTimer=-1;
  }
  update(delta,area,players){
  	this.pixelsTraveled+=this.speed*delta/1e3;
    if(this.pixelsTraveled>=1280)
      this.remove=true;
	  super.update(delta,area,players);
  }
}
class ReverseProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,area,owner){
    super(x,y,radius,speed,angle,"reverse_projectile");
	this.showOnMap=true;
	this.area=area;
	this.owner=owner;
    this.immune=true;
	this.outline=false;
	this.touchedEntities=[];
	this.pixelsTraveled=0;
  }
  playerInteraction(){}
  update(delta,area,players){
	for(const entity of area.entities){
		if(entity.immune||!(entity instanceof Enemy))continue;
		if(distance(this,entity)<this.radius+entity.radius&&this.touchedEntities.indexOf(entity)==-1){
			if(!entity.healingTime || entity.healingTime<3700){
				area.entities.filter(e=>(e.owner==this.owner && e instanceof ReverseProjectile)).map(e=>this.touchedEntities.push(entity));
				if(!entity.movement_immune){
					entity.velX*=-1;
					entity.velY*=-1;
					entity.velangle();
					entity.target_angle=entity.angle;
				}
				entity.healingTime=4e3;
				entity.isHarmless=true;
			}
		}
	}
	this.pixelsTraveled+=this.speed*delta/1e3;
  if(this.pixelsTraveled>350)this.remove=true;
	super.update(delta,area,players);
  }
}
class MinimizeProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,area,owner){
    super(x,y,radius,speed,angle,"minimize_projectile");
	this.showOnMap=true;
	this.area=area;
	this.owner=owner;
    this.immune=true;
	this.outline=false;
	this.touchedEntities=[];
	this.pixelsTraveled=0;
  }
  playerInteraction(){}
  update(delta,area,players){
	for(const entity of area.entities){
		if(entity.immune||!(entity instanceof Enemy))continue;
		if(distance(this,entity)<this.radius+entity.radius&&this.touchedEntities.indexOf(entity)==-1){
			if(entity.MultiplierEffects.some(e=>e.type=="minimized")){
				const MinimizeFX=entity.MultiplierEffects.find(e=>e.type=="minimized");
				MinimizeFX.time=-4;
				MinimizeFX.radiusMult=0.5;
				if(!entity.movement_immune)MinimizeFX.speedMult=0.25;
			}else{
				const newEffect={type:"minimized",auraMult:0.5,radiusMult:0.5,time:-4};
				if(!entity.movement_immune)newEffect.speedMult=0.25;
				entity.MultiplierEffects.push(newEffect);
			}
		}
	}
	this.pixelsTraveled+=this.speed*delta/1e3;
  if(this.pixelsTraveled>450)this.remove=true;
	super.update(delta,area,players);
  }
}
class ImmuneEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"immune_enemy");
    this.immune=true;
  }
}
class CorrosiveEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"corrosive_enemy");
    this.corrosive=true;
  }
}
class ExperienceDrainEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.experience_drain_radius){
    super(x,y,radius,speed,angle,"experience_drain_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class BlockingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.blocking_radius){
    super(x,y,radius,speed,angle,"blocking_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class SlowingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.slowing_radius,slow){
    super(x,y,radius,speed,angle,"slowing_enemy");
	this.auraRadius=aura_radius;
	this.slow=slow;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class MagneticReductionEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.magnetic_reduction_radius){
    super(x,y,radius,speed,angle,"magnetic_reduction_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class MagneticNullificationEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.magnetic_nullification_radius){
    super(x,y,radius,speed,angle,"magnetic_nullification_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class FreezingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.freezing_radius){
    super(x,y,radius,speed,angle,"freezing_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class DrainingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.draining_radius,drain){
    super(x,y,radius,speed,angle,"draining_enemy");
	this.auraRadius=aura_radius;
	this.drain=drain;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class LavaEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.lava_radius){
    super(x,y,radius,speed,angle,"lava_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class ToxicEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.toxic_radius){
    super(x,y,radius,speed,angle,"toxic_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class EnlargingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.enlarging_radius){
    super(x,y,radius,speed,angle,"enlarging_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class ReducingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.reducing_radius){
    super(x,y,radius,speed,angle,"reducing_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class SlipperyEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.slippery_radius){
    super(x,y,radius,speed,angle,"slippery_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class BarrierEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.barrier_radius){
    super(x,y,radius,speed,angle,"barrier_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
	this.immune=true;
  }
}
class ElectricalEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"electrical_enemy");
	  this.didShootProjectile=false;
  }
  generate_entities(delta,area){
	  if(!this.didShootProjectile){
			const projectile=new ElectricalEnemyProjectile(this.x, this.y, this.radius / 2, this.speed * 2);
      projectile.EntityTarget=this;
			projectile.area=this.area;
      projectile.z=this.z;
      area.entities.push(projectile)
      this.didShootProjectile=true;
	  }
  }
  update(delta,area,players) {
	  this.generate_entities(delta,area);
    super.update(delta,area,players);
  }
}
class ElectricalEnemyProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"electrical_enemy_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.EntityTarget=null;
    this.touched_electrical_enemies=[];
	  this.enemy_projectile=true;
  }
  update(delta,area,players){
    let ElectricalEnemies = area.entities.filter(e=>(e instanceof ElectricalEnemy&&e.z===this.z)).sort((e,t)=>distance(e,this)-distance(t,this));
    let maxLength = Math.min(ElectricalEnemies.length,3)-1;
    if(maxLength!=-1){
      if(distance(this.EntityTarget,this)<this.radius){
        this.touched_electrical_enemies=this.touched_electrical_enemies.filter(e=>!e.remove);
        if(!this.EntityTarget.remove)this.touched_electrical_enemies.push(this.EntityTarget);
        if(this.touched_electrical_enemies.length>maxLength)this.touched_electrical_enemies.shift();
        this.EntityTarget=ElectricalEnemies.find(e=>-1===this.touched_electrical_enemies.indexOf(e))||null;
      }
      this.angle=Math.atan2(this.EntityTarget.y-this.y,this.EntityTarget.x-this.x);
      this.anglevel();
    }else{
      this.radiusMultiplier*=5;
      this.speedMultiplier=0;
    }
    super.update(delta,area,players);
  }
}
class SparkingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"sparking_enemy");
  	this.reset_parameters();
  }
  reset_parameters(){
	  this.release_interval=200;
	  this.release_time=0;
	  this.release_ready=true;
  }
  generate_entities(delta,area){
	  if(!this.release_ready){
		  this.release_time -= delta;
		  if(this.release_time <= 0)this.release_ready=true;
	  }else{
			const projectile=new SparkingEnemyProjectile(this.x,this.y,EvadesConfig.defaults.sparking_enemy_projectile.radius,this.speed*2);
			projectile.area=this.area;
      projectile.z=this.z;
      area.entities.push(projectile)
      this.release_time = this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy;
			this.release_ready=false;
	  }
  }
  update(delta,area,players) {
	  this.generate_entities(delta,area);
    super.update(delta,area,players);
  }
}
class RadarEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,radar_radius=defaultValues.spawner.radar_radius){
    super(x,y,radius,speed,angle,"radar_enemy");
	this.radar_radius=radar_radius;
	this.effects.push({radius:radar_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
	this.reset_parameters();
  }
  reset_parameters(){
	this.release_interval=250;
	this.release_time=this.release_interval;
	this.release_ready=false;
  }
  generate_entities(delta,area,players){
	  if(!this.release_ready){
		  this.release_time -= delta;
		  if(this.release_time <= 0)this.release_ready=true;
	  }else{
		  if(this.force_aura_off)
			  return;
		  let closest_entity=null,
		  closest_entity_distance=null,distance,distance_x,distance_y;
		  let active_players = players.filter(e=>{return !e.isDowned()&&!e.safeZone});
		  for(let entity of active_players){
			  if(entity.nightActivated||entity.effectImmune==0||!entity.movement_involved)continue;
			distance_x = this.x - entity.x,
			distance_y = this.y - entity.y,
			distance = distance_x**2 + distance_y**2;
			if(distance > (this.radar_radius * this.energy/this.maxEnergy)**2)continue;
			if(closest_entity==void 0){
				closest_entity=entity;
				closest_entity_distance = distance;
			}else if(closest_entity_distance>distance){
				closest_entity=entity;
				closest_entity_distance = distance;
			}
		  }
          if(closest_entity!=void 0){
            distance_x = this.x - closest_entity.x;
            distance_y = this.y - closest_entity.y;
			const projectile=new RadarProjectile(this.x,this.y,this.radius/3,EvadesConfig.defaults.radar_projectile.speed+this.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180,this);
			projectile.area=this.area;projectile.z=this.z;
            area.entities.push(projectile)
            this.release_time = this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy;
			this.release_ready=false;
          }
	  }
  }
  update(delta,area,players) {
	  this.generate_entities(delta,area,players);
    super.update(delta,area,players);
  }
}
class SparkingEnemyProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"sparking_enemy_projectile");
    this.immune=true;
	  this.shadow_total_time=0;
	  this.shadow_time=0;
  	this.isProjectile=true;
	  this.enemy_projectile=true;
    this.pixelsTraveled = 0;
  }
  update(delta,area,players) {
    this.pixelsTraveled += delta / 1e3;
	  if(this.pixelsTraveled > 0.2)
      this.remove=true;
    super.update(delta,area,players);
  }
}
class RadarProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner){
    super(x,y,radius,speed,angle,"radar_projectile");
	  this.owner=owner;
    this.immune=true;
	  this.shadow_total_time=0;
	  this.shadow_time=0;
  	this.isProjectile=true;
	  this.enemy_projectile=true;
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    super.update(delta,area,players);
	var distance_x=this.x-this.owner.x;
	var distance_y=this.y-this.owner.y;
	var dist=distance_y**2+distance_x**2;
	if(dist>(this.owner.radar_radius*this.owner.energy/this.owner.maxEnergy)**2){
		this.remove=true;
	}
  }
}
class GravityEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.gravity_radius,gravity){
    super(x,y,radius,speed,angle,"gravity_enemy");
	  this.auraRadius=aura_radius;
	  this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
	  this.gravity=gravity;
  }
}
class ThunderboltEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,0,angle,"thunderbolt_enemy");
    this.visualRadius = this.radius * 2;
    this.staticSpeed = speed;
    this.ground_time_left = 0;
    this.ground_time_total = 1000;
    this.falling_time_left = 0;
    this.falling_time_total = 3000;
    this.isHarmless = true;
    this.harmlessTime = this.falling_time_total / (this.staticSpeed / 150);
    this.visualRadius = this.radius * (1 + (this.falling_time_left / this.falling_time_total))
  }
  update(delta,area,players){
    let speed_mult = 1;
    this.MultiplierEffects.map(e=>{
      speed_mult *= e.speedMult ?? 1;
    });
    this.falling_time_left -= delta * this.staticSpeed * speed_mult / 150;
    if(this.falling_time_left <= 0) {
      this.falling_time_left = 0;
      this.ground_time_left -= delta;
    }
    if(this.ground_time_left <= 0) {
      let RandomDir = Math.PI * 2 * Math.random();
      let RandomMag = (Math.random() * this.staticSpeed * speed_mult / 30 * 32) + this.radius;
      this.x += Math.cos(RandomDir) * RandomMag;
      this.y += Math.sin(RandomDir) * RandomMag;
      this.isHarmless = true;
      this.falling_time_left = this.falling_time_total;
      this.ground_time_left = this.ground_time_total;
    }
    this.harmlessTime = this.falling_time_left / (this.staticSpeed * speed_mult / 150);
    this.visualRadius = this.radius * (1 + (this.falling_time_left / this.falling_time_total))
	  super.update(delta,area,players);
  }
}
class BlindEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"blind_enemy");
  }
  playerInteraction(player,delta){if(player.movement_involved)EnemyPlayerInteraction(player,this,this.corrosive,this.isHarmless,this.immune)}
}
class GravityGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"gravity_ghost_enemy");
	this.isHarmless=true;
	this.disabled=true;
	this.immune=true;
	this.gravity=12;
  }
  playerInteraction(player,delta){
	if (!player.isInvulnerable) {
      var dx = player.x-this.x;
      var dy = player.y-this.y;
      var dist = distance({x:0,y:0},{x:dx,y:dy});
      var attractionAmplitude = Math.pow(2,-dist/100);
      var moveDist = this.gravity*attractionAmplitude;
      var angleToPlayer = Math.atan2(dy,dx);
      player.x -= (moveDist * Math.cos(angleToPlayer)) * (delta / (1000 / 30));
      player.y -= (moveDist * Math.sin(angleToPlayer)) * (delta / (1000 / 30));
	    player.collision(0);
    }
  }
}
class RepellingGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"repelling_ghost_enemy");
	this.isHarmless=true;
	this.disabled=true;
	this.immune=true;
	this.gravity=12;
  }
  playerInteraction(player,delta){
	if (!player.isInvulnerable) {
      var dx = player.x - this.x;
      var dy = player.y - this.y;
      var dist = distance({x:0,y:0},{x:dx,y:dy});
      var attractionAmplitude = Math.pow(2, -(dist / 100));
      var moveDist = (this.gravity * attractionAmplitude);
      var angleToPlayer = Math.atan2(dy, dx);
      player.x += (moveDist * Math.cos(angleToPlayer)) * (delta / (1000 / 30));
      player.y += (moveDist * Math.sin(angleToPlayer)) * (delta / (1000 / 30));
	  player.collision(0);
    }
  }
}
class RepellingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.repelling_radius,repulsion){
    super(x,y,radius,speed,angle,"repelling_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
	this.repulsion=repulsion;
  }
}
class PositiveMagneticGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"positive_magnetic_ghost_enemy");
	this.isHarmless=true;
	this.immune=true;
	this.disabled=true;
  }
  playerInteraction(player){
	if(player.magnetDirection=="DOWN"){
		player.magnetDirection="UP";
		if(player.abilityOne.abilityType==getAbilityIndex("Magnetism Down")){
			player.abilityOne.abilityType=getAbilityIndex("Magnetism Up");
			player.abilityOne.name=abilityConfig[player.abilityOne.abilityType].name;
		};
		if(player.abilityTwo.abilityType==getAbilityIndex("Magnetism Down")){
			player.abilityTwo.abilityType=getAbilityIndex("Magnetism Up");
			player.abilityTwo.name=abilityConfig[player.abilityTwo.abilityType].name;
		};
		if(player.abilityThree){
			if(player.abilityThree.abilityType==getAbilityIndex("Magnetism Down")){
				player.abilityThree.abilityType=getAbilityIndex("Magnetism Up");
				player.abilityThree.name=abilityConfig[player.abilityThree.abilityType].name;
			};
		};
	}
  }
}
class NegativeMagneticGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"negative_magnetic_ghost_enemy");
	this.isHarmless=true;
	this.immune=true;
	this.disabled=true;
  }
  playerInteraction(player){
	if(player.magnetDirection=="UP"){
		player.magnetDirection="DOWN";
		if(player.abilityOne.abilityType==getAbilityIndex("Magnetism Up")){
			player.abilityOne.abilityType=getAbilityIndex("Magnetism Down");
			player.abilityOne.name=abilityConfig[player.abilityOne.abilityType].name;
		};
		if(player.abilityTwo.abilityType==getAbilityIndex("Magnetism Up")){
			player.abilityTwo.abilityType=getAbilityIndex("Magnetism Down");
			player.abilityTwo.name=abilityConfig[player.abilityTwo.abilityType].name;
		};
		if(player.abilityThree){
			if(player.abilityThree.abilityType==getAbilityIndex("Magnetism Up")){
				player.abilityThree.abilityType=getAbilityIndex("Magnetism Down");
				player.abilityThree.name=abilityConfig[player.abilityThree.abilityType].name;
			};
		};
	}
  }
}
class DisablingGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"disabling_ghost_enemy");
	this.isHarmless=true;
	this.immune=true;
	this.disabled=true;
  }
  playerInteraction(player){
	player.disabling=true;
  }
}
class SpeedGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"speed_ghost_enemy");
	  this.isHarmless=true;
	  this.immune=true;
	  this.disabled=true;
  }
  playerInteraction(player){
	  if(!player.speedghost && !player.hasAbility("Speed Sniper")){
	    player.speedghost=true;
	  }
  }
}
class SummonerEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,spawner){
    super(x,y,radius,speed,angle,"summoner_enemy");
	  this.isHarmless=true;
    this.spawner=spawner;
    this.duration = 500;
	  this.disabled = true;
  }
  playerInteraction(e){
    if(!this.Disappear && !this.immune && !e.isDowned() && !e.safeZone){
      SpawnerSpawn(this.spawner,this,this.z,this.area);
      this.Disappear=true;
    }
  }
  update(delta,area,players){
    if(this.Disappear)this.duration-=delta;
    if(this.duration<=0)this.remove=true,this.duration=0;
    super.update(delta,area,players);
  }
}
class IceGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"ice_ghost_enemy");
	this.isHarmless=true;
	this.immune=true;
	this.disabled=true;
  }
  playerInteraction(player){
	  if(!player.isIced && !player.hasAbility("Ice Sniper")){
	    player.isIced=true;
	    player.icedTimeLeft=150;
	  }
  }
}
class PoisonGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"poison_ghost_enemy");
	this.isHarmless=true;
	this.immune=true;
	this.disabled=true;
  }
  playerInteraction(player){
	if(!player.isPoisoned){
	  player.isPoisoned=true;
	  player.poisonedTimeLeft=150;
	}
  }
}
class RegenGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"regen_ghost_enemy");
	this.isHarmless=true;
	this.immune=true;
	this.disabled=true;
  }
  playerInteraction(player){
	  if(!player.regenghost&&!player.hasAbility("Regen Sniper"))
	    player.regenghost=true;
  }
}
class DisablingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.disabling_radius){
    super(x,y,radius,speed,angle,"disabling_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
  }
}
class QuicksandEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,aura_radius=defaultValues.spawner.quicksand_radius,strength){
    super(x,y,radius,speed,angle,"quicksand_enemy");
	this.auraRadius=aura_radius;
	this.effects.push({radius:aura_radius,effectType:getEffectIndex("Enemy "+capitaliseName(this.type.replace("_enemy","")))})
	this.quicksand_strength=strength;
  }
}
class SandEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"sand_enemy");
	this.sandSpeed=1;
  }
  update(delta,area,players){
	if(this.sandSpeed<3){
		this.sandSpeed+=0.9*delta/1e3;
	}
	this.speedMultiplier*=this.sandSpeed;
    super.update(delta,area,players);
  }
  onCollide(){
	this.sandSpeed=0;
  }
}
class SandrockEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"sandrock_enemy");
	this.sandrockSpeed=1;
  }
  update(delta,area,players){
	if(this.sandrockSpeed>=0.1){
		this.sandrockSpeed-=0.3*delta/1e3;
	}
	this.speedMultiplier*=this.sandrockSpeed;
    super.update(delta,area,players);
  }
  onCollide(){
	this.sandrockSpeed=1;
  }
}
class ChargingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"charging_enemy");
	this.chargingSpeed=1;
  }
  update(delta,area,players){
	if(this.chargingSpeed<2.5){
		this.chargingSpeed+=1.5*delta/1e3;
	}
	if(this.provoked){
		this.provokedTime-=delta;
	}
	if(this.provokedTime<=0){
		this.provoked=false;
	}
	this.speedMultiplier*=this.chargingSpeed;
    super.update(delta,area,players);
  }
  onCollide(){
	  this.velangle();
    var closest_entity,closest_entity_distance,information;
    if(map.players.length){
      information = map.players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else{
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    var target_angle=this.angle;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 250**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      target_angle = modulus(Math.atan2(distance_y,distance_x)+Math.PI,Math.PI*2);
	  this.angle=target_angle;
	  this.provoked=true;
	  this.provokedTime=1500;
	  this.chargingSpeed=1;
    }else{
      target_angle = this.angle;
	  this.chargingSpeed=0;
    }
	this.anglevel();
  }
}
class SlasherEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,slash_range){
    super(x,y,radius,speed,angle,"slasher_enemy");
	  this.speed=Math.abs(this.speed);
	  this.slash_radius=slash_range;
    this.slashInterval=3000;
    this.slashing=false;
    this.slashTime=1500;
  }
  onCollide(){
    this.target_angle=this.angle=Math.atan2(this.velY,this.velX);
  }
  update(delta,area,players) {
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    var target_angle;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > this.slash_radius**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0 && this.slashTime <= 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      this.angle=modulus(Math.atan2(distance_y,distance_x)+Math.PI,Math.PI*2);
      this.anglevel();
      this.slashing = true;
      this.slashTime += this.slashInterval;
    }else if(this.slashTime > 0){
      this.slashTime -= delta;
    }
    if(this.slashing && this.slashTime <= 2900)this.slashing=false;
    super.update(delta,area,players);
  }
}
class HomingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,reverse,home_range,increment){
    super(x,y,radius,speed,angle,"homing_enemy");
    this.reverse=reverse;
	this.speed=Math.abs(this.speed);
	this.anglevel();
	this.home_range=home_range;
	this.increment=increment;
  }
  onCollide(){
    this.target_angle=this.angle=Math.atan2(this.velY,this.velX);
  }
  update(delta,area,players) {
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    var target_angle;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > this.home_range**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      target_angle = modulus(Math.atan2(distance_y,distance_x)+(Math.PI*!this.reverse),Math.PI*2);
    }else {
      target_angle = this.target_angle;
    }
    var angle_difference = modulus(this.angle - target_angle,Math.PI*2)
    var angle_increment = this.increment*delta/1000;
    if(angle_difference<angle_increment){
    }else if(angle_difference < Math.PI){
      this.angle-=angle_increment;
      this.anglevel();
    }else{
      this.angle+=angle_increment;
      this.anglevel();
    }
    super.update(delta,area,players);
  }
}
class PennyEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"penny_enemy");
    this.reset_parameters();
  }
  reset_parameters(){
    this.prepare_speed = this.speed / 4;
    this.lurch_speed = this.speed;
    this.normal_speed = 0;

    this.time_to_prepare = 150;
    this.time_to_lurch = 650;
    this.time_between_lurches = 0;
    
    this.time_preparing = 0;
    this.time_lurching = 0;
    this.time_since_last_lurch = this.time_between_lurches;
    this.compute_speed();
  }
  compute_speed(){
    this.anglevel();
  }
  update_parameters(delta,area,players){
    if(this.time_preparing == 0){
      if(this.time_lurching == 0){
        if(this.time_since_last_lurch < this.time_between_lurches)
          this.time_since_last_lurch += delta;
      	else {
          this.time_since_last_lurch = 0;
          this.time_preparing += delta;
          this.speed = this.prepare_speed;
          this.compute_speed();
        }
      } else {
        this.time_lurching += delta;
        if (this.time_lurching > this.time_to_lurch){
          this.time_lurching = 0;
          this.speed = this.normal_speed;
        } else {
          this.speed = this.lurch_speed * ( 1 - (this.time_lurching / this.time_to_lurch ) ** 5 );
        }
        this.compute_speed();
      }
    } else {
      this.time_preparing += delta;
      if (this.time_preparing > this.time_to_prepare){
        this.time_preparing = 0;
        this.time_lurching += delta;
        this.speed = this.lurch_speed;
      } else {
        this.speed = this.prepare_speed * ( 1 - (this.time_lurching / this.time_to_lurch) );
      }
      this.compute_speed();
    }
  }
  update(delta,area,players){
    this.update_parameters(delta,area,players);
    super.update(delta,area,players);
  }
  onCollide(){
    this.velangle();
  }
}
class PennySwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"penny_switch_enemy");
    this.reset_parameters();
    this.switch_inverval = 3e3;
		this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  reset_parameters(){
    this.prepare_speed = this.speed / 4;
    this.lurch_speed = this.speed;
    this.normal_speed = 0;

    this.time_to_prepare = 150;
    this.time_to_lurch = 650;
    this.time_between_lurches = 0;
    
    this.time_preparing = 0;
    this.time_lurching = 0;
    this.time_since_last_lurch = this.time_between_lurches;
    this.compute_speed();
  }
  compute_speed(){
    this.anglevel();
  }
  update_parameters(delta,area,players){
    if(this.time_preparing == 0){
      if(this.time_lurching == 0){
        if(this.time_since_last_lurch < this.time_between_lurches)
          this.time_since_last_lurch += delta;
      	else {
          this.time_since_last_lurch = 0;
          this.time_preparing += delta;
          this.speed = this.prepare_speed;
          this.compute_speed();
        }
      } else {
        this.time_lurching += delta;
        if (this.time_lurching > this.time_to_lurch){
          this.time_lurching = 0;
          this.speed = this.normal_speed;
        } else {
          this.speed = this.lurch_speed * ( 1 - (this.time_lurching / this.time_to_lurch ) ** 5 );
        }
        this.compute_speed();
      }
    } else {
      this.time_preparing += delta;
      if (this.time_preparing > this.time_to_prepare){
        this.time_preparing = 0;
        this.time_lurching += delta;
        this.speed = this.lurch_speed;
      } else {
        this.speed = this.prepare_speed * ( 1 - (this.time_lurching / this.time_to_lurch) );
      }
      this.compute_speed();
    }
  }
  update(delta,area,players){
    this.update_parameters(delta,area,players);
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	    this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
  onCollide(){
    this.velangle();
  }
}
class DasherEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"dasher_enemy");
    this.reset_parameters();
  }
  reset_parameters(){
    this.prepare_speed = this.speed / 5;
    this.dash_speed = this.speed;
    this.normal_speed = 0;

    this.time_to_prepare = 750;
    this.time_to_dash = 3000;
    this.time_between_dashes = 750;
    
    this.time_preparing = 0;
    this.time_dashing = 0;
    this.time_since_last_dash = this.time_between_dashes;
    this.compute_speed();
  }
  compute_speed(){
    this.anglevel();
  }
  update_parameters(delta,area,players){
    if(this.time_preparing == 0){
      if(this.time_dashing == 0){
        if(this.time_since_last_dash < this.time_between_dashes)
          this.time_since_last_dash += delta;
	      else {
          this.time_since_last_dash = 0;
          this.time_preparing += delta;
          this.speed = this.prepare_speed;
          this.compute_speed();
        }
      } else {
        this.time_dashing += delta;
        if (this.time_dashing > this.time_to_dash){
          this.time_dashing = 0;
          this.speed = this.normal_speed;
        } else {
          this.speed = this.dash_speed * ( 1 - (this.time_dashing / this.time_to_dash ) );
        }
        this.compute_speed();
      }
    } else {
      this.time_preparing += delta;
      if (this.time_preparing > this.time_to_prepare){
        this.time_preparing = 0;
        this.time_dashing += delta;
        this.speed = this.dash_speed;
      } else {
        this.speed = this.prepare_speed * ( 1 - (this.time_preparing / this.time_to_prepare) );
      }
      this.compute_speed();
    }
  }
  update(delta,area,players){
    this.update_parameters(delta,area,players);
    super.update(delta,area,players);
  }
  onCollide(){
    this.velangle();
  }
}
class TeleportingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,42,angle,"teleporting_enemy");
    this.pause_interval = 1400 / (speed / 30);
    this.pause_time = this.pause_interval;
  }
  update(delta,area,players){
    this.pause_time -= delta;
    if(this.pause_time <= 0)this.pause_time += this.pause_interval;else this.speedMultiplier = 0;
	  if(this.healingTime>0)this.healingTime-=delta;
	  this.MultiplierEffects.map(e=>{
	  	if(e.time>=0){
	  		if(e.speedMult!=void 0)e.speedMult=(e.speedMult+0.015)*Math.pow(0.425,delta/1e3);
	  		if(e.radiusMult!=void 0)e.radiusMult=(e.radiusMult+0.015)*Math.pow(0.425,delta/1e3);
	  	};
	  	this.effects.map(t=>{
	  		var type=t.effectType;
	  		if(type>=getEffectIndex("Enemy Slowing")&&type<=getEffectIndex("Enemy Disarming")){
	  			t.ogradius??=t.radius;
	  			t.radius=t.ogradius*(e.auraMult??1);
	  			if(e.radiusMult>1)t.radius=t.ogradius;
	  		}
	  	})
	  	e.time+=delta/1e3;
	  	if(e.speedMult>1)e.speedMult=1;
	  	if(e.radiusMult>1)e.radiusMult=1;
	  	(e.speedMult!=void 0)&&(this.speedMultiplier*=e.speedMult);
	  	(e.radiusMult!=void 0)&&(this.radiusMultiplier*=e.radiusMult);
	  });
	  this.MultiplierEffects=this.MultiplierEffects.filter(e=>{
	  	return e.speedMult < 1 || e.radiusMult < 1;
	  });
	  this.radius=this.ogradius*this.radiusMultiplier;
	  this.radiusMultiplier=1;
    this.x+=this.velX*this.speedMultiplier;
    this.y+=this.velY*this.speedMultiplier;
    this.speedMultiplier=1;
    this.collision(delta,players,true);
  }
}
class StarEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed*21,angle,"star_enemy");
    this.clock = 0;
  }
  onCollide(){
    this.velX *= -1;
    this.velY *= -1;
  }
  update(delta,area,players){
	  this.MultiplierEffects.map(e=>{
	  	if(e.time>=0){
	  		if(e.speedMult!=void 0)e.speedMult=(e.speedMult+0.015)*Math.pow(0.425,delta/1e3);
	  		if(e.radiusMult!=void 0)e.radiusMult=(e.radiusMult+0.015)*Math.pow(0.425,delta/1e3);
	  	};
	  	this.effects.map(t=>{
	  		var type=t.effectType;
	  		if(type>=getEffectIndex("Enemy Slowing")&&type<=getEffectIndex("Enemy Disarming")){
	  			t.ogradius??=t.radius;
	  			t.radius=t.ogradius*(e.auraMult??1);
	  			if(e.radiusMult>1)t.radius=t.ogradius;
	  		}
	  	})
	  	e.time+=delta/1e3;
	  	if(e.speedMult>1)e.speedMult=1;
	  	if(e.radiusMult>1)e.radiusMult=1;
	  	(e.speedMult!=void 0)&&(this.speedMultiplier*=e.speedMult);
	  	(e.radiusMult!=void 0)&&(this.radiusMultiplier*=e.radiusMult);
	  });
	  this.MultiplierEffects=this.MultiplierEffects.filter(e=>{
	  	return e.speedMult < 1 || e.radiusMult < 1;
	  });
    this.clock += delta*60 * this.speedMultiplier;
    if (this.clock >= 22e3){
      this.velX *= -1;
      this.velY *= -1;
      this.clock -= 22e3;
      this.speedMultiplier *= 2;
    }else this.speedMultiplier *= 0;
    if(this.healingTime>0)this.healingTime-=delta;
	  this.radius=this.ogradius*this.radiusMultiplier;
	  this.radiusMultiplier=1;
    this.x+=this.velX/30*this.speedMultiplier;
    this.y+=this.velY/30*this.speedMultiplier;
    this.speedMultiplier=1;
    this.collision(delta,players,true);
  }
}
class StaticEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"static_enemy");
    this.clock = 0;
	  this.disabled=false;
	  this.iseffect=false;
  }
  playerInteraction(player){
    if(!this.isHarmless)return EnemyPlayerInteraction(player,this,this.corrosive,this.isHarmless,this.immune);
	  for(var entity of map.areas[player.area].entities){
		  if(entity instanceof StaticEnemy){
			  if(entity==this)continue;
			  if(this.iseffect&&distance(this,entity)<this.radius + entity.radius){
				  this.disabled=false;
				  this.isHarmless=false;
				  EnemyPlayerInteraction(player,this,this.corrosive,this.isHarmless,this.immune);
			  }
		  }
	  }
	  if(!player.isDowned()&&!player.isInvulnerable){
	    this.x=player.x;
	    this.y=player.y;
		  this.assetCollision();
		  this.iseffect=true;
		  this.speedMultiplier=0;
	  }
  }
  update(delta,area,players){
	  if(!this.disabled){
        this.clock += delta
	    if (this.clock > 1e3)this.disabled=true,this.isHarmless=true,this.clock=0;
	  }
	  super.update(delta,area,players);
  }
}
class ZigzagEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"zigzag_enemy");
	  this.zigSpeed=0;
	  this.speeding=true;
	  this.dir=1;
	  this.zigTime=0;
	  this.constantSpeedIncrement=45/7;
	  this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);
	  this.anglevel();
    this.switchAdd=false;
	  this.zigSwitched=false;
    this.turnAngle=Math.PI/2;
  }
  update(delta,area,players){
	  this.zigTime+=delta;
    if (this.zigSpeed < 1.5 && this.speeding) {
      this.zigSpeed += this.constantSpeedIncrement*delta/1e3;
      if(this.zigSpeed > 1.5)this.zigSpeed=1.5,this.speeding=false;
    } else if(this.zigSpeed >= 0 && !this.speeding){
      this.zigSpeed -= this.constantSpeedIncrement*delta/1e3;
	    if(this.zigSpeed < 0)this.zigSpeed=0,this.zigTime>500&&(this.speeding=true,this.zigTime%=500,this.zigSwitched=true);
	  }
	  this.speedMultiplier*=this.zigSpeed;
	  if(this.zigSwitched){
      if (!this.switchAdd) {
        this.angle = Math.atan2(this.velY, this.velX);
        this.angle -= this.turnAngle * this.dir;
        this.velX = Math.cos(this.angle) * this.speed;
        this.velY = Math.sin(this.angle) * this.speed;
	    this.switchAdd=true;
      } else {
        this.angle = Math.atan2(this.velY, this.velX);
        this.angle += this.turnAngle * this.dir;
        this.velX = Math.cos(this.angle) * this.speed;
        this.velY = Math.sin(this.angle) * this.speed;
	    this.switchAdd=false;
      }
	    this.zigSwitched=false;
	  }
    super.update(delta,area,players);
  }
  onCollide(){
	  this.dir*=-1;
  }
}
class ZoningEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"zoning_enemy");
    this.zoneInterval = 1000;
    this.zoneTime = Math.random() * this.zoneInterval;
	this.zoneSpeed=0;
	this.speedIncrement=2.9;
	this.speeding=this.zoneTime < 500;
	this.zoneSwitched=false;
	this.dir=1;
    this.turnAngle = Math.PI / 2
    this.turnAngle *= Math.pow(-1,Math.random()*2|0);
	this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);
	this.anglevel();
  }
  update(delta,area,players){
	this.zoneTime+=delta;
    if (this.zoneSpeed <= 1.45 && this.speeding) {
      this.zoneSpeed = this.zoneTime/1e3*this.speedIncrement;
	  if(this.zoneSpeed >= 1.45)this.zoneSpeed=1.45,this.zoneTime>(29e3/60)&&(this.speeding=false);
    } else if(this.zoneSpeed >= 0 && !this.speeding){
      this.zoneSpeed = 1.45-(this.zoneTime-(29e3/60))/1e3*this.speedIncrement;
	  if(this.zoneSpeed <= 0)this.zoneSpeed=0,this.zoneTime>1000&&(this.speeding=true,this.zoneTime=0,this.zoneSwitched=true);
	}
	this.speedMultiplier*=Math.min(this.zoneSpeed,1.4);
    if (this.zoneSwitched) {
      this.angle = Math.atan2(this.velY, this.velX);
      this.angle += this.turnAngle * this.dir;
      this.velX = Math.cos(this.angle) * this.speed;
      this.velY = Math.sin(this.angle) * this.speed;
	  this.zoneSwitched=false;
    }
    super.update(delta,area,players);
  }
  onCollide(){
	  this.dir *=-1;
  }
}
class SpiralEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"spiral_enemy");
    this.angleIncrement = 0.15;
    this.angleIncrementChange = 0.12;
    this.angleAdd = false;
    this.dir = 1
  }
  update(delta,area,players) {
    if (this.angleIncrement < 0.001) {
      this.angleAdd = true;
    } else if (this.angleIncrement > 0.35) {
      this.angleAdd = false;
    }
    if (this.angleIncrement < 0.05) {
      this.angleIncrementChange = 0.066;
    } else {
      this.angleIncrementChange = 0.12;
    }
    if (this.angleAdd) {
      this.angleIncrement += this.angleIncrementChange * (delta / 1000);
    } else {
      this.angleIncrement -= this.angleIncrementChange * (delta / 1000);
    }
    this.velangle();
    this.angle += this.angleIncrement * this.dir * (delta / (1000 / 30));
    this.anglevel();
    super.update(delta,area,players);
  }
  onCollide(){
    this.dir *= -1; 
  }
}
class SizingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"sizing_enemy");
    this.growing = true;
	this.sizing_bound_multiplier = 2.5;
	this.sizing_changing_speed = 0.04;
	this.sizing_upper_bound = this.sizing_bound_multiplier;
	this.sizing_lower_bound = 1 / this.sizing_bound_multiplier;
	this.sizing_multiplier = this.sizing_lower_bound;
  }
  update(delta,area,players){
	if (this.growing) {
		this.sizing_multiplier += this.sizing_changing_speed * delta / (1000 / 30);
		if (this.sizing_multiplier > this.sizing_upper_bound) {
			this.growing = false;
		}
	} else {
		this.sizing_multiplier -= this.sizing_changing_speed * delta / (1000 / 30);
		if (this.sizing_multiplier < this.sizing_lower_bound) {
			this.growing = true;
		}
	}
	this.radiusMultiplier*=this.sizing_multiplier;
	super.update(delta,area,players);
  }
}
class OscillatingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"oscillating_enemy");
    this.zoneInterval = 1000;
    this.zoneTime = Math.random() * this.zoneInterval;
	  this.zoneSpeed=0;
  	this.speedIncrement=2.9;
	  this.speeding=this.zoneTime < 500;
	  this.zoneSwitched=false;
  }
  update(delta,area,players){
	  this.zoneTime+=delta;
    if (this.zoneSpeed <= 1.45 && this.speeding) {
      this.zoneSpeed = this.zoneTime/1e3*this.speedIncrement;
	    if(this.zoneSpeed >= 1.45)this.zoneSpeed=1.45,this.zoneTime>(29e3/60)&&(this.speeding=false);
    } else if(this.zoneSpeed >= 0 && !this.speeding){
      this.zoneSpeed = 1.45-(this.zoneTime-(29e3/60))/1e3*this.speedIncrement;
	    if(this.zoneSpeed <= 0)this.zoneSpeed=0,this.zoneTime>1000&&(this.speeding=true,this.zoneTime=0,this.zoneSwitched=true);
	  }
    this.speedMultiplier*=Math.min(this.zoneSpeed,1.4);
    if (this.zoneSwitched) {
      this.velX *= -1;
      this.velY *= -1;
	    this.zoneSwitched=false;
    }
    super.update(delta,area,players);
  }
}
class DoritoEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"dorito_enemy");
    this.zoneInterval = 1000;
    this.zoneTime = Math.random() * this.zoneInterval;
	  this.zoneSpeed=0;
	  this.speedIncrement=2.9;
	  this.speeding=this.zoneTime < 500;
	  this.zoneSwitched=false;
	  this.dir=1;
    this.turnAngle = Math.PI * 2 / 3
    this.turnAngle *= Math.pow(-1,Math.random()*2|0);
	  this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);
	  this.anglevel();
  }
  update(delta,area,players){
	  this.zoneTime+=delta;
    if (this.zoneSpeed <= 23/13 && this.speeding) {
      this.zoneSpeed = this.zoneTime/1e3*this.speedIncrement;
	    if(this.zoneSpeed >= 23/13)this.zoneSpeed=23/13,this.zoneTime>(23e3/60)&&(this.speeding=false);
    } else if(this.zoneSpeed >= 0 && !this.speeding){
      this.zoneSpeed = 23/13-(this.zoneTime-(23e3/60))/1e3*this.speedIncrement;
	    if(this.zoneSpeed <= 0)this.zoneSpeed=0,this.zoneTime>1000&&(this.speeding=true,this.zoneTime=0,this.zoneSwitched=true);
	  }
	  this.speedMultiplier*=Math.min(this.zoneSpeed,1);
    if (this.zoneSwitched) {
      this.angle = Math.atan2(this.velY, this.velX);
      this.angle += this.turnAngle * this.dir;
      this.velX = Math.cos(this.angle) * this.speed;
      this.velY = Math.sin(this.angle) * this.speed;
	  this.zoneSwitched=false;
    }
    super.update(delta,area,players);
  }
  onCollide(){
	  this.dir *=-1;
  }
}
class DoritoSwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"dorito_switch_enemy");
    this.zoneInterval = 1000;
    this.zoneTime = Math.random() * this.zoneInterval;
	  this.zoneSpeed=0;
	  this.speedIncrement=2.9;
	  this.speeding=this.zoneTime < 500;
	  this.zoneSwitched=false;
	  this.dir=1;
    this.turnAngle = Math.PI * 2 / 3
    this.turnAngle *= Math.pow(-1,Math.random()*2|0);
	  this.angle=Math.round(this.angle/(Math.PI/2))*(Math.PI/2);
	  this.anglevel();
    this.switch_inverval = 3e3;
		this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  update(delta,area,players){
	  this.zoneTime+=delta;
    if (this.zoneSpeed <= 23/13 && this.speeding) {
      this.zoneSpeed = this.zoneTime/1e3*this.speedIncrement;
	    if(this.zoneSpeed >= 23/13)this.zoneSpeed=23/13,this.zoneTime>(23e3/60)&&(this.speeding=false);
    } else if(this.zoneSpeed >= 0 && !this.speeding){
      this.zoneSpeed = 23/13-(this.zoneTime-(23e3/60))/1e3*this.speedIncrement;
	    if(this.zoneSpeed <= 0)this.zoneSpeed=0,this.zoneTime>1000&&(this.speeding=true,this.zoneTime=0,this.zoneSwitched=true);
	  }
	  this.speedMultiplier*=Math.min(this.zoneSpeed,1);
    if (this.zoneSwitched) {
      this.angle = Math.atan2(this.velY, this.velX);
      this.angle += this.turnAngle * this.dir;
      this.velX = Math.cos(this.angle) * this.speed;
      this.velY = Math.sin(this.angle) * this.speed;
	  this.zoneSwitched=false;
    }
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	    this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
  onCollide(){
	  this.dir *=-1;
  }
}
class InfinitySwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,circle_size){
    super(x,y,radius,speed,angle,"infinity_switch_enemy");
    this.circle_size = circle_size;
    this.dir = speed / this.circle_size;
    this.directionChangeTime = 270-this.angle*180/Math.PI;
    if(this.directionChangeTime < 0)this.directionChangeTime+=360;
    if(this.directionChangeTime > 360)this.directionChangeTime-=360;
    this.switch_inverval = 3e3;
		this.switchTime=0;
    this.switchedHarmless=Math.round(Math.random());
    this.isHarmless=this.switchedHarmless;
  }
  update(delta,area,players) {
    this.velangle()
    this.angle += this.dir/30*delta/30;
    this.directionChangeTime -= Math.abs(this.dir)/30*delta/30*180/Math.PI;
    if(this.directionChangeTime < 0)this.directionChangeTime+=360,this.dir*=-1;
    this.anglevel();
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	    this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
  onCollide(){
    this.dir *= -1; 
  }
}
class InfinityEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,circle_size){
    super(x,y,radius,speed,angle,"infinity_enemy");
    this.circle_size = circle_size;
    this.dir = speed / this.circle_size;
    this.directionChangeTime = 270-this.angle*180/Math.PI;
    if(this.directionChangeTime < 0)this.directionChangeTime+=360;
    if(this.directionChangeTime > 360)this.directionChangeTime-=360;
  }
  update(delta,area,players) {
    this.velangle()
    this.angle += this.dir/30*delta/30;
    this.directionChangeTime -= Math.abs(this.dir)/30*delta/30*180/Math.PI;
    if(this.directionChangeTime < 0)this.directionChangeTime+=360,this.dir*=-1;
    this.anglevel();
    super.update(delta,area,players);
  }
  onCollide(){
    this.dir *= -1; 
  }
}
class WavyEnemy extends Enemy{
  constructor(x,y,radius,speed,angle=0){
    super(x,y,radius,speed,angle,"wavy_enemy");
    this.dir = 1;
    this.waveInterval = (180+15)/this.speed*1e3;
    this.waveTime = 0;
    this.angleIncrement = this.speed;
  }
  rad_to_deg(x){
	  return x/Math.PI*180;
  }
  deg_to_rad(x){
	  return x*Math.PI/180;
  }
  update(delta,area,players) {
    this.waveTime += delta
    if (this.waveTime > this.waveInterval) {
      this.waveTime %= this.waveInterval;
      this.dir *= -1;
    }
    this.velangle();
    this.angle+=this.deg_to_rad(this.angleIncrement*delta/1e3) * this.dir;
    this.anglevel();
    super.update(delta,area,players);
  }
  onCollide(){
    this.dir *= -1;
  }
}
class TurningEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,circle_size){
    super(x,y,radius,speed,angle,"turning_enemy");
    this.circle_size = circle_size;
    this.dir = speed / this.circle_size;
  }
  update(delta,area,players) {
    this.velangle()
    this.angle += this.dir/30*delta/30;
    this.anglevel();
    super.update(delta,area,players);
  }
  onCollide(){
    this.dir *= -1; 
  }
}
class CactusEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"cactus_enemy");
	this.crumbleSize=1;
  }
  playerInteraction(player,delta){
	if(!player.isInvulnerable&&!player.isDowned()){
	  if(player.knockback_limit_count<100){
        if(!player.shadowedInvulnerability){
          player.knockback_player(delta,this,200,this.radius*8*32+50);
		  this.crumbleSize=1/4;
        }
      }
	}
  }
  update(delta,area,players) {
	  if(this.crumbleSize<1){
	  	this.crumbleSize+=delta/(1e3/30)/(300/3)*(1-1/4);
	  }else{
	  	this.crumbleSize=1;
	  }
	  this.radiusMultiplier*=this.crumbleSize;
    super.update(delta,area,players);
  }
}
class CrumblingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"crumbling_enemy");
	this.hasCollided=false;
	this.collideTime=0;
  }
  onCollide(){
	  if(!this.hasCollided){
		this.hasCollided=true;
		let CrumbleFX,residue=new ResidueEnemy(this.x,this.y,this.ogradius/3,this.speed/6.25,Math.random()*360);
		residue.area=this.area;
		residue.z=this.z;
		this.radiusMultiplier/=2;
		this.speedMultiplier/=2;
		map.areas[current_Area].entities.push(residue);
		if(this.MultiplierEffects.some(e=>e.type=="crumbled_on_collision"))CrumbleFX=this.MultiplierEffects.filter(e=>e.type=="crumbled_on_collision")[0],CrumbleFX.speedMult=0.5,CrumbleFX.radiusMult=0.5,CrumbleFX.time=-3;
		else this.MultiplierEffects.push({type:"crumbled_on_collision",speedMult:0.5,radiusMult:0.5,time:-3});
	  }
  }
  update(delta,area,players) {
	if(this.hasCollided)
		this.collideTime+=delta;
	if(this.collideTime>=3e3&&this.hasCollided)
		this.hasCollided=false;
    super.update(delta,area,players);
  }
}
class SnowmanEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"snowman_enemy");
	this.hasCollided=false;
	this.collideTime=0;
	this.snowmanSize=1;
	this.snowmanSizeShrink=1;
  }
  onCollide(){
	  this.target_angle=this.angle
	  if(!this.hasCollided){
		this.hasCollided=true;
		this.snowmanSizeShrink=this.snowmanSize;
		this.speedMultiplier*=0;
	  }
  }
  update(delta,area,players) {
	if(this.hasCollided){
		this.collideTime+=delta;
		this.speedMultiplier*=0;
		this.snowmanSize=(this.snowmanSizeShrink-1)*Math.cos(Math.PI*Math.min(this.collideTime,600)/1200)**3+1;
	}
	if(this.collideTime>=1.6e3&&this.hasCollided){
		this.hasCollided=false;
		this.collideTime=0;
	};
	if(!this.hasCollided){
		if(this.snowmanSize<3){
			this.snowmanSize+=1.5*delta/1e3;
		}else{
			this.snowmanSize=3;
		}
	}
	this.radiusMultiplier*=this.snowmanSize;
  super.update(delta,area,players);
	this.lightRadius = this.radius+60;
  }
}
class LotusFlowerEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"lotus_flower_enemy");
	  this.texture="entities/lotus_flower_stationary";
	  this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);
	  this.detectedDuration=2500;
	  this.hasDetected=false;
	  this.targetAngle=0;
	  this.lotusBrightness=0;
	  this.detectedPosition={x:0,y:0};
  }
  update(delta,area,players) {
	  if(this.frozen)this.speedMultiplier=0;
	  else{
      var closest_entity,closest_entity_distance,information=[];
      if(players.length){
        information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
      }else if(!playtesting){
        information = [mouseEntity];
      }
      var distance_x;
      var distance_y;
      var distance;
      var target_angle=this.angle;
      for(var entity of information){
        distance_x = this.x - entity.x;
        distance_y = this.y - entity.y;
        distance = distance_x**2 + distance_y**2
        if(distance > (150+entity.radius)**2)continue;
        if(closest_entity==void 0){
          closest_entity=entity;
          closest_entity_distance = distance;
        }else if(closest_entity_distance>distance){
          closest_entity=entity;
          closest_entity_distance = distance;
        }
      }
      if(closest_entity!=void 0){
        distance_x = this.x - closest_entity.x;
        distance_y = this.y - closest_entity.y;
	    this.detectedPosition.x=closest_entity.x;
	    this.detectedPosition.y=closest_entity.y;
        this.targetAngle = modulus(Math.atan2(distance_y,distance_x)+Math.PI,Math.PI*2);
	    if(this.lotusBrightness<=0 && this.texture=="entities/lotus_flower_stationary"){
		  this.hasDetected=true;
		  this.texture="entities/lotus_flower_moving";
		  this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);
	    }
      }else{
		    this.targetAngle=this.angle;
	    }
    	this.anglevel();
	    if(this.hasDetected)this.lotusBrightness+=delta;
	    if(this.lotusBrightness<1000){
	    	this.speedMultiplier*=0;
	    	this.angle=this.targetAngle;
	    }else{
        this.lotusBrightness=1000;
      }
    }
    super.update(delta,area,players);
  }
  onCollide(){
    this.target_angle=this.angle=Math.atan2(this.velY,this.velX);
  }
}
class PumpkinEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,fake=false){
    super(x,y,radius,speed,angle,"pumpkin_enemy");
	  this.texture="entities/pumpkin_off";
	  this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);
	  this.detectedDuration=2500;
	  this.hasDetected=false;
	  this.targetAngle=0;
	  this.detectedTime=0;
	  this.absoluteZIndex=-1;
	  this.relativeZIndex=0;
	  this.detectedPosition={x:0,y:0};
	  this.isFake=fake;
  }
  update(delta, area, players) {
	  if(this.isFake||this.frozen)this.speedMultiplier=0;
	  else{
      var closest_entity,closest_entity_distance,information=[];
      if(players.length){
        information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
      }else if(!playtesting){
        information = [mouseEntity];
      }
      var distance_x;
      var distance_y;
      var distance;
      var target_angle=this.angle;
      for(var entity of information){
        distance_x = this.x - entity.x;
        distance_y = this.y - entity.y;
        distance = distance_x**2 + distance_y**2
        if(distance > 200**2)continue;
        if(closest_entity==void 0){
          closest_entity=entity;
          closest_entity_distance = distance;
        }else if(closest_entity_distance>distance){
          closest_entity=entity;
          closest_entity_distance = distance;
        }
      }
      if(closest_entity!=void 0){
        distance_x = this.x - closest_entity.x;
        distance_y = this.y - closest_entity.y;
	    this.detectedPosition.x=closest_entity.x;
	    this.detectedPosition.y=closest_entity.y;
        this.targetAngle = modulus(Math.atan2(distance_y,distance_x)+Math.PI,Math.PI*2);
	    if(this.detectedTime<=0 && this.texture=="entities/pumpkin_off"){
		  this.hasDetected=true;
		  this.texture="entities/pumpkin_on";
		  this.lightRadius = this.radius + 30;
		  this.absoluteZIndex=null;
		  this.relativeZIndex=1;
		  this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);
	    }
      }else{
		    this.targetAngle=this.angle;
	    }
    	this.anglevel();
	    if(this.hasDetected)
	    	this.detectedTime+=delta;
	    if(this.detectedTime<1e3){
	    	this.speedMultiplier*=0;
	    	this.angle=this.targetAngle;
	    	if(this.hasDetected){
	    	  this.x+=Math.round(Math.random()*4-2);
	    	  this.y+=Math.round(Math.random()*4-2);
	    	}
	    }
	    if(this.detectedTime>2500){
	      this.texture="entities/pumpkin_off";
	      this.hasDetected=false;
	      this.lightRadius=null;
	      this.absoluteZIndex=-1;
	      this.relativeZIndex=0;
	      this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);
	      this.detectedTime=0;
	    }
    }
    super.update(delta,area,players);
  }
  onCollide(){
    this.target_angle=this.angle=Math.atan2(this.velY,this.velX);
  }
}
const FakePumpkinEnemy = PumpkinEnemy;
class MistEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"mist_enemy");
      this.brightness = 1;
      this.isVisible = true; // true - fading, false - going visible
      this.visibility_radius = 200;
      this.brightness_tick = 1.5;
	}
  update(delta,area,players) {
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    var target_angle;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > this.visibility_radius**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      this.brightness-=this.brightness_tick*delta/1e3;
	  this.brightness=Math.max(this.brightness,Number.EPSILON);
    }else if(this.brightness<1){
      this.brightness+=this.brightness_tick*delta/1e3;
    }
	this.lightRadius=this.radius*3*Math.min(1,this.brightness);
    super.update(delta,area,players);
  }
}
class PhantomEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"phantom_enemy");
      this.brightness = 1;
      this.isVisible = true; // true - fading, false - going visible
      this.visibility_radius = 250;
      this.brightness_tick = 1.5;
	}
  update(delta,area,players) {
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    var target_angle;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(Math.sqrt(distance)>this.visibility_radius+(entity.radius??0))continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
	  if(this.brightness<1){
        this.brightness+=this.brightness_tick*delta/1e3;
	  }
    }else if(this.brightness>0){
      this.brightness-=this.brightness_tick*delta/1e3;
	  this.brightness=Math.max(this.brightness,Number.EPSILON);
    }
	this.lightRadius=this.radius*3*Math.min(1,this.brightness);
    super.update(delta,area,players);
  }
}
class GlowyEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"glowy_enemy");
      this.invisible_timing = 500;
      this.brightness = 1;
      this.isVisible = true;
	  this.lightRadius=this.radius*3*this.brightness;
      this.timer = this.invisible_timing;
      this.brightness_tick = 1.8;
	}
  update(delta,area,players) {
    if(this.isVisible && this.timer <= 0){
      this.brightness -= this.brightness_tick * delta/1e3;
      if(this.brightness <= 0){
        this.brightness = Number.EPSILON;
        this.isVisible = false;
        this.timer = this.invisible_timing;
      }
    } else if (!this.isVisible && this.timer <= 0){
      this.brightness += this.brightness_tick * delta/1e3;
      if(this.brightness >= 1){
        this.isVisible = true;
        this.timer = this.invisible_timing;
      }
    }

    if (this.timer>0){
      this.timer -= delta;
    }
	this.lightRadius=this.radius*3*Math.min(1,this.brightness);
    super.update(delta,area,players);
  }
}
class FireflyEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"firefly_enemy");
      this.invisible_timing = 500;
      this.isVisible = Math.round(Math.random());
      this.brightness = this.isVisible==0?Math.random():1;
	  this.lightRadius=this.radius*3*this.brightness;
      this.timer = this.isVisible==0?0:this.invisible_timing*Math.random();
      this.brightness_tick = 1.8;
	}
  update(delta,area,players) {
    if(this.isVisible && this.timer <= 0){
      this.brightness -= this.brightness_tick * delta/1e3;
      if(this.brightness <= 0){
        this.brightness = Number.EPSILON;
        this.isVisible = false;
        this.timer = this.invisible_timing;
      }
    } else if (!this.isVisible && this.timer <= 0){
      this.brightness += this.brightness_tick * delta/1e3;
      if(this.brightness >= 1){
        this.isVisible = true;
        this.timer = this.invisible_timing;
      }
    }

    if (this.timer>0){
      this.timer -= delta;
    }
	this.lightRadius=this.radius*3*Math.min(1,this.brightness);
    super.update(delta,area,players);
  }
}
class GrassEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,powered){
    super(x,y,radius,speed,angle,"grass_enemy");
	this.powered=powered;
	this.grassTime=0;
	this.grassHarmless=true;
  }
  playerInteraction(player){
	if(!player.isDowned()){
		this.grassHarmless && this.grassTime==0 && (this.grassTime=1e3);
		!this.grassHarmless && (
			this.grassTime=0,this.grassHarmless=true,
			EnemyPlayerInteraction(player,this,this.corrosive,this.isHarmless,this.immune),
			map.areas[player.area].entities.filter(e=>{
				return (e instanceof GrassEnemy)&&(!e.powered);
			}).map(e=>{
				e.grassTime=0;
				e.grassHarmless=true;
			})
		);
	}
  }
  update(delta,area,players) {
	if(this.grassHarmless&&this.grassTime>0){
		this.grassTime-=delta;
		if(this.grassTime<0){
			this.grassHarmless=false;
			this.grassTime=0;
		}
	}
    super.update(delta,area,players);
  }
}
class FlowerEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,growth_multiplier){
    super(x,y,radius,speed,angle,"flower_enemy");
	  this.hasEntity=false;
	  this.growth_multiplier=growth_multiplier;
  }
  update(delta,area,players){
	  if(!this.hasEntity){
	  	this.hasEntity=true;
	  	for(var i=0;i<5;i++){
	  		const projectile=new FlowerProjectile(this.x,this.y,this.radius,0,0,this,i,this.growth_multiplier);
	  		projectile.area=this.area;projectile.z=this.z;
	  		area.entities.push(projectile);
	  	}
	  }
	  super.update(delta,area,players)
  }
}
class FlowerProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner,id,growth_multiplier){
    super(x,y,radius,speed,angle,"flower_projectile");
	  this.owner=owner;
	  this.outline=false;
	  this.isEnemy=false;
	  this.growth_multiplier=growth_multiplier;
	  this.immune=true;
	  this.staticRadius=this.radius;
	  this.trigger_radius=100;
	  this.growthTick=102;
	  this.timer=0;
	  this.id=id;
  }
  playerInteraction(player){
    EnemyPlayerInteraction(player,this,this.corrosive,this.isHarmless,this.immune,false);
  }
  update(delta,area,players) {
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.owner.x - entity.x;
      distance_y = this.owner.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > (this.trigger_radius+this.staticRadius+(entity.radius??0))**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.owner.x - closest_entity.x;
      distance_y = this.owner.y - closest_entity.y;
		  this.timer+=delta;
		  if(this.timer>=this.growthTick){
		  	this.timer=0;
		  	this.ogradius-=(this.staticRadius / 18)*this.growth_multiplier;
		  	if(this.ogradius<0)this.ogradius=0;
		  }
    }else{
	  	this.timer+=delta;
	  	if(this.timer>=this.growthTick / 2){
	  		this.timer=0;
	  		this.ogradius+=(this.staticRadius / 18)*this.growth_multiplier;
	  		if(this.ogradius>this.staticRadius)this.ogradius=this.staticRadius;
	  	}
	  }
	  this.owner.MultiplierEffects.map(e=>{
	  	this.effects.map(t=>{
	  		var type=t.effectType;
	  		if(type>=getEffectIndex("Enemy Slowing")&&type<=getEffectIndex("Enemy Disarming")){
	  			t.ogradius??=t.radius;
	  			t.radius=t.ogradius*(e.auraMult??1);
	  			if(e.radiusMult>1)t.radius=t.ogradius;
	  		}
	  	})
	  	if(e.speedMult>1)e.speedMult=1;
	  	if(e.radiusMult>1)e.radiusMult=1;
	  	(e.speedMult!=void 0)&&(this.speedMultiplier*=e.speedMult);
	  	(e.radiusMult!=void 0)&&(this.radiusMultiplier*=e.radiusMult);
	  });
	  this.setPosition(Math.sin(this.id*72*Math.PI/180),-Math.cos(this.id*72*Math.PI/180));
	  if(this.owner.remove)this.remove=true;
	  super.update(delta,area,players,false);
  }
  setPosition(x, y){
    this.x = this.owner.x + x * this.owner.radius;
    this.y = this.owner.y + y * this.owner.radius;
  }
}
class SeedlingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"seedling_enemy");
	this.hasEntity=false;
	this.immune=true;
  }
  update(delta,area,players){
	if(!this.hasEntity){
		this.hasEntity=true;
		const projectile=new SeedlingProjectile(this.x,this.y,this.radius,0,0,this);
		projectile.area=this.area;projectile.z=this.z;
		area.entities.push(projectile)
	}
	super.update(delta,area,players);
  }
}
class SeedlingProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner){
    super(x,y,radius,speed,angle,"seedling_projectile");
	  this.owner=owner;
	  this.immune=true;
	  this.staticAngle=Math.random()*360;
	  this.clockwise=Math.round(Math.random());
  }
  playerInteraction(player){
    EnemyPlayerInteraction(player,this,this.corrosive,this.isHarmless,this.immune,false);
  }
  update(delta,area,players) {
	  this.staticAngle+=10*delta/(1e3/30)*Math.pow(-1,this.clockwise);
    this.x=this.owner.x+(this.radius+this.owner.radius/2)*Math.cos(this.staticAngle/180*Math.PI);
    this.y=this.owner.y+(this.radius+this.owner.radius/2)*Math.sin(this.staticAngle/180*Math.PI);
	  super.update(delta,area,players);
  }
}
class FireTrailEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,decay=false){
    super(x,y,radius,speed,angle,"fire_trail_enemy");
	this.lightRadius=this.radius+40;
	this.isDecay=decay;
	this.clock=0;
	this.brightness=1;
  }
  update(delta,area,players) {
    this.clock+=delta;
	if(!this.isDecay){
	var duration=(1000*(this.radius*2)/(this.speed/30))/32;
    if (this.clock>=duration) {
        this.spawnTrail(area);
        this.clock=0;
    }}else{
      if(this.clock>=1000){
        this.brightness -= delta/500;
        if(this.brightness<0){this.brightness=Number.EPSILON}
      }
      if(this.clock>=1500){
        this.remove = true;
      }
	}
    super.update(delta,area,players);
  }
  spawnTrail(area){
	  const projectile=new FireTrailEnemy(this.x,this.y,this.radius,0,0,true);
	projectile.area=this.area;projectile.z=this.z;
    area.entities.push(projectile);
  }
}
class LiquidEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,player_detection_radius){
    super(x,y,radius,speed,angle,"liquid_enemy");
    this.player_detection_radius = player_detection_radius;
  }
  update(delta,area,players) {
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > this.player_detection_radius**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      this.speedMultiplier *= 5;
    }
    super.update(delta,area,players);
  }
}
class SwitchEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,switch_inverval,switch_time,switched_harmless){
    super(x,y,radius,speed,angle,"switch_enemy");
    this.switch_inverval = switch_inverval;
	this.switchTime=switch_time;
	if(switched_harmless==void 0){
      this.switchedHarmless = false;
      if (Math.round(Math.random()) === 1) {
        this.switchedHarmless = true;
      }
	}else{
	  this.switchedHarmless = switched_harmless;
	}
    this.isHarmless = this.switchedHarmless;
  }
  update(delta,area,players) {
    this.switchTime -= delta;
    if (this.switchTime <= 0) {
      this.switchedHarmless = !this.switchedHarmless;
      this.isHarmless = this.switchedHarmless;
	  this.switchTime += this.switch_inverval;
    }
    super.update(delta,area,players);
  }
}
class RandomizingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"randomizing_enemy");
    this.switch_inverval = 5000;
    this.clock = 0;
  	this.entity=null;
  }
  update(delta,area,players) {
    this.clock += delta;
	  if(this.entity!=null){
	  	this.radiusMultiplier=0;
	  	this.x=this.entity.x;
	  	this.y=this.entity.y;
	  }
    if (this.clock > this.switch_inverval) {
		  var rand=[
        'BLIND_ENEMY', 
        'CACTUS_ENEMY', 
        'CHARGING_ENEMY', 
        'CONFECTIONER_ENEMY', 
        'FIRE_TRAIL_ENEMY', 
        'CORROSIVE_ENEMY', 
        'CORROSIVE_SNIPER_ENEMY', 
        'DASHER_ENEMY', 
        'DISABLING_GHOST_ENEMY', 
        'DORITO_ENEMY', 
        'FORCE_SNIPER_A_ENEMY',
        'FORCE_SNIPER_B_ENEMY',
        'GRAVITY_GHOST_ENEMY',
        'ICE_GHOST_ENEMY',
        'ICE_SNIPER_ENEMY', 
        'IMMUNE_ENEMY', 
        'WAVY_ENEMY', 
        'WIND_SNIPER_ENEMY', 
        'ZIGZAG_ENEMY', 
        'ZONING_ENEMY', 
        'SPEED_GHOST_ENEMY', 
        'SPIRAL_ENEMY', 
        'TREE_ENEMY', 
        'REPELLING_GHOST_ENEMY', 
        'REGEN_GHOST_ENEMY', 
        'SIZING_ENEMY', 
        'INFECTIOUS_ENEMY', 
        'LEAD_SNIPER_ENEMY', 
        'LUNGING_ENEMY', 
        'NORMAL_ENEMY', 
        'OSCILLATING_ENEMY', 
        'PENNY_ENEMY', 
        'SNOWMAN_ENEMY', 
        'POISON_GHOST_ENEMY', 
        'POISON_SNIPER_ENEMY', 
        'PREDICTION_SNIPER_ENEMY', 
        
        'LIQUID_ENEMY', //✅
        'LAVA_ENEMY', //✅
        'ICICLE_ENEMY', //✅
        'REGEN_SNIPER_ENEMY', //✅
        'SPEED_SNIPER_ENEMY', //✅
        'BARRIER_ENEMY', //✅
        'SLOWING_ENEMY', //✅
        'GRAVITY_ENEMY',//✅
        'REPELLING_ENEMY', //✅
        'DRAINING_ENEMY', //✅
        'FREEZING_ENEMY', //✅
        'EXPERIENCE_DRAIN_ENEMY', //✅
        'QUICKSAND_ENEMY', //✅
        'SLIPPERY_ENEMY', //✅
        'DISABLING_ENEMY', //✅
        'TOXIC_ENEMY', //✅
        'ENLARGING_ENEMY', //✅
        'HOMING_ENEMY', //✅
        'FLOWER_ENEMY', //✅
        'GRASS_ENEMY', //✅
        'NINJA_STAR_SNIPER_ENEMY', //✅
        'RADIATING_BULLETS_ENEMY', //✅
        'SNIPER_ENEMY', //✅
        'TURNING_ENEMY', //✅
        'WIND_GHOST_ENEMY', //✅
      ].map(e=>capitalize(e.toLowerCase()));
		  rand=rand[Math.floor(Math.random()*rand.length)];
		  if(this.entity!=null){
		  	this.entity.remove=true;
		  	this.entity.velangle();
		  	this.angle=this.entity.angle;
		  	this.anglevel();
		  }else{
		  	this.velangle();
		  }
      let inst=eval(rand);
		  switch(rand){
		  	case"LiquidEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.player_detection_radius);break;
		  	case"LavaEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.lava_radius);break;
		  	case"IcicleEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.horizontal);break;
		  	case"RegenSniperEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.regen_loss);break;
		  	case"SpeedSniperEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.speed_loss);break;
		  	case"BarrierEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.barrier_radius);break;
		  	case"SlowingEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.slowing_radius,defaultValues.spawner.slow);break;
		  	case"GravityEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.gravity_radius,defaultValues.spawner.gravity);break;
		  	case"RepellingEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.repelling_radius,defaultValues.spawner.repulsion);break;
		  	case"DrainingEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.draining_radius,defaultValues.spawner.drain);break;
		  	case"FreezingEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.freezing_radius);break;
		  	case"ExperienceDrainEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.experience_drain_radius);break;
		  	case"QuicksandEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.quicksand_radius,defaultValues.spawner.quicksand_strength);break;
		  	case"SlipperyEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.slippery_radius);break;
		  	case"DisablingEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.disabling_radius);break;
		  	case"ToxicEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.toxic_radius);break;
		  	case"EnlargingEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.enlarging_radius);break;
		  	case"HomingEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.reverse,defaultValues.spawner.home_range,defaultValues.spawner.increment);break;
		  	case"FlowerEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.growth_multiplier);break;
		  	case"GrassEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.powered);break;
		  	case"NinjaStarSniperEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.small_bullets);break;
		  	case"RadiatingBulletsEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.release_interval);break;
		  	case"TurningEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.circle_size);break;
		  	case"SniperEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.recharge);break;
		  	case"WindGhostEnemy":this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.ignore_invulnerability);break;
		  	default:this.entity=new inst(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180);break;
		  }
		  this.entity.area=this.area;
		  this.entity.z=this.z;
		  area.entities.push(this.entity);
		  this.clock = this.clock % this.switch_inverval;
    }
    super.update(delta,area,players);
  }
}
class CyclingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"cycling_enemy");
    this.switch_inverval = 3000;
    this.clock = 0;
	this.entity=null;
  }
  update(delta,area,players) {
    this.clock += delta;
	if(this.entity!=null){
		this.radiusMultiplier=0;
		this.x=this.entity.x;
		this.y=this.entity.y;
	}
    if (this.clock > this.switch_inverval) {
		var rand=['NORMAL_ENEMY', 'HOMING_ENEMY', 'SLOWING_ENEMY', 'DRAINING_ENEMY', 
		'SIZING_ENEMY', 'FREEZING_ENEMY', 'DISABLING_ENEMY', 'ENLARGING_ENEMY', 
		'IMMUNE_ENEMY', 'CORROSIVE_ENEMY', 'TOXIC_ENEMY'].map(e=>capitalize(e.toLowerCase()));
		rand=rand[Math.floor(Math.random()*rand.length)];
		if(this.entity!=null){
			this.entity.remove=true;
			this.entity.velangle();
			this.angle=this.entity.angle;
			this.anglevel();
		}else{
			this.velangle();
		}
		switch(rand){
			case"SlowingEnemy":this.entity=new SlowingEnemy(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.slowing_radius,defaultValues.spawner.slow);break;
			case"DrainingEnemy":this.entity=new DrainingEnemy(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.draining_radius,defaultValues.spawner.drain);break;
			case"FreezingEnemy":this.entity=new FreezingEnemy(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.freezing_radius);break;
			case"DisablingEnemy":this.entity=new DisablingEnemy(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.disabling_radius);break;
			case"ToxicEnemy":this.entity=new ToxicEnemy(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.toxic_radius);break;
			case"EnlargingEnemy":this.entity=new EnlargingEnemy(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.enlarging_radius);break;
			case"HomingEnemy":this.entity=new HomingEnemy(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180,defaultValues.spawner.reverse,defaultValues.spawner.home_range,defaultValues.spawner.increment);break;
			default:this.entity=new (eval(rand))(this.x,this.y,this.ogradius,this.speed,(this.entity?.angle ?? this.angle)/Math.PI*180);break;
		}
		this.entity.area=this.area;
		this.entity.z=this.z;
		area.entities.push(this.entity);
		this.clock = this.clock % this.switch_inverval;
    }
    super.update(delta,area,players);
  }
}
class IcicleEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,horizontal){
    super(x,y,radius,speed,angle==void 0?Math.round(Math.random())*180+90*!horizontal:angle,"icicle_enemy");
    this.clock = 0;
	this.wallHit=false;
  }
  update(delta,area,players) {
	if(this.wallHit){
	  this.clock += delta;
      if (this.clock > 1e3) {
        this.clock=0;
	    this.wallHit=false;
      }else{
		this.speedMultiplier*=0;
	  }
	};
    super.update(delta,area,players);
  }
  onCollide(){
	this.wallHit=true;
  }
}
class RadiatingBulletsEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,release_interval,release_time){
    super(x,y,radius,speed,angle,"radiating_bullets_enemy");
    this.release_interval = release_interval,
    this.releaseTime = release_time ?? (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.energy>0)this.releaseTime -= delta;
    if (this.releaseTime < 0) {
		for(var i=0;i<8;i++){
			const projectile=new RadiatingBulletsProjectile(this.x,this.y,EvadesConfig.defaults.radiating_bullets_projectile.radius,EvadesConfig.defaults.radiating_bullets_projectile.speed,45*i)
			projectile.area=this.area;projectile.z=this.z;
			area.entities.push(projectile);
		}
		this.releaseTime = this.releaseTime % this.release_interval;
		this.releaseTime+=this.release_interval
		this.releaseTime = this.releaseTime % this.release_interval;
    }
    super.update(delta,area,players);
  }
}
class RadiatingBulletsProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"radiating_bullets_projectile");
	  this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
  playerInteraction(player){
	this.remove=true;
	super.playerInteraction(player);
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 3000) {
		this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class SniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,recharge){
    super(x,y,radius,speed,angle,"sniper_enemy");
    this.release_interval = recharge,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new SniperProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class SniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"sniper_projectile");
    this.clock=0;
    this.immune=true;
  	this.isProjectile=true;
  }
  playerInteraction(player){
    if(!player.hasAbility("Sniper"))
      super.playerInteraction(player);
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class RoboScannerPredictionSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner){
    super(x,y,radius,speed,angle,"robo_scanner_prediction_sniper_projectile");
    this.owner=owner;
    this.immune=true;
    this.isRoboScanner=true;
  	this.isProjectile=true;
    this.pixelsTraveled=0;
  }
  playerInteraction(){}
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.pixelsTraveled += this.speed*delta/1e3;
    if (this.pixelsTraveled >= 2080)
      this.remove=true;
    super.update(delta,area,players);
    for(const entity of area.entities){
      if(entity === this)continue;
      if(!entity.immune && entity.isEnemy && distance(this,entity) < this.radius + entity.radius){
        entity.isHarmless=true;
        entity.harmlessTime=3000;
      }
    }
  }
}
class RoboScannerSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner){
    super(x,y,radius,speed,angle,"robo_scanner_sniper_projectile");
    this.owner=owner;
    this.immune=true;
    this.isRoboScanner=true;
  	this.isProjectile=true;
    this.pixelsTraveled=0;
  }
  playerInteraction(){}
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.pixelsTraveled += this.speed*delta/1e3;
    if (this.pixelsTraveled >= 2080)
      this.remove=true;
    super.update(delta,area,players);
    for(const entity of area.entities){
      if(entity === this)continue;
      if(!entity.immune && entity.isEnemy && distance(this,entity) < this.radius + entity.radius){
        entity.isHarmless=true;
        entity.harmlessTime=3000;
      }
    }
  }
}
class RoboScannerLeadSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner){
    super(x,y,radius,speed,angle,"robo_scanner_lead_sniper_projectile");
    this.owner=owner;
    this.immune=true;
    this.isRoboScanner=true;
  	this.isProjectile=true;
    this.pixelsTraveled=0;
  }
  playerInteraction(){}
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.pixelsTraveled += this.speed*delta/1e3;
    if (this.pixelsTraveled >= 2080)
      this.remove=true;
    super.update(delta,area,players);
    for(const entity of area.entities){
      if(entity === this)continue;
      if(!entity.immune && entity.mortarTime <= 0 && entity.isEnemy && distance(this,entity) < this.radius + entity.radius)
        entity.mortarTime=4000,
        entity.isHarmless=true,
        entity.harmlessTime=entity.mortarTime;
    }
  }
}
class RoboScannerIceSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner){
    super(x,y,radius,speed,angle,"robo_scanner_ice_sniper_projectile");
    this.owner=owner;
    this.immune=true;
    this.isRoboScanner=true;
  	this.isProjectile=true;
    this.pixelsTraveled=0;
  }
  playerInteraction(){}
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.pixelsTraveled += this.speed*delta/1e3;
    if (this.pixelsTraveled >= 2080)
      this.remove=true;
    super.update(delta,area,players);
    for(const entity of area.entities){
      if(entity === this)continue;
      if(!entity.immune && entity.isEnemy && distance(this,entity) < this.radius + entity.radius){
        entity.freeze(1000);
      }
    }
  }
}
class RoboScannerSpeedSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner){
    super(x,y,radius,speed,angle,"robo_scanner_speed_sniper_projectile");
    this.owner=owner;
    this.immune=true;
    this.isRoboScanner=true;
  	this.isProjectile=true;
    this.pixelsTraveled=0;
  }
  playerInteraction(){}
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.pixelsTraveled += this.speed*delta/1e3;
    if (this.pixelsTraveled >= 2080)
      this.remove=true;
    super.update(delta,area,players);
    for(const entity of area.entities){
      if(entity === this)continue;
      if(!entity.immune && entity.isEnemy && !entity.movement_immune && distance(this,entity) < this.radius + entity.radius){
        let spd = Math.min(entity.speed,30);
        entity.speed = Math.max(spd,entity.speed-30);
        this.remove=true;
        entity.anglevel();
        break;
      }
    }
  }
}
class RoboScannerRegenSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,owner){
    super(x,y,radius,speed,angle,"robo_scanner_regen_sniper_projectile");
    this.owner=owner;
    this.immune=true;
    this.isRoboScanner=true;
  	this.isProjectile=true;
    this.pixelsTraveled=0;
  }
  playerInteraction(){}
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.pixelsTraveled += this.speed*delta/1e3;
    if (this.pixelsTraveled >= 2080)
      this.remove=true;
    super.update(delta,area,players);
    for(const entity of area.entities){
      if(entity === this)continue;
      if(!entity.immune && entity.isEnemy && distance(this,entity) < this.radius + entity.radius){
        entity.energyRegen -= 0.4;
        this.remove=true;
        break;
      }
    }
  }
}
class NinjaStarSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,small_bullets){
    super(x,y,radius,speed,angle,"ninja_star_sniper_enemy");
    this.release_interval = 4500,
    this.small_bullets = small_bullets,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      //spread of 20 degrees with 3 projectiles
	    for(var i=-1;i<2;i++){
        const projectile=new NinjaStarSniperProjectile(this.x,this.y,this.radius/(3-!this.small_bullets),EvadesConfig.defaults.ninja_star_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180+i*20);
	      projectile.area=this.area;
        projectile.z=this.z;
        area.entities.push(projectile)
      }
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class NinjaStarSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"ninja_star_sniper_projectile");
    this.pixels_traveled = 0;
    this.hasCollided=false;
    this.texture="entities/ninja-star";
    this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);
    this.starVisibility=500;
    this.max_range=2080;
    this.stuck_time=0;
  }
  onCollide(){
    if(!this.hasCollided){
      this.hasCollided=true;
      this.texture="entities/"+this.image.frames[this.image.currentFrame].path;
      this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);
      this.speedMultiplier=0;
      this.MultiplierEffects.filter(e=>e.type=="stick").length && this.MultiplierEffects.push({type:"stick",time:-1.5e3,speedMult:0});
    }
  }
  update(delta,area,players) {
    this.pixels_traveled += this.speed * delta / 1e3;
    if(this.pixels_traveled >= this.max_range)this.remove=true;
    if(this.hasCollided){
      this.stuck_time+=delta;
      this.speedMultiplier=0;
      if(this.stuck_time>=1000){
        this.starVisibility-=delta;
        if(this.starVisibility<=0)this.remove=true;
      }
    }
    super.update(delta,area,players);
  }
}
class RingSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,cybotBoss,health=defaultValues.spawner.health,ring_sniper_radius=defaultValues.spawner.ring_sniper_radius){
    super(x,y,radius,speed,angle,"ring_sniper_enemy");
	this.cybot=cybotBoss;
	this.maxHealth=this.health=health;
	this.losing_health=false;
	this.movement_immune=true;
	this.effects.push({radius:ring_sniper_radius,effectType:getEffectIndex("Enemy Boss")})
	this.reset_parameters();
  }
  reset_parameters(){
	this.has_projectiles=true;
	this.release_interval=5000;
	this.releaseTime=Math.random()*this.release_interval;
	this.release_ready=false;
  }
  update_parameters(delta,area,players){
	if(this.losing_health)this.damage(13.5*delta/1e3);
	if(this.health<=0&&!this.remove){
		this.cybot && (this.cybot.ring_sniper_count-=1);
		this.remove=true;
	}
  }
  generate_entities(delta,area,players){
	  if(!this.release_ready){
			this.releaseTime-=delta*this.timer_reduction;
			if(this.releaseTime<=0){
				this.release_ready=true;
		}
	}else{
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 2400**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
	if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  let projectile=new RingSniperProjectile(this.x,this.y,EvadesConfig.defaults.ring_sniper_projectile.radius,EvadesConfig.defaults.ring_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
	  this.cybot && this.cybot.ring_projectiles.push(projectile);
      this.releaseTime = this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy;
	  this.release_ready=false;
    }

	}
  }
  damage(damage){
	  this.health-=damage;
	  this.losing_health=false;
  }
  update(delta,area,players) {
	this.update_parameters(delta,area,players);
	this.generate_entities(delta,area,players);
    super.update(delta,area,players);
  }
}
class RingSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"ring_sniper_projectile");
    this.outline=false;
    this.immune=true;
	  this.corrosive=true;
	  this.isEnemy=false;
    this.clock=0;
    this.clock2=0;
	  this.bounce_count=0;
    this.pixelsTraveled=0;
  }
  onCollide(){
	  this.bounce_count++;
  }
	render(e, t) {
		const defaultLine=e.lineWidth;
		e.beginPath(),
		e.arc(t.getX(this.x), t.getY(this.y), t.toScale(.875 * this.radius), 0, 2 * Math.PI, !1),
		e.strokeStyle = this.color,
		e.lineWidth = this.radius / 4,
		e.stroke(),
		e.lineWidth=defaultLine;
	}
  update(delta,area,players) {
	  if(this.bounce_count>=3){
	    this.clock+=delta;
      if (this.clock>=3000)
        this.remove=true;
	  }
    this.pixelsTraveled+=this.speed*delta/1e3;
	  if(this.pixelsTraveled>=8320)
      this.remove=true;
    super.update(delta,area,players);
  }
}
class CybotRingProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"cybot_ring_projectile");
    this.outline = false;
    this.immune = true;
  	this.corrosive = true;
    this.infectious = true;
	  this.isEnemy=false;
  }
	render(e, t) {
		const defaultLine=e.lineWidth;
		e.beginPath(),
		e.arc(t.getX(this.x), t.getY(this.y), t.toScale(.875 * this.radius), 0, 2 * Math.PI, !1),
		e.strokeStyle = this.color,
		e.lineWidth = this.radius / 4,
		e.stroke(),
		e.lineWidth=defaultLine;
	}
}
class PredictionSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"prediction_sniper_enemy");
    this.release_interval = 3000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  timeOfImpact(p, v, s) {
    // Requires relative position and velocity to aiming point
    let a = s * s - (v.x * v.x + v.y * v.y);
    let b = p.x * v.x + p.y * v.y;
    let c = p.x * p.x + p.y * p.y;

    let d = b * b + a * c;

    let t=(b + Math.sqrt(d)) / a;

    return t;
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	    let radial={x:closest_entity.velX??0,y:closest_entity.velY??0};
  	  let diff={x:-distance_x,y:-distance_y}
      let lead=this.timeOfImpact(diff,radial,EvadesConfig.defaults.prediction_sniper_projectile.speed);
      var dX=diff.x + lead * radial.x;
      var dY=diff.y + lead * radial.y;
	    if(!isNaN(lead) && lead >=0){
		    const projectile=new PredictionSniperProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.prediction_sniper_projectile.speed,Math.atan2(dY,dX)/Math.PI*180);
		    projectile.area=this.area;projectile.z=this.z;
        area.entities.push(projectile);
        this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
  	  }
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class ResidueEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"residue_enemy");
    this.clock = 0;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 3000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class PredictionSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"prediction_sniper_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
  onCollide(){
    this.remove=true;
  }
  playerInteraction(player){
    if(!player.hasAbility("Prediction Sniper"))
      super.playerInteraction(player);
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class IceSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"ice_sniper_enemy");
    this.release_interval = 3000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new IceSniperProjectile(this.x,this.y,EvadesConfig.defaults.ice_sniper_projectile.radius,EvadesConfig.defaults.ice_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class IceSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"ice_sniper_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
  playerInteraction(player){
	  if(!player.isInvulnerable && !player.hasAbility("Ice Sniper")){
	    player.isIced=true;
	    player.icedTimeLeft=1000*player.effectImmune;
	  }
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class PoisonSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"poison_sniper_enemy");
    this.release_interval = 3000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new PoisonSniperProjectile(this.x,this.y,EvadesConfig.defaults.poison_sniper_projectile.radius,EvadesConfig.defaults.poison_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class PoisonSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"poison_sniper_projectile");
    this.immune=true;
    this.clock = 0;
  	this.isProjectile=true;
  }
  playerInteraction(player){
	if(!player.isInvulnerable){
	  player.isPoisoned=true;
	  player.poisonedTimeLeft=1000*player.effectImmune;
	}
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class SpeedSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,speed_loss){
    super(x,y,radius,speed,angle,"speed_sniper_enemy");
    this.release_interval = 2500,
    this.speed_loss = speed_loss;
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new SpeedSniperProjectile(this.x,this.y,EvadesConfig.defaults.speed_sniper_projectile.radius,EvadesConfig.defaults.speed_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180,this.speed_loss)
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class SpeedSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,speed_loss){
    super(x,y,radius,speed,angle,"speed_sniper_projectile");
    this.speed_loss=speed_loss;
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
	playerInteraction(player){
		if(!player.isDowned()&&!player.isInvulnerable&&!player.hasAbility("Speed Sniper")){
			this.remove=true;
			player.speed-=this.speed_loss*player.effectImmune;
			player.statSpeed-=this.speed_loss*player.effectImmune;
			player.speed=Math.max(150,player.speed);
			player.statSpeed=Math.max(150,player.statSpeed);
		}
	}
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class LeadSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"lead_sniper_enemy");
    this.release_interval = 3000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new LeadSniperProjectile(this.x,this.y,this.radius*2/3,EvadesConfig.defaults.lead_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class LeadSniperProjectile extends Enemy{
	constructor(x,y,radius,speed,angle){
		super(x,y,radius,speed,angle,"lead_sniper_projectile");
		this.immune=true;
  	this.isProjectile=true;
		this.clock=0;
	}
	playerInteraction(player){
		if(!player.isDowned()&&!player.isInvulnerable && !player.hasAbility("Lead Sniper")){
			this.remove=true;
			player.isLead=true;
			player.leadTime=3500*player.effectImmune;
		}
	}
	onCollide(){
		this.remove=true;
	}
	update(delta,area,players) {
		this.clock+=delta;
		if(this.clock>=7000)
			this.remove=true;
		super.update(delta,area,players);
	}
}
class RegenSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,regen_loss){
    super(x,y,radius,speed,angle,"regen_sniper_enemy");
    this.release_interval = 2500,
    this.regen_loss=regen_loss;
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new RegenSniperProjectile(this.x,this.y,EvadesConfig.defaults.regen_sniper_projectile.radius,EvadesConfig.defaults.regen_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180,this.regen_loss);
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class RegenSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,regen_loss){
    super(x,y,radius,speed,angle,"regen_sniper_projectile");
    this.regen_loss=regen_loss;
    this.immune=true;
    this.clock = 0;
  	this.isProjectile=true;
  }
	playerInteraction(player){
		if(!player.isDowned()&&!player.isInvulnerable&&!player.hasAbility("Regen Sniper")){
			this.remove=true;
			player.energyRegen-=this.regen_loss*player.effectImmune;
			player.energyRegen=Math.max(1,player.energyRegen);
		}
	}
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class CorrosiveSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"corrosive_sniper_enemy");
    this.release_interval = 3000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new CorrosiveSniperProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.corrosive_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class CorrosiveSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"corrosive_sniper_projectile");
	  this.corrosive=true;
    this.clock = 0;
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class FrostGiantEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,
  projectile_duration,
  projectile_radius,
  projectile_speed,
  pause_interval,
  pause_duration,
  turn_speed,
  turn_acceleration,
  shot_interval,
  shot_acceleration,
  direction,
  pattern,
  cone_angle,
  boundary){
    super(x,y,radius,speed,angle,"frost_giant_enemy");
    this.immune=true,
    this.projectile_duration=projectile_duration,
    this.projectile_radius=projectile_radius??10,
    this.projectile_speed=projectile_speed??120,
    this.pause_interval=pause_interval,
    this.pause_duration=pause_duration,
    this.turn_speed=turn_speed,
    this.initial_turn_speed=this.turn_speed,
    this.turn_acceleration=turn_acceleration,
    this.shot_interval=shot_interval,
    this.initial_shot_interval=shot_interval,
    this.shot_acceleration=shot_acceleration,
    this.direction=direction,
    this.pattern=this.get_pattern_generator(pattern),
    this.cone_angle=cone_angle;
    this.initial_angle=this.angle;
	this.shoot_angle=this.initial_angle;
    this.shot_cooldown = this.shot_interval;
    this.pause_cooldown = this.pause_interval;
    this.pause_time = this.pause_duration;
  }
  prepare_shot(delta){
    if(this.pause_interval!=0){
      if(this.pause_cooldown <= 0){
        this.shot_interval = this.initial_shot_interval;
        this.turn_speed = this.initial_turn_speed;
        this.pause_time -= delta;
        if(this.pause_time<0){
          this.pause_cooldown = this.pause_interval;
          this.pause_time = this.pause_duration;
        }
      return false;
      } else {
          this.pause_cooldown -= delta;
        }
    }
    this.shot_cooldown -= delta;
    if(this.shot_cooldown < 0){
      this.shot_cooldown = this.shot_interval;
      return true;
    } return false;
  }
  get_pattern_generator(pattern){
    switch(pattern){
      case"spiral": return this.spiral_pattern;
      case"twinspiral": return this.twinspiral_pattern;
      case"quadspiral": return this.quadspiral_pattern;
      case"cone": return this.cone_pattern;
      case"twincone": return this.twincone_pattern;
      case"cone_edges": return this.cone_edges_pattern;
      case"twin": return this.twin_pattern;
      case"singlebig": return this.singlebig_pattern;
      default: this.rotation = true; return ()=>{}
    }
  }
  rad_to_deg(x){
	  return x/Math.PI*180;
  }
  deg_to_rad(x){
	  return x*Math.PI/180;
  }
  generate_entities(delta,area){
    this.shoot_angle+=this.deg_to_rad(this.turn_speed*this.direction*delta/1e3);
    this.shot_interval-=this.shot_acceleration*delta/1e3;
    this.turn_speed+=this.turn_acceleration*delta/(1e3/30);
    this.pattern(delta,area);
  }
  cone_pattern(delta,area){
    function angle_difference(x,y){
      return Math.min(Math.abs(y-x),Math.abs(y-x+Math.PI*2),Math.abs(y-x-Math.PI*2))
    };
    if(Math.abs(angle_difference(this.shoot_angle,this.initial_angle)) >= this.deg_to_rad(this.cone_angle)){
      // Avoid accumulation floating point error by resetting angle.
      this.shoot_angle = this.initial_angle + this.deg_to_rad(this.cone_angle * this.direction);
      this.direction *= -1;
    }

    if(this.prepare_shot(delta)){
      this.addBullet(area,this.x,this.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.shoot_angle),this.projectile_duration)
    }
  }
  spiral_pattern(delta,area){
    if(this.prepare_shot(delta)){
      this.addBullet(area,this.x,this.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.shoot_angle),this.projectile_duration)
    }
  }
  singlebig_pattern(delta,area){
    if(this.prepare_shot(delta)){
      const big_radius = this.projectile_radius*3;
      const big_speed = this.projectile_speed;
      const offset_distance = big_radius / 2
      const newPos = {x:this.x + Math.cos(this.initial_angle) * offset_distance,
                      y:this.y + Math.sin(this.initial_angle) * offset_distance}
      this.addBullet(area,newPos.x,newPos.y,big_speed,big_radius,this.rad_to_deg(this.initial_angle),this.projectile_duration)
    }
  }
  quadspiral_pattern(delta,area){
    if(this.prepare_shot(delta)){
	  var i=0;
	  while(i<4){
        this.addBullet(area,this.x,this.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.shoot_angle)+(i++)*90,this.projectile_duration)
	  }
    }
  }
  twin_pattern(delta,area){
    if(this.prepare_shot(delta)){
      this.direction *= -1;

      const perpendicular_angle = this.initial_angle + Math.PI / 2 * this.direction;
      const offset_distance = 15;
      const newPos = {x: this.x + Math.cos(perpendicular_angle) * offset_distance,
                      y: this.y + Math.sin(perpendicular_angle) * offset_distance}
      this.addBullet(area,newPos.x,newPos.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.initial_angle),this.projectile_duration)
    }
  }
  cone_edges_pattern(delta,area){
    if(this.prepare_shot(delta)){
      this.addBullet(area,this.x,this.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.shoot_angle)+this.cone_angle,this.projectile_duration)
      this.addBullet(area,this.x,this.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.shoot_angle)-this.cone_angle,this.projectile_duration)
    }
  }
  twinspiral_pattern(delta,area){
    if(this.prepare_shot(delta)){
	  var i=0;
	  while(i<2){
        this.addBullet(area,this.x,this.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.shoot_angle)+(i++)*180,this.projectile_duration)
	  }
    }
  }
  twincone_pattern(delta,area){
    function angle_difference(x,y){
      return Math.min(Math.abs(y-x),Math.abs(y-x+Math.PI*2),Math.abs(y-x-Math.PI*2))
    };

    const angle_moved = angle_difference(this.shoot_angle, this.initial_angle);

    if(Math.abs(angle_moved) >= this.deg_to_rad(this.cone_angle)){
      // Avoid accumulation floating point error by resetting angle.
      this.shoot_angle = this.initial_angle + this.deg_to_rad(this.cone_angle * this.direction);
      this.direction *= -1;
    }

    if(this.prepare_shot(delta)){
      this.addBullet(area,this.x,this.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.initial_angle+angle_moved),this.projectile_duration)
      this.addBullet(area,this.x,this.y,this.projectile_speed,this.projectile_radius,this.rad_to_deg(this.initial_angle-angle_moved),this.projectile_duration)
    }
  }
  addBullet(area,x,y,speed,radius,angle,duration){
	  const projectile=new FrostGiantIceProjectile(x,y,radius,speed,angle,duration);
	  projectile.area=this.area;projectile.z=this.z;
	  area.entities.push(projectile);
  }
  onCollide(){
	  this.shoot_angle=this.angle;
  }
  update(delta,area,players) {
    if(!this.rotation){
      this.generate_entities(delta,area);
    }
    if(this.rotation){
      this.velangle();
      this.angle += this.deg_to_rad(2*this.turn_speed*this.direction*delta/1e3);
      this.anglevel();
    }
    super.update(delta,area,players);
  }
}
class FrostGiantIceProjectile extends Enemy{
  constructor(x,y,radius,speed,angle,projectile_duration){
    super(x,y,radius,speed,angle,"frost_giant_ice_projectile");
	  this.duration=projectile_duration;
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.duration -= delta;
    if (this.duration <= 0) {
      this.duration = Math.max(0,this.duration);
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class PositiveMagneticSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"positive_magnetic_sniper_enemy");
    this.release_interval = 3000;
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new PositiveMagneticSniperProjectile(this.x,this.y,EvadesConfig.defaults.positive_magnetic_sniper_projectile.radius,EvadesConfig.defaults.positive_magnetic_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
	projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class PositiveMagneticSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"positive_magnetic_sniper_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
  playerInteraction(player){
	if(player.isDowned()||player.isInvulnerable)return;
    this.remove=true;
	if(player.magnetDirection=="DOWN"){
		player.magnetDirection="UP";
		if(player.abilityOne.abilityType==getAbilityIndex("Magnetism Down")){
			player.abilityOne.abilityType=getAbilityIndex("Magnetism Up");
			player.abilityOne.name=abilityConfig[player.abilityOne.abilityType].name;
		};
		if(player.abilityTwo.abilityType==getAbilityIndex("Magnetism Down")){
			player.abilityTwo.abilityType=getAbilityIndex("Magnetism Up");
			player.abilityTwo.name=abilityConfig[player.abilityTwo.abilityType].name;
		};
		if(player.abilityThree){
			if(player.abilityThree.abilityType==getAbilityIndex("Magnetism Down")){
				player.abilityThree.abilityType=getAbilityIndex("Magnetism Up");
				player.abilityThree.name=abilityConfig[player.abilityThree.abilityType].name;
			};
		};
	}
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class NegativeMagneticSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"negative_magnetic_sniper_enemy");
    this.release_interval = 3000;
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new NegativeMagneticSniperProjectile(this.x,this.y,EvadesConfig.defaults.negative_magnetic_sniper_projectile.radius,EvadesConfig.defaults.negative_magnetic_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
			projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class NegativeMagneticSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"negative_magnetic_sniper_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
  playerInteraction(player){
	if(player.isDowned()||player.isInvulnerable)return;
    this.remove=true;
    player.magnetDirection="DOWN";
	if(player.abilityOne.abilityType==getAbilityIndex("Magnetism Up")){
		player.abilityOne.abilityType=getAbilityIndex("Magnetism Down");
		player.abilityOne.name=abilityConfig[player.abilityOne.abilityType].name;
	};
	if(player.abilityTwo.abilityType==getAbilityIndex("Magnetism Up")){
		player.abilityTwo.abilityType=getAbilityIndex("Magnetism Down");
		player.abilityTwo.name=abilityConfig[player.abilityTwo.abilityType].name;
	};
	if(player.abilityThree){
		if(player.abilityThree.abilityType==getAbilityIndex("Magnetism Up")){
			player.abilityThree.abilityType=getAbilityIndex("Magnetism Down");
			player.abilityThree.name=abilityConfig[player.abilityThree.abilityType].name;
		};
	};
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class ForceSniperAEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"force_sniper_a_enemy");
    this.release_interval = 3000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new ForceSniperAProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.force_sniper_a_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
			projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = this.release_interval;
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class ForceSniperAProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"force_sniper_a_projectile");
    this.immune=true;
    this.clock = 0;
  	this.isProjectile=true;
	  this.touchedPlayers=[];
  }
  playerInteraction(player,delta){
	  if(this.touchedPlayers.indexOf(player)==-1&&!player.isDowned()&&!player.isInvulnerable){
		  this.touchedPlayers.push(player);
		  player.firstAbilityActivated=!player.firstAbilityActivated;
		  player.handleAbility(player.abilityOne,1,delta,[player.abilityTwo,player.abilityThree],[],true);
	  }
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class ForceSniperBEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"force_sniper_b_enemy");
    this.release_interval = 3000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new ForceSniperBProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.force_sniper_b_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
			projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = this.release_interval;
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class ForceSniperBProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"force_sniper_b_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
	  this.touchedPlayers=[];
  }
  playerInteraction(player,delta){
	  if(this.touchedPlayers.indexOf(player)==-1&&!player.isDowned()&&!player.isInvulnerable){
		  this.touchedPlayers.push(player);
		  player.secondAbilityActivated=!player.secondAbilityActivated;
		  player.handleAbility(player.abilityTwo,2,delta,[player.abilityOne,player.abilityThree],[],true);
	  }
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class WindGhostEnemy extends Enemy{
  constructor(x,y,radius,speed,angle,ignore_invulnerability,ignore_dead_players){
    super(x,y,radius,speed,angle,"wind_ghost_enemy");
	this.gravity=1;
	this.isHarmless=true;
	this.immune=true;
	this.ignore_dead_players=ignore_dead_players;
	this.disabled=true;
	this.ignore_invulnerability=ignore_invulnerability;
  }
  playerInteraction(player,delta){
    var iterations=1024;
	var curIters=0;
	if ((!player.isInvulnerable||this.ignore_invulnerability)&&(!player.isDowned()&&this.ignore_dead_players)||!this.ignore_dead_players) {
	  while(distance({x:0,y:0},{x:player.x - this.x,y:player.y - this.y})<this.radius+player.radius){
		curIters++;
		if(curIters>=iterations)break;
        var dx = player.x - this.x;
        var dy = player.y - this.y;
        var dist = distance({x:0,y:0},{x:dx,y:dy});
        var attractionAmplitude = Math.pow(2, -(dist / 100));
        var moveDist = (this.gravity * attractionAmplitude);
        var angleToPlayer = Math.atan2(dy, dx);
        player.x += (moveDist * Math.cos(angleToPlayer)) * (delta / (1000 / 30));
        player.y += (moveDist * Math.sin(angleToPlayer)) * (delta / (1000 / 30));
	    player.collision(delta);
	  }
    }
  }
}
class WindSniperEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"wind_sniper_enemy");
    this.release_interval = 3000,
    this.releaseTime = (Math.random()*this.release_interval);
  }
  update(delta,area,players) {
    if(this.releaseTime<=0){
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 600**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new WindSniperProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.wind_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180);
			projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.releaseTime = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
    }
    }else if(this.energy>0){
      this.releaseTime -= delta;
    }
    super.update(delta,area,players);
  }
}
class WindSniperProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"wind_sniper_projectile");
  	this.gravity=1;
  	this.isProjectile=true;
	  this.immune=true;
	  this.clock=0;
  }
  playerInteraction(player,delta){
    var iterations=1024;
	var curIters=0;
	if (!player.isInvulnerable) {
	  while(distance({x:0,y:0},{x:player.x - this.x,y:player.y - this.y})<this.radius+player.radius){
		curIters++;
		if(curIters>=iterations)break;
        var dx = player.x - this.x;
        var dy = player.y - this.y;
        var dist = distance({x:0,y:0},{x:dx,y:dy});
        var attractionAmplitude = Math.pow(2, -(dist / 100));
        var moveDist = (this.gravity * attractionAmplitude);
        var angleToPlayer = Math.atan2(dy, dx);
        player.x += (moveDist * Math.cos(angleToPlayer)) * (delta / (1000 / 30));
        player.y += (moveDist * Math.sin(angleToPlayer)) * (delta / (1000 / 30));
	    player.collision(delta);
	  }
    }
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}
class LungingEnemy extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"lunging_enemy");
    this.base_speed = speed;
    this.reset_parameters();
	this.color_change=0;
  }
  reset_parameters(){
    this.lunge_speed = this.base_speed;
    this.normal_speed = 0;
    this.time_to_lunge = 1500;
    this.lunge_timer = 0;
    this.max_lunge_time = 2000;
    this.time_during_lunge = 0;
    this.lunge_cooldown_max = 500;
    this.lunge_cooldown_timer = 0;
    this.base_speed = 0;
    this.compute_speed();
  }
  compute_speed(){
    this.velX = Math.cos(this.angle) * this.base_speed;
    this.velY = Math.sin(this.angle) * this.base_speed;
  }
  getColorChange() {
  	const e = this.hexToRgb(this.color);
  	return e.r += this.color_change,
  	e.g -= 1.45 * this.color_change,
  	e.b -= 1.3 * this.color_change,
  	`rgb(${e.r}, ${e.g}, ${e.b})`
  }
  update(delta,area,players) {
    this.heating = false;
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 250**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if (this.time_during_lunge > 0){
      if(this.time_during_lunge >= this.max_lunge_time){
        this.time_during_lunge = 0;
        this.lunge_cooldown_timer = 1;
        this.base_speed = this.normal_speed;
        this.compute_speed();
      } else {
        this.time_during_lunge += delta;
        this.base_speed = this.lunge_speed * (1 - (this.time_during_lunge / this.max_lunge_time));
        this.compute_speed();
      }
    }
    if(this.lunge_cooldown_timer > 0){
      if(this.lunge_cooldown_timer > this.lunge_cooldown_max){
        this.lunge_cooldown_timer = 0;
      } else {
        this.lunge_cooldown_timer += delta;
        this.color_change = 55-Math.floor(55*this.lunge_cooldown_timer/this.lunge_cooldown_max)
      }
    }
    else {
      let lunge_time_ratio = this.lunge_timer / this.time_to_lunge;
      if(closest_entity != undefined){
		distance_x = this.x - closest_entity.x;
		distance_y = this.y - closest_entity.y;
        let target_angle = Math.atan2(distance_y,distance_x)+Math.PI;
        target_angle += Math.random() * Math.PI/8 - Math.PI/16;
        if (this.time_during_lunge == 0){
          this.lunge_timer += delta;
          this.color_change = Math.floor(55 * lunge_time_ratio);
          if(this.lunge_timer >= this.time_to_lunge){
            this.lunge_timer = 0;
            this.time_during_lunge = 1;
            this.base_speed = this.lunge_speed;
            this.change_angle(target_angle);
          }
        }
      } else {
		let target_angle = this.target_angle;
        if(this.lunge_timer > 0){
          this.lunge_timer-=delta;
          this.color_change = Math.floor(55 * lunge_time_ratio);
        }
        if(this.lunge_timer < 0){
          this.lunge_timer = 0;
        }
      }
      if (lunge_time_ratio > 0.75){
		this.is_shaking=true;
        this.x+=Math.round(Math.random()*4-2);
        this.y+=Math.round(Math.random()*4-2);
      }
    }
	this.speed=this.base_speed;
	super.update(delta,area,players);
  }
  onCollide(){
    this.compute_speed();
  }
  change_angle(angle){
    this.angle = angle;
    this.compute_speed();
  }
}
class StalactiteEnemy extends Enemy {
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"stalactite_enemy");
    this.hasCollided=false;
    this.immune=true;
    this.collideTime=0;
  }
  update(delta, area,players) {
	if(this.hasCollided){
		let projectile;
		!this.collideTime&&(
			projectile=new StalactiteEnemyProjectile(this.x,this.y,this.radius/2,EvadesConfig.defaults.stalactite_enemy_projectile.speed),
			projectile.area=this.area,
			projectile.z=this.z,
			area.entities.push(projectile)
		);
      this.collideTime += delta;
      if (this.collideTime > 500) {
        this.hasCollided = false;
        this.collideTime = 0;
      } else {
        this.speedMultiplier = 0;
      }
    }
	super.update(delta,area,players);
  }
  onCollide(){
    this.hasCollided = true;
  }
}
class StalactiteEnemyProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"stalactite_enemy_projectile");
	  this.duration=1500;
  }
  update(delta,area,players) {
    this.duration -= delta;
    if (this.duration <= 0){
      this.remove = true;
	  this.duration=0;
    }
    super.update(delta,area,players);
  }
}

//Cyber Castle Bosses (may be unstable based on the enemy type and will crash anytime)
class AibotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,aibot_radius=defaultValues.spawner.aibot_radius){
		super(x,y,radius,speed,angle,"aibot_enemy");
		this.maxHealth=400;
		this.health=this.maxHealth;
		this.name="Aibot";
		this.enemy_spawn_limit=16;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.target_player=null;
		this.losing_health=false;
		this.total_player_count = new Set;
		this.effects.push({radius:aibot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		let active_players = players.filter(e=>{return !e.isDowned()&&!e.safeZone});
		for(let entity of active_players){
			if (entity.debuff_type=="aibot_debuff"){
				let x_dist=entity.x-this.x,
				y_dist=entity.y-this.y,
				dist_to_ball=Math.sqrt(x_dist**2+y_dist**2),
				repulsion=1020*entity.effectImmune,
				attraction_amplitude=Math.pow(2,-(dist_to_ball/100)),
				move_dist=repulsion*attraction_amplitude/1e3*delta,
				angle_to_ball=Math.atan2(y_dist,x_dist);
				entity.under_effects=true;
				entity.x+=move_dist*Math.cos(angle_to_ball);
				entity.y+=move_dist*Math.sin(angle_to_ball);
				entity.collision(0)
			}
		}
		if(this.losing_health)this.damage(13.5*delta/1e3);
		if(this.health<=0){
			for(let entity of players){
				entity.aibot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="upper_left";
				if(
					entity.aibot_defeated
					&&entity.fibot_defeated
					&&entity.wabot_defeated
					&&entity.eabot_defeated
				){
					if(!entity.abilityThree)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0){
				this.release_ready=true;
				this.target_player=null;
				this.total_player_count=new Set;
			}
		}else{
			for(let entity of players){
				if(!this.total_player_count.has(entity))this.total_player_count.add(entity);
				if(entity.debuff_type=="aibot_debuff"||entity.effectImmune==0||entity.isDowned()||entity.godmode == 2)continue;
				if(this.target_player==null)if(Math.random()>0.75)this.target_player=entity;
			}
			if(this.target_player!=null){
				this.target_player.debuff_type="aibot_debuff";
				this.target_player.hasWindDebuff=true;
				this.release_interval=12000/this.total_player_count.size;
				this.release_time=this.release_interval;
				this.release_ready=false;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				area.entities.push(new WindGhostEnemy(this.x,this.y,54,30,void 0,false,null));
				area.entities.push(new RepellingGhostEnemy(this.x,this.y,90,180,void 0));
				area.entities.push(new DisablingGhostEnemy(this.x,this.y,72,195,void 0));
				area.entities.push(new WindSniperEnemy(this.x,this.y,30,600,void 0));
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=4;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
	}
	generation_disabled(){
		return false;
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class WabotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,wabot_radius=defaultValues.spawner.wabot_radius){
		super(x,y,radius,speed,angle,"wabot_enemy");
		this.maxHealth=400;
		this.health=this.maxHealth;
		this.name="Wabot";
		this.enemy_spawn_limit=20;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.target_player=null;
		this.losing_health=false;
		this.total_player_count = new Set();
		this.effects.push({radius:wabot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5/1e3*delta);
		if(this.health<=0){
			for(let entity of players){
				entity.wabot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="upper_right";
				if(
					entity.aibot_defeated
					&&entity.fibot_defeated
					&&entity.wabot_defeated
					&&entity.eabot_defeated
				){
					if(entity.abilityThree==null)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0){
				this.release_ready=true;
				this.target_player=null;
				this.total_player_count=new Set();
			}
		}else{
			for(let entity of players){
				if(!this.total_player_count.has(entity))this.total_player_count.add(entity);
				if(entity.debuff_type=="wabot_debuff"||entity.effectImmune==0||entity.isDowned()||entity.godmode == 2)continue;
				if(this.target_player==null)if(Math.random()>0.75)this.target_player=entity;
			}
			if(this.target_player!=null){
				this.target_player.debuff_type="wabot_debuff";
				this.target_player.hasWaterDebuff=true;
				this.release_interval=12000/this.total_player_count.size;
				this.release_time=this.release_interval;
				this.release_ready=false;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				area.entities.push(new LiquidEnemy(this.x,this.y,18,90,void 0,defaultValues.spawner.player_detection_radius))
				area.entities.push(new FreezingEnemy(this.x,this.y,3,300,void 0,defaultValues.spawner.freezing_radius))
				area.entities.push(new IcicleEnemy(this.x,this.y,30,360,void 0,defaultValues.spawner.horizontal))
				area.entities.push(new SnowmanEnemy(this.x,this.y,15,360,void 0))
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=4;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class EabotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,eabot_radius=defaultValues.spawner.eabot_radius){
		super(x,y,radius,speed,angle,"eabot_enemy");
		this.maxHealth=400;
		this.health=this.maxHealth;
		this.name="Eabot";
		this.enemy_spawn_limit=24;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.target_player=null;
		this.losing_health=false;
		this.total_player_count = new Set();
		this.effects.push({radius:eabot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5*delta/1e3);
		if(this.health<=0){
			for(let entity of players){
				entity.eabot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="lower_left";
				if(
					entity.aibot_defeated
					&&entity.fibot_defeated
					&&entity.wabot_defeated
					&&entity.eabot_defeated
				){
					if(entity.abilityThree==null)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0){
				this.release_ready=true;
				this.target_player=null;
				this.total_player_count=new Set();
			}
		}else{
			for(let entity of players){
				if(!this.total_player_count.has(entity))this.total_player_count.add(entity);
				if(entity.debuff_type=="eabot_debuff"||entity.effectImmune==0||entity.isDowned()||entity.godmode == 2)continue;
				if(this.target_player==null)if(Math.random()>0.75)this.target_player=entity;
			}
			if(this.target_player!=null){
				this.target_player.debuff_type="eabot_debuff";
				this.target_player.hasEarthDebuff=true;
				this.target_player.isStone=true;
				this.target_player.energy=0;
				this.release_interval=12000/this.total_player_count.size;
				this.release_time=this.release_interval;
				this.release_ready=false;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				area.entities.push(new SandEnemy(this.x,this.y,18,150,void 0))
				area.entities.push(new SandrockEnemy(this.x,this.y,24,450,void 0))
				area.entities.push(new QuicksandEnemy(this.x,this.y,8,300,void 0,100,defaultValues.spawner.quicksand_strength))
				area.entities.push(new CrumblingEnemy(this.x,this.y,30,300,void 0))
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=4;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class FibotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,fibot_radius=defaultValues.spawner.fibot_radius){
		super(x,y,radius,speed,angle,"fibot_enemy");
		this.maxHealth=400;
		this.health=this.maxHealth;
		this.name="Fibot";
		this.enemy_spawn_limit=24;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.target_player=null;
		this.losing_health=false;
		this.total_player_count = new Set();
		this.effects.push({radius:fibot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5/1e3*delta);
		if(this.health<=0){
			for(let entity of players){
				entity.fibot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="lower_right";
				if(
					entity.aibot_defeated
					&&entity.fibot_defeated
					&&entity.wabot_defeated
					&&entity.eabot_defeated
				){
					if(entity.abilityThree==null)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0){
				this.release_ready=true;
				this.target_player=null;
				this.total_player_count=new Set();
			}
		}else{
			for(let entity of players){
				if(!this.total_player_count.has(entity))this.total_player_count.add(entity);
				if(entity.debuff_type=="fibot_debuff"||entity.effectImmune==0||entity.effects_immune_time>0||entity.isDowned()||entity.godmode == 2)continue;
				if(this.target_player==null)if(Math.random()>0.75)this.target_player=entity;
			}
			if(this.target_player!=null){
				this.target_player.debuff_type="fibot_debuff";
				this.target_player.hasFireDebuff=true;
				this.target_player.electrifyInterval=4000;
				this.target_player.electrify_time=this.target_player.electrifyInterval;
				this.release_interval=12000/this.total_player_count.size;
				this.release_time=this.release_interval;
				this.release_ready=false;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				area.entities.push(new FireTrailEnemy(this.x,this.y,30,150,void 0))
				area.entities.push(new LavaEnemy(this.x,this.y,12,120,void 0,defaultValues.spawner.lava_radius))
				area.entities.push(new LungingEnemy(this.x,this.y,24,450,void 0))
				area.entities.push(new SizingEnemy(this.x,this.y,18,360,void 0))
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=4;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class DabotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,dabot_radius=defaultValues.spawner.dabot_radius){
		super(x,y,radius,speed,angle,"dabot_enemy");
		this.maxHealth=500;
		this.health=this.maxHealth;
		this.name="Dabot";
		this.enemy_spawn_limit=5;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.losing_health=false;
		this.total_player_count = new Set();
		this.effects.push({radius:dabot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5/1e3*delta);
		if(this.health<=0){
			for(let entity of players){
				entity.dabot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="upper_left";
				if(
					entity.icbot_defeated
					&&entity.elbot_defeated
					&&entity.mebot_defeated
					&&entity.libot_defeated
					&&entity.dabot_defeated
					&&entity.plbot_defeated
				){
					if(!entity.abilityThree)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				area.entities.push(new GravityEnemy(this.x,this.y,18,30,void 0,defaultValues.spawner.gravity_radius,defaultValues.spawner.gravity))
				area.entities.push(new GravityEnemy(this.x,this.y,18,30,void 0,defaultValues.spawner.gravity_radius,defaultValues.spawner.gravity))
				area.entities.push(new RepellingEnemy(this.x,this.y,18,30,void 0,defaultValues.spawner.repelling_radius,defaultValues.spawner.repulsion))
				area.entities.push(new RepellingEnemy(this.x,this.y,18,30,void 0,defaultValues.spawner.repelling_radius,defaultValues.spawner.repulsion))
				if(this.enemy_spawns==0){
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
					area.entities.push(new TeleportingEnemy(this.x,this.y,18,1440/21,void 0))
				}
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=1;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
		//if(this.spark_time>0||this.stomped_push_time>0||this.energy<=0||this.is_disabled)return;
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0)this.release_ready=true;
		}else{
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      if(entity.debuff_type=="placeholder")continue;
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 3200**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      area.entities.push(new DabotProjectile(this.x,this.y,EvadesConfig.defaults.dabot_projectile.radius,EvadesConfig.defaults.dabot_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180))
			area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
      this.release_time = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
      this.release_ready = false;
    }
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class ElbotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,elbot_radius=defaultValues.spawner.elbot_radius){
		super(x,y,radius,speed,angle,"elbot_enemy");
		this.maxHealth=500;
		this.health=this.maxHealth;
		this.name="Elbot";
		this.enemy_spawn_limit=4;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.losing_health=false;
		this.effects.push({radius:elbot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=2000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5/1e3*delta);
		if(this.health<=0){
			for(let entity of players){
				entity.dabot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="upper_right";
				if(
					entity.icbot_defeated
					&&entity.elbot_defeated
					&&entity.mebot_defeated
					&&entity.libot_defeated
					&&entity.dabot_defeated
					&&entity.plbot_defeated
				){
					if(!entity.abilityThree)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				if(this.enemy_spawns==0){
					area.entities.push(new ElectricalEnemy(this.x,this.y,18,180,void 0))
					area.entities.push(new ElectricalEnemy(this.x,this.y,18,180,void 0))
					area.entities.push(new ElectricalEnemy(this.x,this.y,18,180,void 0))
					area.entities.push(new ElectricalEnemy(this.x,this.y,18,180,void 0))
					area.entities.push(new ElectricalEnemy(this.x,this.y,18,180,void 0))
				}else{
					area.entities.push(new SparkingEnemy(this.x,this.y,18,180,void 0))
					area.entities.push(new SparkingEnemy(this.x,this.y,18,180,void 0))
					area.entities.push(new ThunderboltEnemy(this.x,this.y,75,300,void 0))
					area.entities.push(new ThunderboltEnemy(this.x,this.y,75,300,void 0))
					area.entities.push(new StaticEnemy(this.x,this.y,24,90,void 0))
					area.entities.push(new StaticEnemy(this.x,this.y,24,90,void 0))
					area.entities.push(new StaticEnemy(this.x,this.y,24,90,void 0))
					area.entities.push(new StaticEnemy(this.x,this.y,24,90,void 0))
					area.entities.push(new StaticEnemy(this.x,this.y,24,90,void 0))
				}
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players),void 0 !== e.uX && (e.x=e.uX),void 0 !== e.uY && (e.y=e.uY))]);
				this.enemy_spawns+=1;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
		//if(this.spark_time>0||this.stomped_push_time>0||this.energy<=0||this.is_disabled)return;
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0)this.release_ready=true;
		}else{
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
      var distance_x;
      var distance_y;
      var distance;
      for(var entity of information){
        if(entity.debuff_type=="placeholder")continue;
        distance_x = this.x - entity.x;
        distance_y = this.y - entity.y;
        distance = distance_x**2 + distance_y**2
        if(distance > 3200**2)continue;
        if(closest_entity==void 0){
          closest_entity=entity;
          closest_entity_distance = distance;
        }else if(closest_entity_distance>distance){
          closest_entity=entity;
          closest_entity_distance = distance;
        }
      }
      if(closest_entity!=void 0){
        distance_x = this.x - closest_entity.x;
        distance_y = this.y - closest_entity.y;
        area.entities.push(new ElbotProjectile(this.x,this.y,EvadesConfig.defaults.elbot_projectile.radius,EvadesConfig.defaults.elbot_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180))
		  	area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
        this.release_time = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
        this.release_ready=false;
      }
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class IcbotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,icbot_radius=defaultValues.spawner.icbot_radius){
		super(x,y,radius,speed,angle,"icbot_enemy");
		this.maxHealth=500;
		this.health=this.maxHealth;
		this.name="Icbot";
		this.enemy_spawn_limit=4;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.losing_health=false;
		this.effects.push({radius:icbot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5/1e3*delta);
		if(this.health<=0){
			for(let entity of players){
				entity.icbot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="upper_right";
				if(
					entity.icbot_defeated
					&&entity.elbot_defeated
					&&entity.mebot_defeated
					&&entity.libot_defeated
					&&entity.dabot_defeated
					&&entity.plbot_defeated
				){
					if(!entity.abilityThree)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				area.entities.push(new IceSniperEnemy(this.x,this.y,18,90,void 0))
				area.entities.push(new IceGhostEnemy(this.x,this.y,18,90,void 0))
				area.entities.push(new IceGhostEnemy(this.x,this.y,18,90,void 0))
				area.entities.push(new IceGhostEnemy(this.x,this.y,18,90,void 0))
				area.entities.push(new IceGhostEnemy(this.x,this.y,18,90,void 0))
				area.entities.push(new FreezingEnemy(this.x,this.y,18,150,void 0,120))
				area.entities.push(new SnowmanEnemy(this.x,this.y,6,180,void 0))
				area.entities.push(new SnowmanEnemy(this.x,this.y,6,180,void 0))
				area.entities.push(new SnowmanEnemy(this.x,this.y,6,180,void 0))
				area.entities.push(new SnowmanEnemy(this.x,this.y,6,180,void 0))
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=1;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
		//if(this.spark_time>0||this.stomped_push_time>0||this.energy<=0||this.is_disabled)return;
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0)this.release_ready=true;
		}else{
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      if(entity.debuff_type=="placeholder")continue;
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 3200**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      area.entities.push(new IceSniperProjectile(this.x,this.y,EvadesConfig.defaults.ice_sniper_projectile.radius*3,EvadesConfig.defaults.ice_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180))
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
      this.release_time = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
	  this.release_ready=false;
    }
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class LibotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,libot_radius=defaultValues.spawner.libot_radius){
		super(x,y,radius,speed,angle,"libot_enemy");
		this.maxHealth=500;
		this.health=this.maxHealth;
		this.name="Libot";
		this.enemy_spawn_limit=4;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.losing_health=false;
		this.effects.push({radius:libot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=2000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5/1e3*delta);
		if(this.health<=0){
			for(let entity of players){
				entity.libot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="upper_right";
				if(
					entity.icbot_defeated
					&&entity.elbot_defeated
					&&entity.mebot_defeated
					&&entity.libot_defeated
					&&entity.dabot_defeated
					&&entity.plbot_defeated
				){
					if(!entity.abilityThree)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				if(this.enemy_spawns==3){
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
					area.entities.push(new DasherEnemy(this.x,this.y,24,240,void 0))
				}else{
					area.entities.push(new NormalEnemy(this.x,this.y,12,180,void 0))
					area.entities.push(new NormalEnemy(this.x,this.y,12,180,void 0))
					area.entities.push(new NormalEnemy(this.x,this.y,12,180,void 0))
					area.entities.push(new NormalEnemy(this.x,this.y,12,180,void 0))
					area.entities.push(new SlowingEnemy(this.x,this.y,12,90,void 0,150+this.enemy_spawns*16,defaultValues.spawner.slow))
					area.entities.push(new SlowingEnemy(this.x,this.y,12,90,void 0,150+this.enemy_spawns*16,defaultValues.spawner.slow))
					area.entities.push(new SlowingEnemy(this.x,this.y,12,90,void 0,150+this.enemy_spawns*16,defaultValues.spawner.slow))
					area.entities.push(new SlowingEnemy(this.x,this.y,12,90,void 0,150+this.enemy_spawns*16,defaultValues.spawner.slow))
					area.entities.push(new SlowingEnemy(this.x,this.y,12,90,void 0,150+this.enemy_spawns*16,defaultValues.spawner.slow))
					area.entities.push(new SlowingEnemy(this.x,this.y,12,90,void 0,150+this.enemy_spawns*16,defaultValues.spawner.slow))
					area.entities.push(new SlowingEnemy(this.x,this.y,12,90,void 0,150+this.enemy_spawns*16,defaultValues.spawner.slow))
					area.entities.push(new SlowingEnemy(this.x,this.y,12,90,void 0,150+this.enemy_spawns*16,defaultValues.spawner.slow))
					area.entities.push(new DrainingEnemy(this.x,this.y,12,120,void 0,150+this.enemy_spawns*16,defaultValues.spawner.drain))
					area.entities.push(new DrainingEnemy(this.x,this.y,12,120,void 0,150+this.enemy_spawns*16,defaultValues.spawner.drain))
				}
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=1;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
		//if(this.spark_time>0||this.stomped_push_time>0||this.energy<=0||this.is_disabled)return;
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0)this.release_ready=true;
		}else{
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      if(entity.debuff_type=="placeholder")continue;
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 3200**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      area.entities.push(new LibotProjectile(this.x,this.y,EvadesConfig.defaults.libot_projectile.radius,EvadesConfig.defaults.libot_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180))
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
      this.release_time = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
      this.release_ready = false;
    }
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class MebotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,mebot_radius=defaultValues.spawner.mebot_radius){
		super(x,y,radius,speed,angle,"mebot_enemy");
		this.maxHealth=500;
		this.health=this.maxHealth;
		this.name="Mebot";
		this.enemy_spawn_limit=4;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.losing_health=false;
		this.effects.push({radius:mebot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5/1e3*delta);
		if(this.health<=0){
			for(let entity of players){
				entity.mebot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="lower_right";
				if(
					entity.icbot_defeated
					&&entity.elbot_defeated
					&&entity.mebot_defeated
					&&entity.libot_defeated
					&&entity.dabot_defeated
					&&entity.plbot_defeated
				){
					if(!entity.abilityThree)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				if(this.enemy_spawns==0){
					area.entities.push(new SwitchEnemy(this.x,this.y,40,150,void 0,defaultValues.spawner.switch_interval,defaultValues.spawner.switch_time,void 0))
					area.entities.push(new SwitchEnemy(this.x,this.y,40,150,void 0,defaultValues.spawner.switch_interval,defaultValues.spawner.switch_time,void 0))
					area.entities.push(new SwitchEnemy(this.x,this.y,40,150,void 0,defaultValues.spawner.switch_interval,defaultValues.spawner.switch_time,void 0))
					area.entities.push(new SwitchEnemy(this.x,this.y,40,150,void 0,defaultValues.spawner.switch_interval,defaultValues.spawner.switch_time,void 0))
					area.entities.push(new SwitchEnemy(this.x,this.y,40,150,void 0,defaultValues.spawner.switch_interval,defaultValues.spawner.switch_time,void 0))
					area.entities.push(new SwitchEnemy(this.x,this.y,40,150,void 0,defaultValues.spawner.switch_interval,defaultValues.spawner.switch_time,void 0))
					area.entities.push(new SwitchEnemy(this.x,this.y,40,150,void 0,defaultValues.spawner.switch_interval,defaultValues.spawner.switch_time,void 0))
					area.entities.push(new SwitchEnemy(this.x,this.y,40,150,void 0,defaultValues.spawner.switch_interval,defaultValues.spawner.switch_time,void 0))
				}else{
					area.entities.push(new ImmuneEnemy(this.x,this.y,18,90,void 0))
					area.entities.push(new ImmuneEnemy(this.x,this.y,18,90,void 0))
					area.entities.push(new ImmuneEnemy(this.x,this.y,18,90,void 0))
					area.entities.push(new ImmuneEnemy(this.x,this.y,30,90,void 0))
					area.entities.push(new SniperEnemy(this.x,this.y,24,150,void 0,defaultValues.spawner.recharge))
					if(this.enemy_spawns%2==1)
						area.entities.push(new RadiatingBulletsEnemy(this.x,this.y,12,180,void 0,defaultValues.spawner.release_interval,defaultValues.spawner.release_time));
				}
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=1;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
		//if(this.spark_time>0||this.stomped_push_time>0||this.energy<=0||this.is_disabled)return;
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0)this.release_ready=true;
		}else{
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      if(entity.debuff_type=="placeholder")continue;
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 3200**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
	  const projectile=new SniperProjectile(this.x,this.y,EvadesConfig.defaults.sniper_projectile.radius*3,EvadesConfig.defaults.sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180)
	  projectile.area=this.area;projectile.z=this.z;
      area.entities.push(projectile)
      this.release_time = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
	  this.release_ready=false;
    }
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class PlbotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,plbot_radius=defaultValues.spawner.plbot_radius){
		super(x,y,radius,speed,angle,"plbot_enemy");
		this.maxHealth=500;
		this.health=this.maxHealth;
		this.name="Plbot";
		this.enemy_spawn_limit=8;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.losing_health=false;
		this.effects.push({radius:plbot_radius,effectType:getEffectIndex("Enemy Boss")})
		this.reset_parameters();
	}
	reset_parameters(){
		this.has_projectiles=true;
		this.release_interval=3000;
		this.release_time=this.release_interval;
		this.release_ready=false;
		this.spawn_enemy_interval=1000;
		this.spawn_enemy_time=this.spawn_enemy_interval
		this.spawn_enemy_ready=false;
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.losing_health)this.damage(13.5/1e3*delta);
		if(this.health<=0){
			for(let entity of players){
				entity.plbot_defeated=true;
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="lower_left";
				if(
					entity.icbot_defeated
					&&entity.elbot_defeated
					&&entity.mebot_defeated
					&&entity.libot_defeated
					&&entity.dabot_defeated
					&&entity.plbot_defeated
				){
					if(!entity.abilityThree)
						entity.abilityThree={abilityType:102};
					entity.ability_removed=false;
				}
				entity.cannot_leave_area=false;
			}
			for(let entity of area.entities.filter(e=>e.isEnemy)){
				entity.remove=true;
			}
		}
	}
	generate_entities(delta,area,players){
		if(!this.spawn_enemy_ready){
			this.spawn_enemy_time -= delta;
			if(this.spawn_enemy_time <=0)
				this.spawn_enemy_ready=true;
		}else{
			if(this.enemy_spawns<this.enemy_spawn_limit){
				if(this.enemy_spawns<6)area.entities.push(new FlowerEnemy(this.x,this.y,32,150,void 0,defaultValues.spawner.growth_multiplier));
				area.entities.push(new SeedlingEnemy(this.x,this.y,12,150,void 0))
				if(this.enemy_spawns%2==0){
					area.entities.push(new CorrosiveEnemy(this.x,this.y,18,90,void 0))
					area.entities.push(new CorrosiveEnemy(this.x,this.y,18,90,void 0))
					area.entities.push(new CactusEnemy(this.x,this.y,40,0,void 0))
				}else{
					area.entities.push(new CorrosiveEnemy(this.x,this.y,12,90,void 0))
					area.entities.push(new CorrosiveEnemy(this.x,this.y,12,90,void 0))
					area.entities.push(new CactusEnemy(this.x,this.y,60,0,void 0))
				}
				if(this.enemy_spawns==7){
					area.entities.push(new SeedlingEnemy(this.x,this.y,36,210,void 0))
				}
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=1;
				this.spawn_enemy_time=this.spawn_enemy_interval;
				this.spawn_enemy_ready=false;
			}
		}
		//if(this.spark_time>0||this.stomped_push_time>0||this.energy<=0||this.is_disabled)return;
		if(!this.release_ready){
			this.release_time-=delta*this.timer_reduction;
			if(this.release_time<=0)this.release_ready=true;
		}else{
    var closest_entity,closest_entity_distance,information=[];
    if(players.length){
      information = players.filter(e=>{return !e.isDowned()&&!e.safeZone&&!e.nightActivated});
    }else if(!playtesting){
      information = [mouseEntity];
    }
    var distance_x;
    var distance_y;
    var distance;
    for(var entity of information){
      if(entity.debuff_type=="placeholder")continue;
      distance_x = this.x - entity.x;
      distance_y = this.y - entity.y;
      distance = distance_x**2 + distance_y**2
      if(distance > 3200**2)continue;
      if(closest_entity==void 0){
        closest_entity=entity;
        closest_entity_distance = distance;
      }else if(closest_entity_distance>distance){
        closest_entity=entity;
        closest_entity_distance = distance;
      }
    }
    if(closest_entity!=void 0){
      distance_x = this.x - closest_entity.x;
      distance_y = this.y - closest_entity.y;
      area.entities.push(new CorrosiveSniperProjectile(this.x,this.y,36,EvadesConfig.defaults.corrosive_sniper_projectile.speed,(Math.atan2(distance_y,distance_x)/Math.PI+1)*180))
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
      this.release_time = (this.release_interval*(-this.energy+this.maxEnergy*2)/this.maxEnergy);
	  this.release_ready=false;
    }
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}
class CybotEnemy extends Enemy{
	constructor(x,y,radius,speed,angle,cybot_radius=defaultValues.spawner.cybot_radius,hard_mode){
		super(x,y,radius,speed,angle,"cybot_enemy");
		this.maxHealth=900;
		this.health=this.maxHealth;
		this.initialX=this.x;
		this.initialY=this.y;
		this.name=hard_mode?"Cybot MK.2":"Cybot";
		this.growing=true;
		this.release_ready=false;
		this.release_interval=50;
		this.release_time=this.release_interval;
		this.enemy_spawn_limit=50;
		this.enemy_spawns=0;
		this.movement_immune=true;
		this.losing_health=false;
		this.hard_mode=hard_mode;
		this.shield_up=false;
		this.shield_time=30000;
		this.shield_time_left=this.shield_time;
		this.can_spawn_ring_snipers=false;
		this.can_remove_ring_projectiles=true;
		this.ring_sniper_count=0;
		this.boss_radius=cybot_radius;
		this.ring_projectiles=[];
		this.effects.push({radius:1,effectType:getEffectIndex("Enemy Cybot")})
		this.effects.push({radius:cybot_radius,ogradius:cybot_radius,effectType:getEffectIndex("Enemy Boss")})
		if(this.hard_mode){
			this.effects.push({radius:384+this.radius,radius:384+this.radius,effectType:getEffectIndex("Enemy Cybot Shield")})
			this.shield_up=true;
		}
	}
	update_parameters(delta,area,players){
		for(let entity of players)
			entity.cannot_leave_area=true;
		if(this.enemy_spawns < this.enemy_spawn_limit){
			this.x=this.initialX;
			this.y=this.initialY;
			this.immune=true;
			this.gainedImmunity=true;
			this.speedMultiplier=0;
		}else{
			if(this.health>=this.maxHealth*0.3){
				this.immune=false;
				this.gainedImmunity=false;
			}
		}
		for(let effect of this.effects){
			if(effect.effectType==getEffectIndex("Enemy Boss")){
				if(this.immune||this.shield_up){
					effect.radius=0;
				}else{
					effect.radius=this.boss_radius;
				}
			}
		}
		if(this.losing_health)this.damage(13.5/1e3*delta);

		//Phase 1
		if(this.health>=this.maxHealth*0.98){
			for(let effect of this.effects){
				if(effect.effectType==getEffectIndex("Enemy Cybot")){
					if(effect.ogradius>0){
						if(this.growing){
							effect.ogradius+=255/1e3*delta;
							if(effect.ogradius>=850)this.growing=false;
						}else{
							effect.ogradius-=21/1e3*delta
							if(effect.ogradius<=1)this.growing=true;
						}
					}
				}
			}
			if(this.shield_up){
				this.shield_time_left -= delta;
				for(let effect of this.effects){
					if(effect.effectType==getEffectIndex("Enemy Cybot Shield")){
						effect.ogradius=384*(this.shield_time_left/this.shield_time)+this.radius;
					}
				}
				if(this.shield_time_left<=0){
					this.shield_up=false;
					this.shield_time_left=this.shield_time;
				}
			}
		// Phase 2
		}else if(this.health>=this.maxHealth*0.3){
			for(let entity of area.entities){
				if(entity instanceof NormalEnemy){
					entity.remove=true;
					this.enemy_spawns=0;
					if(this.hard_mode)
						this.can_spawn_ring_snipers=true;
				}
			}
			for(let effect of this.effects){
				if(effect.effectType==getEffectIndex("Enemy Cybot")){
					if(effect.ogradius>0){
						if(effect.ogradius < 565){
							effect.ogradius+=255/1e3*delta;
						}else if(effect.ogradius > 565){
							effect.ogradius=565;
						}
					}
				}else if(effect.effectType==getEffectIndex("Enemy Cybot Shield")){
					let shield_percentage=this.ring_sniper_count/4;
					if(shield_percentage<=0)this.shield_up=false;
					effect.ogradius=384*shield_percentage+this.radius;
				}
			}
		// Phase 3
		}else if(this.health<this.maxHealth*0.3){
			for(let entity of area.entities){
				if(
					(entity instanceof SlowingEnemy)
					||(entity instanceof DrainingEnemy)
					||(entity instanceof ToxicEnemy)
				){
					entity.remove=true;
					this.enemy_spawns=0;
				}
			}
			if(this.can_remove_ring_projectiles){
				for(let ring of this.ring_projectiles){
					ring.remove=true;
				}
				this.can_remove_ring_projectiles=false;
			}
			for(let effect of this.effects){
				if(effect.effectType==getEffectIndex("Enemy Cybot")){
					if(effect.ogradius>0){
						if(effect.ogradius < 850){
							effect.ogradius+=255/1e3*delta;
						}else if(effect.ogradius > 850){
							effect.ogradius=850;
						}
					}
				}
			}
			if(players.filter(e=>!e.isDowned()).length)
				this.health-=5.4/1e3*delta;
			this.immune=true;
			this.gainedImmunity=true;
			this.speedMultiplier=0;
			this.x=this.initialX;
			this.y=this.initialY;
		}
		// Dead
		if(this.health<=0){
			for(let entity of area.entities){
				if(
					(entity instanceof ImmuneEnemy)
					||(entity instanceof CorrosiveEnemy)
					||(entity instanceof InfectiousEnemy)
					||(entity instanceof WallEnemy)
					||(entity instanceof FrostGiantEnemy)
				) entity.remove=true;
			}
			for(let entity of players){
				entity.boss_kick_timer=300000;
				entity.boss_area_exit="top_middle";
				if(this.hard_mode)
					entity.cybot_hard_mode_defeated=true;
				else	entity.cybot_defeated=true;
				entity.cannot_leave_area=false;
			}
			for(let ring of this.ring_projectiles){
				ring.remove=true;
			}
			this.health=-1;
			this.remove=true;
		}
	}
	generate_entities(delta,area,players){
		if(!this.release_ready){
			this.release_time -= delta;
			if(this.release_time <=0)
				this.release_ready=true;
		}else{
			// Phase 1
			if(this.health>=this.maxHealth*0.98&&this.immune&&this.enemy_spawns<this.enemy_spawn_limit){
				if(this.hard_mode)area.entities.push(new NormalEnemy(this.x,this.y,15,225,this.target_angle))
				else area.entities.push(new NormalEnemy(this.x,this.y,15,180,this.target_angle))
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.enemy_spawns+=1;
				this.release_time=this.release_interval;
				this.release_ready=false;
				this.target_angle+=28.8;
			}
			// Phase 2
			if(this.health>=this.maxHealth*0.3&&this.health<this.maxHealth*0.98&&this.immune&&this.enemy_spawns<this.enemy_spawn_limit){
				if(this.hard_mode){
					area.entities.push(new SlowingEnemy(this.x,this.y,5,300,this.target_angle,50,defaultValues.spawner.slow))
					this.target_angle+=190;
					area.entities.push(new DrainingEnemy(this.x,this.y,5,300,this.target_angle,50,defaultValues.spawner.drain))
					this.target_angle+=190;
					area.entities.push(new ToxicEnemy(this.x,this.y,5,300,this.target_angle,50))
					this.target_angle+=190;
					this.enemy_spawns+=3;
				}else{
					area.entities.push(new SlowingEnemy(this.x,this.y,4,300,this.target_angle,50,defaultValues.spawner.slow))
					this.target_angle+=190;
					area.entities.push(new DrainingEnemy(this.x,this.y,4,300,this.target_angle,50,defaultValues.spawner.drain))
					this.target_angle+=190;
					this.enemy_spawns+=2;
				}
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.release_time = this.release_interval;
				this.release_ready = false;
				if(this.can_spawn_ring_snipers&&this.ring_sniper_count==0){
					//Globally positioned in the minimap.
					//let ring_sniper_positions=[[27264,158464],[27264,159530],[28320,158464],[28320,159530]];
					//Relative to area.
					//let ring_sniper_positions=[[48,48],[48,1114],[1104,48],[1104,1114]];
					//Relative to cybot's initial spawn.
					let ring_sniper_positions=[[-528,-528],[-528,538],[528,-528],[528,538]];
					for(let pos of ring_sniper_positions){
						let ring_sniper=new RingSniperEnemy(this.x+pos[0],this.y+pos[1],24,0,0,this,defaultValues.spawner.health,defaultValues.spawner.ring_sniper_radius)
						ring_sniper.z=this.z;
						ring_sniper.area=this.area;
						area.entities.push(ring_sniper);
						this.ring_sniper_count+=1;
					}
					this.shield_up=true;
					this.can_spawn_ring_snipers=false;
				}
			}
			// Phase 3
			if(this.health>0&&this.health<this.maxHealth*0.3&&this.immune&&this.enemy_spawns<this.enemy_spawn_limit){
				this.release_interval=200;
				if(this.hard_mode){
					let ring_sniper_projectile=new CybotRingProjectile(this.x,this.y,EvadesConfig.defaults.cybot_ring_projectile.radius,EvadesConfig.defaults.cybot_ring_projectile.speed,this.target_angle);
					ring_sniper_projectile.z=this.z;
					area.entities.push(ring_sniper_projectile);
					this.ring_projectiles.push(ring_sniper_projectile);
					this.target_angle+=130;
					ring_sniper_projectile=new CybotRingProjectile(this.x,this.y,EvadesConfig.defaults.cybot_ring_projectile.radius,EvadesConfig.defaults.cybot_ring_projectile.speed,this.target_angle);
					ring_sniper_projectile.z=this.z;
					area.entities.push(ring_sniper_projectile)
					this.ring_projectiles.push(ring_sniper_projectile);
					this.enemy_spawns+=2;
				}else{
					area.entities.push(new ImmuneEnemy(this.x,this.y,40,180,this.target_angle))
					this.target_angle+=130;
					area.entities.push(new CorrosiveEnemy(this.x,this.y,40,180,this.target_angle))
					this.target_angle+=130;
					area.entities.push(new InfectiousEnemy(this.x,this.y,40,180,this.target_angle))
					this.enemy_spawns+=3;
				}
				area.entities.map(e=>[void 0==e.area&&(e.area=this.area,e.z=this.z,e.collision(0,players))]);
				this.target_angle+=130;
				this.release_time=this.release_interval;
				this.release_ready=false;
			}
		}
	}
	damage(damage){
		this.health-=damage;
		this.losing_health=false;
	}
	update(delta,area,players){
		this.update_parameters(delta,area,players);
		this.generate_entities(delta,area,players);
		super.update(delta,area,players);
	}
}

class LibotProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"libot_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
  playerInteraction(player){
	  if(!player.isInvulnerable && !player.isDowned()){
	    player.underLibotEffect=true;
	    player.libotEffectTimeLeft=5000;
	  }
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000)
      this.remove = true;
    super.update(delta,area,players);
  }
}
class DabotProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"dabot_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
  playerInteraction(player){
	  if(!player.isInvulnerable && !player.isDowned()){
	    player.underDabotEffect=true;
	    player.dabotEffectTimeLeft=5000;
	  }
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000)
      this.remove = true;
    super.update(delta,area,players);
  }
}
class ElbotProjectile extends Enemy{
  constructor(x,y,radius,speed,angle){
    super(x,y,radius,speed,angle,"elbot_projectile");
    this.immune=true;
  	this.isProjectile=true;
    this.clock = 0;
  }
  playerInteraction(player){
	  if(!player.isInvulnerable && !player.isDowned()){
	    player.isElectrocuted=true;
	    player.electrocutedTimeLeft=1000*player.effectImmune;
	  }
  }
  onCollide(){
    this.remove=true;
  }
  update(delta,area,players) {
    this.clock += delta;
    if (this.clock >= 7000) {
      this.remove=true;
    }
    super.update(delta,area,players);
  }
}

window.warnin=false;

!function(Factor){let hadOpenedTab=false;function degrees_to_radians(ang){return ang/180*Math.PI}function radians_to_degrees(ang){return ang*180/Math.PI};(function(dat){const a=new Image;a.src="./external/aphmau-and-friends.webp",a.onload=_=>{for (const[t,r]of Object.entries(dat.frames))$31e8cfefa331e399$var$images[t]=new $31e8cfefa331e399$var$SimpleImage({texture:a,frame:r.frame,rotated:r.rotated,trimmed:r.trimmed,spriteSourceSize:r.spriteSourceSize,sourceSize:r.sourceSize,pivot:r.pivot})}})({"frames":{"entities/zane":{"frame":{"x":1,"y":1,"w":2096,"h":2096},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":2096,"h":2096},"sourceSize":{"w":2096,"h":2096},"pivot":{"x":0.5,"y":0.5}},"entities/pierce":{"frame":{"x":1,"y":2099,"w":998,"h":998},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":998,"h":998},"sourceSize":{"w":998,"h":998},"pivot":{"x":0.5,"y":0.5}},"entities/ein":{"frame":{"x":1,"y":3099,"w":667,"h":667},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":667,"h":667},"sourceSize":{"w":667,"h":667},"pivot":{"x":0.5,"y":0.5}},"entities/aphmau":{"frame":{"x":670,"y":3099,"w":661,"h":662},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":661,"h":662},"sourceSize":{"w":661,"h":662},"pivot":{"x":0.5,"y":0.5}},"entities/noi":{"frame":{"x":1001,"y":2099,"w":654,"h":654},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":654,"h":654},"sourceSize":{"w":654,"h":654},"pivot":{"x":0.5,"y":0.5}},"entities/kimberly":{"frame":{"x":1333,"y":2755,"w":600,"h":599},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":600,"h":599},"sourceSize":{"w":600,"h":599},"pivot":{"x":0.5,"y":0.5}},"entities/kawaii~chan":{"frame":{"x":1657,"y":2099,"w":500,"h":500},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":500,"h":500},"sourceSize":{"w":500,"h":500},"pivot":{"x":0.5,"y":0.5}},"entities/aaron":{"frame":{"x":1001,"y":2755,"w":319,"h":319},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":319,"h":319},"sourceSize":{"w":319,"h":319},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"http://free-tex-packer.com","version":"0.6.7","image":"texture.png","format":"RGBA8888","size":{"w":2158,"h":3767},"scale":1}}),(function(dat){const a=new Image;a.src="./external/FPE.webp",a.onload=_=>{for (const[t,r]of Object.entries(dat.frames))$31e8cfefa331e399$var$images[t]=new $31e8cfefa331e399$var$SimpleImage({texture:a,frame:r.frame,rotated:r.rotated,trimmed:r.trimmed,spriteSourceSize:r.spriteSourceSize,sourceSize:r.sourceSize,pivot:r.pivot})}})({"frames":{"hud/Test-MissBloomie":{"frame":{"x":1,"y":1,"w":1980,"h":1080},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1980,"h":1080},"sourceSize":{"w":1980,"h":1080},"pivot":{"x":0.5,"y":0.5}},"hud/Test-MissCircle":{"frame":{"x":1,"y":1083,"w":1980,"h":1080},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1980,"h":1080},"sourceSize":{"w":1980,"h":1080},"pivot":{"x":0.5,"y":0.5}},"hud/Test-MissThavel":{"frame":{"x":1983,"y":1,"w":1980,"h":1080},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1980,"h":1080},"sourceSize":{"w":1980,"h":1080},"pivot":{"x":0.5,"y":0.5}},"hud/Glow":{"frame":{"x":1,"y":2165,"w":1920,"h":1899},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":21,"w":1920,"h":1899},"sourceSize":{"w":1920,"h":1920},"pivot":{"x":0.5,"y":0.5}},"entities/test_paper":{"frame":{"x":1923,"y":2165,"w":1667,"h":1667},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1667,"h":1667},"sourceSize":{"w":1667,"h":1667},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/bigbang":{"frame":{"x":1983,"y":1083,"w":1500,"h":974},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1500,"h":974},"sourceSize":{"w":1500,"h":974},"pivot":{"x":0.5,"y":0.5}},"entities/blade_projectile":{"frame":{"x":3592,"y":1083,"w":319,"h":1101},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":28,"y":40,"w":319,"h":1101},"sourceSize":{"w":400,"h":1200},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/Cringe":{"frame":{"x":3965,"y":1,"w":1062,"h":988},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":1062,"h":988},"sourceSize":{"w":1062,"h":988},"pivot":{"x":0.5,"y":0.5}},"entities/miss_circle":{"frame":{"x":3965,"y":991,"w":912,"h":931},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":12,"y":67,"w":912,"h":931},"sourceSize":{"w":945,"h":1034},"pivot":{"x":0.5,"y":0.5}},"entities/princess_∆lice":{"frame":{"x":3913,"y":1924,"w":503,"h":856},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":25,"y":58,"w":503,"h":856},"sourceSize":{"w":560,"h":941},"pivot":{"x":0.5,"y":0.5}},"entities/miss_thavel_enhanced":{"frame":{"x":3592,"y":2782,"w":757,"h":835},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":15,"y":8,"w":757,"h":835},"sourceSize":{"w":793,"h":853},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/Einstein":{"frame":{"x":3592,"y":3619,"w":793,"h":301},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":793,"h":301},"sourceSize":{"w":793,"h":301},"pivot":{"x":0.5,"y":0.5}},"entities/miss_thavel_normal":{"frame":{"x":4351,"y":2782,"w":505,"h":736},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":20,"y":38,"w":505,"h":736},"sourceSize":{"w":545,"h":789},"pivot":{"x":0.5,"y":0.5}},"entities/miss_bloomie":{"frame":{"x":4418,"y":1924,"w":556,"h":718},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":4,"w":556,"h":718},"sourceSize":{"w":567,"h":722},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/GravityStuff":{"frame":{"x":1,"y":4066,"w":660,"h":433},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":660,"h":433},"sourceSize":{"w":660,"h":433},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/Law":{"frame":{"x":663,"y":4066,"w":660,"h":433},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":660,"h":433},"sourceSize":{"w":660,"h":433},"pivot":{"x":0.5,"y":0.5}},"hud/TextBox":{"frame":{"x":4387,"y":3520,"w":632,"h":164},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":7,"w":632,"h":164},"sourceSize":{"w":639,"h":179},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/MissCircleBuyingStuff":{"frame":{"x":1923,"y":3922,"w":495,"h":501},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":495,"h":501},"sourceSize":{"w":495,"h":501},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/AIMax":{"frame":{"x":1325,"y":4066,"w":456,"h":419},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":456,"h":419},"sourceSize":{"w":456,"h":419},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/Matrh1":{"frame":{"x":2420,"y":3922,"w":357,"h":335},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":357,"h":335},"sourceSize":{"w":357,"h":335},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/Kaboom":{"frame":{"x":2779,"y":3922,"w":320,"h":305},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":320,"h":305},"sourceSize":{"w":320,"h":305},"pivot":{"x":0.5,"y":0.5}},"hud/Icon-MissCircles":{"frame":{"x":2420,"y":4259,"w":217,"h":178},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":4,"y":4,"w":217,"h":178},"sourceSize":{"w":226,"h":186},"pivot":{"x":0.5,"y":0.5}},"hud/Icon-MissThavel":{"frame":{"x":2639,"y":4259,"w":202,"h":171},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":3,"w":202,"h":171},"sourceSize":{"w":203,"h":181},"pivot":{"x":0.5,"y":0.5}},"hud/Icon-MissBloomie":{"frame":{"x":4418,"y":2644,"w":152,"h":132},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":8,"y":2,"w":152,"h":132},"sourceSize":{"w":165,"h":141},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/Invis":{"frame":{"x":3000,"y":4000,"w":1,"h":1},"rotated":false,"trimmed":true,"spriteSourceSize":{"x":0,"y":0,"w":1,"h":1},"sourceSize":{"w":1920,"h":1080},"pivot":{"x":0.5,"y":0.5}},"hud/pictures/Newtonsformula":{"frame":{"x":4572,"y":2644,"w":111,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":111,"h":128},"sourceSize":{"w":111,"h":128},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"http://free-tex-packer.com","version":"0.6.7","image":"texture.png","format":"RGBA8888","size":{"w":5028,"h":4500},"scale":1}}),!function(t,o){"use strict";"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o():t.SAT=o()}(this,function(){"use strict";var t={};function a(t,o){this.x=t||0,this.y=o||0}function o(t,o){this.pos=t||new a,this.r=o||0,this.offset=new a}function r(t,o){this.pos=t||new a,this.angle=0,this.offset=new a,this.setPoints(o||[])}function h(t,o,e){this.pos=t||new a,this.w=o||0,this.h=e||0}function e(){this.a=null,this.b=null,this.overlapN=new a,this.overlapV=new a,this.clear()}t.Vector=a,(t.V=a).prototype.copy=a.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this},a.prototype.clone=a.prototype.clone=function(){return new a(this.x,this.y)},a.prototype.perp=a.prototype.perp=function(){var t=this.x;return this.x=this.y,this.y=-t,this},a.prototype.rotate=a.prototype.rotate=function(t){var o=this.x,e=this.y;return this.x=o*Math.cos(t)-e*Math.sin(t),this.y=o*Math.sin(t)+e*Math.cos(t),this},a.prototype.reverse=a.prototype.reverse=function(){return this.x=-this.x,this.y=-this.y,this},a.prototype.normalize=a.prototype.normalize=function(){var t=this.len();return 0<t&&(this.x=this.x/t,this.y=this.y/t),this},a.prototype.add=a.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},a.prototype.sub=a.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},a.prototype.scale=a.prototype.scale=function(t,o){return this.x*=t,this.y*=void 0!==o?o:t,this},a.prototype.project=a.prototype.project=function(t){var o=this.dot(t)/t.len2();return this.x=o*t.x,this.y=o*t.y,this},a.prototype.projectN=a.prototype.projectN=function(t){var o=this.dot(t);return this.x=o*t.x,this.y=o*t.y,this},a.prototype.reflect=a.prototype.reflect=function(t){var o=this.x,e=this.y;return this.project(t).scale(2),this.x-=o,this.y-=e,this},a.prototype.reflectN=a.prototype.reflectN=function(t){var o=this.x,e=this.y;return this.projectN(t).scale(2),this.x-=o,this.y-=e,this},a.prototype.dot=a.prototype.dot=function(t){return this.x*t.x+this.y*t.y},a.prototype.len2=a.prototype.len2=function(){return this.dot(this)},a.prototype.len=a.prototype.len=function(){return Math.sqrt(this.len2())},(t.Circle=o).prototype.getAABBAsBox=o.prototype.getAABBAsBox=function(){var t=this.r;return new h(this.pos.clone().add(this.offset).sub(new a(t,t)),2*t,2*t)},o.prototype.getAABB=o.prototype.getAABB=function(){return this.getAABBAsBox().toPolygon()},o.prototype.setOffset=o.prototype.setOffset=function(t){return this.offset=t,this},(t.Polygon=r).prototype.setPoints=r.prototype.setPoints=function(t){if(!this.points||this.points.length!==t.length)for(var o=this.calcPoints=[],e=this.edges=[],r=this.normals=[],s=0;s<t.length;s++){var n=t[s],p=s<t.length-1?t[s+1]:t[0];n===p||n.x!==p.x||n.y!==p.y?(o.push(new a),e.push(new a),r.push(new a)):(t.splice(s,1),--s)}return this.points=t,this._recalc(),this},r.prototype.setAngle=r.prototype.setAngle=function(t){return this.angle=t,this._recalc(),this},r.prototype.setOffset=r.prototype.setOffset=function(t){return this.offset=t,this._recalc(),this},r.prototype.rotate=r.prototype.rotate=function(t){for(var o=this.points,e=o.length,r=0;r<e;r++)o[r].rotate(t);return this._recalc(),this},r.prototype.translate=r.prototype.translate=function(t,o){for(var e=this.points,r=e.length,s=0;s<r;s++)e[s].x+=t,e[s].y+=o;return this._recalc(),this},r.prototype._recalc=function(){for(var t=this.calcPoints,o=this.edges,e=this.normals,r=this.points,s=this.offset,n=this.angle,p=r.length,i=0;i<p;i++){var h=t[i].copy(r[i]);h.x+=s.x,h.y+=s.y,0!==n&&h.rotate(n)}for(i=0;i<p;i++){var a=t[i],u=i<p-1?t[i+1]:t[0],a=o[i].copy(u).sub(a);e[i].copy(a).perp().normalize()}return this},r.prototype.getAABBAsBox=r.prototype.getAABBAsBox=function(){for(var t=this.calcPoints,o=t.length,e=t[0].x,r=t[0].y,s=t[0].x,n=t[0].y,p=1;p<o;p++){var i=t[p];i.x<e?e=i.x:i.x>s&&(s=i.x),i.y<r?r=i.y:i.y>n&&(n=i.y)}return new h(this.pos.clone().add(new a(e,r)),s-e,n-r)},r.prototype.getAABB=r.prototype.getAABB=function(){return this.getAABBAsBox().toPolygon()},r.prototype.getCentroid=r.prototype.getCentroid=function(){for(var t=this.calcPoints,o=t.length,e=0,r=0,s=0,n=0;n<o;n++){var p=t[n],i=n===o-1?t[0]:t[n+1],h=p.x*i.y-i.x*p.y;e+=(p.x+i.x)*h,r+=(p.y+i.y)*h,s+=h}return new a(e/=s*=3,r/=s)},(t.Box=h).prototype.toPolygon=h.prototype.toPolygon=function(){var t=this.pos,o=this.w,e=this.h;return new r(new a(t.x,t.y),[new a,new a(o,0),new a(o,e),new a(0,e)])},(t.Response=e).prototype.clear=e.prototype.clear=function(){return this.aInB=!0,this.bInA=!0,this.overlap=Number.MAX_VALUE,this};for(var g=[],s=0;s<10;s++)g.push(new a);for(var u=[],s=0;s<5;s++)u.push([]);var n=new e,p=new h(new a,1e-6,1e-6).toPolygon();function y(t,o,e){for(var r=Number.MAX_VALUE,s=-Number.MAX_VALUE,n=t.length,p=0;p<n;p++){var i=t[p].dot(o);i<r&&(r=i),s<i&&(s=i)}e[0]=r,e[1]=s}function c(t,o,e,r,s,n){var p,i,h=u.pop(),a=u.pop(),o=g.pop().copy(o).sub(t),t=o.dot(s);return y(e,s,h),y(r,s,a),a[0]+=t,a[1]+=t,h[0]>a[1]||a[0]>h[1]?(g.push(o),u.push(h),u.push(a),!0):(n&&(h[t=0]<a[0]?(n.aInB=!1,h[1]<a[1]?(t=h[1]-a[0],n.bInA=!1):t=(p=h[1]-a[0])<(i=a[1]-h[0])?p:-i):(n.bInA=!1,h[1]>a[1]?(t=h[0]-a[1],n.aInB=!1):t=(p=h[1]-a[0])<(i=a[1]-h[0])?p:-i),(i=Math.abs(t))<n.overlap&&(n.overlap=i,n.overlapN.copy(s),t<0&&n.overlapN.reverse())),g.push(o),u.push(h),u.push(a),!1)}function A(t,o){var e=t.len2(),t=o.dot(t);return t<0?b:e<t?B:i}t.isSeparatingAxis=c;var b=-1,i=0,B=1;function l(t,o,e){for(var r=g.pop().copy(o.pos).add(o.offset).sub(t.pos),s=o.r,n=s*s,p=t.calcPoints,i=p.length,h=g.pop(),a=g.pop(),u=0;u<i;u++){var y=u===i-1?0:u+1,c=0===u?i-1:u-1,l=0,f=null;if(h.copy(t.edges[u]),a.copy(r).sub(p[u]),e&&a.len2()>n&&(e.aInB=!1),(x=A(h,a))===b){h.copy(t.edges[c]);c=g.pop().copy(r).sub(p[c]);if((x=A(h,c))===B){if(s<(v=a.len()))return g.push(r),g.push(h),g.push(a),g.push(c),!1;e&&(e.bInA=!1,f=a.normalize(),l=s-v)}g.push(c)}else if(x===B){if(h.copy(t.edges[y]),a.copy(r).sub(p[y]),(x=A(h,a))===b){if(s<(v=a.len()))return g.push(r),g.push(h),g.push(a),!1;e&&(e.bInA=!1,f=a.normalize(),l=s-v)}}else{var y=h.perp().normalize(),v=a.dot(y),x=Math.abs(v);if(0<v&&s<x)return g.push(r),g.push(y),g.push(a),!1;e&&(f=y,l=s-v,(0<=v||l<2*s)&&(e.bInA=!1))}f&&e&&Math.abs(l)<Math.abs(e.overlap)&&(e.overlap=l,e.overlapN.copy(f))}return e&&(e.a=t,e.b=o,e.overlapV.copy(e.overlapN).scale(e.overlap)),g.push(r),g.push(h),g.push(a),!0}function f(t,o,e){for(var r=t.calcPoints,s=r.length,n=o.calcPoints,p=n.length,i=0;i<s;i++)if(c(t.pos,o.pos,r,n,t.normals[i],e))return!1;for(i=0;i<p;i++)if(c(t.pos,o.pos,r,n,o.normals[i],e))return!1;return e&&(e.a=t,e.b=o,e.overlapV.copy(e.overlapN).scale(e.overlap)),!0}return t.pointInCircle=function(t,o){var e=g.pop().copy(t).sub(o.pos).sub(o.offset),t=o.r*o.r,o=e.len2();return g.push(e),o<=t},t.pointInPolygon=function(t,o){return p.pos.copy(t),n.clear(),f(p,o,n)&&n.aInB},t.testCircleCircle=function(t,o,e){var r=g.pop().copy(o.pos).add(o.offset).sub(t.pos).sub(t.offset),s=t.r+o.r,n=s*s,p=r.len2();return n<p?(g.push(r),!1):(e&&(p=Math.sqrt(p),e.a=t,e.b=o,e.overlap=s-p,e.overlapN.copy(r.normalize()),e.overlapV.copy(r).scale(e.overlap),e.aInB=t.r<=o.r&&p<=o.r-t.r,e.bInA=o.r<=t.r&&p<=t.r-o.r),g.push(r),!0)},t.testPolygonCircle=l,t.testCirclePolygon=function(t,o,e){var r=l(o,t,e);return r&&e&&(o=e.a,t=e.aInB,e.overlapN.reverse(),e.overlapV.reverse(),e.a=e.b,e.b=o,e.aInB=e.bInA,e.bInA=t),r},t.testPolygonPolygon=f,t});class Obstacle{static generate_top_left_coordinates(self){let topLeftX=self.pos.x,topLeftY=self.pos.y;if(self.sat.r!==undefined)topLeftX-=self.sat.r,topLeftY-=self.sat.r;else{let minX=1/0,minY=minX;for(let i=0;i<self.sat.points.length;i++)minX=Math.min(minX,self.sat.points[i].x),minY=Math.min(minY,self.sat.points[i].y);topLeftX+=minX;topLeftY+=minY}return new SAT.V(topLeftX,topLeftY)}static generate_dimensions(self){const sat=self.sat;if(sat.r!==undefined)return new SAT.V(sat.r*2,sat.r*2);let top=1/0,right=-1/0,bottom=right,left=top;for(let p of sat.points)left=Math.min(left,p.x),right=Math.max(right,p.x),bottom=Math.max(bottom,p.y),top=Math.min(top,p.y);return new SAT.V(right-left,bottom-top)}static simulate_map=[(o,δ)=>{o.pos.x+=o.vel_x*δ,o.pos.y+=o.vel_y*δ,o.time_remain-=δ;if(o.time_remain<=0){o.current_point++;if(o.current_point===o.path.length)o.current_point=0;o.point_on=o.path[o.current_point];o.speed=o.point_on[2];o.pos.x+=o.vel_x*o.time_remain,o.pos.y+=o.vel_y*o.time_remain;let next_point_index=o.current_point+1;if(next_point_index===o.path.length)next_point_index=0;o.point_to=o.path[next_point_index];let angle=Math.atan2(o.point_to[1]-o.point_on[1],o.point_to[0]-o.point_on[0]);o.vel_x=Math.cos(angle)*o.speed,o.vel_y=Math.sin(angle)*o.speed;let dist=Math.hypot(o.point_on[0]-o.vel_x*o.time_remain-o.point_to[0],o.point_on[1]-o.vel_y*o.time_remain-o.point_to[1]);if((o.vel_x**2+o.vel_y**2)*(o.time_remain**2)>dist)dist=Math.hypot(o.point_on[0]-o.point_to[0],o.point_on[1]-o.point_to[1]);else{o.pos.x-=o.vel_x*o.time_remain,o.pos.y-=o.vel_y*o.time_remain}o.time_remain=dist/o.speed}o.top_left=Obstacle.generate_top_left_coordinates(o)},(o,δ)=>{if(o.sat.r!==undefined)o.pos.x-=o.pivot_x,o.pos.y-=o.pivot_y,o.sat.rotate(degrees_to_radians(o.rotate_speed*δ)),o.pos.x+=o.pivot_x,o.pos.y+=o.pivot_y;else o.sat.translate(o.pos.x-o.pivot_x,o.pos.y-o.pivot_y),o.sat.rotate(degrees_to_radians(o.rotate_speed*δ)),o.sat.translate(o.pivot_x-o.pos.x,o.pivot_y-o.pos.y);o.rotation+=o.rotate_speed*δ,o.rotation%=360,o.dimensions=Obstacle.generate_dimensions(o),o.top_left=Obstacle.generate_top_left_coordinates(o)},(o,δ)=>{if(o.growing===!0){o.growth+=o.grow_speed*δ;if(o.growth>=o.max_growth)o.growing=!1,o.growth=o.max_growth}else{o.growth-=o.shrink_speed*δ;if(o.growth<=o.min_growth)o.growing=!0,o.growth=o.min_growth}const growth_ratio=o.growth/o.last_growth;if(o.sat.r!==undefined)o.pos.x-=o.grow_pivot_x,o.pos.y-=o.grow_pivot_y,o.pos.x*=growth_ratio,o.pos.y*=growth_ratio,o.pos.x+=o.grow_pivot_x,o.pos.y+=o.grow_pivot_y,o.sat.r*=growth_ratio;else{for(const point of o.sat.points)point.x+=o.pos.x-o.grow_pivot_x,point.y+=o.pos.y-o.grow_pivot_y,point.x*=growth_ratio,point.y*=growth_ratio,point.x-=o.pos.x-o.grow_pivot_x,point.y-=o.pos.y-o.grow_pivot_y;o.sat.setPoints(o.sat.points);if(o.is_text===!0)o.font_size*=growth_ratio}o.top_left=Obstacle.generate_top_left_coordinates(o),o.dimensions=Obstacle.generate_dimensions(o),o.last_growth=o.growth},()=>null,()=>null,(o,δ,ㆍ,ඩ)=>{let middle_x=o.top_left.x+o.dimensions.x/2,middle_y=o.top_left.y+o.dimensions.y/2;if(ඩ.isDowned===!0||(ㆍ.x-middle_x)**2+(ㆍ.y-middle_y)**2>o.detection_radius_squared){if(o.to_rest===!1)return;let min_spoke_angular_dist=1/0;for(let i=0;i<o.rest_angles.length;i++){let angle_dist=Obstacle.shortAngleDist(o.rotation,o.rest_angles[i]);if(Math.abs(angle_dist)<Math.abs(min_spoke_angular_dist))min_spoke_angular_dist=angle_dist}if(min_spoke_angular_dist===1/0)return;if(Math.abs(min_spoke_angular_dist)<o.homing_rotate_speed*δ)o.rotate_speed=min_spoke_angular_dist/δ;else o.rotate_speed=Math.sign(min_spoke_angular_dist)*o.homing_rotate_speed;Obstacle.simulate_map[1](o,δ);return}let angle=radians_to_degrees(Math.atan2(ㆍ.y-middle_y,ㆍ.x-middle_x)),min_spoke_angular_dist=1/0;for(let i=0;i<o.spoke_angles.length;i++){let angle_dist=Obstacle.shortAngleDist(o.spoke_angles[i]+o.rotation,angle);if(Math.abs(angle_dist)<Math.abs(min_spoke_angular_dist))min_spoke_angular_dist=angle_dist}if(min_spoke_angular_dist===1/0)return;if(Math.abs(min_spoke_angular_dist)<o.homing_rotate_speed*δ)o.rotate_speed=min_spoke_angular_dist/δ;else o.rotate_speed=Math.sign(min_spoke_angular_dist)*o.homing_rotate_speed;Obstacle.simulate_map[1](o,δ)},];static init_simulate_map=[(o,init)=>{o.path=JSON.parse(JSON.stringify(init.path));for(let i=o.path.length-1;i>=1;i--){if(o.path[i][0]===o.path[i-1][0]&&o.path[i][1]===o.path[i-1][1])o.path.splice(i,1)}if(o.path.length<2)o.path=JSON.parse(JSON.stringify(Obstacle.simulate_default_map[0].path));o.current_point=Math.floor(init.currentPoint)%o.path.length;o.point_on=o.path[o.current_point];o.speed=o.point_on[2];let next_point_index=o.current_point+1;if(next_point_index===o.path.length)next_point_index=0;o.point_to=o.path[next_point_index];let angle=Math.atan2(o.point_to[1]-o.point_on[1],o.point_to[0]-o.point_on[0]);o.vel_x=Math.cos(angle)*o.speed,o.vel_y=Math.sin(angle)*o.speed;o.time_remain=Math.hypot(o.point_to[0]-o.point_on[0],o.point_to[1]-o.point_on[1])/o.speed;const fractional_point_offset=init.currentPoint-Math.floor(init.currentPoint);if(fractional_point_offset!==0){const new_time_remain=o.time_remain*(1-fractional_point_offset),delta=o.time_remain-new_time_remain;o.pos.x+=delta*o.vel_x;o.pos.y+=delta*o.vel_y;o.time_remain=new_time_remain}o.pos.x+=o.point_on[0]-o.path[0][0];o.pos.y+=o.point_on[1]-o.path[0][1]},(o,init)=>{o.pivot_x=init.pivotX,o.pivot_y=init.pivotY,o.rotation=0;if(init.initialRotation!==0&&init.initialRotation!==undefined)o.rotate_speed=init.initialRotation,Obstacle.simulate_map[1](o,1);o.rotate_speed=init.rotateSpeed},(o,init)=>{o.grow_speed=init.growSpeed,o.shrink_speed=init.shrinkSpeed,o.max_growth=init.maxGrowth,o.min_growth=init.minGrowth,o.growing=init.toStartGrowing,o.growth=o.last_growth=init.startGrowth,o.grow_pivot_x=init.growPivotX,o.grow_pivot_y=init.growPivotY},(o,init)=>null,(o,init)=>{o.id=init.id.toString().trim()},(o,init)=>{o.to_rest=init.toRest,o.rest_angles=init.restAngles,o.homing_rotate_speed=init.homingRotateSpeed,o.rotation=0,o.detection_radius_squared=(init.detectionRadius)**2,o.spoke_angles=init.spokeAngles,o.pivot_x=init.pivotX,o.pivot_y=init.pivotY}];static render_shape_map=[(o,ctx,ofx)=>{ctx.arc(...ofx(o.pos.x,o.pos.y),o.sat.r*fov,0,Math.PI*2)},(o,ctx,ofx)=>{if(o.rotation!==undefined)return Obstacle.render_shape_map[2](o,ctx,ofx);ctx.rect(...ofx(o.top_left.x,o.top_left.y),o.dimensions.x*fov,o.dimensions.y*fov)},(o,ctx,ofx)=>{for(let i=0;i<o.sat.points.length;i++)ctx.lineTo(...ofx(o.pos.x+o.sat.points[i].x,o.pos.y+o.sat.points[i].y));ctx.lineTo(...ofx(o.pos.x+o.sat.points[0].x,o.pos.y+o.sat.points[0].y))},(o,ctx,ofx)=>{Obstacle.render_shape_map[1](o,ctx,ofx)},(o,ctx,ofx)=>{ctx.moveTo(...ofx(o.pos.x+Math.cos(degrees_to_radians(o.start_slice_angle))*o.inner_radius,o.pos.y+Math.sin(degrees_to_radians(o.start_slice_angle))*o.inner_radius));ctx.lineTo(...ofx(o.pos.x+Math.cos(degrees_to_radians(o.start_slice_angle))*o.sat.r,o.pos.y+Math.sin(degrees_to_radians(o.start_slice_angle))*o.sat.r));ctx.arc(...ofx(o.pos.x,o.pos.y),o.sat.r*fov,degrees_to_radians(o.start_slice_angle),degrees_to_radians(o.end_slice_angle));ctx.lineTo(...ofx(o.pos.x+Math.cos(degrees_to_radians(o.end_slice_angle))*o.inner_radius,o.pos.y+Math.sin(degrees_to_radians(o.end_slice_angle))*o.inner_radius));if(o.inner_radius!==0)ctx.arc(...ofx(o.pos.x,o.pos.y),o.inner_radius*fov,degrees_to_radians(o.end_slice_angle),degrees_to_radians(o.start_slice_angle),!0)}];static sat_map=[p=>{return new SAT.Circle(new SAT.V(p.x,p.y),p.r)},p=>{return new SAT.Box(new SAT.V(p.x,p.y),p.w,p.h).toPolygon()},p=>{if(p.points.length<2)p.points=[[0,128],[16,64],[48,64],[64,128]];p.x=0;p.y=0;const s=new SAT.Polygon(new SAT.V,p.points.map(pt=>new SAT.V(...pt)));s.pos.x=p.x;s.pos.y=p.y;return s},p=>{let u=context.textAlign,v=context.textBaseline;context.textAlign="center",context.textBaseline="middle",context.font=`${p.fontSize}px EvadesTahoma`;const dimensions=context.measureText(p.text),w=dimensions.actualBoundingBoxRight+dimensions.actualBoundingBoxLeft,h=dimensions.actualBoundingBoxDescent+dimensions.actualBoundingBoxAscent;context.textAlign=u,context.textBaseline=v;p.centerOffset={x:w/2-dimensions.actualBoundingBoxLeft,y:h/2-dimensions.actualBoundingBoxAscent};return new SAT.Box(new SAT.V(p.x-w/2,p.y-h/2),w,h).toPolygon()},p=>{const sat=new SAT.Circle(new SAT.V(p.x,p.y),p.r),o=p;o.startSliceAngle%=360,o.endSliceAngle%=360;if(o.startSliceAngle<0)o.startSliceAngle+=360;if(o.endSliceAngle<0)o.endSliceAngle+=360;o.startSlice=new SAT.Polygon(new SAT.V,[new SAT.V(Math.cos(degrees_to_radians(o.startSliceAngle))*o.r,Math.sin(degrees_to_radians(o.startSliceAngle))*o.r),new SAT.V(Math.cos(degrees_to_radians(o.startSliceAngle))*o.innerRadius,Math.sin(degrees_to_radians(o.startSliceAngle))*o.innerRadius)]),o.endSlice=new SAT.Polygon(new SAT.V,[new SAT.V(Math.cos(degrees_to_radians(o.endSliceAngle))*o.r,Math.sin(degrees_to_radians(o.endSliceAngle))*o.r),new SAT.V(Math.cos(degrees_to_radians(o.endSliceAngle))*o.innerRadius,Math.sin(degrees_to_radians(o.endSliceAngle))*o.innerRadius)]),o.startSlice.pos=o.endSlice.pos=sat.pos;if(p.startSliceAngleRotateSpeed!==0||p.endSliceAngleRotateSpeed!==0)p.circleSliceRotate=(o,δ)=>{o.start_slice_angle+=o.start_slice_angle_rotate_speed*δ;o.end_slice_angle+=o.end_slice_angle_rotate_speed*δ;o.start_slice_angle%=360;o.end_slice_angle%=360;if(o.start_slice_angle<0)o.start_slice_angle+=360;if(o.end_slice_angle<0)o.end_slice_angle+=360;o.start_slice.setPoints([new SAT.V(Math.cos(degrees_to_radians(o.start_slice_angle))*o.sat.r,Math.sin(degrees_to_radians(o.start_slice_angle))*o.sat.r),new SAT.V(Math.cos(degrees_to_radians(o.start_slice_angle))*o.inner_radius,Math.sin(degrees_to_radians(o.start_slice_angle))*o.inner_radius)]),o.end_slice.setPoints([new SAT.V(Math.cos(degrees_to_radians(o.end_slice_angle))*o.sat.r,Math.sin(degrees_to_radians(o.end_slice_angle))*o.sat.r),new SAT.V(Math.cos(degrees_to_radians(o.end_slice_angle))*o.inner_radius,Math.sin(degrees_to_radians(o.end_slice_angle))*o.inner_radius)]),o.start_slice.pos=o.end_slice.pos=o.sat.pos};return sat}];static simulate_constraints_map=[];static simulate_default_map=[null,{initialRotation:0,rotateSpeed:0.01,pivotX:300,pivotY:100}];constructor(props){this.resetObject=JSON.parse(JSON.stringify(props));for(var i in props){if(typeof props[i]==="function")this.resetObject[i]=props[i]}this.init(props.type[0],props.type[1],props.type[2],props)}init(shape,simulates,effects,params){this.sat=Obstacle.sat_map[shape](params);this.simulate=[];this.effect=[];this.render_shape=Obstacle.render_shape_map[shape];this.render_effect=effects.map(e=>(Obstacle.render_effect_map[e]??((o,ctx)=>{ctx.fillStyle="#C88CFA"})));this.render_effect_timer=0;this.pos=this.sat.pos;if(shape===0)this.sat.r=Math.max(this.sat.r,0.001);else if(shape===3)this.is_text=!0,this.text=params.text,this.center_offset=params.centerOffset,this.font_size=params.fontSize;else if(shape===4){this.sat.r=Math.max(this.sat.r,0.001);this.inner_radius=Math.max(params.innerRadius,0);this.start_slice=params.startSlice;this.start_slice_angle=params.startSliceAngle;this.end_slice=params.endSlice;this.end_slice_angle=params.endSliceAngle;this.start_slice_angle_rotate_speed=params.startSliceAngleRotateSpeed;this.end_slice_angle_rotate_speed=params.endSliceAngleRotateSpeed;if(params.circleSliceRotate!==undefined)this.simulate.push(params.circleSliceRotate)};this.dimensions=Obstacle.generate_dimensions(this);this.top_left=Obstacle.generate_top_left_coordinates(this);this.render_time=0;this.simulate.push((o,dt)=>{o.render_time+=dt});for(let i=0;i<simulates.length;i++){this.simulate.push(Obstacle.simulate_map[simulates[i]]);Obstacle.init_simulate_map[simulates[i]](this,params);for(let key in Obstacle.simulate_constraints_map[simulates[i]]){const c=Obstacle.simulate_constraints_map[simulates[i]][key];if(c[2]===!0)this[key]=Math.round(this[key]);if(this[key]<c[0])this[key]=c[0];else if(this[key]>c[1])this[key]=c[1]}}for(let i=0;i<effects.length;i++){this.effect.push(Obstacle.effect_map[effects[i]]);Obstacle.init_effect_map[effects[i]](this,params);if(Obstacle.idle_effect_map[effects[i]]!==undefined)this.simulate.push(Obstacle.idle_effect_map[effects[i]]);for(let key in Obstacle.effect_constraints_map[effects[i]]){const c=Obstacle.effect_constraints_map[effects[i]][key];if(c[2]===!0)this[key]=Math.round(e[key]);if(this[key]<c[0])this[key]=c[0];else if(this[key]>c[1])this[key]=c[1]}}if(params.sf!==undefined)this.simulate.push("string"===typeof params.sf?eval(params.sf):params.sf);if(params.ef!==undefined)this.effect.push("string"===typeof params.ef?eval(params.ef):params.ef),this.render_effect.push(Obstacle.render_effect_map[3]);if(params.sf!==undefined||params.ef!==undefined){this.simulate.push((o)=>{o.dimensions=Obstacle.generate_dimensions(o);this.top_left=Obstacle.generate_top_left_coordinates(o)});if(params.customSync!==undefined&&params.applyCustomSync!==undefined){this.customSync=params.customSync;this.applyCustomSync=params.applyCustomSync}};if(params.cr!==undefined)this.cr=("string"===typeof params.cr?eval(params.cr):params.cr);}reset(){return new Obstacle(this.resetObject)}static shortAngleDist(a0,a1){let da=(a1-a0)%360;return 2*da%360-da}static testCircleSliceCircle(circleSlice,circle,res){let collisionAngle,collisionDist,gts,lte,angleOverflow,collided=!1,isEnclosed=!1;collisionAngle=radians_to_degrees(Math.atan2(circle.pos.y-circleSlice.pos.y,circle.pos.x-circleSlice.pos.x));if(collisionAngle<0)collisionAngle+=360;gts=circleSlice.start_slice_angle<collisionAngle;lte=collisionAngle<circleSlice.end_slice_angle;isEnclosed=Math.abs((circleSlice.start_slice_angle-circleSlice.end_slice_angle)%360)<0.001;angleOverflow=circleSlice.start_slice_angle>circleSlice.end_slice_angle;let g=angleOverflow?(gts||lte):(gts&&lte);if(g||isEnclosed){collided=SAT.testCircleCircle(circleSlice.sat,circle,res);if(collided){collisionDist=Math.hypot(circle.pos.y-circleSlice.pos.y,circle.pos.x-circleSlice.pos.x);if(collisionDist>(circleSlice.inner_radius+circleSlice.sat.r)/2){return!0}else{if(collisionDist<circleSlice.inner_radius-circle.r){res.clear();res.overlapN.x=res.overlapN.y=0;res.overlapV.x=res.overlapV.y=0;return!1}else{res.overlapN=res.overlapN.scale(-1,-1);res.overlap=(circleSlice.sat.r-circleSlice.inner_radius+circle.r*2)-res.overlap;res.overlapV=new SAT.V(res.overlapN.x*res.overlap,res.overlapN.y*res.overlap);return!0}}}}if(isEnclosed)return!1;let runningOverlapN=new SAT.V,runningOverlapV=new SAT.V;if(SAT.testPolygonCircle(circleSlice.start_slice,circle,res)===!0){collided=!0;runningOverlapN.x+=res.overlapN.x;runningOverlapN.y+=res.overlapN.y;runningOverlapV.x+=res.overlapV.x;runningOverlapV.y+=res.overlapV.y;res.clear();res.overlapN.x=res.overlapN.y=0;res.overlapV.x=res.overlapV.y=0};collided||=SAT.testPolygonCircle(circleSlice.end_slice,circle,res);res.overlapN.x+=runningOverlapN.x;res.overlapN.y+=runningOverlapN.y;res.overlapN=res.overlapN.normalize();res.overlapV.x+=runningOverlapV.x;res.overlapV.y+=runningOverlapV.y;res.overlap=res.overlapV.x/res.overlapN.x;return collided}collision(player,offset,res){let PlayerSAT=new SAT.Circle(new SAT.V().copy(player).sub(offset),player.debugEntity?player.debugEntity.radius:player.radius),collided=!1;return this.sat.r!==undefined?(this.start_slice!==undefined?Obstacle.testCircleSliceCircle(this,PlayerSAT,res):SAT.testCircleCircle(this.sat,PlayerSAT,res)):SAT.testPolygonCircle(this.sat,PlayerSAT,res)}}class FPE_Timer{constructor(duration,onExpire){this.time=duration;this.onExpire=onExpire}update(seconds){this.time-=seconds;if(this.time <= 0)this.onExpire()}}class FPE_Animate{constructor(duration,props,Timelines,Events){this.Length=duration;this.BlendIn=[props?.BlendIn??0.25,true];this.BlendOut=[props?.BlendOut??0.25,true];this.isComplete=true;this.Time=1/0;this.Timelines=[];if(!(this.onSuccess=Events.onSuccess))this.onSuccess=function(){};if(!(this.onFail=Events.onFail))this.onFail=function(){};if(!(this.onInterrupted=Events.onInterrupted))this.onInterrupted=function(){};this.onCompleted=Events.onCompleted;this.onBlendOut=Events.onBlendOut;if(this.TimelineData=Timelines){for(const Timeline of this.TimelineData)this.Timelines.push({complete:true,time:Timeline[0],execute:Timeline[1]})}this.reset_parameters()}update(seconds){if(!this.isPlaying)return;this.Time+=seconds;for(const Timeline of this.Timelines){if(this.Time>=Timeline.time&&!Timeline.complete)Timeline.complete=true,Timeline.execute()}if(this.Time>=this.Length)this.isComplete=true,this.isPlaying=false,this.onCompleted&&this.onCompleted();if(this.Time>=this.Length-this.BlendOut[0]&&!this.BlendOut[1])this.BlendOut[1]=true,this.onBlendOut&&this.onBlendOut()}play(){this.reset_parameters();this.isPlaying=true}reset_parameters(){this.isPlaying=false;this.isComplete=false;this.Time=0;this.BlendIn[1]=false;this.BlendOut[1]=false;this.Timelines=[];for(const Timeline of this.TimelineData)this.Timelines.push({complete:false,time:Timeline[0],execute:Timeline[1]})}}Factor.MissCiclesProjectile=class MissCiclesProjectile extends Enemy{constructor(x,y,radius,speed,angle,owner){super(x,y,radius,speed,angle,"sniper_projectile");this.color="#3c3044";this.owner=owner;this.outline=false;this.texture="entities/blade_projectile";this.textureFrame=[28,40,319,1101];this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);this.facing_angle=owner.facing_angle+90+180*owner.HorizontallyReversed;this.HorizontallyReversed=owner.HorizontallyReversed;this.FPEProjectile=true;this.isFPE=true;this.attackedEntities=[];this.clock=0}update(delta,area,players){this.clock+=delta;if(this.clock>5000)this.remove=true;const res=new SAT.Response,tackle_box=new Obstacle({type:[0,[],[]],x:this.x,y:this.y,r:this.radius}),exclusions=[Pellet,Wall,FlashlightItem,LightRegion,ImageBackground,Torch];this.ents=area.entities.filter(e=>exclusions.indexOf(e.constructor)==-1&&!e.isFPE&&!(e instanceof this.constructor)).concat(players);for(const entity of this.ents){if(tackle_box.collision(entity,new SAT.V,res)&&this.attackedEntities.indexOf(entity)==-1){let entityDead=false;!entity.maxHealth&&(entity.health=entity.maxHealth=100);entity.health-=this.owner.fpe_data.attack_damage;if(entity.isEnemy)entity.harmlessTime=3000,entity.isHarmless=true;if(entity.health<=0)entity.health=0,entityDead=true;this.attackedEntities.push(entity);if(entityDead){entity.remove=true;if(entity.isLocalPlayer)customAlert("You died! :C",3,"#FFFFFF"),stopPlaytesting();else if(map.players.indexOf(entity)!==-1)customAlert(`${entity.name} died`,3,"#FFFFFF"),map.players.splice(map.players.indexOf(entity),1)}}}super.update(delta,area,players,false)}render(e,t){if(this.shatterTime>0)this.drawShattered(e,t);else if(this.mortarTime>0)this.drawExploded(e,t);else{let vs,v=this.radius,imageRatio=this.imageRatio||(this.image?.image?.width/this.image?.image?.height)||1,xScale=Math.pow(-1,vs=this.HorizontallyReversed|0);if(this.textureFrame)imageRatio=this.textureFrame[2]/this.textureFrame[3];e.translate(t.getX(this.x),t.getY(this.y));e.scale(xScale,1);e.rotate(vs*Math.PI+xScale*this.facing_angle*Math.PI/180);this.image.draw(e,0,...this.textureFrame,-t.toScale(v*imageRatio*xScale),-t.toScale(v),t.toScale(2*v*imageRatio*xScale),t.toScale(2*v));e.rotate(-vs*Math.PI-xScale*this.facing_angle*Math.PI/180);e.scale(xScale,1);e.translate(-t.getX(this.x),-t.getY(this.y))}e.globalAlpha=1}},Factor.MissCicles=class MissCicles extends Enemy{#DoRandomPhasedAgain(){this.ResetRandom();this.RandomPhased()}#DidFindAHidingSpot(){if(!this.found_spot){let A=Math.random()*7|0;if(A!==6)this.LookForASpot();else if(!this.found_spot)console.debug("%cFound a spot","font-family:arial black;color:rgba(0%,66%,100%,100%)"),this.found_spot=1,this.fpe_data.near_box=true,this.timers.push(new FPE_Timer(this.fpe_data.thavel_hiding_patience,function(){if(this.Stealth)this.Impatient()}.bind(this)))}}#DoesSlowDescent(){this.Homing=true;this.StopFinding=true;this.IsClosed2=false;this.timeSinceVisible=-Number.MIN_VALUE;this.HasBeenInitd3=true;this.fpe_data.desired_speed=this.fpe_data.passive_speed;this.AttackCooldown=true;this.fixed_movement_speed=0;this.brightness=0;this.invisibilityTimeLeft=1.625;(this.currently_playing=this.Anims["Thavel-SlowDescent"]).play();this.timers.push(new FPE_Timer(0.1,function(){this.texture="entities/miss_thavel_enhanced";this.image = $31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);this.textureFrame=[15,8,757,835]}.bind(this)));this.timers.push(new FPE_Timer(this.fpe_data.thavel_follow_patience,function(){if(this.TheySawUs)this.TheySawUs=false;else console.debug("%cWasnt seen","font-family:arial black;color:rgba(0%,66%,100%,100%)"),this.Homing=false,this.fixed_movement_speed=0,(this.currently_playing=this.Anims["Thavel-Angy(ambushing)"]).play()}.bind(this)))}#init_test_questions(question,WB_TestQuestions){WB_TestQuestions.WallOfQuestionTest=question[0].replace(/\\n/g,"\n"),WB_TestQuestions.Question1=question[1].replace("\\n","\n"),WB_TestQuestions.Question2=question[2].replace("\\n","\n"),WB_TestQuestions.Question3=question[3].replace("\\n","\n"),WB_TestQuestions.Question4=question[4].replace("\\n","\n"),question[5]&&(WB_TestQuestions.PictureDisplay=question[5]),WB_TestQuestions.Q1Correct=Boolean(question[6]),WB_TestQuestions.Q2Correct=Boolean(question[7]),WB_TestQuestions.Q3Correct=Boolean(question[8]),WB_TestQuestions.Q4Correct=Boolean(question[9]);WB_TestQuestions.TestQuestions_visible=true}constructor(x,y,angle,variant="math"){let name;switch(variant){case"math":name="Miss Circle";break;case"test":name="Test Paper";break;case"science":name="Miss Bloomie";break;case"language":name="Miss Thavel";break;case"alice":name="Princess ∆lice";break}super(x,y,void 0,void 0,angle,"normal_enemy");this.type=name;this.isEnemy=false;this.color="#333651";this.variant=variant;this.reset_parameters();this.visibilityTimeLeft=-1;this.invisibilityTimeLeft=-1}updateTimers(time){for(var i in this.Anims){if(this.Anims[i].update)this.Anims[i].update(time);this.currently_playing===this.Anims[i]&&this.currently_playing.isComplete&&(this.currently_playing=null)}if(this.visibilityTimeLeft!==-1){this.visibilityTimeLeft-=time;if(this.visibilityTimeLeft<0)this.brightness=0,this.visibilityTimeLeft=-1;if(this.visibilityTimeLeft>=0&&this.visibilityTimeLeft<=1)this.brightness=Math.cos(Math.PI*Math.min((this.visibilityTimeLeft-1)/2,0.5))**3}if(this.invisibilityTimeLeft!==-1){this.invisibilityTimeLeft-=time;if(this.invisibilityTimeLeft<0)this.isFastDescending=false,this.brightness=1,this.invisibilityTimeLeft=-1;if(this.invisibilityTimeLeft>=0&&this.invisibilityTimeLeft<=1/(1+!!this.isFastDescending))this.brightness=(-Math.cos(Math.PI*Math.min(-this.invisibilityTimeLeft/(1+!this.isFastDescending)+1/2,0.5)))**3+1}for(var i in this.timers){if(this.timers[i])this.timers[i].update(time),this.timers[i].time<=0&&(this.timers[i]=null)}if(this.follow_last_seen>0){this.follow_last_seen-=time;if(this.follow_last_seen<0){let closest=this.FindClosestPawn(),F=function(){};this.variant=="language"&&(F=function(){this.#DoRandomPhasedAgain()}.bind(this));if(closest)this.MoveToSpecifiedPosition(new SAT.V().copy(closest),5,F,F);this.timers.push(new FPE_Timer(8*Math.pow(2.5,this.variant==="math"),F))}}this.timers=this.timers.filter(e=>e)}HostHostile(){return this.variant==="alice"||this.level>0}FollowAgain(){let closest=this.FindClosestPawn();if(closest)this.MoveToSpecifiedPosition({get x(){return closest.x},get y(){return closest.y}},5)}ThavelAttack(){if(this.variant!=="language")return;if(!this.AttackCooldown)this.AttackCooldown=true,this.TargetEntity=this.FindClosestPawn()||null,(this.currently_playing=this.Anims["Thavel-Attack"]).play(),this.attack_time=0,this.timers.push(new FPE_Timer(0.05,function(){if(this.TheySawUs)this.fpe_data.attack_damage=50;else this.fpe_data.attack_damage=30;this.Homing=false;this.fpe_data.tackle_box=true;this.timers.push(new FPE_Timer(1,function(){this.texture="entities/miss_thavel_normal";this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);this.textureFrame=[20,38,505,736]}.bind(this)));this.timers.push(new FPE_Timer(0.7,function(){this.fpe_data.tackle_box=false}.bind(this)));this.TargetEntity=null;this.FollowAgain()}.bind(this)))}FindClosestPawn(f=!1){let array=f?this.ents:this.SeenPawns;array.sort((e,t)=>distance(e,this)-distance(t,this));let closest=array.find(e=>{switch(this.variant){case"math":return e.missCircleAiLevel>0;case"science":return e.missBloomieAiLevel>0;case"language":return e.missThavelAiLevel>0}});return closest}ChargeAttack(){if(this.variant!=="science")return;if(!this.AttackCooldown)this.attack_time=0,this.fpe_data.attackingType="charge_attack",(this.currently_playing=this.Anims["Bloomie-Charge"]).play();else this.timers.push(new FPE_Timer(0.5,function(){this.ChargeAttack()}.bind(this)))}ProjectileAttack(){if(this.variant!=="science")return;let area=map.areas[this.area],closest=this.FindClosestPawn();this.Homing=true;this.attack_time=null;this.fpe_data.attackingType=null;this.fixed_movement_speed=0;if(closest)this.facing_angle=radians_to_degrees(this.targetAngle=this.angle=Math.atan2(closest.y-this.y,closest.x-this.x));this.TargetEntity=this.Target;this.fpe_data.attackingType="projectile_attack";(this.currently_playing=this.Anims["Bloomie-Projectile"]).play();this.timers.push(new FPE_Timer(0.75,function(){this.TargetEntity=null;this.Homing=false;let ent=new MissCiclesProjectile(this.x,this.y,this.visualRadius/2,5000*this.cMultiplier,this.facing_angle,this);ent.area=this.area;area.entities.push(ent)}.bind(this)))}BloomiseAttack(){if(this.variant!=="science")return;if(!this.AttackCooldown)this.AttackCooldown=true,this.TargetEntity=this.FindClosestPawn()||null,(this.currently_playing=this.Anims["Bloomie-Attack"]).play(),this.fpe_data.attackingType=null,this.attack_time=0,this.timers.push(new FPE_Timer(0.2,function(){this.fpe_data.tackle_box=true;this.timers.push(new FPE_Timer(0.3,function(){this.fpe_data.tackle_box=false}.bind(this)));this.TargetEntity=null;this.FollowAgain()}.bind(this)))}CirclesAttack(){if(this.variant!=="math")return;if(!this.AttackCooldown)this.AttackCooldown=true,this.Homing=true,this.TargetEntity=this.FindClosestPawn()||null,(this.currently_playing=this.Anims["Circles-Attack"]).play(),this.attack_time=0,this.timers.push(new FPE_Timer(0.2,function(){this.fpe_data.tackle_box=true;this.timers.push(new FPE_Timer(0.3,function(){this.fpe_data.tackle_box=false}.bind(this)));this.TargetEntity=null;this.Homing=false;this.FollowAgain()}.bind(this)))}HitboxOverlap(){if(!(this.Anims["Bloomie-Charge"]===this.currently_playing||this.Anims["Bloomie-Projectile"]===this.currently_playing)&&null!==this.currently_playing)return;else if(this.currently_playing)this.currently_playing.reset_parameters(),this.currently_playing=null;if(!this.Oreod){if(this.variant=="science")this.fpe_data.attackingType=null,this.attack_time=null;if(null===this.fpe_data.attackingType){this.CirclesAttack();this.BloomiseAttack();this.ThavelAttack();if(this.variant=="alice")this.fpe_data.tackle_box=true}}}NearBoxOverlap(){this.fpe_data.near_box=false;if(!this.FollowingPlayer){let closest=this.FindClosestPawn();if(closest)this.facing_angle=radians_to_degrees(this.targetAngle=this.angle=Math.atan2(closest.y-this.y,closest.x-this.x)),this.anglevel();this.Homing=true;this.invisibilityTimeLeft=0.7916667;this.isFastDescending=true;this.fixed_movement_speed=0;(this.currently_playing=this.Anims["Thavel-FastDescent"]).play();this.timers.push(new FPE_Timer(0.1,function(){this.texture="entities/miss_thavel_normal";this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture);this.textureFrame=[20,38,505,736]}.bind(this)))}}ResetRandom(){this.RandomChanceLocked=false;this.IsClosed3=false;this.HasBeenInitd3=true}RandomChance(){if(this.RandomChanceLocked)return;this.RandomChanceLocked=true;this.timers.push(new FPE_Timer(Math.random()*19+1,function(){let v=Math.random()*2|0;if(v==0)this.ProjectileAttack();else if(v==1)this.ChargeAttack();else return}.bind(this)))}HostileAI(){let VariantEntity="Circles,Bloomie,Thavel".split(",")["math,science,language".split(",").indexOf(this.variant)];if(!this.Anims[VariantEntity+"-Angy"]||this.brightness==0)return;null===this.currently_playing&&((this.currently_playing=this.Anims[VariantEntity+"-Angy"]).play(),this.fixed_movement_speed=0)}HostileSprint(){this.fpe_data.desired_speed=this.fpe_data.hostile_speed;this.hostile_charging&&(this.fpe_data.desired_speed=this.fpe_data.hostile_charge_speed);this.brightness==0&&(this.fpe_data.desired_speed=this.fpe_data.invis_speed)}AmbushPhase(){this.Stealth=true;this.AttackCooldown=true;this.attack_time=null;this.fixed_movement_speed=0;this.visibilityTimeLeft=1.0416666;(this.currently_playing=this.Anims["Thavel-Hide"]).play()}RandomPhased(){if(!this.IsClosed3){this.IsClosed3=true;let v=Math.random()*4|0;if(v==0)this.AmbushPhase();else this.timers.push(new FPE_Timer(3,function(){this.#DoRandomPhasedAgain()}.bind(this)))}if(!this.HasBeenInitd3)this.HasBeenInitd3=true}MoveToSpecifiedPosition(pos,acceptRadius,onSuccess=function(){},onFail=function(){}){let v=this.Target;pos.area=this.area,pos.type="pathfinding",pos.tolerance=acceptRadius,pos.onSuccess=onSuccess,pos.onFail=onFail,this.Target=pos;v&&v.onFail("abort");return true}FindAgain(){let closest=this.FindClosestPawn(true);if(!closest&&!this.StopFinding)this.timers.push(new FPE_Timer(Number.EPSILON,function(){this.FindAgain()}.bind(this)));else if(closest&&this.MoveToSpecifiedPosition({get x(){return closest.x},get y(){return closest.y}},1,function(){this.#DoesSlowDescent()}.bind(this),function(){if(!this.StopFinding)this.timers.push(new FPE_Timer(Number.EPSILON,function(){this.FindAgain()}.bind(this)))}.bind(this)))return}Impatient(){console.debug("%cImpatient","font-family:arial black;color:rgba(0%,66%,100%,100%)");this.StopFinding=false;this.FollowingPlayer=true;let closest=this.FindClosestPawn(true);if(closest)this.facing_angle=radians_to_degrees(this.targetAngle=this.angle=Math.atan2(closest.y-this.y,closest.x-this.x)),this.anglevel();this.FindAgain()}LookForASpot(){if(!this.found_spot){let getRandomPointInCircle=function(self,r){let ang=Math.random()*Math.PI*2,mag=Math.random()*r;return new SAT.V(self.x+Math.cos(ang)*mag,self.y+Math.sin(ang)*mag)},RandomLocation=getRandomPointInCircle(this,10000*this.cMultiplier),f=function(){this.#DidFindAHidingSpot()}.bind(this);console.debug("%cLooking for a spot","font-family:arial black;color:rgba(0%,66%,100%,100%)");if(!this.MoveToSpecifiedPosition(RandomLocation,25,f,f))console.log("bruh");this.timers.push(new FPE_Timer(5,function(){this.#DidFindAHidingSpot()}.bind(this)))}}RandomRoam(){this.fixed_movement_speed=null}reset_parameters(){let self=this;self.isFPE=true;self.pawn_sensing_interval=500;self.pawn_sensing_time=500;self.immune=true;if(self.variant==="test")return self.absoluteZIndex=-1,self.relativeZIndex=0,self.level=2,self.scaleOscillator=new Oscillator(1.1,1.1,1.2,0.15,!0),self.texture="entities/test_paper",self.renderRedOutline=true,self.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(this.texture),self.ogradius=self.radius=75/2,self.imageRatio=76.72859*2/(100.09375+100.081245),self.isEnemy=false;self.isNextbot=true;self.timers=[];self.Anims={Initialize(){this["Circles-Angy"].reset_parameters();this["Circles-Attack"].reset_parameters();this["Bloomie-Angy"].reset_parameters();this["Bloomie-Attack"].reset_parameters();this["Bloomie-Charge"].reset_parameters();this["Bloomie-Projectile"].reset_parameters();this["Thavel-Angy"].reset_parameters();this["Thavel-Angy(ambushing)"].reset_parameters();this["Thavel-Attack"].reset_parameters();this["Thavel-Hide"].reset_parameters();this["Thavel-SlowDescent"].reset_parameters();this["Thavel-FastDescent"].reset_parameters()},"Circles-Angy":new FPE_Animate(3.2916667,{BlendOut:0.6},[[0.1008539,function(){console.debug("You failed!")}.bind(self)]],{onBlendOut:function(){this.RandomRoam();this.AttackCooldown=false;this.HostileSprint()}.bind(self)}),"Circles-Attack":new FPE_Animate(2.0416667,{BlendIn:0.05,BlendOut:0.1},[[0.08277748,function(){return;audio_play(Move1)}],[0.15243286,function(){return;audio_play(SwingWeapon)}],[1.4331931,function(){return;audio_play(Mov2)}],[1.821915,function(){return;audio_play(Moving2)}]],{onCompleted:function(){this.AttackCooldown=false}.bind(this)}),"Bloomie-Angy":new FPE_Animate(2.0416667,null,[],{onBlendOut:function(){this.RandomRoam();this.AttackCooldown=false;this.HostileSprint()}.bind(this)}),"Bloomie-Attack":new FPE_Animate(1.4166666,null,[[0,function(){return;audio_play(MBSwingNormal)}]],{onCompleted:function(){this.AttackCooldown=false}.bind(this)}),"Bloomie-Charge":new FPE_Animate(2.4791667,null,[],{onCompleted:function(){this.ResetRandom();this.AttackCooldown=false}.bind(this)}),"Bloomie-Projectile":new FPE_Animate(2.4583333,{BlendIn:0.6,BlendOut:0.4},[[0.49196956,function(){return;audio_play(MBSwingNormal)}]],{onBlendOut:function(){this.fixed_movement_speed=null}.bind(this),onCompleted:function(){this.ResetRandom();this.AttackCooldown=false}.bind(this)}),"Thavel-Angy":new FPE_Animate(2.0416667,null,[[0.29848444,function(){return;audio_play(ThavelLaugh2)}]],{onBlendOut:function(){this.RandomRoam();if(this.brightness!==0)this.AttackCooldown=false,this.HostileSprint(),this.timers.push(new FPE_Timer(3,function(){this.RandomPhased()}.bind(this)))}.bind(this)}),"Thavel-Angy(ambushing)":new FPE_Animate(2.0416667,null,[[0.29848444,function(){return;audio_play(ThavelLaugh2)}]],{onCompleted:function(){this.fixed_movement_speed=null;this.hostile_charging=true;this.fpe_data.desired_speed=this.fpe_data.hostile_charge_speed;this.AttackCooldown=false;this.FollowingPlayer=false;this.Stealth=false;this.timers.push(new FPE_Timer(4,function(){this.#DoRandomPhasedAgain()}.bind(this)))}.bind(this)}),"Thavel-Attack":new FPE_Animate(1.2083334,null,[[0.20989972,function(){return;audio_play(SwingWeapon)}],[0.2444752,function(){return;audio_play(ThavelGrah)}]],{onCompleted:function(){this.Anims["Thavel-Hide"]!=this.currently_playing&&(this.AttackCooldown=false);this.hostile_charging=false}.bind(this)}),"Thavel-Hide":new FPE_Animate(1.0416666,{BlendOut:0},[],{onCompleted:function(){this.fixed_movement_speed=null;this.found_spot=false;this.Homing=false;this.LookForASpot();this.fpe_data.desired_speed=this.fpe_data.invis_speed}.bind(this)}),"Thavel-SlowDescent":new FPE_Animate(1.625,{BlendIn:0},[],{onCompleted:function(){this.fixed_movement_speed=null;this.FollowPlayerClose=true;this.hostile_charging=true}.bind(this)}),"Thavel-FastDescent":new FPE_Animate(0.7916667,{BlendIn:0},[[0.012058283,function(){return;audio_play(ThavelLaugh1)}],[0.2159344,function(){return;audio_play(HeavyLandingThavel)}]],{onCompleted:function(){this.hostile_charging=false;this.fixed_movement_speed=null;this.Stealth=false;this.AttackCooldown=false;this.Homing=false;this.fpe_data.desired_speed=this.fpe_data.hostile_speed}.bind(this)})};self.Anims.Initialize();self.cMultiplier=0.5;self.ogradius=27.805035*self.cMultiplier,self.visualRadius=(27.805035+74.7879)*self.cMultiplier;self.currently_playing=null;self.fpe_data={attack_damage:1e9,tackle_box:false,near_box:false,hostile_speed:300,attackingType:null,passive_speed:300,attacked_entities:[],acceleration_speed:2048,deceleration_speed:Infinity,desired_speed:0};self.name={font_face:"fnt_barrio",font_weight:"Normal",get font_size(){return 12*(self.visualRadius||self.radius)/15},text_content:"Default",toString(){return self.type}};if(self.variant === "math"){self.name.text_content="Miss circle",self.texture="entities/miss_circle",self.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(self.texture),self.textureFrame=[12,67,912,931];let u=[542.268,542.268,542.268,542.268,542.268,542.268,542.268,1002.771,1463.172,1463.216,2114.445,2114.447,2114.444,2114.446,2114.293,685.521,685.523,423.651];for(var i=0;i<34;i++)u.push(161.92);u.push(138.57,115.262,115.258);for(var i=0;i<60;i++)u.push(110.275);self.fpe_data.melee_attack=u,self.fpe_data.attack_damage=100,self.fpe_data.desired_speed=self.level==0?self.fpe_data.passive_speed:self.fpe_data.hostile_speed}else if(self.variant==="science"){self.name.text_content="Miss bloomie";let u=[];for(var i=0;i<34;i++)u.push(29.301);u.push(28.876,1867.711,2810.338);for(var i=0;i<83;i++)u.push(3124.161);for(var i=0;i<13;i++)u.push(180.285);self.fpe_data.charge_attack=u,u=[429.660];for(var i=0;i<5;i++)u.push(214.83);u.push(713.808,1212.678,1212.730);for(var i=0;i<7;i++)u.push(1917.735);u.push(1179.136,440.922,440.871);for(var i=0;i<49;i++)u.push(71.714);self.fpe_data.melee_attack=u,self.fpe_data.attackingType=null,self.has_projectile=true,self.texture="entities/miss_bloomie",self.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(self.texture),self.textureFrame=[10,4,553,718],self.fpe_data.attack_damage=40,self.fpe_data.desired_speed=self.level==0?self.fpe_data.passive_speed:self.fpe_data.hostile_speed}else if(self.variant==="language"){self.name.text_content="Miss thavel",self.fpe_data.thavel_follow_patience=10,self.fpe_data.thavel_hiding_patience=20,self.fpe_data.passive_speed=200,self.fpe_data.hostile_speed=300,self.fpe_data.hostile_charge_speed=400,self.fpe_data.invis_speed=2000,self.texture="entities/miss_thavel_normal",self.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(self.texture),self.textureFrame=[20,38,505,736];let u=[1001.687,459.736,418.605,418.661,2680.895,2680.879,3435.050];for(var i=0;i<9;i++)u.push(4189.067);u.push(2573.418,958.590,958.467);for(var i=0;i<15;i++)u.push(150.969);u.push(105.675,105.676,90.559);for(var i=0;i<14;i++)u.push(75.470);u.push(60.382,45.294,45.265);self.fpe_data.melee_attack=u,self.fpe_data.attack_damage=30,self.fpe_data.desired_speed=self.level==0?self.fpe_data.passive_speed:self.fpe_data.hostile_speed}else if(self.variant==="alice"){self.lightColor="#FF0000",self.lightRadius=Math.sqrt(2000)*10,self.fpe_data.desired_speed=3000,self.name.text_content=self.type,self.texture="entities/princess_∆lice",self.image=$31e8cfefa331e399$export$93e5c64e4cc246c8(self.texture),self.textureFrame=[25,58,503,856]}self.xv=0;self.yv=0;self.velX=0;self.velY=0;self.ents=[];self.outline=false;self.EntitiesInSight=[];self.SeenPawns=[];self.TargetEntity=null;self.Target=null;self.AttackCooldown=true;self.fixed_movement_speed=null;self.isAngry=self.wasAngry=false;self.follow_last_seen=0;self.facing_angle=radians_to_degrees(self.angle);self.HorizontallyReversed=(self.texture.startsWith("entities/princess")||self.texture.endsWith("_normal"))?(self.facing_angle<90||self.facing_angle>270):(self.facing_angle>90&&self.facing_angle<270)}InstaAttack(){console.debug("%cSeen","font-family:arial black;color:rgba(0%,66%,100%,100%)");this.FollowPlayerClose=false;this.fpe_data.desired_speed=this.fpe_data.hostile_charge_speed;this.AttackCooldown=false;this.FollowingPlayer=false;this.Stealth=false;this.timers.push(new FPE_Timer(5,function(){this.AmbushPhase()}.bind(this)))}update(time,area,players,collide){if(this.variant==="test")return super.update(time,area,players),this.scaleOscillator.update(time);if(this.timeSinceVisible<0&&this.FollowPlayerClose){this.timeSinceVisible+=time/1e3;if(this.timeSinceVisible>=0&&!this.IsClosed2)this.IsClosed2=true,this.TheySawUs=true,this.Homing=true,this.InstaAttack(),this.timers.push(new FPE_Timer(10,function(){this.ThavelAttack()}.bind(this)))}let o,BC=e=>(this.variant==="math"?e.missCircleAiLevel>0:this.variant==="science"?e.missBloomieAiLevel>0:this.variant==="language"?e.missThavelAiLevel>0:this.variant==="alice"),min=1/0,exclusions=[Pellet,Wall,FlashlightItem,LightRegion,ImageBackground,Torch],m=this.cMultiplier;this.ogradius=27.805035*m,this.visualRadius=(27.805035+74.7879)*m;this.variant==="alice"&&(this.lightRadius=Math.sqrt(2000)*10*m);let pawn_sensing=new Obstacle({type:[4,[],[]],x:this.x+Math.cos(degrees_to_radians(this.facing_angle))*23.52941131591797*m,y:this.y+Math.sin(degrees_to_radians(this.facing_angle))*23.52941131591797*m,r:10000*m,innerRadius:0,startSliceAngle:-60+this.facing_angle,endSliceAngle:60+this.facing_angle,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0});if(this.variant==="math")o=[88.23530578613281,0,250,125,0.265,0.265];else if(this.variant==="science")o=[88.23530578613281,0,250,125,0.2475,0.2475];else if(this.variant==="language")o=[150.5976104736328,0.0001220703125,450,75,0.2475,0.2475];else if(this.variant==="alice")o=[35.29411315917969,0,100,125,0.2,0.2],pawn_sensing=new Obstacle({type:[4,[],[]],x:this.x+Math.cos(degrees_to_radians(this.facing_angle))*23.52941131591797*m,y:this.y+Math.sin(degrees_to_radians(this.facing_angle))*23.52941131591797*m,r:2000*m,innerRadius:0,startSliceAngle:-55+this.facing_angle,endSliceAngle:55+this.facing_angle,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0});const obst=new Obstacle({type:[0,[],[]],x:this.x,y:this.y,r:this.ogradius}),near_box=new Obstacle({type:[1,[1],[]],rotateSpeed:0,initialRotation:this.facing_angle,pivotX:this.x,pivotY:this.y,x:this.x-1200/2*m,y:this.y-1200/2*m,w:1200*m,h:1200*m}),tackle_box=new Obstacle({type:[1,[1],[]],rotateSpeed:0,initialRotation:this.facing_angle,pivotX:this.x,pivotY:this.y,x:this.x+(o[0]-o[2]/2)*m,y:this.y+(o[1]-o[3]/2)*m,w:o[2]*m,h:o[3]*m});let p=players.concat([]);if(!p.length&&!playtesting)mouseEntity.missCircleAiLevel=20,mouseEntity.missBloomieAiLevel=20,mouseEntity.missThavelAiLevel=20,p.push(mouseEntity);this.ents=area.entities.filter(e=>exclusions.indexOf(e.constructor)==-1&&!e.isFPE&&!(e instanceof this.constructor)).concat(p);if(this.Target?.type!="pathfinding")this.Target=null;this.EntitiesInSight.map(e=>{if(-1===this.SeenPawns.indexOf(e))this.SeenPawns.push(e)}),this.EntitiesInSight.length=0;this.SeenPawns=this.SeenPawns.filter(e=>!e.remove&&e.area==this.area);this.pawn_sensing_time-=time;for(const ent of this.ents){let res=new SAT.Response,B=BC(ent),in_sight=pawn_sensing.collision(ent,new SAT.V,res);if(obst.collision(ent,new SAT.V,res)&&this.variant==="alice")/*B&&(this.speedMultiplier=0),*/ent.x+=res.overlapV.x/2,ent.y+=res.overlapV.y/2,this.x-=res.overlapV.x/2,this.y-=res.overlapV.y/2;if(in_sight&&B&&this.pawn_sensing_time<=0){if(this.variant==="science")this.RandomChance();if(this.EntitiesInSight.push(ent),distance(this,ent)<min&&(this.brightness??1)&&!this.Stealth)min=distance(this,ent),this.follow_last_seen=5*Math.pow(4,this.variant==="math"),!this.currently_playing&&this.MoveToSpecifiedPosition({get x(){return ent.x},get y(){return ent.y}},5)}}if(this.pawn_sensing_time<=0)this.pawn_sensing_time+=this.pawn_sensing_interval;let f=this.ents.find(e=>BC(e));if(!this.wasAngry&&this.isAngry&&f&&this.variant!=="alice")this.HostileAI(),this.facing_angle=radians_to_degrees(this.target_angle=this.angle=Math.atan2(f.y-this.y,f.x-this.x));this.level=0;this.ents.map(e=>this.level=Math.max(this.level,(this.variant==="math"?e.missCircleAiLevel:this.variant==="science"?e.missBloomieAiLevel:this.variant==="language"&&e.missThavelAiLevel)||0));this.wasAngry=this.isAngry;this.isAngry=this.HostHostile();if(!this.isAngry)this.AttackCooldown=true,this.fpe_data.desired_speed=this.fpe_data.passive_speed,this.brightness==0&&(this.fpe_data.desired_speed=this.fpe_data.invis_speed);this.progressSpeed();null!==this.fixed_movement_speed&&(this.fpe_data.desired_speed=this.fixed_movement_speed);for(const ent of this.ents){if(BC(ent)&&this.isAngry){let res=new SAT.Response,isColliding=tackle_box.collision(ent,new SAT.V,res);if(isColliding&&(this.brightness??1))this.HitboxOverlap();res.clear();isColliding=near_box.collision(ent,new SAT.V,res);if(isColliding&&this.fpe_data.near_box)this.NearBoxOverlap()}}if(this.fpe_data.tackle_box){for(const entity of this.ents){let res=new SAT.Response;if(tackle_box.collision(entity,new SAT.V,res)&&this.fpe_data.attacked_entities.indexOf(entity)==-1){let entityDead=false;!entity.maxHealth&&(entity.health=entity.maxHealth=100);entity.health-=this.fpe_data.attack_damage;if(entity.health<=0)entity.health=0,entityDead=true;if(this.variant!=="alice")this.fpe_data.attacked_entities.push(entity);if(entityDead){entity.remove=true;if(entity.isLocalPlayer)customAlert("You died! :C",3,"#FFFFFF"),stopPlaytesting();else if(map.players.indexOf(entity)!==-1)customAlert(`${entity.name} died`,3,"#FFFFFF"),map.players.splice(map.players.indexOf(entity),1)}}}}else if(this.fpe_data.attacked_entities.length)this.fpe_data.attacked_entities.length=0;this.updateTimers(time/1e3);this.velX=this.xv;this.velY=this.yv;this.velangle();let bound=map.areas[this.area].boundary;if(this.Target&&this.Target.type=="pathfinding"&&!this.no_collide&&(this.Target.x<bound.left||this.Target.x>bound.right||this.Target.y<bound.top||this.Target.y>bound.bottom))this.Target.onFail(),this.Target=null;if(this.Target&&this.Target.type=="pathfinding"&&distance(this.Target,this)<this.Target.tolerance*m+this.radius)this.Target.onSuccess(),this.Target=null;if((this.Target||this.TargetEntity)&&!(this.currently_playing&&!this.currently_playing.BlendOut[1])&&!this.isHarmless){let t=this.TargetEntity||this.Target,dX=t.x-this.x,dY=t.y-this.y,ang=radians_to_degrees(Math.atan2(this.velY,this.velX));if(this.speed>0&&Math.abs(Obstacle.shortAngleDist(ang,radians_to_degrees(this.targetAngle)))>45)this.speed-=this.fpe_data.acceleration_speed*time/1e3;this.targetAngle=Math.atan2(dY,dX);this.anglevel();this.velX+=this.fpe_data.acceleration_speed*time/1e3*Math.cos(this.targetAngle);this.velY+=this.fpe_data.acceleration_speed*time/1e3*Math.sin(this.targetAngle);this.velangle();this.speed=distance(new SAT.V(this.velX,this.velY),new SAT.V);this.angle=this.targetAngle;this.anglevel();if(this.speed>this.fpe_data.desired_speed)this.speed=this.fpe_data.desired_speed,this.anglevel()}else{if(this.velangle(),this.speed>0)this.speed-=this.fpe_data.deceleration_speed*time/1e3;if(this.speed<0)this.speed=0;this.anglevel()}let t=this.FindClosestPawn(true);if(this.variant=="language"&&this.Homing&&t)this.targetAngle=this.angle=Math.atan2(t.y-this.y,t.x-this.x),this.facing_angle=radians_to_degrees(this.angle);if(this.attack_time!==void 0&&this.attack_time!==null){let v="melee_attack";if(this.fpe_data.attackingType==="charge_attack")v="charge_attack";this.fixed_movement_speed=this.fpe_data[v][Math.floor(this.attack_time*60)]??null;this.attack_time+=time/1e3;if(null === this.fixed_movement_speed)this.attack_time=null,this.fpe_data.attackingType=null}if(null!==this.fixed_movement_speed){this.velangle();if(this.TargetEntity&&this.Homing)this.targetAngle=this.angle=Math.atan2(this.TargetEntity.y-this.y,this.TargetEntity.x-this.x),this.facing_angle=radians_to_degrees(this.angle);else this.targetAngle=this.angle=degrees_to_radians(this.facing_angle);this.speed=this.fixed_movement_speed;this.anglevel()}this.xv=this.velX;this.yv=this.velY;this.speedMultiplier*=m;let vel=new SAT.V(this.xv,this.yv),mod=(e,t)=>(e%t+t)%t,par=radians_to_degrees(Math.atan2(vel.y,vel.x));distance(vel,new SAT.V)>0?(this.facing_angle=par):(par=this.facing_angle);this.facing_angle=mod(par,360);if(this.facing_angle>180)this.facing_angle-=360;let hr=this.HorizontallyReversed;if(Number(Math.abs(this.facing_angle).toFixed(6))!=90){this.HorizontallyReversed=Number(Math.abs(this.facing_angle).toFixed(6))>90;if(this.texture.endsWith("_normal")||this.texture.startsWith("entities/princess"))this.HorizontallyReversed=!this.HorizontallyReversed}this.HorizontallyReversed??=false;this.facing_angle=par;super.update(time,area,players)}progressSpeed(){if(this.level>0){this.fpe_data.hostile_speed=this.level>=20?{language:800,math:900,science:1400}[this.variant]:this.level>=10?{language:700,math:600,science:900}[this.variant]:this.level>=6?{language:500,math:500,science:700}[this.variant]:this.level>=3?{language:400,math:400,science:500}[this.variant]:{language:300,math:300,science:400}[this.variant];this.fpe_data.hostile_charge_speed=this.level>=20?{language:1000}[this.variant]:this.level>=10?{language:800}[this.variant]:this.level>=6?{language:600}[this.variant]:this.level>=3?{language:500}[this.variant]:{language:400}[this.variant];if(this.fpe_data.hostile_speed)this.HostileSprint()}}render(e,t,delta){const v=(void 0===this.visualRadius?this.radius:this.visualRadius);if(e.globalAlpha=Math.min(this.brightness,e.globalAlpha),this.name&&(e.font=$f36928166e04fda7$export$2e2bcd8739ae039.font(t.toScale(this.name.font_size||12)).replace("EvadesTahoma",`${this.name.font_face}, EvadesTahoma`),e.textAlign="center",e.fillStyle=settings.tileMode>1?"white":"black",e.fillText(this.name.text_content||this.name,t.getX(this.x),t.getY(this.y-v+(3.5-11)*v/15))),this.shatterTime>0)this.drawShattered(e,t);else if(this.mortarTime>0)this.drawExploded(e,t);else{let imageRatio=this.imageRatio||(this.image?.image?.width/this.image?.image?.height)||1,o=this.scaleOscillator?this.scaleOscillator.value:1,h=100.09375+100.081245,xScale=Math.pow(-1,this.HorizontallyReversed|0);if(this.textureFrame)imageRatio=this.textureFrame[2]/this.textureFrame[3];e.translate(t.getX(this.x),t.getY(this.y));e.scale(xScale,1);if(this.renderRedOutline&&this.variant==="test"&&!this.image.blank)e.fillStyle="red",e.fillRect(t.toScale(-v*o*imageRatio-6/h*v*o),t.toScale(-v*o-6/h*v*o),t.toScale(2*v*o*imageRatio+12/h*v*o),t.toScale(2*v*o+12/h*v*o));this.image.draw(e,0,...(this.textureFrame??[]),-t.toScale(v*imageRatio*o*xScale),-t.toScale(v*o),t.toScale(2*v*imageRatio*xScale*o),t.toScale(2*v*o));e.scale(xScale,1);e.translate(-t.getX(this.x),-t.getY(this.y))}e.globalAlpha=1}playerInteraction(player){if(this.variant!=="test")return;if(simulateIt){if(this.remove||player.isDowned()||player.remove)return;this.remove=true;this.subject=["math","science","language"][Math.random()*3|0];SpawnerSpawn([{"types":[{"i":this.subject}]}],this,this.z,this.area);Math.random()<0.1&&(player.name="Claire • Engel • Bubble • Abbie • Lana • Oliver • Zip • Edward • Cubbie • Kevin • Lizzy • Petunia • Riley • Robby • Ruby • Skell".split(" • ")[Math.random()*16|0]);if(player.isLocalPlayer)this.random_test_check(evadesRenderer.fpe_teach_icons);else player.updateExp(4*player.level),player.abilityHelperType=8,player.abilityHelperTime=1200,this.subject=="math"&&(player.missCircleAiLevel+=this.level+1),this.subject=="science"&&(player.missBloomieAiLevel+=this.level+1),this.subject=="language"&&(player.missThavelAiLevel+=this.level+1)}}random_test_check(WB_TestQuestions){WB_TestQuestions.difficulty=this.level;WB_TestQuestions.reset_WB_TestQuestions(this.subject);if(this.subject==="math")this.random_test_math(WB_TestQuestions);else if(this.subject==="science")this.random_test_science(WB_TestQuestions);else if(this.subject==="language")this.random_test_language(WB_TestQuestions)}random_test_math(WB_TestQuestions){let R=Math.random()*(13+1)|0,template="What is 9+10 ?\t19\t910\t21\t9+10\t\ttrue\nHow do you call the geometric\r\\nfigure with 3 sides ?\tA pyramid\tA triangle\tA tetrahedron\tA three sided figure\t\t\ttrue\nWhat is the \r\\nsum of first 5 numbers ?\t5\t25\t15\t50\t\t\t\ttrue\nWho is the best teacher ?\tMiss Circle :)\tMiss Bloomie\tMiss Thavel\tHonestly, I prefer the\r\\nbald guy\t\ttrue\nWhat is the value of π ?\t3\t3.14\t4\tπ\nAnswer This Question!\t76\t69\t71\tidk\tMatrh1\t\ttrue\nGive me your oreos!\tNo\tI don't have any\tNEVER\tI'll rather die\nWhat is 1-5?\t-6\t6\t-4\t4\t\t\t\ttrue\nWhat is 6x7 ?\t56\t67\t49\t42\t\t\t\t\ttrue\nProper method of eating oreos ?\tAny Method\tLicking off the milk part\tJust Eat it\tI prefer KitKat\tMissCircleBuyingStuff\n>:)\tD:\t:(\tPlease don't kill me\tHelp\tAIMax\nWhat is the absolute\r\\nvalue of -25 ?\t-25\t25\t5\t-5\t\t\ttrue\nWhat is 1 divided by 0 ?\t1\t0\tInfinity\tNothing\nDid you do your homework ?\tThere was homework ?\tMy dog ate it\tI forgot it at home\tDefinitely".split("\n").map(e=>e.split("\t"));this.#init_test_questions(template[R],WB_TestQuestions)}random_test_science(WB_TestQuestions){let R=Math.random()*(11+1)|0,template="What Formula is this ?\tNewton's law\tDalton's Law\tBernoulli's Law\tFourier's Law\tNewtonsformula\ttrue\nWhat does this relate to ?\tNature Proccess\tChemical Reactions\tOxygen\tIHATETHIS\tLaw\t\ttrue\nWhat does this image represent ?\tThe Great Tube\tThe Small Bong\tThe Big Bang\tThe Great Depression\tbigbang\t\t\ttrue\nWho is the first to have\r\\ndiscovered the concept\r\\nof gravity ?\tEinstein\tAristotle\tGalilei\tNewton\t\t\t\t\ttrue\nWhat is the name of the\r\\nreaction where water changes\r\\nfrom liquid to gas    ?\tGasification\tFogification\tEvaporation\tHeating\t\t\t\ttrue\nWhat is the meaning\r\\nof life ?\t42\tTo do whatever we want\tTo not be here\tWTF are these questions\nHow do you solve this ?\tIdk\tPass\tYou can't\twhat\tGravityStuff\nHow many bones in a human body ?\t201\t206\t186\t198\t\t\ttrue\nHow many teeth does a human have ?\t32\t28\t24\t30\t\ttrue\nWhat does this mean ?\tWe are all gonna die\tno\tI'm out\tidk\tEinstein\nWhat is the smallest thing\r\\nin the universe ?\tAtoms\tMiss Bloomie\tCells\tA pebble\now are babies made ?\tMitosis\tThey spawn in\tStorks deliver them\tOrphanage".split("\n").map(e=>e.split("\t"));this.#init_test_questions(template[R],WB_TestQuestions)}random_test_language(WB_TestQuestions){let R=Math.random()*(12+1)|0,template=`How do you say "welcome"\r\\nin French ?\tBienvenue\tBonjour\tSalut\tOmelette au fromage\t\ttrue\nHow do you say "pasta"\r\\nin Italian ?\tMama mia\tPasta\tPasto\tPaste\t\t\ttrue\nWhat is the second most spoken\r\\nlanguage in the world ?\tEnglish\tSpanish\tChinese\tRussian\t\t\t\ttrue\nWhat language is the third most \r\\nspoken in canada?\tGerman\tEnglish\tFrench\tChinese\t\t\t\t\ttrue\nKaboom ?\tKaboom!!!\tKaboom?\tKaboom?!\tYes Thavel, Kaboom\tKaboom\nWhat is an antonym of\r\\nthe word "hope" ?\twish\tno hope\tdisbelief\thopeless\t\t\t\ttrue\nIs learning a language\r\\naccessible to everyone ?\tNo\tI don't think so\tidk\tProbably\nWendigo ?\tYEAH :D\tDeer\tNo ?\tWhat ?\nMost used letter in the\r\\nalphabet ?\tE\tA\tI\tU\t\ttrue\nHow do you prepare for a\r\\nlanguage assesment test?\tMemorize\tStudy\tPractice\tPlay videogames\nWhich one of these is wrong ?\tEasying\tEasely\tEasies\tEasied\t\t\ttrue\nLongest word in English ?\tUnimaginatively\tPneumonoul...etc...\tidk\tlongestwordinenglish\nYou failed your test\tCan we talk about this?\tNo I didn't\tUh oh\tF`.split("\n").map(e=>e.split("\t"));this.#init_test_questions(template[R],WB_TestQuestions)}},Factor.AphmauEntity=class AphmauEntity extends Enemy{constructor(x,y,radius,speed,angle,variant=0){let weights=[{chance:1,value:"Jessica Bravura,Jason Bravura,Corinne Sudberg,Moeka Hoshizora,Kestin Howard,Chris Escalante,Michael A. Zekas,Shado_Temple".split(",")[variant]},{chance:99,value:"Aphmau,Aaron,Kimberly,Kawaii~Chan,Zane,Ein,Noi,Pierce".split(",")[variant]}],tol=weights.reduce((e,t)=>(e.chance??e)+(t.chance??t)),r=Math.random()*tol,cursor=0;super(x,y,radius,speed,angle,"normal_enemy");for(var i in weights){cursor+=weights[i].chance;if(cursor<r)continue;this.name=weights[i].value;break}this.type=weights[1].value;this.color="#CC88FF,#DC1818,#0CCCA0,#F078DC,#707070,#443CDC,#EC9024,#38B8E8".split(",")[variant];this.v=variant;this.z=-1;this.survivalTime=0;this.onTele=true;this.isEnemy=false;this.velX=0;this.velY=0;this.d_x=0;this.d_y=0;this.distance_moved_previously=[0, 0];this.id='zYfz8uibvnB7Yc1LjePi4g';this.movement_immune=true;this.image=$31e8cfefa331e399$export$93e5c64e4cc246c8("entities/"+this.type.toLowerCase());this.fontType="MY Home, fnt_my_home";this.outline=false}isDowned(){return false}playerInteraction(){}controlActions(input,delta){if(input.keys){this.hasNoInput=false;if(!this.prevSlippery||this.collides||(this.d_x==0&&this.d_y==0)){if(input.keys.has(controls.FOCUS)&&!this.slippery)this.shift=2;else this.shift=1;this.statSpeed=this.speed+0;this.addX=0;this.addY=0;this.d_x=0;this.d_y=0;if(this.shift==2)this.speedMultiplier/=2;this.distance_movement=this.speed*this.speedMultiplier;this.mouseActive=false;if(input.isMouse&&!Player.prototype.isMovementKeyPressed(input)){this.mouse_distance_full_strength=200;this.mouseActive=true;this.movement_involved=true;if(this.slippery)this.mouse_distance_full_strength=1;this.dirX=(input.mouse.x-canvas.width/2)/Cam.originalGameScale;this.dirY=(input.mouse.y-canvas.height/2)/Cam.originalGameScale;this.dist=distance({x:0,y:0},{x:this.dirX,y:this.dirY});if(this.dist>this.mouse_distance_full_strength)this.dirX*=this.mouse_distance_full_strength/this.dist,this.dirY*=this.mouse_distance_full_strength/this.dist;this.dirX=clamp(this.dirX,-150,150);this.dirY=clamp(this.dirY,-150,150);this.mouse_distance_full_strength=Math.min(this.mouse_distance_full_strength,150);this.mouse_angle=Math.atan2(this.dirY,this.dirX);this.input_angle=this.mouse_angle;this.mouse_distance=Math.min(this.mouse_distance_full_strength,Math.sqrt(this.dirX**2+this.dirY**2)),this.distance_movement*=this.mouse_distance/this.mouse_distance_full_strength;this.d_x=this.distance_movement*Math.cos(this.mouse_angle),this.d_y=this.distance_movement*Math.sin(this.mouse_angle),this.velX=this.dirX*this.distance_movement/this.mouse_distance_full_strength;if(!this.magnet||this.magnet&&this.safeZone){if(this.vertSpeed==-1)this.velY=this.dirY*this.distance_movement/this.mouse_distance_full_strength;else this.velY=this.dirY*this.vertSpeed/this.mouse_distance_full_strength}}else{this.dirY=0;this.dirX=0;if(Player.prototype.isMovementKeyPressed(input))input.isMouse=false;if(input.keys.has(controls.DOWN[0])||input.keys.has(controls.DOWN[1]))this.dirY=1;if(input.keys.has(controls.UP[0])||input.keys.has(controls.UP[1]))this.dirY=-1;if(input.keys.has(controls.LEFT[0])||input.keys.has(controls.LEFT[1]))this.dirX=-1;if(input.keys.has(controls.RIGHT[0])||input.keys.has(controls.RIGHT[1]))this.dirX=1}if(this.dirY||this.dirX)this.inputAngle=this.input_angle=Math.atan2(this.dirY,this.dirX);if(!input.isMouse)this.d_x=this.distance_movement*this.dirX,this.d_y=this.distance_movement*this.dirY;this.speed=this.statSpeed}}}update(delta,area,players){function checkZoneProperties(e){return zone.properties[e]??area.properties[e]??(map.properties[e]??defaultValues.properties[e])}if(this.hasNoInput)this.controlActions({keys:new Set()},delta);this.hasNoInput=true;for(let player of players)player.canSubscribe|=(distance(player,this)<player.radius*3+this.radius)&&player.area===this.area&&!player.isDowned()&&!player.wasDowned&&this.v===0;this.name=this.name.replace(/'/g,"”").replace(/"/g,"’");this.zoneFriction=1;for(var zone of area.zones){if(rectCircleCollision(this.x,this.y,0,zone.x,zone.y,zone.width,zone.height).c)this.zoneFriction=checkZoneProperties("friction")}let friction_factor=1-this.zoneFriction;this.slide_x=this.distance_moved_previously[0];this.slide_y=this.distance_moved_previously[1];this.slide_x*=friction_factor**(60*delta/1e3);this.slide_y*=friction_factor**(60*delta/1e3);this.d_x+=this.slide_x;this.d_y+=this.slide_y;this.abs_d_x=Math.abs(this.d_x);this.abs_d_y=Math.abs(this.d_y);if(this.abs_d_x>this.distance_movement)this.d_x*=this.distance_movement/this.abs_d_x;if(this.abs_d_y>this.distance_movement)this.d_y*=this.distance_movement/this.abs_d_y;if(this.abs_d_x<0.001)this.d_x=0;if(this.abs_d_y<0.001)this.d_y=0;this.distance_moved_previously=[this.d_x,this.d_y];this.velX=this.d_x;this.velY=this.d_y;this.speedMultiplier=1;super.update(delta,area,players);if(!rectCircleCollision(this.x,this.y,0,-2000,-2000,4000+area.boundary.width,4000+area.boundary.height).c){console.warn(`Entity instance`,this,`is out of bounds, teleporting`);const safezone = area.zones.find(e=>e.type=="safe")||area.zones[0];this.x=safezone.x+this.radius+1+Math.max(0,safezone.width-(this.radius+1)*2)*Math.random();this.y=safezone.y+this.radius+1+Math.max(0,safezone.height-(this.radius+1)*2)*Math.random();this.onTele=true}let onTele=false;for(const zone of area.zones){if(zone.type=="teleport"||zone.type=="exit"){var collided=rectCircleCollision(this.x,this.y,this.radius,zone.x,zone.y,zone.width,zone.height);if(collided.c)onTele=true;if(collided.c&&!this.onTele){var max=Infinity,maxArea=0,targetPoint={x:this.x+zone.translate.x,y:this.y+zone.translate.y};for(var j in map.areas){if(j==this.area)continue;var rect=getAreaBoundary(map.areas[j]),closest=closestPointToRectangle(targetPoint,{x:map.areas[j].x-area.x,y:map.areas[j].y-area.y},{x:rect.width,y:rect.height}),dist=distance(targetPoint,closest);if(dist<max)max=dist,maxArea=parseInt(j)}this.x=targetPoint.x+(area.x-map.areas[maxArea].x);this.y=targetPoint.y+(area.y-map.areas[maxArea].y);let canUnload=true;for(const player of players){if(player===this)continue;if(player.area===this.area&&!player.remove){canUnload=false;break}}if(canUnload)area.entities.length=0,area.isLoaded=false;this.area=maxArea;spawnEntities(this.area);this.hasTranslated=true;this.chronoPos=[];break}}}this.onTele=onTele;this.areaNumber=this.area+1;this.regionName=map.name;if(this.hasTranslated){const area=map.areas[this.area];let safeZone = area.zones[0];for(let zone of area.zones){if(zone.type=="safe"){safeZone=zone;break}}for(let zone of area.zones){if(this.hasTranslated&&zone.type=="teleport"&&rectCircleCollision(this.x,this.y,this.radius,zone?.x,zone?.y,zone?.width,zone?.height).c){const left=safeZone.x,right=left+safeZone.width,top=safeZone.y,bottom=top+safeZone.height;this.x=Math.min(Math.max(this.x,left+this.radius*2),right-this.radius*2);this.y=Math.min(Math.max(this.y,top+this.radius*2),bottom-this.radius*2);this.hasTranslated=false;break}}this.hasTranslated=false}}render(e,t,delta){const v=(void 0===this.visualRadius?this.radius:this.visualRadius);this.fading&&(e.globalAlpha=1-this.fadeInTime/this.fadeInTimeTotal);let fnt_size=t.toScale(4*v/5),preLinewid=e.lineWidth;if(this.name&&(e.font=$f36928166e04fda7$export$2e2bcd8739ae039.font(fnt_size).replace("EvadesTahoma",this.fontType+", EvadesTahoma"),e.textAlign="center",e.strokeStyle=this.color,e.lineJoin="round",e.lineWidth=fnt_size*4/30,e.fillStyle="white",e.filter=`drop-shadow(${fnt_size*0.03}px ${fnt_size*0.03}px ${fnt_size/240*2}px #00000080)`,e.strokeText(this.name,t.getX(this.x),t.getY(this.y-v+(3.5-11)*v/15)),e.filter="none",e.fillText(this.name,t.getX(this.x),t.getY(this.y-v+(3.5-11)*v/15)),e.lineJoin="miter",e.lineWidth=preLinewid),this.shatterTime>0)this.drawShattered(e,t);else if(this.mortarTime>0)this.drawExploded(e,t);else e.save(),e.beginPath(),e.arc(t.getX(this.x),t.getY(this.y),t.toScale(v),0,Math.PI*2),e.closePath(),e.clip(),this.image.draw(e,0,t.getX(this.x-v),t.getY(this.y-v),t.toScale(2*v),t.toScale(2*v)),e.restore();e.globalAlpha=1}}}(global);
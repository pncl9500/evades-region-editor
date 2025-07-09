let playtesting = false
  , isFinish = false
  , errorFX = loadImage('https://s.jezevec10.com/res/se2/topout.mp3')
  , VFX = loadImage("https://cdn.glitch.global/4777c7d0-2cac-439c-bde4-07470718a4d7/mus_gameOver.ogg")
  , canvasLighting = createOffscreenCanvas(window.innerWidth, window.innerHeight)
  , evadesRenderer = {
	snowRenderer: new SnowRenderer,
	sakuraRenderer: new SakuraRenderer,
	dynamicLighting: new DynamicLighting(1)
};
function formatByteSizes(x){
  let indexes=["B","kB","MB","GB"];
  let powOf = Math.floor(Math.max(0,Math.log(x)/Math.log(1024)));
  return `${(x/1024**powOf).toFixed((!!powOf)&&(x/1024**powOf < 100))} ${indexes[powOf]}`
}
const defaultHighestAreaAchieved = function(){
const e = {"Central Core":40,"Central Core Hard":40,"Catastrophic Core":40,"Vicious Valley":40,"Vicious Valley Hard":40,"Elite Expanse":80,"Elite Expanse Hard":80,"Wacky Wonderland":80,"Wacky Wonderland Hard":0,"Glacial Gorge":40,"Glacial Gorge Hard":40,"Dangerous District":80,"Dangerous District Hard":80,"Peculiar Pyramid":31,"Peculiar Pyramid Hard":31,"Monumental Migration":480,"Monumental Migration Hard":1920,"Humongous Hollow":80,"Humongous Hollow Hard":0,"Haunted Halls":16,"Frozen Fjord":40,"Frozen Fjord Hard":40,"Transforming Turbidity":0,"Quiet Quarry":80,"Quiet Quarry Hard":40,"Ominous Occult":16,"Ominous Occult Hard":16,"Restless Ridge":43,"Restless Ridge Hard":48,"Toxic Territory":20,"Toxic Territory Hard":20,"Magnetic Monopole":36,"Magnetic Monopole Hard":34,"Assorted Alcove":40,"Assorted Alcove Hard":28,"Burning Bunker":36,"Burning Bunker Hard":36,"Grand Garden":28,"Grand Garden Hard":28,"Endless Echo":1560,"Endless Echo Hard":54,"Mysterious Mansion":62,"Coupled Corridors":64,"Cyber Castle":16,"Cyber Castle Hard":0,"Research Lab":41,"Shifting Sands":47,"Infinite Inferno":38,"Dusty Depths":0,"Withering Wasteland":35,"Terrifying Temple":0,"Stellar Square":0};
for(const item in e)e[item]=999;return e;}();
function arrow(e, a, t, r, c, o=2, n=15, $="#cc000088", _="#FF0000") {
	if(a==r&&t==c)return;
    const d = Math.atan2(c - t, r - a);
    const dist = Math.sqrt((c - t)**2+(r - a)**2);
    e.moveTo(a+o/4*Math.sin(d), t-o/4*Math.cos(d)),
    e.lineTo(a-o/4*Math.sin(d), t+o/4*Math.cos(d)),
    e.lineTo(r-o/4*Math.sin(d)-Math.min(o,dist)/2*Math.cos(d), c+o/4*Math.cos(d)-Math.min(o,dist)/2*Math.sin(d)),
    e.lineTo(r-o/2*Math.sin(d)-Math.min(o,dist)/2*Math.cos(d), c+o/2*Math.cos(d)-Math.min(o,dist)/2*Math.sin(d)),
    e.lineTo(r, c),
    e.lineTo(r+o/2*Math.sin(d)-Math.min(o,dist)/2*Math.cos(d), c-o/2*Math.cos(d)-Math.min(o,dist)/2*Math.sin(d)),
    e.lineTo(r+o/4*Math.sin(d)-Math.min(o,dist)/2*Math.cos(d), c-o/4*Math.cos(d)-Math.min(o,dist)/2*Math.sin(d)),
    e.lineTo(a+o/4*Math.sin(d), t-o/4*Math.cos(d))
}
function controlPlayer(id,input,delta){
	var player=map.players.filter(e=>e.id==id)[0];
	if(player)player.controlActions(input,delta);
}
function arrayToInt32(s){
	return new DataView(new Int8Array(s).buffer).getUint32();
}
function render(delta) {
	//new Date().getMonth() == 9 && (document.body.style.filter = `sepia(${(Date.now() - new Date(new Date().getFullYear(),9,1)) / (new Date(new Date().getFullYear(),9,31) - new Date(new Date().getFullYear(),9,1))})`);
  const selfPlayer = map.players.filter(e => e.id == window.selfId)[0] || null
	  , zoneColors = [{
		active: "#FFFFFFFF",
		safe: "#C3C3C3FF",
		exit: "#FFF46CFF",
		teleport: "#6AD0DEFF",
		victory: "#FFF46CFF",
		removal: "#FFF9BAFF",
		dummy: "#FFFFFFFF"
	}, {
		active: "#111111ff",
		safe: "#3c3c3cff",
		exit: "#948800ff",
		teleport: "#218795ff",
		victory: "#948800ff",
		removal: "#6b630ff",
		dummy: "#111111ff"
	}]
	  , ctxL = canvasLighting.getContext("2d");
	if(!isFinish)
		$e7009c797811e935$export$2e2bcd8739ae039.start({drawUI:true}),
		$e7009c797811e935$export$2e2bcd8739ae039.registerListeners(),
		isFinish = true;
	$e7009c797811e935$export$2e2bcd8739ae039.update($e7009c797811e935$export$2e2bcd8739ae039.gameState);
	joystickDeadzone.value = settings.joystickDeadzone;
	snapX.value = settings.snapX;
  interfaceScale.value = Cam.guiScale = settings.interfaceScale;
	body_collection.selectedIndex = settings.body;
	gem_collection.selectedIndex = settings.gem;
	hat_collection.selectedIndex = settings.hat;
	pelletTransparency.value = settings.pelletTransparency;
	frameRate.value = settings.frameRate;
	snapY.value = settings.snapY;
  frameRateValue.innerHTML=settings.frameRate;
  if(!playIcons.done){
    playIcons.time += delta;
    function play_button_lerp(x){
      x=clamp(x,0,1);
      return((8*x-9)*x+6)*x/5;
    }
    const curCon = playIcons.prev.split("d=")[1].split("\"")[1];
    const newCon = playIcons[playtesting ? "pause" : "play"].split("d=")[1].split("\"")[1];
    const Puc = function(p) {
      var l = [];
      p = p.match(/[0-9.-]+|[^0-9.-]+/g);
      for (var Q = 0; Q < p.length; Q++) {
        var H = p[Q] === " " ? NaN : Number(p[Q]);
        l.push(isNaN(H) ? p[Q] : H)
      }
      return l
    }, UMX = function(p, l, Q) {
      for (var H = "", q = 0; q < p.length; q++) {
        var W = p[q];
        H = typeof W === "number" ? H + (W + (l[q] - W) * Q) : H + W
      }
      return H
    };
    playtester.querySelector("path").setAttribute("d",UMX(Puc(curCon),Puc(newCon),play_button_lerp(playIcons.time/playIcons.duration)));
    if(playIcons.time > playIcons.duration)playIcons.done=true,playIcons.time=playIcons.duration;
  };
	[pelletTransparencyValue,joystickDeadzoneValue,interfaceScaleValue].map(e=>e.innerHTML=settings[e.id.slice(0,-5)].toFixed(2));
	[abilityParticles,realTime,enemyOutlines,enemyProjectileOutlines,toggleMouseMovement,displayGameplayHints,displayLeaderboard,displayChat,enableMouseMovement,confetti,legacySpeedUnits,fadingEffects,displayTimer,backgroundObjects].map(e=>e.checked=settings[e.id]);
	[tileMode, displayEnergyBars].map(e=>e.selectedIndex=settings[e.id]);
	herotype.selectedIndex = settings.heroType + 1;
	lang.selectedIndex = settings.language;
	closeSettings.style.top = tip.scrollTop + "px";
	if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight){
		let $$ = {
			x: window.innerWidth / 1280,
			y: window.innerHeight / 720
		}, top = 0, left = 0;
    $$.x<$$.y?($$ = $$.x, top = (window.innerHeight - Math.ceil(720 * $$)) / 2):($$ = $$.y, left = (window.innerWidth - Math.ceil(1280 * $$)) / 2);
		if($$ !== Cam.originalGameScale)
			Cam.originalGameScale=$$,
			canvas.width = Math.ceil($$*1280),
			canvas.height = Math.ceil($$*720),
			canvasLighting.width = canvas.width,
			canvasLighting.height = canvas.height,
			Cam.viewportSize.width = canvas.width,
			Cam.viewportSize.height = canvas.height,
			Cam.updateBounds(),
			canvas.setAttribute("style",`top:${top}px;left:${left}px;cursor:none`),
			resizeWebGl();
	};
	if (playtesting){
		if (selfPlayer == null && window.selfId != null)
			stopPlaytesting(),
			spawnEntities(current_Area);
		else
			Cam.centerOn(selfPlayer),
			current_Area = selfPlayer.area;
	}else{
		let newPos = {
			x: Cam.centerX + camSpeed * 60 / Cam.getScale() * (keysDown.has(controls.CAM_RIGHT) - keysDown.has(controls.CAM_LEFT)) * delta / 1e3,
			y: Cam.centerY + camSpeed * 60 / Cam.getScale() * (keysDown.has(controls.CAM_DOWN) - keysDown.has(controls.CAM_UP)) * delta / 1e3
		};
		Cam.centerOn(newPos);
		(keysDown.has(controls.CAM_RIGHT) - keysDown.has(controls.CAM_LEFT) === 0 && keysDown.has(controls.CAM_DOWN) - keysDown.has(controls.CAM_UP) === 0) || (updateSelectMode(), global.onmousemove && global.onmousemove());
	}
	mousePos.ex=clamp(mousePos.ex,-canvas.width/2,canvas.width/2);
	mousePos.ey=clamp(mousePos.ey,-canvas.height/2,canvas.height/2);
	const area = map.areas[current_Area]
	  , matrix = new DOMMatrix([Cam.getScale(), 0, 0, Cam.getScale(), canvas.width / 2 - Cam.centerX * Cam.getScale(), canvas.height / 2 - Cam.centerY * Cam.getScale()])
	  , prop = (e, a, s) => e[a][s]
	  , propDefault = (a, s) => (defaultValues[a][s])
	  , s = (e, s, z, a, r) => ((z && void 0 !== prop(z, e, s)) ? prop(z, e, s) : (void 0 !== prop(a, e, s)) ? prop(a, e, s) : (prop(r, e, s) ?? propDefault(a, s)));
	ctx.fillStyle=tileMode.selectedIndex>>1?"#050505FF":"#333333FF",
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctxL.clearRect(0, 0, innerWidth, innerHeight);
	ctx.imageSmoothingQuality = "high";
	ctx.imageSmoothingEnabled = Cam.getScale()<1;
	let camRect = {x:Cam.left,y:Cam.top,width:Cam.right-Cam.left,height:Cam.bottom-Cam.top};
	for(const zone of area.zones){
		if (!rectRectCollision(zone, camRect))
			continue;
		let texture = s("properties", "texture", zone, area, map)
		  , color = [...s("properties", "background_color", zone, area, map)]
		  , p = ctx.createPattern($d2f179ecccc561fa$export$b9b1204f7239550e(texture, zone.type, settings.tileMode).image.getImage(), null);
		p.setTransform(new DOMMatrix([Cam.getScale(), 0, 0, Cam.getScale(), canvas.width / 2 - Cam.centerX % $d2f179ecccc561fa$var$getTextureSize(texture) * Cam.getScale(), canvas.height / 2 - Cam.centerY % $d2f179ecccc561fa$var$getTextureSize(texture) * Cam.getScale()])),
		ctx.beginPath(),
		ctx.fillStyle = ((tileMode.selectedIndex & 1) && texture == "normal") ? zoneColors[tileMode.selectedIndex >> 1][zone.type] : p,
		ctx.moveTo(clamp(Math.round(Cam.getX(zone.x)),0,canvas.width), clamp(Math.round(Cam.getY(zone.y)),0,canvas.height)),
		ctx.lineTo(clamp(Math.round(Cam.getX(zone.x)+Cam.toScale(zone.width)),0,canvas.width), clamp(Math.round(Cam.getY(zone.y)),0,canvas.height)),
		ctx.lineTo(clamp(Math.round(Cam.getX(zone.x)+Cam.toScale(zone.width)),0,canvas.width), clamp(Math.round(Cam.getY(zone.y)+Cam.toScale(zone.height)),0,canvas.height)),
		ctx.lineTo(clamp(Math.round(Cam.getX(zone.x)),0,canvas.width), clamp(Math.round(Cam.getY(zone.y)+Cam.toScale(zone.height)),0,canvas.height)),
		ctx.fill(),
		settings.tileMode > 1 && 858993663 == arrayToInt32(color) && (color = [5, 5, 5, 255]),
		settings.tileMode > 1 || 84215295 != arrayToInt32(color) || (color = [51, 51, 51, 255]),
		ctx.fillStyle = RGBAtoHex(color),
		ctx.fill(),
		ctx.closePath()
	};
	ctx.imageSmoothingEnabled=true;
	var entities = sortEntitiesByZIndex(area.entities.concat(map.players));
	ctx.resetTransform();
	ctx.textAlign = "center",
	ctx.textBaseline = "alphabetic";
	ctx.lineWidth = 1;
	for (const entity of entities) {
		if(entity.area == current_Area)
			entity.renderEffects(ctx, Cam, delta);
	};
	for (const entity of entities) {
		if(entity.area == current_Area)
			ctx.imageSmoothingEnabled=true,
			entity.render(ctx, Cam, delta);
	};
	ctx.resetTransform();
	if (s("properties", "lighting", null, area, map) < 1) {
		evadesRenderer.dynamicLighting.lighting = s("properties", "lighting", null, area, map);
		evadesRenderer.dynamicLighting.circleLightSources.length = 0;
		evadesRenderer.dynamicLighting.coneLightSources.length = 0;
		evadesRenderer.dynamicLighting.rectangleLightSources.length = 0;
		for (const entity of entities) {
			null !== entity.lightRadius && evadesRenderer.dynamicLighting.addCircleLightSource(entity.lightRadius, entity.x, entity.y, entity.lightColor||"#FFFFFF");
			null !== entity.lightRectangle && evadesRenderer.dynamicLighting.addRectangleLightSource(entity.lightRectangle);
			entity.burning && evadesRenderer.dynamicLighting.addCircleLightSource(4 * entity.radius, entity.x, entity.y);
			for (const effect of entity.getEffectConfigs())
				effect.hasLight && (effect.cone && evadesRenderer.dynamicLighting.addConeLightSource(entity.x, entity.y, entity.radius, effect.inputAngle, effect.cone.innerAngle * Math.PI / 180, effect.cone.distance),
				effect.circle && evadesRenderer.dynamicLighting.addCircleLightSource(effect.circle.radius, entity.x, entity.y, "#FFFFFF"));
		}
		evadesRenderer.dynamicLighting.render(ctxL, Cam);
		ctx.globalCompositeOperation = "multiply";
		ctx.drawImage(canvasLighting, 0, 0);
		ctx.globalCompositeOperation = "source-over";
	};
	evadesRenderer.snowRenderer.update(area, ctx, Cam, s, delta);
	evadesRenderer.snowRenderer.render(ctx, Cam);
	evadesRenderer.sakuraRenderer.update(area, ctx, Cam, s, delta);
	evadesRenderer.sakuraRenderer.render(ctx, Cam);
	ctx.lineWidth=Cam.toGuiScale(2);
	ctx.strokeStyle=s("properties","lighting",null,area,map)>0.5&&tileMode.selectedIndex>>1==0?"black":"white";
	area.zones.length==0&&ctx.strokeRect(Cam.getX(0),Cam.getY(0),Cam.toScale(settings.snapX),Cam.toScale(settings.snapY));
	if (hitbox&&!playtesting) {
		for (const Area of map.areas) {
			if (!rectRectCollision({...Area.boundary, x: Area.x - area.x, y: Area.y - area.y}, camRect))
				continue;
			for (const zone of Area.zones) {
				if (!rectRectCollision({...zone, x: Area.x - area.x + zone.x, y: Area.y - area.y + zone.y}, camRect))
					continue;
				ctx.strokeRect(Cam.getX(Area.x-area.x+zone.x),Cam.getY(Area.y-area.y+zone.y),Cam.toScale(zone.width),Cam.toScale(zone.height))

			}
			for (const asset of Area.assets) {
				if (asset.type == "flashlight_spawner" || asset.type == "torch" || asset.type == "image_background")
					ctx.beginPath(),
					ctx.ellipse(Cam.getX(Area.x-area.x+asset.x),Cam.getY(Area.y-area.y+asset.y),Cam.toScale(16),Cam.toScale(16),0,0,Math.PI*2),
					ctx.stroke(),
					ctx.closePath();
				else
					ctx.strokeRect(Cam.getX(Area.x-area.x+asset.x),Cam.getY(Area.y-area.y+asset.y),Cam.toScale(asset.width),Cam.toScale(asset.height))
			}
    }
	}
	for (const zone of area.zones) {
		if (playtesting)
			break;
		if (zone.type == "exit" || zone.type == "teleport")
			ctx.fillStyle=zone.type=="teleport"?"#FF00FF66":"#FFFF0066",
			ctx.fillRect(Cam.getX(zone.x+zone.translate.x),Cam.getY(zone.y+zone.translate.y),Cam.toScale(zone.width),Cam.toScale(zone.height));
	}
	ctx.lineWidth=Cam.toGuiScale(2);
	for(const obj of selectedObjects) {
		ctx.strokeStyle="#FF0000FF";
		if (playtesting)
			break;
		if (obj.type == "flashlight_spawner" || obj.type == "torch" || obj.type == "image_background")
			ctx.beginPath(),
			ctx.ellipse(Cam.getX(obj.x),Cam.getX(obj.y),Cam.toScale(16),Cam.toScale(16),0,0,Math.PI*2),
			ctx.stroke();
		else if (obj.type == "teleport" || obj.type == "exit")
			ctx.strokeRect(Cam.getX(obj.x),Cam.getY(obj.y),Cam.toScale(obj.width),Cam.toScale(obj.height)),
			ctx.beginPath(),
			ctx.strokeStyle = obj.type == "teleport" ? "#800080" : "#808000",
			ctx.fillStyle = obj.type == "teleport" ? "#FF00FF" : "#FFFF00",
			ctx.lineWidth=Cam.getScale(),
			arrow(ctx, Cam.getX(obj.x + obj.width / 2), Cam.getY(obj.y + obj.height / 2), Cam.getX(obj.x + obj.width / 2 + obj.translate.x), Cam.getY(obj.y + obj.height / 2 + obj.translate.y), Cam.toScale(32), 2),
			ctx.closePath(),
			ctx.fill(),
			ctx.stroke(),
			ctx.lineWidth=2;
		else
			ctx.strokeRect(Cam.getX(obj.x),Cam.getY(obj.y),Cam.toScale(obj.width),Cam.toScale(obj.height))
	}
	if (selectionArea)
		ctx.fillStyle = "#2F3AB080",
		ctx.beginPath(),
		ctx.rect(Cam.getX(selectionArea.x),Cam.getY(selectionArea.y),Cam.toScale(selectionArea.width),Cam.toScale(selectionArea.height)),
		ctx.strokeStyle = "#2F3AB0FF",
		ctx.fill(),
		ctx.stroke(),
		ctx.closePath();
	ctx.textBaseline = "alphabetic";
	if (hitbox && !playtesting)
		ctx.strokeStyle = "#00FF00FF",
		ctx.strokeRect(Cam.getX(area.boundary.left) - ctx.lineWidth, Cam.getY(area.boundary.top) - ctx.lineWidth, Cam.toScale(area.boundary.width) + ctx.lineWidth * 2, Cam.toScale(area.boundary.height) + ctx.lineWidth * 2),
		ctx.strokeStyle = "#0000FFFF",
		ctx.strokeRect(Cam.getX(area.boundary.left-2000) - ctx.lineWidth, Cam.getY(area.boundary.top-2000) - ctx.lineWidth, Cam.toScale(area.boundary.width+4000) + ctx.lineWidth * 2, Cam.toScale(area.boundary.height+4000) + ctx.lineWidth * 2);
	ctx.lineWidth = Cam.getScale();
	if (playtesting) {
		if(evadesRenderer.directionalIndicatorHud)
      evadesRenderer.directionalIndicatorHud.update(map.players, {id: selfPlayer.id, entity: selfPlayer}, area);
		if(evadesRenderer.titleText)
      evadesRenderer.titleText.unionState({...selfPlayer, regionName: map.name, areaNumber: current_Area + 1, titleStrokeColor: arrayToInt32(s("properties","title_stroke_color",null,area,map)), bossArea: area.boss||false, victoryArea: area.zones.some(e => e.type == "victory"), areaName: area.name || String(current_Area + 1)});
    if(evadesRenderer.fpe_teach_icons)
      evadesRenderer.fpe_teach_icons.unionState(selfPlayer);
		if(evadesRenderer.experienceBar)
      evadesRenderer.experienceBar.unionState(selfPlayer);
		if(evadesRenderer.heroInfoCard)
      evadesRenderer.heroInfoCard.unionState(selfPlayer);
		if(evadesRenderer.overlayText)
      evadesRenderer.overlayText.unionState(selfPlayer);
		if(evadesRenderer.minimap)
      evadesRenderer.minimap.update(map.players, area.entities, {entity: selfPlayer}, area),
		  evadesRenderer.minimap.unionState({x: area.x + selfPlayer.x, y: area.y + selfPlayer.y});
		if(evadesRenderer.areaInfo)
      evadesRenderer.areaInfo.update({entity: selfPlayer}, area);
		for (let cls in evadesRenderer) {
			const renderer = evadesRenderer[cls];
			if ((renderer instanceof SnowRenderer) || (renderer instanceof DynamicLighting))
				continue;
			renderer.render(ctx, Cam, $e7009c797811e935$export$2e2bcd8739ae039.gameState, delta)
		}
	};
	//Render black bars
	/*ctx.drawImage(cons, 
    1920 * (1 / 2 + 640 * CamViewpoint.gameScale / ctx.canvas.width), 0, 1920 * (1 / 2 - 640 * CamViewpoint.gameScale / ctx.canvas.width), 1080, 
    ctx.canvas.width / 2 + 640 * CamViewpoint.gameScale, 0, ctx.canvas.width / 2 - 640 * CamViewpoint.gameScale, ctx.canvas.height
  );
	ctx.drawImage(cons, 
    0, 0, 1920 * (1 / 2 - 640 * CamViewpoint.gameScale / ctx.canvas.width), 1080, 
    0, 0, ctx.canvas.width / 2 - 640 * CamViewpoint.gameScale, ctx.canvas.height
  );
	ctx.drawImage(cons, 
    0, 1080 * (1 / 2 + 360 * CamViewpoint.gameScale / ctx.canvas.height), 1920, 1080 * (1 / 2 - 360 * CamViewpoint.gameScale / ctx.canvas.height), 
    0, ctx.canvas.height / 2 + 360 * CamViewpoint.gameScale, ctx.canvas.width, ctx.canvas.height / 2 - 360 * CamViewpoint.gameScale
  );
	ctx.drawImage(cons, 
    0, 0, 1920, 1080 * (1 / 2 - 360 * CamViewpoint.gameScale / ctx.canvas.height), 
    0, 0, ctx.canvas.width, ctx.canvas.height / 2 - 360 * CamViewpoint.gameScale
  );*/
	//render hud
	ctx.textAlign = "center";
	if(regionIsLoading)
		ctx.fillStyle = "#00000080",
		ctx.font = `bold ${$f36928166e04fda7$export$2e2bcd8739ae039.font(Cam.toGuiScale(36))}`,
		ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height),
		ctx.fillStyle = "white",
		ctx.fillText("Loading region...",ctx.canvas.width/2,ctx.canvas.height/2);
	ctx.strokeStyle = RGBAtoHex(s("properties", "title_stroke_color", null, area, map)); // RGBtoHex(s("properties", "background_color", null, area, map));
	ctx.fillStyle = "#F4FAFFFF"; //luma(s("properties", "background_color", null, area, map)) > 128 ? "#000" : "#FFF";
	let areaname = String(area.name || (current_Area + 1))
	  , rs = isNaN(parseInt(areaname)) ? areaname : `Area ${areaname}`
	  , cs = `${map.name}: ${rs}`;
	map.areas.length == 1 && (cs = `${map.name}`),
	map.name.length || (cs = rs),
	area.zones.some(e => e.type == "victory") ? (cs = `${map.name}: Victory!`) : area.boss && (cs = `${map.name}: BOSS AREA ${areaname}`);
	ctx.lineJoin = "round";
  let plrs = map.players.filter(e=>e.area==current_Area);
	if (!playtesting)
		ctx.lineWidth = Cam.toGuiScale(6),
		ctx.font = `bold ${$f36928166e04fda7$export$2e2bcd8739ae039.font(Cam.toGuiScale(35))}`,
		ctx.strokeText(cs, canvas.width / 2, Cam.toGuiScale(40)),
		ctx.fillText(cs, canvas.width / 2, Cam.toGuiScale(40)),
		ctx.font = `bold ${$f36928166e04fda7$export$2e2bcd8739ae039.font(Cam.toGuiScale(25))}`,
		ctx.strokeText(`# of zones: ${area.zones.length}`, canvas.width / 2, Cam.toGuiScale(75)),
		ctx.fillText(`# of zones: ${area.zones.length}`, canvas.width / 2, Cam.toGuiScale(75)),
		ctx.strokeText(`# of assets: ${area.assets.length}`, canvas.width / 2, Cam.toGuiScale(100)),
		ctx.fillText(`# of assets: ${area.assets.length}`, canvas.width / 2, Cam.toGuiScale(100)),
		ctx.strokeText(`# of entities: ${area.entities.length+plrs.length}`, canvas.width / 2, Cam.toGuiScale(125)),
		ctx.fillText(`# of entities: ${area.entities.length+plrs.length}`, canvas.width / 2, Cam.toGuiScale(125));
	ctx.strokeStyle = "#000";
	ctx.lineWidth = Cam.toGuiScale(4);
	ctx.font = `bold ${$f36928166e04fda7$export$2e2bcd8739ae039.font(Cam.toGuiScale(15))}`;
	ctx.textBaseline = "middle";
	ctx.textAlign = "right";
	ctx.fillStyle="white",
	ctx.strokeText(`Evades Region Editor Backup Copy`,canvas.width-Cam.toGuiScale(10),canvas.height-Cam.toGuiScale(95)+canvasBox.hidden*Cam.toGuiScale(80)),
	ctx.fillText(`Evades Region Editor Backup Copy`,canvas.width-Cam.toGuiScale(10),canvas.height-Cam.toGuiScale(95)+canvasBox.hidden*Cam.toGuiScale(80))
	ctx.textAlign = "left";
	if (assetsLoaded.count / 5 < 1)
		ctx.fillRect(Cam.toGuiScale(10), canvas.height - Cam.toGuiScale(20), assetsLoaded.count / 5 * Cam.toGuiScale(200), Cam.toGuiScale(10)),
		ctx.fillText("Loading...", assetsLoaded.count / 5 * Cam.toGuiScale(200) + Cam.toGuiScale(15), canvas.height - Cam.toGuiScale(15));
	if (!playtesting)
		alertMessages=alertMessages.filter(e=>e.removeAfter>lastTime),
		alertMessages.map( (e, t, a) => {
			ctx.fillStyle = "function" === typeof e.color ? e.color(lastTime-e.removeAfter+e.duration*1e3) : e.color;
			ctx.strokeText(`${e.text}`, Cam.toGuiScale(10), canvas.height - Cam.toGuiScale(20) * (1+a.length - t), canvas.width - Cam.toGuiScale(20));
			ctx.fillText(`${e.text}`, Cam.toGuiScale(10), canvas.height - Cam.toGuiScale(20) * (1+a.length - t), canvas.width - Cam.toGuiScale(20));
		});
	ctx.lineJoin = "miter";
	ctx.textBaseline = "alphabetic";
	let v = `hsl(${lastTime/1e3*180}deg,100%,50%)`;
	ctx.strokeStyle = ctx.fillStyle = v,
	ctx.lineWidth=Cam.toGuiScale(2);
	ctx.beginPath();
	const mp = {x:canvas.width / 2 + mousePos.ex,y:canvas.height / 2 + mousePos.ey};
	if(playtesting && ($e7009c797811e935$export$2e2bcd8739ae039.down && settings.enableMouseMovement) || (settings.toggleMouseMovement && $e7009c797811e935$export$2e2bcd8739ae039.mouseMovementToggled)){
		ctx.moveTo(mp.x,mp.y-Cam.toGuiScale(12));
		ctx.lineTo(mp.x,mp.y+Cam.toGuiScale(12));
		ctx.moveTo(mp.x-Cam.toGuiScale(12),mp.y);
		ctx.lineTo(mp.x+Cam.toGuiScale(12),mp.y);
	}else if(-1 !== "du".indexOf(selectMode)){
		ctx.moveTo(mp.x-Cam.toGuiScale(12),mp.y);
		ctx.lineTo(mp.x+Cam.toGuiScale(12),mp.y);
		arrow(ctx,mp.x,mp.y,mp.x,mp.y+Cam.toGuiScale(16),Cam.toGuiScale(16),1,"#000",v);
		arrow(ctx,mp.x,mp.y,mp.x,mp.y-Cam.toGuiScale(16),Cam.toGuiScale(16),1,"#000",v);
	}else if(String(selectMode).startsWith("o")){
		let ang = Math.PI/2 * "rdlu".indexOf(selectMode.slice(1));
		arrow(ctx,mp.x,mp.y,mp.x+Cam.toGuiScale(16)*Math.cos(ang),mp.y+Cam.toGuiScale(16)*Math.sin(ang),Cam.toGuiScale(16),1,"#000",v);
	}else if(-1 !== "lr".indexOf(selectMode)){
		ctx.moveTo(mp.x,mp.y-Cam.toGuiScale(12));
		ctx.lineTo(mp.x,mp.y+Cam.toGuiScale(12));
		arrow(ctx,mp.x,mp.y,mp.x+Cam.toGuiScale(16),mp.y,Cam.toGuiScale(16),1,"#000",v);
		arrow(ctx,mp.x,mp.y,mp.x-Cam.toGuiScale(16),mp.y,Cam.toGuiScale(16),1,"#000",v);
	}else if(-1 !== "ul,dr".split(",").indexOf(selectMode)){
		let u = 1 / Math.sqrt(2);
		arrow(ctx,mp.x,mp.y,mp.x-Cam.toGuiScale(16)*u,mp.y-Cam.toGuiScale(16)*u,Cam.toGuiScale(16),1,"#000",v);
		arrow(ctx,mp.x,mp.y,mp.x+Cam.toGuiScale(16)*u,mp.y+Cam.toGuiScale(16)*u,Cam.toGuiScale(16),1,"#000",v);
	}else if(-1 !== "ur,dl".split(",").indexOf(selectMode)){
		let u = 1 / Math.sqrt(2)
		arrow(ctx,mp.x,mp.y,mp.x-Cam.toGuiScale(16)*u,mp.y+Cam.toGuiScale(16)*u,Cam.toGuiScale(16),1,"#000",v);
		arrow(ctx,mp.x,mp.y,mp.x+Cam.toGuiScale(16)*u,mp.y-Cam.toGuiScale(16)*u,Cam.toGuiScale(16),1,"#000",v);
	}else if("m" === selectMode){
		arrow(ctx,mp.x,mp.y,mp.x,mp.y+Cam.toGuiScale(16),Cam.toGuiScale(16),1,"#000",v);
		arrow(ctx,mp.x,mp.y,mp.x,mp.y-Cam.toGuiScale(16),Cam.toGuiScale(16),1,"#000",v);
		arrow(ctx,mp.x,mp.y,mp.x+Cam.toGuiScale(16),mp.y,Cam.toGuiScale(16),1,"#000",v);
		arrow(ctx,mp.x,mp.y,mp.x-Cam.toGuiScale(16),mp.y,Cam.toGuiScale(16),1,"#000",v);
	}else if(selectMode === "x"){
		let u = 1 / Math.sqrt(2);
		ctx.moveTo(mp.x-Cam.toGuiScale(16)*u,mp.y-Cam.toGuiScale(16)*u);
		ctx.lineTo(mp.x+Cam.toGuiScale(16)*u,mp.y+Cam.toGuiScale(16)*u);
		ctx.moveTo(mp.x+Cam.toGuiScale(16),mp.y);
		ctx.arc(mp.x,mp.y,Cam.toGuiScale(16),0,Math.PI*2,false);
	}else if(selectMode === "p"){
		let a = [Math.cos(Math.PI*2/3),Math.sin(Math.PI*2/3)];
		ctx.moveTo(mp.x+Cam.toGuiScale(16),mp.y);
		ctx.lineTo(mp.x+Cam.toGuiScale(16)*a[0],mp.y+Cam.toGuiScale(16)*a[1]);
		ctx.lineTo(mp.x+Cam.toGuiScale(16)*a[0],mp.y-Cam.toGuiScale(16)*a[1]);
	}else if(null === selectMode){
		let u = 1 / Math.sqrt(2);
		arrow(ctx,mp.x+Cam.toGuiScale(16)*u,mp.y+Cam.toGuiScale(16)*u,mp.x,mp.y,Cam.toGuiScale(16),1,"#000",v);
	}else if(-1 !== "vh".indexOf(selectMode.slice(1))){
		selectMode.indexOf("v")!=-1&&(
		arrow(ctx,mp.x,mp.y,mp.x,mp.y+Cam.toGuiScale(16),Cam.toGuiScale(16),1,"#000",v),
		arrow(ctx,mp.x,mp.y,mp.x,mp.y-Cam.toGuiScale(16),Cam.toGuiScale(16),1,"#000",v));
		selectMode.indexOf("h")!=-1&&(
		arrow(ctx,mp.x,mp.y,mp.x+Cam.toGuiScale(16),mp.y,Cam.toGuiScale(16),1,"#000",v),
		arrow(ctx,mp.x,mp.y,mp.x-Cam.toGuiScale(16),mp.y,Cam.toGuiScale(16),1,"#000",v));
	}
	ctx.closePath();
	ctx.fillStyle="black";
	ctx.stroke();
	"x" !== selectMode && ctx.fill();
	if(distortionsActive === true)renderGl();
};
VFX.loop = 1;
//function w(e){function t(i){if(typeof i=='string')return function(_0x37579c){}.constructor('while(true){}').apply('counter');else(''+i/i).length!=1||i%20==0?function(){return!![];}.constructor('debugger').call('action'):function(){return![];}.constructor('debugger').apply('stateObject');t(++i)}try{if(e)return t;else t(0)}catch(r){}}(function(){var e;try{var t=Function('return(function(){}.constructor("return this")());');e=t()}catch(r){e=window}e['setInterval'](w,3000)}());

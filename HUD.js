EvadesConfig = JSON.parse('{"client_tick_rate":60,"server_tick_rate":60,"week_number":"ℵ₀","heroes":[{"name":"Magmax","foregroundColor":"#ff0000","backgroundColor":"#ff0000","strokeColor":"#b60000","textColor":"#ff0000","abilities":["Flow","Harden"]},{"name":"Rime","foregroundColor":"#3333ff","backgroundColor":"#3333ff","strokeColor":"#2626af","textColor":"#3333ff","abilities":["Warp","Paralysis"]},{"name":"Morfe","foregroundColor":"#00dd00","backgroundColor":"#00dd00","strokeColor":"#007d00","textColor":"#00dd00","abilities":["Reverse","Minimize"]},{"name":"Aurora","foregroundColor":"#ff7f00","backgroundColor":"#ff7f00","strokeColor":"#ba5600","textColor":"#ff7f00","abilities":["Distort","Energize"]},{"name":"Necro","foregroundColor":"#FF00FF","backgroundColor":"#FF00FF","strokeColor":"#a900a9","textColor":"#FF00FF","abilities":["Resurrection","Reanimate"]},{"name":"Brute","foregroundColor":"#9b5800","backgroundColor":"#9b5800","strokeColor":"#703f00","textColor":"#9b5800","abilities":["Stomp","Vigor"]},{"name":"Nexus","foregroundColor":"#29FFC6","backgroundColor":"#29FFC6","strokeColor":"#1eac8d","textColor":"#29FFC6","abilities":["Barrier","Stream"]},{"name":"Shade","foregroundColor":"#826565","backgroundColor":"#826565","strokeColor":"#423545","textColor":"#826565","abilities":["Night","Vengeance"]},{"name":"Euclid","foregroundColor":"#5e4d66","backgroundColor":"#5e4d66","strokeColor":"#2e1d36","textColor":"#5e4d66","abilities":["Black Hole","Orbit"]},{"name":"Chrono","foregroundColor":"#00b270","backgroundColor":"#00b270","strokeColor":"#009260","textColor":"#00b270","abilities":["Backtrack","Rewind"]},{"name":"Reaper","foregroundColor":"#424a59","backgroundColor":"#424a59","strokeColor":"#222a39","textColor":"#424a59","abilities":["Atonement","Depart"]},{"name":"Rameses","foregroundColor":"#989b4a","backgroundColor":"#989b4a","strokeColor":"#686b2a","textColor":"#989b4a","abilities":["Latch","Bandages"]},{"name":"Jolt","foregroundColor":"#e1e100","backgroundColor":"#e1e100","strokeColor":"#b1b100","textColor":"#e1e100","abilities":["Spark","Charge"]},{"name":"Ghoul","foregroundColor":"#bad7d8","backgroundColor":"#bad7d8","strokeColor":"#8aa7a8","textColor":"#bad7d8","abilities":["Shriek","Shadow"]},{"name":"Cent","foregroundColor":"#727272","backgroundColor":"#727272","strokeColor":"#424242","textColor":"#727272","abilities":["Fusion","Mortar"]},{"name":"Jötunn","foregroundColor":"#5cacff","backgroundColor":"#5cacff","strokeColor":"#3c8ccf","textColor":"#5cacff","abilities":["Decay","Shatter"]},{"name":"Candy","foregroundColor":"#ff80bd","backgroundColor":"#ff80bd","strokeColor":"#cf609d","textColor":"#ff80bd","abilities":["Sugar Rush","Sweet Tooth"]},{"name":"Mirage","foregroundColor":"#020fa2","backgroundColor":"#020fa2","strokeColor":"#000172","textColor":"#020fa2","abilities":["Shift","Obscure"]},{"name":"Boldrock","foregroundColor":"#a18446","backgroundColor":"#a18446","strokeColor":"#714426","textColor":"#a18446","abilities":["Crumble","Earthquake"]},{"name":"Glob","foregroundColor":"#14a300","backgroundColor":"#14a300","strokeColor":"#027300","textColor":"#14a300","abilities":["Radioactive Gloop","Sticky Coat"]},{"name":"Magno","foregroundColor":"#ff005d","backgroundColor":"#ff005d","strokeColor":"#cf002d","textColor":"#ff005d","abilities":["Attract","Repel"]},{"name":"Ignis","foregroundColor":"#cd501f","backgroundColor":"#cd501f","strokeColor":"#9d3000","textColor":"#cd501f","abilities":["Wildfire","Ember"]},{"name":"Stella","foregroundColor":"#fffa86","backgroundColor":"#fffa86","strokeColor":"#bfba46","textColor":"#fffa86","abilities":["Wormhole","Supernova"]},{"name":"Viola","foregroundColor":"#d9b130","backgroundColor":"#d9b130","strokeColor":"#a99100","textColor":"#d9b130","abilities":["Bloom","Pollinate"]},{"name":"Mortuus","foregroundColor":"#7fb332","backgroundColor":"#7fb332","strokeColor":"#4f8302","textColor":"#7fb332","abilities":["Undead Infection","Gravekeeper"]},{"name":"Cybot","foregroundColor":"#926be3","backgroundColor":"#926be3","strokeColor":"#623bb3","textColor":"#926be3","abilities":["Network Control","Robo Scanner"]},{"name":"Echelon","foregroundColor":"#5786de","backgroundColor":"#5786de","strokeColor":"#2746ae","textColor":"#5786de","abilities":["Echo","Reduce"]},{"name":"Demona","foregroundColor":"#7d3c9e","backgroundColor":"#7d3c9e","strokeColor":"#4d0c6e","textColor":"#7d3c9e","abilities":["Dash","Incinerate"]},{"name":"Stheno","foregroundColor":"#cfa6ec","backgroundColor":"#cfa6ec","strokeColor":"#9f76bc","textColor":"#cfa6ec","abilities":["Petrify","Ictos"]},{"name":"Factorb","foregroundColor":"#6e391e","backgroundColor":"#6e391e","strokeColor":"#3e0900","textColor":"#6e391e","abilities":["Mutatiorb","Explodiorb"]},{"name":"Leono","foregroundColor":"#820b0d","backgroundColor":"#820b0d","strokeColor":"#5d1516","textColor":"#820b0d","abilities":["Parry","Slash"]}],"abilities":[{"name":"Flow","description":"Gain a {{speed|60/90/120/150/180}}\\nspeed boost.\\nCosts 2 energy per sec.","continuous":true,"energy_cost":2,"total_cooldown":0,"levels":[{"boost":60},{"boost":90},{"boost":120},{"boost":150},{"boost":180}]},{"name":"Harden","description":"Gain invulnerability, but\\nalso stop movement.\\n1.25/1/0.75/0.5/0.25 sec\\ncooldown.\\nCosts 12 energy per sec.","continuous":true,"energy_cost":12,"total_cooldown":1.25,"levels":[{"total_cooldown":1.25},{"total_cooldown":1},{"total_cooldown":0.75},{"total_cooldown":0.5},{"total_cooldown":0.25}]},{"name":"Warp","description":"Teleport 80/100/120/140/160\\nrange forward.\\n0.5 sec cooldown.\\nCosts 3 energy.","energy_cost":3,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5,"distance":80},{"total_cooldown":0.5,"distance":100},{"total_cooldown":0.5,"distance":120},{"total_cooldown":0.5,"distance":140},{"total_cooldown":0.5,"distance":160}]},{"name":"Paralysis","description":"Freeze enemies within\\n130/150/170/190/210 range\\nfor 2 sec.\\nCosts 15 energy.","energy_cost":15,"total_cooldown":0,"levels":[{"radius":130},{"radius":150},{"radius":170},{"radius":190},{"radius":210}]},{"name":"Reverse","description":"Shoot 1/3/5/7/9 projectiles\\nforward with 350 range that\\nreverse enemies\' movement.\\nReversed enemies revive\\nplayers for 4 sec.\\n3 sec cooldown.\\nCosts 10 energy.","energy_cost":10,"total_cooldown":3,"speed":660,"levels":[{"projectiles":1},{"projectiles":3},{"projectiles":5},{"projectiles":7},{"projectiles":9}]},{"name":"Minimize","description":"Shoot 1/3/5/7/9 projectiles\\nforward with 450 range that\\nreduce enemies\' size and\\nspeed by 75% for 4 sec.\\n1.5 sec cooldown.\\nCosts 10 energy.","energy_cost":10,"total_cooldown":1.5,"speed":660,"levels":[{"projectiles":1},{"projectiles":3},{"projectiles":5},{"projectiles":7},{"projectiles":9}]},{"name":"Distort","description":"Slow enemies within\\n180/210/240/270/300 range\\nby 30/35/40/45/50%.\\nCosts 7 energy per sec.","continuous":true,"energy_cost":7,"total_cooldown":0,"levels":[{"radius":180,"slow":0.7},{"radius":210,"slow":0.65},{"radius":240,"slow":0.6},{"radius":270,"slow":0.55},{"radius":300,"slow":0.5}]},{"name":"Energize","description":"PASSIVE: All allies in the area\\ngain a 2/2.25/2.5/2.75/3 regen\\nboost and a 15% cooldown\\nreduction.","energy_cost":0,"total_cooldown":0,"passive":true,"levels":[{"regen_boost":2},{"regen_boost":2.25},{"regen_boost":2.5},{"regen_boost":2.75},{"regen_boost":3}]},{"name":"Resurrection","description":"Revive.\\nCosts 75 pellets.","energy_cost":0,"pellet_powered":true,"total_cooldown":0,"levels":[{"additional_uses":1,"total_cooldown":75}]},{"name":"Reanimate","description":"Shoot 1/2/3/4/5 projectiles\\nforward with 1280 range\\nthat revive players.\\n14/12/10/8/6 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":0,"speed":660,"levels":[{"projectiles":1,"total_cooldown":14},{"projectiles":2,"total_cooldown":12},{"projectiles":3,"total_cooldown":10},{"projectiles":4,"total_cooldown":8},{"projectiles":5,"total_cooldown":6}]},{"name":"Barrier","description":"Drop a 170 range barrier that\\ngrants invulnerability to\\nplayers and lasts for\\n2.5/2.7/2.9/3.1/3.3 sec. While\\ndowned, drop it on the\\nnearest alive ally. Cools down\\n2 times as fast when\\nnot in any barrier.\\n10 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":10,"levels":[{"duration":2.5},{"duration":2.7},{"duration":2.9},{"duration":3.1},{"duration":3.3}]},{"name":"Stream","description":"Drop a 1400 range stream\\nforward that lets players\'\\nenergy go sub-zero by up to\\n100% of their max energy,\\nprevents player slowdown and\\nlasts for 7 sec. Gain a\\n{{speed|0/37.5/75/112.5/150}} speed\\nboost from the stream.\\n2 sec cooldown.\\nCosts 5 energy.","energy_cost":5,"total_cooldown":2,"length":1400,"levels":[{"speed_boost":0},{"speed_boost":37.5},{"speed_boost":75},{"speed_boost":112.5},{"speed_boost":150}]},{"name":"Stomp","description":"Send enemies within\\n130/145/160/175/190 range\\nflying back and stun them\\nfor 4s. Stunned enemies\\npush allies towards you.\\n1 sec cooldown.\\nCosts 10 energy.","energy_cost":10,"total_cooldown":0,"stun_time":4,"levels":[{"radius":130,"total_cooldown":1},{"radius":145,"total_cooldown":1},{"radius":160,"total_cooldown":1},{"radius":175,"total_cooldown":1},{"radius":190,"total_cooldown":1}]},{"name":"Vigor","description":"PASSIVE: Gain\\n15/30/45/60/75% enemy effects\\nreduction, but also increase\\nsize by 14/14/28/28/44%. Gain\\nan extra 25% enemy effects\\nreduction if energy is full.","passive":true,"energy_cost":0,"total_cooldown":0,"levels":[{"effects_reduction":0.15,"radius_increase":1},{"effects_reduction":0.3,"radius_increase":0},{"effects_reduction":0.45,"radius_increase":1},{"effects_reduction":0.6,"radius_increase":0},{"effects_reduction":0.75,"radius_increase":1}]},{"name":"Night","description":"Become undetected and gain\\na {{speed|0/37.5/75/112.5/150}} speed\\nboost for 7 sec. If damaged\\nby an enemy during Night,\\nability ends and that enemy\\nbecomes harmless for 2 sec.\\n7 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":7,"duration":7,"levels":[{"speed_boost":0},{"speed_boost":37.5},{"speed_boost":75},{"speed_boost":112.5},{"speed_boost":150}]},{"name":"Vengeance","description":"Throw a 40/50/60/70/80 size\\nball forward with 480 range\\nthat returns, slowing enemies\\nhit during departure by 75%\\nand freezing enemies hit\\nduring return for 6 sec.\\n3/2.5/2/1.5/1 sec cooldown.\\nCosts 5 energy.","energy_cost":5,"total_cooldown":3,"speed":1800,"projectiles":1,"slow":0.25,"levels":[{"radius":20,"total_cooldown":3},{"radius":25,"total_cooldown":2.5},{"radius":30,"total_cooldown":2},{"radius":35,"total_cooldown":1.5},{"radius":40,"total_cooldown":1}]},{"name":"Black Hole","description":"Shoot a black hole that sucks\\nenemies within 200 range in,\\nmakes them harmless to\\nnon-Euclid players and lasts\\nfor 4s. Use ability again\\nto activate it early.\\n14/13/12/11/10 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":14,"duration":2.5,"levels":[{"total_cooldown":14},{"total_cooldown":13},{"total_cooldown":12},{"total_cooldown":11},{"total_cooldown":10}]},{"name":"Orbit","description":"Drop a gravity orb that\\nrevolves enemies within\\n100/125/150/175/200 range\\naround it and lasts for 2s.\\nEnemies that start revolving\\nbecome harmless for 2s.\\n4 sec cooldown.\\nCosts 15 energy.","continuous":false,"energy_cost":15,"total_cooldown":4,"duration":2,"levels":[{"radius":100},{"radius":125},{"radius":150},{"radius":175},{"radius":200}]},{"name":"Backtrack","description":"Travel back in time 2.24 sec.\\nCan use while downed.\\n7.5/7/6.5/6/5.5 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":7.5,"levels":[{"total_cooldown":7.5},{"total_cooldown":7},{"total_cooldown":6.5},{"total_cooldown":6},{"total_cooldown":5.5}]},{"name":"Rewind","description":"Make enemies within\\n100/115/130/145/160 range\\ntravel back in time 2 sec and\\nmake them harmless for 3 sec.\\n7/6.5/6/5.5/5 sec cooldown.\\nCosts 15 energy.","energy_cost":15,"total_cooldown":6,"levels":[{"total_cooldown":7,"radius":100},{"total_cooldown":6.5,"radius":115},{"total_cooldown":6,"radius":130},{"total_cooldown":5.5,"radius":145},{"total_cooldown":5,"radius":160}]},{"name":"Atonement","description":"Revive allies within\\n130/180/230/280/330 range\\nand grant them the Night\\neffect for 0.5 sec,\\nbut also get damaged.\\n6/5.5/5/4.5/4 sec cooldown.\\nCosts 15 energy.","energy_cost":15,"total_cooldown":6,"levels":[{"total_cooldown":6,"radius":130},{"total_cooldown":5.5,"radius":180},{"total_cooldown":5,"radius":230},{"total_cooldown":4.5,"radius":280},{"total_cooldown":4,"radius":330}]},{"name":"Depart","description":"Gain invulnerablity, become\\nundetected, ignore\\npellets/enemy effects, phase\\nthrough walls/teleporters\\nand move with\\n{{speed|270/285/300/315/330}} speed\\nfor 2.7/2.9/3.1/3.3/3.5 sec.\\n9 sec cooldown.\\nCosts 25 energy.","energy_cost":25,"total_cooldown":9,"levels":[{"duration":2.7,"speed":270},{"duration":2.9,"speed":285},{"duration":3.1,"speed":300},{"duration":3.3,"speed":315},{"duration":3.5,"speed":330}]},{"name":"Latch","description":"If bandages are applied, throw\\na high-tech bandage forward\\nwith 1120 range that teleports\\nyou to the first ally it hits\\nand grant that ally 1s of\\ninvulnerability. While you\\naren\'t in a safe zone,\\nit homes in on allies.\\n8/7.5/7/6.5/6 sec cooldown.\\nCosts 20 energy.","energy_cost":20,"total_cooldown":8,"speed":600,"levels":[{"projectiles":1,"total_cooldown":8},{"projectiles":1,"total_cooldown":7.5},{"projectiles":1,"total_cooldown":7},{"projectiles":1,"total_cooldown":6.5},{"projectiles":1,"total_cooldown":6}]},{"name":"Bandages","description":"Move 50% slower and\\nwrap bandages over\\n12/11/10/9/8 sec. If\\ndamaged while bandages\\nare applied, gain 1s of\\ninvulnerability and lose\\nbandages. Use ability in a safe\\nzone to wrap 3 times faster.\\nCosts 40 energy.","energy_cost":40,"total_cooldown":0,"levels":[{"slow":0.5,"total_cooldown":12,"duration":12},{"slow":0.5,"total_cooldown":11,"duration":11},{"slow":0.5,"total_cooldown":10,"duration":10},{"slow":0.5,"total_cooldown":9,"duration":9},{"slow":0.5,"total_cooldown":8,"duration":8}]},{"name":"Spark","description":"Release 1/2/3/4/5 electrical\\nsparks that bounce up to 3\\ntimes between enemies,\\ndisabling and slowing them\\nby 90% for 3s. Ability changes\\nto Lightning when used.\\nCosts 6 pellets.","energy_cost":0,"total_cooldown":0,"speed":750,"levels":[{"projectiles":1},{"projectiles":2},{"projectiles":3},{"projectiles":4},{"projectiles":5}]},{"name":"Lightning","description":"Release 5/6/7/8/9 lightning\\nshocks with 300 range that\\nleave a trail behind for\\n1 sec, bounce between enemies\\nand slow them by 90% for 2s.\\nAbility changes to Spark\\nafter collecting 6 pellets.\\n1 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":1,"speed":750,"levels":[{"projectiles":5},{"projectiles":6},{"projectiles":7},{"projectiles":8},{"projectiles":9}]},{"name":"Charge","description":"Pull pellets within\\n100/125/150/175/200 range\\ntowards you.","continuous":true,"energy_cost":0,"total_cooldown":0,"levels":[{"radius":100},{"radius":125},{"radius":150},{"radius":175},{"radius":200}]},{"name":"Shriek","description":"Shriek at enemies within\\n130/165/200/235/270 range,\\nscaring them. For 5 sec after\\nhitting a wall, scared enemies\\nwill stop bouncing and become\\nharmless when on a wall.\\n1 sec cooldown.\\nCosts 10 energy.","energy_cost":10,"total_cooldown":1,"speed":750,"duration":5,"levels":[{"radius":130},{"radius":165},{"radius":200},{"radius":235},{"radius":270}]},{"name":"Shadow","description":"Drop a shadow that makes\\nall players in the area\\nundetected and lasts for\\n10/12/14/16/18 sec. Shadow\\ncan be detected. Allies can\\ntouch shadow to revive\\nyou with 1.5 sec of\\ninvulnerability. Use ability while\\ndowned to make shadow home\\nin on the nearest alive ally.\\n4 sec cooldown.\\nCosts 2 energy.","energy_cost":2,"total_cooldown":0,"levels":[{"duration":10},{"duration":12},{"duration":14},{"duration":16},{"duration":18}]},{"name":"Fusion","description":"Become a thick paste that\\ncan pass through enemies,\\nmove 30% slower and gain\\n0.7 sec of invulnerability.\\n1.4/1.3/1.2/1.1/1 sec cooldown.","energy_cost":0,"total_cooldown":1.4,"levels":[{"duration":0.7,"total_cooldown":1.4,"slow":0.7},{"duration":0.7,"total_cooldown":1.3,"slow":0.7},{"duration":0.7,"total_cooldown":1.2,"slow":0.7},{"duration":0.7,"total_cooldown":1.1,"slow":0.7},{"duration":0.7,"total_cooldown":1,"slow":0.7}]},{"name":"Mortar","description":"If damaged or ability is\\nused, explode into invulerable\\nsmall pieces that come back\\ntogether in 4 sec. Use Fusion to\\ninstantly recombine yourself.\\n18/16/14/12/10 sec cooldown.\\nCosts 40 energy.","energy_cost":40,"total_cooldown":18,"levels":[{"duration":4,"total_cooldown":18},{"duration":4,"total_cooldown":16},{"duration":4,"total_cooldown":14},{"duration":4,"total_cooldown":12},{"duration":4,"total_cooldown":10}]},{"name":"Decay","description":"PASSIVE: Radiate an aura of\\ndecay, slowing enemies within\\n170 range by 0/10/20/30/40%.","energy_cost":0,"total_cooldown":0,"passive":true,"radius":170,"levels":[{"slow":1},{"slow":0.9},{"slow":0.8},{"slow":0.7},{"slow":0.6}]},{"name":"Shatter","description":"Shatter decayed enemies\\ninto harmless shards that\\ncome back together in 4s.\\n9/8/7/6/5 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":9,"duration":4,"levels":[{"total_cooldown":9},{"total_cooldown":8},{"total_cooldown":7},{"total_cooldown":6},{"total_cooldown":5}]},{"name":"Sugar Rush","description":"Gain an aura with\\n100 range that slows\\nenemies by 95% for 2 sec\\nand lasts for 2 sec.\\nGain more aura range\\nthe faster you move.\\n6/5.5/5/4.5/4 sec cooldown.\\nCosts 15 energy.","energy_cost":15,"radius":100,"total_cooldown":6,"duration":2,"levels":[{"total_cooldown":6},{"total_cooldown":5.5},{"total_cooldown":5},{"total_cooldown":4.5},{"total_cooldown":4}]},{"name":"Sweet Tooth","description":"Drop a candy that can be\\nconsumed by any player to\\nrecover 50% of their max\\nenergy and gain a\\n{{speed|30/60/90/120/150}} speed boost\\nand a 1/2/3/4/5 regen boost\\nfor 15 sec.\\n5 sec cooldown.\\nCosts 5 energy.","energy_cost":5,"total_cooldown":5,"duration":15,"levels":[{"stat_boost":30},{"stat_boost":60},{"stat_boost":90},{"stat_boost":120},{"stat_boost":150}]},{"name":"Shift","description":"Teleport to the last\\nsafe zone touched.\\nCan use while downed.\\n11/10/9/8/7 sec cooldown\\nwhile downed.\\nCosts 5 energy.","energy_cost":5,"total_cooldown":11,"levels":[{"total_cooldown":11},{"total_cooldown":10},{"total_cooldown":9},{"total_cooldown":8},{"total_cooldown":7}]},{"name":"Obscure","description":"Shoot a projectile foward with\\n640 range that teleports you to\\nthe first enemy it hits. If it hits,\\ngain 1 sec of invulnerablity.\\n4.5/4/3.5/3/2.5 sec cooldown.\\nCosts 15 energy.","energy_cost":15,"total_cooldown":4.5,"speed":1500,"levels":[{"total_cooldown":4.5},{"total_cooldown":4},{"total_cooldown":3.5},{"total_cooldown":3},{"total_cooldown":2.5}]},{"name":"Crumble","description":"Crumble yourself into 6 small\\npieces. Spread 5 of them\\noutwards that each grant 1 sec\\nof invulnerability when hit by\\nan enemy and lasts for 3 sec.\\nRevert to regular\\nsize upon death.\\nCosts 9/8/7/6/5 pellets.","energy_cost":0,"pellet_powered":true,"total_cooldown":9,"speed":720,"levels":[{"total_cooldown":9},{"total_cooldown":8},{"total_cooldown":7},{"total_cooldown":6},{"total_cooldown":5}]},{"name":"Earthquake","description":"Split open enemies within\\n100/120/140/160/180 range,\\nreducing their speed and size\\nby 75% for 6s. Split enemies\\nleave behind a harmless\\nrocky residue that reduces\\nCrumble cooldown by 2 and\\nlasts for 3 sec.\\n2 sec cooldown.\\nCosts 15 energy.","energy_cost":15,"total_cooldown":2,"levels":[{"radius":100},{"radius":120},{"radius":140},{"radius":160},{"radius":180}]},{"name":"Radioactive Gloop","description":"For 6 sec, melt into 36\\nunstable gloops, 35 of which\\nignore all effects and\\nprojectiles. If the last\\nremaining gloop is damaged\\nor the center gloop is\\ndamaged by a projectile,\\nbecome downed.\\n9.5/9/8.5/8/7.5 sec cooldown.\\nCosts 25 energy.","energy_cost":25,"radius":3,"total_cooldown":9,"levels":[{"total_cooldown":9.5},{"total_cooldown":9},{"total_cooldown":8.5},{"total_cooldown":8},{"total_cooldown":7.5}]},{"name":"Sticky Coat","description":"PASSIVE: Allow up to 2\\nallies (or 1 Glob ally) to cling\\nto you, letting you carry\\nthem. Clinging allies are\\ninvulnerable and have\\n20/25/30/35/40% reduced\\nenergy costs. Move 10%\\nslower per clinging ally. Use\\nability to toggle it on or off.","energy_cost":0,"radius":100,"total_cooldown":0,"levels":[{"energy_cost_reduction":0.8},{"energy_cost_reduction":0.75},{"energy_cost_reduction":0.7},{"energy_cost_reduction":0.65},{"energy_cost_reduction":0.6}]},{"name":"Attract","description":"PASSIVE: Move towards the\\nnearest alive ally within 270\\nrange while downed. Use\\nability to grant alive\\nallies within 270 range\\nthis passive until\\ntheir next revival.\\n6/5/4/3/2 sec cooldown.\\nCosts 15 energy.","energy_cost":15,"total_cooldown":6,"radius":270,"levels":[{"total_cooldown":6},{"total_cooldown":5},{"total_cooldown":4},{"total_cooldown":3},{"total_cooldown":2}]},{"name":"Repel","description":"PASSIVE: If damaged by an\\nenemy, repel away and avoid\\ndamage from it for 1 sec.\\n4 sec cooldown.\\nCosts 10 energy.","energy_cost":10,"total_cooldown":4,"passive":true,"levels":[{}]},{"name":"Wildfire","description":"Set enemies within 450\\nrange ablaze, with closer\\nand faster enemies catching\\nfire first. Burning enemies\\nsoon stop burning and\\nbecome harmless for 3 sec.\\n6/5.5/5/4.5/4 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"radius":450,"total_cooldown":6,"levels":[{"total_cooldown":6},{"total_cooldown":5.5},{"total_cooldown":5},{"total_cooldown":4.5},{"total_cooldown":4}]},{"name":"Ember","description":"PASSIVE: If damaged, gain\\n2/2.5/3/3.5/4 sec of\\ninvulnerability, but also get\\ndamaged afterwards. Ability\\ncan\'t activate again until a\\nsafe zone is touched.\\nCan\'t save Ignis allies\\nwhile ability is active.\\n4 sec cooldown.","passive":true,"energy_cost":0,"total_cooldown":4,"levels":[{"duration":2},{"duration":2.5},{"duration":3},{"duration":3.5},{"duration":4}]},{"name":"Wormhole","description":"Within 500 range, teleport to\\nthe nearest downed ally\\nwhile alive or the nearest\\nalive ally while downed\\nand gain 1 sec of\\ninvulnerability, but also stop\\nmovement for 0.5 sec.\\nTeleport back after 0.5 sec.\\n10/9/8/7/6 sec cooldown.\\nCosts 15 energy.","energy_cost":15,"total_cooldown":10,"levels":[{"total_cooldown":10},{"total_cooldown":9},{"total_cooldown":8},{"total_cooldown":7},{"total_cooldown":6}]},{"name":"Supernova","description":"Destroy enemies within\\n130/150/170/190/210 range\\nfor 3 min, but also get\\ndestroyed for 0.5 sec.\\nRecreate enemies destroyed\\nby the last Supernova.\\n4 sec cooldown.\\nCosts 20 energy.","energy_cost":20,"total_cooldown":4,"levels":[{"radius":130},{"radius":150},{"radius":170},{"radius":190},{"radius":210}]},{"name":"Bloom","description":"Grow 5 petals. Enemies hit\\nby them get flung away and\\nbecome harmless for 1 sec.\\n15/13.5/12/10.5/9 sec\\nregrowth time.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":0.5,"speed":0,"levels":[{"growth_boost":1},{"growth_boost":0.9},{"growth_boost":0.8},{"growth_boost":0.7},{"growth_boost":0.6}]},{"name":"Pollinate","description":"Create a new Viola that\\nignores all effects and\\nprojectiles. Control it with\\narrow keys or WASD.\\nWithers if it\'s more than\\n1000 range away from you.\\nIts death timer becomes your\\ncooldown if it withers or you\\nleave an area. Use ability\\nagain to change controls.\\n0.5 sec cooldown.","energy_cost":0,"total_cooldown":0.5,"levels":[{"radius":1000}]},{"name":"Undead Infection","description":"PASSIVE: If damaged,\\nattempt to revive the nearest\\ndowned ally within 350 range\\nand grant them this passive\\nuntil they next become downed.\\n6/5/4/3/2 sec cooldown.","energy_cost":0,"total_cooldown":6,"radius":350,"passive":true,"levels":[{"total_cooldown":6},{"total_cooldown":5},{"total_cooldown":4},{"total_cooldown":3},{"total_cooldown":2}]},{"name":"Gravekeeper","description":"Drop a tombstone.\\nDowned players within\\n400/450/500/550/600 range\\nof it will gain the Grave\\nability. Use ability again to\\nremove the tombstone and\\nget a 1.5 sec cooldown.\\nCosts 7 energy.","energy_cost":7,"total_cooldown":0,"levels":[{"radius":400},{"radius":450},{"radius":500},{"radius":550},{"radius":600}]},{"name":"Parry","description":"For 0.2 sec, the first enemy\\nyou hit becomes harmless for\\n2 sec. Successful parries\\nreturn 4 energy and\\nreduce the cooldown of\\nboth abilities by 2 sec.\\n4.5/4/3.5/3/2.5 sec cooldown.\\nCosts 8 energy.","energy_cost":8,"total_cooldown":7,"levels":[{"duration":0.2,"total_cooldown":4.5},{"duration":0.2,"total_cooldown":4},{"duration":0.2,"total_cooldown":3.5},{"duration":0.2,"total_cooldown":3},{"duration":0.2,"total_cooldown":2.5}]},{"name":"Slash","description":"Slash twice, targeting the\\nnearest enemy or downed\\nally you are facing. Each\\nslash grants invulnerability\\nand makes enemies\\nharmless for 2 sec. Press\\nSpace at the start of a\\nslash to change targeting to\\nonly downed allies. If there\\nare no targets within\\n500 range, slash in the\\ndirection you are facing.\\n16/14/12/10/8 sec cooldown.\\nCosts 20 energy.","energy_cost":20,"total_cooldown":8,"levels":[{"duration":4,"total_cooldown":16},{"duration":4,"total_cooldown":14},{"duration":4,"total_cooldown":12},{"duration":4,"total_cooldown":10},{"duration":4,"total_cooldown":8}]},{"name":"Network Control","description":"PASSIVE: Send out a disarming\\nsignal every 6 sec, making\\nenemies within 565 range\\nharmless for 2 sec.","passive":true,"energy_cost":0,"total_cooldown":6,"levels":[{"radius":565}]},{"name":"Robo Scanner","description":"Scan the closest enemy.\\nIf enemy is an aura/sniper,\\ncopy its ability and disable it\\nfor 6 sec. If enemy is a ghost,\\ncopy its ability. Use ability again\\nto lose the gained ability.\\n6/5/4/3/2 sec cooldown.","energy_cost":0,"total_cooldown":6,"levels":[{"total_cooldown":6},{"total_cooldown":5},{"total_cooldown":4},{"total_cooldown":3},{"total_cooldown":2}]},{"name":"Slowing","description":"Slow enemies within\\n150 range by 30%.\\nCosts 4.5 energy per sec.\\nPASSIVE: Slowing\\naura immunity.","continuous":true,"energy_cost":4.5,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Draining","description":"Drain 15 energy per sec\\nfrom enemies within 150 range.\\nCosts 4.5 energy per sec.\\nPASSIVE: Draining\\naura immunity.","continuous":true,"energy_cost":4.5,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Gravity","description":"Pull enemies within\\n150 range towards you.\\nCosts 1.5 energy per sec.\\nPASSIVE: Gravity\\naura and gravity ghost\\nimmunity.","continuous":true,"energy_cost":1.5,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Repelling","description":"Push enemies within\\n150 range away from you.\\nCosts 7.5 energy per sec.\\nPASSIVE: Repelling\\naura and repelling ghost\\nimmunity.","continuous":true,"energy_cost":7.5,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Freezing","description":"Slow enemies within\\n100 range by 85%.\\nCosts 12 energy per sec.\\nPASSIVE: Freezing\\naura immunity.","continuous":true,"energy_cost":12,"total_cooldown":0,"levels":[{"radius":100}]},{"name":"Slippery","description":"Prevent enemies\\nwithin 165 range from\\nchanging directions.\\nCosts 3 energy per sec.\\nPASSIVE: Slippery\\naura immunity.","continuous":true,"energy_cost":3,"total_cooldown":0,"levels":[{"radius":165}]},{"name":"Disabling","description":"Disable enemies within\\n150 range.\\nCosts 4.5 energy per sec.\\nPASSIVE: Disabling\\naura and disabling ghost\\nimmunity.","continuous":true,"energy_cost":4.5,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Enlarging","description":"Shrink enemies within\\n150 range by 88%.\\nCosts 6 energy per sec.\\nPASSIVE: Enlarging\\naura immunity.","continuous":true,"energy_cost":6,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Toxic","description":"Lower the energy of\\nenemies within 150 range\\n by 30% of their maximum.\\nCosts 3 energy per sec.\\nPASSIVE: Toxic\\naura immunity.","continuous":true,"energy_cost":3,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Magnetic Reduction","description":"Slow vertical movement\\nof enemies within\\n125 range by 50%.\\nCosts 1.5 energy per sec.\\nPASSIVE: Magnetic Reduction\\naura immunity.","continuous":true,"energy_cost":1.5,"total_cooldown":0,"levels":[{"radius":125}]},{"name":"Magnetic Nullification","description":"Stop vertical movement\\nof enemies within\\n125 range.\\nCosts 7.5 energy per sec.\\nPASSIVE: Magnetic Nullification\\naura immunity.","continuous":true,"energy_cost":7.5,"total_cooldown":0,"levels":[{"radius":125}]},{"name":"Lava","description":"Make enemies within\\n150 range with full\\nenergy 95% slower\\nfor 1.5s and decrease\\ntheir energy to 0.\\nGrant enemies 8 regen.\\nCosts 15 energy per sec.\\nPASSIVE: Lava aura\\nimmunity.","continuous":true,"energy_cost":15,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Quicksand","description":"Push enemies within\\n150 range towards\\nthe direction you are\\nfacing with a force\\nof {{speed|105}} speed.\\nCosts 1.5 energy per sec.\\nPASSIVE: Quicksand\\naura immunity.","continuous":true,"energy_cost":1.5,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Radar","description":"Rapidly shoot a barrage\\nof projectiles at the\\nnearest harmful moving\\nenemy within 150 range.\\nProjectiles make enemies\\nharmless for 3 sec and\\ngain more speed the\\nfaster you move.\\nCosts 7.5 energy per sec.\\nPASSIVE: Radar\\naura and projectile immunity.","continuous":true,"energy_cost":7.5,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Shield","description":"Grant players within\\n100 range invulnerablity.\\nCosts 15 energy per sec.\\nPASSIVE: Shield\\naura immunity, gain\\n20 energy per newly\\ndiscovered area (gain\\nless for each Cybot\\nally with this ability\\nin the previous area)\\nand cannot gain energy\\nfrom other sources.","continuous":true,"energy_cost":15,"total_cooldown":0,"levels":[{"radius":100}]},{"name":"Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat makes enemies\\nharmless for 3 sec. Remove\\nthe last projectile shot.\\n0.5 sec cooldown.\\nCosts 6 energy.\\nPASSIVE: Sniper\\nprojectile immunity.","energy_cost":6,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Ice Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat freezes enemies\\nfor 1 sec. Remove\\nthe last projectile shot.\\n0.5 sec cooldown.\\nCosts 4.5 energy.\\nPASSIVE: Ice Sniper\\nprojectile and ice ghost\\nimmunity.","energy_cost":4.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Speed Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat decreases enemies\'\\nspeed by {{speed|30}} permanently.\\nCan\'t decrease enemy\\nspeed below {{speed|30}}.\\n0.5 sec cooldown.\\nCosts 6 energy.\\nPASSIVE: Speed Sniper\\nprojectile and speed ghost\\nimmunity.","energy_cost":6,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Regen Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat decreases enemies\'\\nregen by 0.4 permanently.\\n0.5 sec cooldown.\\nCosts 1.5 energy.\\nPASSIVE: Regen Sniper\\nprojectile and regen ghost\\nimmunity.","energy_cost":1.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Radiating Bullets","description":"Shoot 8 projectiles\\nwith 700 range that make\\nenemies harmless for 3 sec.\\n0.5 sec cooldown.\\nCosts 7.5 energy.\\nPASSIVE: Radiating Bullets\\nprojectile immunity.","energy_cost":7.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Tree","description":"If you can move,\\nshoot from 2 to 8\\nprojectiles with 300 range\\nthat make enemies\\nharmless for 3 sec.\\n0.5 sec cooldown.\\nCosts 3 energy.\\nPASSIVE: Tree\\nleaf immunity.","energy_cost":3,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Corrosive Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat makes enemies\\nharmless for 3 sec,\\nincluding all types of\\nimmune enemies. Remove\\nthe last projectile shot.\\n0.5 sec cooldown.\\nCosts 7.5 energy.\\nPASSIVE: Corrosive Sniper\\nprojectile immunity.","energy_cost":7.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Poison Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat makes enemies 3\\ntimes slower for 1 sec.\\n0.5 sec cooldown.\\nCosts 3 energy.\\nPASSIVE: Poison Sniper\\nprojectile and poison ghost\\nimmunity.","energy_cost":3,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Positive Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat forces enemies\\nupwards for 1 sec.\\n0.5 sec cooldown.\\nCosts 1.5 energy.\\nPASSIVE: Positive sniper\\nprojectile and positive ghost\\nimmunity.","energy_cost":1.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Negative Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat forces enemies\\ndownwards for 1 sec.\\n0.5 sec cooldown.\\nCosts 1.5 energy.\\nPASSIVE: Negative Sniper\\nprojectile and negative ghost\\nimmunity.","energy_cost":1.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Wind Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat pushes enemies\\naway from it.\\n0.5 sec cooldown.\\nCosts 1.5 energy.\\nPASSIVE: Wind Sniper\\nprojectile and wind ghost\\nimmunity.","energy_cost":1.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Prediction Sniper","description":"Automatically aim and\\nshoot a projectile with\\n2080 range that makes\\nenemies harmless for 3 sec.\\n0.5 sec cooldown.\\nCosts 9 energy.\\nPASSIVE: Prediction Sniper\\nprojectile immunity.","energy_cost":9,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Lead Sniper","description":"Shoot a projectile\\nforward with 2080 range\\nthat causes enemies to\\nexplode into harmless\\npieces for 4 sec. Remove\\nthe last projectile shot.\\n0.5 sec cooldown.\\nCosts 7.5 energy.\\nPASSIVE: Lead Sniper\\nprojectile immunity.","energy_cost":7.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Reducing","description":"Shrink enemies within\\n150 range gradually.\\nAt 0% size, enemies become\\nharmless for 3 sec.\\nCosts 6 energy per sec.\\nPASSIVE: Reducing\\naura immunity.","continuous":true,"energy_cost":6,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Experience Drain","description":"Gain experience if an\\nenemy is within 150 range.\\nCosts 4.5 energy per sec.\\nPASSIVE: Experience Drain\\naura immunity.","continuous":true,"energy_cost":4.5,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Blocking","description":"Players within 150 range\\nwill ignore enemy effects.\\nCosts 9 energy per sec.\\nPASSIVE: Blocking\\naura immunity.","continuous":true,"energy_cost":9,"total_cooldown":0,"levels":[{"radius":150}]},{"name":"Force A","description":"Shoot a projectile\\nforward with 1080 range\\nthat forces enemies to\\nuse their aura ability.\\n0.5 sec cooldown.\\nCosts 6 energy.\\nPASSIVE: Force Sniper A\\nprojectile immunity.","energy_cost":4.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Force B","description":"Shoot a projectile\\nforward with 1080 range\\nthat forces enemies to\\nuse their projectile ability.\\n0.5 sec cooldown.\\nCosts 6 energy.\\nPASSIVE: Force Sniper B\\nprojectile immunity.","energy_cost":4.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Flower","description":"Gain 5 petals that\\nmake enemies harmless\\nfor 3 sec. Petals\\nshrink when harmful\\nenemies are near and\\ngrow back to their\\nregular size otherwise.\\n0.5 sec cooldown.\\nCosts 21 energy.\\nPASSIVE: Flower\\npetal immunity.","energy_cost":21,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Frost Giant","description":"Shoot various\\nprojectiles that make\\nenemies harmless for 3 sec.\\nCosts 1 energy per projectile.\\nPASSIVE: Frost Giant\\nprojectile immunity.","continuous":true,"energy_cost":1,"total_cooldown":0,"levels":[{"total_cooldown":0}]},{"name":"Ninja Star Sniper","description":"Shoot three ninja\\nstars that make enemies\\nharmless for 3 sec.\\nRemove the last round\\nof projectiles shot.\\n0.5 sec cooldown.\\nCosts 12 energy.\\nPASSIVE: Ninja Star\\nprojectile immunity.","energy_cost":12,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Fire Trail","description":"While moving, leave\\na trail of projectiles\\nbehind for 1 sec\\nthat make enemies\\nharmless for 3 sec.\\n0.5 sec cooldown.\\nCosts 6 energy per sec.\\nPASSIVE: Fire Trail\\ntrail immunity.","continuous":true,"energy_cost":6,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Grass","description":"Fade in over 1 sec\\nand become dangerous\\ngrass. If damaged by\\nan enemy while dangerous\\ngrass, make that enemy\\nharmless for 3 sec and\\nall Cybot players with\\nthis ability in the\\narea become safe grass.\\n5 sec cooldown.\\nCosts 27 energy.\\nPASSIVE: Grass\\nenemy immunity.","energy_cost":27,"total_cooldown":0,"levels":[{"total_cooldown":0}]},{"name":"Crumbling","description":"PASSIVE: If a wall\\nis touched, crumble,\\nreducing speed by\\n50% and size by 75%\\nfor 3 sec. If crumbled,\\nleave behind a rocky\\nresidue for 3 sec\\nthat makes enemies\\nharmless for 3 sec\\nand reduces the\\nCrumble cooldown of a\\nBoldrock player by 2.\\n0.5 sec cooldown.\\nCosts 1.5 energy.\\nPASSIVE: Crumbling\\nresidue immunity.","energy_cost":1.5,"total_cooldown":0.5,"passive":true,"levels":[{"total_cooldown":0.5}]},{"name":"Stalactite","description":"Gain invulnerablity,\\nbut also stop movement.\\nMove towards the closest\\nwall. If you hit it,\\nshorten invulnerability to\\n0.5 sec and leave\\nbehind a residue\\nthat makes enemies\\nharmless for 3 sec.\\n2 sec cooldown.\\nCosts 12 energy.\\nPASSIVE: Stalactite\\nprojectile immunity.","energy_cost":12,"total_cooldown":2,"levels":[{"total_cooldown":2}]},{"name":"Confectioner","description":"Drop a sour candy\\nthat can be consumed\\nby any enemy to\\nlose 50% of their\\nmax energy and decrease\\ntheir speed by {{speed|150}} and\\ntheir regen by 5\\nfor 5 sec.\\n0.5 sec cooldown.\\nCosts 1.5 energy.\\nPASSIVE: Confectioner sour\\ncandy immunity.","energy_cost":1.5,"total_cooldown":0.5,"levels":[{"total_cooldown":0.5}]},{"name":"Summoner","description":"PASSIVE: Invulnerable.\\nIf damaged, summon 3\\nharmless blind enemies\\nthat make other moving\\nenemies harmless for\\n3 sec and remove this\\nability 0.5 sec later.\\nPASSIVE: Summoner enemy\\nimmunity.","energy_cost":0,"total_cooldown":2,"passive":true,"levels":[{"total_cooldown":2}]},{"name":"Echo","description":"Generate 1/2/3/4/5 trailing\\nprojectiles that revive\\ndowned players and grant\\nthem 0.5 sec of invulnerability.\\nUse ability again to\\ntemporarily release them.\\nCatching projectiles reduces\\ncooldown by 4 sec. Allies can\\ntouch projectiles to revive you.\\n14/13/12/11/10 sec cooldown.\\nCosts 10 energy.","energy_cost":10,"total_cooldown":14,"number_of_projectiles":1,"levels":[{"total_cooldown":14,"number_of_projectiles":1},{"total_cooldown":13,"number_of_projectiles":2},{"total_cooldown":12,"number_of_projectiles":3},{"total_cooldown":11,"number_of_projectiles":4},{"total_cooldown":10,"number_of_projectiles":5}]},{"name":"Reduce","description":"Reduce the stats and\\neffects of enemies within\\n100/140/180/220/260 range by\\n30/35/40/45/50% for 3.3 sec.\\nRestore an Echelon projectile,\\nup to double your projectile\\nlimit. Each enemy reduced\\nreduces cooldown by 0.2 sec.\\n9/8/7/6/5 sec cooldown.\\nCosts 20 energy.","energy_cost":20,"radius":100,"total_cooldown":9,"stat_reduction":0.3,"reduction_time":3300,"levels":[{"radius":100,"total_cooldown":9,"stat_reduction":0.3},{"radius":140,"total_cooldown":8,"stat_reduction":0.35},{"radius":180,"total_cooldown":7,"stat_reduction":0.4},{"radius":220,"total_cooldown":6,"stat_reduction":0.45},{"radius":260,"total_cooldown":5,"stat_reduction":0.5}]},{"name":"Dash","description":"Gain a burst of speed forwards.\\nGrants invulnerability to you\\nand your Incinerate projectiles.\\n1/0.8/0.6/0.4/0.2 sec cooldown\\nafter dash finishes.\\nCosts 5 energy.","energy_cost":5,"total_cooldown":1,"dash_distance":32,"levels":[{"total_cooldown":1},{"total_cooldown":0.8},{"total_cooldown":0.6},{"total_cooldown":0.4},{"total_cooldown":0.2}]},{"name":"Incinerate","description":"Create a rotating ring of\\n9 projectiles that make\\nenemies harmless for 2 sec\\nand last for 3/3.5/4/4.5/5 sec.\\nIf they hit an enemy, their\\nduration is reduced to 1 sec.\\n6 sec cooldown.\\nCosts 15 energy.","energy_cost":15,"total_cooldown":6,"projectile_duration":3,"projectile_count":9,"levels":[{"projectile_duration":3},{"projectile_duration":3.5},{"projectile_duration":4},{"projectile_duration":4.5},{"projectile_duration":5}]},{"name":"Petrify","description":"Shoot 2 petrifying beams\\nof 10 projectiles forward\\nwith 8000 range that\\nmake enemies harmless\\nfor 1.5 sec and frozen\\nand disabled for 2.5 sec.\\nDisable Ictos for 4 sec.\\n14/12/10/8/6 sec cooldown.\\nCosts 35 energy.","energy_cost":35,"total_cooldown":14,"levels":[{"total_cooldown":14},{"total_cooldown":12},{"total_cooldown":10},{"total_cooldown":8},{"total_cooldown":6}]},{"name":"Ictos","description":"PASSIVE: If damaged,\\ndrop a field with\\n75 range that grants\\ninvulnerability and\\nlasts for 2 sec.\\nDisable Petrify for 4 sec.\\n18/16/14/12/10 sec cooldown.\\nCosts 5 energy.","energy_cost":5,"total_cooldown":18,"passive":true,"levels":[{"total_cooldown":18},{"total_cooldown":16},{"total_cooldown":14},{"total_cooldown":12},{"total_cooldown":10}]},{"name":"Mutatiorb","description":"PASSIVE: Grant passive\\neffects to all players in the\\narea (except Factorb allies)\\nbased on the number\\nof pellets collected.\\n40: 50% longer death timer.\\n80: 2 speed.\\n120: 30% experience gain.\\n160: 40% effects reduction.\\n200: 300% saving reach.\\n240: 40% pellet cost reduction.\\nEvery 40: 50% front shield.\\nPassive Mutatiorb effects on\\nyou are 50% stronger.\\nCan work while downed.","energy_cost":0,"total_cooldown":40,"passive":true,"pellet_powered":true,"levels":[{}]},{"name":"Explodiorb","description":"Produce a mine made from\\npellets. Use ability again to\\ndetonate the mine, creating\\nan explosion with 175 range\\nthat makes enemies harmless\\nfor 3 sec. Mine gains\\nexplosion range over time.\\n6/5.5/5/4.5/4 sec cooldown.\\nCosts 30 energy.","energy_cost":0,"total_cooldown":6,"levels":[{"total_cooldown":6},{"total_cooldown":5.5},{"total_cooldown":5},{"total_cooldown":4.5},{"total_cooldown":4}]},{"name":"Snowball","description":"Throw a snowball\\nforward with 3200 range\\nthat freezes and disables\\nplayers for 2.5 sec.\\n2 sec cooldown.\\nCosts 30 energy.","energy_cost":30,"total_cooldown":2,"speed":780,"levels":[{"projectiles":1,"total_cooldown":2}]},{"name":"Flashlight","description":"Shine a flashlight\\nforward with 500 range.\\nCosts 1 energy per sec.","energy_cost":1,"continuous":true,"total_cooldown":0,"levels":[{}]},{"name":"Lantern","description":"Hold a lantern to\\nemit light in all\\ndirections with 250 range.\\nCosts 2 energy per sec.","energy_cost":2,"continuous":true,"total_cooldown":0,"levels":[{}]},{"name":"Magnetism Down","description":"Reverse your magnetism.\\nCosts 1 energy.","energy_cost":1,"total_cooldown":0,"levels":[{}]},{"name":"Magnetism Up","description":"Reverse your magnetism.\\nCosts 1 energy.","energy_cost":1,"total_cooldown":0,"levels":[{}]},{"name":"Mystery Keycard","description":"Allows you to use\\nthe purple teleporter\\nin Security Gate B.\\nGreat danger awaits you\\non the other side...\\nAlso passively grants\\nyou experience while alive.","energy_cost":0,"passive":true,"total_cooldown":0,"levels":[{}]},{"name":"Grave","description":"Revive at the\\nnearest tombstone. Gain\\n1 sec of invulnerability\\nand 1.5 sec of disabled\\nabilities. Tombstone creator\\ngets a 3 sec cooldown.","energy_cost":0,"total_cooldown":0,"levels":[{}]},{"name":"Mouse Control","description":"Testing ability.","energy_cost":0,"continuous":true,"total_cooldown":0,"levels":[{}]}],"effects":[{"type":0,"name":"Flow","internal":true,"fillColor":"rgb(255, 80, 10)"},{"type":1,"name":"Harden","internal":true,"fillColor":"rgb(200, 70, 0)"},{"type":2,"name":"Paralysis","fillColor":"rgba(77, 233, 242, 0.2)"},{"type":3,"name":"Distort","fillColor":"rgba(255, 0, 0, 0.2)"},{"type":4,"name":"Energize","fillColor":"rgba(255, 255, 0, 0.2)"},{"type":5,"name":"Stomp","fillColor":"rgba(153, 62, 6, 0.2)"},{"type":6,"name":"Rewind","fillColor":"rgba(76, 240, 161, 0.25)","strokeColor":"rgba(51, 161, 118, 0.25)"},{"type":7,"name":"Atonement","fillColor":"rgba(142, 129, 38, 0.15)","strokeColor":"rgba(104, 95, 28, 0.15)"},{"type":8,"name":"Orbit","fillColor":"rgba(174, 137, 185, 0.25)"},{"type":9,"name":"Charge","fillColor":"rgba(225, 225, 0, 0.1)"},{"type":10,"name":"Shriek","fillColor":"rgba(0, 0, 0, 0.2)"},{"type":11,"name":"Decay","fillColor":null},{"type":12,"name":"Shatter","fillColor":null},{"type":13,"name":"Sugar Rush","fillColor":"rgba(255, 128, 189, 0.25)"},{"type":14,"name":"Earthquake","fillColor":"rgba(161, 132, 70, 0.2)"},{"type":15,"name":"Sticky Coat","fillColor":null},{"type":16,"name":"Attract","fillColor":"rgba(109, 109, 255, 0.2)"},{"type":17,"name":"Wildfire","fillColor":null},{"type":18,"name":"Supernova","fillColor":"rgba(255, 250, 134, 0.15)"},{"type":19,"name":"Network Control","fillColor":"rgba(146, 107, 227, 0.15)"},{"type":20,"name":"Gravekeeper","fillColor":"rgba(97, 97, 97, 0.2)"},{"type":21,"name":"Slowing","fillColor":"rgba(255, 0, 0, 0.15)"},{"type":22,"name":"Draining","fillColor":"rgba(0, 0, 255, 0.15)"},{"type":23,"name":"Gravity","fillColor":"rgba(60, 0, 115, 0.15)"},{"type":24,"name":"Repelling","fillColor":"rgba(210, 228, 239, 0.2)"},{"type":25,"name":"Freezing","fillColor":"rgba(58, 117, 112, 0.3)"},{"type":26,"name":"Slippery","fillColor":"rgba(33, 161, 165, 0.3)"},{"type":27,"name":"Disabling","fillColor":"rgba(255, 191, 206, 0.5)"},{"type":28,"name":"Enlarging","fillColor":"rgba(77, 1, 99, 0.3)"},{"type":29,"name":"Toxic","fillColor":"rgba(0, 199, 0, 0.2)"},{"type":30,"name":"Magnetic Reduction","fillColor":"rgba(189, 103, 210, 0.25)"},{"type":31,"name":"Magnetic Nullification","fillColor":"rgba(100, 35, 116, 0.3)"},{"type":32,"name":"Lava","fillColor":"rgba(247, 131, 6, 0.3)"},{"type":33,"name":"Quicksand","fillColor":"rgba(108, 84, 30, 0.3)"},{"type":34,"name":"Radar","fillColor":"rgba(153, 153, 153, 0.2)"},{"type":35,"name":"Shield","fillColor":"rgba(41, 255, 198, 0.3)"},{"type":36,"name":"Reducing","fillColor":"rgba(45, 50, 55, 0.15)"},{"type":37,"name":"Experience Drain","fillColor":"rgba(60, 0, 0, 0.2)"},{"type":38,"name":"Blocking","fillColor":"rgba(191, 82, 19, 0.3)"},{"type":39,"name":"Reduce","fillColor":"rgba(60, 189, 152, 0.2)"},{"type":40,"name":"Ictos","fillColor":"rgba(207, 166, 236, 0.25)"},{"type":41,"name":"Enemy Boss","fillColor":"rgba(99, 93, 110, 0.35)"},{"type":42,"name":"Mutatiorb Revive","fillColor":"rgba(110, 57, 30, 0.15)"},{"type":43,"name":"Lightning Charge","fillColor":"rgba(0, 225, 225, 0.1)"},{"type":44,"name":"Fire Trail","fillColor":null},{"type":45,"name":"Enemy Slowing","fillColor":"rgba(255, 0, 0, 0.15)"},{"type":46,"name":"Enemy Draining","fillColor":"rgba(0, 0, 255, 0.15)"},{"type":47,"name":"Enemy Gravity","fillColor":"rgba(60, 0, 115, 0.15)"},{"type":48,"name":"Enemy Repelling","fillColor":"rgba(210, 228, 239, 0.2)"},{"type":49,"name":"Enemy Freezing","fillColor":"rgba(58, 117, 112, 0.3)"},{"type":50,"name":"Enemy Slippery","fillColor":"rgba(33, 161, 165, 0.3)"},{"type":51,"name":"Enemy Disabling","fillColor":"rgba(255, 191, 206, 0.5)"},{"type":52,"name":"Enemy Experience Drain","fillColor":"rgba(60, 0, 0, 0.2)"},{"type":53,"name":"Enemy Enlarging","fillColor":"rgba(77, 1, 99, 0.3)"},{"type":54,"name":"Enemy Toxic","fillColor":"rgba(0, 199, 0, 0.2)"},{"type":55,"name":"Enemy Magnetic Reduction","fillColor":"rgba(189, 103, 210, 0.25)"},{"type":56,"name":"Enemy Magnetic Nullification","fillColor":"rgba(100, 35, 116, 0.3)"},{"type":57,"name":"Enemy Lava","fillColor":"rgba(247, 131, 6, 0.3)"},{"type":58,"name":"Enemy Cybot","fillColor":"rgba(146, 107, 227, 0.3)"},{"type":59,"name":"Enemy Cybot Shield","fillColor":"rgba(214, 0, 57, 0.3)"},{"type":60,"name":"Enemy Quicksand","fillColor":"rgba(108, 84, 30, 0.3)"},{"type":61,"name":"Enemy Radar","fillColor":"rgba(153, 153, 153, 0.2)"},{"type":62,"name":"Enemy Barrier","fillColor":"rgba(41, 255, 198, 0.3)"},{"type":63,"name":"Enemy Reducing","fillColor":"rgba(45, 50, 55, 0.15)"},{"type":64,"name":"Enemy Blocking","fillColor":"rgba(191, 82, 19, 0.3)"},{"type":65,"name":"Enemy Flaming","fillColor":"rgba(170, 47, 47, 0.48)"},{"type":66,"name":"Enemy Disarming","fillColor":"rgba(70, 65, 66, 0.17)"},{"type":67,"name":"Flashlight","hasLight":true,"cone":{"innerAngle":35,"distance":500},"fillColor":"rgba(255, 128, 0, 0.15)"},{"type":68,"name":"Lantern","hasLight":true,"circle":{"radius":250},"fillColor":"rgba(0, 255, 0, 0.6)"}],"defaults":{"ability":{"cooldown":0,"locked":true,"level":0,"max_level":5,"disabled":false},"area":{"has_previous":true,"has_next":true},"wall_enemy":{"radius":30,"color":"#222222"},"normal_enemy":{"radius":18,"color":"#939393"},"homing_enemy":{"radius":18,"color":"#966e14"},"homing_switch_enemy":{"radius":18,"color":"#694d0e"},"dasher_enemy":{"radius":18,"color":"#003c66"},"dasher_switch_enemy":{"radius":18,"color":"#00243d"},"slowing_enemy":{"radius":18,"color":"#ff0000"},"experience_drain_enemy":{"radius":18,"color":"#b19cd9"},"enlarging_enemy":{"radius":18,"color":"#4d0163"},"draining_enemy":{"radius":18,"color":"#0000ff"},"gravity_enemy":{"radius":18,"color":"#78148c"},"repelling_enemy":{"radius":18,"color":"#7b9db2"},"turning_enemy":{"radius":18,"color":"#336600"},"sizing_enemy":{"radius":35,"color":"#f27743"},"sniper_enemy":{"radius":18,"color":"#a05353"},"freezing_enemy":{"radius":2,"color":"#64c1b9"},"teleporting_enemy":{"radius":18,"color":"#ecc4ef"},"wavy_enemy":{"radius":18,"color":"#dd2606"},"wavy_switch_enemy":{"radius":18,"color":"#fa5336"},"zigzag_enemy":{"radius":18,"color":"#b371f2"},"zigzag_switch_enemy":{"radius":18,"color":"#e0c6f9"},"confectioner_enemy":{"radius":18,"color":"#8771f2"},"confectioner_switch_enemy":{"radius":18,"color":"#cfc6f9"},"zoning_enemy":{"radius":18,"color":"#a03811"},"zoning_switch_enemy":{"radius":18,"color":"#b35f40"},"spiral_enemy":{"radius":18,"color":"#e8b500"},"spiral_switch_enemy":{"radius":18,"color":"#f5e199"},"oscillating_enemy":{"radius":18,"color":"#869e0f"},"oscillating_switch_enemy":{"radius":18,"color":"#b6c46f"},"switch_enemy":{"radius":18,"color":"#565656"},"dorito_enemy":{"radius":18,"color":"#05dad1"},"dorito_switch_enemy":{"radius":18,"color":"#9bf0ec"},"penny_enemy":{"radius":18,"color":"#c38b32"},"penny_switch_enemy":{"radius":18,"color":"#d9b67f"},"infinity_enemy":{"radius":18,"color":"#ff69c5"},"infinity_switch_enemy":{"radius":18,"color":"#ffb4e2"},"liquid_enemy":{"radius":18,"color":"#6789ef"},"icicle_enemy":{"radius":18,"color":"#adf8ff"},"slippery_enemy":{"radius":5,"color":"#1aacbf"},"ice_sniper_enemy":{"radius":18,"color":"#8300ff"},"disabling_enemy":{"radius":18,"color":"#a87c86"},"speed_sniper_enemy":{"radius":18,"color":"#ff9000"},"regen_sniper_enemy":{"radius":18,"color":"#00cc8e"},"radiating_bullets_enemy":{"radius":18,"color":"#d3134f"},"immune_enemy":{"radius":18,"color":"#000000"},"pumpkin_enemy":{"radius":18,"color":"#e26110"},"tree_enemy":{"radius":18,"color":"#4e2700"},"frost_giant_enemy":{"radius":30,"color":"#7e7cd6"},"snowman_enemy":{"radius":18,"color":"#ffffff"},"corrosive_enemy":{"radius":18,"color":"#00eb00"},"toxic_enemy":{"radius":18,"color":"#00c700"},"corrosive_sniper_enemy":{"radius":18,"color":"#61ff61"},"poison_sniper_enemy":{"radius":18,"color":"#8c01b7"},"magnetic_reduction_enemy":{"radius":18,"color":"#bd67d2"},"magnetic_nullification_enemy":{"radius":18,"color":"#642374"},"positive_magnetic_sniper_enemy":{"radius":18,"color":"#ff3852"},"negative_magnetic_sniper_enemy":{"radius":18,"color":"#a496ff"},"residue_enemy":{"radius":18,"color":"#675327"},"fire_trail_enemy":{"radius":18,"color":"#cf5504"},"ice_ghost_enemy":{"radius":18,"color":"#be89ff"},"poison_ghost_enemy":{"radius":18,"color":"#590174"},"positive_magnetic_ghost_enemy":{"radius":18,"color":"#e3001e"},"negative_magnetic_ghost_enemy":{"radius":18,"color":"#6f59ff"},"wind_ghost_enemy":{"radius":18,"color":"#9de3c6"},"lunging_enemy":{"radius":18,"color_change":55,"color":"#c88250"},"lava_enemy":{"radius":18,"color":"#f78306"},"gravity_ghost_enemy":{"radius":18,"color":"#78148c"},"repelling_ghost_enemy":{"radius":18,"color":"#7b9db2"},"star_enemy":{"radius":18,"color":"#faf46e"},"grass_enemy":{"radius":18,"color":"#75eb26"},"seedling_enemy":{"radius":18,"color":"#259c55"},"flower_enemy":{"radius":18,"color":"#e8e584"},"disabling_ghost_enemy":{"radius":60,"color":"rgba(255, 191, 206, 0.5)"},"glowy_enemy":{"radius":18,"color":"#ede658"},"firefly_enemy":{"radius":18,"color":"#f0841f"},"mist_enemy":{"radius":18,"color":"#b686db"},"phantom_enemy":{"radius":18,"color":"#86d7db"},"cybot_enemy":{"radius":15,"color":"#926be3"},"eabot_enemy":{"radius":30,"color":"#b07331"},"wabot_enemy":{"radius":30,"color":"#319bb0"},"fibot_enemy":{"radius":30,"color":"#e88409"},"aibot_enemy":{"radius":30,"color":"#00b585"},"wind_sniper_enemy":{"radius":18,"color":"#9de3c6"},"sand_enemy":{"radius":18,"color":"#d5ae7f"},"sandrock_enemy":{"radius":18,"color":"#a57a6d"},"quicksand_enemy":{"radius":18,"color":"#6c541e"},"crumbling_enemy":{"radius":18,"color":"#bd9476"},"radar_enemy":{"radius":18,"color":"#c90000"},"barrier_enemy":{"radius":18,"color":"#29ffc6"},"speed_ghost_enemy":{"radius":18,"color":"#fca330"},"regen_ghost_enemy":{"radius":18,"color":"#32e3ae"},"cactus_enemy":{"radius":18,"color":"#5b8e28"},"cycling_enemy":{"radius":18,"color":"#91bbff"},"icbot_enemy":{"radius":30,"color":"#1bc8e3"},"elbot_enemy":{"radius":30,"color":"#daff1f"},"plbot_enemy":{"radius":30,"color":"#18ed3f"},"mebot_enemy":{"radius":30,"color":"#b55b31"},"libot_enemy":{"radius":30,"color":"#fff9bd"},"dabot_enemy":{"radius":30,"color":"#3d006e"},"sparking_enemy":{"radius":18,"color":"#ffbe6e"},"thunderbolt_enemy":{"radius":18,"color":"#f4ff8c"},"static_enemy":{"radius":18,"color":"#f5a462"},"electrical_enemy":{"radius":18,"color":"#ffff00"},"prediction_sniper_enemy":{"radius":18,"color":"#d14f84"},"ring_sniper_enemy":{"radius":18,"color":"#b5deeb"},"charging_enemy":{"radius":18,"color":"#374037"},"reducing_enemy":{"radius":18,"color":"rgb(45, 50, 55)"},"lead_sniper_enemy":{"radius":18,"color":"#788898"},"stalactite_enemy":{"radius":18,"color":"#302519"},"blocking_enemy":{"radius":18,"color":"#bf5213"},"force_sniper_a_enemy":{"radius":18,"color":"#0a5557"},"force_sniper_b_enemy":{"radius":18,"color":"#914d83"},"wacky_wall_enemy":{"radius":18,"color":"#332233"},"flaming_enemy":{"radius":18,"color":"#aa2f2f"},"stumbling_enemy":{"radius":18,"color":"#7d487f"},"disarming_enemy":{"radius":18,"color":"#a377a3"},"lurching_enemy":{"radius":18,"color":"#5d4d5d"},"infectious_enemy":{"radius":18,"color":"#eb00eb"},"mutating_enemy":{"radius":8,"color":"#211513"},"vengeful_soul_enemy":{"radius":18,"color":"#96b1b3"},"lost_soul_enemy":{"radius":18,"color":"#bed0d1"},"blind_enemy":{"radius":18,"color":"#96c6ec"},"ninja_star_sniper_enemy":{"radius":18,"color":"#dedede"},"summoner_enemy":{"radius":18,"color":"#91bbff"},"slasher_enemy":{"radius":18,"color":"#363636"},"lotus_flower_enemy":{"radius":18,"color":"#dedede"},"randomizing_enemy":{"radius":18,"color":"#e36939"},"snow_sniper_enemy":{"radius":18,"color":"#c1e2ff"},"snow_liquid_enemy":{"radius":18,"color":"#acc4d9"},"key_enemy":{"radius":18,"color":"#ffda6a"},"pellet":{"radius":8},"reverse_projectile":{"radius":11,"color":"#00dd00"},"minimize_projectile":{"radius":11,"color":"#ff0000"},"reanimate_projectile":{"radius":11,"color":"#FF00FF"},"sniper_projectile":{"radius":6,"speed":300,"color":"#a05353"},"vengeance_projectile":{"radius":15,"speed":300,"color":"#b23a3a"},"latch_projectile":{"radius":17,"color":"#f9f993"},"barrier_dome":{"radius":170},"stream_path":{"length":300,"width":200,"duration":7},"black_hole_projectile":{"speed":720,"radius":200,"color":"rgba(0, 0, 0, 0.6)"},"spark_projectile":{"radius":8,"color":"#ffff00"},"lightning_projectile":{"radius":8,"color":"#1cffff"},"shadow_projectile":{"radius":15,"color":"#232323"},"obscure_projectile":{"radius":15,"color":"#020fa2"},"ice_sniper_projectile":{"radius":10,"speed":480,"color":"#be89ff"},"snowball_projectile":{"radius":13,"color":"#a5c7ce"},"speed_sniper_projectile":{"radius":10,"speed":480,"color":"#d6885c"},"regen_sniper_projectile":{"radius":10,"speed":480,"color":"#00a875"},"radiating_bullets_projectile":{"radius":8,"speed":240,"color":"#a30838"},"leaf_projectile":{"radius":12,"speed":180,"color":"#035b12"},"frost_giant_ice_projectile":{"radius":10,"speed":120,"color":"#a0a7d6"},"stalactite_enemy_projectile":{"radius":2,"speed":60,"color":"#614c37"},"orbit_projectile":{"radius":10,"color":"rgb(174, 137, 185)"},"corrosive_sniper_projectile":{"radius":6,"speed":300,"color":"#61ff61"},"ninja_star_sniper_projectile":{"radius":6,"speed":240,"color":"#dedede"},"poison_sniper_projectile":{"radius":10,"speed":480,"color":"#590174"},"positive_magnetic_sniper_projectile":{"radius":10,"speed":480,"color":"#e3001e"},"negative_magnetic_sniper_projectile":{"radius":10,"speed":480,"color":"#6f59ff"},"crumble_projectile":{"radius":12,"color":"#a48c5d"},"radioactive_gloop_projectile":{"radius":3,"color":"#7aff7a"},"bloom_projectile":{"radius":1,"color":"#8a30d9","speed":0},"pollinate_projectile":{"radius":15,"color":"#d9b130"},"seedling_projectile":{"radius":15,"color":"#259c55"},"flower_projectile":{"radius":1,"color":"#e084e8"},"grave_projectile":{"radius":5,"color":"#616161","speed":0},"elbot_projectile":{"radius":30,"speed":720,"color":"#ffff4a"},"libot_projectile":{"radius":30,"speed":480,"color":"#defffe"},"dabot_projectile":{"radius":30,"speed":480,"color":"#2b0021"},"wind_sniper_projectile":{"radius":10,"speed":210,"color":"#82c2a5"},"radar_projectile":{"radius":4,"speed":150,"color":"#c90000"},"robo_scanner_sniper_projectile":{"radius":6,"speed":300,"color":"rgba(160, 83, 83, 0.4)"},"robo_scanner_ice_sniper_projectile":{"radius":10,"speed":480,"color":"rgba(190, 137, 255, 0.4)"},"robo_scanner_speed_sniper_projectile":{"radius":10,"speed":480,"color":"rgba(214, 136, 92, 0.4)"},"robo_scanner_regen_sniper_projectile":{"radius":10,"speed":480,"color":"rgba(0, 168, 117, 0.4)"},"robo_scanner_radiating_bullets_projectile":{"radius":8,"speed":240,"color":"rgba(163, 8, 56, 0.4)"},"robo_scanner_leaf_projectile":{"radius":12,"speed":180,"color":"rgba(3, 91, 18, 0.4)"},"robo_scanner_corrosive_sniper_projectile":{"radius":6,"speed":300,"color":"rgba(97, 255, 97, 0.4)"},"robo_scanner_poison_sniper_projectile":{"radius":10,"speed":480,"color":"rgba(89, 1, 116, 0.4)"},"robo_scanner_positive_sniper_projectile":{"radius":10,"speed":480,"color":"rgba(227, 0, 30, 0.4)"},"robo_scanner_negative_sniper_projectile":{"radius":10,"speed":480,"color":"rgba(111, 89, 255, 0.4)"},"robo_scanner_wind_sniper_projectile":{"radius":10,"speed":210,"color":"rgba(130, 194, 165, 0.4)"},"robo_scanner_radar_projectile":{"radius":4,"speed":150,"color":"rgba(201, 0, 0, 0.4)"},"robo_scanner_prediction_sniper_projectile":{"radius":10,"speed":330,"color":"rgba(209, 79, 132, 0.4)"},"robo_scanner_lead_sniper_projectile":{"radius":12,"speed":300,"color":"rgba(104, 120, 136, 0.4)"},"robo_scanner_force_a_projectile":{"radius":12,"speed":360,"color":"rgba(10, 85, 87, 0.4)"},"robo_scanner_force_b_projectile":{"radius":12,"speed":360,"color":"rgba(145, 77, 131)"},"robo_scanner_flower_projectile":{"radius":15,"color":"#e084e8"},"robo_scanner_frost_giant_ice_projectile":{"radius":10,"speed":120,"color":"rgba(160, 167, 214, 0.4)"},"robo_scanner_ninja_star_sniper_projectile":{"radius":18,"speed":300,"color":"rgba(222, 222, 222, 0.4)"},"robo_scanner_fire_trail_projectile":{"radius":15,"color":"rgba(207, 85, 4, 0.4)"},"robo_scanner_residue":{"radius":18,"color":"rgba(103, 83, 39, 0.4)"},"robo_scanner_stalactite_projectile":{"radius":7,"color":"rgba(97, 76, 55, 0.4)"},"robo_scanner_summoner_blind_enemy":{"radius":24,"speed":300,"color":"rgba(150, 198, 236, 0.4)"},"echelon_projectile":{"radius":15,"color":"rgba(35, 166, 168, 0.5)"},"incinerate_projectile":{"radius":4,"duration":2,"color":"rgb(126, 12, 22)"},"petrify_projectile":{"radius":15,"speed":1800,"range":8000,"petrify_duration":2500,"color":"rgba(70, 55, 92, 0.6)"},"ictos_projectile":{"radius":10,"effect_radius":75,"duration":2000,"color":"#cfa6ec"},"sparking_enemy_projectile":{"radius":5,"color":"#ffbe6e"},"electrical_enemy_projectile":{"color":"#ffff00"},"prediction_sniper_projectile":{"speed":330,"radius":10,"color":"#d14f84"},"ring_sniper_projectile":{"speed":90,"radius":24,"color":"#ed3737"},"cybot_ring_projectile":{"speed":180,"radius":40,"color":"#393ced"},"lead_sniper_projectile":{"radius":12,"speed":300,"color":"#687888","effect_time":3.5},"force_sniper_a_projectile":{"radius":12,"speed":360,"color":"#23787a"},"force_sniper_b_projectile":{"radius":12,"speed":360,"color":"#6e295f"},"factorb_explosion":{"radius":0,"color":"#6e391e"},"player":{"radius":15,"speed":150,"level":1,"max_level":100,"experience":0,"previous_level_experience":0,"next_level_experience":4,"upgrade_points":0,"energy":30,"max_energy":30,"energy_regen":1,"death_timer":-1}},"upgrades":{"speed":{"increment":15,"max":510},"max_energy":{"increment":5,"max":300},"energy_regen":{"increment":0.2,"max":7}},"accessories":{"gold-crown":{"name":"Gold Crown","description":"Rare crown that is currently awarded to the top 3 players in the Hall of Fame every week."},"silver-crown":{"name":"Silver Crown","description":"Silver crown that is currently awarded to the top 10 players in the Hall of Fame every week."},"bronze-crown":{"name":"Bronze Crown","description":"This crown is currently awarded to the top 30 players in the Hall of Fame every week."},"santa-hat":{"name":"Santa Hat","description":{"is_december":"Perfect for these festive times. Received from Frozen Fjord.","default":"It may not be in season right now, but it can be found in Frozen Fjord if you are still feeling festive."}},"gold-wreath":{"name":"Gold Wreath","description":"Awarded for winning a normal tournament hosted on Discord."},"spring-wreath":{"name":"Spring Wreath","description":"A pretty wreath awarded for winning the annual spring tournament."},"autumn-wreath":{"name":"Autumn Wreath","description":"A sweet wreath awarded for winning the annual autumn tournament."},"winter-wreath":{"name":"Winter Wreath","description":"A cool wreath awarded for winning the annual winter tournament."},"summer-wreath":{"name":"Summer Wreath","description":"An elegant wreath awarded for winning the annual summer tournament."},"summer-olympics-wreath":{"name":"Summer Olympics Wreath","description":"Awarded to the winning team during the summer Olympics tournament."},"summer-olympics-wreath-2":{"name":"Summer Olympics Wreath II","description":"Awarded to 2-time champions of the winning team during the summer Olympics tournament."},"winter-olympics-wreath":{"name":"Winter Olympics Wreath","description":"Awarded to the winning team during the winter Olympics tournament."},"halo":{"name":"Halo","description":"For the worthy."},"blue-santa-hat":{"name":"Blue Santa Hat","description":"Awarded for completing Frozen Fjord Hard."},"flames":{"name":"Flames","description":"Found after escaping the Burning Bunker."},"blue-flames":{"name":"Blue Flames","description":"Found after escaping Burning Bunker Hard."},"stars":{"name":"Stars","description":"Even the stars recognise you after completing Elite Expanse Hard."},"witch-hat":{"name":"Witch Hat","description":"A spooky hat found by navigating through the hedge maze in Mysterious Mansion."},"sunglasses":{"name":"Sunglasses","description":"Cool sunglasses awarded for earning 10 quest points."},"flower-headband":{"name":"Flower Headband","description":"Cute headband awarded for earning 30 quest points."},"fedora":{"name":"Fedora","description":"Fancy hat that seems to have travelled through time. Earned from 80 quest points."},"pirate-hat":{"name":"Pirate Hat","description":"You earn your place with the pirates for 100 quest points."},"rose-wreath":{"name":"Rose Wreath","description":"Only the top players on the highscores leaderboard can keep this wreath."},"gold-jewels":{"name":"Gold Jewels","description":"Golden jewels awarded for achieving 1st place in the quarterly bracket-style tournament."},"silver-jewels":{"name":"Silver Jewels","description":"Silver jewels awarded for achieving 2nd place in the quarterly bracket-style tournament."},"bronze-jewels":{"name":"Bronze Jewels","description":"Bronze jewels awarded for achieving 3rd place in the quarterly bracket-style tournament."},"fruit-bowl":{"name":"Fruit Bowl","description":"You can look tasty for only 350 quest points."},"sticky-coat":{"name":"Sticky Coat","description":"A likely harmless substance that is found after completing Toxic Territory."},"toxic-coat":{"name":"Toxic Coat","description":"Irregulated materials found past Toxic Territory Hard."},"orbit-ring":{"name":"Orbit Ring","description":"Some planets have these, but this one is just a replica. Found at the end of the Elite Expanse."},"clouds":{"name":"Clouds","description":{"viewer_passed_endless_echo_thousand":"These words are the Endless Echo, and you are trapped within it.","default":"A calm set of clouds awarded for reaching the sixth victory zone within the Endless Echo."}},"storm-clouds":{"name":"Clouds","description":"Ominous clouds are awarded for reaching the sixth victory zone in Endless Echo Hard."},"tuxedo":{"name":"Tuxedo","description":"Suited for professionals. Luckily, the tie is already done for you. Awarded for earning 60 quest points."},"doughnut":{"name":"Doughnut","description":"Does it hurt to get pierced? Awarded for earning 150 quest points."},"stardust":{"name":"Stardust","description":"The cosmos recognise your contributions after earning 200 quest points."},"broomstick":{"name":"Broomstick","description":"Fantastic for cleaning purposes, but it doesn\'t seem to fly. Earned after 250 quest points."},"snowglobe":{"name":"Snowglobe","description":"Thankfully, real snow doesn\'t last forever, even if it is pretty to look at. This snowglobe gives you the best of both worlds. Awarded after earning 300 quest points."},"stick":{"name":"Stick","description":{"legacy_achievement_ground_control":"Oddly familiar... Found in the Deep Woods.","default":"Found in the Deep Woods."}}}}')
EvadesConfig.heroes[-1]={name:"Ordinary",backgroundColor:"#B60000",foregroundColor:"#B60000",textColor:"#B60000",strokeColor:"#820000"}
EvadesConfig.heroes.null={strokeColor:"#0000"};
const $467f762a3017f499$var$emoji = new EmojiConvertor;
$467f762a3017f499$var$emoji.replace_mode = "unified";
$467f762a3017f499$var$emoji.allow_native = !0;
document.getElementById("chat-input").addEventListener("input",function(){
  this.value = $467f762a3017f499$var$emoji.replace_colons(this.value)
});
function capitalize(s){
  var t=s.split("_")
  t=t.map(e=>{
    return e[0].toUpperCase()+e.slice(1).toLowerCase();
  })
  return t.join("");
}
let $ccc1645057c0c20e$export$18da14ab4d863bec;
($ccc1645057c0c20e$export$18da14ab4d863bec='FLASHLIGHT_ITEM, TORCH, PARTICLE_GENERATOR, LIGHT_REGION, IMAGE_BACKGROUND, PELLET, ROBO_SCANNER_SOUR_CANDY_ITEM, SOUR_CANDY_ITEM, SWEET_TOOTH_ITEM, EXPLODIORB_ITEM, WALL, BLOOM_PROJECTILE, ROBO_SCANNER_FLOWER_PROJECTILE, POLLINATE_PROJECTILE, STREAM_PATH, BARRIER_DOME, PLAYER, RADIOACTIVE_GLOOP_PROJECTILE, FACTORB_EXPLOSION, MINIMIZE_PROJECTILE, REANIMATE_PROJECTILE, REVERSE_PROJECTILE, BLACK_HOLE_PROJECTILE, SHADOW_PROJECTILE, OBSCURE_PROJECTILE, SNOWBALL_PROJECTILE, LEAF_PROJECTILE, ORBIT_PROJECTILE, CRUMBLE_PROJECTILE, GRAVE_PROJECTILE, ECHELON_PROJECTILE, INCINERATE_PROJECTILE, PETRIFY_PROJECTILE, ICTOS_PROJECTILE, SPARKING_ENEMY_PROJECTILE, ELECTRICAL_ENEMY_PROJECTILE, PREDICTION_SNIPER_PROJECTILE, RING_SNIPER_PROJECTILE, CYBOT_RING_PROJECTILE, LEAD_SNIPER_PROJECTILE, FORCE_SNIPER_A_PROJECTILE, FORCE_SNIPER_B_PROJECTILE, FLOWER_PROJECTILE, ICE_GHOST_ENEMY, POISON_GHOST_ENEMY, POSITIVE_MAGNETIC_GHOST_ENEMY, NEGATIVE_MAGNETIC_GHOST_ENEMY, WIND_GHOST_ENEMY, GRAVITY_GHOST_ENEMY, REPELLING_GHOST_ENEMY, GRASS_ENEMY, FLOWER_ENEMY, DISABLING_GHOST_ENEMY, GLOWY_ENEMY, FIREFLY_ENEMY, MIST_ENEMY, PHANTOM_ENEMY, SPEED_GHOST_ENEMY, REGEN_GHOST_ENEMY, NORMAL_ENEMY, DASHER_ENEMY, DASHER_SWITCH_ENEMY, DRAINING_ENEMY, FREEZING_ENEMY, GRAVITY_ENEMY, HOMING_ENEMY, HOMING_SWITCH_ENEMY, SIZING_ENEMY, SLOWING_ENEMY, EXPERIENCE_DRAIN_ENEMY, ENLARGING_ENEMY, SNIPER_ENEMY, REPELLING_ENEMY, TELEPORTING_ENEMY, TURNING_ENEMY, WAVY_ENEMY, WAVY_SWITCH_ENEMY, ZIGZAG_ENEMY, ZIGZAG_SWITCH_ENEMY, CONFECTIONER_ENEMY, CONFECTIONER_SWITCH_ENEMY, ZONING_ENEMY, ZONING_SWITCH_ENEMY, SPIRAL_ENEMY, SPIRAL_SWITCH_ENEMY, OSCILLATING_ENEMY, OSCILLATING_SWITCH_ENEMY, SWITCH_ENEMY, DORITO_ENEMY, DORITO_SWITCH_ENEMY, PENNY_ENEMY, PENNY_SWITCH_ENEMY, INFINITY_ENEMY, INFINITY_SWITCH_ENEMY, LIQUID_ENEMY, ICICLE_ENEMY, SLIPPERY_ENEMY, ICE_SNIPER_ENEMY, DISABLING_ENEMY, SPEED_SNIPER_ENEMY, REGEN_SNIPER_ENEMY, RADIATING_BULLETS_ENEMY, PUMPKIN_ENEMY, TREE_ENEMY, FROST_GIANT_ENEMY, IMMUNE_ENEMY, SNOWMAN_ENEMY, CORROSIVE_ENEMY, TOXIC_ENEMY, CORROSIVE_SNIPER_ENEMY, POISON_SNIPER_ENEMY, MAGNETIC_REDUCTION_ENEMY, MAGNETIC_NULLIFICATION_ENEMY, POSITIVE_MAGNETIC_SNIPER_ENEMY, NEGATIVE_MAGNETIC_SNIPER_ENEMY, LUNGING_ENEMY, LAVA_ENEMY, STAR_ENEMY, SEEDLING_ENEMY, SEEDLING_PROJECTILE, CYBOT_ENEMY, EABOT_ENEMY, WABOT_ENEMY, FIBOT_ENEMY, AIBOT_ENEMY, ICBOT_ENEMY, ELBOT_ENEMY, PLBOT_ENEMY, MEBOT_ENEMY, LIBOT_ENEMY, DABOT_ENEMY, WIND_SNIPER_ENEMY, SAND_ENEMY, SANDROCK_ENEMY, QUICKSAND_ENEMY, CRUMBLING_ENEMY, RADAR_ENEMY, BARRIER_ENEMY, CACTUS_ENEMY, CYCLING_ENEMY, SPARKING_ENEMY, THUNDERBOLT_ENEMY, STATIC_ENEMY, ELECTRICAL_ENEMY, PREDICTION_SNIPER_ENEMY, RING_SNIPER_ENEMY, LEAD_SNIPER_ENEMY, CHARGING_ENEMY, REDUCING_ENEMY, STALACTITE_ENEMY, BLOCKING_ENEMY, FORCE_SNIPER_A_ENEMY, FORCE_SNIPER_B_ENEMY, FLAMING_ENEMY, STUMBLING_ENEMY, DISARMING_ENEMY, LURCHING_ENEMY, INFECTIOUS_ENEMY, MUTATING_ENEMY, VENGEFUL_SOUL_ENEMY, LOST_SOUL_ENEMY, BLIND_ENEMY, NINJA_STAR_SNIPER_ENEMY, SUMMONER_ENEMY, SLASHER_ENEMY, LOTUS_FLOWER_ENEMY, RANDOMIZING_ENEMY, SNOW_SNIPER_ENEMY, SNOW_LIQUID_ENEMY, KEY_ENEMY, MISS_CICLES, APHMAU_ENTITY, ENEMY, RESIDUE_ENEMY, FIRE_TRAIL_ENEMY, ROBO_SCANNER_SUMMONER_BLIND_ENEMY, SNIPER_PROJECTILE, VENGEANCE_PROJECTILE, ICE_SNIPER_PROJECTILE, SPEED_SNIPER_PROJECTILE, REGEN_SNIPER_PROJECTILE, RADIATING_BULLETS_PROJECTILE, LATCH_PROJECTILE, FROST_GIANT_ICE_PROJECTILE, STALACTITE_ENEMY_PROJECTILE, SPARK_PROJECTILE, LIGHTNING_PROJECTILE, CORROSIVE_SNIPER_PROJECTILE, POISON_SNIPER_PROJECTILE, POSITIVE_MAGNETIC_SNIPER_PROJECTILE, NEGATIVE_MAGNETIC_SNIPER_PROJECTILE, ELBOT_PROJECTILE, LIBOT_PROJECTILE, DABOT_PROJECTILE, WIND_SNIPER_PROJECTILE, RADAR_PROJECTILE, NINJA_STAR_SNIPER_PROJECTILE, ROBO_SCANNER_SNIPER_PROJECTILE, ROBO_SCANNER_ICE_SNIPER_PROJECTILE, ROBO_SCANNER_SPEED_SNIPER_PROJECTILE, ROBO_SCANNER_REGEN_SNIPER_PROJECTILE, ROBO_SCANNER_RADIATING_BULLETS_PROJECTILE, ROBO_SCANNER_LEAF_PROJECTILE, ROBO_SCANNER_CORROSIVE_SNIPER_PROJECTILE, ROBO_SCANNER_POISON_SNIPER_PROJECTILE, ROBO_SCANNER_POSITIVE_SNIPER_PROJECTILE, ROBO_SCANNER_NEGATIVE_SNIPER_PROJECTILE, ROBO_SCANNER_WIND_SNIPER_PROJECTILE, ROBO_SCANNER_RADAR_PROJECTILE, ROBO_SCANNER_PREDICTION_SNIPER_PROJECTILE, ROBO_SCANNER_LEAD_SNIPER_PROJECTILE, ROBO_SCANNER_FORCE_A_PROJECTILE, ROBO_SCANNER_FORCE_B_PROJECTILE, ROBO_SCANNER_FROST_GIANT_ICE_PROJECTILE, ROBO_SCANNER_NINJA_STAR_SNIPER_PROJECTILE, ROBO_SCANNER_FIRE_TRAIL_PROJECTILE, ROBO_SCANNER_RESIDUE, ROBO_SCANNER_STALACTITE_PROJECTILE, WACKY_WALL_ENEMY, WALL_ENEMY'.split(", ")).map((e,t,a)=>{
  a[capitalize(e)]=t;
});
function sortEntitiesByZIndex(e) {
    const a = []
      , t = [];
    for (const r of e)
        -1 === r.absoluteZIndex ? a.push(r) : t.push(r);
    const r = (e, a) => {
        if (e.isEnemy && a.isEnemy) {
            if (e.inactive && !a.inactive)
                return -1;
            if (!e.inactive && a.inactive)
                return 1;
            if (e.radius !== a.radius)
                return a.radius - e.radius
        }
        if(e.isPlayer && a.isPlayer && e.isLocalPlayer !== a.isLocalPlayer) {
          if(a.isLocalPlayer)return -1;else return 1;
        }else if(e.constructor.name !== a.constructor.name)
          return $ccc1645057c0c20e$export$18da14ab4d863bec[e.constructor.name] - $ccc1645057c0c20e$export$18da14ab4d863bec[a.constructor.name];
        else if((e.relativeZIndex || 0) !== (a.relativeZIndex || 0))
          return (e.relativeZIndex || 0) - (a.relativeZIndex || 0)
        else return e.ID - a.ID;
    }
    ;
    return a.sort(r),
    t.sort(r),
    a.concat(t)
}
var abilityConfig=EvadesConfig.abilities;
var effectConfig=EvadesConfig.effects;
abilityConfig[-2]={"name":"Locked","description":"Not implemented","energy_cost":0,"continuous":false,"total_cooldown":0,"levels":[{}]}
const $e728d5a493f33528$export$ba6e2f1cddd013f7 = (e,a)=>{
	for (const t of e)
		if (t.name === a.toLowerCase())
			return t;
	return null
}
class SnowRenderer{constructor(){this.intensity=0,this.particles=[],this.angle=0,this.area=null,this.camera=null}update(e,t,a){const delta=arguments[4];if(this.intensity=arguments[3]("properties","snow",null,e,map),0===this.intensity||0===delta)return;e!==this.area&&(this.area=e,this.reset(t));let r=0,c=0;null!==this.camera&&(r=this.camera.x-a.x,c=this.camera.y-a.y),this.camera={x:a.x,y:a.y},this.angle+=.3*delta/1e3;const f=this.width(t),o=this.height(t),n=30*(1+2*this.intensity)*delta/1e3;for(let e=0;e<this.particles.length;e++){const t=this.particles[e];t.x+=2*Math.sin(this.angle)*n-r,t.y+=(Math.cos(this.angle+t.d)+1+t.r/2)*n-c,t.x>f?this.particles[e]=r<0?{x:Math.random()*-r,y:Math.random()*o,r:t.r,d:t.d}:{x:0,y:Math.random()*o,r:t.r,d:t.d}:t.x<0?this.particles[e]=r>0?{x:f-Math.random()*r,y:Math.random()*o,r:t.r,d:t.d}:{x:f,y:Math.random()*o,r:t.r,d:t.d}:t.y>o&&c<0?this.particles[e]={x:Math.random()*f,y:Math.random()*-c,r:t.r,d:t.d}:t.y<0&&c>0?this.particles[e]={x:Math.random()*f,y:o-Math.random()*c,r:t.r,d:t.d}:(t.y<0||t.y>o)&&(this.particles[e]={x:Math.random()*f,y:0,r:t.r,d:t.d})}}reset(e){this.angle=0,this.particles=[],this.camera=null;const t=Math.ceil(2*this.intensity),a=Math.ceil(3.5*this.intensity),r=this.width(e),c=this.height(e);for(let e=0;e<Math.floor(40*this.intensity);e++)this.particles.push({x:Math.random()*r,y:Math.random()*c,r:Math.random()*(a-t)+t,d:Math.random()})}width(e){return e.canvas.width}height(e){return e.canvas.height}render(e,t){if(0===this.intensity)return;const a=this.width(e),r=this.height(e);e.fillStyle="rgba(255, 255, 255, 0.8)",e.beginPath();for(let c=0;c<this.particles.length;c++){const f=this.particles[c],o=t.toScale(f.x),n=t.toScale(f.y);o<0||n<0||o>a||n>r||(e.moveTo(o,n),e.arc(o,n,t.toScale(f.r),0,2*Math.PI,!1))}e.fill()}}
class SakuraRenderer{constructor(){this.intensity=0,this.particles=[],this.angle=0,this.area=null,this.camera=null}update(e,t,a){const delta=arguments[4];if(this.intensity=arguments[3]("properties","sakura_leaves",null,e,map),0===this.intensity||0===delta)return;e!==this.area&&(this.area=e,this.reset(t));let r=0,c=0;null!==this.camera&&(r=this.camera.x-a.x,c=this.camera.y-a.y),this.camera={x:a.x,y:a.y},this.angle+=.3*delta/1e3;const f=this.width(t),o=this.height(t),n=30*(1+2*this.intensity)*delta/1e3;for(let e=0;e<this.particles.length;e++){const t=this.particles[e];t.x+=2*Math.sin(this.angle)*n-r,t.y+=(Math.cos(this.angle+t.d)+1+t.r/2)*n-c,t.x>f?this.particles[e]=r<0?{x:Math.random()*-r,y:Math.random()*o,r:t.r,d:t.d}:{x:0,y:Math.random()*o,r:t.r,d:t.d}:t.x<0?this.particles[e]=r>0?{x:f-Math.random()*r,y:Math.random()*o,r:t.r,d:t.d}:{x:f,y:Math.random()*o,r:t.r,d:t.d}:t.y>o&&c<0?this.particles[e]={x:Math.random()*f,y:Math.random()*-c,r:t.r,d:t.d}:t.y<0&&c>0?this.particles[e]={x:Math.random()*f,y:o-Math.random()*c,r:t.r,d:t.d}:(t.y<0||t.y>o)&&(this.particles[e]={x:Math.random()*f,y:0,r:t.r,d:t.d})}}reset(e,t){this.angle=0,this.particles=[],this.camera=null;const a=Math.ceil(3*this.intensity),r=Math.ceil(5*this.intensity),c=this.width(e),f=this.height(e);for(let e=0;e<Math.floor(40*this.intensity);e++)this.particles.push({x:Math.random()*c,y:Math.random()*f,r:Math.random()*(r-a)+a,d:Math.random()})}width(e){return e.canvas.width}height(e){return e.canvas.height}render(e,t){if(0===this.intensity)return;const a=this.width(e),r=this.height(e);e.fillStyle="rgba(255, 183, 197, 0.8)",e.beginPath();for(let c=0;c<this.particles.length;c++){const f=this.particles[c],o=t.toScale(f.x),n=t.toScale(f.y);o<0||n<0||o>a||n>r||(e.moveTo(o,n),e.arc(o,n,t.toScale(f.r),0,2*Math.PI,!1))}e.fill()}}
class DynamicLighting{constructor(e){this.lighting=e,this.circleLightSources=[],this.coneLightSources=[],this.rectangleLightSources=[],this.lightCache=new Map}addCircleLightSource(e,t,a,r){this.circleLightSources.push({radius:e,x:t,y:a,color:r})}addConeLightSource(e,t,a,r,c,f){this.coneLightSources.push({x:e,y:t,centerDistance:a,directionAngle:r,innerAngle:c,distance:f})}addRectangleLightSource(e){this.rectangleLightSources.push(e)}getCachedGradient(e,t,a){if(!this.lightCache.has(t)){const r=a(e);this.lightCache.set(t,r)}return this.lightCache.get(t)}render(e,t){e.fillStyle="black",e.globalCompositeOperation="source-over",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.globalCompositeOperation="screen";for(const a of this.circleLightSources){if(a.radius<0||Number.isNaN(a.radius))continue;const r=t.toScale(a.radius),c=`circle_${r}${a.color}`,f=this.getCachedGradient(e,c,(e=>{const t=e.createRadialGradient(0,0,0,0,0,r);return t.addColorStop(0,a.color),t.addColorStop(1,a.color+"00"),t}));e.save(),e.translate(t.getX(a.x),t.getY(a.y)),e.beginPath(),e.arc(0,0,r,0,2*Math.PI,!1),e.fillStyle=f,e.fill(),e.restore()}for(const a of this.coneLightSources){const r=t.getX(a.x),c=t.getY(a.y),f=a.directionAngle-a.innerAngle/2,o=r+t.toScale(a.distance)*Math.cos(f),n=c+t.toScale(a.distance)*Math.sin(f),$=e.createRadialGradient(t.getX(a.x),t.getY(a.y),0,t.getX(a.x),t.getY(a.y),t.toScale(a.distance));$.addColorStop(0,"rgba(255,255,255, 1)"),$.addColorStop(1,"rgba(255,255,255, 0)"),e.beginPath(),e.moveTo(r,c),e.lineTo(o,n),e.arc(r,c,t.toScale(a.distance),a.directionAngle-a.innerAngle/2,a.directionAngle+a.innerAngle/2,!1),e.lineTo(r,c),e.fillStyle=$,e.closePath(),e.fill()}for(const a of this.rectangleLightSources){const r=t.getX(a.x+a.width/2),c=t.getY(a.y+a.height/2),f=t.toScale(Math.max(a.width,a.height)/2),o=`rectangle_${f}_${a.intensity}`,n=this.getCachedGradient(e,o,(e=>{const t=e.createRadialGradient(0,0,0,0,0,f);return t.addColorStop(0,`rgba(255,255,255, ${a.intensity})`),t.addColorStop(1,"rgba(255,255,255, 0)"),t}));e.save(),e.translate(r,c),e.fillStyle=n,e.fillRect(-f/2-t.toScale(a.width/2),-f/2-t.toScale(a.height/2),t.toScale(a.width)+f,t.toScale(a.height)+f),e.restore()}e.fillStyle=`rgba(255,255,255,${this.lighting})`,e.fillRect(0,0,e.canvas.width,e.canvas.height)}}
class $7bda4ebfc6020375$var$DirectionalIndicator {
	update(e) {
		this.x = e.x + map.areas[e.area].x,
		this.y = e.y + map.areas[e.area].y
	}
	isDone() {
		return !1
	}
	render() {}
	constructor(e) {
		this.update(e)
	}
}
class $7bda4ebfc6020375$var$DeathTimerDirectionalIndicator extends $7bda4ebfc6020375$var$DirectionalIndicator {
	update(e) {
		super.update(e),
		this.deathTimer = e.deathTimer
	}
	isDone() {
		return -1 === this.deathTimer
	}
	render(e, t, a) {
		const area = map.areas[a.entity.area];
		if (this.x - area.x >= t.left && this.x - area.x <= t.right && this.y - area.y >= t.top && this.y - area.y <= t.bottom)
			return;
		const r = Math.abs(this.x - (a.entity.x + area.x))
		  , c = Math.abs(this.y - (a.entity.y + area.y));
		if (r > 3200)
			return;
		if (c > 480)
			return;
		const f = this.x - t.left
		  , o = this.y - t.top
		  , n = t.toGuiScale(10)
		  , $ = Math.max(Math.min(t.viewportSize.width - n, t.toGuiScale(f)), n)
		  , d = Math.max(Math.min(t.viewportSize.height - n, t.toGuiScale(o)), n)
		  , i = Math.atan2(t.viewportSize.height / 2 - t.toGuiScale(o), t.viewportSize.width / 2 - t.toGuiScale(f))
		  , s = $ + t.toGuiScale(25) * Math.cos(i)
		  , l = d + t.toGuiScale(25) * Math.sin(i);
		$f36928166e04fda7$export$2e2bcd8739ae039.arrow(e, s, l, $, d, t.toGuiScale(2), t.toGuiScale(15)),
		e.lineWidth = 1
	}
}
const controls = {
  DELETE_ZONE:0x2E,
  NEXT_AREA:0x27,
  PLAYTEST:0x73,
  PREVIOUS_AREA:0x25,
  TOGGLE_HITBOX:0x4F,
  CAM_LEFT:0x41,
  CAM_RIGHT:0x44,
  CAM_DOWN:0x53,
  CAM_UP:0x57,

  ACTION:0x20,
  CHAT:0x0D,
  DOWN:[0x28,0x53],
  FOCUS:0x10,
  LEFT:[0x25,0x41],
  RIGHT:[0x27,0x44],
  TOGGLE_AREA_INFO:0xBE,
  TOGGLE_CHAT:0x56,
  TOGGLE_HERO_INFO:0x48,
  TOGGLE_LEADERBOARD:0x42,
  TOGGLE_MAP:[0x09,0x4D],
  TOGGLE_MINIMAP_MODE:0x47,
  TOGGLE_UI:0x55,
  UP:[0x26,0x57],
  UPGRADE_SPEED:[0x31,0x61],
  UPGRADE_MAX_ENERGY:[0x32,0x62],
  UPGRADE_ENERGY_REGEN:[0x33,0x63],
  UPGRADE_ABILITY_ONE:[0x34,0x64],
  UPGRADE_ABILITY_TWO:[0x35,0x65],
  UPGRADE_ABILITY_THREE:[0x36,0x66],
  USE_ABILITY_ONE:[0x5A,0x4A],
  USE_ABILITY_TWO:[0x58,0x4B],
  USE_ABILITY_THREE:[0x43,0x4C],
};
var $d102378f4de5e1dc$export$2e2bcd8739ae039 = {"nested":{},"deferred":{},"files":{},"UNDEFINED_HEROSELECTION_SELECTION":0,"MAGMAX_SELECTION":1,"RIME_SELECTION":2,"MORFE_SELECTION":3,"AURORA_SELECTION":4,"NECRO_SELECTION":5,"BRUTE_SELECTION":6,"NEXUS_SELECTION":7,"SHADE_SELECTION":8,"EUCLID_SELECTION":9,"CHRONO_SELECTION":10,"REAPER_SELECTION":11,"RAMESES_SELECTION":12,"JOLT_SELECTION":13,"GHOUL_SELECTION":14,"CENT_SELECTION":15,"JOTUUN_SELECTION":16,"CANDY_SELECTION":17,"MIRAGE_SELECTION":18,"BOLDROCK_SELECTION":19,"GLOB_SELECTION":20,"MAGNO_SELECTION":21,"IGNIS_SELECTION":22,"STELLA_SELECTION":23,"VIOLA_SELECTION":24,"MORTUUS_SELECTION":25,"CYBOT_SELECTION":26,"ECHELON_SELECTION":27,"DEMONA_SELECTION":28,"STHENO_SELECTION":29,"KeyEvent":{"UNDEFINED_KEY":0,"KEY_DOWN":1,"KEY_UP":2},"UNDEFINED_KEY":0,"KEY_DOWN":1,"KEY_UP":2,"KeyType":{"UNDEFINED_KEYTYPE":0,"W_KEY":1,"A_KEY":2,"S_KEY":3,"D_KEY":4,"UP_KEY":5,"LEFT_KEY":6,"DOWN_KEY":7,"RIGHT_KEY":8,"FOCUS_KEY":9,"ABILITY_ONE_KEY":10,"ABILITY_TWO_KEY":11,"ABILITY_THREE_KEY":12,"ACTION_KEY":13,"UPGRADE_SPEED_KEY":14,"UPGRADE_MAX_ENERGY_KEY":15,"UPGRADE_ENERGY_REGEN_KEY":16,"UPGRADE_ABILITY_ONE_KEY":17,"UPGRADE_ABILITY_TWO_KEY":18,"UPGRADE_ABILITY_THREE_KEY":19},"UNDEFINED_KEYTYPE":0,"W_KEY":1,"A_KEY":2,"S_KEY":3,"D_KEY":4,"UP_KEY":5,"LEFT_KEY":6,"DOWN_KEY":7,"RIGHT_KEY":8,"FOCUS_KEY":9,"ABILITY_ONE_KEY":10,"ABILITY_TWO_KEY":11,"ABILITY_THREE_KEY":12,"ACTION_KEY":13,"UPGRADE_SPEED_KEY":14,"UPGRADE_MAX_ENERGY_KEY":15,"UPGRADE_ENERGY_REGEN_KEY":16,"UPGRADE_ABILITY_ONE_KEY":17,"UPGRADE_ABILITY_TWO_KEY":18,"UPGRADE_ABILITY_THREE_KEY":19,"ModToolsActionType":{"UNDEFINED_ACTIONTYPE":0,"MUTE":1,"KICK":2,"BAN":3},"UNDEFINED_ACTIONTYPE":0,"MUTE":1,"KICK":2,"BAN":3,"ClientPayload":{},"Key":{},"MouseDown":{},"ModToolsAction":{},"Settings":{},"EntityType":{"PLAYER":0,"PELLET":1,"WALL_ENEMY":2,"NORMAL_ENEMY":3,"HOMING_ENEMY":4,"DASHER_ENEMY":5,"SLOWING_ENEMY":6,"DRAINING_ENEMY":7,"REPELLING_ENEMY":8,"GRAVITY_ENEMY":9,"TURNING_ENEMY":10,"SIZING_ENEMY":11,"SNIPER_ENEMY":12,"FREEZING_ENEMY":13,"TELEPORTING_ENEMY":14,"WAVY_ENEMY":15,"ZIGZAG_ENEMY":16,"ZONING_ENEMY":17,"SPIRAL_ENEMY":18,"OSCILLATING_ENEMY":19,"SWITCH_ENEMY":20,"LIQUID_ENEMY":21,"ICICLE_ENEMY":22,"SLIPPERY_ENEMY":23,"ICE_SNIPER_ENEMY":24,"DISABLING_ENEMY":25,"EXPERIENCE_DRAIN_ENEMY":26,"ENLARGING_ENEMY":27,"SPEED_SNIPER_ENEMY":28,"REGEN_SNIPER_ENEMY":29,"RADIATING_BULLETS_ENEMY":30,"IMMUNE_ENEMY":31,"PUMPKIN_ENEMY":32,"TREE_ENEMY":33,"FROST_GIANT_ENEMY":34,"SNOWMAN_ENEMY":35,"CORROSIVE_ENEMY":36,"TOXIC_ENEMY":37,"CORROSIVE_SNIPER_ENEMY":38,"POISON_SNIPER_ENEMY":39,"MAGNETIC_REDUCTION_ENEMY":40,"MAGNETIC_NULLIFICATION_ENEMY":41,"POSITIVE_MAGNETIC_SNIPER_ENEMY":42,"NEGATIVE_MAGNETIC_SNIPER_ENEMY":43,"RESIDUE_ENEMY":44,"FIRE_TRAIL_ENEMY":45,"ICE_GHOST_ENEMY":46,"POISON_GHOST_ENEMY":47,"POSITIVE_MAGNETIC_GHOST_ENEMY":48,"NEGATIVE_MAGNETIC_GHOST_ENEMY":49,"WIND_GHOST_ENEMY":50,"LUNGING_ENEMY":51,"LAVA_ENEMY":52,"GRAVITY_GHOST_ENEMY":53,"REPELLING_GHOST_ENEMY":54,"STAR_ENEMY":55,"GRASS_ENEMY":56,"SEEDLING_ENEMY":57,"FLOWER_ENEMY":58,"DISABLING_GHOST_ENEMY":59,"GLOWY_ENEMY":60,"FIREFLY_ENEMY":61,"MIST_ENEMY":62,"PHANTOM_ENEMY":63,"CYBOT_ENEMY":64,"EABOT_ENEMY":65,"WABOT_ENEMY":66,"FIBOT_ENEMY":67,"AIBOT_ENEMY":68,"WIND_SNIPER_ENEMY":69,"SAND_ENEMY":70,"SANDROCK_ENEMY":71,"QUICKSAND_ENEMY":72,"CRUMBLING_ENEMY":73,"RADAR_ENEMY":74,"BARRIER_ENEMY":75,"SPEED_GHOST_ENEMY":76,"REGEN_GHOST_ENEMY":77,"CACTUS_ENEMY":78,"CYCLING_ENEMY":79,"ICBOT_ENEMY":80,"ELBOT_ENEMY":81,"PLBOT_ENEMY":82,"MEBOT_ENEMY":83,"LIBOT_ENEMY":84,"DABOT_ENEMY":85,"SPARKING_ENEMY":86,"THUNDERBOLT_ENEMY":87,"STATIC_ENEMY":88,"ELECTRICAL_ENEMY":89,"PREDICTION_SNIPER_ENEMY":90,"RING_SNIPER_ENEMY":91,"LEAD_SNIPER_ENEMY":92,"CHARGING_ENEMY":93,"REDUCING_ENEMY":94,"REVERSE_PROJECTILE":95,"MINIMIZE_PROJECTILE":96,"REANIMATE_PROJECTILE":97,"SNIPER_PROJECTILE":98,"VENGEANCE_PROJECTILE":99,"BLACK_HOLE_PROJECTILE":100,"ICE_SNIPER_PROJECTILE":101,"SNOWBALL_PROJECTILE":102,"SPEED_SNIPER_PROJECTILE":103,"REGEN_SNIPER_PROJECTILE":104,"RADIATING_BULLETS_PROJECTILE":105,"LATCH_PROJECTILE":106,"SPARK_PROJECTILE":107,"LIGHTNING_PROJECTILE":108,"SHADOW_PROJECTILE":109,"SWEET_TOOTH_ITEM":110,"OBSCURE_PROJECTILE":111,"LEAF_PROJECTILE":112,"FROST_GIANT_ICE_PROJECTILE":113,"ORBIT_PROJECTILE":114,"ENERGIZE_PROJECTILE":115,"CORROSIVE_SNIPER_PROJECTILE":116,"POISON_SNIPER_PROJECTILE":117,"POSITIVE_MAGNETIC_SNIPER_PROJECTILE":118,"NEGATIVE_MAGNETIC_SNIPER_PROJECTILE":119,"CRUMBLE_PROJECTILE":120,"RADIOACTIVE_GLOOP_PROJECTILE":121,"BLOOM_PROJECTILE":122,"POLLINATE_PROJECTILE":123,"SEEDLING_PROJECTILE":124,"FLOWER_PROJECTILE":125,"SOULSTONE_PROJECTILE":126,"GRAVE_PROJECTILE":127,"EABOT_PROJECTILE":128,"WABOT_PROJECTILE":129,"FIBOT_PROJECTILE":130,"AIBOT_PROJECTILE":131,"ELBOT_PROJECTILE":132,"LIBOT_PROJECTILE":133,"DABOT_PROJECTILE":134,"WIND_SNIPER_PROJECTILE":135,"RADAR_PROJECTILE":136,"ROBO_SCANNER_SNIPER_PROJECTILE":137,"ROBO_SCANNER_ICE_SNIPER_PROJECTILE":138,"ROBO_SCANNER_SPEED_SNIPER_PROJECTILE":139,"ROBO_SCANNER_REGEN_SNIPER_PROJECTILE":140,"ROBO_SCANNER_RADIATING_BULLETS_PROJECTILE":141,"ROBO_SCANNER_LEAF_PROJECTILE":142,"ROBO_SCANNER_CORROSIVE_SNIPER_PROJECTILE":143,"ROBO_SCANNER_POISON_SNIPER_PROJECTILE":144,"ROBO_SCANNER_POSITIVE_SNIPER_PROJECTILE":145,"ROBO_SCANNER_NEGATIVE_SNIPER_PROJECTILE":146,"ROBO_SCANNER_WIND_SNIPER_PROJECTILE":147,"ROBO_SCANNER_RADAR_PROJECTILE":148,"ROBO_SCANNER_PREDICTION_SNIPER_PROJECTILE":149,"ROBO_SCANNER_LEAD_SNIPER_PROJECTILE":150,"ECHELON_PROJECTILE":151,"IGNITION_SPARK_PROJECTILE":152,"INCINERATE_PROJECTILE":153,"SPARKING_ENEMY_PROJECTILE":154,"ELECTRICAL_ENEMY_PROJECTILE":155,"PREDICTION_SNIPER_PROJECTILE":156,"RING_SNIPER_PROJECTILE":157,"CYBOT_RING_PROJECTILE":158,"LEAD_SNIPER_PROJECTILE":159,"PETRIFY_PROJECTILE":160,"ICTOS_PROJECTILE":161,"WALL":162,"BARRIER_DOME":163,"STREAM_PATH":164,"FLASHLIGHT_ITEM":165,"TORCH":166,"LIGHT_REGION":167},"PLAYER":0,"PELLET":1,"WALL_ENEMY":2,"NORMAL_ENEMY":3,"HOMING_ENEMY":4,"DASHER_ENEMY":5,"SLOWING_ENEMY":6,"DRAINING_ENEMY":7,"REPELLING_ENEMY":8,"GRAVITY_ENEMY":9,"TURNING_ENEMY":10,"SIZING_ENEMY":11,"SNIPER_ENEMY":12,"FREEZING_ENEMY":13,"TELEPORTING_ENEMY":14,"WAVY_ENEMY":15,"ZIGZAG_ENEMY":16,"ZONING_ENEMY":17,"SPIRAL_ENEMY":18,"OSCILLATING_ENEMY":19,"SWITCH_ENEMY":20,"LIQUID_ENEMY":21,"ICICLE_ENEMY":22,"SLIPPERY_ENEMY":23,"ICE_SNIPER_ENEMY":24,"DISABLING_ENEMY":25,"EXPERIENCE_DRAIN_ENEMY":26,"ENLARGING_ENEMY":27,"SPEED_SNIPER_ENEMY":28,"REGEN_SNIPER_ENEMY":29,"RADIATING_BULLETS_ENEMY":30,"IMMUNE_ENEMY":31,"PUMPKIN_ENEMY":32,"TREE_ENEMY":33,"FROST_GIANT_ENEMY":34,"SNOWMAN_ENEMY":35,"CORROSIVE_ENEMY":36,"TOXIC_ENEMY":37,"CORROSIVE_SNIPER_ENEMY":38,"POISON_SNIPER_ENEMY":39,"MAGNETIC_REDUCTION_ENEMY":40,"MAGNETIC_NULLIFICATION_ENEMY":41,"POSITIVE_MAGNETIC_SNIPER_ENEMY":42,"NEGATIVE_MAGNETIC_SNIPER_ENEMY":43,"RESIDUE_ENEMY":44,"FIRE_TRAIL_ENEMY":45,"ICE_GHOST_ENEMY":46,"POISON_GHOST_ENEMY":47,"POSITIVE_MAGNETIC_GHOST_ENEMY":48,"NEGATIVE_MAGNETIC_GHOST_ENEMY":49,"WIND_GHOST_ENEMY":50,"LUNGING_ENEMY":51,"LAVA_ENEMY":52,"GRAVITY_GHOST_ENEMY":53,"REPELLING_GHOST_ENEMY":54,"STAR_ENEMY":55,"GRASS_ENEMY":56,"SEEDLING_ENEMY":57,"FLOWER_ENEMY":58,"DISABLING_GHOST_ENEMY":59,"GLOWY_ENEMY":60,"FIREFLY_ENEMY":61,"MIST_ENEMY":62,"PHANTOM_ENEMY":63,"CYBOT_ENEMY":64,"EABOT_ENEMY":65,"WABOT_ENEMY":66,"FIBOT_ENEMY":67,"AIBOT_ENEMY":68,"WIND_SNIPER_ENEMY":69,"SAND_ENEMY":70,"SANDROCK_ENEMY":71,"QUICKSAND_ENEMY":72,"CRUMBLING_ENEMY":73,"RADAR_ENEMY":74,"BARRIER_ENEMY":75,"SPEED_GHOST_ENEMY":76,"REGEN_GHOST_ENEMY":77,"CACTUS_ENEMY":78,"CYCLING_ENEMY":79,"ICBOT_ENEMY":80,"ELBOT_ENEMY":81,"PLBOT_ENEMY":82,"MEBOT_ENEMY":83,"LIBOT_ENEMY":84,"DABOT_ENEMY":85,"SPARKING_ENEMY":86,"THUNDERBOLT_ENEMY":87,"STATIC_ENEMY":88,"ELECTRICAL_ENEMY":89,"PREDICTION_SNIPER_ENEMY":90,"RING_SNIPER_ENEMY":91,"LEAD_SNIPER_ENEMY":92,"CHARGING_ENEMY":93,"REDUCING_ENEMY":94,"REVERSE_PROJECTILE":95,"MINIMIZE_PROJECTILE":96,"REANIMATE_PROJECTILE":97,"SNIPER_PROJECTILE":98,"VENGEANCE_PROJECTILE":99,"BLACK_HOLE_PROJECTILE":100,"ICE_SNIPER_PROJECTILE":101,"SNOWBALL_PROJECTILE":102,"SPEED_SNIPER_PROJECTILE":103,"REGEN_SNIPER_PROJECTILE":104,"RADIATING_BULLETS_PROJECTILE":105,"LATCH_PROJECTILE":106,"SPARK_PROJECTILE":107,"LIGHTNING_PROJECTILE":108,"SHADOW_PROJECTILE":109,"SWEET_TOOTH_ITEM":110,"OBSCURE_PROJECTILE":111,"LEAF_PROJECTILE":112,"FROST_GIANT_ICE_PROJECTILE":113,"ORBIT_PROJECTILE":114,"ENERGIZE_PROJECTILE":115,"CORROSIVE_SNIPER_PROJECTILE":116,"POISON_SNIPER_PROJECTILE":117,"POSITIVE_MAGNETIC_SNIPER_PROJECTILE":118,"NEGATIVE_MAGNETIC_SNIPER_PROJECTILE":119,"CRUMBLE_PROJECTILE":120,"RADIOACTIVE_GLOOP_PROJECTILE":121,"BLOOM_PROJECTILE":122,"POLLINATE_PROJECTILE":123,"SEEDLING_PROJECTILE":124,"FLOWER_PROJECTILE":125,"SOULSTONE_PROJECTILE":126,"GRAVE_PROJECTILE":127,"EABOT_PROJECTILE":128,"WABOT_PROJECTILE":129,"FIBOT_PROJECTILE":130,"AIBOT_PROJECTILE":131,"ELBOT_PROJECTILE":132,"LIBOT_PROJECTILE":133,"DABOT_PROJECTILE":134,"WIND_SNIPER_PROJECTILE":135,"RADAR_PROJECTILE":136,"ROBO_SCANNER_SNIPER_PROJECTILE":137,"ROBO_SCANNER_ICE_SNIPER_PROJECTILE":138,"ROBO_SCANNER_SPEED_SNIPER_PROJECTILE":139,"ROBO_SCANNER_REGEN_SNIPER_PROJECTILE":140,"ROBO_SCANNER_RADIATING_BULLETS_PROJECTILE":141,"ROBO_SCANNER_LEAF_PROJECTILE":142,"ROBO_SCANNER_CORROSIVE_SNIPER_PROJECTILE":143,"ROBO_SCANNER_POISON_SNIPER_PROJECTILE":144,"ROBO_SCANNER_POSITIVE_SNIPER_PROJECTILE":145,"ROBO_SCANNER_NEGATIVE_SNIPER_PROJECTILE":146,"ROBO_SCANNER_WIND_SNIPER_PROJECTILE":147,"ROBO_SCANNER_RADAR_PROJECTILE":148,"ROBO_SCANNER_PREDICTION_SNIPER_PROJECTILE":149,"ROBO_SCANNER_LEAD_SNIPER_PROJECTILE":150,"ECHELON_PROJECTILE":151,"IGNITION_SPARK_PROJECTILE":152,"INCINERATE_PROJECTILE":153,"SPARKING_ENEMY_PROJECTILE":154,"ELECTRICAL_ENEMY_PROJECTILE":155,"PREDICTION_SNIPER_PROJECTILE":156,"RING_SNIPER_PROJECTILE":157,"CYBOT_RING_PROJECTILE":158,"LEAD_SNIPER_PROJECTILE":159,"PETRIFY_PROJECTILE":160,"ICTOS_PROJECTILE":161,"WALL":162,"BARRIER_DOME":163,"STREAM_PATH":164,"FLASHLIGHT_ITEM":165,"TORCH":166,"LIGHT_REGION":167,"HeroType":{"MAGMAX":0,"RIME":1,"MORFE":2,"AURORA":3,"NECRO":4,"NEXUS":5,"BRUTE":6,"SHADE":7,"EUCLID":8,"CHRONO":9,"REAPER":10,"RAMESES":11,"JOLT":12,"GHOUL":13,"CENT":14,"JOTUUN":15,"CANDY":16,"MIRAGE":17,"BOLDROCK":18,"GLOB":19,"MAGNO":20,"IGNIS":21,"STELLA":22,"VIOLA":23,"MORTUUS":24,"CYBOT":25,"ECHELON":26,"DEMONA":27,"STHENO":28},"MAGMAX":0,"RIME":1,"MORFE":2,"AURORA":3,"NECRO":4,"NEXUS":5,"BRUTE":6,"SHADE":7,"EUCLID":8,"CHRONO":9,"REAPER":10,"RAMESES":11,"JOLT":12,"GHOUL":13,"CENT":14,"JOTUUN":15,"CANDY":16,"MIRAGE":17,"BOLDROCK":18,"GLOB":19,"MAGNO":20,"IGNIS":21,"STELLA":22,"VIOLA":23,"MORTUUS":24,"CYBOT":25,"ECHELON":26,"DEMONA":27,"STHENO":28,"AbilityType":{"FLOW":0,"HARDEN":1,"WARP":2,"PARALYSIS":3,"REVERSE":4,"MINIMIZE":5,"DISTORT":6,"ENERGIZE":7,"RESURRECTION":8,"REANIMATE":9,"BARRIER":10,"STREAM":11,"STOMP":12,"VIGOR":13,"NIGHT":14,"VENGEANCE":15,"ORBIT":16,"BLACK_HOLE":17,"BACKTRACK":18,"REWIND":19,"ATONEMENT":20,"DEPART":21,"LATCH":22,"BANDAGES":23,"SPARK":24,"LIGHTNING":25,"CHARGE":26,"SHRIEK":27,"SHADOW":28,"FUSION":29,"MORTAR":30,"SNOWBALL":31,"FLASHLIGHT":32,"DECAY":33,"SHATTER":34,"SUGAR_RUSH":35,"SWEET_TOOTH":36,"SHIFT":37,"OBSCURE":38,"MAGNETISM_DOWN":39,"MAGNETISM_UP":40,"CRUMBLE":41,"EARTHQUAKE":42,"RADIOACTIVE_GLOOP":43,"STICKY_COAT":44,"MAGNETIZE":45,"ATTRACT":46,"REPEL":47,"WILDFIRE":48,"EMBER":49,"WORMHOLE":50,"SUPERNOVA":51,"BLOOM":52,"POLLINATE":53,"SOULSTONE":54,"GRAVEKEEPER":55,"MYSTERY_KEYCARD":56,"NETWORK_CONTROL":57,"ROBO_SCANNER":58,"SLOWING":59,"DRAINING":60,"GRAVITY":61,"REPELLING":62,"FREEZING":63,"SLIPPERY":64,"DISABLING":65,"ENLARGING":66,"TOXIC":67,"MAGNETIC_REDUCTION":68,"MAGNETIC_NULLIFICATION":69,"LAVA":70,"QUICKSAND":71,"RADAR":72,"SHIELD":73,"SNIPER":74,"ICE_SNIPER":75,"SPEED_SNIPER":76,"REGEN_SNIPER":77,"RADIATING_BULLETS":78,"TREE":79,"CORROSIVE_SNIPER":80,"POISON_SNIPER":81,"POSITIVE_SNIPER":82,"NEGATIVE_SNIPER":83,"WIND_SNIPER":84,"PREDICTION_SNIPER":85,"LEAD_SNIPER":86,"REDUCING":87,"ECHO":88,"REDUCE":89,"IGNITION":90,"INCINERATE":91,"LANTERN":92,"PETRIFY":93,"ICTOS":94,"MOUSE_CONTROL":95},"FLOW":0,"HARDEN":1,"WARP":2,"PARALYSIS":3,"REVERSE":4,"MINIMIZE":5,"DISTORT":6,"ENERGIZE":7,"RESURRECTION":8,"REANIMATE":9,"BARRIER":10,"STREAM":11,"STOMP":12,"VIGOR":13,"NIGHT":14,"VENGEANCE":15,"ORBIT":16,"BLACK_HOLE":17,"BACKTRACK":18,"REWIND":19,"ATONEMENT":20,"DEPART":21,"LATCH":22,"BANDAGES":23,"SPARK":24,"LIGHTNING":25,"CHARGE":26,"SHRIEK":27,"SHADOW":28,"FUSION":29,"MORTAR":30,"SNOWBALL":31,"FLASHLIGHT":32,"DECAY":33,"SHATTER":34,"SUGAR_RUSH":35,"SWEET_TOOTH":36,"SHIFT":37,"OBSCURE":38,"MAGNETISM_DOWN":39,"MAGNETISM_UP":40,"CRUMBLE":41,"EARTHQUAKE":42,"RADIOACTIVE_GLOOP":43,"STICKY_COAT":44,"MAGNETIZE":45,"ATTRACT":46,"REPEL":47,"WILDFIRE":48,"EMBER":49,"WORMHOLE":50,"SUPERNOVA":51,"BLOOM":52,"POLLINATE":53,"SOULSTONE":54,"GRAVEKEEPER":55,"MYSTERY_KEYCARD":56,"NETWORK_CONTROL":57,"ROBO_SCANNER":58,"SLOWING":59,"DRAINING":60,"GRAVITY":61,"REPELLING":62,"FREEZING":63,"SLIPPERY":64,"DISABLING":65,"ENLARGING":66,"TOXIC":67,"MAGNETIC_REDUCTION":68,"MAGNETIC_NULLIFICATION":69,"LAVA":70,"QUICKSAND":71,"RADAR":72,"SHIELD":73,"SNIPER":74,"ICE_SNIPER":75,"SPEED_SNIPER":76,"REGEN_SNIPER":77,"RADIATING_BULLETS":78,"TREE":79,"CORROSIVE_SNIPER":80,"POISON_SNIPER":81,"POSITIVE_SNIPER":82,"NEGATIVE_SNIPER":83,"WIND_SNIPER":84,"PREDICTION_SNIPER":85,"LEAD_SNIPER":86,"REDUCING":87,"ECHO":88,"REDUCE":89,"IGNITION":90,"INCINERATE":91,"LANTERN":92,"PETRIFY":93,"ICTOS":94,"MOUSE_CONTROL":95,"EffectType":{"FLOW_EFFECT":0,"HARDEN_EFFECT":1,"PARALYSIS_EFFECT":2,"DISTORT_EFFECT":3,"ENERGIZE_EFFECT":4,"STOMP_EFFECT":5,"REWIND_EFFECT":6,"ATONEMENT_EFFECT":7,"ORBIT_EFFECT":8,"CHARGE_EFFECT":9,"SHRIEK_EFFECT":10,"DECAY_EFFECT":11,"SHATTER_EFFECT":12,"SUGAR_RUSH_EFFECT":13,"EARTHQUAKE_EFFECT":14,"STICKY_COAT_EFFECT":15,"MAGNETIZE_EFFECT":16,"WILDFIRE_EFFECT":17,"SUPERNOVA_EFFECT":18,"NETWORK_CONTROL_EFFECT":19,"GRAVEKEEPER_EFFECT":20,"SLOWING_EFFECT":21,"DRAINING_EFFECT":22,"GRAVITY_EFFECT":23,"REPELLING_EFFECT":24,"FREEZING_EFFECT":25,"SLIPPERY_EFFECT":26,"DISABLING_EFFECT":27,"ENLARGING_EFFECT":28,"TOXIC_EFFECT":29,"MAGNETIC_REDUCTION_EFFECT":30,"MAGNETIC_NULLIFICATION_EFFECT":31,"LAVA_EFFECT":32,"QUICKSAND_EFFECT":33,"RADAR_EFFECT":34,"SHIELD_EFFECT":35,"REDUCING_EFFECT":36,"REDUCE_EFFECT":37,"ICTOS_EFFECT":38,"ENEMY_SLOWING_EFFECT":39,"ENEMY_DRAINING_EFFECT":40,"ENEMY_GRAVITY_EFFECT":41,"ENEMY_REPELLING_EFFECT":42,"ENEMY_FREEZING_EFFECT":43,"ENEMY_SLIPPERY_EFFECT":44,"ENEMY_DISABLING_EFFECT":45,"ENEMY_EXPERIENCE_DRAIN_EFFECT":46,"ENEMY_ENLARGING_EFFECT":47,"ENEMY_TOXIC_EFFECT":48,"ENEMY_MAGNETIC_REDUCTION_EFFECT":49,"ENEMY_MAGNETIC_NULLIFICATION_EFFECT":50,"ENEMY_LAVA_EFFECT":51,"ENEMY_CYBOT_EFFECT":52,"ENEMY_CYBOT_SHIELD_EFFECT":53,"ENEMY_QUICKSAND_EFFECT":54,"ENEMY_RADAR_EFFECT":55,"ENEMY_BARRIER_EFFECT":56,"ENEMY_REDUCING_EFFECT":57,"FLASHLIGHT_EFFECT":58,"LANTERN_EFFECT":59},"FLOW_EFFECT":0,"HARDEN_EFFECT":1,"PARALYSIS_EFFECT":2,"DISTORT_EFFECT":3,"ENERGIZE_EFFECT":4,"STOMP_EFFECT":5,"REWIND_EFFECT":6,"ATONEMENT_EFFECT":7,"ORBIT_EFFECT":8,"CHARGE_EFFECT":9,"SHRIEK_EFFECT":10,"DECAY_EFFECT":11,"SHATTER_EFFECT":12,"SUGAR_RUSH_EFFECT":13,"EARTHQUAKE_EFFECT":14,"STICKY_COAT_EFFECT":15,"MAGNETIZE_EFFECT":16,"WILDFIRE_EFFECT":17,"SUPERNOVA_EFFECT":18,"NETWORK_CONTROL_EFFECT":19,"GRAVEKEEPER_EFFECT":20,"SLOWING_EFFECT":21,"DRAINING_EFFECT":22,"GRAVITY_EFFECT":23,"REPELLING_EFFECT":24,"FREEZING_EFFECT":25,"SLIPPERY_EFFECT":26,"DISABLING_EFFECT":27,"ENLARGING_EFFECT":28,"TOXIC_EFFECT":29,"MAGNETIC_REDUCTION_EFFECT":30,"MAGNETIC_NULLIFICATION_EFFECT":31,"LAVA_EFFECT":32,"QUICKSAND_EFFECT":33,"RADAR_EFFECT":34,"SHIELD_EFFECT":35,"REDUCING_EFFECT":36,"REDUCE_EFFECT":37,"ICTOS_EFFECT":38,"ENEMY_SLOWING_EFFECT":39,"ENEMY_DRAINING_EFFECT":40,"ENEMY_GRAVITY_EFFECT":41,"ENEMY_REPELLING_EFFECT":42,"ENEMY_FREEZING_EFFECT":43,"ENEMY_SLIPPERY_EFFECT":44,"ENEMY_DISABLING_EFFECT":45,"ENEMY_EXPERIENCE_DRAIN_EFFECT":46,"ENEMY_ENLARGING_EFFECT":47,"ENEMY_TOXIC_EFFECT":48,"ENEMY_MAGNETIC_REDUCTION_EFFECT":49,"ENEMY_MAGNETIC_NULLIFICATION_EFFECT":50,"ENEMY_LAVA_EFFECT":51,"ENEMY_CYBOT_EFFECT":52,"ENEMY_CYBOT_SHIELD_EFFECT":53,"ENEMY_QUICKSAND_EFFECT":54,"ENEMY_RADAR_EFFECT":55,"ENEMY_BARRIER_EFFECT":56,"ENEMY_REDUCING_EFFECT":57,"FLASHLIGHT_EFFECT":58,"LANTERN_EFFECT":59,"ZoneType":{"ACTIVE_ZONE":0,"SAFE_ZONE":1,"EXIT_ZONE":2,"TELEPORT_ZONE":3,"VICTORY_ZONE":4,"REMOVAL_ZONE":5,"DUMMY_ZONE":6},"ACTIVE_ZONE":0,"SAFE_ZONE":1,"EXIT_ZONE":2,"TELEPORT_ZONE":3,"VICTORY_ZONE":4,"REMOVAL_ZONE":5,"DUMMY_ZONE":6,"TextureType":{"NORMAL_TEXTURE":0,"LEAVES_TEXTURE":1,"WOODEN_TEXTURE":2,"BAGUETTE_TEXTURE":3,"ICE_TEXTURE":4},"NORMAL_TEXTURE":0,"LEAVES_TEXTURE":1,"WOODEN_TEXTURE":2,"BAGUETTE_TEXTURE":3,"ICE_TEXTURE":4,"Area":{},"Map":{},"Zone":{},"Entity":{},"Effect":{},"Ability":{},"Chat":{},"ChatMessageStyle":{"MESSAGE_STYLE_NORMAL":0,"MESSAGE_STYLE_JR_MOD":1,"MESSAGE_STYLE_MOD":2,"MESSAGE_STYLE_SR_MOD":3,"MESSAGE_STYLE_HEAD_MOD":4,"MESSAGE_STYLE_DEV":5,"MESSAGE_STYLE_YOUTUBER":6,"MESSAGE_STYLE_STREAMER":7,"MESSAGE_STYLE_SERVER_WARNING":8,"MESSAGE_STYLE_SERVER_INFO":9,"MESSAGE_STYLE_PRIVATE_MESSAGE":10},"MESSAGE_STYLE_NORMAL":0,"MESSAGE_STYLE_JR_MOD":1,"MESSAGE_STYLE_MOD":2,"MESSAGE_STYLE_SR_MOD":3,"MESSAGE_STYLE_HEAD_MOD":4,"MESSAGE_STYLE_DEV":5,"MESSAGE_STYLE_YOUTUBER":6,"MESSAGE_STYLE_STREAMER":7,"MESSAGE_STYLE_SERVER_WARNING":8,"MESSAGE_STYLE_SERVER_INFO":9,"MESSAGE_STYLE_PRIVATE_MESSAGE":10,"ChatMessage":{},"FramePayload":{}}
const $e728d5a493f33528$export$69dd9a529c505ede = e=>[{
	name: "magmax",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.MAGMAX_SELECTION,
	abilityOneName: "Flow",
	abilityTwoName: "Harden",
	unlockText: "",
	locked: !1,
	level: 0,
	backgroundColor: "#470000",
	hoverBackgroundColor: "#300000",
	shadowColor: "#ff5454",
	textColor: "#ffa8a8"
}, {
	name: "rime",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.RIME_SELECTION,
	abilityOneName: "Warp",
	abilityTwoName: "Paralysis",
	unlockText: "",
	locked: !1,
	level: 0,
	backgroundColor: "#000e47",
	hoverBackgroundColor: "#00092d",
	shadowColor: "#a8c2ff",
	textColor: "#b2c3ff"
}, {
	name: "morfe",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.MORFE_SELECTION,
	abilityOneName: "Reverse",
	abilityTwoName: "Minimize",
	unlockText: "Defeat Central Core Area 10",
	locked: e["Central Core"] < 10 && e["Central Core Hard"] < 10 && e["Catastrophic Core"] < 10,
	level: 0,
	backgroundColor: "#014700",
	hoverBackgroundColor: "#002d04",
	shadowColor: "#54ff84",
	textColor: "#91ff91"
}, {
	name: "aurora",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.AURORA_SELECTION,
	abilityOneName: "Distort",
	abilityTwoName: "Energize",
	unlockText: "Defeat Central Core Area 20",
	locked: e["Central Core"] < 20 && e["Central Core Hard"] < 20 && e["Catastrophic Core"] < 20,
	level: 0,
	backgroundColor: "#472900",
	hoverBackgroundColor: "#2d1a00",
	shadowColor: "#ff9d47",
	textColor: "#ffc666"
}, {
	name: "necro",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.NECRO_SELECTION,
	abilityOneName: "Resurrection",
	abilityTwoName: "Reanimate",
	unlockText: "Defeat Central Core Area 40",
	locked: e["Central Core"] < 40 && e["Central Core Hard"] < 40 && e["Catastrophic Core"] < 40,
	level: 0,
	backgroundColor: "#3d0047",
	hoverBackgroundColor: "#26002d",
	shadowColor: "#ec60ff",
	textColor: "#fb91ff"
}, {
	name: "brute",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.BRUTE_SELECTION,
	abilityOneName: "Stomp",
	abilityTwoName: "Vigor",
	unlockText: "Defeat Humongous Hollow Area 40",
	locked: e["Humongous Hollow"] < 40 && e["Humongous Hollow Hard"] < 40,
	level: 0,
	backgroundColor: "#4f2400",
	hoverBackgroundColor: "#2d1400",
	shadowColor: "#bc5800",
	textColor: "#e5be99"
}, {
	name: "nexus",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.NEXUS_SELECTION,
	abilityOneName: "Barrier",
	abilityTwoName: "Stream",
	unlockText: "Defeat Glacial Gorge Area 40",
	locked: e["Glacial Gorge"] < 40 && e["Glacial Gorge Hard"] < 40,
	level: 0,
	backgroundColor: "#00473e",
	hoverBackgroundColor: "#002d28",
	shadowColor: "#29FFC6",
	textColor: "#91fdff"
}, {
	name: "shade",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.SHADE_SELECTION,
	abilityOneName: "Night",
	abilityTwoName: "Vengeance",
	unlockText: "Defeat Vicious Valley Area 40",
	locked: e["Vicious Valley"] < 40 && e["Vicious Valley Hard"] < 40,
	level: 0,
	backgroundColor: "#3f3131",
	hoverBackgroundColor: "#2d2222",
	shadowColor: "#bc9393",
	textColor: "#e5bcbc"
}, {
	name: "euclid",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.EUCLID_SELECTION,
	abilityOneName: "Black Hole",
	abilityTwoName: "Orbit",
	unlockText: "Defeat Elite Expanse Area 40",
	locked: e["Elite Expanse"] < 40,
	level: 0,
	backgroundColor: "#2d2531",
	hoverBackgroundColor: "#201a24",
	shadowColor: "#ae89b9",
	textColor: "#dbadec"
}, {
	name: "chrono",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.CHRONO_SELECTION,
	abilityOneName: "Backtrack",
	abilityTwoName: "Rewind",
	unlockText: "Defeat Monumental Migration 120",
	locked: e["Monumental Migration"] < 120 && e["Monumental Migration Hard"] < 120,
	level: 0,
	backgroundColor: "#004c31",
	hoverBackgroundColor: "#03331b",
	shadowColor: "#00d885",
	textColor: "#91ffc9"
}, {
	name: "reaper",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.REAPER_SELECTION,
	abilityOneName: "Atonement",
	abilityTwoName: "Depart",
	unlockText: "Defeat Dangerous District 40",
	locked: e["Dangerous District"] < 40 && e["Dangerous District Hard"] < 40,
	level: 0,
	backgroundColor: "#212830",
	hoverBackgroundColor: "#2b3244",
	shadowColor: "#c6d5ef",
	textColor: "#91bbff"
}, {
	name: "rameses",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.RAMESES_SELECTION,
	abilityOneName: "Bandages",
	abilityTwoName: "Latch",
	unlockText: "Find Rameses' Chamber in Peculiar Pyramid",
	locked: e["Peculiar Pyramid"] < 31 && e["Peculiar Pyramid Hard"] < 31,
	level: 0,
	backgroundColor: "#5c6030",
	hoverBackgroundColor: "#40442b",
	shadowColor: "#c8cc5d",
	textColor: "#f0ff91"
}, {
	name: "jolt",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.JOLT_SELECTION,
	abilityOneName: "Spark",
	abilityTwoName: "Charge",
	unlockText: "Defeat Wacky Wonderland 40",
	locked: e["Wacky Wonderland"] < 40,
	level: 0,
	backgroundColor: "#969609",
	hoverBackgroundColor: "#5e5e11",
	shadowColor: "#ffff1c",
	textColor: "#ffff68"
}, {
	name: "ghoul",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.GHOUL_SELECTION,
	abilityOneName: "Shriek",
	abilityTwoName: "Shadow",
	unlockText: "Travel through the Occult",
	locked: e["Ominous Occult"] < 16 && e["Ominous Occult Hard"] < 16,
	level: 0,
	backgroundColor: "#63838e",
	hoverBackgroundColor: "#455b63",
	shadowColor: "#d5e9f2",
	textColor: "#c5dbe5"
}, {
	name: "cent",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.CENT_SELECTION,
	abilityOneName: "Fusion",
	abilityTwoName: "Mortar",
	unlockText: "Defeat Quiet Quarry 40",
	locked: e["Quiet Quarry"] < 40 && e["Quiet Quarry Hard"] < 40,
	level: 0,
	backgroundColor: "#969696",
	hoverBackgroundColor: "#595959",
	shadowColor: "#e8e8e8",
	textColor: "#dddddd"
}, {
	name: "jötunn",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.JOTUUN_SELECTION,
	abilityOneName: "Decay",
	abilityTwoName: "Shatter",
	unlockText: "Defeat Frozen Fjord 40",
	locked: e["Frozen Fjord"] < 40 && e["Frozen Fjord Hard"] < 40,
	level: 0,
	backgroundColor: "#173b47",
	hoverBackgroundColor: "#043147",
	shadowColor: "#4fcbff",
	textColor: "#a8cfff"
}, {
	name: "candy",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.CANDY_SELECTION,
	abilityOneName: "Sugar Rush",
	abilityTwoName: "Sweet Tooth",
	unlockText: "Defeat Wacky Wonderland 80",
	locked: e["Wacky Wonderland"] < 80,
	level: 0,
	backgroundColor: "#633149",
	hoverBackgroundColor: "#381b29",
	shadowColor: "#ffb2d7",
	textColor: "#ffcce4"
}, {
	name: "mirage",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.MIRAGE_SELECTION,
	abilityOneName: "Shift",
	abilityTwoName: "Obscure",
	unlockText: "Defeat Restless Ridge 40",
	locked: e["Restless Ridge"] < 43 && e["Restless Ridge Hard"] < 48,
	level: 0,
	backgroundColor: "#000963",
	hoverBackgroundColor: "#00033d",
	shadowColor: "#4e59db",
	textColor: "#6e77e5"
}, {
	name: "boldrock",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.BOLDROCK_SELECTION,
	abilityOneName: "Crumble",
	abilityTwoName: "Earthquake",
	unlockText: "Defeat Shifting Sands 40 through the Peculiar Pyramid",
	locked: e["Shifting Sands"] < 47,
	level: 0,
	backgroundColor: "#40341b",
	hoverBackgroundColor: "#2e2513",
	shadowColor: "#baa577",
	textColor: "#b8a784"
}, {
	name: "glob",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.GLOB_SELECTION,
	abilityOneName: "Radioactive Gloop",
	abilityTwoName: "Sticky Coat",
	unlockText: "Defeat Toxic Territory 20",
	locked: e["Toxic Territory"] < 20 && e["Toxic Territory Hard"] < 20,
	level: 0,
	backgroundColor: "#144700",
	hoverBackgroundColor: "#143000",
	shadowColor: "#42b033",
	textColor: "#70ad68"
}, {
	name: "magno",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.MAGNO_SELECTION,
	abilityOneName: "Magnetize",
	abilityTwoName: "Attract",
	unlockText: "Defeat Magnetic Monopole 28",
	locked: e["Magnetic Monopole"] < 36 && e["Magnetic Monopole Hard"] < 36,
	level: 0,
	backgroundColor: "#77052f",
	hoverBackgroundColor: "#570322",
	shadowColor: "#ff4ba8",
	textColor: "#ff5bb0"
}, {
	name: "ignis",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.IGNIS_SELECTION,
	abilityOneName: "Wildfire",
	abilityTwoName: "Ember",
	unlockText: "Defeat Burning Bunker Level 1",
	locked: e["Burning Bunker"] < 36 && e["Burning Bunker Hard"] < 36,
	level: 0,
	backgroundColor: "#41190a",
	hoverBackgroundColor: "#2e1207",
	shadowColor: "#dc754d",
	textColor: "#da825f"
}, {
	name: "stella",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.STELLA_SELECTION,
	abilityOneName: "Wormhole",
	abilityTwoName: "Supernova",
	unlockText: "Defeat Elite Expanse Hard 40",
	locked: e["Elite Expanse Hard"] < 40,
	level: 0,
	backgroundColor: "#b8b467",
	hoverBackgroundColor: "#7a7852",
	shadowColor: "#fffcba",
	textColor: "#fffdd1"
}, {
	name: "viola",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.VIOLA_SELECTION,
	abilityOneName: "Bloom",
	abilityTwoName: "Pollinate",
	unlockText: "Defeat Grand Garden 28",
	locked: e["Grand Garden"] < 28 && e["Grand Garden Hard"] < 28,
	level: 0,
	backgroundColor: "#594104",
	hoverBackgroundColor: "#473404",
	shadowColor: "#f0ba30",
	textColor: "#edbe45"
}, {
	name: "mortuus",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.MORTUUS_SELECTION,
	abilityOneName: "Soulstone",
	abilityTwoName: "Gravekeeper",
	unlockText: "Found in the dungeon of the Mysterious Mansion through the Haunted Halls",
	locked: e["Mysterious Mansion"] < 62,
	level: 0,
	backgroundColor: "#294008",
	hoverBackgroundColor: "#1e2e06",
	shadowColor: "#8dc934",
	textColor: "#8fbf47"
}, {
	name: "echelon",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.ECHELON_SELECTION,
	abilityOneName: "Echo",
	abilityTwoName: "Reduce",
	unlockText: "Defeat Endless Echo 120",
	locked: e["Endless Echo"] < 120 && e["Endless Echo Hard"] < 120,
	level: 0,
	backgroundColor: "#095670",
	hoverBackgroundColor: "#054459",
	shadowColor: "#1ea8d6",
	textColor: "#7ed5f2"
}, {
	name: "demona",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.DEMONA_SELECTION,
	abilityOneName: "Ignition",
	abilityTwoName: "Incinerate",
	unlockText: "Defeat all 9 circles in Infinite Inferno",
	locked: e["Infinite Inferno"] < 38,
	level: 0,
	backgroundColor: "#531f6e",
	hoverBackgroundColor: "#38154a",
	shadowColor: "#9759b5",
	textColor: "#9759b5"
}, {
	name: "stheno",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.STHENO_SELECTION,
	abilityOneName: "Petrify",
	abilityTwoName: "Ictos",
	unlockText: "Travel to the end of the Coupled Corridors through the Mysterious Mansion",
	locked: e["Coupled Corridors"] < 64,
	level: 0,
	backgroundColor: "#46375c",
	hoverBackgroundColor: "#372b4a",
	shadowColor: "#cfa6ec",
	textColor: "#cfa6ec"
}, {
	name: e["Cyber Castle"] < 15 && e["Cyber Castle Hard"] < 22 ? "?" : "cybot",
	enum: $d102378f4de5e1dc$export$2e2bcd8739ae039.CYBOT_SELECTION,
	abilityOneName: "Network Control",
	abilityTwoName: "Robo Scanner",
	unlockText: "Defeat ????? in Cyber Castle",
	locked: e["Cyber Castle"] < 15 && e["Cyber Castle Hard"] < 22,
	level: 0,
	backgroundColor: "#2f1d57",
	hoverBackgroundColor: "#231540",
	shadowColor: "#986ef0",
	textColor: "#a785ed"
}];
function $01bb7fd9b3660a1e$export$71c647defb4fbd5a(e) {
  return EvadesConfig.heroes[e];
}
function $01bb7fd9b3660a1e$export$51b0c51f5b2e9c35(e) {
	for (let t = 0; t < EvadesConfig.abilities.length; t++) {
		const a = EvadesConfig.abilities[t];
		if (a.name === e)
			return a
	}
	return null
}
function $01bb7fd9b3660a1e$export$96671014a1dabc4c(e) {
	for (let t = 0; t < EvadesConfig.effects.length; t++) {
		const a = EvadesConfig.effects[t];
		if (a.type === e)
			return a
	}
	return null
}
function $f36928166e04fda7$var$font(e) {
	return `${e}px EvadesTahoma`
}
function $f36928166e04fda7$var$line(e, a, t, r, c) {
	e.beginPath(),
	e.moveTo(a, t),
	e.lineTo(r, c),
	e.closePath(),
	e.stroke()
}
function $f36928166e04fda7$var$roundedRect(e, a, t, r, c, o=5, n=!1, $=!0) {
	if ("number" == typeof o)
		o = {
			tl: o,
			tr: o,
			br: o,
			bl: o
		};
	else {
		const e = {
			tl: 0,
			tr: 0,
			br: 0,
			bl: 0
		};
		for (const a in e)
			Object.prototype.hasOwnProperty.call(e, a) && (o[a] = o[a] || e[a])
	}
	e.beginPath(),
	e.moveTo(a + o.tl, t),
	e.lineTo(a + r - o.tr, t),
	e.quadraticCurveTo(a + r, t, a + r, t + o.tr),
	e.lineTo(a + r, t + c - o.br),
	e.quadraticCurveTo(a + r, t + c, a + r - o.br, t + c),
	e.lineTo(a + o.bl, t + c),
	e.quadraticCurveTo(a, t + c, a, t + c - o.bl),
	e.lineTo(a, t + o.tl),
	e.quadraticCurveTo(a, t, a + o.tl, t),
	e.closePath(),
	n && e.fill(),
	$ && e.stroke()
}
function $f36928166e04fda7$var$rect(e, a, t, r, c, o=!1, n=!0) {
	e.beginPath(),
	e.rect(a, t, r, c),
	e.closePath(),
	o && e.fill(),
	n && e.stroke()
}
function $f36928166e04fda7$var$arc(e, a, t, r, c=!1, o=!0) {
	e.beginPath(),
	e.arc(a, t, r, 0, 2 * Math.PI, !1),
	c && e.fill(),
	o && e.stroke(),
	e.closePath()
}
function $f36928166e04fda7$var$sectorInRect(e, a, t, r, c, o) {
	o < 0 && (o = 360 + o);
	const n = 270 * Math.PI / 180;
	o *= Math.PI / 180;
	const $ = a + r / 2
	  , d = t + c / 2
	  , i = {
		x: a,
		y: t
	}
	  , s = {
		x: a + r,
		y: t
	}
	  , f = {
		x: a + r,
		y: t + c
	}
	  , l = {
		x: a,
		y: t + c
	}
	  , p = Math.sqrt(2) * r / 2
	  , b = Math.sqrt(2) * c / 2
	  , u = $ + p * Math.cos(n)
	  , h = $ + p * Math.cos(o)
	  , x = d + b * Math.sin(o)
	  , v = {
		x: u,
		y: t
	}
	  , m = {
		x: h,
		y: t
	}
	  , g = {
		x: a + r,
		y: x
	}
	  , y = {
		x: h,
		y: t + c
	}
	  , w = {
		x: a,
		y: x
	};
	let C;
	const M = Math.PI / 180 * 225
	  , S = Math.PI / 180 * 315
	  , H = Math.PI / 180 * 45
	  , E = Math.PI / 180 * 135;
	C = o > S || o < H ? [v, i, l, f, s, g] : o > H && o <= E ? [v, i, l, y] : o > E && o <= M ? [v, i, w] : v.x < m.x ? [v, i, l, f, s, m] : [m, v],
	e.beginPath(),
	e.moveTo($, d);
	for (let a = 0; a < C.length; a++) {
		const t = C[a];
		e.lineTo(t.x, t.y)
	}
	e.lineTo($, d),
	e.closePath(),
	e.fill()
}
function $f36928166e04fda7$var$multilineText(e, a, t, r, c) {
    void 0 === c && (c = {
        stroke: !1,
        fill: !0,
        lineHeight: 20,
        fromTop: !0,
        numberColor: !1
    });
    const f = a.split("\n")
      , o = e.lineJoin;
    e.lineJoin = "round";
    const n = e.textAlign;
    const $ = (a, r) => {
        e.textAlign = "left";
        const f = a.split(/(\d+(?:\.\d+)?|%|.)/);
        let o = 0;
        for (const a of f)
            o += e.measureText(a).width;
        let n = t - o / 2;
        if(c.numberColor){
          for (const a of f)
              e.fillStyle = /^\d+(?:\.\d+)?%?$|%$/.test(a) ? "#9cd4ff" : "white",
              c.stroke && e.strokeText(a, n, r),
              c.fill && e.fillText(a, n, r),
              n += e.measureText(a).width
        }else
          e.textAlign = "center",
          c.stroke && e.strokeText(f.join(""), t, r),
          c.fill && e.fillText(f.join(""), t, r);
    }
    ;
    if (c.fromTop)
        for (let e = 0; e < f.length; e++)
            $(f[e], r),
            r += c.lineHeight;
    else
        for (let e = f.length - 1; e >= 0; e--)
            $(f[e], r),
            r -= c.lineHeight;
    e.lineJoin = o,
    e.textAlign = n
}
function $f36928166e04fda7$var$arrow(e, a, t, r, c, o=2*camScale, n=15*camScale, $="#cc000088") {
	const d = Math.atan2(c - t, r - a);
	e.beginPath(),
	e.moveTo(a, t),
	e.lineTo(r, c),
	e.strokeStyle = $,
	e.lineWidth = n,
	e.moveTo(r, c),
	e.lineTo(r - o * Math.cos(d - Math.PI / 7), c - o * Math.sin(d - Math.PI / 7)),
	e.lineTo(r - o * Math.cos(d + Math.PI / 7), c - o * Math.sin(d + Math.PI / 7)),
	e.lineTo(r, c),
	e.lineTo(r - o * Math.cos(d - Math.PI / 7), c - o * Math.sin(d - Math.PI / 7)),
	e.strokeStyle = $,
	e.lineWidth = n,
	e.stroke(),
	e.fillStyle = $,
	e.fill()
}
function $f36928166e04fda7$export$ba06b54a1d867509(e, a) {
	const t = document.createElement("canvas");
	return t.width = e,
	t.height = a,
	t
}
const $f36928166e04fda7$export$2e2bcd8739ae039 = {
	font: $f36928166e04fda7$var$font,
	line: $f36928166e04fda7$var$line,
	roundedRect: $f36928166e04fda7$var$roundedRect,
	rect: $f36928166e04fda7$var$rect,
	arc: $f36928166e04fda7$var$arc,
	sectorInRect: $f36928166e04fda7$var$sectorInRect,
	multilineText: $f36928166e04fda7$var$multilineText,
	arrow: $f36928166e04fda7$var$arrow
}
//END OF DRAWERS
class FieldBacked {
	stateFields() {
		return []
	}
	resetData() {
		const e = this.stateFields();
		for (let a = 0; a < e.length; a++) {
			const t = e[a];
			"object" == typeof this[t] && null !== this[t] && this[t]instanceof FieldBacked ? this[t].resetData() : this[t] = void 0
		}
		this.afterStateUpdate()
	}
	unionState(e, a=null, t=!0) {
		if (void 0 === e)
			return;
		null === a && (a = this),
		t && (this.beforeStateUpdate(),
		this.receivingStateUpdate(e));
		const r = this.stateFields()
		  , c = {};
		for (let o = 0; o < r.length; o++) {
			const n = r[o];
			void 0 !== e[n] ? (c[n] = e[n],
			t && ("object" == typeof this[n] && null !== this[n] && this[n]instanceof FieldBacked ? this[n].unionState(e[n]) : this[n] = e[n])) : c[n] = a[n]
		}
		return t && (this.noState = !1,
		this.afterStateUpdate()),
		c
	}
	receivingStateUpdate() {}
	beforeStateUpdate() {}
	afterStateUpdate() {}
	constructor() {
		this.noState = !0
	}
}
class EvadesEntity extends FieldBacked {
	render() {
		throw new Error("Not implemented")
	}
	addEffectPath(e, t, a) {
		const r = a.internal ? this.radius : a.radius
		  , c = t.getX(this.x)
		  , f = t.getY(this.y);
		e.arc(c, f, t.toScale(r), 0, 2 * Math.PI, !1)
	}
	getEffectConfigs() {
		if (void 0 === this.effects)
			return [];
		const e = [];
		try{
			for (const a of this.effects) {
				if (a.removed || void 0 === a.effectType)
					continue;
				const t = $01bb7fd9b3660a1e$export$96671014a1dabc4c(a.effectType);
				if (null === t)
					return console.debug("Could not read effect type " + a.effectType),
					null;
				t.radius = a.radius,
				t.inputAngle = a.inputAngle,
				e.push(t)
			}
		}catch(sh){
			for (const a of this.effects) {
				if (a.removed || void 0 === a.effectType)
					continue;
				const t = $01bb7fd9b3660a1e$export$96671014a1dabc4c(a.effectType);
				if (null === t)
					return console.debug("Could not read effect type " + a.effectType),
					null;
				t.radius = a.radius,
				t.inputAngle = a.inputAngle,
				e.push(t)
			}
		}
		return e
	}
	hexToRgb(e) {
		const a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
		return a ? {
			r: parseInt(a[1], 16),
			g: parseInt(a[2], 16),
			b: parseInt(a[3], 16)
		} : null
	}
	constructor() {
		super(),
		this.entityType = 0,
		this.showOnMap = !1,
		this.lightRadius = null,
		this.lightRectangle = null,
		this.relativeZIndex = 0,
		this.absoluteZIndex = null
	}
}
class ExperienceBar extends EvadesEntity {
	stateFields() {
		return ["heroType", "level", "experience", "previousLevelExperience", "nextLevelExperience", "abilityThree", "abilityTwo", "abilityOne"]
	}
	afterStateUpdate() {
		if (void 0 === this.heroType)
			return void (this.ready = !1);
		const e = $01bb7fd9b3660a1e$export$71c647defb4fbd5a(this.heroType);
		this.progressColor = e.foregroundColor,
		this.backgroundColor = e.backgroundColor,
		this.ready = !0
	}
	toggleVisibility() {
		this.hidden = !this.hidden
	}
	render(e, t) {
		if (!this.ready || this.hidden)
			return;
		const a = t.viewportSize;
		e.strokeStyle = "black";
		const r = this.hexToRgb(this.backgroundColor);
		e.fillStyle = `rgba(${r.r}, ${r.g}, ${r.b}, 0.4)`;
		const c = t.toGuiScale(this.width)
		  , f = t.toGuiScale(this.height)
		  , o = t.toGuiScale(this.expBarOffsetY);
		let n;
		n = void 0 === this.abilityThree || this.abilityRemoved ? c : c + t.toGuiScale(80),
		$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, a.width / 2 - c / 2, a.height - f - o, n, f, !0, !1);
		const $ = (this.experience - this.previousLevelExperience) / (this.nextLevelExperience - this.previousLevelExperience);
		if ($ > 0) {
			e.fillStyle = this.progressColor;
			const t = n * $;
			$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, a.width / 2 - c / 2, a.height - f - o, t, f, !0, !1)
		}
	}
	constructor() {
		super(),
		this.width = 516,
		this.height = 15,
		this.expBarOffsetY = 85,
		this.ready = !1,
		this.hidden = !1
	}
}
function arrayToRGBA(e){
  return `#${e.map(t=>t.toString(16).padStart(2,"0")).join("")}`
}
function Int32toRGBA(e){
  return `#${e.toString(16).padStart(8,"0")}`
}
function cubicinterpolate(t, points, tangents, knots, derivative, result) {
  if(t < 0)t=0;
  if(knots && t > knots[knots.length-1])t=knots[knots.length-1];
  if(!knots && t > 1)t=1;
  var n = points.length;    // number or points / tangents / knots
  var d = points[0].length; // vector dimensionality
  var v = result || new Array(d); // destination vector
  if(knots) {
    // find knot interval for t
    for(var i=0; i<n-1; i++) {
      if(t >= knots[i] && t <= knots[i+1]) {
        break;
      }
    }
    if(i === n-1) throw new Error('out of bounds');
    var i0 = i;
    var i1 = i + 1;
    var k0 = knots[i0];
    var k1 = knots[i1];
    var scale = k1 - k0;
    t = (t - k0) / scale;
  } else {
    var t = t * (n - 1); // rescale t to [0, n-1]
    var i0 = t|0;        // truncate
    var i1 = i0 + 1;
    if(i0 > n-1) throw new Error('out of bounds');
    if(i0 === n-1) i1 = i0;
    var scale = i1 - i0;
    t = (t - i0) / scale;
  }
  if(derivative) {
    var t2 = t * t;
    var h00 = 6 * t2 - 6 * t;
    var h10 = 3 * t2 - 4 * t + 1;
    var h01 = - 6 * t2 + 6 * t;
    var h11 = 3 * t2 - 2 * t;
  } else {
    var t2 = t * t;
    var it = 1 - t;
    var it2 = it * it;
    var tt = 2 * t;
    var h00 = (1 + tt) * it2;
    var h10 = t * it2;
    var h01 = t2 * (3 - tt);
    var h11 = t2 * (t - 1);
  }
  for(var i=0; i<d; i++) {
    v[i] = h00 * points[i0][i] + 
           h10 * tangents[i0][i] * scale +
           h01 * points[i1][i] +
           h11 * tangents[i1][i] * scale;
  }
  return v;
}
class FPE_TeachIcons extends EvadesEntity {
	stateFields() {
		return ["heroType", "missCircleAiLevel", "missBloomieAiLevel", "missThavelAiLevel"]
	}
	toggleVisibility() {
		this.hidden = !this.hidden
	}
	afterStateUpdate() {
		void 0 !== this.heroType ? (this.ready = !0) : (this.ready = !1);
	}
	render(e, t, gamestate, delta) {
		if (!this.ready)
			return;
		const av = t.viewportSize;
		let levels = [this.missCircleAiLevel,this.missBloomieAiLevel,this.missThavelAiLevel];
		this.hostileTimers=this.hostileTimers.map((e,t)=>!levels[t]?0:(e+(delta/1e3)*!!levels[t]));
		let timers = this.hostileTimers.map(e=>e*60000);
		let icons = [this.Circles,this.Bloomie,this.Thavel];
		e.fillStyle="#333651CC";
		if(!this.hidden)this.x+=3200/1.5*delta/1e3,this.x=Math.min(this.x,0);
		if(this.hidden)this.x-=3200/1.5*delta/1e3,this.x=Math.max(this.x,-320/1.5);
		if(!(this.x==-320/1.5&&this.hidden)){
		e.fillRect(t.toGuiScale(this.x),canvas.height-t.toGuiScale(210),t.toGuiScale(320/1.5),t.toGuiScale(120/1.5));
		// Initiate red glow
		const glowx=createOffscreenCanvas(this.Glow.image.width,this.Glow.image.height),
		gctx = glowx.getContext("2d");
		this.Glow.draw(gctx,0,0,0);
		gctx.globalCompositeOperation="xor";
		gctx.fillStyle=`rgba(255,0,0)`;
		gctx.fillRect(0,0,glowx.width,glowx.height);
		gctx.fillRect(0,0,glowx.width,glowx.height);
		icons.map((c,f)=>{
			let mIcon = createOffscreenCanvas(c.image.width,c.image.height);
			let iC = mIcon.getContext("2d");
			let w = ((x)=>`${x * 100}%`)(cubicinterpolate(timers[f],[[0],[1]],[[0],[0]],[0,30000+15000*!!f]));
			c.draw(iC,0,0,0);
			iC.globalCompositeOperation="xor";
			iC.fillStyle=`rgb(${w},${w},${w})`;
			iC.fillRect(0,0,c.image.width,c.image.height);
			iC.fillRect(0,0,c.image.width,c.image.height);
			iC.globalCompositeOperation="source-over";
			e.drawImage(mIcon,t.toGuiScale((20+200*f)/3+this.x),canvas.height-t.toGuiScale(610/3),t.toGuiScale(200/3),t.toGuiScale(200/3));
		});
		icons.map((c,f)=>{
			e.globalAlpha=1;
			let hoverableIcon = this.buttons[f];
			if(hoverableIcon.x=t.toGuiScale((20+200*f)/3+this.x),hoverableIcon.y=canvas.height-t.toGuiScale(610/3),hoverableIcon.width=hoverableIcon.height=t.toGuiScale(200/3),!this.x&&hoverableIcon.mouseOver)HeroInfoCard.prototype.renderStatTooltip(e,t,hoverableIcon.name,av.width/2+mouseEntity.ex+t.toGuiScale(16),av.height/2+mouseEntity.ey+t.toGuiScale(16),t.toGuiScale(100),t.toGuiScale(37.5));
			if(!timers[f])return;
			let SX = [[[0.05000002],[1.8141103],[3.0366042]],[[0.11000001],[2.7311795],[3.3652236]],[[0.10000001],[2.27041],[3.07066]]][f];
			let SY = [[[2.5078712],[0.560297],[0.14073819]],[[1.7567749],[0.3864519],[0.12645192]],[[1],[0.48000002],[0.11000003]]][f];
			let Times = [[0,3000,24000],[0,3000,30000],[0,6000,30000]][f];
			let PosY = [56,64,44][f];
			let ScaleX=cubicinterpolate(timers[f],SX,[[0],[0],[0]],Times),ScaleY=cubicinterpolate(timers[f],SY,[[0],[0],[0]],Times);
			e.globalAlpha=cubicinterpolate(timers[f],[[1],[0]],[[0],[0]],[0,30000+15000*!!f]);
			e.drawImage(glowx,t.toGuiScale((20+200*f)/3+this.x+(-52+181.2956/2*(1-ScaleX))/1.5),canvas.height+t.toGuiScale(-610/3+(PosY+10.956673/2*(1-ScaleY))/1.5),t.toGuiScale(181.2956*ScaleX/1.5),t.toGuiScale(10.956673*ScaleY/1.5));
		})}
		e.globalAlpha=1;
		this.buttons.filter(e=>e.mouseDown).length&&console.log(this.buttons.filter(e=>e.mouseDown));
		if(this.TestQuestions_visible){
			// viewport 1920x1080
			$e7009c797811e935$export$2e2bcd8739ae039.buttons.map(e=>!(-1!=this.buttons.indexOf(e)&&this.buttons.indexOf(e)>2)&&(e.x=-1e9));
			this.buttons.map(e=>(e.visible=this.buttons.indexOf(e)>2,e.interactive=e.visible));
			let invisHitTest = this.buttons[7];
			invisHitTest.x=0;
			invisHitTest.y=0;
			invisHitTest.width=av.width;
			invisHitTest.height=av.height;
			const WB_TestQuestions = this;
			WB_TestQuestions.TestQuestions_answerClicked&&(
				WB_TestQuestions.TestQuestions_exitAfter-=delta/1e3
			);
			simulateIt=false;
			canvasBox.hidden=true;
			if (WB_TestQuestions.TestQuestions_exitAfter <= 0){
				simulateIt=true;
				canvasBox.hidden=false;
				WB_TestQuestions.reset_WB_TestQuestions(this.TestSubject);
				this.buttons.map(e=>(e.visible=this.buttons.indexOf(e)<3,e.interactive=e.visible));
				return;
			}
			let s = av.height/1080, q = av.width/1920;
			$31e8cfefa331e399$export$93e5c64e4cc246c8(`hud/Test-Miss${"Circle,Bloomie,Thavel".split(",")[["math","science","language"].indexOf(WB_TestQuestions.TestSubject)]}`).draw(e, 0, 0, 0, (1920 + 0.9008789)*q, (1080 - 3.033081)*s);
			e.fillStyle="white";
			$31e8cfefa331e399$export$93e5c64e4cc246c8(`hud/pictures/${WB_TestQuestions.PictureDisplay}`).draw(e, 0, av.width * 0.5 - 305.9219*s, av.height * 0.5 - 218.84683*s, 612.012*s, 291.26126*s);		let ctxW = 1920, ctxH = 1080;
			var btn = [s*-341.08105,s*-374.76767,s*690.99097,s*488.94785,1,1];
			let interact = {
				topleft:{
					x: av.width * 0.5 + btn[0],
					y: av.height * 0.5 + btn[1]
				},
				bottomright: {
					x: av.width * 0.5 + btn[0] + btn[2],
					y: av.height * 0.5 + btn[1] + btn[3]
				}
			};
			e.textBaseline="top";
			this.renderText(e, WB_TestQuestions.WallOfQuestionTest, (interact.topleft.x + interact.bottomright.x) / 2 - 3*s, interact.topleft.y+4*s, 30*s);
	WB_TestQuestions.AnsBtns=void 0
			WB_TestQuestions.AnsBtns ??= [[80*s, -381.08105*s, 676.5766*s, 172.64264*s, 0, 1, false, false], [80*s, -197.08105*s, 676.5766*s, 172.64264*s, 0, 1, false, false], [-785.9219*s, -381.08105*s, 676.5766*s, 172.64264*s, 1, 1, false, false], [-785.9219*s, -197.08105*s, 676.5766*s, 172.64264*s, 1, 1, false, false], ];
			let TextBox9 = $31e8cfefa331e399$export$93e5c64e4cc246c8(`hud/TextBox`);
			let textBoxMask = createOffscreenCanvas(TextBox9.image.width, TextBox9.image.height);
			let ctx = textBoxMask.getContext("2d");
			ctx.fillStyle = "rgb(79.2145%, 66.4073%, 100%)";
			ctx.fillRect(0, 0, textBoxMask.width, textBoxMask.height);
			ctx.globalCompositeOperation = "xor";
			TextBox9.draw(ctx, 0, 0, 0);
			ctx.fillRect(0, 0, textBoxMask.width, textBoxMask.height);
			for (const[index,btn]of Object.entries(WB_TestQuestions.AnsBtns)) {
				let interact = {
					x: av.width * btn[4] + btn[0],
					y: av.height * btn[5] + btn[1],
					size: {
						x: btn[2],
						y: btn[3]
					},
					isHover: btn[6],
					isPressed: btn[7]
				};
				TextBox9.draw(e, 0, interact.x, interact.y, interact.size.x, interact.size.y);
				let Button = this.buttons[(index|0)+3];
				Button.x=interact.x,Button.y=interact.y,Button.width=interact.size.x,Button.height=interact.size.y;
				if(Button.mouseOver && !Button.mouseDown){
					e.globalAlpha = 5 / 9;
					e.globalCompositeOperation = "multiply";
					e.drawImage(textBoxMask, interact.x, interact.y, interact.size.x, interact.size.y);
					e.globalCompositeOperation = "source-over";
					e.globalAlpha = 1;
				}else if(Button.mouseDown){
					e.lineWidth = t.toGuiScale(2);
					e.strokeStyle = "grey";
					e.beginPath();
					const gradient = e.createLinearGradient(interact.x, interact.y, interact.x, interact.y + interact.size.y)
					gradient.addColorStop(0, "#D0D0D0");
					gradient.addColorStop(1, "#A0A0A0");
					e.fillStyle = gradient;
					e.roundRect(interact.x, interact.y, interact.size.x, interact.size.y, t.toGuiScale(2));
					e.stroke();
					e.fill();
					e.closePath();
				}
				e.fillStyle = "white";
				e.textBaseline = "middle";
				this.renderText(e, WB_TestQuestions[`Question${WB_TestQuestions.AnsBtns.indexOf(btn) + 1}`], interact.x + interact.size.x / 2 - 3, interact.y + interact.size.y / 2, 40*s, true);
			}
		}
		e.resetTransform();
		e.globalAlpha=1;
	}
	reset_WB_TestQuestions(subject){
		this.TestSubject=subject;
		this.WallOfQuestionTest="Question text";
		this.Question1="Question";
		this.Question2="Question";
		this.Question3="Question";
		this.Question4="Question";
		this.Q1Correct=false;
		this.Q2Correct=false;
		this.Q3Correct=false;
		this.Q4Correct=false;
		this.PictureDisplay="Invis";
		this.TestQuestions_visible=false;
		this.TestQuestions_answerClicked=false;
		this.TestQuestions_exitAfter=0.05;
		this.TestQuestions_wrong=false;
	}
	renderText(e, str, x, y, sz, centerIt) {
		var metrics, char;
		sz *= 4 / 3
		e.font = `${sz}px fnt_barrio, EvadesTahoma`;
		let w = 0
			, posX = x
			, posY = y
			, movementX = [];
		posY += sz*0.075;
		let lineNumber = 0;
		const strs = str.split("\r\n");
		centerIt && (posY -= sz*(strs.length-1)*11/9/2);
		for (const str_value of strs) {
			w = 0;
			movementX = []
			for (var i in str_value) {
				char = str_value[i];
				e.textAlign = "center"
				metrics = e.measureText(char)
				movementX.push(w);
				w += Math.round(metrics.width)
			}
			for (var i in str_value) {
				char = str_value[i];
				e.textAlign = "start";
				metrics = e.measureText(char);
				e.fillText(char, Math.round(posX) - w / 2 + Math.round(movementX[i]+3), posY)
			}
			posY += sz*11/9;
		}
	}
	constructor() {
		super();
		this.ready = !1;
		function preventMouseMovement(){
			settings.toggleMouseMovement && settings.enableMouseMovement && ($e7009c797811e935$export$2e2bcd8739ae039.mouseMovementToggled=!$e7009c797811e935$export$2e2bcd8739ae039.mouseMovementToggled);
		};
		Object.defineProperty(this,"local_player",{get(){
      return map.players.find(e=>e.id==selfId)
    }});
		function WrongAnswer(){
			WB_TestQuestions.TestQuestions_wrong=true;
			WB_TestQuestions.local_player.abilityHelperType=8;
			WB_TestQuestions.local_player.abilityHelperTime=1200;
			WB_TestQuestions.TestSubject=="math"&&(WB_TestQuestions.local_player.missCircleAiLevel+=WB_TestQuestions.difficulty+1);
			WB_TestQuestions.TestSubject=="science"&&(WB_TestQuestions.local_player.missBloomieAiLevel+=WB_TestQuestions.difficulty+1);
			WB_TestQuestions.TestSubject=="language"&&(WB_TestQuestions.local_player.missThavelAiLevel+=WB_TestQuestions.difficulty+1);
		};
		const WB_TestQuestions = this;
		this.buttons = [
			// Hoverable icons
			$e7009c797811e935$export$2e2bcd8739ae039.addButton(null),
			$e7009c797811e935$export$2e2bcd8739ae039.addButton(null),
			$e7009c797811e935$export$2e2bcd8739ae039.addButton(null),
			// WB_TestQuestions
			$e7009c797811e935$export$2e2bcd8739ae039.addButton(null, function(){
				preventMouseMovement();
        if(WB_TestQuestions.TestQuestions_answerClicked)return;
        WB_TestQuestions.TestQuestions_answerClicked=true;
				if(!WB_TestQuestions.Q1Correct)WrongAnswer();
				WB_TestQuestions.local_player.updateExp(4*WB_TestQuestions.local_player.level*(1+!WB_TestQuestions.TestQuestions_wrong));
			}),
			$e7009c797811e935$export$2e2bcd8739ae039.addButton(null, function(){
				preventMouseMovement();
        if(WB_TestQuestions.TestQuestions_answerClicked)return;
        WB_TestQuestions.TestQuestions_answerClicked=true;
				if(!WB_TestQuestions.Q2Correct)WrongAnswer();
				WB_TestQuestions.local_player.updateExp(4*WB_TestQuestions.local_player.level*(1+!WB_TestQuestions.TestQuestions_wrong));
			}),
			$e7009c797811e935$export$2e2bcd8739ae039.addButton(null, function(){
				preventMouseMovement();
        if(WB_TestQuestions.TestQuestions_answerClicked)return;
        WB_TestQuestions.TestQuestions_answerClicked=true;
				if(!WB_TestQuestions.Q3Correct)WrongAnswer();
				WB_TestQuestions.local_player.updateExp(4*WB_TestQuestions.local_player.level*(1+!WB_TestQuestions.TestQuestions_wrong));
			}),
			$e7009c797811e935$export$2e2bcd8739ae039.addButton(null, function(){
				preventMouseMovement();
        if(WB_TestQuestions.TestQuestions_answerClicked)return;
        WB_TestQuestions.TestQuestions_answerClicked=true;
				if(!WB_TestQuestions.Q4Correct)WrongAnswer();
				WB_TestQuestions.local_player.updateExp(4*WB_TestQuestions.local_player.level*(1+!WB_TestQuestions.TestQuestions_wrong));
			}),
			// Invisible hit test
			$e7009c797811e935$export$2e2bcd8739ae039.addButton(null, preventMouseMovement),
		];
		this.buttons[0].name="Miss Circle";
		this.buttons[1].name="Miss Bloomie";
		this.buttons[2].name="Miss Thavel";
		this.difficulty=2; // When clicking on the wrong answer, their AI level will add by difficulty + 1.
		this.hidden = true;
		this.x = -320/1.5;
		this.hostileTimers = [0,0,0];
		this.Glow = $31e8cfefa331e399$export$93e5c64e4cc246c8("hud/Glow");
		this.Circles = $31e8cfefa331e399$export$93e5c64e4cc246c8("hud/Icon-MissCircles");
		this.Bloomie = $31e8cfefa331e399$export$93e5c64e4cc246c8("hud/Icon-MissBloomie");
		this.Thavel = $31e8cfefa331e399$export$93e5c64e4cc246c8("hud/Icon-MissThavel");
		this.reset_WB_TestQuestions("math");
	}
}
class TitleText extends EvadesEntity {
	stateFields() {
		return ["heroType", "areaName", "areaNumber", "regionName", "victoryArea", "bossArea", "survivalTime", "titleStrokeColor"]
	}
	afterStateUpdate() {
		void 0 !== this.heroType ? (this.titleStrokeColor = Int32toRGBA(this.titleStrokeColor), this.ready = !0) : (this.ready = !1)
	}
	render(e, t, a) {
		if (!this.ready || !a.drawUI)
			return;
		const r = t.viewportSize;
		let c = `Area ${this.areaName}`;
		isNaN(parseInt(this.areaName)) && (c = this.areaName);
		let f = `${this.regionName}: ${c}`;
		map.areas.length === 1 && (f = this.regionName),
		this.regionName.length || (f = c),
		this.victoryArea ? f = `${this.regionName}: Victory!` : this.bossArea && (f = `${this.regionName}: BOSS AREA ${this.areaName}`);
		const o = r.width / 2
		  , n = t.toGuiScale(40);
		e.font = `bold ${$f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(36))}`,
		e.textAlign = "center",
		e.lineWidth = t.toGuiScale(6),
		e.strokeStyle = this.titleStrokeColor,
		e.fillStyle = this.titleColor;
		const $ = e.lineJoin;
		if (e.lineJoin = "round",
		e.strokeText(f, o, n),
		e.fillText(f, o, n),
		settings.displayTimer) {
			const a = Math.floor(this.survivalTime);
			e.font = "bold " + $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(28));
			const r = `${a / 60 >> 0}m ${a % 60 < 10 ? "0" + a % 60 : a % 60}s`;
			e.strokeText(r, o, t.toGuiScale(80)),
			e.fillText(r, o, t.toGuiScale(80))
		}
		window.tsmod && window.replaces.id2.call(this, $f36928166e04fda7$export$2e2bcd8739ae039, e, o),
		e.lineJoin = $,
		e.strokeStyle = "#000000",
		e.lineWidth = 1
	}
	constructor() {
		super();
		this.ready = !1;
		// Defaults
		this.titleColor = "#f4faff";
		this.titleStrokeColor = "#425a6d";
	}
}
class DirectionalIndicatorHud extends EvadesEntity {
	constructor() {
		super(),
		this.directionalIndicators = {}
	}
	resetData() {
		this.directionalIndicators = {},
		super.resetData()
	}
	update(e, t, a) {
		this.entities = e,
		this.self = t,
		this.area = a;
		const r = new Set;
		for (const e in this.directionalIndicators)
			Object.prototype.hasOwnProperty.call(this.directionalIndicators, e) && r.add(e);
		for (const e in this.entities) {
			if (e === t.id.toString())
				continue;
			r.delete(e);
			const a = this.entities[e];
			if (e in this.directionalIndicators) {
				const t = this.directionalIndicators[e];
				t.update(a),
				t.isDone() && delete this.directionalIndicators[e]
			} else {
				let t = null;
				-1 !== a.deathTimer && a.rescueable && (t = new $7bda4ebfc6020375$var$DeathTimerDirectionalIndicator(a)),
				null !== t && (this.directionalIndicators[e] = t)
			}
		}
		r.forEach((e => {
			delete this.directionalIndicators[e]
		}
		))
	}
	render(e, t) {
		for (const a in this.directionalIndicators) {
			if (!Object.prototype.hasOwnProperty.call(this.directionalIndicators, a))
				continue;
			this.directionalIndicators[a].render(e, t, this.self, this.area)
		}
	}
}
class AreaInfo extends EvadesEntity {
	constructor() {
		super(),
		this.width = 200,
		this.height = 200,
		this.hidden = !0
	}
	update(e, t) {
		this.self = e,
		this.area = t
	}
	toggleVisibility() {
		this.hidden = !this.hidden
	}
	render(e, t) {
		if (this.hidden)
			return;
		const a = t.viewportSize;
		e.strokeStyle = "black";
		const r = t.toGuiScale(this.width)
		  , c = t.toGuiScale(this.height)
		  , f = t.toGuiScale(10)
		  , o = a.height / 2 - c / 2
		  , n = f + t.toGuiScale(4)
		  , $ = o + t.toGuiScale(14)
		  , d = t.toGuiScale(14), boundary=getAreaBoundary(this.area);
		e.fillStyle = "rgba(0, 0, 0, 0.7)",
		$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, f, o, r, c, !0, !1),
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(d),
		e.textAlign = "left",
		e.fillStyle = "#FFFFFF",
		e.fillText(`${map.name} ${this.area.index}`, n, $),
		e.fillText(`Area name: ${this.area.name||(current_Area+1)}`, n, $ + 1 * d),
		e.fillText(`Area position: ${this.area.x}, ${this.area.y}`, n, $ + 2 * d),
		e.fillText(`Area size: ${boundary.width} x ${boundary.height}`, n, $ + 3 * d),
		e.fillText(`Zone count: ${this.area.zones.length}`, n, $ + 4 * d),
		e.fillText(`Self position: ${Math.round(this.self.entity.x + this.area.x)}, ${Math.round(this.self.entity.y + this.area.y)}`, n, $ + 6 * d),
		e.fillText(`Relative position: ${Math.round(this.self.entity.x)}, ${Math.round(this.self.entity.y)}`, n, $ + 7 * d)
	}
}
class Ability extends FieldBacked {
	stateFields() {
		return ["abilityType", "name", "passive", "description", "energyCost", "totalCooldown", "cooldown", "locked", "level", "maxLevel", "disabled", "continuous", "energyDescription"]
	}
	afterStateUpdate() {
		if (void 0 === this.abilityType)
			return;
		setDefaultsFor(this, this.stateFields(), "ability");
		const e = $01bb7fd9b3660a1e$export$a1dfcc7b3a7a0b52(this.abilityType);
		setDefaultsFrom(this, this.stateFields(), e);
		const t = `abilities/${this.name.toLowerCase().replace(" ", "_")}`;
		void 0 !== this.image && null !== this.imageName && this.imageName === t || (this.image = $31e8cfefa331e399$export$93e5c64e4cc246c8(t),
		this.image.blank && (this.image = $31e8cfefa331e399$export$93e5c64e4cc246c8("abilities/default")),
		this.imageName = t)
	}
	constructor() {
		super(),
		this.imageName = null;
		
	}
}
const KeyMap = {
	Backspace: 8,
	Tab: 9,
	Enter: 13,
	Shift: 16,
	Ctrl: 17,
	Alt: 18,
	PauseBreak: 19,
	CapsLock: 20,
	Escape: 27,
	Space: 32,
	PageUp: 33,
	PageDown: 34,
	End: 35,
	Home: 36,
	LeftArrow: 37,
	UpArrow: 38,
	RightArrow: 39,
	DownArrow: 40,
	Insert: 45,
	Delete: 46,
	Num0: 48,
	Num1: 49,
	Num2: 50,
	Num3: 51,
	Num4: 52,
	Num5: 53,
	Num6: 54,
	Num7: 55,
	Num8: 56,
	Num9: 57,
	A: 65,
	B: 66,
	C: 67,
	D: 68,
	E: 69,
	F: 70,
	G: 71,
	H: 72,
	I: 73,
	J: 74,
	K: 75,
	L: 76,
	M: 77,
	N: 78,
	O: 79,
	P: 80,
	Q: 81,
	R: 82,
	S: 83,
	T: 84,
	U: 85,
	V: 86,
	W: 87,
	X: 88,
	Y: 89,
	Z: 90,
	LeftWindowKey: 91,
	RightWindowKey: 92,
	SelectKey: 93,
	Numpad0: 96,
	Numpad1: 97,
	Numpad2: 98,
	Numpad3: 99,
	Numpad4: 100,
	Numpad5: 101,
	Numpad6: 102,
	Numpad7: 103,
	Numpad8: 104,
	Numpad9: 105,
	Multiply: 106,
	Add: 107,
	Subtract: 109,
	DecimalPoint: 110,
	Divide: 111,
	F1: 112,
	F2: 113,
	F3: 114,
	F4: 115,
	F5: 116,
	F6: 117,
	F7: 118,
	F8: 119,
	F9: 120,
	F10: 121,
	F11: 122,
	F12: 123,
	NumLock: 144,
	ScrollLock: 145,
	SemiColon: 186,
	EqualSign: 187,
	Comma: 188,
	Dash: 189,
	Period: 190,
	ForwardSlash: 191,
	BackTick: 192,
	OpenBracket: 219,
	BackSlash: 220,
	CloseBracket: 221,
	SingleQuote: 222
}
  , $4cb5e0b12995588c$var$keys = {"UNDEFINED_KEYTYPE":0,"W_KEY":1,"A_KEY":2,"S_KEY":3,"D_KEY":4,"UP_KEY":5,"LEFT_KEY":6,"DOWN_KEY":7,"RIGHT_KEY":8,"FOCUS_KEY":9,"ABILITY_ONE_KEY":10,"ABILITY_TWO_KEY":11,"ABILITY_THREE_KEY":12,"ACTION_KEY":13,"UPGRADE_SPEED_KEY":14,"UPGRADE_MAX_ENERGY_KEY":15,"UPGRADE_ENERGY_REGEN_KEY":16,"UPGRADE_ABILITY_ONE_KEY":17,"UPGRADE_ABILITY_TWO_KEY":18,"UPGRADE_ABILITY_THREE_KEY":19}
  , GameKeyMap = {};
GameKeyMap[KeyMap.W] = $4cb5e0b12995588c$var$keys.W_KEY,
GameKeyMap[KeyMap.A] = $4cb5e0b12995588c$var$keys.A_KEY,
GameKeyMap[KeyMap.S] = $4cb5e0b12995588c$var$keys.S_KEY,
GameKeyMap[KeyMap.D] = $4cb5e0b12995588c$var$keys.D_KEY,
GameKeyMap[KeyMap.UpArrow] = $4cb5e0b12995588c$var$keys.UP_KEY,
GameKeyMap[KeyMap.LeftArrow] = $4cb5e0b12995588c$var$keys.LEFT_KEY,
GameKeyMap[KeyMap.DownArrow] = $4cb5e0b12995588c$var$keys.DOWN_KEY,
GameKeyMap[KeyMap.RightArrow] = $4cb5e0b12995588c$var$keys.RIGHT_KEY,
GameKeyMap[KeyMap.Shift] = $4cb5e0b12995588c$var$keys.FOCUS_KEY,
GameKeyMap[KeyMap.J] = $4cb5e0b12995588c$var$keys.ABILITY_ONE_KEY,
GameKeyMap[KeyMap.Z] = $4cb5e0b12995588c$var$keys.ABILITY_ONE_KEY,
GameKeyMap[KeyMap.K] = $4cb5e0b12995588c$var$keys.ABILITY_TWO_KEY,
GameKeyMap[KeyMap.X] = $4cb5e0b12995588c$var$keys.ABILITY_TWO_KEY,
GameKeyMap[KeyMap.L] = $4cb5e0b12995588c$var$keys.ABILITY_THREE_KEY,
GameKeyMap[KeyMap.C] = $4cb5e0b12995588c$var$keys.ABILITY_THREE_KEY,
GameKeyMap[KeyMap.Space] = $4cb5e0b12995588c$var$keys.ACTION_KEY,
GameKeyMap[KeyMap.Num1] = $4cb5e0b12995588c$var$keys.UPGRADE_SPEED_KEY,
GameKeyMap[KeyMap.Numpad1] = $4cb5e0b12995588c$var$keys.UPGRADE_SPEED_KEY,
GameKeyMap[KeyMap.Num2] = $4cb5e0b12995588c$var$keys.UPGRADE_MAX_ENERGY_KEY,
GameKeyMap[KeyMap.Numpad2] = $4cb5e0b12995588c$var$keys.UPGRADE_MAX_ENERGY_KEY,
GameKeyMap[KeyMap.Num3] = $4cb5e0b12995588c$var$keys.UPGRADE_ENERGY_REGEN_KEY,
GameKeyMap[KeyMap.Numpad3] = $4cb5e0b12995588c$var$keys.UPGRADE_ENERGY_REGEN_KEY,
GameKeyMap[KeyMap.Num4] = $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_ONE_KEY,
GameKeyMap[KeyMap.Numpad4] = $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_ONE_KEY,
GameKeyMap[KeyMap.Num5] = $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_TWO_KEY,
GameKeyMap[KeyMap.Numpad5] = $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_TWO_KEY,
GameKeyMap[KeyMap.Num6] = $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_THREE_KEY,
GameKeyMap[KeyMap.Numpad6] = $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_THREE_KEY;
const ControlKeys = {
	CHAT_KEY: KeyMap.Enter,
	COMMAND_KEY: KeyMap.ForwardSlash,
  TOGGLE_UI_KEY: KeyMap.U,
	TOGGLE_HERO_INFO_KEY: KeyMap.H,
	TOGGLE_MINIMAP_MODE_KEY: KeyMap.G,
	TOGGLE_CHAT_KEY: KeyMap.V,
	TOGGLE_LEADERBOARD_KEY: KeyMap.B,
	TOGGLE_MAP_KEY_1: KeyMap.M,
	TOGGLE_MAP_KEY_2: KeyMap.Tab,
	TOGGLE_AREA_INFO_KEY: KeyMap.Period,
	TOGGLE_SHOWFPEICONS_KEY: KeyMap.Comma,
}
  , $4cb5e0b12995588c$export$39b8dbea490353e9 = [$4cb5e0b12995588c$var$keys.FOCUS_KEY, $4cb5e0b12995588c$var$keys.ACTION_KEY, $4cb5e0b12995588c$var$keys.ABILITY_THREE_KEY, $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_THREE_KEY, $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_ONE_KEY, $4cb5e0b12995588c$var$keys.UPGRADE_ABILITY_TWO_KEY, $4cb5e0b12995588c$var$keys.ABILITY_ONE_KEY, $4cb5e0b12995588c$var$keys.ABILITY_TWO_KEY, null, null, $4cb5e0b12995588c$var$keys.ACTION_KEY, null, $4cb5e0b12995588c$var$keys.W_KEY, $4cb5e0b12995588c$var$keys.S_KEY, $4cb5e0b12995588c$var$keys.A_KEY, $4cb5e0b12995588c$var$keys.D_KEY, null, null];
class $5eeca412293d6bd7$var$SettingStore {
	get() {
		return this.settings
	}
	set(e) {
		this.settings = e
	}
	toggle(e) {
		this.settings[e] = !this.settings[e]
	}
	constructor() {
		this.settings = {}
	}
}
var $5eeca412293d6bd7$export$2e2bcd8739ae039 = new $5eeca412293d6bd7$var$SettingStore;
const $e7009c797811e935$var$keys = {"UNDEFINED_KEYTYPE":0,"W_KEY":1,"A_KEY":2,"S_KEY":3,"D_KEY":4,"UP_KEY":5,"LEFT_KEY":6,"DOWN_KEY":7,"RIGHT_KEY":8,"FOCUS_KEY":9,"ABILITY_ONE_KEY":10,"ABILITY_TWO_KEY":11,"ABILITY_THREE_KEY":12,"ACTION_KEY":13,"UPGRADE_SPEED_KEY":14,"UPGRADE_MAX_ENERGY_KEY":15,"UPGRADE_ENERGY_REGEN_KEY":16,"UPGRADE_ABILITY_ONE_KEY":17,"UPGRADE_ABILITY_TWO_KEY":18,"UPGRADE_ABILITY_THREE_KEY":19};
class $e7009c797811e935$var$InputLayer {
	start(e, a) {
		this.gameState = e,
		this.updateChat = a,
    this.chatSpamThresholdMessagesShort = 4,
    this.chatSpamThresholdTimeShort = 10,
    this.chatMessageTimestampsShort = [],
    this.chatSpamThresholdMessagesLong = 10,
    this.chatSpamThresholdTimeLong = 30,
    this.chatMessageTimestampsLong = [],
    this.lastMuteTime = -1/0,
    this.spamMuteDuration = 30;
	}
	registerListeners() {
		const e = this.onKeyDown.bind(this)
		  , t = this.onKeyUp.bind(this)
		  , a = this.onBlur.bind(this);
		window.addEventListener("keydown", e),
		window.addEventListener("keyup", t),
		window.addEventListener("blur", a);
		const r = this.onMouseMove.bind(this)
		  , c = this.onMouseDown.bind(this)
		  , o = this.onMouseUp.bind(this)
		  , n = this.onMouseLeave.bind(this)
		  , $ = this.onContextMenu.bind(this);
		this.canvas.addEventListener("mousemove", r),
		this.canvas.addEventListener("mousedown", c),
		this.canvas.addEventListener("mouseup", o),
		this.canvas.addEventListener("mouseleave", n),
		this.canvas.addEventListener("contextmenu", $),
		this.canvas.addEventListener("touchmove", r, {passive: true}),
		this.canvas.addEventListener("touchstart", c, {passive: true}),
		this.canvas.addEventListener("touchend", o);
		const i = this.onGamepadConnect.bind(this)
		  , d = this.onGamepadDisconnect.bind(this);
		window.addEventListener("gamepadconnected", i),
		window.addEventListener("gamepaddisconnected", d),
		this.deregisterListeners = () => {
			window.removeEventListener("keydown", e),
			window.removeEventListener("keyup", t),
			window.removeEventListener("blur", a),
			this.canvas.removeEventListener("mousemove", r),
			this.canvas.removeEventListener("mousedown", c),
			this.canvas.removeEventListener("mouseup", o),
			this.canvas.removeEventListener("mouseleave", n),
			this.canvas.removeEventListener("contextmenu", $),
			window.removeEventListener("gamepadconnected", i),
			window.removeEventListener("gamepaddisconnected", d)
		}
	}
	addMouseDownListener(e) {
		this.onMouseDownListeners.add(e)
	}
	removeMouseDownListener(e) {
		this.onMouseDownListeners.delete(e)
	}
	addToggleListener(e) {
		this.toggleListeners.add(e)
	}
	removeToggleListener(e) {
		this.toggleListeners.delete(e)
	}
	notifyToggleListeners() {
		this.toggleListeners.forEach((e => e()))
	}
  addChatMessageTimestamp() {
      this.chatMessageTimestampsShort.push(global.performance.now()),
      this.chatMessageTimestampsLong.push(global.performance.now())
  }
  notSpammingChat() {
      this.pruneChatMessageTimestamps();
      let e = true;
      if(this.muted && (global.performance.now() - this.lastMuteTime) / 1e3 > this.spamMuteDuration)
        this.muted=false;
      if(this.muted)
        return false;
      if(this.chatMessageTimestampsShort.length >= this.chatSpamThresholdMessagesShort)
        e = false;
      if(this.chatMessageTimestampsLong.length >= this.chatSpamThresholdMessagesLong)
        this.lastMuteTime = global.performance.now(),
        this.muted = !0,
        e = false;
      return e;
  }
  pruneChatMessageTimestamps() {
      const e = global.performance.now();
      this.chatMessageTimestampsShort = this.chatMessageTimestampsShort.filter(t => (e - t) / 1e3 < this.chatSpamThresholdTimeShort),
      this.chatMessageTimestampsLong = this.chatMessageTimestampsLong.filter(t => (e - t) / 1e3 < this.chatSpamThresholdTimeLong)
  }
	onKeyDown(e) {
		if (null === this.gameState || null === this.updateChat)
			return;
		if (this.gameState.initial)
			return;
		if (e.ctrlKey || e.altKey || e.metaKey)
			return;
		if (window.tsmod && document.activeElement.getAttributeNames().includes("c-lock"))
			return;
		e.keyCode === KeyMap.Tab && e.preventDefault();
		const t = global.chat && !chat.hidden && document.getElementById("chat-input");
		if (document.activeElement === t) {
			if (e.keyCode === ControlKeys.CHAT_KEY) {
				if (0 === t.value.length)return void t.blur();
        const plr = map.players.filter(e=>e.id==selfId)[0];
        let command = t.value.split(" ")[0].toLowerCase();
        if(-1 !== ["/rv","/s","/revive","/save"].indexOf(command)){
          plr.godmode=0,
			    plr.deathTimer=-1;
          let area = map.areas[plr.area];
			    area.entities.find(e=>plr.heroType==4&&e.owner==plr)&&(area.entities.find(e=>plr.heroType==4&&e.owner==plr).duration=800);
        }
        if (command === "/m" || command === "/max"){
		      //Max out hero card (Command: /max, /m)
			    plr.speed=510,
			    plr.maxEnergy=plr.energy=300,
			    plr.energyRegen=7,
			    plr.level=100,
			    plr.experience=plr.nextLevelExperience,
			    (plr.abilityOne)&&(plr.abilityOne.locked=false,plr.abilityOne.level=plr.abilityOne.maxLevel),
			    (plr.abilityTwo)&&(plr.abilityTwo.locked=false,plr.abilityTwo.level=plr.abilityTwo.maxLevel),
			    (plr.abilityThree)&&(plr.abilityThree.locked=false,plr.abilityThree.level=plr.abilityThree.maxLevel);
        }
        if (-1 !== ["/aph","/jess","/aphmau","/jessica"].indexOf(command)){
          if(plr instanceof Player){
            let be=new AphmauEntity(plr.x,plr.y,60,plr.speed,void 0,clamp(t.value.slice(command.length+1)|0,0,7));
            let u = map.players.indexOf(plr)
            map.players[u]=be;
				    const newEffect={radiusMult:plr.radius/be.radius,speedMult:1,time:-0.45};
            be.MultiplierEffects.push(newEffect);
            be.area = plr.area;
            selfId = be.id = be.ID;
            be.fadeInTime = be.fadeInTimeTotal = 450;
            be.fading = true;
            if(!be.isHarmless){
              be.isHarmless = true;
              be.harmlessTime = 450;
            }
            be.showOnMap=true;
            Object.defineProperty(be,"fullMapOpacity",{get(){
            	return this.area==map.players.find(e=>e.id==selfId)?.area;
            }});
            return t.value = "",t.blur();
          }
        }
        if (command === "/goto"){
          if(t.value.slice(6).length){
            if(isNaN(parseInt(t.value.slice(6)))){
              socketreceive({data: msgpack.encode({chatmsg:`Invalid area number.`,id:`[SERVER]`,color:0xffceb7}).buffer})
            }else if(clamp(parseInt(t.value.slice(6))-1,0,map.areas.length-1) === current_Area){
              socketreceive({data: msgpack.encode({chatmsg:`You cannot teleport to the area you are currently in.`,id:`[SERVER]`,color:0xffceb7}).buffer})
            }else{
              let canUnload=true;
              for(let player of map.players){
                if(plr === player)continue;
                if(plr.area === player.area)canUnload=false;
              }
			        canUnload && (map.areas[plr.area].entities.length=0,map.areas[plr.area].isLoaded=false);
			        plr.area=clamp(parseInt(t.value.slice(6))-1,0,map.areas.length-1);
			        let safezone=map.areas[plr.area].zones.filter(e=>e.type=="safe")[0]??map.areas[plr.area].zones[0];
  		        plr.x=safezone.x+1+plr.radius+(safezone.width-2-plr.radius*2)*Math.random();
	  	        plr.y=safezone.y+1+plr.radius+(safezone.height-2-plr.radius*2)*Math.random();
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
              socketreceive({data: msgpack.encode({chatmsg:`You have been teleported to Area ${plr.area+1}.`,id:`[SERVER]`,color:0xffceb7}).buffer})
            }
          }else{
            socketreceive({data: msgpack.encode({chatmsg:`Usage: /goto &lt;area number&gt.`,id:`[SERVER]`,color:0xffceb7}).buffer})
          }
          return t.value = "",t.blur();
        }
        // /
        if(t.value.startsWith("/")){
          return socket.send(msgpack.encode({chat:t.value})),t.value = "",t.blur();
        }
        let wasMuted = this.muted;
        let wasSpamming = !this.notSpammingChat();
        let justMuted = !wasMuted && this.muted;
        if(!wasSpamming){
          this.addChatMessageTimestamp();
          socket.send(msgpack.encode({chat:t.value}));
        }else if(!justMuted && !this.muted)
          socketreceive({data: msgpack.encode({chatmsg:`You are doing that too much. Please slow down.`,id:`[SERVER]`,color:0xffceb7}).buffer});
        else if(justMuted)
          socketreceive({data: msgpack.encode({chatmsg:`Please do not spam. Muted for 30 seconds.`,id:`[SERVER]`,color:0xffceb7}).buffer});
        !this.muted && (t.value = ""),t.blur();
			}
			return
		}
		if (t && e.keyCode === ControlKeys.CHAT_KEY && playtesting)
			return void t.focus();
		if (t && document.activeElement !== t && e.keyCode === ControlKeys.COMMAND_KEY && playtesting)
			return t.value = "/",
			t.focus(),
			void e.preventDefault();
		const a = document.getElementById("mod-tools-duration-input");
		if (document.activeElement.nodeName!=="INPUT") {
			if (this.gameState.usingGamepad = !1,
      e.keyCode === ControlKeys.TOGGLE_UI_KEY){
        if(playtesting)this.gameState.drawUI=!this.gameState.drawUI;
        return settings.displayChat = this.gameState.drawUI,
        settings.displayLeaderboard = this.gameState.drawUI,
        //evadesRenderer.areaInfo.hidden === this.gameState.drawUI && evadesRenderer.areaInfo.toggleVisibility(),
        evadesRenderer.fpe_teach_icons.hidden === this.gameState.drawUI && activated_extensions.indexOf("rotatedWallAssets") != -1 && evadesRenderer.fpe_teach_icons.toggleVisibility(), // Don't show up when this addon is not enabled
        evadesRenderer.minimap.hidden === this.gameState.drawUI && evadesRenderer.minimap.toggleVisibility(),
        evadesRenderer.heroInfoCard.hidden === this.gameState.drawUI && evadesRenderer.heroInfoCard.toggleVisibility(),
        void (evadesRenderer.experienceBar.hidden === this.gameState.drawUI && evadesRenderer.experienceBar.toggleVisibility())
      }
			if(e.keyCode !== ControlKeys.TOGGLE_MAP_KEY_1 && e.keyCode !== ControlKeys.TOGGLE_MAP_KEY_2)
				return e.keyCode === ControlKeys.TOGGLE_HERO_INFO_KEY ? (evadesRenderer.heroInfoCard.toggleVisibility(),
				void evadesRenderer.experienceBar.toggleVisibility()) : void (e.keyCode !== ControlKeys.TOGGLE_MINIMAP_MODE_KEY ? e.keyCode === ControlKeys.TOGGLE_AREA_INFO_KEY ? evadesRenderer.areaInfo.toggleVisibility() : (e.keyCode === ControlKeys.TOGGLE_SHOWFPEICONS_KEY && activated_extensions.indexOf("rotatedWallAssets") != -1) ? evadesRenderer.fpe_teach_icons.toggleVisibility() : e.keyCode !== ControlKeys.TOGGLE_CHAT_KEY ? e.keyCode !== ControlKeys.TOGGLE_LEADERBOARD_KEY ? e.keyCode in GameKeyMap && ((GameKeyMap[e.keyCode]),
				e.preventDefault()) : (settings.displayLeaderboard=!settings.displayLeaderboard) : (settings.displayChat=!settings.displayChat) : evadesRenderer.minimap.toggleMinimapMode());
			evadesRenderer.minimap.toggleVisibility()
		}
	}
	onKeyUp(e) {
		if(!playtesting||!this.gameState)return;
		this.gameState.initial || e.keyCode in GameKeyMap && (this.gameState.keys&&this.gameState.keys.keyUp(GameKeyMap[e.keyCode]),
		this.gameState.usingGamepad = !1)
	}
  toggleUI(){
    this.drawUI = !this.drawUI
  }
	onBlur(e) {
		if(!playtesting||!this.gameState)return;
		this.gameState.initial || (this.gameState.keys&&this.gameState.keys.clear(GameKeyMap[e.keyCode]))
	}
	onMouseMove(e) {
		if(!playtesting)return;
		const t = this.canvas.getBoundingClientRect();
		let a = {};
		a.x = window.innerWidth / this.canvas.width,
		a.y = window.innerHeight / this.canvas.height,
		a = a.x < a.y ? a.x : a.y;
		let r = e;
		null != e.touches && (1 != this.touch.down && (this.touch.down = this.touch.wasDown = !0,
		this.touch.start.x = (e.touches[0].pageX - t.left) / a,
		this.touch.start.y = (e.touches[0].pageY - t.top) / a),
		this.touch.current.x = (e.touches[0].pageX - t.left) / a,
		this.touch.current.y = (e.touches[0].pageY - t.top) / a,
		r = e.touches[1] ? e.touches[1] : e.touches[0]),
		this.x = (mousePos.ex+this.canvas.width/2) / a,
		this.y = (mousePos.ey+this.canvas.height/2) / a
	}
	onMouseDown(e) {
		if(!playtesting)return;
		e.touches && void 0 === e.touches[1] && (this.touch.isTouch = !0,
		this.onMouseMove(e)),
		e.preventDefault(),
		this.canvas.focus(),
		this.canvas.blur(),
		this.down = !0,
		this.initialDown = !0,
		this.onMouseDownListeners.forEach((e => e()));
		this.gameState.usingGamepad = !1
	}
	onMouseUp(e) {
		if(!playtesting)return;
		e.touches && !e.touches[0] && (this.touch.down = !1),
		this.down = !1,
		this.initialDown = !1
	}
	onMouseLeave() {
		this.enteredButtons.forEach((e => {
			e.mouseOver = !1,
			e.mouseDown = !1
		}
		)),
		this.enteredButtons.clear(),
		this.down = !1
    //,this.canvas.style.cursor = "default"
	}
	onGamepadConnect(e) {
		this.gamepad = gamepadFn()[e.gamepad.index]
	}
	onGamepadDisconnect() {
		this.gamepad = null
	}
	onContextMenu(e) {
		if(!playtesting)return;
		e.preventDefault(),
		e.stopPropagation()
	}
	update(e) {
    canvasBox.setAttribute("style","--scale: "+Cam.originalGameScale);
		global.chat && (chat.style.visibility = playtesting && settings.displayChat ? "visible" : "hidden");
		global.leaderboard && (leaderboard.style.visibility = playtesting && settings.displayLeaderboard ? "visible" : "hidden");
		if(!playtesting){
			this.down = !1;
			this.initialDown = !1;
			this.mouseMovementToggled = !1;
			return;
		}
		const t = settings;
		let a, r = !1, c = !1, keys=new Set();
		for (let t = 0; t < this.buttons.length; t++) {
			const a = this.buttons[t];
			a.visible ? (!r && this.x >= a.x && this.x <= a.x + a.width && this.y >= a.y && this.y <= a.y + a.height ? (this.enteredButtons.add(a),
			a.mouseOver = !0,
			a.interactive && (this.down && !a.mouseDown ? (keysDown.add(a.key),controlPlayer(selfId,{keysDown}),
			a.onClick()) : !this.down && a.mouseDown && (keysDown.delete(a.key),controlPlayer(selfId,{keysDown})),
			a.mouseDown = this.down,
			c = !0),
			r = !0) : (a.mouseDown,
			a.clickStarted = !1,
			a.mouseOver = !1,
			a.mouseDown = !1,
			this.enteredButtons.has(a) && this.enteredButtons.delete(a))):(
			a.mouseOver = !1,
			a.mouseDown = !1
      )
		}
		if (t.toggleMouseMovement ? (this.initialDown && (this.mouseMovementToggled = !this.mouseMovementToggled, this.notifyToggleListeners()),
		a = this.mouseMovementToggled) : a = this.down,
		this.initialDown = !1,
		t.enableMouseMovement && (e.mouseDown = !r && a ? {
			x: Math.round(this.x - this.canvas.width / 2),
			y: Math.round(this.y - this.canvas.height / 2)
		} : null),
		// playtesting && (this.canvas.style.cursor = c ? "pointer" : "default"),
		this.gamepad) {
			this.gamepad = gamepadFn()[this.gamepad.index];
			for (let t = 0; t < this.gamepad.buttons.length; t++) {
				const a = [controls.FOCUS, controls.ACTION, controls.USE_ABILITY_THREE[0], controls.UPGRADE_ABILITY_THREE[0], controls.UPGRADE_ABILITY_ONE[0], controls.UPGRADE_ABILITY_TWO[0], controls.USE_ABILITY_ONE[0], controls.USE_ABILITY_TWO[0], null, null, controls.ACTION, null, controls.UP[0], controls.DOWN[0], controls.LEFT[0], controls.RIGHT[0], null, null][t];
				a && (this.gamepad.buttons[t].value && !this.gamepadDown.includes(a) ? (keysDown.add(a),
				this.gamepadDown.push(a),
				e.usingGamepad = !0) : !this.gamepad.buttons[t].value && this.gamepadDown.includes(a) && (keysDown.delete(a),
				this.gamepadDown.splice(this.gamepadDown.indexOf(a), 1),
				e.usingGamepad = !0))
			}
			const a = this.gamepad.axes[0]
			  , r = this.gamepad.axes[1];
			if (null !== a && null !== r && (Math.abs(a) > t.joystickDeadzone || Math.abs(r) > t.joystickDeadzone)) {
				const t = .25 * this.canvas.width
				  , c = .25 * this.canvas.height;
				e.mouseDown = {
					x: Math.round(a * t),
					y: Math.round(r * c)
				},
				e.usingGamepad = !0
			}
			const c = .7
			  , o = this.gamepad.axes[2]
			  , n = this.gamepad.axes[3];
			o <= -c && !this.gamepadDown.includes(controls.UPGRADE_SPEED[0]) ? (keysDown.add(controls.UPGRADE_SPEED[0]),
			this.gamepadDown.push(controls.UPGRADE_SPEED[0]),
			e.usingGamepad = !0) : this.gamepadDown.includes(controls.UPGRADE_SPEED[0]) && (keysDown.delete(controls.UPGRADE_SPEED[0]),
			this.gamepadDown.splice(this.gamepadDown.indexOf(controls.UPGRADE_SPEED[0]), 1),
			e.usingGamepad = !0),
			o >= c && !this.gamepadDown.includes(controls.UPGRADE_ENERGY_REGEN[0]) ? (keysDown.add(controls.UPGRADE_ENERGY_REGEN[0]),
			this.gamepadDown.push(controls.UPGRADE_ENERGY_REGEN[0]),
			e.usingGamepad = !0) : this.gamepadDown.includes(controls.UPGRADE_ENERGY_REGEN[0]) && (keysDown.delete(controls.UPGRADE_ENERGY_REGEN[0]),
			this.gamepadDown.splice(this.gamepadDown.indexOf(controls.UPGRADE_ENERGY_REGEN[0]), 1),
			e.usingGamepad = !0),
			n <= -c && !this.gamepadDown.includes(controls.UPGRADE_MAX_ENERGY[0]) ? (keysDown.add(controls.UPGRADE_MAX_ENERGY[0]),
			this.gamepadDown.push(controls.UPGRADE_MAX_ENERGY[0]),
			e.usingGamepad = !0) : this.gamepadDown.includes(controls.UPGRADE_MAX_ENERGY[0]) && (keysDown.delete(controls.UPGRADE_MAX_ENERGY[0]),
			this.gamepadDown.splice(this.gamepadDown.indexOf(controls.UPGRADE_MAX_ENERGY[0]), 1),
			e.usingGamepad = !0)
		} else
			this.touch.wasDown && (this.touch.down && Math.abs(this.touch.current.x - this.touch.start.x) >= 1 && Math.abs(this.touch.current.y - this.touch.start.y) >= 1 ? e.mouseDown = {
				x: this.touch.current.x - this.touch.start.x,
				y: this.touch.current.y - this.touch.start.y
			} : e.mouseDown = null)
	}
	addButton(e, a=(()=>{}
	)) {
		const t = {
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			visible: !0,
			interactive: !1,
			invalidDown: !1,
			mouseOver: !1,
			mouseDown: !1,
			key: e,
			onClick: a
		};
		return this.buttons.push(t),
		t
	}
	constructor() {
		this.canvas = document.getElementById("canvas"),
		this.x = 0,
		this.y = 0,
		this.rightClickDown = !1,
		this.down = !1,
		this.initialDown = !1,
		this.mouseMovementToggled = !1,
		this.toggleListeners = new Set,
		this.buttons = [],
		this.enteredButtons = new Set,
		this.gameState = null,
		this.updateChat = null,
		this.onMouseDownListeners = new Set,
		this.gamepad = null,
		this.gamepadDown = [],
		this.touch = {
			isTouch: !1,
			start: {
				x: 0,
				y: 0
			},
			current: {
				x: 0,
				y: 0
			},
			secondary: {
				x: 0,
				y: 0
			},
			down: !1,
			wasDown: !1
		},
		this.deregisterListeners = () => {}
	}
}
var $e7009c797811e935$export$2e2bcd8739ae039 = new $e7009c797811e935$var$InputLayer;

function $379de2c4e3c3d2a4$export$b88b9e8f55bb52b8(e) {
	const t = settings.legacySpeedUnits;
	return e.replace(/\{\{speed\|([0-9\/.]+)}}/g, ((e,n)=>function(e) {
		return t ? e.split("/").map((e=>parseFloat(e) / 30)).join("/") : e
	}(n)))
}
const $1c037512d4c36cef$var$HERO_NAME_FONT_SIZE = 18
  , $1c037512d4c36cef$var$ABILITY_DESCRIPTION_FONT_SIZE = 10
  , $1c037512d4c36cef$var$ABILITY_IMAGE_SIZE = 48
  , $1c037512d4c36cef$var$keys = {"UNDEFINED_KEYTYPE":0,"W_KEY":1,"A_KEY":2,"S_KEY":3,"D_KEY":4,"UP_KEY":5,"LEFT_KEY":6,"DOWN_KEY":7,"RIGHT_KEY":8,"FOCUS_KEY":9,"ABILITY_ONE_KEY":10,"ABILITY_TWO_KEY":11,"ABILITY_THREE_KEY":12,"ACTION_KEY":13,"UPGRADE_SPEED_KEY":14,"UPGRADE_MAX_ENERGY_KEY":15,"UPGRADE_ENERGY_REGEN_KEY":16,"UPGRADE_ABILITY_ONE_KEY":17,"UPGRADE_ABILITY_TWO_KEY":18,"UPGRADE_ABILITY_THREE_KEY":19};
class HeroInfoCard extends EvadesEntity {
	constructor() {
		super(),
		this.width = 516,
		this.height = 85,
		this.abilityOne = new Ability,
		this.abilityTwo = new Ability,
		this.abilityThree = new Ability,
		this.upgradeMode = !1,
		this.upgradeBrightness = new Oscillator(175,175,255,150,!0),
		this.isTouchAdjusted = !1,
		this.buttons = {
			interactionIndicator: $e7009c797811e935$export$2e2bcd8739ae039.addButton(null),
			speed: $e7009c797811e935$export$2e2bcd8739ae039.addButton(null),
			maxEnergy: $e7009c797811e935$export$2e2bcd8739ae039.addButton(null),
			energyRegen: $e7009c797811e935$export$2e2bcd8739ae039.addButton(null),
			useAbilityOne: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.USE_ABILITY_ONE[0]),
			useAbilityTwo: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.USE_ABILITY_TWO[0]),
			useAbilityThree: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.USE_ABILITY_THREE[0]),
			upgradeSpeed: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.UPGRADE_SPEED[0]),
			upgradeEnergy: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.UPGRADE_MAX_ENERGY[0]),
			upgradeRegen: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.UPGRADE_ENERGY_REGEN[0]),
			upgradeAbilityOne: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.UPGRADE_ABILITY_ONE[0]),
			upgradeAbilityTwo: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.UPGRADE_ABILITY_TWO[0]),
			upgradeAbilityThree: $e7009c797811e935$export$2e2bcd8739ae039.addButton(controls.UPGRADE_ABILITY_THREE[0])
		},
		this.ready = !1,
		this.hidden = !1
	}
	adjustToTouch() {
		this.isTouchAdjusted = !0,
		this.buttons.speed.key = controls.UPGRADE_SPEED[0],
		this.buttons.maxEnergy.key = controls.UPGRADE_MAX_ENERGY[0],
		this.buttons.energyRegen.key = controls.UPGRADE_ENERGY_REGEN[0],
		this.buttons.hero = $e7009c797811e935$export$2e2bcd8739ae039.addButton(null, (e => {
			this.changeUpgradeMode()
		}
		)),
		this.buttons.hero.interactive = !0,
		this.buttons.speed.interactive = !0,
		this.buttons.maxEnergy.interactive = !0,
		this.buttons.energyRegen.interactive = !0
	}
	changeUpgradeMode() {
		this.upgradeMode = !this.upgradeMode,
		this.upgradeMode ? (this.buttons.useAbilityOne.key = controls.UPGRADE_ABILITY_ONE[0],
		this.buttons.useAbilityTwo.key = controls.UPGRADE_ABILITY_TWO[0],
		this.buttons.useAbilityThree.key = controls.UPGRADE_ABILITY_THREE[0]) : (this.buttons.useAbilityOne.key = controls.USE_ABILITY_ONE[0],
		this.buttons.useAbilityTwo.key = controls.USE_ABILITY_TWO[0],
		this.buttons.useAbilityThree.key = controls.USE_ABILITY_THREE[0])
	}
	newButton(e) {
		return {
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			visible: !0,
			interactive: !1,
			invalidDown: !1,
			mouseOver: !1,
			mouseDown: !1,
			key: e
		}
	}
	stateFields() {
		return ["heroType", "speed", "level", "energy", "maxEnergy", "energyRegen", "upgradePoints", "abilityOne", "abilityTwo", "abilityThree", "regionName", "playerInteractions", "storedPellets", "mutatiorbBuffSpeedBoost", "mutatiorbBuffCooldownReduction", "mutatiorbBuffExperienceGain", "mutatiorbBuffed", "abilityRemoved", "energized", "sweetToothConsumed", "totalSpeed", "totalEnergyRegen", "inStreamPath", "canGainEnergy"]
	}
	afterStateUpdate() {
		if (void 0 === this.heroType)
			return void (this.ready = !1);
		const e = $01bb7fd9b3660a1e$export$71c647defb4fbd5a(this.heroType);
		this.heroName = e.name,
		this.heroColor = e.textColor,
		this.ready = !0
	}
	toggleVisibility() {
		this.hidden = !this.hidden;
		for (const e of Object.values(this.buttons))
			e.interactive = !this.hidden,
			e.visible = !this.hidden
	}
	render(e, t, a, delta) {
		if (!this.ready || this.hidden)
			return;
		$e7009c797811e935$export$2e2bcd8739ae039.touch.isTouch && !this.isTouchAdjusted && this.adjustToTouch();
		const r = t.viewportSize
		  , c = t.toGuiScale(this.width)
		  , f = t.toGuiScale(this.height)
		  , o = r.width / 2 - c / 2
		  , n = r.height - f;
		this.x = o,
		this.y = n;
		let $, d = o, i = n;
		if (e.strokeStyle = "#000000",
		e.fillStyle = "rgba(0, 0, 0, 0.8)",
		$ = void 0 === this.abilityThree.abilityType || this.abilityRemoved ? c : c + t.toGuiScale(80),
		$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, o, n, $, f, !0, !1),
		d = o + t.toGuiScale(55),
		i = n + t.toGuiScale(20),
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale($1c037512d4c36cef$var$HERO_NAME_FONT_SIZE)),
		e.textAlign = "center",
		e.fillStyle = this.heroColor,
		e.fillText(this.heroName, d, i),
		d = o + t.toGuiScale(55),
		i = n + t.toGuiScale(55),
		e.fillStyle = this.heroColor,
		$f36928166e04fda7$export$2e2bcd8739ae039.arc(e, d, i, t.toGuiScale(23), !0, !1),
		this.buttons.hero) {
			if (this.buttons.hero.x = d - t.toGuiScale(23),
			this.buttons.hero.y = i - t.toGuiScale(23),
			this.buttons.hero.width = t.toGuiScale(46),
			this.buttons.hero.height = t.toGuiScale(46),
			this.buttons.hero.mouseOver) {
				const a = t.toGuiScale(180)
				  , r = t.toGuiScale(40);
				this.renderStatTooltip(e, t, "Upgrade mode: " + ["off", "on"][+this.upgradeMode], d - a / 2, i - r - t.toGuiScale(35), a, r)
			}
			!this.upgradeMode && this.upgradePoints > 0 && (d -= t.toGuiScale(28),
			i -= t.toGuiScale(10),
			e.fillStyle = "#aaaaaa",
			e.beginPath(),
			e.moveTo(d, i),
			e.lineTo(d - t.toGuiScale(15), i),
			e.lineTo(d - t.toGuiScale(10.5), i - t.toGuiScale(6)),
			e.lineTo(d - t.toGuiScale(19.5), i - t.toGuiScale(15)),
			e.lineTo(d - t.toGuiScale(15), i - t.toGuiScale(19.5)),
			e.lineTo(d - t.toGuiScale(6), i - t.toGuiScale(10.5)),
			e.lineTo(d, i - t.toGuiScale(15)),
			e.fill())
		}
		d = o + t.toGuiScale(55),
		i = n + t.toGuiScale(63),
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(22)),
		e.textAlign = "center",
		e.fillStyle = "white",
		this.mutatiorbBuffExperienceGain && this.mutatiorbBuffed && (e.fillStyle = "yellow"),
		e.fillText(this.level, d, i),
		0 === this.playerInteractions ? (d = o + t.toGuiScale(4),
		i = n + t.toGuiScale(71),
		e.fillStyle = "#666666",
		e.beginPath(),
		e.moveTo(d, i + t.toGuiScale(10)),
		e.lineTo(d + t.toGuiScale(6), i),
		e.lineTo(d + t.toGuiScale(12), i + t.toGuiScale(10)),
		e.fill()) : 1 === this.playerInteractions && (d = o + t.toGuiScale(4),
		i = n + t.toGuiScale(71),
		e.fillStyle = "#666666",
		e.beginPath(),
		e.moveTo(d, i),
		e.lineTo(d + t.toGuiScale(10), i),
		e.lineTo(d + t.toGuiScale(10), i + t.toGuiScale(10)),
		e.lineTo(d, i + t.toGuiScale(10)),
		e.fill()),
		this.buttons.interactionIndicator.x = d,
		this.buttons.interactionIndicator.y = i,
		this.buttons.interactionIndicator.width = t.toGuiScale(10),
		this.buttons.interactionIndicator.height = t.toGuiScale(10),
		this.playerInteractions <= 1 && this.buttons.interactionIndicator.mouseOver && (e.fillStyle = "rgba(0, 0, 0, 0.65)",
		$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, d - t.toGuiScale(14), i - t.toGuiScale(22), t.toGuiScale(40), t.toGuiScale(20), !0, !1),
		e.textAlign = "center",
		e.fillStyle = "white",
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(14)),
		e.fillText(0 === this.playerInteractions ? "Solo" : "Duo", d + t.toGuiScale(5), i - t.toGuiScale(7))),
		d = o + t.toGuiScale(105),
		i = n,
		e.strokeStyle = "rgb(128, 128, 128)",
		$f36928166e04fda7$export$2e2bcd8739ae039.line(e, d, i, d, i + f),
		this.upgradeBrightness.update(delta);
		const s = t.toGuiScale(136)
		  , l = t.toGuiScale(16);
		this.upgradePoints > 0 && (d = o + s,
		i = n + l,
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(13)),
		e.fillStyle = "white",
		e.fillText("Points:", d, i));
		const b = Math.round(10 * this.speed) / 10
		  , p = Math.round(1e3 * this.energyRegen) / 1e3
		  , u = b < EvadesConfig.upgrades.speed.max
		  , h = this.maxEnergy.toFixed(3) < EvadesConfig.upgrades.max_energy.max
		  , x = p < EvadesConfig.upgrades.energy_regen.max
		  , m = this.abilityOne && this.abilityOne.level !== this.abilityOne.maxLevel
		  , v = this.abilityTwo && this.abilityTwo.level !== this.abilityTwo.maxLevel
		  , g = this.abilityThree && this.abilityThree.level !== this.abilityThree.maxLevel
		  , y = u || h || x || m || v || g
		  , S = t.toGuiScale(6)
		  , w = t.toGuiScale(169)
		  , _ = t.toGuiScale(12)
		  , C = y ? Math.round((this.upgradeBrightness.value - this.upgradeBrightness.min) / 3) : 0;
		let M = 200
		  , z = 200
		  , E = 0;
		if (e.fillStyle = `rgb(${200 + C}, ${200 + C}, ${C})`,
		this.upgradePoints > 8) {
			const a = t.toGuiScale(8);
			d = o + w,
			i = n + _,
			$f36928166e04fda7$export$2e2bcd8739ae039.arc(e, d, i, a, !0, !1),
			i = n + l,
			e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(10)),
			e.textAlign = "center",
			M = 0,
			z = 0,
			E = 0,
			e.fillStyle = `rgb(${M + C}, ${z + C}, ${E + C})`,
			e.fillText(this.upgradePoints, d, i)
		} else
			for (let a = 0; a < this.upgradePoints; a++)
				i = n + _,
				d = o + w + a * t.toGuiScale(20),
				$f36928166e04fda7$export$2e2bcd8739ae039.arc(e, d, i, S, !0, !1);
		const H = t.toGuiScale(82)
		  , k = t.toGuiScale(105)
		  , L = t.toGuiScale(41)
		  , N = t.toGuiScale(52);
		d = o + k,
		i = n + t.toGuiScale(17);
		let V = this.speed;
		settings.detailedHeroCardStats && (V = this.totalSpeed),
		settings.legacySpeedUnits && (V /= 30);
		let T = this.energyRegen;
		settings.detailedHeroCardStats && (T = this.totalEnergyRegen);
		const A = Math.round(10 * V) / 10
		  , R = Math.round(1e3 * T) / 1e3;
		this.renderStat(e, t, "Speed", "Zoom zoom!\nHold shift to slow down.", A, d, i, this.buttons.speed, this.mutatiorbBuffSpeedBoost && this.mutatiorbBuffed, !1, this.sweetToothConsumed),
		this.renderUpgrade(e, t, d + L, i + N, u, a.usingGamepad ? "R←" : 1, this.buttons.upgradeSpeed),
		d = o + k + H,
		this.renderStat(e, t, "Energy", "Used for abilities.", this.energyInfo(), d, i, this.buttons.maxEnergy, !1, !1, !1, this.inStreamPath),
		this.renderUpgrade(e, t, d + L, i + N, h, a.usingGamepad ? "R↑" : 2, this.buttons.upgradeEnergy),
		d = o + k + 2 * H,
		this.renderStat(e, t, "Regen", "How quickly your\nenergy comes back.", Math.round(10 * R) / 10, d, i, this.buttons.energyRegen, !1, this.energized, this.sweetToothConsumed, !1, this.canGainEnergy),
		this.renderUpgrade(e, t, d + L, i + N, x, a.usingGamepad ? "R→" : 3, this.buttons.upgradeRegen),
		d = o + k + 3 * H,
		i = n + t.toGuiScale(17),
		this.abilityOne && void 0 !== this.abilityOne.abilityType && this.renderAbility(e, t, this.abilityOne, d, i, a.usingGamepad ? ["ZL"] : ["Z", "J"], a.usingGamepad ? "L" : 4, this.buttons.useAbilityOne, this.buttons.upgradeAbilityOne, this.mutatiorbBuffCooldownReduction && this.mutatiorbBuffed),
		d = o + k + 4 * H,
		this.abilityTwo && void 0 !== this.abilityTwo.abilityType && this.renderAbility(e, t, this.abilityTwo, d, i, a.usingGamepad ? ["ZR"] : ["X", "K"], a.usingGamepad ? "R" : 5, this.buttons.useAbilityTwo, this.buttons.upgradeAbilityTwo, this.mutatiorbBuffCooldownReduction && this.mutatiorbBuffed),
		this.abilityThree && void 0 !== this.abilityThree.abilityType && (d = o + k + 5 * H,
		this.renderAbility(e, t, this.abilityThree, d, i, a.usingGamepad ? ["Y"] : ["C", "L"], a.usingGamepad ? ["X"] : 6, this.buttons.useAbilityThree, this.buttons.upgradeAbilityThree, this.mutatiorbBuffCooldownReduction && this.mutatiorbBuffed))
	}
	energyInfo() {
		return `${Math.floor(this.energy)} / ${this.maxEnergy}`
	}
	renderStat(e, t, a, r, c, f, o, n, $=!1, d=!1, i=!1, s=!1, l=!0) {
		if (n.x = f,
		n.y = o + t.toGuiScale(10),
		n.width = t.toGuiScale(82),
		n.height = t.toGuiScale(40),
		n.mouseOver) {
			const a = t.toGuiScale(185)
			  , c = t.toGuiScale(60);
			this.renderStatTooltip(e, t, r, f + n.width / 2 - a / 2, o - c - t.toGuiScale(35), a, c)
		}
		f += t.toGuiScale(41),
		o += t.toGuiScale(44),
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(10)),
		e.fillStyle = "white",
		s && (e.fillStyle = "rgb(41, 255, 198)"),
		$ && (e.fillStyle = "yellow"),
		d && (e.fillStyle = "yellow"),
		i && (e.fillStyle = "rgb(255, 43, 143)"),
		l || (e.fillStyle = "rgb(110, 110, 117)"),
		e.fillText(`${a}`, f, o),
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(22)),
		e.fillText(c, f, o - t.toGuiScale(17))
	}
	renderStatTooltip(e, t, a, r, c, f, o) {
		e.fillStyle = "rgba(0, 0, 0, 0.65)",
		$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, r, c, f, o, !0, !1),
		e.textAlign = "center",
		e.fillStyle = "white",
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(16)),
		$f36928166e04fda7$export$2e2bcd8739ae039.multilineText(e, a, r + f / 2, c + t.toGuiScale(25), {
			stroke: !1,
			fill: !0,
			lineHeight: t.toGuiScale(20),
			fromTop: !0
		})
	}
	renderAbility(e, t, a, r, c, f, o, n, $, d=!1) {
		a.maxLevel=abilityConfig[a.abilityType].levels.length;
		const i = t.toGuiScale($1c037512d4c36cef$var$ABILITY_IMAGE_SIZE);
		if (r += t.toGuiScale(41) - i / 2,
		n.interactive = !0,
		d) {
			const a = t.toGuiScale(2);
			e.fillStyle = "rgb(110, 57, 30)",
			e.fillRect(r - a, c - a, i + 2 * a, i + 2 * a)
		}
		if (!this.upgradeMode && a.locked || this.upgradeMode && 0 === this.upgradePoints)
			a.image.draw(e, 0, r, c, i, i),
			e.fillStyle = "rgba(0, 0, 0, 0.6)",
			$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, r, c, i, i, !0, !1),
			n.interactive = !1;
		else {
			if (a.image.draw(e, 0, r, c, i, i),
			"Mutatiorb" === a.name) {
				$31e8cfefa331e399$export$93e5c64e4cc246c8(`abilities/mutatiorb_${this.storedPellets}`).draw(e, 0, r, c, i, i)
			}
			!n.mouseDown && n.mouseOver ? (e.fillStyle = "rgba(0, 0, 0, 0.1)",
			$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, r, c, i, i, !0, !1)) : n.mouseDown || n.mouseOver || (e.fillStyle = "rgba(0, 0, 0, 0.2)",
			$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, r, c, i, i, !0, !1))
		}
		if (!this.upgradeMode)
			if (a.disabled)
				e.fillStyle = "rgba(0, 0, 0, 0.7)",
				e.fillRect(r, c, i, i),
				n.interactive = !1;
			else if (a.cooldown > 0) {
				e.fillStyle = "rgba(0, 0, 0, 0.7)";
				const t = a.cooldown / a.totalCooldown;
				1 === t ? $f36928166e04fda7$export$2e2bcd8739ae039.rect(e, r, c, i, i, !0, !1) : $f36928166e04fda7$export$2e2bcd8739ae039.sectorInRect(e, r, c, i, i, 360 * (1 - t) - 90),
				n.interactive = !1
			}
		if (n.mouseOver) {
			const f = t.toGuiScale(235)
			  , o = $379de2c4e3c3d2a4$export$b88b9e8f55bb52b8(a.description)
			  , n = o.split("\n").length * t.toGuiScale(20) + t.toGuiScale(40);
			this.renderAbilityTooltip(e, t, a, o, r + i / 2 - f / 2, c - n - t.toGuiScale(35), f, n)
		}
		n.x = r,
		n.y = c,
		n.width = i,
		n.height = i;
		const s = t.toGuiScale(3)
		  , l = r + t.toGuiScale(5)
		  , b = r + t.toGuiScale(45)
		  , p = c - t.toGuiScale(9);
		a.locked ? e.strokeStyle = "rgb(150, 150, 150)" : e.strokeStyle = "rgb(200, 200, 200)";
		for (let t = 0; t < a.maxLevel; t++) {
			let r = l + (b - l) / 2;
			a.maxLevel > 1 && (r = l + (b - l) * (t / (a.maxLevel - 1))),
			$f36928166e04fda7$export$2e2bcd8739ae039.arc(e, r, p, s, !1, !0)
		}
		e.strokeStyle = "rgb(255, 255, 0)",
		e.fillStyle = e.strokeStyle;
		for (let t = 0; t < a.level; t++) {
			let r = l + (b - l) / 2;
			a.maxLevel > 1 && (r = l + (b - l) * (t / (a.maxLevel - 1))),
			$f36928166e04fda7$export$2e2bcd8739ae039.arc(e, r, p, s, !0, !0)
		}
		if (e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale($1c037512d4c36cef$var$ABILITY_DESCRIPTION_FONT_SIZE)),
		e.textAlign = "center",
		e.fillStyle = "white",
		a.locked && 0 === this.upgradePoints) {
			const a = "Locked";
			e.fillText(a, r + i / 2, c + i + t.toGuiScale(12))
		} else if (0 === this.upgradePoints) {
			const a = `[${f.join("] or [")}]`;
			e.fillText(a, r + i / 2, c + i + t.toGuiScale(12))
		} else {
			const f = a.level !== a.maxLevel;
			this.renderUpgrade(e, t, r + i / 2, c + i + t.toGuiScale(4), f, o, $)
		}
	}
	renderAbilityTooltip(e, t, a, r, c, f, o, n) {
		e.fillStyle = "rgba(0, 0, 0, 0.65)",
		$f36928166e04fda7$export$2e2bcd8739ae039.rect(e, c, f, o, n, !0, !1),
		e.textAlign = "center",
		e.fillStyle = "white",
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(22)),
		e.fillText(a.name, c + o / 2, f + t.toGuiScale(25)),
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(16)),
		$f36928166e04fda7$export$2e2bcd8739ae039.multilineText(e, r, c + o / 2, f + t.toGuiScale(50), {
			stroke: !1,
			fill: !0,
			lineHeight: t.toGuiScale(20),
			fromTop: !0,
			numberColor: !0
		})
	}
	renderUpgrade(e, t, a, r, c, f, o) {
		if (0 === this.upgradePoints)
			return void (o.interactive = !1);
		let n, $, d = Math.round((this.upgradeBrightness.value - this.upgradeBrightness.min) / 3), i = 0;
		n = 200,
		$ = 200,
		i = 0,
		o.interactive = !0,
		c ? o.mouseDown && o.mouseOver ? d = 80 : o.mouseOver && (d = 50) : (o.interactive = !1,
		d = -120),
		e.fillStyle = `rgb(${n + d}, ${$ + d}, ${i + d})`,
		e.strokeStyle = e.fillStyle;
		const s = t.toGuiScale(12)
		  , l = t.toGuiScale(12);
		o.x = a - l / 2,
		o.y = r,
		o.width = l + t.toGuiScale(2),
		o.height = s + t.toGuiScale(2),
		$f36928166e04fda7$export$2e2bcd8739ae039.roundedRect(e, o.x, o.y, l, s, 1, !0, !0),
		e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(12)),
		f.length > 1 && (e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(8))),
		n = 0,
		$ = 0,
		i = 0,
		e.fillStyle = `rgb(${n + d}, ${$ + d}, ${i + d})`,
		e.fillText(f, a, r + t.toGuiScale(10))
	}
}
let $e913e8e06e143c8e$var$cachedAreaText = null;
var $24bba5be1b54b934$exports = {}
/*alea*/, $3TM9N = function(e,t,a){function r(e){var t=this,a=function(){var e=4022871197,t=function(t){t=String(t);for(var a=0;a<t.length;a++){var r=.02519603282416938*(e+=t.charCodeAt(a));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)};return t}();t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=a(" "),t.s1=a(" "),t.s2=a(" "),t.s0-=a(e),t.s0<0&&(t.s0+=1),t.s1-=a(e),t.s1<0&&(t.s1+=1),t.s2-=a(e),t.s2<0&&(t.s2+=1),a=null}function c(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function o(e,t){var a=new r(e),o=t&&t.state,n=a.next;return n.int32=function(){return 4294967296*a.next()|0},n.double=function(){return n()+11102230246251565e-32*(2097152*n()|0)},n.quick=n,o&&("object"==typeof o&&c(o,a),n.state=function(){return c(a,{})}),n}return o}(false)
/*xor128*/, $1QrEl = function(e,t,a){function r(e){var t=this,a="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:a+=e;for(var r=0;r<a.length+64;r++)t.x^=0|a.charCodeAt(r),t.next()}function c(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function o(e,t){var a=new r(e),o=t&&t.state,n=function(){return(a.next()>>>0)/4294967296};return n.double=function(){do{var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/2097152}while(0===e);return e},n.int32=a.next,n.quick=n,o&&("object"==typeof o&&c(o,a),n.state=function(){return c(a,{})}),n}return o}(false)
/*xorwow*/, $ept1H = function(e,t,a){function r(e){var t=this,a="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:a+=e;for(var r=0;r<a.length+64;r++)t.x^=0|a.charCodeAt(r),r==a.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function c(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function o(e,t){var a=new r(e),o=t&&t.state,n=function(){return(a.next()>>>0)/4294967296};return n.double=function(){do{var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/2097152}while(0===e);return e},n.int32=a.next,n.quick=n,o&&("object"==typeof o&&c(o,a),n.state=function(){return c(a,{})}),n}return o}(false)
/*xorshift7*/, $cPL7v = function(e,t,a){function r(e){var t=this;t.next=function(){var e,a,r=t.x,c=t.i;return e=r[c],a=(e^=e>>>7)^e<<24,a^=(e=r[c+1&7])^e>>>10,a^=(e=r[c+3&7])^e>>>3,a^=(e=r[c+4&7])^e<<7,e=r[c+7&7],a^=(e^=e<<13)^e<<9,r[c]=a,t.i=c+1&7,a},function(e,t){var a,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,a=0;a<t.length;++a)r[7&a]=r[7&a]<<15^t.charCodeAt(a)+r[a+1&7]<<13;for(;r.length<8;)r.push(0);for(a=0;a<8&&0===r[a];++a);for(8==a?r[7]=-1:r[a],e.x=r,e.i=0,a=256;a>0;--a)e.next()}(t,e)}function c(e,t){return t.x=e.x.slice(),t.i=e.i,t}function o(e,t){null==e&&(e=+new Date);var a=new r(e),o=t&&t.state,n=function(){return(a.next()>>>0)/4294967296};return n.double=function(){do{var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/2097152}while(0===e);return e},n.int32=a.next,n.quick=n,o&&(o.x&&c(o,a),n.state=function(){return c(a,{})}),n}return o}(false)
/*xor4096*/, $hDaqC = function(e,t,a){function r(e){var t=this;t.next=function(){var e,a,r=t.w,c=t.X,o=t.i;return t.w=r=r+1640531527|0,a=c[o+34&127],e=c[o=o+1&127],a^=a<<13,e^=e<<17,a^=a>>>15,e^=e>>>12,a=c[o]=a^e,t.i=o,a+(r^r>>>16)|0},function(e,t){var a,r,c,o,n,$=[],i=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,i=Math.max(i,t.length)),c=0,o=-32;o<i;++o)t&&(r^=t.charCodeAt((o+32)%t.length)),0===o&&(n=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,o>=0&&(n=n+1640531527|0,c=0==(a=$[127&o]^=r+n)?c+1:0);for(c>=128&&($[127&(t&&t.length||0)]=-1),c=127,o=512;o>0;--o)r=$[c+34&127],a=$[c=c+1&127],r^=r<<13,a^=a<<17,r^=r>>>15,a^=a>>>12,$[c]=r^a;e.w=n,e.X=$,e.i=c}(t,e)}function c(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function o(e,t){null==e&&(e=+new Date);var a=new r(e),o=t&&t.state,n=function(){return(a.next()>>>0)/4294967296};return n.double=function(){do{var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/2097152}while(0===e);return e},n.int32=a.next,n.quick=n,o&&(o.X&&c(o,a),n.state=function(){return c(a,{})}),n}return o}(false)
/*tychei*/, $6b2mt = function(e,t,a){function r(e){var t=this,a="";t.next=function(){var e=t.b,a=t.c,r=t.d,c=t.a;return e=e<<25^e>>>7^a,a=a-r|0,r=r<<24^r>>>8^c,c=c-e|0,t.b=e=e<<20^e>>>12^a,t.c=a=a-r|0,t.d=r<<16^a>>>16^c,t.a=c-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):a+=e;for(var r=0;r<a.length+20;r++)t.b^=0|a.charCodeAt(r),t.next()}function c(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function o(e,t){var a=new r(e),o=t&&t.state,n=function(){return(a.next()>>>0)/4294967296};return n.double=function(){do{var e=((a.next()>>>11)+(a.next()>>>0)/4294967296)/2097152}while(0===e);return e},n.int32=a.next,n.quick=n,o&&("object"==typeof o&&c(o,a),n.state=function(){return c(a,{})}),n}return o}(false)
  , $9d5ae4eadf0f1327$exports = {};
!function(e,t,a){var r,c=256,o="random",n=a.pow(c,6),$=a.pow(2,52),i=2*$,d=255;function s(d,s,x){var h=[],m=b(p((s=1==s?{entropy:!0}:s||{}).entropy?[d,u(t)]:null==d?function(){try{var a;return r&&(a=r.randomBytes)?a=a(c):(a=new Uint8Array(c),(e.crypto||e.msCrypto).getRandomValues(a)),u(a)}catch(a){var o=e.navigator,n=o&&o.plugins;return[+new Date,e,n,e.screen,u(t)]}}():d,3),h),v=new f(h),g=function(){for(var e=v.g(6),t=n,a=0;e<$;)e=(e+a)*c,t*=c,a=v.g(1);for(;e>=i;)e/=2,t/=2,a>>>=1;return(e+a)/t};return g.int32=function(){return 0|v.g(4)},g.quick=function(){return v.g(4)/4294967296},g.double=g,b(u(v.S),t),(s.pass||x||function(e,t,r,c){return c&&(c.S&&l(c,v),e.state=function(){return l(v,{})}),r?(a[o]=e,t):e})(g,m,"global"in s?s.global:this==a,s.state)}function f(e){var t,a=e.length,r=this,o=0,n=r.i=r.j=0,$=r.S=[];for(a||(e=[a++]);o<c;)$[o]=o++;for(o=0;o<c;o++)$[o]=$[n=d&n+e[o%a]+(t=$[o])],$[n]=t;(r.g=function(e){for(var t,a=0,o=r.i,n=r.j,$=r.S;e--;)t=$[o=d&o+1],a=a*c+$[d&($[o]=$[n=d&n+t])+($[n]=t)];return r.i=o,r.j=n,a})(c)}function l(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function p(e,t){var a,r=[],c=typeof e;if(t&&"object"==c)for(a in e)try{r.push(p(e[a],t-1))}catch(e){}return r.length?r:"string"==c?e:e+"\0"}function b(e,t){for(var a,r=e+"",c=0;c<r.length;)t[d&c]=d&(a^=19*t[d&c])+r.charCodeAt(c++);return u(t)}function u(e){return String.fromCharCode.apply(0,e)}if(b(a.random(),t),$9d5ae4eadf0f1327$exports){$9d5ae4eadf0f1327$exports=s;try{r={exports:{}}}catch(e){}}else"function"==typeof define&&define.amd?define((function(){return s})):a["seed"+o]=s}("undefined"!=typeof self?self:$9d5ae4eadf0f1327$exports,[],Math),
$9d5ae4eadf0f1327$exports.alea = $3TM9N,
$9d5ae4eadf0f1327$exports.xor128 = $1QrEl,
$9d5ae4eadf0f1327$exports.xorwow = $ept1H,
$9d5ae4eadf0f1327$exports.xorshift7 = $cPL7v,
$9d5ae4eadf0f1327$exports.xor4096 = $hDaqC,
$9d5ae4eadf0f1327$exports.tychei = $6b2mt,
$24bba5be1b54b934$exports = $9d5ae4eadf0f1327$exports;
class OverlayText extends EvadesEntity{	
	static defaultX = 0;
	static defaultY = 240;
	static defaultFontSize = 28;
	static defaultLineHeight = 35;
	static defaultTextAlign = "center";
	static defaultFillStyle = "#00ff6b";
	static defaultStrokeStyle = "#006b2c";
	static defaultLineWidth = 5;
	constructor(){super(),this.animations=new Map}
	stateFields() {
		return ["x", "y", "areaPosition", "areaName", "areaNumber", "regionName", "victoryArea", "isGuest", "highestAreaAchieved", "accessories", "canCling", "canSubscribe", "hasWindDebuff", "hasWaterDebuff", "hasFireDebuff", "hasEarthDebuff", "abilityHelperTime", "abilityHelperType"]
	}
	render(e, t, a) {
		if (!a.drawUI)
			return;
		const r = t.viewportSize;
		let c = [];
		const f = this.getTutorialText();
		if (f.length > 0)
			c = c.concat(f);
		else {
			const e = this.getAreaText(a);
			e.length > 0 ? c = c.concat(e) : settings.displayGameplayHints && (c = c.concat(this.getActionText(a)))
		}
		for (const e of this.animations.keys())
			c.some((t => this.getAnimationKey(t) === e)) || this.animations.delete(e);
		for (const a of c)
			this.renderText(e, t, a, r)
	}
	getAnimationKey(e) {
		let t = e.text;
		return void 0 !== e.x && (t += `-${e.x}`),
		void 0 !== e.y && (t += `-${e.y}`),
		t
	}
	renderText(e, t, a, r) {
		const c = r.width / 2 + t.toGuiScale(a.x || OverlayText.defaultX)
		  , f = r.height / 2 + t.toGuiScale(a.y || OverlayText.defaultY)
		  , o = this.getAnimationKey(a);
		this.animations.has(o) || this.animations.set(o, {
			progress: 0,
			lastTime: new Date
		});
		const n = this.animations.get(o);
		e.save(),
		e.font = a.font || `bold ${$f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(a.fontSize || OverlayText.defaultFontSize))}`,
		e.textAlign = a.textAlign || OverlayText.defaultTextAlign,
		e.lineWidth = t.toGuiScale(a.lineWidth || OverlayText.defaultLineWidth),
		e.strokeStyle = a.strokeStyle || OverlayText.defaultStrokeStyle,
		e.fillStyle = a.fillStyle || OverlayText.defaultFillStyle;
		const $ = a.opacity || 1;
		if (e.globalAlpha = $,
		a.animation) {
			switch (a.animation.type) {
			case "fadeIn":
				e.globalAlpha = Math.min($, n.progress / a.animation.duration);
				break;
			case "fadeOut":
				e.globalAlpha = Math.max(0, $ - n.progress / a.animation.duration);
				break;
			case "fadeInAndOut":
				const t = a.animation.fadeInDuration || 150
				  , r = a.animation.fadeOutDuration || 150
				  , c = a.animation.duration;
				if (n.progress < t)
					e.globalAlpha = Math.min($, n.progress / t);
				else if (n.progress >= c - r) {
					const t = n.progress - (c - r);
					e.globalAlpha = Math.max(0, $ - t / r)
				}
				break;
			case "typewriter":
				{
					const e = Math.floor(n.progress / a.animation.duration * a.text.length);
					a.text = a.text.substring(0, e);
					break
				}
			}
			const t = new Date;
			n.progress += t - n.lastTime,
			n.lastTime = t
		}
		$f36928166e04fda7$export$2e2bcd8739ae039.multilineText(e, a.text, c, f, {
			fill: a.fill || !0,
			stroke: a.stroke || !0,
			lineHeight: t.toGuiScale(a.lineHeight || OverlayText.defaultLineHeight),
			fromTop: a.fromTop || !1
		}),
		e.restore()
	}
	getAreaText(){const e=this.x,t=this.y,a=$e728d5a493f33528$export$69dd9a529c505ede(this.highestAreaAchieved||defaultHighestAreaAchieved),r={"Central Core":{11:{text:"",heroUnlock:"Morfe",heroUnlockOnly:!0},21:{text:"Half way there.",heroUnlock:"Aurora",heroUnlockOnly:!0},41:{text:"You defeated Central Core.",victoryPoints:1,heroUnlock:"Necro"}},"Central Core Hard":{11:{text:"",heroUnlock:"Morfe",heroUnlockOnly:!0},21:{text:"Half way there.",heroUnlock:"Aurora",heroUnlockOnly:!0},41:{text:"You hardly defeated Central Core Hard.",victoryPoints:6,heroUnlock:"Necro"}},"Catastrophic Core":{11:{text:"",heroUnlock:"Morfe",heroUnlockOnly:!0},21:{text:"Half way there.",heroUnlock:"Aurora",heroUnlockOnly:!0},41:{text:"You barely defeated Catastrophic Core.",victoryPoints:11,heroUnlock:"Necro"}},"Dangerous District":{41:{text:"It's too quiet here.",victoryPoints:1,heroUnlock:"Reaper"},81:{text:"I'd probably avoid this place next time.",victoryPoints:3}},"Dangerous District Hard":{41:{text:"You can hardly hear a sound.",victoryPoints:3,heroUnlock:"Reaper"},81:{text:"I'd hardly consider returning to this place.",victoryPoints:8}},"Peculiar Pyramid":{1:{text:"A deep sinkhole formed in the middle of the dunes... Find it to use this shortcut.",condition:e>3072&&t>128&&t<256},30:{text:"Congratulations for finding your way through the Peculiar Pyramid.",victoryPoints:1},32:{text:"Welcome to Rameses' secret chamber.",victoryPoints:1,heroUnlock:"Rameses"}},"Peculiar Pyramid Hard":{30:{text:"Congratulations for hardly finding your way through the Peculiar Pyramid.",victoryPoints:3},32:{text:"This is hardly Rameses' secret chamber.",victoryPoints:2,heroUnlock:"Rameses"}},"Glacial Gorge":{41:{text:"Stop shivering. You made it.",victoryPoints:2,heroUnlock:"Nexus"}},"Glacial Gorge Hard":{41:{text:"Stop shivering. You've hardly made it.",victoryPoints:7,heroUnlock:"Nexus"}},"Wacky Wonderland":{41:{text:"Electrifying performance! But the carnival's just getting started!",victoryPoints:2,heroUnlock:"Jolt"},81:{text:"Candy for everyone! Hope you had a nice stay in Wacky Wonderland.",victoryPoints:3,heroUnlock:"Candy"}},"Wacky Wonderland Hard":{41:{text:"The carnival stands in awe, while the music hardly stops growing louder.",victoryPoints:4,heroUnlock:"Jolt"},80:{text:"The music is blaring.",condition:e<640,animation:{type:"fadeIn",duration:1200},fillStyle:"#c45bd1",strokeStyle:"#870080"},81:{text:"The music has died down, but hardly has it left your nightmares.",victoryPoints:8,heroUnlock:"Candy"}},"Switch Station":{41:{text:"The path lies conquered, your journey etched in steel.",victoryPoints:8}},"Vicious Valley":{41:{text:"The valley is yours.",victoryPoints:2,heroUnlock:"Shade"}},"Vicious Valley Hard":{41:{text:"The valley is hardly yours.",victoryPoints:8,heroUnlock:"Shade"}},"Elite Expanse":{41:{text:"Few make it this far out in space.",victoryPoints:2,heroUnlock:"Euclid"},81:{text:"The air is thin here.",victoryPoints:6,accessoryUnlock:"Orbit Ring"}},"Elite Expanse Hard":{41:{text:"Very few can hardly make it this far out in space.",victoryPoints:6,heroUnlock:"Stella"},81:{text:"The air is hardly thin here.",victoryPoints:10,accessoryUnlock:"Stars"}},"Monumental Migration":{41:{text:"A respite in your journey. A long path lies ahead.",victoryPoints:1},81:{text:"It's beautiful here, but your new home beckons you further into the wild.",victoryPoints:1},121:{text:"Your adventure has led to peace and tranquility...",victoryPoints:2,heroUnlock:"Chrono"},161:{text:"Stay on your toes.",victoryPoints:2},201:{text:"Where's the peace I was promised?",victoryPoints:2},241:{text:"You hear a crowd brewing in the distance.",victoryPoints:3},281:{text:"Do they breed...?",victoryPoints:3},321:{text:"Don't anger them. You'll only make it more difficult.",victoryPoints:3},361:{text:"Booming in the distance...",victoryPoints:4},401:{text:"They seem to have the same tendencies as us... just, trapped.",victoryPoints:4},441:{text:"This road used to lead to paradise. Now it goes where no hero should go.",victoryPoints:5},480:{text:"Death fills the air.",animation:{type:"typewriter",duration:2e3},fillStyle:"#e60000",strokeStyle:"#8b0000"},481:{text:"Take care. The people will require your help one day.",victoryPoints:20,accessoryUnlock:"Halo"}},"Monumental Migration Hard":{41:{text:"Hardly a respite in your journey. An enormous path lies ahead.",victoryPoints:1},81:{text:"It's beautiful here, but your new home beckons you much further into the wild.",victoryPoints:2},121:{text:"Your adventure has hardly led to peace and tranquility...",victoryPoints:3,heroUnlock:"Chrono"},161:{text:"Stay on the tips of your toes.",victoryPoints:2},201:{text:"Where's the piece I was promised?",victoryPoints:3},241:{text:"You hear a large crowd brewing in the distance.",victoryPoints:4},281:{text:"Do they breed???",victoryPoints:3},321:{text:"Don't anger them.",victoryPoints:4},361:{text:"Booming in the distance all around you...",victoryPoints:5},401:{text:"They seem to have the same tendencies as us... just, trapped.",victoryPoints:4},441:{text:"This road used to lead to paradise. Now it goes where no hero should go.",victoryPoints:5},480:{text:"Silence fills the air."},481:{text:"Take care, take a break. This world is bounded differently.",victoryPoints:6},521:{text:"A respite in your journey. There's still a very long path ahead.",victoryPoints:2},561:{text:"It's beautiful here, atleast it was.",victoryPoints:3},601:{text:"Your adventure has led you to more discoveries.",victoryPoints:4},641:{text:"Toes.",victoryPoints:3},681:{text:"Where's the peace I was promised? Must be in area 1561.",victoryPoints:4},721:{text:"You hear a crowd brewing in the distance. What are they protesting?",victoryPoints:5},761:{text:"Do they breed...? Well, do they?",victoryPoints:4},801:{text:"Don't anger them. Just don't.",victoryPoints:5},841:{text:"BOOMing in the distance.",victoryPoints:6},881:{text:"We are all trapped,",victoryPoints:5},921:{text:"This road used to lead to paradise. Now it goes where no hero should go. (detroit)",victoryPoints:6},960:{text:"Sorrow fills the air."},961:{text:"Halfway!",victoryPoints:7},1001:{text:"Your journey has helped you reflect.",victoryPoints:3},1041:{text:"You've seen so much that everything's boring.",victoryPoints:4},1081:{text:"Your adventure isn't so much an adventure anymore.",victoryPoints:5},1121:{text:"Don't let your guard down.",victoryPoints:4},1161:{text:"What stories can they tell?",victoryPoints:5},1201:{text:"They're crowding again.",victoryPoints:6},1241:{text:"Do they breed...? Dude stop asking that question already.",victoryPoints:5},1281:{text:"Don't anger them. Yes you're starting to anger me.",victoryPoints:6},1321:{text:"Why are any of us here?",victoryPoints:7},1361:{text:"Think hard.",victoryPoints:6},1401:{text:"I'm running out of ideas.",victoryPoints:7},1440:{text:"Prayers fill the air."},1441:{text:"Be sure to keep yourself safe.",victoryPoints:6},1481:{text:"Stop leaking victory messages.",victoryPoints:4},1521:{text:"You should know that the derivative of product is not the product of the derivative.",victoryPoints:5},1561:{text:"Well dang it isn't.",victoryPoints:6},1601:{text:"New guy in town.",victoryPoints:5},1641:{text:"Residents in fear. District 7 down.",victoryPoints:6},1681:{text:"I do not know what to tell you. What is your goal?",victoryPoints:7},1721:{text:"They bread.",victoryPoints:6},1761:{text:"You've hardly escaped it.",victoryPoints:7},1801:{text:"You have the freedom of choice, right?",victoryPoints:8},1841:{text:"You are stuck now. So close. So far. Where next?",victoryPoints:7},1881:{text:"https://images.homedepot-static.com/catalog/pdfImages/11/1127f7b4-ab8e-43ac-978a-2f9395a9b50b.pdf",victoryPoints:8},1920:{text:"Despair fills the air."},1921:{text:"It's time for you to take a break.",victoryPoints:9}},"Humongous Hollow":{41:{text:"These enormous ones are defeated, but larger challenges lie beyond...",victoryPoints:1,heroUnlock:"Brute"},81:{text:"At last, you stand amongst the giants. Nothing is impossible.",victoryPoints:6}},"Humongous Hollow Hard":{41:{text:"These enormous ones are hardly defeated, and harder challenges lie beyond...",victoryPoints:3,heroUnlock:"Brute"},81:{text:"At last, you hardly stand amongst the giants. Nothing is impossible.",victoryPoints:9}},"Haunted Halls":{1:{text:"Access Mysterious Mansion to unlock the shortcut.",condition:e<32},10:{text:"It's getting dark ... You might want to pick up a flashlight.",condition:e<500},16:{text:"A large mansion looms ahead.",condition:e>8e3},17:{text:"That was just the beginning.",victoryPoints:1},26:{text:"They have noticed your presence.",victoryPoints:3,accessoryUnlock:"Stick"}},"Quiet Quarry":{41:{text:"Your soft footsteps fill the Quiet Quarry.",victoryPoints:2,heroUnlock:"Cent"}},"Quiet Quarry Hard":{41:{text:"Hardly surprising how fast these creatures can silently move.",victoryPoints:6,heroUnlock:"Cent"}},"Frozen Fjord":{41:{text:"You've followed in the path of the glaciers.",victoryPoints:3,heroUnlock:"Jötunn",accessoryUnlock:"Santa Hat"}},"Frozen Fjord Hard":{41:{text:"You've hardly followed in the path of the glaciers.",victoryPoints:8,heroUnlock:"Jötunn",accessoryUnlock:"Blue Santa Hat"}},"Ominous Occult":{17:{text:"The breeze beckons for you.",victoryPoints:7,heroUnlock:"Ghoul"}},"Ominous Occult Hard":{17:{text:"The breeze hardly beckons for you.",victoryPoints:10,heroUnlock:"Ghoul"}},"Restless Ridge":{44:{text:"You've climbed over the ridge. The air vibrates with sleepless energy.",victoryPoints:5,heroUnlock:"Mirage"}},"Restless Ridge Hard":{43:{text:"🍪 The smell of freshly baked cookies fills the air 🍪",animation:{type:"fadeIn",duration:3e3},fillStyle:"#b58c54",strokeStyle:"#8f6840"},44:{text:"Complete the map and return to set armageddon in motion.",condition:e>1888},45:{text:"The very enemies grow stronger. You should never have come.",condition:e<960},46:{text:"The ridge shakes as its walls collapse around you.",condition:e<960},47:{text:"The very fabric of reality strains as the seams tear apart.",condition:e<960},48:{text:"You've hardly climbed over the ridge. The air vibrates with sleepless energy.",victoryPoints:18,heroUnlock:"Mirage"},49:{text:"Your brilliant triumph has hardly bought you time.",victoryPoints:4}},"Toxic Territory":{21:{text:"You've waded through the gloopy radiation.",victoryPoints:2,heroUnlock:"Glob",accessoryUnlock:"Sticky Coat"}},"Toxic Territory Hard":{21:{text:"You've hardly waded through the gloopy radiation.",victoryPoints:4,heroUnlock:"Glob",accessoryUnlock:"Toxic Coat"}},"Magnetic Monopole":{36:{text:"You've conquered the hidden electric dipole.",victoryPoints:1},37:{text:"You've repelled the opposing force.",victoryPoints:2,heroUnlock:"Magno"}},"Magnetic Monopole Hard":{36:{text:"You've hardly conquered the hidden electric dipole.",victoryPoints:2},37:{text:"You've hardly repelled the opposing force.",victoryPoints:4,heroUnlock:"Magno"}},"Burning Bunker":{37:{text:"You've reached the lowest level of the bunker.",victoryPoints:3,heroUnlock:"Ignis",accessoryUnlock:"Flames"}},"Burning Bunker Hard":{37:{text:"You've hardly reached the lowest level of the bunker.",victoryPoints:6,heroUnlock:"Ignis",accessoryUnlock:"Blue Flames"}},"Grand Garden":{29:{text:"You've ventured through the flowery garden.",victoryPoints:2,heroUnlock:"Viola"}},"Grand Garden Hard":{29:{text:"You've hardly ventured through the flowery garden.",victoryPoints:5,heroUnlock:"Viola"}},"Endless Echo":{41:{text:"The echo repeats itself.",victoryPoints:1},81:{text:"The winds continue to howl.",victoryPoints:1},121:{text:"A strange world lies ahead.",victoryPoints:2,heroUnlock:"Echelon"},161:{text:"What lies ahead, waiting to be seen?",victoryPoints:2},201:{text:"The world continues to become distorted.",victoryPoints:3},241:{text:"The echo repeats a distorted call.",victoryPoints:3,accessoryUnlock:"Clouds"},281:{text:"The winds are always changing.",victoryPoints:4},321:{text:"The future seems familiar.",victoryPoints:4},361:{text:"Just how many of them are there?",victoryPoints:5},401:{text:"There is no end.",victoryPoints:5},441:{text:"What proofs support our beliefs?",victoryPoints:6},481:{text:"Do they feel the same?",victoryPoints:6},521:{text:"The journey is tiring.",victoryPoints:7},561:{text:"Take a rest, won't you?",victoryPoints:7},601:{text:"May your adventure continue as long as you desire.",victoryPoints:8},641:{text:"Stay aware of your surroundings.",victoryPoints:8},681:{text:"Think before you act.",victoryPoints:9},721:{text:"Are you satisfied with your adventure yet?",victoryPoints:9},761:{text:"Keep going, then.",victoryPoints:10},801:{text:"Make sure to stay hydrated on your journey.",victoryPoints:10},841:{text:"Your dedication is impressive",victoryPoints:11},881:{text:"You seem truly unstoppable.",victoryPoints:11},921:{text:"You're actually doing it, and your dedication is admirable.",victoryPoints:12},961:{text:"Can you keep going? The Endless Echo will trap you soon.",victoryPoints:12}},"Endless Echo Hard":{121:{text:"It's hardly a break here.",victoryPoints:3,heroUnlock:"Echelon"},241:{text:"And if they ask, say you hardly had a bad time.",accessoryUnlock:"Storm Clouds",victoryPoints:6}},"Mysterious Mansion":{2:{text:"A full moon every night."},4:{text:"Access Coupled Corridors to unlock the shortcut.",condition:e>64&&e<320&&(t<32||t>416)},29:{text:"Wield no light for another to be granted."},60:{text:"Finally, an exit out of that cursed hedge maze, and you find a strange hat.",accessoryUnlock:"Witch Hat",victoryPoints:2},61:{text:"Finally, you find a non-liminal space, and breathe a sigh of relief.",victoryPoints:1},62:{text:"You make it to the roof, and escape.",victoryPoints:1},63:{text:"You find a powerful warlock locked away, and rescue him.",victoryPoints:2,heroUnlock:"Mortuus"}},"Coupled Corridors":{21:{text:"You find a small resting place north of the illusion corridor.",victoryPoints:1},42:{text:"You find a small resting place south of the illusion corridor.",victoryPoints:1},43:{text:"The doors lock behind you.",condition:t<320},44:{text:"The doors lock behind you.",condition:t>2880},65:{text:"You've made it through the creepy corridors.",victoryPoints:3,heroUnlock:"Stheno"}},"Cyber Castle":{1:{text:"Unlock all heroes by rescuing them from the ---- to gain access...",condition:e>3136},3:{text:"Defeat the four greater ---- by staying within their auras to access the gate above..."},8:{text:"-e-e-- --e o------- -- a-- -o-- -o --i- a----s...",condition:e>3072},9:{text:"D-f--- -h- ------e- o- --l --t- -- -a-- --c---...",condition:e<64},16:{text:"You've shut down Cybot, the overseer of all bots! The world is safe for now...",victoryPoints:8,heroUnlock:"?"}},"Research Lab":{1:{text:"Permanently unlocked: After area 1, minimum level is 25 while playing with a group!"},42:{text:"You've successfully completed the experiment.",victoryPoints:10}},"Cyber Castle Hard":{1:{text:"Complete the 40 tests in the -------- --- to gain access...",condition:e>3136},15:{text:"Jvyylshapvu pz uva jhbzhapvu!"},23:{text:"You've hardly shut down Cybot, the overseer of all bots! The world is safe for now...",victoryPoints:15,heroUnlock:"?"}},"Shifting Sands":{48:{text:"You've navigated through the rocky desert.",victoryPoints:4,heroUnlock:"Boldrock"}},"Infinite Inferno":{39:{text:"You've navigated the depths of the inferno.",victoryPoints:5,heroUnlock:"Demona"}},"Dusty Depths":{1:{text:"The sinkhole will trap and weaken you if you continue..."},2:{text:"You're trapped now...",condition:e<320},21:{text:"You found the desert core, the final resting point.",victoryPoints:8}},"Withering Wasteland":{41:{text:"The lost Factorb technology has been recovered.",victoryPoints:3,heroUnlock:"Factorb"}},"Terrifying Temple":{10:{text:"A great door lies ahead...",animation:{type:"fadeIn",duration:3e3},fillStyle:"#8e5e38",strokeStyle:"#4B2C20"},41:{text:"Your stealth knows no bounds! You've earned the path to becoming a true ninja.",victoryPoints:4,heroUnlock:"Leono"}},"Stellar Square Hard":{21:{text:"This may show that the greatest rewards were... completely absent.",victoryPoints:0}}},c=e=>{let t="";void 0===(e={...e}).victoryPoints||this.isGuest||(t=`\n${e.victoryPoints} VP awarded!`);let r=null;if(void 0!==e.heroUnlock&&(r=$e728d5a493f33528$export$ba6e2f1cddd013f7(a,e.heroUnlock)),!0===e.heroUnlockOnly&&(this.isGuest||null===r||!r.locked))return[];if(!1===e.condition)return[];const c=e.accessoryUnlock?e.accessoryUnlock.toLowerCase().split(" ").join("-"):void 0;let o="";return this.isGuest?e.heroUnlock&&(o+="\nRegister an account to permanently unlock new heroes!"):(null!==r&&r.locked&&(o+=`\nUnlocked ${e.heroUnlock}.`),void 0===e.accessoryUnlock||null!=this.accessories&&null!=this.accessories.collection&&this.accessories.collection[c]||(o+=`\nAdded ${e.accessoryUnlock} to your accessory collection.`)),e.text=`${e.text}${o}${t}`,[e]};if(map.name=="Infinite Inferno"&&map.areas.length!=39)r["Infinite Inferno"]={15:{text:"https://youtu.be/DaH4ysO6fcc",condition:e<320,animation:{type:"fadeIn",duration:1200},fillStyle:"#CC88FF",strokeStyle:"#66447F"}};if(!(this.regionName in r))return[];if(!(this.areaNumber in r[this.regionName])){if("Endless Echo"===this.regionName&&this.areaNumber>1&&(this.areaNumber-1)%40==0){const e={text:"These words are the Endless Echo, and you are trapped within it.",victoryPoints:Math.floor((this.areaNumber-2)/80)+1};return getVictoryText(e.text,e.victoryPoints,e.heroUnlock,e.heroUnlockOnly,e.accessoryUnlock,e.condition)}if("Endless Echo Hard"===this.regionName){if(!(this.areaNumber>1&&(this.areaNumber-1)%40==0))return[];const e=Math.floor((this.areaNumber-1)/40),t=["I hardly believe you know where you're going...","You've hardly begun...","You've hardly reached the end...","The echo is hardly in reach...","How hardly can you try...?","You've hardly been through it all...","It's hardly imaginable to find you here...","The end is hardly in sight...","The echo has hardly left your view...","There's hardly a story to tell...","There's hardly a voice to be heard...","There's hardly a reason to believe...","There's hardly a sight to be seen...","Where the enemies are hardly the threat...","The echo hardly halts your way...","Have you hardly had enough...?"],a=$24bba5be1b54b934$exports(EvadesConfig.week_number)();return c({text:t[(Math.floor(a*t.length)+e)%t.length],victoryPoints:Math.floor((this.areaNumber-2)/40)+1})}return[]}return c(r[this.regionName][this.areaNumber])}
	getTutorialText(){if("Central Core"!==this.regionName)return[];const e=Object.keys(this.highestAreaAchieved||defaultHighestAreaAchieved);for(let t=0;t<e.length;t++)if((this.highestAreaAchieved||defaultHighestAreaAchieved)[e[t]]>=20)return[];const t=this.x;if(1===this.areaNumber){if(t<320)return[{text:"Head right by holding D or the Right Arrow key."}];if(t<1040)return[{text:"Pick up pellets to gain experience!"}];if(t<1760)return[{text:"If you collect enough pellets, you will level up and gain a point!"}];if(t<2480)return[{text:"Points can be used by pressing 1-5 to upgrade stats!"}];if(t<3200)return[{text:"Press 1 to increase your speed!"}]}else if(2===this.areaNumber){if(t<640)return[{text:"Hover your cursor over the icons to see what abilities you can unlock!"}];if(t<1280)return[{text:"Press 4 or 5 to unlock your two abilities."}];if(t<1920)return[{text:"Using abilities consumes energy."}];if(t<2560)return[{text:"Press Z and X to activate abilities 1 and 2. Or you can use J and K."}];if(t<3200)return[{text:"Press 2 to upgrade max energy. Press 3 to increase energy regeneration."}]}else if(3===this.areaNumber){if(t<640)return[{text:"This map has 40 areas. Reach the end to unlock new heroes."}];if(t<1280)return[{text:"Finally, touch downed players to rescue them!"}]}return[]}
	getActionText(e){
        if (this.abilityHelperTime > 0 && this.abilityHelperTime <= 1200) {
            if (1 === this.abilityHelperType)
                return [{
                    text: "Not enough energy!",
                    fontSize: "18",
                    animation: {
                        type: "fadeInAndOut",
                        duration: 1200
                    },
                    fillStyle: "#ff6867",
                    strokeStyle: "#8e0000"
                }];
            if (2 === this.abilityHelperType)
                return [{
                    text: "Ability is on cooldown!",
                    fontSize: "18",
                    animation: {
                        type: "fadeInAndOut",
                        duration: 1200
                    },
                    fillStyle: "#ff6867",
                    strokeStyle: "#8e0000"
                }];
            if (3 === this.abilityHelperType)
                return [{
                    text: "Ability is disabled!",
                    fontSize: "18",
                    animation: {
                        type: "fadeInAndOut",
                        duration: 1200
                    },
                    fillStyle: "#ff6867",
                    strokeStyle: "#8e0000"
                }];
            if (4 === this.abilityHelperType)
                return [{
                    text: "You can't use that right now!",
                    fontSize: "18",
                    animation: {
                        type: "fadeInAndOut",
                        duration: 1200
                    },
                    fillStyle: "#ff6867",
                    strokeStyle: "#8e0000"
                }];
            if (5 === this.abilityHelperType)
                return [{
                    text: "You can't use that while downed!",
                    fontSize: "18",
                    animation: {
                        type: "fadeInAndOut",
                        duration: 1200
                    },
                    fillStyle: "#ff6867",
                    strokeStyle: "#8e0000"
                }];
            if (6 === this.abilityHelperType)
                return [{
                    text: "Ability is locked!",
                    fontSize: "18",
                    animation: {
                        type: "fadeInAndOut",
                        duration: 1200
                    },
                    fillStyle: "#ff6867",
                    strokeStyle: "#8e0000"
                }];
            if (7 === this.abilityHelperType)
                return [{
                    text: "That passive can't be used!",
                    fontSize: "18",
                    animation: {
                        type: "fadeInAndOut",
                        duration: 1200
                    },
                    fillStyle: "#ff6867",
                    strokeStyle: "#8e0000"
                }]
            if (8 === this.abilityHelperType)
                return [{
                    text: "That answer is wrong!",
                    fontSize: "18",
                    animation: {
                        type: "fadeInAndOut",
                        duration: 1200
                    },
                    fillStyle: "#ff6867",
                    strokeStyle: "#8e0000"
                }];
        }
    return (this.canCling||this.canSubscribe)?[{text:`Press ${e.usingGamepad?"A":"Space"} to ${this.canSubscribe?"subscribe to Aphmau":"cling/uncling"}!`,fontSize:18}]:this.hasWindDebuff?[{text:"Touch other players to remove the wind debuff!",fontSize:18}]:this.hasWaterDebuff?[{text:"Touch other players to remove the water debuff!",fontSize:18}]:this.hasEarthDebuff?[{text:"Touch other players to remove the earth debuff!",fontSize:18}]:this.hasFireDebuff?[{text:"Touch other players to remove the fire debuff!",fontSize:18}]:[]}
}
class Minimap extends EvadesEntity {
	constructor() {
		super(),
		this.redOscillator = new Oscillator(160,160,255,180,!0),
		this.left = 0,
		this.bottom = 0,
		this.maxWidth = 370,
		this.maxHeight = 100,
		this.areaCanvasOffset = null,
		this.canvasScale = 1 / 8,
		this.nearbySize = 1e4,
		this.minimapWidth = this.maxWidth,
		this.minimapHeight = this.maxHeight,
		this.minimapModeButton = $e7009c797811e935$export$2e2bcd8739ae039.addButton(null, (()=>this.toggleMinimapMode())),
		this.areaCenteredMode = !0,
		this.minimapModeButtonImage = $31e8cfefa331e399$export$93e5c64e4cc246c8("buttons/minimap-mode"),
		this.hidden = !1,
		this.zones = [],
		this.areaCanvas = null;
	}
	updateZones(){
		let prop = (e, a, s) => e[a][s], propDefault = (a, s) => (defaultValues[a][s]), s = (e, s, z, a, r) => ((z && void 0 !== prop(z, e, s)) ? prop(z, e, s) : (void 0 !== prop(a, e, s)) ? prop(a, e, s) : (prop(r, e, s) ?? propDefault(a, s)));
		this.zones.length=0;
		map.areas.map(e=>{e.zones.map(t=>{this.zones.push({x:e.x+t.x,y:e.y+t.y,width:t.width,height:t.height,type:$d102378f4de5e1dc$export$2e2bcd8739ae039[t.type.toUpperCase()+"_ZONE"],backgroundColor:arrayToInt32(s("properties","background_color",t,e,map))})})});
	}
	stateFields() {
		return ["x", "y", "width", "height", "zones"]
	}
	afterStateUpdate() {
		void 0 !== this.x && (this.areaCanvas ? this.areaCanvasOffset = null : (this.areaCanvas = $f36928166e04fda7$export$ba06b54a1d867509(3 * this.nearbySize * this.canvasScale, 3 * this.nearbySize * this.canvasScale),
		this.areaContext = this.areaCanvas.getContext("2d")))
	}
	roundTo(e, t) {
		return Math.round(e / t) * t
	}
	drawNearbyMinimap(e) {
		const t = this.roundTo(e.x, this.nearbySize)
		  , a = this.roundTo(e.y, this.nearbySize)
		  , r = t - this.nearbySize
		  , c = a - this.nearbySize
		  , f = t + this.nearbySize
		  , o = a + this.nearbySize;
		if (null !== this.areaCanvasOffset && this.areaCanvasOffset.x === r && this.areaCanvasOffset.y === c)
			return;
		this.areaCanvasOffset = {
			x: r,
			y: c
		},
		this.areaContext.clearRect(0, 0, this.areaCanvas.width, this.areaCanvas.height);
		const n = {};
		(settings.tileMode>>1) ? (n[$d102378f4de5e1dc$export$2e2bcd8739ae039.ACTIVE_ZONE] = [17, 17, 17, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.SAFE_ZONE] = [60, 60, 60, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.EXIT_ZONE] = [148, 136, 0, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.VICTORY_ZONE] = [148, 136, 0, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.TELEPORT_ZONE] = [33, 135, 149, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.REMOVAL_ZONE] = [107, 99, 0, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.DUMMY_ZONE] = [17, 17, 17, 255]) : (n[$d102378f4de5e1dc$export$2e2bcd8739ae039.ACTIVE_ZONE] = [255, 255, 255, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.SAFE_ZONE] = [195, 195, 195, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.EXIT_ZONE] = [255, 244, 108, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.VICTORY_ZONE] = [255, 244, 108, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.TELEPORT_ZONE] = [106, 208, 222, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.REMOVAL_ZONE] = [255, 249, 186, 255],
		n[$d102378f4de5e1dc$export$2e2bcd8739ae039.DUMMY_ZONE] = [255, 255, 255, 255]);
		for (const e of this.zones) {
			if (e.x > f || e.x + e.width < r || e.y > o || e.y + e.height < c)
				continue;
			(settings.tileMode>>1) && 858993663 === e.backgroundColor && (e.backgroundColor = 84215295),
			(settings.tileMode>>1) || 84215295 !== e.backgroundColor || (e.backgroundColor = 858993663);
			const t = [e.backgroundColor >> 24 & 255, e.backgroundColor >> 16 & 255, e.backgroundColor >> 8 & 255, 255 & e.backgroundColor]
			  , a = this.mixColors(n[e.type], t);
			this.areaContext.fillStyle = `rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]}`;
			const $ = (e.x - this.x - this.areaCanvasOffset.x) * this.canvasScale
			  , d = (e.y - this.y - this.areaCanvasOffset.y) * this.canvasScale;
			this.areaContext.fillRect($, d, e.width * this.canvasScale, e.height * this.canvasScale)
		}
	}
	mixColors(e, t) {
		const a = e[3] / 255
		  , r = t[3] / 255
		  , c = []
		  , f = 1 - (1 - r) * (1 - a);
		return c[0] = Math.round(t[0] * r / f + e[0] * a * (1 - r) / f),
		c[1] = Math.round(t[1] * r / f + e[1] * a * (1 - r) / f),
		c[2] = Math.round(t[2] * r / f + e[2] * a * (1 - r) / f),
		c[3] = f,
		c
	}
	toggleVisibility() {
		this.hidden = !this.hidden
	}
	update(e, t, a, r) {
		if (this.hidden)
			return;
		const c = {}
		  , f = Object.keys(t);
		for (let e = 0; e < f.length; e++) {
			const a = f[e]
			  , r = t[a];
			r.showOnMap && (c[a] = r)
		}
		const o = Object.keys(e);
		for (let t = 0; t < o.length; t++) {
			const a = o[t];
			if (a in c)
				continue;
			const r = e[a];
			r.showOnMap && (c[a] = r)
		}
		this.entities = Object.values(c),
		this.self = a,
		this.area = r
	}
	toggleMinimapMode() {
		this.areaCenteredMode = !this.areaCenteredMode
	}
	render(e, t, a, delta) {
		this.hidden || (this.maxWidth = t.toGuiScale(370),
		this.maxHeight = t.toGuiScale(100),
		this.top = this.bottom + e.canvas.clientHeight - this.minimapHeight,
		e.save(),
		e.imageSmoothingEnabled = !1,
		this.renderButtons(e, t),
		this.x=0,
		this.y=0,
		this.areaCenteredMode ? this.renderAreaCentered(e, t) : this.renderPlayerCentered(e, t),
		e.restore(),
		this.redOscillator.update(delta))
	}
	renderButtons(e, t) {
		const a = this.minimapModeButton;
		a.interactive = !0,
		a.width = t.toGuiScale(20),
		a.height = t.toGuiScale(20),
		a.x = this.left + t.toGuiScale(5),
		a.y = this.top - a.height - t.toGuiScale(5);
		let r = 0;
		r = this.areaCenteredMode ? 80 : 140,
		a.mouseDown && a.mouseOver ? r = 255 : a.mouseOver && (r += 30),
		e.fillStyle = `rgb(${r}, ${r}, ${r})`,
		e.strokeStyle = "black",
		e.beginPath(),
		e.rect(a.x, a.y, a.width, a.height),
		e.fill(),
		e.stroke(),
		this.minimapModeButtonImage.draw(e, 0, a.x + t.toGuiScale(2), a.y + t.toGuiScale(2), a.width - t.toGuiScale(4), a.height - t.toGuiScale(4))
	}
	renderAreaCentered(e, t) {
		const a = {};
		const boundary=getAreaBoundary(this.area);
		a.centerX = this.area.x + boundary.width / 2,
		a.centerY = this.area.y + boundary.height / 2,
		a.width = boundary.width,
		a.height = boundary.height,
		a.left = this.area.x,
		a.top = this.area.y;
		let r = this.maxWidth / a.width * t.getGuiScale()
		  , c = this.maxHeight / a.height * t.getGuiScale();
		r > c ? (this.minimapWidth = this.maxWidth * c / r,
		this.minimapHeight = this.maxHeight) : (this.minimapWidth = this.maxWidth,
		this.minimapHeight = this.maxHeight * r / c),
		r = this.minimapWidth / a.width,
		c = this.minimapHeight / a.height,
		this.renderBackground(e, a);
		for (let f = 0; f < this.entities.length; f++) {
			const o = this.entities[f]
			  , n = (o.x+map.areas[o.area].x - a.left) * r + this.left
			  , $ = (o.y+map.areas[o.area].y - a.top) * c + this.top;
			if (o.wall) {
				const t = o.width * r
				  , a = o.height * c;
				this.renderWall(e, n, $, t, a)
			} else {
				const a = o.radius * Math.min(r, c);
				this.renderEntity(e, t, o, n, $, a)
			}
		}
	}
	renderPlayerCentered(e, t) {
		const a = t.toGuiScale(.1);
		this.minimapWidth = this.maxWidth,
		this.minimapHeight = this.maxHeight;
		const r = {};
		r.centerX = this.self.entity.x+this.area.x,
		r.centerY = this.self.entity.y+this.area.y,
		r.width = this.minimapWidth / a,
		r.height = this.minimapHeight / a,
		r.left = this.self.entity.x - r.width / 2+this.area.x,
		r.top = this.self.entity.y - r.height / 2+this.area.y,
		this.renderBackground(e, r);
		for (let c = 0; c < this.entities.length; c++) {
			const f = this.entities[c]
			  , o = (f.x - r.centerX+map.areas[f.area].x) * a + this.left + this.minimapWidth / 2
			  , n = (f.y - r.centerY+map.areas[f.area].y) * a + this.top + this.minimapHeight / 2;
			if (f.wall) {
				const t = f.width * a
				  , r = f.height * a;
				this.renderWall(e, o, n, t, r)
			} else {
				const r = f.radius * a;
				this.renderEntity(e, t, f, o, n, r)
			}
		}
	}
	renderBackground(e, t) {
		if (null === this.areaCanvas)
			return;
		const a = {
			x: t.left + t.width / 2,
			y: t.top + t.height / 2
		};
		this.drawNearbyMinimap(a);
		let r = this.minimapWidth;
		void 0 !== this.area && this.areaCenteredMode && 16 === this.area.index && "Haunted Halls" === map.name && (r = 128),
		e.beginPath(),
		e.rect(this.left, this.top, r, this.minimapHeight),
		e.clip(),
		e.drawImage(this.areaCanvas, (t.left - this.x - this.areaCanvasOffset.x) * this.canvasScale, (t.top - this.y - this.areaCanvasOffset.y) * this.canvasScale, t.width * this.canvasScale, t.height * this.canvasScale, this.left, this.top, this.minimapWidth, this.minimapHeight),
		e.fillStyle = "rgba(80, 80, 80, 0.6)",
		e.fillRect(this.left, this.top, this.minimapWidth, this.minimapHeight)
	}
	renderEntity(e, t, a, r, c, f) {
		if (a.isDeparted)
			return;
		let o = !1;
		if (a.deathTimer >= 0) {
			const n = `rgb(${this.redOscillator.value}, 0, 0)`;
			if (e.fillStyle = n,
			e.font = $f36928166e04fda7$export$2e2bcd8739ae039.font(t.toGuiScale(9)),
			a.rescueable) {
				let o = c - t.toGuiScale(8);
				c < this.top + t.toGuiScale(16) + f && (o = c + t.toGuiScale(16)),
				e.fillText((a.deathTimer / 1e3).toFixed(0), r, o)
			}
			o = !0,
			e.strokeStyle = n
		} else
			void 0 !== a.heroType && (o = !0,
			e.strokeStyle = $01bb7fd9b3660a1e$export$71c647defb4fbd5a(a.heroType).strokeColor);
		e.fillStyle = a.color,
		!0 !== a.fullMapOpacity && (e.globalAlpha = .5),
		e.lineWidth = t.toGuiScale(2),
		$f36928166e04fda7$export$2e2bcd8739ae039.arc(e, r, c, f + t.toGuiScale(2), !0, o),
		e.globalAlpha = 1
	}
	renderWall(e, t, a, r, c) {
		e.fillStyle = "rgba(0, 0, 0, 0.4)",
		e.fillRect(t, a, r, c)
	}
}
class MobileControls {
	render(e) {
		$e7009c797811e935$export$2e2bcd8739ae039.touch.down && (e.fillStyle = "rgba(0, 0, 0, 0.1)",
		e.strokeStyle = "rgba(0, 0, 0, 0.2)",
		$f36928166e04fda7$export$2e2bcd8739ae039.arc(e, $e7009c797811e935$export$2e2bcd8739ae039.touch.start.x, $e7009c797811e935$export$2e2bcd8739ae039.touch.start.y, camera.toGuiScale(180), !0, !0),
		$f36928166e04fda7$export$2e2bcd8739ae039.arc(e, $e7009c797811e935$export$2e2bcd8739ae039.touch.current.x, $e7009c797811e935$export$2e2bcd8739ae039.touch.current.y, camera.toGuiScale(20), !0, !0))
	}
}
//END OF HUD
//IMAGE LOADER
const $31e8cfefa331e399$var$images = {};
class $31e8cfefa331e399$var$SimpleImage {
	constructor(e) {
		this.textureData = e;
    if(!e.sourceSize)e.sourceSize = {w: e.frame.w, h: e.frame.h};
    if(!e.spriteSourceSize)e.spriteSourceSize = {x: e.frame.x, y: e.frame.y, w: e.frame.w, h: e.frame.h};
		this.image = null,
		this.blank = e.blank || !1,
		this.loaded = !1
	}
	createImage() {
		if (this.image)
			return;
		const {texture: e, frame: t, spriteSourceSize: i, sourceSize: v} = this.textureData
		  , a = document.createElement("canvas");
		a.width = v.w,
		a.height = v.h;
		a.getContext("2d").drawImage(e, t.x, t.y, t.w, t.h, i.x, i.y, i.w, i.h),
		this.image = a,
		//this.image.src = a.toDataURL(),
		//this.src = this.image.src,
		this.loaded = !0
	}
	getImage() {
		return this.image || this.createImage(),
		this.image
	}
	getPreviewImage() {
		return this.getImage()
	}
	draw(e, delta, ...t) {
		const {frame: a} = this.textureData;
		let r, c, o, n;
		if (2 === t.length)
			[r,c] = t,
			o = a.w,
			n = a.h;
		else if (4 === t.length)
			[r,c,o,n] = t;
		else {
			if (8 !== t.length)
				return void console.error("Invalid number of arguments for draw method");
			[,,,,r,c,o,n] = t
		}
		var tr=e.getTransform();
		var scaled=Math.min(window.innerWidth/1280,window.innerHeight/720);
    let uv = [
      r*tr.a+c*tr.c+tr.e,r*tr.b+c*tr.d+tr.f,
      (r+o)*tr.a+c*tr.c+tr.e,(r+o)*tr.b+c*tr.d+tr.f,
      (r+o)*tr.a+(c+n)*tr.c+tr.e,(r+o)*tr.b+(c+n)*tr.d+tr.f,
      r*tr.a+(c+n)*tr.c+tr.e,r*tr.b+(c+n)*tr.d+tr.f,
    ];
    let boundingBox = [1/0,1/0,-1/0,-1/0];
    for(let i = 0; i < uv.length; i += 2){
      boundingBox[0]=Math.min(uv[i],boundingBox[0]);
      boundingBox[1]=Math.min(uv[i+1],boundingBox[1]);
      boundingBox[2]=Math.max(uv[i],boundingBox[2]);
      boundingBox[3]=Math.max(uv[i+1],boundingBox[3]);
    }
		boundingBox[2]<=0||boundingBox[3]<=0||boundingBox[0]>=e.canvas.width||boundingBox[1]>=e.canvas.height||(this.image || this.createImage(),2 === t.length ? e.drawImage(this.image, r, c) : 4 === t.length ? e.drawImage(this.image, r, c, o, n) : 8 === t.length && e.drawImage(this.image, t[0], t[1], t[2], t[3], r, c, o, n));
	}
}
const $31e8cfefa331e399$var$blankImage = new $31e8cfefa331e399$var$SimpleImage({
	texture: new Image,
	frame: {
		x: 0,
		y: 0,
		w: 1,
		h: 1
	},
	blank: !0
});
class $31e8cfefa331e399$export$9d5734c725768403 {
	constructor(e, t) {
		this.initData = {
			prefixPath: e,
			data: t
		},
		this.frames = [],
		this.previewImage = null,
		this.currentFrame = 0,
		this.currentFrameTime = 0,
		t && this.loadFrom(t)
	}
	getImage(delta,e=!0) {
		return e && this.nextFrame(delta),
		this.frames[this.currentFrame].image.blank && (this.frames[this.currentFrame].image = $31e8cfefa331e399$export$93e5c64e4cc246c8(this.initData.prefixPath + "/" + this.frames[this.currentFrame].path)),
		this.frames[this.currentFrame].image.getImage()
	}
	getPreviewImage() {
		return this.previewImage.blank && (this.previewImage = $31e8cfefa331e399$export$93e5c64e4cc246c8(this.initData.prefixPath + "/" + data.preview)),
		this.previewImage || this.frames[0].image
	}
	clone() {
		return new $31e8cfefa331e399$export$9d5734c725768403(this.initData.prefixPath,this.initData.data)
	}
	loadFrom(e) {
		for (const t of e.frames)
			this.frames.push({
				image: $31e8cfefa331e399$var$blankImage,
				duration: t.duration,
				path: t.path
			});
		e.startRandom && (this.currentFrame = Math.round(Math.random() * (this.frames.length - 1)),
		this.currentFrameTime = Math.round(Math.random() * this.frames[this.currentFrame].duration)),
		e.preview && (this.previewImage = $31e8cfefa331e399$export$93e5c64e4cc246c8(this.initData.prefixPath + "/" + e.preview))
	}
	nextFrame(delta) {
		this.currentFrameTime += delta,
		this.currentFrameTime >= this.frames[this.currentFrame].duration && (this.currentFrame = (this.currentFrame + 1) % this.frames.length,
		this.currentFrameTime = 0)
	}
	draw(e, delta, ...t) {
		const a = this.frames[this.currentFrame];
		a.image.blank && (a.image = $31e8cfefa331e399$export$93e5c64e4cc246c8(this.initData.prefixPath + "/" + a.path)),
		a.image.draw(e, delta, ...t),
		this.nextFrame(delta)
	}
}
function $d2f179ecccc561fa$var$getTypeSuffix(e) {
	switch (e) {
	case "active":
		return "Active";
	case "safe":
		return "Safe";
	case "exit":
	case "victory":
		return "Exit";
	case "teleport":
		return "Teleport";
	case "removal":
		return "Removal";
	case "dummy":
	default:
		return "Active"
	}
}
function $d2f179ecccc561fa$var$getTextureStart(e) {
	switch (e) {
	case "normal":
		return {
			x: 0,
			y: 0
		};
	case "leaves":
		return {
			x: 0,
			y: 128
		};
	case "wooden":
		return {
			x: 0,
			y: 256
		};
	case "baguette":
		return {
			x: 0,
			y: 384
		};
	case "ice":
		return {
			x: 0,
			y: 512
		};
	default:
		throw new Error(`Unknown texture: ${e}`)
	}
}
function $d2f179ecccc561fa$var$getTextureSize(e) {
	switch (e) {
	case "normal":
	case "leaves":
	case "wooden":
	case "baguette":
		return 128;
	case "ice":
		return 512;
	default:
		throw new Error(`Unknown texture: ${e}`)
	}
}
function $d2f179ecccc561fa$var$getTypeOffset(e) {
	switch (e) {
	case "active":
		return {
			x: 0,
			y: 0
		};
	case "safe":
		return {
			x: 1,
			y: 0
		};
	case "exit":
	case "victory":
		return {
			x: 2,
			y: 0
		};
	case "teleport":
		return {
			x: 3,
			y: 0
		};
	case "removal":
		return {
			x: 4,
			y: 0
		};
	case "dummy":
	default:
		return {
			x: 0,
			y: 0
		}
	}
}
function $d2f179ecccc561fa$export$b9b1204f7239550e(e, t, a) {
	let r = "";
	let o = !0;
	switch (e) {
	case "normal":
		r = `${!(settings.tileMode&1)?"Tiles":"NoTiles"}/${(settings.tileMode>>1)?"Dark":"Light"}/Normal`;
		break;
	case "leaves":
		r = ((settings.tileMode>>1) ? "Dark" : "Light") + "/Leaves";
		break;
	case "wooden":
		r = "Wooden";
		break;
	case "baguette":
		r = "Baguette";
		break;
	case "ice":
		r = ((settings.tileMode>>1) ? "Dark" : "Light") + "/Ice",
		o = !1;
		break;
	default:
		throw new Error(`Unknown texture: ${e}`)
	}
	const n = $d2f179ecccc561fa$var$getTypeSuffix(t)
	  , $ = $d2f179ecccc561fa$var$getTextureStart(e)
	  , i = $d2f179ecccc561fa$var$getTextureSize(e)
	  , d = $d2f179ecccc561fa$var$getTypeOffset(t);
	return {
		image: $31e8cfefa331e399$export$93e5c64e4cc246c8(`maps/${r}${o ? n : ""}`),
		x: $.x + d.x * i,
		y: $.y + d.y * i,
		width: i,
		height: i
	}
}
let $31e8cfefa331e399$export$4d6139e2c3698967 = !1
  , $31e8cfefa331e399$var$imagesLoadedCount = 0
  , $31e8cfefa331e399$var$imagesCount = 0;
function $31e8cfefa331e399$export$93e5c64e4cc246c8(e) {
	return $31e8cfefa331e399$var$images[e] ? $31e8cfefa331e399$var$images[e].clone ? $31e8cfefa331e399$var$images[e].clone() : ($31e8cfefa331e399$var$images[e].createImage(),
	$31e8cfefa331e399$var$images[e]) : (//console.warn(`Image not found: ${e}`),
	$31e8cfefa331e399$var$blankImage)
}
function $31e8cfefa331e399$var$loadPackedTexture(e, t) {
	const a = new Image;
	a.src = "./packed-texture-0.webp",
	a.onload = () => {
		assetsLoaded.count++;
		for (const [t,r] of Object.entries(e.frames)) {
			const e = {
				texture: a,
				frame: r.frame,
				rotated: r.rotated,
				trimmed: r.trimmed,
				spriteSourceSize: r.spriteSourceSize,
				sourceSize: r.sourceSize,
				pivot: r.pivot
			};
			$31e8cfefa331e399$var$images[t] = new $31e8cfefa331e399$var$SimpleImage(e)
		}
		$31e8cfefa331e399$export$4d6139e2c3698967 = !0
	}
}
function $d2f179ecccc561fa$export$5be464827fabd9a6(e, t, a=null, r) {
	$d2f179ecccc561fa$export$b9dfb366e63af805(e, $d2f179ecccc561fa$export$b9b1204f7239550e(t.texture, t.type, r), t.x, t.y, t.width, t.height, a)
}
function $d2f179ecccc561fa$export$5be464827fabd9a6(e, t, a, r) {
	$d2f179ecccc561fa$export$b9dfb366e63af805(e, $d2f179ecccc561fa$export$b9b1204f7239550e(t.texture, t.type, a), t.x, t.y, t.width, t.height, r)
};
function $d2f179ecccc561fa$export$b9dfb366e63af805(e, t, a, r, c, o, n){
	const $ = t.image.getImage(0);
	  var pattern=e.createPattern($,null);
	  pattern.setTransform(new DOMMatrix([n.getScale(),0,0,n.getScale(),n.getX(a),n.getY(r)]));
	  e.fillStyle=pattern;
	  e.fillRect(n.getX(a),n.getY(r),n.toScale(c),n.toScale(o));
}
const $8ffc30d9a3afd0d9$exports = JSON.parse('{"frames":{"maps/Dark/Ice":{"frame":{"x":1,"y":1,"w":512,"h":512},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":512,"h":512},"sourceSize":{"w":512,"h":512},"pivot":{"x":0.5,"y":0.5}},"maps/Light/Ice":{"frame":{"x":515,"y":1,"w":512,"h":512},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":512,"h":512},"sourceSize":{"w":512,"h":512},"pivot":{"x":0.5,"y":0.5}},"entities/lotus_flower_moving":{"frame":{"x":1,"y":515,"w":500,"h":500},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":500,"h":500},"sourceSize":{"w":500,"h":500},"pivot":{"x":0.5,"y":0.5}},"entities/lotus_flower_stationary":{"frame":{"x":503,"y":515,"w":500,"h":500},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":500,"h":500},"sourceSize":{"w":500,"h":500},"pivot":{"x":0.5,"y":0.5}},"entities/background-objects/door_1":{"frame":{"x":1,"y":1017,"w":208,"h":480},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":208,"h":480},"sourceSize":{"w":208,"h":480},"pivot":{"x":0.5,"y":0.5}},"entities/background-objects/door_2":{"frame":{"x":211,"y":1017,"w":208,"h":480},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":208,"h":480},"sourceSize":{"w":208,"h":480},"pivot":{"x":0.5,"y":0.5}},"abilities/parry":{"frame":{"x":421,"y":1017,"w":250,"h":250},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":250,"h":250},"sourceSize":{"w":250,"h":250},"pivot":{"x":0.5,"y":0.5}},"abilities/slash":{"frame":{"x":673,"y":1017,"w":250,"h":250},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":250,"h":250},"sourceSize":{"w":250,"h":250},"pivot":{"x":0.5,"y":0.5}},"entities/pumpkin_off":{"frame":{"x":421,"y":1269,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"entities/pumpkin_on":{"frame":{"x":551,"y":1269,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"entities/snowball_projectile":{"frame":{"x":681,"y":1269,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/BaguetteActive":{"frame":{"x":811,"y":1269,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/BaguetteExit":{"frame":{"x":1029,"y":1,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/BaguetteRemoval":{"frame":{"x":1029,"y":131,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/BaguetteSafe":{"frame":{"x":1029,"y":261,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/BaguetteTeleport":{"frame":{"x":1029,"y":391,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Dark/LeavesActive":{"frame":{"x":1005,"y":521,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Dark/LeavesExit":{"frame":{"x":1005,"y":651,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Dark/LeavesRemoval":{"frame":{"x":1005,"y":781,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Dark/LeavesSafe":{"frame":{"x":1005,"y":911,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Dark/LeavesTeleport":{"frame":{"x":941,"y":1041,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Light/LeavesActive":{"frame":{"x":941,"y":1171,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Light/LeavesExit":{"frame":{"x":941,"y":1301,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Light/LeavesRemoval":{"frame":{"x":1159,"y":1,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Light/LeavesSafe":{"frame":{"x":1159,"y":131,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Light/LeavesTeleport":{"frame":{"x":1159,"y":261,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Dark/NormalActive":{"frame":{"x":1159,"y":391,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Dark/NormalExit":{"frame":{"x":1135,"y":521,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Dark/NormalRemoval":{"frame":{"x":1135,"y":651,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Dark/NormalSafe":{"frame":{"x":1135,"y":781,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Dark/NormalTeleport":{"frame":{"x":1135,"y":911,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Light/NormalActive":{"frame":{"x":1071,"y":1041,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Light/NormalExit":{"frame":{"x":1071,"y":1171,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Light/NormalRemoval":{"frame":{"x":1071,"y":1301,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Light/NormalSafe":{"frame":{"x":1289,"y":1,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/NoTiles/Light/NormalTeleport":{"frame":{"x":1289,"y":131,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Dark/NormalActive":{"frame":{"x":1289,"y":261,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Dark/NormalExit":{"frame":{"x":1289,"y":391,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Dark/NormalRemoval":{"frame":{"x":1265,"y":521,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Dark/NormalSafe":{"frame":{"x":1265,"y":651,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Dark/NormalTeleport":{"frame":{"x":1265,"y":781,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Light/NormalActive":{"frame":{"x":1265,"y":911,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Light/NormalExit":{"frame":{"x":1201,"y":1041,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Light/NormalRemoval":{"frame":{"x":1201,"y":1171,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Light/NormalSafe":{"frame":{"x":1201,"y":1301,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/Tiles/Light/NormalTeleport":{"frame":{"x":1419,"y":1,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/WoodenActive":{"frame":{"x":1419,"y":131,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/WoodenExit":{"frame":{"x":1419,"y":261,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/WoodenRemoval":{"frame":{"x":1419,"y":391,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/WoodenSafe":{"frame":{"x":1395,"y":521,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"maps/WoodenTeleport":{"frame":{"x":1395,"y":651,"w":128,"h":128},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":128},"sourceSize":{"w":128,"h":128},"pivot":{"x":0.5,"y":0.5}},"abilities/mutatiorb":{"frame":{"x":1395,"y":781,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"abilities/mutatiorb_1":{"frame":{"x":1395,"y":883,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"abilities/mutatiorb_2":{"frame":{"x":1395,"y":985,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"abilities/mutatiorb_3":{"frame":{"x":1331,"y":1087,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"abilities/mutatiorb_4":{"frame":{"x":1433,"y":1087,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"abilities/mutatiorb_5":{"frame":{"x":1331,"y":1189,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"abilities/mutatiorb_6":{"frame":{"x":1433,"y":1189,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"abilities/mutatiorb_none":{"frame":{"x":1331,"y":1291,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"cosmetics/fedora":{"frame":{"x":1331,"y":1393,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"cosmetics/orbit-ring":{"frame":{"x":1433,"y":1291,"w":100,"h":100},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":100,"h":100},"sourceSize":{"w":100,"h":100},"pivot":{"x":0.5,"y":0.5}},"entities/vengeance_projectile":{"frame":{"x":421,"y":1399,"w":67,"h":67},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":67,"h":67},"sourceSize":{"w":67,"h":67},"pivot":{"x":0.5,"y":0.5}},"buttons/minimap-mode":{"frame":{"x":490,"y":1431,"w":64,"h":64},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":64},"sourceSize":{"w":64,"h":64},"pivot":{"x":0.5,"y":0.5}},"cosmetics/snowglobe-1":{"frame":{"x":556,"y":1431,"w":64,"h":64},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":64},"sourceSize":{"w":64,"h":64},"pivot":{"x":0.5,"y":0.5}},"cosmetics/snowglobe-2":{"frame":{"x":622,"y":1431,"w":64,"h":64},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":64},"sourceSize":{"w":64,"h":64},"pivot":{"x":0.5,"y":0.5}},"cosmetics/snowglobe-3":{"frame":{"x":688,"y":1431,"w":64,"h":64},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":64,"h":64},"sourceSize":{"w":64,"h":64},"pivot":{"x":0.5,"y":0.5}},"abilities/atonement":{"frame":{"x":1497,"y":781,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/attract":{"frame":{"x":1497,"y":833,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/backtrack":{"frame":{"x":1497,"y":885,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/bandages":{"frame":{"x":1497,"y":937,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/barrier":{"frame":{"x":1497,"y":989,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/black_hole":{"frame":{"x":754,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/blocking":{"frame":{"x":806,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/bloom":{"frame":{"x":858,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/charge":{"frame":{"x":910,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/confectioner":{"frame":{"x":962,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/corrosive_sniper":{"frame":{"x":1014,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/crumble":{"frame":{"x":1066,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/crumbling":{"frame":{"x":1118,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/dash":{"frame":{"x":1170,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/decay":{"frame":{"x":1222,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/default":{"frame":{"x":1274,"y":1431,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/depart":{"frame":{"x":1433,"y":1393,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/disabling":{"frame":{"x":1433,"y":1445,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/distort":{"frame":{"x":1485,"y":1393,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/draining":{"frame":{"x":1485,"y":1445,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/earthquake":{"frame":{"x":1,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/echo":{"frame":{"x":53,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/ember":{"frame":{"x":105,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/energize":{"frame":{"x":157,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/enlarging":{"frame":{"x":209,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/experience_drain":{"frame":{"x":261,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/explodiorb":{"frame":{"x":313,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/fire_trail":{"frame":{"x":365,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/flashlight":{"frame":{"x":417,"y":1499,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/flow":{"frame":{"x":469,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/flower":{"frame":{"x":521,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/force_a":{"frame":{"x":573,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/force_b":{"frame":{"x":625,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/freezing":{"frame":{"x":677,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/frost_giant":{"frame":{"x":729,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/fusion":{"frame":{"x":781,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/grass":{"frame":{"x":833,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/grave":{"frame":{"x":885,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/gravekeeper":{"frame":{"x":937,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/gravity":{"frame":{"x":989,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/harden":{"frame":{"x":1041,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/ice_sniper":{"frame":{"x":1093,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/ictos":{"frame":{"x":1145,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/incinerate":{"frame":{"x":1197,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/lantern":{"frame":{"x":1249,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/latch":{"frame":{"x":1301,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/lava":{"frame":{"x":1353,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/lead_sniper":{"frame":{"x":1405,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/lightning":{"frame":{"x":1457,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/magnetic_nullification":{"frame":{"x":1549,"y":1,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/magnetic_reduction":{"frame":{"x":1549,"y":53,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/magnetism_down":{"frame":{"x":1549,"y":105,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/magnetism_up":{"frame":{"x":1549,"y":157,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/minimize":{"frame":{"x":1549,"y":209,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/mortar":{"frame":{"x":1549,"y":261,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/mystery_keycard":{"frame":{"x":1549,"y":313,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/negative_sniper":{"frame":{"x":1549,"y":365,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/network_control":{"frame":{"x":1549,"y":417,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/night":{"frame":{"x":1549,"y":469,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/ninja_star_sniper":{"frame":{"x":1549,"y":521,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/obscure":{"frame":{"x":1549,"y":573,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/orbit":{"frame":{"x":1549,"y":625,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/paralysis":{"frame":{"x":1549,"y":677,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/petrify":{"frame":{"x":1525,"y":729,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/poison_sniper":{"frame":{"x":1549,"y":781,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/pollinate":{"frame":{"x":1549,"y":833,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/positive_sniper":{"frame":{"x":1549,"y":885,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/prediction_sniper":{"frame":{"x":1549,"y":937,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/quicksand":{"frame":{"x":1549,"y":989,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/radar":{"frame":{"x":1509,"y":1497,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/radiating_bullets":{"frame":{"x":1537,"y":1041,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/radioactive_gloop":{"frame":{"x":1537,"y":1093,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/reanimate":{"frame":{"x":1537,"y":1145,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/reduce":{"frame":{"x":1537,"y":1197,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/reducing":{"frame":{"x":1537,"y":1249,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/regen_sniper":{"frame":{"x":1537,"y":1301,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/repel":{"frame":{"x":1537,"y":1353,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/repelling":{"frame":{"x":1537,"y":1405,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/resurrection":{"frame":{"x":1,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/reverse":{"frame":{"x":53,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/rewind":{"frame":{"x":105,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/robo_scanner":{"frame":{"x":157,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/shadow":{"frame":{"x":209,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/shatter":{"frame":{"x":261,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/shield":{"frame":{"x":313,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/shift":{"frame":{"x":365,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/shriek":{"frame":{"x":417,"y":1551,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/slippery":{"frame":{"x":469,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/slowing":{"frame":{"x":521,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/sniper":{"frame":{"x":573,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/snowball":{"frame":{"x":625,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/spark":{"frame":{"x":677,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/speed_sniper":{"frame":{"x":729,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/stalactite":{"frame":{"x":781,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/sticky_coat":{"frame":{"x":833,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/stomp":{"frame":{"x":885,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/stream":{"frame":{"x":937,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/sugar_rush":{"frame":{"x":989,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/summoner":{"frame":{"x":1041,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/supernova":{"frame":{"x":1093,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/sweet_tooth":{"frame":{"x":1145,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/toxic":{"frame":{"x":1197,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/tree":{"frame":{"x":1249,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/undead_infection":{"frame":{"x":1301,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/vengeance":{"frame":{"x":1353,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/vigor":{"frame":{"x":1405,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/warp":{"frame":{"x":1457,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/wildfire":{"frame":{"x":1509,"y":1549,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/wind_sniper":{"frame":{"x":1577,"y":729,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"abilities/wormhole":{"frame":{"x":1601,"y":1,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/100-gem":{"frame":{"x":1601,"y":781,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/1000-gem":{"frame":{"x":1601,"y":53,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/10000-gem":{"frame":{"x":1601,"y":833,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/1500-gem":{"frame":{"x":1601,"y":105,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/2000-gem":{"frame":{"x":1601,"y":885,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/250-gem":{"frame":{"x":1601,"y":157,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/2500-gem":{"frame":{"x":1601,"y":937,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/3500-gem":{"frame":{"x":1601,"y":209,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/50-gem":{"frame":{"x":1601,"y":989,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/500-gem":{"frame":{"x":1601,"y":261,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/5000-gem":{"frame":{"x":1601,"y":313,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/750-gem":{"frame":{"x":1601,"y":365,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"accessories/7500-gem":{"frame":{"x":1601,"y":417,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/autumn-wreath":{"frame":{"x":1601,"y":469,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/blue-flames-1":{"frame":{"x":1601,"y":521,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/blue-flames-2":{"frame":{"x":1601,"y":573,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/blue-flames-3":{"frame":{"x":1601,"y":625,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/blue-flames-4":{"frame":{"x":1601,"y":677,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/blue-santa-hat":{"frame":{"x":1589,"y":1041,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/bronze-crown":{"frame":{"x":1589,"y":1093,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/broomstick-reversed":{"frame":{"x":1589,"y":1145,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/broomstick":{"frame":{"x":1589,"y":1197,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/clouds":{"frame":{"x":1589,"y":1249,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/doughnut":{"frame":{"x":1589,"y":1301,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/flames-1":{"frame":{"x":1589,"y":1353,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/flames-2":{"frame":{"x":1589,"y":1405,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/flames-3":{"frame":{"x":1561,"y":1457,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/flames-4":{"frame":{"x":1561,"y":1509,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/flower-headband":{"frame":{"x":1,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/fruit-bowl":{"frame":{"x":53,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/gold-crown":{"frame":{"x":105,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/gold-wreath":{"frame":{"x":157,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/halo":{"frame":{"x":209,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/pirate-hat":{"frame":{"x":261,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/rose-wreath":{"frame":{"x":313,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/santa-hat":{"frame":{"x":365,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/silver-crown":{"frame":{"x":417,"y":1603,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/spring-wreath":{"frame":{"x":469,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/stardust":{"frame":{"x":521,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/stars":{"frame":{"x":573,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/stick-reversed":{"frame":{"x":625,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/stick":{"frame":{"x":677,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sticky-coat":{"frame":{"x":729,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/storm-clouds-1":{"frame":{"x":781,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/storm-clouds-2":{"frame":{"x":833,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/storm-clouds-3":{"frame":{"x":885,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/storm-clouds-4":{"frame":{"x":937,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/summer-olympics-wreath-2":{"frame":{"x":989,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/summer-olympics-wreath":{"frame":{"x":1041,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/summer-wreath":{"frame":{"x":1093,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-1":{"frame":{"x":1145,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-10":{"frame":{"x":1197,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-11":{"frame":{"x":1249,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-12":{"frame":{"x":1301,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-13":{"frame":{"x":1353,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-14":{"frame":{"x":1405,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-15":{"frame":{"x":1457,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-2":{"frame":{"x":1509,"y":1601,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-3":{"frame":{"x":1561,"y":1561,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-4":{"frame":{"x":1629,"y":729,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-5":{"frame":{"x":1653,"y":1,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-6":{"frame":{"x":1653,"y":781,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-7":{"frame":{"x":1653,"y":53,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-8":{"frame":{"x":1653,"y":833,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/sunglasses-9":{"frame":{"x":1653,"y":105,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/toxic-coat":{"frame":{"x":1653,"y":885,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/tuxedo":{"frame":{"x":1653,"y":157,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/winter-olympics-wreath":{"frame":{"x":1653,"y":937,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/winter-wreath":{"frame":{"x":1653,"y":209,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/witch-hat-reversed":{"frame":{"x":1653,"y":989,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/witch-hat":{"frame":{"x":1653,"y":261,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"entities/ninja-star-1":{"frame":{"x":1653,"y":313,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"entities/ninja-star-3":{"frame":{"x":1653,"y":365,"w":50,"h":50},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":50,"h":50},"sourceSize":{"w":50,"h":50},"pivot":{"x":0.5,"y":0.5}},"cosmetics/bronze-jewels":{"frame":{"x":1653,"y":417,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48},"pivot":{"x":0.5,"y":0.5}},"cosmetics/gold-jewels":{"frame":{"x":1653,"y":467,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48},"pivot":{"x":0.5,"y":0.5}},"cosmetics/silver-jewels":{"frame":{"x":1653,"y":517,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48},"pivot":{"x":0.5,"y":0.5}},"entities/ninja-star-2":{"frame":{"x":1653,"y":567,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48},"pivot":{"x":0.5,"y":0.5}},"entities/ninja-star-4":{"frame":{"x":1653,"y":617,"w":48,"h":48},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":48,"h":48},"sourceSize":{"w":48,"h":48},"pivot":{"x":0.5,"y":0.5}},"entities/sour_candy_item_outline":{"frame":{"x":1497,"y":1041,"w":37,"h":37},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":37,"h":37},"sourceSize":{"w":37,"h":37},"pivot":{"x":0.5,"y":0.5}},"entities/sour_candy_item_outline_white":{"frame":{"x":1561,"y":1613,"w":37,"h":37},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":37,"h":37},"sourceSize":{"w":37,"h":37},"pivot":{"x":0.5,"y":0.5}},"entities/torch-1":{"frame":{"x":925,"y":1017,"w":13,"h":36},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":13,"h":36},"sourceSize":{"w":13,"h":36},"pivot":{"x":0.5,"y":0.5}},"entities/torch-2":{"frame":{"x":925,"y":1055,"w":13,"h":36},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":13,"h":36},"sourceSize":{"w":13,"h":36},"pivot":{"x":0.5,"y":0.5}},"entities/torch-3":{"frame":{"x":925,"y":1093,"w":13,"h":36},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":13,"h":36},"sourceSize":{"w":13,"h":36},"pivot":{"x":0.5,"y":0.5}},"entities/torch-4":{"frame":{"x":925,"y":1131,"w":13,"h":36},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":13,"h":36},"sourceSize":{"w":13,"h":36},"pivot":{"x":0.5,"y":0.5}},"entities/torch-5":{"frame":{"x":925,"y":1169,"w":13,"h":36},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":13,"h":36},"sourceSize":{"w":13,"h":36},"pivot":{"x":0.5,"y":0.5}},"entities/torch-6":{"frame":{"x":925,"y":1207,"w":13,"h":36},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":13,"h":36},"sourceSize":{"w":13,"h":36},"pivot":{"x":0.5,"y":0.5}},"entities/sour_candy_item":{"frame":{"x":1600,"y":1613,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35},"pivot":{"x":0.5,"y":0.5}},"entities/sweet_tooth_item":{"frame":{"x":1331,"y":1041,"w":35,"h":35},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":35,"h":35},"sourceSize":{"w":35,"h":35},"pivot":{"x":0.5,"y":0.5}},"entities/flashlight_item":{"frame":{"x":940,"y":1017,"w":32,"h":16},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":32,"h":16},"sourceSize":{"w":32,"h":16},"pivot":{"x":0.5,"y":0.5}},"entities/explodiorb_item_1":{"frame":{"x":925,"y":1245,"w":14,"h":14},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":14},"sourceSize":{"w":14,"h":14},"pivot":{"x":0.5,"y":0.5}},"entities/explodiorb_item_2":{"frame":{"x":1525,"y":521,"w":14,"h":14},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":14},"sourceSize":{"w":14,"h":14},"pivot":{"x":0.5,"y":0.5}},"entities/explodiorb_item_3":{"frame":{"x":1537,"y":1457,"w":14,"h":14},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":14},"sourceSize":{"w":14,"h":14},"pivot":{"x":0.5,"y":0.5}},"entities/explodiorb_item_4":{"frame":{"x":1681,"y":667,"w":14,"h":14},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":14},"sourceSize":{"w":14,"h":14},"pivot":{"x":0.5,"y":0.5}},"entities/explodiorb_item_5":{"frame":{"x":974,"y":1017,"w":14,"h":14},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":14},"sourceSize":{"w":14,"h":14},"pivot":{"x":0.5,"y":0.5}},"entities/explodiorb_item_6":{"frame":{"x":1525,"y":537,"w":14,"h":14},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":14},"sourceSize":{"w":14,"h":14},"pivot":{"x":0.5,"y":0.5}},"entities/explodiorb_item_7":{"frame":{"x":1537,"y":1473,"w":14,"h":14},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":14,"h":14},"sourceSize":{"w":14,"h":14},"pivot":{"x":0.5,"y":0.5}}},"meta":{"app":"http://github.com/odrick/free-tex-packer-core","version":"0.3.4","image":"texture.png","format":"RGBA8888","size":{"w":1704,"h":1654},"scale":1}}');
const $621fe074d84a8c6e$exports = JSON.parse('{"cosmetics":{"sunglasses":{"startRandom":true,"frames":[{"path":"sunglasses-1","duration":1800},{"path":"sunglasses-2","duration":30},{"path":"sunglasses-3","duration":30},{"path":"sunglasses-4","duration":30},{"path":"sunglasses-5","duration":30},{"path":"sunglasses-6","duration":30},{"path":"sunglasses-7","duration":30},{"path":"sunglasses-8","duration":30},{"path":"sunglasses-9","duration":30},{"path":"sunglasses-10","duration":30},{"path":"sunglasses-11","duration":30},{"path":"sunglasses-12","duration":30},{"path":"sunglasses-13","duration":30},{"path":"sunglasses-14","duration":30},{"path":"sunglasses-15","duration":30}]},"storm-clouds":{"startRandom":true,"frames":[{"path":"storm-clouds-1","duration":1800},{"path":"storm-clouds-2","duration":90},{"path":"storm-clouds-3","duration":90},{"path":"storm-clouds-4","duration":90},{"path":"storm-clouds-1","duration":3600},{"path":"storm-clouds-2","duration":150},{"path":"storm-clouds-1","duration":2400},{"path":"storm-clouds-4","duration":90},{"path":"storm-clouds-3","duration":90},{"path":"storm-clouds-2","duration":90},{"path":"storm-clouds-1","duration":1350},{"path":"storm-clouds-4","duration":150}]},"flames":{"startRandom":true,"frames":[{"path":"flames-1","duration":150},{"path":"flames-2","duration":150},{"path":"flames-3","duration":150},{"path":"flames-4","duration":150}]},"blue-flames":{"startRandom":true,"frames":[{"path":"blue-flames-1","duration":150},{"path":"blue-flames-2","duration":150},{"path":"blue-flames-3","duration":150},{"path":"blue-flames-4","duration":150}]},"snowglobe":{"startRandom":false,"frames":[{"path":"snowglobe-1","duration":90},{"path":"snowglobe-2","duration":90},{"path":"snowglobe-3","duration":90}]}},"entities":{"torch":{"startRandom":true,"frames":[{"path":"torch-1","duration":120},{"path":"torch-2","duration":120},{"path":"torch-3","duration":120},{"path":"torch-4","duration":120},{"path":"torch-5","duration":120},{"path":"torch-6","duration":120}]},"ninja-star":{"startRandom":true,"frames":[{"path":"ninja-star-1","duration":60},{"path":"ninja-star-2","duration":60},{"path":"ninja-star-3","duration":60},{"path":"ninja-star-4","duration":60}]}}}');
$31e8cfefa331e399$var$loadPackedTexture($8ffc30d9a3afd0d9$exports, 0);
for (const [e,t] of Object.entries($621fe074d84a8c6e$exports))
	for (const [a,r] of Object.entries(t))
		$31e8cfefa331e399$var$images[e + "/" + a] = new $31e8cfefa331e399$export$9d5734c725768403(e,r);

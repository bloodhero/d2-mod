tabs[1]=[66,71,72,76,77,81,82,86,87,91]
tabs[2]=[67,68,73,74,78,83,84,88,92,93]
tabs[3]=[69,70,75,79,80,85,89,90,94,95]
tabs[1].name=['Curses','','']
tabs[2].name=['Poison','and Bone','Spells']
tabs[3].name=['Summoning','Spells','']
tabs.close=[1,3,1]
desc=[]
desc[66]=['Amplify Damage',
'curses a group of enemies, increasing<br>the non-magic damage they receive',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(66),3,1),0)*2/3,1)+' yards<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(66),200,75))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(66),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['Damage Taken: ',sign(dec(100,0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[67]=['Teeth',
'fires a barrage of summoned barbed teeth',
function(){return ''+'<span class="num">7: </span>'+dec(min(ln(lvl(67),2,1),24),0)+' teeth<br>'
+'<span class="num">10: </span>'+'Magic Damage: '+(dec(dec((ln(lvl(67),4,2,2,3,4,5)<<7)*(100+((blvl(78)+blvl(88)+blvl(84)+blvl(93))*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(67),8,2,3,4,5,6)<<7)*(100+((blvl(78)+blvl(88)+blvl(84)+blvl(93))*15))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(67),6,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Teeth Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bone Wall: +15% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Spear: +15% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Prison: +15% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Spirit: +15% Magic Damage per Level<br>'
},1,2]
desc[68]=['Bone Armor',
'creates an orbiting shield of bone<br>that absorbs melee damage',
function(){return ''+'<span class="num">3: </span>'+'Absorbs '+dec((ln(lvl(68),20,10)+(blvl(78)+blvl(88))*15),0)+' damage<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(68),11,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Bone Armor Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Bone Wall: +'+dec(15,0)+' Damage Absorbed per Level<br>'
+'<span class="num">67: </span>'+'Bone Prison: +'+dec(15,0)+' Damage Absorbed per Level<br>'
},1,3]
desc[69]=['Skeleton Mastery',
'passive - increases life and damage<br>of raised skeletons and revived creatures',
function(){return ''+'<span class="num">70: </span>'+'Skeletons: Life: +'+(lvl(69)*8)+'<br>'
+'<span class="num">70: </span>'+'Skeletons: Damage: +'+(lvl(69)*2)+'<br>'
+'<span class="num">70: </span>'+'Magi: Life: +'+(lvl(69)*8)+'<br>'
+'<span class="num">33: </span>'+'Magi: Improved Missile Damage<br>'
+'<span class="num">32: </span>'+'Monsters: Life: +'+(lvl(69)*5)+' percent<br>'
+'<span class="num">32: </span>'+'Monsters: Damage: +'+(lvl(69)*10)+' percent<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[70]=['Raise Skeleton',
'cast on the corpse of a slain monster,<br>this raises a skeleton warrior that<br>fights for you',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(((lvl(70)<4)?0:((lvl(70)-3)*7)),0)),' percent<br>',])
+'<span class="num">5: </span>'+'Attack: '+dec(5+(lvl(70)+lvl(69))*15,0)+'<br>'
+'<span class="num">5: </span>'+'Defense: '+dec(5+(lvl(70)+lvl(69))*15,0)+'<br>'
+'<span class="num">13: </span>'+'Life: '+dec(21*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+'<br>Life: '+dec(30*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+' (N)<br>Life: '+dec(42*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+' (H)<br>'
+'<span class="num">36: </span>'+dec((lvl(70)<4)?lvl(70):(2+lvl(70)/3),0)+' skeletons total<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(70),6,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">34: </span>'+'Damage: '+dec((1+lvl(69)*2+dec(dec((ln(lvl(70),0,0,1,2,3,4)<<8),0)/256,0))*(100+((lvl(70)<4)?0:((lvl(70)-3)*7)))/100,0)+-+dec((2+lvl(69)*2+dec(dec((ln(lvl(70),0,0,1,2,3,4)<<8),0)/256,0))*(100+((lvl(70)<4)?0:((lvl(70)-3)*7)))/100,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Raise Skeleton Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Skeleton Mastery<br>'
+'<span class="num">18: </span>'+'Summon Resist<br>'
},1,3]
desc[71]=['Dim Vision',
'curses a group of monsters,<br>reducing their vision radius',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(71),4,1),0)*2/3,1)+' yards<br>'
+'<span class="num">31: </span>'+cc(['Duration: ',dec((ln(lvl(71),175,50))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(71),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[72]=['Weaken',
'curses a group of enemies,<br>reducing the amount of damage they inflict',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(72),9,1),0)*2/3,1)+' yards<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(72),350,60))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(72),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'Target\'s Damage: '+dec(-33,0)+' percent<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[73]=['Poison Dagger',
'adds poison to your dagger attacks',
function(){return ''+'<span class="num">14: </span>'+'Poison Damage: '+(dec((dec((ln(lvl(73),18,10,15,20,23,26)<<1)*(100+((blvl(83)+blvl(92))*20))/100,0))*(dec(ln(lvl(73),50,10),0))/256,0))+'-'+(dec((dec((ln(lvl(73),40,10,15,20,23,26)<<1)*(100+((blvl(83)+blvl(92))*20))/100,0))*(dec(ln(lvl(73),50,10),0))/256,0))+'<br>over '+dec(dec(ln(lvl(73),50,10),0)/25,1)+' seconds<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(73),30,20),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(73),12,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Poison Dagger Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Poison Explosion: +20% Poison Damage per Level<br>'
+'<span class="num">63: </span>'+'Poison Nova: +20% Poison Damage per Level<br>'
},2,1]
desc[74]=['Corpse Explosion',
'cast on the corpse of a slain monster,<br>it explodes, damaging nearby enemies',
function(){return ''+'<span class="num">37: </span>'+'Radius: '+dec((ln(lvl(74),8,1))/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(74),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">38: </span>'+'Damage: '+dec(60,0)+'-'+dec(100,0)+' percent of corpse Life<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[75]=['Clay Golem',
'creates a golem from the earth<br>to fight by your side',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(100*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+'<br>Life: '+dec(175*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+' (N)<br>Life: '+dec(275*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+' (H)<br>'
+'<span class="num">39: </span>'+'Damage: '+dec((2)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((5)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+'<br>Damage: '+dec((2)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((6)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+' (N)<br>Damage: '+dec((3)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((7)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+' (H)<br>'
+'<span class="num">4: </span>'+cc(['Attack Bonus: +',lvl(75)*20,'<br>'])
+'<span class="num">3: </span>'+'Slows Enemies: '+dec(dm(lvl(75),0,75),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(75),15,3)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">5: </span>'+'Attack: '+dec(40+(lvl(79)*25)+(lvl(75)*20),0)+'<br>'
+'<span class="num">5: </span>'+'Defense: '+dec(100+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Clay Golem Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Golem Mastery<br>'
+'<span class="num">18: </span>'+'Summon Resist<br>'
+'<span class="num">63: </span>'+'Blood Golem: +5% Life per Level<br>'
+'<span class="num">67: </span>'+'Iron Golem: +'+dec(35,0)+' Defense per Level<br>'
+'<span class="num">63: </span>'+'Fire Golem: +6% Damage per Level<br>'
},2,2]
desc[76]=['Iron Maiden',
'curses a group of enemies, causing them<br>to damage themselves when damaging others',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(76),200,25),0)+' percent damage returned<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(76),300,60))/25,1),' seconds<br>'])
+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(76),7,0),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(76),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[77]=['Terror',
'curses a group of monsters,<br>causing them to flee in terror',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(77),200,25))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(77),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(77),4,0),0)*2/3,1)+' yards<br>'
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[78]=['Bone Wall',
'creates an impassable barrier<br>of bone and debris',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(19*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+'<br>Life: '+dec(147*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+' (N)<br>Life: '+dec(431*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+' (H)<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((600)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(78),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Bone Wall Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bone Armor: +10% Life per Level<br>'
+'<span class="num">63: </span>'+'Bone Prison: +10% Life per Level<br>'
},3,3]
desc[79]=['Golem Mastery',
'Enhances Speed and Life of all your Golems',
function(){return ''+'<span class="num">2: </span>'+cc(['Life: ',sign(dec(lvl(79)*20,0)),' percent<br>',])
+'<span class="num">4: </span>'+cc(['Attack Bonus: +',(lvl(79)*25),'<br>'])
+'<span class="num">2: </span>'+cc(['Walk/Run Speed: ',sign(dec(dm(lvl(79),0,40),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[80]=['Raise Skeletal Mage',
'cast on the corpse of a slain monster,<br>this raises a skeleton mage that<br>fights for you',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(61*(100+(0))/100+(lvl(69)*8),0)+'<br>Life: '+dec(88*(100+(0))/100+(lvl(69)*8),0)+' (N)<br>Life: '+dec(123*(100+(0))/100+(lvl(69)*8),0)+' (H)<br>'
+'<span class="num">5: </span>'+'Defense: '+dec((lvl(80)+lvl(69))*10,0)+'<br>'
+'<span class="num">36: </span>'+dec((lvl(80)<4)?lvl(80):(2+lvl(80)/3),0)+' skeleton magi<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(80),8,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Raise Skeletal Mage Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Skeleton Mastery<br>'
+'<span class="num">18: </span>'+'Summon Resist<br>'
},3,3]
desc[81]=['Confuse',
'curses a monster to force it to attack random targets',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(81),6,1),0)*2/3,1)+' yards<br>'
+'<span class="num">31: </span>'+cc(['Duration: ',dec((ln(lvl(81),250,50))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(81),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[82]=['Life Tap',
'curses a group of monsters so that<br>damaging them gives the attacker life',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(82),4,1),0)*2/3,1)+' yards<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(82),400,60))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(82),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'Heals: '+dec(ln(lvl(82),50,0),0)+' percent of attack damage<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[83]=['Poison Explosion',
'cast on the corpse of a slain monster,<br>toxic gas is released<br>that poisons nearby monsters',
function(){return ''+'<span class="num">14: </span>'+'Poison Damage: '+(dec((dec((ln(lvl(83),8,2,4,6,8,10)<<4)*(100+((blvl(73)+blvl(92))*15))/100,0))*(dec(ln(lvl(83),50,10),0))/256,0))+'-'+(dec((dec((ln(lvl(83),24,2,4,6,8,10)<<4)*(100+((blvl(73)+blvl(92))*15))/100,0))*(dec(ln(lvl(83),50,10),0))/256,0))+'<br>over '+dec(dec(ln(lvl(83),50,10),0)/25,1)+' seconds<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(83),8,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Poison Explosion Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Poison Dagger: +15% Poison Damage per Level<br>'
+'<span class="num">63: </span>'+'Poison Nova: +15% Poison Damage per Level<br>'
},4,1]
desc[84]=['Bone Spear',
'summons a deadly spike of bone to impale your enemies',
function(){return ''+'<span class="num">10: </span>'+'Magic Damage: '+(dec(dec((ln(lvl(84),16,8,9,12,18,24)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(93))*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(84),24,8,9,13,19,25)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(93))*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(84),28,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Bone Spear Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Teeth: +7% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Wall: +7% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Prison: +7% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Spirit: +7% Magic Damage per Level<br>'
},4,2]
desc[85]=['Blood Golem',
'creates a golem that shares with you the life<br>it steals and damage it receives',
function(){return ''+'<span class="num">3: </span>'+'Converts '+dec(dm(lvl(85),75,150),0)+' percent damage to life<br>'
+'<span class="num">39: </span>'+'Damage: '+dec((6)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((16)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+'<br>Damage: '+dec((9)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((23)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+' (N)<br>Damage: '+dec((10)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((27)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+' (H)<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(85),25,4)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(201*(100+((lvl(79)*20)))/100+(0),0)+'<br>Life: '+dec(388*(100+((lvl(79)*20)))/100+(0),0)+' (N)<br>Life: '+dec(637*(100+((lvl(79)*20)))/100+(0),0)+' (H)<br>'
+'<span class="num">5: </span>'+'Attack: '+dec(60+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'Defense: '+dec(120+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Blood Golem Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Golem Mastery<br>'
+'<span class="num">18: </span>'+'Summon Resist<br>'
+'<span class="num">67: </span>'+'Clay Golem: +'+dec(20,0)+' Attack Rating per Level<br>'
+'<span class="num">67: </span>'+'Iron Golem: +'+dec(35,0)+' Defense per Level<br>'
+'<span class="num">63: </span>'+'Fire Golem: +6% Damage per Level<br>'
},4,2]
desc[86]=['Attract',
'curses a monster to become the<br>target of all nearby monsters<br>this curse may not be overridden by another curse',
function(){return ''+'<span class="num">31: </span>'+cc(['Duration: ',dec((ln(lvl(86),300,90))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(86),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(86),9,0),0)*2/3,1)+' yards<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[87]=['Decrepify',
'curses a group of enemies to make them<br>slow, weak and take amplified damage',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(87),100,15))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(87),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(87),6,0),0)*2/3,1)+' yards<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[88]=['Bone Prison',
'creates a barrier of fossilized bone around your target',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(19*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+'<br>Life: '+dec(147*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+' (N)<br>Life: '+dec(431*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+' (H)<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((600)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(88),27,-1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Bone Prison Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bone Armor: +8% Life per Level<br>'
+'<span class="num">63: </span>'+'Bone Wall: +8% Life per Level<br>'
},5,3]
desc[89]=['Summon Resist',
'passive - increases the resistances<br>of all summoned creatures',
function(){return ''+'<span class="num">2: </span>'+cc(['Resist All: ',sign(dec(dm(lvl(89),20,75),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[90]=['Iron Golem',
'transforms a metallic item into a golem that gains<br>the properties of the item',
function(){return ''+'<span class="num">18: </span>'+'Thorns damage<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(90),150,15),0)+' percent damage returned<br>'
+'<span class="num">4: </span>'+cc(['Defense Bonus: +',lvl(90)*35,'<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(90),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(306*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+'<br>Life: '+dec(595*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (N)<br>Life: '+dec(980*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (H)<br>'
+'<span class="num">39: </span>'+'Damage: '+dec((7)*(100+(blvl(94)*6))/100,0)+-+dec((19)*(100+(blvl(94)*6))/100,0)+'<br>Damage: '+dec((11)*(100+(blvl(94)*6))/100,0)+-+dec((30)*(100+(blvl(94)*6))/100,0)+' (N)<br>Damage: '+dec((12)*(100+(blvl(94)*6))/100,0)+-+dec((33)*(100+(blvl(94)*6))/100,0)+' (H)<br>'
+'<span class="num">5: </span>'+'Attack: '+dec(80+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'Defense: '+dec(140+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Iron Golem Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Golem Mastery<br>'
+'<span class="num">18: </span>'+'Summon Resist<br>'
+'<span class="num">67: </span>'+'Clay Golem: +'+dec(20,0)+' Attack Rating per Level<br>'
+'<span class="num">63: </span>'+'Blood Golem: +5% Life per Level<br>'
+'<span class="num">63: </span>'+'Fire Golem: +6% Damage per Level<br>'
},5,2]
desc[91]=['Lower Resist',
'curses an enemy to take more damage from all magical attacks<br>lowers resistances of monsters<br>lowers maximum resistances of hostile players',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(91),7,1),0)*2/3,1)+' yards<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(91),500,50))/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Resist All: '+dec(-dm(lvl(91),25,70),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(91),22,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[92]=['Poison Nova',
'emits an expanding ring of concentrated poison',
function(){return ''+'<span class="num">14: </span>'+'Poison Damage: '+(dec((dec((ln(lvl(92),14,4,5,8,12,14)<<4)*(100+((blvl(73)+blvl(83))*10))/100,0))*(dec(ln(lvl(92),50,0),0))/256,0))+'-'+(dec((dec((ln(lvl(92),25,4,5,8,12,14)<<4)*(100+((blvl(73)+blvl(83))*10))/100,0))*(dec(ln(lvl(92),50,0),0))/256,0))+'<br>over '+dec(dec(ln(lvl(92),50,0),0)/25,1)+' seconds<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(92),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Poison Nova Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Poison Dagger: +10% Poison Damage per Level<br>'
+'<span class="num">63: </span>'+'Poison Explosion: +10% Poison Damage per Level<br>'
},6,1]
desc[93]=['Bone Spirit',
'releases a spirit of the restless undead that<br>tracks its target or finds one of its own',
function(){return ''+'<span class="num">10: </span>'+'Magic Damage: '+(dec(dec((ln(lvl(93),20,16,17,18,19,20)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(84))*6))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(93),30,17,18,19,20,21)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(84))*6))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(93),24,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Bone Spirit Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Teeth: +6% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Wall: +6% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Spear: +6% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Bone Prison: +6% Magic Damage per Level<br>'
},6,2]
desc[94]=['Fire Golem',
'creates a golem that converts the damage<br>it receives from fire into life',
function(){return ''+'<span class="num">3: </span>'+'Absorbs '+dec(dm(lvl(94),25,100),0)+' percent fire damage<br>'
+'<span class="num">41: </span>'+'Damage: '+dec((10)*(100+0)/100,0)+-+dec((27)*(100+0)/100,0)+'<br>Damage: '+dec((15)*(100+0)/100,0)+-+dec((39)*(100+0)/100,0)+' (N)<br>Damage: '+dec((18)*(100+0)/100,0)+-+dec((47)*(100+0)/100,0)+' (H)<br>'+'Fire Damage: '+(dec(dec((ln(lvl(94),10,9,10,11,12,13)<<8),0)/256,0)+dec(dec((ln(ln(lvl(94),8,1),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0)*6)+'-'+(dec(dec((ln(lvl(94),27,10,11,12,13,14)<<8),0)/256,0)+dec(dec((ln(ln(lvl(94),8,1),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0)*6)+'<br>'
+'<span class="num">35: </span>'+'Holy Fire '+(dec(dec((ln(ln(lvl(94),8,1),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0))+'-'+(dec(dec((ln(ln(lvl(94),8,1),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(94),50,10)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(313*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+'<br>Life: '+dec(613*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (N)<br>Life: '+dec(1013*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (H)<br>'
+'<span class="num">5: </span>'+'Attack: '+dec(120+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'Defense: '+dec(200+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fire Golem Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Golem Mastery<br>'
+'<span class="num">18: </span>'+'Summon Resist<br>'
+'<span class="num">67: </span>'+'Clay Golem: +'+dec(20,0)+' Attack Rating per Level<br>'
+'<span class="num">63: </span>'+'Blood Golem: +5% Life per Level<br>'
+'<span class="num">67: </span>'+'Iron Golem: +'+dec(35,0)+' Defense per Level<br>'
},6,2]
desc[95]=['Revive',
'returns a monster to life<br>to fight by your side',
function(){return ''+'<span class="num">5: </span>'+'Monsters: '+dec(lvl(95),0)+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(95),45,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(95),4500,0))/25,1),' seconds<br>'])
+'<span class="num">2: </span>'+cc(['Life: ',sign(dec(200+lvl(69)*5,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(lvl(69)*10,0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Revive Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Skeleton Mastery<br>'
+'<span class="num">18: </span>'+'Summon Resist<br>'
},6,3]

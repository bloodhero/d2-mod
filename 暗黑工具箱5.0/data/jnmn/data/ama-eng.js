tabs[1]=[6,7,11,12,16,21,22,26,27,31]
tabs[2]=[8,9,13,17,18,23,28,29,32,33]
tabs[3]=[10,14,15,19,20,24,25,30,34,35]
tabs[1].name=['Bow and','Crossbow','Skills']
tabs[2].name=['Passive','and Magic','Skills']
tabs[3].name=['Javelin','and Spear','Skills']
tabs.close=[3,2,1]
desc=[]
desc[6]=['Magic Arrow',
'creates a magical arrow or bolt<br>that does extra damage',
function(){return ''+'<span class="num">66: </span>'+'Converts '+(1+(lvl(6)-1)*1)+'% Physical Damage to Magic Damage<br>'
+'<span class="num">8: </span>'+cc(['To Attack Rating: +',ln(lvl(6),10,9),' percent<br>'])
+'<span class="num">9: </span>'+cc(['Damage: +',dec((lvl(6)<<8)/256,0),'<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(6),12,-1)<<5,0)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[7]=['Fire Arrow',
'magically enhances your arrows<br>or bolts with fire',
function(){return ''+'<span class="num">66: </span>'+'Converts '+(3+(lvl(7)-1)*2)+'% Physical Damage to Elemental Damage<br>'
+'<span class="num">8: </span>'+cc(['To Attack Rating: +',ln(lvl(7),10,9),' percent<br>'])
+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(7),1,2,3,6,12,24)<<8)*(100+((blvl(16))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(7),4,2,3,7,14,27)<<8)*(100+((blvl(16))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(7),24,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fire Arrow Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Exploding Arrow: +12% Fire Damage per Level<br>'
},1,3]
desc[8]=['Inner Sight',
'illuminates nearby enemies<br>making them easier to hit<br>for you and your party',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(8),200,100))/25,1),' seconds<br>'])
+'<span class="num">5: </span>'+'Enemy Defense: '+dec(-dec(dec((ln(lvl(8),40,25,45,60,80,100)<<8),0)/256,0),0)+'<br>'
+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(8),20,0),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(8),10,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[9]=['Critical Strike',
'passive - your attacks have a chance to do double damage',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(9),5,80),0)+' percent chance<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[10]=['Jab',
'attacks with a series of rapid thrusts<br>using a javelin or spear class weapon',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(10),10,9),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(10),-15,3),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(10),8,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">25: </span>'+'Multiple Hits<br>'
},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[11]=['Cold Arrow',
'magically enhances your arrows or bolts<br>by adding cold damage and a slowing effect<br>cold arrows only do half of their regular damage',
function(){return ''+'<span class="num">66: </span>'+'Converts '+(3+(lvl(11)-1)*2)+'% Physical Damage to Elemental Damage<br>'
+'<span class="num">8: </span>'+cc(['To Attack Rating: +',ln(lvl(11),10,9),' percent<br>'])
+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(11),6,4,5,8,16,42)<<7)*(100+((blvl(21))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(11),8,4,5,9,17,44)<<7)*(100+((blvl(21))*12))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['Cold Length: ',dec(dec(ln(lvl(11),100,30),0)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(11),28,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Cold Arrow Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Ice Arrow: +12% Cold Damage per Level<br>'
},2,1]
desc[12]=['Multiple Shot',
'magically splits one arrow<br>or bolt into many',
function(){return ''+'<span class="num">7: </span>'+dec(min(24,ln(lvl(12),2,1)),0)+' arrows<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(12),4,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' Weapon Damage<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[13]=['Dodge',
'passive - you have a chance to dodge<br>a melee attack when attacking<br>or standing still',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(13),10,65),0)+' percent chance<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[14]=['Power Strike',
'adds lightning damage to attacks with<br>javelin and spear class weapons',
function(){return ''+'<span class="num">8: </span>'+cc(['To Attack Rating: +',ln(lvl(14),20,12),' percent<br>'])
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(14),1,0)<<8)*(100+((blvl(34)+blvl(20)+blvl(24)+blvl(35))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(14),16,18,36,54,72,90)<<8)*(100+((blvl(34)+blvl(20)+blvl(24)+blvl(35))*10))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(14),8,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Power Strike Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Lightning Bolt: +10% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Charged Strike: +10% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Strike: +10% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Fury: +10% Lightning Damage per Level<br>'
},2,2]
desc[15]=['Poison Javelin',
'magically enhances your javelin<br>to leave a trail of poison clouds',
function(){return ''+'<span class="num">14: </span>'+'Poison Damage: '+(dec((dec(ln(lvl(15),32,16,32,48,64,96)*(100+((blvl(25))*12))/100,0))*(dec(ln(lvl(15),200,50),0))/256,0))+'-'+(dec((dec(ln(lvl(15),48,16,36,52,68,84)*(100+((blvl(25))*12))/100,0))*(dec(ln(lvl(15),200,50),0))/256,0))+'<br>over '+dec(dec(ln(lvl(15),200,50),0)/25,1)+' seconds<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(15),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Poison Javelin Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Plague Javelin: +12% Poison Damage per Level<br>'
},2,3]
desc[16]=['Exploding Arrow',
'enchants an arrow or bolt that explodes on<br>contact, damaging all nearby enemies',
function(){return ''+'<span class="num">8: </span>'+cc(['To Attack Rating: +',ln(lvl(16),20,9),' percent<br>'])
+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(16),2,5,7,9,12,20)<<8)*(100+((blvl(7))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(16),6,5,8,11,14,23)<<8)*(100+((blvl(7))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(16),10,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Exploding Arrow Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Fire Arrow: +12% Fire Damage per Level<br>'
},3,3]
desc[17]=['Slow Missiles',
'illuminates nearby enemies and slows their ranged attacks',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(17),300,150))/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Ranged attacks slowed to '+dec(ln(lvl(17),33,0),0)+' percent<br>'
+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(17),20,0),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(17),10,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[18]=['Avoid',
'passive - you have a chance to dodge enemy missiles<br>when attacking or standing still',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(18),15,75),0)+' percent chance<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[19]=['Impale',
'increases attack damage but rapidly degrades the weapon',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(19),300,25),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(19),100,25),0)),' percent<br>',])
+'<span class="num">3: </span>'+'Chance of losing durability: '+dec(50-dm(lvl(19),0,30),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(19),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[20]=['Lightning Bolt',
'magically converts your javelin into a bolt of lightning',
function(){return ''+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(20),1,0)<<8)*(100+((blvl(34)+blvl(14)+blvl(24)+blvl(35))*3))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(20),40,12,18,28,48,88)<<8)*(100+((blvl(34)+blvl(14)+blvl(24)+blvl(35))*3))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(20),24,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' Weapon Damage<br>'
+'<span class="num">66: </span>'+'Converts '+(100)+'% Physical Damage to Elemental Damage<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Lightning Bolt Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Power Strike: +3% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Charged Strike: +3% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Strike: +3% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Fury: +3% Lightning Damage per Level<br>'
},3,3]
desc[21]=['Ice Arrow',
'magically enhances your arrow or bolt<br>to freeze your enemies',
function(){return ''+'<span class="num">8: </span>'+cc(['To Attack Rating: +',ln(lvl(21),20,9),' percent<br>'])
+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(21),6,6,12,18,26,36)<<8)*(100+((blvl(11))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(21),10,6,13,19,27,38)<<8)*(100+((blvl(11))*8))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['Freezes for ',dec((dec(ln(lvl(21),50,5)*(100+((blvl(31))*5))/100,0))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(21),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Ice Arrow Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Cold Arrow: +8% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Freezing Arrow: +5% Freeze Length per Level<br>'
},4,1]
desc[22]=['Guided Arrow',
'enhances your arrows and bolts<br>to track your target<br>or seek one of its own<br>always hits',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(22),0,5),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(22),32,-1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[23]=['Penetrate',
'passive - increases your attack rating',
function(){return ''+'<span class="num">2: </span>'+cc(['To Attack Rating: ',sign(dec(ln(lvl(23),35,10),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[24]=['Charged Strike',
'adds lightning damage to javelin and spear class weapons<br>and releases charged bolts upon impact',
function(){return ''+'<span class="num">3: </span>'+'Releases '+dec(3+lvl(24)/5,0)+' charged bolts<br>'
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(24),1,0)<<8)*(100+((blvl(34)+blvl(20)+blvl(14)+blvl(35))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(24),30,12,16,20,24,28)<<8)*(100+((blvl(34)+blvl(20)+blvl(14)+blvl(35))*10))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(24),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Charged Strike Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Power Strike: +10% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Bolt: +10% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Strike: +10% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Fury: +10% Lightning Damage per Level<br>'
},4,2]
desc[25]=['Plague Javelin',
'magically enhances your javelin to release<br>expanding clouds of poison upon impact',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(25),30,9),0)),' percent<br>',])
+'<span class="num">14: </span>'+'Poison Damage: '+(dec((dec((ln(lvl(25),10,6,12,20,40,60)<<3)*(100+((blvl(15))*10))/100,0))*(dec(ln(lvl(25),75,10),0))/256,0))+'-'+(dec((dec((ln(lvl(25),16,6,12,20,40,60)<<3)*(100+((blvl(15))*10))/100,0))*(dec(ln(lvl(25),75,10),0))/256,0))+'<br>over '+dec(dec(ln(lvl(25),75,10),0)/25,1)+' seconds<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(25),14,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Plague Javelin Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Poison Javelin: +10% Poison Damage per Level<br>'
},4,3]
desc[26]=['Strafe',
'magically splits one arrow into several<br>that target multiple nearby enemies',
function(){return ''+'<span class="num">3: </span>'+'Attacks up to '+dec(min(lvl(26)+4,10),0)+' targets<br>'
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((lvl(26)*5),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(26),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' Weapon Damage<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[27]=['Immolation Arrow',
'enhances arrows or bolts to<br>cause severe fire damage and<br>creates a pyre upon impact',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(27),30,9),0)),' percent<br>',])
+'<span class="num">24: </span>'+'Fire Explosion Damage: '+(dec(dec((ln(lvl(27),10,10,20,30,32,34)<<8)*(100+((blvl(16))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(27),20,10,20,30,32,34)<<8)*(100+((blvl(16))*10))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['Fire Duration: ',dec((ln(lvl(27),75,0))/25,1),' seconds<br>'])
+'<span class="num">22: </span>'+'Average Fire Damage: '+dec(dec((ln(lvl(27),7,5)<<2)*(100+(blvl(7)*5))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(27),9,5)<<2)*(100+(blvl(7)*5))/100,0)*25/256,0)*3+' per second<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(27),12,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Immolation Arrow Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Fire Arrow: +5% Average Fire Damage per Second per Level<br>'
+'<span class="num">63: </span>'+'Exploding Arrow: +10% Fire Damage per Level<br>'
},5,3]
desc[28]=['Decoy',
'creates a duplicate of yourself<br>that draws fire from enemies',
function(){return ''+'<span class="num">2: </span>'+cc(['Life: ',sign(dec(lvl(28)*10,0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(28),250,125))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(28),76,-3)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[29]=['Evade',
'passive - you have a chance to dodge<br>a melee or missile attack<br>when walking or running',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(29),10,65),0)+' percent chance<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[30]=['Fend',
'attacks all adjacent targets',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack Bonus: ',sign(dec(ln(lvl(30),40,10),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(30),70,10),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(30),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[31]=['Freezing Arrow',
'magically enhances an arrow or bolt<br>to freeze entire groups of monsters',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(31),40,9),0)),' percent<br>',])
+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(31),40,10,15,20,22,24)<<8)*(100+((blvl(11))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(31),50,10,15,20,22,24)<<8)*(100+((blvl(11))*12))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['Freezes for ',dec((dec(ln(lvl(31),50,0)*(100+((blvl(21))*5))/100,0))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(31),18,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(5*2/3,1)+' yards<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Freezing Arrow Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Cold Arrow: +12% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Ice Arrow: +5% Freeze Length per Level<br>'
},6,1]
desc[32]=['Valkyrie',
'summons a powerful Valkyrie ally',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(400*(100+(20*(lvl(32)-1)+blvl(28)*20))/100+(0),0)+-+dec(480*(100+(20*(lvl(32)-1)+blvl(28)*20))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(25*(lvl(32)-1),0)),' percent<br>',])
+'<span class="num">4: </span>'+cc(['Attack: +',(40*lvl(32)+40*blvl(23)),'<br>'])
+'<span class="num">2: </span>'+cc(['Defense Bonus: ',sign(dec((lvl(32)-1)*10,0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(32),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Valkyrie Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Decoy: +20% Life per Level<br>'
+'<span class="num">67: </span>'+'Penetrate: +'+dec(40,0)+' Attack Rating per Level<br>'
+'<span class="num">25: </span>'+'Critical Strike<br>'
+'<span class="num">25: </span>'+'Dodge<br>'
+'<span class="num">25: </span>'+'Avoid<br>'
+'<span class="num">25: </span>'+'Evade<br>'
},6,1]
desc[33]=['Pierce',
'passive - your missiles have a chance to<br>pass through enemies that they hit',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(33),10,100),0)+' percent chance<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[34]=['Lightning Strike',
'adds lightning damage to javelin and spear class weapons<br>and releases chain lightning upon impact',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(34),2,1),0)+' hits<br>'
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(34),1,0)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(35))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(34),25,10,15,20,25,30)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(35))*8))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(34),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Lightning Strike Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Power Strike: +8% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Bolt: +8% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Charged Strike: +8% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Fury: +8% Lightning Damage per Level<br>'
},6,2]
desc[35]=['Lightning Fury',
'changes a thrown javelin into a powerful<br>bolt of lightning that splits on impact',
function(){return ''+'<span class="num">3: </span>'+'Releases '+dec(ln(lvl(35),2,1),0)+' bolts<br>'
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(35),1,0)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(34))*1))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(35),40,20,30,40,50)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(34))*1))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(35),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Lightning Fury Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Power Strike: +1% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Bolt: +1% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Charged Strike: +1% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Strike: +1% Lightning Damage per Level<br>'
},6,3]

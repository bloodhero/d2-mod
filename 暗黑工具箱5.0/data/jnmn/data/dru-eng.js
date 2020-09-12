tabs[1]=[221,222,226,227,231,236,237,241,246,247]
tabs[2]=[223,224,228,232,233,238,239,242,243,248]
tabs[3]=[225,229,230,234,235,240,244,245,249,250]
tabs[1].name=['Summoning','','']
tabs[2].name=['Shape','Shifting','']
tabs[3].name=['Elemental','','']
tabs.close=[3,3,3]
desc=[]
desc[221]=['Raven',
'summon ravens to peck out<br>the eyes of your enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(221),2,1)<<8)/256,0)+'-'+dec((ln(lvl(221),4,1)<<8)/256,0)+'<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(221),12,1),0)+' hits<br>'
+'<span class="num">5: </span>'+'Ravens: '+dec(min(lvl(221),5),0)+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost Per Raven: ',dec(max(ln(lvl(221),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[222]=['Poison Creeper',
'summon a vine that spreads<br>disease to all it contacts',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(42*(100+((lvl(222)-1)*25))/100+(0),0)+-+dec(58*(100+((lvl(222)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">14: </span>'+'Poison Damage: '+(dec((dec(ln(lvl(222),12,7,12,15,17,19),0))*(dec(ln(lvl(222),100,0),0))/256,0))+'-'+(dec((dec(ln(lvl(222),16,7,12,15,17,19),0))*(dec(ln(lvl(222),100,0),0))/256,0))+'<br>over '+dec(dec(ln(lvl(222),100,0),0)/25,1)+' seconds<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(222),8,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[223]=['Werewolf',
'transform into a werewolf',
function(){return ''+'<span class="num">2: </span>'+cc(['To Attack Rating: ',sign(dec(ln(lvl(223),50,15),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack Speed: ',sign(dec(dm(lvl(223),10,80),0)),' percent<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(223),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['Life: ',sign(dec(25+ln(lvl(224),20,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Stamina Bonus: ',sign(dec(25,0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((1000+ln(lvl(224),1000,500))/25,1),' seconds<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Werewolf Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Lycanthropy<br>'
},1,1]
desc[224]=['Lycanthropy',
'passive - improves duration and life<br>when in werewolf or werebear form',
function(){return ''+'<span class="num">2: </span>'+cc(['Max Life: ',sign(dec(ln(lvl(224),20,5),0)),' percent<br>',])
+'<span class="num">57: </span>'+'Duration: +'+(ln(lvl(224),1000,500))/25+' seconds<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[225]=['Firestorm',
'unleash fiery chaos to burn your enemies',
function(){return ''+'<span class="num">27: </span>'+'Average Fire Damage: '+(dec(dec((ln(lvl(225),3,3,5,7,14,21)<<2)*(100+((blvl(229)+blvl(234))*23))/100,0)*75/256,0))+'-'+(dec(dec((ln(lvl(225),6,3,6,8,15,23)<<2)*(100+((blvl(229)+blvl(234))*23))/100,0)*75/256,0))+' per second<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(225),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Firestorm Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Molten Boulder: +23% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Fissure: +23% Fire Damage per Level<br>'
},1,1]
desc[226]=['Oak Sage',
'summon a spirit pet that increases<br>life for you and your party',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(56*(100+((lvl(226)-1)*30))/100+(0),0)+-+dec(64*(100+((lvl(226)-1)*30))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['Life: ',sign(dec(ln(lvl(226),30,5),0)),' percent<br>',])
+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(226),30,2),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(226),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[227]=['Summon Spirit Wolf',
'summon a wolf with teleporting ability<br>to fight by your side',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(227),2,1,2,4,5,8)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(227),6,1,2,4,5,8)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">5: </span>'+'Wolves: '+dec(min(lvl(227),5),0)+'<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(227),50,25),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Defense: ',sign(dec(ln(lvl(227),50,10),0)),' percent<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(227),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">13: </span>'+'Life: '+dec(60*(100+((lvl(237)>0)?ln(lvl(237),50,25):0))/100+(0),0)+-+dec(82*(100+((lvl(237)>0)?ln(lvl(237),50,25):0))/100+(0),0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Summon Spirit Wolf Receives Bonuses From:<br>'
+'</span>'+'<span class="num">25: </span>'+'Summon Dire Wolf<br>'
+'<span class="num">25: </span>'+'Summon Grizzly<br>'
},2,2]
desc[228]=['Werebear',
'transform into a werebear',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(228),50,7),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Defense: ',sign(dec(ln(lvl(228),25,5),0)),' percent<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(228),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['Life: ',sign(dec(50+ln(lvl(224),20,5),0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((1000+ln(lvl(224),1000,500))/25,1),' seconds<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Werebear Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Lycanthropy<br>'
},2,3]
desc[229]=['Molten Boulder',
'launch a boulder of flaming hot magma<br>that knocks back your enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(229),6,4,7,10,13,16)<<8)*(100+blvl(244)*10)/25600,0)+'-'+dec((ln(lvl(229),12,5,8,11,14,17)<<8)*(100+blvl(244)*10)/25600,0)+'<br>'
+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(229),6,4,7,10,13,16)<<8)*(100+(blvl(225)*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(229),12,5,8,11,14,17)<<8)*(100+(blvl(225)*8))/100,0)/256,0))+'<br>'
+'<span class="num">22: </span>'+'Average Fire Damage: '+dec(dec((ln(lvl(229),10,6,7,8,9,10)<<2)*(100+(blvl(225)*8))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(229),14,6,7,8,9,10)<<2)*(100+(blvl(225)*8))/100,0)*25/256,0)*3+' per second<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(229),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Molten Boulder Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Volcano: +10% Damage per Level<br>'
+'<span class="num">63: </span>'+'Firestorm: +8% Fire Damage per Level<br>'
},2,1]
desc[230]=['Arctic Blast',
'blast a continuous jet of ice<br>to burn your enemies with frost',
function(){return ''+'<span class="num">26: </span>'+'Average Cold Damage: '+(dec(dec((ln(lvl(230),21,16,18,20,24,29)<<2)*(100+((blvl(235)+blvl(250))*15))/100,0)/10.24,0))+'-'+(dec(dec((ln(lvl(230),40,16,19,21,25,31)<<2)*(100+((blvl(235)+blvl(250))*15))/100,0)/10.24,0))+' per second<br>'
+'<span class="num">11: </span>'+cc(['Cold Length: ',dec(dec(ln(lvl(230),100,15),0)/25,1),' seconds<br>'])
+'<span class="num">19: </span>'+'Range: '+dec(dec(ln(lvl(230),35,2)/4,0)*2/3,1)+' yards<br>'
+'<span class="num">3: </span>'+'Mana Cost: '+dec(dec(max(ln(lvl(230),24,1)<<2,0)/20.48,0),0)+' per second<br>'
},
function(){return ''+'<span class="num">5: </span>'+'Minimum Mana Required to Cast: '+dec(4,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Arctic Blast Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Hurricane: +15% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Cyclone Armor: +15% Cold Damage per Level<br>'
},2,3]
desc[231]=['Carrion Vine',
'summon a vine that eats corpses<br>and replenishes your life',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(80*(100+((lvl(231)-1)*25))/100+(0),0)+-+dec(110*(100+((lvl(231)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">3: </span>'+'Heals: '+dec(dm(lvl(231),3,12),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(231),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[232]=['Feral Rage',
'when in werewolf form,<br>go into a frenzied rage to steal<br>increasing amounts of life from your enemies<br>with successive hits',
function(){return ''+'<span class="num">52: </span>'+'Walk/Run Speed: +'+dec(19,0)+'-'+dec(((110*(3+lvl(232)/2))*(70-10))/(100*((3+lvl(232)/2)+6))+10,0)+' percent<br>'
+'<span class="num">52: </span>'+'Life Steal: +'+dec(4,0)+'-'+dec(4*lvl(232)+8,0)+' percent<br>'
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(232),50,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(232),20,10),0)),' percent<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(232),3,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((500)/25,1),' seconds<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[233]=['Maul',
'when in werebear form,<br>maul your enemies<br>for increasing extra damage<br>with successive hits',
function(){return ''+'<span class="num">12: </span>'+cc(['Stun Length: ',dec((dm(lvl(233),10,100))/25,1),' seconds<br>'])
+'<span class="num">52: </span>'+'Damage: +'+dec(20,0)+'-'+dec(20*(lvl(233)/2+3),0)+' percent<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(233),20,10),0)),' percent<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(233),3,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((500)/25,1),' seconds<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[234]=['Fissure',
'open volcanic vents below your enemies,<br>burning them to a crisp',
function(){return ''+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(234),15,6,12,16,18,22)<<8)*(100+((blvl(225)+blvl(244))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(234),25,6,12,16,19,23)<<8)*(100+((blvl(225)+blvl(244))*12))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['Duration: ',dec((ln(lvl(234),80,0))/25,1),' seconds<br>'])
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(234),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fissure Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Firestorm: +12% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Volcano: +12% Fire Damage per Level<br>'
},3,1]
desc[235]=['Cyclone Armor',
'shield yourself from damage caused by<br>fire, cold, and lightning',
function(){return ''+'<span class="num">3: </span>'+'Absorbs '+dec((ln(lvl(235),40,12)*(100+(blvl(240)+blvl(245)+blvl(250))*7)/100),0)+' damage<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(235),5,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Cyclone Armor Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Twister: +7% Damage per Level<br>'
+'<span class="num">63: </span>'+'Tornado: +7% Damage per Level<br>'
+'<span class="num">63: </span>'+'Hurricane: +7% Damage per Level<br>'
},3,3]
desc[236]=['Heart of Wolverine',
'summon a spirit pet that adds<br>to the damage and attack rating<br>of you and your party',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(128*(100+((lvl(236)-1)*25))/100+(0),0)+-+dec(144*(100+((lvl(236)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(236),20,7),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(236),25,7),0)),' percent<br>',])
+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(236),30,2),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(236),20,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[237]=['Summon Dire Wolf',
'summon a wolf that becomes enraged,<br>eating corpses to increase damage<br>it does to enemies',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(98*(100+(ln(lvl(237),50,25)))/100+(0),0)+-+dec(130*(100+(ln(lvl(237),50,25)))/100+(0),0)+'<br>'
+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(237),7,2,3,6,8,11)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(237),12,2,3,6,9,13)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">5: </span>'+'Wolves: '+dec(min(lvl(237),3),0)+'<br>'
+'<span class="num">2: </span>'+cc(['Life: ',sign(dec(ln(lvl(237),50,25),0)),' percent<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(237),20,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(227),50,25),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Defense: ',sign(dec(ln(lvl(227),50,10),0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Summon Dire Wolf Receives Bonuses From:<br>'
+'</span>'+'<span class="num">25: </span>'+'Summon Spirit Wolf<br>'
+'<span class="num">25: </span>'+'Summon Grizzly<br>'
},4,2]
desc[238]=['Rabies',
'when in werewolf form,<br>bite your enemies<br>to inflict them with disease<br>that spreads to other monsters',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(238),50,7),0)),' percent<br>',])
+'<span class="num">14: </span>'+'Poison Damage: '+(dec((dec((ln(lvl(238),6,4,5,7,11,16)<<3)*(100+((blvl(222))*18))/100,0))*(dec(ln(lvl(238),100,10),0))/256,0))+'-'+(dec((dec((ln(lvl(238),14,4,5,7,11,16)<<3)*(100+((blvl(222))*18))/100,0))*(dec(ln(lvl(238),100,10),0))/256,0))+'<br>over '+dec(dec(ln(lvl(238),100,10),0)/25,1)+' seconds<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(238),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Rabies Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Poison Creeper: +18% Poison Damage per Level<br>'
},4,1]
desc[239]=['Fire Claws',
'when in werewolf or werebear<br>form, maul your enemies<br>with a fiery claw attack',
function(){return ''+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(239),15,8,12,20,24,30)<<8)*(100+((blvl(225)+blvl(229)+blvl(244)+blvl(234))*22))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(239),20,8,12,22,26,34)<<8)*(100+((blvl(225)+blvl(229)+blvl(244)+blvl(234))*22))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(239),50,15),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(239),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fire Claws Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Firestorm: +22% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Molten Boulder: +22% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Fissure: +22% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Volcano: +22% Fire Damage per Level<br>'
},4,2]
desc[240]=['Twister',
'release several small whirlwinds that<br>cut a path through your enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(240),12,4,7,10,13,16)<<7)*(100+(blvl(245)+blvl(250))*10)/25600,0)+'-'+dec((ln(lvl(240),16,4,7,11,14,17)<<7)*(100+(blvl(245)+blvl(250))*10)/25600,0)+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['Stun Length: ',dec((10)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(240),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Twister Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Tornado: +10% Damage per Level<br>'
+'<span class="num">63: </span>'+'Hurricane: +10% Damage per Level<br>'
},4,2]
desc[241]=['Solar Creeper',
'summon a vine that eats corpses<br>and replenishes your mana',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(138*(100+((lvl(241)-1)*20))/100+(0),0)+-+dec(192*(100+((lvl(241)-1)*20))/100+(0),0)+'<br>'
+'<span class="num">3: </span>'+'Mana Recovery Rate: '+dec(dm(lvl(241),1,8),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(241),14,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[242]=['Hunger',
'when in werewolf or werebear<br>form, bite your enemies<br>to gain life and mana',
function(){return ''+'<span class="num">3: </span>'+'Life Steal: '+dec(dm(lvl(242),50,200),0)+' percent<br>'
+'<span class="num">3: </span>'+'Mana Steal: '+dec(dm(lvl(242),50,200),0)+' percent<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(242),50,10),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(242),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'Damage: '+dec(-75,0)+' percent<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[243]=['Shock Wave',
'when in werebear form,<br>stomp to create a shock wave<br>that stuns nearby enemies',
function(){return ''+'<span class="num">12: </span>'+cc(['Stun Length: ',dec((ln(lvl(243),40,15))/25,1),' seconds<br>'])
+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(243),10,3,5,7)<<8)/256,0)+'-'+dec((ln(lvl(243),20,3,5,7)<<8)/256,0)+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(243),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[244]=['Volcano',
'summon forth a volcano to rain death<br>and destruction over your enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(244),8,2,4,6,8,10)<<8)*(100+blvl(229)*12)/25600,0)+'-'+dec((ln(lvl(244),10,2,4,6,8,10)<<8)*(100+blvl(229)*12)/25600,0)+'<br>'
+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(244),8,2,4,6,8,11)<<8)*(100+((blvl(234)+blvl(249))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(244),10,2,4,6,8,13)<<8)*(100+((blvl(234)+blvl(249))*12))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(244),25,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Volcano Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Molten Boulder: +12% Damage per Level<br>'
+'<span class="num">63: </span>'+'Fissure: +12% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Armageddon: +12% Fire Damage per Level<br>'
},5,1]
desc[245]=['Tornado',
'create a funnel of wind and debris<br>to blast your enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(245),25,8,14,20,24,28)<<8)*(100+(blvl(235)+blvl(240)+blvl(250))*9)/25600,0)+'-'+dec((ln(lvl(245),35,8,15,21,25,29)<<8)*(100+(blvl(235)+blvl(240)+blvl(250))*9)/25600,0)+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(245),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Tornado Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Cyclone Armor: +9% Damage per Level<br>'
+'<span class="num">63: </span>'+'Twister: +9% Damage per Level<br>'
+'<span class="num">63: </span>'+'Hurricane: +9% Damage per Level<br>'
},5,2]
desc[246]=['Spirit of Barbs',
'summon spirit pet that reflects damage<br>taken by you and your party<br>back at your enemies',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(200*(100+((lvl(246)-1)*25))/100+(0),0)+-+dec(226*(100+((lvl(246)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(246),50,20),0)+' percent damage returned<br>'
+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(246),30,2),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(246),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[247]=['Summon Grizzly',
'summon a ferocious grizzly bear',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(247),30,10,15,20,26,30)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(247),60,10,15,20,26,30)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(247),25,10),0)),' percent<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(247),40,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">13: </span>'+'Life: '+dec(550*(100+(ln(lvl(237),50,25)))/100+(0),0)+-+dec(750*(100+(ln(lvl(237),50,25)))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(227),50,25),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Defense: ',sign(dec(ln(lvl(227),50,10),0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Summon Grizzly Receives Bonuses From:<br>'
+'</span>'+'<span class="num">25: </span>'+'Summon Spirit Wolf<br>'
+'<span class="num">25: </span>'+'Summon Dire Wolf<br>'
},6,2]
desc[248]=['Fury',
'when in werewolf form, attack<br>either multiple adjacent targets<br>or one target multiple times',
function(){return ''+'<span class="num">7: </span>'+dec(min((2+lvl(248)-1),5),0)+' hits<br>'
+'<span class="num">2: </span>'+cc(['Attack Bonus: ',sign(dec(ln(lvl(248),50,7),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(248),100,17),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(248),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[249]=['Armageddon',
'create a meteor shower to rain fiery<br>destruction on nearby enemies',
function(){return ''+'<span class="num">22: </span>'+'Average Fire Damage: '+dec(dec((ln(lvl(249),10,6,7,8,9,10)<<2)*(100+((blvl(225)+blvl(229)+blvl(244))*7))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(249),14,6,7,8,9,10)<<2)*(100+((blvl(225)+blvl(229)+blvl(244))*7))/100,0)*25/256,0)*3+' per second<br>'
+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(249),25,15,20,25,31,38)<<8)*(100+((blvl(225)+blvl(229)+blvl(244))*14))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(249),75,16,22,27,34,40)<<8)*(100+((blvl(225)+blvl(229)+blvl(244))*14))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(249),250,0)+blvl(234)*50)/25,1),' seconds<br>'])
+'<span class="num">19: </span>'+'Radius: '+dec(8*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(249),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Armageddon Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Fissure: +'+dec(2,0)+' Seconds per Level<br>'
+'<span class="num">63: </span>'+'Firestorm: +14% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Molten Boulder: +14% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Volcano: +14% Fire Damage per Level<br>'
},6,1]
desc[250]=['Hurricane',
'create a massive storm of wind and<br>debris to pound your enemies to bits',
function(){return ''+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(250),25,7,10,12,14,16)<<8)*(100+((blvl(240)+blvl(245))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(250),50,7,10,12,14,16)<<8)*(100+((blvl(240)+blvl(245))*9))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(250),250,0)+blvl(235)*50)/25,1),' seconds<br>'])
+'<span class="num">19: </span>'+'Radius: '+dec(9*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(250),30,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Hurricane Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Cyclone Armor: +'+dec(2,0)+' Seconds per Level<br>'
+'<span class="num">63: </span>'+'Twister: +9% Damage per Level<br>'
+'<span class="num">63: </span>'+'Tornado: +9% Damage per Level<br>'
},6,2]

tabs[1]=[96,97,101,106,107,111,112,116,117,121]
tabs[2]=[98,102,103,108,113,114,118,119,122,123]
tabs[3]=[99,100,104,105,109,110,115,120,124,125]
tabs[1].name=['Combat','Skills','']
tabs[2].name=['Offensive','Auras','']
tabs[3].name=['Defensive','Auras','']
tabs.close=[1,2,1]
desc=[]
desc[96]=['Sacrifice',
'increased accuracy and damage<br>at the cost of life',
function(){return ''+'<span class="num">2: </span>'+cc(['To Attack Rating: ',sign(dec(ln(lvl(96),20,7),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(96),180,15)+blvl(124)*15+blvl(122)*5,0)),' percent<br>',])
},
function(){return ''+'<span class="num">68: </span>'+(8)+' percent damage to Self<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Sacrifice Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Redemption: +15% Damage per Level<br>'
+'<span class="num">63: </span>'+'Fanaticism: +5% Damage per Level<br>'
},1,1]
desc[97]=['Smite',
'temporarily stun your enemy<br>by bashing it with your shield',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((lvl(97)*15),0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Stun Length: ',dec((min(250,ln(lvl(97),15,5)))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(97),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[98]=['Might',
'when active, aura increases the damage<br>done by you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(98),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(98),40,10),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[99]=['Prayer',
'when active, aura slowly regenerates<br>the life of you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(99),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">4: </span>'+cc(['Heals: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(99),16,3)<<4,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[100]=['Resist Fire',
'when active, aura decreases fire damage<br>done to you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(100),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Resist Fire: ',sign(dec(dm(lvl(100),35,150),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[101]=['Holy Bolt',
'a bolt of divine energy<br>that damages undead enemies<br>or heals allies',
function(){return ''+'<span class="num">10: </span>'+'Magic Damage: '+(dec(dec((ln(lvl(101),8,8,10,13,16,20)<<8)*(100+((blvl(112)+blvl(121))*50))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(101),16,8,11,15,18,23)<<8)*(100+((blvl(112)+blvl(121))*50))/100,0)/256,0))+'<br>'
+'<span class="num">47: </span>'+'Heals: '+dec(ln(lvl(101),1,2)*(100+blvl(99)*15)/100,0)+'-'+dec(ln(lvl(101),6,4)*(100+blvl(99)*15)/100,0)+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(101),32,1)<<4,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Holy Bolt Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Blessed Hammer: +50% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Fist of the Heavens: +50% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Prayer: +15% Life Healed per Level<br>'
},2,2]
desc[102]=['Holy Fire',
'when active, aura damages nearby enemies<br>with heavenly flames',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(102),6,1),0)*2/3,1)+' yards<br>'
+'<span class="num">38: </span>'+'Fire Damage: '+dec(dec((ln(lvl(102),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)*6/256,0)+'-'+dec(dec((ln(lvl(102),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)*6/256,0)+' to your attack<br>'
+'<span class="num">43: </span>'+'Fire Damage: '+dec(dec((ln(lvl(102),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,1)+'-'+dec(dec((ln(lvl(102),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,1)+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Holy Fire Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Resist Fire: +18% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Salvation: +6% Fire Damage per Level<br>'
},2,2]
desc[103]=['Thorns',
'when active, aura reflects damage done to you<br>back at your attacker',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(103),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(103),250,40),0)+' percent damage returned<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[104]=['Defiance',
'when active, aura increases the defense rating<br>of you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(104),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Defense Bonus: ',sign(dec(ln(lvl(104),70,10),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[105]=['Resist Cold',
'when active, aura decreases cold damage<br>done to you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(105),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Resist Cold: ',sign(dec(dm(lvl(105),35,150),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[106]=['Zeal',
'allows you to attack multiple adjacent enemies<br>with a single attack',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack Bonus: ',sign(dec((lvl(106)*10),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(((lvl(106)<5)?0:((lvl(106)-4)*6))+blvl(96)*12,0)),' percent<br>',])
+'<span class="num">7: </span>'+dec(min((2+lvl(106)-1),5),0)+' hits<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(106),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Zeal Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Sacrifice: +12% Damage per Level<br>'
},3,1]
desc[107]=['Charge',
'charge into battle and attack an enemy',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(107),100,25)+(blvl(115)+blvl(98))*20,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(107),50,15),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(107),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Charge Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Vigor: +20% Damage per Level<br>'
+'<span class="num">63: </span>'+'Might: +20% Damage per Level<br>'
},3,3]
desc[108]=['Blessed Aim',
'when active, aura increases the attack rating<br>for you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(108),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(108),75,15),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[109]=['Cleansing',
'when active, aura reduces the length<br>of time you and your party<br>will remain poisoned or cursed',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(109),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">3: </span>'+'Duration reduced by '+dec(dm(lvl(109),30,90),0)+' percent<br>'
+'<span class="num">4: </span>'+cc(['Heals: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
},
function(){return ''+'<span class="num">67: </span>'+'Prayer: +'+dec(dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),0)+' Life Healed Every 2 Seconds<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Cleansing Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Prayer<br>'
},3,1]
desc[110]=['Resist Lightning',
'when active, aura decreases lightning damage<br>done to you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(110),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Resist Lightning: ',sign(dec(dm(lvl(110),35,150),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[111]=['Vengeance',
'fire, lightning and cold damage are added<br>to each successful attack',
function(){return ''+'<span class="num">11: </span>'+cc(['Cold Length: ',dec(dec(ln(lvl(111),30,15),0)/25,1),' seconds<br>'])
+'<span class="num">2: </span>'+cc(['Fire Damage: ',sign(dec(ln(lvl(111),70,6)+blvl(100)*10+blvl(125)*2,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Cold Damage: ',sign(dec(ln(lvl(111),70,6)+blvl(105)*10+blvl(125)*2,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Lightning Damage: ',sign(dec(ln(lvl(111),70,6)+blvl(110)*10+blvl(125)*2,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(111),20,10),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(111),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Vengeance Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Resist Fire: +10% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Resist Cold: +10% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Resist Lightning: +10% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Salvation: +2% Elemental Damage per Level<br>'
},4,1]
desc[112]=['Blessed Hammer',
'summons an ethereal hammer that<br>spirals outwards damaging enemies it hits<br>150 Percent Damage to Undead',
function(){return ''+'<span class="num">48: </span>'+'Magic Damage: '+(dec(dec((ln(lvl(112),12,8,10,12,13,14)<<8)*(100+((blvl(115)+blvl(108))*14))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(112),16,8,10,12,13,14)<<8)*(100+((blvl(115)+blvl(108))*14))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(112),20,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Blessed Hammer Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Blessed Aim: +14% Magic Damage per Level<br>'
+'<span class="num">63: </span>'+'Vigor: +14% Magic Damage per Level<br>'
},4,2]
desc[113]=['Concentration',
'when active, aura increases the damage and decreases the chance<br>that the attack will be interrupted for you and your party ',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(113),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">3: </span>'+'Chance uninterruptable '+dec(20,0)+' percent<br>'
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(113),60,15),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[114]=['Holy Freeze',
'when active, aura freezes nearby monsters',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(114),6,1),0)*2/3,1)+' yards<br>'
+'<span class="num">38: </span>'+'Cold Damage: '+dec(dec((ln(lvl(114),2,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)*5/256,0)+'-'+dec(dec((ln(lvl(114),3,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)*5/256,0)+' to your attack<br>'
+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(114),2,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(114),3,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)/256,0))+'<br>'
+'<span class="num">3: </span>'+'Enemies slowed '+dec(dm(lvl(114),25,60),0)+' percent<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Holy Freeze Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Resist Cold: +15% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Salvation: +7% Cold Damage per Level<br>'
},4,2]
desc[115]=['Vigor',
'when active, aura increases stamina recovery rate, maximum stamina<br>and movement speed for you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(115),16,3),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Velocity: ',sign(dec(dm(lvl(115),7,50),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Stamina Bonus: ',sign(dec(ln(lvl(115),50,25),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Stamina Recovery Rate: ',sign(dec(ln(lvl(115),50,25),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[116]=['Conversion',
'converts monsters to fight against<br>other foul demons and beasts',
function(){return ''+'<span class="num">3: </span>'+'Chance to convert: '+dec(dm(lvl(116),0,50),0)+' percent<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(116),400,0))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(116),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[117]=['Holy Shield',
'enhances your shield with divine power',
function(){return ''+'<span class="num">49: </span>'+'Smite Damage: +'+(dec((ln(lvl(117),3,2,3,4)<<8)*(100+(0))/25600,0))+'-'+(dec((ln(lvl(117),6,2,3,4)<<8)*(100+(0))/25600,0))+'<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(117),750,625))/25,1),' seconds<br>'])
+'<span class="num">2: </span>'+cc(['Defense Bonus: ',sign(dec(ln(lvl(117),25,15)+blvl(104)*15,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Successful Blocking: ',sign(dec(dm(lvl(117),10,40),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(117),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Holy Shield Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Defiance: +15% Defense per Level<br>'
},5,3]
desc[118]=['Holy Shock',
'when active, aura causes pulses of electricity<br>to damage nearby enemies<br>adds lightning damage to your attack',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(118),6,1),0)*2/3,1)+' yards<br>'
+'<span class="num">38: </span>'+'Lightning Damage: '+dec(1,0)+'-'+dec(dec((ln(lvl(118),10,6,8,10,12,15)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)*6/256,0)+' to your attack<br>'
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(118),1,0)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(118),10,6,8,10,12,15)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)/256,0))+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Holy Shock Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Resist Lightning: +12% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Salvation: +4% Lightning Damage per Level<br>'
},5,2]
desc[119]=['Sanctuary',
'when active, aura damages the undead<br>and knocks them back',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(119),5,1),0)*2/3,1)+' yards<br>'
+'<span class="num">67: </span>'+'Damage to Undead: +'+dec(ln(lvl(119),150,30),0)+'  percent<br>'
+'<span class="num">10: </span>'+'Magic Damage: '+(dec(dec((ln(lvl(119),8,4,4,5,5,6)<<8)*(100+(blvl(109)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(119),16,4,5,6,6,7)<<8)*(100+(blvl(109)*7))/100,0)/256,0))+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Sanctuary Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Cleansing: +7% Magic Damage per Level<br>'
},5,3]
desc[120]=['Meditation',
'when active, aura increases mana recovery<br>for you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(120),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Mana Recovery Rate: ',sign(dec(ln(lvl(120),300,25),0)),' percent<br>',])
+'<span class="num">4: </span>'+cc(['Heals: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
},
function(){return ''+'<span class="num">67: </span>'+'Prayer: +'+dec(dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),0)+' Life Healed Every 2 Seconds<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Meditation Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Prayer<br>'
},5,1]
desc[121]=['Fist of the Heavens',
'lightning strikes your target as holy bolts<br>seek out nearby enemies',
function(){return ''+'<span class="num">50: </span>'+'Holy Bolt Damage: '+(dec(dec((ln(lvl(121),40,6,10,16,32,48)<<8)*(100+(blvl(101)*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(121),50,6,10,16,32,48)<<8)*(100+(blvl(101)*15))/100,0)/256,0))+'<br>'
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(121),150,15,30,45,55,65)<<8)*(100+(blvl(118)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(121),200,15,30,45,55,65)<<8)*(100+(blvl(118)*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(121),25,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fist of the Heavens Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Holy Bolt: +15% Holy Bolt Damage per Level<br>'
+'<span class="num">63: </span>'+'Holy Shock: +7% Lightning Damage per Level<br>'
},6,2]
desc[122]=['Fanaticism',
'when active, aura increases damage, attack speed,<br>and attack rating for you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(122),11,1),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Party Damage: ',sign(dec(ln(lvl(122),50,17)/2,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Your Damage: ',sign(dec(ln(lvl(122),50,17),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack Speed: ',sign(dec(dm(lvl(122),10,40),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(122),40,5),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[123]=['Conviction',
'when active, aura reduces the defenses<br>and resistances of nearby enemies',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(123),20,0),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Defense: ',sign(dec(-dm(lvl(123),40,100),0)),' percent<br>',])
+'<span class="num">3: </span>'+'Resistances: '+dec(-min(ln(lvl(123),30,5),150),0)+' percent<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[124]=['Redemption',
'when active, aura attempts to redeem<br>the souls of slain enemies to give<br>you life and mana',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(124),16,0),0)*2/3,1)+' yards<br>'
+'<span class="num">3: </span>'+'Chance to redeem soul: '+dec(dm(lvl(124),10,100),0)+' percent<br>'
+'<span class="num">3: </span>'+'Life/Mana Recovered: '+dec(ln(lvl(124),25,5),0)+' points<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[125]=['Salvation',
'when active, aura decreases fire, cold and lightning damage<br>done to you and your party',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(125),16,2),0)*2/3,1)+' yards<br>'
+'<span class="num">2: </span>'+cc(['Resist All: ',sign(dec(dm(lvl(125),50,120),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]

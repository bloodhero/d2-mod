tabs[1]=[36,37,41,46,47,51,52,56,61,62]
tabs[2]=[38,42,43,48,49,53,54,57,58,63]
tabs[3]=[39,40,44,45,50,55,59,60,64,65]
tabs[1].name=['Fire','Spells','']
tabs[2].name=['Lightning','Spells','']
tabs[3].name=['Cold','Spells','']
tabs.close=[1,1,3]
desc=[]
desc[36]=['Fire Bolt',
'creates a magical flaming missile',
function(){return ''+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec(dec((ln(lvl(36),6,3,4,8,18,54)<<7)*(100+((blvl(47)+blvl(56))*16))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(36),12,3,6,10,20,56)<<7)*(100+((blvl(47)+blvl(56))*16))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(36),5,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fire Bolt Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Fire Ball: +16% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Meteor: +16% Fire Damage per Level<br>'
},1,2]
desc[37]=['Warmth',
'passive - increases the rate at which you recover mana',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(37),30,12),0)+' percent<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[38]=['Charged Bolt',
'creates multiple, randomly directed<br>bolts of electrical energy',
function(){return ''+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec(dec((ln(lvl(38),4,1,1,2,3,4)<<7)*(100+((blvl(49))*6))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(38),8,1,1,2,3,4)<<7)*(100+((blvl(49))*6))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">7: </span>'+dec(min(24,ln(lvl(38),3,1)),0)+' bolts<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(38),24,4)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Charged Bolt Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Lightning: +6% Lightning Damage per Level<br>'
},1,2]
desc[39]=['Ice Bolt',
'creates a magical bolt of ice<br>that damages and slows your enemies',
function(){return ''+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(39),6,2,4,6,8,10)<<7)*(100+((blvl(44)+blvl(45)+blvl(55)+blvl(59)+blvl(64))*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(39),10,3,5,7,9,11)<<7)*(100+((blvl(44)+blvl(45)+blvl(55)+blvl(59)+blvl(64))*15))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['Cold Length: ',dec(dec(ln(lvl(39),150,35),0)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(39),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Ice Bolt Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Frost Nova: +15% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Ice Blast: +15% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Glacial Spike: +15% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Blizzard: +15% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Frozen Orb: +15% Cold Damage per Level<br>'
},1,2]
desc[40]=['Frozen Armor',
'increases your defense rating<br>and freezes enemies that hit you',
function(){return ''+'<span class="num">3: </span>'+'Defense Bonus: '+dec(ln(lvl(40),30,5),0)+' percent<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(40),3000,300)+(blvl(50)+blvl(60))*250)/25,1),' seconds<br>'])
+'<span class="num">12: </span>'+cc(['Freezes for ',dec((ln(lvl(40),30,3)*(100+((blvl(50)+blvl(60))*5))/100)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(40),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Frozen Armor Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Shiver Armor: +'+dec((250+12)/25,0)+' Seconds per Level<br>'
+'<span class="num">63: </span>'+'Shiver Armor: +5% Freeze Length per Level<br>'
+'<span class="num">67: </span>'+'Chilling Armor: +'+dec((250+12)/25,0)+' Seconds per Level<br>'
+'<span class="num">63: </span>'+'Chilling Armor: +5% Freeze Length per Level<br>'
},1,3]
desc[41]=['Inferno',
'creates a continuous jet of flame<br>to scorch your enemies',
function(){return ''+'<span class="num">26: </span>'+'Average Fire Damage: '+(dec(dec(dec((ln(lvl(41),32,24,26,28,32,36)<<2)*(100+((blvl(37))*13))/100,0)*(100+ln(lvl(61),30,7))/100,0)/10.24,0))+'-'+(dec(dec(dec((ln(lvl(41),64,24,27,29,33,37)<<2)*(100+((blvl(37))*13))/100,0)*(100+ln(lvl(61),30,7))/100,0)/10.24,0))+' per second<br>'
+'<span class="num">19: </span>'+'Range: '+dec(dec(ln(lvl(41),20,3)/4,0)*2/3,1)+' yards<br>'
+'<span class="num">3: </span>'+'Mana Cost: '+dec(dec(max(ln(lvl(41),36,1)<<2,0)/20.48,0),0)+' per second<br>'
},
function(){return ''+'<span class="num">5: </span>'+'Minimum Mana Required to Cast: '+dec(6,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Inferno Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Warmth: +13% Fire Damage per Level<br>'
},2,1]
desc[42]=['Static Field',
'creates an electrical field that reduces life<br>of all nearby enemies',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(42),5,1),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(42),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'Weakens Enemies by '+dec(25,0)+' percent<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[43]=['Telekinesis',
'uses the power of your mind to<br>pick up items, use objects,<br>and knock back enemies',
function(){return ''+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec(dec((lvl(43)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(43),2,1)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(43),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[44]=['Frost Nova',
'creates an expanding ring of ice that damages<br>and slows all nearby enemies',
function(){return ''+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(44),4,4,6,8,10,12)<<7)*(100+((blvl(59)+blvl(64))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(44),8,5,7,9,11,13)<<7)*(100+((blvl(59)+blvl(64))*10))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['Cold Length: ',dec(dec(ln(lvl(44),200,25),0)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(44),9,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Frost Nova Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Blizzard: +10% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Frozen Orb: +10% Cold Damage per Level<br>'
},2,1]
desc[45]=['Ice Blast',
'creates a magical sphere of ice that<br>damages and freezes your enemy',
function(){return ''+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(45),16,14,28,42,56,70)<<7)*(100+((blvl(39)+blvl(59)+blvl(64))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(45),24,15,29,43,57,71)<<7)*(100+((blvl(39)+blvl(59)+blvl(64))*8))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['Freezes for ',dec((dec(ln(lvl(45),75,5)*(100+((blvl(55))*10))/100,0))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(45),12,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Ice Blast Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Ice Bolt: +8% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Glacial Spike: +10% Freeze Length per Level<br>'
+'<span class="num">63: </span>'+'Blizzard: +8% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Frozen Orb: +8% Cold Damage per Level<br>'
},2,2]
desc[46]=['Blaze',
'creates a wall of fire<br>in your wake to scorch your enemies',
function(){return ''+'<span class="num">23: </span>'+cc(['Fire Duration: ',dec((ln(lvl(46),90,25))/25,1),' seconds<br>'])
+'<span class="num">27: </span>'+'Average Fire Damage: '+(dec(dec(dec((ln(lvl(46),4,2,3,4,6,9)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+'-'+(dec(dec(dec((ln(lvl(46),8,2,3,4,6,9)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+' per second<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(46),22,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[47]=['Fire Ball',
'creates an explosive sphere of fiery death<br>to engulf your enemies',
function(){return ''+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec(dec((ln(lvl(47),12,13,23,28,33,38)<<7)*(100+((blvl(36)+blvl(56))*14))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(47),28,15,25,30,35,40)<<7)*(100+((blvl(36)+blvl(56))*14))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(47),10,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">28: </span>'+'Radius: 1 yard<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fire Ball Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Fire Bolt: +14% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Meteor: +14% Fire Damage per Level<br>'
},3,2]
desc[48]=['Nova',
'creates an expanding ring of lightning<br>to shock nearby enemies',
function(){return ''+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec(dec((ln(lvl(48),1,6,7,8,9,10)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(48),20,8,9,10,11,12)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(48),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[49]=['Lightning',
'creates a powerful lightning bolt<br>to lay waste to your enemies',
function(){return ''+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec(dec((ln(lvl(49),1,0)<<8)*(100+((blvl(38)+blvl(53)+blvl(48))*8))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(49),40,8,12,20,28,36)<<8)*(100+((blvl(38)+blvl(53)+blvl(48))*8))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(49),16,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Lightning Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Charged Bolt: +8% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Nova: +8% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Chain Lightning: +8% Lightning Damage per Level<br>'
},3,2]
desc[50]=['Shiver Armor',
'increases your defense rating<br>freezes and damages enemies that hit you',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(50),3000,300)+(blvl(40)+blvl(60))*250)/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Defense Bonus: '+dec(ln(lvl(50),45,6),0)+' percent<br>'
+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(50),12,4,6,8,10,12)<<7)*(100+((blvl(40)+blvl(60))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(50),16,5,7,9,11,13)<<7)*(100+((blvl(40)+blvl(60))*9))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['Cold Length: ',dec(dec(ln(lvl(50),100,0,25,50),0)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(50),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Shiver Armor Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Frozen Armor: +'+dec((250+12)/25,0)+' Seconds per Level<br>'
+'<span class="num">63: </span>'+'Frozen Armor: +9% Cold Damage per Level<br>'
+'<span class="num">67: </span>'+'Chilling Armor: +'+dec((250+12)/25,0)+' Seconds per Level<br>'
+'<span class="num">63: </span>'+'Chilling Armor: +9% Cold Damage per Level<br>'
},3,3]
desc[51]=['Fire Wall',
'creates a wall of flame that<br>blocks or burns your enemies',
function(){return ''+'<span class="num">30: </span>'+cc(['Fire Duration: ',dec(ln(lvl(51),90,0)/25,1),' seconds<br>'])
+'<span class="num">27: </span>'+'Average Fire Damage: '+(dec(dec(dec((ln(lvl(51),15,9,14,21)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+'-'+(dec(dec(dec((ln(lvl(51),20,9,14,21)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+' per second<br>'
+'<span class="num">29: </span>'+cc([dec(dec(ln(lvl(51),7,2),0)*2/3,1),' yards<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(51),22,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[52]=['Enchant',
'enchants equipped weapon of targeted character or minion<br>adds fire damage to melee weapons<br>adds one-third fire damage to ranged weapons',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(52),3600,600))/25,1),' seconds<br>'])
+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec(dec((ln(lvl(52),16,3,7,11,15,19)<<7)*(100+((blvl(37))*9))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(52),20,5,9,13,17,21)<<7)*(100+((blvl(37))*9))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['Attack Bonus: ',sign(dec(ln(lvl(52),20,9),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(52),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Enchant Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Warmth: +9% Fire Damage per Level<br>'
},4,3]
desc[53]=['Chain Lightning',
'creates a bolt of lightning that<br>arcs through several targets',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(53),26,1)/5,0)+' hits<br>'
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec(dec((ln(lvl(53),1,0)<<8)*(100+((blvl(38)+blvl(49)+blvl(48))*4))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(53),40,11,13,15)<<8)*(100+((blvl(38)+blvl(49)+blvl(48))*4))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(53),9,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Chain Lightning Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Charged Bolt: +4% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Nova: +4% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning: +4% Lightning Damage per Level<br>'
},4,2]
desc[54]=['Teleport',
'instantly moves to a destination within your line of sight',
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(54),24,-1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[55]=['Glacial Spike',
'creates a magical ice comet<br>that freezes or kills nearby enemies',
function(){return ''+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(55),32,14,26,28,30,32)<<7)*(100+((blvl(39)+blvl(45)+blvl(64))*5))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(55),48,15,27,29,31,33)<<7)*(100+((blvl(39)+blvl(45)+blvl(64))*5))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['Freezes for ',dec((ln(lvl(55),50,3)*(100+blvl(59)*3)/100)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(55),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(55),4,0),0)*2/3,1)+' yards<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Glacial Spike Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Ice Bolt: +5% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Ice Blast: +5% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Blizzard: +3% Freeze Length per Level<br>'
+'<span class="num">63: </span>'+'Frozen Orb: +5% Cold Damage per Level<br>'
},4,2]
desc[56]=['Meteor',
'summons a meteor from the heavens<br>to crush and incinerate your enemies',
function(){return ''+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec(dec((ln(lvl(56),80,23,39,79,81,83)<<8)*(100+((blvl(36)+blvl(47))*5))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(56),100,25,41,81,83,85)<<8)*(100+((blvl(36)+blvl(47))*5))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(56),6,0),0)*2/3,1)+' yards<br>'
+'<span class="num">22: </span>'+'Average Fire Damage: '+dec(dec(dec((ln(lvl(56),15,4,5,6)<<3)*(100+(blvl(41)*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0)+'-'+dec(dec(dec((ln(lvl(56),25,4,5,6)<<3)*(100+(blvl(41)*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)*25/256,0)*3+' per second<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(56),34,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Meteor Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Fire Bolt: +5% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Fire Ball: +5% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Inferno: +3% Average Fire Damage per Second per Level<br>'
},5,2]
desc[57]=['Thunder Storm',
'summons a deadly thunderstorm that strikes<br>your enemies with bolts of lightning',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(57),800,200))/25,1),' seconds<br>'])
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec(dec((ln(lvl(57),1,10,10,11)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(57),100,10,10,11)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(57),19,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[58]=['Energy Shield',
'creates a magical shield that consumes mana<br>instead of health when you take damage',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(58),3600,1500))/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Absorbs '+dec(min(dec(dec((ln(lvl(58),20,5,2,1)<<8),0)/256,0),95),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(58),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Energy Shield Receives Bonuses From:<br>'
+'</span>'+'<span class="num">18: </span>'+'Telekinesis<br>'
},5,3]
desc[59]=['Blizzard',
'summons massive shards of ice to destroy your enemies',
function(){return ''+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(59),45,15,30,45,55,65)<<8)*(100+((blvl(39)+blvl(45)+blvl(55))*5))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(59),75,16,31,46,56,66)<<8)*(100+((blvl(39)+blvl(45)+blvl(55))*5))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['Duration: ',dec((ln(lvl(59),100,0))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(59),23,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Blizzard Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Ice Bolt: +5% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Ice Blast: +5% Cold Damage per Level<br>'
+'<span class="num">63: </span>'+'Glacial Spike: +5% Cold Damage per Level<br>'
},5,1]
desc[60]=['Chilling Armor',
'increases defense and discharges an ice bolt in retaliation<br>against ranged attackers',
function(){return ''+'<span class="num">3: </span>'+'Defense Bonus: '+dec(ln(lvl(60),45,5),0)+' percent<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(60),3600,150)+(blvl(40)+blvl(50))*250)/25,1),' seconds<br>'])
+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(60),8,2,4,6,8,10)<<7)*(100+((blvl(40)+blvl(50))*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(60),12,3,5,7,9,11)<<7)*(100+((blvl(40)+blvl(50))*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(60),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Chilling Armor Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Frozen Armor: +'+dec((250+12)/25,0)+' Seconds per Level<br>'
+'<span class="num">63: </span>'+'Frozen Armor: +7% Cold Damage per Level<br>'
+'<span class="num">67: </span>'+'Shiver Armor: +'+dec((250+12)/25,0)+' Seconds per Level<br>'
+'<span class="num">63: </span>'+'Shiver Armor: +7% Cold Damage per Level<br>'
},5,3]
desc[61]=['Fire Mastery',
'passive - increases all damage caused by your fire spells',
function(){return ''+'<span class="num">2: </span>'+cc(['Fire Damage: ',sign(dec(ln(lvl(61),30,7),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[62]=['Hydra',
'summons a multi-headed beast of flame<br>to reduce your enemies to ashes',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(62),250,0))/25,1),' seconds<br>'])
+'<span class="num">24: </span>'+'Hydra Fire Damage: '+(dec(dec(dec((ln(lvl(62),24,9,13,17,21,25)<<7)*(100+((blvl(36)+blvl(47))*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(62),34,11,15,19,23,27)<<7)*(100+((blvl(36)+blvl(47))*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(62),40,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Hydra Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Fire Bolt: +3% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Fire Ball: +3% Fire Damage per Level<br>'
},6,3]
desc[63]=['Lightning Mastery',
'passive - increases all damage caused by your lightning spells',
function(){return ''+'<span class="num">2: </span>'+cc(['Lightning Damage: ',sign(dec(ln(lvl(63),50,12),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[64]=['Frozen Orb',
'creates a magical globe that sprays a torrent of ice bolts<br>to lay waste to your enemies',
function(){return ''+'<span class="num">10: </span>'+'Cold Damage: '+(dec(dec((ln(lvl(64),80,20,24,28,29,30)<<7)*(100+((blvl(39))*2))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(64),90,21,25,29,30,31)<<7)*(100+((blvl(39))*2))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['Cold Length: ',dec(dec(ln(lvl(64),200,25),0)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(64),50,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Frozen Orb Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Ice Bolt: +2% Cold Damage per Level<br>'
},6,1]
desc[65]=['Cold Mastery',
'passive - increases the damage of your cold attacks<br>by piercing enemies resistances to cold',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(65),20,5),0)+' percent<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]

tabs[1]=[251,256,257,261,262,266,271,272,276,277]
tabs[2]=[252,253,258,263,264,267,268,273,278,279]
tabs[3]=[254,255,259,260,265,269,270,274,275,280]
tabs[1].name=['Traps','','']
tabs[2].name=['Shadow','Disciplines','']
tabs[3].name=['Martial','Arts','']
tabs.close=[2,3,1]
desc=[]
desc[251]=['Fire Blast',
'throw a fire bomb<br>to blast your enemies to bits',
function(){return ''+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(251),6,3,8,20,38,58)<<7)*(100+((blvl(256)+blvl(276)+blvl(261)+blvl(271)+blvl(262)+blvl(272))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(251),8,5,11,24,44,66)<<7)*(100+((blvl(256)+blvl(276)+blvl(261)+blvl(271)+blvl(262)+blvl(272))*9))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(251),24,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(5*2/3,1)+' yards<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fire Blast Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Shock Web: +9% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Charged Bolt Sentry: +9% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Wake of Fire: +9% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Sentry: +9% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Wake of Inferno: +9% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Death Sentry: +9% Fire Damage per Level<br>'
},1,2]
desc[252]=['Claw Mastery',
'passive - improves your skill<br>with claw-class weapons',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(252),35,4),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(252),30,10),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(252),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[253]=['Psychic Hammer',
'use the power of your mind<br>to create a psychic blast<br>to crush and knock back your enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(253),2,2,3,4,5,6)<<7)/256,0)+'-'+dec((ln(lvl(253),6,3,4,5,6,7)<<7)/256,0)+'<br>'
+'<span class="num">10: </span>'+'Magic Damage: '+(dec(dec((ln(lvl(253),2,2,3,4,5,6)<<7),0)/256,0))+'-'+(dec(dec((ln(lvl(253),6,3,4,5,6,7)<<7),0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(253),16,1)<<6,1<<8)/256,2),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[254]=['Tiger Strike',
'<br>Charge-up Skill<br><br>consecutive hits add damage bonuses<br>to finishing moves<br>must use a dragon finishing move or<br>normal attack to release charges',
function(){return ''+'<span class="num">2: </span>'+cc(['Charge 1 - ',sign(dec(ln(lvl(254),100,20),0)),' percent damage<br>',])
+'<span class="num">2: </span>'+cc(['Charge 2 - ',sign(dec(2*ln(lvl(254),100,20),0)),' percent damage<br>',])
+'<span class="num">2: </span>'+cc(['Charge 3 - ',sign(dec(3*ln(lvl(254),100,20),0)),' percent damage<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(254),15,7),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(254),1,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[255]=['Dragon Talon',
'<br>Finishing Move<br><br>kick your enemies out of your way<br>adds charged-up bonuses to the kick',
function(){return ''+'<span class="num">36: </span>'+dec(lvl(255)/6+1,0)+' Kicks<br>'
+'<span class="num">2: </span>'+cc(['Kick Damage: ',sign(dec(ln(lvl(255),5,7),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(255),20,25),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(255),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[256]=['Shock Web',
'throw a web of lightning<br>to shock your enemies',
function(){return ''+'<span class="num">5: </span>'+'Spikes: '+dec(6+lvl(256)/4+blvl(251)/3,0)+'<br>'
+'<span class="num">23: </span>'+cc(['Duration: ',dec((ln(lvl(256),90,0))/25,1),' seconds<br>'])
+'<span class="num">38: </span>'+'Lightning Damage: '+dec(dec(dec((ln(lvl(256),2,0)<<7)*(100+((blvl(261)+blvl(271)+blvl(276))*11))/100,0)/256,0),0)+'-'+dec(dec(dec((ln(lvl(256),20,6,12,20,30,42)<<7)*(100+((blvl(261)+blvl(271)+blvl(276))*11))/100,0)/256,0),0)+' per second<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(256),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Shock Web Receives Bonuses From:<br>'
+'</span>'+'<span class="num">71: </span>'+'Fire Blast: +1 Missile per '+(3)+' Levels<br>'
+'<span class="num">63: </span>'+'Charged Bolt Sentry: +11% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Sentry: +11% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Death Sentry: +11% Lightning Damage per Level<br>'
},2,1]
desc[257]=['Blade Sentinel',
'set a spinning blade to patrol<br>between you and target point',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(257),100,12))/25,1),' seconds<br>'])
+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(257),6,3,4,5)<<8)/256,0)+'-'+dec((ln(lvl(257),10,3,4,5)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(3)+'/'+(8)+' Weapon Damage<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(257),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[258]=['Burst of Speed',
'increases attack and movement speed<br>for a period of time',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack Speed: ',sign(dec(dm(lvl(258),15,60),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Walk/Run Speed: ',sign(dec(dm(lvl(258),15,70),0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(258),3000,300))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(258),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[259]=['Fists of Fire',
'<br>Charge-up Skill<br><br>consecutive hits add fire damage<br>to finishing moves<br>can only be used with claw-class weapons<br>must use a dragon finishing move or<br>normal attack to release charges',
function(){return ''+'<span class="num">24: </span>'+'Charge 1 - fire damage: '+(dec(dec((ln(lvl(259),6,5,10,20,30,40)<<8)*(100+((blvl(280))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(259),10,5,11,22,33,44)<<8)*(100+((blvl(280))*12))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'Charge 2 - fire damage radius: '+dec(4*2/3,1)+' yards<br>'
+'<span class="num">17: </span>'+'Charge 3 - fire damage: '+dec((dec((ln(lvl(259),6,5,10,16,22,30)<<3)*(100+((blvl(280))*6))/100,0)*50/256)/2,0)*2+'-'+dec((dec((ln(lvl(259),10,5,10,17,24,32)<<3)*(100+((blvl(280))*6))/100,0)*50/256)/2,0)*2+' per second<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(259),15,7),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(259),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Fists of Fire Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Phoenix Strike: +12% Fire Damage per Level<br>'
},2,1]
desc[260]=['Dragon Claw',
'<br>Finishing Move<br><br>slice and dice your enemies<br>with your dual claw-class weapons<br>adds charged-up bonuses to both claw attacks',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(260),50,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(260),40,25),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(260),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[261]=['Charged Bolt Sentry',
'a trap that emits charged bolts<br>at enemies that pass near',
function(){return ''+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(261),2,0)<<7)*(100+((blvl(251)+blvl(271)+blvl(276))*6))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(261),14,6,8,12,14,16)<<7)*(100+((blvl(251)+blvl(271)+blvl(276))*6))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">3: </span>'+'Shoots '+dec(5+blvl(271)/4,0)+' Times<br>'
+'<span class="num">3: </span>'+'Releases '+dec(ln(lvl(261),5,0)+blvl(256)/3,0)+' charged bolts<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(261),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Charged Bolt Sentry Receives Bonuses From:<br>'
+'</span>'+'<span class="num">71: </span>'+'Shock Web: +1 Bolt per '+(3)+' Levels<br>'
+'<span class="num">71: </span>'+'Lightning Sentry: +1 Shot per '+(4)+' Levels<br>'
+'<span class="num">63: </span>'+'Fire Blast: +6% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Lightning Sentry: +6% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Death Sentry: +6% Lightning Damage per Level<br>'
},3,1]
desc[262]=['Wake of Fire',
'a trap that emits waves of fire',
function(){return ''+'<span class="num">10: </span>'+'Fire Damage: '+(dec(dec((ln(lvl(262),5,2,3,5,7,9)<<8)*(100+((blvl(251)+blvl(272))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(262),10,2,3,6,8,10)<<8)*(100+((blvl(251)+blvl(272))*8))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(262),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'Shoots '+dec(5,0)+' Times<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Wake of Fire Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Fire Blast: +8% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Wake of Inferno: +8% Fire Damage per Level<br>'
},3,2]
desc[263]=['Weapon Block',
'passive - chance to block when<br>you are using dual claw-class weapons',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(263),20,65),0)+' percent chance<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[264]=['Cloak of Shadows',
'cast a shadow to blind nearby enemies<br>lowering their defenses for a period of time',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(264),200,25))/25,1),' seconds<br>'])
+'<span class="num">2: </span>'+cc(['Defense Bonus: ',sign(dec(ln(lvl(264),10,3),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Enemy Defense: ',sign(dec(-min(ln(lvl(264),15,3),95),0)),' percent<br>',])
},
function(){return ''+'<span class="num">19: </span>'+'Range: '+dec(dec(dm(lvl(264),30,30),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(264),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[265]=['Cobra Strike',
'<br>Charge-up Skill<br><br>consecutive hits add life and mana stealing<br>to finishing moves<br>must use a dragon finishing move or<br>normal attack to release charges',
function(){return ''+'<span class="num">2: </span>'+cc(['Charge 1 - ',sign(dec(ln(lvl(265),40,5),0)),' percent life stealing<br>',])
+'<span class="num">2: </span>'+cc(['Charge 2 - ',sign(dec(ln(lvl(265),40,5),0)),' percent life and mana stealing <br>',])
+'<span class="num">2: </span>'+cc(['Charge 3 - ',sign(dec(2*ln(lvl(265),40,5),0)),' percent life and mana stealing <br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(265),15,7),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(265),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[266]=['Blade Fury',
'throw spinning blades<br>to slice up your enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(266),8,3,5,8)<<8)/256,0)+'-'+dec((ln(lvl(266),10,3,5,8)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(3)+'/'+(4)+' Weapon Damage<br>'
+'<span class="num">61: </span>'+'Mana Cost: '+dec((max(ln(lvl(266),8,1)<<5,0))/256,1)+' per blade<br>'
},
function(){return ''+'<span class="num">5: </span>'+'Minimum Mana Required to Cast: '+dec(3,0)+'<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[267]=['Fade',
'raise all resistances and resist curses<br>for a period of time',
function(){return ''+'<span class="num">3: </span>'+'Reduces curse duration by '+dec(dm(lvl(267),40,90),0)+' percent<br>'
+'<span class="num">3: </span>'+'Resist All: '+dec(dm(lvl(267),10,75),0)+' percent<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(267),3000,300))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(267),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[268]=['Shadow Warrior',
'summon a shadow of yourself that mimics<br>your skills and fights by your side',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(376*(100+((lvl(268)-1)*15))/100+(0),0)+'<br>'
+'<span class="num">4: </span>'+cc(['Attack: +',lvl(268)*40,'<br>'])
+'<span class="num">2: </span>'+cc(['Defense Bonus: ',sign(dec((lvl(268)-1)*12,0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(268),54,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[269]=['Claws of Thunder',
'<br>Charge-up Skill<br><br>consecutive hits add lightning damage<br>to finishing moves<br>can only be used with claw-class weapons<br>must use a dragon finishing move or<br>normal attack to release charges',
function(){return ''+'<span class="num">24: </span>'+'Charge 1 - lightning damage: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),80,20,40,60,80,100)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'Charge 2 - nova damage: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),30,15,25,35,45,65)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'Charge 3 - charged bolt damage: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),40,20,40,60,80,100)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(269),15,7),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(269),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Claws of Thunder Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Phoenix Strike: +8% Lightning Damage per Level<br>'
},4,1]
desc[270]=['Dragon Tail',
'<br>Finishing Move<br><br>knock back your enemies with an explosive kick<br>adds charged-up bonuses to the kick',
function(){return ''+'<span class="num">2: </span>'+cc(['fire damage: ',sign(dec(ln(lvl(270),50,10),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(270),20,15),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(270),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(6*2/3,1)+' yards<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[271]=['Lightning Sentry',
'a trap that shoots lightning<br>to scorch passing enemies',
function(){return ''+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(271),1,0)<<8)*(100+((blvl(256)+blvl(261)+blvl(276))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(271),20,10,16,24,34,44)<<8)*(100+((blvl(256)+blvl(261)+blvl(276))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(271),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'Shoots '+dec(10,0)+' Times<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Lightning Sentry Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Shock Web: +12% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Charged Bolt Sentry: +12% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Death Sentry: +12% Lightning Damage per Level<br>'
},5,1]
desc[272]=['Wake of Inferno',
'trap that sprays fire at passing enemies',
function(){return ''+'<span class="num">59: </span>'+'Fire Damage: '+dec(dec((ln(lvl(272),20,17,21,26,32,39)<<4)*(100+((blvl(251)+blvl(276))*10+blvl(262)*7))/100,0)*25/768,0)+'-'+dec(dec((ln(lvl(272),50,19,23,28,34,41)<<4)*(100+((blvl(251)+blvl(276))*10+blvl(262)*7))/100,0)*25/768,0)+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(272),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'Shoots '+dec(10,0)+' Times<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Wake of Inferno Receives Bonuses From:<br>'
+'</span>'+'<span class="num">42: </span>'+'Wake of Fire: +'+(0)+'.'+(5)+' Yards per Level<br>'
+'<span class="num">63: </span>'+'Fire Blast: +10% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Wake of Fire: +7% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Death Sentry: +10% Fire Damage per Level<br>'
},5,2]
desc[273]=['Mind Blast',
'using the power of your mind<br>stun a group of enemies<br>and convert the feeble-minded',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(273),10,2,5,8)<<8)/256,0)+'-'+dec((ln(lvl(273),20,2,5,8)<<8)/256,0)+'<br>'
+'<span class="num">12: </span>'+cc(['Stun Length: ',dec((min(250,dec(ln(lvl(273),50,5),0)))/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Chance to convert: '+dec(dm(lvl(273),15,40),0)+' percent<br>'
},
function(){return ''+'<span class="num">16: </span>'+'Duration: '+(150)/25+'-'+(150+100)/25+' seconds<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(273),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[274]=['Blades of Ice',
'<br>Charge-up Skill<br><br>consecutive hits add cold damage<br>to finishing moves<br>can only be used with claw-class weapons<br>must use a dragon finishing move or<br>normal attack to release charges',
function(){return ''+'<span class="num">24: </span>'+'Charge 1 - cold damage: '+(dec(dec((ln(lvl(274),15,8,10,20,30,40)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(274),35,8,10,22,32,42)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'Charge 2 - cold damage radius: '+dec(6*2/3,1)+' yards<br>'
+'<span class="num">12: </span>'+cc(['Charge 3 - freeze duration: ',dec((dec(ln(lvl(274),100,10),0))/25,1),' seconds<br>'])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(274),15,7),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(274),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Blades of Ice Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Phoenix Strike: +8% Cold Damage per Level<br>'
},5,1]
desc[275]=['Dragon Flight',
'<br>Finishing Move<br><br>teleport to your enemies<br>and destroy them with a kick<br>adds charged-up bonuses to the kick',
function(){return ''+'<span class="num">2: </span>'+cc(['Kick Damage: ',sign(dec(ln(lvl(275),100,25),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(275),60,25),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(275),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[276]=['Death Sentry',
'trap that shoots lightning at your enemies<br>or explodes nearby corpses laying waste to more enemies',
function(){return ''+'<span class="num">37: </span>'+'Radius: '+dec((10+1*(lvl(276)-1))/3,1)+' yards<br>'
+'<span class="num">10: </span>'+'Lightning Damage: '+(dec(dec((ln(lvl(276),1,0)<<8)*(100+((blvl(271))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(276),50,8,14,22,28,34)<<8)*(100+((blvl(271))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(276),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">38: </span>'+'Corpse Explosion Damage: '+dec(40,0)+'-'+dec(80,0)+' percent of corpse Life<br>'
+'<span class="num">3: </span>'+'Shoots '+dec(5+blvl(251)/3,0)+' Times<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Death Sentry Receives Bonuses From:<br>'
+'</span>'+'<span class="num">71: </span>'+'Fire Blast: +1 Shot per '+(3)+' Levels<br>'
+'<span class="num">63: </span>'+'Lightning Sentry: +12% Lightning Damage per Level<br>'
},6,1]
desc[277]=['Blade Shield',
'spinning blades slice enemies<br>who stray too close',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(277),1,5,6,7)<<8)/256,0)+'-'+dec((ln(lvl(277),30,5,6,7)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(1)+'/'+(4)+' Weapon Damage<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(277),500,125))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(277),27,2)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[278]=['Venom',
'add poison damage to your weapons',
function(){return ''+'<span class="num">14: </span>'+'Poison Damage: '+(dec((dec((ln(lvl(278),24,6,8,10,12,14)<<6),0))*(dec(ln(lvl(278),10,0),0))/256,0))+'-'+(dec((dec((ln(lvl(278),32,6,8,10,12,14)<<6),0))*(dec(ln(lvl(278),10,0),0))/256,0))+'<br>over '+dec(dec(ln(lvl(278),10,0),0)/25,1)+' seconds<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(278),3000,100))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(278),12,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[279]=['Shadow Master',
'summon a powerful shadow of yourself<br>to fight by your side',
function(){return ''+'<span class="num">13: </span>'+'Life: '+dec(376*(100+((lvl(279)-1)*15))/100+(0),0)+'<br>'
+'<span class="num">4: </span>'+cc(['Attack: +',lvl(279)*40,'<br>'])
+'<span class="num">2: </span>'+cc(['Resist All: ',sign(dec(((110*(lvl(279)-1))/(lvl(279)+5)*(80-5))/100+5,0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(279),70,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[280]=['Phoenix Strike',
'<br>Charge-up Skill<br><br>adds elemental novas to finishing moves<br>must use a dragon finishing move or<br>normal attack to release charges',
function(){return ''+'<span class="num">62: </span>'+'Charge 1 - meteor damage: '+(dec(dec((ln(lvl(280),20,10,19,29,38,46)<<8)*(100+((blvl(259))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),40,10,21,33,42,50)<<8)*(100+((blvl(259))*10))/100,0)/256,0))+'<br>'
+'<span class="num">38: </span>'+'Fire Explosion Damage: '+dec(dec(dec((ln(lvl(280),6,5,10,16,22,30)<<3)*(100+((blvl(259))*6))/100,0)*75/256/3,0)*3,0)+'-'+dec(dec(dec((ln(lvl(280),10,5,10,17,24,32)<<3)*(100+((blvl(259))*6))/100,0)*75/256/3,0)*3,0)+' per second<br>'
+'<span class="num">62: </span>'+'Charge 2 - chain lightning damage: '+(dec(dec((ln(lvl(280),1,0)<<8)*(100+((blvl(269))*13))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),40,20,40,60,80,100)<<8)*(100+((blvl(269))*13))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'Charge 3 - chaos ice bolt damage: '+(dec(dec((ln(lvl(280),16,4,8,12,20,28)<<8)*(100+((blvl(274))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),32,4,8,13,21,29)<<8)*(100+((blvl(274))*10))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(280),15,7),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(280),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Phoenix Strike Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Fists of Fire: +10% Fire Damage per Level<br>'
+'<span class="num">63: </span>'+'Fists of Fire: +6% Average Fire Damage per Second per Level<br>'
+'<span class="num">63: </span>'+'Claws of Thunder: +13% Lightning Damage per Level<br>'
+'<span class="num">63: </span>'+'Blades of Ice: +10% Cold Damage per Level<br>'
},6,2]

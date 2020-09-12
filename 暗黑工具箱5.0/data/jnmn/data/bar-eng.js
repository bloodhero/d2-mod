tabs[1]=[126,132,133,139,140,143,144,147,151,152]
tabs[2]=[127,128,129,134,135,136,141,145,148,153]
tabs[3]=[130,131,137,138,142,146,149,150,154,155]
tabs[1].name=['Combat','Skills','']
tabs[2].name=['Combat','Masteries','']
tabs[3].name=['Warcries','','']
tabs.close=[3,1,3]
desc=[]
desc[126]=['Bash',
'powerful blow that increases the damage done<br>to enemies and knocks them back',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((15+lvl(126)*5+blvl(144)*5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(126),50,5)+blvl(139)*5,0)),' percent<br>',])
+'<span class="num">4: </span>'+cc(['Damage: +',lvl(126),'<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(126),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Bash Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Stun: +5% Damage per Level<br>'
+'<span class="num">63: </span>'+'Concentrate: +5% Attack Rating per Level<br>'
},1,2]
desc[127]=['Sword Mastery',
'passive - improves sword fighting skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(127),28,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(127),28,8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(127),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[128]=['Axe Mastery',
'passive - improves axe fighting skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(128),28,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(128),28,8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(128),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[129]=['Mace Mastery',
'passive - improves mace fighting skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(129),28,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(129),28,8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(129),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[130]=['Howl',
'sends nearby monsters<br>scrambling away in fear',
function(){return ''+'<span class="num">19: </span>'+'Enemy runs up to '+dec(dec(ln(lvl(130),24,5),0)*2/3,1)+' yards<br>'
+'<span class="num">12: </span>'+cc(['Enemy runs for ',dec((ln(lvl(130),75,25))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(130),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[131]=['Find Potion',
'use on the corpse of a slain monster<br>for a chance to find a potion',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(131),0,100),0)+' percent chance<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(131),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[132]=['Leap',
'leaps away from danger<br>or into the fray',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(dm(lvl(132),4,30),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(132),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[133]=['Double Swing',
'when two weapons are equipped<br>attacks two targets if possible,<br>or one target twice',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(133),15,5),0)),' percent<br>',])
+'<span class="num">5: </span>'+'Mana Cost: '+dec(max(ln(lvl(133),8,-1)<<5,0)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(blvl(126)*10,0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Double Swing Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bash: +10% Damage per Level<br>'
},2,3]
desc[134]=['Pole Arm Mastery',
'passive - improves pole arm skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(134),28,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(134),30,8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(134),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[135]=['Throwing Mastery',
'passive - improves thrown weapon skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(135),28,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(135),30,8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(135),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[136]=['Spear Mastery',
'passive - improves spear fighting skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(136),28,5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(136),30,8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(136),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[137]=['Taunt',
'enrages a monster into relentlessly attacking',
function(){return ''+'<span class="num">3: </span>'+'Target\'s Damage: '+dec(ln(lvl(137),-5,-2),0)+' percent<br>'
+'<span class="num">3: </span>'+'Target\'s Attack: '+dec(ln(lvl(137),-5,-2),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(137),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[138]=['Shout',
'warns of impending danger and improves the defense<br>rating of you and your party',
function(){return ''+'<span class="num">2: </span>'+cc(['Defense: ',sign(dec(ln(lvl(138),100,10),0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(138),500,250)+(blvl(149)+blvl(155))*125)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(138),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Shout Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Battle Orders: +'+dec(125/25,0)+' Seconds per Level<br>'
+'<span class="num">67: </span>'+'Battle Command: +'+dec(125/25,0)+' Seconds per Level<br>'
},2,2]
desc[139]=['Stun',
'stuns your target for a short time<br>and increases your attack rating',
function(){return ''+'<span class="num">3: </span>'+'Attack: '+dec((10+lvl(139)*5+blvl(144)*5),0)+' percent<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((min(250,dec(ln(lvl(139),30,5,5,2)*(100+(blvl(154)*5))/100,0)))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(139),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(blvl(126)*8,0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Stun Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bash: +8% Damage per Level<br>'
+'<span class="num">63: </span>'+'Concentrate: +5% Attack Rating per Level<br>'
+'<span class="num">63: </span>'+'War Cry: +5% Duration per Level<br>'
},3,2]
desc[140]=['Double Throw',
'allows you to throw two different<br>throwing weapons at the same time',
function(){return ''+'<span class="num">8: </span>'+cc(['To Attack Rating: +',ln(lvl(140),20,10),' percent<br>'])
+'<span class="num">5: </span>'+'Mana Cost: '+dec(max(ln(lvl(140),1,0)<<8,1<<8)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(blvl(133)*8,0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Double Throw Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Double Swing: +8% Damage per Level<br>'
},3,3]
desc[141]=['Increased Stamina',
'passive - increases your stamina',
function(){return ''+'<span class="num">2: </span>'+cc(['Stamina Bonus: ',sign(dec(ln(lvl(141),30,15),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[142]=['Find Item',
'use on the corpse of a slain monster<br>to find hidden treasures',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(142),5,60),0)+' percent chance<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(142),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[143]=['Leap Attack',
'leaps to and attacks target enemy<br>in one swift assault',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(143),100,30)+blvl(132)*10,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(143),50,15),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(143),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Leap Attack Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Leap: +10% Damage per Level<br>'
},4,1]
desc[144]=['Concentrate',
'attack that is not interruptible and<br>improves attack and defense rating',
function(){return ''+'<span class="num">2: </span>'+cc(['Defense Bonus: ',sign(dec(ln(lvl(144),100,10),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(144),60,10),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(144),70,5)+blvl(126)*5+blvl(149)*10,0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(144),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['Magic Damage: ',sign(dec(blvl(152),0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Concentrate Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bash: +5% Damage per Level<br>'
+'<span class="num">63: </span>'+'Battle Orders: +10% Damage per Level<br>'
+'<span class="num">63: </span>'+'Berserk: +1% Magic Damage per Level<br>'
},4,2]
desc[145]=['Iron Skin',
'passive - improves defense rating',
function(){return ''+'<span class="num">6: </span>'+'+'+(ln(lvl(145),30,10))+' percent<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[146]=['Battle Cry',
'fearsome cry that decreases<br>enemies defense rating and damage',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(146),300,60))/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Defense: '+dec(ln(lvl(146),-50,-2),0)+' percent<br>'
+'<span class="num">3: </span>'+'Damage: '+dec(ln(lvl(146),-25,-1),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(146),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[147]=['Frenzy',
'allows you to swing two weapons at once<br>each successful attack increases your overall speed<br>requires you to equip two weapons',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(147),90,5)+(blvl(133)+blvl(137))*8,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(147),100,7),0)),' percent<br>',])
+'<span class="num">52: </span>'+'Attack Speed: +'+dec(15*(50-0)/100+0,0)+'-'+dec(dm(lvl(147),0,50),0)+' percent<br>'
+'<span class="num">52: </span>'+'Walk/Run Speed: +'+dec(15*(200-20)/100+20,0)+'-'+dec(dm(lvl(147),20,200),0)+' percent<br>'
+'<span class="num">5: </span>'+'Mana Cost: '+dec(max(ln(lvl(147),3,0)<<7,1<<8)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['Magic Damage: ',sign(dec(blvl(152),0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((150)/25,1),' seconds<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Frenzy Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Double Swing: +8% Damage per Level<br>'
+'<span class="num">63: </span>'+'Taunt: +8% Damage per Level<br>'
+'<span class="num">63: </span>'+'Berserk: +1% Magic Damage per Level<br>'
},5,3]
desc[148]=['Increased Speed',
'passive - increases walk and run speed',
function(){return ''+'<span class="num">2: </span>'+cc(['Walk/Run Speed: ',sign(dec(dm(lvl(148),7,50),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[149]=['Battle Orders',
'improves the maximum mana, life and<br>stamina of you and your party',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(149),750,250)+(blvl(138)+blvl(155))*125)/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Max Stamina: '+dec(ln(lvl(149),35,3),0)+' percent<br>'
+'<span class="num">3: </span>'+'Max Life: '+dec(ln(lvl(149),35,3),0)+' percent<br>'
+'<span class="num">3: </span>'+'Max Mana: '+dec(ln(lvl(149),35,3),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(149),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Battle Orders Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Shout: +'+dec(125/25,0)+' Seconds per Level<br>'
+'<span class="num">67: </span>'+'Battle Command: +'+dec(125/25,0)+' Seconds per Level<br>'
},5,2]
desc[150]=['Grim Ward',
'use on the corpse of a slain monster<br>to create a frightening totem<br>that causes nearby monsters to flee',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(150),1000,0))/25,1),' seconds<br>'])
+'<span class="num">19: </span>'+'Radius: '+dec(dec(ln(lvl(150),3,1),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(150),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[151]=['Whirlwind',
'a whirling dance of death<br>that cuts a path through the<br>legions of your enemies',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(ln(lvl(151),-50,8),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(151),0,5),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(151),50,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[152]=['Berserk',
'a powerful but reckless attack<br>that increases damage and attack rating<br>but decreases defense rating',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(ln(lvl(152),100,15),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Magic Damage: ',sign(dec(ln(lvl(152),150,15)+(blvl(130)+blvl(138))*10,0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((75-min(((110*lvl(152))/(lvl(152)+6)*(75-25)/100),(75-25)))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(152),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Berserk Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Howl: +10% Damage per Level<br>'
+'<span class="num">63: </span>'+'Shout: +10% Damage per Level<br>'
},6,2]
desc[153]=['Natural Resistance',
'passive - increases natural resistances<br>to elemental and poison damage',
function(){return ''+'<span class="num">2: </span>'+cc(['Resistances: ',sign(dec(dm(lvl(153),0,80),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[154]=['War Cry',
'injures and stuns all nearby enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(154),20,6,7,8,9,10)<<8)*(100+(blvl(130)+blvl(137)+blvl(146))*6)/25600,0)+'-'+dec((ln(lvl(154),30,6,7,8,9,10)<<8)*(100+(blvl(130)+blvl(137)+blvl(146))*6)/25600,0)+'<br>'
+'<span class="num">12: </span>'+cc(['Stun Length: ',dec((min(250,ln(lvl(154),25,5)))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(154),10,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'War Cry Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Howl: +6% Damage per Level<br>'
+'<span class="num">63: </span>'+'Taunt: +6% Damage per Level<br>'
+'<span class="num">63: </span>'+'Battle Cry: +6% Damage per Level<br>'
},6,1]
desc[155]=['Battle Command',
'increases all current skill levels for you and your party',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((ln(lvl(155),125,250)+(blvl(138)+blvl(149))*125)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max(ln(lvl(155),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Battle Command Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Shout: +'+dec(125/25,0)+' Seconds per Level<br>'
+'<span class="num">67: </span>'+'Battle Orders: +'+dec(125/25,0)+' Seconds per Level<br>'
},6,2]

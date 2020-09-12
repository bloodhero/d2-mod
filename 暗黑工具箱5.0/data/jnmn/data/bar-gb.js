tabs[1]=[126,132,133,139,140,143,144,147,151,152]
tabs[2]=[127,128,129,134,135,136,141,145,148,153]
tabs[3]=[130,131,137,138,142,146,149,150,154,155]
tabs[1].name=['战斗','技能','']
tabs[2].name=['战斗','专家','技能']
tabs[3].name=['呐喊','技能','']
tabs.close=[3,1,3]
desc=[]
desc[126]=['重击',
'强力打击增加造成的伤害<br>并震退敌人',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec((15+lvl(126)*5+blvl(144)*5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(126),50,5)+blvl(139)*5,0)),'%<br>',])
+'<span class="num">4: </span>'+cc(['伤害: +',lvl(126),'<br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(126),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'重击 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'击晕: +5% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'专心: +5% 攻击命中率每一技能等级<br>'
},1,2]
desc[127]=['剑系掌握',
'被动 - 增加你使用剑系武器的战斗技能',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(127),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(127),28,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(127),0,25))+'% 概率一击必杀<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[128]=['斧系掌握',
'被动 - 增加你使用斧系武器的战斗技能',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(128),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(128),28,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(128),0,25))+'% 概率一击必杀<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[129]=['锤系掌握',
'被动 - 增加你使用锤系武器的战斗技能',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(129),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(129),28,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(129),0,25))+'% 概率一击必杀<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[130]=['狂嗥',
'让附近的怪物因恐惧和四散奔逃',
function(){return ''+'<span class="num">19: </span>'+'敌人跑开 '+dec(dec(ln(lvl(130),24,5),0)*2/3,1)+' 码<br>'
+'<span class="num">12: </span>'+cc(['逃散持续 ',dec((ln(lvl(130),75,25))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(130),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[131]=['寻找药剂',
'搜寻怪物的尸体<br>看是否能找到药剂',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(131),0,100),0)+'% 概率<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(131),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[132]=['跳跃',
'跳跃离开危险或跳入战斗之中',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(dm(lvl(132),4,30),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(132),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[133]=['双手挥击',
'当装备两把武器时<br>可在一次攻击中击中两个敌人<br>或者攻击一个敌人两次',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(133),15,5),0)),'%<br>',])
+'<span class="num">5: </span>'+'魔法消耗: '+dec(max(ln(lvl(133),8,-1)<<5,0)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(blvl(126)*10,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'双手挥击 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'重击: +10% 伤害每一技能等级<br>'
},2,3]
desc[134]=['长棍掌握',
'被动 - 增加你用长棍武器的战斗技能',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(134),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(134),30,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(134),0,25))+'% 概率一击必杀<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[135]=['投掷掌握',
'被动 - 增加你使用投掷武器的战斗技能',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(135),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(135),30,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(135),0,25))+'% 概率一击必杀<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[136]=['矛系掌握',
'被动 - 增加你使用矛系武器的战斗技能',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(136),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(136),30,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(136),0,25))+'% 概率一击必杀<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[137]=['嘲弄',
'激怒一个怪物使之与你战斗',
function(){return ''+'<span class="num">3: </span>'+'目标伤害: '+dec(ln(lvl(137),-5,-2),0)+'%<br>'
+'<span class="num">3: </span>'+'目标命中率: '+dec(ln(lvl(137),-5,-2),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(137),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[138]=['大叫',
'警告队友迫近的危险<br>并提升他们的防御力',
function(){return ''+'<span class="num">2: </span>'+cc(['防御: ',sign(dec(ln(lvl(138),100,10),0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(138),500,250)+(blvl(149)+blvl(155))*125)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(138),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'大叫 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'战斗体制: +'+dec(125/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">67: </span>'+'战斗指挥: +'+dec(125/25,0)+' 秒 每一技能等级<br>'
},2,2]
desc[139]=['击晕',
'成功的攻击将使敌人晕眩<br>并提高你的命中率',
function(){return ''+'<span class="num">3: </span>'+'命中率: '+dec((10+lvl(139)*5+blvl(144)*5),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((min(250,dec(ln(lvl(139),30,5,5,2)*(100+(blvl(154)*5))/100,0)))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(139),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(blvl(126)*8,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'击晕 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'重击: +8% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'专心: +5% 攻击命中率每一技能等级<br>'
+'<span class="num">63: </span>'+'战斗狂嗥: +5% 持续时间每一技能等级<br>'
},3,2]
desc[140]=['双手投掷',
'可同时投掷两件不同的武器',
function(){return ''+'<span class="num">8: </span>'+cc(['命中率: +',ln(lvl(140),20,10),'%<br>'])
+'<span class="num">5: </span>'+'魔法消耗: '+dec(max(ln(lvl(140),1,0)<<8,1<<8)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(blvl(133)*8,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'双手投掷 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'双手挥击: +8% 伤害每一技能等级<br>'
},3,3]
desc[141]=['增加耐力',
'被动 - 提升你的耐力',
function(){return ''+'<span class="num">2: </span>'+cc(['耐力加成: ',sign(dec(ln(lvl(141),30,15),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[142]=['寻找物品',
'搜寻怪物的尸体<br>查找隐藏的物品',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(142),5,60),0)+'% 概率<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(142),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[143]=['跳跃攻击',
'跳向目标并在落地时攻击',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(143),100,30)+blvl(132)*10,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(143),50,15),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(143),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'跳跃攻击 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'跳跃: +10% 伤害每一技能等级<br>'
},4,1]
desc[144]=['专心',
'不间断地攻击<br>并提高攻击和防御的等级',
function(){return ''+'<span class="num">2: </span>'+cc(['防御加成: ',sign(dec(ln(lvl(144),100,10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(144),60,10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(144),70,5)+blvl(126)*5+blvl(149)*10,0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(144),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['魔法伤害: ',sign(dec(blvl(152),0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'专心 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'重击: +5% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'战斗体制: +10% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'狂暴: +1% 魔法伤害每一技能等级<br>'
},4,2]
desc[145]=['铁布衫',
'被动 - 增加防御',
function(){return ''+'<span class="num">6: </span>'+'防御加成: '+'+'+(ln(lvl(145),30,10))+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[146]=['战嗥',
'发出令人恐惧的叫声<br>降低敌人的防御力和伤害力',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(146),300,60))/25,1),' 秒 <br>'])
+'<span class="num">3: </span>'+'防御: '+dec(ln(lvl(146),-50,-2),0)+'%<br>'
+'<span class="num">3: </span>'+'伤害: '+dec(ln(lvl(146),-25,-1),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(146),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[147]=['狂乱',
'武器一旦成功击中目标<br>可以让挥动武器的速度加倍<br>须装备两把武器',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(147),90,5)+(blvl(133)+blvl(137))*8,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(147),100,7),0)),'%<br>',])
+'<span class="num">52: </span>'+'攻击速度: +'+dec(15*(50-0)/100+0,0)+'-'+dec(dm(lvl(147),0,50),0)+'%<br>'
+'<span class="num">52: </span>'+'移动速度: +'+dec(15*(200-20)/100+20,0)+'-'+dec(dm(lvl(147),20,200),0)+'%<br>'
+'<span class="num">5: </span>'+'魔法消耗: '+dec(max(ln(lvl(147),3,0)<<7,1<<8)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['魔法伤害: ',sign(dec(blvl(152),0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((150)/25,1),' 秒 <br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'狂乱 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'双手挥击: +8% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'嘲弄: +8% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'狂暴: +1% 魔法伤害每一技能等级<br>'
},5,3]
desc[148]=['加速',
'被动 - 增加移动速度',
function(){return ''+'<span class="num">2: </span>'+cc(['移动速度: ',sign(dec(dm(lvl(148),7,50),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[149]=['战斗体制',
'增加队友的生命、魔法和耐力值',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(149),750,250)+(blvl(138)+blvl(155))*125)/25,1),' 秒 <br>'])
+'<span class="num">3: </span>'+'最大耐力: '+dec(ln(lvl(149),35,3),0)+'%<br>'
+'<span class="num">3: </span>'+'最大生命: '+dec(ln(lvl(149),35,3),0)+'%<br>'
+'<span class="num">3: </span>'+'最大魔法: '+dec(ln(lvl(149),35,3),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(149),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'战斗体制 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'大叫: +'+dec(125/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">67: </span>'+'战斗指挥: +'+dec(125/25,0)+' 秒 每一技能等级<br>'
},5,2]
desc[150]=['残酷吓阻',
'利用怪物的尸体<br>创造一个恐怖的图腾<br>吓跑附近的怪物',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(150),1000,0))/25,1),' 秒 <br>'])
+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(150),3,1),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(150),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[151]=['旋风',
'旋转的死亡之舞<br>挥砍所有在旋转路径上的敌人',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(151),-50,8),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(151),0,5),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(151),50,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[152]=['狂暴',
'威力强大但不计后果的攻击<br>可以增加伤害和命中率<br>但忽视防御',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(152),100,15),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['魔法伤害: ',sign(dec(ln(lvl(152),150,15)+(blvl(130)+blvl(138))*10,0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((75-min(((110*lvl(152))/(lvl(152)+6)*(75-25)/100),(75-25)))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(152),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'狂暴 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'狂嗥: +10% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'大叫: +10% 伤害每一技能等级<br>'
},6,2]
desc[153]=['自然抵抗',
'被动 - 增加对元素伤害的抗性',
function(){return ''+'<span class="num">2: </span>'+cc(['元素抗性: ',sign(dec(dm(lvl(153),0,80),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[154]=['战斗狂嗥',
'伤害附近的敌人并使其晕眩',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(154),20,6,7,8,9,10)<<8)*(100+(blvl(130)+blvl(137)+blvl(146))*6)/25600,0)+'-'+dec((ln(lvl(154),30,6,7,8,9,10)<<8)*(100+(blvl(130)+blvl(137)+blvl(146))*6)/25600,0)+'<br>'
+'<span class="num">12: </span>'+cc(['击晕时间: ',dec((min(250,ln(lvl(154),25,5)))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(154),10,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'战斗狂嗥 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'狂嗥: +6% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'嘲弄: +6% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'战嗥: +6% 伤害每一技能等级<br>'
},6,1]
desc[155]=['战斗指挥',
'临时增加你和队友的技能1级',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(155),125,250)+(blvl(138)+blvl(149))*125)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(155),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'战斗指挥 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'大叫: +'+dec(125/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">67: </span>'+'战斗体制: +'+dec(125/25,0)+' 秒 每一技能等级<br>'
},6,2]

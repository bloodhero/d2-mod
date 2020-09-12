tabs[1]=[96,97,101,106,107,111,112,116,117,121]
tabs[2]=[98,102,103,108,113,114,118,119,122,123]
tabs[3]=[99,100,104,105,109,110,115,120,124,125]
tabs[1].name=['格斗','技能','']
tabs[2].name=['攻击','灵气','']
tabs[3].name=['防御','灵气','']
tabs.close=[1,2,1]
desc=[]
desc[96]=['牺牲',
'以生命为代价增加伤害和准确性',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(96),20,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(96),180,15)+blvl(124)*15+blvl(122)*5,0)),'%<br>',])
},
function(){return ''+'<span class="num">68: </span>'+(8)+'% 自身伤害<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'牺牲 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'救赎: +15% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'狂热: +5% 伤害每一技能等级<br>'
},1,1]
desc[97]=['重击',
'用盾牌打击敌人<br>使其短暂昏迷',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec((lvl(97)*15),0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['眩晕时间: ',dec((min(250,ln(lvl(97),15,5)))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(97),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[98]=['力量',
'启用时，增加你和对友的攻击伤害',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(98),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(98),40,10),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[99]=['祈祷',
'启用时, 慢慢地恢复你和队友的生命',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(99),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">4: </span>'+cc(['治疗: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(99),16,3)<<4,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[100]=['火焰抵抗',
'启用时, 降低你和队友受到的火焰伤害',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(100),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['火焰抵抗: ',sign(dec(dm(lvl(100),35,150),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[101]=['圣光弹',
'发射神圣光弹打击不死的敌人<br>或治疗你的同盟者',
function(){return ''+'<span class="num">10: </span>'+'魔法伤害: '+(dec(dec((ln(lvl(101),8,8,10,13,16,20)<<8)*(100+((blvl(112)+blvl(121))*50))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(101),16,8,11,15,18,23)<<8)*(100+((blvl(112)+blvl(121))*50))/100,0)/256,0))+'<br>'
+'<span class="num">47: </span>'+'治疗: '+dec(ln(lvl(101),1,2)*(100+blvl(99)*15)/100,0)+'-'+dec(ln(lvl(101),6,4)*(100+blvl(99)*15)/100,0)+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(101),32,1)<<4,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'圣光弹 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'祝福之槌: +50% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'天堂之拳: +50% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'祈祷: +15% 生命恢复每一技能等级<br>'
},2,2]
desc[102]=['圣火',
'启用时, 周期性地发出火焰伤害周围的敌人',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(102),6,1),0)*2/3,1)+' 码<br>'
+'<span class="num">38: </span>'+'火焰伤害: '+dec(dec((ln(lvl(102),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)*6/256,0)+'-'+dec(dec((ln(lvl(102),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)*6/256,0)+' 在攻击上<br>'
+'<span class="num">43: </span>'+'火焰伤害: '+dec(dec((ln(lvl(102),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,1)+'-'+dec(dec((ln(lvl(102),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,1)+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'圣火 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火焰抵抗: +18% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'拯救: +6% 火焰伤害每一技能等级<br>'
},2,2]
desc[103]=['荆棘',
'启用时, 灵气将敌人的伤害反弹回去',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(103),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(103),250,40),0)+'% 伤害反噬<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[104]=['蔑视',
'启用时, 增加你和队友的防御等级',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(104),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['防御加成: ',sign(dec(ln(lvl(104),70,10),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[105]=['冰冷抵抗',
'启用时, 降低你和队友受到的冰冷伤害',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(105),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['冰冷抵抗: ',sign(dec(dm(lvl(105),35,150),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[106]=['热诚',
'可以让一次攻击打击多个敌人',
function(){return ''+'<span class="num">2: </span>'+cc(['攻击力: ',sign(dec((lvl(106)*10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(((lvl(106)<5)?0:((lvl(106)-4)*6))+blvl(96)*12,0)),'%<br>',])
+'<span class="num">7: </span>'+dec(min((2+lvl(106)-1),5),0)+' 次攻击<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(106),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'热诚 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'牺牲: +12% 伤害每一技能等级<br>'
},3,1]
desc[107]=['冲锋',
'高速冲击一个敌人',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(107),100,25)+(blvl(115)+blvl(98))*20,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(107),50,15),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(107),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冲锋 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'活力: +20% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'力量: +20% 伤害每一技能等级<br>'
},3,3]
desc[108]=['祝福瞄准',
'启用时, 增加你和队友的命中率',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(108),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(108),75,15),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[109]=['净化',
'启用时, 降低你和队友中毒或被诅咒的时间',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(109),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">3: </span>'+'抵消时间 '+dec(dm(lvl(109),30,90),0)+'%<br>'
+'<span class="num">4: </span>'+cc(['治疗: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
},
function(){return ''+'<span class="num">67: </span>'+'祈祷: +'+dec(dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),0)+' 生命恢复每2秒 <br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'净化 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'祈祷<br>'
},3,1]
desc[110]=['闪电抵抗',
'启用时, 降低你和队友受到的闪电伤害',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(110),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['闪电抵抗: ',sign(dec(dm(lvl(110),35,150),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[111]=['复仇',
'在每次成功的攻击中加上火、电和冰的元素伤害',
function(){return ''+'<span class="num">11: </span>'+cc(['冰冻时间: ',dec(dec(ln(lvl(111),30,15),0)/25,1),' 秒 <br>'])
+'<span class="num">2: </span>'+cc(['火焰伤害: ',sign(dec(ln(lvl(111),70,6)+blvl(100)*10+blvl(125)*2,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['冰冷伤害: ',sign(dec(ln(lvl(111),70,6)+blvl(105)*10+blvl(125)*2,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['闪电伤害: ',sign(dec(ln(lvl(111),70,6)+blvl(110)*10+blvl(125)*2,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(111),20,10),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(111),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'复仇 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火焰抵抗: +10% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰冷抵抗: +10% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电抵抗: +10% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'拯救: +2% 元素伤害每一技能等级<br>'
},4,1]
desc[112]=['祝福之槌',
'召唤一个飞舞的神槌<br>向外旋转打击敌人<br>对不死的敌人造成150%的伤害',
function(){return ''+'<span class="num">48: </span>'+'魔法伤害: '+(dec(dec((ln(lvl(112),12,8,10,12,13,14)<<8)*(100+((blvl(115)+blvl(108))*14))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(112),16,8,10,12,13,14)<<8)*(100+((blvl(115)+blvl(108))*14))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(112),20,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'祝福之槌 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'祝福瞄准: +14% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'活力: +14% 魔法伤害每一技能等级<br>'
},4,2]
desc[113]=['专注',
'启用时, 增加伤害并降低攻击被打断的概率',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(113),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">3: </span>'+'打断概率 '+dec(20,0)+'%<br>'
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(113),60,15),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[114]=['圣洁寒冰',
'启用时, 冰冻附近的怪物',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(114),6,1),0)*2/3,1)+' 码<br>'
+'<span class="num">38: </span>'+'冰冷伤害: '+dec(dec((ln(lvl(114),2,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)*5/256,0)+'-'+dec(dec((ln(lvl(114),3,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)*5/256,0)+' 在攻击上<br>'
+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(114),2,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(114),3,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)/256,0))+'<br>'
+'<span class="num">3: </span>'+'敌人减慢 '+dec(dm(lvl(114),25,60),0)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'圣洁寒冰 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'冰冷抵抗: +15% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'拯救: +7% 冰冷伤害每一技能等级<br>'
},4,2]
desc[115]=['活力',
'启用时, 增加你和队友的移动速度<br>并提高耐力恢复速度及最大值',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(115),16,3),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['移动速度: ',sign(dec(dm(lvl(115),7,50),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['耐力加成: ',sign(dec(ln(lvl(115),50,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['耐力恢复速度: ',sign(dec(ln(lvl(115),50,25),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[116]=['转化',
'有效的攻击有一定比率转化魔物为你作战',
function(){return ''+'<span class="num">3: </span>'+'转化概率: '+dec(dm(lvl(116),0,50),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(116),400,0))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(116),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[117]=['神圣护盾',
'用神圣的力量增强你的护盾',
function(){return ''+'<span class="num">49: </span>'+'重击伤害: +'+(dec((ln(lvl(117),3,2,3,4)<<8)*(100+(0))/25600,0))+'-'+(dec((ln(lvl(117),6,2,3,4)<<8)*(100+(0))/25600,0))+'<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(117),750,625))/25,1),' 秒 <br>'])
+'<span class="num">2: </span>'+cc(['防御加成: ',sign(dec(ln(lvl(117),25,15)+blvl(104)*15,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['格挡成功率: ',sign(dec(dm(lvl(117),10,40),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(117),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'神圣护盾 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'蔑视: +15% 防御每一技能等级<br>'
},5,3]
desc[118]=['神圣冲击',
'启用时, 周期性地对半径内的敌人造成电系伤害<br>在攻击上增加闪电伤害',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(118),6,1),0)*2/3,1)+' 码<br>'
+'<span class="num">38: </span>'+'闪电伤害: '+dec(1,0)+'-'+dec(dec((ln(lvl(118),10,6,8,10,12,15)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)*6/256,0)+' 在攻击上<br>'
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(118),1,0)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(118),10,6,8,10,12,15)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)/256,0))+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'神圣冲击 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'闪电抵抗: +12% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'拯救: +4% 闪电伤害每一技能等级<br>'
},5,2]
desc[119]=['庇护所',
'启用时, 伤害并击退不死系怪物',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(119),5,1),0)*2/3,1)+' 码<br>'
+'<span class="num">67: </span>'+'对不死系伤害: +'+dec(ln(lvl(119),150,30),0)+' %<br>'
+'<span class="num">10: </span>'+'魔法伤害: '+(dec(dec((ln(lvl(119),8,4,4,5,5,6)<<8)*(100+(blvl(109)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(119),16,4,5,6,6,7)<<8)*(100+(blvl(109)*7))/100,0)/256,0))+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'庇护所 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'净化: +7% 魔法伤害每一技能等级<br>'
},5,3]
desc[120]=['冥想',
'启用时, 提高你和队友的魔法恢复速度',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(120),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['魔法恢复比率: ',sign(dec(ln(lvl(120),300,25),0)),'%<br>',])
+'<span class="num">4: </span>'+cc(['治疗: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
},
function(){return ''+'<span class="num">67: </span>'+'祈祷: +'+dec(dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),0)+' 生命恢复每2秒 <br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冥想 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'祈祷<br>'
},5,1]
desc[121]=['天堂之拳',
'强力的闪电攻击目标<br>并释放圣光弹攻击附近的敌人',
function(){return ''+'<span class="num">50: </span>'+'圣光弹 伤害: '+(dec(dec((ln(lvl(121),40,6,10,16,32,48)<<8)*(100+(blvl(101)*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(121),50,6,10,16,32,48)<<8)*(100+(blvl(101)*15))/100,0)/256,0))+'<br>'
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(121),150,15,30,45,55,65)<<8)*(100+(blvl(118)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(121),200,15,30,45,55,65)<<8)*(100+(blvl(118)*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(121),25,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'天堂之拳 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'圣光弹: +15% 圣光弹 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'神圣冲击: +7% 闪电伤害每一技能等级<br>'
},6,2]
desc[122]=['狂热',
'启用时, 增加你和队友的的攻击速度、伤害和命中率',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(122),11,1),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['队友伤害: ',sign(dec(ln(lvl(122),50,17)/2,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['自身伤害: ',sign(dec(ln(lvl(122),50,17),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['攻击速度: ',sign(dec(dm(lvl(122),10,40),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(122),40,5),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[123]=['审判',
'启用时, 降低敌人的防御和元素抗性',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(123),20,0),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['防御: ',sign(dec(-dm(lvl(123),40,100),0)),'%<br>',])
+'<span class="num">3: </span>'+'抗性: '+dec(-min(ln(lvl(123),30,5),150),0)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[124]=['救赎',
'启用时, 尝试救赎死去敌人的灵魂<br>来增加生命和魔法',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(124),16,0),0)*2/3,1)+' 码<br>'
+'<span class="num">3: </span>'+'救赎几率: '+dec(dm(lvl(124),10,100),0)+'%<br>'
+'<span class="num">3: </span>'+'生命/魔法恢复: '+dec(ln(lvl(124),25,5),0)+' 点<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[125]=['拯救',
'启用时, 增加你和队友的火、电和冰的抗性',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(125),16,2),0)*2/3,1)+' 码<br>'
+'<span class="num">2: </span>'+cc(['火电冰抗性: ',sign(dec(dm(lvl(125),50,120),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]

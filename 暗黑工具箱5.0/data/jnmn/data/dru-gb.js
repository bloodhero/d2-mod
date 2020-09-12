tabs[1]=[221,222,226,227,231,236,237,241,246,247]
tabs[2]=[223,224,228,232,233,238,239,242,243,248]
tabs[3]=[225,229,230,234,235,240,244,245,249,250]
tabs[1].name=['召唤','技能','']
tabs[2].name=['变身','技能','']
tabs[3].name=['元素','技能','']
tabs.close=[3,3,3]
desc=[]
desc[221]=['乌鸦',
'召唤乌鸦啄食敌人的眼睛',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(221),2,1)<<8)/256,0)+'-'+dec((ln(lvl(221),4,1)<<8)/256,0)+'<br>'
+'<span class="num">7: </span>'+'攻击次数: '+dec(ln(lvl(221),12,1),0)+'<br>'
+'<span class="num">5: </span>'+'数量: '+dec(min(lvl(221),5),0)+'<br>'
+'<span class="num">1: </span>'+cc(['每乌鸦魔法消耗: ',dec(max(ln(lvl(221),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[222]=['毒藤',
'召唤一条藤蔓<br>对接触的敌人传播瘟疫',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(42*(100+((lvl(222)-1)*25))/100+(0),0)+-+dec(58*(100+((lvl(222)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">14: </span>'+'毒素伤害: '+(dec((dec(ln(lvl(222),12,7,12,15,17,19),0))*(dec(ln(lvl(222),100,0),0))/256,0))+'-'+(dec((dec(ln(lvl(222),16,7,12,15,17,19),0))*(dec(ln(lvl(222),100,0),0))/256,0))+'<br>结束于 '+dec(dec(ln(lvl(222),100,0),0)/25,1)+' 秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(222),8,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[223]=['狼人变化',
'变形成狼人',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(223),50,15),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['攻击速度: ',sign(dec(dm(lvl(223),10,80),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(223),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['生命: ',sign(dec(25+ln(lvl(224),20,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['耐力加成: ',sign(dec(25,0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((1000+ln(lvl(224),1000,500))/25,1),' 秒 <br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'狼人变化 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'变形术<br>'
},1,1]
desc[224]=['变形术',
'被动 - 增加变成狼人或灰熊的生命上限和持续时间',
function(){return ''+'<span class="num">2: </span>'+cc(['最大生命: ',sign(dec(ln(lvl(224),20,5),0)),'%<br>',])
+'<span class="num">57: </span>'+'持续时间: +'+(ln(lvl(224),1000,500))/25+' 秒 <br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[225]=['火风暴',
'释放狂暴混沌灼烧敌人',
function(){return ''+'<span class="num">27: </span>'+'平均火焰伤害: '+(dec(dec((ln(lvl(225),3,3,5,7,14,21)<<2)*(100+((blvl(229)+blvl(234))*23))/100,0)*75/256,0))+'-'+(dec(dec((ln(lvl(225),6,3,6,8,15,23)<<2)*(100+((blvl(229)+blvl(234))*23))/100,0)*75/256,0))+' 每秒 <br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(225),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火风暴 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'熔浆巨岩: +23% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火山爆: +23% 火焰伤害每一技能等级<br>'
},1,1]
desc[226]=['橡木智者',
'召唤灵兽为你和队友增加生命',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(56*(100+((lvl(226)-1)*30))/100+(0),0)+-+dec(64*(100+((lvl(226)-1)*30))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['生命: ',sign(dec(ln(lvl(226),30,5),0)),'%<br>',])
+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(226),30,2),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(226),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[227]=['召唤灵狼',
'召唤一只带有灵力的狼<br>在你身旁战斗',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(227),2,1,2,4,5,8)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(227),6,1,2,4,5,8)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">5: </span>'+'数量: '+dec(min(lvl(227),5),0)+'<br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(227),50,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['防御: ',sign(dec(ln(lvl(227),50,10),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(227),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">13: </span>'+'生命: '+dec(60*(100+((lvl(237)>0)?ln(lvl(237),50,25):0))/100+(0),0)+-+dec(82*(100+((lvl(237)>0)?ln(lvl(237),50,25):0))/100+(0),0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'召唤灵狼 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">25: </span>'+'召唤狂狼<br>'
+'<span class="num">25: </span>'+'召唤灰熊<br>'
},2,2]
desc[228]=['熊人变化',
'变形成熊人',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(228),50,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['防御: ',sign(dec(ln(lvl(228),25,5),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(228),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['生命: ',sign(dec(50+ln(lvl(224),20,5),0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((1000+ln(lvl(224),1000,500))/25,1),' 秒 <br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'熊人变化 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'变形术<br>'
},2,3]
desc[229]=['熔浆巨岩',
'放射巨大熔岩击退敌人',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(229),6,4,7,10,13,16)<<8)*(100+blvl(244)*10)/25600,0)+'-'+dec((ln(lvl(229),12,5,8,11,14,17)<<8)*(100+blvl(244)*10)/25600,0)+'<br>'
+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(229),6,4,7,10,13,16)<<8)*(100+(blvl(225)*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(229),12,5,8,11,14,17)<<8)*(100+(blvl(225)*8))/100,0)/256,0))+'<br>'
+'<span class="num">22: </span>'+'平均火焰伤害: '+dec(dec((ln(lvl(229),10,6,7,8,9,10)<<2)*(100+(blvl(225)*8))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(229),14,6,7,8,9,10)<<2)*(100+(blvl(225)*8))/100,0)*25/256,0)*3+' 每秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(229),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'熔浆巨岩 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火山: +10% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火风暴: +8% 火焰伤害每一技能等级<br>'
},2,1]
desc[230]=['极地风暴',
'喷射冰霜冻结敌人',
function(){return ''+'<span class="num">26: </span>'+'平均冰冷伤害: '+(dec(dec((ln(lvl(230),21,16,18,20,24,29)<<2)*(100+((blvl(235)+blvl(250))*15))/100,0)/10.24,0))+'-'+(dec(dec((ln(lvl(230),40,16,19,21,25,31)<<2)*(100+((blvl(235)+blvl(250))*15))/100,0)/10.24,0))+' 每秒 <br>'
+'<span class="num">11: </span>'+cc(['冰冻时间: ',dec(dec(ln(lvl(230),100,15),0)/25,1),' 秒 <br>'])
+'<span class="num">19: </span>'+'射程: '+dec(dec(ln(lvl(230),35,2)/4,0)*2/3,1)+' 码<br>'
+'<span class="num">3: </span>'+'魔法消耗: '+dec(dec(max(ln(lvl(230),24,1)<<2,0)/20.48,0),0)+' 每秒 <br>'
},
function(){return ''+'<span class="num">5: </span>'+'最小魔法需求: '+dec(4,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'极地风暴 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'暴风: +15% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'飓风装甲: +15% 冰冷伤害每一技能等级<br>'
},2,3]
desc[231]=['食腐藤',
'召唤一条藤蔓吞食敌人的尸体<br>来增加你的生命',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(80*(100+((lvl(231)-1)*25))/100+(0),0)+-+dec(110*(100+((lvl(231)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">3: </span>'+'治疗: '+dec(dm(lvl(231),3,12),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(231),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[232]=['野性狂暴',
'变成狼人后从被攻击的敌人身上偷取生命',
function(){return ''+'<span class="num">52: </span>'+'移动速度: +'+dec(19,0)+'-'+dec(((110*(3+lvl(232)/2))*(70-10))/(100*((3+lvl(232)/2)+6))+10,0)+'%<br>'
+'<span class="num">52: </span>'+'生命偷取: +'+dec(4,0)+'-'+dec(4*lvl(232)+8,0)+'%<br>'
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(232),50,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(232),20,10),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(232),3,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((500)/25,1),' 秒 <br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[233]=['大槌',
'当变成熊人时不停地槌击敌人<br>造成额外的伤害',
function(){return ''+'<span class="num">12: </span>'+cc(['晕眩时间: ',dec((dm(lvl(233),10,100))/25,1),' 秒 <br>'])
+'<span class="num">52: </span>'+'伤害: +'+dec(20,0)+'-'+dec(20*(lvl(233)/2+3),0)+'%<br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(233),20,10),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(233),3,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((500)/25,1),' 秒 <br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[234]=['火山爆',
'在敌人下放开启一道火山出口<br>把敌人烧成灰烬',
function(){return ''+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(234),15,6,12,16,18,22)<<8)*(100+((blvl(225)+blvl(244))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(234),25,6,12,16,19,23)<<8)*(100+((blvl(225)+blvl(244))*12))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['持续时间: ',dec((ln(lvl(234),80,0))/25,1),' 秒 <br>'])
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(234),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火山爆 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火风暴: +12% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火山: +12% 火焰伤害每一技能等级<br>'
},3,1]
desc[235]=['飓风装甲',
'保护你免受火、冰、电伤害',
function(){return ''+'<span class="num">3: </span>'+'吸收 '+dec((ln(lvl(235),40,12)*(100+(blvl(240)+blvl(245)+blvl(250))*7)/100),0)+' 伤害<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(235),5,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'飓风装甲 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'飓风: +7% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'龙卷风: +7% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'暴风: +7% 伤害每一技能等级<br>'
},3,3]
desc[236]=['狼獾之心',
'召唤一只灵兽来增加你和队友的伤害和命中率',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(128*(100+((lvl(236)-1)*25))/100+(0),0)+-+dec(144*(100+((lvl(236)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(236),20,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(236),25,7),0)),'%<br>',])
+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(236),30,2),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(236),20,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[237]=['召唤狂狼',
'召唤一只狂狼吞食尸体来增加伤害',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(98*(100+(ln(lvl(237),50,25)))/100+(0),0)+-+dec(130*(100+(ln(lvl(237),50,25)))/100+(0),0)+'<br>'
+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(237),7,2,3,6,8,11)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(237),12,2,3,6,9,13)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">5: </span>'+'数量: '+dec(min(lvl(237),3),0)+'<br>'
+'<span class="num">2: </span>'+cc(['生命: ',sign(dec(ln(lvl(237),50,25),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(237),20,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(227),50,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['防御: ',sign(dec(ln(lvl(227),50,10),0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'召唤狂狼 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">25: </span>'+'召唤灵狼<br>'
+'<span class="num">25: </span>'+'召唤灰熊<br>'
},4,2]
desc[238]=['狂犬病',
'当变为狼人时撕咬敌人的同时<br>造成疾病伤害并传播到其他怪物',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(238),50,7),0)),'%<br>',])
+'<span class="num">14: </span>'+'毒素伤害: '+(dec((dec((ln(lvl(238),6,4,5,7,11,16)<<3)*(100+((blvl(222))*18))/100,0))*(dec(ln(lvl(238),100,10),0))/256,0))+'-'+(dec((dec((ln(lvl(238),14,4,5,7,11,16)<<3)*(100+((blvl(222))*18))/100,0))*(dec(ln(lvl(238),100,10),0))/256,0))+'<br>结束于 '+dec(dec(ln(lvl(238),100,10),0)/25,1)+' 秒 <br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(238),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'狂犬病 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'毒藤: +18% 毒素伤害每一技能等级<br>'
},4,1]
desc[239]=['焰爪',
'当变成狼人或熊人时<br>槌击敌人时并附加焰爪攻击',
function(){return ''+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(239),15,8,12,20,24,30)<<8)*(100+((blvl(225)+blvl(229)+blvl(244)+blvl(234))*22))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(239),20,8,12,22,26,34)<<8)*(100+((blvl(225)+blvl(229)+blvl(244)+blvl(234))*22))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(239),50,15),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(239),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'焰爪 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火风暴: +22% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'熔浆巨岩: +22% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火山爆: +22% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火山: +22% 火焰伤害每一技能等级<br>'
},4,2]
desc[240]=['飓风',
'释放几个小旋风让路经的敌人晕眩并受伤',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(240),12,4,7,10,13,16)<<7)*(100+(blvl(245)+blvl(250))*10)/25600,0)+'-'+dec((ln(lvl(240),16,4,7,11,14,17)<<7)*(100+(blvl(245)+blvl(250))*10)/25600,0)+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['晕眩时间: ',dec((10)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(240),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'飓风 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'龙卷风: +10% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'暴风: +10% 伤害每一技能等级<br>'
},4,2]
desc[241]=['太阳藤',
'召唤一条藤蔓吞食尸体来补充你的魔法',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(138*(100+((lvl(241)-1)*20))/100+(0),0)+-+dec(192*(100+((lvl(241)-1)*20))/100+(0),0)+'<br>'
+'<span class="num">3: </span>'+'魔法恢复比率: '+dec(dm(lvl(241),1,8),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(241),14,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[242]=['饥饿',
'当变形为狼人或熊人时<br>撕咬敌人偷取生命和魔法',
function(){return ''+'<span class="num">3: </span>'+'生命偷取: '+dec(dm(lvl(242),50,200),0)+'%<br>'
+'<span class="num">3: </span>'+'魔法偷取: '+dec(dm(lvl(242),50,200),0)+'%<br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(242),50,10),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(242),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'伤害: '+dec(-75,0)+'%<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[243]=['震波',
'当变成为熊人时<br>创造一道震波震晕敌人',
function(){return ''+'<span class="num">12: </span>'+cc(['晕眩时间: ',dec((ln(lvl(243),40,15))/25,1),' 秒 <br>'])
+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(243),10,3,5,7)<<8)/256,0)+'-'+dec((ln(lvl(243),20,3,5,7)<<8)/256,0)+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(243),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[244]=['火山',
'召唤一座火山将死亡和毁灭的力量降落到敌人身上',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(244),8,2,4,6,8,10)<<8)*(100+blvl(229)*12)/25600,0)+'-'+dec((ln(lvl(244),10,2,4,6,8,10)<<8)*(100+blvl(229)*12)/25600,0)+'<br>'
+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(244),8,2,4,6,8,11)<<8)*(100+((blvl(234)+blvl(249))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(244),10,2,4,6,8,13)<<8)*(100+((blvl(234)+blvl(249))*12))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(244),25,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火山 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'熔浆巨岩: +12% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火山爆: +12% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'末日战场: +12% 火焰伤害每一技能等级<br>'
},5,1]
desc[245]=['龙卷风',
'创造一个龙卷风毁灭敌人',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(245),25,8,14,20,24,28)<<8)*(100+(blvl(235)+blvl(240)+blvl(250))*9)/25600,0)+'-'+dec((ln(lvl(245),35,8,15,21,25,29)<<8)*(100+(blvl(235)+blvl(240)+blvl(250))*9)/25600,0)+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(245),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'龙卷风 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'飓风装甲: +9% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'飓风: +9% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'暴风: +9% 伤害每一技能等级<br>'
},5,2]
desc[246]=['棘灵',
'召唤灵兽将你和队友受到的伤害反弹回敌人',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(200*(100+((lvl(246)-1)*25))/100+(0),0)+-+dec(226*(100+((lvl(246)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(246),50,20),0)+'% 伤害反弹<br>'
+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(246),30,2),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(246),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[247]=['召唤灰熊',
'召唤一只凶猛的大灰熊',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(247),30,10,15,20,26,30)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(247),60,10,15,20,26,30)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(247),25,10),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(247),40,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">13: </span>'+'生命: '+dec(550*(100+(ln(lvl(237),50,25)))/100+(0),0)+-+dec(750*(100+(ln(lvl(237),50,25)))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(227),50,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['防御: ',sign(dec(ln(lvl(227),50,10),0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'召唤灰熊 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">25: </span>'+'召唤灵狼<br>'
+'<span class="num">25: </span>'+'召唤狂狼<br>'
},6,2]
desc[248]=['狂怒',
'当变形为狼人时<br>可以攻击多个附近的敌人<br>或者攻击多次单个敌人',
function(){return ''+'<span class="num">7: </span>'+'攻击次数 '+dec(min((2+lvl(248)-1),5),0)+'<br>'
+'<span class="num">2: </span>'+cc(['攻击力: ',sign(dec(ln(lvl(248),50,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(248),100,17),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(248),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[249]=['末日战场',
'创造一场流星雨毁灭附近的敌人',
function(){return ''+'<span class="num">22: </span>'+'平均火焰伤害: '+dec(dec((ln(lvl(249),10,6,7,8,9,10)<<2)*(100+((blvl(225)+blvl(229)+blvl(244))*7))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(249),14,6,7,8,9,10)<<2)*(100+((blvl(225)+blvl(229)+blvl(244))*7))/100,0)*25/256,0)*3+' 每秒 <br>'
+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(249),25,15,20,25,31,38)<<8)*(100+((blvl(225)+blvl(229)+blvl(244))*14))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(249),75,16,22,27,34,40)<<8)*(100+((blvl(225)+blvl(229)+blvl(244))*14))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(249),250,0)+blvl(234)*50)/25,1),' 秒 <br>'])
+'<span class="num">19: </span>'+'半径: '+dec(8*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(249),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'末日战场 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'火山爆: +'+dec(2,0)+' 秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'火风暴: +14% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'熔浆巨岩: +14% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火山: +14% 火焰伤害每一技能等级<br>'
},6,1]
desc[250]=['暴风',
'创造一场冰雨狂风撕碎附近的敌人',
function(){return ''+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(250),25,7,10,12,14,16)<<8)*(100+((blvl(240)+blvl(245))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(250),50,7,10,12,14,16)<<8)*(100+((blvl(240)+blvl(245))*9))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(250),250,0)+blvl(235)*50)/25,1),' 秒 <br>'])
+'<span class="num">19: </span>'+'半径: '+dec(9*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(250),30,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'暴风 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'飓风装甲: +'+dec(2,0)+' 秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'飓风: +9% 伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'龙卷风: +9% 伤害每一技能等级<br>'
},6,2]

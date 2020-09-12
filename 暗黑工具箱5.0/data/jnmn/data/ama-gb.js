tabs[1]=[6,7,11,12,16,21,22,26,27,31]
tabs[2]=[8,9,13,17,18,23,28,29,32,33]
tabs[3]=[10,14,15,19,20,24,25,30,34,35]
tabs[1].name=['弓和','十字弓','技能']
tabs[2].name=['被动','和魔法','技能']
tabs[3].name=['标枪','和长矛','技能']
tabs.close=[3,2,1]
desc=[]
desc[6]=['魔法箭',
'射出一束箭状魔力束，<br>给对手造成额外的伤害，<br>并且不会消耗箭支。',
function(){return ''+'<span class="num">66: </span>'+'转化 '+(1+(lvl(6)-1)*1)+'% 物理伤害为元素伤害<br>'
+'<span class="num">8: </span>'+cc(['命中率: +',ln(lvl(6),10,9),'%<br>'])
+'<span class="num">9: </span>'+cc(['伤害: +',dec((lvl(6)<<8)/256,0),'<br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(6),12,-1)<<5,0)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[7]=['火焰箭',
'在箭矢或弓弹上附带了魔法火焰，<br>并在打击时增加了火焰的伤害',
function(){return ''+'<span class="num">66: </span>'+'转化 '+(3+(lvl(7)-1)*2)+'% 物理伤害为元素伤害<br>'
+'<span class="num">8: </span>'+cc(['命中率: +',ln(lvl(7),10,9),'%<br>'])
+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(7),1,2,3,6,12,24)<<8)*(100+((blvl(16))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(7),4,2,3,7,14,27)<<8)*(100+((blvl(16))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(7),24,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火焰箭 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'爆裂箭: +12% 火焰伤害每一技能等级<br>'
},1,3]
desc[8]=['内视',
'使怪物发光并降低它们的防御',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(8),200,100))/25,1),' 秒 <br>'])
+'<span class="num">5: </span>'+'敌人防御: '+dec(-dec(dec((ln(lvl(8),40,25,45,60,80,100)<<8),0)/256,0),0)+'<br>'
+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(8),20,0),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(8),10,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[9]=['致命打击',
'被动 - 你的攻击有概率造成双倍伤害',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(9),5,80),0)+'% 概率<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[10]=['戳刺',
'用标枪或长矛类武器多次连续攻击敌人',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(10),10,9),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(10),-15,3),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(10),8,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">25: </span>'+'多次攻击<br>'
},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[11]=['冰箭',
'在箭矢或弓弹上增加额外的冰冻伤害和减慢效果<br>冰冻伤害只能造成正常时一半的伤害',
function(){return ''+'<span class="num">66: </span>'+'转化 '+(3+(lvl(11)-1)*2)+'% 物理伤害为元素伤害<br>'
+'<span class="num">8: </span>'+cc(['命中率: +',ln(lvl(11),10,9),'%<br>'])
+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(11),6,4,5,8,16,42)<<7)*(100+((blvl(21))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(11),8,4,5,9,17,44)<<7)*(100+((blvl(21))*12))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['冰冻时间: ',dec(dec(ln(lvl(11),100,30),0)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(11),28,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冰箭 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'急冻箭: +12% 冰冷伤害每一技能等级<br>'
},2,1]
desc[12]=['多重箭',
'由一枝分成多枝射出的魔法般的箭矢或弓弹',
function(){return ''+'<span class="num">7: </span>'+dec(min(24,ln(lvl(12),2,1)),0)+' 枝<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(12),4,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' 武器伤害<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[13]=['闪避',
'被动 - 增加站立或战斗状态时躲避近身攻击的能力。',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(13),10,65),0)+'% 概率<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[14]=['威力一击',
'使用标枪或长矛武器时附加闪电伤害',
function(){return ''+'<span class="num">8: </span>'+cc(['命中率: +',ln(lvl(14),20,12),'%<br>'])
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(14),1,0)<<8)*(100+((blvl(34)+blvl(20)+blvl(24)+blvl(35))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(14),16,18,36,54,72,90)<<8)*(100+((blvl(34)+blvl(20)+blvl(24)+blvl(35))*10))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(14),8,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'威力一击 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'闪电球: +10% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'充能一击: +10% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电攻击: +10% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电之怒: +10% 闪电伤害每一技能等级<br>'
},2,2]
desc[15]=['毒枪',
'标枪会魔法般地留下毒气云雾',
function(){return ''+'<span class="num">14: </span>'+'毒素伤害: '+(dec((dec(ln(lvl(15),32,16,32,48,64,96)*(100+((blvl(25))*12))/100,0))*(dec(ln(lvl(15),200,50),0))/256,0))+'-'+(dec((dec(ln(lvl(15),48,16,36,52,68,84)*(100+((blvl(25))*12))/100,0))*(dec(ln(lvl(15),200,50),0))/256,0))+'<br>结束于 '+dec(dec(ln(lvl(15),200,50),0)/25,1)+' 秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(15),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'毒枪 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'瘟疫标枪: +12% 毒素伤害每一技能等级<br>'
},2,3]
desc[16]=['爆裂箭',
'让箭矢或弓弹爆裂开<br>击中中间和附近的敌人',
function(){return ''+'<span class="num">8: </span>'+cc(['命中率: +',ln(lvl(16),20,9),'%<br>'])
+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(16),2,5,7,9,12,20)<<8)*(100+((blvl(7))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(16),6,5,8,11,14,23)<<8)*(100+((blvl(7))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(16),10,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'爆裂箭 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火焰箭: +12% 火焰伤害每一技能等级<br>'
},3,3]
desc[17]=['慢速箭',
'使附近的对手呈现高亮<br>并降低它们射击攻击速度',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(17),300,150))/25,1),' 秒 <br>'])
+'<span class="num">3: </span>'+'减缓敌人速度 '+dec(ln(lvl(17),33,0),0)+'%<br>'
+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(17),20,0),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(17),10,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[18]=['躲避',
'被动 - 增加站立或战斗状态时<br>躲避远程攻击的能力。',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(18),15,75),0)+'% 概率<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[19]=['刺爆',
'借由降低武器耐久度来增加伤害',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(19),300,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(19),100,25),0)),'%<br>',])
+'<span class="num">3: </span>'+'武器耐久度损失: '+dec(50-dm(lvl(19),0,30),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(19),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[20]=['闪电球',
'掷出的标枪变成闪电球',
function(){return ''+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(20),1,0)<<8)*(100+((blvl(34)+blvl(14)+blvl(24)+blvl(35))*3))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(20),40,12,18,28,48,88)<<8)*(100+((blvl(34)+blvl(14)+blvl(24)+blvl(35))*3))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(20),24,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' 武器伤害<br>'
+'<span class="num">66: </span>'+'转变 '+(100)+'% 物理伤害为元素伤害<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'闪电球 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'威力一击: +3% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'充能一击: +3% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电攻击: +3% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电之怒: +3% 闪电伤害每一技能等级<br>'
},3,3]
desc[21]=['急冻箭',
'在箭矢或弓弹上增加冰冻伤害<br>并冻结住你的敌人',
function(){return ''+'<span class="num">8: </span>'+cc(['命中率: +',ln(lvl(21),20,9),'%<br>'])
+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(21),6,6,12,18,26,36)<<8)*(100+((blvl(11))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(21),10,6,13,19,27,38)<<8)*(100+((blvl(11))*8))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['冰冻时间 ',dec((dec(ln(lvl(21),50,5)*(100+((blvl(31))*5))/100,0))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(21),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'急冻箭 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'冰箭: +8% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冻结之箭: +5% 冰冻时间每一技能等级<br>'
},4,1]
desc[22]=['向导箭',
'让箭矢或弓弹自动追踪目标<br>一定命中',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(22),0,5),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(22),32,-1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[23]=['刺入',
'被动 - 增加攻击命中率',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(23),35,10),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[24]=['充能一击',
'在标枪或长矛附加充能的光弹',
function(){return ''+'<span class="num">3: </span>'+'释放 '+dec(3+lvl(24)/5,0)+' 闪电弹<br>'
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(24),1,0)<<8)*(100+((blvl(34)+blvl(20)+blvl(14)+blvl(35))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(24),30,12,16,20,24,28)<<8)*(100+((blvl(34)+blvl(20)+blvl(14)+blvl(35))*10))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(24),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'充能一击 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'威力一击: +10% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电球: +10% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电攻击: +10% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电之怒: +10% 闪电伤害每一技能等级<br>'
},4,2]
desc[25]=['瘟疫标枪',
'让掷出的标枪爆出剧毒的云团',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(25),30,9),0)),'%<br>',])
+'<span class="num">14: </span>'+'毒素伤害: '+(dec((dec((ln(lvl(25),10,6,12,20,40,60)<<3)*(100+((blvl(15))*10))/100,0))*(dec(ln(lvl(25),75,10),0))/256,0))+'-'+(dec((dec((ln(lvl(25),16,6,12,20,40,60)<<3)*(100+((blvl(15))*10))/100,0))*(dec(ln(lvl(25),75,10),0))/256,0))+'<br>结束于 '+dec(dec(ln(lvl(25),75,10),0)/25,1)+' 秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(25),14,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'瘟疫标枪 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'毒枪: +10% 毒素伤害每一技能等级<br>'
},4,3]
desc[26]=['炮轰',
'让射出的箭矢自动瞄准攻击<br>多个附近的敌人',
function(){return ''+'<span class="num">3: </span>'+'攻击目标数 '+dec(min(lvl(26)+4,10),0)+'<br>'
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec((lvl(26)*5),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(26),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' 武器伤害<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[27]=['祭奠之箭',
'让箭矢或弓弹附加强烈火焰魔法<br>并燃起强烈的火焰',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(27),30,9),0)),'%<br>',])
+'<span class="num">24: </span>'+'爆炸伤害: '+(dec(dec((ln(lvl(27),10,10,20,30,32,34)<<8)*(100+((blvl(16))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(27),20,10,20,30,32,34)<<8)*(100+((blvl(16))*10))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['火焰持续时间: ',dec((ln(lvl(27),75,0))/25,1),' 秒 <br>'])
+'<span class="num">22: </span>'+'平均火焰伤害: '+dec(dec((ln(lvl(27),7,5)<<2)*(100+(blvl(7)*5))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(27),9,5)<<2)*(100+(blvl(7)*5))/100,0)*25/256,0)*3+' 每秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(27),12,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'祭奠之箭 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火焰箭: +5% 平均火焰伤害每秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'爆裂箭: +10% 火焰伤害每一技能等级<br>'
},5,3]
desc[28]=['诱饵',
'创造一个自身的幻象来迷惑敌人',
function(){return ''+'<span class="num">2: </span>'+cc(['生命: ',sign(dec(lvl(28)*10,0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(28),250,125))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(28),76,-3)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[29]=['逃避',
'被动 - 增加在移动过程中<br>对近身或远程攻击的躲避能力',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(29),10,65),0)+'% 概率<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[30]=['击退',
'同时攻击所有的附近目标',
function(){return ''+'<span class="num">2: </span>'+cc(['攻击力: ',sign(dec(ln(lvl(30),40,10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(30),70,10),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(30),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[31]=['冻结之箭',
'冰冻加强的箭矢或弓弹<br>可以冻结多个敌人',
function(){return ''+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(31),40,9),0)),'%<br>',])
+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(31),40,10,15,20,22,24)<<8)*(100+((blvl(11))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(31),50,10,15,20,22,24)<<8)*(100+((blvl(11))*12))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['冰冻时间 ',dec((dec(ln(lvl(31),50,0)*(100+((blvl(21))*5))/100,0))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(31),18,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(5*2/3,1)+' 码<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冻结之箭 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'冰箭: +12% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'急冻箭: +5% 冰冻时间每一技能等级<br>'
},6,1]
desc[32]=['女武神',
'召唤出一个强有力的女武神协同作战',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(400*(100+(20*(lvl(32)-1)+blvl(28)*20))/100+(0),0)+-+dec(480*(100+(20*(lvl(32)-1)+blvl(28)*20))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(25*(lvl(32)-1),0)),'%<br>',])
+'<span class="num">4: </span>'+cc(['命中率: +',(40*lvl(32)+40*blvl(23)),'<br>'])
+'<span class="num">2: </span>'+cc(['防御: ',sign(dec((lvl(32)-1)*10,0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(32),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'女武神 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'诱饵: +20% 生命每一技能等级<br>'
+'<span class="num">67: </span>'+'刺入: +'+dec(40,0)+' 攻击命中率每一技能等级<br>'
+'<span class="num">25: </span>'+'双倍打击<br>'
+'<span class="num">25: </span>'+'闪避<br>'
+'<span class="num">25: </span>'+'躲避<br>'
+'<span class="num">25: </span>'+'逃避<br>'
},6,1]
desc[33]=['穿透',
'被动 - 使亚马逊战士的发射物<br>有几率穿透命中的敌人',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(33),10,100),0)+'% 概率<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[34]=['闪电攻击',
'在使用的标枪和矛类武器上增加了闪电的伤害，<br>同时在击中目标的时候释放出连环闪电',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(34),2,1),0)+' 次<br>'
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(34),1,0)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(35))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(34),25,10,15,20,25,30)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(35))*8))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(34),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'闪电攻击 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'威力一击: +8% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电球: +8% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'充能一击: +8% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电之怒: +8% 闪电伤害每一技能等级<br>'
},6,2]
desc[35]=['闪电之怒',
'在投掷出的标枪上加入了强有力的闪电伤害力，<br>并在命中目标的时候释放出闪电',
function(){return ''+'<span class="num">3: </span>'+'释放 '+dec(ln(lvl(35),2,1),0)+' 闪电球<br>'
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(35),1,0)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(34))*1))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(35),40,20,30,40,50)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(34))*1))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(35),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'闪电之怒 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'威力一击: +1% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电球: +1% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'充能一击: +1% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电攻击: +1% 闪电伤害每一技能等级<br>'
},6,3]

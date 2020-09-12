tabs[1]=[66,71,72,76,77,81,82,86,87,91]
tabs[2]=[67,68,73,74,78,83,84,88,92,93]
tabs[3]=[69,70,75,79,80,85,89,90,94,95]
tabs[1].name=['诅咒','技能','']
tabs[2].name=['毒素','和骨系','咒语']
tabs[3].name=['召唤','咒语','']
tabs.close=[1,3,1]
desc=[]
desc[66]=['伤害加深',
'诅咒一组敌人<br>加深他们受到的物理伤害',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(66),3,1),0)*2/3,1)+' 码<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(66),200,75))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(66),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['伤害增加: ',sign(dec(100,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[67]=['牙',
'召唤一批利齿攻击敌人',
function(){return ''+'<span class="num">7: </span>'+cc(['牙齿数量:',dec(min(ln(lvl(67),2,1),24),0),'<br>'])
+'<span class="num">10: </span>'+'魔法伤害: '+(dec(dec((ln(lvl(67),4,2,2,3,4,5)<<7)*(100+((blvl(78)+blvl(88)+blvl(84)+blvl(93))*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(67),8,2,3,4,5,6)<<7)*(100+((blvl(78)+blvl(88)+blvl(84)+blvl(93))*15))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(67),6,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'牙 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'骨墙: +15% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨矛: +15% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨牢: +15% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨魂: +15% 魔法伤害每一技能等级<br>'
},1,2]
desc[68]=['骨盾',
'创造一个旋转的白骨护盾<br>来吸收近战伤害',
function(){return ''+'<span class="num">3: </span>'+'吸收 '+dec((ln(lvl(68),20,10)+(blvl(78)+blvl(88))*15),0)+' 伤害<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(68),11,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'骨盾 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'骨墙: +'+dec(15,0)+' 伤害吸收每一技能等级<br>'
+'<span class="num">67: </span>'+'骨牢: +'+dec(15,0)+' 伤害吸收每一技能等级<br>'
},1,3]
desc[69]=['骷髅掌握',
'被动 - 提升你召唤的骷髅，<br>法师以及重生生物的质量',
function(){return ''+'<span class="num">70: </span>'+'骷髅生命: +'+(lvl(69)*8)+'<br>'
+'<span class="num">70: </span>'+'骷髅伤害: +'+(lvl(69)*2)+'<br>'
+'<span class="num">70: </span>'+'骷髅法师生命: +'+(lvl(69)*8)+'<br>'
+'<span class="num">33: </span>'+'骷髅法师投射伤害<br>'
+'<span class="num">32: </span>'+'怪物生命: +'+(lvl(69)*5)+'%<br>'
+'<span class="num">32: </span>'+'怪物伤害: +'+(lvl(69)*10)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[70]=['骷髅复生',
'利用怪物尸体，复活一个骷髅战士为你战斗',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(((lvl(70)<4)?0:((lvl(70)-3)*7)),0)),'%<br>',])
+'<span class="num">5: </span>'+'命中率: '+dec(5+(lvl(70)+lvl(69))*15,0)+'<br>'
+'<span class="num">5: </span>'+'防御: '+dec(5+(lvl(70)+lvl(69))*15,0)+'<br>'
+'<span class="num">13: </span>'+'生命: '+dec(21*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+'<br>生命: '+dec(30*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+' (噩梦)<br>生命: '+dec(42*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+' (地狱)<br>'
+'<span class="num">36: </span>'+' 骷髅总数: '+dec((lvl(70)<4)?lvl(70):(2+lvl(70)/3),0)+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(70),6,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">34: </span>'+'伤害: '+dec((1+lvl(69)*2+dec(dec((ln(lvl(70),0,0,1,2,3,4)<<8),0)/256,0))*(100+((lvl(70)<4)?0:((lvl(70)-3)*7)))/100,0)+-+dec((2+lvl(69)*2+dec(dec((ln(lvl(70),0,0,1,2,3,4)<<8),0)/256,0))*(100+((lvl(70)<4)?0:((lvl(70)-3)*7)))/100,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'骷髅复生 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'骷髅掌握<br>'
+'<span class="num">18: </span>'+'召唤抵抗<br>'
},1,3]
desc[71]=['微弱暗视',
'诅咒一组怪物<br>降低它们的视野范围',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(71),4,1),0)*2/3,1)+' 码<br>'
+'<span class="num">31: </span>'+cc(['持续时间: ',dec((ln(lvl(71),175,50))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(71),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[72]=['削弱',
'诅咒一组敌人<br>减少他们造成的伤害',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(72),9,1),0)*2/3,1)+' 码<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(72),350,60))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(72),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'目标伤害: '+dec(-33,0)+'%<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[73]=['淬毒匕首',
'在匕首攻击中增加毒素伤害',
function(){return ''+'<span class="num">14: </span>'+'毒素伤害: '+(dec((dec((ln(lvl(73),18,10,15,20,23,26)<<1)*(100+((blvl(83)+blvl(92))*20))/100,0))*(dec(ln(lvl(73),50,10),0))/256,0))+'-'+(dec((dec((ln(lvl(73),40,10,15,20,23,26)<<1)*(100+((blvl(83)+blvl(92))*20))/100,0))*(dec(ln(lvl(73),50,10),0))/256,0))+'<br>结束于 '+dec(dec(ln(lvl(73),50,10),0)/25,1)+' 秒 <br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(73),30,20),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(73),12,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'淬毒匕首 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'毒爆: +20% 毒素伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'剧毒新星: +20% 毒素伤害每一技能等级<br>'
},2,1]
desc[74]=['尸体爆炸',
'选中一个怪物尸体,<br>让它爆炸伤害附近的敌人',
function(){return ''+'<span class="num">37: </span>'+'半径: '+dec((ln(lvl(74),8,1))/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(74),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">38: </span>'+'伤害: '+dec(60,0)+'-'+dec(100,0)+'% 尸体生命<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[75]=['粘土石魔',
'从大地召唤一个石魔<br>在你身边作战',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(100*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+'<br>生命: '+dec(175*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+' (噩梦)<br>生命: '+dec(275*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+' (地狱)<br>'
+'<span class="num">39: </span>'+'伤害: '+dec((2)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((5)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+'<br>伤害: '+dec((2)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((6)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+' (噩梦)<br>伤害: '+dec((3)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((7)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+' (地狱)<br>'
+'<span class="num">4: </span>'+cc(['攻击力: +',lvl(75)*20,'<br>'])
+'<span class="num">3: </span>'+'减慢敌人: '+dec(dm(lvl(75),0,75),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(75),15,3)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">5: </span>'+'命中率: '+dec(40+(lvl(79)*25)+(lvl(75)*20),0)+'<br>'
+'<span class="num">5: </span>'+'防御: '+dec(100+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'粘土石魔 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'石魔掌握<br>'
+'<span class="num">18: </span>'+'召唤抵抗<br>'
+'<span class="num">63: </span>'+'鲜血石魔: +5% 生命每一技能等级<br>'
+'<span class="num">67: </span>'+'钢铁石魔: +'+dec(35,0)+' 防御每一技能等级<br>'
+'<span class="num">63: </span>'+'火焰石魔: +6% 伤害每一技能等级<br>'
},2,2]
desc[76]=['攻击反噬',
'诅咒一组敌人,  <br>使他们造成的伤害返还于本身',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(76),200,25),0)+'% 伤害反噬<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(76),300,60))/25,1),' 秒 <br>'])
+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(76),7,0),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(76),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[77]=['恐惧',
'诅咒一组怪物,<br>使它们因恐惧而逃跑',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(77),200,25))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(77),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(77),4,0),0)*2/3,1)+' 码<br>'
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[78]=['骨墙',
'用尸体和残骸建起一道屏障',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(19*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+'<br>生命: '+dec(147*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+' (噩梦)<br>生命: '+dec(431*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+' (地狱)<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((600)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(78),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'骨墙 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'骨盾: +10% 生命每一技能等级<br>'
+'<span class="num">63: </span>'+'骨牢: +10% 生命每一技能等级<br>'
},3,3]
desc[79]=['石魔掌握',
'提升所有石魔的速度和生命',
function(){return ''+'<span class="num">2: </span>'+cc(['生命: ',sign(dec(lvl(79)*20,0)),'%<br>',])
+'<span class="num">4: </span>'+cc(['攻击力: +',(lvl(79)*25),'<br>'])
+'<span class="num">2: </span>'+cc(['移动速度: ',sign(dec(dm(lvl(79),0,40),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[80]=['骷髅法师',
'利用怪物尸体<br>召唤一个骷髅法师为你战斗',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(61*(100+(0))/100+(lvl(69)*8),0)+'<br>生命: '+dec(88*(100+(0))/100+(lvl(69)*8),0)+' (噩梦)<br>生命: '+dec(123*(100+(0))/100+(lvl(69)*8),0)+' (地狱)<br>'
+'<span class="num">5: </span>'+'防御: '+dec((lvl(80)+lvl(69))*10,0)+'<br>'
+'<span class="num">36: </span>'+'骷髅法师数量 '+dec((lvl(80)<4)?lvl(80):(2+lvl(80)/3),0)+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(80),8,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'骷髅法师 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'骷髅掌握<br>'
+'<span class="num">18: </span>'+'召唤抵抗<br>'
},3,3]
desc[81]=['迷乱',
'诅咒一个怪物<br>使它进行无差别地攻击',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(81),6,1),0)*2/3,1)+' 码<br>'
+'<span class="num">31: </span>'+cc(['持续时间: ',dec((ln(lvl(81),250,50))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(81),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[82]=['生命偷取',
'诅咒一组怪物<br>使它们被攻击时生命流向攻击者',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(82),4,1),0)*2/3,1)+' 码<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(82),400,60))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(82),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'偷取生命: '+dec(ln(lvl(82),50,0),0)+'% 攻击伤害<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[83]=['毒爆',
'让选中的怪物尸体生成毒素云雾',
function(){return ''+'<span class="num">14: </span>'+'毒素伤害: '+(dec((dec((ln(lvl(83),8,2,4,6,8,10)<<4)*(100+((blvl(73)+blvl(92))*15))/100,0))*(dec(ln(lvl(83),50,10),0))/256,0))+'-'+(dec((dec((ln(lvl(83),24,2,4,6,8,10)<<4)*(100+((blvl(73)+blvl(92))*15))/100,0))*(dec(ln(lvl(83),50,10),0))/256,0))+'<br>结束于 '+dec(dec(ln(lvl(83),50,10),0)/25,1)+' 秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(83),8,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'毒爆 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'淬毒匕首: +15% 毒素伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'剧毒新星: +15% 毒素伤害每一技能等级<br>'
},4,1]
desc[84]=['骨矛',
'召唤一枝致命的骨矛戳穿你的敌人',
function(){return ''+'<span class="num">10: </span>'+'魔法伤害: '+(dec(dec((ln(lvl(84),16,8,9,12,18,24)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(93))*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(84),24,8,9,13,19,25)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(93))*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(84),28,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'骨矛 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'牙: +7% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨墙: +7% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨牢: +7% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨魂: +7% 魔法伤害每一技能等级<br>'
},4,2]
desc[85]=['鲜血石魔',
'创造一个和你共享生命的石魔<br>承受它的偷取和伤害',
function(){return ''+'<span class="num">3: </span>'+'将 '+dec(dm(lvl(85),75,150),0)+'% 伤害转化为生命<br>'
+'<span class="num">39: </span>'+'伤害: '+dec((6)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((16)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+'<br>伤害: '+dec((9)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((23)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+' (噩梦)<br>伤害: '+dec((10)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((27)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+' (地狱)<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(85),25,4)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(201*(100+((lvl(79)*20)))/100+(0),0)+'<br>生命: '+dec(388*(100+((lvl(79)*20)))/100+(0),0)+' (噩梦)<br>生命: '+dec(637*(100+((lvl(79)*20)))/100+(0),0)+' (地狱)<br>'
+'<span class="num">5: </span>'+'命中率: '+dec(60+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'防御: '+dec(80+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'鲜血石魔 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'石魔掌握<br>'
+'<span class="num">18: </span>'+'召唤抵抗<br>'
+'<span class="num">67: </span>'+'粘土石魔: +'+dec(20,0)+' 攻击命中率每一技能等级<br>'
+'<span class="num">67: </span>'+'钢铁石魔: +'+dec(35,0)+' 防御每一技能等级<br>'
+'<span class="num">63: </span>'+'火焰石魔: +6% 伤害每一技能等级<br>'
},4,2]
desc[86]=['吸引',
'诅咒一个怪物 <br>使它成为附近怪物的攻击目标<br>此诅咒不能和其它诅咒叠加',
function(){return ''+'<span class="num">31: </span>'+cc(['持续时间: ',dec((ln(lvl(86),300,90))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(86),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(86),9,0),0)*2/3,1)+' 码<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[87]=['衰老',
'诅咒一组敌人 <br>使他们变慢、变弱并减少它们造成的伤害',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(87),100,15))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(87),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(87),6,0),0)*2/3,1)+' 码<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[88]=['骨牢',
'环绕目标周围建起由石化骨骸构成的屏障',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(19*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+'<br>生命: '+dec(147*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+' (噩梦)<br>生命: '+dec(431*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+' (地狱)<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((600)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(88),27,-1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'骨牢 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'骨盾: +8% 生命每一技能等级<br>'
+'<span class="num">63: </span>'+'骨墙: +8% 生命每一技能等级<br>'
},5,3]
desc[89]=['召唤抵抗',
'被动 - 增加所有召唤的怪物的元素抗性',
function(){return ''+'<span class="num">2: </span>'+cc(['所有抗性: ',sign(dec(dm(lvl(89),20,75),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[90]=['钢铁石魔',
'从金属武器中召唤石魔<br>石魔会获得物品的属性',
function(){return ''+'<span class="num">18: </span>'+'反刺<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(90),150,15),0)+'% 伤害反噬<br>'
+'<span class="num">4: </span>'+cc(['防御加成: +',lvl(90)*35,'<br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(90),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(306*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+'<br>生命: '+dec(595*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (噩梦)<br>生命: '+dec(980*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (地狱)<br>'
+'<span class="num">39: </span>'+'伤害: '+dec((7)*(100+(blvl(94)*6))/100,0)+-+dec((19)*(100+(blvl(94)*6))/100,0)+'<br>伤害: '+dec((11)*(100+(blvl(94)*6))/100,0)+-+dec((30)*(100+(blvl(94)*6))/100,0)+' (噩梦)<br>伤害: '+dec((12)*(100+(blvl(94)*6))/100,0)+-+dec((33)*(100+(blvl(94)*6))/100,0)+' (地狱)<br>'
+'<span class="num">5: </span>'+'命中率: '+dec(80+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'防御: '+dec(140+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'钢铁石魔 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'石魔掌握<br>'
+'<span class="num">18: </span>'+'召唤抵抗<br>'
+'<span class="num">67: </span>'+'粘土石魔: +'+dec(20,0)+' 攻击命中率每一技能等级<br>'
+'<span class="num">63: </span>'+'鲜血石魔: +5% 生命每一技能等级<br>'
+'<span class="num">63: </span>'+'火焰石魔: +6% 伤害每一技能等级<br>'
},5,2]
desc[91]=['降低抵抗',
'诅咒一个敌人使他受到更多的元素伤害 <br>降低怪物元素抗性<br>降低敌对玩家的最大元素抗性',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(91),7,1),0)*2/3,1)+' 码<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(91),500,50))/25,1),' 秒 <br>'])
+'<span class="num">3: </span>'+'所有抗性: '+dec(-dm(lvl(91),25,70),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(91),22,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[92]=['剧毒新星',
'放射一个剧毒的新星光环',
function(){return ''+'<span class="num">14: </span>'+'毒素伤害: '+(dec((dec((ln(lvl(92),14,4,5,8,12,14)<<4)*(100+((blvl(73)+blvl(83))*10))/100,0))*(dec(ln(lvl(92),50,0),0))/256,0))+'-'+(dec((dec((ln(lvl(92),25,4,5,8,12,14)<<4)*(100+((blvl(73)+blvl(83))*10))/100,0))*(dec(ln(lvl(92),50,0),0))/256,0))+'<br>结束于 '+dec(dec(ln(lvl(92),50,0),0)/25,1)+' 秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(92),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'剧毒新星 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'淬毒匕首: +10% 毒素伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'毒爆: +10% 毒素伤害每一技能等级<br>'
},6,1]
desc[93]=['骨魂',
'释放一个急于复仇的亡灵<br>攻击你指定的目标或自动选择的目标',
function(){return ''+'<span class="num">10: </span>'+'魔法伤害: '+(dec(dec((ln(lvl(93),20,16,17,18,19,20)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(84))*6))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(93),30,17,18,19,20,21)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(84))*6))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(93),24,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'骨魂 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'牙: +6% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨墙: +6% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨矛: +6% 魔法伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'骨牢: +6% 魔法伤害每一技能等级<br>'
},6,2]
desc[94]=['火焰石魔',
'创造一个火焰石魔<br>利用火焰伤害来治疗自身',
function(){return ''+'<span class="num">3: </span>'+'吸收 '+dec(dm(lvl(94),25,100),0)+'% 火焰伤害<br>'
+'<span class="num">41: </span>'+'伤害: '+dec((10)*(100+0)/100,0)+-+dec((27)*(100+0)/100,0)+'<br>伤害: '+dec((15)*(100+0)/100,0)+-+dec((39)*(100+0)/100,0)+' (噩梦)<br>伤害: '+dec((18)*(100+0)/100,0)+-+dec((47)*(100+0)/100,0)+' (地狱)<br>'+'火焰伤害: '+(dec(dec((ln(lvl(94),10,9,10,11,12,13)<<8),0)/256,0)+dec(dec((ln(ln(lvl(94),8,1),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0)*6)+'-'+(dec(dec((ln(lvl(94),27,10,11,12,13,14)<<8),0)/256,0)+dec(dec((ln(ln(lvl(94),8,1),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0)*6)+'<br>'
+'<span class="num">35: </span>'+'圣火 '+(dec(dec((ln(ln(lvl(94),8,1),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0))+'-'+(dec(dec((ln(ln(lvl(94),8,1),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(94),50,10)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(328*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+'<br>生命: '+dec(643*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (噩梦)<br>生命: '+dec(1063*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (地狱)<br>'
+'<span class="num">5: </span>'+'命中率: '+dec(120+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'防御: '+dec(200+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火焰石魔 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'石魔掌握<br>'
+'<span class="num">18: </span>'+'召唤抵抗<br>'
+'<span class="num">67: </span>'+'粘土石魔: +'+dec(20,0)+' 攻击命中率每一技能等级<br>'
+'<span class="num">63: </span>'+'鲜血石魔: +5% 生命每一技能等级<br>'
+'<span class="num">67: </span>'+'钢铁石魔: +'+dec(35,0)+' 防御每一技能等级<br>'
},6,2]
desc[95]=['重生',
'把一个怪物复活<br>让它为你而战',
function(){return ''+'<span class="num">5: </span>'+'怪物数: '+dec(lvl(95),0)+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(95),45,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(95),4500,0))/25,1),' 秒 <br>'])
+'<span class="num">2: </span>'+cc(['生命: ',sign(dec(200+lvl(69)*5,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(lvl(69)*10,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'重生 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'骷髅掌握<br>'
+'<span class="num">18: </span>'+'召唤抵抗<br>'
},6,3]

tabs[1]=[36,37,41,46,47,51,52,56,61,62]
tabs[2]=[38,42,43,48,49,53,54,57,58,63]
tabs[3]=[39,40,44,45,50,55,59,60,64,65]
tabs[1].name=['火焰系','咒语','']
tabs[2].name=['闪电系','咒语','']
tabs[3].name=['冰冻系','咒语','']
tabs.close=[1,1,3]
desc=[]
desc[36]=['火弹',
'创造一个火焰小球',
function(){return ''+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec(dec((ln(lvl(36),6,3,4,8,18,54)<<7)*(100+((blvl(47)+blvl(56))*16))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(36),12,3,6,10,20,56)<<7)*(100+((blvl(47)+blvl(56))*16))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(36),5,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火弹 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火球: +16% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'陨石: +16% 火焰伤害每一技能等级<br>'
},1,2]
desc[37]=['温暖',
'被动 - 提高魔法恢复的速率',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(37),30,12),0)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[38]=['闪电弹',
'发射多个自己寻找目标的闪电',
function(){return ''+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec(dec((ln(lvl(38),4,1,1,2,3,4)<<7)*(100+((blvl(49))*6))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(38),8,1,1,2,3,4)<<7)*(100+((blvl(49))*6))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">7: </span>'+'数量 '+dec(min(24,ln(lvl(38),3,1)),0)+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(38),24,4)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'闪电弹 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'闪电: +6% 闪电伤害每一技能等级<br>'
},1,2]
desc[39]=['冰弹',
'发射一个冰弹伤害并减慢敌人',
function(){return ''+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(39),6,2,4,6,8,10)<<7)*(100+((blvl(44)+blvl(45)+blvl(55)+blvl(59)+blvl(64))*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(39),10,3,5,7,9,11)<<7)*(100+((blvl(44)+blvl(45)+blvl(55)+blvl(59)+blvl(64))*15))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['冰冻时间: ',dec(dec(ln(lvl(39),150,35),0)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(39),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冰弹 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'霜之新星: +15% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰风暴: +15% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰矛: +15% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'暴风雪: +15% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰封球: +15% 冰冷伤害每一技能等级<br>'
},1,2]
desc[40]=['冰封装甲',
'提升防御等级并冻结打击你的敌人',
function(){return ''+'<span class="num">3: </span>'+'防御加成: '+dec(ln(lvl(40),30,5),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(40),3000,300)+(blvl(50)+blvl(60))*250)/25,1),' 秒 <br>'])
+'<span class="num">12: </span>'+cc(['冰冻时间 ',dec((ln(lvl(40),30,3)*(100+((blvl(50)+blvl(60))*5))/100)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(40),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冰封装甲 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'碎冰甲: +'+dec((250+12)/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'碎冰甲: +5% 冰冻时间每一技能等级<br>'
+'<span class="num">67: </span>'+'寒冰装甲: +'+dec((250+12)/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'寒冰装甲: +5% 冰冻时间每一技能等级<br>'
},1,3]
desc[41]=['地狱火',
'发出一束连续喷射的火焰<br>烧焦你的敌人',
function(){return ''+'<span class="num">26: </span>'+'平均火焰伤害: '+(dec(dec(dec((ln(lvl(41),32,24,26,28,32,36)<<2)*(100+((blvl(37))*13))/100,0)*(100+ln(lvl(61),30,7))/100,0)/10.24,0))+'-'+(dec(dec(dec((ln(lvl(41),64,24,27,29,33,37)<<2)*(100+((blvl(37))*13))/100,0)*(100+ln(lvl(61),30,7))/100,0)/10.24,0))+' 每秒 <br>'
+'<span class="num">19: </span>'+'射程: '+dec(dec(ln(lvl(41),20,3)/4,0)*2/3,1)+' 码<br>'
+'<span class="num">3: </span>'+'魔法消耗: '+dec(dec(max(ln(lvl(41),36,1)<<2,0)/20.48,0),0)+' 每秒 <br>'
},
function(){return ''+'<span class="num">5: </span>'+'最低魔法需求: '+dec(6,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'地狱火 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'温暖: +13% 火焰伤害每一技能等级<br>'
},2,1]
desc[42]=['静电力场',
'创造一个静电力场降低所有附近敌人的生命',
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(42),5,1),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(42),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'削弱敌人生命 '+dec(25,0)+'%<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[43]=['心灵遥感',
'使用精神力量拾取物品,<br> 触发机关,或打击敌人',
function(){return ''+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec(dec((lvl(43)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(43),2,1)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(43),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[44]=['霜之新星',
'创造一道扩展的冰环<br>伤害并减慢敌人',
function(){return ''+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(44),4,4,6,8,10,12)<<7)*(100+((blvl(59)+blvl(64))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(44),8,5,7,9,11,13)<<7)*(100+((blvl(59)+blvl(64))*10))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['冰冻时间: ',dec(dec(ln(lvl(44),200,25),0)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(44),9,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'霜之新星 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'暴风雪: +10% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰封球: +10% 冰冷伤害每一技能等级<br>'
},2,1]
desc[45]=['冰风暴',
'发射一个冰球伤害并冻结敌人',
function(){return ''+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(45),16,14,28,42,56,70)<<7)*(100+((blvl(39)+blvl(59)+blvl(64))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(45),24,15,29,43,57,71)<<7)*(100+((blvl(39)+blvl(59)+blvl(64))*8))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['冰冻时间 ',dec((dec(ln(lvl(45),75,5)*(100+((blvl(55))*10))/100,0))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(45),12,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冰风暴 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'冰弹: +8% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰矛: +10% 冰冻时间每一技能等级<br>'
+'<span class="num">63: </span>'+'暴风雪: +8% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰封球: +8% 冰冷伤害每一技能等级<br>'
},2,2]
desc[46]=['烈焰之径',
'沿着你的移动路线建立一道燃烧的火墙',
function(){return ''+'<span class="num">23: </span>'+cc(['火焰持续时间: ',dec((ln(lvl(46),90,25))/25,1),' 秒 <br>'])
+'<span class="num">27: </span>'+'平均火焰伤害: '+(dec(dec(dec((ln(lvl(46),4,2,3,4,6,9)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+'-'+(dec(dec(dec((ln(lvl(46),8,2,3,4,6,9)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+' 每秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(46),22,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[47]=['火球',
'创造一个爆炸的火球吞没你的敌人',
function(){return ''+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec(dec((ln(lvl(47),12,13,23,28,33,38)<<7)*(100+((blvl(36)+blvl(56))*14))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(47),28,15,25,30,35,40)<<7)*(100+((blvl(36)+blvl(56))*14))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(47),10,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">28: </span>'+'半径: 1 码<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火球 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火弹: +14% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'陨石: +14% 火焰伤害每一技能等级<br>'
},3,2]
desc[48]=['新星',
'创造一个扩大的电环电击敌人',
function(){return ''+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec(dec((ln(lvl(48),1,6,7,8,9,10)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(48),20,8,9,10,11,12)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(48),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[49]=['闪电',
'释放一道强烈的闪电蹂躏敌人',
function(){return ''+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec(dec((ln(lvl(49),1,0)<<8)*(100+((blvl(38)+blvl(53)+blvl(48))*8))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(49),40,8,12,20,28,36)<<8)*(100+((blvl(38)+blvl(53)+blvl(48))*8))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(49),16,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'闪电 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'闪电弹: +8% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'新星: +8% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'连锁闪电: +8% 闪电伤害每一技能等级<br>'
},3,2]
desc[50]=['碎冰甲',
'提升防御等级<br>冻结并伤害打击你的敌人',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(50),3000,300)+(blvl(40)+blvl(60))*250)/25,1),' 秒 <br>'])
+'<span class="num">3: </span>'+'防御加成: '+dec(ln(lvl(50),45,6),0)+'%<br>'
+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(50),12,4,6,8,10,12)<<7)*(100+((blvl(40)+blvl(60))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(50),16,5,7,9,11,13)<<7)*(100+((blvl(40)+blvl(60))*9))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['冰冻时间: ',dec(dec(ln(lvl(50),100,0,25,50),0)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(50),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'碎冰甲 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'冰封装甲: +'+dec((250+12)/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'冰封装甲: +9% 冰冷伤害每一技能等级<br>'
+'<span class="num">67: </span>'+'寒冰装甲: +'+dec((250+12)/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'寒冰装甲: +9% 冰冷伤害每一技能等级<br>'
},3,3]
desc[51]=['火墙',
'创造一道火墙阻燃敌人',
function(){return ''+'<span class="num">30: </span>'+cc(['火焰持续时间: ',dec(ln(lvl(51),90,0)/25,1),' 秒 <br>'])
+'<span class="num">27: </span>'+'平均火焰伤害: '+(dec(dec(dec((ln(lvl(51),15,9,14,21)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+'-'+(dec(dec(dec((ln(lvl(51),20,9,14,21)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+' 每秒 <br>'
+'<span class="num">29: </span>'+cc([dec(dec(ln(lvl(51),7,2),0)*2/3,1),' 码<br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(51),22,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[52]=['火焰强化',
'给近战武器附上火焰伤害<br>在远程武器上加上1/3火焰伤害',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(52),3600,600))/25,1),' 秒 <br>'])
+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec(dec((ln(lvl(52),16,3,7,11,15,19)<<7)*(100+((blvl(37))*9))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(52),20,5,9,13,17,21)<<7)*(100+((blvl(37))*9))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['攻击力: ',sign(dec(ln(lvl(52),20,9),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(52),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火焰强化 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'温暖: +9% 火焰伤害每一技能等级<br>'
},4,3]
desc[53]=['连锁闪电',
'创造一道连锁闪电<br>贯穿多个目标',
function(){return ''+'<span class="num">7: </span>'+'电击次数: '+dec(ln(lvl(53),26,1)/5,0)+'<br>'
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec(dec((ln(lvl(53),1,0)<<8)*(100+((blvl(38)+blvl(49)+blvl(48))*4))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(53),40,11,13,15)<<8)*(100+((blvl(38)+blvl(49)+blvl(48))*4))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(53),9,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'连锁闪电 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'闪电弹: +4% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'新星: +4% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电: +4% 闪电伤害每一技能等级<br>'
},4,2]
desc[54]=['心灵传送',
'瞬间移动到视力所及的目的地',
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(54),24,-1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[55]=['冰矛',
'发射一个坚冰彗星冻结或杀死附近的敌人',
function(){return ''+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(55),32,14,26,28,30,32)<<7)*(100+((blvl(39)+blvl(45)+blvl(64))*5))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(55),48,15,27,29,31,33)<<7)*(100+((blvl(39)+blvl(45)+blvl(64))*5))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['冰冻时间 ',dec((ln(lvl(55),50,3)*(100+blvl(59)*3)/100)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(55),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(55),4,0),0)*2/3,1)+' 码<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冰矛 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'冰弹: +5% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰风暴: +5% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'暴风雪: +3% 冰冻时间每一技能等级<br>'
+'<span class="num">63: </span>'+'冰封球: +5% 冰冷伤害每一技能等级<br>'
},4,2]
desc[56]=['陨石',
'召唤一个从天而降的陨石压碎并烧焦敌人',
function(){return ''+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec(dec((ln(lvl(56),80,23,39,79,81,83)<<8)*(100+((blvl(36)+blvl(47))*5))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(56),100,25,41,81,83,85)<<8)*(100+((blvl(36)+blvl(47))*5))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'半径: '+dec(dec(ln(lvl(56),6,0),0)*2/3,1)+' 码<br>'
+'<span class="num">22: </span>'+'平均火焰伤害: '+dec(dec(dec((ln(lvl(56),15,4,5,6)<<3)*(100+(blvl(41)*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0)+'-'+dec(dec(dec((ln(lvl(56),25,4,5,6)<<3)*(100+(blvl(41)*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)*25/256,0)*3+' 每秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(56),34,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'陨石 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火弹: +5% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火球: +5% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'地狱火: +3% 平均火焰伤害 每秒 每一技能等级<br>'
},5,2]
desc[57]=['雷暴',
'召唤一个致命的雷暴打击敌人',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(57),800,200))/25,1),' 秒 <br>'])
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec(dec((ln(lvl(57),1,10,10,11)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(57),100,10,10,11)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(57),19,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[58]=['能量护盾',
'创造一个能量护盾<br>用魔法来代替生命受到的伤害',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(58),3600,1500))/25,1),' 秒 <br>'])
+'<span class="num">3: </span>'+'吸收 '+dec(min(dec(dec((ln(lvl(58),20,5,2,1)<<8),0)/256,0),95),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(58),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'能量护盾 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">18: </span>'+'心灵遥感<br>'
},5,3]
desc[59]=['暴风雪',
'召唤大量厚重的冰块毁灭敌人',
function(){return ''+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(59),45,15,30,45,55,65)<<8)*(100+((blvl(39)+blvl(45)+blvl(55))*5))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(59),75,16,31,46,56,66)<<8)*(100+((blvl(39)+blvl(45)+blvl(55))*5))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['持续时间: ',dec((ln(lvl(59),100,0))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(59),23,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'暴风雪 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'冰弹: +5% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰风暴: +5% 冰冷伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'冰矛: +5% 冰冷伤害每一技能等级<br>'
},5,1]
desc[60]=['寒冰装甲',
'提升防御等级<br>并向远程攻击者发射冰弹报复',
function(){return ''+'<span class="num">3: </span>'+'防御加成: '+dec(ln(lvl(60),45,5),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(60),3600,150)+(blvl(40)+blvl(50))*250)/25,1),' 秒 <br>'])
+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(60),8,2,4,6,8,10)<<7)*(100+((blvl(40)+blvl(50))*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(60),12,3,5,7,9,11)<<7)*(100+((blvl(40)+blvl(50))*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(60),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'寒冰装甲 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">67: </span>'+'冰封装甲: +'+dec((250+12)/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'冰封装甲: +7% 冰冷伤害每一技能等级<br>'
+'<span class="num">67: </span>'+'碎冰甲: +'+dec((250+12)/25,0)+' 秒 每一技能等级<br>'
+'<span class="num">63: </span>'+'碎冰甲: +7% 冰冷伤害每一技能等级<br>'
},5,3]
desc[61]=['火系掌握',
'被动 - 增加火焰系咒语的伤害',
function(){return ''+'<span class="num">2: </span>'+cc(['火焰伤害: ',sign(dec(ln(lvl(61),30,7),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[62]=['九头海蛇',
'召唤一只多头的火焰兽<br>向敌人发射火焰弹',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(62),250,0))/25,1),' 秒 <br>'])
+'<span class="num">24: </span>'+'九头海蛇 火焰伤害: '+(dec(dec(dec((ln(lvl(62),24,9,13,17,21,25)<<7)*(100+((blvl(36)+blvl(47))*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(62),34,11,15,19,23,27)<<7)*(100+((blvl(36)+blvl(47))*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(62),40,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'九头海蛇 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火弹: +3% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火球: +3% 火焰伤害每一技能等级<br>'
},6,3]
desc[63]=['电系掌握',
'被动 - 增强闪电咒语的伤害',
function(){return ''+'<span class="num">2: </span>'+cc(['闪电伤害: ',sign(dec(ln(lvl(63),50,12),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[64]=['冰封球',
'创造一个冰球向周围发射冰弹<br>蹂躏你的敌人',
function(){return ''+'<span class="num">10: </span>'+'冰冷伤害: '+(dec(dec((ln(lvl(64),80,20,24,28,29,30)<<7)*(100+((blvl(39))*2))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(64),90,21,25,29,30,31)<<7)*(100+((blvl(39))*2))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['冰冻时间: ',dec(dec(ln(lvl(64),200,25),0)/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(64),50,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'冰封球 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'冰弹: +2% 冰冷伤害每一技能等级<br>'
},6,1]
desc[65]=['冰冷掌握',
'被动 - 通过降低敌人的冰冷抗性来提高伤害',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(65),20,5),0)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]

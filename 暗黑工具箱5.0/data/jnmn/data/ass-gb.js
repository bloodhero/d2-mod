tabs[1]=[251,256,257,261,262,266,271,272,276,277]
tabs[2]=[252,253,258,263,264,267,268,273,278,279]
tabs[3]=[254,255,259,260,265,269,270,274,275,280]
tabs[1].name=['陷阱','艺术','技能']
tabs[2].name=['影子','训练','技能']
tabs[3].name=['武学','艺术','技能']
tabs.close=[2,3,1]
desc=[]
desc[251]=['火焰爆震',
'投掷火焰炸弹<br>把你的敌人炸成碎片',
function(){return ''+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(251),6,3,8,20,38,58)<<7)*(100+((blvl(256)+blvl(276)+blvl(261)+blvl(271)+blvl(262)+blvl(272))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(251),8,5,11,24,44,66)<<7)*(100+((blvl(256)+blvl(276)+blvl(261)+blvl(271)+blvl(262)+blvl(272))*9))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(251),24,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(5*2/3,1)+' 码<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火焰爆震 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'闪电网: +9% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'电能守护: +9% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火焰复生: +9% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'雷光守卫: +9% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'复生狱火: +9% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'亡者守卫: +9% 火焰伤害每一技能等级<br>'
},1,2]
desc[252]=['利爪掌握',
'被动 - 增强你对爪类武器的使用技能',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(252),35,4),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(252),30,10),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(252),0,25))+'% 概率一击必杀<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[253]=['心灵战锤',
'用精神力量发出一个精神战追<br>打击并震退你的敌人',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(253),2,2,3,4,5,6)<<7)/256,0)+'-'+dec((ln(lvl(253),6,3,4,5,6,7)<<7)/256,0)+'<br>'
+'<span class="num">10: </span>'+'魔法伤害: '+(dec(dec((ln(lvl(253),2,2,3,4,5,6)<<7),0)/256,0))+'-'+(dec(dec((ln(lvl(253),6,3,4,5,6,7)<<7),0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(253),16,1)<<6,1<<8)/256,2),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[254]=['虎击',
'<br>聚气性技能技能<br><br>连击可累加最后一击所造成的伤害<br>必须用龙系最后一击或普通攻击来释放',
function(){return ''+'<span class="num">2: </span>'+cc(['聚气1级 - ',sign(dec(ln(lvl(254),100,20),0)),'% 伤害<br>',])
+'<span class="num">2: </span>'+cc(['聚气2级 - ',sign(dec(2*ln(lvl(254),100,20),0)),'% 伤害<br>',])
+'<span class="num">2: </span>'+cc(['聚气3级 - ',sign(dec(3*ln(lvl(254),100,20),0)),'% 伤害<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(254),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(254),1,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[255]=['龙爪',
'<br>最后一击<br><br>把敌人踢开<br>可以加上聚气性技能加成的伤害',
function(){return ''+'<span class="num">36: </span>'+dec(lvl(255)/6+1,0)+' Kicks<br>'
+'<span class="num">2: </span>'+cc(['Kick 伤害: ',sign(dec(ln(lvl(255),5,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(255),20,25),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(255),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[256]=['闪电网',
'掷出一个闪电网<br>电击你的敌人',
function(){return ''+'<span class="num">5: </span>'+'电刺数量: '+dec(6+lvl(256)/4+blvl(251)/3,0)+'<br>'
+'<span class="num">23: </span>'+cc(['持续时间: ',dec((ln(lvl(256),90,0))/25,1),' 秒 <br>'])
+'<span class="num">38: </span>'+'闪电伤害: '+dec(dec(dec((ln(lvl(256),2,0)<<7)*(100+((blvl(261)+blvl(271)+blvl(276))*11))/100,0)/256,0),0)+'-'+dec(dec(dec((ln(lvl(256),20,6,12,20,30,42)<<7)*(100+((blvl(261)+blvl(271)+blvl(276))*11))/100,0)/256,0),0)+' 每秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(256),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'闪电网 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">71: </span>'+'火焰爆震: +1 导弹每'+(3)+'技能等级<br>'
+'<span class="num">63: </span>'+'电能守护: +11% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'雷光守卫: +11% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'亡者守卫: +11% 闪电伤害每一技能等级<br>'
},2,1]
desc[257]=['刃之守护',
'掷出一个旋转的刀刃<br>在你和目标间巡逻',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(257),100,12))/25,1),' 秒 <br>'])
+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(257),6,3,4,5)<<8)/256,0)+'-'+dec((ln(lvl(257),10,3,4,5)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(3)+'/'+(8)+' 武器伤害<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(257),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[258]=['速度爆发',
'在一段时间内增加攻击和移动速度',
function(){return ''+'<span class="num">2: </span>'+cc(['攻击速度: ',sign(dec(dm(lvl(258),15,60),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['移动速度: ',sign(dec(dm(lvl(258),15,70),0)),' %<br>',])
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(258),3000,300))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(258),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[259]=['焰拳',
'<br>聚气性技能技能<br><br>连击可累加最后一击火焰伤害的程度<br>只能在装配爪类武器时使用<br>必须用龙系最后一击或普通攻击来释放',
function(){return ''+'<span class="num">24: </span>'+'聚气1级 - 火焰伤害: '+(dec(dec((ln(lvl(259),6,5,10,20,30,40)<<8)*(100+((blvl(280))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(259),10,5,11,22,33,44)<<8)*(100+((blvl(280))*12))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'聚气2级 - 火焰伤害半径: '+dec(4*2/3,1)+' 码<br>'
+'<span class="num">17: </span>'+'聚气3级 - 火焰伤害: '+dec((dec((ln(lvl(259),6,5,10,16,22,30)<<3)*(100+((blvl(280))*6))/100,0)*50/256)/2,0)*2+'-'+dec((dec((ln(lvl(259),10,5,10,17,24,32)<<3)*(100+((blvl(280))*6))/100,0)*50/256)/2,0)*2+' 每秒 <br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(259),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(259),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'焰拳 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'凤翼天翔: +12% 火焰伤害每一技能等级<br>'
},2,1]
desc[260]=['双龙爪',
'<br>最后一击<br><br>使用双爪将敌人撕成碎片<br>可以在双爪上加上聚气性技能加成的伤害',
function(){return ''+'<span class="num">2: </span>'+cc(['伤害: ',sign(dec(ln(lvl(260),50,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(260),40,25),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(260),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[261]=['电能守护',
'设置一个电能陷阱<br>发出闪电弹攻击其附近的敌人',
function(){return ''+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(261),2,0)<<7)*(100+((blvl(251)+blvl(271)+blvl(276))*6))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(261),14,6,8,12,14,16)<<7)*(100+((blvl(251)+blvl(271)+blvl(276))*6))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">3: </span>'+'射击 '+dec(5+blvl(271)/4,0)+' 次<br>'
+'<span class="num">3: </span>'+'释放 '+dec(ln(lvl(261),5,0)+blvl(256)/3,0)+' 闪电弹<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(261),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'电能守护 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">71: </span>'+'闪电网: +1 闪电弹每'+(3)+'技能等级<br>'
+'<span class="num">71: </span>'+'雷光守卫: +1 射击次数每'+(4)+'技能等级<br>'
+'<span class="num">63: </span>'+'火焰爆震: +6% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'雷光守卫: +6% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'亡者守卫: +6% 闪电伤害每一技能等级<br>'
},3,1]
desc[262]=['火焰复生',
'一个会释放火焰波浪的陷阱',
function(){return ''+'<span class="num">10: </span>'+'火焰伤害: '+(dec(dec((ln(lvl(262),5,2,3,5,7,9)<<8)*(100+((blvl(251)+blvl(272))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(262),10,2,3,6,8,10)<<8)*(100+((blvl(251)+blvl(272))*8))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(262),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'射击 '+dec(5,0)+' 次<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'火焰复生 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'火焰爆震: +8% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'复生狱火: +8% 火焰伤害每一技能等级<br>'
},3,2]
desc[263]=['武器格挡',
'被动 - 当装备双爪时增加武器格挡概率',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(263),20,65),0)+'% 概率<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[264]=['魔影斗篷',
'在一小段时间内使敌人瞎掉<br>并降低敌人的防御力',
function(){return ''+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(264),200,25))/25,1),' 秒 <br>'])
+'<span class="num">2: </span>'+cc(['防御提升: ',sign(dec(ln(lvl(264),10,3),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['敌人防御: ',sign(dec(-min(ln(lvl(264),15,3),95),0)),'%<br>',])
},
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(dec(dm(lvl(264),30,30),0)*2/3,1)+' 码<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(264),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[265]=['眼镜蛇攻击击',
'<br>聚气性技能技能<br><br>连击累加在最后一击时的生命和魔法偷取<br>必须用龙系最后一击或普通攻击来释放',
function(){return ''+'<span class="num">2: </span>'+cc(['聚气1级 - ',sign(dec(ln(lvl(265),40,5),0)),'% 生命偷取<br>',])
+'<span class="num">2: </span>'+cc(['聚气2级 - ',sign(dec(ln(lvl(265),40,5),0)),'% 生命和魔法偷取<br>',])
+'<span class="num">2: </span>'+cc(['聚气3级 - ',sign(dec(2*ln(lvl(265),40,5),0)),'% 生命和魔法偷取<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(265),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(265),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[266]=['刃之怒',
'掷出旋转刀刃<br>切碎你的敌人',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(266),8,3,5,8)<<8)/256,0)+'-'+dec((ln(lvl(266),10,3,5,8)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(3)+'/'+(4)+' 武器伤害<br>'
+'<span class="num">61: </span>'+'魔法消耗: '+dec((max(ln(lvl(266),8,1)<<5,0))/256,1)+' 每刀<br>'
},
function(){return ''+'<span class="num">5: </span>'+'最少魔法需求: '+dec(3,0)+'<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[267]=['消退',
'在一段时间提高元素抗性并减少诅咒时间',
function(){return ''+'<span class="num">3: </span>'+'减少诅咒持续时间 '+dec(dm(lvl(267),40,90),0)+'%<br>'
+'<span class="num">3: </span>'+'所有抗性: '+dec(dm(lvl(267),10,75),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(267),3000,300))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(267),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[268]=['影子战士',
'召唤一个自己的影子<br>她能够使用你正在使用的两种技能',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(376*(100+((lvl(268)-1)*15))/100+(0),0)+'<br>'
+'<span class="num">4: </span>'+cc(['命中率: +',lvl(268)*40,'<br>'])
+'<span class="num">2: </span>'+cc(['防御力加成: ',sign(dec((lvl(268)-1)*12,0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(268),54,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[269]=['闪电爪',
'<br>聚气性技能<br><br>连击可以累加在最后一击上的闪电伤害s<br>只能在装配爪类武器时使用<br>必须用龙系最后一击或普通攻击来释放',
function(){return ''+'<span class="num">24: </span>'+'聚气1级 - 闪电伤害: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),80,20,40,60,80,100)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'聚气2级 - 新星伤害: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),30,15,25,35,45,65)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'聚气3级 - 闪电球伤害: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),40,20,40,60,80,100)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(269),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(269),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'闪电爪 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'凤翼天翔: +8% 闪电伤害每一技能等级<br>'
},4,1]
desc[270]=['神龙摆尾',
'<br>最后一击<br><br>爆炸性的踢击并震退敌人<br>可以加上聚气性技能加成的伤害',
function(){return ''+'<span class="num">2: </span>'+cc(['火焰伤害: ',sign(dec(ln(lvl(270),50,10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(270),20,15),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(270),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'半径: '+dec(6*2/3,1)+' 码<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[271]=['雷光守卫',
'设置一个陷阱<br>发出闪电烧焦经过的敌人',
function(){return ''+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(271),1,0)<<8)*(100+((blvl(256)+blvl(261)+blvl(276))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(271),20,10,16,24,34,44)<<8)*(100+((blvl(256)+blvl(261)+blvl(276))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(271),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'射击 '+dec(10,0)+' 次<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'雷光守卫 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'闪电网: +12% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'电能守护: +12% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'亡者守卫: +12% 闪电伤害每一技能等级<br>'
},5,1]
desc[272]=['复生狱火',
'一个喷射火焰烧灼敌人的陷阱',
function(){return ''+'<span class="num">59: </span>'+'火焰伤害: '+dec(dec((ln(lvl(272),20,17,21,26,32,39)<<4)*(100+((blvl(251)+blvl(276))*10+blvl(262)*7))/100,0)*25/768,0)+'-'+dec(dec((ln(lvl(272),50,19,23,28,34,41)<<4)*(100+((blvl(251)+blvl(276))*10+blvl(262)*7))/100,0)*25/768,0)+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(272),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'射击 '+dec(10,0)+' 次<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'复生狱火 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">42: </span>'+'火焰复生: +'+(0)+'.'+(5)+' 码每一技能等级<br>'
+'<span class="num">63: </span>'+'火焰爆震: +10% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'火焰复生: +7% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'亡者守卫: +10% 火焰伤害每一技能等级<br>'
},5,2]
desc[273]=['心灵爆震',
'使用精神力量震晕一小队敌人<br>并使意志薄弱者倒戈攻击',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(273),10,2,5,8)<<8)/256,0)+'-'+dec((ln(lvl(273),20,2,5,8)<<8)/256,0)+'<br>'
+'<span class="num">12: </span>'+cc(['眩晕时间: ',dec((min(250,dec(ln(lvl(273),50,5),0)))/25,1),' 秒 <br>'])
+'<span class="num">3: </span>'+'转化概率: '+dec(dm(lvl(273),15,40),0)+'%<br>'
},
function(){return ''+'<span class="num">16: </span>'+'持续时间: '+(150)/25+'-'+(150+100)/25+' 秒 <br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(273),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[274]=['寒冰刃',
'<br>聚气性技能技能<br><br>连续攻击在最后一击中加入冰冷伤害<br>只能在装配爪类武器时使用<br>必须用龙系最后一击或普通攻击来释放',
function(){return ''+'<span class="num">24: </span>'+'聚气1级 - 冰冷伤害: '+(dec(dec((ln(lvl(274),15,8,10,20,30,40)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(274),35,8,10,22,32,42)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'聚气2级 - 冰冷伤害半径: '+dec(6*2/3,1)+' 码<br>'
+'<span class="num">12: </span>'+cc(['聚气3级 - 冰冻持续时间: ',dec((dec(ln(lvl(274),100,10),0))/25,1),' 秒 <br>'])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(274),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(274),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'寒冰刃 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'凤翼天翔: +8% 冰冷伤害每一技能等级<br>'
},5,1]
desc[275]=['飞龙在天',
'<br>最后一击<br><br>瞬间传送到敌人前释放踢击<br>可以加上聚气性技能加成的伤害',
function(){return ''+'<span class="num">2: </span>'+cc(['踢击伤害: ',sign(dec(ln(lvl(275),100,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(275),60,25),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(275),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[276]=['亡者守卫',
'这个陷阱被触发后将会释放出<br>闪电攻击附近的敌人或是引爆敌人的尸体',
function(){return ''+'<span class="num">37: </span>'+'半径: '+dec((10+1*(lvl(276)-1))/3,1)+' 码<br>'
+'<span class="num">10: </span>'+'闪电伤害: '+(dec(dec((ln(lvl(276),1,0)<<8)*(100+((blvl(271))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(276),50,8,14,22,28,34)<<8)*(100+((blvl(271))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(276),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">38: </span>'+'尸体爆炸伤害: '+dec(40,0)+'-'+dec(80,0)+'% 尸体生命<br>'
+'<span class="num">3: </span>'+'射击 '+dec(5+blvl(251)/3,0)+' 次<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'亡者守卫 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">71: </span>'+'火焰爆震: +1 射击每'+(3)+'技能等级<br>'
+'<span class="num">63: </span>'+'雷光守卫: +12% 闪电伤害每一技能等级<br>'
},6,1]
desc[277]=['刀刃之盾',
'释放几个刀刃围绕在刺客身旁<br>攻击任何靠得太近的敌人',
function(){return ''+'<span class="num">9: </span>'+'伤害: '+dec((ln(lvl(277),1,5,6,7)<<8)/256,0)+'-'+dec((ln(lvl(277),30,5,6,7)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(1)+'/'+(4)+' 武器伤害<br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(277),500,125))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(277),27,2)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[278]=['毒牙',
'在武器上增加毒素伤害',
function(){return ''+'<span class="num">14: </span>'+'毒素伤害: '+(dec((dec((ln(lvl(278),24,6,8,10,12,14)<<6),0))*(dec(ln(lvl(278),10,0),0))/256,0))+'-'+(dec((dec((ln(lvl(278),32,6,8,10,12,14)<<6),0))*(dec(ln(lvl(278),10,0),0))/256,0))+'<br>结束于 '+dec(dec(ln(lvl(278),10,0),0)/25,1)+' 秒 <br>'
+'<span class="num">12: </span>'+cc(['持续时间: ',dec((ln(lvl(278),3000,100))/25,1),' 秒 <br>'])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(278),12,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[279]=['影子大师',
'召唤一个强大的影子在你身边战斗',
function(){return ''+'<span class="num">13: </span>'+'生命: '+dec(376*(100+((lvl(279)-1)*15))/100+(0),0)+'<br>'
+'<span class="num">4: </span>'+cc(['命中率: +',lvl(279)*40,'<br>'])
+'<span class="num">2: </span>'+cc(['所有抗性: ',sign(dec(((110*(lvl(279)-1))/(lvl(279)+5)*(80-5))/100+5,0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(279),70,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[280]=['凤翼天翔',
'<br>聚气性技能技能<br><br>在最后一击上加上元素新星伤害<br>必须用龙系最后一击或普通攻击来释放',
function(){return ''+'<span class="num">62: </span>'+'聚气1级 - 陨石伤害: '+(dec(dec((ln(lvl(280),20,10,19,29,38,46)<<8)*(100+((blvl(259))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),40,10,21,33,42,50)<<8)*(100+((blvl(259))*10))/100,0)/256,0))+'<br>'
+'<span class="num">38: </span>'+'火焰爆炸伤害: '+dec(dec(dec((ln(lvl(280),6,5,10,16,22,30)<<3)*(100+((blvl(259))*6))/100,0)*75/256/3,0)*3,0)+'-'+dec(dec(dec((ln(lvl(280),10,5,10,17,24,32)<<3)*(100+((blvl(259))*6))/100,0)*75/256/3,0)*3,0)+' 每秒 <br>'
+'<span class="num">62: </span>'+'聚气2级 - 连锁闪电伤害: '+(dec(dec((ln(lvl(280),1,0)<<8)*(100+((blvl(269))*13))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),40,20,40,60,80,100)<<8)*(100+((blvl(269))*13))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'聚气3级 - 混沌冰弹伤害: '+(dec(dec((ln(lvl(280),16,4,8,12,20,28)<<8)*(100+((blvl(274))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),32,4,8,13,21,29)<<8)*(100+((blvl(274))*10))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['命中率: ',sign(dec(ln(lvl(280),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['魔法消耗: ',dec(max(ln(lvl(280),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'凤翼天翔 由以下技能得到额外加成:<br>'
+'</span>'+'<span class="num">63: </span>'+'焰拳: +10% 火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'焰拳: +6% 平均每秒火焰伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'闪电爪: +13% 闪电伤害每一技能等级<br>'
+'<span class="num">63: </span>'+'寒冰刃: +10% 冰冷伤害每一技能等级<br>'
},6,2]

tabs[1]=[66,71,72,76,77,81,82,86,87,91]
tabs[2]=[67,68,73,74,78,83,84,88,92,93]
tabs[3]=[69,70,75,79,80,85,89,90,94,95]
tabs[1].name=['����','����','']
tabs[2].name=['����','�͹�ϵ','����']
tabs[3].name=['�ٻ�','����','']
tabs.close=[1,3,1]
desc=[]
desc[66]=['�˺�����',
'����һ�����<br>���������ܵ��������˺�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(66),3,1),0)*2/3,1)+' ��<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(66),200,75))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(66),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�����: ',sign(dec(100,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[67]=['��',
'�ٻ�һ�����ݹ�������',
function(){return ''+'<span class="num">7: </span>'+cc(['��������:',dec(min(ln(lvl(67),2,1),24),0),'<br>'])
+'<span class="num">10: </span>'+'ħ���˺�: '+(dec(dec((ln(lvl(67),4,2,2,3,4,5)<<7)*(100+((blvl(78)+blvl(88)+blvl(84)+blvl(93))*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(67),8,2,3,4,5,6)<<7)*(100+((blvl(78)+blvl(88)+blvl(84)+blvl(93))*15))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(67),6,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��ǽ: +15% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ì: +15% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +15% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�ǻ�: +15% ħ���˺�ÿһ���ܵȼ�<br>'
},1,2]
desc[68]=['�Ƕ�',
'����һ����ת�İ׹ǻ���<br>�����ս�ս�˺�',
function(){return ''+'<span class="num">3: </span>'+'���� '+dec((ln(lvl(68),20,10)+(blvl(78)+blvl(88))*15),0)+' �˺�<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(68),11,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�Ƕ� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'��ǽ: +'+dec(15,0)+' �˺�����ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'����: +'+dec(15,0)+' �˺�����ÿһ���ܵȼ�<br>'
},1,3]
desc[69]=['��������',
'���� - �������ٻ������ã�<br>��ʦ�Լ��������������',
function(){return ''+'<span class="num">70: </span>'+'��������: +'+(lvl(69)*8)+'<br>'
+'<span class="num">70: </span>'+'�����˺�: +'+(lvl(69)*2)+'<br>'
+'<span class="num">70: </span>'+'���÷�ʦ����: +'+(lvl(69)*8)+'<br>'
+'<span class="num">33: </span>'+'���÷�ʦͶ���˺�<br>'
+'<span class="num">32: </span>'+'��������: +'+(lvl(69)*5)+'%<br>'
+'<span class="num">32: </span>'+'�����˺�: +'+(lvl(69)*10)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[70]=['���ø���',
'���ù���ʬ�壬����һ������սʿΪ��ս��',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(((lvl(70)<4)?0:((lvl(70)-3)*7)),0)),'%<br>',])
+'<span class="num">5: </span>'+'������: '+dec(5+(lvl(70)+lvl(69))*15,0)+'<br>'
+'<span class="num">5: </span>'+'����: '+dec(5+(lvl(70)+lvl(69))*15,0)+'<br>'
+'<span class="num">13: </span>'+'����: '+dec(21*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+'<br>����: '+dec(30*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+' (ج��)<br>����: '+dec(42*(100+((lvl(70)<4)?0:(50*(lvl(70)-3))))/100+(lvl(69)*8),0)+' (����)<br>'
+'<span class="num">36: </span>'+' ��������: '+dec((lvl(70)<4)?lvl(70):(2+lvl(70)/3),0)+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(70),6,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">34: </span>'+'�˺�: '+dec((1+lvl(69)*2+dec(dec((ln(lvl(70),0,0,1,2,3,4)<<8),0)/256,0))*(100+((lvl(70)<4)?0:((lvl(70)-3)*7)))/100,0)+-+dec((2+lvl(69)*2+dec(dec((ln(lvl(70),0,0,1,2,3,4)<<8),0)/256,0))*(100+((lvl(70)<4)?0:((lvl(70)-3)*7)))/100,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���ø��� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'��������<br>'
+'<span class="num">18: </span>'+'�ٻ��ֿ�<br>'
},1,3]
desc[71]=['΢������',
'����һ�����<br>�������ǵ���Ұ��Χ',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(71),4,1),0)*2/3,1)+' ��<br>'
+'<span class="num">31: </span>'+cc(['����ʱ��: ',dec((ln(lvl(71),175,50))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(71),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[72]=['����',
'����һ�����<br>����������ɵ��˺�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(72),9,1),0)*2/3,1)+' ��<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(72),350,60))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(72),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'Ŀ���˺�: '+dec(-33,0)+'%<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[73]=['�㶾ذ��',
'��ذ�׹��������Ӷ����˺�',
function(){return ''+'<span class="num">14: </span>'+'�����˺�: '+(dec((dec((ln(lvl(73),18,10,15,20,23,26)<<1)*(100+((blvl(83)+blvl(92))*20))/100,0))*(dec(ln(lvl(73),50,10),0))/256,0))+'-'+(dec((dec((ln(lvl(73),40,10,15,20,23,26)<<1)*(100+((blvl(83)+blvl(92))*20))/100,0))*(dec(ln(lvl(73),50,10),0))/256,0))+'<br>������ '+dec(dec(ln(lvl(73),50,10),0)/25,1)+' �� <br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(73),30,20),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(73),12,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�㶾ذ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +20% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�綾����: +20% �����˺�ÿһ���ܵȼ�<br>'
},2,1]
desc[74]=['ʬ�屬ը',
'ѡ��һ������ʬ��,<br>������ը�˺������ĵ���',
function(){return ''+'<span class="num">37: </span>'+'�뾶: '+dec((ln(lvl(74),8,1))/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(74),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">38: </span>'+'�˺�: '+dec(60,0)+'-'+dec(100,0)+'% ʬ������<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[75]=['ճ��ʯħ',
'�Ӵ���ٻ�һ��ʯħ<br>���������ս',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(100*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+'<br>����: '+dec(175*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+' (ج��)<br>����: '+dec(275*(100+((100+(35*(lvl(75)-1)))*(100+(lvl(79)*20)+(blvl(85)*5))/100-100))/100+(0),0)+' (����)<br>'
+'<span class="num">39: </span>'+'�˺�: '+dec((2)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((5)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+'<br>�˺�: '+dec((2)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((6)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+' (ج��)<br>�˺�: '+dec((3)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+-+dec((7)*(100+35*(lvl(75)-1)+(blvl(94)*6))/100,0)+' (����)<br>'
+'<span class="num">4: </span>'+cc(['������: +',lvl(75)*20,'<br>'])
+'<span class="num">3: </span>'+'��������: '+dec(dm(lvl(75),0,75),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(75),15,3)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">5: </span>'+'������: '+dec(40+(lvl(79)*25)+(lvl(75)*20),0)+'<br>'
+'<span class="num">5: </span>'+'����: '+dec(100+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ճ��ʯħ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'ʯħ����<br>'
+'<span class="num">18: </span>'+'�ٻ��ֿ�<br>'
+'<span class="num">63: </span>'+'��Ѫʯħ: +5% ����ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'����ʯħ: +'+dec(35,0)+' ����ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����ʯħ: +6% �˺�ÿһ���ܵȼ�<br>'
},2,2]
desc[76]=['��������',
'����һ�����,  <br>ʹ������ɵ��˺������ڱ���',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(76),200,25),0)+'% �˺�����<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(76),300,60))/25,1),' �� <br>'])
+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(76),7,0),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(76),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[77]=['�־�',
'����һ�����,<br>ʹ������־������',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(77),200,25))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(77),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(77),4,0),0)*2/3,1)+' ��<br>'
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[78]=['��ǽ',
'��ʬ��Ͳк�����һ������',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(19*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+'<br>����: '+dec(147*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+' (ج��)<br>����: '+dec(431*(100+((25*(lvl(78)-1))+((blvl(68)+blvl(88))*10)))/100+(0),0)+' (����)<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((600)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(78),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ǽ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�Ƕ�: +10% ����ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +10% ����ÿһ���ܵȼ�<br>'
},3,3]
desc[79]=['ʯħ����',
'��������ʯħ���ٶȺ�����',
function(){return ''+'<span class="num">2: </span>'+cc(['����: ',sign(dec(lvl(79)*20,0)),'%<br>',])
+'<span class="num">4: </span>'+cc(['������: +',(lvl(79)*25),'<br>'])
+'<span class="num">2: </span>'+cc(['�ƶ��ٶ�: ',sign(dec(dm(lvl(79),0,40),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[80]=['���÷�ʦ',
'���ù���ʬ��<br>�ٻ�һ�����÷�ʦΪ��ս��',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(61*(100+(0))/100+(lvl(69)*8),0)+'<br>����: '+dec(88*(100+(0))/100+(lvl(69)*8),0)+' (ج��)<br>����: '+dec(123*(100+(0))/100+(lvl(69)*8),0)+' (����)<br>'
+'<span class="num">5: </span>'+'����: '+dec((lvl(80)+lvl(69))*10,0)+'<br>'
+'<span class="num">36: </span>'+'���÷�ʦ���� '+dec((lvl(80)<4)?lvl(80):(2+lvl(80)/3),0)+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(80),8,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���÷�ʦ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'��������<br>'
+'<span class="num">18: </span>'+'�ٻ��ֿ�<br>'
},3,3]
desc[81]=['����',
'����һ������<br>ʹ�������޲��ع���',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(81),6,1),0)*2/3,1)+' ��<br>'
+'<span class="num">31: </span>'+cc(['����ʱ��: ',dec((ln(lvl(81),250,50))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(81),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[82]=['����͵ȡ',
'����һ�����<br>ʹ���Ǳ�����ʱ�������򹥻���',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(82),4,1),0)*2/3,1)+' ��<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(82),400,60))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(82),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'͵ȡ����: '+dec(ln(lvl(82),50,0),0)+'% �����˺�<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[83]=['����',
'��ѡ�еĹ���ʬ�����ɶ�������',
function(){return ''+'<span class="num">14: </span>'+'�����˺�: '+(dec((dec((ln(lvl(83),8,2,4,6,8,10)<<4)*(100+((blvl(73)+blvl(92))*15))/100,0))*(dec(ln(lvl(83),50,10),0))/256,0))+'-'+(dec((dec((ln(lvl(83),24,2,4,6,8,10)<<4)*(100+((blvl(73)+blvl(92))*15))/100,0))*(dec(ln(lvl(83),50,10),0))/256,0))+'<br>������ '+dec(dec(ln(lvl(83),50,10),0)/25,1)+' �� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(83),8,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�㶾ذ��: +15% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�綾����: +15% �����˺�ÿһ���ܵȼ�<br>'
},4,1]
desc[84]=['��ì',
'�ٻ�һ֦�����Ĺ�ì������ĵ���',
function(){return ''+'<span class="num">10: </span>'+'ħ���˺�: '+(dec(dec((ln(lvl(84),16,8,9,12,18,24)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(93))*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(84),24,8,9,13,19,25)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(93))*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(84),28,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ì �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��: +7% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ǽ: +7% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +7% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�ǻ�: +7% ħ���˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[85]=['��Ѫʯħ',
'����һ�����㹲��������ʯħ<br>��������͵ȡ���˺�',
function(){return ''+'<span class="num">3: </span>'+'�� '+dec(dm(lvl(85),75,150),0)+'% �˺�ת��Ϊ����<br>'
+'<span class="num">39: </span>'+'�˺�: '+dec((6)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((16)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+'<br>�˺�: '+dec((9)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((23)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+' (ج��)<br>�˺�: '+dec((10)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+-+dec((27)*(100+35*(lvl(85)-1)+(blvl(94)*6))/100,0)+' (����)<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(85),25,4)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(201*(100+((lvl(79)*20)))/100+(0),0)+'<br>����: '+dec(388*(100+((lvl(79)*20)))/100+(0),0)+' (ج��)<br>����: '+dec(637*(100+((lvl(79)*20)))/100+(0),0)+' (����)<br>'
+'<span class="num">5: </span>'+'������: '+dec(60+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'����: '+dec(80+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��Ѫʯħ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'ʯħ����<br>'
+'<span class="num">18: </span>'+'�ٻ��ֿ�<br>'
+'<span class="num">67: </span>'+'ճ��ʯħ: +'+dec(20,0)+' ����������ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'����ʯħ: +'+dec(35,0)+' ����ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����ʯħ: +6% �˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[86]=['����',
'����һ������ <br>ʹ����Ϊ��������Ĺ���Ŀ��<br>�����䲻�ܺ������������',
function(){return ''+'<span class="num">31: </span>'+cc(['����ʱ��: ',dec((ln(lvl(86),300,90))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(86),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(86),9,0),0)*2/3,1)+' ��<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[87]=['˥��',
'����һ����� <br>ʹ���Ǳ���������������������ɵ��˺�',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(87),100,15))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(87),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(87),6,0),0)*2/3,1)+' ��<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[88]=['����',
'����Ŀ����Χ������ʯ���Ǻ����ɵ�����',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(19*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+'<br>����: '+dec(147*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+' (ج��)<br>����: '+dec(431*(100+((25*(lvl(88)-1))+((blvl(68)+blvl(78))*8)))/100+(0),0)+' (����)<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((600)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(88),27,-1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�Ƕ�: +8% ����ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ǽ: +8% ����ÿһ���ܵȼ�<br>'
},5,3]
desc[89]=['�ٻ��ֿ�',
'���� - ���������ٻ��Ĺ����Ԫ�ؿ���',
function(){return ''+'<span class="num">2: </span>'+cc(['���п���: ',sign(dec(dm(lvl(89),20,75),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[90]=['����ʯħ',
'�ӽ����������ٻ�ʯħ<br>ʯħ������Ʒ������',
function(){return ''+'<span class="num">18: </span>'+'����<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(90),150,15),0)+'% �˺�����<br>'
+'<span class="num">4: </span>'+cc(['�����ӳ�: +',lvl(90)*35,'<br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(90),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(306*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+'<br>����: '+dec(595*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (ج��)<br>����: '+dec(980*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (����)<br>'
+'<span class="num">39: </span>'+'�˺�: '+dec((7)*(100+(blvl(94)*6))/100,0)+-+dec((19)*(100+(blvl(94)*6))/100,0)+'<br>�˺�: '+dec((11)*(100+(blvl(94)*6))/100,0)+-+dec((30)*(100+(blvl(94)*6))/100,0)+' (ج��)<br>�˺�: '+dec((12)*(100+(blvl(94)*6))/100,0)+-+dec((33)*(100+(blvl(94)*6))/100,0)+' (����)<br>'
+'<span class="num">5: </span>'+'������: '+dec(80+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'����: '+dec(140+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����ʯħ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'ʯħ����<br>'
+'<span class="num">18: </span>'+'�ٻ��ֿ�<br>'
+'<span class="num">67: </span>'+'ճ��ʯħ: +'+dec(20,0)+' ����������ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��Ѫʯħ: +5% ����ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����ʯħ: +6% �˺�ÿһ���ܵȼ�<br>'
},5,2]
desc[91]=['���͵ֿ�',
'����һ������ʹ���ܵ������Ԫ���˺� <br>���͹���Ԫ�ؿ���<br>���͵ж���ҵ����Ԫ�ؿ���',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(91),7,1),0)*2/3,1)+' ��<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(91),500,50))/25,1),' �� <br>'])
+'<span class="num">3: </span>'+'���п���: '+dec(-dm(lvl(91),25,70),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(91),22,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[92]=['�綾����',
'����һ���綾�����ǹ⻷',
function(){return ''+'<span class="num">14: </span>'+'�����˺�: '+(dec((dec((ln(lvl(92),14,4,5,8,12,14)<<4)*(100+((blvl(73)+blvl(83))*10))/100,0))*(dec(ln(lvl(92),50,0),0))/256,0))+'-'+(dec((dec((ln(lvl(92),25,4,5,8,12,14)<<4)*(100+((blvl(73)+blvl(83))*10))/100,0))*(dec(ln(lvl(92),50,0),0))/256,0))+'<br>������ '+dec(dec(ln(lvl(92),50,0),0)/25,1)+' �� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(92),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�綾���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�㶾ذ��: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +10% �����˺�ÿһ���ܵȼ�<br>'
},6,1]
desc[93]=['�ǻ�',
'�ͷ�һ�����ڸ��������<br>������ָ����Ŀ����Զ�ѡ���Ŀ��',
function(){return ''+'<span class="num">10: </span>'+'ħ���˺�: '+(dec(dec((ln(lvl(93),20,16,17,18,19,20)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(84))*6))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(93),30,17,18,19,20,21)<<8)*(100+((blvl(78)+blvl(88)+blvl(67)+blvl(84))*6))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(93),24,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�ǻ� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��: +6% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ǽ: +6% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ì: +6% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +6% ħ���˺�ÿһ���ܵȼ�<br>'
},6,2]
desc[94]=['����ʯħ',
'����һ������ʯħ<br>���û����˺�����������',
function(){return ''+'<span class="num">3: </span>'+'���� '+dec(dm(lvl(94),25,100),0)+'% �����˺�<br>'
+'<span class="num">41: </span>'+'�˺�: '+dec((10)*(100+0)/100,0)+-+dec((27)*(100+0)/100,0)+'<br>�˺�: '+dec((15)*(100+0)/100,0)+-+dec((39)*(100+0)/100,0)+' (ج��)<br>�˺�: '+dec((18)*(100+0)/100,0)+-+dec((47)*(100+0)/100,0)+' (����)<br>'+'�����˺�: '+(dec(dec((ln(lvl(94),10,9,10,11,12,13)<<8),0)/256,0)+dec(dec((ln(ln(lvl(94),8,1),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0)*6)+'-'+(dec(dec((ln(lvl(94),27,10,11,12,13,14)<<8),0)/256,0)+dec(dec((ln(ln(lvl(94),8,1),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0)*6)+'<br>'
+'<span class="num">35: </span>'+'ʥ�� '+(dec(dec((ln(ln(lvl(94),8,1),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0))+'-'+(dec(dec((ln(ln(lvl(94),8,1),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(94),50,10)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(328*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+'<br>����: '+dec(643*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (ج��)<br>����: '+dec(1063*(100+((lvl(79)*20)+(blvl(85)*5)))/100+(0),0)+' (����)<br>'
+'<span class="num">5: </span>'+'������: '+dec(120+(lvl(79)*25)+blvl(75)*20,0)+'<br>'
+'<span class="num">5: </span>'+'����: '+dec(200+lvl(90)*35,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����ʯħ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'ʯħ����<br>'
+'<span class="num">18: </span>'+'�ٻ��ֿ�<br>'
+'<span class="num">67: </span>'+'ճ��ʯħ: +'+dec(20,0)+' ����������ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��Ѫʯħ: +5% ����ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'����ʯħ: +'+dec(35,0)+' ����ÿһ���ܵȼ�<br>'
},6,2]
desc[95]=['����',
'��һ�����︴��<br>����Ϊ���ս',
function(){return ''+'<span class="num">5: </span>'+'������: '+dec(lvl(95),0)+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(95),45,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(95),4500,0))/25,1),' �� <br>'])
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(200+lvl(69)*5,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(lvl(69)*10,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'��������<br>'
+'<span class="num">18: </span>'+'�ٻ��ֿ�<br>'
},6,3]

tabs[1]=[221,222,226,227,231,236,237,241,246,247]
tabs[2]=[223,224,228,232,233,238,239,242,243,248]
tabs[3]=[225,229,230,234,235,240,244,245,249,250]
tabs[1].name=['�ٻ�','����','']
tabs[2].name=['����','����','']
tabs[3].name=['Ԫ��','����','']
tabs.close=[3,3,3]
desc=[]
desc[221]=['��ѻ',
'�ٻ���ѻ��ʳ���˵��۾�',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(221),2,1)<<8)/256,0)+'-'+dec((ln(lvl(221),4,1)<<8)/256,0)+'<br>'
+'<span class="num">7: </span>'+'��������: '+dec(ln(lvl(221),12,1),0)+'<br>'
+'<span class="num">5: </span>'+'����: '+dec(min(lvl(221),5),0)+'<br>'
+'<span class="num">1: </span>'+cc(['ÿ��ѻħ������: ',dec(max(ln(lvl(221),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[222]=['����',
'�ٻ�һ������<br>�ԽӴ��ĵ��˴�������',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(42*(100+((lvl(222)-1)*25))/100+(0),0)+-+dec(58*(100+((lvl(222)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">14: </span>'+'�����˺�: '+(dec((dec(ln(lvl(222),12,7,12,15,17,19),0))*(dec(ln(lvl(222),100,0),0))/256,0))+'-'+(dec((dec(ln(lvl(222),16,7,12,15,17,19),0))*(dec(ln(lvl(222),100,0),0))/256,0))+'<br>������ '+dec(dec(ln(lvl(222),100,0),0)/25,1)+' �� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(222),8,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[223]=['���˱仯',
'���γ�����',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(223),50,15),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�����ٶ�: ',sign(dec(dm(lvl(223),10,80),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(223),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(25+ln(lvl(224),20,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�����ӳ�: ',sign(dec(25,0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((1000+ln(lvl(224),1000,500))/25,1),' �� <br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���˱仯 �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'������<br>'
},1,1]
desc[224]=['������',
'���� - ���ӱ�����˻���ܵ��������޺ͳ���ʱ��',
function(){return ''+'<span class="num">2: </span>'+cc(['�������: ',sign(dec(ln(lvl(224),20,5),0)),'%<br>',])
+'<span class="num">57: </span>'+'����ʱ��: +'+(ln(lvl(224),1000,500))/25+' �� <br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[225]=['��籩',
'�ͷſ񱩻������յ���',
function(){return ''+'<span class="num">27: </span>'+'ƽ�������˺�: '+(dec(dec((ln(lvl(225),3,3,5,7,14,21)<<2)*(100+((blvl(229)+blvl(234))*23))/100,0)*75/256,0))+'-'+(dec(dec((ln(lvl(225),6,3,6,8,15,23)<<2)*(100+((blvl(229)+blvl(234))*23))/100,0)*75/256,0))+' ÿ�� <br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(225),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��籩 �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�۽�����: +23% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ɽ��: +23% �����˺�ÿһ���ܵȼ�<br>'
},1,1]
desc[226]=['��ľ����',
'�ٻ�����Ϊ��Ͷ�����������',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(56*(100+((lvl(226)-1)*30))/100+(0),0)+-+dec(64*(100+((lvl(226)-1)*30))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(ln(lvl(226),30,5),0)),'%<br>',])
+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(226),30,2),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(226),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[227]=['�ٻ�����',
'�ٻ�һֻ������������<br>��������ս��',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(227),2,1,2,4,5,8)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(227),6,1,2,4,5,8)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">5: </span>'+'����: '+dec(min(lvl(227),5),0)+'<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(227),50,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(ln(lvl(227),50,10),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(227),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">13: </span>'+'����: '+dec(60*(100+((lvl(237)>0)?ln(lvl(237),50,25):0))/100+(0),0)+-+dec(82*(100+((lvl(237)>0)?ln(lvl(237),50,25):0))/100+(0),0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�ٻ����� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">25: </span>'+'�ٻ�����<br>'
+'<span class="num">25: </span>'+'�ٻ�����<br>'
},2,2]
desc[228]=['���˱仯',
'���γ�����',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(228),50,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(ln(lvl(228),25,5),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(228),15,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(50+ln(lvl(224),20,5),0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((1000+ln(lvl(224),1000,500))/25,1),' �� <br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���˱仯 �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'������<br>'
},2,3]
desc[229]=['�۽�����',
'����޴����һ��˵���',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(229),6,4,7,10,13,16)<<8)*(100+blvl(244)*10)/25600,0)+'-'+dec((ln(lvl(229),12,5,8,11,14,17)<<8)*(100+blvl(244)*10)/25600,0)+'<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(229),6,4,7,10,13,16)<<8)*(100+(blvl(225)*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(229),12,5,8,11,14,17)<<8)*(100+(blvl(225)*8))/100,0)/256,0))+'<br>'
+'<span class="num">22: </span>'+'ƽ�������˺�: '+dec(dec((ln(lvl(229),10,6,7,8,9,10)<<2)*(100+(blvl(225)*8))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(229),14,6,7,8,9,10)<<2)*(100+(blvl(225)*8))/100,0)*25/256,0)*3+' ÿ�� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(229),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�۽����� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��ɽ: +10% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��籩: +8% �����˺�ÿһ���ܵȼ�<br>'
},2,1]
desc[230]=['���ط籩',
'�����˪�������',
function(){return ''+'<span class="num">26: </span>'+'ƽ�������˺�: '+(dec(dec((ln(lvl(230),21,16,18,20,24,29)<<2)*(100+((blvl(235)+blvl(250))*15))/100,0)/10.24,0))+'-'+(dec(dec((ln(lvl(230),40,16,19,21,25,31)<<2)*(100+((blvl(235)+blvl(250))*15))/100,0)/10.24,0))+' ÿ�� <br>'
+'<span class="num">11: </span>'+cc(['����ʱ��: ',dec(dec(ln(lvl(230),100,15),0)/25,1),' �� <br>'])
+'<span class="num">19: </span>'+'���: '+dec(dec(ln(lvl(230),35,2)/4,0)*2/3,1)+' ��<br>'
+'<span class="num">3: </span>'+'ħ������: '+dec(dec(max(ln(lvl(230),24,1)<<2,0)/20.48,0),0)+' ÿ�� <br>'
},
function(){return ''+'<span class="num">5: </span>'+'��Сħ������: '+dec(4,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���ط籩 �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +15% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'쫷�װ��: +15% �����˺�ÿһ���ܵȼ�<br>'
},2,3]
desc[231]=['ʳ����',
'�ٻ�һ��������ʳ���˵�ʬ��<br>�������������',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(80*(100+((lvl(231)-1)*25))/100+(0),0)+-+dec(110*(100+((lvl(231)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">3: </span>'+'����: '+dec(dm(lvl(231),3,12),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(231),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[232]=['Ұ�Կ�',
'������˺�ӱ������ĵ�������͵ȡ����',
function(){return ''+'<span class="num">52: </span>'+'�ƶ��ٶ�: +'+dec(19,0)+'-'+dec(((110*(3+lvl(232)/2))*(70-10))/(100*((3+lvl(232)/2)+6))+10,0)+'%<br>'
+'<span class="num">52: </span>'+'����͵ȡ: +'+dec(4,0)+'-'+dec(4*lvl(232)+8,0)+'%<br>'
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(232),50,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(232),20,10),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(232),3,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((500)/25,1),' �� <br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[233]=['���',
'���������ʱ��ͣ��鳻�����<br>��ɶ�����˺�',
function(){return ''+'<span class="num">12: </span>'+cc(['��ѣʱ��: ',dec((dm(lvl(233),10,100))/25,1),' �� <br>'])
+'<span class="num">52: </span>'+'�˺�: +'+dec(20,0)+'-'+dec(20*(lvl(233)/2+3),0)+'%<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(233),20,10),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(233),3,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((500)/25,1),' �� <br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[234]=['��ɽ��',
'�ڵ����·ſ���һ����ɽ����<br>�ѵ����ճɻҽ�',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(234),15,6,12,16,18,22)<<8)*(100+((blvl(225)+blvl(244))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(234),25,6,12,16,19,23)<<8)*(100+((blvl(225)+blvl(244))*12))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['����ʱ��: ',dec((ln(lvl(234),80,0))/25,1),' �� <br>'])
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(234),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ɽ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��籩: +12% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ɽ: +12% �����˺�ÿһ���ܵȼ�<br>'
},3,1]
desc[235]=['쫷�װ��',
'���������ܻ𡢱������˺�',
function(){return ''+'<span class="num">3: </span>'+'���� '+dec((ln(lvl(235),40,12)*(100+(blvl(240)+blvl(245)+blvl(250))*7)/100),0)+' �˺�<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(235),5,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'쫷�װ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'쫷�: +7% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�����: +7% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +7% �˺�ÿһ���ܵȼ�<br>'
},3,3]
desc[236]=['���֮��',
'�ٻ�һֻ������������Ͷ��ѵ��˺���������',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(128*(100+((lvl(236)-1)*25))/100+(0),0)+-+dec(144*(100+((lvl(236)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(236),20,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(236),25,7),0)),'%<br>',])
+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(236),30,2),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(236),20,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[237]=['�ٻ�����',
'�ٻ�һֻ������ʳʬ���������˺�',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(98*(100+(ln(lvl(237),50,25)))/100+(0),0)+-+dec(130*(100+(ln(lvl(237),50,25)))/100+(0),0)+'<br>'
+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(237),7,2,3,6,8,11)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(237),12,2,3,6,9,13)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">5: </span>'+'����: '+dec(min(lvl(237),3),0)+'<br>'
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(ln(lvl(237),50,25),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(237),20,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(227),50,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(ln(lvl(227),50,10),0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�ٻ����� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">25: </span>'+'�ٻ�����<br>'
+'<span class="num">25: </span>'+'�ٻ�����<br>'
},4,2]
desc[238]=['��Ȯ��',
'����Ϊ����ʱ˺ҧ���˵�ͬʱ<br>��ɼ����˺�����������������',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(238),50,7),0)),'%<br>',])
+'<span class="num">14: </span>'+'�����˺�: '+(dec((dec((ln(lvl(238),6,4,5,7,11,16)<<3)*(100+((blvl(222))*18))/100,0))*(dec(ln(lvl(238),100,10),0))/256,0))+'-'+(dec((dec((ln(lvl(238),14,4,5,7,11,16)<<3)*(100+((blvl(222))*18))/100,0))*(dec(ln(lvl(238),100,10),0))/256,0))+'<br>������ '+dec(dec(ln(lvl(238),100,10),0)/25,1)+' �� <br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(238),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��Ȯ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +18% �����˺�ÿһ���ܵȼ�<br>'
},4,1]
desc[239]=['��צ',
'��������˻�����ʱ<br>鳻�����ʱ��������צ����',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(239),15,8,12,20,24,30)<<8)*(100+((blvl(225)+blvl(229)+blvl(244)+blvl(234))*22))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(239),20,8,12,22,26,34)<<8)*(100+((blvl(225)+blvl(229)+blvl(244)+blvl(234))*22))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(239),50,15),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(239),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��צ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��籩: +22% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�۽�����: +22% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ɽ��: +22% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ɽ: +22% �����˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[240]=['쫷�',
'�ͷż���С������·���ĵ�����ѣ������',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(240),12,4,7,10,13,16)<<7)*(100+(blvl(245)+blvl(250))*10)/25600,0)+'-'+dec((ln(lvl(240),16,4,7,11,14,17)<<7)*(100+(blvl(245)+blvl(250))*10)/25600,0)+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['��ѣʱ��: ',dec((10)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(240),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'쫷� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�����: +10% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +10% �˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[241]=['̫����',
'�ٻ�һ��������ʳʬ�����������ħ��',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(138*(100+((lvl(241)-1)*20))/100+(0),0)+-+dec(192*(100+((lvl(241)-1)*20))/100+(0),0)+'<br>'
+'<span class="num">3: </span>'+'ħ���ָ�����: '+dec(dm(lvl(241),1,8),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(241),14,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[242]=['����',
'������Ϊ���˻�����ʱ<br>˺ҧ����͵ȡ������ħ��',
function(){return ''+'<span class="num">3: </span>'+'����͵ȡ: '+dec(dm(lvl(242),50,200),0)+'%<br>'
+'<span class="num">3: </span>'+'ħ��͵ȡ: '+dec(dm(lvl(242),50,200),0)+'%<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(242),50,10),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(242),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'�˺�: '+dec(-75,0)+'%<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[243]=['��',
'�����Ϊ����ʱ<br>����һ�������ε���',
function(){return ''+'<span class="num">12: </span>'+cc(['��ѣʱ��: ',dec((ln(lvl(243),40,15))/25,1),' �� <br>'])
+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(243),10,3,5,7)<<8)/256,0)+'-'+dec((ln(lvl(243),20,3,5,7)<<8)/256,0)+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(243),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[244]=['��ɽ',
'�ٻ�һ����ɽ�������ͻ�����������䵽��������',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(244),8,2,4,6,8,10)<<8)*(100+blvl(229)*12)/25600,0)+'-'+dec((ln(lvl(244),10,2,4,6,8,10)<<8)*(100+blvl(229)*12)/25600,0)+'<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(244),8,2,4,6,8,11)<<8)*(100+((blvl(234)+blvl(249))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(244),10,2,4,6,8,13)<<8)*(100+((blvl(234)+blvl(249))*12))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(244),25,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ɽ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�۽�����: +12% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ɽ��: +12% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'ĩ��ս��: +12% �����˺�ÿһ���ܵȼ�<br>'
},5,1]
desc[245]=['�����',
'����һ�������������',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(245),25,8,14,20,24,28)<<8)*(100+(blvl(235)+blvl(240)+blvl(250))*9)/25600,0)+'-'+dec((ln(lvl(245),35,8,15,21,25,29)<<8)*(100+(blvl(235)+blvl(240)+blvl(250))*9)/25600,0)+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(245),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'쫷�װ��: +9% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'쫷�: +9% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +9% �˺�ÿһ���ܵȼ�<br>'
},5,2]
desc[246]=['����',
'�ٻ����޽���Ͷ����ܵ����˺������ص���',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(200*(100+((lvl(246)-1)*25))/100+(0),0)+-+dec(226*(100+((lvl(246)-1)*25))/100+(0),0)+'<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(246),50,20),0)+'% �˺�����<br>'
+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(246),30,2),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(246),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[247]=['�ٻ�����',
'�ٻ�һֻ���͵Ĵ����',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(247),30,10,15,20,26,30)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'-'+dec((ln(lvl(247),60,10,15,20,26,30)<<8)*(100+ln(lvl(247),25,10))/25600,0)+'<br>'
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(247),25,10),0)),'%<br>',])
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(247),40,0)<<8,1<<8)/256,1),'<br>'])
+'<span class="num">13: </span>'+'����: '+dec(550*(100+(ln(lvl(237),50,25)))/100+(0),0)+-+dec(750*(100+(ln(lvl(237),50,25)))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(227),50,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(ln(lvl(227),50,10),0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�ٻ����� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">25: </span>'+'�ٻ�����<br>'
+'<span class="num">25: </span>'+'�ٻ�����<br>'
},6,2]
desc[248]=['��ŭ',
'������Ϊ����ʱ<br>���Թ�����������ĵ���<br>���߹�����ε�������',
function(){return ''+'<span class="num">7: </span>'+'�������� '+dec(min((2+lvl(248)-1),5),0)+'<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(248),50,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(248),100,17),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(248),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[249]=['ĩ��ս��',
'����һ����������𸽽��ĵ���',
function(){return ''+'<span class="num">22: </span>'+'ƽ�������˺�: '+dec(dec((ln(lvl(249),10,6,7,8,9,10)<<2)*(100+((blvl(225)+blvl(229)+blvl(244))*7))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(249),14,6,7,8,9,10)<<2)*(100+((blvl(225)+blvl(229)+blvl(244))*7))/100,0)*25/256,0)*3+' ÿ�� <br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(249),25,15,20,25,31,38)<<8)*(100+((blvl(225)+blvl(229)+blvl(244))*14))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(249),75,16,22,27,34,40)<<8)*(100+((blvl(225)+blvl(229)+blvl(244))*14))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(249),250,0)+blvl(234)*50)/25,1),' �� <br>'])
+'<span class="num">19: </span>'+'�뾶: '+dec(8*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(249),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ĩ��ս�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'��ɽ��: +'+dec(2,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��籩: +14% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�۽�����: +14% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ɽ: +14% �����˺�ÿһ���ܵȼ�<br>'
},6,1]
desc[250]=['����',
'����һ��������˺�鸽���ĵ���',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(250),25,7,10,12,14,16)<<8)*(100+((blvl(240)+blvl(245))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(250),50,7,10,12,14,16)<<8)*(100+((blvl(240)+blvl(245))*9))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(250),250,0)+blvl(235)*50)/25,1),' �� <br>'])
+'<span class="num">19: </span>'+'�뾶: '+dec(9*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(250),30,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'쫷�װ��: +'+dec(2,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'쫷�: +9% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�����: +9% �˺�ÿһ���ܵȼ�<br>'
},6,2]

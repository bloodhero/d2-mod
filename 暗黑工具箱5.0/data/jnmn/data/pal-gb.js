tabs[1]=[96,97,101,106,107,111,112,116,117,121]
tabs[2]=[98,102,103,108,113,114,118,119,122,123]
tabs[3]=[99,100,104,105,109,110,115,120,124,125]
tabs[1].name=['��','����','']
tabs[2].name=['����','����','']
tabs[3].name=['����','����','']
tabs.close=[1,2,1]
desc=[]
desc[96]=['����',
'������Ϊ���������˺���׼ȷ��',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(96),20,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(96),180,15)+blvl(124)*15+blvl(122)*5,0)),'%<br>',])
},
function(){return ''+'<span class="num">68: </span>'+(8)+'% �����˺�<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +15% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +5% �˺�ÿһ���ܵȼ�<br>'
},1,1]
desc[97]=['�ػ�',
'�ö��ƴ������<br>ʹ����ݻ���',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec((lvl(97)*15),0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['ѣ��ʱ��: ',dec((min(250,ln(lvl(97),15,5)))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(97),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[98]=['����',
'����ʱ��������Ͷ��ѵĹ����˺�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(98),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(98),40,10),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[99]=['��',
'����ʱ, �����ػָ���Ͷ��ѵ�����',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(99),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">4: </span>'+cc(['����: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(99),16,3)<<4,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[100]=['����ֿ�',
'����ʱ, ������Ͷ����ܵ��Ļ����˺�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(100),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['����ֿ�: ',sign(dec(dm(lvl(100),35,150),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[101]=['ʥ�ⵯ',
'������ʥ�ⵯ��������ĵ���<br>���������ͬ����',
function(){return ''+'<span class="num">10: </span>'+'ħ���˺�: '+(dec(dec((ln(lvl(101),8,8,10,13,16,20)<<8)*(100+((blvl(112)+blvl(121))*50))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(101),16,8,11,15,18,23)<<8)*(100+((blvl(112)+blvl(121))*50))/100,0)/256,0))+'<br>'
+'<span class="num">47: </span>'+'����: '+dec(ln(lvl(101),1,2)*(100+blvl(99)*15)/100,0)+'-'+dec(ln(lvl(101),6,4)*(100+blvl(99)*15)/100,0)+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(101),32,1)<<4,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ʥ�ⵯ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'ף��֮�: +50% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����֮ȭ: +50% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��: +15% �����ָ�ÿһ���ܵȼ�<br>'
},2,2]
desc[102]=['ʥ��',
'����ʱ, �����Եط��������˺���Χ�ĵ���',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(102),6,1),0)*2/3,1)+' ��<br>'
+'<span class="num">38: </span>'+'�����˺�: '+dec(dec((ln(lvl(102),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)*6/256,0)+'-'+dec(dec((ln(lvl(102),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)*6/256,0)+' �ڹ�����<br>'
+'<span class="num">43: </span>'+'�����˺�: '+dec(dec((ln(lvl(102),2,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,1)+'-'+dec(dec((ln(lvl(102),6,1,2,3,5,7)<<7)*(100+(blvl(100)*18+blvl(125)*6))/100,0)/256,1)+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ʥ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����ֿ�: +18% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +6% �����˺�ÿһ���ܵȼ�<br>'
},2,2]
desc[103]=['����',
'����ʱ, ���������˵��˺�������ȥ',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(103),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">7: </span>'+dec(ln(lvl(103),250,40),0)+'% �˺�����<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[104]=['����',
'����ʱ, ������Ͷ��ѵķ����ȼ�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(104),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['�����ӳ�: ',sign(dec(ln(lvl(104),70,10),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[105]=['����ֿ�',
'����ʱ, ������Ͷ����ܵ��ı����˺�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(105),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['����ֿ�: ',sign(dec(dm(lvl(105),35,150),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[106]=['�ȳ�',
'������һ�ι�������������',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec((lvl(106)*10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(((lvl(106)<5)?0:((lvl(106)-4)*6))+blvl(96)*12,0)),'%<br>',])
+'<span class="num">7: </span>'+dec(min((2+lvl(106)-1),5),0)+' �ι���<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(106),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�ȳ� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +12% �˺�ÿһ���ܵȼ�<br>'
},3,1]
desc[107]=['���',
'���ٳ��һ������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(107),100,25)+(blvl(115)+blvl(98))*20,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(107),50,15),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(107),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +20% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +20% �˺�ÿһ���ܵȼ�<br>'
},3,3]
desc[108]=['ף����׼',
'����ʱ, ������Ͷ��ѵ�������',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(108),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(108),75,15),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[109]=['����',
'����ʱ, ������Ͷ����ж��������ʱ��',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(109),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">3: </span>'+'����ʱ�� '+dec(dm(lvl(109),30,90),0)+'%<br>'
+'<span class="num">4: </span>'+cc(['����: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
},
function(){return ''+'<span class="num">67: </span>'+'��: +'+dec(dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),0)+' �����ָ�ÿ2�� <br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'��<br>'
},3,1]
desc[110]=['����ֿ�',
'����ʱ, ������Ͷ����ܵ��������˺�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(110),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['����ֿ�: ',sign(dec(dm(lvl(110),35,150),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[111]=['����',
'��ÿ�γɹ��Ĺ����м��ϻ𡢵�ͱ���Ԫ���˺�',
function(){return ''+'<span class="num">11: </span>'+cc(['����ʱ��: ',dec(dec(ln(lvl(111),30,15),0)/25,1),' �� <br>'])
+'<span class="num">2: </span>'+cc(['�����˺�: ',sign(dec(ln(lvl(111),70,6)+blvl(100)*10+blvl(125)*2,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�����˺�: ',sign(dec(ln(lvl(111),70,6)+blvl(105)*10+blvl(125)*2,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�����˺�: ',sign(dec(ln(lvl(111),70,6)+blvl(110)*10+blvl(125)*2,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(111),20,10),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(111),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����ֿ�: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����ֿ�: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����ֿ�: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +2% Ԫ���˺�ÿһ���ܵȼ�<br>'
},4,1]
desc[112]=['ף��֮�',
'�ٻ�һ����������<br>������ת�������<br>�Բ����ĵ������150%���˺�',
function(){return ''+'<span class="num">48: </span>'+'ħ���˺�: '+(dec(dec((ln(lvl(112),12,8,10,12,13,14)<<8)*(100+((blvl(115)+blvl(108))*14))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(112),16,8,10,12,13,14)<<8)*(100+((blvl(115)+blvl(108))*14))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(112),20,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ף��֮� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'ף����׼: +14% ħ���˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +14% ħ���˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[113]=['רע',
'����ʱ, �����˺������͹�������ϵĸ���',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(113),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">3: </span>'+'��ϸ��� '+dec(20,0)+'%<br>'
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(113),60,15),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[114]=['ʥ�ຮ��',
'����ʱ, ���������Ĺ���',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(114),6,1),0)*2/3,1)+' ��<br>'
+'<span class="num">38: </span>'+'�����˺�: '+dec(dec((ln(lvl(114),2,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)*5/256,0)+'-'+dec(dec((ln(lvl(114),3,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)*5/256,0)+' �ڹ�����<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(114),2,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(114),3,1,2,3,4,5)<<8)*(100+(blvl(105)*15+blvl(125)*7))/100,0)/256,0))+'<br>'
+'<span class="num">3: </span>'+'���˼��� '+dec(dm(lvl(114),25,60),0)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ʥ�ຮ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����ֿ�: +15% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +7% �����˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[115]=['����',
'����ʱ, ������Ͷ��ѵ��ƶ��ٶ�<br>����������ָ��ٶȼ����ֵ',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(115),16,3),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['�ƶ��ٶ�: ',sign(dec(dm(lvl(115),7,50),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�����ӳ�: ',sign(dec(ln(lvl(115),50,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�����ָ��ٶ�: ',sign(dec(ln(lvl(115),50,25),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[116]=['ת��',
'��Ч�Ĺ�����һ������ת��ħ��Ϊ����ս',
function(){return ''+'<span class="num">3: </span>'+'ת������: '+dec(dm(lvl(116),0,50),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(116),400,0))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(116),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[117]=['��ʥ����',
'����ʥ��������ǿ��Ļ���',
function(){return ''+'<span class="num">49: </span>'+'�ػ��˺�: +'+(dec((ln(lvl(117),3,2,3,4)<<8)*(100+(0))/25600,0))+'-'+(dec((ln(lvl(117),6,2,3,4)<<8)*(100+(0))/25600,0))+'<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(117),750,625))/25,1),' �� <br>'])
+'<span class="num">2: </span>'+cc(['�����ӳ�: ',sign(dec(ln(lvl(117),25,15)+blvl(104)*15,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�񵲳ɹ���: ',sign(dec(dm(lvl(117),10,40),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(117),35,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ʥ���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +15% ����ÿһ���ܵȼ�<br>'
},5,3]
desc[118]=['��ʥ���',
'����ʱ, �����Եض԰뾶�ڵĵ�����ɵ�ϵ�˺�<br>�ڹ��������������˺�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(118),6,1),0)*2/3,1)+' ��<br>'
+'<span class="num">38: </span>'+'�����˺�: '+dec(1,0)+'-'+dec(dec((ln(lvl(118),10,6,8,10,12,15)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)*6/256,0)+' �ڹ�����<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(118),1,0)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(118),10,6,8,10,12,15)<<8)*(100+(blvl(110)*12+blvl(125)*4))/100,0)/256,0))+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ʥ��� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����ֿ�: +12% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +4% �����˺�ÿһ���ܵȼ�<br>'
},5,2]
desc[119]=['�ӻ���',
'����ʱ, �˺������˲���ϵ����',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(119),5,1),0)*2/3,1)+' ��<br>'
+'<span class="num">67: </span>'+'�Բ���ϵ�˺�: +'+dec(ln(lvl(119),150,30),0)+' %<br>'
+'<span class="num">10: </span>'+'ħ���˺�: '+(dec(dec((ln(lvl(119),8,4,4,5,5,6)<<8)*(100+(blvl(109)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(119),16,4,5,6,6,7)<<8)*(100+(blvl(109)*7))/100,0)/256,0))+'<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�ӻ��� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +7% ħ���˺�ÿһ���ܵȼ�<br>'
},5,3]
desc[120]=['ڤ��',
'����ʱ, �����Ͷ��ѵ�ħ���ָ��ٶ�',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(120),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['ħ���ָ�����: ',sign(dec(ln(lvl(120),300,25),0)),'%<br>',])
+'<span class="num">4: </span>'+cc(['����: +',dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),'<br>'])
},
function(){return ''+'<span class="num">67: </span>'+'��: +'+dec(dec(dec((ln(lvl(99),2,1,1,2,2,3)<<8),0)/256,0),0)+' �����ָ�ÿ2�� <br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ڤ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'��<br>'
},5,1]
desc[121]=['����֮ȭ',
'ǿ�������繥��Ŀ��<br>���ͷ�ʥ�ⵯ���������ĵ���',
function(){return ''+'<span class="num">50: </span>'+'ʥ�ⵯ �˺�: '+(dec(dec((ln(lvl(121),40,6,10,16,32,48)<<8)*(100+(blvl(101)*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(121),50,6,10,16,32,48)<<8)*(100+(blvl(101)*15))/100,0)/256,0))+'<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(121),150,15,30,45,55,65)<<8)*(100+(blvl(118)*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(121),200,15,30,45,55,65)<<8)*(100+(blvl(118)*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(121),25,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����֮ȭ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'ʥ�ⵯ: +15% ʥ�ⵯ �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ʥ���: +7% �����˺�ÿһ���ܵȼ�<br>'
},6,2]
desc[122]=['����',
'����ʱ, ������Ͷ��ѵĵĹ����ٶȡ��˺���������',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(122),11,1),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['�����˺�: ',sign(dec(ln(lvl(122),50,17)/2,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�����˺�: ',sign(dec(ln(lvl(122),50,17),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�����ٶ�: ',sign(dec(dm(lvl(122),10,40),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(122),40,5),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[123]=['����',
'����ʱ, ���͵��˵ķ�����Ԫ�ؿ���',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(123),20,0),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['����: ',sign(dec(-dm(lvl(123),40,100),0)),'%<br>',])
+'<span class="num">3: </span>'+'����: '+dec(-min(ln(lvl(123),30,5),150),0)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[124]=['����',
'����ʱ, ���Ծ�����ȥ���˵����<br>������������ħ��',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(124),16,0),0)*2/3,1)+' ��<br>'
+'<span class="num">3: </span>'+'���꼸��: '+dec(dm(lvl(124),10,100),0)+'%<br>'
+'<span class="num">3: </span>'+'����/ħ���ָ�: '+dec(ln(lvl(124),25,5),0)+' ��<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[125]=['����',
'����ʱ, ������Ͷ��ѵĻ𡢵�ͱ��Ŀ���',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(125),16,2),0)*2/3,1)+' ��<br>'
+'<span class="num">2: </span>'+cc(['��������: ',sign(dec(dm(lvl(125),50,120),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]

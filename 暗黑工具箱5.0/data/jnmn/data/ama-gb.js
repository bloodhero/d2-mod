tabs[1]=[6,7,11,12,16,21,22,26,27,31]
tabs[2]=[8,9,13,17,18,23,28,29,32,33]
tabs[3]=[10,14,15,19,20,24,25,30,34,35]
tabs[1].name=['����','ʮ�ֹ�','����']
tabs[2].name=['����','��ħ��','����']
tabs[3].name=['��ǹ','�ͳ�ì','����']
tabs.close=[3,2,1]
desc=[]
desc[6]=['ħ����',
'���һ����״ħ������<br>��������ɶ�����˺���<br>���Ҳ������ļ�֧��',
function(){return ''+'<span class="num">66: </span>'+'ת�� '+(1+(lvl(6)-1)*1)+'% �����˺�ΪԪ���˺�<br>'
+'<span class="num">8: </span>'+cc(['������: +',ln(lvl(6),10,9),'%<br>'])
+'<span class="num">9: </span>'+cc(['�˺�: +',dec((lvl(6)<<8)/256,0),'<br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(6),12,-1)<<5,0)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[7]=['�����',
'�ڼ�ʸ�򹭵��ϸ�����ħ�����棬<br>���ڴ��ʱ�����˻�����˺�',
function(){return ''+'<span class="num">66: </span>'+'ת�� '+(3+(lvl(7)-1)*2)+'% �����˺�ΪԪ���˺�<br>'
+'<span class="num">8: </span>'+cc(['������: +',ln(lvl(7),10,9),'%<br>'])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(7),1,2,3,6,12,24)<<8)*(100+((blvl(16))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(7),4,2,3,7,14,27)<<8)*(100+((blvl(16))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(7),24,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'���Ѽ�: +12% �����˺�ÿһ���ܵȼ�<br>'
},1,3]
desc[8]=['����',
'ʹ���﷢�Ⲣ�������ǵķ���',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(8),200,100))/25,1),' �� <br>'])
+'<span class="num">5: </span>'+'���˷���: '+dec(-dec(dec((ln(lvl(8),40,25,45,60,80,100)<<8),0)/256,0),0)+'<br>'
+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(8),20,0),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(8),10,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[9]=['�������',
'���� - ��Ĺ����и������˫���˺�',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(9),5,80),0)+'% ����<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[10]=['����',
'�ñ�ǹ��ì���������������������',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(10),10,9),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(10),-15,3),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(10),8,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">25: </span>'+'��ι���<br>'
},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[11]=['����',
'�ڼ�ʸ�򹭵������Ӷ���ı����˺��ͼ���Ч��<br>�����˺�ֻ���������ʱһ����˺�',
function(){return ''+'<span class="num">66: </span>'+'ת�� '+(3+(lvl(11)-1)*2)+'% �����˺�ΪԪ���˺�<br>'
+'<span class="num">8: </span>'+cc(['������: +',ln(lvl(11),10,9),'%<br>'])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(11),6,4,5,8,16,42)<<7)*(100+((blvl(21))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(11),8,4,5,9,17,44)<<7)*(100+((blvl(21))*12))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['����ʱ��: ',dec(dec(ln(lvl(11),100,30),0)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(11),28,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'������: +12% �����˺�ÿһ���ܵȼ�<br>'
},2,1]
desc[12]=['���ؼ�',
'��һ֦�ֳɶ�֦�����ħ����ļ�ʸ�򹭵�',
function(){return ''+'<span class="num">7: </span>'+dec(min(24,ln(lvl(12),2,1)),0)+' ֦<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(12),4,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' �����˺�<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[13]=['����',
'���� - ����վ����ս��״̬ʱ��ܽ�������������',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(13),10,65),0)+'% ����<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[14]=['����һ��',
'ʹ�ñ�ǹ��ì����ʱ���������˺�',
function(){return ''+'<span class="num">8: </span>'+cc(['������: +',ln(lvl(14),20,12),'%<br>'])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(14),1,0)<<8)*(100+((blvl(34)+blvl(20)+blvl(24)+blvl(35))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(14),16,18,36,54,72,90)<<8)*(100+((blvl(34)+blvl(20)+blvl(24)+blvl(35))*10))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(14),8,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����һ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'������: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����һ��: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���繥��: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����֮ŭ: +10% �����˺�ÿһ���ܵȼ�<br>'
},2,2]
desc[15]=['��ǹ',
'��ǹ��ħ��������¶�������',
function(){return ''+'<span class="num">14: </span>'+'�����˺�: '+(dec((dec(ln(lvl(15),32,16,32,48,64,96)*(100+((blvl(25))*12))/100,0))*(dec(ln(lvl(15),200,50),0))/256,0))+'-'+(dec((dec(ln(lvl(15),48,16,36,52,68,84)*(100+((blvl(25))*12))/100,0))*(dec(ln(lvl(15),200,50),0))/256,0))+'<br>������ '+dec(dec(ln(lvl(15),200,50),0)/25,1)+' �� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(15),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ǹ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'���߱�ǹ: +12% �����˺�ÿһ���ܵȼ�<br>'
},2,3]
desc[16]=['���Ѽ�',
'�ü�ʸ�򹭵����ѿ�<br>�����м�͸����ĵ���',
function(){return ''+'<span class="num">8: </span>'+cc(['������: +',ln(lvl(16),20,9),'%<br>'])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(16),2,5,7,9,12,20)<<8)*(100+((blvl(7))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(16),6,5,8,11,14,23)<<8)*(100+((blvl(7))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(16),10,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���Ѽ� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�����: +12% �����˺�ÿһ���ܵȼ�<br>'
},3,3]
desc[17]=['���ټ�',
'ʹ�����Ķ��ֳ��ָ���<br>������������������ٶ�',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(17),300,150))/25,1),' �� <br>'])
+'<span class="num">3: </span>'+'���������ٶ� '+dec(ln(lvl(17),33,0),0)+'%<br>'
+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(17),20,0),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(17),10,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[18]=['���',
'���� - ����վ����ս��״̬ʱ<br>���Զ�̹�����������',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(18),15,75),0)+'% ����<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[19]=['�̱�',
'���ɽ��������;ö��������˺�',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(19),300,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(19),100,25),0)),'%<br>',])
+'<span class="num">3: </span>'+'�����;ö���ʧ: '+dec(50-dm(lvl(19),0,30),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(19),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[20]=['������',
'�����ı�ǹ���������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(20),1,0)<<8)*(100+((blvl(34)+blvl(14)+blvl(24)+blvl(35))*3))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(20),40,12,18,28,48,88)<<8)*(100+((blvl(34)+blvl(14)+blvl(24)+blvl(35))*3))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(20),24,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' �����˺�<br>'
+'<span class="num">66: </span>'+'ת�� '+(100)+'% �����˺�ΪԪ���˺�<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'������ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����һ��: +3% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����һ��: +3% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���繥��: +3% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����֮ŭ: +3% �����˺�ÿһ���ܵȼ�<br>'
},3,3]
desc[21]=['������',
'�ڼ�ʸ�򹭵������ӱ����˺�<br>������ס��ĵ���',
function(){return ''+'<span class="num">8: </span>'+cc(['������: +',ln(lvl(21),20,9),'%<br>'])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(21),6,6,12,18,26,36)<<8)*(100+((blvl(11))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(21),10,6,13,19,27,38)<<8)*(100+((blvl(11))*8))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['����ʱ�� ',dec((dec(ln(lvl(21),50,5)*(100+((blvl(31))*5))/100,0))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(21),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'������ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����֮��: +5% ����ʱ��ÿһ���ܵȼ�<br>'
},4,1]
desc[22]=['�򵼼�',
'�ü�ʸ�򹭵��Զ�׷��Ŀ��<br>һ������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(22),0,5),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(22),32,-1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[23]=['����',
'���� - ���ӹ���������',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(23),35,10),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[24]=['����һ��',
'�ڱ�ǹ��ì���ӳ��ܵĹⵯ',
function(){return ''+'<span class="num">3: </span>'+'�ͷ� '+dec(3+lvl(24)/5,0)+' ���絯<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(24),1,0)<<8)*(100+((blvl(34)+blvl(20)+blvl(14)+blvl(35))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(24),30,12,16,20,24,28)<<8)*(100+((blvl(34)+blvl(20)+blvl(14)+blvl(35))*10))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(24),16,1)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����һ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����һ��: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���繥��: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����֮ŭ: +10% �����˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[25]=['���߱�ǹ',
'�������ı�ǹ�����綾������',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(25),30,9),0)),'%<br>',])
+'<span class="num">14: </span>'+'�����˺�: '+(dec((dec((ln(lvl(25),10,6,12,20,40,60)<<3)*(100+((blvl(15))*10))/100,0))*(dec(ln(lvl(25),75,10),0))/256,0))+'-'+(dec((dec((ln(lvl(25),16,6,12,20,40,60)<<3)*(100+((blvl(15))*10))/100,0))*(dec(ln(lvl(25),75,10),0))/256,0))+'<br>������ '+dec(dec(ln(lvl(25),75,10),0)/25,1)+' �� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(25),14,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���߱�ǹ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��ǹ: +10% �����˺�ÿһ���ܵȼ�<br>'
},4,3]
desc[26]=['�ں�',
'������ļ�ʸ�Զ���׼����<br>��������ĵ���',
function(){return ''+'<span class="num">3: </span>'+'����Ŀ���� '+dec(min(lvl(26)+4,10),0)+'<br>'
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec((lvl(26)*5),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(26),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">73: </span>'+(3)+'/'+(4)+' �����˺�<br>'
},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[27]=['����֮��',
'�ü�ʸ�򹭵�����ǿ�һ���ħ��<br>��ȼ��ǿ�ҵĻ���',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(27),30,9),0)),'%<br>',])
+'<span class="num">24: </span>'+'��ը�˺�: '+(dec(dec((ln(lvl(27),10,10,20,30,32,34)<<8)*(100+((blvl(16))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(27),20,10,20,30,32,34)<<8)*(100+((blvl(16))*10))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['�������ʱ��: ',dec((ln(lvl(27),75,0))/25,1),' �� <br>'])
+'<span class="num">22: </span>'+'ƽ�������˺�: '+dec(dec((ln(lvl(27),7,5)<<2)*(100+(blvl(7)*5))/100,0)*75/256,0)+'-'+dec(dec((ln(lvl(27),9,5)<<2)*(100+(blvl(7)*5))/100,0)*25/256,0)*3+' ÿ�� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(27),12,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����֮�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�����: +5% ƽ�������˺�ÿ�� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���Ѽ�: +10% �����˺�ÿһ���ܵȼ�<br>'
},5,3]
desc[28]=['�ն�',
'����һ������Ļ������Ի����',
function(){return ''+'<span class="num">2: </span>'+cc(['����: ',sign(dec(lvl(28)*10,0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(28),250,125))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(28),76,-3)<<6,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[29]=['�ӱ�',
'���� - �������ƶ�������<br>�Խ����Զ�̹����Ķ������',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(29),10,65),0)+'% ����<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,2]
desc[30]=['����',
'ͬʱ�������еĸ���Ŀ��',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(30),40,10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(30),70,10),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(30),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[31]=['����֮��',
'������ǿ�ļ�ʸ�򹭵�<br>���Զ���������',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(31),40,9),0)),'%<br>',])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(31),40,10,15,20,22,24)<<8)*(100+((blvl(11))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(31),50,10,15,20,22,24)<<8)*(100+((blvl(11))*12))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['����ʱ�� ',dec((dec(ln(lvl(31),50,0)*(100+((blvl(21))*5))/100,0))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(31),18,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(5*2/3,1)+' ��<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����֮�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +12% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +5% ����ʱ��ÿһ���ܵȼ�<br>'
},6,1]
desc[32]=['Ů����',
'�ٻ���һ��ǿ������Ů����Эͬ��ս',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(400*(100+(20*(lvl(32)-1)+blvl(28)*20))/100+(0),0)+-+dec(480*(100+(20*(lvl(32)-1)+blvl(28)*20))/100+(0),0)+'<br>'
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(25*(lvl(32)-1),0)),'%<br>',])
+'<span class="num">4: </span>'+cc(['������: +',(40*lvl(32)+40*blvl(23)),'<br>'])
+'<span class="num">2: </span>'+cc(['����: ',sign(dec((lvl(32)-1)*10,0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(32),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Ů���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�ն�: +20% ����ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'����: +'+dec(40,0)+' ����������ÿһ���ܵȼ�<br>'
+'<span class="num">25: </span>'+'˫�����<br>'
+'<span class="num">25: </span>'+'����<br>'
+'<span class="num">25: </span>'+'���<br>'
+'<span class="num">25: </span>'+'�ӱ�<br>'
},6,1]
desc[33]=['��͸',
'���� - ʹ����ѷսʿ�ķ�����<br>�м��ʴ�͸���еĵ���',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(33),10,100),0)+'% ����<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[34]=['���繥��',
'��ʹ�õı�ǹ��ì��������������������˺���<br>ͬʱ�ڻ���Ŀ���ʱ���ͷų���������',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(34),2,1),0)+' ��<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(34),1,0)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(35))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(34),25,10,15,20,25,30)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(35))*8))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(34),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���繥�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����һ��: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����һ��: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����֮ŭ: +8% �����˺�ÿһ���ܵȼ�<br>'
},6,2]
desc[35]=['����֮ŭ',
'��Ͷ�����ı�ǹ�ϼ�����ǿ�����������˺�����<br>��������Ŀ���ʱ���ͷų�����',
function(){return ''+'<span class="num">3: </span>'+'�ͷ� '+dec(ln(lvl(35),2,1),0)+' ������<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(35),1,0)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(34))*1))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(35),40,20,30,40,50)<<8)*(100+((blvl(24)+blvl(20)+blvl(14)+blvl(34))*1))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(35),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����֮ŭ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����һ��: +1% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +1% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����һ��: +1% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���繥��: +1% �����˺�ÿһ���ܵȼ�<br>'
},6,3]

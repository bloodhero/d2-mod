tabs[1]=[251,256,257,261,262,266,271,272,276,277]
tabs[2]=[252,253,258,263,264,267,268,273,278,279]
tabs[3]=[254,255,259,260,265,269,270,274,275,280]
tabs[1].name=['����','����','����']
tabs[2].name=['Ӱ��','ѵ��','����']
tabs[3].name=['��ѧ','����','����']
tabs.close=[2,3,1]
desc=[]
desc[251]=['���汬��',
'Ͷ������ը��<br>����ĵ���ը����Ƭ',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(251),6,3,8,20,38,58)<<7)*(100+((blvl(256)+blvl(276)+blvl(261)+blvl(271)+blvl(262)+blvl(272))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(251),8,5,11,24,44,66)<<7)*(100+((blvl(256)+blvl(276)+blvl(261)+blvl(271)+blvl(262)+blvl(272))*9))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(251),24,1)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(5*2/3,1)+' ��<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���汬�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'������: +9% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�����ػ�: +9% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���渴��: +9% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�׹�����: +9% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��������: +9% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��������: +9% �����˺�ÿһ���ܵȼ�<br>'
},1,2]
desc[252]=['��צ����',
'���� - ��ǿ���צ��������ʹ�ü���',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(252),35,4),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(252),30,10),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(252),0,25))+'% ����һ����ɱ<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[253]=['����ս��',
'�þ�����������һ������ս׷<br>�����������ĵ���',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(253),2,2,3,4,5,6)<<7)/256,0)+'-'+dec((ln(lvl(253),6,3,4,5,6,7)<<7)/256,0)+'<br>'
+'<span class="num">10: </span>'+'ħ���˺�: '+(dec(dec((ln(lvl(253),2,2,3,4,5,6)<<7),0)/256,0))+'-'+(dec(dec((ln(lvl(253),6,3,4,5,6,7)<<7),0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(253),16,1)<<6,1<<8)/256,2),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[254]=['����',
'<br>�����Լ��ܼ���<br><br>�������ۼ����һ������ɵ��˺�<br>��������ϵ���һ������ͨ�������ͷ�',
function(){return ''+'<span class="num">2: </span>'+cc(['����1�� - ',sign(dec(ln(lvl(254),100,20),0)),'% �˺�<br>',])
+'<span class="num">2: </span>'+cc(['����2�� - ',sign(dec(2*ln(lvl(254),100,20),0)),'% �˺�<br>',])
+'<span class="num">2: </span>'+cc(['����3�� - ',sign(dec(3*ln(lvl(254),100,20),0)),'% �˺�<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(254),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(254),1,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[255]=['��צ',
'<br>���һ��<br><br>�ѵ����߿�<br>���Լ��Ͼ����Լ��ܼӳɵ��˺�',
function(){return ''+'<span class="num">36: </span>'+dec(lvl(255)/6+1,0)+' Kicks<br>'
+'<span class="num">2: </span>'+cc(['Kick �˺�: ',sign(dec(ln(lvl(255),5,7),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(255),20,25),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(255),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[256]=['������',
'����һ��������<br>�����ĵ���',
function(){return ''+'<span class="num">5: </span>'+'�������: '+dec(6+lvl(256)/4+blvl(251)/3,0)+'<br>'
+'<span class="num">23: </span>'+cc(['����ʱ��: ',dec((ln(lvl(256),90,0))/25,1),' �� <br>'])
+'<span class="num">38: </span>'+'�����˺�: '+dec(dec(dec((ln(lvl(256),2,0)<<7)*(100+((blvl(261)+blvl(271)+blvl(276))*11))/100,0)/256,0),0)+'-'+dec(dec(dec((ln(lvl(256),20,6,12,20,30,42)<<7)*(100+((blvl(261)+blvl(271)+blvl(276))*11))/100,0)/256,0),0)+' ÿ�� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(256),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'������ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">71: </span>'+'���汬��: +1 ����ÿ'+(3)+'���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�����ػ�: +11% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�׹�����: +11% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��������: +11% �����˺�ÿһ���ܵȼ�<br>'
},2,1]
desc[257]=['��֮�ػ�',
'����һ����ת�ĵ���<br>�����Ŀ���Ѳ��',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(257),100,12))/25,1),' �� <br>'])
+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(257),6,3,4,5)<<8)/256,0)+'-'+dec((ln(lvl(257),10,3,4,5)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(3)+'/'+(8)+' �����˺�<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(257),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[258]=['�ٶȱ���',
'��һ��ʱ�������ӹ������ƶ��ٶ�',
function(){return ''+'<span class="num">2: </span>'+cc(['�����ٶ�: ',sign(dec(dm(lvl(258),15,60),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�ƶ��ٶ�: ',sign(dec(dm(lvl(258),15,70),0)),' %<br>',])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(258),3000,300))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(258),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[259]=['��ȭ',
'<br>�����Լ��ܼ���<br><br>�������ۼ����һ�������˺��ĳ̶�<br>ֻ����װ��צ������ʱʹ��<br>��������ϵ���һ������ͨ�������ͷ�',
function(){return ''+'<span class="num">24: </span>'+'����1�� - �����˺�: '+(dec(dec((ln(lvl(259),6,5,10,20,30,40)<<8)*(100+((blvl(280))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(259),10,5,11,22,33,44)<<8)*(100+((blvl(280))*12))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'����2�� - �����˺��뾶: '+dec(4*2/3,1)+' ��<br>'
+'<span class="num">17: </span>'+'����3�� - �����˺�: '+dec((dec((ln(lvl(259),6,5,10,16,22,30)<<3)*(100+((blvl(280))*6))/100,0)*50/256)/2,0)*2+'-'+dec((dec((ln(lvl(259),10,5,10,17,24,32)<<3)*(100+((blvl(280))*6))/100,0)*50/256)/2,0)*2+' ÿ�� <br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(259),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(259),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ȭ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��������: +12% �����˺�ÿһ���ܵȼ�<br>'
},2,1]
desc[260]=['˫��צ',
'<br>���һ��<br><br>ʹ��˫צ������˺����Ƭ<br>������˫צ�ϼ��Ͼ����Լ��ܼӳɵ��˺�',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(260),50,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(260),40,25),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(260),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[261]=['�����ػ�',
'����һ����������<br>�������絯�����丽���ĵ���',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(261),2,0)<<7)*(100+((blvl(251)+blvl(271)+blvl(276))*6))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(261),14,6,8,12,14,16)<<7)*(100+((blvl(251)+blvl(271)+blvl(276))*6))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">3: </span>'+'��� '+dec(5+blvl(271)/4,0)+' ��<br>'
+'<span class="num">3: </span>'+'�ͷ� '+dec(ln(lvl(261),5,0)+blvl(256)/3,0)+' ���絯<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(261),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�����ػ� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">71: </span>'+'������: +1 ���絯ÿ'+(3)+'���ܵȼ�<br>'
+'<span class="num">71: </span>'+'�׹�����: +1 �������ÿ'+(4)+'���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���汬��: +6% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�׹�����: +6% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��������: +6% �����˺�ÿһ���ܵȼ�<br>'
},3,1]
desc[262]=['���渴��',
'һ�����ͷŻ��沨�˵�����',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(262),5,2,3,5,7,9)<<8)*(100+((blvl(251)+blvl(272))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(262),10,2,3,6,8,10)<<8)*(100+((blvl(251)+blvl(272))*8))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(262),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'��� '+dec(5,0)+' ��<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���渴�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'���汬��: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��������: +8% �����˺�ÿһ���ܵȼ�<br>'
},3,2]
desc[263]=['������',
'���� - ��װ��˫צʱ���������񵲸���',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(263),20,65),0)+'% ����<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[264]=['ħӰ����',
'��һС��ʱ����ʹ����Ϲ��<br>�����͵��˵ķ�����',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(264),200,25))/25,1),' �� <br>'])
+'<span class="num">2: </span>'+cc(['��������: ',sign(dec(ln(lvl(264),10,3),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['���˷���: ',sign(dec(-min(ln(lvl(264),15,3),95),0)),'%<br>',])
},
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(dm(lvl(264),30,30),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(264),13,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[265]=['�۾��߹�����',
'<br>�����Լ��ܼ���<br><br>�����ۼ������һ��ʱ��������ħ��͵ȡ<br>��������ϵ���һ������ͨ�������ͷ�',
function(){return ''+'<span class="num">2: </span>'+cc(['����1�� - ',sign(dec(ln(lvl(265),40,5),0)),'% ����͵ȡ<br>',])
+'<span class="num">2: </span>'+cc(['����2�� - ',sign(dec(ln(lvl(265),40,5),0)),'% ������ħ��͵ȡ<br>',])
+'<span class="num">2: </span>'+cc(['����3�� - ',sign(dec(2*ln(lvl(265),40,5),0)),'% ������ħ��͵ȡ<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(265),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(265),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,2]
desc[266]=['��֮ŭ',
'������ת����<br>������ĵ���',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(266),8,3,5,8)<<8)/256,0)+'-'+dec((ln(lvl(266),10,3,5,8)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(3)+'/'+(4)+' �����˺�<br>'
+'<span class="num">61: </span>'+'ħ������: '+dec((max(ln(lvl(266),8,1)<<5,0))/256,1)+' ÿ��<br>'
},
function(){return ''+'<span class="num">5: </span>'+'����ħ������: '+dec(3,0)+'<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[267]=['����',
'��һ��ʱ�����Ԫ�ؿ��Բ���������ʱ��',
function(){return ''+'<span class="num">3: </span>'+'�����������ʱ�� '+dec(dm(lvl(267),40,90),0)+'%<br>'
+'<span class="num">3: </span>'+'���п���: '+dec(dm(lvl(267),10,75),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(267),3000,300))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(267),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[268]=['Ӱ��սʿ',
'�ٻ�һ���Լ���Ӱ��<br>���ܹ�ʹ��������ʹ�õ����ּ���',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(376*(100+((lvl(268)-1)*15))/100+(0),0)+'<br>'
+'<span class="num">4: </span>'+cc(['������: +',lvl(268)*40,'<br>'])
+'<span class="num">2: </span>'+cc(['�������ӳ�: ',sign(dec((lvl(268)-1)*12,0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(268),54,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,2]
desc[269]=['����צ',
'<br>�����Լ���<br><br>���������ۼ������һ���ϵ������˺�s<br>ֻ����װ��צ������ʱʹ��<br>��������ϵ���һ������ͨ�������ͷ�',
function(){return ''+'<span class="num">24: </span>'+'����1�� - �����˺�: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),80,20,40,60,80,100)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'����2�� - �����˺�: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),30,15,25,35,45,65)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'����3�� - �������˺�: '+(dec(dec((ln(lvl(269),1,0)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(269),40,20,40,60,80,100)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(269),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(269),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����צ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��������: +8% �����˺�ÿһ���ܵȼ�<br>'
},4,1]
desc[270]=['������β',
'<br>���һ��<br><br>��ը�Ե��߻������˵���<br>���Լ��Ͼ����Լ��ܼӳɵ��˺�',
function(){return ''+'<span class="num">2: </span>'+cc(['�����˺�: ',sign(dec(ln(lvl(270),50,10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(270),20,15),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(270),10,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(6*2/3,1)+' ��<br>'
},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[271]=['�׹�����',
'����һ������<br>���������ս������ĵ���',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(271),1,0)<<8)*(100+((blvl(256)+blvl(261)+blvl(276))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(271),20,10,16,24,34,44)<<8)*(100+((blvl(256)+blvl(261)+blvl(276))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(271),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'��� '+dec(10,0)+' ��<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�׹����� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'������: +12% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�����ػ�: +12% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��������: +12% �����˺�ÿһ���ܵȼ�<br>'
},5,1]
desc[272]=['��������',
'һ������������Ƶ��˵�����',
function(){return ''+'<span class="num">59: </span>'+'�����˺�: '+dec(dec((ln(lvl(272),20,17,21,26,32,39)<<4)*(100+((blvl(251)+blvl(276))*10+blvl(262)*7))/100,0)*25/768,0)+'-'+dec(dec((ln(lvl(272),50,19,23,28,34,41)<<4)*(100+((blvl(251)+blvl(276))*10+blvl(262)*7))/100,0)*25/768,0)+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(272),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'��� '+dec(10,0)+' ��<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�������� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">42: </span>'+'���渴��: +'+(0)+'.'+(5)+' ��ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���汬��: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���渴��: +7% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��������: +10% �����˺�ÿһ���ܵȼ�<br>'
},5,2]
desc[273]=['���鱬��',
'ʹ�þ�����������һС�ӵ���<br>��ʹ��־�����ߵ��깥��',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(273),10,2,5,8)<<8)/256,0)+'-'+dec((ln(lvl(273),20,2,5,8)<<8)/256,0)+'<br>'
+'<span class="num">12: </span>'+cc(['ѣ��ʱ��: ',dec((min(250,dec(ln(lvl(273),50,5),0)))/25,1),' �� <br>'])
+'<span class="num">3: </span>'+'ת������: '+dec(dm(lvl(273),15,40),0)+'%<br>'
},
function(){return ''+'<span class="num">16: </span>'+'����ʱ��: '+(150)/25+'-'+(150+100)/25+' �� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(273),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[274]=['������',
'<br>�����Լ��ܼ���<br><br>�������������һ���м�������˺�<br>ֻ����װ��צ������ʱʹ��<br>��������ϵ���һ������ͨ�������ͷ�',
function(){return ''+'<span class="num">24: </span>'+'����1�� - �����˺�: '+(dec(dec((ln(lvl(274),15,8,10,20,30,40)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(274),35,8,10,22,32,42)<<8)*(100+((blvl(280))*8))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'����2�� - �����˺��뾶: '+dec(6*2/3,1)+' ��<br>'
+'<span class="num">12: </span>'+cc(['����3�� - ��������ʱ��: ',dec((dec(ln(lvl(274),100,10),0))/25,1),' �� <br>'])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(274),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(274),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'������ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��������: +8% �����˺�ÿһ���ܵȼ�<br>'
},5,1]
desc[275]=['��������',
'<br>���һ��<br><br>˲�䴫�͵�����ǰ�ͷ��߻�<br>���Լ��Ͼ����Լ��ܼӳɵ��˺�',
function(){return ''+'<span class="num">2: </span>'+cc(['�߻��˺�: ',sign(dec(ln(lvl(275),100,25),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(275),60,25),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(275),15,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[276]=['��������',
'������屻�����󽫻��ͷų�<br>���繥�������ĵ��˻����������˵�ʬ��',
function(){return ''+'<span class="num">37: </span>'+'�뾶: '+dec((10+1*(lvl(276)-1))/3,1)+' ��<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(276),1,0)<<8)*(100+((blvl(271))*12))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(276),50,8,14,22,28,34)<<8)*(100+((blvl(271))*12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(276),20,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">38: </span>'+'ʬ�屬ը�˺�: '+dec(40,0)+'-'+dec(80,0)+'% ʬ������<br>'
+'<span class="num">3: </span>'+'��� '+dec(5+blvl(251)/3,0)+' ��<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�������� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">71: </span>'+'���汬��: +1 ���ÿ'+(3)+'���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�׹�����: +12% �����˺�ÿһ���ܵȼ�<br>'
},6,1]
desc[277]=['����֮��',
'�ͷż�������Χ���ڴ̿�����<br>�����κο���̫���ĵ���',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(277),1,5,6,7)<<8)/256,0)+'-'+dec((ln(lvl(277),30,5,6,7)<<8)/256,0)+'<br>'
+'<span class="num">72: </span>'+'+'+(1)+'/'+(4)+' �����˺�<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(277),500,125))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(277),27,2)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[278]=['����',
'�����������Ӷ����˺�',
function(){return ''+'<span class="num">14: </span>'+'�����˺�: '+(dec((dec((ln(lvl(278),24,6,8,10,12,14)<<6),0))*(dec(ln(lvl(278),10,0),0))/256,0))+'-'+(dec((dec((ln(lvl(278),32,6,8,10,12,14)<<6),0))*(dec(ln(lvl(278),10,0),0))/256,0))+'<br>������ '+dec(dec(ln(lvl(278),10,0),0)/25,1)+' �� <br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(278),3000,100))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(278),12,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[279]=['Ӱ�Ӵ�ʦ',
'�ٻ�һ��ǿ���Ӱ���������ս��',
function(){return ''+'<span class="num">13: </span>'+'����: '+dec(376*(100+((lvl(279)-1)*15))/100+(0),0)+'<br>'
+'<span class="num">4: </span>'+cc(['������: +',lvl(279)*40,'<br>'])
+'<span class="num">2: </span>'+cc(['���п���: ',sign(dec(((110*(lvl(279)-1))/(lvl(279)+5)*(80-5))/100+5,0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(279),70,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[280]=['��������',
'<br>�����Լ��ܼ���<br><br>�����һ���ϼ���Ԫ�������˺�<br>��������ϵ���һ������ͨ�������ͷ�',
function(){return ''+'<span class="num">62: </span>'+'����1�� - ��ʯ�˺�: '+(dec(dec((ln(lvl(280),20,10,19,29,38,46)<<8)*(100+((blvl(259))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),40,10,21,33,42,50)<<8)*(100+((blvl(259))*10))/100,0)/256,0))+'<br>'
+'<span class="num">38: </span>'+'���汬ը�˺�: '+dec(dec(dec((ln(lvl(280),6,5,10,16,22,30)<<3)*(100+((blvl(259))*6))/100,0)*75/256/3,0)*3,0)+'-'+dec(dec(dec((ln(lvl(280),10,5,10,17,24,32)<<3)*(100+((blvl(259))*6))/100,0)*75/256/3,0)*3,0)+' ÿ�� <br>'
+'<span class="num">62: </span>'+'����2�� - ���������˺�: '+(dec(dec((ln(lvl(280),1,0)<<8)*(100+((blvl(269))*13))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),40,20,40,60,80,100)<<8)*(100+((blvl(269))*13))/100,0)/256,0))+'<br>'
+'<span class="num">62: </span>'+'����3�� - ��������˺�: '+(dec(dec((ln(lvl(280),16,4,8,12,20,28)<<8)*(100+((blvl(274))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(280),32,4,8,13,21,29)<<8)*(100+((blvl(274))*10))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(280),15,7),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(280),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�������� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��ȭ: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ȭ: +6% ƽ��ÿ������˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����צ: +13% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +10% �����˺�ÿһ���ܵȼ�<br>'
},6,2]

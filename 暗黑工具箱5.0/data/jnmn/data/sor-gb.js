tabs[1]=[36,37,41,46,47,51,52,56,61,62]
tabs[2]=[38,42,43,48,49,53,54,57,58,63]
tabs[3]=[39,40,44,45,50,55,59,60,64,65]
tabs[1].name=['����ϵ','����','']
tabs[2].name=['����ϵ','����','']
tabs[3].name=['����ϵ','����','']
tabs.close=[1,1,3]
desc=[]
desc[36]=['��',
'����һ������С��',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(36),6,3,4,8,18,54)<<7)*(100+((blvl(47)+blvl(56))*16))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(36),12,3,6,10,20,56)<<7)*(100+((blvl(47)+blvl(56))*16))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
},
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(36),5,0)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +16% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ʯ: +16% �����˺�ÿһ���ܵȼ�<br>'
},1,2]
desc[37]=['��ů',
'���� - ���ħ���ָ�������',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(37),30,12),0)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[38]=['���絯',
'�������Լ�Ѱ��Ŀ�������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(38),4,1,1,2,3,4)<<7)*(100+((blvl(49))*6))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(38),8,1,1,2,3,4)<<7)*(100+((blvl(49))*6))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">7: </span>'+'���� '+dec(min(24,ln(lvl(38),3,1)),0)+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(38),24,4)<<5,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���絯 �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +6% �����˺�ÿһ���ܵȼ�<br>'
},1,2]
desc[39]=['����',
'����һ�������˺�����������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(39),6,2,4,6,8,10)<<7)*(100+((blvl(44)+blvl(45)+blvl(55)+blvl(59)+blvl(64))*15))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(39),10,3,5,7,9,11)<<7)*(100+((blvl(44)+blvl(45)+blvl(55)+blvl(59)+blvl(64))*15))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['����ʱ��: ',dec(dec(ln(lvl(39),150,35),0)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(39),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'˪֮����: +15% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���籩: +15% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ì: +15% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����ѩ: +15% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +15% �����˺�ÿһ���ܵȼ�<br>'
},1,2]
desc[40]=['����װ��',
'���������ȼ�����������ĵ���',
function(){return ''+'<span class="num">3: </span>'+'�����ӳ�: '+dec(ln(lvl(40),30,5),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(40),3000,300)+(blvl(50)+blvl(60))*250)/25,1),' �� <br>'])
+'<span class="num">12: </span>'+cc(['����ʱ�� ',dec((ln(lvl(40),30,3)*(100+((blvl(50)+blvl(60))*5))/100)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(40),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����װ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'�����: +'+dec((250+12)/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�����: +5% ����ʱ��ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'����װ��: +'+dec((250+12)/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����װ��: +5% ����ʱ��ÿһ���ܵȼ�<br>'
},1,3]
desc[41]=['������',
'����һ����������Ļ���<br>�ս���ĵ���',
function(){return ''+'<span class="num">26: </span>'+'ƽ�������˺�: '+(dec(dec(dec((ln(lvl(41),32,24,26,28,32,36)<<2)*(100+((blvl(37))*13))/100,0)*(100+ln(lvl(61),30,7))/100,0)/10.24,0))+'-'+(dec(dec(dec((ln(lvl(41),64,24,27,29,33,37)<<2)*(100+((blvl(37))*13))/100,0)*(100+ln(lvl(61),30,7))/100,0)/10.24,0))+' ÿ�� <br>'
+'<span class="num">19: </span>'+'���: '+dec(dec(ln(lvl(41),20,3)/4,0)*2/3,1)+' ��<br>'
+'<span class="num">3: </span>'+'ħ������: '+dec(dec(max(ln(lvl(41),36,1)<<2,0)/20.48,0),0)+' ÿ�� <br>'
},
function(){return ''+'<span class="num">5: </span>'+'���ħ������: '+dec(6,0)+'<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'������ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��ů: +13% �����˺�ÿһ���ܵȼ�<br>'
},2,1]
desc[42]=['��������',
'����һ�����������������и������˵�����',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(42),5,1),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(42),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">3: </span>'+'������������ '+dec(25,0)+'%<br>'
},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[43]=['����ң��',
'ʹ�þ�������ʰȡ��Ʒ,<br> ��������,��������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((lvl(43)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(43),2,1)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(43),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[44]=['˪֮����',
'����һ����չ�ı���<br>�˺�����������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(44),4,4,6,8,10,12)<<7)*(100+((blvl(59)+blvl(64))*10))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(44),8,5,7,9,11,13)<<7)*(100+((blvl(59)+blvl(64))*10))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['����ʱ��: ',dec(dec(ln(lvl(44),200,25),0)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(44),9,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'˪֮���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����ѩ: +10% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +10% �����˺�ÿһ���ܵȼ�<br>'
},2,1]
desc[45]=['���籩',
'����һ�������˺����������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(45),16,14,28,42,56,70)<<7)*(100+((blvl(39)+blvl(59)+blvl(64))*8))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(45),24,15,29,43,57,71)<<7)*(100+((blvl(39)+blvl(59)+blvl(64))*8))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['����ʱ�� ',dec((dec(ln(lvl(45),75,5)*(100+((blvl(55))*10))/100,0))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(45),12,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���籩 �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ì: +10% ����ʱ��ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����ѩ: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +8% �����˺�ÿһ���ܵȼ�<br>'
},2,2]
desc[46]=['����֮��',
'��������ƶ�·�߽���һ��ȼ�յĻ�ǽ',
function(){return ''+'<span class="num">23: </span>'+cc(['�������ʱ��: ',dec((ln(lvl(46),90,25))/25,1),' �� <br>'])
+'<span class="num">27: </span>'+'ƽ�������˺�: '+(dec(dec(dec((ln(lvl(46),4,2,3,4,6,9)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+'-'+(dec(dec(dec((ln(lvl(46),8,2,3,4,6,9)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+' ÿ�� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(46),22,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[47]=['����',
'����һ����ը�Ļ�����û��ĵ���',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(47),12,13,23,28,33,38)<<7)*(100+((blvl(36)+blvl(56))*14))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(47),28,15,25,30,35,40)<<7)*(100+((blvl(36)+blvl(56))*14))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(47),10,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">28: </span>'+'�뾶: 1 ��<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��: +14% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ʯ: +14% �����˺�ÿһ���ܵȼ�<br>'
},3,2]
desc[48]=['����',
'����һ������ĵ绷�������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(48),1,6,7,8,9,10)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(48),20,8,9,10,11,12)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(48),15,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[49]=['����',
'�ͷ�һ��ǿ�ҵ������������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(49),1,0)<<8)*(100+((blvl(38)+blvl(53)+blvl(48))*8))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(49),40,8,12,20,28,36)<<8)*(100+((blvl(38)+blvl(53)+blvl(48))*8))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(49),16,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'���絯: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +8% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��������: +8% �����˺�ÿһ���ܵȼ�<br>'
},3,2]
desc[50]=['�����',
'���������ȼ�<br>���Ტ�˺������ĵ���',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(50),3000,300)+(blvl(40)+blvl(60))*250)/25,1),' �� <br>'])
+'<span class="num">3: </span>'+'�����ӳ�: '+dec(ln(lvl(50),45,6),0)+'%<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(50),12,4,6,8,10,12)<<7)*(100+((blvl(40)+blvl(60))*9))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(50),16,5,7,9,11,13)<<7)*(100+((blvl(40)+blvl(60))*9))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['����ʱ��: ',dec(dec(ln(lvl(50),100,0,25,50),0)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(50),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'����װ��: +'+dec((250+12)/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����װ��: +9% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'����װ��: +'+dec((250+12)/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����װ��: +9% �����˺�ÿһ���ܵȼ�<br>'
},3,3]
desc[51]=['��ǽ',
'����һ����ǽ��ȼ����',
function(){return ''+'<span class="num">30: </span>'+cc(['�������ʱ��: ',dec(ln(lvl(51),90,0)/25,1),' �� <br>'])
+'<span class="num">27: </span>'+'ƽ�������˺�: '+(dec(dec(dec((ln(lvl(51),15,9,14,21)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+'-'+(dec(dec(dec((ln(lvl(51),20,9,14,21)<<4),0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0))+' ÿ�� <br>'
+'<span class="num">29: </span>'+cc([dec(dec(ln(lvl(51),7,2),0)*2/3,1),' ��<br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(51),22,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[52]=['����ǿ��',
'����ս�������ϻ����˺�<br>��Զ�������ϼ���1/3�����˺�',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(52),3600,600))/25,1),' �� <br>'])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(52),16,3,7,11,15,19)<<7)*(100+((blvl(37))*9))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(52),20,5,9,13,17,21)<<7)*(100+((blvl(37))*9))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(52),20,9),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(52),25,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����ǿ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��ů: +9% �����˺�ÿһ���ܵȼ�<br>'
},4,3]
desc[53]=['��������',
'����һ����������<br>�ᴩ���Ŀ��',
function(){return ''+'<span class="num">7: </span>'+'�������: '+dec(ln(lvl(53),26,1)/5,0)+'<br>'
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(53),1,0)<<8)*(100+((blvl(38)+blvl(49)+blvl(48))*4))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(53),40,11,13,15)<<8)*(100+((blvl(38)+blvl(49)+blvl(48))*4))/100,0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(53),9,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�������� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'���絯: +4% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +4% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +4% �����˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[54]=['���鴫��',
'˲���ƶ�������������Ŀ�ĵ�',
function(){return ''+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(54),24,-1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[55]=['��ì',
'����һ��������Ƕ����ɱ�������ĵ���',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(55),32,14,26,28,30,32)<<7)*(100+((blvl(39)+blvl(45)+blvl(64))*5))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(55),48,15,27,29,31,33)<<7)*(100+((blvl(39)+blvl(45)+blvl(64))*5))/100,0)/256,0))+'<br>'
+'<span class="num">12: </span>'+cc(['����ʱ�� ',dec((ln(lvl(55),50,3)*(100+blvl(59)*3)/100)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(55),20,1)<<7,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(55),4,0),0)*2/3,1)+' ��<br>'
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ì �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +5% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���籩: +5% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����ѩ: +3% ����ʱ��ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +5% �����˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[56]=['��ʯ',
'�ٻ�һ�������������ʯѹ�鲢�ս�����',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(56),80,23,39,79,81,83)<<8)*(100+((blvl(36)+blvl(47))*5))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(56),100,25,41,81,83,85)<<8)*(100+((blvl(36)+blvl(47))*5))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(56),6,0),0)*2/3,1)+' ��<br>'
+'<span class="num">22: </span>'+'ƽ�������˺�: '+dec(dec(dec((ln(lvl(56),15,4,5,6)<<3)*(100+(blvl(41)*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)*75/256,0)+'-'+dec(dec(dec((ln(lvl(56),25,4,5,6)<<3)*(100+(blvl(41)*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)*25/256,0)*3+' ÿ�� <br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(56),34,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ʯ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��: +5% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +5% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'������: +3% ƽ�������˺� ÿ�� ÿһ���ܵȼ�<br>'
},5,2]
desc[57]=['�ױ�',
'�ٻ�һ���������ױ��������',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(57),800,200))/25,1),' �� <br>'])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec(dec((ln(lvl(57),1,10,10,11)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(57),100,10,10,11)<<8),0)*(100+ln(lvl(63),50,12))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(57),19,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[58]=['��������',
'����һ����������<br>��ħ�������������ܵ����˺�',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(58),3600,1500))/25,1),' �� <br>'])
+'<span class="num">3: </span>'+'���� '+dec(min(dec(dec((ln(lvl(58),20,5,2,1)<<8),0)/256,0),95),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(58),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�������� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">18: </span>'+'����ң��<br>'
},5,3]
desc[59]=['����ѩ',
'�ٻ��������صı���������',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(59),45,15,30,45,55,65)<<8)*(100+((blvl(39)+blvl(45)+blvl(55))*5))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(59),75,16,31,46,56,66)<<8)*(100+((blvl(39)+blvl(45)+blvl(55))*5))/100,0)/256,0))+'<br>'
+'<span class="num">23: </span>'+cc(['����ʱ��: ',dec((ln(lvl(59),100,0))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(59),23,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����ѩ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +5% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���籩: +5% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��ì: +5% �����˺�ÿһ���ܵȼ�<br>'
},5,1]
desc[60]=['����װ��',
'���������ȼ�<br>����Զ�̹����߷����������',
function(){return ''+'<span class="num">3: </span>'+'�����ӳ�: '+dec(ln(lvl(60),45,5),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(60),3600,150)+(blvl(40)+blvl(50))*250)/25,1),' �� <br>'])
+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(60),8,2,4,6,8,10)<<7)*(100+((blvl(40)+blvl(50))*7))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(60),12,3,5,7,9,11)<<7)*(100+((blvl(40)+blvl(50))*7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(60),17,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'����װ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'����װ��: +'+dec((250+12)/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����װ��: +7% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'�����: +'+dec((250+12)/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'�����: +7% �����˺�ÿһ���ܵȼ�<br>'
},5,3]
desc[61]=['��ϵ����',
'���� - ���ӻ���ϵ������˺�',
function(){return ''+'<span class="num">2: </span>'+cc(['�����˺�: ',sign(dec(ln(lvl(61),30,7),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[62]=['��ͷ����',
'�ٻ�һֻ��ͷ�Ļ�����<br>����˷�����浯',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(62),250,0))/25,1),' �� <br>'])
+'<span class="num">24: </span>'+'��ͷ���� �����˺�: '+(dec(dec(dec((ln(lvl(62),24,9,13,17,21,25)<<7)*(100+((blvl(36)+blvl(47))*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'-'+(dec(dec(dec((ln(lvl(62),34,11,15,19,23,27)<<7)*(100+((blvl(36)+blvl(47))*3))/100,0)*(100+ln(lvl(61),30,7))/100,0)/256,0))+'<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(62),40,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��ͷ���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��: +3% �����˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'����: +3% �����˺�ÿһ���ܵȼ�<br>'
},6,3]
desc[63]=['��ϵ����',
'���� - ��ǿ����������˺�',
function(){return ''+'<span class="num">2: </span>'+cc(['�����˺�: ',sign(dec(ln(lvl(63),50,12),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]
desc[64]=['������',
'����һ����������Χ�������<br>������ĵ���',
function(){return ''+'<span class="num">10: </span>'+'�����˺�: '+(dec(dec((ln(lvl(64),80,20,24,28,29,30)<<7)*(100+((blvl(39))*2))/100,0)/256,0))+'-'+(dec(dec((ln(lvl(64),90,21,25,29,30,31)<<7)*(100+((blvl(39))*2))/100,0)/256,0))+'<br>'
+'<span class="num">11: </span>'+cc(['����ʱ��: ',dec(dec(ln(lvl(64),200,25),0)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(64),50,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'������ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +2% �����˺�ÿһ���ܵȼ�<br>'
},6,1]
desc[65]=['��������',
'���� - ͨ�����͵��˵ı��俹��������˺�',
function(){return ''+'<span class="num">7: </span>'+dec(ln(lvl(65),20,5),0)+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,2]

tabs[1]=[126,132,133,139,140,143,144,147,151,152]
tabs[2]=[127,128,129,134,135,136,141,145,148,153]
tabs[3]=[130,131,137,138,142,146,149,150,154,155]
tabs[1].name=['ս��','����','']
tabs[2].name=['ս��','ר��','����']
tabs[3].name=['�ź�','����','']
tabs.close=[3,1,3]
desc=[]
desc[126]=['�ػ�',
'ǿ�����������ɵ��˺�<br>�����˵���',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec((15+lvl(126)*5+blvl(144)*5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(126),50,5)+blvl(139)*5,0)),'%<br>',])
+'<span class="num">4: </span>'+cc(['�˺�: +',lvl(126),'<br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(126),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�ػ� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +5% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'ר��: +5% ����������ÿһ���ܵȼ�<br>'
},1,2]
desc[127]=['��ϵ����',
'���� - ������ʹ�ý�ϵ������ս������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(127),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(127),28,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(127),0,25))+'% ����һ����ɱ<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[128]=['��ϵ����',
'���� - ������ʹ�ø�ϵ������ս������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(128),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(128),28,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(128),0,25))+'% ����һ����ɱ<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[129]=['��ϵ����',
'���� - ������ʹ�ô�ϵ������ս������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(129),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(129),28,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(129),0,25))+'% ����һ����ɱ<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[130]=['����',
'�ø����Ĺ�����־����ɢ����',
function(){return ''+'<span class="num">19: </span>'+'�����ܿ� '+dec(dec(ln(lvl(130),24,5),0)*2/3,1)+' ��<br>'
+'<span class="num">12: </span>'+cc(['��ɢ���� ',dec((ln(lvl(130),75,25))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(130),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[131]=['Ѱ��ҩ��',
'��Ѱ�����ʬ��<br>���Ƿ����ҵ�ҩ��',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(131),0,100),0)+'% ����<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(131),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[132]=['��Ծ',
'��Ծ�뿪Σ�ջ�����ս��֮��',
function(){return ''+'<span class="num">19: </span>'+'�뾶: '+dec(dec(dm(lvl(132),4,30),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(132),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[133]=['˫�ֻӻ�',
'��װ����������ʱ<br>����һ�ι����л�����������<br>���߹���һ����������',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(133),15,5),0)),'%<br>',])
+'<span class="num">5: </span>'+'ħ������: '+dec(max(ln(lvl(133),8,-1)<<5,0)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(blvl(126)*10,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'˫�ֻӻ� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�ػ�: +10% �˺�ÿһ���ܵȼ�<br>'
},2,3]
desc[134]=['��������',
'���� - �������ó���������ս������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(134),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(134),30,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(134),0,25))+'% ����һ����ɱ<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[135]=['Ͷ������',
'���� - ������ʹ��Ͷ��������ս������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(135),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(135),30,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(135),0,25))+'% ����һ����ɱ<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[136]=['ìϵ����',
'���� - ������ʹ��ìϵ������ս������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(136),28,5),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(136),30,8),0)),'%<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(136),0,25))+'% ����һ����ɱ<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[137]=['��Ū',
'��ŭһ������ʹ֮����ս��',
function(){return ''+'<span class="num">3: </span>'+'Ŀ���˺�: '+dec(ln(lvl(137),-5,-2),0)+'%<br>'
+'<span class="num">3: </span>'+'Ŀ��������: '+dec(ln(lvl(137),-5,-2),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(137),3,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[138]=['���',
'��������Ƚ���Σ��<br>���������ǵķ�����',
function(){return ''+'<span class="num">2: </span>'+cc(['����: ',sign(dec(ln(lvl(138),100,10),0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(138),500,250)+(blvl(149)+blvl(155))*125)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(138),6,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'ս������: +'+dec(125/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'ս��ָ��: +'+dec(125/25,0)+' �� ÿһ���ܵȼ�<br>'
},2,2]
desc[139]=['����',
'�ɹ��Ĺ�����ʹ������ѣ<br>��������������',
function(){return ''+'<span class="num">3: </span>'+'������: '+dec((10+lvl(139)*5+blvl(144)*5),0)+'%<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((min(250,dec(ln(lvl(139),30,5,5,2)*(100+(blvl(154)*5))/100,0)))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(139),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(blvl(126)*8,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�ػ�: +8% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'ר��: +5% ����������ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'ս������: +5% ����ʱ��ÿһ���ܵȼ�<br>'
},3,2]
desc[140]=['˫��Ͷ��',
'��ͬʱͶ��������ͬ������',
function(){return ''+'<span class="num">8: </span>'+cc(['������: +',ln(lvl(140),20,10),'%<br>'])
+'<span class="num">5: </span>'+'ħ������: '+dec(max(ln(lvl(140),1,0)<<8,1<<8)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(blvl(133)*8,0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'˫��Ͷ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'˫�ֻӻ�: +8% �˺�ÿһ���ܵȼ�<br>'
},3,3]
desc[141]=['��������',
'���� - �����������',
function(){return ''+'<span class="num">2: </span>'+cc(['�����ӳ�: ',sign(dec(ln(lvl(141),30,15),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[142]=['Ѱ����Ʒ',
'��Ѱ�����ʬ��<br>�������ص���Ʒ',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(142),5,60),0)+'% ����<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(142),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[143]=['��Ծ����',
'����Ŀ�겢�����ʱ����',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(143),100,30)+blvl(132)*10,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(143),50,15),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(143),9,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'��Ծ���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'��Ծ: +10% �˺�ÿһ���ܵȼ�<br>'
},4,1]
desc[144]=['ר��',
'����ϵع���<br>����߹����ͷ����ĵȼ�',
function(){return ''+'<span class="num">2: </span>'+cc(['�����ӳ�: ',sign(dec(ln(lvl(144),100,10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(144),60,10),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(144),70,5)+blvl(126)*5+blvl(149)*10,0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(144),2,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['ħ���˺�: ',sign(dec(blvl(152),0)),'%<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ר�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'�ػ�: +5% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'ս������: +10% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��: +1% ħ���˺�ÿһ���ܵȼ�<br>'
},4,2]
desc[145]=['������',
'���� - ���ӷ���',
function(){return ''+'<span class="num">6: </span>'+'�����ӳ�: '+'+'+(ln(lvl(145),30,10))+'%<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[146]=['ս��',
'�������˿־�Ľ���<br>���͵��˵ķ��������˺���',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(146),300,60))/25,1),' �� <br>'])
+'<span class="num">3: </span>'+'����: '+dec(ln(lvl(146),-50,-2),0)+'%<br>'
+'<span class="num">3: </span>'+'�˺�: '+dec(ln(lvl(146),-25,-1),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(146),5,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[147]=['����',
'����һ���ɹ�����Ŀ��<br>�����ûӶ��������ٶȼӱ�<br>��װ����������',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(147),90,5)+(blvl(133)+blvl(137))*8,0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(147),100,7),0)),'%<br>',])
+'<span class="num">52: </span>'+'�����ٶ�: +'+dec(15*(50-0)/100+0,0)+'-'+dec(dm(lvl(147),0,50),0)+'%<br>'
+'<span class="num">52: </span>'+'�ƶ��ٶ�: +'+dec(15*(200-20)/100+20,0)+'-'+dec(dm(lvl(147),20,200),0)+'%<br>'
+'<span class="num">5: </span>'+'ħ������: '+dec(max(ln(lvl(147),3,0)<<7,1<<8)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['ħ���˺�: ',sign(dec(blvl(152),0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((150)/25,1),' �� <br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'���� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'˫�ֻӻ�: +8% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��Ū: +8% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��: +1% ħ���˺�ÿһ���ܵȼ�<br>'
},5,3]
desc[148]=['����',
'���� - �����ƶ��ٶ�',
function(){return ''+'<span class="num">2: </span>'+cc(['�ƶ��ٶ�: ',sign(dec(dm(lvl(148),7,50),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[149]=['ս������',
'���Ӷ��ѵ�������ħ��������ֵ',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(149),750,250)+(blvl(138)+blvl(155))*125)/25,1),' �� <br>'])
+'<span class="num">3: </span>'+'�������: '+dec(ln(lvl(149),35,3),0)+'%<br>'
+'<span class="num">3: </span>'+'�������: '+dec(ln(lvl(149),35,3),0)+'%<br>'
+'<span class="num">3: </span>'+'���ħ��: '+dec(ln(lvl(149),35,3),0)+'%<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(149),7,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ս������ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'���: +'+dec(125/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'ս��ָ��: +'+dec(125/25,0)+' �� ÿһ���ܵȼ�<br>'
},5,2]
desc[150]=['�п�����',
'���ù����ʬ��<br>����һ���ֲ���ͼ��<br>���ܸ����Ĺ���',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(150),1000,0))/25,1),' �� <br>'])
+'<span class="num">19: </span>'+'�뾶: '+dec(dec(ln(lvl(150),3,1),0)*2/3,1)+' ��<br>'
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(150),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[151]=['����',
'��ת������֮��<br>�ӿ���������ת·���ϵĵ���',
function(){return ''+'<span class="num">2: </span>'+cc(['�˺�: ',sign(dec(ln(lvl(151),-50,8),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(151),0,5),0)),'%<br>',])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(151),50,1)<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[152]=['��',
'����ǿ�󵫲��ƺ���Ĺ���<br>���������˺���������<br>�����ӷ���',
function(){return ''+'<span class="num">2: </span>'+cc(['������: ',sign(dec(ln(lvl(152),100,15),0)),'%<br>',])
+'<span class="num">2: </span>'+cc(['ħ���˺�: ',sign(dec(ln(lvl(152),150,15)+(blvl(130)+blvl(138))*10,0)),'%<br>',])
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((75-min(((110*lvl(152))/(lvl(152)+6)*(75-25)/100),(75-25)))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(152),4,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +10% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'���: +10% �˺�ÿһ���ܵȼ�<br>'
},6,2]
desc[153]=['��Ȼ�ֿ�',
'���� - ���Ӷ�Ԫ���˺��Ŀ���',
function(){return ''+'<span class="num">2: </span>'+cc(['Ԫ�ؿ���: ',sign(dec(dm(lvl(153),0,80),0)),'%<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[154]=['ս������',
'�˺������ĵ��˲�ʹ����ѣ',
function(){return ''+'<span class="num">9: </span>'+'�˺�: '+dec((ln(lvl(154),20,6,7,8,9,10)<<8)*(100+(blvl(130)+blvl(137)+blvl(146))*6)/25600,0)+'-'+dec((ln(lvl(154),30,6,7,8,9,10)<<8)*(100+(blvl(130)+blvl(137)+blvl(146))*6)/25600,0)+'<br>'
+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((min(250,ln(lvl(154),25,5)))/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(154),10,1)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ս������ �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">63: </span>'+'����: +6% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'��Ū: +6% �˺�ÿһ���ܵȼ�<br>'
+'<span class="num">63: </span>'+'ս��: +6% �˺�ÿһ���ܵȼ�<br>'
},6,1]
desc[155]=['ս��ָ��',
'��ʱ������Ͷ��ѵļ���1��',
function(){return ''+'<span class="num">12: </span>'+cc(['����ʱ��: ',dec((ln(lvl(155),125,250)+(blvl(138)+blvl(149))*125)/25,1),' �� <br>'])
+'<span class="num">1: </span>'+cc(['ħ������: ',dec(max(ln(lvl(155),11,0)<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'ս��ָ�� �����¼��ܵõ�����ӳ�:<br>'
+'</span>'+'<span class="num">67: </span>'+'���: +'+dec(125/25,0)+' �� ÿһ���ܵȼ�<br>'
+'<span class="num">67: </span>'+'ս������: +'+dec(125/25,0)+' �� ÿһ���ܵȼ�<br>'
},6,2]

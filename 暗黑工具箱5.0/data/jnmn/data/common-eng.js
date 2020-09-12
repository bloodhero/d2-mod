/*******************************************************************************
 * Parse location.href and extract:
 *	location.base = base address of the page
 *	location.arg = associative array of CGI type argument/value pairs
 ******************************************************************************/
new function(){var i=location.href.indexOf("?");i=i==-1?location.href.length:i;location.base=location.href.substring(0,i);location.arg=[];var a=location.href.substring(i+1).split("&");for(i=0;i<a.length;++i){var p=a[i].split("=");location.arg[unescape(p[0])]=unescape(p[1])}}()
/*******************************************************************************
 * Utility and event handlers
 ******************************************************************************/
function add(b,i){return function(){var t=parseInt(tabs[b.tab].total.innerHTML)-parseInt(b.value);b.value=parseInt(b.value)+i;validate(b)();tabs[b.tab].total.innerHTML=t+parseInt(b.value);sumall();return false}}
function resetTab(t){return function(){for(var i=0;i<t.box.length;++i)t.box[i].value=0;t.total.innerHTML=0;t.plus.value=0;sumall();update();return false}}
function recount(b){return function(){validate(b)();var v=0;for(var j=0;j<tabs[b.tab].box.length;++j)v+=parseInt(tabs[b.tab].box[j].value);tabs[b.tab].total.innerHTML=v;sumall();return false}}
function clamp(l,h,n){if(isNaN(n))n=0;return n<l?l:n>h?h:n}
function validate(b){return function(){b.value=clamp(0,999,parseInt(b.value));b.blur();update();return false}}
function sumall(){var v=0;for(var i=1;i<4;++i)v+=parseInt(tabs[i].total.innerHTML);tabs.total.innerHTML=v;return false}
function setcurrent(j){return function(){tabs[tabs.active].active=j;update();return false}}
function select(b){return function(){b.select();return false}}
function showTab(n){if(n!=tabs.active){tabs[n].tree.style.display="block";tabs[tabs.active].tree.style.display="none";tabs.active=n;update()}}
function update(){tabs.data.innerHTML=display(tabs[tabs.active][tabs[tabs.active].active])}
/*******************************************************************************
 * Initialize the data
 ******************************************************************************/
if(!parent.saved)parent.saved=[]
var tabs=[]
tabs.init=function(){
var tmp=parent.saved[location.arg["class"]];
if (tmp) {
  //zero everything out
  this.plus.value = tmp.plus.value;
  this.total.innerHTML = tmp.total.innerHTML;
  this.active = tmp.active;
  for(var i=1; i<4; ++i){
    this[i].active = tmp[i].active;
    this[i].plus.value = tmp[i].plus.value;
    this[i].total.innerHTML = tmp[i].total.innerHTML;
    for(var j=0; j<this[i].box.length; ++j){
      this[i].box[j].value = tmp[i].box[j].value;
    }
  }
} else {
  // restore data
  this.plus.value = 0;
  this.total.innerHTML = 0;
  this.active = 1;
  for(var i=1; i<4; ++i){
    this[i].active = 0;
    this[i].plus.value = 0;
    this[i].total.innerHTML = 0;
    for(var j=0; j<this[i].box.length; ++j){
      this[i].box[j].value = 0;
    }
  }
}
parent.saved[location.arg["class"]]=tabs;

// recount all
var all=0;
for(var i=1; i<4; ++i){
  var val = 0;
  for(var j=0; j<this[i].box.length; ++j){
    validate(this[i].box[j])();
    val += parseInt(this[i].box[j].value);
  }
  this[i].total.innerHTML = val;
  all += val;
}
this.total.innerHTML = all;

// show active skill
this[this.active].tree.style.display = "block";
}
/*******************************************************************************
 * Write the page
 ******************************************************************************/
tabs.write=function(){
var s=[]
s.push("<img src='data.jpg' alt='' /><div id='data'></div>")
for(var i=1;i<4;++i){s.push("<div class='tree' id='tree")
s.push(i)
s.push("'><img src='")
s.push(location.arg["class"])
s.push(i)
s.push(".jpg' alt='' />")
s.push("<img src='blank.gif' alt='' width='32' height='32' class='r")
s.push(tabs.close[i-1])
s.push("' />")
for(var j=0;j<this[i].length;++j){s.push("<div class='i")
s.push(desc[this[i][j]][5])
s.push(desc[this[i][j]][6])
s.push("'><input type='text' /><img src='blank.gif' alt='' width='48' height='48' /></div>")}
s.push("</div>")}
for(var i=1;i<4;++i){
s.push("<div class='tab' id='tab")
s.push(i)
s.push("'>")
s.push(tbl.plus)
s.push("<input type='text' />&nbsp;")
s.push(tbl.to)
s.push("<br /><a href='javascript:showTab(")
s.push(i)
s.push(");'>")
s.push(this[i].name[0])
s.push("<br />")
s.push(this[i].name[1])
s.push("<br />")
s.push(this[i].name[2])
s.push("</a><br /><span></span></div>")}
s.push("<div class='tab' id='tab4'>")
s.push(tbl.plus)
s.push("<input type='text' />&nbsp;")
s.push(tbl.to)
s.push("<br />")
s.push(tbl["partychar"+location.arg["class"]])
s.push("<br />")
s.push(tbl.StrSklTree4)
s.push("<br /><div></div></div>")
document.write(s.join(""))
s=[];for(var p in skills)if(typeof skills[p]=="number")s.push(p)
this.data=document.getElementById("data")
var t=document.getElementById("tab4")
this.total=t.getElementsByTagName("div")[0]
this.plus=t.getElementsByTagName("input")[0]
this.plus.onfocus=select(this.plus)
this.plus.onchange=validate(this.plus)
for(var i=1;i<4;++i){var t=document.getElementById("tab"+i)
this[i].total=t.getElementsByTagName("span")[0]
this[i].plus=t.getElementsByTagName("input")[0]
this[i].plus.onfocus=select(this[i].plus)
this[i].plus.onchange=validate(this[i].plus)
this[i].tree=document.getElementById("tree"+i)
this[i].reset=this[i].tree.getElementsByTagName("img")[1]
this[i].reset.onclick=resetTab(this[i])
var d=this[i].tree.getElementsByTagName("div")
this[i].box=[]
for(var j=0; j<this[i].length; ++j){
for(var p in s)skills[this[i][j]][s[p]]=skills[this[i][j]][skills[s[p]]]
this[i].box.push(d[j].childNodes[0])
var m=d[j].childNodes[1]
m.onclick=add(this[i].box[j],1)
m.oncontextmenu=add(this[i].box[j],-1)
m.onmouseover=setcurrent(j)
this[i].box[j].onfocus=select(this[i].box[j])
this[i].box[j].onchange=recount(this[i].box[j])
this[i].box[j].tab=i
}}}
/*******************************************************************************
 * Skill Data
 ******************************************************************************/
var skills=[]
/*******************************************************************************
 *
 ******************************************************************************/
function display(skill) {
var l=lvl(skill);
return (l==0?'<span class="red">':'')
+'<span class="green">'+desc[skill][0]+'<br></span>'
+desc[skill][1]+'<br>'
+(l>0?cc(['<br>',desc[skill][3]()])
+'<br>Current Skill Level: '+l+'<br>'+desc[skill][2]():'')
+cc(['<br>',desc[skill][4]()])
+(l==0?'</span>':'')
}

/*
 * Calculations used in string generation.
 */
function dec(n,d){var f=Math.pow(10,d);return Math.floor(n*f)/f}
max=Math.max
min=Math.min
function ln(l,a,b,c,d,e,f){
	c=c||b;
	d=d||c;
	e=e||d;
	f=f||e;
	return a+(
		l>28?7*b+8*c+6*d+6*e+(l-28)*f:
		l>22?7*b+8*c+6*d+(l-22)*e:
		l>16?7*b+8*c+(l-16)*d:
		l>8?7*b+(l-8)*c:
		l>0?(l-1)*b:
		-a)
}
function dm(l,a,b){
	return a+dec((b-a)*dec(110*l/(l+6),0)/100,0)
}

function sign(n){
	return n>0?"+"+n:n
}

function getskill(s){
	for (var i=1; i<4; ++i)
		for (var j=0; j<tabs[i].length; ++j)
			if (tabs[i][j] == s)
				return [i,j];
	//alert('skill not found ('+s+')');
	return -1;
}
function blvl(s){
	var t=getskill(s);
	if (t==-1) return 0;
	return parseInt(tabs[t[0]].box[t[1]].value)
}
function lvl(s){
	var t=getskill(s);
	if (t==-1) return 0;
	var b=parseInt(tabs[t[0]].box[t[1]].value);
	return b>0?b+parseInt(tabs[t[0]].plus.value)
		+parseInt(tabs.plus.value):0
}

// concats strings in array a as long as they are all non-empty and non-zero
function cc(a)
{
	for(var i in a)
		if (a[i] == "" || a[i] == "0")
			return "";
	return a.join("");
}

tbl=[]
tbl.StrSklTree4="Skills"
tbl.plus="+"
tbl.to="to"
tbl.partycharama="Amazon"
tbl.partycharass="Assassin"
tbl.partycharbar="Barbarian"
tbl.partychardru="Druid"
tbl.partycharnec="Necromancer"
tbl.partycharpal="Paladin"
tbl.partycharsor="Sorceress"
/*******************************************************************************
 * Include class-specific and languange specific code
 ******************************************************************************/
var s=[]
s.push("<script type='text/javascript' src='")
s.push(location.arg["class"])
s.push("-")
s.push(location.arg["lang"])
s.push(".js'></script>")
document.write(s.join(""))

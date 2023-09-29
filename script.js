//your JS code here. If required.
const p= document.getElementById('time')
const date=new Date();
var hor=date.getHours()
var ampm = hor >= 12 ? 'PM' : 'AM';
hor= hor+12-24;
p.innerText=date.getMonth() +"/"+ date.getDay()+"/"+date.getFullYear()+","+hor+":"+date.getMinutes()+':'+date.getSeconds()+" "+ampm
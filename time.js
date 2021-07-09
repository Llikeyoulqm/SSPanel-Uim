time_is_widget.init({Shanghai_Pudong_International_Airport_z43d:{time_format:"12hours:minutes:secondsAMPM"}});
function geTime1() {
var tew=document.getElementById('nowtime')
var date1=new Date();
var mytime=date1.toLocaleTimeString();
tew.innerHTML=mytime
setTimeout(geTime1, 1000);
}
geTime1();

var msecond=document.getElementById("msec");
var second=document.getElementById("sec");
var minutes=document.getElementById("min");
var mse=0;
var se=0;
var minu=0;
var interval;
var startflag=true;
function start(){
  if(startflag)	{
  interval=setInterval(timer,10);
  startflag=false;
}
}

function pause() {
	clearInterval(interval);
	startflag=true;
}
function Reset(){
	mse=0;
	se=0;
	minu=0;
	clearInterval(interval);
	msecond.innerHTML=mse;
	second.innerHTML=se;
	minutes.innerHTML=minu;
	startflag=true;
}

function timer() {

		mse++;
		msecond.innerHTML=mse;
	if(mse>=100){
		mse=0;
		se++;
		second.innerHTML=se; 
	}
	else if(se>=60){
		se=0;
		minu++;
		minutes.innerHTML=minu; 
	}
}




let beginProgressBar = 0;
let asd="";



function init() {
	$("#b1").click(handleButton1);
	$("#b3").click(handleButton3);
	$("#b7").click(handleButton7);
	// $("#my-progress-bar").width(beginProgressBar);
}


function handleButton1(){
	beginProgressBar = beginProgressBar + 1;
	asd=beginProgressBar+"%";
	$("#my-progress-bar").width(asd);
	console.log(beginProgressBar,asd);
}

function handleButton3(){
	beginProgressBar=beginProgressBar+3;
	asd=beginProgressBar+"%";
	$("#my-progress-bar").width(asd);
	console.log(beginProgressBar,asd);
}

function handleButton7(){
	beginProgressBar=beginProgressBar+7;
	asd=beginProgressBar+"%";
	$("#my-progress-bar").width(asd);
	console.log(beginProgressBar,asd);
}


$(document).ready(init);



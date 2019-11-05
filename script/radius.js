//	radius.js

var setRadius=function(newRadius) {
	// body...
	if(newRadius<minRad)
		newRadius=minRad;
	else if(newRadius>maxRad)
		newRadius=maxRad;
	radius=newRadius==5.5?5:newRadius;
	context.lineWidth=radius*2;
	radSpan.innerHTML=radius;
}

var minRad=0.5,
	maxRad=100,
	defaultRad=15,
	interval=5,
	radSpan=document.getElementById('radval'),
	decRad=document.getElementById('decrad'),
	incRad=document.getElementById('incrad');

decRad.addEventListener('click',function(){
	setRadius(radius-interval);
});
incRad.addEventListener('click',function(){
	setRadius(radius+interval);
});

setRadius(defaultRad);
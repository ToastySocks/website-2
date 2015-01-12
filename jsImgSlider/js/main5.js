// JavaScript Document
window.onload = function() {
	// start the JS functions

	var canvas = document.getElementById("bannercanvas");
	var context = canvas.getContext("2d");




	var width = 900;
	var height = 300;
	var objects  = new Array();
	var numObjects = 19;





	for (var i = 0; i < numObjects; i++){
		var o = new Object();
		o.size =Math.random() * 10;
		o.cx = Math.floor(Math.random() * width-o.size)+o.size;
		o.cy = Math.floor(Math.random() * height-o.size)+o.size;
		o.xr = width * .5 -o.size; // x radius for elliptical path
		o.yr = height * .2 -o.size; // x radius for elliptical path
		o.angleX = Math.floor(Math.random() * 360);
		o.angleY = Math.floor(Math.random() * 360);
		o.speedX = (Math.random() * .01);
		o.speedY = (Math.random() * .01);
		o.color = '#'+Math.floor(Math.random()*16777215).toString(16); //color gen****************
		objects.push(o);
	}
	

	
	// move many objects
	
	render();
	
	function render() {
		
		context.clearRect(0,0,width, height + 300);
		
		objects.forEach(function(o){
			var x = o.xr * Math.cos(o.angleX);
			var y = o.yr * Math.sin(o.angleY);
		
			context.fillStyle = o.color;
			context.beginPath();
			
			context.arc(o.cx + x, o.cy+ y, o.size, Math.PI * 0 , Math.PI * 2, false);
			context.fill();
		
			o.angleX+=o.speedX;
			o.angleY+=o.speedY;
		});
		
		
		requestAnimationFrame(render);	
	}
};
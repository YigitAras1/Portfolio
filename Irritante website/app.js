

document.addEventListener('keydown', (e) => {
  if (e.code === "Space") {
      heelIrritant();
  }
});

function heelIrritant(){
javascript: var r = 0;
var x1 = 0.1; 
var y1 = 0.05; 
var x2 = 0.25; 
var y2 = 0.24; 
var x3 = 1.6; 
var y3 = 0.24; 
var x4 = 300; 
var y4 = 200; 
var x5 = 300; 
var y5 = 200; 


//POSITIE VAN DE DIV'S BEWEGEN

var theElem = document.getElementsByTagName("div");
 function aaa(){ for(i=0;
 i<theElem.length; i++){ elemStyle = theElem[i].style;
 elemStyle.position = "absolute"; 
 elemStyle.left = Math.sin(r*x1+i*x2+x3)*x4+x5+"px";
 elemStyle.top = Math.cos(r*y1+i*y2+y3 )*y4+y5+"px";
 } r++; } setInterval(aaa,30); void(0)



//ACHTERGROND VERANDEREN IN RANDOM KLEUREN

function irritant() {
  function r() { return Math.floor(Math.random() * 255); }
function fakk(){ this.style.color = ['rgb(',[r(),r(),r()].join(','),')'].join(''),
this.style.backgroundColor = ['rgb(',[r(),r(),r()].join(','),')'].join(''); }
[].forEach.call(document.all, function(item) {
    setTimeout(function() {fakk.call(item)}, (Math.random()*500)+100)
});
}

setInterval(irritant, 200);

//WINDOW OPENEN OP EEN RANDOM PLEK EN DAARNA SLUITEN
var newWindow;
	
	setInterval(function(){
        var RandomX = (Math.random() * 1024) + 1;
        var RandomY = (Math.random() * 768) + 1;
	var specs = "height=100px, width=100px, left=" + RandomX + ", top=" + RandomY;
  
	newWindow = window.open("","test", specs);
	}, 80);

    
	
	setInterval(function(){
	newWindow.close();
	}, 50);
}

	

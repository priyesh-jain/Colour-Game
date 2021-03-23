/*var colors= [
         "rgb(255, 0, 0)",
         "rgb(0, 0, 255)",
         "rgb(255, 0, 255)",
         "rgb(255, 255, 0)",
         "rgb(255, 255, 211)",
         "rgb(0, 255, 255)",
         "rgb(255, 0, 0)"
    ]
*/
var numsquares=6;
var colors=generaterandomcolor(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
//var pickedcolor=colors[1];
var colordisplay=document.getElementById('colordisplay');
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares=3;
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	for(var i =0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.background=colors[i];
	}
	 else{
	 	squares[i].style.display="none";
	 }
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");

	numsquares=6;
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	for(var i =0;i<squares.length;i++){
		
		squares[i].style.background=colors[i];
	
	 	squares[i].style.display="block";
	 
	}
});


resetbutton.addEventListener("click",function(){
	//alert("button is clicked");
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	this.textContent="New Colors";
	messagedisplay.textContent="";
	for(var i =0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	//h1.style.background:"steelblue";
});

colordisplay.textContent=pickedcolor;

	for(var i =0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].addEventListener("click",function(){
			//alert("clicked a square");
		   var clickedcolor = this.style.background;
	      if(clickedcolor  === pickedcolor){
	      	messagedisplay.textContent="correct";
	      	resetbutton.textContent="play again";
	      	changecolor(clickedcolor);
	      	h1.style.background=clickedcolor;
	      }
	      else{
	      	this.style.background="#232323";
	      	messagedisplay.textContent="try again";
	      }
        
		});
	}

	function changecolor(color){
		for(var i=0;i<squares.length;i++){
			squares[i].style.background=color;
		}
	}

	function pickColor(){
   var random=Math.floor(Math.random()*colors.length)+1;
   return colors[random];
	}

	function generaterandomcolor(num){
       
       var arr=[]
       for(var i=0;i<num;i++){
       	arr.push(randomcolor())
       }
      return arr;
	}

	function randomcolor(){
      
      var r=Math.floor(Math.random()*256);
     
       var g=Math.floor(Math.random()*256);

         var b=Math.floor(Math.random()*256);

         return "rgb(" + r +", " +g + ", " + b + ")";

	}
//
// ARPIE.js
//
$(document).ready(function() {


  // onload, set timeout for loading screen
  setTimeout(function(){
    console.log('Ready');
    $("#loading").hide();
    $("#fullpage").fadeIn(1500);
    $("#navbar").fadeIn(1500);
  }, 2300);



  //----------------
      // Thanks Shrine!
      //----------------
      (function() {
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
      })();


     var canvas = document.getElementById('myCanvas');
     var context = canvas.getContext('2d');
     var x = canvas.width / 2;
     var y = canvas.height / 2;
     var radius = 75;
     var endPercent = 50;
     var curPerc = 100;
     var counterClockwise = true;
     var circ = Math.PI * 2;
     var quart = Math.PI*2;

     var a=x;
     var b=y;

     context.lineWidth = 20;
     context.strokeStyle = '#EF7F1A';
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
     context.shadowBlur = 0;
     context.shadowColor = '#000000';


     context.scale(1.2,1.2);



     function animate(current) {

     if (curPerc-2 >= endPercent) {
     		 a=x+(radius*Math.cos((circ*current)+quart));
     		 b=y+(radius*Math.sin((circ*current)+quart));
     }

         context.clearRect(0, 0, canvas.width, canvas.height);
         // Orange Arc
         context.lineWidth = 20;
         context.strokeStyle = '#ff6f58';
         context.beginPath();
         context.arc(x, y, radius, (quart), ((circ) * current) + quart, true);
         context.stroke();

         // masking (cutout) operation
         context.globalCompositeOperation = "destination-out";
         context.lineWidth = 15;
         context.fillStyle = '#037C48';     // green ball
         context.beginPath();
         context.arc(a, b, 10, 0, circ, counterClockwise);
         context.stroke();
         context.fill();
         context.globalCompositeOperation = "source-over";
         // Yellow Arc
         context.lineWidth = 30;
         context.strokeStyle = '#F3E209';
         context.beginPath();
         context.arc(x, y, radius-35, (quart), ((circ) * current) + quart, counterClockwise);
         context.stroke();
         // Blue Arc
         context.lineWidth = 5;
         context.fillStyle = '#2297de';
         context.beginPath();
         context.arc(x, y, radius-60, (quart), ((circ) * current) + quart, counterClockwise);
         context.fill();
         // Blue Ball
    		 context.lineWidth = 15;
         context.fillStyle = '#39a557';     // green ball
      	 context.beginPath();
         context.arc(a, b, 10, 0, circ, counterClockwise);
      	 context.fill();

         curPerc--;
         if (curPerc >= endPercent) {
           setTimeout(function(){
             requestAnimationFrame(function () {
                 animate(curPerc / 100)
             });
           }, 30);



         }
     }
     // setTimeout(function(){
     //   animate();
     //  }, 1300);


     console.log('ANIMATE NOW');
     animated = true;
     animate();

      //
      // End Animation



});

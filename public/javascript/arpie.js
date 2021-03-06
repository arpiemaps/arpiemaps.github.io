//
// ARPIE.js
//
$(document).ready(function() {


  // onload, set timeout for loading screen
  // setTimeout(function(){
  //   console.log('Ready');
  //   $("#loading").hide();
  //   $("#fullpage").fadeIn(1500);
  //   $("#navbar").fadeIn(1500);
  // }, 2300);

  //
  // $('#fullpage').fullpage({
  // // new fullpage('#fullpage',{
  //   //Navigation
  //   menu: '#menu',
  //   lockAnchors: false,
  //   navigation: true,
  // //Scrolling
  // css3: true,
  // scrollingSpeed: 1200,
  // autoScrolling: true,
  // fitToSection: true,
  // fitToSectionDelay: 1000,
  // scrollBar: false,
  // easing: 'easeInOutCubic',
  // easingcss3: 'ease',
  // loopBottom: false,
  // loopTop: false,
  // loopHorizontal: true,
  // continuousVertical: false,
  // continuousHorizontal: false,
  // scrollHorizontally: false,
  // interlockedSlides: false,
  // dragAndMove: true,
  // offsetSections: false,
  // resetSliders: false,
  // fadingEffect: false,
  // scrollOverflow: false,
  // scrollOverflowReset: false,
  // scrollOverflowOptions: null,
  // touchSensitivity: 20,
  // normalScrollElementTouchThreshold: 1,
  // bigSectionsDestination: null,
  //
  // //Accessibility
  // keyboardScrolling: true,
  // animateAnchor: true,
  // recordHistory: true,
  // });
  //
  //
  // //methods
  // $.fn.fullpage.setAllowScrolling(true);
  //
  //
  //
  // // This binds the mouse scroll to the page views
  // $('html').bind('mousewheel DOMMouseScroll', function (e) {
  //   // console.log('bingo');
  // });
  //
  //
  // // learn more button
  // $("#learnMore").click(()=>{
  //   $.fn.fullpage.moveSectionDown();
  // });
  //



  $("#learnMore").click(()=>{
    var offset = 50; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#section1").offset().top - offset
    }, 2000);
  });




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

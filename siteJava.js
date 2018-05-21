$.scrollify({
    section : ".scrollSnap",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });


/*
var currentPosition=0;
var heightToGo = 0;
var currentHeight = heightToGo;
var windowHeight = window.innerHeight;


var updateRate = 1000/60;

function sideBarMove(direction){
  if(direction == 1)
    heightToGo -= windowHeight;

  else if(direction == -1)
    heightToGo += windowHeight;

  if(heightToGo)
}


Update();
setInterval(Update,updateRate);

function Update(){
  windowHeight = window.innerHeight;
  currentHeight += (heightToGo - currentHeight) * 0.1;
  window.scrollTo(0,currentHeight);
}
*/

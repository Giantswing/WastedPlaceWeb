var updateRate = 1000/20;

var barTopButton = document.getElementById("sideBarTop");
var barUpButton = document.getElementById("sideBarUp");
var barDownButton = document.getElementById("sideBarDown");

var siteWidth = window.innerWidth;
var siteIndex=0;

Update();
setInterval(Update,updateRate);

function Update(){
  siteWidth = window.innerWidth;


  siteIndex = $.scrollify.returnIndex();
  if(siteIndex == 0){
    barTopButton.style.display = "none";
    barUpButton.style.display = "none";
    barDownButton.style.display = "block";

    //barUpButton.style.visibility = "hidden";
    //barTopButton.style.visibility = "hidden";

  }
  else if(siteIndex == 5){
    barTopButton.style.display = "block";
    barUpButton.style.display = "block";
    barDownButton.style.display = "none";
  }
  else{
    barTopButton.style.display = "block";
    barUpButton.style.display = "block";
    barDownButton.style.display = "block";
  }

  if(siteWidth < 800){
    barTopButton.style.display = "none";
    barUpButton.style.display = "none";
    barDownButton.style.display = "none";
  }
}


$.scrollify({
  section : ".scrollSnap",
  sectionName : "section-name",
  interstitialSection : "",
  easing: "easeOutExpo",
  scrollSpeed: 700,
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

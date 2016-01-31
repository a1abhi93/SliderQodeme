

var wrapper    = $("#site-wrapper"),
    menu       = $(".menu"),
    menuLinks  = $(".menu ul li a"),
    toggle     = $(".nav-toggle"),
    toggleIcon = $(".nav-toggle span");

function toggleThatNav() {
  if (menu.hasClass("show-nav")) {
    
      menu.removeClass("show-nav");
      toggle.removeClass("show-nav");
    
  } else {
  
      menu.addClass("show-nav");
      toggle.addClass("show-nav");
    
  }
}

function changeToggleClass() {
  toggleIcon.toggleClass("fa-times");
  toggleIcon.toggleClass("fa-bars");
}

$(function() {
  toggle.on("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleThatNav();
    changeToggleClass();
  });

    // Keyboard Esc event support
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      if (menu.hasClass("show-nav")) {
       
          menu.removeClass("show-nav");
          toggle.removeClass("show-nav");
          changeToggleClass();
        
      }
    } 
  });
});

// JavaScript Document
//==============================================Slider Starts
sliderint = 1;
sliderNext = 2;
$(document).ready(function(){
	$("#slider .slide#1").fadeIn(300);
	$("#slider .slide .sliedeOne").animate({"left":"32%"},900);
	startSlider();
						   
});

function startSlider(){
	count = $("#slider > .slide").size();
	loop = setInterval(function(){
			
			if(sliderNext > count){
				
				sliderNext = 1;
				sliderint = 1;
				
				}
			
			$("#slider > .slide").fadeOut(200);
			$("#slider .slide .sliedeOne").animate({"left":"-100%"},500);
			$("#slider > .slide#"+sliderNext).fadeIn(1500);
			$("#slider .slide .sliedeOne").animate({"left":"32%"},900);
			
			$("#slider .slide .slideTwo").animate({"left":"-100%"},500);
			$("#slider .slide .slideTwo").animate({"left":"15%"},900);
			
			$("#slider .slide .slideThree").animate({"left":"-100%"},500);
			$("#slider .slide .slideThree").animate({"left":"12%"},900);
			
			sliderint = sliderNext;
			sliderNext = sliderNext+1;
			
		   },3000);
	}

function prev(){
	newSlide= sliderint-1;
	showSlide(newSlide);
	}
	
function next(){
	newSlide= sliderint+1;
	showSlide(newSlide);
	}
	
function stopLoop(){
	
	window.clearInterval(loop);
	
	}
	
function showSlide(Id){
	
			stopLoop();
			if(Id > count){
				 Id=1;
				}
				else if(Id < 1){
				 Id= count;	
				}
			
			$("#slider > .slide").fadeOut(500);
			$("#slider .slide .sliedeOne").animate({"left":"-100%"},500);
			$("#slider > .slide#"+Id).fadeIn(1500);
			$("#slider .slide .sliedeOne").animate({"left":"32%"},900);
			
			$("#slider .slide .slideTwo").animate({"left":"-100%"},500);
			$("#slider .slide .slideTwo").animate({"left":"15%"},900);
			
			$("#slider .slide .slideThree").animate({"left":"-100%"},500);
			$("#slider .slide .slideThree").animate({"left":"12%"},900);
			
			sliderint = Id;
			sliderNext = Id+1;
			startSlider();
	
	}

/*$("#slider > .slide").hover(
							
	function(){
		stopLoop();
		},
	function(){
	    startSlider();
		}
	)*/
//=======================================================================Slider end

$(document).ready(function() {

	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});
});
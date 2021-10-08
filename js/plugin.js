$(function(){
    "use strict";
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        //change the bg of nav bar
        if( scroll > 0){
            $(".nav-container").addClass("background-show")
            
        }else{
            $(".nav-container").removeClass("background-show")
        }
        
        //scroll to top button
        if(scroll >= 900){

            $(".btn-up").fadeIn(1000)

        }else{
            $(".btn-up").fadeOut(500)
        }
    })

    //click on btn-up 
    $(".btn-up").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })


    $(".btn-submit").on("click", function(e){
        e.preventDefault();
        $(".over-page").addClass("overpage")
        $(".over-page span").on("click", function(){
            $(".over-page").removeClass("overpage")
            
        })
        $(".name-val").text("Name: " + $(".inp-container input:nth-child(1)").val())
        $(".number-val").text("Phone Number: " + $(".inp-container input:nth-child(2)").val())
        $(".where-val").text("Country: " +$(".inp-container input:nth-child(3)").val())
        $(".date-val").text("Date: "+ $(".inp-container input:nth-child(4)").val())
        $(".start-val").text("Start: "+ $(".inp-container input:nth-child(5)").val())
        $(".end-val").text("End: " + $(".inp-container input:nth-child(6)").val())
        $(".car-val").text("Car Selected: " + $("select option:selected").val())

    })

    $(".menu-btn").on("click", function(){
        $(".ul-container ul").toggleClass("show-nav")
    })



})

var allLinks = document.querySelectorAll(".ul-container ul li");

function scrolling(links){
    links.forEach(link => {
        link.addEventListener('click', (e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
scrolling(allLinks)

var toggleMenu = document.querySelector('.menu-btn'),
    ulLinks = document.querySelector(".ul-container ul");

toggleMenu.onclick = function(e){
    e.stopPropagation();
    document.querySelector(".ul-container").classList.toggle("show-nav")
}
document.addEventListener('click', (e) => {
    if(e.target !== toggleMenu && e.target !== ulLinks){

        if(ulLinks.classList.contains("show-nav")){

            ulLinks.classList.toggle("show-nav")
        }else{console.log("salute")}
    }
})
ulLinks.onclick = function (e){
    e.stopPropagation()
}
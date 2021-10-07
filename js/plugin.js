$(function(){
    "use strict";
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if( scroll > 0){
            $(".nav-container").addClass("background-show")
            
        }else{
            $(".nav-container").removeClass("background-show")
        }
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


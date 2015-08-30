/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    console.log("ready");
    
    $(window).resize(function(){
        var largura = $(window).width();
        var altura = $(window).height();
        console.log("resize: (" + largura + ", " + altura + ")");
    });
    
    $(window).scroll(function(){
        var x = $(window).scrollLeft();
        var y = $(window).scrollTop();
        console.log("scroll: (" + x + ", " + y + ")");
    });
});
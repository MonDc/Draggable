$(document).ready(function(){
    var mousedivDown=false
    var diffX=0;
    var diffY=0;
    $(".draggable").mousedown(function(e){
        console.log("div mouse down");
        let draggableDivPosition=$(".draggable").position();
        console.log(draggableDivPosition)
        mousedivDown=true;
        diffX=e.clientX-draggableDivPosition.left; //calculate x diffrence between mouse down and left div
        diffY=e.clientY-draggableDivPosition.top;//calculate y diffrence between mouse down and top div
    });
    $(".draggable").mouseup(function(){
        console.log("div mouse up");
        mousedivDown=false;
    });
    $("body").mousemove(function(e){ 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        if(mousedivDown){
            $(".draggable").css("top", e.clientY-diffY);
            $(".draggable").css("left", e.clientX-diffX);
        }
    })  
})
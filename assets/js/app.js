//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//click trash icon to delete
$("ul").on("click", " span",function(event){
    $(this).parent().fadeOut(400,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        //get new task from input
        var todoText = $(this).val();
        $(this).val("");
        //append new li to the ul
        $("ul").append("<li><span>fa-plus</span> " + todoText + "</li>")
    }
});
    


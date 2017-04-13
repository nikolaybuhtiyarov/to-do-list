// Check off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to deleto Todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
event.stopPropagation();

});

// Selectin the input field

$("input[type='text']").keypress(function(event){
    // Fires only if the pressed key is Enter (13 value)
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
});

// Plus button toggle
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
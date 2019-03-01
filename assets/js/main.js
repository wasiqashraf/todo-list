//Adding click listener & style to the list
$('ul').on('click', 'li', function(){
    $(this).toggleClass('listStyle');
})

//Remove items from the list & stop event bubbling 
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

//Adding new item to the list
$('input').keypress(function(event){
    if(event.which===13){
        $('ul').append('<li><span><i class="fas fa-trash"></i></span>' + $(this).val()+'</li>');
        $(this).val('');
    }
})

//Pencil Logo
$('.fa-pencil-alt').on('click',function(){
    $('input').fadeToggle(300);
})


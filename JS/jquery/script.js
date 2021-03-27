$('body').append('<h1> Hay there</h1>');
$('h1').css({
    'background':'red',
    'color':'white',
})
let i = 0;
$('.add').click(function (e) { 
    e.preventDefault();
    let $item = $('<li> Hay this is item '+i+' </li>');
    $item.attr('id',i);
    $($item).appendTo('ol');
    i++;
});

$('.addcss').click(function (e) { 
    e.preventDefault();
    $('li').css({
        'color':'red',
        'background':'black',
        'margin':'10px'
    });
});

$(document).ready(function () {
    $('.addbox').click(function (e) { 
    e.preventDefault();
    $('<div></div>').css({
        'background':'red',
        'height':'100px',
        'width':'100px'
    }).insertAfter('ol');
});
});

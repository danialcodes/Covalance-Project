const color = ['red', 'green', 'blue', 'yellow', 'black', 'brown'];
$(document).ready(function () {
    $('<input></input>').attr({
        'type':"submit",
        'id':"btnSubmit",
        'value':"Submit"
    }).appendTo('body');
    $('#btnSubmit').click(function (e) { 
        e.preventDefault();
        alert("Button clicked");
    });
    $('<form></form').appendTo('body');
    $('<input type="text"  id="value"> <input autocomplete type="submit" class="value" disabled> ').appendTo('form');
    $('<ul></ul>').appendTo('body');
    $('#value').keypress(function (e) { 
        $('.value').prop('disabled',false);
    });
    let count=0;
    $('.value').click(function (e) { 
        e.preventDefault();
        // $('<h2>'+$('input#value').val()+'</h2>').appendTo('div');
        // $('h2').hover(function () {
        //     $('h2').css({
        //             'background':'black',
        //             'color':'green',
        //             'border-radius':'2px'
        //         });
                
        //     }, function () {
        //         // out
        //         $('h2').removeAttr('style');
        //     }
        // );
        count+=1;
        $('<li>'+$('input#value').val()+'</li>').attr('id',count).appendTo('ul');
        $('#'+count).click(function (e) { 
            e.preventDefault();
            let random1 = Math.floor(Math.random() * 255);
            let random2 = Math.floor(Math.random() * 255);
            let random3 = Math.floor(Math.random() * 255);
            $("#"+this.id).css({
                'color': 'rgb('+random1+','+random2+','+random3+')'
            });
        });
        $('#'+count).dblclick(function (e) {
            e.preventDefault();
            this.remove();
        });
    });
    
});
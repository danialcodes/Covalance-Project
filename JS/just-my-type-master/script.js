let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
$(document).ready(function () {
    let upper = $('#keyboard-upper-container');
    let lower = $('#keyboard-lower-container');
    upper.hide();

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {

            upper.show();
            lower.hide();
        }
        // console.log(e.keyCode);
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 16) {

            upper.hide();
            lower.show();
        }
    });

    $(document).keypress(function (e) {
        let key = $('#' + e.which);
        key.css('background', "yellow");
        
        $(document).keyup(function (e) {
            key.css('background', "");
        });

    });
    let sc = 0;
    $('#sentence').text(sentences[sc]);

});
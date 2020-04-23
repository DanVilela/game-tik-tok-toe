var round = 1;
var array_game = Array(3);

$(document).ready (function() {

    $('#btn_play_game').click (function(){

        //to validate nicknames

        if($('#enter_player_1').val() == '') {
            alert('The nickname of player 01 was not filled');
            return false;
        }
        
        if($('#enter_player_2').val() == '') {
            alert('The nickname of player 02 was not filled');
            return false;
        }

        // display nicknames on players

        $('#name_player_1').html($('#enter_player_1').val());
        $('#name_player_2').html($('#enter_player_2').val());
    

        // Control hide and show divs
        $('#home_page').hide();
        $('#game').show();

    });

    $('.move').click( function() {

        var id_clicked_space = this.id;
        move(id_clicked_space);
 
    });

    function move(id) {
        var icon = '';
        var point = 0;

        if((round % 2) == 1) {
           icon = 'url("img/X.png")';
           point = -1;
        }

        else  {
            icon = 'url("img/O.png")';
            point = 1;
        }

      round++;

      $('#'+id).css('background-image', icon);

    }

});
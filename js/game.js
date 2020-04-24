var round = 1;
var matrix_game = Array(3);

//matriz bidimensional

matrix_game['a'] = Array(3);
matrix_game['b'] = Array(3);
matrix_game['c'] = Array(3);

matrix_game['a'][1] = 0;
matrix_game['a'][2] = 0;
matrix_game['a'][3] = 0;

matrix_game['b'][1] = 0;
matrix_game['b'][2] = 0;
matrix_game['b'][3] = 0;

matrix_game['c'][1] = 0;
matrix_game['c'][2] = 0;
matrix_game['c'][3] = 0;


$(document).ready( function() {

    $('#btn_play_game').click( function(){

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
        $('#' + id_clicked_space).off();
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

      var line_column = id.split('-');

      matrix_game[line_column[0]][line_column[1]] = point;

      check_combination();

    }

    function check_combination() {

        // check-in horizontal

        var points = 0;
        for(var i = 1; i <= 3; i++){
            points = points + matrix_game['a'][i];
        }
        winner(points);

        points = 0;
        for(var i = 1; i <= 3; i++){
            points = points + matrix_game['b'][i];
        }
        winner(points);

        var points = 0;
        for(var i = 1; i <= 3; i++){
            points = points + matrix_game['c'][i];
        }
        winner(points);

        //check-in vertical

        for(var l = 1; l <= 3; l++){
            points = 0;
            points += matrix_game['a'][l];
            points += matrix_game['b'][l];
            points += matrix_game['c'][l];

            winner(points);
        }

        //check-in diagonal

        points = 0;
        points = matrix_game['a'][1] + matrix_game['b'][2] + matrix_game['c'][3];
        winner(points);

        points = 0;
        points = matrix_game['a'][3] + matrix_game['b'][2] + matrix_game['c'][1];
        winner(points);
    }

     function winner(points){
         if(points == -3){
             var move_1 = $('#enter_player_1').val();
             alert(move_1 + 'is the winner');
             $('.move').off();
         }

         else if(points == 3){
            var move_2 = $('#enter_player_2').val();
            alert(move_2 + 'is the winner');
            $('.move').off();
         }

     }


    
});
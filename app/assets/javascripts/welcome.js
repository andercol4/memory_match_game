// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  var matching = [];
  var matchItems = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  var matchCount = 0;
  $('.memory').each(function(){
    $(this).click(function(){
      if ($(this).children('p:first').hasClass('hide') && $(this).children('p:first').text().trim() != ''){
        $(this).children('p:first').removeClass('hide');
        $(this).children('p:first').addClass('find_me');
        matching.push(parseInt($(this).children('p:first').text().trim()));
        match()
      }
      // else {
      //   alert('Taken')
      // }
    });
  });

  $('#new_game').click(function(){
    newMatchGame()
  });

  function match(){
    if (matching.length == 2){
      if (matching[0] == matching[1]){
        alert('Match');
        matched()
      } else {
        alert('Not a match');
        resetBoard();
      }
      matching = [];
    }
  }

  function newMatchGame(){
  matchItems = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  var tableOrder = shuffle(matchItems);
  $('.memory').each(function(){
    $(this).children('p:first').text(tableOrder.pop())
    $(this).children('p:first').addClass('hide');
  });
}

  function resetBoard(){
    $('.find_me').each(function(){
      $(this).addClass('hide');
      $(this).removeClass('find_me');
    });
  }

  function matched(){
    $('.find_me').each(function(){
      $(this).addClass('matched');
      $(this).removeClass('find_me');
    });
    matchCount++
    if (matchCount == 8) {
      alert('Game over')
      $('.matched').each(function(){
        $(this).removeClass('matched');
      });
    }
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

});

function rollDice() {
  return Math.ceil(Math.random() * 6);
}


var p1rolls = 0;
var p1rollsarray = [];
var p1total = 0;

var p2rolls = 0;
var p2rollsarray = [];
var p2total = 0;

function checkWinner() {
  if (p1total >= 100 && p1total > p2total) {
    $('#p1').hide(300);
    $('#p2').hide(300);
    $('#diswin').show(300)
    $('#diswin').append(`
        <div class = 'card-body'> 
          <p style='text-align:center;'>The winner is player1 with a total score of ${p1total}</p>
      </div>
    `);
  } else if (p2total >= 100 && p2total > p1total) {
    $('#p2').hide(300);
    $('#p1').hide(300);
    $('#diswin').show(300)
    $('#diswin').append(`
        <div class = 'card-body'> 
          <p style='text-align:center;'>The winner is player2 with a total score of ${p2total}</p>
      </div>
    `);
  };
};



$().ready(() => {
  // player 1

  $('#form-player1').on('submit', (e) => {
    e.preventDefault();
    var name = $(".name1").val();
    $('.player1name').text(name);
    $('#form-player1').hide();
    $('#p1').show();
  });


  $('#btnp1roll').on('click', () => {
    $('#btnp2roll').attr('disabled', true);
    $('#btnp2pass').attr('disabled', true);
    $('#btnp1pass').attr('disabled', false);
    var p1rollval = rollDice();

    if (p1rollval == 1) {
      alert('you have rolled a one, pass to next player')
    } else {
      p1rollsarray.push(p1rollval);
      var totalScore = p1rollsarray.reduce((prevVal, currentVal) => {
        return prevVal + currentVal;
      });
      p1total = totalScore;
      $('#p1score').text(totalScore);
      p1rolls++;
      $('#btn1').text(p1rolls);
      $('#p1 ul').prepend(`<li>Roll ${p1rolls} value is ${p1rollval}.</li>`);
      checkWinner();
    }
  });


  $('#btnp1pass').on('click', () => {
    $('#btnp2roll').attr('disabled', false);
    $('#btnp1pass').attr('disabled', true);
    $('#btnp1roll').attr('disabled', true);
  });

  // player 2

  $('#form-player2').on('submit', (e) => {
    e.preventDefault();
    var name = $(".name2").val();
    $('.player2name').text(name);
    $('#form-player2').hide();
    $('#p2').show();
  });

  $('#btnp2roll').on('click', () => {
    $('#btnp2pass').attr('disabled', false);
    $('#btnp1roll').attr('disabled', true);
    $('#btnp1pass').attr('disabled', true);
    var p2rollval = rollDice();


    if (p2rollval == 1) {
      alert('you have rolled a one, pass to next player')
    } else {
      p2rollsarray.push(p2rollval);
      var totalScore = p2rollsarray.reduce((prevVal, currentVal) => {
        return prevVal + currentVal;
      });
      p2total = totalScore;
      $('#p2score').text(totalScore);
      p2rolls++;
      $('#btn2').text(p2rolls)
      $('#p2 ul').prepend(`<li>Roll ${p2rolls} value is ${p2rollval}.</li>`);
      checkWinner();
    }
  });

  $('#btnp2pass').on('click', () => {
    $('#btnp1roll').attr('disabled', false);
    $('#btnp2roll').attr('disabled', true);
    $('#btnp2pass').attr('disabled', true);
  });
});
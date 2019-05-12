function rollDice(){
  return Math.ceil(Math.random() * 6);

}


var p1rolls = 0;
var p1rollsarray = [];
var p1total = 0;

var p2rolls = 0;
var p2rollsarray = [];
var p2total = 0;

function checkWinner(){
  if (p1total >= 100 && p1total>p2total){
    $('#p1').hide(300);
    $('#p2').hide(300);
    $('#diswin').show(300)
    $('#diswin').append(`
      <div class = 'card' style = 'margin:10%'>
        <div class = 'card-body'> 
          <p style='text-align:center;'>The winner is player1 with a total score of ${p1total}</p>
        </div>
      </div>
    `);
  } else if (p2total >= 100 && p2total>p1total){
    $('#p2').hide(300);
    $('#p1').hide(300);
    $('#diswin').show(300)
    $('#diswin').append(`
      <div class = 'card' style = 'margin:10%'>
        <div class = 'card-body'> 
          <p style='text-align:center;'>The winner is player2 with a total score of ${p2total}</p>
        </div>
      </div>
    `);
  };
};


$().ready(()=>{
  // player 1
  $('#btnp1roll').on('click',()=>{
    $('#btnp2roll').addClass('disabled');
    $('#btnp2pass').addClass('disabled');
    $('#btnp1pass').removeClass('disabled');
    var p1rollval = rollDice();
    p1rollsarray.push(p1rollval);
    var totalScore = p1rollsarray.reduce((prevVal,currentVal)=>{
      return prevVal+currentVal;
    });
    p1total = totalScore;
    $('#p1score').text(totalScore);
    p1rolls++;
    $('#btn1').text(p1rolls);
    $('#p1 ul').prepend(`<li>Roll ${p1rolls} value is ${p1rollval}.</li>`);
    checkWinner();
  });



  $('#btnp1pass').on('click',()=>{
    $('#btnp2roll').removeClass('disabled');
    $('#btnp1pass').addClass('disabled');
    $('#btnp1roll').addClass('disabled');
  });

  // player 2

 
});
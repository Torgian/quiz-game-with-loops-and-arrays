var correct = (0);
var incorrect = (0);
var correctQu = [];
var incorrectQu= [];
var quiz = [
  ['What car company makes the Golf GTI?', 'volkswagen'],
  ['What color is Himeji Castle?', 'white'],
  ['Who makes the Macintosh?', 'apple']
];

/* for loop to run through quiz questions */
for (var i=0; i < quiz.length; i += 1) {
  var question = prompt(quiz[i][0]).toLowerCase();
  //correct answer? If so, it pushest o the correctQu list.
  if (question === quiz[i][1]) {
    alert('That is correct!');    
    correctQu.push(quiz[i][0]);
    correct += 1;
  } else {  //incorrect answer, pushes to array and the incorrect list.
    alert('That is incorrect.');
    incorrectQu.push(quiz[i][0]);
    incorrect += 1;
  }
}

function print(message) {
   document.write(message);
}
//printList function to run program
function printList(list) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

if (correct >= 1) {
  print('You answered ' + correct + ' question(s) correct.');
  printList(correctQu);
}

if (incorrect >= 1) {
  print('You answered ' + incorrect +' question(s) incorrectly.');
  printList(incorrectQu);
}


function validate(attempt, answer) {
  var studentAnswer = attempt.value;
  var correctAnswer = answer;
  result = ""
  for (var i = 0; i< correctAnswer.length; i ++) {
    var answerX = correctAnswer.charAt(i);
    var attemptX = studentAnswer.charAt(i);
    if (answerX == attemptX) {
      result = result + answerX;
    } else {
      result = result +  "*";
    }
  }
  attempt.value = result;
}

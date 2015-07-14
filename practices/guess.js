'use strict';

var AnswerGenerator = require("./answerGenerator.js");
var ComparaNumber = require("./compareNumber.js");

function Guess() {
    this.srcNumber = new AnswerGenerator().getNumberFour();
}

Guess.prototype.inValue = function(value) {
    var compareNumber = new ComparaNumber(this.srcNumber)

    return compareNumber.comparison(value);
}

module.exports = Guess;

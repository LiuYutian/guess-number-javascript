'use strict';

var AnswerGenerator = require("./answerGenerator.js");
var ComparaNumber = require("./compareNumber.js");

function Guess() {
    this.srcNumber = new AnswerGenerator().getNumberFour();
}

Guess.prototype.inValue = function(value) {
    var compareNumber = new ComparaNumber()

    return compareNumber.comparison(value, this.srcNumber);
}

module.exports = Guess;

'use strict';

function AnswerGenerator() {}

AnswerGenerator.prototype.getNumberFour = function() {
    var result = "";
    while(result.length < 4) {
        var value = Math.floor(Math.random() * 10);

        if(result.indexOf(value) === -1) {
            result += value;
        }
    }

    return result;
}

module.exports = AnswerGenerator;

'use strict';

function AnswerGenerator() {
    this.result = "";
}

AnswerGenerator.prototype.getNumberFour = function() {
    while(this.result.length < 4) {
        var value = Math.floor(Math.random() * 10);

        if(this.result.indexOf(value) === -1) {
            this.result += value;
        }
    }

    return this.result;
}

module.exports = AnswerGenerator;

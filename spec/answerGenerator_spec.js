'use strict';

var AnswerGenerator = require("../practices/answerGenerator.js");

describe("answerGenerator", function() {
    describe("#getNumberFour()", function() {
        var answerGenerator = new AnswerGenerator();
        var returnValue;
        var i = 0;

        beforeEach(function() {
            i = 0;
            spyOn(Math, "random").and.callFake(function() {
                return returnValue[i++];
            });
        });

        it("normal test", function() {
            returnValue = [0.123, 0.345, 0.567, 0.789];

            var number = answerGenerator.getNumberFour();

            expect(number).toEqual("1357");
        });

        it("desc test", function() {
            returnValue = [0.723, 0.445, 0.667, 0.889];
            var number = answerGenerator.getNumberFour();

            expect(number).toEqual("7468");
        });

        it("repeat test", function() {
            returnValue = [0.123, 0.145, 0.267, 0.489, 0.9999, 0.33333];
            var number = answerGenerator.getNumberFour();

            expect(number).toEqual("1249");
        });

        it("0 test", function() {
            returnValue = [0.023, 0.145, 0.267, 0.489, 0.9999, 0.33333];
            var number = answerGenerator.getNumberFour();

            expect(number).toEqual("0124");
        });
    });
});

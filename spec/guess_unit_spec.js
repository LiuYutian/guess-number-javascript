'use strict';

var Guess = require("../practices/guess.js");
var AnswerGenerator = require("../practices/answerGenerator.js");
var CompareNumber = require("../practices/compareNumber.js");

describe("Guess_unit", function() {
    var getNumberValue;
    var comparisonValue;
    var afferent;

    beforeEach(function() {
        spyOn(AnswerGenerator.prototype, "getNumberFour").and.callFake(function() {
            return getNumberValue;
        });

        spyOn(CompareNumber.prototype, "comparison").and.callFake(function(value) {
            if(value === afferent) {
                return comparisonValue;
            }

        });
    });

    it("#inValue() src1234，in1234：4A0B", function() {
        getNumberValue = "1234";
        comparisonValue = "4A0B"
        afferent = "1234"

        var guess = new Guess();
        var result = guess.inValue("1234");

        expect(result).toEqual("4A0B");
    });

    it("#inValue() src1234，in4321：0A4B", function() {
        getNumberValue = "1234";
        comparisonValue = "0A4B"
        afferent = "4325"

        var guess = new Guess();
        var result = guess.inValue("4325");

        expect(result).toEqual("0A4B");
    });

    it("#inValue() src1234，in5678：0A0B", function(){
        getNumberValue = "1234";
        comparisonValue = "0A0B"
        afferent = "5678"

        var guess = new Guess();
        var result = guess.inValue("5678");

        expect(result).toEqual("0A0B");
    });

    it("#inValue() src1234，in1111：1A3B", function() {
        getNumberValue = "1234";
        comparisonValue = "1A3B"
        afferent = "1111"

        var guess = new Guess();
        var result = guess.inValue("1111");

        expect(result).toEqual("1A3B");
    });

});

'use strict';

var Guess = require("../practices/guess.js");

describe("Guess_integeration", function() {
    var returnValue;
    var i = 0;

    beforeEach(function() {
        spyOn(Math, "random").and.callFake(function() {
            return returnValue[i++];
        });
    })

    it("normal test", function() {
        returnValue = [0.723, 0.445, 0.667, 0.889];

        var guess = new Guess();
        var result = guess.inValue("7468");

        expect(result).toEqual("4A0B");
    });

    it("normal test", function() {
        i = 0;
        returnValue = [0.723, 0.445, 0.667, 0.889];

        var guess = new Guess();
        var result = guess.inValue("2567");

        expect(result).toEqual("1A1B");
    })
})

'use strict';

var CompareNumber = require("../practices/compareNumber.js");

describe("compareNumber", function() {
    describe("#comparison()", function() {
        var compareNumber = new CompareNumber();

        it("normal test：1234，1234", function() {
            var compareNumber = new CompareNumber();
            var result = compareNumber.comparison("1234", "1234");

            expect(result).toEqual("4A0B");
        });

        it("error sequence test：2134，1234", function() {
            var result = compareNumber.comparison("1234", "2134");

            expect(result).toEqual("2A2B");
        });

        it("error number and error sequence test：3456，1234", function() {
            var result = compareNumber.comparison("1234", "3456");

            expect(result).toEqual("0A2B");
        });

        it("null a and null b sequence test：1234，5678", function() {
            var result = compareNumber.comparison("5678", "1234");

            expect(result).toEqual("0A0B");
        });

        it("repeat data if test：1111，1234", function() {
            var result = compareNumber.comparison("1111", "1234");

            expect(result).toEqual("1A3B");
        });
    })
});

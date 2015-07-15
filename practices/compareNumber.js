'use strict';

function CompareNumber(srcValue) {}

CompareNumber.prototype.comparison = function(nowValue, srcValue) {
    var a = 0, b = 0;

    srcValue.split("").forEach(function(value, i) {
        if(nowValue[i] === value) {
            a++;
        }else if(srcValue.indexOf(nowValue[i]) !== -1) {
            b++;
        }
    });

    return a+"A"+b+"B";
}

module.exports = CompareNumber;

'use strict';

function CompareNumber(srcValue) {}

CompareNumber.prototype.comparison = function(nowValue, srcValue) {
    var a = 0, b = 0;

    for(var i = 0; i < srcValue.length; i++) {
        if(nowValue[i] === srcValue[i]) {
            a++;
        }else if(srcValue.indexOf(nowValue[i]) !== -1) {
            b++;
        }
    }

    return a+"A"+b+"B";
}

module.exports = CompareNumber;

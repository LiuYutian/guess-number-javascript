'use strict';

function CompareNumber(srcValue) {
    this.srcValue = srcValue;
}

CompareNumber.prototype.comparison = function(nowValue) {
    var a = 0, b = 0;

    for(var i = 0; i < this.srcValue.length; i++) {
        if(nowValue[i] === this.srcValue[i]) {
            a++;
        }else if(this.srcValue.indexOf(nowValue[i]) !== -1) {
            b++;
        }
    }

    return a+"A"+b+"B";
}

module.exports = CompareNumber;

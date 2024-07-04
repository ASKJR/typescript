"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sum_1 = require("./sum");
(function () {
    function normalF() {
        console.log("normalF");
    }
    var anonymous = function anonymousF() {
        console.log("anonymousF");
    };
    var arrow = function () { return console.log("arrowF"); };
    var idade = 31;
    var nome = "A.K";
    console.log("Meu nome eh ".concat(nome, " e tenho ").concat(idade, " anos."));
    normalF();
    anonymous();
    arrow();
    console.log((0, sum_1.sum)(50, idade));
})();

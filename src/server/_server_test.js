/**
 * Created with JetBrains WebStorm.
 * User: tmacbook
 * Date: 2/23/13
 * Time: 8:34 PM
 * Author:  TJ Marbois
 */
"use strict";

var server = require("./server.js");

exports.testNothing = function(test) {
    test.equals(3, server.number(), "Numbers");
    test.done();

};
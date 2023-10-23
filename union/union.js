"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 10;
score = 50;
score = "100";
var user = {
    username: "Allan",
    id: 133
};
// arrays
var data = [1, "hello", true];
// tuples => maintain the order
var myUser;
myUser = ["allan", 133];
// enums
// enum seatChoice {
//     AISLE,
//     MIDDLE,
//     WINDOW
// }
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 10] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 20] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 21] = "WINDOW";
})(seatChoice || (seatChoice = {}));
var mySeat = seatChoice.WINDOW;

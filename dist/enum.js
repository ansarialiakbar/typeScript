"use strict";
//enum is a way to define a set of named constants
// enum with string values
var Direction;
(function (Direction) {
    Direction["Up"] = "North";
    Direction["Down"] = "South";
    Direction["Left"] = "West";
    Direction["Right"] = "East";
})(Direction || (Direction = {}));
console.log(Direction.Up); // "North"
console.log(Direction.Down); // "South"
// enum with numeric values
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 2] = "Inactive";
    Status[Status["Pending"] = 3] = "Pending";
})(Status || (Status = {}));
console.log(Status.Active); // 1
console.log(Status.Inactive); // 2
// enum with computed values
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["Read"] = 1] = "Read";
    FileAccess[FileAccess["Write"] = 2] = "Write";
    FileAccess[FileAccess["Execute"] = 4] = "Execute"; // 4
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.Read); // 1
console.log(FileAccess.Write); // 2
console.log(FileAccess.Execute); // 4
var paymentStatus;
(function (paymentStatus) {
    paymentStatus["Paid"] = "PAID";
    paymentStatus["Unpaid"] = "UNPAID";
    paymentStatus["Pending"] = "PENDING";
})(paymentStatus || (paymentStatus = {}));
function processPayment(status) {
    switch (status) {
        case paymentStatus.Paid:
            console.log("Payment has been made.");
            break;
        case paymentStatus.Unpaid:
            console.log("Payment is pending.");
            break;
        case paymentStatus.Pending:
            console.log("Payment is being processed.");
            break;
        default:
            console.log("Unknown payment status.");
    }
}
processPayment(paymentStatus.Paid);
//# sourceMappingURL=enum.js.map
//enum is a way to define a set of named constants

// enum with string values
enum Direction {
    Up = "North",
    Down = "South",
    Left = "West",
    Right = "East"
}

console.log(Direction.Up); // "North"
console.log(Direction.Down); // "South"

// enum with numeric values
enum Status {
    Active = 1,
    Inactive,
    Pending
}
console.log(Status.Active); // 1
console.log(Status.Inactive); // 2

// enum with computed values
enum FileAccess {
    Read = 1 << 0, // 1
    Write = 1 << 1, // 2
    Execute = 1 << 2 // 4
}
console.log(FileAccess.Read); // 1
console.log(FileAccess.Write); // 2
console.log(FileAccess.Execute); // 4


enum paymentStatus {
    Paid = "PAID",
    Unpaid = "UNPAID",
    Pending = "PENDING"
}
function processPayment(status: paymentStatus) {
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

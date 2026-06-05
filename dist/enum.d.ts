declare enum Direction {
    Up = "North",
    Down = "South",
    Left = "West",
    Right = "East"
}
declare enum Status {
    Active = 1,
    Inactive = 2,
    Pending = 3
}
declare enum FileAccess {
    Read = 1,// 1
    Write = 2,// 2
    Execute = 4
}
declare enum paymentStatus {
    Paid = "PAID",
    Unpaid = "UNPAID",
    Pending = "PENDING"
}
declare function processPayment(status: paymentStatus): void;

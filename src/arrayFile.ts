let marks:number[] = [67, 78, 90];
console.log(`Marks: ${marks}`);

let names:string[] = ["Alice", "Bob", "Charlie"];
console.log(`Names: ${names}`);

let mixedArray:(number | string)[] = [1, "two", 3, "four"];
console.log(`Mixed Array: ${mixedArray}`);

// Another way to define an array using the Array generic type
let matches: Array<string> = ["Team A", "Team B", "Team C"];
console.log(`Matches: ${matches}`);

// method to add a new mark to the marks array
function addMark(mark: number): void {
    marks.push(mark);
    console.log(`Updated Marks: ${marks}`);
}
addMark(85);
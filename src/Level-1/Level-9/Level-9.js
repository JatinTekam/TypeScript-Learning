//Array In TypeScript
const nums = [20, 40, 60, 80];
//ReadOnly
const num = [20, 40, 60, 80];
const UserInfo = [
    { name: "jatin", age: 24, city: "Pune" },
    { name: "Kunal", age: 23, city: "Mumbai" },
    { name: "Nick", age: 24, city: "Delhi" },
];
// Tuple In TypeScript
const fruits = ["apple", 23];
//ReadOnly
const cars = ["BMW", 2300000];
//cars.push() //Property 'push' does not exist on type 'readonly [string, number]'.
//Enum In TypeScript
var Cities;
(function (Cities) {
    Cities[Cities["MUMBAI"] = 0] = "MUMBAI";
    Cities[Cities["DELHI"] = 1] = "DELHI";
    Cities[Cities["PUNE"] = 2] = "PUNE";
})(Cities || (Cities = {}));
const city = Cities.DELHI;
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["BLUE"] = "blue";
    Color["YELLOW"] = "Yellow";
})(Color || (Color = {}));
function FavColor(color) {
    console.log(color);
}
FavColor(Color.RED);
//Auto Increment The Value So Avoid Using This
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["REJECTED"] = 101] = "REJECTED";
    Status[Status["RESLOVED"] = 102] = "RESLOVED"; // 102
})(Status || (Status = {}));
console.log("hello");
export {};
//# sourceMappingURL=Level-9.js.map
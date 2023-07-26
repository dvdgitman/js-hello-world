// const now = new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0];

let hour = 16;
let Hour;

if (hour >= 6 && hour < 12) {
    Hour = "am!";
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    Hour = "pm!";
    console.log("Good afternoon!");
} else {
    Hour = "pm!";
    console.log("Good Evening!");
}

console.log("It's " + hour + Hour);

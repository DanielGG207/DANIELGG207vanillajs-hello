let who = [
  "My Dog",
  "<span>Optimus prime </span>",
  "Billy",
  "My Mom",
  "My Brother",
  "<i>My Grandma</i>"
];
let what = [
  "<i>Anhialated </i>",
  "Cooked",
  "Ate",
  "Destroyed",
  "<strong>Exploded</strong>",
  "<span>Vanished to the shadow realm</span>"
];
let thing = ["My Homework", "My Proyect", " My Computer", "My house"];
let when = [
  "While I was working out",
  "yesterday",
  "A few hours ago",
  "while I was showering",
  "the day before yesterday"
];

function pickRandomElement(array) {
  let pick = Math.random() * array.length;
  return array[Math.floor(pick)];
}

let excuseHeading =
  pickRandomElement(who) +
  " " +
  pickRandomElement(what) +
  " " +
  pickRandomElement(thing) +
  " " +
  pickRandomElement(when);

document.getElementById("excuse-heading").innerHTML = excuseHeading;

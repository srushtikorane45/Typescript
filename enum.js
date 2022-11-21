var water_state;
(function (water_state) {
    water_state[water_state["Hot"] = 0] = "Hot";
    water_state[water_state["Cold"] = 1] = "Cold";
})(water_state || (water_state = {}));
console.log(water_state);
console.log(water_state.Hot);
console.log(water_state.Cold);
var Genders;
(function (Genders) {
    Genders[Genders["Male"] = 1] = "Male";
    Genders[Genders["Female"] = 2] = "Female";
})(Genders || (Genders = {}));
console.log(Genders);
console.log(Genders.Female);
console.log(Genders.Male);
console.log(Genders[1]);
console.log(Genders[2]);
var weekdays;
(function (weekdays) {
    weekdays[weekdays["Monday"] = 1] = "Monday";
    weekdays[weekdays["Tuesday"] = 2] = "Tuesday";
    weekdays[weekdays["Wednesday"] = 3] = "Wednesday";
    weekdays[weekdays["Thursday"] = 4] = "Thursday";
    weekdays[weekdays["Friday"] = 5] = "Friday";
    weekdays[weekdays["Saturday"] = 6] = "Saturday";
    weekdays[weekdays["Sunday"] = 7] = "Sunday";
})(weekdays || (weekdays = {}));
console.log(weekdays);
console.log(weekdays[6]);
console.log(weekdays[7]);

var grade_calculator = function (math, physics, chemistry) {
    console.log("math:".concat(math));
    console.log("physics:".concat(physics));
    console.log("chemistry:".concat(chemistry));
    var total = (math + physics + chemistry) / 3;
    console.log("Average:".concat(total));
    if (total < 70) {
        console.log("Grade:C");
        console.log("---------------------------------------------------------------------------------");
    }
    if (total > 70 && total < 90) {
        console.log("Grade:B");
        console.log("---------------------------------------------------------------------------------");
    }
    if (total > 90) {
        console.log("Grade:A");
        console.log("---------------------------------------------------------------------------------");
    }
};
grade_calculator(82, 85, 91);
grade_calculator(88, 93, 95);
grade_calculator(82, 52, 52);

var emp = {
    name: "Dnyanesh",
    score: 250
};
for (var e in emp) {
    console.log(e);
    console.log(emp[e]);
}
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
//for(var i = 0; i < courses.length; i++)
//{
//  console.log(courses[i]);
//}
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstname = std.firstName, userLastName = std.lastName;
console.log(userFirstname);
console.log(userLastName);
function display(id, name, role) {
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");

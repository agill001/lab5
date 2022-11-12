 let course1 = {
   code:"1620",
  name: "fundamental web technologies"
    };

 let course2 = {
    code:"1515",
     name: "scripting for IT",
     };

let course3 = {
     code:"1630",
     name: "Database systems",
     };
    
let courseList = [course1, course2, course3];
    
let input=""
do {
 input = prompt("Enter 4 digit class code"); 
 
} while(input.length !=4 || isNaN(Number(input)));


let classcodes = ["1620","1515","1630"]

if (input in classcodes) {
  console.log("yes I am taking the course")
}
  // for (let i in classcodes){
  //    console.log("yes i am taking the course")
    
 else { 
  classcodes.push(input);
  console.log("success")
}
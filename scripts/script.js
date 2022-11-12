let courseList = [{code: "ACIT 1620", name: "Fundamental web technologies"}, {code: "ACIT 1630",name: "Database Systems"}, 
{code: "ACIT 1420",name: "Intro to systems Admin"}]
    
let input=" "
do {
 input = prompt("Enter your 4 digit class code"); 
 
} while(input.length !=4 || isNaN(Number(input)));

exists = false
for (let course of courseList){
if (course.code.includes(input)) {
  console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
  exists = true 
}

}

 


 if (exists===false) {  let newcourse = {code: "ACIT" + input, name: null}
courseList.push(newcourse);  
 console.log("New Course added succesfully")}
//  console.log(courseList)



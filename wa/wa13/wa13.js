let humanRes= {
    "Employees": [
        { 
        firstName: "Sam",
        department:"Tech",
        designation: "Manager", 
        salary: 40000, 
        raiseElig: true
        },
        {
        firstName: "Mary", 
        department: "Finance", 
        designation: "Trainee", 
        salary: 18500, 
        raiseElig: true
        },
        {
        firstName: "Bill", 
        department: "HR", 
        designation: "Executive", 
        salary: 21200, 
        raiseElig: false
        }
    ]
}
let company = {
    "Company Info": [
        {companyName: "Tech Stars", 
        companyWeb: "www.techstars.site", 
        employees: humanRes["Employees"],
    },
    ]
}
//problem one
console.log(humanRes["Employees"]);
//problem two
console.log(company["Company Info"]);
//problem three
humanRes["Employees"].push({
    firstName: "Anna", 
    department: "Tech", 
    designation: "Executive", 
    salary: 25600, 
    raiseElig:false
});
console.log(humanRes["Employees"]);
console.log(company["Company Info"]);
//problem four
let total = 0;
for(let i = 0; i<humanRes["Employees"].length; i++){
    total += humanRes["Employees"][i].salary;
}
console.log("Total Salary:" + total);
//problem five
function raise(){
    for(i = 0; i < humanRes["Employees"].length; i++){
        if(humanRes["Employees"][i].raiseElig == true){
            let increase = humanRes["Employees"][i].salary * .10;
            humanRes["Employees"][i].salary += increase;
            humanRes["Employees"][i].raiseElig = false; 
        }
    }
}
console.log(humanRes["Employees"]);
raise(); 
//problem 6
const wfh = ['Anna','Sam'];
for(let i = 0; i<humanRes["Employees"].length;i++){
    if(humanRes["Employees"][i].firstName == wfh[0] || humanRes["Employees"][i].firstName == wfh[1]){
        humanRes["Employees"][i]["wfh"] = true;
    }
    else{
        humanRes["Employees"][i]["wfh"] = false;
    }
}
console.log(humanRes["Employees"]);
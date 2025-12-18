//function myfunction(){
  //  console.log("this is my function" ,a)
//}
//const a=12;
//myfunction(a);

//const 
// PI=3.13;
//console.log(PI);


//object variable
// student = { 
   // name : 'sony',
    //age : 20,
    //grade : 'A'
//};
//console.log(student);


//number variable
//let age=24;
//console.log(age);


//string variable(text)
//let name='ram'
//console.log(name);

//boolean variable(true false)
//let isActive=true;
//console.log(isActive);


//var variable
//var city='ktm'
//console.log(city)


//Array variable
//let arr=[1,2,3,4,5,6,7,8,];
//console.log(arr);

//Array loop(foreach)
//let arr=[10,20,30,40];
//arr.forEach(item =>{;
//console.log(item);
//});


l//et arr = [1,2,3,4,5];
//if (arr.length > 5){
//console.log("this is allow");
//}
    //else
    //{
        //console.log("this is not allow");
    //}
//let arr = [1, 2, 3, 4, 5];
//if (arr.length > 3) {
    //console.log("This is allowed");
//} else {
  // console.log("This is not allowed");
//}
//console.log(the length  is:"the length ");
//const language =["php","java", "js"];

//for (let i=0; i<language.length[i]);
//for(php;java){

//}
//for(let i=1; i<=5; i++){
//console.log("Number:"; i);
//}
l//et student={
    //name:'sony',
   // age:23,
   //grade:'a'

const marks=[1,2,3,,4,5];
let totalmarks=0;
let isfail=false
for(let index=0; index<marks.length;index++)
    console.log(marks[index]);
    if(marks[index] < 55){
        isfail=true;
}
totalmarks=marks[index] + totalmarks;
if(isfail) {
    console.log("you are fail");
    return
}

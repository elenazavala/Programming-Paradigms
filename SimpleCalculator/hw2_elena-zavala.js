/*  
Name: Elena Zavala Ferreira
Homework 2  - EECS 368
*/

const clear = () => document.getElementById("form").reset();

const add = () =>{
    let num1 = parseInt(document.getElementById("val1").value);
    let num2 = parseInt(document.getElementById("val2").value);
    document.getElementById("result").innerHTML = num1 + " + " + num2 + " = " + (num1+num2);

};
const subtract = () =>{
    let num1 = parseInt(document.getElementById("val1").value);
    let num2 = parseInt(document.getElementById("val2").value);
    document.getElementById("result").innerHTML = num1 + " - " + num2 + " = " + (num1-num2);

};
const divide = () =>{
    let num1 = parseInt(document.getElementById("val1").value);
    let num2 = parseInt(document.getElementById("val2").value);
    if(num2==0){
        document.getElementById("result").innerHTML = "undefined";
        alert("ERROR! You cannot divide by zero! Please try again");
    }else{
        document.getElementById("result").innerHTML = num1 + " / " + num2 + " = " + (num1/num2);
    }
};
const multiply = () =>{
    let num1 = parseInt(document.getElementById("val1").value);
    let num2 = parseInt(document.getElementById("val2").value);
    document.getElementById("result").innerHTML = num1 + " * " + num2 + " = " + (num1*num2);


};
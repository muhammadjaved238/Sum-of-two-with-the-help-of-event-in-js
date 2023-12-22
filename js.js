
function add(){
let num1=  parseInt(document.getElementById("input1").value);
let num2= parseInt(document.getElementById("input2").value);
 let add = num1 + num2;
 document.getElementById("result").innerText="value"+add;
console.log(add)
}
function sub(){
    let num1=  parseInt(document.getElementById("input1").value);
    let num2= parseInt(document.getElementById("input2").value);
     let sub = num1 - num2;
     document.getElementById("result").innerText="value"+sub;
    console.log(sub)
    }
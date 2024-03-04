let num = prompt("Enter Constant: ");
num = Number.parseInt(num);
let pow = prompt("Enter power: ");
pow = Number.parseInt(pow);
let sq = pow + 1;

document.getElementById("constant").innerHTML = `${num}`;
document.getElementById("power").innerHTML = `${sq}`;
document.getElementById("denominator").innerHTML = `${sq}`;

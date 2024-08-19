// let res = document.getElementById("result")
const result = document.getElementById("result")
if (document.getElementById("result").innerHTML == ""){
    result.innerHTML = "0"
}

function dis(val) { 
    if (result.innerHTML == "0")
        result.innerHTML = val;
    else 
        result.innerHTML += val;
} 

function del() {
    console.log("del")
    let temp = result.innerHTML.slice(0, -1)
    if (temp == "")
        temp = "0"
    result.innerHTML = temp
}

function reset() {
    console.log("clear")
    result.innerHTML = "0"
}

function solve(){

    let temp = result.innerHTML.split('')
    for(let i=0 ; i<temp.length ; i++){
        if (temp[i] == "÷"){
            temp[i] = "/";
        }
        else if (temp[i] == "x"){
            temp[i] = "*";
        }
    }
    temp = temp.join('')
    console.log(temp)
    result.innerHTML = math.evaluate(temp) 
}
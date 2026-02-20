

// machin to get value of any id
function getValueFromInput(id){
   let value = document.getElementById(id).value;
    return value;
}

function getBalance(){
    let input = document.getElementById("balance").innerText;
    return Number(input);
}

function setBalance(newBalance){
    document.getElementById("balance").innerText = newBalance;
}
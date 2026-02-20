

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

function showOnly(id){
    let addMoney = document.getElementById("add-money");
    let cashout = document.getElementById("cashout");
    let transfer  = document.getElementById("send-money");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");

    let selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
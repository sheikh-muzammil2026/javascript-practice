// badget tracker challenge phase 1

// console.log("Aminul islam");
// console.log(35000);  // my income
// console.log(15000); // my expenses


// badget tracker phase 2-3 (string concat)

// const userName = 'Aminul islam';
// const income = 35000;
// const expense = 15000;

// console.log("Parsonal badget tracker app.")
// console.log("User: "+userName.toLocaleUpperCase());
// console.log("Income: $"+income);  // my income
// console.log("expense: $"+expense); // my expenses


// badget tracker phase 4 (arithmatice operatior)

// const userName = 'Aminul islam';
// const income = 25000;

// // multiple expenses

// let rent = 7000;
// let grocerice = 1000;
// let transport = 2000;
// let entertainment = 600;

// // calculate expenses 
// let totalExpenses = rent + grocerice + transport + entertainment;


// // tax deduction (10% of income)

// let tax = income * 0.10;

// // Net income after the tax

// let netIncome = income - tax;

// // calculate remaining balance 

// let balance = netIncome - totalExpenses;

// // saving 20% of remainging balance 

// let savings = balance * 0.20;



// console.log("Parsonal badget tracker app.")
// console.log("User: "+userName.toLocaleUpperCase());
// console.log("Total income: $"+income);  
// console.log("Total expense: $"+totalExpenses); 
// console.log("Tax deduction: $"+tax);  
// console.log("Net icome after tex: $"+netIncome); 
// console.log("Remaining balance: $"+balance); 
// console.log("Saving 10% of balance: $"+savings); 



//  badget tracker phase 4 (if/else)



// const userName = 'Aminul islam';
// const income = 25000;

// // multiple expenses

// let rent = 7000;
// let grocerice = 7000;
// let transport = 7000;
// let entertainment = 7000;

// // calculate expenses 
// let totalExpenses = rent + grocerice + transport + entertainment;


// // tax deduction (10% of income)

// let tax = income * 0.10;

// // Net income after the tax

// let netIncome = income - tax;

// // calculate remaining balance 

// let balance = netIncome - totalExpenses;

// // saving 20% of remainging balance 

// let savings = balance * 0.20;


// // Determining finalcial health status

// let finalStatus = "";

// if (savings >= 1000){
//     finalStatus  = "Excellent! ";
// }else if(savings >= 500){
//    finalStatus = "Good.";
// }else if(savings >= 100){
//      finalStatus = "Need to improvment.";
// }else{
//     finalStatus = "Critical.";
// }


// console.log("Parsonal badget tracker app.")
// console.log("User: "+userName.toLocaleUpperCase());
// console.log("Total income: $"+income);  
// console.log("Total expense: $"+totalExpenses); 
// console.log("Tax deduction: $"+tax);  
// console.log("Net icome after tex: $"+netIncome); 
// console.log("Remaining balance: $"+balance); 
// console.log("Saving 10% of balance: $"+savings);
// console.log("Final status : $"+finalStatus);


// let ovarSpendingMessage = "";
// if(totalExpenses > income){
//     ovarSpendingMessage = "Warning: your expenses over the income.";
// }
// if (ovarSpendingMessage){
//     console.log(ovarSpendingMessage);
// }




// badget tracker phase 4 (for loop)



// let userName = prompt("Enter your name : ");
// let income =  parseFloat(prompt("Enter your total income : "));
// let ExpensesNumber = parseFloat(prompt("How many expenses do you have : "));

//      let totalExpenses= 0;
//      let Expenses= 0;
// for (let x=1; x <= ExpensesNumber; x++){
//       Expenses = parseFloat(prompt(`Enter your ${x} no expense : `));
//      totalExpenses += Expenses;
// }


// let savings = balance * 0.20;


// // Determining finalcial health status

// let finalStatus = "";

// if (savings >= 1000){
//     finalStatus  = "Excellent! ";
// }else if(savings >= 500){
//    finalStatus = "Good.";
// }else if(savings >= 100){
//      finalStatus = "Need to improvment.";
// }else{
//     finalStatus = "Critical.";
// }


// console.log("Parsonal badget tracker app.")
// console.log("User: "+userName.toLocaleUpperCase());
// console.log("Total income: $"+income);  
// console.log("Total expense: $"+totalExpenses); 
// console.log("Tax deduction: $"+tax);  
// console.log("Net icome after tex: $"+netIncome); 
// console.log("Remaining balance: $"+balance); 
// console.log("Saving 20% of balance: $"+savings);
// console.log("Final status : $"+finalStatus);


// let ovarSpendingMessage = "";
// if(totalExpenses > netIncome){
//     ovarSpendingMessage = "Warning: your expenses over the income.";
// }
// if (ovarSpendingMessage){
//     console.log(ovarSpendingMessage);
// }



// practie to function

// function calc(a,b){

//     let add = a + b;
//     let sub = a - b;
//     let mul = a * b ;
//     let div = a / b;
//     let rem = a % b;

//     console.log('addition: '+add);
//     console.log('addition: '+sub);
//     console.log('addition: '+mul);
//     console.log('addition: '+div);
//     console.log('addition: '+rem);

// }
// calc(10, 5);
// calc(20, 5);



// Badget tracker app

let userName = prompt("Enter your name : ");
let numberOfExpenses = parseInt(prompt("Enter how many expenses do you have :"));
let income = parseInt(prompt("Enter your total income :"));


let expenses= [];
for (let e =1; e <= numberOfExpenses; e++){
    let expense = parseInt(prompt(`Enter your ${e} no expense.`));
    expenses.push(expense);  // array.push কে লুপের মধ্যে না রাখলে মাত্র একবার পুশ হবে। সবগুলো পুশ হবে না।
}



let totalExpenses= 0;

for(let i = 0; i < expenses.length; i++){

   totalExpenses += expenses[i];

}

let tax = income * 0.10;
let netIncome = income - tax;
let balance = netIncome - totalExpenses;

let savings = balance * 0.20;


// Determining finalcial health status

let finalStatus = "";

if (savings >= 1000){
    finalStatus  = "Excellent! ";
}else if(savings >= 500){
   finalStatus = "Good.";
}else if(savings >= 100){
     finalStatus = "Need to improvment.";
}else{
    finalStatus = "Critical.";
}


console.log("Parsonal badget tracker app.")
console.log("User: "+userName.toLocaleUpperCase());
console.log("Total income: $"+income);  
console.log("Total expense: $"+totalExpenses); 
console.log("Tax deduction: $"+tax);  
console.log("Net icome after tex: $"+netIncome); 
console.log("Remaining balance: $"+balance); 
console.log("Saving 20% of balance: $"+savings);
console.log("Final status : $"+finalStatus);


let ovarSpendingMessage = "";
if(totalExpenses > netIncome){
    ovarSpendingMessage = "Warning: your expenses over the income.";
}
if (ovarSpendingMessage){
    console.log(ovarSpendingMessage);
}


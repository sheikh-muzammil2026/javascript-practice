// task-1

// function multiply (num1, num2, num3, num4){
//     return num1 * num2 * num3 * num4;

// }

// console.log(multiply (2,3,4,5));


// task-2

// function task_2(number){
//     if(number % 2 == 0){
//         return number / 2;
//     }else {
//         return number * 2;
//     }

// }

// console.log(task_2(33));

// Task-2 ভুলগুলো

// Even number check-এ % ব্যবহার করেছো কিন্তু divide (/) করা দরকার ছিল।

// Odd check-এ !number % 2 == 0 ভুল → সঠিক হবে number % 2 !== 0।

// Extra else { return "zero"; } দরকার নেই → সব number হয় odd বা even।


// function make_avg(arr) {
//     let add = 0;
//     for (let x=0; x <arr.length; x++){
//         add += arr[x];
//     }
//     return add / arr.length;

// }

// let arr = [10,20,30,40,50,60];
// console.log(make_avg(arr));


// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary){

    let count =0;
    for (let x =0; x < binary.length; x++){
       
        if( binary[x] === "0"){   //binary[x] মানে হলো: string binary এর x নাম্বার index-এ থাকা character।
            count ++;
        }
        
    }
    
     return count;
}

let binary = "10101010101010101";
console.log(count_zero(binary));
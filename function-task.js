
// Simple function Related Practice Tasks


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

// function count_zero(binary){

//     let count =0;
//     for (let x =0; x < binary.length; x++){
       
//         if( binary[x] === "0"){   //binary[x] মানে হলো: string binary এর x নাম্বার index-এ থাকা character।
//             count ++;
//         }
        
//     }
    
//      return count;
// }

// let binary = "10101010101010101";
// console.log(count_zero(binary));


//Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


// function odd_even(number){
//     return (number % 2 == 0) ? "Even" : "Odd";

// }
// let number = 90;

// console.log(odd_even(number));


// js-problems-part1-practice-tasks
// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

// function repeated_number(numbers,find){
//     let count =0;
//     for(let x=0; x < numbers.length; x ++){
//         if(numbers[x] === find){
//             count++;
//         }

//     }
//     return count;
// }

// let numbers = [5,6,11,12,98, 5];
// console.log(repeated_number(numbers,5));


// js-problems-part2-practice-tasks


// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowest_number(numbers){
    let min =numbers[0];
    for(let x=1; x < numbers.length; x++ ){
        if(numbers[x] < min){
            min = numbers[x];
        }
    }
    return min;
}

let numbers = [167, 190, 120, 165, 137];
console.log(lowest_number(numbers));


// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallest_name(friends)
{
    let smallest = friends[0];

    for (let x =1; x < friends.length; x++){

        if(smallest.length > friends[x].length){   // ০ নং ইন্ডেক্স এর লেন্থ থেকে যদি এক্স ইন্ডেক্সের লেন্থ ছোট হয় ( তাহলে এক্স ইন্ডেক্সকেই প্রিন্ট কর। )
            smallest = friends[x];   //  friends[x] মানে হল, এক্স নং ইন্ডেকের নেইম ভেলু আকারে সেট করে দাও।  
        }
    }
    return smallest;
}
let friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallest_name(friends));

// Task-3:
// Write a function to count the number of vowels in a string.

// function count_vowels(str){
//     let vowels = 0;
//     let vowelList = "aeoui";
//     for (let x=0; x < str.length; x++){
//         if(vowelList.includes(str[x].toLowerCase())){
//             vowels++;
//         }
//     }

//     return vowels;
// }

// let str = "Hello Bangladesh";

// console.log(count_vowels(str));


// function count_vowels(str){
//     let vowels =0;
//     for(let x=0; str.lenght; x++ ){
//         if(str[x] === "a"){
//             vowels++
//         }
//     }

//     return vowels;
// }

// let str = "Hello Banlgadesh";
// console.log(count_vowels(str.split(",")));
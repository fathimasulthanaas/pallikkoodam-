// function greet(){
//     console.log("Hello World");
// }

// greet();                        //..........this will work even if it is in first line...........


// function add(x, y) {
//     console.log(x + y);
// }

// add(1, 2);


// function add(x, y) {
//     return x + y;
// }

// const res = add(1, 2);
// console.log(res);


// function convertCasing(value) {
//           return value.toUpperCase();    
// }

// const res = convertCasing('Hello');
// console.log(res.toLowerCase());
// // console.log(res.toUpperCase());



// function getFirstChar1(value){
//     return value[0]; 
// }

// const getFirstChar2 = function(value){
//     return value[1];
// };

// const getFirstChar3 = (value) => {
//     return value[3];
// };

// console.log(getFirstChar1('Hello'));
// console.log(getFirstChar2('Hello'));
// console.log(getFirstChar3('Hello'));


// function getFirstChar1(value){
    //     return value[0];
const getFirstChar = value => value[0];   // = value -->no need bracket ,,because there is only 1 parameter.....      
                                        //   =>value[0] -->don't need return,,,and there is only line of code.....
console.log(getFirstChar('Hello'));
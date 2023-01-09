let numbers = [4, 7, 1, 3, 0, 7, 2];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++) {
        if (numbers[i] >numbers[j] ) {
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        } 
    }
    }
console.log(numbers);



// let array = ['F', 'A', 'T', 'H', 'I', 'M', 'A'];
// for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//         if (array[i] >array[j] ) {
//             temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         } 
//     }
//     }
// console.log(array);


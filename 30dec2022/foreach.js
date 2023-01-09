// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(element => {
//     console.log(element);
// });

//...........................................................................................................//


// const languages = ['C', 'C++', 'Java', 'Python'];
// languages.forEach((item, index)  => {
//     console.log(index, item);
// });

//...........................................................................................................//

// const person = {
//     name : 'John Doe',
//     age : 20
// };

// person.name = 'New Name';                //to update new value.
// person.email = 'me@gmail.com';             //have to add a new element.
// // console.log(person);
// console.log(person.name);

//...........................................................................................................//

// const person = {
//     name : 'John Doe',
//     age : 20,
//     email : null                            //need to declare the new value.
// };

// person.name = 'New Name';                //to update new value.
// person.email = 'me@gmail.com';             //have to add a new element.
// console.log(person.email);

//............................................................................................................//

// const person = {                                //don't write{ on next line..
//     name : 'John Doe',                          //individual value= seperate columns.
//     age : 20,                                   //space b/w element and value and seperated by :  .
//     email : null                                //no comma after last element.
// };                                              //no space or _  b/w the element name. the second name should be start in capital letter(eg:- firstName)
            
// console.log(person.name);
// console.log(person['name']);                  //can use any one of these 2.
                                                 //use ; at last....its not give any error if it is not there....but its necessary according to coding law.

//.............................................................................................................//

// const person = {                                
//         name : 'John Doe',                        
//         age : 20,                                  
//         experience: [
//             {
//                 company: 'Company ABC',
//                 years: 2
//             },
//             {
//                 company: 'Company DEF',
//                 years: 3
//             }
//         ]                              
//     };                                                              
//     // console.log(person.experience);
//     console.log(person.experience[0].company);         //experience[0].company------> first experience is in which company(only its name).
    

//.............................................................................................................//

// const person = {                                
//     name : 'John Doe',                        
//     age : 20,                                  
//     experience: [
//         {
//             company: 'Company ABC',
//             years: 2
//         },
//         {
//             company: 'Company DEF',
//             years: 3
//         }
//     ]                              
// };                                                              
// person.experience.forEach(exp =>console.log(exp.company));

//..............................................................................................................//

// // const rows = 3;
// // const cols = 3;
// // const m = new Array(rows);
// const m1 = [
//     [1, 2],
//     [3, 4]
// ];

// console.log(m1);

//.................................................................................................................//

// setTimeout(()=>{                                 //time delay
//     console.log('Code worked');
// }, 7000);                                  //1000= 1 second;   7000=7s

//.............................................................................................................//

// setInterval(()=>{                                 //set interval to print  and it continues like loop....To stop=> ctrl+C
//         console.log('Code worked!');
//     }, 1000);

// console.log('Completed');                       //1'st this will executed  and then according to time delay balance will be executed.

//..............................................................................................................//

                  //objects and function//

// const student = {
//     name: 'Student 1',
//     mark1: 40,
//     mark2: 50,
//     total: function(){
//         console.log(this.mark1 + this.mark2);
//     }
// };
// student.total();     

//..........................................................................................................//

// const student = {
//     name: 'Student 1',
//     mark1: 40,
//     mark2: 50,
//     total: function(){
//         const extraMark = 5;
//         console.log(this.mark1 + this.mark2 + extraMark);                //no need of 'this' for extraMark,,because it is assigned inside the function.
//     }
// };
// student.total();    

//...............................................................................................................//

// const student = {
//         name: 'Student 1',
//         mark1: 40,
//         mark2: 50
// };

// const copy = Object.assign({}, student);
// copy.name = 'New Name';                                  //data copied and name is changed.
// console.log(student);
// console.log(copy);

//...............................................................................................................//

// const student = {
//     name: 'Student 1',
//     mark1: 40,
//     mark2: 50
// };

// const copy = Object.assign({age: 15}, student);                       //we can add extra data when we copy the data.
// copy.name = 'New Name';
// console.log(student);
// console.log(copy);

//..................................................................................................................//

// const student = {
//         name: 'Student 1',
//         mark1: 40,
//         mark2: 50
//     };

//     const marks = {
//         mark1: 40,
//         mark2: 50
//     }
    
//     const copy = Object.assign({}, student, marks);                       
//     console.log(copy);

//................................................................................................................//

                           // d structure//

// const student = {
//         fullName: 'Student 1',
//          mark1: 40,
//          mark2: 50
// };
// const {fullName, mark1}  = student;
// console.log(fullName);

//..............................................................................................................//

// const student = {
//     fullName: 'Student 1',
//      mark1: 40,
//      mark2: 50
// };

// const keys = Object.keys(student);            
// keys.forEach(key=>{
//     console.log(student[key]);                          for getting only property(fullName, mark1, mark2)....console.log(key)
//     // console.log(student['key']);
// });

//.............................................................................................................//

const student = {
    fullName: 'Student 1',
     mark1: 40,
     mark2: 50
};

const values = Object.values(student);
values.forEach(value=>{
    console.log(value);
});
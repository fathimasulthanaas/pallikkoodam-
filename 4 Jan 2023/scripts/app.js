
// function doThisLongRunningTask(callback) {
//     setTimeout(() => {
//         const name = 'JavaScript';
//         callback(name);
//     }, 5000);
// }
// function showResult(res) {
//    console.log(res); 
// }

// doThisLongRunningTask(showResult);
// console.log('I am done');

// ---------------------------------------------------------------------------------------------------------//

// const p = new Promise((resolve, reject) => {
//     const name = 'JavaScript';
//     resolve(name);
// });

// p.then(res=>console.log(res));



// document.write('Hello');

// -------------------------------------------------------------------------------------------------------//

// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// // .then(data => console.log(data));   //it includes p.no, total pages etc.
// .then(result =>{
//         //  console.log(result.data);  //only data of peoples.
//         result.data.forEach(element =>{
//             console.log(element.email);            //only element , all details will display.
//         });
//  }); 

// ----------------------------------------------------------------------------------------------------------//

fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(result => {
             const users = result.data;
             users.forEach(user=>{
                const row = `
                <tr>
                    <td>${user.id}</td>
                    <td>
                        <img src="${user.avatar}" height="50">
                    </td>
                    <td>${user.first_name} ${user.last_name}</td>
                    <td>${user.email}</td>
                </tr>
                `;
                target.innerHTML += row;
             });
});
/*for (let index = 1; index <=5; index++) {
    
    console.log("loop is working");
}*/
let sum  = 0;
for (let i = 1; i <=10; i++) {
    sum = sum + i;    
}

//console.log("sum =", sum);


let size = 5;
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
         pattern += '*';
        
        
    }
    //console.log(pattern);
}

//const heading = document.querySelector('h1#myHeading');
//heading.style.backgroundColor = "green"





/*let rows = 5;
let colomns = 10;
for(let i =1; i <=rows; i++){
    let pattern = '';
    for(let j = 1; j <= colomns; j++){
        if(i === 1 || i === rows || j === 1 || j === colomns ){
            pattern += '* ';
        }else {
            pattern += ' ';
        }
    }
    console.log(pattern);
}*/
// let rows = 5;
// let columns = 10;
// for (let i = 1; i <= rows; i++) {
//     let pattern = '';
//     for (let j = 1; j <= columns; j++) {
//         if (i === 1 || i === rows || j === 1 || j === columns) {
//             pattern += '* ';
//         } else {
//             pattern += '  ';
//         }
//     }
//     console.log(pattern);
// }
// let rows = 5;
// let columns = 10;
// for(let i = 1; i <= rows; i++) {
//     let pattern = '';
//     for(let j = 1; j <= columns; j++) {
//         if(i === 1 || i === rows || j ===1 || j === columns){
//             pattern += '* '
//         } else {
//             pattern += ' ';
//         }
//     }
//     console.log(pattern);
// }
let rows = 6;
let columns = 12;
let output = ''; 
for(let i = 1; i <= rows; i++) {
    for(let j = 1; j <= columns; j++) {
       if(i === 1 || i === rows || j === 1 || j === columns) {
        output += '* ';
       } else {
        output += '&nbsp;&nbsp; '
       }
    }
    output += '<br>';
}

document.getElementById('patternOutput').innerHTML = output;
//  patternOutput.style.color = "white";
// patternOutput.style.backgroundColor = "black";


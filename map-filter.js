const num = [2,3,4,5,6,7];
// const output = []; 
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     const square = element * element;
//     output.push(square);
// } 

// function square(element){
//     return element * element;
// }

// const arrow = num.map(element => element * element);
// const square1 = num.map(element=>element * element);

// const bigger = num.filter(element=> element <9 );

const big = num.find(element=> element <2)
console.log(big);
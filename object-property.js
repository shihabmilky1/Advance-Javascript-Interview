
const student = [
    {id:32, name:'dipjol'},
    {id:12, name:'manna'},
    {id:52, name:'mousumi'},
    {id:22, name:'sunny'}
];
// const nameArray = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const names = element.name;
//     nameArray.push(names);
//     // console.log(element.name);
// }
// console.log(nameArray);

const names = student.map(s=> s.name);
const ids = student.map(s=> s.id);
console.log(names);
console.log(ids);
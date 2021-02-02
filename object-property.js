const student = [
    {id:32, name:'dipjol'},
    {id:12, name:'manna'},
    {id:52, name:'mousumi'},
    {id:22, name:'sunny'}
];
const nameArray = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const names = element.name;
    nameArray.push(names);
    // console.log(element.name);
}
console.log(nameArray);

const names = student.map(s=> s.name);
const ids = student.map(s=> s.id);
console.log(names);
console.log(ids);
const cars = [
    {name:'hyundai',model:123,price:10},
    {name:'discover',model:31,price:90},
    {name:'honda',model:13,  price:30},
    {name:'suzuki',model:23, price:100}
];

const price = cars.filter(car =>  car.name == 'suzuki');
const company = cars.map(car => car.name); 
console.log(price);
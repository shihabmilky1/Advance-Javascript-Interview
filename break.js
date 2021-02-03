const  array = [1,2,3,4,5,6,7,8];
for(let i = 0; i < array.length; i++){
        // element = array[i];
    if(array[i] > 6){
        break;
    }
    console.log(array[i]);
}
// continue
const  array = [1,2,-3,4,5,-6,7,-8];
for(let i = 0; i < array.length; i++){
        // element = array[i];
    if(array[i] < 0){
        continue;
    }
    console.log(array[i]);}

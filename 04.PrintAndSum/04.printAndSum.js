function printAndSum(startNumber, endNumber){
let sum=0;
let arr=[];
    for (let index = startNumber; index <= endNumber; index++) {
    sum+=index;
    arr.push(index);
}

console.log(arr.join(' '));
console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
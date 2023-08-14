function printSum(array){
    let oddSum =0;
    let evenSum=0;;
    let result=0;

    for (let index = 0; index < array.length; index+=2) {
        evenSum +=array[index];
    }
    for (let index = 1; index < array.length; index+=2) {
        oddSum +=array[index];
    }

    result=oddSum-evenSum;
    console.log(result);
    
}

printSum([1,2,3,4,5,6]);
printSum([3,5,7,9]);
printSum([2,4,6,8,10]);
printSum([3,-5,7,-9])

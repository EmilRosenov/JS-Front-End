function solve(array){
    let even=0;
    let odd = 0;
    let result=0;

    for (let index = 0; index < array.length; index++) {
        if(array[index]%2===0){
            even+=array[index];
        }  
        else{
            odd+=array[index];
        }        
    }

    result=even-odd;
    console.log(result);
    
}     

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);
    
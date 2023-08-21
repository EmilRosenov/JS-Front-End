function sortNumbers(arr){
    let sorted=[];
    let output=[];
    let current;
    let step = 0;
    
    sorted = arr.sort((a,b)=> a-b);
    

    while(sorted.length > 0){

        if(step%2===0){
            current=sorted.shift();
            output.push(current)
        }else{
            current=sorted.pop();
            output.push(current);
        }

        step++;
    }
    
    return output;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
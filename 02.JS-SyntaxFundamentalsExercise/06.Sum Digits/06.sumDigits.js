function sum(input){
        let sum=0;
        let inputAsString = input.toString();
    
    for (let index = 0; index < inputAsString.length; index++) {
        sum+=Number(inputAsString[index]);
        
    }
    console.log(sum.toString());
}

sum(`97561`);
sum(`543`);
sum(`245678`)
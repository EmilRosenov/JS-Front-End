function print(argument){
    let result;
    let inputType = typeof(argument);
    if(inputType==='number')
    {
        result=Math.PI*(argument**2);
        console.log(result.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

print(3);

print('653');
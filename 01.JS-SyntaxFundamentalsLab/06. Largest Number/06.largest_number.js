function printBiggest(num1, num2, num3){
    let result;
    if(num1>num2 && num1>num3){
        result=num1;
        console.log(`The largest number is ${result}.`);
        return;
    }
    else if(num2>num1 && num2>num3){
        result=num2;
        console.log(`The largest number is ${result}.`);
        return;
    }
    else if(num3>num1 && num3>num2);
    {
        result=num3;
        console.log(`The largest number is ${result}.`);
        return;
    }
    
    
}

printBiggest( 16, 17, 20);
printBiggest(2, 1, 0);
 printBiggest(5,-3,16);
printBiggest(-3,-5,-22.5);
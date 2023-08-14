function printResult(num1,num2, operator){
    let result;
    if(operator === '+'){
        result=num1+num2;
        console.log(result);
        return;
    }
    else if(operator ==='-'){
        result=num1-num2;
        console.log(result);
        return;
    }
    else if(operator ==='*'){
        result=num1*num2;
        console.log(result);
        return;
    }
    else if(operator ==='/'){
        result=num1/num2;
        console.log(result);
        return;
    }
    else if(operator ==='%'){
        result=num1%num2;
        console.log(result);
        return;
    }
    else if(operator ==='**'){
        result=num1**num2;
        console.log(result);
        return;
    }
    else{
        console.log('Error!')
    }
}

printResult(3, 5.5, '*');
printResult(4, 2, '**');
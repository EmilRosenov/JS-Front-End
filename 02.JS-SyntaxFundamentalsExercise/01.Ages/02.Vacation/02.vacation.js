function solveAndPrint(number,typeOfGuest,day){
    let totalPrice = 0;
    if(typeOfGuest==='Students'){
        if(day==='Friday'){
            totalPrice = number * 8.45;
        }
        else if(day==='Saturday'){
            totalPrice = number * 9.80;
        }
        else if(day==='Sunday'){
            totalPrice = number * 10.46;
        }

        if(number >= 30){
            totalPrice *= 0.85;
        }
    }
    else if(typeOfGuest==='Business'){
        if(number >= 100){
            number-=10;
        }
        
        if(day==='Friday'){
            totalPrice = number * 10.90;
        }
        else if(day==='Saturday'){
            totalPrice = number * 15.60;
        }
        else if(day==='Sunday'){
            totalPrice = number * 16;
        }
    }
    else if(typeOfGuest==='Regular'){
        if(day==='Friday'){
            totalPrice = number * 15;
        }
        else if(day==='Saturday'){
            totalPrice = number * 20;
        }
        else if(day==='Sunday'){
            totalPrice = number * 22.5;
        }

        if(number>=10 && number <=20){
            totalPrice *=0.95;
        }
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`); 
}

solveAndPrint(40,
    "Regular",
    "Saturday"
    );

    solveAndPrint(30,
        "Students",
        "Sunday"        
        );
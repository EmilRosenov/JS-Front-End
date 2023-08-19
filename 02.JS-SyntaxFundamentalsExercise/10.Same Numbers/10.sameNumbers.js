function areSameOrNot(number){
    let numberLikeString = number.toString();
    let isTrue = true;
    let sum = 0;



    for (let index = numberLikeString.length-1; index >=0 ; index--) {
       
        if(index-1<0){
            sum+=Number(numberLikeString[index])
            break;
        }
        if(index===0){
            sum+=Number(numberLikeString[index])
            break;
        }
        if(numberLikeString[index]===numberLikeString[index-1]){
            sum+=Number(numberLikeString[index]);
        }
        else{
            sum+=Number(numberLikeString[index]);
            isTrue=false;
        }
    }

       
        console.log(isTrue);
        console.log(sum);
}



areSameOrNot(2222222);
areSameOrNot(1234);

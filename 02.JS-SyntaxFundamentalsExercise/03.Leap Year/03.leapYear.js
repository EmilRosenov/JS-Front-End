function isLeap(year){
   let isTrue;
    if(year%4 === 0 ){
        isTrue='yes';
    }
    else{
        isTrue='no';
    }

    console.log(isTrue)
}


isLeap(1984);
isLeap(2003);
isLeap(4);
function determine(age){
    if(age >=0 && age <= 2){
        console.log('baby');
    }
    else if(age >=3 && age <= 13){
        console.log('child');
    }
    else if(age >=14 && age <= 19){
        console.log('teenager');
    }
    else if(age >=20 && age <= 65){
        console.log('adult');
    }
    else if(age >=66 && age <= 120){
        console.log('elder');
    }
    else{
        console.log('out of bounds');
    }
}

determine(20);
determine(1);
determine(100);
determine(-1);
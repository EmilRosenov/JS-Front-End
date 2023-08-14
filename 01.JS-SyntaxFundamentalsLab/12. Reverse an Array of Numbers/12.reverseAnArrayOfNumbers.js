function solve(n, array){
    let newArray = [];
    let output = " ";

    for (let index = n; index <=0 ; index++) {

        for (let index2 = 0; index2 < n; index2++) {
            newArray[index2]+=array[index];
            break;
        }
    }



    console.log(newArray.join(' '));
}

solve(3, [30,40,50,60,70]);

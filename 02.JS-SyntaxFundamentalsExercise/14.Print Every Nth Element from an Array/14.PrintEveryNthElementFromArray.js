function print(array, number){
    let output = [];
    let current;

    for (let i = 0; i < array.length; i+=number) {
       if(i%number===0){
        current=array[i];
        output.push(current);
       }
    }

       return output;
}



print(['5', 
'20', 
'31', 
'4', 
'20'], 
2

);

print(['dsa',
'asd', 
'test', 
'tset'], 
2



);

print(['1', 
'2',
'3', 
'4', 
'5'], 
6
);
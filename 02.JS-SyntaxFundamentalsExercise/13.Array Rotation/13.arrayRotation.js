function rotate(array, numberRotations){
    numberRotations %= array.length;
   

    for (let i = 0; i < numberRotations; i++) {
        let current = array.shift()
        array.push(current);
    }
    console.log(array.join(' '));
}

rotate([51, 47, 32, 61, 21], 2);
rotate([32, 21, 61, 1], 4);
rotate([2, 4, 15, 31], 5);
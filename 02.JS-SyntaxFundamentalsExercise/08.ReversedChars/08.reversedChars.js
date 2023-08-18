function createString(charOne,charTwo,charTree){
    let arr = [];
    let reversed=[];
    arr.push(charOne);
    arr.push(charTwo);
    arr.push(charTree);

    reversed=arr.reverse();
    console.log(reversed.join(' '));
    }

    createString('A',
    'B',
    'C'
    );
    createString('1',
    'L',
    '&'
    );
function solve(text, word){
    let occurences = 0;

    text=text.split(' ');
    for (let index = 0; index < text.length; index++) {
        if(text[index]===word){
            occurences++;
        }
    }
    console.log(occurences);
}

solve('This is a word and it also is a sentence',
'is'
);

solve('softuni is great place for learning new programming languages',
'softuni'
);

solve('Emil is supporting Liverpool. Emil watched liverpool yesterday. Emil was disappointed!', 'Emil')
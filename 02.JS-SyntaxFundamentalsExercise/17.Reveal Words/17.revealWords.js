function replace(words, text){
//    let replaced=[];
   words=words.split(', ');
   text=[...text.split(' ')];


    for (let i = 0; i < text.length; i++) {
        for (const word of words){
            if (text[i][0] === '*' && text[i].length === word.length){
                text[i] = word;
            }
        }
    }
    
    console.log(text.join(' '));
}

replace('great',
'softuni is ***** place for learning new programming languages'
);


function findAndPrint(text){
    text = text.split(' ');
    let dictionary=[];
   
for (const word of text) {
    
    if(word.startsWith('#') && word.length>1 && !(/\d/.test(word)))
    {
        let wordTobePushed = word.substring(1,word.length)
        dictionary.push(wordTobePushed);
    }
    
}

    console.log(dictionary.join('\n'));
}

// findAndPrint('Nowadays everyone uses # to tag a #special word in #socialMedia');

findAndPrint('The symbol # is known #variously in English-speaking #regions as the #number sign')
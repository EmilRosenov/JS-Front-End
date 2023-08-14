function print(word, startNr, count){
    let newWord='';

    // for (let index = startNr; index <= endNr; index++) {
        
    //     newWord +=word[index];
    // }
    newWord=word.substr(startNr,count);
    console.log(newWord);
}

print('ASentence', 1, 8);
print('SkipWord', 4, 7);
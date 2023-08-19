function print(numberAsText, ...arr){
     
    // let newArray = arr.split(', ');
    let number = parseInt(numberAsText);

    for (let index = 0; index < arr.length; index++){
       
        if(arr[index]==='chop'){
 //  -- /2  
          number /= 2;
           
        }
        else   if(arr[index]==='dice'){
            //  -- sqrt(number)
            number = Math.sqrt(number);
          
            
        }
        else   if(arr[index]==='spice'){
// number+1
            number+=1;
       
        }
        else   if(arr[index]==='bake'){
// number*3
            number*=3;
           
        } 
        else   if(arr[index]==='fillet'){
// number*=0.8
            number*=0.8;
            
        }
        
        console.log(number.toFixed(1));
    }
}

print('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// print('32', 'chop', 'chop', 'chop', 'chop', 'chop');
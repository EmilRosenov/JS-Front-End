function speedCheck(currentSpeed, area){
    let maxSpeed = 0;
    let status;

    if(area==='motorway'){
        maxSpeed=130;
        if(maxSpeed-currentSpeed>=0){
            console.log(`Driving ${currentSpeed} km/h in a ${maxSpeed} zone`)
        }
        else{
            if(currentSpeed-maxSpeed <=20){
                status='speeding';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
            else if(currentSpeed-maxSpeed >20 && currentSpeed-maxSpeed<=40){
                status='excessive speeding';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
            else{
                status='reckless driving';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
        }
    }
    else if(area==='interstate'){
        maxSpeed=90;
        if(maxSpeed-currentSpeed>=0){
            console.log(`Driving ${currentSpeed} km/h in a ${maxSpeed} zone`)
        }
        else{
            if(currentSpeed-maxSpeed <=20){
                status='speeding';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
            else if(currentSpeed-maxSpeed >20 && currentSpeed-maxSpeed<=40){
                status='excessive speeding';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
            else{
                status='reckless driving';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
        }
    }
    else if(area==='city'){
        maxSpeed=50;
        if(maxSpeed-currentSpeed>=0){
            console.log(`Driving ${currentSpeed} km/h in a ${maxSpeed} zone`)
        }
        else{
            if(currentSpeed-maxSpeed <=20){
                status='speeding';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
            else if(currentSpeed-maxSpeed >20 && currentSpeed-maxSpeed<=40){
                status='excessive speeding';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
            else{
                status='reckless driving';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
        }
    }
    else if(area==='residential'){
        maxSpeed=20;
        if(maxSpeed-currentSpeed>=0){
            console.log(`Driving ${currentSpeed} km/h in a ${maxSpeed} zone`)
        }
        else{
            if(currentSpeed-maxSpeed <=20){
                status='speeding';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
            else if(currentSpeed-maxSpeed >20 && currentSpeed-maxSpeed<=40){
                status='excessive speeding';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
            else{
                status='reckless driving';
                console.log(`The speed is ${currentSpeed-maxSpeed} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
            }
        }
    }

}

speedCheck(40,'city');
speedCheck(21, 'residential');
speedCheck(120, 'interstate');
speedCheck(200, 'motorway');
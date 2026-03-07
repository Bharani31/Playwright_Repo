

function numberValue(num){
    if(num > 0){
        console.log(num + " is a Positive Number")
    }
    else if(num < 0){
        console.log(num + " is a Negative number")
    }
    else{
        console.log("Input is Neutral/Zero")
    }
}

const num1 = 12
numberValue(num1);

const num2 = -212
numberValue(num2);

const num3 = 0
numberValue(num3);
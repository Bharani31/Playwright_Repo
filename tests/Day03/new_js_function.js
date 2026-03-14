let userName = "Bharani"
let num = 12

function userProfile(userName){
    console.log(`Hello, ${userName}!`)
}

let double = (num) => 2 * num

function getUserData(callback){
    setTimeout(() => {
        callback();
    }, 3000)
}

function callback(){
    console.log("Call Back Function")
}

userProfile(userName);

let dnum = double(num);
console.log(dnum)

setTimeout(() => {
    console.log("This message is delayed by 2 seconds")
}, 2000)

getUserData(callback);

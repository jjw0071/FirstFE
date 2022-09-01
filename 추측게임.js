let maximum = parseInt(prompt("Enter the maximum number!"));


while(!maximum){
    maximum = parseInt(prompt("Enter a valid number!"));
    
}
const targetNum =Math.floor(Math.random()*maximum)+1;
console.log(targetNum);

let guess = parseInt(prompt("enter your guess!"));
while(guess!==targetNum){
    while(!guess){
        guess = prompt("Enter a valid number");
    }
    if(guess>targetNum){
        guess = prompt("Guess is bigger than Answer!");
    }else if(guess<targetNum){
        guess = prompt("Guess is smaller than Answer!");
    }

}
prompt("Congratulation! Answer is "+guess);
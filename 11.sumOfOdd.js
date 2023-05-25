function sumOfOdd (times){
    let sum = 0;
    
    for (let i = 1; i < times*2; i+=2) {
        sum += i;
        console.log(i);
        
    }
    console.log(`Sum: ${sum}`);

}
sumOfOdd(3)
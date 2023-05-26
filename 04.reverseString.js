function reverse (word){

    let newString = "";
    for (let i = word.length - 1; i >= 0; i--) {
        newString += word[i];
        
    }
    console.log(newString)
    



}
reverse("lebed is it")
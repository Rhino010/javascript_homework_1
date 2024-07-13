
// Homework problem number 1

let dog_string = "Hello Max, my name is Dog and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

function findWords(){
    let lowered_string = dog_string.toLowerCase();
    let names_lowered = dog_names.map(name => name.toLowerCase());
    
    let found_words = []
    let not_exist = []
    let i = 0
    while(i < names_lowered.length){
        if(lowered_string.includes(names_lowered[i])){
            found_words.push(names_lowered[i])
            i++;
        }else {
            not_exist.push(names_lowered[i])
            i++;
        }
    }

    return `The names that exist are ${found_words} and there are no matches for ${not_exist}` 
}
   
console.log(findWords())

// Homework problem number 2
arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr){
    let i = 0;
    while(i < arr.length){
       arr.splice(i,1,"even index")
       i+=2;
    }
       return arr
}

console.log(replaceEvens(arr))
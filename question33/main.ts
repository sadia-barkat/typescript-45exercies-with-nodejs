//creating array
let number1 =[1,2,3,4,5,6,7,8,9];

//using for loop
for(let numb of number1){
    let ordinalEnding:string
    if(numb===1){
        ordinalEnding="st"
    }
    else if(numb===2){
        ordinalEnding="nd"
    }
    else if(numb===3){
        ordinalEnding="rd"
    }
    else{
        ordinalEnding="th"
    }
    console.log(`${numb} ${ordinalEnding}`)
}
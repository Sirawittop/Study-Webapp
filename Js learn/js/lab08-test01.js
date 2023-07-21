/* add code below this */

// let Price = prompt("Enter your Price")
// let tips = Price * 0.1

// console.log("Tips for that Price is "+tips+" bath")


// for (let index = 1; index <= 12;index++){
//     for (let indexin = 1; indexin <= 12; indexin++) {
//         console.log(index+" * "+indexin +" = "+(index*indexin))
//     }
// }
    
// }
// let i = 1
// while (i<13){
//     console.log(i)
//     i++
// }

// for (let index = 1; index <= 12;index++){
//         console.log(index+" * "+" 2 " +"  = "+(index*2))
//     }

// let koon = prompt("What is mae")
// for (let index = 1; index <= 12;index++){
//         console.log(index+" * "+ koon +"  = "+(index*koon))
//     }

// const friend = ["DevTop","DevTrin","DevLouis","DevKong"]
// console.log(friend[0])
// console.log(friend[friend.length-1])
// for (let index = 0; index < friend.length; index++) {
//     console.log(friend[index]);
    
// }
// friend.unshift("Mewnick")
// friend.push("Bar")

// console.log(friend)
// let sport = ["Tennis","Run","Snow Board"]
// console.log(sport)
// sport.unshift("Football")
// console.log(sport)
// sport.push("Volleyball")
// console.log(sport)

// //add in mid of tennis and run
// sport.splice(2,0,"Petong")
// console.log(sport)


// let game = ["Swim","Muai"]
// console.log(sport)
// console.log(game)

// // space syntax javascript for mix two arry
// const FavGame = [...sport,...game]
// console.log(FavGame)

// for (let index = 0; index < FavGame.length; index++) {
//     console.log(FavGame[index])
    
// }


// //for of in js
// for (let index of FavGame) {
//     console.log(index)
// }

//array destructuring assignment
const league = ["Liverpool","Arsenal","Manu","MCS","Wolve"]

// let the1st = league[0]
// let the2sc = league[1]
let [the1st , the2sc , the3th , the4ft] = league
console.log(the1st,the2sc,the3th,the4ft)
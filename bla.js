
let max = 10
let min = 1
let player = Math.floor((Math.random()*(max-min)+1)+min);
console.log(player);
let maxi = 10
let mini = 1
let player2 = Math.floor((Math.random()*(maxi-mini)+1)+mini);
console.log(player2);
let maxim = 10
let minim = 1
let player3 = Math.floor((Math.random()*(max-min)+1)+min);
console.log(player3);
let maximum = 10
let minimum = 1
let player4 = Math.floor((Math.random()*(maxi-mini)+1)+mini);
console.log(player4);

let addition = parseFloat(player + player2);
console.log(addition);

let addition2 = parseFloat(player3 + player4);
console.log(addition2);

if(addition == addition2) {
    
    alert(`the two players are tied`);

}else if((addition <=21)&&(addition > addition2)) {
    
    alert(`player one has won ${addition} and ${addition2}`);
}else if((addition2<=21)&&(addition < addition2)) {

    alert(`player two has won ${addition2} and ${addition}`);
}




































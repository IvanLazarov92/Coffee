function coinAcceptance(arr) {

    const coffeePrice = 0.20;
    const teaPreice = 0.10;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const curCoin = arr[i];

        if (curCoin < 0.1 || curCoin > 1) {
            console.log(`Incorrect coin ${curCoin}!`);
        } else {
            sum += curCoin;
             
        }
        
    }
    if (sum > teaPreice) {
        console.log("Enough money to buy tea or coffee!");
    } else if (sum >= teaPreice) {
        console.log("Enough money to buy tea!")
    }
}
coinAcceptance([0.01, 0.02, 0.05, 0.10,])
coinAcceptance([0.10, 0.20])
coinAcceptance([1, 2])
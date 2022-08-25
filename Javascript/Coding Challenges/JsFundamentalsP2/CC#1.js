const calcAverage = (score1,score2,score3) => {
    return (score1+score2+score3)/3;
};

const checkWinner = function(avgDolphins,avgKoalas){
    if(avgKoalas >= avgDolphins*2){
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    }
    else if(avgDolphins >= avgKoalas*2){
        return `Dolphins win(${avgDolphins} vs. ${avgKoalas})`;
    }
    else{
        return `No Team wins`
    }
};

// Test Data 1

let dolphins = calcAverage(44,23,71);
let koalas = calcAverage(65,54,49);

console.log(checkWinner(dolphins,koalas));

// Test Data 2

dolphins = calcAverage(85,54,41);
koalas = calcAverage(23,34,27);

console.log(checkWinner(dolphins,koalas));
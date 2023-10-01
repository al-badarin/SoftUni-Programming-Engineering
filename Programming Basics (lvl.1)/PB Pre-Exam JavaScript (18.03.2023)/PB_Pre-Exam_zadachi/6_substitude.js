function solve(input) {

    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);

    let isSame = false;
    for (let k = K; k <= 8; k++) {
        for (let l = 9; l >= L; l--) {
            for (let m = M; m <= 8; m++) {
                for (let n = 9; n >= N; n--) {

                    if (`${k}${l}` === `${m}${n}`) {
                        isSame = true;
                        console.log("Cannot change the same player.");
                        
                    }
                    else if (k % 2 === 0 && m % 2 === 0 && l % 2 !== 0 && n % 2 !== 0) {
                        console.log(`${k}${l} - ${m}${n}`);
                        
                    }
                        
                        
                    
                    
                }

            }

        }
        
    }
    
    
}

solve(["7", //K
    "6",    //L
    "8",    //M
    "5"])   //N

function solve(input){

    let n = Number(input[0]);

    for(i = 0; i <= n; i += 2){
        let res = Math.pow(2,i);
        console.log(res);
    }
}
solve(["7"])
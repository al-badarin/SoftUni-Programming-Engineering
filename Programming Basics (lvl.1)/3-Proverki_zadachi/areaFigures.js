function solve(input){

    let figure = (input[0]);
    let a = Number(input[1]);
    let b = Number(input[2]);
    let res = 0;

    if (figure === "square"){
        res = a*a;
    }
    else if (figure === "rectangle"){
        res = a*b;
    }
    else if (figure === "circle"){
        res = Math.pow(a, 2) * Math.PI;
    }
    else if (figure === "triangle"){
       res = (a*b)/2;
    }

    console.log(res.toFixed(3));
}
solve(["triangle", "4.5", "20"])
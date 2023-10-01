function solve(n){

    if (n < 1 || n > 7){
        console.log("Invalid day!");
    }
    else{
        let dayNameArr = [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"
        ]
        console.log(dayNameArr[n-1]);
    }
   
}
solve(3);
solve(6);
solve(11);
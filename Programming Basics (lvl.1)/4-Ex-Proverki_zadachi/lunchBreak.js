function solve(input){

    let serialName = input[0];
    let episodeDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let timeLunch = restDuration * 1/8;
    let timeChill = restDuration * 1/4;
    let freeTime = restDuration - timeLunch - timeChill;

    if (freeTime >= episodeDuration){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(freeTime - episodeDuration)} minutes free time.`); 
    } else{
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeDuration - freeTime)} more minutes.`)

    }
    
}
solve(["Teen Wolf",
"48",
"60"])


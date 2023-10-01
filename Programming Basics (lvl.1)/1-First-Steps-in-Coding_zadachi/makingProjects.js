function makingProjects(input){

    let name = input[0];
    let numProjects = Number(input[1]);


    //let res = `The architect ${name} will need X h to complete ${numProjects} project/s.`;
    //console.log(res);

    let hoursNeeded = numProjects * 3;
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${numProjects} project/s.`)
}

makingProjects(["George", 4])
function concatenateData(input){

    let firstName = input[0];
    let family = input[1];
    let age = Number(input[2]);
    let town = input[3];

    let result = "You are " + firstName + " " + family + ", a " + age + "-years old person from " + town + "."
    console.log(result);  

    //let result2 = `You are ${firstName} ${family}, a ${age}-years old person from ${town}.`
    //console.log(result2);  
}

concatenateData(["Jamal", "Al Badarin", 19, "Kazanlak"])
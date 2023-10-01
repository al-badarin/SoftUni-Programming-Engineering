function literatura(input){

    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let time = bookPages / pagesPerHour;
    let result = time / days;

    console.log(result)
}
literatura(["212", "20", "2"])
function sortAnArrayBy2Criteria(arr) {

    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sortedArray.forEach(element => {
        console.log(element);
    }); 
    // console.log(sortedArray.join("\n"));

}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
function sortAnArrayBy2Criteria(inputArr) {

    let sortedArr = inputArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));
}
sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']);
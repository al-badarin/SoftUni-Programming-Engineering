function printCertificate(grade, nameArr) {
    printHeader();
    printName(nameArr);
    formatGrade(grade);

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }

    function formatGrade(grade) {

        let description;
        let formatedGrade = grade.toFixed(2);

        if (grade < 3) {
            description = 'Fail';
            formatedGrade = 2;
        }
        else if (grade < 3.50) {
            description = 'Poor';
        }
        else if (grade < 4.50) {
            description = 'Good';
        }
        else if (grade < 5.50) {
            description = 'Very good';
        }
        else {
            description = 'Excellent';
        }
        console.log(`${description} (${formatedGrade})`);
    }
}
printCertificate(5.25, ['Peter', 'Carter']);

function extractNonDecreasingSubsequence(arr) {
    // let biggest = args[0];
    // let arr = [];

    // for (let i = 0; i < args.length; i++) {
    //     if (args[i] >= biggest) {
    //         biggest = args[i];

    //         console.log(args[i]);
    //         arr.push(args[i]);
    //     }
    // }
    // return arr;

    let currentEl = Number.NEGATIVE_INFINITY;

    let outputArr = arr.reduce((acc, el) => {
        if (el >= currentEl) {
            currentEl = el;
            acc.push(el);
        }

        return acc;
    }, []);

    return outputArr;
}
extractNonDecreasingSubsequence([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
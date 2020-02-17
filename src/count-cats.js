const CAT = '^^';

module.exports = function countCats(matrix) {
    let cats = 0;

    for (let row of matrix) {
        for (let el of row) {
            if (el === CAT) {
                cats += 1;
            }
        }
    }

    return cats;
};

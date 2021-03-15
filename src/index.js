
exports.min = function min (array) {
    if (array === undefined) {
        return 0;
    }
    else if (array.length > 0)  {
        let minNum = array[0]
        for (let i = 0; i < array.length; i++) {
            if (minNum > array[i]) {
                minNum = array[i]
            }
        }
        return minNum
    }
    else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array === undefined) {
        return 0;
    }
    else if  (array.length > 0) {
        let maxNum = array[0]
        for (let i = 0; i < array.length; i++) {
            if (maxNum < array[i]) {
                maxNum = array[i]
            }
        }
        return maxNum
    }
    else {
        return 0;

    }
}

exports.avg = function avg (array) {
    if (array === undefined) {
        return 0;
    }
    else if (array.length > 0) {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum / array.length
    }
    else {
        return 0;
    }
}

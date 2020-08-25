const MIN = {
    getMin1: (arr) => {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i]
            } else {
                continue;
            }
        }
        return min;
    },
    getMin2: (arr) => {
        return Math.min.apply(Math, arr);
    },
}

const MAX = {
    getMax1: (arr) => {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            } else {
                continue;
            }
        }
        return max;
    },
    getMax2: (arr) => {
        return Math.max.apply(Math, arr);
    }
}
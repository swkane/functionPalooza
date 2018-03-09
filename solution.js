function add(x, y) {
    return x + y;
}

function mult(x, y) {
    return x * y;
}

function multWithPlus(x, y) {
    let sum = 0;
    for (i = 0; i < y; i++) {
        sum += x;
    }
    return sum;
}

function multWithFunc(x, y) {
    let sum = 0;
    for (i = 0; i < y; i++) {
        sum = add(sum, x);
    }
    return sum;
}

function power(x, y) {
    let result = 1;
    for (i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}


// add(2,3);
// mult(2,3);
// multWithPlus(2,3);
// multWithFunc(2,3);
// power(2,3);
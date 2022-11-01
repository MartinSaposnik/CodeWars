Array.prototype.filter = function (func) {
    let buffer = [];

    this.forEach(number => {
        if (func(number)) {
            buffer.push(number)
        }
    })
    return buffer;
}

/* Array.prototype.filter = function (fn) {
    var res = [];
    for (var i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            res.push(this[i]);
        }
    }
    return res;
} */

/* Array.prototype.filter = function (fn) {
    return this.reduce((pre, val) => fn(val) ? [...pre, val] : pre, []);
}; */
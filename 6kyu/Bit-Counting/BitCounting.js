var countBits = function(n) {
    let nBin = n.toString(2);
    return 1+nBin.split('').sort().reverse().lastIndexOf('1');
};

//countBits = n => n.toString(2).split('0').join('').length;
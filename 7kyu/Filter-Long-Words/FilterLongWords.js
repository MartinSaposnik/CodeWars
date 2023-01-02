function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(word => word.length > n);
}

/* function filterLongWords(sentence, n) {
    var longer = [];
    var sent = sentence.split(' ');
    for (var i = 0; i < sent.length; i++) {
        if (sent[i].length > n) {
            longer.push(sent[i])
        }
    }
    return longer
} */
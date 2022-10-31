/* function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ');
} */

function nameShuffler(str){
    const [firstNane, lastName] = str.split(' ');// destructuring
    return `${lastName} ${firstNane}`;
}
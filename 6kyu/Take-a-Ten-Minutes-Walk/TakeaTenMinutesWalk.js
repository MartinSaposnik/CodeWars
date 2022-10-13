/* function isValidWalk(walk) {
    //insert brilliant code here
    let dx = 0;
    let dy = 0;
    let dt = walk.length

    for (let i=0; i < walk.length; i++){
        switch(walk[i]){
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }
    return dt === 10 && dx === 0 && dy === 0
} */

const isValidWalk = walk =>
    walk.length == 10 && !walk.reduce((prev, curr)=>
                                        prev + {'n':1, 'e':2, 's': -1, 'w':-2}[curr], 0)
function countSalutes(hallway) {
    let goingRight = 0;
    let salutes = 0;

    for (let i = 0; i < hallway.length; i++){
        const hallwayPosition = hallway[i];
        if (hallwayPosition === '>'){
            goingRight = goingRight + 1;
        }
        if(hallwayPosition === '<'){
            salutes = salutes + (goingRight * 2);
        }
    }
    return salutes;
}
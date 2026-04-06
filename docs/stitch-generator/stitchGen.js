function stitchListGen(noStitchesRequired, maxCrosses, maxTwists) {
    let stitchList = "";

    // read: maxCrosses
    // read: maxTwists

    for (let countStitches = 1; countStitches <= noStitchesRequired; countStitches++) {
        stitchList += stitchGen(maxCrosses, maxTwists);
        stitchList += "<br>";
    }

    return stitchList;
}

function stitchGen(maxCrosses, maxTwists) {

    // define & initialize variables
    let stitch = "";
    let lengthCrosses = 0;
    let countCrosses = 1;

    // how many crosses, minimal 1 cross, therefor add 1 to random integer
    lengthCrosses = Math.floor(Math.random() * 10000)%maxCrosses + 1;

    while (countCrosses <= lengthCrosses ) {
        stitch +="C";
        stitch = stitch.concat(genTwists("L", maxTwists));
        stitch = stitch.concat(genTwists("R", maxTwists));
        countCrosses ++;
    }
    return stitch;
}

// generate a string of "L" or "R"
// note: string of 0, 1, ..., maxTwists, therefor modulo (maxTwists + 1)
function genTwists(LR, maxTwists)
{
    let stringTwists = "";
    let lengthTwists = Math.floor(Math.random() * 10000)%(maxTwists + 1);

    for (let i = 1; i <= lengthTwists; i++) {
        stringTwists += LR;
    }
    return stringTwists;
}


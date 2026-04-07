function genStitchList(pS,pC,pT) {
    //const stitchArray = [];
    let stitchString = "";
    let stitchesRequired, maxCrosses, maxTwists;

    // The function can be called with or without parameters.attributes.
    // without Number() the document.value is a string. With unexpected results in function genTwists.
    if (pS === undefined) {
        stitchesRequired = Number(document.getElementById("stitchesRequired").value);
    } else {
        stitchesRequired = pS;
    }
    if (pC === undefined) {
        maxCrosses = Number(document.getElementById("maxCrosses").value);
    } else {
        maxCrosses = pC;
    }
    if (pT === undefined) {
        maxTwists = Number(document.getElementById("maxTwists").value);
    } else {
        maxTwists = pT;
    }

    // validate input
    if (stitchesRequired < 1) {
        stitchesRequired = 1;
    }
    if (stitchesRequired > 25) {
        stitchesRequired = 25;
    }
    if (maxCrosses < 1) {
        maxCrosses = 1;
    }
    if (maxCrosses > 9) {
        maxCrosses = 9;
    }
    if (maxTwists < 1) {
        maxTwists = 1;
    }
    if (maxTwists > 9) {
        maxTwists = 9;
    }

    for (let countStitches = 1; countStitches <= stitchesRequired; countStitches++) {
        //stitchArray += genStitch(maxCrosses, maxTwists) + "<br>";
        stitchString += genStitch(maxCrosses, maxTwists) + "<br>";
    }
    // returning array gives warning about type in getElementById
    return stitchString;
}

function genStitch(maxCrosses, maxTwists) {

    // define & initialize variables
    let stitch = "";
    let countCrosses = 1;

    // how many crosses, minimal 1 cross, therefor add 1 to random integer
    let lengthCrosses = Math.floor(Math.random() * 10000)%maxCrosses + 1;

    // generate part of stitch. Uses "while" and "concat" for learning purposes.
    while (countCrosses <= lengthCrosses ) {
        stitch +="C";
        stitch = stitch.concat(genTwists(maxTwists));
        countCrosses ++;
    }

    return stitch;
}

// generate a string with "T", "L", "R"
// note: string of 0, 1, ..., maxTwists "L" or "R", therefor modulo (maxTwists + 1)
function genTwists(maxTwists)
{
    let stringTwists = "";
    let lengthL = Math.floor(Math.random() * 10000)%(maxTwists + 1);
    let lengthR = Math.floor(Math.random() * 10000)%(maxTwists + 1);
    let lengthT = Math.min(lengthL, lengthR);

    lengthL = lengthL-lengthT;
    lengthR = lengthR-lengthT;

    for (let i = 1; i <= lengthT; i++) {
        stringTwists += "T";
    }
    for (let i = 1; i <= lengthL; i++) {
        stringTwists += "L";
    }
    for (let i = 1; i <= lengthR; i++) {
        stringTwists += "R";
    }

    return stringTwists;
}


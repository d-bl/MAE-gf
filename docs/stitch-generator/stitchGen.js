function stitchListGen() {
    let stitchList = "";
    //var stitchesRequired = document.getElementById("StitchesRequired").value;
    var stitchesRequired = document.getElementById("stitchesRequired").value;
    var maxCrosses = document.getElementById("maxCrosses").value;
    var maxTwists = document.getElementById("maxTwists").value;

    for (let countStitches = 1; countStitches <= stitchesRequired; countStitches++) {
        stitchList += stitchGen(maxCrosses, maxTwists);
        stitchList += "<br>";
    }

    return stitchList;
}

function stitchGen(maxCrosses, maxTwists) {

    // define & initialize variables
    let stitch = "";
    let countCrosses = 1;

    // how many crosses, minimal 1 cross, therefor add 1 to random integer
    let lengthCrosses = Math.floor(Math.random() * 10000)%maxCrosses + 1;

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


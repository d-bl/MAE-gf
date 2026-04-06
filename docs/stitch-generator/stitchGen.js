function stitchListGen(pS,pC,pT) {
    let stitchList = "";

    let stitchesRequired, maxCrosses, maxTwists;
    //let stitchesRequired = Number(document.getElementById("stitchesRequired").value);
    //let maxCrosses = Number(document.getElementById("maxCrosses").value);
    //let maxTwists = Number(document.getElementById("maxTwists").value);
    // without Number() the value is a string. With unexpected results in function genTwists.

    // The function can be called with or without parameters.attributes.
    if (pS === undefined) {stitchesRequired = Number(document.getElementById("stitchesRequired").value);}
    else {stitchesRequired = pS;}
    if (pC === undefined) {maxCrosses = Number(document.getElementById("maxCrosses").value);}
    else {maxCrosses = pC;}
    if (pT === undefined) {maxTwists = Number(document.getElementById("maxTwists").value);}
    else {maxTwists = pT;}

    // validate input
    if(stitchesRequired < 1) {stitchesRequired = 1;}
    if(stitchesRequired > 25) {stitchesRequired = 25;}
    if(maxCrosses < 1) {maxCrosses = 1;}
    if(maxCrosses > 9) {maxCrosses = 9;}
    if(maxTwists < 1) {maxTwists = 1;}
    if(maxTwists > 9) {maxTwists = 9;}

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

    // generate part of stitch. Uses "while" and "concat" for learning purposes.
    while (countCrosses <= lengthCrosses ) {
        stitch +="C";
        stitch = stitch.concat(genTwists("L", maxTwists));
        stitch = stitch.concat(genTwists("R", maxTwists));
        countCrosses ++;
    }

    // replace all LR with T, doesn't work yet off course.
    //while (stitch.search("LR") != -1){
    //stitch = stitch.replace("LR","T");
    //}

    return stitch;
}

// generate a string of "L" or "R"
// note: string of 0, 1, ..., maxTwists "L" or "R", therefor modulo (maxTwists + 1)
function genTwists(LR, maxTwists)
{
    let stringTwists = "";
    let lengthTwists = Math.floor(Math.random() * 10000)%(maxTwists + 1);

    for (let i = 1; i <= lengthTwists; i++) {
        stringTwists += LR;
    }
    return stringTwists;
}


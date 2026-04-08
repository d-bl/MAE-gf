function genStitchList(pS,pC,pT,pB,pA) {
    //const stitchArray = [];
    let stitchString = "";
    let stitchesRequired, maxCrosses, maxTwists;
    let twistsBefore, twistsAfter

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
    if (pB === undefined) {
        twistsBefore = document.getElementById("twistsBefore").checked;
    } else {
        twistsBefore = pB;
    }
    if (pA === undefined) {
        twistsAfter = document.getElementById("twistsAfter").checked;
    } else {
        twistsAfter = pA;
    }

    // validate input - needed if called without arguments.
    if (stitchesRequired < 1)  {        stitchesRequired = 1;     }
    if (stitchesRequired > 25) {        stitchesRequired = 25;    }
    if (maxCrosses < 1) {        maxCrosses = 1;    }
    if (maxCrosses > 5) {        maxCrosses = 9;    }
    if (maxTwists < 1) {        maxTwists = 1;    }
    if (maxTwists > 5) {        maxTwists = 9;    }

    for (let countStitches = 1; countStitches <= stitchesRequired; countStitches++) {
        //stitchArray += genStitch(maxCrosses, maxTwists) + "<br>";
        stitchString += genStitch(maxCrosses, maxTwists, twistsBefore, twistsAfter) + "<br>";
    }
    // returning array gives warning about type in getElementById
    return stitchString;
}

function genStitch(maxCrosses, maxTwists, twistsBefore, twistsAfter) {

    // define & initialize variables
    let stitch = "";

    // how many crosses, minimal 1 cross, therefor add 1 to random integer
    let lengthCrosses = Math.floor(Math.random() * 10000)%maxCrosses + 1;

    if (twistsBefore) {
        stitch += genTwists(maxTwists);
    }

    // generate part of stitch. Uses "while" and "concat" for learning purposes.
    for (let countCrosses=1; countCrosses <= lengthCrosses - 1; countCrosses ++) {
        stitch +="C";
        stitch += genTwists(maxTwists);
    }

    // last Cross
    stitch += "C";

    if (twistsAfter) {
        stitch += genTwists(maxTwists);
    }

    return stitch;
}

// generate a string with "T", "L", "R"
// note: string of 0, 1, ..., maxTwists "L" or "R", therefor modulo (maxTwists + 1)
function genTwists(maxTwists)
{
    let lengthL = Math.floor(Math.random() * 10000)%(maxTwists + 1);
    let lengthR = Math.floor(Math.random() * 10000)%(maxTwists + 1);
    let lengthT = Math.min(lengthL, lengthR);

    lengthL = lengthL-lengthT;
    lengthR = lengthR-lengthT;

    return "T".repeat(lengthT) + "L".repeat(lengthL) + "R".repeat(lengthR);
}

function genVal(vId)
{
    let valWrd = Number(vId.value);
    let vMin = Number(vId.min);
    let vMax = Number(vId.max);

    let toBeep;

    toBeep = isNaN(valWrd);

    if (!toBeep) {
        if (valWrd < vMin) {
            toBeep = true;
            vId.innerHTML = vMin;
        }
        if (valWrd > vMax) {
            toBeep = true;
            vId.innerHTML = vMax;
        }
    }

    if (toBeep) {
        if (typeof window.AudioContext !== "undefined") {
            const ctx = new window.AudioContext();
            const o = ctx.createOscillator();
            o.type = "sine";
            o.frequency.value = 440;
            o.connect(ctx.destination);
            o.start();
            o.stop(ctx.currentTime + 0.05);
        }
    }

    return true;
}
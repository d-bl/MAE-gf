function stitchGen() {

// define & initialize variables
    let maxTwists = 2, maxCrosses = 3;
    let stitch = "C";
    let countCrosses = 1;
    let moreCrosses = 0;

// read:
// max-crosses
// max-twists

    document.write("gestart script");

while (countCrosses < maxCrosses) {
    stitch = stitch.concat(genTwists("L", maxTwists));
    stitch = stitch.concat(genTwists("R", maxTwists));

    moreCrosses = genCross();

    if (moreCrosses !== 0) {
        stitch = stitch.concat("C");
        countCrosses++;
    } else {
        countCrosses = 1000;
    }
}

// twists between stitches
    stitch = stitch.concat(genTwists("L", maxTwists));
    stitch = stitch.concat(genTwists("R", maxTwists));

 // display, should go on index.md
    document.write(stitch);

    return stitch;
}

function genTwists(LR, maxTwists)
{
let countTwists = Math.floor(Math.random() * 10000)%maxTwists;
if (countTwists === 0) {return ""}
if (countTwists === 1) {return LR}
if (countTwists === 2) {return LR.concat(LR)}
}

function genCross()
{
    let countCrosses = Math.floor(Math.random() * 10000)%2;
    return countCrosses;
}

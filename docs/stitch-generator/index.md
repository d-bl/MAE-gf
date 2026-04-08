---
layout: default
title: Stitch Generator
sidebar: Sidebar
javascript:
  - xxx.js
---

# Stitches Generator

{% include picts-centr.html
src="stitch-generator.svg"
alt="stitch-generator in Alphabet 1"
title="stitch-generator in Alphabet 1"
%}

This feature generates a list of random stitches.  
You can specify:

* how many stitches you want, between 1 and 25;
* the maximum number of crosses in a stitch, between 1 and 5;
* the maximum number of twists between two crosses or between two stitches, between 1 and 5;
* if the twists between stitches are at the front or at the back of the stitch or at front and back.

Please note: a number that is too low or too high will be set to 1 resp. the maximal number allowed.   

<div>
    <label for="stitchesRequired">number of required stitches: </label>
    <input type="number" name="stitchesRequired" id="stitchesRequired" min="1" max="25" value="1" oninput=genVal(this) >
    <br>

    <label for="maxCrosses">maximal number of crosses: </label>
    <input type="number" name="maxCrosses" id="maxCrosses" min="1" max="5" value="3" oninput=genVal(this) >
    <br>

    <label for="maxTwists">maximal number of twists between crosses: </label>
    <input type="number" name="maxTwists" id="maxTwists" min="1" max="5" value="2" oninput=genVal(this) >
    <br>
</div>

<div>
    <p>Twists between stitches:<br>
    <input type="checkbox" id="twistsBefore" name="twistsBefore" value= "tBefore" >
    <label for="twistsBefore">twists before</label>
    <input type="checkbox" id="twistsAfter" name="twistsAfter" value="tAfter" checked >
    <label for="twistsAfter">twists after</label>
    </p>
</div>

<div>
    <br> <br>
    <script type="text/javascript" src="stitchGen.js"></script>
    <button type="button" onclick="document.getElementById('slag').innerHTML = genStitchList()">
        Generate list of stitches</button>
    <button type="button" onclick="document.getElementById('slag2').innerHTML = genStitchList(2,2,2,false,true)">
        Generate list of stitches with fixed attributes</button>
</div>

<p id="slag"></p>

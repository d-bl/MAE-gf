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
alt="stitch-generator in Alphabet 1, by M. Tempels"
title="stitch-generator in Alphabet 1, by M. Tempels"
%}

This feature generates a list of random stitches.  
You can specify:

* How many stitches you want. Minimal 1, maximal 25.
* The maximum number of crosses in a stitch, between 1 and 5. The generated stitch has at least one cross.
* The maximum number of twists between two crosses or between two stitches, between 1 and 5. The generated stitch can have 0 twists.
* Between two stitches, twists can be at the front, at the back, at front and back of the generated stitch or none.

Please note: a number that is too low or too high will be set to 1 resp. the maximal number allowed.   

<script type="text/javascript" src="stitchGen.js"></script>
<div>
    <label for="stitchesRequired">number of required stitches: </label>
    <input type="number" name="stitchesRequired" id="stitchesRequired" min="1" max="25" value="1" onchange="genVal(this)" >
    <br>

    <label for="maxCrosses">maximal number of crosses: </label>
    <input type="number" name="maxCrosses" id="maxCrosses" min="1" max="5" value="3" onchange="genVal(this)" >
    <br>

    <label for="maxTwists">maximal number of twists between crosses: </label>
    <input type="number" name="maxTwists" id="maxTwists" min="1" max="5" value="2" onchange="genVal(this)" >
    <br>
</div>
<div>
    <br>
    Twists between stitches:<br>
    <input type="checkbox" id="twistsBefore" name="twistsBefore" value= "tBefore" >
    <label for="twistsBefore">twists before</label>
    <input type="checkbox" id="twistsAfter" name="twistsAfter" value="tAfter" checked >
    <label for="twistsAfter">twists after</label>
</div>
<div>
    <br><br>
    <script type="text/javascript" src="stitchGen.js"></script>
    <button type="button" onclick="document.getElementById('slag').innerHTML = genStitchList()">
        Generate list of stitches</button>
    <br><br>
</div>

<p id="slag"></p>

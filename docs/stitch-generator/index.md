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
Please note: a number that is too low or too high will be set to 1 resp. the maximal number allowed.   

<script type="text/javascript" src="stitchGen.js"></script>
<div>
    <label for="stitchesRequired">The number of stitches required: &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; </label>
    <input type="number" name="stitchesRequired" id="stitchesRequired" min="1" max="25" value="1" onchange="genVal(this)" >
    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Minimal 1, maximal 25.
    <br>

    <label for="maxCrosses">The maximal number of crosses in a stitch: </label>
    <input type="number" name="maxCrosses" id="maxCrosses" min="1" max="5" value="3" onchange="genVal(this)" >
    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Between 1 and 5. The generated stitch has at least one cross.
    <br>

    <label for="maxTwistsBetweenCrosses">The maximal number of twists between two crosses: </label>
    <input type="number" name="maxTwistsBetweenCrosses" id="maxTwistsBetweenCrosses" min="1" max="5" value="1" onchange="genVal(this)" >
    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Between 1 and 5. The generated stitch can have 0 twists between two crosses.
    <br>

    <label for="maxTwistsBetweenStitches">The maximal number of twists between two stitches: </label>
    <input type="number" name="maxTwistsBetweenStitches" id="maxTwistsBetweenStitches" min="1" max="5" value="2" onchange="genVal(this)" >
    &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Between 1 and 5. The generated stitch can have 0 twists at the front and at the back.
    <br>
</div>
<div>
    <br>
    Between two stitches, twists can be at the front, at the back, at front and back of the generated stitch or none.<br>
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

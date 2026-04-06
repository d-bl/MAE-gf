---
layout: default
title: Stitch Generator
sidebar: Sidebar
javascript:
  - xxx.js
---

# Stitches Generator

This feature generates a list of random stitches.  
You can specify:

* how many stitches you want, between 1 and 25;
* the maximum number of crosses in a stitch, between 1 and 9;
* the maximum number of twists between two crosses or between two stitches, between 1 and 9. Please note: twists are shown als "L"'s and "R"'s.

Please note: a number that is too low or too high will be set to 1 resp. the maximal number allowed.   

<div>                                                   
    <label for="stitchesRequired">number of required stitches     : </label>
    <input type="number" name="stitchesRequired" id="stitchesRequired" min="1" max="25" value="1" onchange="return document.getElementById('stitchesRequired')" >
    <br>
                            
    <label for="maxCrosses">maximal number of crosses       : </label>
    <input type="number" name="maxCrosses" id="maxCrosses" min="1" max="9" value="3" onchange="return document.getElementById('maxCrosses')" >
    <br>

    <label for="maxTwists">number of twists between crosses: </label>
    <input type="number" name="maxTwists" id="maxTwists" min="1" max="9" value="2" onchange="return document.getElementById('maxTwists')" >
    <br>
</div>
<br>

<script type="text/javascript" src="stitchGen.js"></script>
<button type="button" onclick="document.getElementById('slag').innerHTML = stitchListGen()">
    Generate list of stitches</button>

<p id="slag"></p>

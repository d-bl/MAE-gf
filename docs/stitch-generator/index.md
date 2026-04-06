---
layout: default
title: Stitch Generator
sidebar: Sidebar
javascript:
  - xxx.js
---

# Stitch Generator

<div>                                             
    <label for="stitchesRequired">number of required stitches     : </label>
    <input type="number" name="stitchesRequired" id="stitchesRequired" min="1" max="9" value="1" onchange="return document.getElementById('stitchesRequired')" >
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
<button type="button" onclick="document.getElementById('slag').innerHTML = stitchListGen(5, 2, 2)">
    Generate stitch</button>

<p id="slag"></p>




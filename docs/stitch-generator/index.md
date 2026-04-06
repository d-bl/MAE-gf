---
layout: default
title: Stitch Generator
sidebar: Sidebar
javascript:
  - xxx.js
---

# Stitch Generator

Get: value maxTwists
Get: value maxCrosses
Get: number of required stitches


<script type="text/javascript" src="stitchGen.js"></script>
<button type="button" onclick="document.getElementById('slag').innerHTML = stitchListGen(5, 2, 2)">
    Generate stitch</button>
<span id="slag"></span>




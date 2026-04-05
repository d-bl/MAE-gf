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
<button type="button" onclick="document.getElementById('slag').innerHTML = stitchGen(2, 3)">
    Generate stitch</button>
<span id="slag"></span>




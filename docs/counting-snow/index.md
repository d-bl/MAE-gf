---
layout: default
title: families with 6 pairs
---

Counting snowflake families
===========================

Intro
-----

...

### Reading guide

Python script(s) renders permutations of pairs changing positions and filters reflections.
You can run (and modify) the script with various offline and online environments such as
https://www.online-python.com/
The output of the scripts are hacked into SVG documents mentioned/shown on this page.

You can  use a vector editor like Inkscape to apply changes to the downloads. 
For example bend the straight lines in into workable pair diagrams.
The numbers show the order of the pairs at the end. Those marked with a `*` or `+` have an internal reflection.

### Generate thread diagrams

... pros and cons of droste ...

Six pairs
---------

### Pairs leaving before the last enters

Composition requirements: ... next to cloth stitch ... side by side ...

...

### All pairs entering before any leaves

With six pairs we have 6x5x4x3x2=720 permutations.
After filtering reflections with this [script](all-in-before-any-out.py) we still have 230 options.

Just one example (which happens to be workable by itself) with four of many more options to bend the pairs,
and a [pattern definition] for the last variant to choose stitches for thread diagrams.

![](654321.svg)  
[download](654321.svg) the family

[download](all-in-before-any-out.svg) the collection:  
![](all-in-before-any-out.svg)  


[pattern definition]: /GroundForge/droste?patchWidth=12&patchHeight=16&b1=clcrc&a1=c&d3=clcrclll&a3=cttt&c4=c&b4=crclc&d6=crclcrrr&c6=cttt&tile=76x-,yxxy,6-x4,x24-,xxww,x-27,,,&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=4&shiftRowsSE=6#

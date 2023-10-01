---
layout: default
title: snowflake families
---

Counting snowflake families
===========================

**... and crossings with fewer pairs**

Contents
--------

  * [Introduction](#introduction)
  * [Bouncing pairs and numbering](#bouncing-pairs-and-numbering)
  * [Notes](#notes)
    * [Pairs or threads](#pairs-or-threads)
    * [Save and edit images](#save-and-edit-images)
    * [Look up of snowflakes](#look-up-of-snowflakes)
    * [Generated content](#generated-content)
  * [6 pairs / threads](#6-pairs--threads)
    * [No bouncing](#no-bouncing)
    * [Bouncing once](#bouncing-once)
    * [Bouncing twice](#bouncing-twice)
  * [5 pairs / threads](#5-pairs--threads)
  * [4 pairs / threads](#4-pairs--threads)
  * [3 pairs](#3-pairs)
  * [2 pairs](#2-pairs)
  * [Exploring families](#exploring-families)
    * [Pair diagrams](#pair-diagrams)
    * [Choose stitches](#choose-stitches)
  * [Compose grounds](#compose-grounds)

Introduction
------------

From [literature](../literature) like "Naar de Bron" and "Viele gute Gründe"
we can collect dozens of pair diagrams for snowflakes. 
That made us curious to explore the number of ways we can make n-pair crossings.
Traditional spiders are crossings with an even number of pairs, 
snowflakes in Binche are usually 4-pair or 6-pair crossings.

To start the exploration we calculate the number of ways 
the sequence of pairs can change after completing a crossing. 
Mathematicians call that permutations. The bouncing is explained in another section.
The calculation/counting results: 

|                   pairs |    2 |    3 |  4 |   5 |   6 |    7 |     8 |      9 |
|------------------------:|-----:|-----:|---:|----:|----:|-----:|------:|-------:|
|       factorial or _n!_ |    2 |    6 | 24 | 120 | 720 | 5040 | 40320 | 362880 | 
|       minus reflections |    1 |    4 | 13 |  45 | 230 | 1388 | 10558 |  92126 |
|  one pair bouncing once | n.a. |    3 | 12 | 281 | 325 |    ? |     ? |      ? |
|      two bouncing pairs | n.a. | n.a. |  4 |   ? |  93 |    ? |     ? |      ? |
| one pair bouncing twice | n.a. | n.a. |  2 |   ? |  56 |    ? |     ? |      ? |


Reflections: 
options that are the same after mirroring horizontally, vertically or rotating upside down.

The same changed sequence of pairs can be achieved in many ways by pairs taking other routes than straight ones.
We call it a family of crossings when the pairs end and start in the same sequence.
Because of the large numbers, we only give some examples or hints for the next steps: 
creating family members and choosing stitches.

Bouncing pairs and numbering
----------------------------

A pair that bounces along the perimeter of an n-pair crossing
can take a detour in the surrounding lace.
This turns an n-pair crossing into an (n+1)-pair crossing, 
it can even happen with two pairs, or one pair bouncing between both sides.

The following images illustrate how the numbering works. 
The basic numbers show the order of the pairs at the end.
A prefix and/or suffix indicates which pair bounces, 
they take the place of the first and/or last pair.
An S or Z indicates to which side a twice bouncing pair travels first.

![](numbering-method.svg)

The numbers may be marked with bd, bp or bdpq. 
This is about [internal symmetry](../../images/counting/int-symm.png)


Notes
-----

### Pairs or threads

Thread diagrams can be interpreted as pair diagrams and vice versa.
So when analyzing in how many ways threads/pairs can get reordered at the end of some manipulation,
we get two for the price of 1. 
For example the 6-pair snowflakes are thread diagrams for 3-pair crossings.

### Save and edit images

With main stream browsers you can right-click the images on this page to save them.
You can use  a vector editor like Inkscape, Adobe Illustrator and many others, to modify images with extension SVG. 
For example to make the straight lines squiggle into different pair diagrams or show what is beyond the visible area. 

### Look up of snowflakes

Some sets of permutations are also provided as text files, grouped by reflections. 
Only the smallest number in each group is presented as a diagram.
When you find a snowflake somewhere else, write down how the pairs reorder
and look up the number in the text file to identify the family.
The files do not include the bouncing prefixes and suffixes.

### Generated content

Some content of this page is generated with a Python [script](permutations.py). 
It lists and draws permutations of pairs changing positions and filters reflections.
You can run (and modify) the script with various offline and online environments such as
[online-python.com](https://www.online-python.com/)
The output of the scripts is hacked into SVG images shown on this page.
By switching comment on or off for the last few lines of the script you can choose what to generate.

6 pairs / threads
-----------------

The details per group that follow tell us we have 230+325+149=704 families. 
Varying stitches for each family-member gives an ocean of options.


### No bouncing

With six threads or pairs we have 6x5x4x3x2=720 permutations for the order of pairs after completing a snowflake.
After filtering reflected versions we still have 230 options.
20 have internal bdpq reflections, another 28 have only bd reflections and 28 have bp.

[text](permutations-for-6.txt)  
![](all-in-before-any-out.svg)  


### Bouncing once

With one bouncing pair we have (5x4x3x2 - bp reflections) = 73 options.
Note that this is more than for the plain 5-pair crossings where also the bd reflections are removed. 
Five options for each option to let one pair bounce gives 365 options.
However, swapped pairs in permutations marked with `bp` cause duplicates.
We expect to end up with 365-40=325, a challenge left for you, please share your results.

![](5-pairs-to-bounce-into-6.svg)

### Bouncing twice

With two pairs bouncing, we can start with the permutations for four pairs.
These are shown on the grey ribbon below.
Two have bdpq reflections, one only bd and one a bp reflection.

Above the ribbon we have 4x3 options for each one with two pairs bouncing pairs what gives 156 options.
Removing duplicates leaves 93. 
Below the ribbon we have 4x2 options of a pair bouncing to both sides, x2 because we can start bouncing to the right or start to the left.
That gives another 56.
The groups add up to 149.

![](two-out-before-in.svg)

5 pairs / threads
-----------------

With 5 pais we have 5x4x3x2=120 permutations, minus bd and/or bp duplicates we have 45 family heads.

[text](permutations-for-5.txt)    
![](5-pair-permutations.svg)

With one bouncing pair we have (4x3x2 - bp reflections) = 17 options.
Each having 4 pairs to bounce minus 11 
swapped pairs in bp tagged options we expect 281 family heads.

![](4-pairs-to-bounce-into-5.svg)

For two bouncing pairs we can use the plain family heads for 3 pairs. 
Again the challenge to explore the bouncing and eliminate duplicates is left to you.


4 pairs / threads
-----------------

With 4 pairs we have 4x3x2=24 minus duplicates gives 13 families.

Without any pretension to be exhaustive,
we show one or two members for each family by squiggling pairs.
Some of these members are common in traditional lace.
Swapping starts and/or ends means dealing with another family. 

[text](permutations-for-4.txt)  
![](4-pair-permutations.svg)

With one bouncing pair we have (3x2 - bp reflections) = 5 options
as shown on the left in the grey ribbon.
Each having 3 pairs to bounce minus 3 
swapped pairs in bp tagged options we expect 12 family heads.
On the right 2 pairs are turned into 4 pair crossing using bouncing.
Below the ribbon we have the family heads.

![](3-pairs-to-bounce-into-4.svg)


3 pairs
-------

With 3 pairs we have 3x2=6 ways to reorder them. The faint permutations in the image below are mirrored duplicates.

Note the bottom member of the 231 family. 
The red pair intersects the two other pairs three times each.
Use your own creativity to create more family members. [More...](../misca#3-paired-join) 

![](3-pair-permutations.svg)

2 pairs
-------

Bobbin lace makers are used to call two pair crossings stitches,
these are explored on [Listing & counting stitches](../counting).


Exploring families
------------------

### Pair diagrams

So far we mainly explored how pairs changed position after making a crossing.

A pair (or groups of pairs) not touching remaining pairs turns a given permutation into separate crossings.
It is tempting to define a crossing as each pair must touch each other pair at least once and no more than twice,
but with bouncing pairs that gets more complicated.
A bouncing pair can also be described as a pair leaving before another one enters.
These two pairs can't interact with one another, yet we may still create a coherent crossing.

Any way, we can make the pairs squiggle their route from start to end 
to make them cross other pairs as we see fit. 
Note that swapping starts and/or ends means dealing with another family. 

The following not-exhaustive families are created manually from some of the generated permutations.
The figure below contains a few more examples beyond the visible area.

![](654321.svg)  

With bouncing pairs two or three pairs in a family-head have the same color.
The dashed line outside the snowflake suggests it is the same pair.
That might not be the case, depending on what happens outside the snowflake.
It is a reminder that you should not squiggle the lines in such a way
that two lines of the same color cross one another.

![](numbering-method.svg)


### Choose stitches

The last step is choose stitches for a thread diagram. 
For that purpose we can interpret the diagrams as thread diagrams and use the droste page of GroundForge. 
We can analyse the stitches by marking them with blobs. Below two solutions for one snowflake:

![](blobs.svg)  

Requirements for the blobs: span 4 threads, threads flow two by two into adjacent blobs. 
Not all blobs need to have a crossing for all of its four threads as shown in the 6-blobs solution.

The diagrams below as PDF-s:
with [4-blobs](4-blobs.pdf),
with [6-blobs](6-blobs.pdf).  
![](droste.png)

You can assign the thus discovered stitches to one of the templates for 
[2](/GroundForge/stitches?patchWidth=7&patchHeight=9&tile=-5-5-5,5-5-5-,-5-5-5,5-5-5-,&shiftColsSW=0&shiftRowsSW=4&shiftColsSE=6&shiftRowsSE=4&f1=ctc&d1=ctc&b1=ctc&e2=ctc&c2=ctc&a2=ctc&f3=tct&d3=ctc&b3=tct&e4=lct&c4=rct&a4=ctc&droste2=),
[4](/GroundForge/stitches?patchWidth=7&patchHeight=9&tile=5-C-B-,-5-5-5,5-5-5-,-5-5-5,--5-5-,-B---C,&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=6&shiftRowsSE=6&e1=ct&c1=ct&a1=rrctctt&f2=llctctt&d2=ttctctt&b2=rrctctt&e3=ctctt&c3=ctctt&a3=ctctt&f4=ct&d4=ctctt&b4=ct&e5=ct&c5=ct&f6=ct&b6=ct),
[5](/GroundForge/stitches?patchWidth=7&patchHeight=9&tile=-B-5-C,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=6&shiftRowsSE=6&f1=ct&d1=ttctctt&b1=ct&e2=rrctctt&c2=llctctt&a2=ttctctt&f3=ct&d3=ctctt&b3=ct&e4=ct&c4=ct&f5=ct&b5=ct&e6=ct&c6=ct),
[6](/GroundForge/stitches?patchWidth=7&patchHeight=11&tile=5-C-B-,-5-5-5,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C,&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=6&shiftRowsSE=8&e1=ct&c1=ct&a1=rrctctt&f2=llctctt&d2=ttctctt&b2=rrctctt&e3=ctctt&c3=ctctt&a3=ctctt&f4=ct&d4=ctctt&b4=ct&e5=ct&c5=ct&f6=ct&b6=ct&e7=ct&c7=ct&f8=ct&b8=ct),
[7](/GroundForge/stitches?patchWidth=7&patchHeight=13&tile=-B-5-C,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C,--C-B-,&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=6&shiftRowsSE=8&f1=ct&d1=ttctctt&b1=ct&e2=rrctctt&c2=llctctt&a2=rrctctt&f3=ct&d3=ctctt&b3=ct&e4=ct&c4=ct&f5=ct&b5=ct&e6=ct&c6=ct&f7=ct&b7=ct&e8=ct&c8=ct),
[8](/GroundForge/stitches?patchWidth=7&patchHeight=13&tile=5-C-B-,-5-5-5,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C,--C-B-,-B---C,&shiftColsSW=0&shiftRowsSW=10&shiftColsSE=6&shiftRowsSE=10&e1=ct&c1=ct&a1=llctctt&f2=llctctt&d2=ttctctt&b2=rrctctt&e3=ctctt&c3=ctctt&a3=ctctt&f4=ct&d4=ctctt&b4=ct&e5=ct&c5=ct&f6=ct&b6=ct&e7=ct&c7=ct&f8=ct&b8=ct&e9=ct&c9=ct&f10=ct&b10=ct),
[9](/GroundForge/stitches?patchWidth=7&patchHeight=13&tile=-B-5-C,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C,--C-B-,-B---C,--C-B-,&shiftColsSW=0&shiftRowsSW=10&shiftColsSE=6&shiftRowsSE=10&f1=ct&d1=ttctctt&b1=ct&e2=rrctctt&c2=llctctt&a2=ttctctt&f3=ct&d3=ctctt&b3=ct&e4=ct&c4=ct&f5=ct&b5=ct&e6=ct&c6=ct&f7=ct&b7=ct&e8=ct&c8=ct&f9=ct&b9=ct&e10=ct&c10=ct),
...
stitches/blobs. Is the first blob on the right? Then replace the half stitches in the right plait. Vice versa for left.
Last step: follow the link "_thread diagram as pair diagram_" for a thread diagram of the snowflake and choose your stitches.  

Compose grounds
---------------

A bit beyond the subject of counting snowflakes is assembling grounds. 
Our focus is on 6-pair snowflakes. They can be connected directly, via plaits, framed in Paris grounds or whatever.
It needs some attention to prevent loops.

When the number start with 1 and ends with 6
you can't repeat them next to one another without further interaction.
The second family explored above shows you would get loops.

The bouncing variations can also be represented as follows:

![](compose.svg)

Red are incoming pairs, blue are leaving pairs. 
Above we counted in how many ways we can connect each red line to a blue line within the same circle. 
Outside the circles we also should not connect red with red or blue with blue without some exchange.

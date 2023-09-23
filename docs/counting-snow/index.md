---
layout: default
title: snowflake families
---

Counting n-pair connections, such as snowflakes
===============================================

From [literature](literature) like "Naar de Bron" and "Viele gute Gründe"
we can collect dozens of pair diagrams for snowflakes. 
That made us curious to explore the number of ways we can make n-pair connections.
Typical spiders are connections with an even number of pairs, 
snowflakes in Binche are usually 4-pair or 6-pair connections.

To start the exploration we calculate the number of ways 
the pairs get reordered after completing the connection. 
The maximum number can be calculated with the mathematical concept called permutations,
the calculations: 

    n x (n-1) ... x 1       2->2, 3->6, 4->24, 5->120, 6->720.

These numbers can be reduced by filtering "duplicates": 
options that are the same after mirroring horizontally, vertically or rotating upside down.

Because of the large numbers, we only give some examples or hints for the next step: 
creating valid pair diagrams and choosing stitches.

Bouncing and numbering
----------------------

A pair that bounces along the perimeter of an n-pair connection
can take a detour in the surrounding lace.
This turns an n-pair connection into an (n+1)-pair connection, 
it can even happen with two pairs, or one pair bouncing between both sides.
As the initial curiosity was about 6-pair snowflakes, we only explored
5-pair connections and 4-pair connections turned into 6-pair connections. 

The following images illustrate how the numbering works. 
The basic numbers show the order of the pairs at the end.
A prefix and/or suffix indicates bouncing.
An S or Z is used to indicate to which side a twice bouncing pair bounces first.
The text files do not include the bouncing prefixes and suffixes.

![](numbering-method.svg)


Notes
-----

### Pairs or threads

Thread diagrams for 2,3,4,5 pairs can be used as pair diagrams for 4,6,8,10 pairs. 
So when analyzing in how many ways threads/pairs can get reordered at the end of some manipulation,
we get two for the price of 1.

### Save and edit images

With main stream browsers you can right-click the images on this page to save them.
You can use  a vector editor like Inkscape, Adobe Illustrator and many others, to modify images with extension SVG. 
For example to bend the straight lines into workable pair diagrams or show what is beyond the visible area. 

### Text files

Some sets of permutations are provided as text files, grouped by reflections. 
Only the smallest number in each group is presented as a diagram.
When you find a snowflake somewhere else, write down how the pairs reorder
and look up the number in the text file to identify the family.

### Generate Diagrams

A Python [script](permutations.py) renders permutations of pairs changing positions and filter reflections.
You can run (and modify) the script with various offline and online environments such as
[online-python.com](https://www.online-python.com/)
The output of the scripts is hacked into SVG images shown on this page.
Numbers marked with a `*` a bd reflection, those marked with a `+` a bp reflection.
By switching comment on or off for the last few lines of the script you can choose what to generate.


2 pairs
-------

Bobbin lace makers are used to call two pair connections stitches,
these are explored on [Listing & counting stitches](counting).

3 pairs / threads
-----------------

With 3 pairs we have 3x2=6 ways to reorder them. The faint permutations are mirrored duplicates.
Thus, we get 4 families. By bending the generated pairs we can create valid pair diagrams as family members.
Swapping starts and/or ends means interfering with another family. 
So far we show at most three members per family. 
Note that the red pair intersects the two other pairs three times each in the bottom case of 231.
Use your own creativity to create more family members. [More...](misca#3-paired-join) 

![](3-pair-permutations.svg)


4 pairs / threads
-----------------

With 4 pairs we have 4x3x2=24 minus duplicates gives 13 families.
The number of family members are not exhaustive.

[text](permutations-for-4.txt)  
![](4-pair-permutations.svg)


5 pairs / threads
-----------------

With 5 pais we have 5x4x3x2=120 permutations, minus bd and/or bp duplicates we have 45 family heads.
Use your own creativity to figure out members of these families.

[text](permutations-for-5.txt)    
![](5-pair-permutations.svg)

6 pairs / threads
-----------------

We have three main groups of snowflakes shown by the diagrams below. Pairs start at red lines and end at blue lines.
Please note the difference in the colors of the horizontal marks.

![](compose.svg)

There are many ways how the pairs can get reordered after making a snowflake,
or in other words: how we can draw straight lines connecting each red mark
in a hexagon with a blue mark within the same hexagon.
The same reordering might be achieved in multiple ways of curved lines that form valid pair diagrams,
we call these groups families.

The details that follow per group tell us we have 230+325+149=704 families. 
Varying stitches for each family-member gives an ocean of options.


### All pairs entering before any pair leaves

With six threads or pairs we have 6x5x4x3x2=720 permutations for the order of pairs after completing a snowflake.
After filtering reflected versions we still have 230 options.
20 have internal bdpq reflections, another 28 have only bd reflections (marked with a +) and 28 have bp (marked with a *).

[text](permutations-for-6.txt)  
![](all-in-before-any-out.svg)  


### One pair leaves before the last one enters

With one bouncing pair we have (5x4x3x2 - bp reflections) = 73 options.
Note that this is more than for the plain 5-pair connections. 
5 options for each option to let one pair bounce gives 365 options.
However, the permutations marked with `+` cause duplicates by swapped pairs.
We expect to end up with 365-40=325.

![](one-out-before-in.svg)

### Two pairs leave before the last ones enter

With two pairs bouncing, we can start with the permutations for four pairs.
These are repeated on the grey ribbon below.
2 have bdpq reflections, 2 only bd and 1 a bp reflection.

Above the ribbon we have 4x3 options for each one with two pairs bouncing pairs what gives 156 options.
Removing duplicates leaves 93. 
Below the ribbon we have 4x2 options of a pair bouncing to both sides, x2 because we can start bouncing to the right or start to the left.
That gives another 56.
Both groups add up to 149.

![](two-out-before-in.svg)


Exploring families
------------------

### Valid pair diagrams

The permutations given above are only heads of families. Only sometimes this family-head is a workable diagram.
Workable or not, you can bend the pairs of a permutation into (more) workable diagrams.
When swapping starts and/or ends you are interfering with another family. 

The not-exhaustive families below are created manually from some of the generated permutations.

![](654321.svg)  
The image contains a few more examples beyond the visible area.

With bouncing pairs two or three pairs in a family-head have the same color.
The dashed line outside the snowflake suggests it is the same pair.
That might not be the case, depending on what happens outside the snowflake.
It is a reminder that you should not bend the lines in such a way
that two lines of the same color intersect one another.

![](numbering-method.svg)


### Choose stitches

The last step is choose stitches for a thread diagram. 
For that purpose we can use the droste page of GroundForge and have to interpret the diagrams as thread diagrams. 
One of the examples has blobs that identify the stitches.
Requirements for the blobs: span 4 threads, share two threads with each adjacent blob. 
Not all blobs use all of its four threads.
You can assign the thus discovered stitches to one of the templates for 
[4](/GroundForge/stitches?patchWidth=7&patchHeight=9&tile=5-C-B-,-5-5-5,5-5-5-,-5-5-5,--5-5-,-B---C,&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=6&shiftRowsSE=6&e1=ct&c1=ct&a1=rrctctt&f2=llctctt&d2=ttctctt&b2=rrctctt&e3=ctctt&c3=ctctt&a3=ctctt&f4=ct&d4=ctctt&b4=ct&e5=ct&c5=ct&f6=ct&b6=ct),
[5](/GroundForge/stitches?patchWidth=7&patchHeight=9&tile=-B-5-C,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=6&shiftRowsSE=6&f1=ct&d1=ttctctt&b1=ct&e2=rrctctt&c2=llctctt&a2=ttctctt&f3=ct&d3=ctctt&b3=ct&e4=ct&c4=ct&f5=ct&b5=ct&e6=ct&c6=ct),
[6](/GroundForge/stitches?patchWidth=7&patchHeight=11&tile=5-C-B-,-5-5-5,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C,&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=6&shiftRowsSE=8&e1=ct&c1=ct&a1=rrctctt&f2=llctctt&d2=ttctctt&b2=rrctctt&e3=ctctt&c3=ctctt&a3=ctctt&f4=ct&d4=ctctt&b4=ct&e5=ct&c5=ct&f6=ct&b6=ct&e7=ct&c7=ct&f8=ct&b8=ct),
[7](/GroundForge/stitches?patchWidth=7&patchHeight=13&tile=-B-5-C,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C,--C-B-,&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=6&shiftRowsSE=8&f1=ct&d1=ttctctt&b1=ct&e2=rrctctt&c2=llctctt&a2=rrctctt&f3=ct&d3=ctctt&b3=ct&e4=ct&c4=ct&f5=ct&b5=ct&e6=ct&c6=ct&f7=ct&b7=ct&e8=ct&c8=ct),
[8](/GroundForge/stitches?patchWidth=7&patchHeight=13&tile=5-C-B-,-5-5-5,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C,--C-B-,-B---C,&shiftColsSW=0&shiftRowsSW=10&shiftColsSE=6&shiftRowsSE=10&e1=ct&c1=ct&a1=llctctt&f2=llctctt&d2=ttctctt&b2=rrctctt&e3=ctctt&c3=ctctt&a3=ctctt&f4=ct&d4=ctctt&b4=ct&e5=ct&c5=ct&f6=ct&b6=ct&e7=ct&c7=ct&f8=ct&b8=ct&e9=ct&c9=ct&f10=ct&b10=ct),
[9](/GroundForge/stitches?patchWidth=7&patchHeight=13&tile=-B-5-C,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C,--C-B-,-B---C,--C-B-,&shiftColsSW=0&shiftRowsSW=10&shiftColsSE=6&shiftRowsSE=10&f1=ct&d1=ttctctt&b1=ct&e2=rrctctt&c2=llctctt&a2=ttctctt&f3=ct&d3=ctctt&b3=ct&e4=ct&c4=ct&f5=ct&b5=ct&e6=ct&c6=ct&f7=ct&b7=ct&e8=ct&c8=ct&f9=ct&b9=ct&e10=ct&c10=ct),
...
stitches/blobs. Is the first blob on the right? Then replace the half stitches in the right plait. Vice versa for left.
Next step: follow the link "_thread diagram as pair diagram_" for a thread diagram of the snowflake and choose your stitches.  

The [blobs](/GroundForge/droste.html?patchWidth=7&patchHeight=11&tile=5-C-B-,-5-5-5,5-5-5-,-5-5-5,--5-5-,-B---C,--C-B-,-B---C&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=6&shiftRowsSE=8&e1=crcl&c1=ctctt&a1=ttctctt&f2=llctctt&d2=rrctctt&b2=ctctt&e3=ctctt&c3=ctctt&a3=ctctt&f4=rclc&d4=ctctt&b4=ctc&e5=cr&c5=ctc&f6=cr&b6=ctc&e7=lcr&c7=ctc&f8=c&b8=ctc&droste2=ctct,a34=f41=f42=f43=e50=e51=f60=f61=e70=e71=e72=f80=e90=e91=e92=e93=e11=e10=e12=e13=ctc)
with cloth stitches at the droste page:  
![](droste.png)  

---
layout: default
title: stitches for snowflakes
---

Stitches for snowflakes
=======================

A [tutorial] explains how to choose stitches in GroundForge.
A 6-pair snowflake alias spider embedded in a Paris ground happens to be the used example.
Dropping stitches can alter the pair diagram for the snowflake only in a limited way.
As of this writing, the tutorial is still based on a deprecated page. 

[tutorial]: /GroundForge-help/Binche

Two approaches
--------------

![](connect-dots.svg?align=right)

Without the Droste approach you have to distort the pair diagram as shown: connect the dots.

The [tutorial] explains how to choose stitches.
Many variations or combinations require a complete new capture. 

This page explores recipes for more pair diagrams using the Droste technique:
* interpret pair diagrams as thread diagrams
* apply the resulting stitches to a generic recipe
* use the resulting thread diagram as pair diagram
* choose stitches

![](blobs.svg?align=right)

We can analyse stitches in a diagram by marking them with blobs.
On the right a solution for one snowflake.
The capital R indicates that the first blob is on the right side,
in other words the first stitch would be made with the two pairs on the right.

Requirements for the blobs: span 4 threads, 
the threads flow two by two into adjacent blobs.
Not all threads in a blob need to have an interaction with other threads.

6 pairs with all pairs entering before leaving
----------------------------------------------

The form below requires the blobs to use either the most left four pairs or the most right four pairs.
The initial values of the form initialises the page as shown in te screenshots below the form.

{% include snow-6.html %}

![](blobs-drostes.png)

Click wands to generate diagrams. Generate a thread diagram after the pair diagram.
Giving stitches a color in the first thread diagram
can help to compare distorted diagrams and detect possible mistakes in your analysis.
The tooltips in the second pair diagram help to fill in the text box of the second step with desired stitches.
The identifiers in the last thread diagram have an extra digit,
those tooltips can also help to apply corrections.

Note that a trailing twist in the last blob gets combined with a leading twist of the first blob.
This is counteracted with a ctct(pin)tctc, pins frequently get misplaced, so we leave them out.
PLease don't rely on twist marks in the pair diagrams, they are buggy.

### under construction

The form above supports a less traditional constellation of snowflakes.

![](snow-in-paris.png?align=right)

This [recipe](/GroundForge/stitches.html?patchWidth=19&patchHeight=16&tile=-5-,5-5,-5-,5-5,-5-,5-5&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=3&shiftRowsSE=3&b1=ct&c2=ct&a2=cllcr&b3=cl&c4=ctc&a4=ct&b5=crrcl&c6=ctc&a6=cr&droste2=ctc,c20=c21=b30=b31=c22=a60=a61=a42=b11=ctct,b53=b10=b12=rctct,a23=a40=a41=lctct)
supports snowflakes in a Paris ground. 
It allows more variations of snowflakes than the [tutorial] but still less than the form above.
The highlighted stitches represent the blobs.

6 pairs, on both sides a pair leaves before the last enters
-----------------------------------------------------------

From [counting snow](../counting-snow), we explore two members of a family to demonstrate the two templates.
Beyond the [visible area](#save-and-edit-images) we have a few more family members.

![](4-3254-2.svg?align-right)

&nbsp;

In the first example above (lct-tcr), each bouncing pair section (the dashed lines) interacts with just one other bouncing pair section.
In the second example we see more interactions between the bouncing pairs.
The first example requires two stitches to define a thread diagram to be used as pair diagram, the second one requires three stitches.

The form below generates the diagrams shown below the form.
Note the subtle difference for the open and closed connection in diagram variations for the three-stitch example.
Follow the link to "_thread diagram as pair diagram_" to select your stitches for the snowflake.

{% include snow-6-bounce2.html %}

![](4-3254-2.png)

4 pairs
-------

The process starts at another page than for six pairs.
For the two examples below:
[ctcttctc](/GroundForge/stitches.html?patchWidth=7&patchHeight=9&tile=5-&shiftColsSW=-1&shiftRowsSW=1&shiftColsSE=1&shiftRowsSE=1&a1=ctcttctc)
and [ctctctc](/GroundForge/stitches.html?patchWidth=7&patchHeight=9&tile=5-&shiftColsSW=-1&shiftRowsSW=1&shiftColsSE=1&shiftRowsSE=1&a1=ctctctc&droste2=ct,c25=d31=d32=d50=d51=d53=d70=d71=d73=ctc,d32=ctcr,d73=ctct,d53=d70=d71=ctcl).
These examples are chosen because one has two twists were the other has just one.
Follow the link to "_thread diagram as pair diagram_" to select your stitches for the snowflake.
The pair diagrams will be the same for both examples.
This is because GroundForge considers anything done with just two pairs (like ctc-pin-ctc) as a single stitch.

![](same-drostes.svg)


3 pairs
-------

Just an example: member
[lclclc](/GroundForge/droste.html?patchWidth=7&patchHeight=9&tile=5-&shiftColsSW=-1&shiftRowsSW=1&shiftColsSE=1&shiftRowsSE=1&a1=https://d-bl.github.io/GroundForge/droste.html?patchWidth=7&patchHeight=9&tile=5-&shiftColsSW=-1&shiftRowsSW=1&shiftColsSE=1&shiftRowsSE=1&a1=lclclc&droste2=ctc&droste2=ctc)
of the family 123.

Stitches with three pairs are not very logical for a seasoned bobbin lace maker,
It means consistently either no right twists or no left twists.
GroundForge can handle it, it shows starting pins for each 4th thread but no thread.
Using these basic thread diagrams as pair diagrams (droste effect) is explained in more detail for six pairs. 

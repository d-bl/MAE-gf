---
layout: default
title: stitches for snowflakes
---

Stitches for snowflakes
=======================

**... and crossings with fewer pairs**

Contents
--------

- [Capture thread diagrams](#capture-pair-diagrams)
- [Pair diagrams interpreted as thread diagrams with blobs](#pair-diagrams-interpreted-as-thread-diagrams-with-blobs)
- [6 pairs with all pairs entering before leaving](#6-pairs-with-all-pairs-entering-before-leaving)
  - [Frames](#frames)
  - [In a Paris ground (under construction)](#in-a-paris-ground-under-construction)
- [6 pairs, on both sides a pair leaves before the last enters](#6-pairs-on-both-sides-a-pair-leaves-before-the-last-enters)
- [4 pairs](#4-pairs)
- [3 pairs](#3-pairs)

We have a [tutorial] that explains how to choose stitches in GroundForge.
However, playing requires some preparation: capture the pair diagram.
The tutorial uses a versatile Binche pattern as an example. 
This happens to be a 6-pair snowflake alias spider embedded in a Paris ground.
On this page we explore another method to capture snowflakes than used for the tutorial.

[tutorial]: /GroundForge-help/Binche

Capture pair diagrams
-----------------------

![](connect-dots.svg?align=right)

Before we can play with stitches, we need to capture the pair diagram.
Most captures start with a distorted pair diagram. Each stitch should match a dot on a square grid.
Variations or combinations require new distorted captures. 

This page explores other types of recipes for snowflakes with the aim to apply them in multiple patterns used as templates.
For this purpose we use the Droste technique in both directions:
* interpret pair diagrams as thread diagrams
* a form applies the stitches resulting from this interpretation to a recipe of your choice
* the form leads to a page with two steps that uses thread diagrams as pair diagram
* in the second step you can choose stitches for the intended snowflake

Pair diagrams interpreted as thread diagrams with blobs
-------------------------------------------------------

![](blobs.svg?align=right)

We can analyse stitches in a diagram by marking them with blobs.
On the right a solution for one snowflake.
The caption describes the blob sequence.
The capital R indicates that the first blob is on the right side,
in other words the first stitch would be made with the middle pair and right pair.

![](too-complicated-blobs.svg?align=left)

On the left another (too complicated) solution for the same snowflake.
It illustrates requirements for the blobs:
* Span 4 threads. 
* The threads flow two by two into adjacent blobs. For example red and orange flow from two to three and blue and purple from two to four.
  This can be deceptive: five may seem to receive black from one while it actually goes via three.
* Not all threads in a blob need to have an interaction with other threads.
  For example: the black and blue pairs in the third blob do nothing, like the green pair in the fifth.

We figured out some  blob recipes as test cases.
Due to the vast [numbers](../counting-snow) of possible snowflakes we can´t be exhaustive.
<a href="563412-145236.svg" target="_blank">Show</a>
the collection of samples in another tab to copy the recipes in the captions.

![](563412-145236.svg)

6 pairs with all pairs entering before leaving
----------------------------------------------

Try a blob recipe copied above in the following form.
_Do nothing_ for the footside means: the pairs turn as a rainbow around the pin, without twists.

{% include snow-6.html %}

&nbsp;

![](3-pair-plaits.png?align=right)

The form starts under the hood with plaits of three threads. The length of the plaits are determined by the number of blobs.

The form then jumps to _pairs from threads_ to generate diagrams as shown below at the first step. 
Well, we cheated a little: some twists are added manually for the legs to make the snowflake stand out more clearly.
If you want parallel legs: don´t add the twists. If your want crossed legs: add the twists.

![rclc-ctc-ctc-crcl.png](rclc-ctc-ctc-crcl.png)

At the second step on the page _pair from threads_ you can finally choose your stitches.

![](last-step.png)

Note that a trailing twist in the last blob gets combined with a leading twist of the first blob.
This is counteracted with a ctct(pin)tctc. Pins usually get misplaced, so we leave them out.

Hover with your mouse over stitches. Highlights can show you all parts of a stitch.
Note that each thread diagram adds a digit to stitch id in the tooltips.

Both can help to fix mistakes as the leg inside the spider in this example.
Click wands to generate or refresh diagrams. 
Refresh a thread diagram after refreshing the pair diagram.
Please don't rely on twist marks in the pair diagrams, they are buggy in this style of pair diagrams.

### Frames

![](fish-base-for-star.png?align=right)

When we focus on recipes with four blobs, we can recognize `<|>` shapes in the pair diagram of the first step.
These shapes occur in many patterns.
This means we can use three pair joins in these patterns, or snowflakes when using the thread diagram as pair diagram.

![](tl-123.png) &nbsp; ![](tl-551.png) &nbsp; ![](tl-561.png)

### In a Paris ground (under construction)

![](snow-in-paris.png?align=right)

This [pattern](/GroundForge/stitches.html?patchWidth=19&patchHeight=16&tile=-5-,6-5,-5-,5-5,-58,5-4&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=3&shiftRowsSE=3&b1=ct&c2=ct&a2=cllcr&b3=cl&c4=ctc&a4=ct&c5=-&b5=crrcl&c6=ctc&a6=cr&droste2=ctc,c20=c21=b30=b31=c22=a60=a61=a42=b11=ctct,b53=b10=b12=rctct,a23=a40=a41=lctct)
supports snowflakes in a Paris ground as in the [tutorial] but using the Droste technique. Definition for the ring pair at the first _pairs from threads_ step:

    ctc
    c20=c21=b30=b31=c22=a60=a61=a42=b11=ctct
    b53=b10=b12=rctct
    a23=a40=a41=lctct

The screenshot dropped the stitch marked with a grey `+`,
you can restore the stitch with the button `assign to ignored`.
The highlighted stitches in the thread diagram represent the blobs.
The configuration of blobs is not as versatile as for the form above.

6 pairs, on both sides a pair leaves before the last enters (under construction)
--------------------------------------------------------------------------------

We explore two snowflakes to demonstrate the two templates. The dashed lines indicate bouncing pairs:
these pairs leave the snowflake before last pair enters. 
It might be a bit confusing, but the snowflake is still a 6-pair snowflake.
In reality the pairs might not return but play another role in the rest of the lace while another pair "returns".

![](4-3254-2.svg) <!-- TODO content beyond the visible area is more related to the counting-snow page -->

In the first example above (lct-tcr), each bouncing pair section (the dashed lines) interacts with just one other bouncing pair section.
In the second example we see more interactions between the bouncing pairs.
The first example requires two stitches to define a thread diagram to be used as pair diagram, the second one requires three stitches.

The following form generates the diagrams shown below the form.
Note the subtle difference for the open and closed connection in diagram variations for the three-stitch example.
Follow the link to "_thread diagram as pair diagram_" to select your stitches for the snowflake.

{% include snow-6-bounce2.html %}

![](4-3254-2.png)

![](bouncing.png?align=right)
The number of legs is deceptive, caused by the bouncing pairs. 
We can get more realistic lengths for the legs at the next step.
The screenshot on the right shows manually added red pins to indicate the actual legs.


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

Stitches with three pairs can defy the muscle memory for a seasoned bobbin lace maker.
It means consistently either no right twists or no left twists.
GroundForge can handle it, it shows starting pins for each 4th thread but no thread.
Using these basic thread diagrams as pair diagrams (Droste effect) is explained in more detail for six pairs. 

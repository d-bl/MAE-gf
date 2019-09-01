---
layout: default
title: tricks and notes
---

# Tips, Tricks &amp; Other notes

## Contents
* [Ground names](#ground-names)
* [Stitches](#stitches)
* [Diagrams](#diagrams)

## Ground names
Unfortunately grounds do not have one unique name. Not even in one language. Also, the same name is used for different grounds. To make naming even more difficult, Groundforge does not make a difference in Torchon or Flemish grounds.

{% capture names1 %}
Example: The picture shows the working-scheme's of one unit of <i>Slavic rose ground</i> and one unit of <i>Fond au cinq trous</i>. Groundforge gives the same <a href="https://d-bl.github.io/GroundForge/tiles?patchWidth=12&patchHeight=12&a1=ctct&b1=ct&c1=ctct&d1=ct&b2=ct&d2=ct&shiftColsSE=2&shiftRowsSE=2&shiftColsSW=-2&shiftRowsSW=2&tile=5831,-4-7">result</a>.
{% endcapture %}
{% include picts-right.html
  src="../images_wt/gf-slaaf-vierge.png"
  alt="rose v.s. cin1"
  description=names1
%}

{% capture names2 %}
We have learned, that the figure on the left is called a <a href="https://d-bl.github.io/GroundForge/tiles?patchWidth=16&patchHeight=16&b1=ctc&a2=ctc&c2=ctc&b3=ctcttt&d3=tttctc&a4=ctc&c4=ctc&shiftColsSE=2&shiftRowsSE=4&shiftColsSW=-2&shiftRowsSW=4&tile=-5--,B-C-,-5-5,5-5-"><i>snowflake</i></a> and the figure on the right a <a href="https://d-bl.github.io/GroundForge/tiles?patchWidth=16&patchHeight=16&b1=ctcctc&a2=ctc&c2=ctc&b3=ctcttt&d3=tttctc&a4=ctc&c4=ctc&shiftColsSE=2&shiftRowsSE=4&shiftColsSW=-2&shiftRowsSW=4&tile=-5--,B-C-,-5-5,5-5-,"><i>spider</i></a>. Groundforge does not make this difference. It only depends on the stitch in the centre: <span class="stch">ctcctc</span> for the spider or <span class="stch">ctc</span> for the snowflake.
{% endcapture %}
{% include picts-right.html
  src="../images_wt/gf-snowspin.png"
  alt="snowflake v.s. spider"
  description=names2
%}

## Stitches
{% include picts-right.html
  src="../images_wt/gf-kleurtjes.png"
  alt="colours"
  description="Stitches used in the examples on these pages:"
%}
* Cross only. In working scheme's coloured in <span class="b-grey">grey.</span>
* Half stitch = (twist if not already done), cross, twist. Coloured <span class="b-gree">green</span>.
* Cloth stitch = cross, twist, cross. Coloured <span class="b-purp">purple</span>.
* Whole stitch &amp; twist = (twist if not already done), cross, twist, cross, twist. Coloured <span class="b-red">red</span>.
* Plaits = (twist,) cross, twist, cross, twist, cross, twist, cross (, twist), .... . Coloured <span class="b-blue">blue</span>.

Sometimes, onorthodox stitches are used, like <span class="stch">cross only</span> or <span class="stch">crcllcrc</span>, as in the [_Sunny Stitch_][ex-sun].    
We have tried <span class="stch">ctctclllllctctc</span> as a substitute for picots. Groundforge needs some time to generate this, and the result is not as expected.

The specified twitst in some stitch definitions may not be according to the expected working order. Example : <span class="stch">B1 = ctctt, A2 = ct, C2 = ct</span> instead of <span class="stch">B1 = ctc, A2 = rrct, C2 = llct</span>. The result is the same.

[ex-sun]: ../docs/marian#sunny-stitch

## Diagrams
{% include p-l-c.html
     alt="mt-0306"
     src="https://maetempels.github.io/MAE-gf/images/gf%20picts.png"
     lnk="https://d-bl.github.io/GroundForge/tiles?patchWidth=24&patchHeight=24&c1=c&e1=c&b2=c&d2=tctc&f2=c&h2=ctct&a3=cr&g3=cl&h4=tct&shiftColsSE=4&shiftRowsSE=4&shiftColsSW=-4&shiftRowsSW=4&tile=--B-C---,-E-5-O-K,5-----5-,-------5"
%}   

On these pages several types of diagrams are used, as illustrated in the picture. On the left is a drawing of a _pair-diagram_ or _working-scheme_. Pins, pinpositions and colourcode are given as needed for the actual lace. In the middle the ground is drawn schematic, to given an impression. Pins and colourcode may or may not be drawn. The pinpositions are drawn as required for the actual lace. On the right the _prototype_ or _matrix-scheme_ that Groundforge understands. On these pages the name _scheme_ or _diagram_ will be used for all types of the drawings.                     
Several grounds have more than one working prototype, as is explained in de Groundforge-userguide.    

The example is a variation on a 's Gravenmoers snowflake ground. Click on the picture to see how the thread-diagram looks like.      

The pictures on these pages are mostly made with Knipling (TM).

***






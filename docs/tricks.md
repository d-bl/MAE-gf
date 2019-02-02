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
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-slaaf-vierge.png"
  alt="rose v.s. cin1"
  description=names1
%}

{% capture names2 %}
We have learned, that the figure on the left is called a <a href="https://d-bl.github.io/GroundForge/tiles?patchWidth=16&patchHeight=16&b1=ctc&a2=ctc&c2=ctc&b3=ctcttt&d3=tttctc&a4=ctc&c4=ctc&shiftColsSE=2&shiftRowsSE=4&shiftColsSW=-2&shiftRowsSW=4&tile=-5--,B-C-,-5-5,5-5-"><i>snowflake</i></a> and the figure on the right a <a href="https://d-bl.github.io/GroundForge/tiles?patchWidth=16&patchHeight=16&b1=ctcctc&a2=ctc&c2=ctc&b3=ctcttt&d3=tttctc&a4=ctc&c4=ctc&shiftColsSE=2&shiftRowsSE=4&shiftColsSW=-2&shiftRowsSW=4&tile=-5--,B-C-,-5-5,5-5-,"><i>spider</i></a>. Groundforge does not make this difference. It only depends on the stitch in the centre: <span class="stch">ctcctc</span> for the spider or <span class="stch">ctc</span> for the snowflake.
{% endcapture %}
{% include picts-right.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-snowspin.png"
  alt="snowflake v.s. spider"
  description=names2
%}

## Stitches
{% include picts-right.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-kleurtjes.png"
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

Groundforge accepts only stitch-instructions with at least one cross, so the stitch <span class="stch">do nothing</span> is not supported by Groundforge.          
The instruction <span class="stch">A1=t</span> will be translated into <span class="stch">A1=ct</span>.               

## Diagrams
{% include p-l-c.html
     alt="mt-0306"
     src="https://maetempels.github.io/MAE-gf/images/gf%20picts.png"
     lnk="https://d-bl.github.io/GroundForge/tiles?patchWidth=24&patchHeight=24&c1=c&e1=c&b2=c&d2=tctc&f2=c&h2=ctct&a3=cr&g3=cl&h4=tct&shiftColsSE=4&shiftRowsSE=4&shiftColsSW=-4&shiftRowsSW=4&tile=--B-C---,-E-5-O-K,5-----5-,-------5"
%}   

On these pages several types of diagrams are used, as illustrated in the picture. On the left is a drawing of a _pair-diagram_ or _working-scheme_. Pins, pinpositions and colourcode are given as needed for the actual lace. In the middle the ground is drawn schematic, to given an impression. Pins and colourcode may or may not be drawn. The pinpositions are drawn as required for the actual lace. On the right the _prototype_ or _matrix-scheme_ that Groundforge understands. In the articles the name _scheme_ or _diagram_ will be used for all types of the drawings.                     
Several grounds have more than one working prototype, as is explained in de Groundforge-userguide.    

The example is a variation on a 's Gravenmoers snowflake ground. Click on the picture to see how the thread-diagram looks like.      

The pictures on these pages are mostly made with Knipling (TM).

***

[ex-sun]: https://maetempels.github.io/MAE-gf/docs/marian#sunny-stitch

[G-ex-tctct]: https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dtctct

[G-ex-ctct]: https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dctct%20A2%3Dctcr%20A1%3Dctcr

[G-ex-5G]: https://d-bl.github.io/GroundForge/index.html?m=5831%20-4-7%3Bbricks%3B16%3B16%3B0%3B0&s1=ct%20A1%3Dctct%20C1%3Dctct

[G-0306]: https://d-bl.github.io/GroundForge/index.html?m=--B-C---%0A-E-5-O-K%0A5-----5-%0A-------5%3Bbricks%3B24%3B24%3B0%3B0&s1=c%20F4%3Dctct%20B2%3Dtct%20B4%3Dtctc%20A1%3Dcl%20C1%3Dcr

[T-0306]: https://d-bl.github.io/GroundForge/tiles?patchWidth=24&patchHeight=24&c1=c&e1=c&b2=c&d2=tctc&f2=c&h2=ctct&a3=cr&g3=cl&h4=tct&shiftColsSE=4&shiftRowsSE=4&shiftColsSW=-4&shiftRowsSW=4&tile=--B-C---,-E-5-O-K,5-----5-,-------5



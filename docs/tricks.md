# Tips, Tricks & Other notes

### Contents
* [Ground names](#ground-names)
* [Stitches](#stitches)
* [Diagrams](#diagrams)
* [Tiling](#tiling)
* [Footsides](#footsides)

### Ground names
{% capture names1 %}
Unfortunately grounds do not have one unique name. Not even in one language. Also, the same name is used for different grounds. To make naming even more difficult, Groundforge does not make a difference in Torchon or Flemish grounds.<br>       
Example: The picture shows the working-scheme's of one unit of <i>Slavic rose ground</i> and one unit of <i>Fond au cinq trous</i>. Groundforge gives the same <a href="https://d-bl.github.io/GroundForge/index.html?m=5831%20-4-7%3Bbricks%3B16%3B16%3B0%3B0&s1=ct%20A1%3Dctct%20C1%3Dctct">result</a>.
{% endcapture %}
{% include picts-right.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-slaaf-vierge.png"
  alt="rose v.s. cin1"
  description=names1
%}

### Stitches
{% include picts-right.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-kleurtjes.png"
  alt="colours"
  description="Stitches used in the examples on these pages:"
%}

Stitches used in the examples on these pages:
* Cross only. In working scheme's coloured in <span class="b-grey">grey.</span>
* Half stitch = (twist if not already done), cross, twist. Coloured <span class="b-gree">green</span>.
* Cloth stitch = cross, twist, cross. Coloured <span class="b-purp">purple</span>.
* Whole stitch & twist = (twist if not already done), cross, twist, cross, twist. Coloured <span class="b-red">red</span>.
* Plaits = (twist,) cross, twist, cross, twist, cross, twist, cross (, twist), .... . Coloured <span class="b-blue">blue</span>.

Sometimes, onorthodox stitches are used, like <span class="stch">cross only</span> or <span class="stch">crcllcrc</span> , as in the [_Sunny Stitch_][ex-sun].    
We have tried <span class="stch">ctctclllllctctc</span>  as a substitute for picots. Groundforge needs some time to generate this, and the result is not as expected.

Groundforge has rules as which stitch-code gets what colour, according to the Belgian colour code. For the examples on these pages, the pair-diagrams will not always show the Belgian colour code, due to the following, illustrated with an example.      
{% capture names2 %}
Suppose, we wish to work on the example on the right. The whole stitch & twist in the middle can be specified several ways. We prefer to use <span class="stch">ctc B1=tctct</span>, see <a href="https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dtctct">here</a>. However, doing so, Groundforge colours this stitch in black in the pair-diagram. If we wish to see a red stitch, we have to use <span class="stch">ctc A1=ctcr A2=ctcr B1=ctct</span> , see <a href="https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dctct%20A2%3Dctcr%20A1%3Dctcr">here</a>.
{% endcapture %}
{% include picts-right.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-tctct.png"
  alt="example"
  description=names2
%}

Groundforge accepts only stitch-instructions with at least one cross, so the stitch <span class="stch">do nothing</span> is not supported by Groundforge.          
The instruction <span class="stch">A1=t</span> will be translated into <span class="stch">A1=ct</span>.               

### Diagrams
<p class="central"><img alt="several types of drawings" src="https://maetempels.github.io/MAE-gf/images/gf%20picts.png"></p>

On these pages several types of diagrams are used, as illustrated in the picture. On the left is a drawing of a _pair-diagram_ or _working-scheme_. Pins, pinpositions and colourcode are given as needed for the actual lace. In the middle the ground is drawn schematic, to given an impression. Pins and colourcode may or may not be drawn. The pinpositions are drawn as required for the actual lace. On the right the _matrix-scheme_ that Groundforge understands. In the articles the name _scheme_ or _diagram_ will be used for all types of the drawings.                     
Several grounds have more than one working matrix-scheme, as is explained in de Groundforge-userguide.    

The example is a variation on a 's Gravenmoers snowflake ground. See [here][ex-0306] how the thread-diagram looks like.      

The pictures in this wiki are mostly made with Knipling (TM).

### Tiling
Most examples use the <span class="elem">brick</span> parameter setting, drawn as a blue rectangle when shown, since it's less ID's to specify. Some scheme's do not have a working brick diagram, so, of course, a <span class="elem">checkers</span> parameter is used, drawn as a red rectangle when shown.           

Please note, that the ID's needed for the stitches shift somehow. <span class="elem">A1</span> is not in the upperleft corner of the shown units in the examples.

### Footsides
The examples provided focus on just elements of the grounds. No attention is paid to footsides. This may sometimes lead to tilted figures.

***


[ex-sun]: https://maetempels.github.io/MAE-gf/docs/marian#sunny-stitch

[ex-tctct]: https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dtctct

[ex-ctct]: https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dctct%20A2%3Dctcr%20A1%3Dctcr

[ex-5G]: https://d-bl.github.io/GroundForge/index.html?m=5831%20-4-7%3Bbricks%3B16%3B16%3B0%3B0&s1=ct%20A1%3Dctct%20C1%3Dctct

[ex-0306]: https://d-bl.github.io/GroundForge/index.html?m=--B-C---%0A-E-5-O-K%0A5-----5-%0A-------5%3Bbricks%3B24%3B24%3B0%3B0&s1=c%20F4%3Dctct%20B2%3Dtct%20B4%3Dtctc%20A1%3Dcl%20C1%3Dcr



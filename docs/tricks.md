<style>
  span.stch {background-color: white; border: 1px oldlace;}
  span.elem {background-color: white; linen; border: 1px linen;}
  span.b-grey {background-color: white; color: grey}
  span.b-gree {background-color: white; color: lime}
  span.b-purp {background-color: white; color: purple}
  span.b-red  {background-color: white; color: red}
  span.b-blue {background-color: white; color: blue}  
</style>  

<body>
<h1>Tips, Tricks & other notes</h1>

<h3>Contents</h3>
<p><ul>
<li><a href="#trck-grna">Ground names</a></li>
<li><a href="#trck-stch">Stitches</a></li>
<li><a href="#trck-tile">Tiling</a></li>
<li><a href="#trck-foot">Footsides</a></li>
</ul></p>

<h3 id="trck-grna">Ground names</h3>
<p>
<img alt="rose v.s. cinq" align="right" src="https://maetempels.github.io/MAE-gf/images_wt/gf-slaaf-vierge.png">
Unfortunately grounds do not have one unique name. Not even in one language. Also, the same name is used for different grounds. To make naming even more difficult, Groundforge does not make a difference in Torchon or Flemish grounds.<br> 
Example: The picture shows the working-scheme's of one unit of <i>Slavic rose ground</i> and one unit of <i>Fond au cinq trous</i>. Groundforge gives the same 
<a href="https://d-bl.github.io/GroundForge/index.html?m=5831%20-4-7%3Bbricks%3B16%3B16%3B0%3B0&s1=ct%20A1%3Dctct%20C1%3Dctct">result</a>.
</p>

<h3 id="trck-stch">Stitches</h3>
<p>
Stitch-colours used in the examples in this website:
<img alt="colours" align="right" src="https://maetempels.github.io/MAE-gf/images_wt/gf-kleurtjes.png">
<br>
<ul>
<li>Cross only. In working scheme's coloured <span class="b-grey">grey</span>.</li>
<li>Half stitch = (twist if not already done), cross, twist. Coloured <span class="b-gree">green</span>.</li>
<li>Cloth stitch = cross, twist, cross. Coloured <span class="b-purp">purple</span>.</li>
<li>Whole stitch & twist = (twist if not already done), cross, twist, cross, twist. Coloured <span class="b-red">red</span>.</li>
<li>Plaits = (twist,) cross, twist, cross, twist, cross, twist, cross (, twist), .... Coloured <span class="b-blue">blue</span>.</li>
</ul></p>
<p>
Sometimes, onorthodox stitches are used, like <span class="stch">cross only</span> or <span class="stch">crcllcrc</span>, as in the 
<a href="https://github.com/MAETempels/MAE-gf/wiki/Marian's-patterns#sunny-stitch"><i>Sunny Stitch</i></a>.
</p>
<p>
Groundforge has rules as to which stitch-code gets what colour, according to the slightly adapted Belgian colour code. In this website, the pair-diagrams will not always show the Belgian colour code, due to the following, illustrated with an example.<br>

<img alt="example" align="right" src="https://maetempels.github.io/MAE-gf/images_wt/gf-tctct.png">
Suppose, we wish to work on the example on the right. The whole stitch & twist in the middle can be specified several ways. We prefer to use <span class="stch">ctc B1=tctct</span>, see 
<a href="https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dtctct">here</a>. 
However, doing so, Groundforge colours this stitch in black in the pair-diagram. If we wish to see a red stitch, we have to use <span class="stch">ctc A1=ctcr A2=ctcr B1=ctct</span>, see 
<a href="https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dctct%20A2%3Dctcr%20A1%3Dctcr">here</a>.
</p>
<p>
Groundforge accepts only stitch-instructions with at least one cross. The instruction <span class="elem">A1=t</span> will be translated into <span class="elem">A1=ct</span>. </p>
<p>
We have tried <span class="stch">ctctclllllctctc</span> as a substitute for picots. Groundforge needs some time to generate this, and the result is not as expected.
</p>

<h3 id="trck-tile">Tiling</h3>
<p>
Most examples use the <span class="elem">brick</span> parameter setting, drawn as a blue rectangle when shown, since it's less ID's to specify. Some scheme's do not have a working brick diagram, so, of course, a <span class="elem">checkers</span> parameter is used, drawn as a red rectangle when shown. <br>

Please note, that the ID's needed for the stitches shift somehow. <span class="elem">A1</span> is not in the upperleft corner of the shown units in the examples.
</p>

<h3 id="trck-foot">Footsides</h3>
<p>
The examples provided focus on just elements of the grounds. No attention is paid to footsides. This may sometimes lead to tilted figures.
</p> 

</body>

<style> 
  .b-grey {background-color: white; color: grey} 
  .b-gree {background-color: white; color: lime} 
  .b-purp {background-color: white; color: purple} 
  .b-red {background-color: white; color: red} 
  .b-blue {background-color: white; color: blue} 
</style>

# Tips, Tricks & Other notes

### Contents
* [Ground names](#ground-names)
* [Stitches](#stitches)
* [Tiling](#tiling)
* [Footsides](#Footsides)

### Ground names
<img alt="rose v.s. cinq" align="right" src="https://maetempels.github.io/MAE-gf/images_wt/gf-slaaf-vierge.png"> 

Unfortunately grounds do not have one unique name. Not even in one language. Also, the same name is used for different grounds. To make naming even more difficult, Groundforge does not make a difference in Torchon or Flemish grounds.         
Example: The picture shows the working-scheme's of one unit of _Slavic rose ground_ and one unit of _Fond au cinq trous_. Groundforge gives the same [result][ex-5G].

### Stitches
<img alt="colours" align="right" src="https://maetempels.github.io/MAE-gf/images_wt/gf-kleurtjes.png">

Stitches used in the examples on these pages:
* Cross only. In working scheme's coloured in <span class="b-grey">grey.</span>
* Half stitch = (twist if not already done), cross, twist. Coloured <span class="b-gree">green</span>.
* Cloth stitch = cross, twist, cross. Coloured <span class="b-purp">purple</span>.
* Whole stitch & twist = (twist if not already done), cross, twist, cross, twist. Coloured <span class="b-red">red</span>.
* Plaits = (twist,) cross, twist, cross, twist, cross, twist, cross (, twist), .... . Coloured <span class="b-blue">blue</span>.

Sometimes, onorthodox stitches are used, like `Cross only` or `crcllcrc`, as in the [_Sunny Stitch_][ex-sun].
    
Groundforge has rules as which stitch-code gets what colour, according to the Belgian colour code. For the examples on these pages, the pair-diagrams will not always show the Belgian colour code, due to the following, illustrated with an example.
<img alt="example" align="right" src="https://maetempels.github.io/MAE-gf/images_wt/gf-tctct.png">

Suppose, we wish to work on the example on the right. The whole stitch & twist in the middle can be specified several ways. We prefer to use `ctc B1=tctct`, see [here][ex-tctct]. However, doing so, Groundforge colours this stitch in black in the pair-diagram. If we wish to see a red stitch, we have to use `ctc A1=ctcr A2=ctcr B1=ctct`, see [here][ex-ctct].

Groundforge accepts only stitch-instructions with at least one cross. The instruction `A1=t` will be translated into `A1=ct`.

We have tried `ctctclllllctctc` as a substitute for picots. Groundforge needs some time to generate this, and the result is not as expected.

### Tiling
Most examples use the <span class="elem">brick</span> parameter setting, drawn as a blue rectangle when shown, since it's less ID's to specify. Some scheme's do not have a working brick diagram, so, of course, a <span class="elem">checkers</span> parameter is used, drawn as a red rectangle when shown.           

Please note, that the ID's needed for the stitches shift somehow. `A1` is not in the upperleft corner of the shown units in the examples.

### Footsides
The examples provided focus on just elements of the grounds. No attention is paid to footsides. This may sometimes lead to tilted figures.

***


[ex-sun]: https://github.com/MAETempels/MAE-gf/wiki/Marian's-patterns#sunny-stitch

[ex-tctct]: https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dtctct
[ex-ctct]: https://d-bl.github.io/GroundForge/index.html?m=88%2011%3Bbricks%3B16%3B16%3B0%3B0&s1=ctc%20B1%3Dctct%20A2%3Dctcr%20A1%3Dctcr
[ex-5G]: https://d-bl.github.io/GroundForge/index.html?m=5831%20-4-7%3Bbricks%3B16%3B16%3B0%3B0&s1=ct%20A1%3Dctct%20C1%3Dctct


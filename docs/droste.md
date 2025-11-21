---
layout: default
title: Droste
---

# Droste

## Contents

* [Introduction](#introduction)
* [Fish](#fish)
* [Wobble](#wobble)
* [Paris](#paris)
* [More examples](#more-examples)

## Introduction

On this page, several grounds are made with the "Droste-effect": reuse thread diagrams as pair diagrams. Some of these, like "Wobble" can only be made by GroundForge using this technique.      

See the Groundforge help-page [_Droste-effect_][pg-droste] for more information.  

Some of the examples have forms to make playing easier. Other examples only have plain links for multi-step patterns, you need to click the ![](../images/wand.png) on the "Threads" section for the diagrams of the fist (or even second) step.                  

{% include stitches.html %}

[pg-droste]: /GroundForge-help/Droste-effect

## Fish

_Double fish B2,S2,W3_ (see page [_fish_](fish#fish-notation)) also can be defined as [first-step-Droste][F3-223] using the thread diagram as pair diagram. Please replace <span class="elem">cross b102</span> in the thread diagram of this first step with a <span class="stch">half knot</span> or two to mimic a twisted pair.       

The first-step-Droste diagram can reused again: click the ![](../images/wand.png) on the second step diagrams. Please note: you might have to scroll the diagram to see the result.             
The same result as this second-steps-Droste fish can be achieved with [first-step-Droste][F2-223].          

Defining a footside will become problematic, as we have four workers going into the same direction before returning. In practice you can bend this rule and change direction every other row, provided that plain twists separate the fish. Note that in both cases it can take a while for the last steps to appear.    
Please note the resemblance of the second-step fish with the [narrow eyed spider](spin_06#spiders-with-a-narrow-eye). 

[F2-223]: /GroundForge/droste?patchWidth=6&patchHeight=14&b1=ctct&a2=ctct&b3=ct&a4=ctct&b5=ctc&b6=ctcl&a6=ctc&b7=ctc&a7=ctcr&droste2=ctc,b30=tct,b44=a45=b15=b14=tt,b64=a74=ttctctt&tile=-4,5-,-5,5-,-5,21,88&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=7&shiftColsSE=2&shiftRowsSE=7

[F3-223]: /GroundForge/droste?patchWidth=6&patchHeight=6&a1=ctc&a2=cr&a3=c&a4=lc&droste2=ctc,a10=a11=ctcrr,a20=a21=a40=ctct,a30=ct,,,,&droste3=ctc,a300=tct,a104=a114=ttctctt,a204=a205=a404=a405=tt,&tile=8,1,8,1,&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=4&shiftColsSE=1&shiftRowsSE=4

## Wobble

This ground uses the thread diagram of alternating <span class="stch">ct/ctct</span> as pair diagram.

### Pricking

![w2][p-wobble-2]
![w0][p-wobble-0]
<p style="clear: both"></p>

The pricking on the left is generated with one of the "ground from template" [tools](/inkscape-bobbinlace/Ground-from-Template) and a plain text file (<a href="../data/wobble.txt" download>download</a>). The changing angle of the rose ground units inspired the name.
                
On the right a distorted version that matches a Torchon grid. The units of the rose-ground are placed in different directions, indicated with blue arrows. These units can be replaced with units of a bias ground. The green arrows indicate the working order inherited from the original pair diagram.

[p-wobble-0]: ../images/droste/wobble.svg?align=right "wobble, distorted" 
[p-wobble-2]: ../images/droste/wobble2.svg?align=left "wobble"

### Generate diagrams (color coded / threads)

After completing the stitches for the first step in the form below, click on the button of the desired type of rose-ground units. In the page that will appear next, click the ![](../images/wand.png) in the "threads" section for the thread diagram. Please note: on a small device, like a cell-phone, you might want to rotate the device 90 degrees for a good view on the form.

{% include wobble.html %}

## Paris

![fz][p-fancy-z]
The [Paris] ground uses the thread diagram of the half stich as pair diagram. Some variations on the Paris ground are in the Whiting index (defined without this Droste technique) A5, A6, B5, A7-H7, G11. 

In turn the _fancy Zeccatello_ uses the thread diagram of a Paris variation as pair diagram: [original][F12], [first-step-Droste][F12-droste] definitions. 
Note that the cloth stitch units are in fact a unit of a bias ground.    
The picture on the right shows a general scheme. The stitches of the Paris ground are replaced with units. In the picture, one unit is indicated with a blue ellipse. The buttons below replace this unit with the unit shown on the button, and the unit to the right with its mirrored version.          
              
[![ctc][i-paris-ctc]][Z-paris-ctc] 
[![lcr][i-paris-lcr]][Z-paris-lcr] 
[![rcl][i-paris-rcl]][Z-paris-rcl] 
<p style="clear: both"></p>

![pd][p-paris-droste]
The picture on the right shows another general scheme also based on the Paris ground. The stitches of the Paris ground are replaced with units. In the picture, one unit is indicated with a blue ellipse. The buttons below replace this unit with the unit shown on the button,  and the unit to the right with its mirrored version.           
              
[![ctc][p-paris-ctc]][T-paris-ctc] 
[![lcr][p-paris-lcr]][T-paris-lcr] 
[![rcl][p-paris-rcl]][T-paris-rcl] 
<p style="clear: both"></p>

Mrs. V. Irvine has worked an example using the left pricking. See [_Favourite Flaveolate_][p-VI-001] for a photo, and [here][t-VI-001] for how she made it. Pins where used to get the triangle shape at the "joints" of the hexagons.      

[p-paris-droste]: ../images/droste/paris-droste-0.svg?align=right "variation on fancy Zeccatello"
[p-fancy-z]: ../images/droste/paris-droste-f12.svg?align=right "fancy Zeccatello"
[p-paris-lcr]: ../images/droste/paris-lcr.svg "bias ground via lcr"
[p-paris-rcl]: ../images/droste/paris-rcl.svg "bias ground via rcl"
[p-paris-ctc]: ../images/droste/paris-ctc.svg "rose ground via ctc"
[i-paris-lcr]: ../images/droste/i-paris-lcr.svg "bias grond via lcr"
[i-paris-rcl]: ../images/droste/i-paris-rcl.svg "bias ground via rcl"
[i-paris-ctc]: ../images/droste/i-paris-ctc.svg "rose ground via ctc"
[p-VI-001]: https://www.flickr.com/photos/veronika_irvine/23167573524/in/album-72157649379176771/

[Paris]: /GroundForge/droste?tile=-5&tileStitch=ct&droste2=ctct&patchWidth=5&patchHeight=6&shiftColsSW=-2&shiftRowsSW=0&shiftColsSE=1&shiftRowsSE=1
[F12]: /GroundForge/stitches?whiting=F12_P190&patchWidth=10&patchHeight=10&f1=ctc&d1=tctct&b1=ctc&g2=ctctctc&e2=tctct&c2=tctct&a2=ctctctc&f3=ctc&d3=tctct&b3=ctc&g4=ctcrrctc&f4=ctc&e4=ctcllctc&c4=ctcrrctc&b4=ctc&a4=ctcllctc&tile=-4-5-7--,b-5-5-c-,-5-5-5--,a15-58d-&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-4&shiftRowsSW=4&shiftColsSE=4&shiftRowsSE=4
[Fxx-droste]: /GroundForge/droste?patchWidth=12&patchHeight=16&c1=clcrct&a1=crclct&d2=ctct&droste2=ctct,c11=a13=ctcllctc,a11=c13=ctcrrctc,d25=c10=c12=c14=ctc,d24=a10=a12=a14,a16=c15=ctctctc&tile=B-C-,---5&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2
[F12-droste]: /GroundForge/droste?whiting=F12_P190&patchWidth=12&patchHeight=16&c1=clcrcl&a1=crclcr&d2=ctc&droste2=ctct,c11=ctcllctc,a11=ctcrrctc,a13=ctcllctcl,c13=ctcrrctcr,c10=c12=ctc,c14=ctcr,a14=ctcl,a10=a12=ctc,a15=c15=ctctctc,d20=ctctt,d23=tctct&tile=B-C-,---5&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2

[T-paris-rcl]: /GroundForge/droste?patchWidth=10&patchHeight=10&c1=crclct&a1=clcrct&d2=ctct&droste2=c15=a16=tctctct,a15=c16=tctct,d24=d25=tctct,c12=a12=tct,d20=d21=d22=d23=ctc,c10=c11=c13=c14=ctc,a10=a11=a13=a14=ctc,,&tile=B-C-,---5&tileStitch=ctc&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2
[T-paris-lcr]: /GroundForge/droste?patchWidth=10&patchHeight=10&c1=clcrct&a1=crclct&d2=ctct&droste2=c15=a16=tctctct,a15=c16=tctct,d24=d25=tctct,c12=a12=tct,d20=d21=d22=d23=ctc,c10=c11=c13=c14=ctc,a10=a11=a13=a14=ctc&tile=B-C-,---5&tileStitch=ctc&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2
[T-paris-ctc]: /GroundForge/droste?patchWidth=10&patchHeight=10&c1=ctct&a1=ctct&d2=ctct&droste2=a15=c14=tctctctct,d25=c15=c,d24=a14=c,c10=c11=c12=c13=ctctc,d20=d21=d22=d23=ctc,a10=a11=a12=a13=ctctc,,&tile=B-C-,---5&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2

[Z-paris-ctc]: /GroundForge/droste?patchWidth=10&patchHeight=10&c1=ctcl&a1=ctcr&d2=ctc&droste2=a14=c14=ctctct,d20=tctctc,d21=d22=c,d23=tctct,c10=a10=ctctc,c11=c12=a11=a12=c,c13=a13=tctct&tile=B-C-,---5&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2
[Z-paris-lcr]: /GroundForge/droste?patchWidth=10&patchHeight=10&c1=clcrcl&a1=crclcr&d2=ctc&droste2=a15=c15=tctctct,d20=tctct,d21=lcllcl,d22=rcrrcr,d23=tctct,c10=a10=ctct,c11=c13=a11=a13=ctc,c12=a12=c,c14=a14=tctc&tile=B-C-,---5&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2
[Z-paris-rcl]: /GroundForge/droste?patchWidth=10&patchHeight=10&c1=crclcl&a1=clcrcr&d2=ctc&droste2=a15=c15=tctctct,d20=tctct,d21=lcllcl,d22=rcrrcr,d23=tctct,c10=a10=ctct,c11=c13=a11=a13=ctc,c12=a12=c,c14=a14=tctc&tile=B-C-,---5&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2

[t-VI-001]: /GroundForge/stitches?patchWidth=30&patchHeight=15&g1=ctc&f1=ctpcl&d1=ctc&b1=ctpcr&a1=ctc&g2=ctpc&e2=ctc&c2=ctc&a2=ctpcl&g3=ctc&f3=ctpcl&d3=ctct&b3=ctpcr&a3=ctc&g4=ctcl&a4=ctcr&g6=ctcl&a6=ctcr&tile=89-k-01,7-5-5-4,1e-5-o8,4-----7,-------,9-----0&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=7&shiftRowsSE=3

## More examples

### &quot;&amp;&quot; ground

The following examples use a stitch like <span class="stch">crctclcr</span> in the original thread diagram.        
[![example 1][p-damp1]][D-LL-1]  [![example 2][p-damp2]][D-LL-2]  [![example 3][p-damp3]][D-LL-3]     

[D-LL-1]: /GroundForge/droste?patchWidth=8&patchHeight=8&a1=crctclcr&a2=clctcrcl&droste2=ctct&tile=1,8&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=2&shiftColsSE=1&shiftRowsSE=2
[D-LL-2]: /GroundForge/droste?patchWidth=8&patchHeight=8&a1=crctclcr&droste2=ct,a18=ctct&tile=5-&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=-1&shiftRowsSW=1&shiftColsSE=1&shiftRowsSE=1
[D-LL-3]: /GroundForge/droste?patchWidth=8&patchHeight=8&a1=crctclcr&b2=clctcrcl&droste2=ctc,a18=ctct,a16=a17=ctcl,b26=b27=ctcr&tile=5-,-5&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2

[p-damp1]: ../images/droste/damp1.png "droste-ll-1; EC-001"
[p-damp2]: ../images/droste/damp2.png "droste-ll-2"
[p-damp3]: ../images/droste/damp3.png "droste-ll-3"



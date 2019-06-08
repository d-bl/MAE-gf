# Milanese Fish

## Contents
* [Introduction](#introduction)
* [Fish notation](#fish-notation)
* [Fish examples](#fish-examples)
* [Fish made by Droste-effect](#building-fish-with-droste)

## Introduction
Fish grounds are usualy used in small braids. Milanese braids typically need 14-18 pairs of bobbins.    
The grounds consists of a number of rows with two or more cloth stitches followed with some twists in the weaver. Fish starts and closes with a cloth stitch. In between the fish-rows, zero, one ore more rows with e.g. half stitch, pin, half stitch are made. The number of these rows define whether the fish will be in straight vertical lines, or in alternating positions.        
If the tail is made with pairs not from the same fish, the ground is called [_Lotus_][lotus-page].    

{% include picts-centr.html
     alt="fish pair dia"
     src="https://maetempels.github.io/MAE-gf/images_wt/gf%20vis%20wt.png"
%}     

Broader fish can be made, e.g. with four cloth stitches.       
In some Milanese grounds, the heads and tails are made as a cloth stitch with pairs. Groundforge does not support this. Making the head and tail as a half spider is supported. 

## Fish notation
Lets call the horizontal rows the _bones_, the vertical lines the _spines_, and the in between rows the _waves_.
Fish B,S,W means: the number of Bones, the number of Spines and the number of Waves. There are two ways of zero waves, noted with "0" and "-" respectively. See the picture at the top of this page.

## Fish examples
* WI E14   
* [Fish B1,S2,W-][T-12-]   
* [Fish B2,S2,W-][T-22-]; [Fish B2,S2,W0][T-220] (WI G14 ; [Fish B2,S2,W2][T-222] (WI G16)     
* [Fish B3,S2,W2][T-322]               
* [Fish B4,S2,W-][T-42-] (WI D16); [Fish B4,S2,W1][T-421] (WI E16); [Fish B4,S2,W2][T-422] (WI F16)      
* [Fish B5,S2,W-][T-52-]; [Fish B5,S2,W0][T-520]   
* [jp-double fish B2,S2,W1][TD-221]; [jp-double fish B2,S2,W3][TD-223] 

## Building fish with Droste     
_Double fish B2,S2,W3_ also can be made using Droste [second level][F2-223] which uses the thread diagram of the first level as pair diagram for the second level. Please replace <span class="elem">cross b102</span> in the level-2 thread diagram with a <span class="stch">half knot</span> or two to mimic a twisted pair.       
The first level can be split in two levels, with the same result at the [third level][F3-223]. Defining a footside however will become problematic, as we have four workers going into the same direction before returning. In practice you can bend this rule and change direction every other row, provided that plain twists separate the fish. Note that in both cases it can take a while for the last levels to appear.    
Please note the resemblance of the level-3 fish with the [narrow eyed spider][ne-spiders-page].


***

[lotus-page]: https://maetempels.github.io/MAE-gf/docs/lotus
[ne-spiders-page]: https://maetempels.github.io/MAE-gf/docs/spiders#spiders-with-a-narrow-eye
[fish-gen]: https://maetempels.github.io/MAE-gf/images_wt/mx-fish.png
[fish-build]: https://maetempels.github.io/MAE-gf/images_wt/mx-fish-bld.png

[F2-223]: https://d-bl.github.io/GroundForge/tiles.html?patchWidth=6&patchHeight=14&b1=ctct&a2=ctct&b3=ct&a4=ctct&b5=ctc&b6=ctcl&a6=ctc&b7=ctc&a7=ctcr&droste2=ctc,b30=tct,b44=a45=b15=b14=tt,b64=a74=ttctctt&tile=-4,5-,-5,5-,-5,21,88&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=7&shiftColsSE=2&shiftRowsSE=7

[F3-223]: https://d-bl.github.io/GroundForge/tiles.html?patchWidth=6&patchHeight=6&a1=ctc&a2=cr&a3=c&a4=lc&droste2=ctc,a10=a11=ctcrr,a20=a21=a40=ctct,a30=ct,,,,&droste3=ctc,a300=tct,a104=a114=ttctctt,a204=a205=a404=a405=tt,&tile=8,1,8,1,&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=4&shiftColsSE=1&shiftRowsSE=4

[T-12-]: https://d-bl.github.io/GroundForge/tiles?patchWidth=8&patchHeight=8&a1=ctc&a2=ctcr&tile=8,1&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=2&shiftColsSE=1&shiftRowsSE=2

[T-22-]: https://d-bl.github.io/GroundForge/tiles?patchWidth=8&patchHeight=8&a1=ctc&a2=ctclll&b2=ctc&a3=ctc&b3=ctcrrr&tile=4-,12,88&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=3&shiftColsSE=2&shiftRowsSE=3

[T-220]: https://d-bl.github.io/GroundForge/tiles?patchWidth=8&patchHeight=8&a1=ctc&a2=ctcll&b2=ctc&a3=ctc&b3=ctcrr&a4=ctctt&tile=5-,12,88,4-&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-1&shiftRowsSW=4&shiftColsSE=1&shiftRowsSE=4

[TD-221]: https://d-bl.github.io/GroundForge/tiles?patchWidth=8&patchHeight=13&a1=ctct&b2=ct&a3=ctc&a4=ctcl&b4=ctc&a5=ctc&b5=ctcr&tile=4-,-5,5-,12,88,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=5&shiftColsSE=2&shiftRowsSE=5

[T-222]: https://d-bl.github.io/GroundForge/tiles?patchWidth=8&patchHeight=13&a1=ctctt&b2=ctctt&a3=ctc&a4=ctcll&b4=ctc&a5=ctc&b5=ctcrr&a6=ctctt&tile=5-,-5,5-,12,88,4-,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-1&shiftRowsSW=6&shiftColsSE=1&shiftRowsSE=6

[TD-223]: https://d-bl.github.io/GroundForge/tiles?patchWidth=8&patchHeight=17&b1=ctct&a2=ctct&b3=ct&a4=ctct&b5=ctc&a6=rctc&b6=ctc&a7=ctcr&b7=ctc&tile=-4,5-,-5,5-,-5,21,88,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=7&shiftColsSE=2&shiftRowsSE=7

[T-322]: https://d-bl.github.io/GroundForge/tiles?patchWidth=8&patchHeight=17&a1=ctct&b2=ctct&a3=ctc&a4=ctclll&b4=ctc&a5=ctc&b5=ctcrrr&a6=ctclll&b6=ctc&a7=ctct&tile=5-,-5,5-,12,88,11,4-,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-1&shiftRowsSW=7&shiftColsSE=1&shiftRowsSE=7

[T-42-]: https://d-bl.github.io/GroundForge/tiles?patchWidth=10&patchHeight=12&a1=ctc&a2=ctcll&b2=ctc&a3=ctc&b3=ctcrr&a4=ctcll&b4=ctc&a5=ctc&b5=ctcrr&tile=4-,12,88,11,88,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=5&shiftColsSE=2&shiftRowsSE=5

[T-421]: https://d-bl.github.io/GroundForge/tiles?patchWidth=10&patchHeight=16&a1=ctct&b2=ctc&a3=ctc&b3=ctcll&a4=ctcrr&b4=ctc&a5=ctc&b5=ctcll&a6=ctcrr&b6=ctc&b7=ctct&tile=5-,-5,21,88,11,88,-4,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=7&shiftColsSE=2&shiftRowsSE=7

[T-422]: https://d-bl.github.io/GroundForge/tiles?patchWidth=10&patchHeight=16&a1=ctct&b2=ctct&a3=ctc&a4=ctcll&b4=ctc&a5=ctc&b5=ctcrr&a6=ctcll&b6=ctc&a7=ctc&b7=ctcrr&a8=ctct&tile=5-,-5,5-,12,88,11,88,4-,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-1&shiftRowsSW=8&shiftColsSE=1&shiftRowsSE=8

[T-52-]: https://d-bl.github.io/GroundForge/tiles?patchWidth=10&patchHeight=14&a1=ctc&a2=ctcll&b2=ctc&a3=ctc&b3=ctcrr&a4=ctcll&b4=ctc&a5=ctc&b5=ctcrr&a6=ctcll&b6=ctc&tile=4-,12,88,11,88,11,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=2&shiftRowsSE=6

[T-520]: https://d-bl.github.io/GroundForge/tiles?patchWidth=10&patchHeight=14&a1=ctc&a2=ctcll&b2=ctc&a3=ctc&b3=ctcrr&a4=ctcll&b4=ctc&a5=ctc&b5=ctcrr&a6=ctcll&b6=ctc&a7=ctct&tile=5-,12,88,11,88,11,4-,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-1&shiftRowsSW=7&shiftColsSE=1&shiftRowsSE=7



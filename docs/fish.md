# Milanese Fish

## Contents
* [Introduction](#introduction)
* [Fish notation](#fish-notation)
* [Fish examples](#fish-examples)
* [Fish building](#fish-building)

## Introduction
Fish grounds are usualy used in small braids. Milanese braids typically need 14-18 pairs of bobbins.    
The grounds consists of a number of rows with two or more cloth stitches followed with some twists in the weaver. Fish starts and closes with a cloth stitch. In between the fish-rows, zero, one ore more rows with e.g. half stitch, pin, half stitch are made. The number of these rows define whether the fish will be in straight vertical lines, or in alternating positions.        
If the tail is made with pairs not from the same fish, the ground is called [_Lotus_][lotus-page].    

{% include picts-centr.html
     alt="fish pair dia"
     src="https://maetempels.github.io/MAE-gf/images_wt/gf%20vis%20wt.png"
%}     

Broader fish can be made, e.g. with four cloth stitches. In some Milanese grounds, the heads and tails are made as a cloth stitch with pairs. Groundforge does not support this. Making the head and tail as a half spider is supported. In Groundforge these fish can be obtained using the second or even third level diagram. (example follows)

## Fish notation
Lets call the horizontal rows the _bones_, the vertical lines the _spines_, and the in between rows the _waves_.
Fish B,S,W means: the number of Bones, the number of Spines and the number of Waves. There are two ways of zero waves, noted with "0" and "-" respectively. See the picture at the top of this article.

## Fish examples
* WI E14   
* [Fish B1,S2,W-][F12-]   
* [Fish B2,S2,W-][F22-] , [Fish B2,S2,W0][F220] (WI G14), [Fish B2,S2,W2][F222] (WI G16)     
* [Fish B3,S2,W2][F322]               
* [Fish B4,S2,W-][F42-] (WI D16), [Fish B4,S2,W1][F421] (WI E16), [Fish B4,S2,W2][F422] (WI F16)      
* [Fish B5,S2,W-][F52-] , [Fish B5,S2,W0][F520]   
* [jp-double fish B2,S2,W1][FD221] , [jp-double fish B2,S2,W3][FD223] 

Example double fish B2,S2,W3 gives also a nice result using level 2. Place replace cross b102 in the level-2 thread diagram with a half knot or two to mimic a twisted pair.

## Fish building.
The general fish scheme looks like the schemes in the picture. Of course, other scheme's are possible. Please note that an even or odd number of "waves" dictate if a <span class="elem">brick-matrix</span> is possible.      

![fish generator][fish-gen]    
     
Building bigger fish is illustrated in the following picture. Please note the change of direction of the weavers.       

![fish build][fish-build]    

***

[lotus-page]: https://maetempels.github.io/MAE-gf/docs/lotus
[fish-gen]: https://maetempels.github.io/MAE-gf/images_wt/mx-fish.png
[fish-build]: https://maetempels.github.io/MAE-gf/images_wt/mx-fish-bld.png

[F12-]: https://d-bl.github.io/GroundForge/index.html?m=8%0A1%3Bchecker%3B8%3B12%3B0%3B0&s1=A1%3Dctc%20A2%3Dctcr

[F120]: https://d-bl.github.io/GroundForge/index.html?m=5-%0A12%0A4-%3Bbricks%3B8%3B12%3B0%3B0&s1=ctc%20A3%3Dctclll%20A1%3Dctct

[F220]: https://d-bl.github.io/GroundForge/index.html?m=5-%0A12%0A88%0A4-%3Bbricks%3B8%3B12%3B0%3B0&s1=ctc%20A2%3Dctctt%20B4%3Dctcll%20B1%3Dctcrr

[F22-]: https://d-bl.github.io/GroundForge/index.html?m=4-%0A12%0A88%3Bchecker%3B8%3B12%3B0%3B0&s1=ctc%20A3%3Dctclll%20B1%3Dctcrrr

[F222]: https://d-bl.github.io/GroundForge/index.html?m=5-%0A-5%0A5-%0A12%0A88%0A4-%3Bbricks%3B16%3B12%3B0%3B0&s1=ctc%20A6%3Dctctt%20B5%3Dctctt%20B2%3Dctcll%20B3%3Dctcrr%20A4%3Dctctt

[F322]: https://d-bl.github.io/GroundForge/index.html?m=5-%0A-5%0A5-%0A12%0A88%0A11%0A4-%3Bbricks%3B20%3B12%3B0%3B0&s1=ctc%20B2%3DA4%3Dctclll%20B3%3Dlllctc%20A5%3DB6%3DA7%3Dctct

[F42-]: https://d-bl.github.io/GroundForge/index.html?m=4-%0A12%0A88%0A11%0A88%3Bchecker%3B16%3B12%3B0%3B0&s1=ctc%20A5%3DA2%3Dctcll%20A1%3DA3%3Dllctc

[F421]: https://d-bl.github.io/GroundForge/index.html?m=5-%0A-5%0A21%0A88%0A11%0A88%0A-4%3Bchecker%3B20%3B12%3B0%3B0&s1=ctc%20B1%3DB3%3Dctcll%20B2%3DB4%3Dllctc%20A6%3Dtctct

[F422]: https://d-bl.github.io/GroundForge/index.html?m=5-%0A-5%0A5-%0A12%0A88%0A11%0A88%0A4-%3Bbricks%3B24%3B12%3B0%3B0&s1=ctc%20B7%3Dtctct%20A8%3Dctct%20B2%3DB4%3Dctcll%20B3%3DA5%3Dllctc

[F52-]: https://d-bl.github.io/GroundForge/index.html?m=4-%0A12%0A88%0A11%0A88%0A11%3Bchecker%3B20%3B12%3B0%3B0&s1=ctc%20A6%3DA2%3DA4%3Dctcll%20B1%3DB3%3Dctcrr

[F520]: https://d-bl.github.io/GroundForge/index.html?m=5-%0A12%0A88%0A11%0A88%0A11%0A4-%3Bbricks%3B20%3B12%3B0%3B0&s1=ctc%20A6%3Dctctt%20B7%3DB2%3DA4%3Dctcll%20A1%3DA3%3Dctcrr

[FD221]: https://d-bl.github.io/GroundForge/index.html?m=4-%0A-5%0A5-%0A12%0A88%3Bchecker%3B12%3B12%3B0%3B0&s1=ctc%20A4%3Dctct%20B5%3Dct%20A2%3Dctcl%20A3%3Dlctc

[FD223]: https://d-bl.github.io/GroundForge/index.html?m=-4%20%205-%20%20-5%20%205-%20%20-5%20%2021%20%2088%3Bchecker%3B20%3B12%3B0%3B0&s1=ctc%20B1%3Dct%20B6%3Dctct%20B4%3Dctcl%20B5%3Dlctc%20A7%3DA2%3Dctct&s2=ctc%20b10%3Dtct%20b65%3Dtt%20b64%3Dtt%20a24%3Dtt%20a25%3Dtt%20b44%3Dttctctt%20b50%3Dttctctt&s3=&

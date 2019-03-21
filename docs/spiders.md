# Spiders

## Contents
* [Introduction](#introduction)
* [Torchon spiders](#torchon-spiders)
* [Spiders with an eye](#spiders-with-an-eye)
* [Spiders with a narrow eye](#spiders-with-a-narrow-eye)
* [Binche spiders](#binche-spiders)
* [Stacked spiders](#stacked-spiders)
     
## Introduction
On this page we show examples of matrices for grounds with all spiders.           
Some of the spiders in these examples have only one twist in their legs.

## Torchon spiders
{% capture spin1 %}
Please note: for a traditional Torchon spider, a stitch like <span class="stch">ctcctc</span> or <span class="stch">ctctctc</span> has to be chosen in the heart of the spider.
{% endcapture %}
{% include picts-left.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-sp-trad.png"
  alt="torchon spider"
  description=spin1
%}

* [4x2 legs][T-ST2] (WI F2), [4x3 legs][T-ST3] (WI E4), [4x4 legs][T-ST4], [4x5 legs][T-ST5]

### in a square
{% include picts-right.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf%20spin%204s%20wt.png"
  alt="spider in square"
  description="The working-scheme in the picture shows ground <i>WI G2</i>.<br> Larger spiders are possible, but it will take Groundforge some time to generate the pictures."
%}

* [4x2 legs][T-SQ2], [4x3 legs][T-SQ3] (WI H2), [4x4 legs][T-SQ4] (WI G2), [4x5 legs][T-SQ5]
    
## Spiders with an eye
{% capture spin2 %}
Please note: to get a clear eye in the middle, the stitches in the eye of the spider have to be chosen like the example for the 4x3 legged spider: <span class="stch">B2=ctclctc F2=ctcrctc </span>.
{% endcapture %}
{% include picts-left.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-sp-gat.png"
  alt="spider with an eye"
  description=spin2
%}

* [4x2 legs][T-SH2], [4x3 legs][T-SH3], [4x4 legs][T-SH4]

### in a square
* [4x3 legs][T-SHQ3], [4x4 legs][T-SHQ4]

## Spiders with a narrow eye
Spiders with a narrow eye also can be achieved using <span class="elem">level 2</span> or <span class="elem">level 3</span> on a [fish][fish-page] in <span class="stch">half stitch</span>.   

![spider with narrow eye][pic-sn3] ![spider with narrow eye, square][pic-snq3]
* [4x3 legs][T-SN3]
 
### in a square
* [4x3 legs][T-SNQ3]

## Binche spiders 
See also page [_Snowflakes_][snow-page].            

### "Bolletje"  
{% capture bolletje %}
There are many ways of making a binche spider. Below are given some examples.
{% endcapture %}
{% include picts-left.html
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-bi-boll.png"
  alt="binche spider"
  description=bolletje
%}        
* [binche spider 1][T-SP-BB1], [binche spider 2][T-SP-BB2] (WI G04), [binche spider 3][T-SP-BB3]

### Traditional spider, on a Binche pricking  
![binche small spider][pic-bi-spin]                     
* [traditional spider, binche style][T-SP-BS] (WI E2)

## Stacked spiders
[Another][T-SA1] ground can be obtained using the corresponding <span class="elem">checkers-matrix</span>, but set the tiling parameter to <span class="elem">brick</span>.


***
[math-page]: https://maetempels.github.io/MAE-gf/docs/maths#spider-formulas
[snow-page]: https://maetempels.github.io/MAE-gf/docs/snowflakes
[fish-page]: https://maetempels.github.io/MAE-gf/docs/fish#building-fish-with-droste

[pic-ts]: https://maetempels.github.io/MAE-gf/images/gf%20spin%204t.png
[pic-gen]: https://maetempels.github.io/MAE-gf/images/gf%20spin%20gen.png
[pic-gon]: https://maetempels.github.io/MAE-gf/images/gf%20spon%20gn.png
[pic-sq-wt]: https://maetempels.github.io/MAE-gf/images_wt/gf%20spin%204s%20wt.png
[pic-sq]: https://maetempels.github.io/MAE-gf/images/gf%20spin%204s.png
[pic-sp-trad]: https://maetempels.github.io/MAE-gf/images_wt/gf-sp-trad.png
[pic-sp-gat]: https://maetempels.github.io/MAE-gf/images_wt/gf-sp-gat.png
[pic-bi-boll]: https://maetempels.github.io/MAE-gf/images_wt/gf-bi-boll.png
[pic-bi-spin]: https://maetempels.github.io/MAE-gf/images_wt/gf-bi-spin.png
[pic-sn3]: https://maetempels.github.io/MAE-gf/images_wt/wt-sn3.png
[pic-snq3]: https://maetempels.github.io/MAE-gf/images_wt/wt-snq3.png

[G-ST2]: https://d-bl.github.io/GroundForge/index.html?m=-5--%0AB-C-%0A-5-5%0A5-5-%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20B3%3Dctcttctc%20A4%3Dctcll%20D1%3Dctctt%20%20C4%3Dctcrr

[G-ST3]: https://d-bl.github.io/GroundForge/index.html?m=-5----%0AB-CD-A%0A256-5-%0A-5-535%0A5-56-2%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20A4%3Dctctctc%20C5%3Dctcr%20B1%3Dctcr%20E5%3Dctcl%20F1%3Dctcl%20D2%3Dctct

[G-ST4]: https://d-bl.github.io/GroundForge/index.html?m=-5------%0AB-CDD-AA%0A2566-5-2%0A256-535-%0A-5-56325%0A5-566-22%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20H5%3Dctctctc%20E6%3Dctcl%20F1%3Dctcl%20G2%3Dctcl%20D3%3Dctct%20C6%3Dctcr%20B1%3Dctcr%20A2%3Dctcr

[G-ST5]: https://d-bl.github.io/GroundForge/index.html?m=-5--------%0AB-CDDD-AAA%0A25666-5-22%0A2566-535-2%0A256-56325-%0A-5-5663225%0A5-5666-222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20I6%3Dctctctc%20E7%3Dctcll%20F1%3Dctcll%20G2%3Dctcll%20H3%3Dctcll%20D4%3Dctctt%20C7%3Dctcrr%20B1%3Dctcrr%20A2%3Dctcrr%20J3%3Dctcrr

[G-SA1]: https://d-bl.github.io/GroundForge/index.html?m=-5--%0AB-C-%0A-5-5%0A5-5-%0A---5%0AC-B-%0A-5-5%0A5-5-%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20D5%3Dttctctt%20A8%3Dctcll%20B1%3Dctctt%20C8%3Dctcrr

[G-SH2]: https://d-bl.github.io/GroundForge/index.html?m=5-5-%0A-5-5%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20B2%3Drctclctcr%20D2%3Dlctcrctcl

[G-SH3]: https://d-bl.github.io/GroundForge/index.html?m=5-5-5-%0A-5---5%0A5-C-B-%0A-5-5-5%0A5-5-5-%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20E5%3Dctcrctc%20A5%3Dctclctc%20D1%3Dctcll%20B2%3Dctcll%20C3%3Dctctt%20B1%3Dctcrr%20D2%3Dctcrr

[G-SH4]: https://d-bl.github.io/GroundForge/index.html?m=5-25-56-%0A-5-----5%0A5-CD-AB-%0A-56-5-25%0A56-535-2%0A5-56-25-%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20F6%3Dctcrrctc%20H6%3Dctcllctc%20D1%3Dctcll%20E2%3Dctcll%20B3%3Dctcll%20C4%3Dctctt%20B1%3Dctcrr%20A2%3Dctcrr%20D3%3Dctcrr

[G-SQ2]: https://d-bl.github.io/GroundForge/index.html?m=5--5--%0A-C632B%0A566-22%3Bbricks%3B24%3B24%3B0%3B0&s1=ctct%20F3%3Dctc%20E1%3Dctc%20A1%3Dctc%20F2%3Dctcttctc%20B3%3Dctcl%20D3%3Dctcr

[G-SQ3]: https://d-bl.github.io/GroundForge/index.html?m=5---5---%0A-CD632AB%0A56663222%0A5666-222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctct%20C4%3Dctc%20F1%3Dctc%20E2%3Dctc%20H1%3Dctc%20G1%3Dctc%20F2%3Dctc%20A2%3Dctc%20H2%3Dctc%20G3%3Dctcctc%20F4%3Dctc%20H4%3Dctc%20C1%3Dctc%20E4%3Dctcl%20%20B1%3Dctcl%20A4%3Dctcr%20D1%3Dctcr

[G-SQ4]: https://d-bl.github.io/GroundForge/index.html?m=5----5----%0A-CDD632AAB%0A5666632222%0A5666632222%0A56666-2222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctct%20C1%3Dctc%20G2%3Dctc%20I2%3Dctc%20F3%3Dctc%20J3%3Dctc%20H2%3Dctc%20G3%3Dctc%20I3%3Dctc%20G5%3Dctc%20I5%3Dctc%20H1%3Dctc%20H4%3Dcttc%20F5%3Dctcl%20G1%3Dctcl%20J5%3Dctcr%20I1%3Dctcr

[G-SQ5]: https://d-bl.github.io/GroundForge/index.html?m=5-----5-----%0A-CDDD632AAAB%0A566666322222%0A566666322222%0A566666322222%0A566666-22222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20I5%3Dctctctc%20C5%3Dtctct%20B6%3Dtctct%20A1%3Dtctct%20L2%3Dtctct%20E3%3Dtctct%20D4%3Dtctct%20D6%3Dtctct%20E1%3Dtctct%20A3%3Dtctct%20B4%3Dtctct%20F2%3Dtctct

[G-WI-G04]: https://d-bl.github.io/GroundForge/index.html?m=5-27-256-46-%0A-5----5----5%0A5-CD-B3C-AB-%0A-56866-22125%3Bbricks%3B24%3B24%3B0%3B0&s1=ctct%20I1%3Dctc%20H2%3Dctc%20J2%3Dctc%20I3%3Dctc%20G3%3Dctc%20K3%3Dctc%20H4%3Dctc%20J4%3Dctc%20C1%3Dctc%20A1%3Dctcl%20E1%3Dctcr%20B2%3Dctcl%20D2%3Dctcr

[G-WI-E02]: https://d-bl.github.io/GroundForge/index.html?m=5---5---%0A-CD632AB%0A5666-222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20C2%3Dctctttctc%20A3%3Dctclll%20B1%3Dctclll%20E3%3Dctcrrr%20D1%3Dctcrrr%20G2%3Dctctctc

[G-SHQ3]: https://d-bl.github.io/GroundForge/index.html?m=-5--5--5%0A5-C632B-%0A-566-225%0A566-5-22%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20C3%3Dtctct%20B4%3Dlctct%20E1%3Dlctct%20D2%3Dlctct%20D4%3Drctct%20A1%3Drctct%20B2%3Drctct%20F3%3Dctcrctc%20H3%3Dctclctc

[G-SHQ4]: https://d-bl.github.io/GroundForge/index.html?m=-5---5---5%0A5-CD632AB-%0A-566632225%0A56666-2222%0A5666-5-222%3Bbricks%3B24%3B24%3B0%3B0&s1=G4%3Dtctct%20I4%3Dtctct%20C4%3Dctct%20B5%3Dlctct%20A1%3Dlctct%20E2%3Dlctct%20D3%3Dlctct%20D5%3Drctct%20E1%3Drctct%20A2%3Drctct%20B3%3Drctct%20C4%3Dctct

[G-SN3]: https://d-bl.github.io/GroundForge/index.html?m=86-215%0A4---7-%0A1C-B83%0A7-5-4-%0A-5-5-5%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20B3%3Dctcttt%20E2%3Dtttctc%20C2%3Dctcrrr%20A2%3Dctclll

[G-SNQ3]: https://d-bl.github.io/GroundForge/index.html?m=--5--7-4%0AC632B831%0A66-224-7%0A31583256%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20A3%3Dctct%20H4%3DB2%3DC1%3Dlllctctrr%20B4%3DG1%3DH2%3Drrrctctll

[T-SA1]: https://d-bl.github.io/GroundForge/tiles?patchWidth=15&patchHeight=15&b1=ctc&a2=ctcll&c2=ctcrr&b3=ctctt&d3=ctc&a4=ctc&c4=ctc&d5=ctc&a6=ctcrr&c6=ctcll&b7=ctctt&d7=ctc&a8=ctc&c8=ctc&tile=-5--,B-C-,-5-5,5-5-,---5,C-B-,-5-5,5-5-&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=8&shiftColsSE=2&shiftRowsSE=8

[T-SP-BS]: https://d-bl.github.io/GroundForge/tiles?patchWidth=15&patchHeight=15&a1=ctcctc&e1=ctctttctc&b2=ctc&c2=ctcrrr&d2=ctc&e2=ctc&f2=ctc&g2=ctclll&h2=ctc&a3=ctc&b3=ctcrrr&c3=ctc&d3=ctc&f3=ctc&g3=ctc&h3=ctclll&tile=5---5---,-CD632AB,5666-222&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-4&shiftRowsSW=3&shiftColsSE=4&shiftRowsSE=3

[T-SP-BB1]: https://d-bl.github.io/GroundForge/tiles?patchWidth=16&patchHeight=16&a1=ctc&c1=ctc&d1=ctct&f1=rctct&g1=ctc&h1=lctct&j1=ctct&k1=ctc&b2=ctc&g2=ctct&l2=ctc&a3=ctc&c3=ctc&d3=lctct&f3=ctct&g3=ctc&h3=ctct&j3=rctct&k3=ctc&b4=ctc&c4=lctct&d4=ctct&e4=ctct&f4=ctc&h4=ctc&i4=ctct&j4=ctct&k4=rctct&l4=ctc&tile=5-27-256-46-,-5----5----5,5-CD-B3C-AB-,-56866-22125&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-6&shiftRowsSW=4&shiftColsSE=6&shiftRowsSE=4

[T-SH2]: https://d-bl.github.io/GroundForge/tiles?patchWidth=8&patchHeight=8&a1=rctclctcrr&c1=lctcrctcll&b2=ctc&d2=ctct&tile=5-5-,-5-5&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=2&shiftColsSE=2&shiftRowsSE=2

[T-SH3]: https://d-bl.github.io/GroundForge/tiles?patchWidth=16&patchHeight=16&a1=ctc&c1=ctc&e1=ctc&b2=ctclctc&f2=ctcrctc&a3=ctc&c3=ctcrr&e3=ctcll&b4=ctcrr&d4=ctc&f4=ctcll&a5=ctctt&c5=ctc&e5=ctc&tile=5-5-5-,-5---5,5-C-B-,-5-5-5,5-5-5-&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-3&shiftRowsSW=5&shiftColsSE=3&shiftRowsSE=5

[T-SH4]: https://d-bl.github.io/GroundForge/tiles?patchWidth=19&patchHeight=19&a1=ctc&c1=ctc&d1=ctc&f1=ctc&g1=ctc&b2=ctclctc&h2=ctcrctc&a3=ctc&c3=ctc&d3=ctcrr&f3=ctcll&g3=ctc&b4=ctc&c4=ctcrr&e4=ctc&g4=ctcll&h4=ctc&a5=ctc&b5=ctcrr&d5=ctc&e5=ctc&f5=ctc&h5=ctcll&a6=ctctt&c6=ctc&d6=ctc&f6=ctc&g6=ctc&tile=5-25-56-,-5-----5,5-CD-AB-,-56-5-25,56-535-2,5-56-25-&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-4&shiftRowsSW=6&shiftColsSE=4&shiftRowsSE=6

[T-SHQ3]: https://d-bl.github.io/GroundForge/tiles?patchWidth=15&patchHeight=15&b1=ctclctc&e1=ctct&h1=ctcrctc&a2=ctc&c2=ctc&d2=lctct&e2=ctc&f2=rctct&g2=ctc&b3=ctc&c3=lctct&d3=ctc&f3=ctc&g3=rctct&h3=ctc&a4=ctc&b4=lctct&c4=ctc&e4=ctc&g4=ctc&h4=rctct&tile=-5--5--5,5-C632B-,-566-225,566-5-22&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-4&shiftRowsSW=4&shiftColsSE=4&shiftRowsSE=4

[T-SHQ4]: https://d-bl.github.io/GroundForge/tiles?patchWidth=20&patchHeight=20&b1=lctcl&f1=ctct&j1=rctcr&a2=ctc&c2=ctc&d2=ctc&e2=lctct&f2=ctc&g2=rctct&h2=ctc&i2=ctc&b3=ctc&c3=ctc&d3=lctct&e3=ctc&f3=ctc&g3=ctc&h3=rctct&i3=ctc&j3=ctc&a4=ctc&b4=ctc&c4=lctct&d4=ctc&e4=ctc&g4=ctc&h4=ctc&i4=rctct&j4=ctc&a5=ctc&b5=lctct&c5=ctc&d5=ctc&f5=ctc&h5=ctc&i5=ctc&j5=rctct&tile=-5---5---5,5-CD632AB-,-566632225,56666-2222,5666-5-222&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-5&shiftRowsSW=5&shiftColsSE=5&shiftRowsSE=5

[T-SN3]: https://d-bl.github.io/GroundForge/tiles?patchWidth=16&patchHeight=16&a1=ctc&b1=ctc&d1=ctc&e1=ctc&f1=ctc&a2=ctc&e2=ctc&a3=ctc&b3=ctc&d3=ctc&e3=ctc&f3=ctc&a4=ctcrr&c4=ttctc&e4=ctcll&b5=ctc&d5=ctc&f5=ctctt&tile=86-215,4---7-,1C-B83,7-5-4-,-5-5-5&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-3&shiftRowsSW=5&shiftColsSE=3&shiftRowsSE=5

[T-SNQ3]: https://d-bl.github.io/GroundForge/tiles?patchWidth=16&patchHeight=16&c1=ctct&f1=ctc&h1=ctc&a2=ctc&b2=lctct&c2=ctc&d2=rctct&e2=ctc&f2=ctc&g2=ctc&h2=ctc&a3=lctct&b3=ctc&d3=ctc&e3=rctct&f3=ctc&h3=ctc&a4=ctc&b4=ctc&c4=ctc&d4=ctc&e4=ctc&f4=rctct&g4=ctc&h4=lctct&tile=--5--7-4,C632B831,66-224-7,31583256&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-4&shiftRowsSW=4&shiftColsSE=4&shiftRowsSE=4

[T-SQ2]: https://d-bl.github.io/GroundForge/tiles?patchWidth=12&patchHeight=12&a1=ctctctc&d1=ctct&b2=ctcr&c2=ctct&d2=ctc&e2=ctct&f2=ctcl&a3=ctct&b3=ctct&c3=ctc&e3=ctc&f3=ctct&tile=5--5--,-C632B,566-22&footsideStitch=ctctt&tileStitch=ctct&headsideStitch=ctctt&shiftColsSW=-3&shiftRowsSW=3&shiftColsSE=3&shiftRowsSE=3

[T-SQ3]: https://d-bl.github.io/GroundForge/tiles?patchWidth=15&patchHeight=15&a1=ctcctc&e1=ctct&b2=ctc&c2=ctc&d2=lctct&e2=ctc&f2=rctct&g2=ctc&h2=ctc&a3=ctc&b3=ctc&c3=lctct&d3=ctc&e3=ctc&f3=ctc&g3=rctct&h3=ctc&a4=ctc&b4=lctct&c4=ctc&d4=ctc&f4=ctc&g4=ctc&h4=rctct&tile=5---5---,-CD632AB,56663222,5666-222&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-4&shiftRowsSW=4&shiftColsSE=4&shiftRowsSE=4

[T-SQ4]: https://d-bl.github.io/GroundForge/tiles?patchWidth=20&patchHeight=20&a1=ctcctc&f1=ctct&b2=ctc&c2=ctc&d2=ctct&e2=ctct&f2=ctct&g2=ctct&h2=ctct&i2=ctc&j2=ctc&a3=ctc&b3=ctc&c3=ctct&d3=ctct&e3=ctct&f3=ctc&g3=ctct&h3=ctct&i3=ctct&j3=ctc&a4=ctc&b4=ctct&c4=ctct&d4=ctct&e4=ctc&f4=ctc&g4=ctc&h4=ctct&i4=ctct&j4=ctct&a5=ctct&b5=ctct&c5=ctct&d5=ctc&e5=ctc&g5=ctc&h5=ctc&i5=ctct&j5=ctct&tile=5----5----,-CDD632AAB,5666632222,5666632222,56666-2222&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-5&shiftRowsSW=5&shiftColsSE=5&shiftRowsSE=5

[T-SQ5]: https://d-bl.github.io/GroundForge/tiles?patchWidth=20&patchHeight=20&a1=ctctctc&g1=ctct&b2=ctc&c2=ctc&d2=ctc&e2=ctc&f2=lctct&g2=ctc&h2=rctct&i2=ctc&j2=ctc&k2=ctc&l2=ctc&a3=ctc&b3=ctc&c3=ctc&d3=ctc&e3=lctct&f3=ctc&g3=ctc&h3=ctc&i3=rctct&j3=ctc&k3=ctc&l3=ctc&a4=ctc&b4=ctc&c4=ctc&d4=lctct&e4=ctc&f4=ctc&g4=ctc&h4=ctc&i4=ctc&j4=rctct&k4=ctc&l4=ctc&a5=ctc&b5=ctc&c5=lctct&d5=ctc&e5=ctc&f5=ctc&g5=ctc&h5=ctc&i5=ctc&j5=ctc&k5=rctct&l5=ctc&a6=ctc&b6=lctct&c6=ctc&d6=ctc&e6=ctc&f6=ctc&h6=ctc&i6=ctc&j6=ctc&k6=ctc&l6=rctct&tile=5-----5-----,-CDDD632AAAB,566666322222,566666322222,566666322222,566666-22222&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-6&shiftRowsSW=6&shiftColsSE=6&shiftRowsSE=6

[T-ST2]: https://d-bl.github.io/GroundForge/tiles?patchWidth=12&patchHeight=15&b1=ctcctc&a2=ctcll&c2=ctcrr&b3=ctctt&d3=ctc&a4=ctc&c4=ctc&tile=-5--,B-C-,-5-5,5-5-&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-2&shiftRowsSW=4&shiftColsSE=2&shiftRowsSE=4

[T-ST3]: https://d-bl.github.io/GroundForge/tiles?patchWidth=12&patchHeight=15&b1=ctcctc&a2=ctc&c2=ctc&d2=ctcrr&f2=ctcll&a3=ctcll&b3=ctc&c3=ctcrr&e3=ctc&b4=ctctt&d4=ctc&e4=ctc&f4=ctc&a5=ctc&c5=ctc&d5=ctc&f5=ctc&tile=-5----,B-CD-A,256-5-,-5-535,5-56-2&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-3&shiftRowsSW=5&shiftColsSE=3&shiftRowsSE=5

[T-ST4]: https://d-bl.github.io/GroundForge/tiles?patchWidth=12&patchHeight=16&b1=ctcttcc&a2=ctc&c2=ctc&d2=ctc&e2=ctcrr&g2=ctcll&h2=ctc&a3=ctc&b3=ctc&c3=ctc&d3=ctcrr&f3=ctc&h3=ctcll&a4=ctcll&b4=ctc&c4=ctcrr&e4=ctc&f4=ctc&g4=ctc&b5=ctctt&d5=ctc&e5=ctc&f5=ctc&g5=ctc&h5=ctc&a6=ctc&c6=ctc&d6=ctc&e6=ctc&g6=ctc&h6=ctc&tile=-5------,B-CDD-AA,2566-5-2,256-535-,-5-56325,5-566-22&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-4&shiftRowsSW=6&shiftColsSE=4&shiftRowsSE=6

[T-ST5]: https://d-bl.github.io/GroundForge/tiles?patchWidth=18&patchHeight=15&b1=ctcttctc&a2=ctc&c2=ctc&d2=ctc&e2=ctc&f2=ctcrr&h2=ctcll&i2=ctc&j2=ctc&a3=ctc&b3=ctc&c3=ctc&d3=ctc&e3=ctcrr&g3=ctc&i3=ctcll&j3=ctc&a4=ctc&b4=ctc&c4=ctc&d4=ctcrr&f4=ctc&g4=ctc&h4=ctc&j4=ctcll&a5=ctcll&b5=ctc&c5=ctcrr&e5=ctc&f5=ctc&g5=ctc&h5=ctc&i5=ctc&b6=ctctt&d6=ctc&e6=ctc&f6=ctc&g6=ctc&h6=ctc&i6=ctc&j6=ctc&a7=ctc&c7=ctc&d7=ctc&e7=ctc&f7=ctc&h7=ctc&i7=ctc&j7=ctc&tile=-5--------,B-CDDD-AAA,25666-5-22,2566-535-2,256-56325-,-5-5663225,5-5666-222&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-5&shiftRowsSW=7&shiftColsSE=5&shiftRowsSE=7

[T-SP-BB2]: https://d-bl.github.io/GroundForge/tiles?patchWidth=21&patchHeight=14&i1=ctctt&f1=ctc&e1=ctc&d1=ctc&b1=ctc&a1=ctctt&g2=ctcrr&i3=ctctt&f3=ctc&e3=ctc&d3=ctc&b3=ctcll&a3=ctctt&n4=ctctt&l4=ctctt&j4=ctctt&h4=ctctt&f4=ctt&d4=ctcll&c4=ctcll&b4=ctctt&g5=ctctt&c5=ctctt&n6=ctctt&j6=ctctt&m7=c&k7=ctc&j7=ctc&i7=ctctt&g7=ctctt&e7=ctctt&c7=ctctt&a7=ctctt&tile=56-o98-z5-----,------5-------,ag-aab-wd-----,-256-m-l-o-k-e,--5---5---y-w-,---w-y---b---c,h-g-5-n-l3h-e-,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-7&shiftRowsSW=7&shiftColsSE=7&shiftRowsSE=7

[T-SP-BB3]: https://d-bl.github.io/GroundForge/tiles?patchWidth=21&patchHeight=14&i1=ctctt&h1=ctc&f1=ctc&e1=ctc&d1=ctc&b1=ctc&a1=ctctt&g2=ctc&i3=ctctt&h3=ctcrr&f3=ctc&e3=ctc&d3=ctc&b3=ctcll&a3=ctctt&n4=ctctt&l4=ctctt&j4=ctctt&h4=ctctt&f4=ctt&d4=ctcll&c4=ctcll&b4=ctctt&g5=ctctt&c5=ctctt&n6=ctctt&j6=ctctt&m7=c&k7=ctc&j7=ctc&i7=ctctt&g7=ctctt&e7=ctctt&c7=ctctt&a7=ctctt&tile=56-o98-j5-----,------5-------,ag-aae-cd-----,-256-m-l-o-k-e,--5---5---y-w-,---w-y---b---c,h-g-5-n-l3h-e-,&footsideStitch=ctctt&tileStitch=ctc&headsideStitch=ctctt&shiftColsSW=-7&shiftRowsSW=7&shiftColsSE=7&shiftRowsSE=7

# Spiders

### Contents
* [Introduction](#introduction)
* [Torchon spiders](#torchon-spiders)
* [Stacked spiders](#stacked-spiders)
* [Spiders with an eye](#spiders-with-an-eye)
* [Spiders in a square](#spiders-in-a-square)
* [Spiders with an eye, in a square](#spiders-with-an-eye-in-a-square)
* [Binche spiders](#binche-spiders)
* [Building Spiders](#building-spiders) 
     
### Introduction
On this page we show examples of matrices for grounds with all spiders.           
Some of the spiders in these examples have only one twist in their legs.

### Torchon spiders
<img alt="torchon spider" align="left" src="https://maetempels.github.io/MAE-gf/images_wt/gf-sp-trad.png">

Please note: for a traditional Torchon spider, a stitch like <span class="stch">ctcctc</span> or <span class="stch">ctctctc</span> has to be chosen in the heart of the spider.      
<br><br><br>

* [4x2 legs][st2] (WI F2), [4x3 legs][st3] (WI E4), [4x4 legs][st4], [4x5 legs][st5]

### Stacked spiders
[Another][sa1] ground can be obtained using the corresponding <span class="elem">checkers-matrix</span>, but set the tiling parameter to <span class="elem">brick</span>.
    
### Spiders with an eye
<img alt="spider with an eye" align="left" src="https://maetempels.github.io/MAE-gf/images_wt/gf-sp-gat.png"> 

Please note: to get a clear eye in the middle, the stitches in the eye of the spider have to be chosen like the example for the 4x3 legged spider: <span class="stch">A5=ctclctc E5=ctcrctc</span>.        
<br><br><br>

* [4x2 legs][sh2], [4x3 legs][sh3], [4x4 legs][sh4]
 
### Spiders in a square
<img alt="spider in square" align="right" src="https://maetempels.github.io/MAE-gf/images_wt/gf%20spin%204s%20wt.png">

The working-scheme in the picture shows ground _WI G2_.     
Larger spiders are possible, but it will take Groundforge some time to generate the pictures.
* [4x2 legs][sq2], [4x3 legs][sq3] (WI H2), [4x4 legs][sq4] (WI G2), [4x5 legs][sq5]
       
### Spiders with an eye in a square 
* [4x3 legs][shq3], [4x4 legs][shq4]

### Binche spiders 
See also page [_Snowflakes_][snow-page].            

**"Bolletje"**     

![binche spider][pic-bi-boll]                
* [binche spider][wi-g04] (WI G4)

**Traditional spider, on a Binche pricking**        

![binche small spider][pic-bi-spin]                     
* [traditional spider, binche style][wi-e02] (WI E2)

### Building Spiders
Adding legs to a spider is the equivalent of adding a ring to it. So, after discovering the matrix for a 4x3 legged spider, a 4x4 or bigger spider is easy. In fact, a formula can be made, see the [_Math_][math-page] page.    
For the complete scheme's we chose to connect the spiders diagonaly. Of course, connecting with a horizontal line will also work. For the spiders in a square, the connection between spider and square has to be horizontal.   

Torchon spiders looks like this:        
![spider generator trad][pic-gen]    
Spiders with an eye look like this:          
![spider generator eye][pic-gon]

***
[math-page]: https://maetempels.github.io/MAE-gf/docs/maths#spider-formulas
[snow-page]: https://maetempels.github.io/MAE-gf/docs/snowflakes

[pic-ts]: https://maetempels.github.io/MAE-gf/images/gf%20spin%204t.png
[pic-gen]: https://maetempels.github.io/MAE-gf/images/gf%20spin%20gen.png
[pic-gon]: https://maetempels.github.io/MAE-gf/images/gf%20spon%20gn.png
[pic-sq-wt]: https://maetempels.github.io/MAE-gf/images_wt/gf%20spin%204s%20wt.png
[pic-sq]: https://maetempels.github.io/MAE-gf/images/gf%20spin%204s.png
[pic-sp-trad]: https://maetempels.github.io/MAE-gf/images_wt/gf-sp-trad.png
[pic-sp-gat]: https://maetempels.github.io/MAE-gf/images_wt/gf-sp-gat.png
[pic-bi-boll]: https://maetempels.github.io/MAE-gf/images_wt/gf-bi-boll.png
[pic-bi-spin]: https://maetempels.github.io/MAE-gf/images_wt/gf-bi-spin.png


[st2]: https://d-bl.github.io/GroundForge/index.html?m=-5--%0AB-C-%0A-5-5%0A5-5-%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20B3%3Dctcttctc%20A4%3Dctcll%20D1%3Dctctt%20%20C4%3Dctcrr

[st3]: https://d-bl.github.io/GroundForge/index.html?m=-5----%0AB-CD-A%0A256-5-%0A-5-535%0A5-56-2%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20A4%3Dctctctc%20C5%3Dctcr%20B1%3Dctcr%20E5%3Dctcl%20F1%3Dctcl%20D2%3Dctct

[st4]: https://d-bl.github.io/GroundForge/index.html?m=-5------%0AB-CDD-AA%0A2566-5-2%0A256-535-%0A-5-56325%0A5-566-22%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20H5%3Dctctctc%20E6%3Dctcl%20F1%3Dctcl%20G2%3Dctcl%20D3%3Dctct%20C6%3Dctcr%20B1%3Dctcr%20A2%3Dctcr

[st5]: https://d-bl.github.io/GroundForge/index.html?m=-5--------%0AB-CDDD-AAA%0A25666-5-22%0A2566-535-2%0A256-56325-%0A-5-5663225%0A5-5666-222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20I6%3Dctctctc%20E7%3Dctcll%20F1%3Dctcll%20G2%3Dctcll%20H3%3Dctcll%20D4%3Dctctt%20C7%3Dctcrr%20B1%3Dctcrr%20A2%3Dctcrr%20J3%3Dctcrr

[sa1]: https://d-bl.github.io/GroundForge/index.html?m=-5--%0AB-C-%0A-5-5%0A5-5-%0A---5%0AC-B-%0A-5-5%0A5-5-%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20D5%3Dttctctt%20A8%3Dctcll%20B1%3Dctctt%20C8%3Dctcrr

[sh2]: https://d-bl.github.io/GroundForge/index.html?m=5-5-%0A-5-5%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20B2%3Drctclctcr%20D2%3Dlctcrctcl

[sh3]: https://d-bl.github.io/GroundForge/index.html?m=5-5-5-%0A-5---5%0A5-C-B-%0A-5-5-5%0A5-5-5-%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20E5%3Dctcrctc%20A5%3Dctclctc%20D1%3Dctcll%20B2%3Dctcll%20C3%3Dctctt%20B1%3Dctcrr%20D2%3Dctcrr

[sh4]: https://d-bl.github.io/GroundForge/index.html?m=5-25-56-%0A-5-----5%0A5-CD-AB-%0A-56-5-25%0A56-535-2%0A5-56-25-%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20F6%3Dctcrrctc%20H6%3Dctcllctc%20D1%3Dctcll%20E2%3Dctcll%20B3%3Dctcll%20C4%3Dctctt%20B1%3Dctcrr%20A2%3Dctcrr%20D3%3Dctcrr

[sq2]: https://d-bl.github.io/GroundForge/index.html?m=5--5--%0A-C632B%0A566-22%3Bbricks%3B24%3B24%3B0%3B0&s1=ctct%20F3%3Dctc%20E1%3Dctc%20A1%3Dctc%20F2%3Dctcttctc%20B3%3Dctcl%20D3%3Dctcr

[sq3]: https://d-bl.github.io/GroundForge/index.html?m=5---5---%0A-CD632AB%0A56663222%0A5666-222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctct%20C4%3Dctc%20F1%3Dctc%20E2%3Dctc%20H1%3Dctc%20G1%3Dctc%20F2%3Dctc%20A2%3Dctc%20H2%3Dctc%20G3%3Dctcctc%20F4%3Dctc%20H4%3Dctc%20C1%3Dctc%20E4%3Dctcl%20%20B1%3Dctcl%20A4%3Dctcr%20D1%3Dctcr

[sq4]: https://d-bl.github.io/GroundForge/index.html?m=5----5----%0A-CDD632AAB%0A5666632222%0A5666632222%0A56666-2222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctct%20C1%3Dctc%20G2%3Dctc%20I2%3Dctc%20F3%3Dctc%20J3%3Dctc%20H2%3Dctc%20G3%3Dctc%20I3%3Dctc%20G5%3Dctc%20I5%3Dctc%20H1%3Dctc%20H4%3Dcttc%20F5%3Dctcl%20G1%3Dctcl%20J5%3Dctcr%20I1%3Dctcr

[sq5]: https://d-bl.github.io/GroundForge/index.html?m=5-----5-----%0A-CDDD632AAAB%0A566666322222%0A566666322222%0A566666322222%0A566666-22222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20I5%3Dctctctc%20C5%3Dtctct%20B6%3Dtctct%20A1%3Dtctct%20L2%3Dtctct%20E3%3Dtctct%20D4%3Dtctct%20D6%3Dtctct%20E1%3Dtctct%20A3%3Dtctct%20B4%3Dtctct%20F2%3Dtctct

[wi-g04]: https://d-bl.github.io/GroundForge/index.html?m=5-27-256-46-%0A-5----5----5%0A5-CD-B3C-AB-%0A-56866-22125%3Bbricks%3B24%3B24%3B0%3B0&s1=ctct%20I1%3Dctc%20H2%3Dctc%20J2%3Dctc%20I3%3Dctc%20G3%3Dctc%20K3%3Dctc%20H4%3Dctc%20J4%3Dctc%20C1%3Dctc%20A1%3Dctcl%20E1%3Dctcr%20B2%3Dctcl%20D2%3Dctcr

[wi-e02]: https://d-bl.github.io/GroundForge/index.html?m=5---5---%0A-CD632AB%0A5666-222%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20C2%3Dctctttctc%20A3%3Dctclll%20B1%3Dctclll%20E3%3Dctcrrr%20D1%3Dctcrrr%20G2%3Dctctctc&s2=cross%3Dctc%20twist%3Dctc&s3=

[shq3]: https://d-bl.github.io/GroundForge/index.html?m=-5--5--5%0A5-C632B-%0A-566-225%0A566-5-22%3Bbricks%3B24%3B24%3B0%3B0&s1=ctc%20C3%3Dtctct%20B4%3Dlctct%20E1%3Dlctct%20D2%3Dlctct%20D4%3Drctct%20A1%3Drctct%20B2%3Drctct%20F3%3Dctcrctc%20H3%3Dctclctc

[shq4]: https://d-bl.github.io/GroundForge/index.html?m=-5---5---5%0A5-CD632AB-%0A-566632225%0A56666-2222%0A5666-5-222%3Bbricks%3B24%3B24%3B0%3B0&s1=G4%3Dtctct%20I4%3Dtctct%20C4%3Dctct%20B5%3Dlctct%20A1%3Dlctct%20E2%3Dlctct%20D3%3Dlctct%20D5%3Drctct%20E1%3Drctct%20A2%3Drctct%20B3%3Drctct%20C4%3Dctct


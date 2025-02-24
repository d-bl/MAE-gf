---
layout: default
title: test
purpose: test only
---

dit is een test, en nog eens

<style>
.button
  background-color: blue;
  border: 6px;
  border-color: red;
  color: green;
  padding: 0px;
  cursor: pointer;
  box-shadow: 3px 3px #ebebeb;
}

.button:hover {
  background-color: green;
   
}
  
</style>

# test

buttons test

<a href="../images/flanders2/105-1.png">
<button type="button"><img title="paris fashion" src="../images/flanders2/105-1.png"></button>
</a>  

{% include p-l-c.html
  src="../images/flanders2/105-1.png"
  alt="some nice ground"
  lnk="/GroundForge/tiles?patchWidth=16&patchHeight=16&a1=ctct&b1=ct&d1=ct&a2=ct&c2=ct&shiftColsSE=3&shiftRowsSE=1&shiftColsSW=-4&shiftRowsSW=1&tile=88-1,4-58"
  title="ook iets leuks"
%}  

test include met zonder erin, huh?
<table>
 {% include ctrl.html
  s1="ct"
  s2="ct"
  name="half stitch"
 %} 
    
{% include ctrl.html
  s1="cl"
  s2="cr"
  photo="ASN03"
%} 
</table>

****
{% include numberedfig.html
    lnk="/GroundForge/stitches?patchWidth=15&patchHeight=20&paintStitches=tctct&a1=ctc&b2=ctc&a3=tctct&b4=ctcrr&a5=ctctt&tile=7-,-5,B-,-C,B-,x-,x-,x-&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=2&shiftRowsSE=4"
    title="h366, topologically equivalent to Moderne Torchonspitze no 47"
    src="../images/snow_3/g-sn-half-60-1.svg"
    txt="a:"
%} 
{% include numberedfig.html
    lnk="/GroundForge/stitches?patchWidth=15&patchHeight=20&paintStitches=ctctt&c1=ctctt&a1=ctct&b2=ct&a3=ct&b4=ctr&c5=ctct&a5=ctctt&b6=ct&c7=ct&b8=ctl&tile=6-C,-5-,B--,-C-,B-2,-5-,--C,-B-&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=3&shiftRowsSE=8"
    title="h305"
    src="../images/snow_3/g-sn-half-60-2.svg"
    txt="b:"
%} 
{% include numberedfig.html
    lnk="/GroundForge/stitches?patchWidth=30&patchHeight=30&paintStitches=cttctt&i1=ctctt&g1=ctc&c1=ctc&a1=ctctt&j2=cttctt&f2=ctc&d2=ctc&i3=ctc&g3=ctcrr&c3=ctcll&a3=ctc&h4=ctc&f4=ctctt&d4=ctctt&b4=ctc&i5=ctc&e5=cttctt&a5=ctc&h6=ctcll&f6=ctc&d6=ctc&b6=ctcrr&tile=4-5x-x5-7-,x-x7-4x-x5,7-4x-x7-4-,x5-7-4-5x-,4x-x5x-x7-,x7-4-7-4x-&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=10&shiftRowsSE=6"
    title="h362 honeycomb by P. Fouché"
    src="../images/snow_3/g-sn-half-60-3.svg"
    txt="c:"
%} 
{% include numberedfig.html
    lnk="/GroundForge/stitches?patchWidth=15&patchHeight=20&paintStitches=tctct&g1=ctc&c1=ctc&a1=tctct&h2=ctc&g2=ctc&f2=ctc&d2=ctc&c2=ctc&b2=ctc&tile=5-4---7-,-21C-B86&shiftColsSW=-4&shiftRowsSW=2&shiftColsSE=4&shiftRowsSE=2"
    title="hw362"
    src="../images/snow_3/g-sn-half-45-4.svg"
    txt="d:"
 %} 
{% include numberedfig.html
    lnk="/GroundForge/stitches.html?patchWidth=15&patchHeight=20&tile=834,4x-,173,7-x&shiftColsSW=0&shiftRowsSW=4&shiftColsSE=3&shiftRowsSE=4&c1=ctcll&b1=ctc&a1=ctc&a2=lctcl&c3=ctc&b3=ctcrr&a3=ctc&a4=rctcr"
    title="hw365"
    src="../images/snow_3/g-sn-half-45-5.svg"
    txt="e:"
 %} 
{% include numberedfig.html
    lnk="/GroundForge/stitches.html?patchWidth=15&patchHeight=25&tile=7-4-,x5x-,4xx-,x7x-,4-7-,x-x5,7-xx,x-x4&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=4&shiftRowsSE=8&c1=rctct&a1=ctc&b2=ctc&a3=ctc&b4=ctc&c5=lctct&a5=ctc&d6=ctc&a7=ctc&d8=ctc"
    title="h363"
    src="../images/snow_3/g-sn-half-60-6.svg"
    txt="f:"
 %} 
 <p style="clear: both"></p>

{% include numberedfig.html
   lnk = "[t-sn-half-1]"
   title = "h366"
   src = [p-sn-half-1]
   txt="a:"
 %}  

 
 
<span>a:&nbsp;[![half little snowflake 1][p-sn-half-1]][t-sn-half-1]</span> 
<span>b:&nbsp;[![half little snowflake 2][p-sn-half-2]][t-sn-half-2]</span> 
<span>c:&nbsp;[![half little snowflake 3][p-sn-half-3]][t-sn-half-3]</span> 
<span>d:&nbsp;[![half little snowflake 4][p-sn-half-4]][t-sn-half-4]</span> 
<span>e:&nbsp;[![half little snowflake 5][p-sn-half-5]][t-sn-half-5]</span> 
<span>f:&nbsp;[![half little snowflake 6][p-sn-half-6]][t-sn-half-6]</span> 
<p style="clear: both"></p>


[p-sn-half-1]: ../images/snow_3/g-sn-half-60-1.svg "h366, topologically equivalent to Moderne Torchonspitze no 47"
[p-sn-half-2]: ../images/snow_3/g-sn-half-60-2.svg "h305"
[p-sn-half-3]: ../images/snow_3/g-sn-half-60-3.svg "h362 honeycomb by P. Fouché"
[p-sn-half-4]: ../images/snow_3/g-sn-half-45-4.svg "hw362"
[p-sn-half-5]: ../images/snow_3/g-sn-half-45-5.svg "hw365"
[p-sn-half-6]: ../images/snow_3/g-sn-half-60-6.svg "hw363"


[t-sn-half-1]: /GroundForge/stitches?patchWidth=15&patchHeight=20&paintStitches=tctct&a1=ctc&b2=ctc&a3=tctct&b4=ctcrr&a5=ctctt&tile=7-,-5,B-,-C,B-,x-,x-,x-&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=2&shiftRowsSE=4

[t-sn-half-2]: /GroundForge/stitches?patchWidth=15&patchHeight=20&paintStitches=ctctt&c1=ctctt&a1=ctct&b2=ct&a3=ct&b4=ctr&c5=ctct&a5=ctctt&b6=ct&c7=ct&b8=ctl&tile=6-C,-5-,B--,-C-,B-2,-5-,--C,-B-&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=3&shiftRowsSE=8

[t-sn-half-3]: /GroundForge/stitches?patchWidth=30&patchHeight=30&paintStitches=cttctt&i1=ctctt&g1=ctc&c1=ctc&a1=ctctt&j2=cttctt&f2=ctc&d2=ctc&i3=ctc&g3=ctcrr&c3=ctcll&a3=ctc&h4=ctc&f4=ctctt&d4=ctctt&b4=ctc&i5=ctc&e5=cttctt&a5=ctc&h6=ctcll&f6=ctc&d6=ctc&b6=ctcrr&tile=4-5x-x5-7-,x-x7-4x-x5,7-4x-x7-4-,x5-7-4-5x-,4x-x5x-x7-,x7-4-7-4x-&shiftColsSW=0&shiftRowsSW=6&shiftColsSE=10&shiftRowsSE=6

[t-sn-half-4]: /GroundForge/stitches?patchWidth=15&patchHeight=20&paintStitches=tctct&g1=ctc&c1=ctc&a1=tctct&h2=ctc&g2=ctc&f2=ctc&d2=ctc&c2=ctc&b2=ctc&tile=5-4---7-,-21C-B86&shiftColsSW=-4&shiftRowsSW=2&shiftColsSE=4&shiftRowsSE=2     

[t-sn-half-5]: /GroundForge/stitches.html?patchWidth=15&patchHeight=20&tile=834,4x-,173,7-x&shiftColsSW=0&shiftRowsSW=4&shiftColsSE=3&shiftRowsSE=4&c1=ctcll&b1=ctc&a1=ctc&a2=lctcl&c3=ctc&b3=ctcrr&a3=ctc&a4=rctcr

[t-sn-half-6]: /GroundForge/stitches.html?patchWidth=15&patchHeight=25&tile=7-4-,x5x-,4xx-,x7x-,4-7-,x-x5,7-xx,x-x4&shiftColsSW=0&shiftRowsSW=8&shiftColsSE=4&shiftRowsSE=8&c1=rctct&a1=ctc&b2=ctc&a3=ctc&b4=ctc&c5=lctct&a5=ctc&d6=ctc&a7=ctc&d8=ctc

[page-little]: ../docs/snowflakes#half-little-snowflake


***



[p-paris-lcr]: ../images/flanders2/105-1.png.png            


---
layout: default
contact: true
title: test
purpose: test only
---


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

dit is een nieuwe test: 

<img src="../images/flanders2/105-1.png">
<br>

[pdf-test]: ../documents/streched-paris.pdf

![test][svg-test]   

[svg-test]: ../images_flanders/flanders.svg

![test 2][test2]             

[test2]: ../images/bias/2111-nt.png

buttons test

<a href="../images_stitches/paris-lcr.png">
<button type="button"><img title="paris fashion" src="../images_stitches/paris-lcr.png"></button>
</a>  

{% include p-l-c.html
  src="../images/bias/2111-nt.png"
  alt="some nice ground"
  lnk="/GroundForge/tiles?patchWidth=16&patchHeight=16&a1=ctct&b1=ct&d1=ct&a2=ct&c2=ct&shiftColsSE=3&shiftRowsSE=1&shiftColsSW=-4&shiftRowsSW=1&tile=88-1,4-58"
  title="ook iets leuks"
%}  

test include met if erin, werkt nog niet goed
{% include ctr.html
  a1="ctc"
  a2="ctc"
  txt-d="diagonal"
  txt-h1="iets"
  txt-h2="iets anders"
 %} 

{% include ctr.html
  a1="cr"
  a2="ctct"
  txt-d="diagonal"
  txt-h1="iets"
  txt-h2="iets anders"
 %} 


***
[&uArr;]()


[p-paris-lcr]: ../images_stitches/paris-lcr.png            
[lijntje]: /GroundForge/tiles?patchWidth=16&patchHeight=16&a1=ctct&b1=ct&d1=ct&a2=ct&c2=ct&shiftColsSE=3&shiftRowsSE=1&shiftColsSW=-4&shiftRowsSW=1&tile=88-1,4-58



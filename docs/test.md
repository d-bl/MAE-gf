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
%} 



***
[&uArr;]()


[p-paris-lcr]: ../images/flanders2/105-1.png.png            


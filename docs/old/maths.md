---
layout: default
title: Mathematics
---

# Mathematics

## Contents
* [Introduction](#introduction)
* [Spider formula's](#spider-formulas)

## Introduction
On this page some mathematics for those who like such. Including formula in pseudo-code.

## Spider formula's
As shown in the [_spiders_][spiders-page] page, spider-matrices can be generated.      
In all formula N is the number of legs on one side. The spider will thus have 4N legs.   
Spaces have to be ingored. The sign "&" means "concatenate": "A" &amp; "B" => "AB". The "" are omitted.   
      
For the **traditional spider in a square**, the following code will do the trick.              
N>=2. Tiling is set to <span class="elem">brick</span>.      

{% include formule.html
formule="
5 &amp; (for i=1 to N: -) &amp; 5 &amp; (for i=1 to N: -)<br>
-C &amp; (for i=1 to N-2: D) &amp; 632 &amp; (for i=1 to N-2: A) &amp; B<br>
(for j=1 to N-2:<br>   
&nbsp; &nbsp;5 &amp; (for i=1 to N: 6) &amp; 3 &amp; (for i=1 to N: 2)<br>
next j)<br>
5 &amp; (for i=1 to N: 6) &amp; - &amp; (for i=1 to N: 2)
"
%}

***

[spiders-page]: ../docs/spiders#building-spiders


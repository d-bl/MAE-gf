# Mathematics

### Contents
* [Introduction](#introduction)
* [Spider formula's](#spider-formulas)
* [To big matrix](#to-big-matrix)

### Introduction
On this page some mathematics for those who like such. Including formula in pseudo-code.

### Spider formula's
As shown in the [_spiders_][spiders-page] page, spider-matrices can be generated.      
In all formula N is the number of legs on one side. The spider will thus have 4N legs.   
Spaces have to be ingored. The sign "&" means "concatenate": "A" & "B" => "AB". The "" are omitted.   
      
For the **traditional spider in a square**, the following code will do the trick.              
N>=2. Tiling is set to <span class="elem">brick</span>.      

{% include formule.html
formule="
5 & (for i=1 to N: -) & 5 & (for i=1 to N: -)<br>
-C & (for i=1 to N-2: D) & 632 & (for i=1 to N-2: A) & B<br>
(for j=1 to N-2:<br>   
&nbsp; &nbsp;5 & (for i=1 to N: 6) & 3 & (for i=1 to N: 2)<br>
next j)<br>
5 & (for i=1 to N: 6) & - & (for i=1 to N: 2)
"
%}

### To big matrix
{% include picts-right.html
  alt="to big matrix"
  src="https://maetempels.github.io/MAE-gf/images/gf-sn-nott.png"
  description="We wished to find the matrix-scheme for the crossed-snowflake-in-a-square. Just putting the snowflake in the square won't work, since the snowflake requires 11 &quot;nodes&quot;, whereas the square has 9 nodes inside. So, the square has to be enlarged. The matrix in the picture follows the rules for matrices, but the tiles are too big to handle."
%}

***

[spiders-page]: https://maetempels.github.io/MAE-gf/docs/spiders#building-spiders

[to-big-sn]: https://maetempels.github.io/MAE-gf/images/gf-sn-nott.png

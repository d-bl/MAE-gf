<style>
image.b-pic-l3 { display: inline-block; margin-right:0; margin-top:0; margin-left:0; width: 30%; }
figure.a-pic-l3 { display: inline-block; margin-right:0; margin-top:0; margin-left:0; width: 30%; }
figure figcaption { display: inline-block; margin-left:2em; width: 50%; color:red;}
    
p.a-txt-l3 { display: inline-block; margin-right:0; margin-top:0; margin-left:2em; width: 50%; color:black;}
</style>    

<body>

### kopregeltje
<p> tekst </p>

<figure>
    <img class="b-pic-l3" src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-trad.png"  alt="test">
    <figcaption>is dit een caption?</figcaption>
</figure>
<p class="a-txt-l3">wat komt hier? </p>  
    

<figure class="b-pic-l3">
    <img src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-trad.png"  alt="test">
    <figcaption>test 1</figcaption>
</figure>
<p class="a-txt-l3">en hier nog wat tekst er extra bij</p>  
    
 

{% include picts-left.html 
  class="f-pic-13"
  alt="torchon pg" 
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-trad.png" 
  content="extra tekst er bij als tekst ernaast hoop ik"
%}

</body>

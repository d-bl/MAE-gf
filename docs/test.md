<style>
img.fl { float: left; left-margin:2em;}
img.fr { float: right; }
.diagram, .break { clear: both; }
</style>

<body>



## kopregeltje
  
hier wat tekst en zo     


<figure class="diagram">
	<img class="fl" src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-kiss.png">
	<p>deze tekst komt er naast</p>
	<p class="break"></p>
</figure>

  
  
<figure class="diagram">
	<img class="fr" src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-kiss.png">
	<p>deze tekst komt er naast hoop ik</p>
	<p class="break"></p>	
</figure>
  

{% include pict-test.html
  class="fl-l"
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-kiss.png"
  description="Please note: traditionally the pagoda-ground uses a weaver which returns round the pin with two twists at the pointy bit. The example looked better not."
%}

{% include pict-test.html
  class="fl-r"
  src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-trad.png"
  description="Please note: traditionally the pagoda-ground uses a weaver which returns round the pin with two twists at the pointy bit. The example looked better not. Etc etc. Quite hard to find the hidden quotes"
%}

</body>

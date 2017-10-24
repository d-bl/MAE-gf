<style>
diagram image, img.fl { float: left; }
diagram image, img.fr { float: right; }
diagram p.fl { margin-left:2em; color: red; }
diagram p.fr { color: blue; }	
.diagram, .break { clear: both; }

dia2 p, image, img.fp { display: inline-block; margin:0; width: 30%; }

</style>

<body>
	
## kopregeltjes
  
<p class="fl"> hier wat tekst en zo erbij</p>
<p class="fr"> en hier wat tekst in zwart en groen en oranje</p>

<figure class="diagram">
	<img class="fl" src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-kiss.png">
	<p class="fl">deze tekst komt er naast</p>
	<p class="break"></p>
</figure>
  
<figure class="diagram">
	<img class="fr" src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-kiss.png">
	<p class="fr">deze tekst komt er naast hoop ik</p>
	<p class="break"></p>	
</figure>
  
<figure class="dia2">
	<img class="fp" src="https://maetempels.github.io/MAE-gf/images_wt/gf-pg-kiss.png">
	<p class="fp">beetjes</p>
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

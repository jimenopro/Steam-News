# Steam-News
Enllaç de rawgit: https://rawgit.com/PedroAmat/Steam-News/master/index.html
## Especificacions del client:

* La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.
* Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure.
* **S'ha utilitzat una imatge diferent per a cada tamany, de manera que hi ha dues imatges per la publicitat.**
* Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime). **S'ha optat per incloure només un tipus d'imatge que tendrá un tamany diferent si entram a la pàgina d'una noticia concreta o a la general.**
* Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.
## Tasques realitzades:

* S'ha realitzat la maquetació del projecte. S'inclou un breu document amb l'análisi i la planificació al README.md
* Presentat news.html amb 3 notícies (ja escrites al html, no carregat amb js) i emmagatzemat 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.
* S'ha codificat news.js en jQuery per fer: "botó carregar més notícies" i "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades.
* Inclou rss.xml
* S'ha codificat news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html.
* La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) conté una imatge i un vídeo de youtube responsive. 
* Cada pàgina conté les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina.
## Implementacions adicionals

* La pàgina conte una barra de navegació fixa a la part superior que, en cas de extendre la aplicació, serviria per accedir a categories concretes de noticies i per iniciar sessió a una compta d'usuari. Actualment, només conté un enllaç a la pàgina principal, la resta és contingut estètic.
* S'ha implementat un botó a la pàgina principal que permet tornar a al principi de la pàgina sense recarregar-la.
* La pàgina inclou un footer amb botons per compartir a Facebook, Twitter i Google+.

## Boceto de la página
<a href="https://raw.githubusercontent.com/PedroAmat/Steam-News/master/Boceto.jpg" target="_blank"><img src="https://raw.githubusercontent.com/PedroAmat/Steam-News/master/Boceto.jpg" border="0" alt="Boceto"></a>

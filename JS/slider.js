imagenes = new Array();
//Agrega tantas imágenes como necesites en el array
imagenes[0] = "image/promo.png";
imagenes[1] = "image/promo5.jpeg";
imagenes[2] = "image/promo6.jpeg";
imagenes[3] = "image/promo7.jpeg";
imagenes[4] = "image/promo8.jpeg";
siguiente = 0;

function CambiaImagen()
{
dimensiones = $(".promociones").width();
$(".promociones img").css({left: -dimensiones+"px"}).attr("src", imagenes[siguiente]);
$(".promociones img").animate({left: "+="+dimensiones});
$(".promociones a").attr("href", imagenes[siguiente]);

siguiente = siguiente+1;
if (siguiente >= imagenes.length)
{
siguiente = 0;
}
//Aquí puedes colocar el tiempo para cada transición de imagen
transicion = 4000;
setTimeout("CambiaImagen()", transicion);
}

$(function(){
CambiaImagen();
});

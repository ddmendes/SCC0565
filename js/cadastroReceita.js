var letras="abcdefghyjklmnopqrstuvwxyz";
var numeros="0123456789";

function tem_letras(texto){
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
        alert("só texto");
         return 1;
      }
   }
   return 0;
    alert("só numero");
}

function tem_numeros(texto){
       for(i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return 1;
        }
       }
   return 0;
} 



function Valida(form){
  var aux=0;
  for(i=0; i<form.nome.value.length; i++){
        if (numeros.indexOf(form.nome.value.charAt(i),0)!=-1){
                aux=1;
        }
       }

       if(aux>0){
         alert("Digite apenas letras no campo autor!");
                form.nome.focus();
       }

       aux=0;
        for(i=0; i<form.receita.value.length; i++){
        if (numeros.indexOf(form.receita.value.charAt(i),0)!=-1){
                aux=1;

        }
       }
        if(aux>0){
         alert("Digite apenas letras no campo receita!");
                form.receita.focus();
       }

       aux=0;

        for(i=0; i<form.tempo.length; i++){
        if (numeros.indexOf(form.porcoes.charAt(i),0)!=-1){
              
        } else aux=1;
       }
        if(aux>0){
         alert("Digite apenas números no campo tempo de preparo!");
                form.tempo.focus();
       }

       aux=0;

       for(i=0; i<form.porcoes.length; i++){
        if (numeros.indexOf(form.porcoes.charAt(i),0)!=-1){
              aux=1;
        }
       }
        if(aux>0){
         alert("Digite apenas números no campo porções!");
                form.porcoes.focus();
       }

       aux=0;

       for(i=0; i<form.valornutri.length; i++){
        if (numeros.indexOf(form.valornutri.charAt(i),0)!=-1){
              aux=1;
        }
       }
        if(aux>0){
         alert("Digite apenas números no campo valor nutricional!");
                form.valornutri.focus();
       }

       aux=0;

  alert("validou");
}
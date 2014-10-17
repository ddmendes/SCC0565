var letras="abcdefghyjklmnopqrstuvwxyz";
var numeros="0123456789";

function tem_letras(texto){
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
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
         alert("só letras");
        }
       }
   return 0;
} 



function Valida(form){

      var aux=0;

      texto=form.nome.value;
      aux=tem_numeros(texto);
      erro=0;

       if(aux>0){
        erro=1;
         alert("Digite apenas letras no campo autor!");
                form.nome.focus();
       } 

       aux=0;
       
       texto=form.receita.value;
       aux=tem_numeros(texto);

        if(aux>0){
          erro=1;
         alert("Digite apenas letras no campo receita!");
                form.receita.focus();
       } 

       if(form.categoria.value=="selecione"){
          erro=1;
          alert("Selecione uma categoria!")
       }
       aux=0;
       texto = form.tempo.value;
       aux = tem_letras(texto);

        if(aux>0){
          erro=1;
         alert("Digite apenas números no campo tempo de preparo!");
                form.tempo.focus();
       } 

       aux=0;
       texto = form.porcoes.value;
       aux = tem_letras(texto);

        if(aux>0){
          erro=1;
         alert("Digite apenas números no campo porções!");
                form.porcoes.focus();
       } 

       aux=0;
       texto = form.valornutri.value;
       aux = tem_letras(texto);

       if(aux>0){
        erro=1;
         alert("Digite apenas números no campo valor nutricional!");
                form.valornutri.focus();
       } 

       if(form.metodo.value=="selecione"){
          erro=1;
          alert("Selecione o método de cozimento!")
       }

       if(erro==0)
        {
          alert("Receita cadastrada com sucesso!");
        }

}
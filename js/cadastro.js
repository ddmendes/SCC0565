var numeros="0123456789";
var letras="abcdefghyjklmnopqrstuvwxyz";
var letras_maiusculas="ABCDEFGHYJKLMNOPQRSTUVWXYZ";
var especiais = "@#$%&*\/?^[]~"

	function mascara(telefone){ 
	if(telefone.value.length == 0)
     telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
	if(telefone.value.length == 3)
      telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
 
	if(telefone.value.length == 9)
     telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.
  
}


	function Up(){
		var nome  = form1.nome.value;
		var cidade = form1.cidade.value;
		
		form1.nome.value = nome.toUpperCase()
		form1.cidade.value = cidade.toUpperCase()
	
	
	}

	function Lcadstro(){
		
	
		var senha = form1.senha.value;
		var senha2 = form1.csenha.value;
		document.getElementById("resp").innerHTML = "Senhas diferentes."
		
		if(senha != senha2){
			
			document.getElementById("resp").style.display="block";
		
		}
		
		else if(senha == senha2){
			document.getElementById("resp").style.display="none";
		}
	
	}
	
	function tem_numeros(texto){
		   for(i=0; i<texto.length; i++){
			  if (numeros.indexOf(texto.charAt(i),0)!=-1){
				 return 1;
			  }
		   }
   return 0;
} 

function tem_letras(texto){
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

function tem_especiais(texto){
   texto = texto.toLowerCase();
   for(i=0; i<texto.length; i++){
      if (especiais.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}

function tem_minusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
} 


function tem_maiusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letras_maiusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
} 
	
	
	function Valida(){
		
			var senha = form1.senha.value;
			var num = tem_numeros(senha);
	
		
			
			if(senha.length < 8 ){
				document.getElementById("resp").innerHTML = "A senha deve conter pelo menos 1 letra maiúscula, 1 caractere especial, 1 digito e 1 letra minúscula."
				document.getElementById("resp").style.display="block";
				document.getElementById("btn_cad_login").disabled = true;	
				}
		
			 if(senha.length >= 8){
					
					if( tem_numeros(senha) ==1 && tem_letras(senha)==1 && tem_minusculas(senha)==1 && tem_maiusculas(senha)==1 && tem_especiais(senha)==1)
					{
					
							document.getElementById("resp").style.display="none";
							document.getElementById("btn_cad_login").disabled = false;	
							
					}
					
					
				
			
			}

	}
	
	
	function ValidaData(){
		var data = form1.datepicker.value;
		var res = data.split("/");
		var ano1 = res[2];
		var ano = parseInt(ano1);
		
				
		
				document.getElementById("resp").innerHTML = ano;
				document.getElementById("resp").style.display="block";
		
		if(ano >= 2001){
			
				document.getElementById("resp").innerHTML = "Você deve ter mais de 13 anos.";
				document.getElementById("resp").style.display="block";
				document.getElementById("btn_cad_login").disabled = true;
			
			
		}
		
		if(ano < 2001){
			
				
				document.getElementById("resp").style.display="none";
				document.getElementById("btn_cad_login").disabled = false;
			
			
		}
		
	
	}
	
	
	function Finaliza(){
		if($('form').checkValidity()) {
			$.ajax({
				url : "../control/CadastroControl.py",
				type : "post",
				datatype : "json",
				data : {
					name : $("input[name='nome']").val(),
					birthdate : $("input[name='nascimento']").val(),
					city : $("input[name='cidade']").val(),
					state : $("input[name='estado']").val(),
					phone : $("input[name='phone']").val(),
					email : $("input[name='email']").val(),
					password : $("input[name='senha']").val()
				},
				success: function(response) {
					alert("Cadastro realizado com sucesso");
					header.location("recentes.html");
				}
			});
		}
	}
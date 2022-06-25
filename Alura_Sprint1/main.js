var input=document.querySelector(".text");
var output="";
const form=document.querySelector("textInput")
const outputField=document.querySelector(".outputField")
const validChars=/[a-z-\w\D\s]/g

function encrypt () {
	if (input.value!="") {
			outputField.textContent="";
			var validArray=input.value.match(validChars);
			if(validArray!=null){
				output=input.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
				outputField.textContent=output;
				input.value="";
			} else {
				alert("Use somente letras minúsculas sem caractéres especiais");
			}
		}else {
			alert("Por favor insira algum texto")
		}
	}

function decrypt () {
	if (input.value!="") {
			outputField.textContent="";
			var validArray=input.value.match(validChars);
			if(validArray!=null){
				output=input.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
				outputField.textContent=output;
				input.value="";
			} else {
			alert("Use somente letras minúsculas sem caractéres especiais");
				}
		}else {
			alert("Por favor insira algum texto")
		}
	}

var criptoButton = document.querySelector('#cripto')
criptoButton.addEventListener('click',encrypt)

var deCriptoButton = document.querySelector('#decripto')
deCriptoButton.addEventListener('click',decrypt)

var copyButton = document.querySelector('#copy')
copyButton.addEventListener('click',function() {
		navigator.clipboard.writeText(output);
})

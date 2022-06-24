var input=document.querySelector("#text");
var output="";
const form=document.querySelector("textInput")
const outputField=document.querySelector(".outputField")
const illegalChar=/[A-Z-\W\d]/g

function encrypt () {
	outputField.textContent="";
	var illegalArray=input.value.match(illegalChar);
	if(illegalArray==null){
		output=input.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
		outputField.textContent=output;
		input.value="";
	} else {
		alert("Use somente letras minúsculas sem caractéres especiais");
	}
}

function decrypt () {
	outputField.textContent="";
	var illegalArray=input.value.match(illegalChar);
	if(illegalArray==null){
		output=input.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
		outputField.textContent=output;
		input.value="";
	} else {
	alert("Use somente letras minúsculas sem caractéres especiais");
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

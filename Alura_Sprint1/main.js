var input=document.querySelector(".text");
var output="";
const outputField=document.querySelector(".outputField")
const validChars=/[a-z\s]/g
const warningMsg=document.querySelector("#warning");

function encrypt () {
	if (input.value!="") {
			outputField.textContent="";
			var validArray=input.value.match(validChars);
			if(validArray!=null){
				updateErrorMsg(3)
				output=input.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
				outputField.textContent=output;
				input.value="";
			} else {
				updateErrorMsg(1)
			}
		}else {
			updateErrorMsg(2)
		}
	}

function decrypt () {
	if (input.value!="") {
			outputField.textContent="";
			var validArray=input.value.match(validChars);
			if(validArray!=null){
				updateErrorMsg(3)
				output=input.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
				outputField.textContent=output;
				input.value="";
			} else {
				updateErrorMsg(1)
				}
		}else {
			updateErrorMsg(2)
		}
	}

function updateErrorMsg(caseType) {
	if (caseType==1) {
		warningMsg.textContent="Use somente letras minúsculas sem caractéres especiais"
		warningMsg.classList.add("txt-2")
	}else if (caseType==2) {
		warningMsg.textContent="Por favor insira algum texto"
		warningMsg.classList.add("txt-2")
	}else {
		warningMsg.textContent=""
	}
}

input.addEventListener('input',function (event) {
		if (event.data!=null) {
			var placeHolder=document.querySelector('#img')
			placeHolder.classList.remove("img")
			placeHolder.classList.add("hidden")
		}else if (input.value=="") {
			var placeHolder=document.querySelector('#img')
			placeHolder.classList.remove("hidden")
			placeHolder.classList.add("img")
		}
	}
)

var criptoButton = document.querySelector('#cripto')
criptoButton.addEventListener('click',encrypt)

var deCriptoButton = document.querySelector('#decripto')
deCriptoButton.addEventListener('click',decrypt)

var copyButton = document.querySelector('#copy')
copyButton.addEventListener('click',function() {
		navigator.clipboard.writeText(output);
})

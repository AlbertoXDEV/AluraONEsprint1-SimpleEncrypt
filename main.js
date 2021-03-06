var input=document.querySelector(".text");
var output="";
const outputField=document.querySelector(".outputField")
const invalidChars=/[^a-z\s]/g
const warningMsg=document.querySelector("#warning");
const secondPH=document.querySelector(".output-ph")
function encrypt () {
	if (input.value!="") {
			outputField.textContent="";
			var invalidArray=input.value.match(invalidChars);
			if(invalidArray==null){
				updateErrorMsg(3)
				output=input.value.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
				outputField.textContent=output;
				input.value="";
				secondPH.classList.add("hidden");
			} else {
				secondPH.classList.remove("hidden");
				updateErrorMsg(1)
			}
		}else {
			secondPH.classList.remove("hidden");
			updateErrorMsg(2)
		}
	}

function decrypt () {
	if (input.value!="") {
			outputField.textContent="";
			var invalidArray=input.value.match(invalidChars);
			if(invalidArray==null){
				updateErrorMsg(3)
				output=input.value.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
				outputField.textContent=output;
				input.value="";
				secondPH.classList.add("hidden");
			} else {
				updateErrorMsg(1)
				secondPH.classList.remove("hidden");
				}
		}else {
			secondPH.classList.remove("hidden");
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
		var placeHolder=document.querySelector('#placeholder');
		if (event.data!=null) {
			placeHolder.classList.remove("placeholder")
			placeHolder.classList.add("hidden")
		}else if (input.value=="") {
			placeHolder.classList.remove("hidden")
			placeHolder.classList.add("placeholder")
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

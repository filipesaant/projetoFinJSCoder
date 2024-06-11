const comCarencia = document.querySelector("#comCarencia");
const listaSusp = document.querySelector('#listaSusp');

comCarencia.addEventListener("change",function(){
    if(this.checked){
        listaSusp.removeAttribute('hidden');
    } else{
        listaSusp.setAttribute('hidden', 'hidden');
    }
});
const elemento = document.getElementById("checkin");
const elemento2 = document.getElementById("checkout");

var hoje  = new Date();

function atualizaDataMin() {

    var dia = hoje.getDate();
    var mes = hoje.getMonth() + 1;
    var ano = hoje.getFullYear();
    if(dia<10){
        dia='0'+dia;
    } 
    if(mes<10){
        mes='0'+mes
    } 
    var str_data = `${ano}-${mes}-${dia}`;

    elemento.setAttribute('min',str_data);
    elemento2.setAttribute('min',str_data);
}


atualizaDataMin();



const cargandoqr = document.getElementById('cargandoqr');
const formqr = document.getElementById('formqr');


formqr.addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("qrcode").innerHTML = "";
    let inputqr = document.getElementById('inputqr').value;
    formqr.reset();
    cargandoqr.style.display = 'block';
    generarQR(inputqr);
    cargandoqr.style.display = 'none';

});

function generarQR(url){
    const qrcode = new QRCode(document.getElementById("qrcode"),{
        text: url,
        width: 128,
        height: 128,
    });
}
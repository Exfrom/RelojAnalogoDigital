const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');
const relojDigital = document.getElementById('reloj-digital-display');

function actualizarRelojAnalogico() {
    let tiempo = new Date();
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr) + (min / 12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
}

function actualizarRelojDigital() {
    let tiempo = new Date();
    let horas = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
    let ampm = horas >= 12 ? 'PM' : 'AM';

    horas = horas % 12;
    horas = horas ? horas : 12; // Hora 0 debería mostrar como 12

    let horaDigital = `${horas}:${agregarCeros(minutos)}:${agregarCeros(segundos)} ${ampm}`;
    relojDigital.textContent = horaDigital;
}

function agregarCeros(tiempo) {
    return tiempo < 10 ? '0' + tiempo : tiempo;
}

setInterval(actualizarRelojAnalogico, 1); // Actualizar reloj analógico cada segundo
setInterval(actualizarRelojDigital, 1); // Actualizar reloj digital cada segundo

const horas = document.getElementById("horas");

const segundos = document.getElementById("segundos");

const minutos = document.getElementById("minutos");


setInterval(() => {
    const dateToday= new Date();

    let hr = dateToday.getHours();
    let mim = dateToday.getMinutes();
    let seg = dateToday.getSeconds();


if (seg <10)seg="0"+seg
if (mim <10)mim="0"+mim
if (hr <10)seg="0"+hr

    horas.textContent= hr
    minutos.textContent= mim   
    segundos.textContent= seg
}, 1);


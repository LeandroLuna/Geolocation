const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

//navigator.geolocation.getCurrentPosition = Activa a função somente 1x.
navigator.geolocation.watchPosition(
    (data) => {
        speed.textContent = Math.round(data.coords.speed);
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    (err) => {
        console.error(err);
        alert('YOU GOTTA ALLOW THAT TO HAPPEN!!');
    }
);
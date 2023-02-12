const image1 = document.getElementById("image1");
const image5 = document.getElementById("image5");

const cargarImage = (entradas, observador) => {
//     console.log(entradas)
//     console.log(observador)

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            entrada.target.classList.add("visible");
        }
        else {
            entrada.target.classList.remove("visible");
        }
    });
}

const observador = new IntersectionObserver(cargarImage, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
})

observador.observe(image1)
observador.observe(image2)
observador.observe(image3)
observador.observe(image4)
observador.observe(image5)

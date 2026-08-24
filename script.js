const btn_md = document.getElementById("btn_md");
const darkd = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (darkd) {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.add("light-theme");
}

btn_md.addEventListener("click", () => {
    if(document.body.classList.contains('dark-theme')) {
    document.body.classList.replace('dark-theme', 'light-theme');
    } else {
        document.body.classList.replace('light-theme', 'dark-theme');
    }
});

const dialogo = document.getElementById("Sobre");
const boton_cerrar = document.getElementById("btnCerrarDialog");
const abrirDiag = document.getElementById("p_ico");
const slp = document.querySelector(".sobrelapagina");

abrirDiag.addEventListener("click", () => {
    dialogo.showModal();
})

boton_cerrar.addEventListener("click", () => {
    dialogo.close();
})

dialogo.addEventListener("click", (e) => {
    if(!slp.contains(e.target)){
        dialogo.close();
    }
});


const hist = [
    "En las riberas del río Paraná, vivía una joven llamada Anahí. Ella no era hermosa de rostro, pero cantaba con una dulzura única en los montes. Cuando llegaron los conquistadores, Anahí defendió su tierra con valentía, pero fue apresada. Una noche logró escapar tras herir a un guardia, sin embargo, la descubrieron. Los hombres la condenaron a morir en la hoguera atada a un árbol. Las llamas rodearon su cuerpo y, al amanecer, el árbol apareció cubierto de hermosas flores rojas y aterciopeladas, rindiendo homenaje al valor y la transformación de la joven.",
    "En el campo argentino se cuenta que el séptimo hijo varón de una familia, al llegar a cierta edad, sufre una maldición las noches de martes y viernes de luna llena. El joven se aleja de la casa, se tira al suelo y da tres vueltas de carnero mientras invoca fuerzas oscuras. Así, se transforma en un enorme perro negro de ojos brillantes o en un hombre lobo que vaga por los montes asustando a los animales. Al amanecer, vuelve a tomar su forma humana, cansado y sin recordar nada de lo que hizo durante la noche.",
    "Cuenta una vieja creencia oriental que los dioses atan un hilo rojo invisible alrededor del dedo meñique de las manos de aquellas personas que están destinadas a encontrarse. Este hilo mágico nunca se rompe, aunque se estire o se enrede con otros. No importa el tiempo que pase, ni los lugares donde vivan los dos; las personas unidas por este hilo están predestinadas a cruzarse y vivir una historia que cambiará sus vidas para siempre.",
    "Que onda wachines, cómo andan. No se me ocurre nada, asi que para allá! Sí, han sido troleados xxdxdxdx. Pero bueno, gente, como no se me ha ocurrido nada, temo que toca la de 'para la próxima ver.' o 'comming soon' xxdxdx. Bueno, hasta ahora disfruten del gran cambio que es la 0.3 a la 0.4, osea, no tanto sjsjs. Pero, quiero decirles una cosa, y es que si llegan a tener una tostadora que no les corre ni su propio windows viejo, mejor no visiten esta página web porque ni a palo... Osea, tampoco es que mi web sea igual de consume-recursos que cualquier otra moderna en esta época, pero, tengo varias cosas que generan errores de compatibilidad en cualquier versión antigua de cualquier navegador. Así que sepan entender el por qué algunas cosas se pueden romper. Bueno, alta biblia puse así que me callo y seguimos enserio..." 
]
const hist_nmr = [
    "Leyenda 1",
    "Leyenda 2",
    "Leyenda 3",
    "Texto 4"
]
const p2_h = [
    "(La leyenda de Flor de Ceibo).",
    "(La leyenda del Lobizón).",
    "(La leyenda del Hilo Rojo).",
    "(Soy un pelotudo)."
]

let index = 0;

function change() {
    document.getElementById("hist").textContent = hist[index];
    document.getElementById("hist_nmr").textContent = hist_nmr[index];
    document.getElementById("p2_h").textContent = p2_h[index];
}

document.getElementById("Sig").addEventListener("click", function() {
    index++;
    if (index >= hist.length) {
        index = 0;
    }
    change();
})

document.getElementById("Atrs").addEventListener("click", function() {
    index--;
    if (index < 0) {
        index = hist.length - 1;
    }
    change();
})


document.getElementById("preg").addEventListener("click", function() {
    alert("El sistema detectó que esta página contiene una 'leyenda' que no es leyenda. Le pedimos amablemente, que no se lo tome en serio, porque... Al autor no se le ha ocurrido qué poner para no seguir copiando y pegando. Esperemos que, el objetivo pueda seguir siendo claro y le ayude en algo.")
})

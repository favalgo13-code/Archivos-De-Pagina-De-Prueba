const hist = [
    "En las riberas del río Paraná, vivía una joven llamada Anahí. Ella no era hermosa de rostro, pero cantaba con una dulzura única en los montes. Cuando llegaron los conquistadores, Anahí defendió su tierra con valentía, pero fue apresada. Una noche logró escapar tras herir a un guardia, sin embargo, la descubrieron. Los hombres la condenaron a morir en la hoguera atada a un árbol. Las llamas rodearon su cuerpo y, al amanecer, el árbol apareció cubierto de hermosas flores rojas y aterciopeladas, rindiendo homenaje al valor y la transformación de la joven.",
    "En el campo argentino se cuenta que el séptimo hijo varón de una familia, al llegar a cierta edad, sufre una maldición las noches de martes y viernes de luna llena. El joven se aleja de la casa, se tira al suelo y da tres vueltas de carnero mientras invoca fuerzas oscuras. Así, se transforma en un enorme perro negro de ojos brillantes o en un hombre lobo que vaga por los montes asustando a los animales. Al amanecer, vuelve a tomar su forma humana, cansado y sin recordar nada de lo que hizo durante la noche.",
    "Cuenta una vieja creencia oriental que los dioses atan un hilo rojo invisible alrededor del dedo meñique de las manos de aquellas personas que están destinadas a encontrarse. Este hilo mágico nunca se rompe, aunque se estire o se enrede con otros. No importa el tiempo que pase, ni los lugares donde vivan los dos; las personas unidas por este hilo están predestinadas a cruzarse y vivir una historia que cambiará sus vidas para siempre.",
    "Cuenta la leyenda... Que cuando el pdj de mi primo instaló 'My Femboy Roommate' pensado que era un juego inocente, le terminó apareciendo el Dios en la casa para cortarle la vrg por put0... Y desde ese entonces, el Carlitos perdió los huevos. Y, se volvió Gay porque no tiene poronguín, ¡QUÉ FLIPO, CANGREJOS! pero es malo hasta para eso porque encima ni novio tiene el bobo, que pdj. Pero bueno, dejándonos de leyendas raras que no tienen que existir, pasemos a lo siguiente, para no quedar tan extraño."
]
const hist_nmr = [
    "Leyenda 1",
    "Leyenda 2",
    "Leyenda 3",
    "Leyenda 4"
]
const p2_h = [
    "(La leyenda de Flor de Ceibo).",
    "(La leyenda del Lobizón).",
    "(La leyenda del Hilo Rojo)",
    "(La leyenda de mi primo pdj)."
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
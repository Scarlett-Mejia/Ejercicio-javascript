let boton = document.getElementById("Saludar")

boton.addEventListener("click", function(){
    let nombre =document.getElementById("nombre").value;

    if(nombre.trim() ==="") { 
        document.getElementById("resultado").textContent =
        "Por favor, escribe tu nombre.";
    } else {
        document.getElementById("resultado").textContent =
        "¡Hola," + nombre + "! Bienvenido a la programación.";
}
});
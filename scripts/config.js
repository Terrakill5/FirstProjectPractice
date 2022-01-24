function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; //+convierte a numero
    //event.target es el boton, pero no se sabe que boton fue presionado
    //se usa el atributo .dataset.playerid usado en el html para identificarlo
    playerConfigOverlay.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
    event.preventDefault(); //previene que la pagina mande informacion al servidor
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim();//get obtiene el value de algun input en el form
    //para reconocer que input debe extraer informacion se usa el name del input
    //trim() quita los espacios antes y luego de algo escrito, sino encuentra nada devuelve vacio
    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Please enter a valid name!";
        return; //detiene la funcion y regresa
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}
//FormData() es una funcion que, una vez le pasas el apuntador
//de algun form en el html, tomara la informacion que hizo "submit"
//se usa en este caso para tomar los datos antes de llevarlos al servidor
//y asi usarlos en el mismo frontend


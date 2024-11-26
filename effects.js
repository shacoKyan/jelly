document.addEventListener("click", function (event) {
    const heartContainer = document.getElementById("heart-container");
  
    // Crear un nuevo corazón
    const heart = document.createElement("div");
    heart.className = "heart";
  
    // Posicionar el corazón donde se hizo clic
    heart.style.left = `${event.pageX}px`;
    heart.style.top = `${event.pageY}px`;
  
    // Agregar el corazón al contenedor
    heartContainer.appendChild(heart);
  
    // Eliminar el corazón después de 3 segundos
    setTimeout(() => {
      heart.remove();
    }, 3000);
  });
  
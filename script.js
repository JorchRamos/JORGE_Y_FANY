// Función para crear corazones cayendo
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";  // Posición horizontal aleatoria
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Duración de la animación aleatoria
    heart.style.animationDelay = Math.random() * 5 + "s"; // Retraso de la animación aleatoria
    document.body.appendChild(heart);
  
    // Eliminar el corazón después de que termine la animación
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
  
  // Generar corazones en intervalos
  setInterval(createHeart, 500);
  
  // Efecto de mensaje que se escribe letra por letra
  const message = "Yo No Pido Demasiado Para Esta Navidad,No Me Importa Los Regalos Si A Mi Lado Tu Estas. Solo A Ti Te Necesito Para Poder Celebrar.";
  let i = 0;
  const element = document.getElementById("message");
  
  // Función para calcular la velocidad de escritura del mensaje
  function calculateWritingSpeed() {
    const audio = document.getElementById("myAudio");
    const songDuration = audio.duration; // Duración de la canción en segundos
    const totalChars = message.length;
    const speed = (songDuration / totalChars) * 1000; // Tiempo por letra en milisegundos
  
    // Reducir el tiempo para que las letras vayan más rápido
    const fasterSpeed = speed * 0.1; // Este factor ajusta la velocidad (puedes probar con diferentes valores)
    return fasterSpeed;
  }
  
  // Función para escribir el mensaje
  function typeMessage() {
    const speed = calculateWritingSpeed();
    if (i < message.length) {
      element.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeMessage, speed);  // Ajusta la velocidad de escritura según la duración de la canción
    }
  }
  
  // Iniciar la escritura del mensaje al cargar la página y la canción
  window.onload = function() {
    // Reproducir la canción automáticamente al abrir la página
    var audio = document.getElementById("myAudio");
    audio.play();
  
    // Iniciar la escritura del mensaje
    typeMessage();
  };
  
  // Función para reproducir el audio manualmente cuando se hace clic en el botón
  function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }
  
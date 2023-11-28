function displayTime() {
    const date = new Date();
    const options = { timeZone: 'America/Lima', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const timeString = date.toLocaleTimeString('es-PE', options);
    document.getElementById('clock').innerText = timeString;
  }
  
  // Actualizar la hora cada segundo
  setInterval(displayTime, 1000);
  
  // Mostrar la hora al cargar la página
  displayTime();
  
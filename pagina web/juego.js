const Character = {
    Pet: {
      name: "Nevado",
      age: 8,
      friend: {
        name: "Antonio José de Sucre",
        age: 35,
        wife: {
          name: "Manuela Saenz",
          age: 59,
          husband: {
            name: "Simon Bolivar",
            age: 47,
          },
        },
      },
    },
  };
  
  let score = 0;
  
  function startingGame() {
    alert("Welcome");
    alert("Estás listo para jugar");
    alert("Solo tienes 4 oportunidades. No los dejes morir");
    FirstQuestion();
    secondQuestion();
    thirdQuestion();
    quarterQuestion();
  
    alert("Tu puntaje final es: " + score);
  }
  
  function FirstQuestion() {
    alert("Batalla de Carabobo, 1821. Enfrentamiento entre el ejército realista a cargo del mariscal de Campo Miguel de la Torre y del ejército republicano, liderado por el General en Jefe Simón Bolívar.");
    alert("Tienes la oportunidad de salvarlo");
    alert("Se trata de tu amigo");
    alert("Deberías obligarlo a quedarse en el campamento.");
    questionOne();
  }
  
  function questionOne() {
    alert("A quien deberías decírselo?");
    alert("Selecciona 1 si quieres a la esposa que venga al campamento, Selecciona 2 si quieres a su amigo para que pueda convencerlo de que se quede.");
    let firstQuestion = prompt("Selecciona tu respuesta");
    if (firstQuestion == "2") {
      alert("Felicitaciones has logrado salvarlo, te quedan 3 preguntas.");
      score++;
    } else {
      alert("Respuesta incorrecta. Has perdido a tu amigo.");
      delete Character.Pet.friend;
      console.log(Character.Pet.friend);
    }
  }
  
  function secondQuestion() {
    alert("Simón Bolívar y Manuela Sáenz se han separado temporalmente para realizar tareas estratégicas en el campo de batalla. ");
    alert("Tienes la oportunidad de salvarlo");
    questionTwo();
  }
  
  function questionTwo() {
    alert("Manuela está en una posición vulnerable y corre peligro. ");
    alert("¿Cómo puede Antonio asegurarse de que Manuela permanezca a salvo?");
    alert("Selecciona 1 Pedir a Bolívar que venga a proteger a Manuela., Selecciona 2  Enviar a Nevado (la mascota) como mensajero para advertir a Manuela.");
    let secondQuestionQuestion = prompt("Selecciona tu respuesta");
    if (secondQuestionQuestion == "2") {
      alert("Felicitaciones has logrado salvarla, te quedan 2 preguntas.");
      score++;
      alert("Sigue por un buen camino. Tu puntaje actual es: " + score);
    } else {
      alert("Respuesta incorrecta. Manuela está en peligro.");
      delete Character.Pet;
      console.log(Character.Pet);
    }
  }
  
  function thirdQuestion() {
    alert("Durante una reunión diplomática, Manuela Sáenz es envenenada. ");
    alert("Tienes la oportunidad de salvarlo");
    questionThree();
  }
  
  function questionThree() {
    alert(" ¿Cómo puede Antonio salvarla?");
    alert("Selecciona 1: Esperar a que muera Manuela., Selecciona 2: Enviar a Manuela a un lugar seguro., Selecciona 3: Identificar al envenenador y detenerlo., Selecciona 4:Decir a Antonio que buscaque rápidamente un antídoto.");
    let thirdQuestionQuestion = prompt("Selecciona tu respuesta");
    if (thirdQuestionQuestion == "4") {
      alert("Felicitaciones has logrado salvarla, te queda 1 pregunta.");
      score++;
      alert("Sigue por un buen camino. Tu puntaje actual es: " + score);
    } else {
      alert("Respuesta incorrecta. Manuela está envenenada.");
      delete Character.Pet.friend;
      console.log(Character.Pet.friend);
    }
  }
  
  function quarterQuestion() {
    alert("El campamento donde se encuentran Bolívar y Manuela está rodeado por fuerzas enemigas.");
    alert("Tienes la oportunidad de salvarlo");
    questionFour();
  }
  
  function questionFour() {
    alert(" ¿Cuál sería la táctica más eficaz para escapar sin ser detectados?");
    alert("Selecciona 1: Crear una distracción y escapar sigilosamente., Selecciona 2: Esperar a que oscurezca y luego deslizarse fuera del campamento., Selecciona 3: Disfrazarse como soldados enemigos para pasar desapercibidos.");
    let quarterQuestionQuestion = prompt("Selecciona tu respuesta");
    if (quarterQuestionQuestion == "2") {
      alert("Felicitaciones has GANADO.");
      score++;
      alert("Tu puntaje final es: " + score);
    } else {
      alert("Respuesta incorrecta. No lograste salvarlos.");
      delete Character.Pet.friend.wife.husband;
      console.log(Character.Pet.friend.wife.husband);
    }
  }
  
  startingGame();

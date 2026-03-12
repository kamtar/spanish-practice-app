export interface WordEntry {
  word: string;
  base?: string; // base/infinitive form if the word is inflected
}

export interface Phrase {
  id: number;
  spanish: WordEntry[];
  english: string;
}

const phrases: Phrase[] = [
  {
    id: 1,
    spanish: [
      { word: "Yo" },
      { word: "como", base: "comer" },
      { word: "una" },
      { word: "manzana" },
    ],
    english: "I eat an apple.",
  },
  {
    id: 2,
    spanish: [
      { word: "Él" },
      { word: "bebe", base: "beber" },
      { word: "agua" },
    ],
    english: "He drinks water.",
  },
  {
    id: 3,
    spanish: [
      { word: "Ella" },
      { word: "habla", base: "hablar" },
      { word: "español" },
    ],
    english: "She speaks Spanish.",
  },
  {
    id: 4,
    spanish: [
      { word: "Nosotros" },
      { word: "vivimos", base: "vivir" },
      { word: "en" },
      { word: "Madrid" },
    ],
    english: "We live in Madrid.",
  },
  {
    id: 5,
    spanish: [
      { word: "Tú" },
      { word: "tienes", base: "tener" },
      { word: "un" },
      { word: "perro" },
    ],
    english: "You have a dog.",
  },
  {
    id: 6,
    spanish: [
      { word: "Ellos" },
      { word: "trabajan", base: "trabajar" },
      { word: "mucho" },
    ],
    english: "They work a lot.",
  },
  {
    id: 7,
    spanish: [
      { word: "Yo" },
      { word: "soy", base: "ser" },
      { word: "estudiante" },
    ],
    english: "I am a student.",
  },
  {
    id: 8,
    spanish: [
      { word: "Ella" },
      { word: "está", base: "estar" },
      { word: "bien" },
    ],
    english: "She is well.",
  },
  {
    id: 9,
    spanish: [
      { word: "¿Cómo" },
      { word: "te" },
      { word: "llamas", base: "llamarse" },
      { word: "?" },
    ],
    english: "What is your name?",
  },
  {
    id: 10,
    spanish: [
      { word: "Me" },
      { word: "llamo", base: "llamarse" },
      { word: "Juan" },
    ],
    english: "My name is Juan.",
  },
  {
    id: 11,
    spanish: [
      { word: "¿Cuántos" },
      { word: "años" },
      { word: "tienes", base: "tener" },
      { word: "?" },
    ],
    english: "How old are you?",
  },
  {
    id: 12,
    spanish: [
      { word: "Tengo", base: "tener" },
      { word: "veinte" },
      { word: "años" },
    ],
    english: "I am twenty years old.",
  },
  {
    id: 13,
    spanish: [
      { word: "¿Dónde" },
      { word: "vives", base: "vivir" },
      { word: "?" },
    ],
    english: "Where do you live?",
  },
  {
    id: 14,
    spanish: [
      { word: "Vivo", base: "vivir" },
      { word: "en" },
      { word: "Barcelona" },
    ],
    english: "I live in Barcelona.",
  },
  {
    id: 15,
    spanish: [
      { word: "El" },
      { word: "niño" },
      { word: "juega", base: "jugar" },
      { word: "en" },
      { word: "el" },
      { word: "parque" },
    ],
    english: "The boy plays in the park.",
  },
  {
    id: 16,
    spanish: [
      { word: "La" },
      { word: "niña" },
      { word: "lee", base: "leer" },
      { word: "un" },
      { word: "libro" },
    ],
    english: "The girl reads a book.",
  },
  {
    id: 17,
    spanish: [
      { word: "Nosotros" },
      { word: "comemos", base: "comer" },
      { word: "juntos" },
    ],
    english: "We eat together.",
  },
  {
    id: 18,
    spanish: [
      { word: "Yo" },
      { word: "quiero", base: "querer" },
      { word: "café" },
    ],
    english: "I want coffee.",
  },
  {
    id: 19,
    spanish: [
      { word: "Ella" },
      { word: "escribe", base: "escribir" },
      { word: "una" },
      { word: "carta" },
    ],
    english: "She writes a letter.",
  },
  {
    id: 20,
    spanish: [
      { word: "Él" },
      { word: "lee", base: "leer" },
      { word: "el" },
      { word: "periódico" },
    ],
    english: "He reads the newspaper.",
  },
  {
    id: 21,
    spanish: [
      { word: "Los" },
      { word: "estudiantes" },
      { word: "estudian", base: "estudiar" },
      { word: "español" },
    ],
    english: "The students study Spanish.",
  },
  {
    id: 22,
    spanish: [
      { word: "Mi" },
      { word: "madre" },
      { word: "cocina", base: "cocinar" },
      { word: "la" },
      { word: "cena" },
    ],
    english: "My mother cooks dinner.",
  },
  {
    id: 23,
    spanish: [
      { word: "El" },
      { word: "tren" },
      { word: "llega", base: "llegar" },
      { word: "tarde" },
    ],
    english: "The train arrives late.",
  },
  {
    id: 24,
    spanish: [
      { word: "Ella" },
      { word: "camina", base: "caminar" },
      { word: "al" },
      { word: "trabajo" },
    ],
    english: "She walks to work.",
  },
  {
    id: 25,
    spanish: [
      { word: "Vosotros" },
      { word: "habláis", base: "hablar" },
      { word: "muy" },
      { word: "rápido" },
    ],
    english: "You all speak very fast.",
  },
  {
    id: 26,
    spanish: [
      { word: "Yo" },
      { word: "abro", base: "abrir" },
      { word: "la" },
      { word: "ventana" },
    ],
    english: "I open the window.",
  },
  {
    id: 27,
    spanish: [
      { word: "El" },
      { word: "gato" },
      { word: "duerme", base: "dormir" },
      { word: "en" },
      { word: "el" },
      { word: "sofá" },
    ],
    english: "The cat sleeps on the sofa.",
  },
  {
    id: 28,
    spanish: [
      { word: "Tú" },
      { word: "hablas", base: "hablar" },
      { word: "inglés" },
      { word: "bien" },
    ],
    english: "You speak English well.",
  },
  {
    id: 29,
    spanish: [
      { word: "Ellas" },
      { word: "van", base: "ir" },
      { word: "al" },
      { word: "supermercado" },
    ],
    english: "They go to the supermarket.",
  },
  {
    id: 30,
    spanish: [
      { word: "Yo" },
      { word: "voy", base: "ir" },
      { word: "a" },
      { word: "la" },
      { word: "escuela" },
    ],
    english: "I go to school.",
  },
  {
    id: 31,
    spanish: [
      { word: "¿Tienes", base: "tener" },
      { word: "hambre" },
      { word: "?" },
    ],
    english: "Are you hungry?",
  },
  {
    id: 32,
    spanish: [
      { word: "Sí" },
      { word: "tengo", base: "tener" },
      { word: "mucha" },
      { word: "sed" },
    ],
    english: "Yes, I am very thirsty.",
  },
  {
    id: 33,
    spanish: [
      { word: "El" },
      { word: "café" },
      { word: "está", base: "estar" },
      { word: "caliente" },
    ],
    english: "The coffee is hot.",
  },
  {
    id: 34,
    spanish: [
      { word: "La" },
      { word: "leche" },
      { word: "es", base: "ser" },
      { word: "blanca" },
    ],
    english: "The milk is white.",
  },
  {
    id: 35,
    spanish: [
      { word: "Yo" },
      { word: "necesito", base: "necesitar" },
      { word: "un" },
      { word: "médico" },
    ],
    english: "I need a doctor.",
  },
  {
    id: 36,
    spanish: [
      { word: "¿Dónde" },
      { word: "está", base: "estar" },
      { word: "el" },
      { word: "baño" },
      { word: "?" },
    ],
    english: "Where is the bathroom?",
  },
  {
    id: 37,
    spanish: [
      { word: "El" },
      { word: "baño" },
      { word: "está", base: "estar" },
      { word: "a" },
      { word: "la" },
      { word: "derecha" },
    ],
    english: "The bathroom is on the right.",
  },
  {
    id: 38,
    spanish: [
      { word: "Yo" },
      { word: "pago", base: "pagar" },
      { word: "con" },
      { word: "tarjeta" },
    ],
    english: "I pay by card.",
  },
  {
    id: 39,
    spanish: [
      { word: "Ella" },
      { word: "compra", base: "comprar" },
      { word: "ropa" },
      { word: "nueva" },
    ],
    english: "She buys new clothes.",
  },
  {
    id: 40,
    spanish: [
      { word: "Él" },
      { word: "vende", base: "vender" },
      { word: "flores" },
    ],
    english: "He sells flowers.",
  },
  {
    id: 41,
    spanish: [
      { word: "Nosotros" },
      { word: "estudiamos", base: "estudiar" },
      { word: "cada" },
      { word: "día" },
    ],
    english: "We study every day.",
  },
  {
    id: 42,
    spanish: [
      { word: "¿A" },
      { word: "qué" },
      { word: "hora" },
      { word: "comes", base: "comer" },
      { word: "?" },
    ],
    english: "What time do you eat?",
  },
  {
    id: 43,
    spanish: [
      { word: "Como", base: "comer" },
      { word: "a" },
      { word: "las" },
      { word: "dos" },
    ],
    english: "I eat at two o'clock.",
  },
  {
    id: 44,
    spanish: [
      { word: "Los" },
      { word: "lunes" },
      { word: "voy", base: "ir" },
      { word: "al" },
      { word: "gimnasio" },
    ],
    english: "On Mondays I go to the gym.",
  },
  {
    id: 45,
    spanish: [
      { word: "Yo" },
      { word: "escucho", base: "escuchar" },
      { word: "música" },
    ],
    english: "I listen to music.",
  },
  {
    id: 46,
    spanish: [
      { word: "Ella" },
      { word: "canta", base: "cantar" },
      { word: "muy" },
      { word: "bien" },
    ],
    english: "She sings very well.",
  },
  {
    id: 47,
    spanish: [
      { word: "Ellos" },
      { word: "bailan", base: "bailar" },
      { word: "salsa" },
    ],
    english: "They dance salsa.",
  },
  {
    id: 48,
    spanish: [
      { word: "¿Tienes", base: "tener" },
      { word: "un" },
      { word: "lápiz" },
      { word: "?" },
    ],
    english: "Do you have a pencil?",
  },
  {
    id: 49,
    spanish: [
      { word: "No" },
      { word: "tengo", base: "tener" },
      { word: "bolígrafo" },
    ],
    english: "I don't have a pen.",
  },
  {
    id: 50,
    spanish: [
      { word: "El" },
      { word: "cielo" },
      { word: "es", base: "ser" },
      { word: "azul" },
    ],
    english: "The sky is blue.",
  },
  {
    id: 51,
    spanish: [
      { word: "La" },
      { word: "hierba" },
      { word: "es", base: "ser" },
      { word: "verde" },
    ],
    english: "The grass is green.",
  },
  {
    id: 52,
    spanish: [
      { word: "Las" },
      { word: "manzanas" },
      { word: "son", base: "ser" },
      { word: "rojas" },
    ],
    english: "The apples are red.",
  },
  {
    id: 53,
    spanish: [
      { word: "Yo" },
      { word: "duermo", base: "dormir" },
      { word: "ocho" },
      { word: "horas" },
    ],
    english: "I sleep eight hours.",
  },
  {
    id: 54,
    spanish: [
      { word: "Tú" },
      { word: "te" },
      { word: "despiertas", base: "despertarse" },
      { word: "tarde" },
    ],
    english: "You wake up late.",
  },
  {
    id: 55,
    spanish: [
      { word: "Ella" },
      { word: "se" },
      { word: "lava", base: "lavarse" },
      { word: "las" },
      { word: "manos" },
    ],
    english: "She washes her hands.",
  },
  {
    id: 56,
    spanish: [
      { word: "Yo" },
      { word: "me" },
      { word: "llamo", base: "llamarse" },
      { word: "María" },
    ],
    english: "My name is María.",
  },
  {
    id: 57,
    spanish: [
      { word: "¿De" },
      { word: "dónde" },
      { word: "eres", base: "ser" },
      { word: "?" },
    ],
    english: "Where are you from?",
  },
  {
    id: 58,
    spanish: [
      { word: "Soy", base: "ser" },
      { word: "de" },
      { word: "México" },
    ],
    english: "I am from Mexico.",
  },
  {
    id: 59,
    spanish: [
      { word: "¿Hablas", base: "hablar" },
      { word: "inglés" },
      { word: "?" },
    ],
    english: "Do you speak English?",
  },
  {
    id: 60,
    spanish: [
      { word: "Hablo", base: "hablar" },
      { word: "un" },
      { word: "poco" },
      { word: "de" },
      { word: "español" },
    ],
    english: "I speak a little Spanish.",
  },
  {
    id: 61,
    spanish: [
      { word: "Buenos" },
      { word: "días" },
      { word: "señor" },
    ],
    english: "Good morning, sir.",
  },
  {
    id: 62,
    spanish: [
      { word: "Buenas" },
      { word: "tardes" },
    ],
    english: "Good afternoon.",
  },
  {
    id: 63,
    spanish: [
      { word: "Buenas" },
      { word: "noches" },
    ],
    english: "Good evening.",
  },
  {
    id: 64,
    spanish: [
      { word: "¿Cómo" },
      { word: "estás", base: "estar" },
      { word: "?" },
    ],
    english: "How are you?",
  },
  {
    id: 65,
    spanish: [
      { word: "Estoy", base: "estar" },
      { word: "muy" },
      { word: "bien" },
      { word: "gracias" },
    ],
    english: "I am very well, thank you.",
  },
  {
    id: 66,
    spanish: [
      { word: "¿Cuánto" },
      { word: "cuesta", base: "costar" },
      { word: "esto" },
      { word: "?" },
    ],
    english: "How much does this cost?",
  },
  {
    id: 67,
    spanish: [
      { word: "Cuesta", base: "costar" },
      { word: "cinco" },
      { word: "euros" },
    ],
    english: "It costs five euros.",
  },
  {
    id: 68,
    spanish: [
      { word: "Yo" },
      { word: "entiendo", base: "entender" },
      { word: "un" },
      { word: "poco" },
    ],
    english: "I understand a little.",
  },
  {
    id: 69,
    spanish: [
      { word: "No" },
      { word: "entiendo", base: "entender" },
      { word: "la" },
      { word: "pregunta" },
    ],
    english: "I don't understand the question.",
  },
  {
    id: 70,
    spanish: [
      { word: "¿Puede", base: "poder" },
      { word: "repetir", base: "repetir" },
      { word: "por" },
      { word: "favor" },
      { word: "?" },
    ],
    english: "Can you repeat, please?",
  },
  {
    id: 71,
    spanish: [
      { word: "El" },
      { word: "hotel" },
      { word: "está", base: "estar" },
      { word: "cerca" },
    ],
    english: "The hotel is nearby.",
  },
  {
    id: 72,
    spanish: [
      { word: "La" },
      { word: "tienda" },
      { word: "está", base: "estar" },
      { word: "lejos" },
    ],
    english: "The store is far away.",
  },
  {
    id: 73,
    spanish: [
      { word: "Gira", base: "girar" },
      { word: "a" },
      { word: "la" },
      { word: "izquierda" },
    ],
    english: "Turn left.",
  },
  {
    id: 74,
    spanish: [
      { word: "Sigue", base: "seguir" },
      { word: "recto" },
    ],
    english: "Go straight ahead.",
  },
  {
    id: 75,
    spanish: [
      { word: "Tomo", base: "tomar" },
      { word: "el" },
      { word: "autobús" },
      { word: "al" },
      { word: "centro" },
    ],
    english: "I take the bus downtown.",
  },
  {
    id: 76,
    spanish: [
      { word: "El" },
      { word: "avión" },
      { word: "sale", base: "salir" },
      { word: "a" },
      { word: "las" },
      { word: "diez" },
    ],
    english: "The plane leaves at ten.",
  },
  {
    id: 77,
    spanish: [
      { word: "Necesito", base: "necesitar" },
      { word: "un" },
      { word: "taxi" },
    ],
    english: "I need a taxi.",
  },
  {
    id: 78,
    spanish: [
      { word: "¿Hay" },
      { word: "una" },
      { word: "farmacia" },
      { word: "cerca" },
      { word: "?" },
    ],
    english: "Is there a pharmacy nearby?",
  },
  {
    id: 79,
    spanish: [
      { word: "Quiero", base: "querer" },
      { word: "una" },
      { word: "habitación" },
      { word: "doble" },
    ],
    english: "I want a double room.",
  },
  {
    id: 80,
    spanish: [
      { word: "El" },
      { word: "desayuno" },
      { word: "está", base: "estar" },
      { word: "incluido" },
    ],
    english: "Breakfast is included.",
  },
  {
    id: 81,
    spanish: [
      { word: "Tengo", base: "tener" },
      { word: "una" },
      { word: "reserva" },
    ],
    english: "I have a reservation.",
  },
  {
    id: 82,
    spanish: [
      { word: "¿A" },
      { word: "qué" },
      { word: "hora" },
      { word: "abre", base: "abrir" },
      { word: "el" },
      { word: "restaurante" },
      { word: "?" },
    ],
    english: "What time does the restaurant open?",
  },
  {
    id: 83,
    spanish: [
      { word: "Abre", base: "abrir" },
      { word: "a" },
      { word: "las" },
      { word: "ocho" },
    ],
    english: "It opens at eight.",
  },
  {
    id: 84,
    spanish: [
      { word: "Quiero", base: "querer" },
      { word: "pedir", base: "pedir" },
      { word: "la" },
      { word: "cuenta" },
    ],
    english: "I want to ask for the bill.",
  },
  {
    id: 85,
    spanish: [
      { word: "¿Puedo", base: "poder" },
      { word: "ver", base: "ver" },
      { word: "la" },
      { word: "carta" },
      { word: "?" },
    ],
    english: "Can I see the menu?",
  },
  {
    id: 86,
    spanish: [
      { word: "Para" },
      { word: "mí" },
      { word: "la" },
      { word: "sopa" },
    ],
    english: "For me, the soup.",
  },
  {
    id: 87,
    spanish: [
      { word: "Yo" },
      { word: "prefiero", base: "preferir" },
      { word: "el" },
      { word: "pollo" },
    ],
    english: "I prefer the chicken.",
  },
  {
    id: 88,
    spanish: [
      { word: "La" },
      { word: "comida" },
      { word: "está", base: "estar" },
      { word: "deliciosa" },
    ],
    english: "The food is delicious.",
  },
  {
    id: 89,
    spanish: [
      { word: "No" },
      { word: "como", base: "comer" },
      { word: "carne" },
    ],
    english: "I don't eat meat.",
  },
  {
    id: 90,
    spanish: [
      { word: "Soy", base: "ser" },
      { word: "alérgico" },
      { word: "al" },
      { word: "gluten" },
    ],
    english: "I am allergic to gluten.",
  },
  {
    id: 91,
    spanish: [
      { word: "El" },
      { word: "niño" },
      { word: "tiene", base: "tener" },
      { word: "cinco" },
      { word: "años" },
    ],
    english: "The boy is five years old.",
  },
  {
    id: 92,
    spanish: [
      { word: "Mi" },
      { word: "padre" },
      { word: "trabaja", base: "trabajar" },
      { word: "en" },
      { word: "una" },
      { word: "oficina" },
    ],
    english: "My father works in an office.",
  },
  {
    id: 93,
    spanish: [
      { word: "Mi" },
      { word: "hermana" },
      { word: "es", base: "ser" },
      { word: "profesora" },
    ],
    english: "My sister is a teacher.",
  },
  {
    id: 94,
    spanish: [
      { word: "Tenemos", base: "tener" },
      { word: "dos" },
      { word: "gatos" },
    ],
    english: "We have two cats.",
  },
  {
    id: 95,
    spanish: [
      { word: "El" },
      { word: "perro" },
      { word: "corre", base: "correr" },
      { word: "rápido" },
    ],
    english: "The dog runs fast.",
  },
  {
    id: 96,
    spanish: [
      { word: "¿Cuál" },
      { word: "es", base: "ser" },
      { word: "tu" },
      { word: "número" },
      { word: "de" },
      { word: "teléfono" },
      { word: "?" },
    ],
    english: "What is your phone number?",
  },
  {
    id: 97,
    spanish: [
      { word: "Mi" },
      { word: "número" },
      { word: "es" },
      { word: "uno" },
      { word: "dos" },
      { word: "tres" },
    ],
    english: "My number is one two three.",
  },
  {
    id: 98,
    spanish: [
      { word: "¿Cuál" },
      { word: "es", base: "ser" },
      { word: "tu" },
      { word: "correo" },
      { word: "electrónico" },
      { word: "?" },
    ],
    english: "What is your email address?",
  },
  {
    id: 99,
    spanish: [
      { word: "Llevo", base: "llevar" },
      { word: "una" },
      { word: "camisa" },
      { word: "roja" },
    ],
    english: "I wear a red shirt.",
  },
  {
    id: 100,
    spanish: [
      { word: "Hace", base: "hacer" },
      { word: "mucho" },
      { word: "calor" },
      { word: "hoy" },
    ],
    english: "It is very hot today.",
  },
  {
    id: 101,
    spanish: [
      { word: "Llueve", base: "llover" },
      { word: "mucho" },
      { word: "en" },
      { word: "invierno" },
    ],
    english: "It rains a lot in winter.",
  },
  {
    id: 102,
    spanish: [
      { word: "Nieva", base: "nevar" },
      { word: "en" },
      { word: "diciembre" },
    ],
    english: "It snows in December.",
  },
  {
    id: 103,
    spanish: [
      { word: "Hace", base: "hacer" },
      { word: "frío" },
      { word: "en" },
      { word: "enero" },
    ],
    english: "It is cold in January.",
  },
  {
    id: 104,
    spanish: [
      { word: "El" },
      { word: "sol" },
      { word: "brilla", base: "brillar" },
      { word: "hoy" },
    ],
    english: "The sun shines today.",
  },
  {
    id: 105,
    spanish: [
      { word: "Voy", base: "ir" },
      { word: "a" },
      { word: "la" },
      { word: "playa" },
      { word: "el" },
      { word: "sábado" },
    ],
    english: "I go to the beach on Saturday.",
  },
  {
    id: 106,
    spanish: [
      { word: "El" },
      { word: "domingo" },
      { word: "descanso", base: "descansar" },
    ],
    english: "On Sunday I rest.",
  },
  {
    id: 107,
    spanish: [
      { word: "Esta" },
      { word: "semana" },
      { word: "estoy", base: "estar" },
      { word: "muy" },
      { word: "ocupado" },
    ],
    english: "This week I am very busy.",
  },
  {
    id: 108,
    spanish: [
      { word: "Ayer" },
      { word: "fui", base: "ir" },
      { word: "al" },
      { word: "mercado" },
    ],
    english: "Yesterday I went to the market.",
  },
  {
    id: 109,
    spanish: [
      { word: "Mañana" },
      { word: "tengo", base: "tener" },
      { word: "clase" },
    ],
    english: "Tomorrow I have class.",
  },
  {
    id: 110,
    spanish: [
      { word: "El" },
      { word: "año" },
      { word: "pasado" },
      { word: "viajé", base: "viajar" },
      { word: "a" },
      { word: "España" },
    ],
    english: "Last year I traveled to Spain.",
  },
  {
    id: 111,
    spanish: [
      { word: "Quiero", base: "querer" },
      { word: "aprender", base: "aprender" },
      { word: "a" },
      { word: "cocinar" },
    ],
    english: "I want to learn to cook.",
  },
  {
    id: 112,
    spanish: [
      { word: "Ella" },
      { word: "sabe", base: "saber" },
      { word: "tocar", base: "tocar" },
      { word: "la" },
      { word: "guitarra" },
    ],
    english: "She knows how to play the guitar.",
  },
  {
    id: 113,
    spanish: [
      { word: "¿Puedes", base: "poder" },
      { word: "ayudarme", base: "ayudar" },
      { word: "?" },
    ],
    english: "Can you help me?",
  },
  {
    id: 114,
    spanish: [
      { word: "Por" },
      { word: "supuesto" },
      { word: "con" },
      { word: "mucho" },
      { word: "gusto" },
    ],
    english: "Of course, with pleasure.",
  },
  {
    id: 115,
    spanish: [
      { word: "Muchas" },
      { word: "gracias" },
    ],
    english: "Thank you very much.",
  },
  {
    id: 116,
    spanish: [
      { word: "De" },
      { word: "nada" },
    ],
    english: "You're welcome.",
  },
  {
    id: 117,
    spanish: [
      { word: "Lo" },
      { word: "siento" },
      { word: "mucho" },
    ],
    english: "I am very sorry.",
  },
  {
    id: 118,
    spanish: [
      { word: "No" },
      { word: "hay" },
      { word: "problema" },
    ],
    english: "No problem.",
  },
  {
    id: 119,
    spanish: [
      { word: "¡Bienvenido" },
      { word: "a" },
      { word: "España" },
      { word: "!" },
    ],
    english: "Welcome to Spain!",
  },
  {
    id: 120,
    spanish: [
      { word: "Hasta" },
      { word: "mañana" },
    ],
    english: "See you tomorrow.",
  },
  {
    id: 121,
    spanish: [
      { word: "Hasta" },
      { word: "luego" },
    ],
    english: "See you later.",
  },
  {
    id: 122,
    spanish: [
      { word: "El" },
      { word: "libro" },
      { word: "está", base: "estar" },
      { word: "en" },
      { word: "la" },
      { word: "mesa" },
    ],
    english: "The book is on the table.",
  },
  {
    id: 123,
    spanish: [
      { word: "Las" },
      { word: "llaves" },
      { word: "están", base: "estar" },
      { word: "en" },
      { word: "el" },
      { word: "bolsillo" },
    ],
    english: "The keys are in the pocket.",
  },
  {
    id: 124,
    spanish: [
      { word: "Pongo", base: "poner" },
      { word: "los" },
      { word: "platos" },
      { word: "en" },
      { word: "la" },
      { word: "mesa" },
    ],
    english: "I put the plates on the table.",
  },
  {
    id: 125,
    spanish: [
      { word: "¿Qué" },
      { word: "hora" },
      { word: "es", base: "ser" },
      { word: "?" },
    ],
    english: "What time is it?",
  },
  {
    id: 126,
    spanish: [
      { word: "Son", base: "ser" },
      { word: "las" },
      { word: "tres" },
      { word: "y" },
      { word: "media" },
    ],
    english: "It is half past three.",
  },
  {
    id: 127,
    spanish: [
      { word: "¿Qué" },
      { word: "día" },
      { word: "es", base: "ser" },
      { word: "hoy" },
      { word: "?" },
    ],
    english: "What day is today?",
  },
  {
    id: 128,
    spanish: [
      { word: "Hoy" },
      { word: "es", base: "ser" },
      { word: "martes" },
    ],
    english: "Today is Tuesday.",
  },
  {
    id: 129,
    spanish: [
      { word: "La" },
      { word: "reunión" },
      { word: "empieza", base: "empezar" },
      { word: "a" },
      { word: "las" },
      { word: "nueve" },
    ],
    english: "The meeting starts at nine.",
  },
  {
    id: 130,
    spanish: [
      { word: "El" },
      { word: "tren" },
      { word: "sale", base: "salir" },
      { word: "en" },
      { word: "cinco" },
      { word: "minutos" },
    ],
    english: "The train leaves in five minutes.",
  },
];

export default phrases;

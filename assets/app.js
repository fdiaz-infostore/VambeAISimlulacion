const chat = document.getElementById('chat');
const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');

const quickReplies = [
  'Puedo ayudarte a clasificar este lead por intención de compra.',
  'Te recomiendo enviar una secuencia de seguimiento de 3 mensajes.',
  'Según la consulta, este cliente está en etapa de consideración.',
  '¿Quieres que genere una respuesta comercial más persuasiva?'
];

function addMessage(text, role = 'bot') {
  const el = document.createElement('div');
  el.className = `message ${role}`;
  el.textContent = text;
  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight;
}

addMessage('Hola, soy Vambe.AI Demo. ¿Cómo te ayudo con tus ventas hoy?');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  addMessage(value, 'user');
  input.value = '';

  setTimeout(() => {
    const random = quickReplies[Math.floor(Math.random() * quickReplies.length)];
    addMessage(random, 'bot');
  }, 500);
});

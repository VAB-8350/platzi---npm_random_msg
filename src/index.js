const randomMsg = () => {
  const messages = [
    'Oscar',
    'Ana',
    'Andres',
    'Yesica',
    'Diego',
    'Laura',
    'carolina',
    'paulina'
  ];
  const resp = messages[Math.floor(Math.random() * messages.length)];
  console.log(resp);
}

module.exports = { randomMsg };